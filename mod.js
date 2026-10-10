// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}function r(r,t){var u,a,e,f;return n(r)||r<=0||n(t)||t<=0?NaN:(f=(a=r-t)*a*((e=r+t)+1),f-=(u=r*t)*(e+2),f*=6,f/=u*(e+2)*(e+3))}export{r as default};
//# sourceMappingURL=mod.js.map
