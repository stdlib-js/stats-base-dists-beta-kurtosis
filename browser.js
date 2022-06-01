// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).kurtosis=n()}(this,(function(){"use strict";return function(e,n){var t,o,f,i;return e<=0||n<=0?NaN:(i=(o=e-n)*o*((f=e+n)+1),i-=(t=e*n)*(f+2),i*=6,i/=t*(f+2)*(f+3))}}));
//# sourceMappingURL=browser.js.map
