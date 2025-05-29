(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var KA={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function nv(){if(nm)return Io;nm=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var im;function iv(){return im||(im=1,KA.exports=nv()),KA.exports}var Ve=iv(),JA={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function av(){if(am)return se;am=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),E=Symbol.iterator;function _(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,I={};function v(w,Z,dt){this.props=w,this.context=Z,this.refs=I,this.updater=dt||C}v.prototype.isReactComponent={},v.prototype.setState=function(w,Z){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Z,"setState")},v.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function m(){}m.prototype=v.prototype;function Q(w,Z,dt){this.props=w,this.context=Z,this.refs=I,this.updater=dt||C}var D=Q.prototype=new m;D.constructor=Q,y(D,v.prototype),D.isPureReactComponent=!0;var b=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function F(w,Z,dt,vt,J,pt){return dt=pt.ref,{$$typeof:o,type:w,key:Z,ref:dt!==void 0?dt:null,props:pt}}function V(w,Z){return F(w.type,Z,void 0,void 0,void 0,w.props)}function R(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function T(w){var Z={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(dt){return Z[dt]})}var G=/\/+/g;function tt(w,Z){return typeof w=="object"&&w!==null&&w.key!=null?T(""+w.key):Z.toString(36)}function et(){}function ut(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(et,et):(w.status="pending",w.then(function(Z){w.status==="pending"&&(w.status="fulfilled",w.value=Z)},function(Z){w.status==="pending"&&(w.status="rejected",w.reason=Z)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function lt(w,Z,dt,vt,J){var pt=typeof w;(pt==="undefined"||pt==="boolean")&&(w=null);var Ct=!1;if(w===null)Ct=!0;else switch(pt){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(w.$$typeof){case o:case t:Ct=!0;break;case g:return Ct=w._init,lt(Ct(w._payload),Z,dt,vt,J)}}if(Ct)return J=J(w),Ct=vt===""?"."+tt(w,0):vt,b(J)?(dt="",Ct!=null&&(dt=Ct.replace(G,"$&/")+"/"),lt(J,Z,dt,"",function(ae){return ae})):J!=null&&(R(J)&&(J=V(J,dt+(J.key==null||w&&w.key===J.key?"":(""+J.key).replace(G,"$&/")+"/")+Ct)),Z.push(J)),1;Ct=0;var Mt=vt===""?".":vt+":";if(b(w))for(var Tt=0;Tt<w.length;Tt++)vt=w[Tt],pt=Mt+tt(vt,Tt),Ct+=lt(vt,Z,dt,pt,J);else if(Tt=_(w),typeof Tt=="function")for(w=Tt.call(w),Tt=0;!(vt=w.next()).done;)vt=vt.value,pt=Mt+tt(vt,Tt++),Ct+=lt(vt,Z,dt,pt,J);else if(pt==="object"){if(typeof w.then=="function")return lt(ut(w),Z,dt,vt,J);throw Z=String(w),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function L(w,Z,dt){if(w==null)return w;var vt=[],J=0;return lt(w,vt,"","",function(pt){return Z.call(dt,pt,J++)}),vt}function q(w){if(w._status===-1){var Z=w._result;Z=Z(),Z.then(function(dt){(w._status===0||w._status===-1)&&(w._status=1,w._result=dt)},function(dt){(w._status===0||w._status===-1)&&(w._status=2,w._result=dt)}),w._status===-1&&(w._status=0,w._result=Z)}if(w._status===1)return w._result.default;throw w._result}var k=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function _t(){}return se.Children={map:L,forEach:function(w,Z,dt){L(w,function(){Z.apply(this,arguments)},dt)},count:function(w){var Z=0;return L(w,function(){Z++}),Z},toArray:function(w){return L(w,function(Z){return Z})||[]},only:function(w){if(!R(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=Q,se.StrictMode=r,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,se.__COMPILER_RUNTIME={__proto__:null,c:function(w){return P.H.useMemoCache(w)}},se.cache=function(w){return function(){return w.apply(null,arguments)}},se.cloneElement=function(w,Z,dt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var vt=y({},w.props),J=w.key,pt=void 0;if(Z!=null)for(Ct in Z.ref!==void 0&&(pt=void 0),Z.key!==void 0&&(J=""+Z.key),Z)!O.call(Z,Ct)||Ct==="key"||Ct==="__self"||Ct==="__source"||Ct==="ref"&&Z.ref===void 0||(vt[Ct]=Z[Ct]);var Ct=arguments.length-2;if(Ct===1)vt.children=dt;else if(1<Ct){for(var Mt=Array(Ct),Tt=0;Tt<Ct;Tt++)Mt[Tt]=arguments[Tt+2];vt.children=Mt}return F(w.type,J,void 0,void 0,pt,vt)},se.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},se.createElement=function(w,Z,dt){var vt,J={},pt=null;if(Z!=null)for(vt in Z.key!==void 0&&(pt=""+Z.key),Z)O.call(Z,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(J[vt]=Z[vt]);var Ct=arguments.length-2;if(Ct===1)J.children=dt;else if(1<Ct){for(var Mt=Array(Ct),Tt=0;Tt<Ct;Tt++)Mt[Tt]=arguments[Tt+2];J.children=Mt}if(w&&w.defaultProps)for(vt in Ct=w.defaultProps,Ct)J[vt]===void 0&&(J[vt]=Ct[vt]);return F(w,pt,void 0,void 0,null,J)},se.createRef=function(){return{current:null}},se.forwardRef=function(w){return{$$typeof:h,render:w}},se.isValidElement=R,se.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:q}},se.memo=function(w,Z){return{$$typeof:d,type:w,compare:Z===void 0?null:Z}},se.startTransition=function(w){var Z=P.T,dt={};P.T=dt;try{var vt=w(),J=P.S;J!==null&&J(dt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(_t,k)}catch(pt){k(pt)}finally{P.T=Z}},se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},se.use=function(w){return P.H.use(w)},se.useActionState=function(w,Z,dt){return P.H.useActionState(w,Z,dt)},se.useCallback=function(w,Z){return P.H.useCallback(w,Z)},se.useContext=function(w){return P.H.useContext(w)},se.useDebugValue=function(){},se.useDeferredValue=function(w,Z){return P.H.useDeferredValue(w,Z)},se.useEffect=function(w,Z,dt){var vt=P.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(w,Z)},se.useId=function(){return P.H.useId()},se.useImperativeHandle=function(w,Z,dt){return P.H.useImperativeHandle(w,Z,dt)},se.useInsertionEffect=function(w,Z){return P.H.useInsertionEffect(w,Z)},se.useLayoutEffect=function(w,Z){return P.H.useLayoutEffect(w,Z)},se.useMemo=function(w,Z){return P.H.useMemo(w,Z)},se.useOptimistic=function(w,Z){return P.H.useOptimistic(w,Z)},se.useReducer=function(w,Z,dt){return P.H.useReducer(w,Z,dt)},se.useRef=function(w){return P.H.useRef(w)},se.useState=function(w){return P.H.useState(w)},se.useSyncExternalStore=function(w,Z,dt){return P.H.useSyncExternalStore(w,Z,dt)},se.useTransition=function(){return P.H.useTransition()},se.version="19.1.0",se}var rm;function mh(){return rm||(rm=1,JA.exports=av()),JA.exports}var Be=mh(),ZA={exports:{}},Bo={},jA={exports:{}},$A={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function rv(){return sm||(sm=1,function(o){function t(L,q){var k=L.length;L.push(q);t:for(;0<k;){var _t=k-1>>>1,w=L[_t];if(0<l(w,q))L[_t]=q,L[k]=w,k=_t;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var q=L[0],k=L.pop();if(k!==q){L[0]=k;t:for(var _t=0,w=L.length,Z=w>>>1;_t<Z;){var dt=2*(_t+1)-1,vt=L[dt],J=dt+1,pt=L[J];if(0>l(vt,k))J<w&&0>l(pt,vt)?(L[_t]=pt,L[J]=k,_t=J):(L[_t]=vt,L[dt]=k,_t=dt);else if(J<w&&0>l(pt,k))L[_t]=pt,L[J]=k,_t=J;else break t}}return q}function l(L,q){var k=L.sortIndex-q.sortIndex;return k!==0?k:L.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();o.unstable_now=function(){return f.now()-h}}var p=[],d=[],g=1,E=null,_=3,C=!1,y=!1,I=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function b(L){for(var q=i(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=L)r(d),q.sortIndex=q.expirationTime,t(p,q);else break;q=i(d)}}function P(L){if(I=!1,b(L),!y)if(i(p)!==null)y=!0,O||(O=!0,tt());else{var q=i(d);q!==null&&lt(P,q.startTime-L)}}var O=!1,F=-1,V=5,R=-1;function T(){return v?!0:!(o.unstable_now()-R<V)}function G(){if(v=!1,O){var L=o.unstable_now();R=L;var q=!0;try{t:{y=!1,I&&(I=!1,Q(F),F=-1),C=!0;var k=_;try{e:{for(b(L),E=i(p);E!==null&&!(E.expirationTime>L&&T());){var _t=E.callback;if(typeof _t=="function"){E.callback=null,_=E.priorityLevel;var w=_t(E.expirationTime<=L);if(L=o.unstable_now(),typeof w=="function"){E.callback=w,b(L),q=!0;break e}E===i(p)&&r(p),b(L)}else r(p);E=i(p)}if(E!==null)q=!0;else{var Z=i(d);Z!==null&&lt(P,Z.startTime-L),q=!1}}break t}finally{E=null,_=k,C=!1}q=void 0}}finally{q?tt():O=!1}}}var tt;if(typeof D=="function")tt=function(){D(G)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ut=et.port2;et.port1.onmessage=G,tt=function(){ut.postMessage(null)}}else tt=function(){m(G,0)};function lt(L,q){F=m(function(){L(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(L){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var k=_;_=q;try{return L()}finally{_=k}},o.unstable_requestPaint=function(){v=!0},o.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var k=_;_=L;try{return q()}finally{_=k}},o.unstable_scheduleCallback=function(L,q,k){var _t=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?_t+k:_t):k=_t,L){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=k+w,L={id:g++,callback:q,priorityLevel:L,startTime:k,expirationTime:w,sortIndex:-1},k>_t?(L.sortIndex=k,t(d,L),i(p)===null&&L===i(d)&&(I?(Q(F),F=-1):I=!0,lt(P,k-_t))):(L.sortIndex=w,t(p,L),y||C||(y=!0,O||(O=!0,tt()))),L},o.unstable_shouldYield=T,o.unstable_wrapCallback=function(L){var q=_;return function(){var k=_;_=q;try{return L.apply(this,arguments)}finally{_=k}}}}($A)),$A}var om;function sv(){return om||(om=1,jA.exports=rv()),jA.exports}var tf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function ov(){if(lm)return bn;lm=1;var o=mh();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,d,g){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:""+E,children:p,containerInfo:d,implementation:g}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,g)},bn.flushSync=function(p){var d=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=d,r.p=g,r.d.f()}},bn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},bn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},bn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,E=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,C=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:E,integrity:_,fetchPriority:C}):g==="script"&&r.d.X(p,{crossOrigin:E,integrity:_,fetchPriority:C,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},bn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},bn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,E=h(g,d.crossOrigin);r.d.L(p,g,{crossOrigin:E,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},bn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},bn.requestFormReset=function(p){r.d.r(p)},bn.unstable_batchedUpdates=function(p,d){return p(d)},bn.useFormState=function(p,d,g){return f.H.useFormState(p,d,g)},bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},bn.version="19.1.0",bn}var cm;function lv(){if(cm)return tf.exports;cm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),tf.exports=ov(),tf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function cv(){if(um)return Bo;um=1;var o=sv(),t=mh(),i=lv();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var A=c.alternate;if(A===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===A.child){for(A=c.child;A;){if(A===a)return h(c),e;if(A===s)return h(c),n;A=A.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=A;else{for(var S=!1,x=c.child;x;){if(x===a){S=!0,a=c,s=A;break}if(x===s){S=!0,s=c,a=A;break}x=x.sibling}if(!S){for(x=A.child;x;){if(x===a){S=!0,a=A,s=c;break}if(x===s){S=!0,s=A,a=c;break}x=x.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,E=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),D=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case v:return"Profiler";case I:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case D:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case b:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var lt=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},_t=[],w=-1;function Z(e){return{current:e}}function dt(e){0>w||(e.current=_t[w],_t[w]=null,w--)}function vt(e,n){w++,_t[w]=e.current,e.current=n}var J=Z(null),pt=Z(null),Ct=Z(null),Mt=Z(null);function Tt(e,n){switch(vt(Ct,n),vt(pt,e),vt(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rg(n),e=Dg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(J),vt(J,e)}function ae(){dt(J),dt(pt),dt(Ct)}function Xt(e){e.memoizedState!==null&&vt(Mt,e);var n=J.current,a=Dg(n,e.type);n!==a&&(vt(pt,e),vt(J,a))}function re(e){pt.current===e&&(dt(J),dt(pt)),Mt.current===e&&(dt(Mt),Co._currentValue=k)}var fe=Object.prototype.hasOwnProperty,ie=o.unstable_scheduleCallback,H=o.unstable_cancelCallback,vn=o.unstable_shouldYield,ge=o.unstable_requestPaint,ee=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,Re=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,U=o.unstable_NormalPriority,M=o.unstable_LowPriority,nt=o.unstable_IdlePriority,gt=o.log,St=o.unstable_setDisableYieldValue,ft=null,Ut=null;function It(e){if(typeof gt=="function"&&St(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(ft,e)}catch{}}var Pt=Math.clz32?Math.clz32:Ft,Zt=Math.log,xt=Math.LN2;function Ft(e){return e>>>=0,e===0?32:31-(Zt(e)/xt|0)|0}var Yt=256,Kt=4194304;function Qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ce(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,A=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var x=s&134217727;return x!==0?(s=x&~A,s!==0?c=Qt(s):(S&=x,S!==0?c=Qt(S):a||(a=x&~e,a!==0&&(c=Qt(a))))):(x=s&~A,x!==0?c=Qt(x):S!==0?c=Qt(S):a||(a=s&~e,a!==0&&(c=Qt(a)))),c===0?0:n!==0&&n!==c&&(n&A)===0&&(A=c&-c,a=n&-n,A>=a||A===32&&(a&4194048)!==0)?n:c}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function De(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),e}function Dt(){var e=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),e}function ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function mt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lt(e,n,a,s,c,A){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var x=e.entanglements,N=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var At=31-Pt(a),Et=1<<At;x[At]=0,N[At]=-1;var it=$[At];if(it!==null)for($[At]=null,At=0;At<it.length;At++){var at=it[At];at!==null&&(at.lane&=-536870913)}a&=~Et}s!==0&&wt(e,s,0),A!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=A&~(S&~n))}function wt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function ne(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Ge(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $e(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Se(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function Yn(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var fn=Math.random().toString(36).slice(2),sn="__reactFiber$"+fn,Cn="__reactProps$"+fn,Pn="__reactContainer$"+fn,Ja="__reactEvents$"+fn,tl="__reactListeners$"+fn,el="__reactHandles$"+fn,Za="__reactResources$"+fn,Aa="__reactMarker$"+fn;function fa(e){delete e[sn],delete e[Cn],delete e[Ja],delete e[tl],delete e[el]}function Qi(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Lg(e);e!==null;){if(a=e[sn])return a;e=Lg(e)}return n}e=a,a=e.parentNode}return null}function Li(e){if(e=e[sn]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ha(e){var n=e[Za];return n||(n=e[Za]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[Aa]=!0}var nl=new Set,il={};function Ni(e,n){B(e,n),B(e+"Capture",n)}function B(e,n){for(il[e]=n,e=0;e<n.length;e++)nl.add(n[e])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function K(e){return fe.call(st,e)?!0:fe.call(rt,e)?!1:W.test(e)?st[e]=!0:(rt[e]=!0,!1)}function yt(e,n,a){if(K(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Bt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function bt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Nt,jt;function kt(e){if(Nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Nt=n&&n[1]||"",jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+jt}var zt=!1;function he(e,n){if(!e||zt)return"";zt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(at){var it=at}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(at){it=at}e.call(Et.prototype)}}else{try{throw Error()}catch(at){it=at}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var A=s.DetermineComponentFrameRoot(),S=A[0],x=A[1];if(S&&x){var N=S.split(`
`),$=x.split(`
`);for(c=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===N.length||c===$.length)for(s=N.length-1,c=$.length-1;1<=s&&0<=c&&N[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(N[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||N[s]!==$[c]){var At=`
`+N[s].replace(" at new "," at ");return e.displayName&&At.includes("<anonymous>")&&(At=At.replace("<anonymous>",e.displayName)),At}while(1<=s&&0<=c);break}}}finally{zt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?kt(a):""}function ye(e){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return kt("Activity");default:return""}}function qe(e){try{var n="";do n+=ye(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(e){var n=Ee(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,A=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,A.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){e._valueTracker||(e._valueTracker=qt(e))}function Ce(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ee(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function In(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var da=/[\n"\\]/g;function He(e){return e.replace(da,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(e,n,a,s,c,A,S,x){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Bn(e,S,me(n)):a!=null?Bn(e,S,me(a)):s!=null&&e.removeAttribute("value"),c==null&&A!=null&&(e.defaultChecked=!!A),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+me(x):e.removeAttribute("name")}function Fe(e,n,a,s,c,A,S,x){if(A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(e.type=A),n!=null||a!=null){if(!(A!=="submit"&&A!=="reset"||n!=null))return;a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,x||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=x?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Bn(e,n,a){n==="number"&&In(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function hn(e,n,a){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+me(a):""}function Sn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=me(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function yi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Dh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Rh(e,c,s)}else for(var A in n)n.hasOwnProperty(A)&&Rh(e,A,n[A])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return e_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Kc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,wr=null;function wh(e){var n=Li(e);if(n&&(e=n.stateNode)){var a=e[Cn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+He(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Cn]||null;if(!c)throw Error(r(90));Fi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ce(s)}break t;case"textarea":hn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Zc=!1;function Uh(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var s=e(n);return s}finally{if(Zc=!1,(Dr!==null||wr!==null)&&(Vl(),Dr&&(n=Dr,e=wr,wr=Dr=null,wh(n),e)))for(n=0;n<e.length;n++)wh(e[n])}}function Us(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Cn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(Pi)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{jc=!1}var pa=null,$c=null,rl=null;function Qh(){if(rl)return rl;var e,n=$c,a=n.length,s,c="value"in pa?pa.value:pa.textContent,A=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[A-s];s++);return rl=c.slice(e,1<s?1-s:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function Lh(){return!1}function Gn(e){function n(a,s,c,A,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=A,this.target=S,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(a=e[x],this[x]=a?a(A):A[x]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?ol:Lh,this.isPropagationStopped=Lh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Gn($a),Ls=g({},$a,{view:0,detail:0}),n_=Gn(Ls),tu,eu,Ns,cl=g({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ns&&(Ns&&e.type==="mousemove"?(tu=e.screenX-Ns.screenX,eu=e.screenY-Ns.screenY):eu=tu=0,Ns=e),tu)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),Nh=Gn(cl),i_=g({},cl,{dataTransfer:0}),a_=Gn(i_),r_=g({},Ls,{relatedTarget:0}),nu=Gn(r_),s_=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),o_=Gn(s_),l_=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c_=Gn(l_),u_=g({},$a,{data:0}),Fh=Gn(u_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=h_[e])?!!n[e]:!1}function iu(){return d_}var p_=g({},Ls,{key:function(e){if(e.key){var n=A_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g_=Gn(p_),m_=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=Gn(m_),E_=g({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),__=Gn(E_),v_=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),C_=Gn(v_),S_=g({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y_=Gn(S_),x_=g({},$a,{newState:0,oldState:0}),M_=Gn(x_),I_=[9,13,27,32],au=Pi&&"CompositionEvent"in window,Fs=null;Pi&&"documentMode"in document&&(Fs=document.documentMode);var B_=Pi&&"TextEvent"in window&&!Fs,Ph=Pi&&(!au||Fs&&8<Fs&&11>=Fs),Gh=" ",Hh=!1;function zh(e,n){switch(e){case"keyup":return I_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function T_(e,n){switch(e){case"compositionend":return Vh(n);case"keypress":return n.which!==32?null:(Hh=!0,Gh);case"textInput":return e=n.data,e===Gh&&Hh?null:e;default:return null}}function b_(e,n){if(Ur)return e==="compositionend"||!au&&zh(e,n)?(e=Qh(),rl=$c=pa=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ph&&n.locale!=="ko"?null:n.data;default:return null}}var R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!R_[e.type]:n==="textarea"}function qh(e,n,a,s){Dr?wr?wr.push(s):wr=[s]:Dr=s,n=Kl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Os=null,Ps=null;function D_(e){Mg(e,0)}function ul(e){var n=ja(e);if(Ce(n))return e}function Xh(e,n){if(e==="change")return n}var Yh=!1;if(Pi){var ru;if(Pi){var su="oninput"in document;if(!su){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),su=typeof Wh.oninput=="function"}ru=su}else ru=!1;Yh=ru&&(!document.documentMode||9<document.documentMode)}function Kh(){Os&&(Os.detachEvent("onpropertychange",Jh),Ps=Os=null)}function Jh(e){if(e.propertyName==="value"&&ul(Ps)){var n=[];qh(n,Ps,e,Jc(e)),Uh(D_,n)}}function w_(e,n,a){e==="focusin"?(Kh(),Os=n,Ps=a,Os.attachEvent("onpropertychange",Jh)):e==="focusout"&&Kh()}function U_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Ps)}function Q_(e,n){if(e==="click")return ul(n)}function L_(e,n){if(e==="input"||e==="change")return ul(n)}function N_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:N_;function Gs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!fe.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Zh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jh(e,n){var a=Zh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zh(a)}}function $h(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$h(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function td(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=In(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=In(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var F_=Pi&&"documentMode"in document&&11>=document.documentMode,Qr=null,lu=null,Hs=null,cu=!1;function ed(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Qr==null||Qr!==In(s)||(s=Qr,"selectionStart"in s&&ou(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Hs&&Gs(Hs,s)||(Hs=s,s=Kl(lu,"onSelect"),0<s.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Qr)))}function tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},uu={},nd={};Pi&&(nd=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function er(e){if(uu[e])return uu[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in nd)return uu[e]=n[a];return e}var id=er("animationend"),ad=er("animationiteration"),rd=er("animationstart"),O_=er("transitionrun"),P_=er("transitionstart"),G_=er("transitioncancel"),sd=er("transitionend"),od=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function di(e,n){od.set(e,n),Ni(n,[e])}var ld=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=ld.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qe(n)},ld.set(e,n),n)}return{value:e,source:n,stack:qe(n)}}var si=[],Nr=0,fu=0;function Al(){for(var e=Nr,n=fu=Nr=0;n<e;){var a=si[n];si[n++]=null;var s=si[n];si[n++]=null;var c=si[n];si[n++]=null;var A=si[n];if(si[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}A!==0&&cd(a,c,A)}}function fl(e,n,a,s){si[Nr++]=e,si[Nr++]=n,si[Nr++]=a,si[Nr++]=s,fu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function hu(e,n,a,s){return fl(e,n,a,s),hl(e)}function Fr(e,n){return fl(e,null,null,n),hl(e)}function cd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,A=e.return;A!==null;)A.childLanes|=a,s=A.alternate,s!==null&&(s.childLanes|=a),A.tag===22&&(e=A.stateNode,e===null||e._visibility&1||(c=!0)),e=A,A=A.return;return e.tag===3?(A=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=A.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),A):null}function hl(e){if(50<fo)throw fo=0,_A=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function H_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,s){return new H_(e,n,a,s)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ud(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,s,c,A){var S=0;if(s=e,typeof e=="function")du(e)&&(S=1);else if(typeof e=="string")S=V0(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Kn(31,a,n,c),e.elementType=R,e.lanes=A,e;case y:return nr(a.children,c,A,n);case I:S=8,c|=24;break;case v:return e=Kn(12,a,n,c|2),e.elementType=v,e.lanes=A,e;case P:return e=Kn(13,a,n,c),e.elementType=P,e.lanes=A,e;case O:return e=Kn(19,a,n,c),e.elementType=O,e.lanes=A,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case m:case D:S=10;break t;case Q:S=9;break t;case b:S=11;break t;case F:S=14;break t;case V:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Kn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=A,n}function nr(e,n,a,s){return e=Kn(7,e,s,n),e.lanes=a,e}function pu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function gu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pr=[],Gr=0,pl=null,gl=0,oi=[],li=0,ir=null,Hi=1,zi="";function ar(e,n){Pr[Gr++]=gl,Pr[Gr++]=pl,pl=e,gl=n}function Ad(e,n,a){oi[li++]=Hi,oi[li++]=zi,oi[li++]=ir,ir=e;var s=Hi;e=zi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var A=32-Pt(n)+c;if(30<A){var S=c-c%5;A=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Hi=1<<32-Pt(n)+c|a<<c|s,zi=A+e}else Hi=1<<A|a<<c|s,zi=e}function mu(e){e.return!==null&&(ar(e,1),Ad(e,1,0))}function Eu(e){for(;e===pl;)pl=Pr[--Gr],Pr[Gr]=null,gl=Pr[--Gr],Pr[Gr]=null;for(;e===ir;)ir=oi[--li],oi[li]=null,zi=oi[--li],oi[li]=null,Hi=oi[--li],oi[li]=null}var Qn=null,We=null,Ie=!1,rr=null,xi=!1,_u=Error(r(519));function sr(e){var n=Error(r(418,""));throw ks(ri(n,e)),_u}function fd(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[Cn]=s,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)pe(po[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Fe(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ye(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Sn(n,s.value,s.defaultValue,s.children),Ye(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||bg(n.textContent,a)?(s.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),s.onScroll!=null&&pe("scroll",n),s.onScrollEnd!=null&&pe("scrollend",n),s.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||sr(e)}function hd(e){for(Qn=e.return;Qn;)switch(Qn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Qn=Qn.return}}function zs(e){if(e!==Qn)return!1;if(!Ie)return hd(e),Ie=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||LA(e.type,e.memoizedProps)),a=!a),a&&We&&sr(e),hd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){We=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}We=null}}else n===27?(n=We,Da(e.type)?(e=PA,PA=null,We=e):We=n):We=Qn?gi(e.stateNode.nextSibling):null;return!0}function Vs(){We=Qn=null,Ie=!1}function dd(){var e=rr;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),rr=null),e}function ks(e){rr===null?rr=[e]:rr.push(e)}var vu=Z(null),or=null,Vi=null;function ga(e,n,a){vt(vu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=vu.current,dt(vu)}function Cu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var A=c.dependencies;if(A!==null){var S=c.child;A=A.firstContext;t:for(;A!==null;){var x=A;A=c;for(var N=0;N<n.length;N++)if(x.context===n[N]){A.lanes|=a,x=A.alternate,x!==null&&(x.lanes|=a),Cu(A.return,a,e),s||(S=null);break t}A=x.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,A=S.alternate,A!==null&&(A.lanes|=a),Cu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function qs(e,n,a,s){e=null;for(var c=n,A=!1;c!==null;){if(!A){if((c.flags&524288)!==0)A=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var x=c.type;Wn(c.pendingProps.value,S.value)||(e!==null?e.push(x):e=[x])}}else if(c===Mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}c=c.return}e!==null&&Su(n,e,a,s),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return pd(or,e)}function El(e,n){return or===null&&lr(e),pd(e,n)}function pd(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(r(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var z_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},V_=o.unstable_scheduleCallback,k_=o.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new z_,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&V_(k_,function(){e.controller.abort()})}var Ys=null,xu=0,Hr=0,zr=null;function q_(e,n){if(Ys===null){var a=Ys=[];xu=0,Hr=IA(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xu++,n.then(gd,gd),n}function gd(){if(--xu===0&&Ys!==null){zr!==null&&(zr.status="fulfilled");var e=Ys;Ys=null,Hr=0,zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function X_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var md=L.S;L.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&q_(e,n),md!==null&&md(e,n)};var cr=Z(null);function Mu(){var e=cr.current;return e!==null?e:ze.pooledCache}function _l(e,n){n===null?vt(cr,cr.current):vt(cr,n.pool)}function Ed(){var e=Mu();return e===null?null:{parent:ln._currentValue,pool:e}}var Ws=Error(r(460)),_d=Error(r(474)),vl=Error(r(542)),Iu={then:function(){}};function vd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cl(){}function Cd(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Cl,Cl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yd(e),e;default:if(typeof n.status=="string")n.then(Cl,Cl);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yd(e),e}throw Ks=n,Ws}}var Ks=null;function Sd(){if(Ks===null)throw Error(r(459));var e=Ks;return Ks=null,e}function yd(e){if(e===Ws||e===vl)throw Error(r(483))}var ma=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Te&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=hl(e),cd(e,null,a),n}return fl(e,s,n,a),hl(e)}function Js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ne(e,a)}}function bu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,A=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};A===null?c=A=S:A=A.next=S,a=a.next}while(a!==null);A===null?c=A=n:A=A.next=n}else c=A=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:A,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ru=!1;function Zs(){if(Ru){var e=zr;if(e!==null)throw e}}function js(e,n,a,s){Ru=!1;var c=e.updateQueue;ma=!1;var A=c.firstBaseUpdate,S=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var N=x,$=N.next;N.next=null,S===null?A=$:S.next=$,S=N;var At=e.alternate;At!==null&&(At=At.updateQueue,x=At.lastBaseUpdate,x!==S&&(x===null?At.firstBaseUpdate=$:x.next=$,At.lastBaseUpdate=N))}if(A!==null){var Et=c.baseState;S=0,At=$=N=null,x=A;do{var it=x.lane&-536870913,at=it!==x.lane;if(at?(ve&it)===it:(s&it)===it){it!==0&&it===Hr&&(Ru=!0),At!==null&&(At=At.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});t:{var $t=e,Wt=x;it=n;var Qe=a;switch(Wt.tag){case 1:if($t=Wt.payload,typeof $t=="function"){Et=$t.call(Qe,Et,it);break t}Et=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=Wt.payload,it=typeof $t=="function"?$t.call(Qe,Et,it):$t,it==null)break t;Et=g({},Et,it);break t;case 2:ma=!0}}it=x.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=c.callbacks,at===null?c.callbacks=[it]:at.push(it))}else at={lane:it,tag:x.tag,payload:x.payload,callback:x.callback,next:null},At===null?($=At=at,N=Et):At=At.next=at,S|=it;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;at=x,x=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);At===null&&(N=Et),c.baseState=N,c.firstBaseUpdate=$,c.lastBaseUpdate=At,A===null&&(c.shared.lanes=0),Ba|=S,e.lanes=S,e.memoizedState=Et}}function xd(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Md(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xd(a[e],n)}var Vr=Z(null),Sl=Z(0);function Id(e,n){e=Zi,vt(Sl,e),vt(Vr,n),Zi=e|n.baseLanes}function Du(){vt(Sl,Zi),vt(Vr,Vr.current)}function wu(){Zi=Sl.current,dt(Vr),dt(Sl)}var va=0,ue=null,we=null,en=null,yl=!1,kr=!1,ur=!1,xl=0,$s=0,qr=null,Y_=0;function Je(){throw Error(r(321))}function Uu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Qu(e,n,a,s,c,A){return va=A,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?cp:up,ur=!1,A=a(s,c),ur=!1,kr&&(A=Td(n,a,s,c)),Bd(e),A}function Bd(e){L.H=Rl;var n=we!==null&&we.next!==null;if(va=0,en=we=ue=null,yl=!1,$s=0,qr=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&ml(e)&&(dn=!0))}function Td(e,n,a,s){ue=e;var c=0;do{if(kr&&(qr=null),$s=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,en=we=null,e.updateQueue!=null){var A=e.updateQueue;A.lastEffect=null,A.events=null,A.stores=null,A.memoCache!=null&&(A.memoCache.index=0)}L.H=t0,A=n(a,s)}while(kr);return A}function W_(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(ue.flags|=1024),n}function Lu(){var e=xl!==0;return xl=0,e}function Nu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yl=!1}va=0,en=we=ue=null,kr=!1,$s=xl=0,qr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=e:en=en.next=e,en}function nn(){if(we===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,we=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},en===null?ue.memoizedState=en=e:en=en.next=e}return en}function Ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(e){var n=$s;return $s+=1,qr===null&&(qr=[]),e=Cd(qr,e,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?cp:up),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===D)return Tn(e)}throw Error(r(438,String(e)))}function Pu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ou(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=T;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=nn();return Gu(n,we,e)}function Gu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,A=s.pending;if(A!==null){if(c!==null){var S=c.next;c.next=A.next,A.next=S}n.baseQueue=c=A,s.pending=null}if(A=e.baseState,c===null)e.memoizedState=A;else{n=c.next;var x=S=null,N=null,$=n,At=!1;do{var Et=$.lane&-536870913;if(Et!==$.lane?(ve&Et)===Et:(va&Et)===Et){var it=$.revertLane;if(it===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Et===Hr&&(At=!0);else if((va&it)===it){$=$.next,it===Hr&&(At=!0);continue}else Et={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},N===null?(x=N=Et,S=A):N=N.next=Et,ue.lanes|=it,Ba|=it;Et=$.action,ur&&a(A,Et),A=$.hasEagerState?$.eagerState:a(A,Et)}else it={lane:Et,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},N===null?(x=N=it,S=A):N=N.next=it,ue.lanes|=Et,Ba|=Et;$=$.next}while($!==null&&$!==n);if(N===null?S=A:N.next=x,!Wn(A,e.memoizedState)&&(dn=!0,At&&(a=zr,a!==null)))throw a;e.memoizedState=A,e.baseState=S,e.baseQueue=N,s.lastRenderedState=A}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Hu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,A=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do A=e(A,S.action),S=S.next;while(S!==c);Wn(A,n.memoizedState)||(dn=!0),n.memoizedState=A,n.baseQueue===null&&(n.baseState=A),a.lastRenderedState=A}return[A,s]}function bd(e,n,a){var s=ue,c=nn(),A=Ie;if(A){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((we||c).memoizedState,a);S&&(c.memoizedState=a,dn=!0),c=c.queue;var x=wd.bind(null,s,c,e);if(eo(2048,8,x,[e]),c.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Xr(9,Bl(),Dd.bind(null,s,c,a,n),null),ze===null)throw Error(r(349));A||(va&124)!==0||Rd(s,n,a)}return a}function Rd(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Ou(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Dd(e,n,a,s){n.value=a,n.getSnapshot=s,Ud(n)&&Qd(e)}function wd(e,n,a){return a(function(){Ud(n)&&Qd(e)})}function Ud(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Qd(e){var n=Fr(e,2);n!==null&&ti(n,e,2)}function zu(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),ur){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Ld(e,n,a,s){return e.baseState=a,Gu(e,we,typeof s=="function"?s:qi)}function K_(e,n,a,s,c){if(bl(e))throw Error(r(485));if(e=n.action,e!==null){var A={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){A.listeners.push(S)}};L.T!==null?a(!0):A.isTransition=!1,s(A),a=n.pending,a===null?(A.next=n.pending=A,Nd(n,A)):(A.next=a.next,n.pending=a.next=A)}}function Nd(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var A=L.T,S={};L.T=S;try{var x=a(c,s),N=L.S;N!==null&&N(S,x),Fd(e,n,x)}catch($){Vu(e,n,$)}finally{L.T=A}}else try{A=a(c,s),Fd(e,n,A)}catch($){Vu(e,n,$)}}function Fd(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Od(e,n,s)},function(s){return Vu(e,n,s)}):Od(e,n,a)}function Od(e,n,a){n.status="fulfilled",n.value=a,Pd(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Nd(e,a)))}function Vu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Pd(n),n=n.next;while(n!==s)}e.action=null}function Pd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Gd(e,n){return n}function Hd(e,n){if(Ie){var a=ze.formState;if(a!==null){t:{var s=ue;if(Ie){if(We){e:{for(var c=We,A=xi;c.nodeType!==8;){if(!A){c=null;break e}if(c=gi(c.nextSibling),c===null){c=null;break e}}A=c.data,c=A==="F!"||A==="F"?c:null}if(c){We=gi(c.nextSibling),s=c.data==="F!";break t}}sr(s)}s=!1}s&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gd,lastRenderedState:n},a.queue=s,a=sp.bind(null,ue,s),s.dispatch=a,s=zu(!1),A=Wu.bind(null,ue,!1,s.queue),s=Hn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=K_.bind(null,ue,c,A,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function zd(e){var n=nn();return Vd(n,we,e)}function Vd(e,n,a){if(n=Gu(e,n,Gd)[0],e=Il(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(S){throw S===Ws?vl:S}else s=n;n=nn();var c=n.queue,A=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Xr(9,Bl(),J_.bind(null,c,a),null)),[s,A,e]}function J_(e,n){e.action=n}function kd(e){var n=nn(),a=we;if(a!==null)return Vd(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Xr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Ou(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Bl(){return{destroy:void 0,resource:void 0}}function qd(){return nn().memoizedState}function Tl(e,n,a,s){var c=Hn();s=s===void 0?null:s,ue.flags|=e,c.memoizedState=Xr(1|n,Bl(),a,s)}function eo(e,n,a,s){var c=nn();s=s===void 0?null:s;var A=c.memoizedState.inst;we!==null&&s!==null&&Uu(s,we.memoizedState.deps)?c.memoizedState=Xr(n,A,a,s):(ue.flags|=e,c.memoizedState=Xr(1|n,A,a,s))}function Xd(e,n){Tl(8390656,8,e,n)}function Yd(e,n){eo(2048,8,e,n)}function Wd(e,n){return eo(4,2,e,n)}function Kd(e,n){return eo(4,4,e,n)}function Jd(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zd(e,n,a){a=a!=null?a.concat([e]):null,eo(4,4,Jd.bind(null,n,e),a)}function ku(){}function jd(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Uu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function $d(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Uu(n,s[1]))return s[0];if(s=e(),ur){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[s,n],s}function qu(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=ng(),ue.lanes|=e,Ba|=e,a)}function tp(e,n,a,s){return Wn(a,n)?a:Vr.current!==null?(e=qu(e,a,s),Wn(e,n)||(dn=!0),e):(va&42)===0?(dn=!0,e.memoizedState=a):(e=ng(),ue.lanes|=e,Ba|=e,n)}function ep(e,n,a,s,c){var A=q.p;q.p=A!==0&&8>A?A:8;var S=L.T,x={};L.T=x,Wu(e,!1,n,a);try{var N=c(),$=L.S;if($!==null&&$(x,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var At=X_(N,s);no(e,n,At,$n(e))}else no(e,n,s,$n(e))}catch(Et){no(e,n,{then:function(){},status:"rejected",reason:Et},$n())}finally{q.p=A,L.T=S}}function Z_(){}function Xu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=np(e).queue;ep(e,c,n,k,a===null?Z_:function(){return ip(e),a(s)})}function np(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ip(e){var n=np(e).next.queue;no(e,n,{},$n())}function Yu(){return Tn(Co)}function ap(){return nn().memoizedState}function rp(){return nn().memoizedState}function j_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Ea(a);var s=_a(n,e,a);s!==null&&(ti(s,n,a),Js(s,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function $_(e,n,a){var s=$n();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?op(n,a):(a=hu(e,n,a,s),a!==null&&(ti(a,e,s),lp(a,n,s)))}function sp(e,n,a){var s=$n();no(e,n,a,s)}function no(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))op(n,c);else{var A=e.alternate;if(e.lanes===0&&(A===null||A.lanes===0)&&(A=n.lastRenderedReducer,A!==null))try{var S=n.lastRenderedState,x=A(S,a);if(c.hasEagerState=!0,c.eagerState=x,Wn(x,S))return fl(e,n,c,0),ze===null&&Al(),!1}catch{}finally{}if(a=hu(e,n,c,s),a!==null)return ti(a,e,s),lp(a,n,s),!0}return!1}function Wu(e,n,a,s){if(s={lane:2,revertLane:IA(),action:s,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(r(479))}else n=hu(e,a,s,2),n!==null&&ti(n,e,2)}function bl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function op(e,n){kr=yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ne(e,a)}}var Rl={readContext:Tn,use:Ml,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},cp={readContext:Tn,use:Ml,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Xd,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,Jd.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var s=e();if(ur){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Hn();if(a!==void 0){var c=a(n);if(ur){It(!0);try{a(n)}finally{It(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=$_.bind(null,ue,e),[s.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=zu(e);var n=e.queue,a=sp.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Hn();return qu(a,e,n)},useTransition:function(){var e=zu(!1);return e=ep.bind(null,ue,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ue,c=Hn();if(Ie){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ze===null)throw Error(r(349));(ve&124)!==0||Rd(s,n,a)}c.memoizedState=a;var A={value:a,getSnapshot:n};return c.queue=A,Xd(wd.bind(null,s,A,e),[e]),s.flags|=2048,Xr(9,Bl(),Dd.bind(null,s,A,a,n),null),a},useId:function(){var e=Hn(),n=ze.identifierPrefix;if(Ie){var a=zi,s=Hi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Y_++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:Hd,useActionState:Hd,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Pu,useCacheRefresh:function(){return Hn().memoizedState=j_.bind(null,ue)}},up={readContext:Tn,use:Ml,useCallback:jd,useContext:Tn,useEffect:Yd,useImperativeHandle:Zd,useInsertionEffect:Wd,useLayoutEffect:Kd,useMemo:$d,useReducer:Il,useRef:qd,useState:function(){return Il(qi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=nn();return tp(a,we.memoizedState,e,n)},useTransition:function(){var e=Il(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:bd,useId:ap,useHostTransitionStatus:Yu,useFormState:zd,useActionState:zd,useOptimistic:function(e,n){var a=nn();return Ld(a,we,e,n)},useMemoCache:Pu,useCacheRefresh:rp},t0={readContext:Tn,use:Ml,useCallback:jd,useContext:Tn,useEffect:Yd,useImperativeHandle:Zd,useInsertionEffect:Wd,useLayoutEffect:Kd,useMemo:$d,useReducer:Hu,useRef:qd,useState:function(){return Hu(qi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=nn();return we===null?qu(a,e,n):tp(a,we.memoizedState,e,n)},useTransition:function(){var e=Hu(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:bd,useId:ap,useHostTransitionStatus:Yu,useFormState:kd,useActionState:kd,useOptimistic:function(e,n){var a=nn();return we!==null?Ld(a,we,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:rp},Yr=null,io=0;function Dl(e){var n=io;return io+=1,Yr===null&&(Yr=[]),Cd(Yr,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wl(e,n){throw n.$$typeof===E?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ap(e){var n=e._init;return n(e._payload)}function fp(e){function n(Y,z){if(e){var j=Y.deletions;j===null?(Y.deletions=[z],Y.flags|=16):j.push(z)}}function a(Y,z){if(!e)return null;for(;z!==null;)n(Y,z),z=z.sibling;return null}function s(Y){for(var z=new Map;Y!==null;)Y.key!==null?z.set(Y.key,Y):z.set(Y.index,Y),Y=Y.sibling;return z}function c(Y,z){return Y=Gi(Y,z),Y.index=0,Y.sibling=null,Y}function A(Y,z,j){return Y.index=j,e?(j=Y.alternate,j!==null?(j=j.index,j<z?(Y.flags|=67108866,z):j):(Y.flags|=67108866,z)):(Y.flags|=1048576,z)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function x(Y,z,j,ht){return z===null||z.tag!==6?(z=pu(j,Y.mode,ht),z.return=Y,z):(z=c(z,j),z.return=Y,z)}function N(Y,z,j,ht){var Ot=j.type;return Ot===y?At(Y,z,j.props.children,ht,j.key):z!==null&&(z.elementType===Ot||typeof Ot=="object"&&Ot!==null&&Ot.$$typeof===V&&Ap(Ot)===z.type)?(z=c(z,j.props),ao(z,j),z.return=Y,z):(z=dl(j.type,j.key,j.props,null,Y.mode,ht),ao(z,j),z.return=Y,z)}function $(Y,z,j,ht){return z===null||z.tag!==4||z.stateNode.containerInfo!==j.containerInfo||z.stateNode.implementation!==j.implementation?(z=gu(j,Y.mode,ht),z.return=Y,z):(z=c(z,j.children||[]),z.return=Y,z)}function At(Y,z,j,ht,Ot){return z===null||z.tag!==7?(z=nr(j,Y.mode,ht,Ot),z.return=Y,z):(z=c(z,j),z.return=Y,z)}function Et(Y,z,j){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=pu(""+z,Y.mode,j),z.return=Y,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case _:return j=dl(z.type,z.key,z.props,null,Y.mode,j),ao(j,z),j.return=Y,j;case C:return z=gu(z,Y.mode,j),z.return=Y,z;case V:var ht=z._init;return z=ht(z._payload),Et(Y,z,j)}if(lt(z)||tt(z))return z=nr(z,Y.mode,j,null),z.return=Y,z;if(typeof z.then=="function")return Et(Y,Dl(z),j);if(z.$$typeof===D)return Et(Y,El(Y,z),j);wl(Y,z)}return null}function it(Y,z,j,ht){var Ot=z!==null?z.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Ot!==null?null:x(Y,z,""+j,ht);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _:return j.key===Ot?N(Y,z,j,ht):null;case C:return j.key===Ot?$(Y,z,j,ht):null;case V:return Ot=j._init,j=Ot(j._payload),it(Y,z,j,ht)}if(lt(j)||tt(j))return Ot!==null?null:At(Y,z,j,ht,null);if(typeof j.then=="function")return it(Y,z,Dl(j),ht);if(j.$$typeof===D)return it(Y,z,El(Y,j),ht);wl(Y,j)}return null}function at(Y,z,j,ht,Ot){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(j)||null,x(z,Y,""+ht,Ot);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case _:return Y=Y.get(ht.key===null?j:ht.key)||null,N(z,Y,ht,Ot);case C:return Y=Y.get(ht.key===null?j:ht.key)||null,$(z,Y,ht,Ot);case V:var Ae=ht._init;return ht=Ae(ht._payload),at(Y,z,j,ht,Ot)}if(lt(ht)||tt(ht))return Y=Y.get(j)||null,At(z,Y,ht,Ot,null);if(typeof ht.then=="function")return at(Y,z,j,Dl(ht),Ot);if(ht.$$typeof===D)return at(Y,z,j,El(z,ht),Ot);wl(z,ht)}return null}function $t(Y,z,j,ht){for(var Ot=null,Ae=null,Ht=z,Jt=z=0,gn=null;Ht!==null&&Jt<j.length;Jt++){Ht.index>Jt?(gn=Ht,Ht=null):gn=Ht.sibling;var xe=it(Y,Ht,j[Jt],ht);if(xe===null){Ht===null&&(Ht=gn);break}e&&Ht&&xe.alternate===null&&n(Y,Ht),z=A(xe,z,Jt),Ae===null?Ot=xe:Ae.sibling=xe,Ae=xe,Ht=gn}if(Jt===j.length)return a(Y,Ht),Ie&&ar(Y,Jt),Ot;if(Ht===null){for(;Jt<j.length;Jt++)Ht=Et(Y,j[Jt],ht),Ht!==null&&(z=A(Ht,z,Jt),Ae===null?Ot=Ht:Ae.sibling=Ht,Ae=Ht);return Ie&&ar(Y,Jt),Ot}for(Ht=s(Ht);Jt<j.length;Jt++)gn=at(Ht,Y,Jt,j[Jt],ht),gn!==null&&(e&&gn.alternate!==null&&Ht.delete(gn.key===null?Jt:gn.key),z=A(gn,z,Jt),Ae===null?Ot=gn:Ae.sibling=gn,Ae=gn);return e&&Ht.forEach(function(Na){return n(Y,Na)}),Ie&&ar(Y,Jt),Ot}function Wt(Y,z,j,ht){if(j==null)throw Error(r(151));for(var Ot=null,Ae=null,Ht=z,Jt=z=0,gn=null,xe=j.next();Ht!==null&&!xe.done;Jt++,xe=j.next()){Ht.index>Jt?(gn=Ht,Ht=null):gn=Ht.sibling;var Na=it(Y,Ht,xe.value,ht);if(Na===null){Ht===null&&(Ht=gn);break}e&&Ht&&Na.alternate===null&&n(Y,Ht),z=A(Na,z,Jt),Ae===null?Ot=Na:Ae.sibling=Na,Ae=Na,Ht=gn}if(xe.done)return a(Y,Ht),Ie&&ar(Y,Jt),Ot;if(Ht===null){for(;!xe.done;Jt++,xe=j.next())xe=Et(Y,xe.value,ht),xe!==null&&(z=A(xe,z,Jt),Ae===null?Ot=xe:Ae.sibling=xe,Ae=xe);return Ie&&ar(Y,Jt),Ot}for(Ht=s(Ht);!xe.done;Jt++,xe=j.next())xe=at(Ht,Y,Jt,xe.value,ht),xe!==null&&(e&&xe.alternate!==null&&Ht.delete(xe.key===null?Jt:xe.key),z=A(xe,z,Jt),Ae===null?Ot=xe:Ae.sibling=xe,Ae=xe);return e&&Ht.forEach(function(ev){return n(Y,ev)}),Ie&&ar(Y,Jt),Ot}function Qe(Y,z,j,ht){if(typeof j=="object"&&j!==null&&j.type===y&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case _:t:{for(var Ot=j.key;z!==null;){if(z.key===Ot){if(Ot=j.type,Ot===y){if(z.tag===7){a(Y,z.sibling),ht=c(z,j.props.children),ht.return=Y,Y=ht;break t}}else if(z.elementType===Ot||typeof Ot=="object"&&Ot!==null&&Ot.$$typeof===V&&Ap(Ot)===z.type){a(Y,z.sibling),ht=c(z,j.props),ao(ht,j),ht.return=Y,Y=ht;break t}a(Y,z);break}else n(Y,z);z=z.sibling}j.type===y?(ht=nr(j.props.children,Y.mode,ht,j.key),ht.return=Y,Y=ht):(ht=dl(j.type,j.key,j.props,null,Y.mode,ht),ao(ht,j),ht.return=Y,Y=ht)}return S(Y);case C:t:{for(Ot=j.key;z!==null;){if(z.key===Ot)if(z.tag===4&&z.stateNode.containerInfo===j.containerInfo&&z.stateNode.implementation===j.implementation){a(Y,z.sibling),ht=c(z,j.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,z);break}else n(Y,z);z=z.sibling}ht=gu(j,Y.mode,ht),ht.return=Y,Y=ht}return S(Y);case V:return Ot=j._init,j=Ot(j._payload),Qe(Y,z,j,ht)}if(lt(j))return $t(Y,z,j,ht);if(tt(j)){if(Ot=tt(j),typeof Ot!="function")throw Error(r(150));return j=Ot.call(j),Wt(Y,z,j,ht)}if(typeof j.then=="function")return Qe(Y,z,Dl(j),ht);if(j.$$typeof===D)return Qe(Y,z,El(Y,j),ht);wl(Y,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,z!==null&&z.tag===6?(a(Y,z.sibling),ht=c(z,j),ht.return=Y,Y=ht):(a(Y,z),ht=pu(j,Y.mode,ht),ht.return=Y,Y=ht),S(Y)):a(Y,z)}return function(Y,z,j,ht){try{io=0;var Ot=Qe(Y,z,j,ht);return Yr=null,Ot}catch(Ht){if(Ht===Ws||Ht===vl)throw Ht;var Ae=Kn(29,Ht,null,Y.mode);return Ae.lanes=ht,Ae.return=Y,Ae}finally{}}}var Wr=fp(!0),hp=fp(!1),ci=Z(null),Mi=null;function Ca(e){var n=e.alternate;vt(cn,cn.current&1),vt(ci,e),Mi===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(Mi=e)}function dp(e){if(e.tag===22){if(vt(cn,cn.current),vt(ci,e),Mi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Mi=e)}}else Sa()}function Sa(){vt(cn,cn.current),vt(ci,ci.current)}function Xi(e){dt(ci),Mi===e&&(Mi=null),dt(cn)}var cn=Z(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||OA(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ku(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=$n(),c=Ea(s);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(ti(n,e,s),Js(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=$n(),c=Ea(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(ti(n,e,s),Js(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),s=Ea(a);s.tag=2,n!=null&&(s.callback=n),n=_a(e,s,a),n!==null&&(ti(n,e,a),Js(n,e,a))}};function pp(e,n,a,s,c,A,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,A,S):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(c,A):!0}function gp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function Ar(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function mp(e){Ql(e)}function Ep(e){console.error(e)}function _p(e){Ql(e)}function Ll(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function vp(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zu(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,n)},a}function Cp(e){return e=Ea(e),e.tag=3,e}function Sp(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var A=s.value;e.payload=function(){return c(A)},e.callback=function(){vp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){vp(n,a,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function e0(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,c,!0),a=ci.current,a!==null){switch(a.tag){case 13:return Mi===null?CA():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Iu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),yA(e,s,c)),!1;case 22:return a.flags|=65536,s===Iu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),yA(e,s,c)),!1}throw Error(r(435,a.tag))}return yA(e,s,c),CA(),!1}if(Ie)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==_u&&(e=Error(r(422),{cause:s}),ks(ri(e,a)))):(s!==_u&&(n=Error(r(423),{cause:s}),ks(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ri(s,a),c=Zu(e.stateNode,s,c),bu(e,c),Ke!==4&&(Ke=2)),!1;var A=Error(r(520),{cause:s});if(A=ri(A,a),Ao===null?Ao=[A]:Ao.push(A),Ke!==4&&(Ke=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Zu(a.stateNode,s,e),bu(a,e),!1;case 1:if(n=a.type,A=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Ta===null||!Ta.has(A))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Cp(c),Sp(c,e,a,s),bu(a,c),!1}a=a.return}while(a!==null);return!1}var yp=Error(r(461)),dn=!1;function yn(e,n,a,s){n.child=e===null?hp(n,null,a,s):Wr(n,e.child,a,s)}function xp(e,n,a,s,c){a=a.render;var A=n.ref;if("ref"in s){var S={};for(var x in s)x!=="ref"&&(S[x]=s[x])}else S=s;return lr(n),s=Qu(e,n,a,S,A,c),x=Lu(),e!==null&&!dn?(Nu(e,n,c),Yi(e,n,c)):(Ie&&x&&mu(n),n.flags|=1,yn(e,n,s,c),n.child)}function Mp(e,n,a,s,c){if(e===null){var A=a.type;return typeof A=="function"&&!du(A)&&A.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=A,Ip(e,n,A,s,c)):(e=dl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(A=e.child,!rA(e,c)){var S=A.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(S,s)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Gi(A,s),e.ref=n.ref,e.return=n,n.child=e}function Ip(e,n,a,s,c){if(e!==null){var A=e.memoizedProps;if(Gs(A,s)&&e.ref===n.ref)if(dn=!1,n.pendingProps=s=A,rA(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return ju(e,n,a,s,c)}function Bp(e,n,a){var s=n.pendingProps,c=s.children,A=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=A!==null?A.baseLanes|a:a,e!==null){for(c=n.child=e.child,A=0;c!==null;)A=A|c.lanes|c.childLanes,c=c.sibling;n.childLanes=A&~s}else n.childLanes=0,n.child=null;return Tp(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&_l(n,A!==null?A.cachePool:null),A!==null?Id(n,A):Du(),dp(n);else return n.lanes=n.childLanes=536870912,Tp(e,n,A!==null?A.baseLanes|a:a,a)}else A!==null?(_l(n,A.cachePool),Id(n,A),Sa(),n.memoizedState=null):(e!==null&&_l(n,null),Du(),Sa());return yn(e,n,c,a),n.child}function Tp(e,n,a,s){var c=Mu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&_l(n,null),Du(),dp(n),e!==null&&qs(e,n,s,!0),null}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ju(e,n,a,s,c){return lr(n),a=Qu(e,n,a,s,void 0,c),s=Lu(),e!==null&&!dn?(Nu(e,n,c),Yi(e,n,c)):(Ie&&s&&mu(n),n.flags|=1,yn(e,n,a,c),n.child)}function bp(e,n,a,s,c,A){return lr(n),n.updateQueue=null,a=Td(n,s,a,c),Bd(e),s=Lu(),e!==null&&!dn?(Nu(e,n,A),Yi(e,n,A)):(Ie&&s&&mu(n),n.flags|=1,yn(e,n,a,A),n.child)}function Rp(e,n,a,s,c){if(lr(n),n.stateNode===null){var A=Or,S=a.contextType;typeof S=="object"&&S!==null&&(A=Tn(S)),A=new a(s,A),n.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=Ju,n.stateNode=A,A._reactInternals=n,A=n.stateNode,A.props=s,A.state=n.memoizedState,A.refs={},Bu(n),S=a.contextType,A.context=typeof S=="object"&&S!==null?Tn(S):Or,A.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ku(n,a,S,s),A.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof A.getSnapshotBeforeUpdate=="function"||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(S=A.state,typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount(),S!==A.state&&Ju.enqueueReplaceState(A,A.state,null),js(n,s,A,c),Zs(),A.state=n.memoizedState),typeof A.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){A=n.stateNode;var x=n.memoizedProps,N=Ar(a,x);A.props=N;var $=A.context,At=a.contextType;S=Or,typeof At=="object"&&At!==null&&(S=Tn(At));var Et=a.getDerivedStateFromProps;At=typeof Et=="function"||typeof A.getSnapshotBeforeUpdate=="function",x=n.pendingProps!==x,At||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(x||$!==S)&&gp(n,A,s,S),ma=!1;var it=n.memoizedState;A.state=it,js(n,s,A,c),Zs(),$=n.memoizedState,x||it!==$||ma?(typeof Et=="function"&&(Ku(n,a,Et,s),$=n.memoizedState),(N=ma||pp(n,a,N,s,it,$,S))?(At||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(n.flags|=4194308)):(typeof A.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),A.props=s,A.state=$,A.context=S,s=N):(typeof A.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{A=n.stateNode,Tu(e,n),S=n.memoizedProps,At=Ar(a,S),A.props=At,Et=n.pendingProps,it=A.context,$=a.contextType,N=Or,typeof $=="object"&&$!==null&&(N=Tn($)),x=a.getDerivedStateFromProps,($=typeof x=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(S!==Et||it!==N)&&gp(n,A,s,N),ma=!1,it=n.memoizedState,A.state=it,js(n,s,A,c),Zs();var at=n.memoizedState;S!==Et||it!==at||ma||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof x=="function"&&(Ku(n,a,x,s),at=n.memoizedState),(At=ma||pp(n,a,At,s,it,at,N)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?($||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(s,at,N),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(s,at,N)),typeof A.componentDidUpdate=="function"&&(n.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof A.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),A.props=s,A.state=at,A.context=N,s=At):(typeof A.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),s=!1)}return A=s,Nl(e,n),s=(n.flags&128)!==0,A||s?(A=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:A.render(),n.flags|=1,e!==null&&s?(n.child=Wr(n,e.child,null,c),n.child=Wr(n,null,a,c)):yn(e,n,a,c),n.memoizedState=A.state,e=n.child):e=Yi(e,n,c),e}function Dp(e,n,a,s){return Vs(),n.flags|=256,yn(e,n,a,s),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tA(e){return{baseLanes:e,cachePool:Ed()}}function eA(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function wp(e,n,a){var s=n.pendingProps,c=!1,A=(n.flags&128)!==0,S;if((S=A)||(S=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ie){if(c?Ca(n):Sa(),Ie){var x=We,N;if(N=x){t:{for(N=x,x=xi;N.nodeType!==8;){if(!x){x=null;break t}if(N=gi(N.nextSibling),N===null){x=null;break t}}x=N}x!==null?(n.memoizedState={dehydrated:x,treeContext:ir!==null?{id:Hi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},N=Kn(18,null,null,0),N.stateNode=x,N.return=n,n.child=N,Qn=n,We=null,N=!0):N=!1}N||sr(n)}if(x=n.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return OA(x)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return x=s.children,s=s.fallback,c?(Sa(),c=n.mode,x=Fl({mode:"hidden",children:x},c),s=nr(s,c,a,null),x.return=n,s.return=n,x.sibling=s,n.child=x,c=n.child,c.memoizedState=tA(a),c.childLanes=eA(e,S,a),n.memoizedState=$u,s):(Ca(n),nA(n,x))}if(N=e.memoizedState,N!==null&&(x=N.dehydrated,x!==null)){if(A)n.flags&256?(Ca(n),n.flags&=-257,n=iA(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=s.fallback,x=n.mode,s=Fl({mode:"visible",children:s.children},x),c=nr(c,x,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Wr(n,e.child,null,a),s=n.child,s.memoizedState=tA(a),s.childLanes=eA(e,S,a),n.memoizedState=$u,n=c);else if(Ca(n),OA(x)){if(S=x.nextSibling&&x.nextSibling.dataset,S)var $=S.dgst;S=$,s=Error(r(419)),s.stack="",s.digest=S,ks({value:s,source:null,stack:null}),n=iA(e,n,a)}else if(dn||qs(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=ze,S!==null&&(s=a&-a,s=(s&42)!==0?1:Ge(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane))throw N.retryLane=s,Fr(e,s),ti(S,e,s),yp;x.data==="$?"||CA(),n=iA(e,n,a)}else x.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=N.treeContext,We=gi(x.nextSibling),Qn=n,Ie=!0,rr=null,xi=!1,e!==null&&(oi[li++]=Hi,oi[li++]=zi,oi[li++]=ir,Hi=e.id,zi=e.overflow,ir=n),n=nA(n,s.children),n.flags|=4096);return n}return c?(Sa(),c=s.fallback,x=n.mode,N=e.child,$=N.sibling,s=Gi(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,$!==null?c=Gi($,c):(c=nr(c,x,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,x=e.child.memoizedState,x===null?x=tA(a):(N=x.cachePool,N!==null?($=ln._currentValue,N=N.parent!==$?{parent:$,pool:$}:N):N=Ed(),x={baseLanes:x.baseLanes|a,cachePool:N}),c.memoizedState=x,c.childLanes=eA(e,S,a),n.memoizedState=$u,s):(Ca(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function nA(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function iA(e,n,a){return Wr(n,e.child,null,a),e=nA(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Up(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Cu(e.return,n,a)}function aA(e,n,a,s,c){var A=e.memoizedState;A===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(A.isBackwards=n,A.rendering=null,A.renderingStartTime=0,A.last=s,A.tail=a,A.tailMode=c)}function Qp(e,n,a){var s=n.pendingProps,c=s.revealOrder,A=s.tail;if(yn(e,n,s.children,a),s=cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Up(e,a,n);else if(e.tag===19)Up(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(vt(cn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),aA(n,!1,c,a,A);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ul(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}aA(n,!0,a,null,A);break;case"together":aA(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function rA(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function n0(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),ga(n,ln,e.memoizedState.cache),Vs();break;case 27:case 5:Xt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?wp(e,n,a):(Ca(n),e=Yi(e,n,a),e!==null?e.sibling:null);Ca(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Qp(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(cn,cn.current),s)break;return null;case 22:case 23:return n.lanes=0,Bp(e,n,a);case 24:ga(n,ln,e.memoizedState.cache)}return Yi(e,n,a)}function Lp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!rA(e,a)&&(n.flags&128)===0)return dn=!1,n0(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ie&&(n.flags&1048576)!==0&&Ad(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")du(s)?(e=Ar(s,e),n.tag=1,n=Rp(null,n,s,e,a)):(n.tag=0,n=ju(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===b){n.tag=11,n=xp(null,n,s,e,a);break t}else if(c===F){n.tag=14,n=Mp(null,n,s,e,a);break t}}throw n=ut(s)||s,Error(r(306,n,""))}}return n;case 0:return ju(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ar(s,n.pendingProps),Rp(e,n,s,c,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var A=n.memoizedState;c=A.element,Tu(e,n),js(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ga(n,ln,s),s!==A.cache&&Su(n,[ln],a,!0),Zs(),s=S.element,A.isDehydrated)if(A={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=A,n.memoizedState=A,n.flags&256){n=Dp(e,n,s,a);break t}else if(s!==c){c=ri(Error(r(424)),n),ks(c),n=Dp(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=gi(e.firstChild),Qn=n,Ie=!0,rr=null,xi=!0,a=hp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vs(),s===c){n=Yi(e,n,a);break t}yn(e,n,s,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ie||(a=n.type,e=n.pendingProps,s=Zl(Ct.current).createElement(a),s[sn]=n,s[Cn]=e,Mn(s,a,e),tn(s),n.stateNode=s):n.memoizedState=Pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Ie&&(s=n.stateNode=Ng(n.type,n.pendingProps,Ct.current),Qn=n,xi=!0,c=We,Da(n.type)?(PA=c,We=gi(s.firstChild)):We=c),yn(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ie&&((c=s=We)&&(s=R0(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,Qn=n,We=gi(s.firstChild),xi=!1,c=!0):c=!1),c||sr(n)),Xt(n),c=n.type,A=n.pendingProps,S=e!==null?e.memoizedProps:null,s=A.children,LA(c,A)?s=null:S!==null&&LA(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Qu(e,n,W_,null,null,a),Co._currentValue=c),Nl(e,n),yn(e,n,s,a),n.child;case 6:return e===null&&Ie&&((e=a=We)&&(a=D0(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Qn=n,We=null,e=!0):e=!1),e||sr(n)),null;case 13:return wp(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Wr(n,null,s,a):yn(e,n,s,a),n.child;case 11:return xp(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),yn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,lr(n),c=Tn(c),s=s(c),n.flags|=1,yn(e,n,s,a),n.child;case 14:return Mp(e,n,n.type,n.pendingProps,a);case 15:return Ip(e,n,n.type,n.pendingProps,a);case 19:return Qp(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Fl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Gi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Bp(e,n,a);case 24:return lr(n),s=Tn(ln),e===null?(c=Mu(),c===null&&(c=ze,A=yu(),c.pooledCache=A,A.refCount++,A!==null&&(c.pooledCacheLanes|=a),c=A),n.memoizedState={parent:s,cache:c},Bu(n),ga(n,ln,c)):((e.lanes&a)!==0&&(Tu(e,n),js(n,null,null,a),Zs()),c=e.memoizedState,A=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,ln,s)):(s=A.cache,ga(n,ln,s),s!==c.cache&&Su(n,[ln],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function Np(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kg(n)){if(n=ci.current,n!==null&&((ve&4194048)===ve?Mi!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==Mi))throw Ks=Iu,_d;e.flags|=8192}}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Dt():536870912,e.lanes|=n,jr|=n)}function ro(e,n){if(!Ie)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function i0(e,n,a){var s=n.pendingProps;switch(Eu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ki(ln),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zs(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dd())),Xe(n),null;case 26:return a=n.memoizedState,e===null?(Wi(n),a!==null?(Xe(n),Np(n,a)):(Xe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Wi(n),Xe(n),Np(n,a)):(Xe(n),n.flags&=-16777217):(e.memoizedProps!==s&&Wi(n),Xe(n),n.flags&=-16777217),null;case 27:re(n),a=Ct.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}e=J.current,zs(n)?fd(n):(e=Ng(c,s,a),n.stateNode=e,Wi(n))}return Xe(n),null;case 5:if(re(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(e=J.current,zs(n))fd(n);else{switch(c=Zl(Ct.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[sn]=n,e[Cn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Wi(n)}}return Xe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ct.current,zs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Qn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||bg(e.nodeValue,a)),e||sr(n)}else e=Zl(e).createTextNode(s),e[sn]=n,n.stateNode=e}return Xe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=zs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=dd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var A=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(A=s.memoizedState.cachePool.pool),A!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),Xe(n),null;case 4:return ae(),e===null&&RA(n.stateNode.containerInfo),Xe(n),null;case 10:return ki(n.type),Xe(n),null;case 19:if(dt(cn),c=n.memoizedState,c===null)return Xe(n),null;if(s=(n.flags&128)!==0,A=c.rendering,A===null)if(s)ro(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(A=Ul(e),A!==null){for(n.flags|=128,ro(c,!1),e=A.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ud(a,e),a=a.sibling;return vt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ee()>Hl&&(n.flags|=128,s=!0,ro(c,!1),n.lanes=4194304)}else{if(!s)if(e=Ul(A),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!A.alternate&&!Ie)return Xe(n),null}else 2*ee()-c.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,s=!0,ro(c,!1),n.lanes=4194304);c.isBackwards?(A.sibling=n.child,n.child=A):(e=c.last,e!==null?e.sibling=A:n.child=A,c.last=A)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ee(),n.sibling=null,e=cn.current,vt(cn,s?e&1|2:e&1),n):(Xe(n),null);case 22:case 23:return Xi(n),wu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&dt(cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(ln),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function a0(e,n){switch(Eu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(ln),ae(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return re(n),null;case 13:if(Xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return dt(cn),null;case 4:return ae(),null;case 10:return ki(n.type),null;case 22:case 23:return Xi(n),wu(),e!==null&&dt(cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(ln),null;case 25:return null;default:return null}}function Fp(e,n){switch(Eu(n),n.tag){case 3:ki(ln),ae();break;case 26:case 27:case 5:re(n);break;case 4:ae();break;case 13:Xi(n);break;case 19:dt(cn);break;case 10:ki(n.type);break;case 22:case 23:Xi(n),wu(),e!==null&&dt(cr);break;case 24:ki(ln)}}function so(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var A=a.create,S=a.inst;s=A(),S.destroy=s}a=a.next}while(a!==c)}}catch(x){Oe(n,n.return,x)}}function ya(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var A=c.next;s=A;do{if((s.tag&e)===e){var S=s.inst,x=S.destroy;if(x!==void 0){S.destroy=void 0,c=n;var N=a,$=x;try{$()}catch(At){Oe(c,N,At)}}}s=s.next}while(s!==A)}}catch(At){Oe(n,n.return,At)}}function Op(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Md(n,a)}catch(s){Oe(e,e.return,s)}}}function Pp(e,n,a){a.props=Ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Oe(e,n,s)}}function oo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Oe(e,n,c)}}function Ii(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Oe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Oe(e,n,c)}else a.current=null}function Gp(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Oe(e,e.return,c)}}function sA(e,n,a){try{var s=e.stateNode;M0(s,e.type,a,n),s[Cn]=n}catch(c){Oe(e,e.return,c)}}function Hp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function oA(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lA(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(s!==4&&(s===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(lA(e,n,a),e=e.sibling;e!==null;)lA(e,n,a),e=e.sibling}function Pl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function zp(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[sn]=e,n[Cn]=a}catch(A){Oe(e,e.return,A)}}var Ki=!1,Ze=!1,cA=!1,Vp=typeof WeakSet=="function"?WeakSet:Set,pn=null;function r0(e,n){if(e=e.containerInfo,UA=ic,e=td(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,A=s.focusNode;s=s.focusOffset;try{a.nodeType,A.nodeType}catch{a=null;break t}var S=0,x=-1,N=-1,$=0,At=0,Et=e,it=null;e:for(;;){for(var at;Et!==a||c!==0&&Et.nodeType!==3||(x=S+c),Et!==A||s!==0&&Et.nodeType!==3||(N=S+s),Et.nodeType===3&&(S+=Et.nodeValue.length),(at=Et.firstChild)!==null;)it=Et,Et=at;for(;;){if(Et===e)break e;if(it===a&&++$===c&&(x=S),it===A&&++At===s&&(N=S),(at=Et.nextSibling)!==null)break;Et=it,it=Et.parentNode}Et=at}a=x===-1||N===-1?null:{start:x,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(QA={focusedElem:e,selectionRange:a},ic=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,A=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&A!==null){e=void 0,a=n,c=A.memoizedProps,A=A.memoizedState,s=a.stateNode;try{var $t=Ar(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate($t,A),s.__reactInternalSnapshotBeforeUpdate=e}catch(Wt){Oe(a,a.return,Wt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)FA(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":FA(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}}function kp(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),s&4&&so(5,a);break;case 1:if(xa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Oe(a,a.return,S)}else{var c=Ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Oe(a,a.return,S)}}s&64&&Op(a),s&512&&oo(a,a.return);break;case 3:if(xa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Md(e,n)}catch(S){Oe(a,a.return,S)}}break;case 27:n===null&&s&4&&zp(a);case 26:case 5:xa(e,a),n===null&&s&4&&Gp(a),s&512&&oo(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),s&4&&Yp(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=d0.bind(null,a),w0(e,a))));break;case 22:if(s=a.memoizedState!==null||Ki,!s){n=n!==null&&n.memoizedState!==null||Ze,c=Ki;var A=Ze;Ki=s,(Ze=n)&&!A?Ma(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),Ki=c,Ze=A}break;case 30:break;default:xa(e,a)}}function qp(e){var n=e.alternate;n!==null&&(e.alternate=null,qp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,zn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)Xp(e,n,a),a=a.sibling}function Xp(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:Ze||Ii(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||Ii(a,n);var s=ke,c=zn;Da(a.type)&&(ke=a.stateNode,zn=!1),Ji(e,n,a),mo(a.stateNode),ke=s,zn=c;break;case 5:Ze||Ii(a,n);case 6:if(s=ke,c=zn,ke=null,Ji(e,n,a),ke=s,zn=c,ke!==null)if(zn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(A){Oe(a,n,A)}else try{ke.removeChild(a.stateNode)}catch(A){Oe(a,n,A)}break;case 18:ke!==null&&(zn?(e=ke,Qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mo(e)):Qg(ke,a.stateNode));break;case 4:s=ke,c=zn,ke=a.stateNode.containerInfo,zn=!0,Ji(e,n,a),ke=s,zn=c;break;case 0:case 11:case 14:case 15:Ze||ya(2,a,n),Ze||ya(4,a,n),Ji(e,n,a);break;case 1:Ze||(Ii(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Pp(a,n,s)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:Ze=(s=Ze)||a.memoizedState!==null,Ji(e,n,a),Ze=s;break;default:Ji(e,n,a)}}function Yp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(a){Oe(n,n.return,a)}}function s0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Vp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Vp),n;default:throw Error(r(435,e.tag))}}function uA(e,n){var a=s0(e);n.forEach(function(s){var c=p0.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Jn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],A=e,S=n,x=S;t:for(;x!==null;){switch(x.tag){case 27:if(Da(x.type)){ke=x.stateNode,zn=!1;break t}break;case 5:ke=x.stateNode,zn=!1;break t;case 3:case 4:ke=x.stateNode.containerInfo,zn=!0;break t}x=x.return}if(ke===null)throw Error(r(160));Xp(A,S,c),ke=null,zn=!1,A=c.alternate,A!==null&&(A.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Wp(n,e),n=n.sibling}var pi=null;function Wp(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),Zn(e),s&4&&(ya(3,e,e.return),so(3,e),ya(5,e,e.return));break;case 1:Jn(n,e),Zn(e),s&512&&(Ze||a===null||Ii(a,a.return)),s&64&&Ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=pi;if(Jn(n,e),Zn(e),s&512&&(Ze||a===null||Ii(a,a.return)),s&4){var A=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":A=c.getElementsByTagName("title")[0],(!A||A[Aa]||A[sn]||A.namespaceURI==="http://www.w3.org/2000/svg"||A.hasAttribute("itemprop"))&&(A=c.createElement(s),c.head.insertBefore(A,c.querySelector("head > title"))),Mn(A,s,a),A[sn]=e,tn(A),s=A;break t;case"link":var S=zg("link","href",c).get(s+(a.href||""));if(S){for(var x=0;x<S.length;x++)if(A=S[x],A.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&A.getAttribute("rel")===(a.rel==null?null:a.rel)&&A.getAttribute("title")===(a.title==null?null:a.title)&&A.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(x,1);break e}}A=c.createElement(s),Mn(A,s,a),c.head.appendChild(A);break;case"meta":if(S=zg("meta","content",c).get(s+(a.content||""))){for(x=0;x<S.length;x++)if(A=S[x],A.getAttribute("content")===(a.content==null?null:""+a.content)&&A.getAttribute("name")===(a.name==null?null:a.name)&&A.getAttribute("property")===(a.property==null?null:a.property)&&A.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&A.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(x,1);break e}}A=c.createElement(s),Mn(A,s,a),c.head.appendChild(A);break;default:throw Error(r(468,s))}A[sn]=e,tn(A),s=A}e.stateNode=s}else Vg(c,e.type,e.stateNode);else e.stateNode=Hg(c,s,e.memoizedProps);else A!==s?(A===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):A.count--,s===null?Vg(c,e.type,e.stateNode):Hg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&sA(e,e.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,e),Zn(e),s&512&&(Ze||a===null||Ii(a,a.return)),a!==null&&s&4&&sA(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,e),Zn(e),s&512&&(Ze||a===null||Ii(a,a.return)),e.flags&32){c=e.stateNode;try{yi(c,"")}catch(at){Oe(e,e.return,at)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,sA(e,c,a!==null?a.memoizedProps:c)),s&1024&&(cA=!0);break;case 6:if(Jn(n,e),Zn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(at){Oe(e,e.return,at)}}break;case 3:if(tc=null,c=pi,pi=jl(n.containerInfo),Jn(n,e),pi=c,Zn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(at){Oe(e,e.return,at)}cA&&(cA=!1,Kp(e));break;case 4:s=pi,pi=jl(e.stateNode.containerInfo),Jn(n,e),Zn(e),pi=s;break;case 12:Jn(n,e),Zn(e);break;case 13:Jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gA=ee()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,uA(e,s)));break;case 22:c=e.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,$=Ki,At=Ze;if(Ki=$||c,Ze=At||N,Jn(n,e),Ze=At,Ki=$,Zn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||N||Ki||Ze||fr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(A=N.stateNode,c)S=A.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{x=N.stateNode;var Et=N.memoizedProps.style,it=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;x.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Oe(N,N.return,at)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=c?"":N.memoizedProps}catch(at){Oe(N,N.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,uA(e,a))));break;case 19:Jn(n,e),Zn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,uA(e,s)));break;case 30:break;case 21:break;default:Jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Hp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,A=oA(e);Pl(e,A,c);break;case 5:var S=a.stateNode;a.flags&32&&(yi(S,""),a.flags&=-33);var x=oA(e);Pl(e,x,S);break;case 3:case 4:var N=a.stateNode.containerInfo,$=oA(e);lA(e,$,N);break;default:throw Error(r(161))}}catch(At){Oe(e,e.return,At)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Kp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Kp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kp(e,n.alternate,n),n=n.sibling}function fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),fr(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Pp(n,n.return,a),fr(n);break;case 27:mo(n.stateNode);case 26:case 5:Ii(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,A=n,S=A.flags;switch(A.tag){case 0:case 11:case 15:Ma(c,A,a),so(4,A);break;case 1:if(Ma(c,A,a),s=A,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Oe(s,s.return,$)}if(s=A,c=s.updateQueue,c!==null){var x=s.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)xd(N[c],x)}catch($){Oe(s,s.return,$)}}a&&S&64&&Op(A),oo(A,A.return);break;case 27:zp(A);case 26:case 5:Ma(c,A,a),a&&s===null&&S&4&&Gp(A),oo(A,A.return);break;case 12:Ma(c,A,a);break;case 13:Ma(c,A,a),a&&S&4&&Yp(c,A);break;case 22:A.memoizedState===null&&Ma(c,A,a),oo(A,A.return);break;case 30:break;default:Ma(c,A,a)}n=n.sibling}}function AA(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xs(a))}function fA(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e))}function Bi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jp(e,n,a,s),n=n.sibling}function Jp(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n,a,s),c&2048&&so(9,n);break;case 1:Bi(e,n,a,s);break;case 3:Bi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e)));break;case 12:if(c&2048){Bi(e,n,a,s),e=n.stateNode;try{var A=n.memoizedProps,S=A.id,x=A.onPostCommit;typeof x=="function"&&x(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Oe(n,n.return,N)}}else Bi(e,n,a,s);break;case 13:Bi(e,n,a,s);break;case 23:break;case 22:A=n.stateNode,S=n.alternate,n.memoizedState!==null?A._visibility&2?Bi(e,n,a,s):lo(e,n):A._visibility&2?Bi(e,n,a,s):(A._visibility|=2,Kr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&AA(S,n);break;case 24:Bi(e,n,a,s),c&2048&&fA(n.alternate,n);break;default:Bi(e,n,a,s)}}function Kr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var A=e,S=n,x=a,N=s,$=S.flags;switch(S.tag){case 0:case 11:case 15:Kr(A,S,x,N,c),so(8,S);break;case 23:break;case 22:var At=S.stateNode;S.memoizedState!==null?At._visibility&2?Kr(A,S,x,N,c):lo(A,S):(At._visibility|=2,Kr(A,S,x,N,c)),c&&$&2048&&AA(S.alternate,S);break;case 24:Kr(A,S,x,N,c),c&&$&2048&&fA(S.alternate,S);break;default:Kr(A,S,x,N,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&AA(s.alternate,s);break;case 24:lo(a,s),c&2048&&fA(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Jr(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)Zp(e),e=e.sibling}function Zp(e){switch(e.tag){case 26:Jr(e),e.flags&co&&e.memoizedState!==null&&q0(pi,e.memoizedState,e.memoizedProps);break;case 5:Jr(e);break;case 3:case 4:var n=pi;pi=jl(e.stateNode.containerInfo),Jr(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Jr(e),co=n):Jr(e));break;default:Jr(e)}}function jp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,tg(s,e)}jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$p(e),e=e.sibling}function $p(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):uo(e);break;default:uo(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,tg(s,e)}jp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function tg(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=e;pn!==null;){s=pn;var c=s.sibling,A=s.return;if(qp(s),s===a){pn=null;break t}if(c!==null){c.return=A,pn=c;break t}pn=A}}}var o0={getCacheForType:function(e){var n=Tn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},l0=typeof WeakMap=="function"?WeakMap:Map,Te=0,ze=null,de=null,ve=0,be=0,jn=null,Ia=!1,Zr=!1,hA=!1,Zi=0,Ke=0,Ba=0,hr=0,dA=0,ui=0,jr=0,Ao=null,Vn=null,pA=!1,gA=0,Hl=1/0,zl=null,Ta=null,xn=0,ba=null,$r=null,ts=0,mA=0,EA=null,eg=null,fo=0,_A=null;function $n(){if((Te&2)!==0&&ve!==0)return ve&-ve;if(L.T!==null){var e=Hr;return e!==0?e:IA()}return Se()}function ng(){ui===0&&(ui=(ve&536870912)===0||Ie?X():536870912);var e=ci.current;return e!==null&&(e.flags|=32),ui}function ti(e,n,a){(e===ze&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(es(e,0),Ra(e,ve,ui,!1)),mt(e,a),((Te&2)===0||e!==ze)&&(e===ze&&((Te&2)===0&&(hr|=a),Ke===4&&Ra(e,ve,ui,!1)),Ti(e))}function ig(e,n,a){if((Te&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||te(e,n),c=s?A0(e,n):SA(e,n,!0),A=s;do{if(c===0){Zr&&!s&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,A&&!c0(a)){c=SA(e,n,!1),A=!1;continue}if(c===2){if(A=n,e.errorRecoveryDisabledLanes&A)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var x=e;c=Ao;var N=x.current.memoizedState.isDehydrated;if(N&&(es(x,S).flags|=256),S=SA(x,S,!1),S!==2){if(hA&&!N){x.errorRecoveryDisabledLanes|=A,hr|=A,c=4;break t}A=Vn,Vn=c,A!==null&&(Vn===null?Vn=A:Vn.push.apply(Vn,A))}c=S}if(A=!1,c!==2)continue}}if(c===1){es(e,0),Ra(e,n,0,!0);break}t:{switch(s=e,A=c,A){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ra(s,n,ui,!Ia);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=gA+300-ee(),10<c)){if(Ra(s,n,ui,!Ia),ce(s,0,!0)!==0)break t;s.timeoutHandle=wg(ag.bind(null,s,a,Vn,zl,pA,n,ui,hr,jr,Ia,A,2,-0,0),c);break t}ag(s,a,Vn,zl,pA,n,ui,hr,jr,Ia,A,0,-0,0)}}break}while(!0);Ti(e)}function ag(e,n,a,s,c,A,S,x,N,$,At,Et,it,at){if(e.timeoutHandle=-1,Et=n.subtreeFlags,(Et&8192||(Et&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:k0},Zp(n),Et=X0(),Et!==null)){e.cancelPendingCommit=Et(Ag.bind(null,e,n,A,a,s,c,S,x,N,At,1,it,at)),Ra(e,A,S,!$);return}Ag(e,n,A,a,s,c,S,x,N)}function c0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],A=c.getSnapshot;c=c.value;try{if(!Wn(A(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,s){n&=~dA,n&=~hr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var A=31-Pt(c),S=1<<A;s[A]=-1,c&=~S}a!==0&&wt(e,a,n)}function Vl(){return(Te&6)===0?(ho(0),!1):!0}function vA(){if(de!==null){if(be===0)var e=de.return;else e=de,Vi=or=null,Fu(e),Yr=null,io=0,e=de;for(;e!==null;)Fp(e.alternate,e),e=e.return;de=null}}function es(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,B0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),vA(),ze=e,de=a=Gi(e.current,null),ve=n,be=0,jn=null,Ia=!1,Zr=te(e,n),hA=!1,jr=ui=dA=hr=Ba=Ke=0,Vn=Ao=null,pA=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pt(s),A=1<<c;n|=e[c],s&=~A}return Zi=n,Al(),a}function rg(e,n){ue=null,L.H=Rl,n===Ws||n===vl?(n=Sd(),be=3):n===_d?(n=Sd(),be=4):be=n===yp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,de===null&&(Ke=1,Ll(e,ri(n,e.current)))}function sg(){var e=L.H;return L.H=Rl,e===null?Rl:e}function og(){var e=L.A;return L.A=o0,e}function CA(){Ke=4,Ia||(ve&4194048)!==ve&&ci.current!==null||(Zr=!0),(Ba&134217727)===0&&(hr&134217727)===0||ze===null||Ra(ze,ve,ui,!1)}function SA(e,n,a){var s=Te;Te|=2;var c=sg(),A=og();(ze!==e||ve!==n)&&(zl=null,es(e,n)),n=!1;var S=Ke;t:do try{if(be!==0&&de!==null){var x=de,N=jn;switch(be){case 8:vA(),S=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var $=be;if(be=0,jn=null,ns(e,x,N,$),a&&Zr){S=0;break t}break;default:$=be,be=0,jn=null,ns(e,x,N,$)}}u0(),S=Ke;break}catch(At){rg(e,At)}while(!0);return n&&e.shellSuspendCounter++,Vi=or=null,Te=s,L.H=c,L.A=A,de===null&&(ze=null,ve=0,Al()),S}function u0(){for(;de!==null;)lg(de)}function A0(e,n){var a=Te;Te|=2;var s=sg(),c=og();ze!==e||ve!==n?(zl=null,Hl=ee()+500,es(e,n)):Zr=te(e,n);t:do try{if(be!==0&&de!==null){n=de;var A=jn;e:switch(be){case 1:be=0,jn=null,ns(e,n,A,1);break;case 2:case 9:if(vd(A)){be=0,jn=null,cg(n);break}n=function(){be!==2&&be!==9||ze!==e||(be=7),Ti(e)},A.then(n,n);break t;case 3:be=7;break t;case 4:be=5;break t;case 7:vd(A)?(be=0,jn=null,cg(n)):(be=0,jn=null,ns(e,n,A,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var x=de;if(!S||kg(S)){be=0,jn=null;var N=x.sibling;if(N!==null)de=N;else{var $=x.return;$!==null?(de=$,kl($)):de=null}break e}}be=0,jn=null,ns(e,n,A,5);break;case 6:be=0,jn=null,ns(e,n,A,6);break;case 8:vA(),Ke=6;break t;default:throw Error(r(462))}}f0();break}catch(At){rg(e,At)}while(!0);return Vi=or=null,L.H=s,L.A=c,Te=a,de!==null?0:(ze=null,ve=0,Al(),Ke)}function f0(){for(;de!==null&&!vn();)lg(de)}function lg(e){var n=Lp(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?kl(e):de=n}function cg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bp(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=bp(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Fu(n);default:Fp(a,n),n=de=ud(n,Zi),n=Lp(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?kl(e):de=n}function ns(e,n,a,s){Vi=or=null,Fu(n),Yr=null,io=0;var c=n.return;try{if(e0(e,c,n,a,ve)){Ke=1,Ll(e,ri(a,e.current)),de=null;return}}catch(A){if(c!==null)throw de=c,A;Ke=1,Ll(e,ri(a,e.current)),de=null;return}n.flags&32768?(Ie||s===1?e=!0:Zr||(ve&536870912)!==0?e=!1:(Ia=e=!0,(s===2||s===9||s===3||s===6)&&(s=ci.current,s!==null&&s.tag===13&&(s.flags|=16384))),ug(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){ug(n,Ia);return}e=n.return;var a=i0(n.alternate,n,Zi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Ke===0&&(Ke=5)}function ug(e,n){do{var a=a0(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ke=6,de=null}function Ag(e,n,a,s,c,A,S,x,N){e.cancelPendingCommit=null;do ql();while(xn!==0);if((Te&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(A=n.lanes|n.childLanes,A|=fu,Lt(e,a,A,S,x,N),e===ze&&(de=ze=null,ve=0),$r=n,ba=e,ts=a,mA=A,EA=c,eg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g0(U,function(){return gg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=q.p,q.p=2,S=Te,Te|=4;try{r0(e,n,a)}finally{Te=S,q.p=c,L.T=s}}xn=1,fg(),hg(),dg()}}function fg(){if(xn===1){xn=0;var e=ba,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=q.p;q.p=2;var c=Te;Te|=4;try{Wp(n,e);var A=QA,S=td(e.containerInfo),x=A.focusedElem,N=A.selectionRange;if(S!==x&&x&&x.ownerDocument&&$h(x.ownerDocument.documentElement,x)){if(N!==null&&ou(x)){var $=N.start,At=N.end;if(At===void 0&&(At=$),"selectionStart"in x)x.selectionStart=$,x.selectionEnd=Math.min(At,x.value.length);else{var Et=x.ownerDocument||document,it=Et&&Et.defaultView||window;if(it.getSelection){var at=it.getSelection(),$t=x.textContent.length,Wt=Math.min(N.start,$t),Qe=N.end===void 0?Wt:Math.min(N.end,$t);!at.extend&&Wt>Qe&&(S=Qe,Qe=Wt,Wt=S);var Y=jh(x,Wt),z=jh(x,Qe);if(Y&&z&&(at.rangeCount!==1||at.anchorNode!==Y.node||at.anchorOffset!==Y.offset||at.focusNode!==z.node||at.focusOffset!==z.offset)){var j=Et.createRange();j.setStart(Y.node,Y.offset),at.removeAllRanges(),Wt>Qe?(at.addRange(j),at.extend(z.node,z.offset)):(j.setEnd(z.node,z.offset),at.addRange(j))}}}}for(Et=[],at=x;at=at.parentNode;)at.nodeType===1&&Et.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<Et.length;x++){var ht=Et[x];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}ic=!!UA,QA=UA=null}finally{Te=c,q.p=s,L.T=a}}e.current=n,xn=2}}function hg(){if(xn===2){xn=0;var e=ba,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=q.p;q.p=2;var c=Te;Te|=4;try{kp(e,n.alternate,n)}finally{Te=c,q.p=s,L.T=a}}xn=3}}function dg(){if(xn===4||xn===3){xn=0,ge();var e=ba,n=$r,a=ts,s=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,$r=ba=null,pg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ta=null),$e(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=q.p,q.p=2,L.T=null;try{for(var A=e.onRecoverableError,S=0;S<s.length;S++){var x=s[S];A(x.value,{componentStack:x.stack})}}finally{L.T=n,q.p=c}}(ts&3)!==0&&ql(),Ti(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===_A?fo++:(fo=0,_A=e):fo=0,ho(0)}}function pg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xs(n)))}function ql(e){return fg(),hg(),dg(),gg()}function gg(){if(xn!==5)return!1;var e=ba,n=mA;mA=0;var a=$e(ts),s=L.T,c=q.p;try{q.p=32>a?32:a,L.T=null,a=EA,EA=null;var A=ba,S=ts;if(xn=0,$r=ba=null,ts=0,(Te&6)!==0)throw Error(r(331));var x=Te;if(Te|=4,$p(A.current),Jp(A,A.current,S,a),Te=x,ho(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(ft,A)}catch{}return!0}finally{q.p=c,L.T=s,pg(e,n)}}function mg(e,n,a){n=ri(a,n),n=Zu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(mt(e,2),Ti(e))}function Oe(e,n,a){if(e.tag===3)mg(e,e,a);else for(;n!==null;){if(n.tag===3){mg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){e=ri(a,e),a=Cp(2),s=_a(n,a,2),s!==null&&(Sp(a,s,n,e),mt(s,2),Ti(s));break}}n=n.return}}function yA(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new l0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(hA=!0,c.add(a),e=h0.bind(null,e,n,a),n.then(e,e))}function h0(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(ve&a)===a&&(Ke===4||Ke===3&&(ve&62914560)===ve&&300>ee()-gA?(Te&2)===0&&es(e,0):dA|=a,jr===ve&&(jr=0)),Ti(e)}function Eg(e,n){n===0&&(n=Dt()),e=Fr(e,n),e!==null&&(mt(e,n),Ti(e))}function d0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Eg(e,a)}function p0(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Eg(e,a)}function g0(e,n){return ie(e,n)}var Xl=null,is=null,xA=!1,Yl=!1,MA=!1,dr=0;function Ti(e){e!==is&&e.next===null&&(is===null?Xl=is=e:is=is.next=e),Yl=!0,xA||(xA=!0,E0())}function ho(e,n){if(!MA&&Yl){MA=!0;do for(var a=!1,s=Xl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var A=0;else{var S=s.suspendedLanes,x=s.pingedLanes;A=(1<<31-Pt(42|e)+1)-1,A&=c&~(S&~x),A=A&201326741?A&201326741|1:A?A|2:0}A!==0&&(a=!0,Sg(s,A))}else A=ve,A=ce(s,s===ze?A:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(A&3)===0||te(s,A)||(a=!0,Sg(s,A));s=s.next}while(a);MA=!1}}function m0(){_g()}function _g(){Yl=xA=!1;var e=0;dr!==0&&(I0()&&(e=dr),dr=0);for(var n=ee(),a=null,s=Xl;s!==null;){var c=s.next,A=vg(s,n);A===0?(s.next=null,a===null?Xl=c:a.next=c,c===null&&(is=a)):(a=s,(e!==0||(A&3)!==0)&&(Yl=!0)),s=c}ho(e)}function vg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,A=e.pendingLanes&-62914561;0<A;){var S=31-Pt(A),x=1<<S,N=c[S];N===-1?((x&a)===0||(x&s)!==0)&&(c[S]=De(x,n)):N<=n&&(e.expiredLanes|=x),A&=~x}if(n=ze,a=ve,a=ce(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(be===2||be===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&H(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&H(s),$e(a)){case 2:case 8:a=Gt;break;case 32:a=U;break;case 268435456:a=nt;break;default:a=U}return s=Cg.bind(null,e),a=ie(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&H(s),e.callbackPriority=2,e.callbackNode=null,2}function Cg(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var s=ve;return s=ce(e,e===ze?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(ig(e,s,n),vg(e,ee()),e.callbackNode!=null&&e.callbackNode===a?Cg.bind(null,e):null)}function Sg(e,n){if(ql())return null;ig(e,n,!0)}function E0(){T0(function(){(Te&6)!==0?ie(Re,m0):_g()})}function IA(){return dr===0&&(dr=X()),dr}function yg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function xg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function _0(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var A=yg((c[Cn]||null).action),S=s.submitter;S&&(n=(n=S[Cn]||null)?yg(n.formAction):S.getAttribute("formAction"),n!==null&&(A=n,S=null));var x=new ll("action","action",null,s,c);e.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(dr!==0){var N=S?xg(c,S):new FormData(c);Xu(a,{pending:!0,data:N,method:c.method,action:A},null,N)}}else typeof A=="function"&&(x.preventDefault(),N=S?xg(c,S):new FormData(c),Xu(a,{pending:!0,data:N,method:c.method,action:A},A,N))},currentTarget:c}]})}}for(var BA=0;BA<Au.length;BA++){var TA=Au[BA],v0=TA.toLowerCase(),C0=TA[0].toUpperCase()+TA.slice(1);di(v0,"on"+C0)}di(id,"onAnimationEnd"),di(ad,"onAnimationIteration"),di(rd,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(O_,"onTransitionRun"),di(P_,"onTransitionStart"),di(G_,"onTransitionCancel"),di(sd,"onTransitionEnd"),B("onMouseEnter",["mouseout","mouseover"]),B("onMouseLeave",["mouseout","mouseover"]),B("onPointerEnter",["pointerout","pointerover"]),B("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Mg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var A=void 0;if(n)for(var S=s.length-1;0<=S;S--){var x=s[S],N=x.instance,$=x.currentTarget;if(x=x.listener,N!==A&&c.isPropagationStopped())break t;A=x,c.currentTarget=$;try{A(c)}catch(At){Ql(At)}c.currentTarget=null,A=N}else for(S=0;S<s.length;S++){if(x=s[S],N=x.instance,$=x.currentTarget,x=x.listener,N!==A&&c.isPropagationStopped())break t;A=x,c.currentTarget=$;try{A(c)}catch(At){Ql(At)}c.currentTarget=null,A=N}}}}function pe(e,n){var a=n[Ja];a===void 0&&(a=n[Ja]=new Set);var s=e+"__bubble";a.has(s)||(Ig(n,e,2,!1),a.add(s))}function bA(e,n,a){var s=0;n&&(s|=4),Ig(a,e,s,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function RA(e){if(!e[Wl]){e[Wl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(S0.has(a)||bA(a,!1,e),bA(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,bA("selectionchange",!1,n))}}function Ig(e,n,a,s){switch(Jg(n)){case 2:var c=K0;break;case 8:c=J0;break;default:c=kA}a=c.bind(null,n,a,e),c=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function DA(e,n,a,s,c){var A=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var x=s.stateNode.containerInfo;if(x===c)break;if(S===4)for(S=s.return;S!==null;){var N=S.tag;if((N===3||N===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;x!==null;){if(S=Qi(x),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){s=A=S;continue t}x=x.parentNode}}s=s.return}Uh(function(){var $=A,At=Jc(a),Et=[];t:{var it=od.get(e);if(it!==void 0){var at=ll,$t=e;switch(e){case"keypress":if(sl(a)===0)break t;case"keydown":case"keyup":at=g_;break;case"focusin":$t="focus",at=nu;break;case"focusout":$t="blur",at=nu;break;case"beforeblur":case"afterblur":at=nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=a_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=__;break;case id:case ad:case rd:at=o_;break;case sd:at=C_;break;case"scroll":case"scrollend":at=n_;break;case"wheel":at=y_;break;case"copy":case"cut":case"paste":at=c_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Oh;break;case"toggle":case"beforetoggle":at=M_}var Wt=(n&4)!==0,Qe=!Wt&&(e==="scroll"||e==="scrollend"),Y=Wt?it!==null?it+"Capture":null:it;Wt=[];for(var z=$,j;z!==null;){var ht=z;if(j=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||j===null||Y===null||(ht=Us(z,Y),ht!=null&&Wt.push(go(z,ht,j))),Qe)break;z=z.return}0<Wt.length&&(it=new at(it,$t,null,a,At),Et.push({event:it,listeners:Wt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==Kc&&($t=a.relatedTarget||a.fromElement)&&(Qi($t)||$t[Pn]))break t;if((at||it)&&(it=At.window===At?At:(it=At.ownerDocument)?it.defaultView||it.parentWindow:window,at?($t=a.relatedTarget||a.toElement,at=$,$t=$t?Qi($t):null,$t!==null&&(Qe=u($t),Wt=$t.tag,$t!==Qe||Wt!==5&&Wt!==27&&Wt!==6)&&($t=null)):(at=null,$t=$),at!==$t)){if(Wt=Nh,ht="onMouseLeave",Y="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(Wt=Oh,ht="onPointerLeave",Y="onPointerEnter",z="pointer"),Qe=at==null?it:ja(at),j=$t==null?it:ja($t),it=new Wt(ht,z+"leave",at,a,At),it.target=Qe,it.relatedTarget=j,ht=null,Qi(At)===$&&(Wt=new Wt(Y,z+"enter",$t,a,At),Wt.target=j,Wt.relatedTarget=Qe,ht=Wt),Qe=ht,at&&$t)e:{for(Wt=at,Y=$t,z=0,j=Wt;j;j=as(j))z++;for(j=0,ht=Y;ht;ht=as(ht))j++;for(;0<z-j;)Wt=as(Wt),z--;for(;0<j-z;)Y=as(Y),j--;for(;z--;){if(Wt===Y||Y!==null&&Wt===Y.alternate)break e;Wt=as(Wt),Y=as(Y)}Wt=null}else Wt=null;at!==null&&Bg(Et,it,at,Wt,!1),$t!==null&&Qe!==null&&Bg(Et,Qe,$t,Wt,!0)}}t:{if(it=$?ja($):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Ot=Xh;else if(kh(it))if(Yh)Ot=L_;else{Ot=U_;var Ae=w_}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?$&&Wc($.elementType)&&(Ot=Xh):Ot=Q_;if(Ot&&(Ot=Ot(e,$))){qh(Et,Ot,a,At);break t}Ae&&Ae(e,it,$),e==="focusout"&&$&&it.type==="number"&&$.memoizedProps.value!=null&&Bn(it,"number",it.value)}switch(Ae=$?ja($):window,e){case"focusin":(kh(Ae)||Ae.contentEditable==="true")&&(Qr=Ae,lu=$,Hs=null);break;case"focusout":Hs=lu=Qr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,ed(Et,a,At);break;case"selectionchange":if(F_)break;case"keydown":case"keyup":ed(Et,a,At)}var Ht;if(au)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Ur?zh(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Ph&&a.locale!=="ko"&&(Ur||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Ur&&(Ht=Qh()):(pa=At,$c="value"in pa?pa.value:pa.textContent,Ur=!0)),Ae=Kl($,Jt),0<Ae.length&&(Jt=new Fh(Jt,e,null,a,At),Et.push({event:Jt,listeners:Ae}),Ht?Jt.data=Ht:(Ht=Vh(a),Ht!==null&&(Jt.data=Ht)))),(Ht=B_?T_(e,a):b_(e,a))&&(Jt=Kl($,"onBeforeInput"),0<Jt.length&&(Ae=new Fh("onBeforeInput","beforeinput",null,a,At),Et.push({event:Ae,listeners:Jt}),Ae.data=Ht)),_0(Et,e,$,a,At)}Mg(Et,n)})}function go(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,A=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||A===null||(c=Us(e,a),c!=null&&s.unshift(go(e,c,A)),c=Us(e,n),c!=null&&s.push(go(e,c,A))),e.tag===3)return s;e=e.return}return[]}function as(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bg(e,n,a,s,c){for(var A=n._reactName,S=[];a!==null&&a!==s;){var x=a,N=x.alternate,$=x.stateNode;if(x=x.tag,N!==null&&N===s)break;x!==5&&x!==26&&x!==27||$===null||(N=$,c?($=Us(a,A),$!=null&&S.unshift(go(a,$,N))):c||($=Us(a,A),$!=null&&S.push(go(a,$,N)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var y0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(x0,"")}function bg(e,n){return n=Tg(n),Tg(e)===n}function Jl(){}function Ue(e,n,a,s,c,A){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||yi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&yi(e,""+s);break;case"className":Bt(e,"class",s);break;case"tabIndex":Bt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(e,a,s);break;case"style":Dh(e,s,A);break;case"data":if(n!=="object"){Bt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof A=="function"&&(a==="formAction"?(n!=="input"&&Ue(e,n,"name",c.name,c,null),Ue(e,n,"formEncType",c.formEncType,c,null),Ue(e,n,"formMethod",c.formMethod,c,null),Ue(e,n,"formTarget",c.formTarget,c,null)):(Ue(e,n,"encType",c.encType,c,null),Ue(e,n,"method",c.method,c,null),Ue(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Jl);break;case"onScroll":s!=null&&pe("scroll",e);break;case"onScrollEnd":s!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":pe("beforetoggle",e),pe("toggle",e),yt(e,"popover",s);break;case"xlinkActuate":bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":bt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":bt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":bt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":bt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":yt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=t_.get(a)||a,yt(e,a,s))}}function wA(e,n,a,s,c,A){switch(a){case"style":Dh(e,s,A);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?yi(e,s):(typeof s=="number"||typeof s=="bigint")&&yi(e,""+s);break;case"onScroll":s!=null&&pe("scroll",e);break;case"onScrollEnd":s!=null&&pe("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),A=e[Cn]||null,A=A!=null?A[a]:null,typeof A=="function"&&e.removeEventListener(n,A,c),typeof s=="function")){typeof A!="function"&&A!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):yt(e,a,s)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var s=!1,c=!1,A;for(A in a)if(a.hasOwnProperty(A)){var S=a[A];if(S!=null)switch(A){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(e,n,A,S,a,null)}}c&&Ue(e,n,"srcSet",a.srcSet,a,null),s&&Ue(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var x=A=S=c=null,N=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var At=a[s];if(At!=null)switch(s){case"name":c=At;break;case"type":S=At;break;case"checked":N=At;break;case"defaultChecked":$=At;break;case"value":A=At;break;case"defaultValue":x=At;break;case"children":case"dangerouslySetInnerHTML":if(At!=null)throw Error(r(137,n));break;default:Ue(e,n,s,At,a,null)}}Fe(e,A,x,N,$,S,c,!1),Ye(e);return;case"select":pe("invalid",e),s=S=A=null;for(c in a)if(a.hasOwnProperty(c)&&(x=a[c],x!=null))switch(c){case"value":A=x;break;case"defaultValue":S=x;break;case"multiple":s=x;default:Ue(e,n,c,x,a,null)}n=A,a=S,e.multiple=!!s,n!=null?on(e,!!s,n,!1):a!=null&&on(e,!!s,a,!0);return;case"textarea":pe("invalid",e),A=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(x=a[S],x!=null))switch(S){case"value":s=x;break;case"defaultValue":c=x;break;case"children":A=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(91));break;default:Ue(e,n,S,x,a,null)}Sn(e,s,c,A),Ye(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ue(e,n,N,s,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(s=0;s<po.length;s++)pe(po[s],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(e,n,$,s,a,null)}return;default:if(Wc(n)){for(At in a)a.hasOwnProperty(At)&&(s=a[At],s!==void 0&&wA(e,n,At,s,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(s=a[x],s!=null&&Ue(e,n,x,s,a,null))}function M0(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,A=null,S=null,x=null,N=null,$=null,At=null;for(at in a){var Et=a[at];if(a.hasOwnProperty(at)&&Et!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":N=Et;default:s.hasOwnProperty(at)||Ue(e,n,at,null,s,Et)}}for(var it in s){var at=s[it];if(Et=a[it],s.hasOwnProperty(it)&&(at!=null||Et!=null))switch(it){case"type":A=at;break;case"name":c=at;break;case"checked":$=at;break;case"defaultChecked":At=at;break;case"value":S=at;break;case"defaultValue":x=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==Et&&Ue(e,n,it,at,s,Et)}}Fi(e,S,x,N,$,At,A,c);return;case"select":at=S=x=it=null;for(A in a)if(N=a[A],a.hasOwnProperty(A)&&N!=null)switch(A){case"value":break;case"multiple":at=N;default:s.hasOwnProperty(A)||Ue(e,n,A,null,s,N)}for(c in s)if(A=s[c],N=a[c],s.hasOwnProperty(c)&&(A!=null||N!=null))switch(c){case"value":it=A;break;case"defaultValue":x=A;break;case"multiple":S=A;default:A!==N&&Ue(e,n,c,A,s,N)}n=x,a=S,s=at,it!=null?on(e,!!a,it,!1):!!s!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(x in a)if(c=a[x],a.hasOwnProperty(x)&&c!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Ue(e,n,x,null,s,c)}for(S in s)if(c=s[S],A=a[S],s.hasOwnProperty(S)&&(c!=null||A!=null))switch(S){case"value":it=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==A&&Ue(e,n,S,c,s,A)}hn(e,it,at);return;case"option":for(var $t in a)if(it=a[$t],a.hasOwnProperty($t)&&it!=null&&!s.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:Ue(e,n,$t,null,s,it)}for(N in s)if(it=s[N],at=a[N],s.hasOwnProperty(N)&&it!==at&&(it!=null||at!=null))switch(N){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ue(e,n,N,it,s,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)it=a[Wt],a.hasOwnProperty(Wt)&&it!=null&&!s.hasOwnProperty(Wt)&&Ue(e,n,Wt,null,s,it);for($ in s)if(it=s[$],at=a[$],s.hasOwnProperty($)&&it!==at&&(it!=null||at!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ue(e,n,$,it,s,at)}return;default:if(Wc(n)){for(var Qe in a)it=a[Qe],a.hasOwnProperty(Qe)&&it!==void 0&&!s.hasOwnProperty(Qe)&&wA(e,n,Qe,void 0,s,it);for(At in s)it=s[At],at=a[At],!s.hasOwnProperty(At)||it===at||it===void 0&&at===void 0||wA(e,n,At,it,s,at);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!s.hasOwnProperty(Y)&&Ue(e,n,Y,null,s,it);for(Et in s)it=s[Et],at=a[Et],!s.hasOwnProperty(Et)||it===at||it==null&&at==null||Ue(e,n,Et,it,s,at)}var UA=null,QA=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function Rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function LA(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var NA=null;function I0(){var e=window.event;return e&&e.type==="popstate"?e===NA?!1:(NA=e,!0):(NA=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(b0)}:wg;function b0(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function Qg(e,n){var a=n,s=0,c=0;do{var A=a.nextSibling;if(e.removeChild(a),A&&A.nodeType===8)if(a=A.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&mo(S.documentElement),a&2&&mo(S.body),a&4)for(a=S.head,mo(a),S=a.firstChild;S;){var x=S.nextSibling,N=S.nodeName;S[Aa]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=x}}if(c===0){e.removeChild(A),Mo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=A}while(a);Mo(n)}function FA(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":FA(a),fa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function R0(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(A=e.getAttribute("rel"),A==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(A!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(A=e.getAttribute("src"),(A!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&A&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var A=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===A)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function D0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function OA(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function w0(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var PA=null;function Lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Ng(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fa(e)}var Ai=new Map,Fg=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=q.d;q.d={f:U0,r:Q0,D:L0,C:N0,L:F0,m:O0,X:G0,S:P0,M:H0};function U0(){var e=ji.f(),n=Vl();return e||n}function Q0(e){var n=Li(e);n!==null&&n.tag===5&&n.type==="form"?ip(n):ji.r(e)}var rs=typeof document>"u"?null:document;function Og(e,n,a){var s=rs;if(s&&typeof n=="string"&&n){var c=He(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fg.has(c)||(Fg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",e),tn(n),s.head.appendChild(n)))}}function L0(e){ji.D(e),Og("dns-prefetch",e,null)}function N0(e,n){ji.C(e,n),Og("preconnect",e,n)}function F0(e,n,a){ji.L(e,n,a);var s=rs;if(s&&e&&n){var c='link[rel="preload"][as="'+He(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+He(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+He(a.imageSizes)+'"]')):c+='[href="'+He(e)+'"]';var A=c;switch(n){case"style":A=ss(e);break;case"script":A=os(e)}Ai.has(A)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ai.set(A,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Eo(A))||n==="script"&&s.querySelector(_o(A))||(n=s.createElement("link"),Mn(n,"link",e),tn(n),s.head.appendChild(n)))}}function O0(e,n){ji.m(e,n);var a=rs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+He(s)+'"][href="'+He(e)+'"]',A=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":A=os(e)}if(!Ai.has(A)&&(e=g({rel:"modulepreload",href:e},n),Ai.set(A,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(A)))return}s=a.createElement("link"),Mn(s,"link",e),tn(s),a.head.appendChild(s)}}}function P0(e,n,a){ji.S(e,n,a);var s=rs;if(s&&e){var c=ha(s).hoistableStyles,A=ss(e);n=n||"default";var S=c.get(A);if(!S){var x={loading:0,preload:null};if(S=s.querySelector(Eo(A)))x.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ai.get(A))&&GA(e,a);var N=S=s.createElement("link");tn(N),Mn(N,"link",e),N._p=new Promise(function($,At){N.onload=$,N.onerror=At}),N.addEventListener("load",function(){x.loading|=1}),N.addEventListener("error",function(){x.loading|=2}),x.loading|=4,$l(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:x},c.set(A,S)}}}function G0(e,n){ji.X(e,n);var a=rs;if(a&&e){var s=ha(a).hoistableScripts,c=os(e),A=s.get(c);A||(A=a.querySelector(_o(c)),A||(e=g({src:e,async:!0},n),(n=Ai.get(c))&&HA(e,n),A=a.createElement("script"),tn(A),Mn(A,"link",e),a.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},s.set(c,A))}}function H0(e,n){ji.M(e,n);var a=rs;if(a&&e){var s=ha(a).hoistableScripts,c=os(e),A=s.get(c);A||(A=a.querySelector(_o(c)),A||(e=g({src:e,async:!0,type:"module"},n),(n=Ai.get(c))&&HA(e,n),A=a.createElement("script"),tn(A),Mn(A,"link",e),a.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},s.set(c,A))}}function Pg(e,n,a,s){var c=(c=Ct.current)?jl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=ha(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ss(a.href);var A=ha(c).hoistableStyles,S=A.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},A.set(e,S),(A=c.querySelector(Eo(e)))&&!A._p&&(S.instance=A,S.state.loading=5),Ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(e,a),A||z0(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=ha(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ss(e){return'href="'+He(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function z0(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),tn(n),e.head.appendChild(n))}function os(e){return'[src="'+He(e)+'"]'}function _o(e){return"script[async]"+e}function Hg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+He(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),tn(s),Mn(s,"style",c),$l(s,a.precedence,e),n.instance=s;case"stylesheet":c=ss(a.href);var A=e.querySelector(Eo(c));if(A)return n.state.loading|=4,n.instance=A,tn(A),A;s=Gg(a),(c=Ai.get(c))&&GA(s,c),A=(e.ownerDocument||e).createElement("link"),tn(A);var S=A;return S._p=new Promise(function(x,N){S.onload=x,S.onerror=N}),Mn(A,"link",s),n.state.loading|=4,$l(A,a.precedence,e),n.instance=A;case"script":return A=os(a.src),(c=e.querySelector(_o(A)))?(n.instance=c,tn(c),c):(s=a,(c=Ai.get(A))&&(s=g({},a),HA(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),tn(c),Mn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,$l(s,a.precedence,e));return n.instance}function $l(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,A=c,S=0;S<s.length;S++){var x=s[S];if(x.dataset.precedence===n)A=x;else if(A!==c)break}A?A.parentNode.insertBefore(e,A.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function GA(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function HA(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function zg(e,n,a){if(tc===null){var s=new Map,c=tc=new Map;c.set(a,s)}else c=tc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var A=a[c];if(!(A[Aa]||A[sn]||e==="link"&&A.getAttribute("rel")==="stylesheet")&&A.namespaceURI!=="http://www.w3.org/2000/svg"){var S=A.getAttribute(n)||"";S=e+S;var x=s.get(S);x?x.push(A):s.set(S,[A])}}return s}function Vg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function V0(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function k0(){}function q0(e,n,a){if(vo===null)throw Error(r(475));var s=vo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ss(a.href),A=e.querySelector(Eo(c));if(A){e=A._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=ec.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=A,tn(A);return}A=e.ownerDocument||e,a=Gg(a),(c=Ai.get(c))&&GA(a,c),A=A.createElement("link"),tn(A);var S=A;S._p=new Promise(function(x,N){S.onload=x,S.onerror=N}),Mn(A,"link",a),n.instance=A}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=ec.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function X0(){if(vo===null)throw Error(r(475));var e=vo;return e.stylesheets&&e.count===0&&zA(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&zA(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ec(){if(this.count--,this.count===0){if(this.stylesheets)zA(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function zA(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(Y0,e),nc=null,ec.call(e))}function Y0(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var s=a.get(null);else{a=new Map,nc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),A=0;A<c.length;A++){var S=c[A];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),A=a.get(S)||s,A===s&&a.set(null,c),a.set(S,c),this.count++,s=ec.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),A?A.parentNode.insertBefore(c,A.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:D,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function W0(e,n,a,s,c,A,S,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=A,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function qg(e,n,a,s,c,A,S,x,N,$,At,Et){return e=new W0(e,n,a,S,x,N,$,Et),n=1,A===!0&&(n|=24),A=Kn(3,null,null,n),e.current=A,A.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,A.memoizedState={element:s,isDehydrated:a,cache:n},Bu(A),e}function Xg(e){return e?(e=Or,e):Or}function Yg(e,n,a,s,c,A){c=Xg(c),s.context===null?s.context=c:s.pendingContext=c,s=Ea(n),s.payload={element:a},A=A===void 0?null:A,A!==null&&(s.callback=A),a=_a(e,s,n),a!==null&&(ti(a,e,n),Js(a,e,n))}function Wg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function VA(e,n){Wg(e,n),(e=e.alternate)&&Wg(e,n)}function Kg(e){if(e.tag===13){var n=Fr(e,67108864);n!==null&&ti(n,e,67108864),VA(e,67108864)}}var ic=!0;function K0(e,n,a,s){var c=L.T;L.T=null;var A=q.p;try{q.p=2,kA(e,n,a,s)}finally{q.p=A,L.T=c}}function J0(e,n,a,s){var c=L.T;L.T=null;var A=q.p;try{q.p=8,kA(e,n,a,s)}finally{q.p=A,L.T=c}}function kA(e,n,a,s){if(ic){var c=qA(s);if(c===null)DA(e,n,s,ac,a),Zg(e,s);else if(j0(c,e,n,a,s))s.stopPropagation();else if(Zg(e,s),n&4&&-1<Z0.indexOf(e)){for(;c!==null;){var A=Li(c);if(A!==null)switch(A.tag){case 3:if(A=A.stateNode,A.current.memoizedState.isDehydrated){var S=Qt(A.pendingLanes);if(S!==0){var x=A;for(x.pendingLanes|=2,x.entangledLanes|=2;S;){var N=1<<31-Pt(S);x.entanglements[1]|=N,S&=~N}Ti(A),(Te&6)===0&&(Hl=ee()+500,ho(0))}}break;case 13:x=Fr(A,2),x!==null&&ti(x,A,2),Vl(),VA(A,2)}if(A=qA(s),A===null&&DA(e,n,s,ac,a),A===c)break;c=A}c!==null&&s.stopPropagation()}else DA(e,n,s,null,a)}}function qA(e){return e=Jc(e),XA(e)}var ac=null;function XA(e){if(ac=null,e=Qi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case Re:return 2;case Gt:return 8;case U:case M:return 32;case nt:return 268435456;default:return 32}default:return 32}}var YA=!1,wa=null,Ua=null,Qa=null,So=new Map,yo=new Map,La=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function xo(e,n,a,s,c,A){return e===null||e.nativeEvent!==A?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:A,targetContainers:[c]},n!==null&&(n=Li(n),n!==null&&Kg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function j0(e,n,a,s,c){switch(n){case"focusin":return wa=xo(wa,e,n,a,s,c),!0;case"dragenter":return Ua=xo(Ua,e,n,a,s,c),!0;case"mouseover":return Qa=xo(Qa,e,n,a,s,c),!0;case"pointerover":var A=c.pointerId;return So.set(A,xo(So.get(A)||null,e,n,a,s,c)),!0;case"gotpointercapture":return A=c.pointerId,yo.set(A,xo(yo.get(A)||null,e,n,a,s,c)),!0}return!1}function jg(e){var n=Qi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Yn(e.priority,function(){if(a.tag===13){var s=$n();s=Ge(s);var c=Fr(a,s);c!==null&&ti(c,a,s),VA(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qA(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Kc=s,a.target.dispatchEvent(s),Kc=null}else return n=Li(a),n!==null&&Kg(n),e.blockedOn=a,!1;n.shift()}return!0}function $g(e,n,a){rc(e)&&a.delete(n)}function $0(){YA=!1,wa!==null&&rc(wa)&&(wa=null),Ua!==null&&rc(Ua)&&(Ua=null),Qa!==null&&rc(Qa)&&(Qa=null),So.forEach($g),yo.forEach($g)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,YA||(YA=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$0)))}var oc=null;function tm(e){oc!==e&&(oc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(XA(s||a)===null)continue;break}var A=Li(a);A!==null&&(e.splice(n,3),n-=3,Xu(A,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Mo(e){function n(N){return sc(N,e)}wa!==null&&sc(wa,e),Ua!==null&&sc(Ua,e),Qa!==null&&sc(Qa,e),So.forEach(n),yo.forEach(n);for(var a=0;a<La.length;a++){var s=La[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],A=a[s+1],S=c[Cn]||null;if(typeof A=="function")S||tm(a);else if(S){var x=null;if(A&&A.hasAttribute("formAction")){if(c=A,S=A[Cn]||null)x=S.formAction;else if(XA(c)!==null)continue}else x=S.action;typeof x=="function"?a[s+1]=x:(a.splice(s,3),s-=3),tm(a)}}}function WA(e){this._internalRoot=e}lc.prototype.render=WA.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();Yg(a,s,e,n,null,null)},lc.prototype.unmount=WA.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yg(e.current,2,null,e,null,null),Vl(),n[Pn]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Se();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&jg(e)}};var em=t.version;if(em!=="19.1.0")throw Error(r(527,em,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var tv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ft=cc.inject(tv),Ut=cc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=mp,A=Ep,S=_p,x=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(A=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(x=n.unstable_transitionCallbacks)),n=qg(e,1,!1,null,null,a,s,c,A,S,x,null),e[Pn]=n.current,RA(e),new WA(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",A=mp,S=Ep,x=_p,N=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(A=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=qg(e,1,!0,n,a??null,s,c,A,S,x,N,$),n.context=Xg(null),a=n.current,s=$n(),s=Ge(s),c=Ea(s),c.callback=null,_a(a,c,s),a=s,n.current.lanes=a,mt(n,a),Ti(n),e[Pn]=n.current,RA(e),new lc(n)},Bo.version="19.1.0",Bo}var Am;function uv(){if(Am)return ZA.exports;Am=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ZA.exports=cv(),ZA.exports}var Av=uv();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="176",fv=0,fm=1,hv=2,hE=1,dv=2,ra=3,Wa=0,Xn=1,Ri=2,Xa=0,ys=1,hm=2,dm=3,pm=4,pv=5,yr=100,gv=101,mv=102,Ev=103,_v=104,vv=200,Cv=201,Sv=202,yv=203,Gf=204,Hf=205,xv=206,Mv=207,Iv=208,Bv=209,Tv=210,bv=211,Rv=212,Dv=213,wv=214,zf=0,Vf=1,kf=2,Bs=3,qf=4,Xf=5,Yf=6,Wf=7,dE=0,Uv=1,Qv=2,Ya=0,Lv=1,Nv=2,Fv=3,Ov=4,Pv=5,Gv=6,Hv=7,pE=300,Ir=301,Ts=302,Kf=303,Jf=304,Hc=306,Zf=1e3,Va=1001,jf=1002,ii=1003,zv=1004,uc=1005,wn=1006,ef=1007,oa=1008,En=1009,gE=1010,mE=1011,Po=1012,_h=1013,Br=1014,qn=1015,Si=1016,vh=1017,Ch=1018,Go=1020,EE=35902,Sh=1021,yh=1022,_n=1023,Ho=1026,zo=1027,ka=1028,zc=1029,qa=1030,Vc=1031,Vv=1032,kc=1033,No=33776,xs=33777,Fo=33778,Ms=33779,Vo=35840,Qc=35841,ko=35842,Lc=35843,qo=36196,Xo=37492,Yo=37496,bs=37808,Nc=37809,$f=37810,th=37811,Wo=37812,eh=37813,nh=37814,ih=37815,ah=37816,rh=37817,sh=37818,oh=37819,lh=37820,ch=37821,Oo=36492,uh=36494,Fc=36495,_E=36283,Ah=36284,fh=36285,hh=36286,kv=3200,qv=3201,Xv=0,Yv=1,Di="",On="srgb",Tr="srgb-linear",Oc="linear",Le="srgb",ls=7680,gm=519,Wv=512,Kv=513,Jv=514,vE=515,Zv=516,jv=517,$v=518,tC=519,mm=35044,Em="300 es",la=2e3,Pc=2001;class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=Math.PI/180,dh=180/Math.PI;function Ko(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function _e(o,t,i){return Math.max(t,Math.min(i,o))}function eC(o,t){return(o%t+t)%t}function af(o,t,i){return(1-i)*o+i*t}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(t=0,i=0){Pe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,r,l,u,f,h,p,d){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,h,p,d)}set(t,i,r,l,u,f,h,p,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],p=r[6],d=r[1],g=r[4],E=r[7],_=r[2],C=r[5],y=r[8],I=l[0],v=l[3],m=l[6],Q=l[1],D=l[4],b=l[7],P=l[2],O=l[5],F=l[8];return u[0]=f*I+h*Q+p*P,u[3]=f*v+h*D+p*O,u[6]=f*m+h*b+p*F,u[1]=d*I+g*Q+E*P,u[4]=d*v+g*D+E*O,u[7]=d*m+g*b+E*F,u[2]=_*I+C*Q+y*P,u[5]=_*v+C*D+y*O,u[8]=_*m+C*b+y*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return i*f*g-i*h*d-r*u*g+r*h*p+l*u*d-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8],E=g*f-h*d,_=h*p-g*u,C=d*u-f*p,y=i*E+r*_+l*C;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/y;return t[0]=E*I,t[1]=(l*d-g*r)*I,t[2]=(h*r-l*f)*I,t[3]=_*I,t[4]=(g*i-l*p)*I,t[5]=(l*u-h*i)*I,t[6]=C*I,t[7]=(r*p-d*i)*I,t[8]=(f*i-r*u)*I,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,h){const p=Math.cos(u),d=Math.sin(u);return this.set(r*p,r*d,-r*(p*f+d*h)+f+t,-l*d,l*p,-l*(-d*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(rf.makeScale(t,i)),this}rotate(t){return this.premultiply(rf.makeRotation(-t)),this}translate(t,i){return this.premultiply(rf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rf=new oe;function CE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nC(){const o=Gc("canvas");return o.style.display="block",o}const _m={};function wc(o){o in _m||(_m[o]=!0,console.warn(o))}function iC(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function aC(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rC(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vm=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sC(){const o={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Le&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Le&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Di?Oc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Tr]:{primaries:t,whitePoint:r,transfer:Oc,toXYZ:vm,fromXYZ:Cm,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:vm,fromXYZ:Cm,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),o}const Me=sC();function ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cs;class oC{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{cs===void 0&&(cs=Gc("canvas")),cs.width=t.width,cs.height=t.height;const l=cs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=cs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ca(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lC=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=Ko(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(sf(l[f].image)):u.push(sf(l[f]))}else u=sf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function sf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?oC.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cC=0;class Un extends Ds{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=Va,l=Va,u=wn,f=oa,h=_n,p=En,d=Un.DEFAULT_ANISOTROPY,g=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cC++}),this.uuid=Ko(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zf:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case jf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zf:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case jf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=pE;Un.DEFAULT_ANISOTROPY=1;class je{constructor(t=0,i=0,r=0,l=1){je.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,d=p[0],g=p[4],E=p[8],_=p[1],C=p[5],y=p[9],I=p[2],v=p[6],m=p[10];if(Math.abs(g-_)<.01&&Math.abs(E-I)<.01&&Math.abs(y-v)<.01){if(Math.abs(g+_)<.1&&Math.abs(E+I)<.1&&Math.abs(y+v)<.1&&Math.abs(d+C+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(d+1)/2,b=(C+1)/2,P=(m+1)/2,O=(g+_)/4,F=(E+I)/4,V=(y+v)/4;return D>b&&D>P?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=O/r,u=F/r):b>P?b<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(b),r=O/l,u=V/l):P<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),r=F/u,l=V/u),this.set(r,l,u,i),this}let Q=Math.sqrt((v-y)*(v-y)+(E-I)*(E-I)+(_-g)*(_-g));return Math.abs(Q)<.001&&(Q=1),this.x=(v-y)/Q,this.y=(E-I)/Q,this.z=(_-g)/Q,this.w=Math.acos((d+C+m-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uC extends Ds{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new je(0,0,t,i),this.scissorTest=!1,this.viewport=new je(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Un(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new xh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends uC{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class SE extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,h){let p=r[l+0],d=r[l+1],g=r[l+2],E=r[l+3];const _=u[f+0],C=u[f+1],y=u[f+2],I=u[f+3];if(h===0){t[i+0]=p,t[i+1]=d,t[i+2]=g,t[i+3]=E;return}if(h===1){t[i+0]=_,t[i+1]=C,t[i+2]=y,t[i+3]=I;return}if(E!==I||p!==_||d!==C||g!==y){let v=1-h;const m=p*_+d*C+g*y+E*I,Q=m>=0?1:-1,D=1-m*m;if(D>Number.EPSILON){const P=Math.sqrt(D),O=Math.atan2(P,m*Q);v=Math.sin(v*O)/P,h=Math.sin(h*O)/P}const b=h*Q;if(p=p*v+_*b,d=d*v+C*b,g=g*v+y*b,E=E*v+I*b,v===1-h){const P=1/Math.sqrt(p*p+d*d+g*g+E*E);p*=P,d*=P,g*=P,E*=P}}t[i]=p,t[i+1]=d,t[i+2]=g,t[i+3]=E}static multiplyQuaternionsFlat(t,i,r,l,u,f){const h=r[l],p=r[l+1],d=r[l+2],g=r[l+3],E=u[f],_=u[f+1],C=u[f+2],y=u[f+3];return t[i]=h*y+g*E+p*C-d*_,t[i+1]=p*y+g*_+d*E-h*C,t[i+2]=d*y+g*C+h*_-p*E,t[i+3]=g*y-h*E-p*_-d*C,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,h=Math.cos,p=Math.sin,d=h(r/2),g=h(l/2),E=h(u/2),_=p(r/2),C=p(l/2),y=p(u/2);switch(f){case"XYZ":this._x=_*g*E+d*C*y,this._y=d*C*E-_*g*y,this._z=d*g*y+_*C*E,this._w=d*g*E-_*C*y;break;case"YXZ":this._x=_*g*E+d*C*y,this._y=d*C*E-_*g*y,this._z=d*g*y-_*C*E,this._w=d*g*E+_*C*y;break;case"ZXY":this._x=_*g*E-d*C*y,this._y=d*C*E+_*g*y,this._z=d*g*y+_*C*E,this._w=d*g*E-_*C*y;break;case"ZYX":this._x=_*g*E-d*C*y,this._y=d*C*E+_*g*y,this._z=d*g*y-_*C*E,this._w=d*g*E+_*C*y;break;case"YZX":this._x=_*g*E+d*C*y,this._y=d*C*E+_*g*y,this._z=d*g*y-_*C*E,this._w=d*g*E-_*C*y;break;case"XZY":this._x=_*g*E-d*C*y,this._y=d*C*E-_*g*y,this._z=d*g*y+_*C*E,this._w=d*g*E+_*C*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],p=i[9],d=i[2],g=i[6],E=i[10],_=r+h+E;if(_>0){const C=.5/Math.sqrt(_+1);this._w=.25/C,this._x=(g-p)*C,this._y=(u-d)*C,this._z=(f-l)*C}else if(r>h&&r>E){const C=2*Math.sqrt(1+r-h-E);this._w=(g-p)/C,this._x=.25*C,this._y=(l+f)/C,this._z=(u+d)/C}else if(h>E){const C=2*Math.sqrt(1+h-r-E);this._w=(u-d)/C,this._x=(l+f)/C,this._y=.25*C,this._z=(p+g)/C}else{const C=2*Math.sqrt(1+E-r-h);this._w=(f-l)/C,this._x=(u+d)/C,this._y=(p+g)/C,this._z=.25*C}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,h=i._x,p=i._y,d=i._z,g=i._w;return this._x=r*g+f*h+l*d-u*p,this._y=l*g+f*p+u*h-r*d,this._z=u*g+f*d+r*p-l*h,this._w=f*g-r*h-l*p-u*d,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const C=1-i;return this._w=C*f+i*this._w,this._x=C*r+i*this._x,this._y=C*l+i*this._y,this._z=C*u+i*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),E=Math.sin((1-i)*g)/d,_=Math.sin(i*g)/d;return this._w=f*E+this._w*_,this._x=r*E+this._x*_,this._y=l*E+this._y*_,this._z=u*E+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Sm.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Sm.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,h=t.z,p=t.w,d=2*(f*l-h*r),g=2*(h*i-u*l),E=2*(u*r-f*i);return this.x=i+p*d+f*E-h*g,this.y=r+p*g+h*d-u*E,this.z=l+p*E+u*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return of.copy(this).projectOnVector(t),this.sub(of)}reflect(t){return this.sub(of.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const of=new ot,Sm=new Jo;class Zo{constructor(t=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,mi):mi.fromBufferAttribute(u,f),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ac.copy(r.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),fc.subVectors(this.max,bo),us.subVectors(t.a,bo),As.subVectors(t.b,bo),fs.subVectors(t.c,bo),Fa.subVectors(As,us),Oa.subVectors(fs,As),pr.subVectors(us,fs);let i=[0,-Fa.z,Fa.y,0,-Oa.z,Oa.y,0,-pr.z,pr.y,Fa.z,0,-Fa.x,Oa.z,0,-Oa.x,pr.z,0,-pr.x,-Fa.y,Fa.x,0,-Oa.y,Oa.x,0,-pr.y,pr.x,0];return!lf(i,us,As,fs,fc)||(i=[1,0,0,0,1,0,0,0,1],!lf(i,us,As,fs,fc))?!1:(hc.crossVectors(Fa,Oa),i=[hc.x,hc.y,hc.z],lf(i,us,As,fs,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],mi=new ot,Ac=new Zo,us=new ot,As=new ot,fs=new ot,Fa=new ot,Oa=new ot,pr=new ot,bo=new ot,fc=new ot,hc=new ot,gr=new ot;function lf(o,t,i,r,l){for(let u=0,f=o.length-3;u<=f;u+=3){gr.fromArray(o,u);const h=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),p=t.dot(gr),d=i.dot(gr),g=r.dot(gr);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const AC=new Zo,Ro=new ot,cf=new ot;class Mh{constructor(t=new ot,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):AC.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(cf)),this.expandByPoint(Ro.copy(t.center).sub(cf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new ot,uf=new ot,dc=new ot,Pa=new ot,Af=new ot,pc=new ot,ff=new ot;class fC{constructor(t=new ot,i=new ot(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){uf.copy(t).add(i).multiplyScalar(.5),dc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(uf);const u=t.distanceTo(i)*.5,f=-this.direction.dot(dc),h=Pa.dot(this.direction),p=-Pa.dot(dc),d=Pa.lengthSq(),g=Math.abs(1-f*f);let E,_,C,y;if(g>0)if(E=f*p-h,_=f*h-p,y=u*g,E>=0)if(_>=-y)if(_<=y){const I=1/g;E*=I,_*=I,C=E*(E+f*_+2*h)+_*(f*E+_+2*p)+d}else _=u,E=Math.max(0,-(f*_+h)),C=-E*E+_*(_+2*p)+d;else _=-u,E=Math.max(0,-(f*_+h)),C=-E*E+_*(_+2*p)+d;else _<=-y?(E=Math.max(0,-(-f*u+h)),_=E>0?-u:Math.min(Math.max(-u,-p),u),C=-E*E+_*(_+2*p)+d):_<=y?(E=0,_=Math.min(Math.max(-u,-p),u),C=_*(_+2*p)+d):(E=Math.max(0,-(f*u+h)),_=E>0?u:Math.min(Math.max(-u,-p),u),C=-E*E+_*(_+2*p)+d);else _=f>0?-u:u,E=Math.max(0,-(f*_+h)),C=-E*E+_*(_+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,E),l&&l.copy(uf).addScaledVector(dc,_),C}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,h,p;const d=1/this.direction.x,g=1/this.direction.y,E=1/this.direction.z,_=this.origin;return d>=0?(r=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(r=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),g>=0?(u=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),E>=0?(h=(t.min.z-_.z)*E,p=(t.max.z-_.z)*E):(h=(t.max.z-_.z)*E,p=(t.min.z-_.z)*E),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){Af.subVectors(i,t),pc.subVectors(r,t),ff.crossVectors(Af,pc);let f=this.direction.dot(ff),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Pa.subVectors(this.origin,t);const p=h*this.direction.dot(pc.crossVectors(Pa,pc));if(p<0)return null;const d=h*this.direction.dot(Af.cross(Pa));if(d<0||p+d>f)return null;const g=-h*Pa.dot(ff);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,r,l,u,f,h,p,d,g,E,_,C,y,I,v){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,h,p,d,g,E,_,C,y,I,v)}set(t,i,r,l,u,f,h,p,d,g,E,_,C,y,I,v){const m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=l,m[1]=u,m[5]=f,m[9]=h,m[13]=p,m[2]=d,m[6]=g,m[10]=E,m[14]=_,m[3]=C,m[7]=y,m[11]=I,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),u=1/hs.setFromMatrixColumn(t,1).length(),f=1/hs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),d=Math.sin(l),g=Math.cos(u),E=Math.sin(u);if(t.order==="XYZ"){const _=f*g,C=f*E,y=h*g,I=h*E;i[0]=p*g,i[4]=-p*E,i[8]=d,i[1]=C+y*d,i[5]=_-I*d,i[9]=-h*p,i[2]=I-_*d,i[6]=y+C*d,i[10]=f*p}else if(t.order==="YXZ"){const _=p*g,C=p*E,y=d*g,I=d*E;i[0]=_+I*h,i[4]=y*h-C,i[8]=f*d,i[1]=f*E,i[5]=f*g,i[9]=-h,i[2]=C*h-y,i[6]=I+_*h,i[10]=f*p}else if(t.order==="ZXY"){const _=p*g,C=p*E,y=d*g,I=d*E;i[0]=_-I*h,i[4]=-f*E,i[8]=y+C*h,i[1]=C+y*h,i[5]=f*g,i[9]=I-_*h,i[2]=-f*d,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const _=f*g,C=f*E,y=h*g,I=h*E;i[0]=p*g,i[4]=y*d-C,i[8]=_*d+I,i[1]=p*E,i[5]=I*d+_,i[9]=C*d-y,i[2]=-d,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const _=f*p,C=f*d,y=h*p,I=h*d;i[0]=p*g,i[4]=I-_*E,i[8]=y*E+C,i[1]=E,i[5]=f*g,i[9]=-h*g,i[2]=-d*g,i[6]=C*E+y,i[10]=_-I*E}else if(t.order==="XZY"){const _=f*p,C=f*d,y=h*p,I=h*d;i[0]=p*g,i[4]=-E,i[8]=d*g,i[1]=_*E+I,i[5]=f*g,i[9]=C*E-y,i[2]=y*E-C,i[6]=h*g,i[10]=I*E+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hC,t,dC)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ga.crossVectors(r,ei),Ga.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ga.crossVectors(r,ei)),Ga.normalize(),gc.crossVectors(ei,Ga),l[0]=Ga.x,l[4]=gc.x,l[8]=ei.x,l[1]=Ga.y,l[5]=gc.y,l[9]=ei.y,l[2]=Ga.z,l[6]=gc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],p=r[8],d=r[12],g=r[1],E=r[5],_=r[9],C=r[13],y=r[2],I=r[6],v=r[10],m=r[14],Q=r[3],D=r[7],b=r[11],P=r[15],O=l[0],F=l[4],V=l[8],R=l[12],T=l[1],G=l[5],tt=l[9],et=l[13],ut=l[2],lt=l[6],L=l[10],q=l[14],k=l[3],_t=l[7],w=l[11],Z=l[15];return u[0]=f*O+h*T+p*ut+d*k,u[4]=f*F+h*G+p*lt+d*_t,u[8]=f*V+h*tt+p*L+d*w,u[12]=f*R+h*et+p*q+d*Z,u[1]=g*O+E*T+_*ut+C*k,u[5]=g*F+E*G+_*lt+C*_t,u[9]=g*V+E*tt+_*L+C*w,u[13]=g*R+E*et+_*q+C*Z,u[2]=y*O+I*T+v*ut+m*k,u[6]=y*F+I*G+v*lt+m*_t,u[10]=y*V+I*tt+v*L+m*w,u[14]=y*R+I*et+v*q+m*Z,u[3]=Q*O+D*T+b*ut+P*k,u[7]=Q*F+D*G+b*lt+P*_t,u[11]=Q*V+D*tt+b*L+P*w,u[15]=Q*R+D*et+b*q+P*Z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],h=t[5],p=t[9],d=t[13],g=t[2],E=t[6],_=t[10],C=t[14],y=t[3],I=t[7],v=t[11],m=t[15];return y*(+u*p*E-l*d*E-u*h*_+r*d*_+l*h*C-r*p*C)+I*(+i*p*C-i*d*_+u*f*_-l*f*C+l*d*g-u*p*g)+v*(+i*d*E-i*h*C-u*f*E+r*f*C+u*h*g-r*d*g)+m*(-l*h*g-i*p*E+i*h*_+l*f*E-r*f*_+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8],E=t[9],_=t[10],C=t[11],y=t[12],I=t[13],v=t[14],m=t[15],Q=E*v*d-I*_*d+I*p*C-h*v*C-E*p*m+h*_*m,D=y*_*d-g*v*d-y*p*C+f*v*C+g*p*m-f*_*m,b=g*I*d-y*E*d+y*h*C-f*I*C-g*h*m+f*E*m,P=y*E*p-g*I*p-y*h*_+f*I*_+g*h*v-f*E*v,O=i*Q+r*D+l*b+u*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=Q*F,t[1]=(I*_*u-E*v*u-I*l*C+r*v*C+E*l*m-r*_*m)*F,t[2]=(h*v*u-I*p*u+I*l*d-r*v*d-h*l*m+r*p*m)*F,t[3]=(E*p*u-h*_*u-E*l*d+r*_*d+h*l*C-r*p*C)*F,t[4]=D*F,t[5]=(g*v*u-y*_*u+y*l*C-i*v*C-g*l*m+i*_*m)*F,t[6]=(y*p*u-f*v*u-y*l*d+i*v*d+f*l*m-i*p*m)*F,t[7]=(f*_*u-g*p*u+g*l*d-i*_*d-f*l*C+i*p*C)*F,t[8]=b*F,t[9]=(y*E*u-g*I*u-y*r*C+i*I*C+g*r*m-i*E*m)*F,t[10]=(f*I*u-y*h*u+y*r*d-i*I*d-f*r*m+i*h*m)*F,t[11]=(g*h*u-f*E*u-g*r*d+i*E*d+f*r*C-i*h*C)*F,t[12]=P*F,t[13]=(g*I*l-y*E*l+y*r*_-i*I*_-g*r*v+i*E*v)*F,t[14]=(y*h*l-f*I*l-y*r*p+i*I*p+f*r*v-i*h*v)*F,t[15]=(f*E*l-g*h*l+g*r*p-i*E*p-f*r*_+i*h*_)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,h=t.y,p=t.z,d=u*f,g=u*h;return this.set(d*f+r,d*h-l*p,d*p+l*h,0,d*h+l*p,g*h+r,g*p-l*f,0,d*p-l*h,g*p+l*f,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,p=i._w,d=u+u,g=f+f,E=h+h,_=u*d,C=u*g,y=u*E,I=f*g,v=f*E,m=h*E,Q=p*d,D=p*g,b=p*E,P=r.x,O=r.y,F=r.z;return l[0]=(1-(I+m))*P,l[1]=(C+b)*P,l[2]=(y-D)*P,l[3]=0,l[4]=(C-b)*O,l[5]=(1-(_+m))*O,l[6]=(v+Q)*O,l[7]=0,l[8]=(y+D)*F,l[9]=(v-Q)*F,l[10]=(1-(_+I))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=hs.set(l[0],l[1],l[2]).length();const f=hs.set(l[4],l[5],l[6]).length(),h=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const d=1/u,g=1/f,E=1/h;return Ei.elements[0]*=d,Ei.elements[1]*=d,Ei.elements[2]*=d,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=E,Ei.elements[9]*=E,Ei.elements[10]*=E,i.setFromRotationMatrix(Ei),r.x=u,r.y=f,r.z=h,this}makePerspective(t,i,r,l,u,f,h=la){const p=this.elements,d=2*u/(i-t),g=2*u/(r-l),E=(i+t)/(i-t),_=(r+l)/(r-l);let C,y;if(h===la)C=-(f+u)/(f-u),y=-2*f*u/(f-u);else if(h===Pc)C=-f/(f-u),y=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=E,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=C,p[14]=y,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,f,h=la){const p=this.elements,d=1/(i-t),g=1/(r-l),E=1/(f-u),_=(i+t)*d,C=(r+l)*g;let y,I;if(h===la)y=(f+u)*E,I=-2*E;else if(h===Pc)y=u*E,I=-1*E;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-C,p[2]=0,p[6]=0,p[10]=I,p[14]=-y,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const hs=new ot,Ei=new rn,hC=new ot(0,0,0),dC=new ot(1,1,1),Ga=new ot,gc=new ot,ei=new ot,ym=new rn,xm=new Jo;class ua{constructor(t=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],h=l[8],p=l[1],d=l[5],g=l[9],E=l[2],_=l[6],C=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,C),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,C),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-E,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-E,C),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-_e(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(_,C),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-E,u)):(this._x=0,this._y=Math.atan2(h,C));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,C),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ym.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ym,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return xm.setFromEuler(this),this.setFromQuaternion(xm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class xE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pC=0;const Mm=new ot,ds=new Jo,ea=new rn,mc=new ot,Do=new ot,gC=new ot,mC=new Jo,Im=new ot(1,0,0),Bm=new ot(0,1,0),Tm=new ot(0,0,1),bm={type:"added"},EC={type:"removed"},ps={type:"childadded",child:null},hf={type:"childremoved",child:null};class ai extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const t=new ot,i=new ua,r=new Jo,l=new ot(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new oe}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Im,t)}rotateY(t){return this.rotateOnAxis(Bm,t)}rotateZ(t){return this.rotateOnAxis(Tm,t)}translateOnAxis(t,i){return Mm.copy(t).applyQuaternion(this.quaternion),this.position.add(Mm.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Im,t)}translateY(t){return this.translateOnAxis(Bm,t)}translateZ(t){return this.translateOnAxis(Tm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?mc.copy(t):mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Do,mc,this.up):ea.lookAt(mc,Do,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(ea),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bm),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(EC),hf.child=t,this.dispatchEvent(hf),hf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bm),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,gC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,mC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const E=p[d];u(t.shapes,E)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),d=f(t.textures),g=f(t.images),E=f(t.shapes),_=f(t.skeletons),C=f(t.animations),y=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),E.length>0&&(r.shapes=E),_.length>0&&(r.skeletons=_),C.length>0&&(r.animations=C),y.length>0&&(r.nodes=y)}return r.object=l,r;function f(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ai.DEFAULT_UP=new ot(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new ot,na=new ot,df=new ot,ia=new ot,gs=new ot,ms=new ot,Rm=new ot,pf=new ot,gf=new ot,mf=new ot,Ef=new je,_f=new je,vf=new je;class Ci{constructor(t=new ot,i=new ot,r=new ot){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),_i.subVectors(t,i),l.cross(_i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){_i.subVectors(l,i),na.subVectors(r,i),df.subVectors(t,i);const f=_i.dot(_i),h=_i.dot(na),p=_i.dot(df),d=na.dot(na),g=na.dot(df),E=f*d-h*h;if(E===0)return u.set(0,0,0),null;const _=1/E,C=(d*p-h*g)*_,y=(f*g-h*p)*_;return u.set(1-C-y,y,C)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,f,h,p){return this.getBarycoord(t,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ia.x),p.addScaledVector(f,ia.y),p.addScaledVector(h,ia.z),p)}static getInterpolatedAttribute(t,i,r,l,u,f){return Ef.setScalar(0),_f.setScalar(0),vf.setScalar(0),Ef.fromBufferAttribute(t,i),_f.fromBufferAttribute(t,r),vf.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Ef,u.x),f.addScaledVector(_f,u.y),f.addScaledVector(vf,u.z),f}static isFrontFacing(t,i,r,l){return _i.subVectors(r,i),na.subVectors(t,i),_i.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),na.subVectors(this.a,this.b),_i.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ci.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,h;gs.subVectors(l,r),ms.subVectors(u,r),pf.subVectors(t,r);const p=gs.dot(pf),d=ms.dot(pf);if(p<=0&&d<=0)return i.copy(r);gf.subVectors(t,l);const g=gs.dot(gf),E=ms.dot(gf);if(g>=0&&E<=g)return i.copy(l);const _=p*E-g*d;if(_<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(gs,f);mf.subVectors(t,u);const C=gs.dot(mf),y=ms.dot(mf);if(y>=0&&C<=y)return i.copy(u);const I=C*d-p*y;if(I<=0&&d>=0&&y<=0)return h=d/(d-y),i.copy(r).addScaledVector(ms,h);const v=g*y-C*E;if(v<=0&&E-g>=0&&C-y>=0)return Rm.subVectors(u,l),h=(E-g)/(E-g+(C-y)),i.copy(l).addScaledVector(Rm,h);const m=1/(v+I+_);return f=I*m,h=_*m,i.copy(r).addScaledVector(gs,f).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ME={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Cf(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ne{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Me.workingColorSpace){return this.r=t,this.g=i,this.b=r,Me.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Me.workingColorSpace){if(t=eC(t,1),i=_e(i,0,1),r=_e(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Cf(f,u,t+1/3),this.g=Cf(f,u,t),this.b=Cf(f,u,t-1/3)}return Me.toWorkingColorSpace(this,l),this}setStyle(t,i=On){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=On){const r=ME[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return Me.fromWorkingColorSpace(Dn.copy(this),t),Math.round(_e(Dn.r*255,0,255))*65536+Math.round(_e(Dn.g*255,0,255))*256+Math.round(_e(Dn.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Me.workingColorSpace){Me.fromWorkingColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let p,d;const g=(h+f)/2;if(h===f)p=0,d=0;else{const E=f-h;switch(d=g<=.5?E/(f+h):E/(2-f-h),f){case r:p=(l-u)/E+(l<u?6:0);break;case l:p=(u-r)/E+2;break;case u:p=(r-l)/E+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,i=Me.workingColorSpace){return Me.fromWorkingColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=On){Me.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==On?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(Ec);const r=af(Ha.h,Ec.h,i),l=af(Ha.s,Ec.s,i),u=af(Ha.l,Ec.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ne;Ne.NAMES=ME;let _C=0;class qc extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_C++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=ys,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Hf,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gf&&(r.blendSrc=this.blendSrc),this.blendDst!==Hf&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ih extends qc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=dE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new ot,_c=new Pe;let vC=0;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vC++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=mm,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mm&&(t.usage=this.usage),t}}class IE extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class BE extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Mr extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let CC=0;const fi=new rn,Sf=new ai,Es=new ot,ni=new Zo,wo=new Zo,mn=new ot;class Rr extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CC++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(CE(t)?BE:IE)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,r){return fi.makeTranslation(t,i,r),this.applyMatrix4(fi),this}scale(t,i,r){return fi.makeScale(t,i,r),this.applyMatrix4(fi),this}lookAt(t){return Sf.lookAt(t),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Mr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors(ni.min,wo.min),ni.expandByPoint(mn),mn.addVectors(ni.max,wo.max),ni.expandByPoint(mn)):(ni.expandByPoint(wo.min),ni.expandByPoint(wo.max))}ni.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)mn.fromBufferAttribute(h,d),p&&(Es.fromBufferAttribute(t,d),mn.add(Es)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let V=0;V<r.count;V++)h[V]=new ot,p[V]=new ot;const d=new ot,g=new ot,E=new ot,_=new Pe,C=new Pe,y=new Pe,I=new ot,v=new ot;function m(V,R,T){d.fromBufferAttribute(r,V),g.fromBufferAttribute(r,R),E.fromBufferAttribute(r,T),_.fromBufferAttribute(u,V),C.fromBufferAttribute(u,R),y.fromBufferAttribute(u,T),g.sub(d),E.sub(d),C.sub(_),y.sub(_);const G=1/(C.x*y.y-y.x*C.y);isFinite(G)&&(I.copy(g).multiplyScalar(y.y).addScaledVector(E,-C.y).multiplyScalar(G),v.copy(E).multiplyScalar(C.x).addScaledVector(g,-y.x).multiplyScalar(G),h[V].add(I),h[R].add(I),h[T].add(I),p[V].add(v),p[R].add(v),p[T].add(v))}let Q=this.groups;Q.length===0&&(Q=[{start:0,count:t.count}]);for(let V=0,R=Q.length;V<R;++V){const T=Q[V],G=T.start,tt=T.count;for(let et=G,ut=G+tt;et<ut;et+=3)m(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const D=new ot,b=new ot,P=new ot,O=new ot;function F(V){P.fromBufferAttribute(l,V),O.copy(P);const R=h[V];D.copy(R),D.sub(P.multiplyScalar(P.dot(R))).normalize(),b.crossVectors(O,R);const G=b.dot(p[V])<0?-1:1;f.setXYZW(V,D.x,D.y,D.z,G)}for(let V=0,R=Q.length;V<R;++V){const T=Q[V],G=T.start,tt=T.count;for(let et=G,ut=G+tt;et<ut;et+=3)F(t.getX(et+0)),F(t.getX(et+1)),F(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,C=r.count;_<C;_++)r.setXYZ(_,0,0,0);const l=new ot,u=new ot,f=new ot,h=new ot,p=new ot,d=new ot,g=new ot,E=new ot;if(t)for(let _=0,C=t.count;_<C;_+=3){const y=t.getX(_+0),I=t.getX(_+1),v=t.getX(_+2);l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,I),f.fromBufferAttribute(i,v),g.subVectors(f,u),E.subVectors(l,u),g.cross(E),h.fromBufferAttribute(r,y),p.fromBufferAttribute(r,I),d.fromBufferAttribute(r,v),h.add(g),p.add(g),d.add(g),r.setXYZ(y,h.x,h.y,h.z),r.setXYZ(I,p.x,p.y,p.z),r.setXYZ(v,d.x,d.y,d.z)}else for(let _=0,C=i.count;_<C;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,u),E.subVectors(l,u),g.cross(E),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,E=h.normalized,_=new d.constructor(p.length*g);let C=0,y=0;for(let I=0,v=p.length;I<v;I++){h.isInterleavedBufferAttribute?C=p[I]*h.data.stride+h.offset:C=p[I]*g;for(let m=0;m<g;m++)_[y++]=d[C++]}return new Ui(_,g,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Rr,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],d=t(p,r);i.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const p=[],d=u[h];for(let g=0,E=d.length;g<E;g++){const _=d[g],C=t(_,r);p.push(C)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const d=f[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const d=r[p];t.data.attributes[p]=d.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let E=0,_=d.length;E<_;E++){const C=d[E];g.push(C.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const u=t.morphAttributes;for(const d in u){const g=[],E=u[d];for(let _=0,C=E.length;_<C;_++)g.push(E[_].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const E=f[d];this.addGroup(E.start,E.count,E.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dm=new rn,mr=new fC,vc=new Mh,wm=new ot,Cc=new ot,Sc=new ot,yc=new ot,yf=new ot,xc=new ot,Um=new ot,Mc=new ot;class wi extends ai{constructor(t=new Rr,i=new Ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){xc.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const g=h[p],E=u[p];g!==0&&(yf.fromBufferAttribute(E,t),f?xc.addScaledVector(yf,g):xc.addScaledVector(yf.sub(i),g))}i.add(xc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(u),mr.copy(t.ray).recast(t.near),!(vc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(vc,wm)===null||mr.origin.distanceToSquared(wm)>(t.far-t.near)**2))&&(Dm.copy(u).invert(),mr.copy(t.ray).applyMatrix4(Dm),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,mr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,h=u.index,p=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,E=u.attributes.normal,_=u.groups,C=u.drawRange;if(h!==null)if(Array.isArray(f))for(let y=0,I=_.length;y<I;y++){const v=_[y],m=f[v.materialIndex],Q=Math.max(v.start,C.start),D=Math.min(h.count,Math.min(v.start+v.count,C.start+C.count));for(let b=Q,P=D;b<P;b+=3){const O=h.getX(b),F=h.getX(b+1),V=h.getX(b+2);l=Ic(this,m,t,r,d,g,E,O,F,V),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const y=Math.max(0,C.start),I=Math.min(h.count,C.start+C.count);for(let v=y,m=I;v<m;v+=3){const Q=h.getX(v),D=h.getX(v+1),b=h.getX(v+2);l=Ic(this,f,t,r,d,g,E,Q,D,b),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let y=0,I=_.length;y<I;y++){const v=_[y],m=f[v.materialIndex],Q=Math.max(v.start,C.start),D=Math.min(p.count,Math.min(v.start+v.count,C.start+C.count));for(let b=Q,P=D;b<P;b+=3){const O=b,F=b+1,V=b+2;l=Ic(this,m,t,r,d,g,E,O,F,V),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const y=Math.max(0,C.start),I=Math.min(p.count,C.start+C.count);for(let v=y,m=I;v<m;v+=3){const Q=v,D=v+1,b=v+2;l=Ic(this,f,t,r,d,g,E,Q,D,b),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function SC(o,t,i,r,l,u,f,h){let p;if(t.side===Xn?p=r.intersectTriangle(f,u,l,!0,h):p=r.intersectTriangle(l,u,f,t.side===Wa,h),p===null)return null;Mc.copy(h),Mc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Mc);return d<i.near||d>i.far?null:{distance:d,point:Mc.clone(),object:o}}function Ic(o,t,i,r,l,u,f,h,p,d){o.getVertexPosition(h,Cc),o.getVertexPosition(p,Sc),o.getVertexPosition(d,yc);const g=SC(o,t,i,r,Cc,Sc,yc,Um);if(g){const E=new ot;Ci.getBarycoord(Um,Cc,Sc,yc,E),l&&(g.uv=Ci.getInterpolatedAttribute(l,h,p,d,E,new Pe)),u&&(g.uv1=Ci.getInterpolatedAttribute(u,h,p,d,E,new Pe)),f&&(g.normal=Ci.getInterpolatedAttribute(f,h,p,d,E,new ot),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new ot,materialIndex:0};Ci.getNormal(Cc,Sc,yc,_.normal),g.face=_,g.barycoord=E}return g}class jo extends Rr{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],d=[],g=[],E=[];let _=0,C=0;y("z","y","x",-1,-1,r,i,t,f,u,0),y("z","y","x",1,-1,r,i,-t,f,u,1),y("x","z","y",1,1,t,r,i,l,f,2),y("x","z","y",1,-1,t,r,-i,l,f,3),y("x","y","z",1,-1,t,i,r,l,u,4),y("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Mr(d,3)),this.setAttribute("normal",new Mr(g,3)),this.setAttribute("uv",new Mr(E,2));function y(I,v,m,Q,D,b,P,O,F,V,R){const T=b/F,G=P/V,tt=b/2,et=P/2,ut=O/2,lt=F+1,L=V+1;let q=0,k=0;const _t=new ot;for(let w=0;w<L;w++){const Z=w*G-et;for(let dt=0;dt<lt;dt++){const vt=dt*T-tt;_t[I]=vt*Q,_t[v]=Z*D,_t[m]=ut,d.push(_t.x,_t.y,_t.z),_t[I]=0,_t[v]=0,_t[m]=O>0?1:-1,g.push(_t.x,_t.y,_t.z),E.push(dt/F),E.push(1-w/V),q+=1}}for(let w=0;w<V;w++)for(let Z=0;Z<F;Z++){const dt=_+Z+lt*w,vt=_+Z+lt*(w+1),J=_+(Z+1)+lt*(w+1),pt=_+(Z+1)+lt*w;p.push(dt,vt,pt),p.push(vt,J,pt),k+=6}h.addGroup(C,k,R),C+=k,_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)t[l]=r[l]}return t}function yC(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function TE(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const xC={clone:Rs,merge:Fn};var MC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ka extends qc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MC,this.fragmentShader=IC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=yC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class bE extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=la}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new ot,Qm=new Pe,Lm=new Pe;class vi extends bE{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,Qm,Lm),i.subVectors(Lm,Qm)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,d=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*r/d,l*=f.width/p,r*=f.height/d}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class BC extends ai{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(_s,vs,t,i);l.layers=this.layers,this.add(l);const u=new vi(_s,vs,t,i);u.layers=this.layers,this.add(u);const f=new vi(_s,vs,t,i);f.layers=this.layers,this.add(f);const h=new vi(_s,vs,t,i);h.layers=this.layers,this.add(h);const p=new vi(_s,vs,t,i);p.layers=this.layers,this.add(p);const d=new vi(_s,vs,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,p]=i;for(const d of i)this.remove(d);if(t===la)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,p,d,g]=this.children,E=t.getRenderTarget(),_=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const I=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,d),r.texture.generateMipmaps=I,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(E,_,C),t.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class RE extends Un{constructor(t=[],i=Ir,r,l,u,f,h,p,d,g){super(t,i,r,l,u,f,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class TC extends br{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new RE(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wn}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new Ka({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Xa});u.uniforms.tEquirect.value=i;const f=new wi(l,u),h=i.minFilter;return i.minFilter===oa&&(i.minFilter=wn),new BC(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class Bc extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bC={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const I of t.hand.values()){const v=i.getJointPose(I,r),m=this._getHandJoint(d,I);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const g=d.joints["index-finger-tip"],E=d.joints["thumb-tip"],_=g.position.distanceTo(E.position),C=.02,y=.005;d.inputState.pinching&&_>C+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=C-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(bC)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Bc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class RC extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class DC extends Un{constructor(t=null,i=1,r=1,l,u,f,h,p,d=ii,g=ii,E,_){super(null,f,h,p,d,g,l,u,E,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mf=new ot,wC=new ot,UC=new oe;class Cr{constructor(t=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Mf.subVectors(r,i).cross(wC.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Mf),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||UC.getNormalMatrix(t),l=this.coplanarPoint(Mf).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Mh,Tc=new ot;class DE{constructor(t=new Cr,i=new Cr,r=new Cr,l=new Cr,u=new Cr,f=new Cr){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=la){const r=this.planes,l=t.elements,u=l[0],f=l[1],h=l[2],p=l[3],d=l[4],g=l[5],E=l[6],_=l[7],C=l[8],y=l[9],I=l[10],v=l[11],m=l[12],Q=l[13],D=l[14],b=l[15];if(r[0].setComponents(p-u,_-d,v-C,b-m).normalize(),r[1].setComponents(p+u,_+d,v+C,b+m).normalize(),r[2].setComponents(p+f,_+g,v+y,b+Q).normalize(),r[3].setComponents(p-f,_-g,v-y,b-Q).normalize(),r[4].setComponents(p-h,_-E,v-I,b-D).normalize(),i===la)r[5].setComponents(p+h,_+E,v+I,b+D).normalize();else if(i===Pc)r[5].setComponents(h,E,I,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?t.max.x:t.min.x,Tc.y=l.normal.y>0?t.max.y:t.min.y,Tc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xc extends Un{constructor(t,i,r,l,u,f,h,p,d,g,E,_){super(null,f,h,p,d,g,l,u,E,_),this.isCompressedTexture=!0,this.image={width:i,height:r},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class QC extends Xc{constructor(t,i,r,l,u,f){super(t,i,r,u,f),this.isCompressedArrayTexture=!0,this.image.depth=l,this.wrapR=Va,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class LC extends Xc{constructor(t,i,r){super(void 0,t[0].width,t[0].height,i,r,Ir),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class wE extends Un{constructor(t,i,r=Br,l,u,f,h=ii,p=ii,d,g=Ho){if(g!==Ho&&g!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,f,h,p,g,r,d),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $o extends Rr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,h=Math.floor(r),p=Math.floor(l),d=h+1,g=p+1,E=t/h,_=i/p,C=[],y=[],I=[],v=[];for(let m=0;m<g;m++){const Q=m*_-f;for(let D=0;D<d;D++){const b=D*E-u;y.push(b,-Q,0),I.push(0,0,1),v.push(D/h),v.push(1-m/p)}}for(let m=0;m<p;m++)for(let Q=0;Q<h;Q++){const D=Q+d*m,b=Q+d*(m+1),P=Q+1+d*(m+1),O=Q+1+d*m;C.push(D,b,O),C.push(b,P,O)}this.setIndex(C),this.setAttribute("position",new Mr(y,3)),this.setAttribute("normal",new Mr(I,3)),this.setAttribute("uv",new Mr(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}class NC extends qc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FC extends qc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nm={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class OC{constructor(t,i,r){const l=this;let u=!1,f=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(g){h++,u===!1&&l.onStart!==void 0&&l.onStart(g,f,h),u=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,h),f===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,E){return d.push(g,E),this},this.removeHandler=function(g){const E=d.indexOf(g);return E!==-1&&d.splice(E,2),this},this.getHandler=function(g){for(let E=0,_=d.length;E<_;E+=2){const C=d[E],y=d[E+1];if(C.global&&(C.lastIndex=0),C.test(g))return y}return null}}}const PC=new OC;class Bh{constructor(t){this.manager=t!==void 0?t:PC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Bh.DEFAULT_MATERIAL_NAME="__DEFAULT";const aa={};class GC extends Error{constructor(t,i){super(t),this.response=i}}class If extends Bh{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=Nm.get(t);if(u!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(u),this.manager.itemEnd(t)},0),u;if(aa[t]!==void 0){aa[t].push({onLoad:i,onProgress:r,onError:l});return}aa[t]=[],aa[t].push({onLoad:i,onProgress:r,onError:l});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,p=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=aa[t],E=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),C=_?parseInt(_):0,y=C!==0;let I=0;const v=new ReadableStream({start(m){Q();function Q(){E.read().then(({done:D,value:b})=>{if(D)m.close();else{I+=b.byteLength;const P=new ProgressEvent("progress",{lengthComputable:y,loaded:I,total:C});for(let O=0,F=g.length;O<F;O++){const V=g[O];V.onProgress&&V.onProgress(P)}m.enqueue(b),Q()}},D=>{m.error(D)})}}});return new Response(v)}else throw new GC(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const E=/charset="?([^;"\s]*)"?/i.exec(h),_=E&&E[1]?E[1].toLowerCase():void 0,C=new TextDecoder(_);return d.arrayBuffer().then(y=>C.decode(y))}}}).then(d=>{Nm.add(t,d);const g=aa[t];delete aa[t];for(let E=0,_=g.length;E<_;E++){const C=g[E];C.onLoad&&C.onLoad(d)}}).catch(d=>{const g=aa[t];if(g===void 0)throw this.manager.itemError(t),d;delete aa[t];for(let E=0,_=g.length;E<_;E++){const C=g[E];C.onError&&C.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class UE extends bE{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,f=u+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class HC extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Fm(o,t,i,r){const l=zC(r);switch(i){case Sh:return o*t;case ka:return o*t/l.components*l.byteLength;case zc:return o*t/l.components*l.byteLength;case qa:return o*t*2/l.components*l.byteLength;case Vc:return o*t*2/l.components*l.byteLength;case yh:return o*t*3/l.components*l.byteLength;case _n:return o*t*4/l.components*l.byteLength;case kc:return o*t*4/l.components*l.byteLength;case No:case xs:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Ms:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qc:case Lc:return Math.max(o,16)*Math.max(t,8)/4;case Vo:case ko:return Math.max(o,8)*Math.max(t,8)/2;case qo:case Xo:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Yo:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bs:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case $f:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case th:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case eh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case nh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ih:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ah:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case rh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case sh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case oh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case lh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ch:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Oo:case uh:case Fc:return Math.ceil(o/4)*Math.ceil(t/4)*16;case _E:case Ah:return Math.ceil(o/4)*Math.ceil(t/4)*8;case fh:case hh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zC(o){switch(o){case En:case gE:return{byteLength:1,components:1};case Po:case mE:case Si:return{byteLength:2,components:1};case vh:case Ch:return{byteLength:2,components:4};case Br:case _h:case qn:return{byteLength:4,components:1};case EE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function QE(){let o=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function VC(o){const t=new WeakMap;function i(h,p){const d=h.array,g=h.usage,E=d.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,d,g),h.onUploadCallback();let C;if(d instanceof Float32Array)C=o.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?C=o.HALF_FLOAT:C=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)C=o.SHORT;else if(d instanceof Uint32Array)C=o.UNSIGNED_INT;else if(d instanceof Int32Array)C=o.INT;else if(d instanceof Int8Array)C=o.BYTE;else if(d instanceof Uint8Array)C=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)C=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:C,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:E}}function r(h,p,d){const g=p.array,E=p.updateRanges;if(o.bindBuffer(d,h),E.length===0)o.bufferSubData(d,0,g);else{E.sort((C,y)=>C.start-y.start);let _=0;for(let C=1;C<E.length;C++){const y=E[_],I=E[C];I.start<=y.start+y.count+1?y.count=Math.max(y.count,I.start+I.count-y.start):(++_,E[_]=I)}E.length=_+1;for(let C=0,y=E.length;C<y;C++){const I=E[C];o.bufferSubData(d,I.start*g.BYTES_PER_ELEMENT,g,I.start,I.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(o.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,i(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,p),d.version=h.version}}return{get:l,remove:u,update:f}}var kC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$C=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vS="gl_FragColor = linearToOutputTexel( gl_FragColor );",CS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,US=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$S=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,my=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ey=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ty=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,by=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Oy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:kC,alphahash_pars_fragment:qC,alphamap_fragment:XC,alphamap_pars_fragment:YC,alphatest_fragment:WC,alphatest_pars_fragment:KC,aomap_fragment:JC,aomap_pars_fragment:ZC,batching_pars_vertex:jC,batching_vertex:$C,begin_vertex:tS,beginnormal_vertex:eS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:aS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:sS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:lS,color_fragment:cS,color_pars_fragment:uS,color_pars_vertex:AS,color_vertex:fS,common:hS,cube_uv_reflection_fragment:dS,defaultnormal_vertex:pS,displacementmap_pars_vertex:gS,displacementmap_vertex:mS,emissivemap_fragment:ES,emissivemap_pars_fragment:_S,colorspace_fragment:vS,colorspace_pars_fragment:CS,envmap_fragment:SS,envmap_common_pars_fragment:yS,envmap_pars_fragment:xS,envmap_pars_vertex:MS,envmap_physical_pars_fragment:NS,envmap_vertex:IS,fog_vertex:BS,fog_pars_vertex:TS,fog_fragment:bS,fog_pars_fragment:RS,gradientmap_pars_fragment:DS,lightmap_pars_fragment:wS,lights_lambert_fragment:US,lights_lambert_pars_fragment:QS,lights_pars_begin:LS,lights_toon_fragment:FS,lights_toon_pars_fragment:OS,lights_phong_fragment:PS,lights_phong_pars_fragment:GS,lights_physical_fragment:HS,lights_physical_pars_fragment:zS,lights_fragment_begin:VS,lights_fragment_maps:kS,lights_fragment_end:qS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:WS,logdepthbuf_vertex:KS,map_fragment:JS,map_pars_fragment:ZS,map_particle_fragment:jS,map_particle_pars_fragment:$S,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ey,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:ay,morphtarget_pars_vertex:ry,morphtarget_vertex:sy,normal_fragment_begin:oy,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:uy,normal_vertex:Ay,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:dy,clearcoat_pars_fragment:py,iridescence_pars_fragment:gy,opaque_fragment:my,packing:Ey,premultiplied_alpha_fragment:_y,project_vertex:vy,dithering_fragment:Cy,dithering_pars_fragment:Sy,roughnessmap_fragment:yy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:My,shadowmap_pars_vertex:Iy,shadowmap_vertex:By,shadowmask_pars_fragment:Ty,skinbase_vertex:by,skinning_pars_vertex:Ry,skinning_vertex:Dy,skinnormal_vertex:wy,specularmap_fragment:Uy,specularmap_pars_fragment:Qy,tonemapping_fragment:Ly,tonemapping_pars_fragment:Ny,transmission_fragment:Fy,transmission_pars_fragment:Oy,uv_pars_fragment:Py,uv_pars_vertex:Gy,uv_vertex:Hy,worldpos_vertex:zy,background_vert:Vy,background_frag:ky,backgroundCube_vert:qy,backgroundCube_frag:Xy,cube_vert:Yy,cube_frag:Wy,depth_vert:Ky,depth_frag:Jy,distanceRGBA_vert:Zy,distanceRGBA_frag:jy,equirect_vert:$y,equirect_frag:tx,linedashed_vert:ex,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:ax,meshlambert_vert:rx,meshlambert_frag:sx,meshmatcap_vert:ox,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:ux,meshphong_vert:Ax,meshphong_frag:fx,meshphysical_vert:hx,meshphysical_frag:dx,meshtoon_vert:px,meshtoon_frag:gx,points_vert:mx,points_frag:Ex,shadow_vert:_x,shadow_frag:vx,sprite_vert:Cx,sprite_frag:Sx},Rt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},bi={basic:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Fn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Fn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Fn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Fn([Rt.points,Rt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Fn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Fn([Rt.common,Rt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Fn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Fn([Rt.sprite,Rt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Fn([Rt.common,Rt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Fn([Rt.lights,Rt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};bi.physical={uniforms:Fn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const bc={r:0,b:0,g:0},_r=new ua,yx=new rn;function xx(o,t,i,r,l,u,f){const h=new Ne(0);let p=u===!0?0:1,d,g,E=null,_=0,C=null;function y(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?i:t).get(b)),b}function I(D){let b=!1;const P=y(D);P===null?m(h,p):P&&P.isColor&&(m(P,1),b=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function v(D,b){const P=y(b);P&&(P.isCubeTexture||P.mapping===Hc)?(g===void 0&&(g=new wi(new jo(1,1,1),new Ka({name:"BackgroundCubeMaterial",uniforms:Rs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_r.copy(b.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(_r)),g.material.toneMapped=Me.getTransfer(P.colorSpace)!==Le,(E!==P||_!==P.version||C!==o.toneMapping)&&(g.material.needsUpdate=!0,E=P,_=P.version,C=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new wi(new $o(2,2),new Ka({name:"BackgroundMaterial",uniforms:Rs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Me.getTransfer(P.colorSpace)!==Le,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(E!==P||_!==P.version||C!==o.toneMapping)&&(d.material.needsUpdate=!0,E=P,_=P.version,C=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function m(D,b){D.getRGB(bc,TE(o)),r.buffers.color.setClear(bc.r,bc.g,bc.b,b,f)}function Q(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,b=1){h.set(D),p=b,m(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,m(h,p)},render:I,addToRenderList:v,dispose:Q}}function Mx(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,f=!1;function h(T,G,tt,et,ut){let lt=!1;const L=E(et,tt,G);u!==L&&(u=L,d(u.object)),lt=C(T,et,tt,ut),lt&&y(T,et,tt,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,b(T,G,tt,et),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function p(){return o.createVertexArray()}function d(T){return o.bindVertexArray(T)}function g(T){return o.deleteVertexArray(T)}function E(T,G,tt){const et=tt.wireframe===!0;let ut=r[T.id];ut===void 0&&(ut={},r[T.id]=ut);let lt=ut[G.id];lt===void 0&&(lt={},ut[G.id]=lt);let L=lt[et];return L===void 0&&(L=_(p()),lt[et]=L),L}function _(T){const G=[],tt=[],et=[];for(let ut=0;ut<i;ut++)G[ut]=0,tt[ut]=0,et[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:tt,attributeDivisors:et,object:T,attributes:{},index:null}}function C(T,G,tt,et){const ut=u.attributes,lt=G.attributes;let L=0;const q=tt.getAttributes();for(const k in q)if(q[k].location>=0){const w=ut[k];let Z=lt[k];if(Z===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor)),w===void 0||w.attribute!==Z||Z&&w.data!==Z.data)return!0;L++}return u.attributesNum!==L||u.index!==et}function y(T,G,tt,et){const ut={},lt=G.attributes;let L=0;const q=tt.getAttributes();for(const k in q)if(q[k].location>=0){let w=lt[k];w===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(w=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(w=T.instanceColor));const Z={};Z.attribute=w,w&&w.data&&(Z.data=w.data),ut[k]=Z,L++}u.attributes=ut,u.attributesNum=L,u.index=et}function I(){const T=u.newAttributes;for(let G=0,tt=T.length;G<tt;G++)T[G]=0}function v(T){m(T,0)}function m(T,G){const tt=u.newAttributes,et=u.enabledAttributes,ut=u.attributeDivisors;tt[T]=1,et[T]===0&&(o.enableVertexAttribArray(T),et[T]=1),ut[T]!==G&&(o.vertexAttribDivisor(T,G),ut[T]=G)}function Q(){const T=u.newAttributes,G=u.enabledAttributes;for(let tt=0,et=G.length;tt<et;tt++)G[tt]!==T[tt]&&(o.disableVertexAttribArray(tt),G[tt]=0)}function D(T,G,tt,et,ut,lt,L){L===!0?o.vertexAttribIPointer(T,G,tt,ut,lt):o.vertexAttribPointer(T,G,tt,et,ut,lt)}function b(T,G,tt,et){I();const ut=et.attributes,lt=tt.getAttributes(),L=G.defaultAttributeValues;for(const q in lt){const k=lt[q];if(k.location>=0){let _t=ut[q];if(_t===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(_t=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(_t=T.instanceColor)),_t!==void 0){const w=_t.normalized,Z=_t.itemSize,dt=t.get(_t);if(dt===void 0)continue;const vt=dt.buffer,J=dt.type,pt=dt.bytesPerElement,Ct=J===o.INT||J===o.UNSIGNED_INT||_t.gpuType===_h;if(_t.isInterleavedBufferAttribute){const Mt=_t.data,Tt=Mt.stride,ae=_t.offset;if(Mt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<k.locationSize;Xt++)m(k.location+Xt,Mt.meshPerAttribute);T.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Xt=0;Xt<k.locationSize;Xt++)v(k.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Xt=0;Xt<k.locationSize;Xt++)D(k.location+Xt,Z/k.locationSize,J,w,Tt*pt,(ae+Z/k.locationSize*Xt)*pt,Ct)}else{if(_t.isInstancedBufferAttribute){for(let Mt=0;Mt<k.locationSize;Mt++)m(k.location+Mt,_t.meshPerAttribute);T.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Mt=0;Mt<k.locationSize;Mt++)v(k.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Mt=0;Mt<k.locationSize;Mt++)D(k.location+Mt,Z/k.locationSize,J,w,Z*pt,Z/k.locationSize*Mt*pt,Ct)}}else if(L!==void 0){const w=L[q];if(w!==void 0)switch(w.length){case 2:o.vertexAttrib2fv(k.location,w);break;case 3:o.vertexAttrib3fv(k.location,w);break;case 4:o.vertexAttrib4fv(k.location,w);break;default:o.vertexAttrib1fv(k.location,w)}}}}Q()}function P(){V();for(const T in r){const G=r[T];for(const tt in G){const et=G[tt];for(const ut in et)g(et[ut].object),delete et[ut];delete G[tt]}delete r[T]}}function O(T){if(r[T.id]===void 0)return;const G=r[T.id];for(const tt in G){const et=G[tt];for(const ut in et)g(et[ut].object),delete et[ut];delete G[tt]}delete r[T.id]}function F(T){for(const G in r){const tt=r[G];if(tt[T.id]===void 0)continue;const et=tt[T.id];for(const ut in et)g(et[ut].object),delete et[ut];delete tt[T.id]}}function V(){R(),f=!0,u!==l&&(u=l,d(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:I,enableAttribute:v,disableUnusedAttributes:Q}}function Ix(o,t,i){let r;function l(d){r=d}function u(d,g){o.drawArrays(r,d,g),i.update(g,r,1)}function f(d,g,E){E!==0&&(o.drawArraysInstanced(r,d,g,E),i.update(g,r,E))}function h(d,g,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,E);let C=0;for(let y=0;y<E;y++)C+=g[y];i.update(C,r,1)}function p(d,g,E,_){if(E===0)return;const C=t.get("WEBGL_multi_draw");if(C===null)for(let y=0;y<d.length;y++)f(d[y],g[y],_[y]);else{C.multiDrawArraysInstancedWEBGL(r,d,0,g,0,_,0,E);let y=0;for(let I=0;I<E;I++)y+=g[I]*_[I];i.update(y,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Bx(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==_n&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const V=F===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==En&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==qn&&!V)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const E=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),C=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=o.getParameter(o.MAX_TEXTURE_SIZE),v=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),Q=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:E,reverseDepthBuffer:_,maxTextures:C,maxVertexTextures:y,maxTextureSize:I,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:Q,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:P,maxSamples:O}}function Tx(o){const t=this;let i=null,r=0,l=!1,u=!1;const f=new Cr,h=new oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(E,_){const C=E.length!==0||_||r!==0||l;return l=_,r=E.length,C},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(E,_){i=g(E,_,0)},this.setState=function(E,_,C){const y=E.clippingPlanes,I=E.clipIntersection,v=E.clipShadows,m=o.get(E);if(!l||y===null||y.length===0||u&&!v)u?g(null):d();else{const Q=u?0:r,D=Q*4;let b=m.clippingState||null;p.value=b,b=g(y,_,D,C);for(let P=0;P!==D;++P)b[P]=i[P];m.clippingState=b,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=Q}};function d(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(E,_,C,y){const I=E!==null?E.length:0;let v=null;if(I!==0){if(v=p.value,y!==!0||v===null){const m=C+I*4,Q=_.matrixWorldInverse;h.getNormalMatrix(Q),(v===null||v.length<m)&&(v=new Float32Array(m));for(let D=0,b=C;D!==I;++D,b+=4)f.copy(E[D]).applyMatrix4(Q,h),f.normal.toArray(v,b),v[b+3]=f.constant}p.value=v,p.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,v}}function bx(o){let t=new WeakMap;function i(f,h){return h===Kf?f.mapping=Ir:h===Jf&&(f.mapping=Ts),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Kf||h===Jf)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const d=new TC(p.height);return d.fromEquirectangularTexture(o,f),t.set(f,d),f.addEventListener("dispose",l),i(d.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ss=4,Om=[.125,.215,.35,.446,.526,.582],xr=20,Bf=new UE,Pm=new Ne;let Tf=null,bf=0,Rf=0,Df=!1;const Sr=(1+Math.sqrt(5))/2,Cs=1/Sr,Gm=[new ot(-Sr,Cs,0),new ot(Sr,Cs,0),new ot(-Cs,0,Sr),new ot(Cs,0,Sr),new ot(0,Sr,-Cs),new ot(0,Sr,Cs),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],Rx=new ot;class Hm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=Rx}=u;Tf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tf,bf,Rf),this._renderer.xr.enabled=Df,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ir||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Si,format:_n,colorSpace:Tr,depthBuffer:!1},l=zm(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dx(u)),this._blurMaterial=wx(u,t,i)}return l}_compileMaterial(t){const i=new wi(this._lodPlanes[0],t);this._renderer.compile(i,Bf)}_sceneToCubeUV(t,i,r,l,u){const p=new vi(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],E=this._renderer,_=E.autoClear,C=E.toneMapping;E.getClearColor(Pm),E.toneMapping=Ya,E.autoClear=!1;const y=new Ih({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),I=new wi(new jo,y);let v=!1;const m=t.background;m?m.isColor&&(y.color.copy(m),t.background=null,v=!0):(y.color.copy(Pm),v=!0);for(let Q=0;Q<6;Q++){const D=Q%3;D===0?(p.up.set(0,d[Q],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[Q],u.y,u.z)):D===1?(p.up.set(0,0,d[Q]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[Q],u.z)):(p.up.set(0,d[Q],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[Q]));const b=this._cubeSize;Rc(l,D*b,Q>2?b:0,b,b),E.setRenderTarget(l),v&&E.render(I,p),E.render(t,p)}I.geometry.dispose(),I.material.dispose(),E.toneMapping=C,E.autoClear=_,t.background=m}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ir||t.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new wi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Rc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Bf)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Gm[(l-u-1)%Gm.length];this._blur(t,u-1,u,f,h)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,h){const p=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,E=new wi(this._lodPlanes[l],d),_=d.uniforms,C=this._sizeLods[r]-1,y=isFinite(u)?Math.PI/(2*C):2*Math.PI/(2*xr-1),I=u/y,v=isFinite(u)?1+Math.floor(g*I):xr;v>xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${xr}`);const m=[];let Q=0;for(let F=0;F<xr;++F){const V=F/I,R=Math.exp(-V*V/2);m.push(R),F===0?Q+=R:F<v&&(Q+=2*R)}for(let F=0;F<m.length;F++)m[F]=m[F]/Q;_.envMap.value=t.texture,_.samples.value=v,_.weights.value=m,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=y,_.mipInt.value=D-r;const b=this._sizeLods[l],P=3*b*(l>D-Ss?l-D+Ss:0),O=4*(this._cubeSize-b);Rc(i,P,O,3*b,2*b),p.setRenderTarget(i),p.render(E,Bf)}}function Dx(o){const t=[],i=[],r=[];let l=o;const u=o-Ss+1+Om.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>o-Ss?p=Om[f-o+Ss-1]:f===0&&(p=0),r.push(p);const d=1/(h-2),g=-d,E=1+d,_=[g,g,E,g,E,E,g,g,E,E,g,E],C=6,y=6,I=3,v=2,m=1,Q=new Float32Array(I*y*C),D=new Float32Array(v*y*C),b=new Float32Array(m*y*C);for(let O=0;O<C;O++){const F=O%3*2/3-1,V=O>2?0:-1,R=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];Q.set(R,I*y*O),D.set(_,v*y*O);const T=[O,O,O,O,O,O];b.set(T,m*y*O)}const P=new Rr;P.setAttribute("position",new Ui(Q,I)),P.setAttribute("uv",new Ui(D,v)),P.setAttribute("faceIndex",new Ui(b,m)),t.push(P),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function zm(o,t,i){const r=new br(o,t,i);return r.texture.mapping=Hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function wx(o,t,i){const r=new Float32Array(xr),l=new ot(0,1,0);return new Ka({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Vm(){return new Ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function km(){return new Ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ux(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,d=p===Kf||p===Jf,g=p===Ir||p===Ts;if(d||g){let E=t.get(h);const _=E!==void 0?E.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new Hm(o)),E=d?i.fromEquirectangular(h,E):i.fromCubemap(h,E),E.texture.pmremVersion=h.pmremVersion,t.set(h,E),E.texture;if(E!==void 0)return E.texture;{const C=h.image;return d&&C&&C.height>0||g&&C&&l(C)?(i===null&&(i=new Hm(o)),E=d?i.fromEquirectangular(h):i.fromCubemap(h),E.texture.pmremVersion=h.pmremVersion,t.set(h,E),h.addEventListener("dispose",u),E.texture):null}}}return h}function l(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function u(h){const p=h.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Qx(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&wc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Lx(o,t,i,r){const l={},u=new WeakMap;function f(E){const _=E.target;_.index!==null&&t.remove(_.index);for(const y in _.attributes)t.remove(_.attributes[y]);_.removeEventListener("dispose",f),delete l[_.id];const C=u.get(_);C&&(t.remove(C),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(E,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function p(E){const _=E.attributes;for(const C in _)t.update(_[C],o.ARRAY_BUFFER)}function d(E){const _=[],C=E.index,y=E.attributes.position;let I=0;if(C!==null){const Q=C.array;I=C.version;for(let D=0,b=Q.length;D<b;D+=3){const P=Q[D+0],O=Q[D+1],F=Q[D+2];_.push(P,O,O,F,F,P)}}else if(y!==void 0){const Q=y.array;I=y.version;for(let D=0,b=Q.length/3-1;D<b;D+=3){const P=D+0,O=D+1,F=D+2;_.push(P,O,O,F,F,P)}}else return;const v=new(CE(_)?BE:IE)(_,1);v.version=I;const m=u.get(E);m&&t.remove(m),u.set(E,v)}function g(E){const _=u.get(E);if(_){const C=E.index;C!==null&&_.version<C.version&&d(E)}else d(E);return u.get(E)}return{get:h,update:p,getWireframeAttribute:g}}function Nx(o,t,i){let r;function l(_){r=_}let u,f;function h(_){u=_.type,f=_.bytesPerElement}function p(_,C){o.drawElements(r,C,u,_*f),i.update(C,r,1)}function d(_,C,y){y!==0&&(o.drawElementsInstanced(r,C,u,_*f,y),i.update(C,r,y))}function g(_,C,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,C,0,u,_,0,y);let v=0;for(let m=0;m<y;m++)v+=C[m];i.update(v,r,1)}function E(_,C,y,I){if(y===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<_.length;m++)d(_[m]/f,C[m],I[m]);else{v.multiDrawElementsInstancedWEBGL(r,C,0,u,_,0,I,0,y);let m=0;for(let Q=0;Q<y;Q++)m+=C[Q]*I[Q];i.update(m,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=E}function Fx(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Ox(o,t,i){const r=new WeakMap,l=new je;function u(f,h,p){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,E=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==E){let T=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",T)};var C=T;_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,I=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,m=h.morphAttributes.position||[],Q=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let b=0;y===!0&&(b=1),I===!0&&(b=2),v===!0&&(b=3);let P=h.attributes.position.count*b,O=1;P>t.maxTextureSize&&(O=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const F=new Float32Array(P*O*4*E),V=new SE(F,P,O,E);V.type=qn,V.needsUpdate=!0;const R=b*4;for(let G=0;G<E;G++){const tt=m[G],et=Q[G],ut=D[G],lt=P*O*4*G;for(let L=0;L<tt.count;L++){const q=L*R;y===!0&&(l.fromBufferAttribute(tt,L),F[lt+q+0]=l.x,F[lt+q+1]=l.y,F[lt+q+2]=l.z,F[lt+q+3]=0),I===!0&&(l.fromBufferAttribute(et,L),F[lt+q+4]=l.x,F[lt+q+5]=l.y,F[lt+q+6]=l.z,F[lt+q+7]=0),v===!0&&(l.fromBufferAttribute(ut,L),F[lt+q+8]=l.x,F[lt+q+9]=l.y,F[lt+q+10]=l.z,F[lt+q+11]=ut.itemSize===4?l.w:1)}}_={count:E,texture:V,size:new Pe(P,O)},r.set(h,_),h.addEventListener("dispose",T)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let y=0;for(let v=0;v<d.length;v++)y+=d[v];const I=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",I),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function Px(o,t,i,r){let l=new WeakMap;function u(p){const d=r.render.frame,g=p.geometry,E=t.get(p,g);if(l.get(E)!==d&&(t.update(E),l.set(E,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==d&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==d&&(_.update(),l.set(_,d))}return E}function f(){l=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),i.remove(d.instanceMatrix),d.instanceColor!==null&&i.remove(d.instanceColor)}return{update:u,dispose:f}}const LE=new Un,qm=new wE(1,1),NE=new SE,FE=new yE,OE=new RE,Xm=[],Ym=[],Wm=new Float32Array(16),Km=new Float32Array(9),Jm=new Float32Array(4);function ws(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Xm[l];if(u===void 0&&(u=new Float32Array(l),Xm[l]=u),t!==0){r.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=i,o[f].toArray(u,h)}return u}function un(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function An(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Yc(o,t){let i=Ym[t];i===void 0&&(i=new Int32Array(t),Ym[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Gx(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Hx(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2fv(this.addr,t),An(i,t)}}function zx(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;o.uniform3fv(this.addr,t),An(i,t)}}function Vx(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4fv(this.addr,t),An(i,t)}}function kx(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(un(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(un(i,r))return;Jm.set(r),o.uniformMatrix2fv(this.addr,!1,Jm),An(i,r)}}function qx(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(un(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(un(i,r))return;Km.set(r),o.uniformMatrix3fv(this.addr,!1,Km),An(i,r)}}function Xx(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(un(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(un(i,r))return;Wm.set(r),o.uniformMatrix4fv(this.addr,!1,Wm),An(i,r)}}function Yx(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Wx(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2iv(this.addr,t),An(i,t)}}function Kx(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;o.uniform3iv(this.addr,t),An(i,t)}}function Jx(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4iv(this.addr,t),An(i,t)}}function Zx(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function jx(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2uiv(this.addr,t),An(i,t)}}function $x(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;o.uniform3uiv(this.addr,t),An(i,t)}}function tM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4uiv(this.addr,t),An(i,t)}}function eM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(qm.compareFunction=vE,u=qm):u=LE,i.setTexture2D(t||u,l)}function nM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||FE,l)}function iM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||OE,l)}function aM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||NE,l)}function rM(o){switch(o){case 5126:return Gx;case 35664:return Hx;case 35665:return zx;case 35666:return Vx;case 35674:return kx;case 35675:return qx;case 35676:return Xx;case 5124:case 35670:return Yx;case 35667:case 35671:return Wx;case 35668:case 35672:return Kx;case 35669:case 35673:return Jx;case 5125:return Zx;case 36294:return jx;case 36295:return $x;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return aM}}function sM(o,t){o.uniform1fv(this.addr,t)}function oM(o,t){const i=ws(t,this.size,2);o.uniform2fv(this.addr,i)}function lM(o,t){const i=ws(t,this.size,3);o.uniform3fv(this.addr,i)}function cM(o,t){const i=ws(t,this.size,4);o.uniform4fv(this.addr,i)}function uM(o,t){const i=ws(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function AM(o,t){const i=ws(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fM(o,t){const i=ws(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function hM(o,t){o.uniform1iv(this.addr,t)}function dM(o,t){o.uniform2iv(this.addr,t)}function pM(o,t){o.uniform3iv(this.addr,t)}function gM(o,t){o.uniform4iv(this.addr,t)}function mM(o,t){o.uniform1uiv(this.addr,t)}function EM(o,t){o.uniform2uiv(this.addr,t)}function _M(o,t){o.uniform3uiv(this.addr,t)}function vM(o,t){o.uniform4uiv(this.addr,t)}function CM(o,t,i){const r=this.cache,l=t.length,u=Yc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),An(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||LE,u[f])}function SM(o,t,i){const r=this.cache,l=t.length,u=Yc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),An(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||FE,u[f])}function yM(o,t,i){const r=this.cache,l=t.length,u=Yc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),An(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||OE,u[f])}function xM(o,t,i){const r=this.cache,l=t.length,u=Yc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),An(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||NE,u[f])}function MM(o){switch(o){case 5126:return sM;case 35664:return oM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return AM;case 35676:return fM;case 5124:case 35670:return hM;case 35667:case 35671:return dM;case 35668:case 35672:return pM;case 35669:case 35673:return gM;case 5125:return mM;case 36294:return EM;case 36295:return _M;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return xM}}class IM{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=rM(i.type)}}class BM{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=MM(i.type)}}class TM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const wf=/(\w+)(\])?(\[|\.)?/g;function Zm(o,t){o.seq.push(t),o.map[t.id]=t}function bM(o,t,i){const r=o.name,l=r.length;for(wf.lastIndex=0;;){const u=wf.exec(r),f=wf.lastIndex;let h=u[1];const p=u[2]==="]",d=u[3];if(p&&(h=h|0),d===void 0||d==="["&&f+2===l){Zm(i,d===void 0?new IM(h,o,t):new BM(h,o,t));break}else{let E=i.map[h];E===void 0&&(E=new TM(h),Zm(i,E)),i=E}}}class Uc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);bM(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function jm(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const RM=37297;let DM=0;function wM(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const $m=new oe;function UM(o){Me._getMatrix($m,Me.workingColorSpace,o);const t=`mat3( ${$m.elements.map(i=>i.toFixed(4))} )`;switch(Me.getTransfer(o)){case Oc:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function tE(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+wM(o.getShaderSource(t),f)}else return l}function QM(o,t){const i=UM(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function LM(o,t){let i;switch(t){case Lv:i="Linear";break;case Nv:i="Reinhard";break;case Fv:i="Cineon";break;case Ov:i="ACESFilmic";break;case Gv:i="AgX";break;case Hv:i="Neutral";break;case Pv:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new ot;function NM(){Me.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function OM(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function PM(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),f=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:o.getAttribLocation(t,f),locationSize:h}}return i}function Lo(o){return o!==""}function eE(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nE(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(o){return o.replace(GM,zM)}const HM=new Map;function zM(o,t){let i=le[t];if(i===void 0){const r=HM.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ph(i)}const VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iE(o){return o.replace(VM,kM)}function kM(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function aE(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qM(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===hE?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===dv?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function XM(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ir:case Ts:t="ENVMAP_TYPE_CUBE";break;case Hc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YM(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function WM(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dE:t="ENVMAP_BLENDING_MULTIPLY";break;case Uv:t="ENVMAP_BLENDING_MIX";break;case Qv:t="ENVMAP_BLENDING_ADD";break}return t}function KM(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function JM(o,t,i,r){const l=o.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=qM(i),d=XM(i),g=YM(i),E=WM(i),_=KM(i),C=FM(i),y=OM(u),I=l.createProgram();let v,m,Q=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Lo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Lo).join(`
`),m.length>0&&(m+=`
`)):(v=[aE(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),m=[aE(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+E:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?le.tonemapping_pars_fragment:"",i.toneMapping!==Ya?LM("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,QM("linearToOutputTexel",i.outputColorSpace),NM(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),f=ph(f),f=eE(f,i),f=nE(f,i),h=ph(h),h=eE(h,i),h=nE(h,i),f=iE(f),h=iE(h),i.isRawShaderMaterial!==!0&&(Q=`#version 300 es
`,v=[C,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",i.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const D=Q+v+f,b=Q+m+h,P=jm(l,l.VERTEX_SHADER,D),O=jm(l,l.FRAGMENT_SHADER,b);l.attachShader(I,P),l.attachShader(I,O),i.index0AttributeName!==void 0?l.bindAttribLocation(I,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(I,0,"position"),l.linkProgram(I);function F(G){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(I).trim(),et=l.getShaderInfoLog(P).trim(),ut=l.getShaderInfoLog(O).trim();let lt=!0,L=!0;if(l.getProgramParameter(I,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,I,P,O);else{const q=tE(l,P,"vertex"),k=tE(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(I,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+tt+`
`+q+`
`+k)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(et===""||ut==="")&&(L=!1);L&&(G.diagnostics={runnable:lt,programLog:tt,vertexShader:{log:et,prefix:v},fragmentShader:{log:ut,prefix:m}})}l.deleteShader(P),l.deleteShader(O),V=new Uc(l,I),R=PM(l,I)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(I,RM)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(I),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DM++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=P,this.fragmentShader=O,this}let ZM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new $M(t),i.set(t,r)),r}}class $M{constructor(t){this.id=ZM++,this.code=t,this.usedTimes=0}}function tI(o,t,i,r,l,u,f){const h=new xE,p=new jM,d=new Set,g=[],E=l.logarithmicDepthBuffer,_=l.vertexTextures;let C=l.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function I(R){return d.add(R),R===0?"uv":`uv${R}`}function v(R,T,G,tt,et){const ut=tt.fog,lt=et.geometry,L=R.isMeshStandardMaterial?tt.environment:null,q=(R.isMeshStandardMaterial?i:t).get(R.envMap||L),k=q&&q.mapping===Hc?q.image.height:null,_t=y[R.type];R.precision!==null&&(C=l.getMaxPrecision(R.precision),C!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",C,"instead."));const w=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Z=w!==void 0?w.length:0;let dt=0;lt.morphAttributes.position!==void 0&&(dt=1),lt.morphAttributes.normal!==void 0&&(dt=2),lt.morphAttributes.color!==void 0&&(dt=3);let vt,J,pt,Ct;if(_t){const Se=bi[_t];vt=Se.vertexShader,J=Se.fragmentShader}else vt=R.vertexShader,J=R.fragmentShader,p.update(R),pt=p.getVertexShaderID(R),Ct=p.getFragmentShaderID(R);const Mt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),ae=et.isInstancedMesh===!0,Xt=et.isBatchedMesh===!0,re=!!R.map,fe=!!R.matcap,ie=!!q,H=!!R.aoMap,vn=!!R.lightMap,ge=!!R.bumpMap,ee=!!R.normalMap,Vt=!!R.displacementMap,Re=!!R.emissiveMap,Gt=!!R.metalnessMap,U=!!R.roughnessMap,M=R.anisotropy>0,nt=R.clearcoat>0,gt=R.dispersion>0,St=R.iridescence>0,ft=R.sheen>0,Ut=R.transmission>0,It=M&&!!R.anisotropyMap,Pt=nt&&!!R.clearcoatMap,Zt=nt&&!!R.clearcoatNormalMap,xt=nt&&!!R.clearcoatRoughnessMap,Ft=St&&!!R.iridescenceMap,Yt=St&&!!R.iridescenceThicknessMap,Kt=ft&&!!R.sheenColorMap,Qt=ft&&!!R.sheenRoughnessMap,ce=!!R.specularMap,te=!!R.specularColorMap,De=!!R.specularIntensityMap,X=Ut&&!!R.transmissionMap,Dt=Ut&&!!R.thicknessMap,ct=!!R.gradientMap,mt=!!R.alphaMap,Lt=R.alphaTest>0,wt=!!R.alphaHash,ne=!!R.extensions;let Ge=Ya;R.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Ge=o.toneMapping);const $e={shaderID:_t,shaderType:R.type,shaderName:R.name,vertexShader:vt,fragmentShader:J,defines:R.defines,customVertexShaderID:pt,customFragmentShaderID:Ct,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:C,batching:Xt,batchingColor:Xt&&et._colorsTexture!==null,instancing:ae,instancingColor:ae&&et.instanceColor!==null,instancingMorph:ae&&et.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Tr,alphaToCoverage:!!R.alphaToCoverage,map:re,matcap:fe,envMap:ie,envMapMode:ie&&q.mapping,envMapCubeUVHeight:k,aoMap:H,lightMap:vn,bumpMap:ge,normalMap:ee,displacementMap:_&&Vt,emissiveMap:Re,normalMapObjectSpace:ee&&R.normalMapType===Yv,normalMapTangentSpace:ee&&R.normalMapType===Xv,metalnessMap:Gt,roughnessMap:U,anisotropy:M,anisotropyMap:It,clearcoat:nt,clearcoatMap:Pt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:xt,dispersion:gt,iridescence:St,iridescenceMap:Ft,iridescenceThicknessMap:Yt,sheen:ft,sheenColorMap:Kt,sheenRoughnessMap:Qt,specularMap:ce,specularColorMap:te,specularIntensityMap:De,transmission:Ut,transmissionMap:X,thicknessMap:Dt,gradientMap:ct,opaque:R.transparent===!1&&R.blending===ys&&R.alphaToCoverage===!1,alphaMap:mt,alphaTest:Lt,alphaHash:wt,combine:R.combine,mapUv:re&&I(R.map.channel),aoMapUv:H&&I(R.aoMap.channel),lightMapUv:vn&&I(R.lightMap.channel),bumpMapUv:ge&&I(R.bumpMap.channel),normalMapUv:ee&&I(R.normalMap.channel),displacementMapUv:Vt&&I(R.displacementMap.channel),emissiveMapUv:Re&&I(R.emissiveMap.channel),metalnessMapUv:Gt&&I(R.metalnessMap.channel),roughnessMapUv:U&&I(R.roughnessMap.channel),anisotropyMapUv:It&&I(R.anisotropyMap.channel),clearcoatMapUv:Pt&&I(R.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&I(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&I(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&I(R.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&I(R.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&I(R.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&I(R.sheenRoughnessMap.channel),specularMapUv:ce&&I(R.specularMap.channel),specularColorMapUv:te&&I(R.specularColorMap.channel),specularIntensityMapUv:De&&I(R.specularIntensityMap.channel),transmissionMapUv:X&&I(R.transmissionMap.channel),thicknessMapUv:Dt&&I(R.thicknessMap.channel),alphaMapUv:mt&&I(R.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(ee||M),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!lt.attributes.uv&&(re||mt),fog:!!ut,useFog:R.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:E,reverseDepthBuffer:Tt,skinning:et.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:dt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ge,decodeVideoTexture:re&&R.map.isVideoTexture===!0&&Me.getTransfer(R.map.colorSpace)===Le,decodeVideoTextureEmissive:Re&&R.emissiveMap.isVideoTexture===!0&&Me.getTransfer(R.emissiveMap.colorSpace)===Le,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ri,flipSided:R.side===Xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ne&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&R.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return $e.vertexUv1s=d.has(1),$e.vertexUv2s=d.has(2),$e.vertexUv3s=d.has(3),d.clear(),$e}function m(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)T.push(G),T.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(Q(T,R),D(T,R),T.push(o.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function Q(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function D(R,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),R.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reverseDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),R.push(h.mask)}function b(R){const T=y[R.type];let G;if(T){const tt=bi[T];G=xC.clone(tt.uniforms)}else G=R.uniforms;return G}function P(R,T){let G;for(let tt=0,et=g.length;tt<et;tt++){const ut=g[tt];if(ut.cacheKey===T){G=ut,++G.usedTimes;break}}return G===void 0&&(G=new JM(o,T,R,u),g.push(G)),G}function O(R){if(--R.usedTimes===0){const T=g.indexOf(R);g[T]=g[g.length-1],g.pop(),R.destroy()}}function F(R){p.remove(R)}function V(){p.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:P,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:V}}function eI(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let h=o.get(f);return h===void 0&&(h={},o.set(f,h)),h}function r(f){o.delete(f)}function l(f,h,p){o.get(f)[h]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function nI(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function rE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function sE(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(E,_,C,y,I,v){let m=o[t];return m===void 0?(m={id:E.id,object:E,geometry:_,material:C,groupOrder:y,renderOrder:E.renderOrder,z:I,group:v},o[t]=m):(m.id=E.id,m.object=E,m.geometry=_,m.material=C,m.groupOrder=y,m.renderOrder=E.renderOrder,m.z=I,m.group=v),t++,m}function h(E,_,C,y,I,v){const m=f(E,_,C,y,I,v);C.transmission>0?r.push(m):C.transparent===!0?l.push(m):i.push(m)}function p(E,_,C,y,I,v){const m=f(E,_,C,y,I,v);C.transmission>0?r.unshift(m):C.transparent===!0?l.unshift(m):i.unshift(m)}function d(E,_){i.length>1&&i.sort(E||nI),r.length>1&&r.sort(_||rE),l.length>1&&l.sort(_||rE)}function g(){for(let E=t,_=o.length;E<_;E++){const C=o[E];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:d}}function iI(){let o=new WeakMap;function t(r,l){const u=o.get(r);let f;return u===void 0?(f=new sE,o.set(r,[f])):l>=u.length?(f=new sE,u.push(f)):f=u[l],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function aI(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ot,color:new Ne};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[t.id]=i,i}}}function rI(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let sI=0;function oI(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function lI(o){const t=new aI,i=rI(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ot);const l=new ot,u=new rn,f=new rn;function h(d){let g=0,E=0,_=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let C=0,y=0,I=0,v=0,m=0,Q=0,D=0,b=0,P=0,O=0,F=0;d.sort(oI);for(let R=0,T=d.length;R<T;R++){const G=d[R],tt=G.color,et=G.intensity,ut=G.distance,lt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=tt.r*et,E+=tt.g*et,_+=tt.b*et;else if(G.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(G.sh.coefficients[L],et);F++}else if(G.isDirectionalLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,k=i.get(G);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,r.directionalShadow[C]=k,r.directionalShadowMap[C]=lt,r.directionalShadowMatrix[C]=G.shadow.matrix,Q++}r.directional[C]=L,C++}else if(G.isSpotLight){const L=t.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(tt).multiplyScalar(et),L.distance=ut,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,r.spot[I]=L;const q=G.shadow;if(G.map&&(r.spotLightMap[P]=G.map,P++,q.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[I]=q.matrix,G.castShadow){const k=i.get(G);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,r.spotShadow[I]=k,r.spotShadowMap[I]=lt,b++}I++}else if(G.isRectAreaLight){const L=t.get(G);L.color.copy(tt).multiplyScalar(et),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),r.rectArea[v]=L,v++}else if(G.isPointLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const q=G.shadow,k=i.get(G);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,r.pointShadow[y]=k,r.pointShadowMap[y]=lt,r.pointShadowMatrix[y]=G.shadow.matrix,D++}r.point[y]=L,y++}else if(G.isHemisphereLight){const L=t.get(G);L.skyColor.copy(G.color).multiplyScalar(et),L.groundColor.copy(G.groundColor).multiplyScalar(et),r.hemi[m]=L,m++}}v>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Rt.LTC_FLOAT_1,r.rectAreaLTC2=Rt.LTC_FLOAT_2):(r.rectAreaLTC1=Rt.LTC_HALF_1,r.rectAreaLTC2=Rt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=E,r.ambient[2]=_;const V=r.hash;(V.directionalLength!==C||V.pointLength!==y||V.spotLength!==I||V.rectAreaLength!==v||V.hemiLength!==m||V.numDirectionalShadows!==Q||V.numPointShadows!==D||V.numSpotShadows!==b||V.numSpotMaps!==P||V.numLightProbes!==F)&&(r.directional.length=C,r.spot.length=I,r.rectArea.length=v,r.point.length=y,r.hemi.length=m,r.directionalShadow.length=Q,r.directionalShadowMap.length=Q,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=Q,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=b+P-O,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,V.directionalLength=C,V.pointLength=y,V.spotLength=I,V.rectAreaLength=v,V.hemiLength=m,V.numDirectionalShadows=Q,V.numPointShadows=D,V.numSpotShadows=b,V.numSpotMaps=P,V.numLightProbes=F,r.version=sI++)}function p(d,g){let E=0,_=0,C=0,y=0,I=0;const v=g.matrixWorldInverse;for(let m=0,Q=d.length;m<Q;m++){const D=d[m];if(D.isDirectionalLight){const b=r.directional[E];b.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(v),E++}else if(D.isSpotLight){const b=r.spot[C];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(v),C++}else if(D.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(v),f.identity(),u.copy(D.matrixWorld),u.premultiply(v),f.extractRotation(u),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),y++}else if(D.isPointLight){const b=r.point[_];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(v),_++}else if(D.isHemisphereLight){const b=r.hemi[I];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(v),I++}}}return{setup:h,setupView:p,state:r}}function oE(o){const t=new lI(o),i=[],r=[];function l(g){d.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function cI(o){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let h;return f===void 0?(h=new oE(o),t.set(l,[h])):u>=f.length?(h=new oE(o),f.push(h)):h=f[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const uI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fI(o,t,i){let r=new DE;const l=new Pe,u=new Pe,f=new je,h=new NC({depthPacking:qv}),p=new FC,d={},g=i.maxTextureSize,E={[Wa]:Xn,[Xn]:Wa,[Ri]:Ri},_=new Ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:uI,fragmentShader:AI}),C=_.clone();C.defines.HORIZONTAL_PASS=1;const y=new Rr;y.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new wi(y,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hE;let m=this.type;this.render=function(O,F,V){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const R=o.getRenderTarget(),T=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Xa),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const et=m!==ra&&this.type===ra,ut=m===ra&&this.type!==ra;for(let lt=0,L=O.length;lt<L;lt++){const q=O[lt],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const _t=k.getFrameExtents();if(l.multiply(_t),u.copy(k.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/_t.x),l.x=u.x*_t.x,k.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/_t.y),l.y=u.y*_t.y,k.mapSize.y=u.y)),k.map===null||et===!0||ut===!0){const Z=this.type!==ra?{minFilter:ii,magFilter:ii}:{};k.map!==null&&k.map.dispose(),k.map=new br(l.x,l.y,Z),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const w=k.getViewportCount();for(let Z=0;Z<w;Z++){const dt=k.getViewport(Z);f.set(u.x*dt.x,u.y*dt.y,u.x*dt.z,u.y*dt.w),tt.viewport(f),k.updateMatrices(q,Z),r=k.getFrustum(),b(F,V,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===ra&&Q(k,V),k.needsUpdate=!1}m=this.type,v.needsUpdate=!1,o.setRenderTarget(R,T,G)};function Q(O,F){const V=t.update(I);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,C.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,C.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new br(l.x,l.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(F,null,V,_,I,null),C.uniforms.shadow_pass.value=O.mapPass.texture,C.uniforms.resolution.value=O.mapSize,C.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(F,null,V,C,I,null)}function D(O,F,V,R){let T=null;const G=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)T=G;else if(T=V.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const tt=T.uuid,et=F.uuid;let ut=d[tt];ut===void 0&&(ut={},d[tt]=ut);let lt=ut[et];lt===void 0&&(lt=T.clone(),ut[et]=lt,F.addEventListener("dispose",P)),T=lt}if(T.visible=F.visible,T.wireframe=F.wireframe,R===ra?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:E[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const tt=o.properties.get(T);tt.light=V}return T}function b(O,F,V,R,T){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===ra)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const et=t.update(O),ut=O.material;if(Array.isArray(ut)){const lt=et.groups;for(let L=0,q=lt.length;L<q;L++){const k=lt[L],_t=ut[k.materialIndex];if(_t&&_t.visible){const w=D(O,_t,R,T);O.onBeforeShadow(o,O,F,V,et,w,k),o.renderBufferDirect(V,null,et,w,O,k),O.onAfterShadow(o,O,F,V,et,w,k)}}}else if(ut.visible){const lt=D(O,ut,R,T);O.onBeforeShadow(o,O,F,V,et,lt,null),o.renderBufferDirect(V,null,et,lt,O,null),O.onAfterShadow(o,O,F,V,et,lt,null)}}const tt=O.children;for(let et=0,ut=tt.length;et<ut;et++)b(tt[et],F,V,R,T)}function P(O){O.target.removeEventListener("dispose",P);for(const V in d){const R=d[V],T=O.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}const hI={[zf]:Vf,[kf]:Yf,[qf]:Wf,[Bs]:Xf,[Vf]:zf,[Yf]:kf,[Wf]:qf,[Xf]:Bs};function dI(o,t){function i(){let X=!1;const Dt=new je;let ct=null;const mt=new je(0,0,0,0);return{setMask:function(Lt){ct!==Lt&&!X&&(o.colorMask(Lt,Lt,Lt,Lt),ct=Lt)},setLocked:function(Lt){X=Lt},setClear:function(Lt,wt,ne,Ge,$e){$e===!0&&(Lt*=Ge,wt*=Ge,ne*=Ge),Dt.set(Lt,wt,ne,Ge),mt.equals(Dt)===!1&&(o.clearColor(Lt,wt,ne,Ge),mt.copy(Dt))},reset:function(){X=!1,ct=null,mt.set(-1,0,0,0)}}}function r(){let X=!1,Dt=!1,ct=null,mt=null,Lt=null;return{setReversed:function(wt){if(Dt!==wt){const ne=t.get("EXT_clip_control");wt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Dt=wt;const Ge=Lt;Lt=null,this.setClear(Ge)}},getReversed:function(){return Dt},setTest:function(wt){wt?Mt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(wt){ct!==wt&&!X&&(o.depthMask(wt),ct=wt)},setFunc:function(wt){if(Dt&&(wt=hI[wt]),mt!==wt){switch(wt){case zf:o.depthFunc(o.NEVER);break;case Vf:o.depthFunc(o.ALWAYS);break;case kf:o.depthFunc(o.LESS);break;case Bs:o.depthFunc(o.LEQUAL);break;case qf:o.depthFunc(o.EQUAL);break;case Xf:o.depthFunc(o.GEQUAL);break;case Yf:o.depthFunc(o.GREATER);break;case Wf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}mt=wt}},setLocked:function(wt){X=wt},setClear:function(wt){Lt!==wt&&(Dt&&(wt=1-wt),o.clearDepth(wt),Lt=wt)},reset:function(){X=!1,ct=null,mt=null,Lt=null,Dt=!1}}}function l(){let X=!1,Dt=null,ct=null,mt=null,Lt=null,wt=null,ne=null,Ge=null,$e=null;return{setTest:function(Se){X||(Se?Mt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Se){Dt!==Se&&!X&&(o.stencilMask(Se),Dt=Se)},setFunc:function(Se,Yn,fn){(ct!==Se||mt!==Yn||Lt!==fn)&&(o.stencilFunc(Se,Yn,fn),ct=Se,mt=Yn,Lt=fn)},setOp:function(Se,Yn,fn){(wt!==Se||ne!==Yn||Ge!==fn)&&(o.stencilOp(Se,Yn,fn),wt=Se,ne=Yn,Ge=fn)},setLocked:function(Se){X=Se},setClear:function(Se){$e!==Se&&(o.clearStencil(Se),$e=Se)},reset:function(){X=!1,Dt=null,ct=null,mt=null,Lt=null,wt=null,ne=null,Ge=null,$e=null}}}const u=new i,f=new r,h=new l,p=new WeakMap,d=new WeakMap;let g={},E={},_=new WeakMap,C=[],y=null,I=!1,v=null,m=null,Q=null,D=null,b=null,P=null,O=null,F=new Ne(0,0,0),V=0,R=!1,T=null,G=null,tt=null,et=null,ut=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,q=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),L=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),L=q>=2);let _t=null,w={};const Z=o.getParameter(o.SCISSOR_BOX),dt=o.getParameter(o.VIEWPORT),vt=new je().fromArray(Z),J=new je().fromArray(dt);function pt(X,Dt,ct,mt){const Lt=new Uint8Array(4),wt=o.createTexture();o.bindTexture(X,wt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<ct;ne++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,mt,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(Dt+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return wt}const Ct={};Ct[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),Ct[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ct[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Mt(o.DEPTH_TEST),f.setFunc(Bs),ge(!1),ee(fm),Mt(o.CULL_FACE),H(Xa);function Mt(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function Tt(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function ae(X,Dt){return E[X]!==Dt?(o.bindFramebuffer(X,Dt),E[X]=Dt,X===o.DRAW_FRAMEBUFFER&&(E[o.FRAMEBUFFER]=Dt),X===o.FRAMEBUFFER&&(E[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(X,Dt){let ct=C,mt=!1;if(X){ct=_.get(Dt),ct===void 0&&(ct=[],_.set(Dt,ct));const Lt=X.textures;if(ct.length!==Lt.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let wt=0,ne=Lt.length;wt<ne;wt++)ct[wt]=o.COLOR_ATTACHMENT0+wt;ct.length=Lt.length,mt=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,mt=!0);mt&&o.drawBuffers(ct)}function re(X){return y!==X?(o.useProgram(X),y=X,!0):!1}const fe={[yr]:o.FUNC_ADD,[gv]:o.FUNC_SUBTRACT,[mv]:o.FUNC_REVERSE_SUBTRACT};fe[Ev]=o.MIN,fe[_v]=o.MAX;const ie={[vv]:o.ZERO,[Cv]:o.ONE,[Sv]:o.SRC_COLOR,[Gf]:o.SRC_ALPHA,[Tv]:o.SRC_ALPHA_SATURATE,[Iv]:o.DST_COLOR,[xv]:o.DST_ALPHA,[yv]:o.ONE_MINUS_SRC_COLOR,[Hf]:o.ONE_MINUS_SRC_ALPHA,[Bv]:o.ONE_MINUS_DST_COLOR,[Mv]:o.ONE_MINUS_DST_ALPHA,[bv]:o.CONSTANT_COLOR,[Rv]:o.ONE_MINUS_CONSTANT_COLOR,[Dv]:o.CONSTANT_ALPHA,[wv]:o.ONE_MINUS_CONSTANT_ALPHA};function H(X,Dt,ct,mt,Lt,wt,ne,Ge,$e,Se){if(X===Xa){I===!0&&(Tt(o.BLEND),I=!1);return}if(I===!1&&(Mt(o.BLEND),I=!0),X!==pv){if(X!==v||Se!==R){if((m!==yr||b!==yr)&&(o.blendEquation(o.FUNC_ADD),m=yr,b=yr),Se)switch(X){case ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hm:o.blendFunc(o.ONE,o.ONE);break;case dm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hm:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case dm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}Q=null,D=null,P=null,O=null,F.set(0,0,0),V=0,v=X,R=Se}return}Lt=Lt||Dt,wt=wt||ct,ne=ne||mt,(Dt!==m||Lt!==b)&&(o.blendEquationSeparate(fe[Dt],fe[Lt]),m=Dt,b=Lt),(ct!==Q||mt!==D||wt!==P||ne!==O)&&(o.blendFuncSeparate(ie[ct],ie[mt],ie[wt],ie[ne]),Q=ct,D=mt,P=wt,O=ne),(Ge.equals(F)===!1||$e!==V)&&(o.blendColor(Ge.r,Ge.g,Ge.b,$e),F.copy(Ge),V=$e),v=X,R=!1}function vn(X,Dt){X.side===Ri?Tt(o.CULL_FACE):Mt(o.CULL_FACE);let ct=X.side===Xn;Dt&&(ct=!ct),ge(ct),X.blending===ys&&X.transparent===!1?H(Xa):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const mt=X.stencilWrite;h.setTest(mt),mt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Re(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ge(X){T!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),T=X)}function ee(X){X!==fv?(Mt(o.CULL_FACE),X!==G&&(X===fm?o.cullFace(o.BACK):X===hv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),G=X}function Vt(X){X!==tt&&(L&&o.lineWidth(X),tt=X)}function Re(X,Dt,ct){X?(Mt(o.POLYGON_OFFSET_FILL),(et!==Dt||ut!==ct)&&(o.polygonOffset(Dt,ct),et=Dt,ut=ct)):Tt(o.POLYGON_OFFSET_FILL)}function Gt(X){X?Mt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function U(X){X===void 0&&(X=o.TEXTURE0+lt-1),_t!==X&&(o.activeTexture(X),_t=X)}function M(X,Dt,ct){ct===void 0&&(_t===null?ct=o.TEXTURE0+lt-1:ct=_t);let mt=w[ct];mt===void 0&&(mt={type:void 0,texture:void 0},w[ct]=mt),(mt.type!==X||mt.texture!==Dt)&&(_t!==ct&&(o.activeTexture(ct),_t=ct),o.bindTexture(X,Dt||Ct[X]),mt.type=X,mt.texture=Dt)}function nt(){const X=w[_t];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function gt(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(X){vt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),vt.copy(X))}function Qt(X){J.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ce(X,Dt){let ct=d.get(Dt);ct===void 0&&(ct=new WeakMap,d.set(Dt,ct));let mt=ct.get(X);mt===void 0&&(mt=o.getUniformBlockIndex(Dt,X.name),ct.set(X,mt))}function te(X,Dt){const mt=d.get(Dt).get(X);p.get(Dt)!==mt&&(o.uniformBlockBinding(Dt,mt,X.__bindingPointIndex),p.set(Dt,mt))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},_t=null,w={},E={},_=new WeakMap,C=[],y=null,I=!1,v=null,m=null,Q=null,D=null,b=null,P=null,O=null,F=new Ne(0,0,0),V=0,R=!1,T=null,G=null,tt=null,et=null,ut=null,vt.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:Mt,disable:Tt,bindFramebuffer:ae,drawBuffers:Xt,useProgram:re,setBlending:H,setMaterial:vn,setFlipSided:ge,setCullFace:ee,setLineWidth:Vt,setPolygonOffset:Re,setScissorTest:Gt,activeTexture:U,bindTexture:M,unbindTexture:nt,compressedTexImage2D:gt,compressedTexImage3D:St,texImage2D:Ft,texImage3D:Yt,updateUBOMapping:ce,uniformBlockBinding:te,texStorage2D:Zt,texStorage3D:xt,texSubImage2D:ft,texSubImage3D:Ut,compressedTexSubImage2D:It,compressedTexSubImage3D:Pt,scissor:Kt,viewport:Qt,reset:De}}function pI(o,t,i,r,l,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Pe,g=new WeakMap;let E;const _=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,M){return C?new OffscreenCanvas(U,M):Gc("canvas")}function I(U,M,nt){let gt=1;const St=Gt(U);if((St.width>nt||St.height>nt)&&(gt=nt/Math.max(St.width,St.height)),gt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(gt*St.width),Ut=Math.floor(gt*St.height);E===void 0&&(E=y(ft,Ut));const It=M?y(ft,Ut):E;return It.width=ft,It.height=Ut,It.getContext("2d").drawImage(U,0,0,ft,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+Ut+")."),It}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function v(U){return U.generateMipmaps}function m(U){o.generateMipmap(U)}function Q(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(U,M,nt,gt,St=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=M;if(M===o.RED&&(nt===o.FLOAT&&(ft=o.R32F),nt===o.HALF_FLOAT&&(ft=o.R16F),nt===o.UNSIGNED_BYTE&&(ft=o.R8)),M===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.R8UI),nt===o.UNSIGNED_SHORT&&(ft=o.R16UI),nt===o.UNSIGNED_INT&&(ft=o.R32UI),nt===o.BYTE&&(ft=o.R8I),nt===o.SHORT&&(ft=o.R16I),nt===o.INT&&(ft=o.R32I)),M===o.RG&&(nt===o.FLOAT&&(ft=o.RG32F),nt===o.HALF_FLOAT&&(ft=o.RG16F),nt===o.UNSIGNED_BYTE&&(ft=o.RG8)),M===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),nt===o.UNSIGNED_INT&&(ft=o.RG32UI),nt===o.BYTE&&(ft=o.RG8I),nt===o.SHORT&&(ft=o.RG16I),nt===o.INT&&(ft=o.RG32I)),M===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),nt===o.UNSIGNED_INT&&(ft=o.RGB32UI),nt===o.BYTE&&(ft=o.RGB8I),nt===o.SHORT&&(ft=o.RGB16I),nt===o.INT&&(ft=o.RGB32I)),M===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),nt===o.BYTE&&(ft=o.RGBA8I),nt===o.SHORT&&(ft=o.RGBA16I),nt===o.INT&&(ft=o.RGBA32I)),M===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),M===o.RGBA){const Ut=St?Oc:Me.getTransfer(gt);nt===o.FLOAT&&(ft=o.RGBA32F),nt===o.HALF_FLOAT&&(ft=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ft=Ut===Le?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function b(U,M){let nt;return U?M===null||M===Br||M===Go?nt=o.DEPTH24_STENCIL8:M===qn?nt=o.DEPTH32F_STENCIL8:M===Po&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Br||M===Go?nt=o.DEPTH_COMPONENT24:M===qn?nt=o.DEPTH_COMPONENT32F:M===Po&&(nt=o.DEPTH_COMPONENT16),nt}function P(U,M){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==ii&&U.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function O(U){const M=U.target;M.removeEventListener("dispose",O),V(M),M.isVideoTexture&&g.delete(M)}function F(U){const M=U.target;M.removeEventListener("dispose",F),T(M)}function V(U){const M=r.get(U);if(M.__webglInit===void 0)return;const nt=U.source,gt=_.get(nt);if(gt){const St=gt[M.__cacheKey];St.usedTimes--,St.usedTimes===0&&R(U),Object.keys(gt).length===0&&_.delete(nt)}r.remove(U)}function R(U){const M=r.get(U);o.deleteTexture(M.__webglTexture);const nt=U.source,gt=_.get(nt);delete gt[M.__cacheKey],f.memory.textures--}function T(U){const M=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(M.__webglFramebuffer[gt]))for(let St=0;St<M.__webglFramebuffer[gt].length;St++)o.deleteFramebuffer(M.__webglFramebuffer[gt][St]);else o.deleteFramebuffer(M.__webglFramebuffer[gt]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[gt])}else{if(Array.isArray(M.__webglFramebuffer))for(let gt=0;gt<M.__webglFramebuffer.length;gt++)o.deleteFramebuffer(M.__webglFramebuffer[gt]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let gt=0;gt<M.__webglColorRenderbuffer.length;gt++)M.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[gt]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const nt=U.textures;for(let gt=0,St=nt.length;gt<St;gt++){const ft=r.get(nt[gt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),f.memory.textures--),r.remove(nt[gt])}r.remove(U)}let G=0;function tt(){G=0}function et(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function ut(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function lt(U,M){const nt=r.get(U);if(U.isVideoTexture&&Vt(U),U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){const gt=U.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(nt,U,M);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+M)}function L(U,M){const nt=r.get(U);if(U.version>0&&nt.__version!==U.version){J(nt,U,M);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+M)}function q(U,M){const nt=r.get(U);if(U.version>0&&nt.__version!==U.version){J(nt,U,M);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+M)}function k(U,M){const nt=r.get(U);if(U.version>0&&nt.__version!==U.version){pt(nt,U,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+M)}const _t={[Zf]:o.REPEAT,[Va]:o.CLAMP_TO_EDGE,[jf]:o.MIRRORED_REPEAT},w={[ii]:o.NEAREST,[zv]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[wn]:o.LINEAR,[ef]:o.LINEAR_MIPMAP_NEAREST,[oa]:o.LINEAR_MIPMAP_LINEAR},Z={[Wv]:o.NEVER,[tC]:o.ALWAYS,[Kv]:o.LESS,[vE]:o.LEQUAL,[Jv]:o.EQUAL,[$v]:o.GEQUAL,[Zv]:o.GREATER,[jv]:o.NOTEQUAL};function dt(U,M){if(M.type===qn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===wn||M.magFilter===ef||M.magFilter===uc||M.magFilter===oa||M.minFilter===wn||M.minFilter===ef||M.minFilter===uc||M.minFilter===oa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_t[M.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_t[M.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_t[M.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,w[M.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,w[M.minFilter]),M.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ii||M.minFilter!==uc&&M.minFilter!==oa||M.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function vt(U,M){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",O));const gt=M.source;let St=_.get(gt);St===void 0&&(St={},_.set(gt,St));const ft=ut(M);if(ft!==U.__cacheKey){St[ft]===void 0&&(St[ft]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),St[ft].usedTimes++;const Ut=St[U.__cacheKey];Ut!==void 0&&(St[U.__cacheKey].usedTimes--,Ut.usedTimes===0&&R(M)),U.__cacheKey=ft,U.__webglTexture=St[ft].texture}return nt}function J(U,M,nt){let gt=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(gt=o.TEXTURE_3D);const St=vt(U,M),ft=M.source;i.bindTexture(gt,U.__webglTexture,o.TEXTURE0+nt);const Ut=r.get(ft);if(ft.version!==Ut.__version||St===!0){i.activeTexture(o.TEXTURE0+nt);const It=Me.getPrimaries(Me.workingColorSpace),Pt=M.colorSpace===Di?null:Me.getPrimaries(M.colorSpace),Zt=M.colorSpace===Di||It===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let xt=I(M.image,!1,l.maxTextureSize);xt=Re(M,xt);const Ft=u.convert(M.format,M.colorSpace),Yt=u.convert(M.type);let Kt=D(M.internalFormat,Ft,Yt,M.colorSpace,M.isVideoTexture);dt(gt,M);let Qt;const ce=M.mipmaps,te=M.isVideoTexture!==!0,De=Ut.__version===void 0||St===!0,X=ft.dataReady,Dt=P(M,xt);if(M.isDepthTexture)Kt=b(M.format===zo,M.type),De&&(te?i.texStorage2D(o.TEXTURE_2D,1,Kt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,Kt,xt.width,xt.height,0,Ft,Yt,null));else if(M.isDataTexture)if(ce.length>0){te&&De&&i.texStorage2D(o.TEXTURE_2D,Dt,Kt,ce[0].width,ce[0].height);for(let ct=0,mt=ce.length;ct<mt;ct++)Qt=ce[ct],te?X&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Qt.width,Qt.height,Ft,Yt,Qt.data):i.texImage2D(o.TEXTURE_2D,ct,Kt,Qt.width,Qt.height,0,Ft,Yt,Qt.data);M.generateMipmaps=!1}else te?(De&&i.texStorage2D(o.TEXTURE_2D,Dt,Kt,xt.width,xt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,xt.width,xt.height,Ft,Yt,xt.data)):i.texImage2D(o.TEXTURE_2D,0,Kt,xt.width,xt.height,0,Ft,Yt,xt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){te&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Kt,ce[0].width,ce[0].height,xt.depth);for(let ct=0,mt=ce.length;ct<mt;ct++)if(Qt=ce[ct],M.format!==_n)if(Ft!==null)if(te){if(X)if(M.layerUpdates.size>0){const Lt=Fm(Qt.width,Qt.height,M.format,M.type);for(const wt of M.layerUpdates){const ne=Qt.data.subarray(wt*Lt/Qt.data.BYTES_PER_ELEMENT,(wt+1)*Lt/Qt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,wt,Qt.width,Qt.height,1,Ft,ne)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Qt.width,Qt.height,xt.depth,Ft,Qt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,Kt,Qt.width,Qt.height,xt.depth,0,Qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Qt.width,Qt.height,xt.depth,Ft,Yt,Qt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,Kt,Qt.width,Qt.height,xt.depth,0,Ft,Yt,Qt.data)}else{te&&De&&i.texStorage2D(o.TEXTURE_2D,Dt,Kt,ce[0].width,ce[0].height);for(let ct=0,mt=ce.length;ct<mt;ct++)Qt=ce[ct],M.format!==_n?Ft!==null?te?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Qt.width,Qt.height,Ft,Qt.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,Kt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?X&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Qt.width,Qt.height,Ft,Yt,Qt.data):i.texImage2D(o.TEXTURE_2D,ct,Kt,Qt.width,Qt.height,0,Ft,Yt,Qt.data)}else if(M.isDataArrayTexture)if(te){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Kt,xt.width,xt.height,xt.depth),X)if(M.layerUpdates.size>0){const ct=Fm(xt.width,xt.height,M.format,M.type);for(const mt of M.layerUpdates){const Lt=xt.data.subarray(mt*ct/xt.data.BYTES_PER_ELEMENT,(mt+1)*ct/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,xt.width,xt.height,1,Ft,Yt,Lt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ft,Yt,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,xt.width,xt.height,xt.depth,0,Ft,Yt,xt.data);else if(M.isData3DTexture)te?(De&&i.texStorage3D(o.TEXTURE_3D,Dt,Kt,xt.width,xt.height,xt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ft,Yt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,Kt,xt.width,xt.height,xt.depth,0,Ft,Yt,xt.data);else if(M.isFramebufferTexture){if(De)if(te)i.texStorage2D(o.TEXTURE_2D,Dt,Kt,xt.width,xt.height);else{let ct=xt.width,mt=xt.height;for(let Lt=0;Lt<Dt;Lt++)i.texImage2D(o.TEXTURE_2D,Lt,Kt,ct,mt,0,Ft,Yt,null),ct>>=1,mt>>=1}}else if(ce.length>0){if(te&&De){const ct=Gt(ce[0]);i.texStorage2D(o.TEXTURE_2D,Dt,Kt,ct.width,ct.height)}for(let ct=0,mt=ce.length;ct<mt;ct++)Qt=ce[ct],te?X&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ft,Yt,Qt):i.texImage2D(o.TEXTURE_2D,ct,Kt,Ft,Yt,Qt);M.generateMipmaps=!1}else if(te){if(De){const ct=Gt(xt);i.texStorage2D(o.TEXTURE_2D,Dt,Kt,ct.width,ct.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,Yt,xt)}else i.texImage2D(o.TEXTURE_2D,0,Kt,Ft,Yt,xt);v(M)&&m(gt),Ut.__version=ft.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function pt(U,M,nt){if(M.image.length!==6)return;const gt=vt(U,M),St=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const ft=r.get(St);if(St.version!==ft.__version||gt===!0){i.activeTexture(o.TEXTURE0+nt);const Ut=Me.getPrimaries(Me.workingColorSpace),It=M.colorSpace===Di?null:Me.getPrimaries(M.colorSpace),Pt=M.colorSpace===Di||Ut===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Zt=M.isCompressedTexture||M.image[0].isCompressedTexture,xt=M.image[0]&&M.image[0].isDataTexture,Ft=[];for(let mt=0;mt<6;mt++)!Zt&&!xt?Ft[mt]=I(M.image[mt],!0,l.maxCubemapSize):Ft[mt]=xt?M.image[mt].image:M.image[mt],Ft[mt]=Re(M,Ft[mt]);const Yt=Ft[0],Kt=u.convert(M.format,M.colorSpace),Qt=u.convert(M.type),ce=D(M.internalFormat,Kt,Qt,M.colorSpace),te=M.isVideoTexture!==!0,De=ft.__version===void 0||gt===!0,X=St.dataReady;let Dt=P(M,Yt);dt(o.TEXTURE_CUBE_MAP,M);let ct;if(Zt){te&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,ce,Yt.width,Yt.height);for(let mt=0;mt<6;mt++){ct=Ft[mt].mipmaps;for(let Lt=0;Lt<ct.length;Lt++){const wt=ct[Lt];M.format!==_n?Kt!==null?te?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt,0,0,wt.width,wt.height,Kt,wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt,ce,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt,0,0,wt.width,wt.height,Kt,Qt,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt,ce,wt.width,wt.height,0,Kt,Qt,wt.data)}}}else{if(ct=M.mipmaps,te&&De){ct.length>0&&Dt++;const mt=Gt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,ce,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(xt){te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ft[mt].width,Ft[mt].height,Kt,Qt,Ft[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ce,Ft[mt].width,Ft[mt].height,0,Kt,Qt,Ft[mt].data);for(let Lt=0;Lt<ct.length;Lt++){const ne=ct[Lt].image[mt].image;te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt+1,0,0,ne.width,ne.height,Kt,Qt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt+1,ce,ne.width,ne.height,0,Kt,Qt,ne.data)}}else{te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Kt,Qt,Ft[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ce,Kt,Qt,Ft[mt]);for(let Lt=0;Lt<ct.length;Lt++){const wt=ct[Lt];te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt+1,0,0,Kt,Qt,wt.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt+1,ce,Kt,Qt,wt.image[mt])}}}v(M)&&m(o.TEXTURE_CUBE_MAP),ft.__version=St.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Ct(U,M,nt,gt,St,ft){const Ut=u.convert(nt.format,nt.colorSpace),It=u.convert(nt.type),Pt=D(nt.internalFormat,Ut,It,nt.colorSpace),Zt=r.get(M),xt=r.get(nt);if(xt.__renderTarget=M,!Zt.__hasExternalTextures){const Ft=Math.max(1,M.width>>ft),Yt=Math.max(1,M.height>>ft);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ft,Pt,Ft,Yt,M.depth,0,Ut,It,null):i.texImage2D(St,ft,Pt,Ft,Yt,0,Ut,It,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),ee(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,St,xt.__webglTexture,0,ge(M)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,St,xt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Mt(U,M,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),M.depthBuffer){const gt=M.depthTexture,St=gt&&gt.isDepthTexture?gt.type:null,ft=b(M.stencilBuffer,St),Ut=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=ge(M);ee(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,It,ft,M.width,M.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,It,ft,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ft,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,U)}else{const gt=M.textures;for(let St=0;St<gt.length;St++){const ft=gt[St],Ut=u.convert(ft.format,ft.colorSpace),It=u.convert(ft.type),Pt=D(ft.internalFormat,Ut,It,ft.colorSpace),Zt=ge(M);nt&&ee(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Pt,M.width,M.height):ee(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Pt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(U,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(M.depthTexture);gt.__renderTarget=M,(!gt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),lt(M.depthTexture,0);const St=gt.__webglTexture,ft=ge(M);if(M.depthTexture.format===Ho)ee(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(M.depthTexture.format===zo)ee(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function ae(U){const M=r.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const gt=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),gt){const St=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,gt.removeEventListener("dispose",St)};gt.addEventListener("dispose",St),M.__depthDisposeCallback=St}M.__boundDepthTexture=gt}if(U.depthTexture&&!M.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const gt=U.texture.mipmaps;gt&&gt.length>0?Tt(M.__webglFramebuffer[0],U):Tt(M.__webglFramebuffer,U)}else if(nt){M.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[gt]),M.__webglDepthbuffer[gt]===void 0)M.__webglDepthbuffer[gt]=o.createRenderbuffer(),Mt(M.__webglDepthbuffer[gt],U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ft)}}else{const gt=U.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Mt(M.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(U,M,nt){const gt=r.get(U);M!==void 0&&Ct(gt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&ae(U)}function re(U){const M=U.texture,nt=r.get(U),gt=r.get(M);U.addEventListener("dispose",F);const St=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Ut=St.length>1;if(Ut||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=M.version,f.memory.textures++),ft){nt.__webglFramebuffer=[];for(let It=0;It<6;It++)if(M.mipmaps&&M.mipmaps.length>0){nt.__webglFramebuffer[It]=[];for(let Pt=0;Pt<M.mipmaps.length;Pt++)nt.__webglFramebuffer[It][Pt]=o.createFramebuffer()}else nt.__webglFramebuffer[It]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){nt.__webglFramebuffer=[];for(let It=0;It<M.mipmaps.length;It++)nt.__webglFramebuffer[It]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let It=0,Pt=St.length;It<Pt;It++){const Zt=r.get(St[It]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),f.memory.textures++)}if(U.samples>0&&ee(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let It=0;It<St.length;It++){const Pt=St[It];nt.__webglColorRenderbuffer[It]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[It]);const Zt=u.convert(Pt.format,Pt.colorSpace),xt=u.convert(Pt.type),Ft=D(Pt.internalFormat,Zt,xt,Pt.colorSpace,U.isXRRenderTarget===!0),Yt=ge(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Ft,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,nt.__webglColorRenderbuffer[It])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Mt(nt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),dt(o.TEXTURE_CUBE_MAP,M);for(let It=0;It<6;It++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pt=0;Pt<M.mipmaps.length;Pt++)Ct(nt.__webglFramebuffer[It][Pt],U,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,Pt);else Ct(nt.__webglFramebuffer[It],U,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);v(M)&&m(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let It=0,Pt=St.length;It<Pt;It++){const Zt=St[It],xt=r.get(Zt);i.bindTexture(o.TEXTURE_2D,xt.__webglTexture),dt(o.TEXTURE_2D,Zt),Ct(nt.__webglFramebuffer,U,Zt,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,0),v(Zt)&&m(o.TEXTURE_2D)}i.unbindTexture()}else{let It=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(It=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,gt.__webglTexture),dt(It,M),M.mipmaps&&M.mipmaps.length>0)for(let Pt=0;Pt<M.mipmaps.length;Pt++)Ct(nt.__webglFramebuffer[Pt],U,M,o.COLOR_ATTACHMENT0,It,Pt);else Ct(nt.__webglFramebuffer,U,M,o.COLOR_ATTACHMENT0,It,0);v(M)&&m(It),i.unbindTexture()}U.depthBuffer&&ae(U)}function fe(U){const M=U.textures;for(let nt=0,gt=M.length;nt<gt;nt++){const St=M[nt];if(v(St)){const ft=Q(U),Ut=r.get(St).__webglTexture;i.bindTexture(ft,Ut),m(ft),i.unbindTexture()}}}const ie=[],H=[];function vn(U){if(U.samples>0){if(ee(U)===!1){const M=U.textures,nt=U.width,gt=U.height;let St=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=r.get(U),It=M.length>1;if(It)for(let Zt=0;Zt<M.length;Zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Pt=U.texture.mipmaps;Pt&&Pt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Zt=0;Zt<M.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),It){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Zt]);const xt=r.get(M[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,nt,gt,0,0,nt,gt,St,o.NEAREST),p===!0&&(ie.length=0,H.length=0,ie.push(o.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ie.push(ft),H.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,H)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),It)for(let Zt=0;Zt<M.length;Zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Zt]);const xt=r.get(M[Zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,xt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const M=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function ge(U){return Math.min(l.maxSamples,U.samples)}function ee(U){const M=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Vt(U){const M=f.render.frame;g.get(U)!==M&&(g.set(U,M),U.update())}function Re(U,M){const nt=U.colorSpace,gt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==Tr&&nt!==Di&&(Me.getTransfer(nt)===Le?(gt!==_n||St!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),M}function Gt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=tt,this.setTexture2D=lt,this.setTexture2DArray=L,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=Xt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ee}function gI(o,t){function i(r,l=Di){let u;const f=Me.getTransfer(l);if(r===En)return o.UNSIGNED_BYTE;if(r===vh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ch)return o.UNSIGNED_SHORT_5_5_5_1;if(r===EE)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===gE)return o.BYTE;if(r===mE)return o.SHORT;if(r===Po)return o.UNSIGNED_SHORT;if(r===_h)return o.INT;if(r===Br)return o.UNSIGNED_INT;if(r===qn)return o.FLOAT;if(r===Si)return o.HALF_FLOAT;if(r===Sh)return o.ALPHA;if(r===yh)return o.RGB;if(r===_n)return o.RGBA;if(r===Ho)return o.DEPTH_COMPONENT;if(r===zo)return o.DEPTH_STENCIL;if(r===ka)return o.RED;if(r===zc)return o.RED_INTEGER;if(r===qa)return o.RG;if(r===Vc)return o.RG_INTEGER;if(r===kc)return o.RGBA_INTEGER;if(r===No||r===xs||r===Fo||r===Ms)if(f===Le)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===No)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xs)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fo)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ms)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===No)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xs)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fo)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ms)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vo||r===Qc||r===ko||r===Lc)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Vo)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qc)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ko)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lc)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qo||r===Xo||r===Yo)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===qo||r===Xo)return f===Le?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Yo)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bs||r===Nc||r===$f||r===th||r===Wo||r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===bs)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nc)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$f)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wo)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eh)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sh)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===oh)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lh)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ch)return f===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oo||r===uh||r===Fc)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Oo)return f===Le?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fc)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_E||r===Ah||r===fh||r===hh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Oo)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Ah)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const mI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _I{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Un,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ka({vertexShader:mI,fragmentShader:EI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vI extends Ds{constructor(t,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",p=1,d=null,g=null,E=null,_=null,C=null,y=null;const I=new _I,v=i.getContextAttributes();let m=null,Q=null;const D=[],b=[],P=new Pe;let O=null;const F=new vi;F.viewport=new je;const V=new vi;V.viewport=new je;const R=[F,V],T=new HC;let G=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pt=D[J];return pt===void 0&&(pt=new xf,D[J]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(J){let pt=D[J];return pt===void 0&&(pt=new xf,D[J]=pt),pt.getGripSpace()},this.getHand=function(J){let pt=D[J];return pt===void 0&&(pt=new xf,D[J]=pt),pt.getHandSpace()};function et(J){const pt=b.indexOf(J.inputSource);if(pt===-1)return;const Ct=D[pt];Ct!==void 0&&(Ct.update(J.inputSource,J.frame,d||f),Ct.dispatchEvent({type:J.type,data:J.inputSource}))}function ut(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",lt);for(let J=0;J<D.length;J++){const pt=b[J];pt!==null&&(b[J]=null,D[J].disconnect(pt))}G=null,tt=null,I.reset(),t.setRenderTarget(m),C=null,_=null,E=null,l=null,Q=null,vt.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return _!==null?_:C},this.getBinding=function(){return E},this.getFrame=function(){return y},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(m=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",lt),v.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Mt=null,Tt=null;v.depth&&(Tt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=v.stencil?zo:Ho,Mt=v.stencil?Go:Br);const ae={colorFormat:i.RGBA8,depthFormat:Tt,scaleFactor:u};E=new XRWebGLBinding(l,i),_=E.createProjectionLayer(ae),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),Q=new br(_.textureWidth,_.textureHeight,{format:_n,type:En,depthTexture:new wE(_.textureWidth,_.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};C=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:C}),t.setPixelRatio(1),t.setSize(C.framebufferWidth,C.framebufferHeight,!1),Q=new br(C.framebufferWidth,C.framebufferHeight,{format:_n,type:En,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:C.ignoreDepthValues===!1,resolveStencilBuffer:C.ignoreDepthValues===!1})}Q.isXRRenderTarget=!0,this.setFoveation(p),d=null,f=await l.requestReferenceSpace(h),vt.setContext(l),vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function lt(J){for(let pt=0;pt<J.removed.length;pt++){const Ct=J.removed[pt],Mt=b.indexOf(Ct);Mt>=0&&(b[Mt]=null,D[Mt].disconnect(Ct))}for(let pt=0;pt<J.added.length;pt++){const Ct=J.added[pt];let Mt=b.indexOf(Ct);if(Mt===-1){for(let ae=0;ae<D.length;ae++)if(ae>=b.length){b.push(Ct),Mt=ae;break}else if(b[ae]===null){b[ae]=Ct,Mt=ae;break}if(Mt===-1)break}const Tt=D[Mt];Tt&&Tt.connect(Ct)}}const L=new ot,q=new ot;function k(J,pt,Ct){L.setFromMatrixPosition(pt.matrixWorld),q.setFromMatrixPosition(Ct.matrixWorld);const Mt=L.distanceTo(q),Tt=pt.projectionMatrix.elements,ae=Ct.projectionMatrix.elements,Xt=Tt[14]/(Tt[10]-1),re=Tt[14]/(Tt[10]+1),fe=(Tt[9]+1)/Tt[5],ie=(Tt[9]-1)/Tt[5],H=(Tt[8]-1)/Tt[0],vn=(ae[8]+1)/ae[0],ge=Xt*H,ee=Xt*vn,Vt=Mt/(-H+vn),Re=Vt*-H;if(pt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Re),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Tt[10]===-1)J.projectionMatrix.copy(pt.projectionMatrix),J.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Gt=Xt+Vt,U=re+Vt,M=ge-Re,nt=ee+(Mt-Re),gt=fe*re/U*Gt,St=ie*re/U*Gt;J.projectionMatrix.makePerspective(M,nt,gt,St,Gt,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _t(J,pt){pt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let pt=J.near,Ct=J.far;I.texture!==null&&(I.depthNear>0&&(pt=I.depthNear),I.depthFar>0&&(Ct=I.depthFar)),T.near=V.near=F.near=pt,T.far=V.far=F.far=Ct,(G!==T.near||tt!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),G=T.near,tt=T.far),F.layers.mask=J.layers.mask|2,V.layers.mask=J.layers.mask|4,T.layers.mask=F.layers.mask|V.layers.mask;const Mt=J.parent,Tt=T.cameras;_t(T,Mt);for(let ae=0;ae<Tt.length;ae++)_t(Tt[ae],Mt);Tt.length===2?k(T,F,V):T.projectionMatrix.copy(F.projectionMatrix),w(J,T,Mt)};function w(J,pt,Ct){Ct===null?J.matrix.copy(pt.matrixWorld):(J.matrix.copy(Ct.matrixWorld),J.matrix.invert(),J.matrix.multiply(pt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pt.projectionMatrix),J.projectionMatrixInverse.copy(pt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=dh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&C===null))return p},this.setFoveation=function(J){p=J,_!==null&&(_.fixedFoveation=J),C!==null&&C.fixedFoveation!==void 0&&(C.fixedFoveation=J)},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(T)};let Z=null;function dt(J,pt){if(g=pt.getViewerPose(d||f),y=pt,g!==null){const Ct=g.views;C!==null&&(t.setRenderTargetFramebuffer(Q,C.framebuffer),t.setRenderTarget(Q));let Mt=!1;Ct.length!==T.cameras.length&&(T.cameras.length=0,Mt=!0);for(let Xt=0;Xt<Ct.length;Xt++){const re=Ct[Xt];let fe=null;if(C!==null)fe=C.getViewport(re);else{const H=E.getViewSubImage(_,re);fe=H.viewport,Xt===0&&(t.setRenderTargetTextures(Q,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(Q))}let ie=R[Xt];ie===void 0&&(ie=new vi,ie.layers.enable(Xt),ie.viewport=new je,R[Xt]=ie),ie.matrix.fromArray(re.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(re.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(fe.x,fe.y,fe.width,fe.height),Xt===0&&(T.matrix.copy(ie.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Mt===!0&&T.cameras.push(ie)}const Tt=l.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){const Xt=E.getDepthInformation(Ct[0]);Xt&&Xt.isValid&&Xt.texture&&I.init(t,Xt,l.renderState)}}for(let Ct=0;Ct<D.length;Ct++){const Mt=b[Ct],Tt=D[Ct];Mt!==null&&Tt!==void 0&&Tt.update(Mt,pt,d||f)}Z&&Z(J,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),y=null}const vt=new QE;vt.setAnimationLoop(dt),this.setAnimationLoop=function(J){Z=J},this.dispose=function(){}}}const vr=new ua,CI=new rn;function SI(o,t){function i(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function r(v,m){m.color.getRGB(v.fogColor.value,TE(o)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function l(v,m,Q,D,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?u(v,m):m.isMeshToonMaterial?(u(v,m),E(v,m)):m.isMeshPhongMaterial?(u(v,m),g(v,m)):m.isMeshStandardMaterial?(u(v,m),_(v,m),m.isMeshPhysicalMaterial&&C(v,m,b)):m.isMeshMatcapMaterial?(u(v,m),y(v,m)):m.isMeshDepthMaterial?u(v,m):m.isMeshDistanceMaterial?(u(v,m),I(v,m)):m.isMeshNormalMaterial?u(v,m):m.isLineBasicMaterial?(f(v,m),m.isLineDashedMaterial&&h(v,m)):m.isPointsMaterial?p(v,m,Q,D):m.isSpriteMaterial?d(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function u(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,i(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,i(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,i(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Xn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,i(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Xn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,i(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,i(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const Q=t.get(m),D=Q.envMap,b=Q.envMapRotation;D&&(v.envMap.value=D,vr.copy(b),vr.x*=-1,vr.y*=-1,vr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),v.envMapRotation.value.setFromMatrix4(CI.makeRotationFromEuler(vr)),v.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,v.aoMapTransform))}function f(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,i(m.map,v.mapTransform))}function h(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function p(v,m,Q,D){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*Q,v.scale.value=D*.5,m.map&&(v.map.value=m.map,i(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,i(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function d(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,i(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,i(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function g(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function E(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function _(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function C(v,m,Q){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=Q.texture,v.transmissionSamplerSize.value.set(Q.width,Q.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,m){m.matcap&&(v.matcap.value=m.matcap)}function I(v,m){const Q=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(Q.matrixWorld),v.nearDistance.value=Q.shadow.camera.near,v.farDistance.value=Q.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function yI(o,t,i,r){let l={},u={},f=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(Q,D){const b=D.program;r.uniformBlockBinding(Q,b)}function d(Q,D){let b=l[Q.id];b===void 0&&(y(Q),b=g(Q),l[Q.id]=b,Q.addEventListener("dispose",v));const P=D.program;r.updateUBOMapping(Q,P);const O=t.render.frame;u[Q.id]!==O&&(_(Q),u[Q.id]=O)}function g(Q){const D=E();Q.__bindingPointIndex=D;const b=o.createBuffer(),P=Q.__size,O=Q.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,P,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,b),b}function E(){for(let Q=0;Q<h;Q++)if(f.indexOf(Q)===-1)return f.push(Q),Q;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(Q){const D=l[Q.id],b=Q.uniforms,P=Q.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let O=0,F=b.length;O<F;O++){const V=Array.isArray(b[O])?b[O]:[b[O]];for(let R=0,T=V.length;R<T;R++){const G=V[R];if(C(G,O,R,P)===!0){const tt=G.__offset,et=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let lt=0;lt<et.length;lt++){const L=et[lt],q=I(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,tt+ut,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,ut),ut+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function C(Q,D,b,P){const O=Q.value,F=D+"_"+b;if(P[F]===void 0)return typeof O=="number"||typeof O=="boolean"?P[F]=O:P[F]=O.clone(),!0;{const V=P[F];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return P[F]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function y(Q){const D=Q.uniforms;let b=0;const P=16;for(let F=0,V=D.length;F<V;F++){const R=Array.isArray(D[F])?D[F]:[D[F]];for(let T=0,G=R.length;T<G;T++){const tt=R[T],et=Array.isArray(tt.value)?tt.value:[tt.value];for(let ut=0,lt=et.length;ut<lt;ut++){const L=et[ut],q=I(L),k=b%P,_t=k%q.boundary,w=k+_t;b+=_t,w!==0&&P-w<q.storage&&(b+=P-w),tt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=b,b+=q.storage}}}const O=b%P;return O>0&&(b+=P-O),Q.__size=b,Q.__cache={},this}function I(Q){const D={boundary:0,storage:0};return typeof Q=="number"||typeof Q=="boolean"?(D.boundary=4,D.storage=4):Q.isVector2?(D.boundary=8,D.storage=8):Q.isVector3||Q.isColor?(D.boundary=16,D.storage=12):Q.isVector4?(D.boundary=16,D.storage=16):Q.isMatrix3?(D.boundary=48,D.storage=48):Q.isMatrix4?(D.boundary=64,D.storage=64):Q.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",Q),D}function v(Q){const D=Q.target;D.removeEventListener("dispose",v);const b=f.indexOf(D.__bindingPointIndex);f.splice(b,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function m(){for(const Q in l)o.deleteBuffer(l[Q]);f=[],l={},u={}}return{bind:p,update:d,dispose:m}}class xI{constructor(t={}){const{canvas:i=nC(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:E=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=f;const y=new Uint32Array(4),I=new Int32Array(4);let v=null,m=null;const Q=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=On;let O=0,F=0,V=null,R=-1,T=null;const G=new je,tt=new je;let et=null;const ut=new Ne(0);let lt=0,L=i.width,q=i.height,k=1,_t=null,w=null;const Z=new je(0,0,L,q),dt=new je(0,0,L,q);let vt=!1;const J=new DE;let pt=!1,Ct=!1;const Mt=new rn,Tt=new rn,ae=new ot,Xt=new je,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ie(){return V===null?k:1}let H=r;function vn(B,W){return i.getContext(B,W)}try{const B={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:E};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Eh}`),i.addEventListener("webglcontextlost",mt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),H===null){const W="webgl2";if(H=vn(W,B),H===null)throw vn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let ge,ee,Vt,Re,Gt,U,M,nt,gt,St,ft,Ut,It,Pt,Zt,xt,Ft,Yt,Kt,Qt,ce,te,De,X;function Dt(){ge=new Qx(H),ge.init(),te=new gI(H,ge),ee=new Bx(H,ge,t,te),Vt=new dI(H,ge),ee.reverseDepthBuffer&&_&&Vt.buffers.depth.setReversed(!0),Re=new Fx(H),Gt=new eI,U=new pI(H,ge,Vt,Gt,ee,te,Re),M=new bx(b),nt=new Ux(b),gt=new VC(H),De=new Mx(H,gt),St=new Lx(H,gt,Re,De),ft=new Px(H,St,gt,Re),Kt=new Ox(H,ee,U),xt=new Tx(Gt),Ut=new tI(b,M,nt,ge,ee,De,xt),It=new SI(b,Gt),Pt=new iI,Zt=new cI(ge),Yt=new xx(b,M,nt,Vt,ft,C,p),Ft=new fI(b,ft,ee),X=new yI(H,Re,ee,Vt),Qt=new Ix(H,ge,Re),ce=new Nx(H,ge,Re),Re.programs=Ut.programs,b.capabilities=ee,b.extensions=ge,b.properties=Gt,b.renderLists=Pt,b.shadowMap=Ft,b.state=Vt,b.info=Re}Dt();const ct=new vI(b,H);this.xr=ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const B=ge.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=ge.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(B){B!==void 0&&(k=B,this.setSize(L,q,!1))},this.getSize=function(B){return B.set(L,q)},this.setSize=function(B,W,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=B,q=W,i.width=Math.floor(B*k),i.height=Math.floor(W*k),rt===!0&&(i.style.width=B+"px",i.style.height=W+"px"),this.setViewport(0,0,B,W)},this.getDrawingBufferSize=function(B){return B.set(L*k,q*k).floor()},this.setDrawingBufferSize=function(B,W,rt){L=B,q=W,k=rt,i.width=Math.floor(B*rt),i.height=Math.floor(W*rt),this.setViewport(0,0,B,W)},this.getCurrentViewport=function(B){return B.copy(G)},this.getViewport=function(B){return B.copy(Z)},this.setViewport=function(B,W,rt,st){B.isVector4?Z.set(B.x,B.y,B.z,B.w):Z.set(B,W,rt,st),Vt.viewport(G.copy(Z).multiplyScalar(k).round())},this.getScissor=function(B){return B.copy(dt)},this.setScissor=function(B,W,rt,st){B.isVector4?dt.set(B.x,B.y,B.z,B.w):dt.set(B,W,rt,st),Vt.scissor(tt.copy(dt).multiplyScalar(k).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(B){Vt.setScissorTest(vt=B)},this.setOpaqueSort=function(B){_t=B},this.setTransparentSort=function(B){w=B},this.getClearColor=function(B){return B.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(B=!0,W=!0,rt=!0){let st=0;if(B){let K=!1;if(V!==null){const yt=V.texture.format;K=yt===kc||yt===Vc||yt===zc}if(K){const yt=V.texture.type,Bt=yt===En||yt===Br||yt===Po||yt===Go||yt===vh||yt===Ch,bt=Yt.getClearColor(),Nt=Yt.getClearAlpha(),jt=bt.r,kt=bt.g,zt=bt.b;Bt?(y[0]=jt,y[1]=kt,y[2]=zt,y[3]=Nt,H.clearBufferuiv(H.COLOR,0,y)):(I[0]=jt,I[1]=kt,I[2]=zt,I[3]=Nt,H.clearBufferiv(H.COLOR,0,I))}else st|=H.COLOR_BUFFER_BIT}W&&(st|=H.DEPTH_BUFFER_BIT),rt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",mt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Yt.dispose(),Pt.dispose(),Zt.dispose(),Gt.dispose(),M.dispose(),nt.dispose(),ft.dispose(),De.dispose(),X.dispose(),Ut.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",sn),ct.removeEventListener("sessionend",Cn),Pn.stop()};function mt(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const B=Re.autoReset,W=Ft.enabled,rt=Ft.autoUpdate,st=Ft.needsUpdate,K=Ft.type;Dt(),Re.autoReset=B,Ft.enabled=W,Ft.autoUpdate=rt,Ft.needsUpdate=st,Ft.type=K}function wt(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function ne(B){const W=B.target;W.removeEventListener("dispose",ne),Ge(W)}function Ge(B){$e(B),Gt.remove(B)}function $e(B){const W=Gt.get(B).programs;W!==void 0&&(W.forEach(function(rt){Ut.releaseProgram(rt)}),B.isShaderMaterial&&Ut.releaseShaderCache(B))}this.renderBufferDirect=function(B,W,rt,st,K,yt){W===null&&(W=re);const Bt=K.isMesh&&K.matrixWorld.determinant()<0,bt=ja(B,W,rt,st,K);Vt.setMaterial(st,Bt);let Nt=rt.index,jt=1;if(st.wireframe===!0){if(Nt=St.getWireframeAttribute(rt),Nt===void 0)return;jt=2}const kt=rt.drawRange,zt=rt.attributes.position;let he=kt.start*jt,ye=(kt.start+kt.count)*jt;yt!==null&&(he=Math.max(he,yt.start*jt),ye=Math.min(ye,(yt.start+yt.count)*jt)),Nt!==null?(he=Math.max(he,0),ye=Math.min(ye,Nt.count)):zt!=null&&(he=Math.max(he,0),ye=Math.min(ye,zt.count));const qe=ye-he;if(qe<0||qe===1/0)return;De.setup(K,st,bt,rt,Nt);let me,Ee=Qt;if(Nt!==null&&(me=gt.get(Nt),Ee=ce,Ee.setIndex(me)),K.isMesh)st.wireframe===!0?(Vt.setLineWidth(st.wireframeLinewidth*ie()),Ee.setMode(H.LINES)):Ee.setMode(H.TRIANGLES);else if(K.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),Vt.setLineWidth(qt*ie()),K.isLineSegments?Ee.setMode(H.LINES):K.isLineLoop?Ee.setMode(H.LINE_LOOP):Ee.setMode(H.LINE_STRIP)}else K.isPoints?Ee.setMode(H.POINTS):K.isSprite&&Ee.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)wc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ee.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Ee.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qt=K._multiDrawStarts,Ye=K._multiDrawCounts,Ce=K._multiDrawCount,In=Nt?gt.get(Nt).bytesPerElement:1,da=Gt.get(st).currentProgram.getUniforms();for(let He=0;He<Ce;He++)da.setValue(H,"_gl_DrawID",He),Ee.render(qt[He]/In,Ye[He])}else if(K.isInstancedMesh)Ee.renderInstances(he,qe,K.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,qt);Ee.renderInstances(he,qe,Ye)}else Ee.render(he,qe)};function Se(B,W,rt){B.transparent===!0&&B.side===Ri&&B.forceSinglePass===!1?(B.side=Xn,B.needsUpdate=!0,fa(B,W,rt),B.side=Wa,B.needsUpdate=!0,fa(B,W,rt),B.side=Ri):fa(B,W,rt)}this.compile=function(B,W,rt=null){rt===null&&(rt=B),m=Zt.get(rt),m.init(W),D.push(m),rt.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),B!==rt&&B.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const st=new Set;return B.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const yt=K.material;if(yt)if(Array.isArray(yt))for(let Bt=0;Bt<yt.length;Bt++){const bt=yt[Bt];Se(bt,rt,K),st.add(bt)}else Se(yt,rt,K),st.add(yt)}),m=D.pop(),st},this.compileAsync=function(B,W,rt=null){const st=this.compile(B,W,rt);return new Promise(K=>{function yt(){if(st.forEach(function(Bt){Gt.get(Bt).currentProgram.isReady()&&st.delete(Bt)}),st.size===0){K(B);return}setTimeout(yt,10)}ge.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Yn=null;function fn(B){Yn&&Yn(B)}function sn(){Pn.stop()}function Cn(){Pn.start()}const Pn=new QE;Pn.setAnimationLoop(fn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(B){Yn=B,ct.setAnimationLoop(B),B===null?Pn.stop():Pn.start()},ct.addEventListener("sessionstart",sn),ct.addEventListener("sessionend",Cn),this.render=function(B,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(W),W=ct.getCamera()),B.isScene===!0&&B.onBeforeRender(b,B,W,V),m=Zt.get(B,D.length),m.init(W),D.push(m),Tt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(Tt),Ct=this.localClippingEnabled,pt=xt.init(this.clippingPlanes,Ct),v=Pt.get(B,Q.length),v.init(),Q.push(v),ct.enabled===!0&&ct.isPresenting===!0){const yt=b.xr.getDepthSensingMesh();yt!==null&&Ja(yt,W,-1/0,b.sortObjects)}Ja(B,W,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(_t,w),fe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,fe&&Yt.addToRenderList(v,B),this.info.render.frame++,pt===!0&&xt.beginShadows();const rt=m.state.shadowsArray;Ft.render(rt,B,W),pt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=v.opaque,K=v.transmissive;if(m.setupLights(),W.isArrayCamera){const yt=W.cameras;if(K.length>0)for(let Bt=0,bt=yt.length;Bt<bt;Bt++){const Nt=yt[Bt];el(st,K,B,Nt)}fe&&Yt.render(B);for(let Bt=0,bt=yt.length;Bt<bt;Bt++){const Nt=yt[Bt];tl(v,B,Nt,Nt.viewport)}}else K.length>0&&el(st,K,B,W),fe&&Yt.render(B),tl(v,B,W);V!==null&&F===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),B.isScene===!0&&B.onAfterRender(b,B,W),De.resetDefaultState(),R=-1,T=null,D.pop(),D.length>0?(m=D[D.length-1],pt===!0&&xt.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,Q.pop(),Q.length>0?v=Q[Q.length-1]:v=null};function Ja(B,W,rt,st){if(B.visible===!1)return;if(B.layers.test(W.layers)){if(B.isGroup)rt=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(W);else if(B.isLight)m.pushLight(B),B.castShadow&&m.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||J.intersectsSprite(B)){st&&Xt.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Tt);const Bt=ft.update(B),bt=B.material;bt.visible&&v.push(B,Bt,bt,rt,Xt.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||J.intersectsObject(B))){const Bt=ft.update(B),bt=B.material;if(st&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Xt.copy(B.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Xt.copy(Bt.boundingSphere.center)),Xt.applyMatrix4(B.matrixWorld).applyMatrix4(Tt)),Array.isArray(bt)){const Nt=Bt.groups;for(let jt=0,kt=Nt.length;jt<kt;jt++){const zt=Nt[jt],he=bt[zt.materialIndex];he&&he.visible&&v.push(B,Bt,he,rt,Xt.z,zt)}}else bt.visible&&v.push(B,Bt,bt,rt,Xt.z,null)}}const yt=B.children;for(let Bt=0,bt=yt.length;Bt<bt;Bt++)Ja(yt[Bt],W,rt,st)}function tl(B,W,rt,st){const K=B.opaque,yt=B.transmissive,Bt=B.transparent;m.setupLightsView(rt),pt===!0&&xt.setGlobalState(b.clippingPlanes,rt),st&&Vt.viewport(G.copy(st)),K.length>0&&Za(K,W,rt),yt.length>0&&Za(yt,W,rt),Bt.length>0&&Za(Bt,W,rt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function el(B,W,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[st.id]===void 0&&(m.state.transmissionRenderTarget[st.id]=new br(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Si:En,minFilter:oa,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const yt=m.state.transmissionRenderTarget[st.id],Bt=st.viewport||G;yt.setSize(Bt.z*b.transmissionResolutionScale,Bt.w*b.transmissionResolutionScale);const bt=b.getRenderTarget();b.setRenderTarget(yt),b.getClearColor(ut),lt=b.getClearAlpha(),lt<1&&b.setClearColor(16777215,.5),b.clear(),fe&&Yt.render(rt);const Nt=b.toneMapping;b.toneMapping=Ya;const jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),m.setupLightsView(st),pt===!0&&xt.setGlobalState(b.clippingPlanes,st),Za(B,rt,st),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let zt=0,he=W.length;zt<he;zt++){const ye=W[zt],qe=ye.object,me=ye.geometry,Ee=ye.material,qt=ye.group;if(Ee.side===Ri&&qe.layers.test(st.layers)){const Ye=Ee.side;Ee.side=Xn,Ee.needsUpdate=!0,Aa(qe,rt,st,me,Ee,qt),Ee.side=Ye,Ee.needsUpdate=!0,kt=!0}}kt===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}b.setRenderTarget(bt),b.setClearColor(ut,lt),jt!==void 0&&(st.viewport=jt),b.toneMapping=Nt}function Za(B,W,rt){const st=W.isScene===!0?W.overrideMaterial:null;for(let K=0,yt=B.length;K<yt;K++){const Bt=B[K],bt=Bt.object,Nt=Bt.geometry,jt=Bt.group;let kt=Bt.material;kt.allowOverride===!0&&st!==null&&(kt=st),bt.layers.test(rt.layers)&&Aa(bt,W,rt,Nt,kt,jt)}}function Aa(B,W,rt,st,K,yt){B.onBeforeRender(b,W,rt,st,K,yt),B.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),K.onBeforeRender(b,W,rt,st,B,yt),K.transparent===!0&&K.side===Ri&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,b.renderBufferDirect(rt,W,st,K,B,yt),K.side=Wa,K.needsUpdate=!0,b.renderBufferDirect(rt,W,st,K,B,yt),K.side=Ri):b.renderBufferDirect(rt,W,st,K,B,yt),B.onAfterRender(b,W,rt,st,K,yt)}function fa(B,W,rt){W.isScene!==!0&&(W=re);const st=Gt.get(B),K=m.state.lights,yt=m.state.shadowsArray,Bt=K.state.version,bt=Ut.getParameters(B,K.state,yt,W,rt),Nt=Ut.getProgramCacheKey(bt);let jt=st.programs;st.environment=B.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(B.isMeshStandardMaterial?nt:M).get(B.envMap||st.environment),st.envMapRotation=st.environment!==null&&B.envMap===null?W.environmentRotation:B.envMapRotation,jt===void 0&&(B.addEventListener("dispose",ne),jt=new Map,st.programs=jt);let kt=jt.get(Nt);if(kt!==void 0){if(st.currentProgram===kt&&st.lightsStateVersion===Bt)return Li(B,bt),kt}else bt.uniforms=Ut.getUniforms(B),B.onBeforeCompile(bt,b),kt=Ut.acquireProgram(bt,Nt),jt.set(Nt,kt),st.uniforms=bt.uniforms;const zt=st.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(zt.clippingPlanes=xt.uniform),Li(B,bt),st.needsLights=tn(B),st.lightsStateVersion=Bt,st.needsLights&&(zt.ambientLightColor.value=K.state.ambient,zt.lightProbe.value=K.state.probe,zt.directionalLights.value=K.state.directional,zt.directionalLightShadows.value=K.state.directionalShadow,zt.spotLights.value=K.state.spot,zt.spotLightShadows.value=K.state.spotShadow,zt.rectAreaLights.value=K.state.rectArea,zt.ltc_1.value=K.state.rectAreaLTC1,zt.ltc_2.value=K.state.rectAreaLTC2,zt.pointLights.value=K.state.point,zt.pointLightShadows.value=K.state.pointShadow,zt.hemisphereLights.value=K.state.hemi,zt.directionalShadowMap.value=K.state.directionalShadowMap,zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,zt.spotShadowMap.value=K.state.spotShadowMap,zt.spotLightMatrix.value=K.state.spotLightMatrix,zt.spotLightMap.value=K.state.spotLightMap,zt.pointShadowMap.value=K.state.pointShadowMap,zt.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=kt,st.uniformsList=null,kt}function Qi(B){if(B.uniformsList===null){const W=B.currentProgram.getUniforms();B.uniformsList=Uc.seqWithValue(W.seq,B.uniforms)}return B.uniformsList}function Li(B,W){const rt=Gt.get(B);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function ja(B,W,rt,st,K){W.isScene!==!0&&(W=re),U.resetTextureUnits();const yt=W.fog,Bt=st.isMeshStandardMaterial?W.environment:null,bt=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Tr,Nt=(st.isMeshStandardMaterial?nt:M).get(st.envMap||Bt),jt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,kt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),zt=!!rt.morphAttributes.position,he=!!rt.morphAttributes.normal,ye=!!rt.morphAttributes.color;let qe=Ya;st.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(qe=b.toneMapping);const me=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ee=me!==void 0?me.length:0,qt=Gt.get(st),Ye=m.state.lights;if(pt===!0&&(Ct===!0||B!==T)){const hn=B===T&&st.id===R;xt.setState(st,B,hn)}let Ce=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ye.state.version||qt.outputColorSpace!==bt||K.isBatchedMesh&&qt.batching===!1||!K.isBatchedMesh&&qt.batching===!0||K.isBatchedMesh&&qt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qt.instancing===!1||!K.isInstancedMesh&&qt.instancing===!0||K.isSkinnedMesh&&qt.skinning===!1||!K.isSkinnedMesh&&qt.skinning===!0||K.isInstancedMesh&&qt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qt.instancingMorph===!1&&K.morphTexture!==null||qt.envMap!==Nt||st.fog===!0&&qt.fog!==yt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==xt.numPlanes||qt.numIntersection!==xt.numIntersection)||qt.vertexAlphas!==jt||qt.vertexTangents!==kt||qt.morphTargets!==zt||qt.morphNormals!==he||qt.morphColors!==ye||qt.toneMapping!==qe||qt.morphTargetsCount!==Ee)&&(Ce=!0):(Ce=!0,qt.__version=st.version);let In=qt.currentProgram;Ce===!0&&(In=fa(st,W,K));let da=!1,He=!1,Fi=!1;const Fe=In.getUniforms(),Bn=qt.uniforms;if(Vt.useProgram(In.program)&&(da=!0,He=!0,Fi=!0),st.id!==R&&(R=st.id,He=!0),da||T!==B){Vt.buffers.depth.getReversed()?(Mt.copy(B.projectionMatrix),aC(Mt),rC(Mt),Fe.setValue(H,"projectionMatrix",Mt)):Fe.setValue(H,"projectionMatrix",B.projectionMatrix),Fe.setValue(H,"viewMatrix",B.matrixWorldInverse);const Sn=Fe.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,ae.setFromMatrixPosition(B.matrixWorld)),ee.logarithmicDepthBuffer&&Fe.setValue(H,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(H,"isOrthographic",B.isOrthographicCamera===!0),T!==B&&(T=B,He=!0,Fi=!0)}if(K.isSkinnedMesh){Fe.setOptional(H,K,"bindMatrix"),Fe.setOptional(H,K,"bindMatrixInverse");const hn=K.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Fe.setValue(H,"boneTexture",hn.boneTexture,U))}K.isBatchedMesh&&(Fe.setOptional(H,K,"batchingTexture"),Fe.setValue(H,"batchingTexture",K._matricesTexture,U),Fe.setOptional(H,K,"batchingIdTexture"),Fe.setValue(H,"batchingIdTexture",K._indirectTexture,U),Fe.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Fe.setValue(H,"batchingColorTexture",K._colorsTexture,U));const on=rt.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Kt.update(K,rt,In),(He||qt.receiveShadow!==K.receiveShadow)&&(qt.receiveShadow=K.receiveShadow,Fe.setValue(H,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Bn.envMap.value=Nt,Bn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(Bn.envMapIntensity.value=W.environmentIntensity),He&&(Fe.setValue(H,"toneMappingExposure",b.toneMappingExposure),qt.needsLights&&ha(Bn,Fi),yt&&st.fog===!0&&It.refreshFogUniforms(Bn,yt),It.refreshMaterialUniforms(Bn,st,k,q,m.state.transmissionRenderTarget[B.id]),Uc.upload(H,Qi(qt),Bn,U)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Uc.upload(H,Qi(qt),Bn,U),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(H,"center",K.center),Fe.setValue(H,"modelViewMatrix",K.modelViewMatrix),Fe.setValue(H,"normalMatrix",K.normalMatrix),Fe.setValue(H,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const hn=st.uniformsGroups;for(let Sn=0,yi=hn.length;Sn<yi;Sn++){const Oi=hn[Sn];X.update(Oi,In),X.bind(Oi,In)}}return In}function ha(B,W){B.ambientLightColor.needsUpdate=W,B.lightProbe.needsUpdate=W,B.directionalLights.needsUpdate=W,B.directionalLightShadows.needsUpdate=W,B.pointLights.needsUpdate=W,B.pointLightShadows.needsUpdate=W,B.spotLights.needsUpdate=W,B.spotLightShadows.needsUpdate=W,B.rectAreaLights.needsUpdate=W,B.hemisphereLights.needsUpdate=W}function tn(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(B,W,rt){const st=Gt.get(B);st.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Gt.get(B.texture).__webglTexture=W,Gt.get(B.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,W){const rt=Gt.get(B);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const nl=H.createFramebuffer();this.setRenderTarget=function(B,W=0,rt=0){V=B,O=W,F=rt;let st=!0,K=null,yt=!1,Bt=!1;if(B){const Nt=Gt.get(B);if(Nt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(Nt.__webglFramebuffer===void 0)U.setupRenderTarget(B);else if(Nt.__hasExternalTextures)U.rebindTextures(B,Gt.get(B.texture).__webglTexture,Gt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){const zt=B.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&Gt.has(zt)&&(B.width!==zt.image.width||B.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(B)}}const jt=B.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Bt=!0);const kt=Gt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(kt[W])?K=kt[W][rt]:K=kt[W],yt=!0):B.samples>0&&U.useMultisampledRTT(B)===!1?K=Gt.get(B).__webglMultisampledFramebuffer:Array.isArray(kt)?K=kt[rt]:K=kt,G.copy(B.viewport),tt.copy(B.scissor),et=B.scissorTest}else G.copy(Z).multiplyScalar(k).floor(),tt.copy(dt).multiplyScalar(k).floor(),et=vt;if(rt!==0&&(K=nl),Vt.bindFramebuffer(H.FRAMEBUFFER,K)&&st&&Vt.drawBuffers(B,K),Vt.viewport(G),Vt.scissor(tt),Vt.setScissorTest(et),yt){const Nt=Gt.get(B.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,rt)}else if(Bt){const Nt=Gt.get(B.texture),jt=W;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.__webglTexture,rt,jt)}else if(B!==null&&rt!==0){const Nt=Gt.get(B.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,rt)}R=-1},this.readRenderTargetPixels=function(B,W,rt,st,K,yt,Bt){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Gt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Bt!==void 0&&(bt=bt[Bt]),bt){Vt.bindFramebuffer(H.FRAMEBUFFER,bt);try{const Nt=B.texture,jt=Nt.format,kt=Nt.type;if(!ee.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=B.width-st&&rt>=0&&rt<=B.height-K&&H.readPixels(W,rt,st,K,te.convert(jt),te.convert(kt),yt)}finally{const Nt=V!==null?Gt.get(V).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(B,W,rt,st,K,yt,Bt){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Gt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Bt!==void 0&&(bt=bt[Bt]),bt)if(W>=0&&W<=B.width-st&&rt>=0&&rt<=B.height-K){Vt.bindFramebuffer(H.FRAMEBUFFER,bt);const Nt=B.texture,jt=Nt.format,kt=Nt.type;if(!ee.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,zt),H.bufferData(H.PIXEL_PACK_BUFFER,yt.byteLength,H.STREAM_READ),H.readPixels(W,rt,st,K,te.convert(jt),te.convert(kt),0);const he=V!==null?Gt.get(V).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,he);const ye=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await iC(H,ye,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,zt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,yt),H.deleteBuffer(zt),H.deleteSync(ye),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,W=null,rt=0){const st=Math.pow(2,-rt),K=Math.floor(B.image.width*st),yt=Math.floor(B.image.height*st),Bt=W!==null?W.x:0,bt=W!==null?W.y:0;U.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Bt,bt,K,yt),Vt.unbindTexture()};const il=H.createFramebuffer(),Ni=H.createFramebuffer();this.copyTextureToTexture=function(B,W,rt=null,st=null,K=0,yt=null){yt===null&&(K!==0?(wc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=K,K=0):yt=0);let Bt,bt,Nt,jt,kt,zt,he,ye,qe;const me=B.isCompressedTexture?B.mipmaps[yt]:B.image;if(rt!==null)Bt=rt.max.x-rt.min.x,bt=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,jt=rt.min.x,kt=rt.min.y,zt=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-K);Bt=Math.floor(me.width*on),bt=Math.floor(me.height*on),B.isDataArrayTexture?Nt=me.depth:B.isData3DTexture?Nt=Math.floor(me.depth*on):Nt=1,jt=0,kt=0,zt=0}st!==null?(he=st.x,ye=st.y,qe=st.z):(he=0,ye=0,qe=0);const Ee=te.convert(W.format),qt=te.convert(W.type);let Ye;W.isData3DTexture?(U.setTexture3D(W,0),Ye=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),Ye=H.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Ce=H.getParameter(H.UNPACK_ROW_LENGTH),In=H.getParameter(H.UNPACK_IMAGE_HEIGHT),da=H.getParameter(H.UNPACK_SKIP_PIXELS),He=H.getParameter(H.UNPACK_SKIP_ROWS),Fi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,me.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,me.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,zt);const Fe=B.isDataArrayTexture||B.isData3DTexture,Bn=W.isDataArrayTexture||W.isData3DTexture;if(B.isDepthTexture){const on=Gt.get(B),hn=Gt.get(W),Sn=Gt.get(on.__renderTarget),yi=Gt.get(hn.__renderTarget);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Oi=0;Oi<Nt;Oi++)Fe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(B).__webglTexture,K,zt+Oi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(W).__webglTexture,yt,qe+Oi)),H.blitFramebuffer(jt,kt,Bt,bt,he,ye,Bt,bt,H.DEPTH_BUFFER_BIT,H.NEAREST);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||B.isRenderTargetTexture||Gt.has(B)){const on=Gt.get(B),hn=Gt.get(W);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,il),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ni);for(let Sn=0;Sn<Nt;Sn++)Fe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,K,zt+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,K),Bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,yt,qe+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,yt),K!==0?H.blitFramebuffer(jt,kt,Bt,bt,he,ye,Bt,bt,H.COLOR_BUFFER_BIT,H.NEAREST):Bn?H.copyTexSubImage3D(Ye,yt,he,ye,qe+Sn,jt,kt,Bt,bt):H.copyTexSubImage2D(Ye,yt,he,ye,jt,kt,Bt,bt);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bn?B.isDataTexture||B.isData3DTexture?H.texSubImage3D(Ye,yt,he,ye,qe,Bt,bt,Nt,Ee,qt,me.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,yt,he,ye,qe,Bt,bt,Nt,Ee,me.data):H.texSubImage3D(Ye,yt,he,ye,qe,Bt,bt,Nt,Ee,qt,me):B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,yt,he,ye,Bt,bt,Ee,qt,me.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,yt,he,ye,me.width,me.height,Ee,me.data):H.texSubImage2D(H.TEXTURE_2D,yt,he,ye,Bt,bt,Ee,qt,me);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ce),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,In),H.pixelStorei(H.UNPACK_SKIP_PIXELS,da),H.pixelStorei(H.UNPACK_SKIP_ROWS,He),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fi),yt===0&&W.generateMipmaps&&H.generateMipmap(Ye),Vt.unbindTexture()},this.copyTextureToTexture3D=function(B,W,rt=null,st=null,K=0){return wc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,W,rt,st,K)},this.initRenderTarget=function(B){Gt.get(B).__webglFramebuffer===void 0&&U.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?U.setTextureCube(B,0):B.isData3DTexture?U.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?U.setTexture2DArray(B,0):U.setTexture2D(B,0),Vt.unbindTexture()},this.resetState=function(){O=0,F=0,V=null,Vt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),i.unpackColorSpace=Me._getUnpackColorSpace()}}class MI{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(t){if(!this.workers[t]){const i=this.workerCreator();i.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=i}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,i){const r=this.workersResolve[t];if(r&&r(i),this.queue.length){const{resolve:l,msg:u,transfer:f}=this.queue.shift();this.workersResolve[t]=l,this.workers[t].postMessage(u,f)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,i){return new Promise(r=>{const l=this._getIdleWorker();l!==-1?(this._initWorker(l),this.workerStatus|=1<<l,this.workersResolve[l]=r,this.workers[l].postMessage(t,i)):this.queue.push({resolve:r,msg:t,transfer:i})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const II=0,lE=2,BI=1,cE=2,TI=0,bI=1,RI=10,DI=0,PE=9,GE=15,HE=16,zE=22,VE=37,kE=43,qE=76,XE=83,YE=97,WE=100,KE=103,JE=109,ZE=165,jE=166,bh=1000066e3;class wI{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Uo{constructor(t,i,r,l){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(t.buffer,t.byteOffset+i,r),this._littleEndian=l,this._offset=0}_nextUint8(){const t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){const t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){const t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){const t=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,t}_nextInt32(){const t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint8Array(t){const i=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,t);return this._offset+=t,i}_skip(t){return this._offset+=t,this}_scan(t,i){i===void 0&&(i=0);const r=this._offset;let l=0;for(;this._dataView.getUint8(this._offset)!==i&&l<t;)l++,this._offset++;return l<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+r,l)}}const Ln=[171,75,84,88,32,50,48,187,13,10,26,10];function uE(o){return new TextDecoder().decode(o)}function UI(o){const t=new Uint8Array(o.buffer,o.byteOffset,Ln.length);if(t[0]!==Ln[0]||t[1]!==Ln[1]||t[2]!==Ln[2]||t[3]!==Ln[3]||t[4]!==Ln[4]||t[5]!==Ln[5]||t[6]!==Ln[6]||t[7]!==Ln[7]||t[8]!==Ln[8]||t[9]!==Ln[9]||t[10]!==Ln[10]||t[11]!==Ln[11])throw new Error("Missing KTX 2.0 identifier.");const i=new wI,r=17*Uint32Array.BYTES_PER_ELEMENT,l=new Uo(o,Ln.length,r,!0);i.vkFormat=l._nextUint32(),i.typeSize=l._nextUint32(),i.pixelWidth=l._nextUint32(),i.pixelHeight=l._nextUint32(),i.pixelDepth=l._nextUint32(),i.layerCount=l._nextUint32(),i.faceCount=l._nextUint32();const u=l._nextUint32();i.supercompressionScheme=l._nextUint32();const f=l._nextUint32(),h=l._nextUint32(),p=l._nextUint32(),d=l._nextUint32(),g=l._nextUint64(),E=l._nextUint64(),_=new Uo(o,Ln.length+r,3*u*8,!0);for(let q=0;q<u;q++)i.levels.push({levelData:new Uint8Array(o.buffer,o.byteOffset+_._nextUint64(),_._nextUint64()),uncompressedByteLength:_._nextUint64()});const C=new Uo(o,f,h,!0),y={vendorId:C._skip(4)._nextUint16(),descriptorType:C._nextUint16(),versionNumber:C._nextUint16(),descriptorBlockSize:C._nextUint16(),colorModel:C._nextUint8(),colorPrimaries:C._nextUint8(),transferFunction:C._nextUint8(),flags:C._nextUint8(),texelBlockDimension:[C._nextUint8(),C._nextUint8(),C._nextUint8(),C._nextUint8()],bytesPlane:[C._nextUint8(),C._nextUint8(),C._nextUint8(),C._nextUint8(),C._nextUint8(),C._nextUint8(),C._nextUint8(),C._nextUint8()],samples:[]},I=(y.descriptorBlockSize/4-6)/4;for(let q=0;q<I;q++){const k={bitOffset:C._nextUint16(),bitLength:C._nextUint8(),channelType:C._nextUint8(),samplePosition:[C._nextUint8(),C._nextUint8(),C._nextUint8(),C._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&k.channelType?(k.sampleLower=C._nextInt32(),k.sampleUpper=C._nextInt32()):(k.sampleLower=C._nextUint32(),k.sampleUpper=C._nextUint32()),y.samples[q]=k}i.dataFormatDescriptor.length=0,i.dataFormatDescriptor.push(y);const v=new Uo(o,p,d,!0);for(;v._offset<d;){const q=v._nextUint32(),k=v._scan(q),_t=uE(k);if(i.keyValue[_t]=v._nextUint8Array(q-k.byteLength-1),_t.match(/^ktx/i)){const w=uE(i.keyValue[_t]);i.keyValue[_t]=w.substring(0,w.lastIndexOf("\0"))}v._skip(q%4?4-q%4:0)}if(E<=0)return i;const m=new Uo(o,g,E,!0),Q=m._nextUint16(),D=m._nextUint16(),b=m._nextUint32(),P=m._nextUint32(),O=m._nextUint32(),F=m._nextUint32(),V=[];for(let q=0;q<u;q++)V.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const R=g+m._offset,T=R+b,G=T+P,tt=G+O,et=new Uint8Array(o.buffer,o.byteOffset+R,b),ut=new Uint8Array(o.buffer,o.byteOffset+T,P),lt=new Uint8Array(o.buffer,o.byteOffset+G,O),L=new Uint8Array(o.buffer,o.byteOffset+tt,F);return i.globalData={endpointCount:Q,selectorCount:D,imageDescs:V,endpointsData:et,selectorsData:ut,tablesData:lt,extendedData:L},i}let Uf,sa,gh;const Qf={env:{emscripten_notify_memory_growth:function(o){gh=new Uint8Array(sa.exports.memory.buffer)}}};class QI{init(){return Uf||(Uf=typeof fetch<"u"?fetch("data:application/wasm;base64,"+AE).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,Qf)).then(this._init):WebAssembly.instantiate(Buffer.from(AE,"base64"),Qf).then(this._init),Uf)}_init(t){sa=t.instance,Qf.env.emscripten_notify_memory_growth(0)}decode(t,i=0){if(!sa)throw new Error("ZSTDDecoder: Await .init() before decoding.");const r=t.byteLength,l=sa.exports.malloc(r);gh.set(t,l),i=i||Number(sa.exports.ZSTD_findDecompressedSize(l,r));const u=sa.exports.malloc(i),f=sa.exports.ZSTD_decompress(u,i,l,r),h=gh.slice(u,u+f);return sa.exports.free(l),sa.exports.free(u),h}}const AE="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",LI="display-p3",NI="display-p3-linear",Lf=new WeakMap;let Nf=0,Ff;class hi extends Bh{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new MI,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return this.workerConfig={astcSupported:await t.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await t.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await t.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await t.hasFeatureAsync("texture-compression-bc"),bptcSupported:await t.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await t.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-bc"),bptcSupported:t.hasFeature("texture-compression-bptc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:t.extensions.has("WEBGL_compressed_texture_astc")&&t.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const t=new If(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const i=t.loadAsync("basis_transcoder.js"),r=new If(this.manager);r.setPath(this.transcoderPath),r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials);const l=r.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([i,l]).then(([u,f])=>{const h=hi.BasisWorker.toString(),p=["/* constants */","let _EngineFormat = "+JSON.stringify(hi.EngineFormat),"let _EngineType = "+JSON.stringify(hi.EngineType),"let _TranscoderFormat = "+JSON.stringify(hi.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(hi.BasisFormat),"/* basis_transcoder.js */",u,"/* worker */",h.substring(h.indexOf("{")+1,h.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([p])),this.transcoderBinary=f,this.workerPool.setWorkerCreator(()=>{const d=new Worker(this.workerSourceURL),g=this.transcoderBinary.slice(0);return d.postMessage({type:"init",config:this.workerConfig,transcoderBinary:g},[g]),d})}),Nf>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Nf++}return this.transcoderPending}load(t,i,r,l){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const u=new If(this.manager);u.setResponseType("arraybuffer"),u.setWithCredentials(this.withCredentials),u.load(t,f=>{this.parse(f,i,l)},r,l)}parse(t,i,r){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Lf.has(t))return Lf.get(t).promise.then(i).catch(r);this._createTexture(t).then(l=>i?i(l):null).catch(r)}_createTextureFrom(t,i){const{type:r,error:l,data:{faces:u,width:f,height:h,format:p,type:d,dfdFlags:g}}=t;if(r==="error")return Promise.reject(l);let E;if(i.faceCount===6)E=new LC(u,p,d);else{const _=u[0].mipmaps;E=i.layerCount>1?new QC(_,f,h,i.layerCount,p,d):new Xc(_,f,h,p,d)}return E.minFilter=u[0].mipmaps.length===1?wn:oa,E.magFilter=wn,E.generateMipmaps=!1,E.needsUpdate=!0,E.colorSpace=$E(i),E.premultiplyAlpha=!!(g&BI),E}async _createTexture(t,i={}){const r=UI(new Uint8Array(t)),l=r.vkFormat===bh&&r.dataFormatDescriptor[0].colorModel===167;if(!(r.vkFormat===DI||l&&!this.workerConfig.astcHDRSupported))return OI(r);const f=i,h=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:f},[t])).then(p=>this._createTextureFrom(p.data,r));return Lf.set(t,{promise:h}),h}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Nf--}}hi.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};hi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};hi.EngineFormat={RGBAFormat:_n,RGBA_ASTC_4x4_Format:bs,RGB_BPTC_UNSIGNED_Format:Fc,RGBA_BPTC_Format:Oo,RGBA_ETC2_EAC_Format:Yo,RGBA_PVRTC_4BPPV1_Format:ko,RGBA_S3TC_DXT5_Format:Ms,RGB_ETC1_Format:qo,RGB_ETC2_Format:Xo,RGB_PVRTC_4BPPV1_Format:Vo,RGBA_S3TC_DXT1_Format:xs};hi.EngineType={UnsignedByteType:En,HalfFloatType:Si,FloatType:qn};hi.BasisWorker=function(){let o,t,i;const r=_EngineFormat,l=_EngineType,u=_TranscoderFormat,f=_BasisFormat;self.addEventListener("message",function(y){const I=y.data;switch(I.type){case"init":o=I.config,h(I.transcoderBinary);break;case"transcode":t.then(()=>{try{const{faces:v,buffers:m,width:Q,height:D,hasAlpha:b,format:P,type:O,dfdFlags:F}=p(I.buffer);self.postMessage({type:"transcode",id:I.id,data:{faces:v,width:Q,height:D,hasAlpha:b,format:P,type:O,dfdFlags:F}},m)}catch(v){console.error(v),self.postMessage({type:"error",id:I.id,error:v.message})}});break}});function h(y){t=new Promise(I=>{i={wasmBinary:y,onRuntimeInitialized:I},BASIS(i)}).then(()=>{i.initializeBasis(),i.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function p(y){const I=new i.KTX2File(new Uint8Array(y));function v(){I.close(),I.delete()}if(!I.isValid())throw v(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let m;if(I.isUASTC())m=f.UASTC;else if(I.isETC1S())m=f.ETC1S;else if(I.isHDR())m=f.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const Q=I.getWidth(),D=I.getHeight(),b=I.getLayers()||1,P=I.getLevels(),O=I.getFaces(),F=I.getHasAlpha(),V=I.getDFDFlags(),{transcoderFormat:R,engineFormat:T,engineType:G}=E(m,Q,D,F);if(!Q||!D||!P)throw v(),new Error("THREE.KTX2Loader:	Invalid texture");if(!I.startTranscoding())throw v(),new Error("THREE.KTX2Loader: .startTranscoding failed");const tt=[],et=[];for(let ut=0;ut<O;ut++){const lt=[];for(let L=0;L<P;L++){const q=[];let k,_t;for(let Z=0;Z<b;Z++){const dt=I.getImageLevelInfo(L,Z,ut);ut===0&&L===0&&Z===0&&(dt.origWidth%4!==0||dt.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),P>1?(k=dt.origWidth,_t=dt.origHeight):(k=dt.width,_t=dt.height);let vt=new Uint8Array(I.getImageTranscodedSizeInBytes(L,Z,0,R));const J=I.transcodeImage(vt,L,Z,ut,R,0,-1,-1);if(G===l.HalfFloatType&&(vt=new Uint16Array(vt.buffer,vt.byteOffset,vt.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!J)throw v(),new Error("THREE.KTX2Loader: .transcodeImage failed.");q.push(vt)}const w=C(q);lt.push({data:w,width:k,height:_t}),et.push(w.buffer)}tt.push({mipmaps:lt,width:Q,height:D,format:T,type:G})}return v(),{faces:tt,buffers:et,width:Q,height:D,hasAlpha:F,dfdFlags:V,format:T,type:G}}const d=[{if:"astcSupported",basisFormat:[f.UASTC],transcoderFormat:[u.ASTC_4x4,u.ASTC_4x4],engineFormat:[r.RGBA_ASTC_4x4_Format,r.RGBA_ASTC_4x4_Format],engineType:[l.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[u.BC7_M5,u.BC7_M5],engineFormat:[r.RGBA_BPTC_Format,r.RGBA_BPTC_Format],engineType:[l.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[u.BC1,u.BC3],engineFormat:[r.RGBA_S3TC_DXT1_Format,r.RGBA_S3TC_DXT5_Format],engineType:[l.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[u.ETC1,u.ETC2],engineFormat:[r.RGB_ETC2_Format,r.RGBA_ETC2_EAC_Format],engineType:[l.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[u.ETC1],engineFormat:[r.RGB_ETC1_Format],engineType:[l.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[u.PVRTC1_4_RGB,u.PVRTC1_4_RGBA],engineFormat:[r.RGB_PVRTC_4BPPV1_Format,r.RGBA_PVRTC_4BPPV1_Format],engineType:[l.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[f.UASTC_HDR],transcoderFormat:[u.BC6H],engineFormat:[r.RGB_BPTC_UNSIGNED_Format],engineType:[l.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[u.RGBA32,u.RGBA32],engineFormat:[r.RGBAFormat,r.RGBAFormat],engineType:[l.UnsignedByteType,l.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[f.UASTC_HDR],transcoderFormat:[u.RGBA_HALF],engineFormat:[r.RGBAFormat],engineType:[l.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],g={[f.ETC1S]:d.filter(y=>y.basisFormat.includes(f.ETC1S)).sort((y,I)=>y.priorityUASTC-I.priorityUASTC),[f.UASTC]:d.filter(y=>y.basisFormat.includes(f.UASTC)).sort((y,I)=>y.priorityUASTC-I.priorityUASTC),[f.UASTC_HDR]:d.filter(y=>y.basisFormat.includes(f.UASTC_HDR)).sort((y,I)=>y.priorityHDR-I.priorityHDR)};function E(y,I,v,m){const Q=g[y];for(let D=0;D<Q.length;D++){const b=Q[D];if(b.if&&!o[b.if]||!b.basisFormat.includes(y)||m&&b.transcoderFormat.length<2||b.needsPowerOfTwo&&!(_(I)&&_(v)))continue;const P=b.transcoderFormat[m?1:0],O=b.engineFormat[m?1:0],F=b.engineType[0];return{transcoderFormat:P,engineFormat:O,engineType:F}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function _(y){return y<=2?!0:(y&y-1)===0&&y!==0}function C(y){if(y.length===1)return y[0];let I=0;for(let Q=0;Q<y.length;Q++){const D=y[Q];I+=D.byteLength}const v=new Uint8Array(I);let m=0;for(let Q=0;Q<y.length;Q++){const D=y[Q];v.set(D,m),m+=D.byteLength}return v}};const FI=new Set([_n,qa,ka]),Of={[JE]:_n,[YE]:_n,[VE]:_n,[kE]:_n,[KE]:qa,[XE]:qa,[HE]:qa,[zE]:qa,[WE]:ka,[qE]:ka,[GE]:ka,[PE]:ka,[bh]:bs,[jE]:Wo,[ZE]:Wo},Pf={[JE]:qn,[YE]:Si,[VE]:En,[kE]:En,[KE]:qn,[XE]:Si,[HE]:En,[zE]:En,[WE]:qn,[qE]:Si,[GE]:En,[PE]:En,[bh]:Si,[jE]:En,[ZE]:En};async function OI(o){const{vkFormat:t}=o;if(Of[t]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let i;o.supercompressionScheme===lE&&(Ff||(Ff=new Promise(async u=>{const f=new QI;await f.init(),u(f)})),i=await Ff);const r=[];for(let u=0;u<o.levels.length;u++){const f=Math.max(1,o.pixelWidth>>u),h=Math.max(1,o.pixelHeight>>u),p=o.pixelDepth?Math.max(1,o.pixelDepth>>u):0,d=o.levels[u];let g;if(o.supercompressionScheme===II)g=d.levelData;else if(o.supercompressionScheme===lE)g=i.decode(d.levelData,d.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let E;Pf[t]===qn?E=new Float32Array(g.buffer,g.byteOffset,g.byteLength/Float32Array.BYTES_PER_ELEMENT):Pf[t]===Si?E=new Uint16Array(g.buffer,g.byteOffset,g.byteLength/Uint16Array.BYTES_PER_ELEMENT):E=g,r.push({data:E,width:f,height:h,depth:p})}let l;if(FI.has(Of[t]))l=o.pixelDepth===0?new DC(r[0].data,o.pixelWidth,o.pixelHeight):new yE(r[0].data,o.pixelWidth,o.pixelHeight,o.pixelDepth);else{if(o.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");l=new Xc(r,o.pixelWidth,o.pixelHeight),l.minFilter=r.length===1?wn:oa,l.magFilter=wn}return l.mipmaps=r,l.type=Pf[t],l.format=Of[t],l.colorSpace=$E(o),l.needsUpdate=!0,Promise.resolve(l)}function $E(o){const t=o.dataFormatDescriptor[0];return t.colorPrimaries===bI?t.transferFunction===cE?On:Tr:t.colorPrimaries===RI?t.transferFunction===cE?LI:NI:(t.colorPrimaries===TI||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),Di)}const PI=0,GI=0,HI=0,zI=2,VI=0,kI=0,qI=2,XI=1,YI=64,WI=0;function KI(){return{vkFormat:WI,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,supercompressionScheme:PI,levels:[],dataFormatDescriptor:[{vendorId:HI,descriptorType:GI,versionNumber:zI,colorModel:VI,colorPrimaries:XI,transferFunction:qI,flags:kI,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null}}class Qo{constructor(t,i,r,l){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(t.buffer,t.byteOffset+i,r),this._littleEndian=l,this._offset=0}_nextUint8(){const t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){const t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){const t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){const t=this._dataView.getUint32(this._offset,this._littleEndian),i=this._dataView.getUint32(this._offset+4,this._littleEndian),r=t+2**32*i;return this._offset+=8,r}_nextInt32(){const t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint8Array(t){const i=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,t);return this._offset+=t,i}_skip(t){return this._offset+=t,this}_scan(t,i=0){const r=this._offset;let l=0;for(;this._dataView.getUint8(this._offset)!==i&&l<t;)l++,this._offset++;return l<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+r,l)}}const Nn=[171,75,84,88,32,50,48,187,13,10,26,10];function fE(o){return new TextDecoder().decode(o)}function JI(o){const t=new Uint8Array(o.buffer,o.byteOffset,Nn.length);if(t[0]!==Nn[0]||t[1]!==Nn[1]||t[2]!==Nn[2]||t[3]!==Nn[3]||t[4]!==Nn[4]||t[5]!==Nn[5]||t[6]!==Nn[6]||t[7]!==Nn[7]||t[8]!==Nn[8]||t[9]!==Nn[9]||t[10]!==Nn[10]||t[11]!==Nn[11])throw new Error("Missing KTX 2.0 identifier.");const i=KI(),r=17*Uint32Array.BYTES_PER_ELEMENT,l=new Qo(o,Nn.length,r,!0);i.vkFormat=l._nextUint32(),i.typeSize=l._nextUint32(),i.pixelWidth=l._nextUint32(),i.pixelHeight=l._nextUint32(),i.pixelDepth=l._nextUint32(),i.layerCount=l._nextUint32(),i.faceCount=l._nextUint32();const u=l._nextUint32();i.supercompressionScheme=l._nextUint32();const f=l._nextUint32(),h=l._nextUint32(),p=l._nextUint32(),d=l._nextUint32(),g=l._nextUint64(),E=l._nextUint64(),_=u*3*8,C=new Qo(o,Nn.length+r,_,!0);for(let re=0;re<u;re++)i.levels.push({levelData:new Uint8Array(o.buffer,o.byteOffset+C._nextUint64(),C._nextUint64()),uncompressedByteLength:C._nextUint64()});const y=new Qo(o,f,h,!0);y._skip(4);const I=y._nextUint16(),v=y._nextUint16(),m=y._nextUint16(),Q=y._nextUint16(),D=y._nextUint8(),b=y._nextUint8(),P=y._nextUint8(),O=y._nextUint8(),F=[y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8()],V=[y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8()],T={vendorId:I,descriptorType:v,versionNumber:m,colorModel:D,colorPrimaries:b,transferFunction:P,flags:O,texelBlockDimension:F,bytesPlane:V,samples:[]},et=(Q/4-6)/4;for(let re=0;re<et;re++){const fe={bitOffset:y._nextUint16(),bitLength:y._nextUint8(),channelType:y._nextUint8(),samplePosition:[y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};fe.channelType&YI?(fe.sampleLower=y._nextInt32(),fe.sampleUpper=y._nextInt32()):(fe.sampleLower=y._nextUint32(),fe.sampleUpper=y._nextUint32()),T.samples[re]=fe}i.dataFormatDescriptor.length=0,i.dataFormatDescriptor.push(T);const ut=new Qo(o,p,d,!0);for(;ut._offset<d;){const re=ut._nextUint32(),fe=ut._scan(re),ie=fE(fe);if(i.keyValue[ie]=ut._nextUint8Array(re-fe.byteLength-1),ie.match(/^ktx/i)){const vn=fE(i.keyValue[ie]);i.keyValue[ie]=vn.substring(0,vn.lastIndexOf("\0"))}const H=re%4?4-re%4:0;ut._skip(H)}if(E<=0)return i;const lt=new Qo(o,g,E,!0),L=lt._nextUint16(),q=lt._nextUint16(),k=lt._nextUint32(),_t=lt._nextUint32(),w=lt._nextUint32(),Z=lt._nextUint32(),dt=[];for(let re=0;re<u;re++)dt.push({imageFlags:lt._nextUint32(),rgbSliceByteOffset:lt._nextUint32(),rgbSliceByteLength:lt._nextUint32(),alphaSliceByteOffset:lt._nextUint32(),alphaSliceByteLength:lt._nextUint32()});const vt=g+lt._offset,J=vt+k,pt=J+_t,Ct=pt+w,Mt=new Uint8Array(o.buffer,o.byteOffset+vt,k),Tt=new Uint8Array(o.buffer,o.byteOffset+J,_t),ae=new Uint8Array(o.buffer,o.byteOffset+pt,w),Xt=new Uint8Array(o.buffer,o.byteOffset+Ct,Z);return i.globalData={endpointCount:L,selectorCount:q,imageDescs:dt,endpointsData:Mt,selectorsData:Tt,tablesData:ae,extendedData:Xt},i}const ZI=({onZoomChange:o,currentZoom:t})=>{const i=[{label:"25%",value:.25},{label:"50%",value:.5},{label:"100%",value:1},{label:"150%",value:1.5},{label:"200%",value:2},{label:"Fit Screen",value:"fit-screen"},{label:"Fit Width",value:"fit-width"},{label:"Fit Height",value:"fit-height"}];return Ve.jsx("div",{className:"zoom-controls",children:i.map(r=>Ve.jsx("button",{onClick:()=>o(r.value),className:t===r.value?"active":"",children:r.label},String(r.value)))})},jI=o=>{if(!o)return"Unknown";const t={[Sh]:"Alpha",[ka]:"Red",[zc]:"RedInteger",[qa]:"RG",[Vc]:"RGInteger",[yh]:"RGB",[Vv]:"RGBInteger",[_n]:"RGBA",[kc]:"RGBAInteger",[No]:"DXT1 RGB",[xs]:"DXT1 RGBA",[Fo]:"DXT3 RGBA",[Ms]:"DXT5 RGBA",[Vo]:"PVRTC1 RGB 4bpp",[Qc]:"PVRTC1 RGB 2bpp",[ko]:"PVRTC1 RGBA 4bpp",[Lc]:"PVRTC1 RGBA 2bpp",[qo]:"ETC1 RGB",[Xo]:"ETC2 RGB",[Yo]:"ETC2 RGBA",[bs]:"ASTC 4x4",[Nc]:"ASTC 5x4"};let i=t[o.format]||`Unknown GPU Format (format: ${o.format}, type: ${o.type}, colorSpace: ${o.colorSpace})`;return o.format&&t[o.format]&&o.colorSpace===On&&(i+=" (sRGB)"),i},$I=o=>{if(!o)return"N/A (No KTX Info)";if("glInternalFormat"in o&&o.glInternalFormat!==void 0)throw new Error("KTX1 format handling is not implemented in this example.");return"vkFormat"in o&&o.vkFormat!==void 0?`KTX2 VKFormat: 0x${o.vkFormat.toString(16)}`:"N/A (Format Undefined in KTX Info)"},tB=({selectedFile:o,onTextureLoaded:t,flipY:i})=>{const r=Be.useRef(null),l=Be.useRef(null),u=Be.useRef(null),f=Be.useRef(null),h=Be.useRef(null),p=Be.useRef(null),[d,g]=Be.useState(null),[E,_]=Be.useState(!1),[C,y]=Be.useState(1),I=D=>{function b(O){return typeof O=="number"&&!isNaN(O)}const P=D.deltaY;return b(C)&&y(O=>O+P*-.001),null},v=Be.useCallback(()=>{l.current&&u.current&&f.current&&l.current.render(u.current,f.current)},[]),m=Be.useCallback(()=>{if(!h.current||!f.current||!r.current)return;const D=h.current,b=D.material.map;if(!b||!b.image||b.image.width===0||b.image.height===0){D.scale.set(0,0,0);return}const P=b.image.width,O=b.image.height,F=r.current,V=F.clientWidth,R=F.clientHeight;if(V===0||R===0){D.scale.set(0,0,0);return}let T,G;if(typeof C=="number")T=P*C,G=O*C;else{const tt=P/O,et=V/R;switch(C){case"fit-width":T=V,G=V/tt;break;case"fit-height":G=R,T=R*tt;break;case"fit-screen":default:tt>et?(T=V,G=V/tt):(G=R,T=R*tt);break}}D.scale.set(T,G,1)},[C]);Be.useEffect(()=>{const D=r.current;if(!D)return;D.addEventListener("wheel",I),u.current=new RC,l.current=new xI({antialias:!0,alpha:!0}),l.current.setPixelRatio(window.devicePixelRatio),D.appendChild(l.current.domElement),p.current=new hi().setTranscoderPath("https://cdn.jsdelivr.net/npm/three@0.176.0/examples/jsm/libs/basis/").detectSupport(l.current),f.current=new UE(-1,1,1,-1,.1,1e3),f.current.position.z=1,f.current.rotation.order="XYZ";const b=new $o(1,1),P=new Ih({transparent:!0,color:16777215,side:Ri});return h.current=new wi(b,P),u.current.add(h.current),()=>{var O,F,V;(O=p.current)==null||O.dispose(),h.current&&(h.current.geometry.dispose(),h.current.material.map&&h.current.material.map.dispose(),h.current.material.dispose()),(F=l.current)==null||F.dispose(),D&&((V=l.current)!=null&&V.domElement)&&D.contains(l.current.domElement)&&D.removeChild(l.current.domElement),u.current=null,l.current=null,f.current=null,h.current=null,p.current=null}},[]);const Q=Be.useCallback(()=>{if(r.current&&l.current&&f.current){const D=r.current.clientWidth,b=r.current.clientHeight;l.current.setSize(D,b),f.current.left=-D/2,f.current.right=D/2,f.current.top=b/2,f.current.bottom=-b/2,f.current.updateProjectionMatrix(),m(),v()}},[m,v]);return Be.useEffect(()=>(window.addEventListener("resize",Q),Q(),()=>window.removeEventListener("resize",Q)),[Q]),Be.useEffect(()=>{if(f.current){const D=f.current;i?(D.position.z=-1,D.rotation.order="XZY",D.rotation.x=0,D.rotation.y=Math.PI,D.rotation.z=Math.PI):(D.position.z=1,D.rotation.set(0,0,0),D.rotation.order="XYZ"),D.updateMatrixWorld(),v()}},[i,v]),Be.useEffect(()=>{m(),v()},[C,m,v]),Be.useEffect(()=>{if(!o||!p.current||!h.current){if(h.current){const O=h.current.material;O.map&&(O.map.dispose(),O.map=null,O.needsUpdate=!0),m(),v()}o||t({width:0,height:0,format:"No file selected"});return}g(null),_(!0);const b=h.current.material;b.map&&(b.map.dispose(),b.map=null);const P=new FileReader;P.onload=async O=>{var F;if((F=O.target)!=null&&F.result&&p.current){const V=O.target.result;let R=null,T="N/A";try{R=JI(new Uint8Array(V)),T=$I(R)}catch(tt){console.warn("ktx-parse error:",tt),T="N/A (Parse Error)"}const G=URL.createObjectURL(o);try{const tt=await p.current.loadAsync(G);URL.revokeObjectURL(G),tt.colorSpace=On,tt.minFilter=wn,tt.magFilter=wn,tt.needsUpdate=!0,b.map=tt,b.needsUpdate=!0,m(),v();const et=jI(tt);let ut=et;R&&"vkFormat"in R&&R.vkFormat!==void 0||o.name.toLowerCase().endsWith(".ktx2")?ut=`Basis/KTX2 (Original: ${T}, Transcoded to: ${et})`:ut=`KTX1 (Original: ${T}, Rendered as: ${et})`,t({width:tt.image.width,height:tt.image.height,format:ut})}catch(tt){URL.revokeObjectURL(G),console.error("Error loading KTX texture:",tt);const et=tt instanceof Error?tt.message:String(tt);g(`Error loading KTX: ${et}`),t({width:0,height:0,format:"Error loading"}),m(),v()}finally{_(!1)}}else _(!1)},P.onerror=O=>{console.error("FileReader error:",O),g("Failed to read file."),t({width:0,height:0,format:"Error reading file"}),_(!1),m(),v()},P.readAsArrayBuffer(o)},[o,t,m,v]),Ve.jsxs("div",{ref:r,style:{width:"100%",height:"100%",position:"relative",backgroundColor:"#282c34"},children:[Ve.jsx(ZI,{onZoomChange:y,currentZoom:C}),E&&Ve.jsx("div",{className:"texture-viewer-message",children:"Loading texture..."}),d&&Ve.jsx("div",{className:"texture-viewer-message",style:{color:"red"},children:d}),!o&&!d&&!E&&Ve.jsx("div",{className:"texture-viewer-message",children:"Drop a KTX/KTX2 file here or select from the list."})]})},eB=({files:o,selectedFile:t,onFileSelect:i,visible:r,onToggle:l,flipY:u,setFlipyY:f})=>r?Ve.jsxs("div",{className:"file-sidebar",children:[Ve.jsx("button",{onClick:l,className:"sidebar-toggle-button",children:"✕"}),Ve.jsxs("button",{onClick:()=>{f(!u)},style:{marginBottom:"10px",width:"100%",padding:"8px",boxSizing:"border-box"},children:["Flip Y: ",u?"ON":"OFF"]}),Ve.jsx("h3",{children:"KTX Files"}),o.length===0&&Ve.jsx("p",{className:"no-files-message",children:"Drop KTX files onto the window."}),Ve.jsx("ul",{children:o.map(h=>Ve.jsx("li",{className:(t==null?void 0:t.id)===h.id?"selected":"",onClick:()=>i(h),children:h.file.name},h.id))})]}):Ve.jsx("button",{onClick:l,className:"sidebar-toggle-button hidden-sidebar",children:"➔"}),nB=({info:o})=>!o||o.width===0?null:Ve.jsxs("div",{className:"info-overlay",children:[Ve.jsxs("p",{children:["W: ",o.width,"px, H: ",o.height,"px"]}),Ve.jsxs("p",{children:["Format: ",o.format]})]});function iB(){const[o,t]=Be.useState([]),[i,r]=Be.useState(null),[l,u]=Be.useState(!0),[f,h]=Be.useState(null),p=Be.useRef(null),[d,g]=Be.useState(!1),E=Be.useCallback(v=>{v.preventDefault(),v.stopPropagation();const m=Array.from(v.dataTransfer.files).filter(Q=>Q.name.toLowerCase().endsWith(".ktx")||Q.name.toLowerCase().endsWith(".ktx2")||Q.name.toLowerCase().endsWith(".vri")).map(Q=>({file:Q,id:`${Q.name}-${Q.lastModified}-${Q.size}`}));m.length>0&&(t(Q=>{const D=m.filter(b=>!Q.some(P=>P.id===b.id));return[...Q,...D]}),m.length>0&&r(m[m.length-1]))},[i]),_=Be.useCallback(v=>{v.preventDefault(),v.stopPropagation()},[]),C=Be.useCallback(v=>{r(v),h(null)},[]),y=Be.useCallback(()=>{u(v=>!v)},[]),I=Be.useCallback(v=>{h(v)},[]);return Be.useEffect(()=>{const v=m=>m.preventDefault();return window.addEventListener("dragover",v,!1),window.addEventListener("drop",v,!1),()=>{window.removeEventListener("dragover",v,!1),window.removeEventListener("drop",v,!1)}},[]),Ve.jsxs("div",{ref:p,className:"app-container",onDrop:E,onDragOver:_,children:[Ve.jsxs("div",{className:"main-content",children:[Ve.jsx(tB,{selectedFile:(i==null?void 0:i.file)||null,onTextureLoaded:I,flipY:d}),f&&Ve.jsx(nB,{info:f})]}),Ve.jsx(eB,{files:o,selectedFile:i,onFileSelect:C,visible:l,onToggle:y,flipY:d,setFlipyY:g})]})}Av.createRoot(document.getElementById("root")).render(Ve.jsx(Be.StrictMode,{children:Ve.jsx(iB,{})}));
