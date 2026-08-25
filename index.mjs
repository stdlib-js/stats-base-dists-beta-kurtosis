// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.3-esm/index.mjs";function t(t,e){var a,n,r,i;return s(t)||t<=0||s(e)||e<=0?NaN:(i=(n=t-e)*n*((r=t+e)+1),i-=(a=t*e)*(r+2),i*=6,i/=a*(r+2)*(r+3))}export{t as default};
//# sourceMappingURL=index.mjs.map
