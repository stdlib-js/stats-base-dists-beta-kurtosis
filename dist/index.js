"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var o=c(function(q,v){
var e=require('@stdlib/math-base-assert-is-nan/dist');function x(i,r){var s,t,u,n;return e(i)||i<=0||e(r)||r<=0?NaN:(s=i*r,t=i-r,u=i+r,n=t*t*(u+1),n-=s*(u+2),n*=6,n/=s*(u+2)*(u+3),n)}v.exports=x
});var f=o();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
