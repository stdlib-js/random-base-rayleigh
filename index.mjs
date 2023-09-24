// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";function u(e,t){return t*j(-2*f(e()))}function g(){var j,f,g,c;if(0===arguments.length)g=l();else if(1===arguments.length&&r(arguments[0]))if(o(f=arguments[0],"prng")){if(!i(f.prng))throw new TypeError(h("0p36u,JI","prng",f.prng));g=f.prng}else g=l(f);else{if(!n(j=arguments[0]))throw new TypeError(h("0p371,NQ",j));if(arguments.length>1){if(!r(f=arguments[1]))throw new TypeError(h("0p32V,FD",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(h("0p36u,JI","prng",f.prng));g=f.prng}else g=l(f)}else g=l()}return e(c=void 0===j?J:E,"NAME","rayleigh"),f&&f.prng?(e(c,"seed",null),e(c,"seedLength",null),s(c,"state",d(null),m),e(c,"stateLength",null),e(c,"byteLength",null),e(c,"toJSON",d(null)),e(c,"PRNG",g)):(t(c,"seed",v),t(c,"seedLength",b),s(c,"state",w,N),t(c,"stateLength",x),t(c,"byteLength",y),e(c,"toJSON",L),e(c,"PRNG",g),g=g.normalized),c;function v(){return g.seed}function b(){return g.seedLength}function x(){return g.stateLength}function y(){return g.byteLength}function w(){return g.state}function N(e){g.state=e}function L(){var e={type:"PRNG"};return e.name=c.NAME,e.state=a(g.state),e.params=void 0===j?[]:[j],e}function E(){return u(g,j)}function J(e){return p(e)||e<=0?NaN:u(g,e)}}var c=g();e(c,"factory",g);export{c as default,g as factory};
//# sourceMappingURL=index.mjs.map
