(self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[]).push([[998],{9662:function(e,t,n){var i=n(614),r=n(6330),o=TypeError;e.exports=function(e){if(i(e))return e;throw o(r(e)+" is not a function")}},6077:function(e,t,n){var i=n(614),r=String,o=TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+r(e)+" as a prototype")}},5787:function(e,t,n){var i=n(7976),r=TypeError;e.exports=function(e,t){if(i(t,e))return e;throw r("Incorrect invocation")}},9670:function(e,t,n){var i=n(111),r=String,o=TypeError;e.exports=function(e){if(i(e))return e;throw o(r(e)+" is not an object")}},1318:function(e,t,n){var i=n(5656),r=n(1400),o=n(6244),a=function(e){return function(t,n,a){var c,s=i(t),C=o(s),l=r(a,C);if(e&&n!=n){while(C>l)if(c=s[l++],c!=c)return!0}else for(;C>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e,t,n){var i=n(1702),r=i({}.toString),o=i("".slice);e.exports=function(e){return o(r(e),8,-1)}},648:function(e,t,n){var i=n(1694),r=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),s=Object,C="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=s(e),c))?n:C?o(t):"Object"==(i=o(t))&&r(t.callee)?"Arguments":i}},7741:function(e,t,n){var i=n(1702),r=Error,o=i("".replace),a=function(e){return String(r(e).stack)}("zxcasd"),c=/\n\s*at [^:]*:[^\n]*/,s=c.test(a);e.exports=function(e,t){if(s&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=o(e,c,"");return e}},9920:function(e,t,n){var i=n(2597),r=n(3887),o=n(1236),a=n(3070);e.exports=function(e,t,n){for(var c=r(t),s=a.f,C=o.f,l=0;l<c.length;l++){var f=c[l];i(e,f)||n&&i(n,f)||s(e,f,C(t,f))}}},8880:function(e,t,n){var i=n(9781),r=n(3070),o=n(9114);e.exports=i?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var i=n(6339),r=n(3070);e.exports=function(e,t,n){return n.get&&i(n.get,t,{getter:!0}),n.set&&i(n.set,t,{setter:!0}),r.f(e,t,n)}},8052:function(e,t,n){var i=n(614),r=n(3070),o=n(6339),a=n(3072);e.exports=function(e,t,n,c){c||(c={});var s=c.enumerable,C=void 0!==c.name?c.name:t;if(i(n)&&o(n,C,c),c.global)s?e[t]=n:a(t,n);else{try{c.unsafe?e[t]&&(s=!0):delete e[t]}catch(l){}s?e[t]=n:r.f(e,t,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return e}},3072:function(e,t,n){var i=n(7854),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},9781:function(e,t,n){var i=n(7293);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var i=n(7854),r=n(111),o=i.document,a=r(o)&&r(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var i=n(5005);e.exports=i("navigator","userAgent")||""},7392:function(e,t,n){var i,r,o=n(7854),a=n(8113),c=o.process,s=o.Deno,C=c&&c.versions||s&&s.version,l=C&&C.v8;l&&(i=l.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&a&&(i=a.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=a.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var i=n(7293),r=n(9114);e.exports=!i((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},2109:function(e,t,n){var i=n(7854),r=n(1236).f,o=n(8880),a=n(8052),c=n(3072),s=n(9920),C=n(4705);e.exports=function(e,t){var n,l,f,u,h,d,p=e.target,m=e.global,L=e.stat;if(l=m?i:L?i[p]||c(p,{}):(i[p]||{}).prototype,l)for(f in t){if(h=t[f],e.dontCallGetSet?(d=r(l,f),u=d&&d.value):u=l[f],n=C(m?f:p+(L?".":"#")+f,e.forced),!n&&void 0!==u){if(typeof h==typeof u)continue;s(h,u)}(e.sham||u&&u.sham)&&o(h,"sham",!0),a(l,f,h,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var i=n(4374),r=Function.prototype,o=r.apply,a=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?a.bind(o):function(){return a.apply(o,arguments)})},4374:function(e,t,n){var i=n(7293);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var i=n(4374),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(e,t,n){var i=n(9781),r=n(2597),o=Function.prototype,a=i&&Object.getOwnPropertyDescriptor,c=r(o,"name"),s=c&&"something"===function(){}.name,C=c&&(!i||i&&a(o,"name").configurable);e.exports={EXISTS:c,PROPER:s,CONFIGURABLE:C}},1702:function(e,t,n){var i=n(4374),r=Function.prototype,o=r.bind,a=r.call,c=i&&o.bind(a,a);e.exports=i?function(e){return e&&c(e)}:function(e){return e&&function(){return a.apply(e,arguments)}}},5005:function(e,t,n){var i=n(7854),r=n(614),o=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(i[e]):i[e]&&i[e][t]}},8173:function(e,t,n){var i=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:i(n)}},7854:function(e,t,n){var i=function(e){return e&&e.Math==Math&&e};e.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var i=n(1702),r=n(7908),o=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(r(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var i=n(9781),r=n(7293),o=n(317);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var i=n(1702),r=n(7293),o=n(4326),a=Object,c=i("".split);e.exports=r((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var i=n(614),r=n(111),o=n(7674);e.exports=function(e,t,n){var a,c;return o&&i(a=t.constructor)&&a!==n&&r(c=a.prototype)&&c!==n.prototype&&o(e,c),e}},2788:function(e,t,n){var i=n(1702),r=n(614),o=n(5465),a=i(Function.toString);r(o.inspectSource)||(o.inspectSource=function(e){return a(e)}),e.exports=o.inspectSource},8340:function(e,t,n){var i=n(111),r=n(8880);e.exports=function(e,t){i(t)&&"cause"in t&&r(e,"cause",t.cause)}},9909:function(e,t,n){var i,r,o,a=n(8536),c=n(7854),s=n(1702),C=n(111),l=n(8880),f=n(2597),u=n(5465),h=n(6200),d=n(3501),p="Object already initialized",m=c.TypeError,L=c.WeakMap,v=function(e){return o(e)?r(e):i(e,{})},g=function(e){return function(t){var n;if(!C(t)||(n=r(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(a||u.state){var M=u.state||(u.state=new L),V=s(M.get),H=s(M.has),z=s(M.set);i=function(e,t){if(H(M,e))throw new m(p);return t.facade=e,z(M,e,t),t},r=function(e){return V(M,e)||{}},o=function(e){return H(M,e)}}else{var y=h("state");d[y]=!0,i=function(e,t){if(f(e,y))throw new m(p);return t.facade=e,l(e,y,t),t},r=function(e){return f(e,y)?e[y]:{}},o=function(e){return f(e,y)}}e.exports={set:i,get:r,has:o,enforce:v,getterFor:g}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var i=n(7293),r=n(614),o=/#|\.prototype\./,a=function(e,t){var n=s[c(e)];return n==l||n!=C&&(r(t)?i(t):!!t)},c=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=a.data={},C=a.NATIVE="N",l=a.POLYFILL="P";e.exports=a},111:function(e,t,n){var i=n(614);e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var i=n(5005),r=n(614),o=n(7976),a=n(3307),c=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&o(t.prototype,c(e))}},6244:function(e,t,n){var i=n(7466);e.exports=function(e){return i(e.length)}},6339:function(e,t,n){var i=n(7293),r=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,s=n(2788),C=n(9909),l=C.enforce,f=C.get,u=Object.defineProperty,h=a&&!i((function(){return 8!==u((function(){}),"length",{value:8}).length})),d=String(String).split("String"),p=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?u(e,"name",{value:t,configurable:!0}):e.name=t),h&&n&&o(n,"arity")&&e.length!==n.arity&&u(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&u(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(r){}var i=l(e);return o(i,"source")||(i.source=d.join("string"==typeof t?t:"")),e};Function.prototype.toString=p((function(){return r(this)&&f(this).source||s(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var i=+e;return(i>0?n:t)(i)}},133:function(e,t,n){var i=n(7392),r=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(e,t,n){var i=n(7854),r=n(614),o=n(2788),a=i.WeakMap;e.exports=r(a)&&/native code/.test(o(a))},6277:function(e,t,n){var i=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},3070:function(e,t,n){var i=n(9781),r=n(4664),o=n(3353),a=n(9670),c=n(4948),s=TypeError,C=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",u="configurable",h="writable";t.f=i?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&h in n&&!n[h]){var i=l(e,t);i&&i[h]&&(e[t]=n.value,n={configurable:u in n?n[u]:i[u],enumerable:f in n?n[f]:i[f],writable:!1})}return C(e,t,n)}:C:function(e,t,n){if(a(e),t=c(t),a(n),r)try{return C(e,t,n)}catch(i){}if("get"in n||"set"in n)throw s("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var i=n(9781),r=n(6916),o=n(5296),a=n(9114),c=n(5656),s=n(4948),C=n(2597),l=n(4664),f=Object.getOwnPropertyDescriptor;t.f=i?f:function(e,t){if(e=c(e),t=s(t),l)try{return f(e,t)}catch(n){}if(C(e,t))return a(!r(o.f,e,t),e[t])}},8006:function(e,t,n){var i=n(6324),r=n(748),o=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var i=n(1702);e.exports=i({}.isPrototypeOf)},6324:function(e,t,n){var i=n(1702),r=n(2597),o=n(5656),a=n(1318).indexOf,c=n(3501),s=i([].push);e.exports=function(e,t){var n,i=o(e),C=0,l=[];for(n in i)!r(c,n)&&r(i,n)&&s(l,n);while(t.length>C)r(i,n=t[C++])&&(~a(l,n)||s(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var i=n(1702),r=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(a){}return function(n,i){return r(n),o(i),t?e(n,i):n.__proto__=i,n}}():void 0)},2140:function(e,t,n){var i=n(6916),r=n(614),o=n(111),a=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&r(n=e.toString)&&!o(c=i(n,e)))return c;if(r(n=e.valueOf)&&!o(c=i(n,e)))return c;if("string"!==t&&r(n=e.toString)&&!o(c=i(n,e)))return c;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var i=n(5005),r=n(1702),o=n(8006),a=n(5181),c=n(9670),s=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=o.f(c(e)),n=a.f;return n?s(t,n(e)):t}},2626:function(e,t,n){var i=n(3070).f;e.exports=function(e,t,n){n in e||i(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},7066:function(e,t,n){"use strict";var i=n(9670);e.exports=function(){var e=i(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4488:function(e){var t=TypeError;e.exports=function(e){if(void 0==e)throw t("Can't call method on "+e);return e}},6200:function(e,t,n){var i=n(2309),r=n(9711),o=i("keys");e.exports=function(e){return o[e]||(o[e]=r(e))}},5465:function(e,t,n){var i=n(7854),r=n(3072),o="__core-js_shared__",a=i[o]||r(o,{});e.exports=a},2309:function(e,t,n){var i=n(1913),r=n(5465);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.24.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var i=n(9303),r=Math.max,o=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):o(n,t)}},5656:function(e,t,n){var i=n(8361),r=n(4488);e.exports=function(e){return i(r(e))}},9303:function(e,t,n){var i=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:i(t)}},7466:function(e,t,n){var i=n(9303),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},7908:function(e,t,n){var i=n(4488),r=Object;e.exports=function(e){return r(i(e))}},7593:function(e,t,n){var i=n(6916),r=n(111),o=n(2190),a=n(8173),c=n(2140),s=n(5112),C=TypeError,l=s("toPrimitive");e.exports=function(e,t){if(!r(e)||o(e))return e;var n,s=a(e,l);if(s){if(void 0===t&&(t="default"),n=i(s,e,t),!r(n)||o(n))return n;throw C("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var i=n(7593),r=n(2190);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},1694:function(e,t,n){var i=n(5112),r=i("toStringTag"),o={};o[r]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var i=n(648),r=String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var i=n(1702),r=0,o=Math.random(),a=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++r+o,36)}},3307:function(e,t,n){var i=n(133);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var i=n(9781),r=n(7293);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var i=n(7854),r=n(2309),o=n(2597),a=n(9711),c=n(133),s=n(3307),C=r("wks"),l=i.Symbol,f=l&&l["for"],u=s?l:l&&l.withoutSetter||a;e.exports=function(e){if(!o(C,e)||!c&&"string"!=typeof C[e]){var t="Symbol."+e;c&&o(l,e)?C[e]=l[e]:C[e]=s&&f?f(t):u(t)}return C[e]}},9191:function(e,t,n){"use strict";var i=n(5005),r=n(2597),o=n(8880),a=n(7976),c=n(7674),s=n(9920),C=n(2626),l=n(9587),f=n(6277),u=n(8340),h=n(7741),d=n(2914),p=n(9781),m=n(1913);e.exports=function(e,t,n,L){var v="stackTraceLimit",g=L?2:1,M=e.split("."),V=M[M.length-1],H=i.apply(null,M);if(H){var z=H.prototype;if(!m&&r(z,"cause")&&delete z.cause,!n)return H;var y=i("Error"),b=t((function(e,t){var n=f(L?t:e,void 0),i=L?new H(e):new H;return void 0!==n&&o(i,"message",n),d&&o(i,"stack",h(i.stack,2)),this&&a(z,this)&&l(i,this,b),arguments.length>g&&u(i,arguments[g]),i}));if(b.prototype=z,"Error"!==V?c?c(b,y):s(b,y,{name:!0}):p&&v in H&&(C(b,H,v),C(b,H,"prepareStackTrace")),s(b,H),!m)try{z.name!==V&&o(z,"name",V),z.constructor=b}catch(_){}return b}}},1703:function(e,t,n){var i=n(2109),r=n(7854),o=n(2104),a=n(9191),c="WebAssembly",s=r[c],C=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=a(e,t,C),i({global:!0,constructor:!0,arity:1,forced:C},n)},f=function(e,t){if(s&&s[e]){var n={};n[e]=a(c+"."+e,t,C),i({target:c,stat:!0,constructor:!0,arity:1,forced:C},n)}};l("Error",(function(e){return function(t){return o(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),l("URIError",(function(e){return function(t){return o(e,this,arguments)}})),f("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),f("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),f("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},2087:function(e,t,n){var i=n(7854),r=n(9781),o=n(7045),a=n(7066),c=n(7293),s=i.RegExp,C=s.prototype,l=r&&c((function(){var e=!0;try{s(".","d")}catch(l){e=!1}var t={},n="",i=e?"dgimsy":"gimsy",r=function(e,i){Object.defineProperty(t,e,{get:function(){return n+=i,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)r(a,o[a]);var c=Object.getOwnPropertyDescriptor(C,"flags").get.call(t);return c!==i||n!==i}));l&&o(C,"flags",{configurable:!0,get:a})},2801:function(e,t,n){"use strict";var i=n(2109),r=n(7854),o=n(5005),a=n(9114),c=n(3070).f,s=n(2597),C=n(5787),l=n(9587),f=n(6277),u=n(3678),h=n(7741),d=n(9781),p=n(1913),m="DOMException",L=o("Error"),v=o(m),g=function(){C(this,M);var e=arguments.length,t=f(e<1?void 0:arguments[0]),n=f(e<2?void 0:arguments[1],"Error"),i=new v(t,n),r=L(t);return r.name=m,c(i,"stack",a(1,h(r.stack,1))),l(i,this,g),i},M=g.prototype=v.prototype,V="stack"in L(m),H="stack"in new v(1,2),z=v&&d&&Object.getOwnPropertyDescriptor(r,m),y=!!z&&!(z.writable&&z.configurable),b=V&&!y&&!H;i({global:!0,constructor:!0,forced:p||b},{DOMException:b?g:v});var _=o(m),x=_.prototype;if(x.constructor!==_)for(var w in p||c(x,"constructor",a(1,_)),u)if(s(u,w)){var S=u[w],N=S.s;s(_,N)||c(_,N,a(6,S.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return p},DV:function(){return A},GJ:function(){return T},L:function(){return l},LL:function(){return _},Pz:function(){return N},UI:function(){return R},US:function(){return s},Yr:function(){return V},ZR:function(){return b},b$:function(){return g},cI:function(){return S},dS:function(){return K},eu:function(){return z},g5:function(){return o},gK:function(){return Y},gQ:function(){return B},h$:function(){return C},hl:function(){return H},hu:function(){return r},m9:function(){return J},ne:function(){return q},p$:function(){return u},pd:function(){return U},r3:function(){return I},ru:function(){return v},tV:function(){return f},uI:function(){return L},ug:function(){return X},vZ:function(){return O},w1:function(){return M},w9:function(){return E},xO:function(){return F},xb:function(){return P},z$:function(){return m},zd:function(){return j}});n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},c=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=e[n++],a=e[n++],c=e[n++],s=((7&r)<<18|(63&o)<<12|(63&a)<<6|63&c)-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const o=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&a)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,s=c?e[r+2]:0,C=t>>2,l=(3&t)<<4|a>>4;let f=(15&a)<<2|s>>6,u=63&s;c||(u=64,o||(f=64)),i.push(n[C],n[l],n[f],n[u])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],o=r<e.length,a=o?n[e.charAt(r)]:0;++r;const c=r<e.length,s=c?n[e.charAt(r)]:64;++r;const C=r<e.length,l=C?n[e.charAt(r)]:64;if(++r,null==t||null==a||null==s||null==l)throw Error();const f=t<<2|a>>4;if(i.push(f),64!==s){const e=a<<4&240|s>>2;if(i.push(e),64!==l){const e=s<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},C=function(e){const t=a(e);return s.encodeByteArray(t,!0)},l=function(e){return C(e).replace(/\./g,"")},f=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){return h(void 0,e)}function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&d(n)&&(e[n]=h(e[n],t[n]));return e}function d(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function L(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function M(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function V(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function H(){return"object"===typeof indexedDB}function z(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="FirebaseError";class b extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=y,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?x(r,n):"Error",a=`${this.serviceName}: ${o} (${i}).`,c=new b(i,a,n);return c}}function x(e,t){return e.replace(w,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const w=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return JSON.parse(e)}function N(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=S(f(o[0])||""),n=S(f(o[1])||""),r=o[2],i=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:i,signature:r}},E=function(e){const t=k(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},T=function(e){const t=k(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function O(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(D(n)&&D(o)){if(!O(n,o))return!1}else if(n!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function D(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let i,r,o=this.chain_[0],a=this.chain_[1],c=this.chain_[2],s=this.chain_[3],C=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(i=s^a&(c^s),r=1518500249):(i=a^c^s,r=1859775393):l<60?(i=a&c|s&(a|c),r=2400959708):(i=a^c^s,r=3395469782);const e=(o<<5|o>>>27)+i+C+r+n[l]&4294967295;C=s,s=c,c=4294967295&(a<<30|a>>>2),a=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+C&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;while(i<t){if(0===o)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else while(i<t)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function q(e,t){const n=new W(e,t);return n.subscribe.bind(n)}class W{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=$(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=G),void 0===i.error&&(i.error=G),void 0===i.complete&&(i.complete=G);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const t=o-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}},8125:function(e,t,n){"use strict";n.d(t,{Qc:function(){return Xn},fL:function(){return Qn},qv:function(){return Jn},vI:function(){return Kn},vc:function(){return Yn}});n(1703);
/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return h(e)||p(e,t)||m(e,t)||g()}function f(e){return u(e)||d(e)||m(e)||v()}function u(e){if(Array.isArray(e))return L(e)}function h(e){if(Array.isArray(e))return e}function d(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function p(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(i=n.next()).done);a=!0)if(o.push(i.value),t&&o.length===t)break}catch(s){c=!0,r=s}finally{try{a||null==n["return"]||n["return"]()}finally{if(c)throw r}}return o}}function m(e,t){if(e){if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var M=function(){},V={},H={},z=null,y={mark:M,measure:M};try{"undefined"!==typeof window&&(V=window),"undefined"!==typeof document&&(H=document),"undefined"!==typeof MutationObserver&&(z=MutationObserver),"undefined"!==typeof performance&&(y=performance)}catch(Zn){}var b=V.navigator||{},_=b.userAgent,x=void 0===_?"":_,w=V,S=H,N=z,k=y,E=(w.document,!!S.documentElement&&!!S.head&&"function"===typeof S.addEventListener&&"function"===typeof S.createElement),T=~x.indexOf("MSIE")||~x.indexOf("Trident/"),I="___FONT_AWESOME___",A=16,P="fa",R="svg-inline--fa",O="data-fa-i2svg",D="data-fa-pseudo-element",F="data-fa-pseudo-element-pending",j="data-prefix",U="data-icon",B="fontawesome-i2svg",q="async",W=["HTML","HEAD","STYLE","SCRIPT"],$=function(){try{return!0}catch(Zn){return!1}}(),G={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Y={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},K={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},X={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},J=/fa[srltdbk]?[\-\ ]/,Q="fa-layers-text",Z=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ee={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},te=[1,2,3,4,5,6,7,8,9,10],ne=te.concat([11,12,13,14,15,16,17,18,19,20]),ie=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oe=[].concat(f(Object.keys(Y)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",re.GROUP,re.SWAP_OPACITY,re.PRIMARY,re.SECONDARY]).concat(te.map((function(e){return"".concat(e,"x")}))).concat(ne.map((function(e){return"w-".concat(e)}))),ae=w.FontAwesomeConfig||{};function ce(e){var t=S.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function se(e){return""===e||"false"!==e&&("true"===e||e)}if(S&&"function"===typeof S.querySelector){var Ce=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ce.forEach((function(e){var t=l(e,2),n=t[0],i=t[1],r=se(ce(n));void 0!==r&&null!==r&&(ae[i]=r)}))}var le={familyPrefix:P,styleDefault:"solid",replacementClass:R,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},fe=r(r({},le),ae);fe.autoReplaceSvg||(fe.observeMutations=!1);var ue={};Object.keys(fe).forEach((function(e){Object.defineProperty(ue,e,{enumerable:!0,set:function(t){fe[e]=t,he.forEach((function(e){return e(ue)}))},get:function(){return fe[e]}})})),w.FontAwesomeConfig=ue;var he=[];function de(e){return he.push(e),function(){he.splice(he.indexOf(e),1)}}var pe=A,me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Le(e){if(e&&E){var t=S.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=S.head.childNodes,i=null,r=n.length-1;r>-1;r--){var o=n[r],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=o)}return S.head.insertBefore(t,i),e}}var ve="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ge(){var e=12,t="";while(e-- >0)t+=ve[62*Math.random()|0];return t}function Me(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ve(e){return e.classList?Me(e.classList):(e.getAttribute("class")||"").split(" ").filter((function(e){return e}))}function He(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ze(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(He(e[n]),'" ')}),"").trim()}function ye(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")}),"")}function be(e){return e.size!==me.size||e.x!==me.x||e.y!==me.y||e.rotate!==me.rotate||e.flipX||e.flipY}function _e(e){var t=e.transform,n=e.containerWidth,i=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(c)},C={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:s,path:C}}function xe(e){var t=e.transform,n=e.width,i=void 0===n?A:n,r=e.height,o=void 0===r?A:r,a=e.startCentered,c=void 0!==a&&a,s="";return s+=c&&T?"translate(".concat(t.x/pe-i/2,"em, ").concat(t.y/pe-o/2,"em) "):c?"translate(calc(-50% + ".concat(t.x/pe,"em), calc(-50% + ").concat(t.y/pe,"em)) "):"translate(".concat(t.x/pe,"em, ").concat(t.y/pe,"em) "),s+="scale(".concat(t.size/pe*(t.flipX?-1:1),", ").concat(t.size/pe*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var we=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function Se(){var e=P,t=R,n=ue.familyPrefix,i=ue.replacementClass,r=we;if(n!==e||i!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(c,".".concat(i))}return r}var Ne=!1;function ke(){ue.autoAddCss&&!Ne&&(Le(Se()),Ne=!0)}var Ee={mixout:function(){return{dom:{css:Se,insertCss:ke}}},hooks:function(){return{beforeDOMElementCreation:function(){ke()},beforeI2svg:function(){ke()}}}},Te=w||{};Te[I]||(Te[I]={}),Te[I].styles||(Te[I].styles={}),Te[I].hooks||(Te[I].hooks={}),Te[I].shims||(Te[I].shims=[]);var Ie=Te[I],Ae=[],Pe=function e(){S.removeEventListener("DOMContentLoaded",e),Re=1,Ae.map((function(e){return e()}))},Re=!1;function Oe(e){E&&(Re?setTimeout(e,0):Ae.push(e))}function De(e){var t=e.tag,n=e.attributes,i=void 0===n?{}:n,r=e.children,o=void 0===r?[]:r;return"string"===typeof e?He(e):"<".concat(t," ").concat(ze(i),">").concat(o.map(De).join(""),"</").concat(t,">")}function Fe(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}E&&(Re=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),Re||S.addEventListener("DOMContentLoaded",Pe));var je=function(e,t){return function(n,i,r,o){return e.call(t,n,i,r,o)}},Ue=function(e,t,n,i){var r,o,a,c=Object.keys(e),s=c.length,C=void 0!==i?je(t,i):t;for(void 0===n?(r=1,a=e[c[0]]):(r=0,a=n);r<s;r++)o=c[r],a=C(a,e[o],o,e);return a};function Be(e){var t=[],n=0,i=e.length;while(n<i){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var o=e.charCodeAt(n++);56320==(64512&o)?t.push(((1023&r)<<10)+(1023&o)+65536):(t.push(r),n--)}else t.push(r)}return t}function qe(e){var t=Be(e);return 1===t.length?t[0].toString(16):null}function We(e,t){var n,i=e.length,r=e.charCodeAt(t);return r>=55296&&r<=56319&&i>t+1&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?1024*(r-55296)+n-56320+65536:r}function $e(e){return Object.keys(e).reduce((function(t,n){var i=e[n],r=!!i.icon;return r?t[i.iconName]=i.icon:t[n]=i,t}),{})}function Ge(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.skipHooks,o=void 0!==i&&i,a=$e(t);"function"!==typeof Ie.hooks.addPack||o?Ie.styles[e]=r(r({},Ie.styles[e]||{}),a):Ie.hooks.addPack(e,$e(t)),"fas"===e&&Ge("fa",t)}var Ye=Ie.styles,Ke=Ie.shims,Xe=Object.values(K),Je=null,Qe={},Ze={},et={},tt={},nt={},it=Object.keys(G);function rt(e){return~oe.indexOf(e)}function ot(e,t){var n=t.split("-"),i=n[0],r=n.slice(1).join("-");return i!==e||""===r||rt(r)?null:r}var at=function(){var e=function(e){return Ue(Ye,(function(t,n,i){return t[i]=Ue(n,e,{}),t}),{})};Qe=e((function(e,t,n){if(t[3]&&(e[t[3]]=n),t[2]){var i=t[2].filter((function(e){return"number"===typeof e}));i.forEach((function(t){e[t.toString(16)]=n}))}return e})),Ze=e((function(e,t,n){if(e[n]=n,t[2]){var i=t[2].filter((function(e){return"string"===typeof e}));i.forEach((function(t){e[t]=n}))}return e})),nt=e((function(e,t,n){var i=t[2];return e[n]=n,i.forEach((function(t){e[t]=n})),e}));var t="far"in Ye||ue.autoFetchSvg,n=Ue(Ke,(function(e,n){var i=n[0],r=n[1],o=n[2];return"far"!==r||t||(r="fas"),"string"===typeof i&&(e.names[i]={prefix:r,iconName:o}),"number"===typeof i&&(e.unicodes[i.toString(16)]={prefix:r,iconName:o}),e}),{names:{},unicodes:{}});et=n.names,tt=n.unicodes,Je=dt(ue.styleDefault)};function ct(e,t){return(Qe[e]||{})[t]}function st(e,t){return(Ze[e]||{})[t]}function Ct(e,t){return(nt[e]||{})[t]}function lt(e){return et[e]||{prefix:null,iconName:null}}function ft(e){var t=tt[e],n=ct("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ut(){return Je}de((function(e){Je=dt(e.styleDefault)})),at();var ht=function(){return{prefix:null,iconName:null,rest:[]}};function dt(e){var t=G[e],n=Y[e]||Y[t],i=e in Ie.styles?e:null;return n||i||null}function pt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipLookups,i=void 0!==n&&n,r=null,o=e.reduce((function(e,t){var n=ot(ue.familyPrefix,t);if(Ye[t]?(t=Xe.includes(t)?X[t]:t,r=t,e.prefix=t):it.indexOf(t)>-1?(r=t,e.prefix=dt(t)):n?e.iconName=n:t!==ue.replacementClass&&e.rest.push(t),!i&&e.prefix&&e.iconName){var o="fa"===r?lt(e.iconName):{},a=Ct(e.prefix,e.iconName);o.prefix&&(r=null),e.iconName=o.iconName||a||e.iconName,e.prefix=o.prefix||e.prefix,"far"!==e.prefix||Ye["far"]||!Ye["fas"]||ue.autoFetchSvg||(e.prefix="fas")}return e}),ht());return"fa"!==o.prefix&&"fa"!==r||(o.prefix=ut()||"fas"),o}var mt=function(){function e(){a(this,e),this.definitions={}}return s(e,[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(t){e.definitions[t]=r(r({},e.definitions[t]||{}),o[t]),Ge(t,o[t]);var n=K[t];n&&Ge(n,o[t]),at()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var i=n[t],r=i.prefix,o=i.iconName,a=i.icon,c=a[2];e[r]||(e[r]={}),c.length>0&&c.forEach((function(t){"string"===typeof t&&(e[r][t]=a)})),e[r][o]=a})),e}}]),e}(),Lt=[],vt={},gt={},Mt=Object.keys(gt);function Vt(e,t){var n=t.mixoutsTo;return Lt=e,vt={},Object.keys(gt).forEach((function(e){-1===Mt.indexOf(e)&&delete gt[e]})),Lt.forEach((function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((function(e){"function"===typeof t[e]&&(n[e]=t[e]),"object"===o(t[e])&&Object.keys(t[e]).forEach((function(i){n[e]||(n[e]={}),n[e][i]=t[e][i]}))})),e.hooks){var i=e.hooks();Object.keys(i).forEach((function(e){vt[e]||(vt[e]=[]),vt[e].push(i[e])}))}e.provides&&e.provides(gt)})),n}function Ht(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var o=vt[e]||[];return o.forEach((function(e){t=e.apply(null,[t].concat(i))})),t}function zt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r=vt[e]||[];r.forEach((function(e){e.apply(null,n)}))}function yt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return gt[e]?gt[e].apply(null,t):void 0}function bt(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ut();if(t)return t=Ct(n,t)||t,Fe(_t.definitions,n,t)||Fe(Ie.styles,n,t)}var _t=new mt,xt=function(){ue.autoReplaceSvg=!1,ue.observeMutations=!1,zt("noAuto")},wt={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return E?(zt("beforeI2svg",e),yt("pseudoElements2svg",e),yt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot;!1===ue.autoReplaceSvg&&(ue.autoReplaceSvg=!0),ue.observeMutations=!0,Oe((function(){kt({autoReplaceSvgRoot:t}),zt("watch",e)}))}},St={icon:function(e){if(null===e)return null;if("object"===o(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ct(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=dt(e[0]);return{prefix:n,iconName:Ct(n,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(ue.familyPrefix,"-"))>-1||e.match(J))){var i=pt(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ut(),iconName:Ct(i.prefix,i.iconName)||i.iconName}}if("string"===typeof e){var r=ut();return{prefix:r,iconName:Ct(r,e)||e}}}},Nt={noAuto:xt,config:ue,dom:wt,parse:St,library:_t,findIconDefinition:bt,toHtml:De},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot,n=void 0===t?S:t;(Object.keys(Ie.styles).length>0||ue.autoFetchSvg)&&E&&ue.autoReplaceSvg&&Nt.dom.i2svg({node:n})};function Et(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return De(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(E){var t=S.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Tt(e){var t=e.children,n=e.main,i=e.mask,o=e.attributes,a=e.styles,c=e.transform;if(be(c)&&n.found&&!i.found){var s=n.width,C=n.height,l={x:s/C/2,y:.5};o["style"]=ye(r(r({},a),{},{"transform-origin":"".concat(l.x+c.x/16,"em ").concat(l.y+c.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function It(e){var t=e.prefix,n=e.iconName,i=e.children,o=e.attributes,a=e.symbol,c=!0===a?"".concat(t,"-").concat(ue.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:r(r({},o),{},{id:c}),children:i}]}]}function At(e){var t=e.icons,n=t.main,i=t.mask,o=e.prefix,a=e.iconName,c=e.transform,s=e.symbol,C=e.title,l=e.maskId,f=e.titleId,u=e.extra,h=e.watchable,d=void 0!==h&&h,p=i.found?i:n,m=p.width,L=p.height,v="fak"===o,g=[ue.replacementClass,a?"".concat(ue.familyPrefix,"-").concat(a):""].filter((function(e){return-1===u.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(u.classes).join(" "),M={children:[],attributes:r(r({},u.attributes),{},{"data-prefix":o,"data-icon":a,class:g,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(L)})},V=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/L*16*.0625,"em")}:{};d&&(M.attributes[O]=""),C&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||ge())},children:[C]}),delete M.attributes.title);var H=r(r({},M),{},{prefix:o,iconName:a,main:n,mask:i,maskId:l,transform:c,symbol:s,styles:r(r({},V),u.styles)}),z=i.found&&n.found?yt("generateAbstractMask",H)||{children:[],attributes:{}}:yt("generateAbstractIcon",H)||{children:[],attributes:{}},y=z.children,b=z.attributes;return H.children=y,H.attributes=b,s?It(H):Tt(H)}function Pt(e){var t=e.content,n=e.width,i=e.height,o=e.transform,a=e.title,c=e.extra,s=e.watchable,C=void 0!==s&&s,l=r(r(r({},c.attributes),a?{title:a}:{}),{},{class:c.classes.join(" ")});C&&(l[O]="");var f=r({},c.styles);be(o)&&(f["transform"]=xe({transform:o,startCentered:!0,width:n,height:i}),f["-webkit-transform"]=f["transform"]);var u=ye(f);u.length>0&&(l["style"]=u);var h=[];return h.push({tag:"span",attributes:l,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Rt(e){var t=e.content,n=e.title,i=e.extra,o=r(r(r({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=ye(i.styles);a.length>0&&(o["style"]=a);var c=[];return c.push({tag:"span",attributes:o,children:[t]}),n&&c.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),c}var Ot=Ie.styles;function Dt(e){var t=e[0],n=e[1],i=e.slice(4),r=l(i,1),o=r[0],a=null;return a=Array.isArray(o)?{tag:"g",attributes:{class:"".concat(ue.familyPrefix,"-").concat(re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ue.familyPrefix,"-").concat(re.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(ue.familyPrefix,"-").concat(re.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var Ft={found:!1,width:512,height:512};function jt(e,t){$||ue.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ut(e,t){var n=t;return"fa"===t&&null!==ue.styleDefault&&(t=ut()),new Promise((function(i,o){yt("missingIconAbstract");if("fa"===n){var a=lt(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ot[t]&&Ot[t][e]){var c=Ot[t][e];return i(Dt(c))}jt(e,t),i(r(r({},Ft),{},{icon:ue.showMissingIcons&&e&&yt("missingIconAbstract")||{}}))}))}var Bt=function(){},qt=ue.measurePerformance&&k&&k.mark&&k.measure?k:{mark:Bt,measure:Bt},Wt='FA "6.1.2"',$t=function(e){return qt.mark("".concat(Wt," ").concat(e," begins")),function(){return Gt(e)}},Gt=function(e){qt.mark("".concat(Wt," ").concat(e," ends")),qt.measure("".concat(Wt," ").concat(e),"".concat(Wt," ").concat(e," begins"),"".concat(Wt," ").concat(e," ends"))},Yt={begin:$t,end:Gt},Kt=function(){};function Xt(e){var t=e.getAttribute?e.getAttribute(O):null;return"string"===typeof t}function Jt(e){var t=e.getAttribute?e.getAttribute(j):null,n=e.getAttribute?e.getAttribute(U):null;return t&&n}function Qt(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(ue.replacementClass)}function Zt(){if(!0===ue.autoReplaceSvg)return on.replace;var e=on[ue.autoReplaceSvg];return e||on.replace}function en(e){return S.createElementNS("http://www.w3.org/2000/svg",e)}function tn(e){return S.createElement(e)}function nn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ceFn,i=void 0===n?"svg"===e.tag?en:tn:n;if("string"===typeof e)return S.createTextNode(e);var r=i(e.tag);Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])}));var o=e.children||[];return o.forEach((function(e){r.appendChild(nn(e,{ceFn:i}))})),r}function rn(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var on={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach((function(e){t.parentNode.insertBefore(nn(e),t)})),null===t.getAttribute(O)&&ue.keepOriginalSource){var n=S.createComment(rn(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Ve(t).indexOf(ue.replacementClass))return on.replace(e);var i=new RegExp("".concat(ue.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce((function(e,t){return t===ue.replacementClass||t.match(i)?e.toSvg.push(t):e.toNode.push(t),e}),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),0===r.toNode.length?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var o=n.map((function(e){return De(e)})).join("\n");t.setAttribute(O,""),t.innerHTML=o}};function an(e){e()}function cn(e,t){var n="function"===typeof t?t:Kt;if(0===e.length)n();else{var i=an;ue.mutateApproach===q&&(i=w.requestAnimationFrame||an),i((function(){var t=Zt(),i=Yt.begin("mutate");e.map(t),i(),n()}))}}var sn=!1;function Cn(){sn=!0}function ln(){sn=!1}var fn=null;function un(e){if(N&&ue.observeMutations){var t=e.treeCallback,n=void 0===t?Kt:t,i=e.nodeCallback,r=void 0===i?Kt:i,o=e.pseudoElementsCallback,a=void 0===o?Kt:o,c=e.observeMutationsRoot,s=void 0===c?S:c;fn=new N((function(e){if(!sn){var t=ut();Me(e).forEach((function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Xt(e.addedNodes[0])&&(ue.searchPseudoElements&&a(e.target),n(e.target)),"attributes"===e.type&&e.target.parentNode&&ue.searchPseudoElements&&a(e.target.parentNode),"attributes"===e.type&&Xt(e.target)&&~ie.indexOf(e.attributeName))if("class"===e.attributeName&&Jt(e.target)){var i=pt(Ve(e.target)),o=i.prefix,c=i.iconName;e.target.setAttribute(j,o||t),c&&e.target.setAttribute(U,c)}else Qt(e.target)&&r(e.target)}))}})),E&&fn.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hn(){fn&&fn.disconnect()}function dn(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((function(e,t){var n=t.split(":"),i=n[0],r=n.slice(1);return i&&r.length>0&&(e[i]=r.join(":").trim()),e}),{})),n}function pn(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=void 0!==e.innerText?e.innerText.trim():"",r=pt(Ve(e));return r.prefix||(r.prefix=ut()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=st(r.prefix,e.innerText)||ct(r.prefix,qe(e.innerText))),!r.iconName&&ue.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function mn(e){var t=Me(e.attributes).reduce((function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e}),{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return ue.autoA11y&&(n?t["aria-labelledby"]="".concat(ue.replacementClass,"-title-").concat(i||ge()):(t["aria-hidden"]="true",t["focusable"]="false")),t}function Ln(){return{iconName:null,title:null,titleId:null,prefix:null,transform:me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=pn(e),i=n.iconName,o=n.prefix,a=n.rest,c=mn(e),s=Ht("parseNodeAttributes",{},e),C=t.styleParser?dn(e):[];return r({iconName:i,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:C,attributes:c}},s)}var gn=Ie.styles;function Mn(e){var t="nest"===ue.autoReplaceSvg?vn(e,{styleParser:!1}):vn(e);return~t.extra.classes.indexOf(Q)?yt("generateLayersText",e,t):yt("generateSvgReplacementMutation",e,t)}function Vn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!E)return Promise.resolve();var n=S.documentElement.classList,i=function(e){return n.add("".concat(B,"-").concat(e))},r=function(e){return n.remove("".concat(B,"-").concat(e))},o=ue.autoFetchSvg?Object.keys(G):Object.keys(gn);o.includes("fa")||o.push("fa");var a=[".".concat(Q,":not([").concat(O,"])")].concat(o.map((function(e){return".".concat(e,":not([").concat(O,"])")}))).join(", ");if(0===a.length)return Promise.resolve();var c=[];try{c=Me(e.querySelectorAll(a))}catch(Zn){}if(!(c.length>0))return Promise.resolve();i("pending"),r("complete");var s=Yt.begin("onTree"),C=c.reduce((function(e,t){try{var n=Mn(t);n&&e.push(n)}catch(Zn){$||"MissingIcon"===Zn.name&&console.error(Zn)}return e}),[]);return new Promise((function(e,n){Promise.all(C).then((function(n){cn(n,(function(){i("active"),i("complete"),r("pending"),"function"===typeof t&&t(),s(),e()}))})).catch((function(e){s(),n(e)}))}))}function Hn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Mn(e).then((function(e){e&&cn([e],t)}))}function zn(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(t||{}).icon?t:bt(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:bt(o||{})),e(i,r(r({},n),{},{mask:o}))}}var yn=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,i=void 0===n?me:n,o=t.symbol,a=void 0!==o&&o,c=t.mask,s=void 0===c?null:c,C=t.maskId,l=void 0===C?null:C,f=t.title,u=void 0===f?null:f,h=t.titleId,d=void 0===h?null:h,p=t.classes,m=void 0===p?[]:p,L=t.attributes,v=void 0===L?{}:L,g=t.styles,M=void 0===g?{}:g;if(e){var V=e.prefix,H=e.iconName,z=e.icon;return Et(r({type:"icon"},e),(function(){return zt("beforeDOMElementCreation",{iconDefinition:e,params:t}),ue.autoA11y&&(u?v["aria-labelledby"]="".concat(ue.replacementClass,"-title-").concat(d||ge()):(v["aria-hidden"]="true",v["focusable"]="false")),At({icons:{main:Dt(z),mask:s?Dt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:H,transform:r(r({},me),i),symbol:a,title:u,maskId:l,titleId:d,extra:{attributes:v,styles:M,classes:m}})}))}},bn={mixout:function(){return{icon:zn(yn)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Vn,e.nodeCallback=Hn,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=void 0===t?S:t,i=e.callback,r=void 0===i?function(){}:i;return Vn(n,r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,i=t.title,r=t.titleId,o=t.prefix,a=t.transform,c=t.symbol,s=t.mask,C=t.maskId,f=t.extra;return new Promise((function(t,u){Promise.all([Ut(n,o),s.iconName?Ut(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(s){var u=l(s,2),h=u[0],d=u[1];t([e,At({icons:{main:h,mask:d},prefix:o,iconName:n,transform:a,symbol:c,maskId:C,title:i,titleId:r,extra:f,watchable:!0})])})).catch(u)}))},e.generateAbstractIcon=function(e){var t,n=e.children,i=e.attributes,r=e.main,o=e.transform,a=e.styles,c=ye(a);return c.length>0&&(i["style"]=c),be(o)&&(t=yt("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(t||r.icon),{children:n,attributes:i}}}},_n={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classes,i=void 0===n?[]:n;return Et({type:"layer"},(function(){zt("beforeDOMElementCreation",{assembler:e,params:t});var n=[];return e((function(e){Array.isArray(e)?e.map((function(e){n=n.concat(e.abstract)})):n=n.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(ue.familyPrefix,"-layers")].concat(f(i)).join(" ")},children:n}]}))}}}},xn={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.title,i=void 0===n?null:n,r=t.classes,o=void 0===r?[]:r,a=t.attributes,c=void 0===a?{}:a,s=t.styles,C=void 0===s?{}:s;return Et({type:"counter",content:e},(function(){return zt("beforeDOMElementCreation",{content:e,params:t}),Rt({content:e.toString(),title:i,extra:{attributes:c,styles:C,classes:["".concat(ue.familyPrefix,"-layers-counter")].concat(f(o))}})}))}}}},wn={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,i=void 0===n?me:n,o=t.title,a=void 0===o?null:o,c=t.classes,s=void 0===c?[]:c,C=t.attributes,l=void 0===C?{}:C,u=t.styles,h=void 0===u?{}:u;return Et({type:"text",content:e},(function(){return zt("beforeDOMElementCreation",{content:e,params:t}),Pt({content:e,transform:r(r({},me),i),title:a,extra:{attributes:l,styles:h,classes:["".concat(ue.familyPrefix,"-layers-text")].concat(f(s))}})}))}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.title,i=t.transform,r=t.extra,o=null,a=null;if(T){var c=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();o=s.width/c,a=s.height/c}return ue.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Pt({content:e.innerHTML,width:o,height:a,transform:i,title:n,extra:r,watchable:!0})])}}},Sn=new RegExp('"',"ug"),Nn=[1105920,1112319];function kn(e){var t=e.replace(Sn,""),n=We(t,0),i=n>=Nn[0]&&n<=Nn[1],r=2===t.length&&t[0]===t[1];return{value:qe(r?t[0]:t),isSecondary:i||r}}function En(e,t){var n="".concat(F).concat(t.replace(":","-"));return new Promise((function(i,o){if(null!==e.getAttribute(n))return i();var a=Me(e.children),c=a.filter((function(e){return e.getAttribute(D)===t}))[0],s=w.getComputedStyle(e,t),C=s.getPropertyValue("font-family").match(Z),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(c&&!C)return e.removeChild(c),i();if(C&&"none"!==f&&""!==f){var u=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(C[2])?Y[C[2].toLowerCase()]:ee[l],d=kn(u),p=d.value,m=d.isSecondary,L=C[0].startsWith("FontAwesome"),v=ct(h,p),g=v;if(L){var M=ft(p);M.iconName&&M.prefix&&(v=M.iconName,h=M.prefix)}if(!v||m||c&&c.getAttribute(j)===h&&c.getAttribute(U)===g)i();else{e.setAttribute(n,g),c&&e.removeChild(c);var V=Ln(),H=V.extra;H.attributes[D]=t,Ut(v,h).then((function(o){var a=At(r(r({},V),{},{icons:{main:o,mask:ht()},prefix:h,iconName:g,extra:H,watchable:!0})),c=S.createElement("svg");"::before"===t?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=a.map((function(e){return De(e)})).join("\n"),e.removeAttribute(n),i()})).catch(o)}}else i()}))}function Tn(e){return Promise.all([En(e,"::before"),En(e,"::after")])}function In(e){return e.parentNode!==document.head&&!~W.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(D)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function An(e){if(E)return new Promise((function(t,n){var i=Me(e.querySelectorAll("*")).filter(In).map(Tn),r=Yt.begin("searchPseudoElements");Cn(),Promise.all(i).then((function(){r(),ln(),t()})).catch((function(){r(),ln(),n()}))}))}var Pn={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=An,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=void 0===t?S:t;ue.searchPseudoElements&&An(n)}}},Rn=!1,On={mixout:function(){return{dom:{unwatch:function(){Cn(),Rn=!0}}}},hooks:function(){return{bootstrap:function(){un(Ht("mutationObserverCallbacks",{}))},noAuto:function(){hn()},watch:function(e){var t=e.observeMutationsRoot;Rn?ln():un(Ht("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Dn=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),i=n[0],r=n.slice(1).join("-");if(i&&"h"===r)return e.flipX=!0,e;if(i&&"v"===r)return e.flipY=!0,e;if(r=parseFloat(r),isNaN(r))return e;switch(i){case"grow":e.size=e.size+r;break;case"shrink":e.size=e.size-r;break;case"left":e.x=e.x-r;break;case"right":e.x=e.x+r;break;case"up":e.y=e.y-r;break;case"down":e.y=e.y+r;break;case"rotate":e.rotate=e.rotate+r;break}return e}),t)},Fn={mixout:function(){return{parse:{transform:function(e){return Dn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-transform");return n&&(e.transform=Dn(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,i=e.containerWidth,o=e.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),C="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(c," ").concat(s," ").concat(C)},f={transform:"translate(".concat(o/2*-1," -256)")},u={outer:a,inner:l,path:f};return{tag:"g",attributes:r({},u.outer),children:[{tag:"g",attributes:r({},u.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:r(r({},t.icon.attributes),u.path)}]}]}}}},jn={x:0,y:0,width:"100%",height:"100%"};function Un(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bn(e){return"g"===e.tag?e.children:[e]}var qn={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-mask"),i=n?pt(n.split(" ").map((function(e){return e.trim()}))):ht();return i.prefix||(i.prefix=ut()),e.mask=i,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,i=e.main,o=e.mask,a=e.maskId,c=e.transform,s=i.width,C=i.icon,l=o.width,f=o.icon,u=_e({transform:c,containerWidth:l,iconWidth:s}),h={tag:"rect",attributes:r(r({},jn),{},{fill:"white"})},d=C.children?{children:C.children.map(Un)}:{},p={tag:"g",attributes:r({},u.inner),children:[Un(r({tag:C.tag,attributes:r(r({},C.attributes),u.path)},d))]},m={tag:"g",attributes:r({},u.outer),children:[p]},L="mask-".concat(a||ge()),v="clip-".concat(a||ge()),g={tag:"mask",attributes:r(r({},jn),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,m]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Bn(f)},g]};return t.push(M,{tag:"rect",attributes:r({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(L,")")},jn)}),{children:t,attributes:n}}}},Wn={provides:function(e){var t=!1;w.matchMedia&&(t=w.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:r(r({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=r(r({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:r(r({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:r(r({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:r(r({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:r(r({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:r(r({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:r(r({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:r(r({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},$n={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-symbol"),i=null!==n&&(""===n||n);return e["symbol"]=i,e}}}},Gn=[Ee,bn,_n,xn,wn,Pn,On,Fn,qn,Wn,$n];Vt(Gn,{mixoutsTo:Nt});Nt.noAuto;var Yn=Nt.config,Kn=Nt.library,Xn=(Nt.dom,Nt.parse),Jn=(Nt.findIconDefinition,Nt.toHtml,Nt.icon),Qn=(Nt.layer,Nt.text);Nt.counter},8321:function(e,t,n){"use strict";n.d(t,{mRB:function(){return dA}});
/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,o,"app")},4028:function(e,t,n){"use strict";n.d(t,{hJ:function(){return Je},Xb:function(){return Ct},v0:function(){return ui},Aj:function(){return ft},e5:function(){return lt},rh:function(){return fn},w7:function(){return ut}});n(1703);var i=n(223),r=n(7077);function o(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var a=n(5168),c=n(7142);function s(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C=s,l=new i.LL("auth","Firebase",s()),f=new a.Yd("@firebase/auth");function u(e,...t){f.logLevel<=a["in"].ERROR&&f.error(`Auth (${r.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw L(e,...t)}function d(e,...t){return L(e,...t)}function p(e,t,n){const r=Object.assign(Object.assign({},C()),{[t]:n}),o=new i.LL("auth","Firebase",r);return o.create(t,{appName:e.name})}function m(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&h(e,"argument-error"),p(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function L(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw L(t,...n)}function g(e){const t="INTERNAL ASSERTION FAILED: "+e;throw u(t),new Error(t)}function M(e,t){e||g(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=new Map;function H(e){M(e instanceof Function,"Expected a class definition");let t=V.get(e);return t?(M(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,V.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){const n=(0,r.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const o=n.initialize({options:t});return o}function y(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(H);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(_()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,M(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return w()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){M(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},I=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,r,o={}){return R(e,o,(async()=>{let o={},a={};r&&("GET"===t?a=r:o={body:JSON.stringify(r)});const c=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),E.fetch()(D(e,e.config.apiHost,n,c),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},o))}))}async function R(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},T),t);try{const t=new F(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw j(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw j(e,"user-disabled",o);const c=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw p(e,c,a);h(e,c)}}catch(o){if(o instanceof i.ZR)throw o;h(e,"network-request-failed")}}async function O(e,t,n,i,r={}){const o=await P(e,t,n,i,r);return"mfaPendingCredential"in o&&h(e,"multi-factor-auth-required",{_serverResponse:o}),o}function D(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?k(e.config,r):`${e.config.apiScheme}://${r}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(d(this.auth,"network-request-failed"))),I.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=d(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),o=G(r);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a="object"===typeof o.firebase?o.firebase:void 0,c=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:o,token:r,authTime:q($(o.auth_time)),issuedAtTime:q($(o.iat)),expirationTime:q($(o.exp)),signInProvider:c||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function $(e){return 1e3*Number(e)}function G(e){var t;const[n,r,o]=e.split(".");if(void 0===n||void 0===r||void 0===o)return u("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(r);return e?JSON.parse(e):(u("Failed to decode base64 JWT payload"),null)}catch(a){return u("Caught error parsing JWT payload as JSON",null===(t=a)||void 0===t?void 0:t.toString()),null}}function Y(e){const t=G(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&X(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,i=await e.getIdToken(),r=await K(e,B(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ne(o.providerUserInfo):[],c=te(e.providerData,a),s=e.isAnonymous,C=!(e.email&&o.passwordHash)&&!(null===c||void 0===c?void 0:c.length),l=!!s&&C,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function ee(e){const t=(0,i.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t){const n=await R(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,a=D(e,r,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",E.fetch()(a,{method:"POST",headers:c,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ie(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ae{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Q(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,a,c,s,C;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(i=t.email)&&void 0!==i?i:void 0,u=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,d=null!==(a=t.tenantId)&&void 0!==a?a:void 0,p=null!==(c=t._redirectEventId)&&void 0!==c?c:void 0,m=null!==(s=t.createdAt)&&void 0!==s?s:void 0,L=null!==(C=t.lastLoginAt)&&void 0!==C?C:void 0,{uid:g,emailVerified:M,isAnonymous:V,providerData:H,stsTokenManager:z}=t;v(g&&z,e,"internal-error");const y=re.fromJSON(this.name,z);v("string"===typeof g,e,"internal-error"),oe(l,e.name),oe(f,e.name),v("boolean"===typeof M,e,"internal-error"),v("boolean"===typeof V,e,"internal-error"),oe(u,e.name),oe(h,e.name),oe(d,e.name),oe(p,e.name),oe(m,e.name),oe(L,e.name);const b=new ae({uid:g,auth:e,email:f,emailVerified:M,displayName:l,isAnonymous:V,photoURL:h,phoneNumber:u,tenantId:d,stsTokenManager:y,createdAt:m,lastLoginAt:L});return H&&Array.isArray(H)&&(b.providerData=H.map((e=>Object.assign({},e)))),p&&(b._redirectEventId=p),b}static async _fromIdTokenResponse(e,t,n=!1){const i=new re;i.updateFromServerResponse(t);const r=new ae({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Z(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ce.type="NONE";const se=ce;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Ce(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ce("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(H(se),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||H(se);const o=Ce(n,e.config.apiKey,e.name);let a=null;for(const C of t)try{const t=await C._get(o);if(t){const n=ae._fromJSON(e,t);C!==r&&(a=n),r=C;break}}catch(s){}const c=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&c.length?(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(s){}}))),new le(r,e,n)):new le(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Le(t))return"Blackberry";if(ve(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=(0,i.z$)()){return/firefox\//i.test(e)}function he(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,i.z$)()){return/crios\//i.test(e)}function pe(e=(0,i.z$)()){return/iemobile/i.test(e)}function me(e=(0,i.z$)()){return/android/i.test(e)}function Le(e=(0,i.z$)()){return/blackberry/i.test(e)}function ve(e=(0,i.z$)()){return/webos/i.test(e)}function ge(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Me(e=(0,i.z$)()){var t;return ge(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ve(){return(0,i.w1)()&&10===document.documentMode}function He(e=(0,i.z$)()){return ge(e)||me(e)||ve(e)||Le(e)||/windows phone/i.test(e)||pe(e)}function ze(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e,t=[]){let n;switch(e){case"Browser":n=fe((0,i.z$)());break;case"Worker":n=`${fe((0,i.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(i){n.reverse();for(const e of n)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=i)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new we(this),this.idTokenSubscription=new we(this),this.beforeStateQueue=new be(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=H(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===i||void 0===i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null===a||void 0===a?void 0:a.user)||(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Z(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(H(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&H(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[H(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ye(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function xe(e){return(0,i.m9)(e)}class we{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return g("not implemented")}_getIdTokenResponse(e){return g("not implemented")}_linkToIdToken(e,t){return g("not implemented")}_getReauthenticationResolver(e){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ke(e,t){return O(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function Te(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Se{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ie(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ie(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ke(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ee(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ne(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Te(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return O(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="http://localhost";class Re extends Se{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Re(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=o(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Re(n,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ae(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ae(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ae(e,t)}buildRequest(){const e={requestUri:Pe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function De(e,t){return O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function Fe(e,t){const n=await O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const je={["USER_NOT_FOUND"]:"user-not-found"};async function Ue(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),je)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Se{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Be({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Be({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ue(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Be({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function We(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],o=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return o||r||n||t||e}class $e{constructor(e){var t,n,r,o,a,c;const s=(0,i.zd)((0,i.pd)(e)),C=null!==(t=s["apiKey"])&&void 0!==t?t:null,l=null!==(n=s["oobCode"])&&void 0!==n?n:null,f=qe(null!==(r=s["mode"])&&void 0!==r?r:null);v(C&&l&&f,"argument-error"),this.apiKey=C,this.operation=f,this.code=l,this.continueUrl=null!==(o=s["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(a=s["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(c=s["tenantId"])&&void 0!==c?c:null}static parseLink(e){const t=We(e);try{return new $e(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,t){return Ie._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=$e.parseLink(t);return v(n,"argument-error"),Ie._fromEmailAndCode(e,n.code,n.tenantId)}}Ge.PROVIDER_ID="password",Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ke{constructor(){super("facebook.com")}static credential(e){return Re._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Re._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(i){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ke{constructor(){super("github.com")}static credential(e){return Re._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch(t){return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com",Qe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Ke{constructor(){super("twitter.com")}static credential(e,t){return Re._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ze.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function et(e,t){return O(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.TWITTER_SIGN_IN_METHOD="twitter.com",Ze.PROVIDER_ID="twitter.com";class tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ae._fromIdTokenResponse(e,n,i),o=nt(n),a=new tt({user:r,providerId:o,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=nt(n);return new tt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function nt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends i.ZR{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,it.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new it(e,t,n,i)}}function rt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw it._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const i=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return tt._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function at(e,t,n=!1){var i;const{auth:r}=e,o="reauthenticate";try{const i=await K(e,rt(r,o,t,e),n);v(i.idToken,r,"internal-error");const a=G(i.idToken);v(a,r,"internal-error");const{sub:c}=a;return v(e.uid===c,r,"user-mismatch"),tt._forOperation(e,o,i)}catch(a){throw"auth/user-not-found"===(null===(i=a)||void 0===i?void 0:i.code)&&h(r,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t,n=!1){const i="signIn",r=await rt(e,i,t),o=await tt._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ct(xe(e),t)}async function Ct(e,t,n){const i=xe(e),r=await et(i,{returnSecureToken:!0,email:t,password:n}),o=await tt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}function lt(e,t,n){return st((0,i.m9)(e),Ge.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}function ut(e){return(0,i.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}function dt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,t))}new WeakMap;const pt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pt,"1"),this.storage.removeItem(pt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){const e=(0,i.z$)();return he(e)||ge(e)}const vt=1e3,gt=10;class Mt extends mt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lt()&&ze(),this.fallbackToPolling=He(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ve()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gt):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mt.type="LOCAL";const Vt=Mt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends mt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ht.type="SESSION";const zt=Ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new bt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map((async e=>e(t.origin,r))),c=await yt(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.receivers=[];class xt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((a,c)=>{const s=_t("",20);i.port1.start();const C=setTimeout((()=>{c(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===s)switch(t.data.status){case"ack":clearTimeout(C),r=setTimeout((()=>{c(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(C),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:s,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function St(e){wt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return"undefined"!==typeof wt()["WorkerGlobalScope"]&&"function"===typeof wt()["importScripts"]}async function kt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Et(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Tt(){return Nt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="firebaseLocalStorageDb",At=1,Pt="firebaseLocalStorage",Rt="fbase_key";class Ot{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Dt(e,t){return e.transaction([Pt],t?"readwrite":"readonly").objectStore(Pt)}function Ft(){const e=indexedDB.deleteDatabase(It);return new Ot(e).toPromise()}function jt(){const e=indexedDB.open(It,At);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Pt,{keyPath:Rt})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Pt)?t(n):(n.close(),await Ft(),t(await jt()))}))}))}async function Ut(e,t,n){const i=Dt(e,!0).put({[Rt]:t,value:n});return new Ot(i).toPromise()}async function Bt(e,t){const n=Dt(e,!1).get(t),i=await new Ot(n).toPromise();return void 0===i?null:i.value}function qt(e,t){const n=Dt(e,!0).delete(t);return new Ot(n).toPromise()}const Wt=800,$t=3;class Gt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await jt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>$t)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bt._getInstance(Tt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await kt(),!this.activeServiceWorker)return;this.sender=new xt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Et()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jt();return await Ut(e,pt,"1"),await qt(e,pt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ut(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Bt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>qt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Dt(e,!1).getAll();return new Ot(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gt.type="LOCAL";const Yt=Gt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}function Xt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Qt(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=d("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Jt().appendChild(i)}))}function Zt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Zt("rcb"),new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en="recaptcha";async function tn(e,t,n){var i;const r=await n.verify();try{let o;if(v("string"===typeof r,e,"argument-error"),v(n.type===en,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const a=await Kt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Oe(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(e){this.providerId=nn.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return tn(this.auth,e,(0,i.m9)(t))}static credential(e,t){return Be._fromVerification(e,t)}static credentialFromResult(e){const t=e;return nn.credentialFromTaggedObject(t)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Be._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(e,t){return t?H(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.PROVIDER_ID="phone",nn.PHONE_SIGN_IN_METHOD="phone";class on extends Se{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ae(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ae(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ae(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function an(e){return ct(e.auth,new on(e),e.bypassAuthState)}function cn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),at(n,new on(e),e.bypassAuthState)}async function sn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ot(n,new on(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:a}=e;if(o)return void this.reject(o);const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(s){this.reject(s)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return an;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return cn;default:h(this.auth,"internal-error")}}resolve(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new N(2e3,1e4);async function fn(e,t,n){const i=xe(e);m(e,t,Ye);const r=rn(i,n),o=new un(i,"signInViaPopup",t,r);return o.executeNotNull()}class un extends Cn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){M(1===this.filter.length,"Popup operations only handle one event");const e=_t();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(d(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ln.get())};e()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="pendingRedirect",dn=new Map;class pn extends Cn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const t=await mn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function mn(e,t){const n=gn(t),i=vn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function Ln(e,t){dn.set(e._key(),t)}function vn(e){return H(e._redirectPersistence)}function gn(e){return Ce(hn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e,t,n=!1){const i=xe(e),r=rn(i,t),o=new pn(i,r,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vn=6e5;class Hn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!bn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(d(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(zn(e))}saveEventToCache(e){this.cachedEventUids.add(zn(e)),this.lastProcessedEventTime=Date.now()}}function zn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function bn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wn=/^https?/;async function Sn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _n(e);for(const i of t)try{if(Nn(i))return}catch(n){}h(e,"unauthorized-domain")}function Nn(e){const t=b(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!wn.test(n))return!1;if(xn.test(e))return i===e;const r=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+r+"|"+r+")$","i");return o.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new N(3e4,6e4);function En(){const e=wt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Tn(e){return new Promise(((t,n)=>{var i,r,o;function a(){En(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{En(),n(d(e,"network-request-failed"))},timeout:kn.get()})}if(null===(r=null===(i=wt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=wt().gapi)||void 0===o?void 0:o.load)){const t=Zt("iframefcb");return wt()[t]=()=>{gapi.load?a():n(d(e,"network-request-failed"))},Qt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw In=null,e}))}let In=null;function An(e){return In=In||Tn(e),In}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new N(5e3,15e3),Rn="__/auth/iframe",On="emulator/auth/iframe",Dn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,On):`https://${e.config.authDomain}/${Rn}`,o={apiKey:t.apiKey,appName:e.name,v:r.Jn},a=Fn.get(e.config.apiHost);a&&(o.eid=a);const c=e._getFrameworks();return c.length&&(o.fw=c.join(",")),`${n}?${(0,i.xO)(o).slice(1)}`}async function Un(e){const t=await An(e),n=wt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:jn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dn,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=d(e,"network-request-failed"),o=wt().setTimeout((()=>{i(r)}),Pn.get());function a(){wt().clearTimeout(o),n(t)}t.ping(a).then(a,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qn=500,Wn=600,$n="_blank",Gn="http://localhost";class Yn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Kn(e,t,n,r=qn,o=Wn){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const C=Object.assign(Object.assign({},Bn),{width:r.toString(),height:o.toString(),top:a,left:c}),l=(0,i.z$)().toLowerCase();n&&(s=de(l)?$n:n),ue(l)&&(t=t||Gn,C.scrollbars="yes");const f=Object.entries(C).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Me(l)&&"_self"!==s)return Xn(t||"",s),new Yn(null);const u=window.open(t||"",s,f);v(u,e,"popup-blocked");try{u.focus()}catch(h){}return new Yn(u)}function Xn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="__/auth/handler",Qn="emulator/auth/handler";function Zn(e,t,n,o,a,c){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.Jn,eventId:a};if(t instanceof Ye){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(c||{}))s[e]=t}if(t instanceof Ke){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const C=s;for(const i of Object.keys(C))void 0===C[i]&&delete C[i];return`${ei(e)}?${(0,i.xO)(C).slice(1)}`}function ei({config:e}){return e.emulator?k(e,Qn):`https://${e.authDomain}/${Jn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="webStorageSupport";class ni{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zt,this._completeRedirectFn=Mn,this._overrideRedirectResult=Ln}async _openPopup(e,t,n,i){var r;M(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Zn(e,t,n,b(),i);return Kn(e,o,_t())}async _openRedirect(e,t,n,i){return await this._originValidation(e),St(Zn(e,t,n,b(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(M(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Un(e),n=new Hn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ti,{type:ti},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ti];void 0!==r&&t(!!r),h(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return He()||he()||ge()}}const ii=ni;class ri{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return g("unexpected MultiFactorSessionType")}}}class oi extends ri{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new oi(e)}_finalizeEnroll(e,t,n){return dt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Xt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ai{constructor(){}static assertion(e){return oi._fromCredential(e)}}ai.FACTOR_ID="phone";var ci="@firebase/auth",si="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fi(e){(0,r.Xd)(new c.wA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:o,authDomain:a}=i.options;return((t,i)=>{v(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:t.name});const r={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ye(e)},c=new _e(t,i,r);return y(c,n),c})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new c.wA("auth-internal",(e=>{const t=xe(e.getProvider("auth").getImmediate());return(e=>new Ci(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(ci,si,li(e)),(0,r.KN)(ci,si,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e=(0,r.Mq)()){const t=(0,r.qX)(e,"auth");return t.isInitialized()?t.getImmediate():z(e,{popupRedirectResolver:ii,persistence:[Yt,Vt,zt]})}fi("Browser")},1178:function(e,t,n){"use strict";n.d(t,{N8:function(){return ac},jM:function(){return Qa},iH:function(){return qa},Od:function(){return $a},t8:function(){return Ga},Vx:function(){return Ya}});n(1703);var i=n(7077),r=n(7142),o=n(223),a=n(5168);const c="@firebase/database",s="0.13.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C="";function l(e){C=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.Pz)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new f(t)}}catch(t){}return new u},d=h("localStorage"),p=h("sessionStorage"),m=new a.Yd("@firebase/database"),L=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,o.dS)(e),n=new o.gQ;n.update(t);const i=n.digest();return o.US.encodeByteArray(i)},g=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=g.apply(null,i):t+="object"===typeof i?(0,o.Pz)(i):i,t+=" "}return t};let M=null,V=!0;const H=function(e,t){(0,o.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=a["in"].VERBOSE,M=m.log.bind(m),t&&p.set("logging_enabled",!0)):"function"===typeof e?M=e:(M=null,p.remove("logging_enabled"))},z=function(...e){if(!0===V&&(V=!1,null===M&&!0===p.get("logging_enabled")&&H(!0)),M){const t=g.apply(null,e);M(t)}},y=function(e){return function(...t){z(e,...t)}},b=function(...e){const t="FIREBASE INTERNAL ERROR: "+g(...e);m.error(t)},_=function(...e){const t=`FIREBASE FATAL ERROR: ${g(...e)}`;throw m.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+g(...e);m.warn(t)},w=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},S=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N=function(e){if((0,o.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},k="[MIN_NAME]",E="[MAX_NAME]",T=function(e,t){if(e===t)return 0;if(e===k||t===E)return-1;if(t===k||e===E)return 1;{const n=$(e),i=$(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},I=function(e,t){return e===t?0:e<t?-1:1},A=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.Pz)(t))},P=function(e){if("object"!==typeof e||null===e)return(0,o.Pz)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,o.Pz)(t[i]),n+=":",n+=P(e[t[i]]);return n+="}",n},R=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function O(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const D=function(e){(0,o.hu)(!S(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,a,c,s,C;0===e?(a=0,c=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),i),a=s+i,c=Math.round(e*Math.pow(2,n-s)-Math.pow(2,n))):(a=0,c=Math.round(e/Math.pow(2,1-i-n))));const l=[];for(C=n;C;C-=1)l.push(c%2?1:0),c=Math.floor(c/2);for(C=t;C;C-=1)l.push(a%2?1:0),a=Math.floor(a/2);l.push(r?1:0),l.reverse();const f=l.join("");let u="";for(C=0;C<64;C+=8){let e=parseInt(f.substr(C,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()},F=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},j=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function U(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const B=new RegExp("^-?(0*)\\d{1,10}$"),q=-2147483648,W=2147483647,$=function(e){if(B.test(e)){const t=Number(e);if(t>=q&&t<=W)return t}return null},G=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw x("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Y=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},K=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}}class Q{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",ae="p",ce="ac",se="websocket",Ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e,t,n,i,r=!1,o="",a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=d.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&d.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fe(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function ue(e,t,n){let i;if((0,o.hu)("string"===typeof t,"typeof type must == string"),(0,o.hu)("object"===typeof n,"typeof params must == object"),t===se)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}fe(e)&&(n["ns"]=e.namespace);const r=[];return O(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de={},pe={};function me(e){const t=e.toString();return de[t]||(de[t]=new he),de[t]}function Le(e,t){const n=e.toString();return pe[n]||(pe[n]=t()),pe[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="start",Me="close",Ve="pLPCommand",He="pRTLPCB",ze="id",ye="pw",be="ser",_e="cb",xe="seg",we="ts",Se="d",Ne="dframe",ke=1870,Ee=30,Te=ke-Ee,Ie=25e3,Ae=3e4;class Pe{constructor(e,t,n,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=y(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[ce]=this.appCheckToken),ue(t,Ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Ae)),N((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Re(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ge)this.id=n,this.password=i;else{if(t!==Me)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ge]="t",e[be]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[_e]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[ae]=this.applicationId),this.appCheckToken&&(e[ce]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pe.forceAllow_=!0}static forceDisallow(){Pe.forceDisallow_=!0}static isAvailable(){return!(0,o.Yr)()&&(!!Pe.forceAllow_||!Pe.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!F()&&!j())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.h$)(t),i=R(n,Te);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ne]="t",n[ze]=e,n[ye]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.Pz)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Re{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=L(),window[Ve+this.uniqueCallbackIdentifier]=e,window[He+this.uniqueCallbackIdentifier]=t,this.myIFrame=Re.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){z("frame writing exception"),r.stack&&z(r.stack),z(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||z("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ze]=this.myID,e[ye]=this.myPW,e[be]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ee+n.length<=ke))break;{const e=this.pendingSegs.shift();n=n+"&"+xe+i+"="+e.seg+"&"+we+i+"="+e.ts+"&"+Se+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Ie)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,o.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=16384,De=45e3;let Fe=null;"undefined"!==typeof MozWebSocket?Fe=MozWebSocket:"undefined"!==typeof WebSocket&&(Fe=WebSocket);class je{constructor(e,t,n,i,r,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=y(this.connId),this.stats_=me(t),this.connURL=je.connectionURL_(t,o,a,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const a={};return a[ee]=Z,!(0,o.Yr)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(a[ne]=ie),t&&(a[te]=t),n&&(a[oe]=n),i&&(a[ce]=i),r&&(a[ae]=r),ue(e,se,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,d.set("previous_websocket_failure",!0);try{let e;if((0,o.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Z}/${C}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Fe(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Fe&&!je.forceDisallow_}static previouslyFailed(){return d.isInMemoryStorage||!0===d.get("previous_websocket_failure")}markConnectionHealthy(){d.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=R(t,Oe);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(De))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2,je.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Pe,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=je&&je["isAvailable"]();let n=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[je];else{const e=this.transports_=[];for(const t of Ue.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ue.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ue.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Be=6e4,qe=5e3,We=10240,$e=102400,Ge="t",Ye="d",Ke="s",Xe="r",Je="e",Qe="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,o,a,c,s,C){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=s,this.lastSessionId=C,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=y("c:"+this.id+":"),this.transportManager_=new Ue(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=K((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$e?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>We?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Xe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Qe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=A("t",e),n=A("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=A("t",e),n=A("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=A(Ge,e);if(Ye in e){const n=e[Ye];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ke?this.onConnectionShutdown_(n):t===Xe?this.onReset_(n):t===Je?b("Server Error: "+n):t===Qe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):b("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),K((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Be))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):K((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(qe))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(d.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,o.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new at}getInitialEvent(e){return(0,o.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=32,st=768;class Ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new Ct("")}function ft(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ut(e){return e.pieces_.length-e.pieceNum_}function ht(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ct(e.pieces_,t)}function dt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Lt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ct(t,0)}function vt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ct(n,0)}function gt(e){return e.pieceNum_>=e.pieces_.length}function Mt(e,t){const n=ft(e),i=ft(t);if(null===n)return t;if(n===i)return Mt(ht(e),ht(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Vt(e,t){const n=mt(e,0),i=mt(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=T(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Ht(e,t){if(ut(e)!==ut(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function zt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ut(e)>ut(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class yt{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.ug)(this.parts_[n]);xt(this)}}function bt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.ug)(t),xt(e)}function _t(e){const t=e.parts_.pop();e.byteLength_-=(0,o.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function xt(e){if(e.byteLength_>st)throw new Error(e.errorPrefix_+"has a key path longer than "+st+" bytes ("+e.byteLength_+").");if(e.parts_.length>ct)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ct+") or object contains a cycle "+wt(e))}function wt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new St}getInitialEvent(e){return(0,o.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1e3,kt=3e5,Et=3e4,Tt=1.3,It=3e4,At="server_kill",Pt=3;class Rt extends rt{constructor(e,t,n,i,r,a,c,s){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=c,this.authOverride_=s,this.id=Rt.nextPersistentConnectionId_++,this.log_=y("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=kt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,s&&!(0,o.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");St.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&at.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,o.Pz)(r)),(0,o.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new o.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.hu)(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(a).set(r,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},o="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(o,r,(r=>{const o=r["d"],a=r["s"];Rt.warnOnListenWarnings_(o,t);const c=this.listens.get(n)&&this.listens.get(n).get(i);c===e&&(this.log_("listen response",r),"ok"!==a&&this.removeListen_(n,i),e.onComplete&&e.onComplete(a,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.r3)(e,"w")){const n=(0,o.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Et)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(o,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o["h"]=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.Pz)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):b("Unrecognized action received from server: "+(0,o.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>It&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Tt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rt.nextConnectionId_++,r=this.lastSessionId;let a=!1,c=null;const s=function(){c?c.close():(a=!0,n())},C=function(e){(0,o.hu)(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(e)};this.realtime_={close:s,sendRequest:C};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,s]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);a?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=s&&s.token,c=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(At)}),r))}catch(b){this.log_("Failed to get token: "+b),a||(this.repoInfo_.nodeAdmin&&x(b),s())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>P(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pt&&(this.reconnectDelay_=Et,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+C.replace(/\./g,"-")]=1,(0,o.uI)()?e["framework.cordova"]=1:(0,o.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=at.getInstance().currentlyOnline();return(0,o.xb)(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0,Rt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ot(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ot(k,e),i=new Ot(k,t);return 0!==this.compare(n,i)}minPost(){return Ot.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft;class jt extends Dt{static get __EMPTY_NODE(){return Ft}static set __EMPTY_NODE(e){Ft=e}compare(e,t){return T(e.name,t.name)}isDefinedOn(e){throw(0,o.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ot.MIN}maxPost(){return new Ot(E,Ft)}makePost(e,t){return(0,o.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ot(e,Ft)}toString(){return".key"}}const Ut=new jt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:qt.RED,this.left=null!=i?i:$t.EMPTY_NODE,this.right=null!=r?r:$t.EMPTY_NODE}copy(e,t,n,i,r){return new qt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $t.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qt.RED=!0,qt.BLACK=!1;class Wt{copy(e,t,n,i,r){return this}insert(e,t,n){return new qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,t=$t.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $t(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return T(e.name,t.name)}function Yt(e,t){return T(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt;function Xt(e){Kt=e}$t.EMPTY_NODE=new Wt;const Jt=function(e){return"number"===typeof e?"number:"+D(e):"string:"+e},Qt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.r3)(t,".sv"),"Priority must be a string or number.")}else(0,o.hu)(e===Kt||e.isEmpty(),"priority of unexpected type.");(0,o.hu)(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return gt(e)?this:".priority"===ft(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ft(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.hu)(".priority"!==n||1===ut(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?D(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:((0,o.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=nn.VALUE_TYPE_ORDER.indexOf(t),r=nn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.hu)(i>=0,"Unknown leaf type: "+t),(0,o.hu)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends Dt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?T(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ot.MIN}maxPost(){return new Ot(E,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Ot(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,sn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){const t=e=>parseInt(Math.log(e)/sn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let a,c;if(0===o)return null;if(1===o)return a=e[t],c=n?n(a):a,new qt(c,a.node,qt.BLACK,null,null);{const s=parseInt(o/2,10)+t,C=r(t,s),l=r(s+1,i);return a=e[s],c=n?n(a):a,new qt(c,a.node,qt.BLACK,C,l)}},o=function(t){let i=null,o=null,a=e.length;const c=function(t,i){const o=a-t,c=a;a-=t;const C=r(o+1,c),l=e[o],f=n?n(l):l;s(new qt(f,l.node,i,null,C))},s=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?c(i,qt.BLACK):(c(i,qt.BLACK),c(i,qt.RED))}return o},a=new Cn(e.length),c=o(a);return new $t(i||t,c)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;const un={};class hn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.hu)(un&&cn,"ChildrenNode.ts has not been loaded"),fn=fn||new hn({".priority":un},{".priority":cn}),fn}get(e){const t=(0,o.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $t?t:null}hasIndex(e){return(0,o.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.hu)(e!==Ut,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ot.Wrap);let a,c=r.getNext();while(c)i=i||e.isDefinedOn(c.node),n.push(c),c=r.getNext();a=i?ln(n,e.getCompare()):un;const s=e.toString(),C=Object.assign({},this.indexSet_);C[s]=e;const l=Object.assign({},this.indexes_);return l[s]=a,new hn(l,C)}addToIndexes(e,t){const n=(0,o.UI)(this.indexes_,((n,i)=>{const r=(0,o.DV)(this.indexSet_,i);if((0,o.hu)(r,"Missing index implementation for "+i),n===un){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ot.Wrap);let o=i.getNext();while(o)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),ln(n,r.getCompare())}return un}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ot(e.name,i))),r.insert(e,e.node)}}));return new hn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.UI)(this.indexes_,(n=>{if(n===un)return n;{const i=t.get(e.name);return i?n.remove(new Ot(e.name,i)):n}}));return new hn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;class pn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qt(this.priorityNode_),this.children_.isEmpty()&&(0,o.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return dn||(dn=new pn(new $t(Yt),null,hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dn}updatePriority(e){return this.children_.isEmpty()?this:new pn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?dn:t}}getChild(e){const t=ft(e);return null===t?this:this.getImmediateChild(t).getChild(ht(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ot(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?dn:this.priorityNode_;return new pn(i,o,r)}}updateChild(e,t){const n=ft(e);if(null===n)return t;{(0,o.hu)(".priority"!==ft(e)||1===ut(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ht(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(cn,((o,a)=>{t[o]=a.val(e),n++,r&&pn.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(cn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ot(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ot(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ot(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ot.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ot.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ln?-1:0}withIndex(e){if(e===Ut||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ut||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ut?null:this.indexMap_.get(e.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends pn{constructor(){super(new $t(Yt),pn.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pn.EMPTY_NODE}isEmpty(){return!1}}const Ln=new mn;Object.defineProperties(Ot,{MIN:{value:new Ot(k,pn.EMPTY_NODE)},MAX:{value:new Ot(E,Ln)}}),jt.__EMPTY_NODE=pn.EMPTY_NODE,nn.__childrenNodeConstructor=pn,Xt(Ln),on(Ln);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=!0;function gn(e,t=null){if(null===e)return pn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,gn(t))}if(e instanceof Array||!vn){let n=pn.EMPTY_NODE;return O(e,((t,i)=>{if((0,o.r3)(e,t)&&"."!==t.substring(0,1)){const e=gn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(gn(t))}{const n=[];let i=!1;const r=e;if(O(r,((e,t)=>{if("."!==e.substring(0,1)){const r=gn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ot(e,r)))}})),0===n.length)return pn.EMPTY_NODE;const o=ln(n,Gt,(e=>e.name),Yt);if(i){const e=ln(n,cn.getCompare());return new pn(o,gn(t),new hn({".priority":e},{".priority":cn}))}return new pn(o,gn(t),hn.Default)}}rn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn extends Dt{constructor(e){super(),this.indexPath_=e,(0,o.hu)(!gt(e)&&".priority"!==ft(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?T(e.name,t.name):r}makePost(e,t){const n=gn(e),i=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ot(t,i)}maxPost(){const e=pn.EMPTY_NODE.updateChild(this.indexPath_,Ln);return new Ot(E,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Dt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?T(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ot.MIN}maxPost(){return Ot.MAX}makePost(e,t){const n=gn(e);return new Ot(t,n)}toString(){return".value"}}const Hn=new Vn,zn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yn(e){return{type:"value",snapshotNode:e}}function bn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function _n(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function xn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function wn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,a){(0,o.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(i).equals(n.getChild(i))&&c.isEmpty()===n.isEmpty()?e:(null!=a&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(_n(t,c)):(0,o.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?a.trackChildChange(bn(t,n)):a.trackChildChange(xn(t,n,c))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,((e,i)=>{t.hasChild(e)||n.trackChildChange(_n(e,i))})),t.isLeafNode()||t.forEachChild(cn,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(xn(t,i,r))}else n.trackChildChange(bn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.indexedFilter_=new Sn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nn.getStartPost_(e),this.endPost_=Nn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,o){return this.matches(new Ot(t,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(pn.EMPTY_NODE);const r=this;return t.forEachChild(cn,((e,t)=>{r.matches(new Ot(e,t))||(i=i.updateImmediateChild(e,pn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.rangedFilter_=new Nn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,o){return this.rangedFilter_.matches(new Ot(t,n))||(n=pn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,o):this.fullLimitUpdateChild_(e,t,n,r,o)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=pn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,o;if(i=t.withIndex(this.index_),i=i.updatePriority(pn.EMPTY_NODE),this.reverse_){o=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else o=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let a=0,c=!1;while(o.hasNext()){const t=o.getNext();!c&&r(e,t)<=0&&(c=!0);const s=c&&a<this.limit_&&r(t,n)<=0;s?a++:i=i.updateImmediateChild(t.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let a;if(this.reverse_){const e=this.index_.getCompare();a=(t,n)=>e(n,t)}else a=this.index_.getCompare();const c=e;(0,o.hu)(c.numChildren()===this.limit_,"");const s=new Ot(t,n),C=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),l=this.rangedFilter_.matches(s);if(c.hasChild(t)){const e=c.getImmediateChild(t);let o=i.getChildAfterChild(this.index_,C,this.reverse_);while(null!=o&&(o.name===t||c.hasChild(o.name)))o=i.getChildAfterChild(this.index_,o,this.reverse_);const f=null==o?1:a(o,s),u=l&&!n.isEmpty()&&f>=0;if(u)return null!=r&&r.trackChildChange(xn(t,n,e)),c.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(_n(t,e));const n=c.updateImmediateChild(t,pn.EMPTY_NODE),i=null!=o&&this.rangedFilter_.matches(o);return i?(null!=r&&r.trackChildChange(bn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&a(C,s)>=0?(null!=r&&(r.trackChildChange(_n(C.name,C.node)),r.trackChildChange(bn(t,n))),c.updateImmediateChild(t,n).updateImmediateChild(C.name,pn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:k}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:E}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new En;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tn(e){return e.loadsAllData()?new Sn(e.getIndex()):e.hasLimit()?new kn(e):new Nn(e)}function In(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===Hn?n="$value":e.index_===Ut?n="$key":((0,o.hu)(e.index_ instanceof Mn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.Pz)(n),e.startSet_&&(t["startAt"]=(0,o.Pz)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,o.Pz)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,o.Pz)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,o.Pz)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function An(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=y("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const a=Pn.getListenId_(e,n),c={};this.listens_[a]=c;const s=In(e._queryParams);this.restRequest_(r+".json",s,((e,t)=>{let s=t;if(404===e&&(s=null,e=null),null===e&&this.onDataUpdate_(r,s,!1,n),(0,o.DV)(this.listens_,a)===c){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Pn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=In(e._queryParams),n=e._path.toString(),i=new o.BH;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.xO)(t);this.log_("Sending REST request for "+a);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(n&&4===c.readyState){this.log_("REST Response for "+a+" received. status:",c.status,"response:",c.responseText);let t=null;if(c.status>=200&&c.status<300){try{t=(0,o.cI)(c.responseText)}catch(e){x("Failed to parse JSON response for "+a+": "+c.responseText)}n(null,t)}else 401!==c.status&&404!==c.status&&x("Got unsuccessful REST response for "+a+" Status: "+c.status),n(c.status);n=null}},c.open("GET",a,!0),c.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return{value:null,children:new Map}}function Dn(e,t,n){if(gt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ft(t);e.children.has(i)||e.children.set(i,On());const r=e.children.get(i);t=ht(t),Dn(r,t,n)}}function Fn(e,t,n){null!==e.value?n(t,e.value):jn(e,((e,i)=>{const r=new Ct(t.toString()+"/"+e);Fn(i,r,n)}))}function jn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&O(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=1e4,qn=3e4,Wn=3e5;class $n{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Un(e);const n=Bn+(qn-Bn)*Math.random();K(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;O(e,((e,i)=>{i>0&&(0,o.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),K(this.reportStats_.bind(this),Math.floor(2*Math.random()*Wn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;function Yn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));class Jn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=Yn()}operationForChild(e){if(gt(this.path)){if(null!=this.affectedTree.value)return(0,o.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ct(e));return new Jn(lt(),t,this.revert)}}return(0,o.hu)(ft(this.path)===e,"operationForChild called for unrelated child."),new Jn(ht(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.source=e,this.path=t,this.type=Gn.LISTEN_COMPLETE}operationForChild(e){return gt(this.path)?new Qn(this.source,lt()):new Qn(this.source,ht(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(e){return gt(this.path)?new Zn(this.source,lt(),this.snap.getImmediateChild(e)):new Zn(this.source,ht(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Gn.MERGE}operationForChild(e){if(gt(this.path)){const t=this.children.subtree(new Ct(e));return t.isEmpty()?null:t.value?new Zn(this.source,lt(),t.value):new ei(this.source,lt(),t)}return(0,o.hu)(ft(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ei(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(gt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ft(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ii(e,t,n,i){const r=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(wn(t.childName,t.snapshotNode))})),ri(e,r,"child_removed",t,i,n),ri(e,r,"child_added",t,i,n),ri(e,r,"child_moved",o,i,n),ri(e,r,"child_changed",t,i,n),ri(e,r,"value",t,i,n),r}function ri(e,t,n,i,r,o){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>ai(e,t,n))),a.forEach((n=>{const i=oi(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function oi(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ai(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.g5)("Should only compare child_ events.");const i=new Ot(t.childName,t.snapshotNode),r=new Ot(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,t){return{eventCache:e,serverCache:t}}function si(e,t,n,i){return ci(new ti(t,n,i),e.serverCache)}function Ci(e,t,n,i){return ci(e.eventCache,new ti(t,n,i))}function li(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;const hi=()=>(ui||(ui=new $t(I)),ui);class di{constructor(e,t=hi()){this.value=e,this.children=t}static fromObject(e){let t=new di(null);return O(e,((e,n)=>{t=t.set(new Ct(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(gt(e))return null;{const n=ft(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ht(e),t);if(null!=r){const e=vt(new Ct(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(gt(e))return this;{const t=ft(e),n=this.children.get(t);return null!==n?n.subtree(ht(e)):new di(null)}}set(e,t){if(gt(e))return new di(t,this.children);{const n=ft(e),i=this.children.get(n)||new di(null),r=i.set(ht(e),t),o=this.children.insert(n,r);return new di(this.value,o)}}remove(e){if(gt(e))return this.children.isEmpty()?new di(null):new di(null,this.children);{const t=ft(e),n=this.children.get(t);if(n){const i=n.remove(ht(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new di(null):new di(this.value,r)}return this}}get(e){if(gt(e))return this.value;{const t=ft(e),n=this.children.get(t);return n?n.get(ht(e)):null}}setTree(e,t){if(gt(e))return t;{const n=ft(e),i=this.children.get(n)||new di(null),r=i.setTree(ht(e),t);let o;return o=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new di(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(vt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(gt(e))return null;{const i=ft(e),r=this.children.get(i);return r?r.findOnPath_(ht(e),vt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(gt(e))return this;{this.value&&n(t,this.value);const i=ft(e),r=this.children.get(i);return r?r.foreachOnPath_(ht(e),vt(t,i),n):new di(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(vt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.writeTree_=e}static empty(){return new pi(new di(null))}}function mi(e,t,n){if(gt(t))return new pi(new di(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const a=Mt(r,t);return o=o.updateChild(a,n),new pi(e.writeTree_.set(r,o))}{const i=new di(n),r=e.writeTree_.setTree(t,i);return new pi(r)}}}function Li(e,t,n){let i=e;return O(n,((e,n)=>{i=mi(i,vt(t,e),n)})),i}function vi(e,t){if(gt(t))return pi.empty();{const n=e.writeTree_.setTree(t,new di(null));return new pi(n)}}function gi(e,t){return null!=Mi(e,t)}function Mi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Mt(n.path,t)):null}function Vi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,((e,n)=>{t.push(new Ot(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ot(e,n.value))})),t}function Hi(e,t){if(gt(t))return e;{const n=Mi(e,t);return new pi(null!=n?new di(n):e.writeTree_.subtree(t))}}function zi(e){return e.writeTree_.isEmpty()}function yi(e,t){return bi(lt(),e.writeTree_,t)}function bi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,o.hu)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=bi(vt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e,t){return Ki(t,e)}function xi(e,t,n,i,r){(0,o.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=mi(e.visibleWrites,t,n)),e.lastWriteId=i}function wi(e,t,n,i){(0,o.hu)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Li(e.visibleWrites,t,n),e.lastWriteId=i}function Si(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Ni(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,a=!1,c=e.allWrites.length-1;while(r&&c>=0){const t=e.allWrites[c];t.visible&&(c>=n&&ki(t,i.path)?r=!1:zt(i.path,t.path)&&(a=!0)),c--}if(r){if(a)return Ei(e),!0;if(i.snap)e.visibleWrites=vi(e.visibleWrites,i.path);else{const t=i.children;O(t,(t=>{e.visibleWrites=vi(e.visibleWrites,vt(i.path,t))}))}return!0}return!1}function ki(e,t){if(e.snap)return zt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&zt(vt(e.path,n),t))return!0;return!1}function Ei(e){e.visibleWrites=Ii(e.allWrites,Ti,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ti(e){return e.visible}function Ii(e,t,n){let i=pi.empty();for(let r=0;r<e.length;++r){const a=e[r];if(t(a)){const e=a.path;let t;if(a.snap)zt(n,e)?(t=Mt(n,e),i=mi(i,t,a.snap)):zt(e,n)&&(t=Mt(e,n),i=mi(i,lt(),a.snap.getChild(t)));else{if(!a.children)throw(0,o.g5)("WriteRecord should have .snap or .children");if(zt(n,e))t=Mt(n,e),i=Li(i,t,a.children);else if(zt(e,n))if(t=Mt(e,n),gt(t))i=Li(i,lt(),a.children);else{const e=(0,o.DV)(a.children,ft(t));if(e){const n=e.getChild(ht(t));i=mi(i,lt(),n)}}}}}return i}function Ai(e,t,n,i,r){if(i||r){const o=Hi(e.visibleWrites,t);if(!r&&zi(o))return n;if(r||null!=n||gi(o,lt())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(zt(e.path,t)||zt(t,e.path))},a=Ii(e.allWrites,o,t),c=n||pn.EMPTY_NODE;return yi(a,c)}return null}{const i=Mi(e.visibleWrites,t);if(null!=i)return i;{const i=Hi(e.visibleWrites,t);if(zi(i))return n;if(null!=n||gi(i,lt())){const e=n||pn.EMPTY_NODE;return yi(i,e)}return null}}}function Pi(e,t,n){let i=pn.EMPTY_NODE;const r=Mi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(cn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Hi(e.visibleWrites,t);return n.forEachChild(cn,((e,t)=>{const n=yi(Hi(r,new Ct(e)),t);i=i.updateImmediateChild(e,n)})),Vi(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=Hi(e.visibleWrites,t);return Vi(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Ri(e,t,n,i,r){(0,o.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");const a=vt(t,n);if(gi(e.visibleWrites,a))return null;{const t=Hi(e.visibleWrites,a);return zi(t)?r.getChild(n):yi(t,r.getChild(n))}}function Oi(e,t,n,i){const r=vt(t,n),o=Mi(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n)){const t=Hi(e.visibleWrites,r);return yi(t,i.getNode().getImmediateChild(n))}return null}function Di(e,t){return Mi(e.visibleWrites,t)}function Fi(e,t,n,i,r,o,a){let c;const s=Hi(e.visibleWrites,t),C=Mi(s,lt());if(null!=C)c=C;else{if(null==n)return[];c=yi(s,n)}if(c=c.withIndex(a),c.isEmpty()||c.isLeafNode())return[];{const e=[],t=a.getCompare(),n=o?c.getReverseIteratorFrom(i,a):c.getIteratorFrom(i,a);let s=n.getNext();while(s&&e.length<r)0!==t(s,i)&&e.push(s),s=n.getNext();return e}}function ji(){return{visibleWrites:pi.empty(),allWrites:[],lastWriteId:-1}}function Ui(e,t,n,i){return Ai(e.writeTree,e.treePath,t,n,i)}function Bi(e,t){return Pi(e.writeTree,e.treePath,t)}function qi(e,t,n,i){return Ri(e.writeTree,e.treePath,t,n,i)}function Wi(e,t){return Di(e.writeTree,vt(e.treePath,t))}function $i(e,t,n,i,r,o){return Fi(e.writeTree,e.treePath,t,n,i,r,o)}function Gi(e,t,n){return Oi(e.writeTree,e.treePath,t,n)}function Yi(e,t){return Ki(vt(e.treePath,t),e.writeTree)}function Ki(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,xn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,_n(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,bn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,o.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,xn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Qi=new Ji;class Zi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ti(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:fi(this.viewCache_),r=$i(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){return{filter:e}}function tr(e,t){(0,o.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function nr(e,t,n,i,r){const a=new Xi;let c,s;if(n.type===Gn.OVERWRITE){const C=n;C.source.fromUser?c=ar(e,t,C.path,C.snap,i,r,a):((0,o.hu)(C.source.fromServer,"Unknown source."),s=C.source.tagged||t.serverCache.isFiltered()&&!gt(C.path),c=or(e,t,C.path,C.snap,i,r,s,a))}else if(n.type===Gn.MERGE){const C=n;C.source.fromUser?c=sr(e,t,C.path,C.children,i,r,a):((0,o.hu)(C.source.fromServer,"Unknown source."),s=C.source.tagged||t.serverCache.isFiltered(),c=lr(e,t,C.path,C.children,i,r,s,a))}else if(n.type===Gn.ACK_USER_WRITE){const o=n;c=o.revert?hr(e,t,o.path,i,r,a):fr(e,t,o.path,o.affectedTree,i,r,a)}else{if(n.type!==Gn.LISTEN_COMPLETE)throw(0,o.g5)("Unknown operation type: "+n.type);c=ur(e,t,n.path,i,a)}const C=a.getChanges();return ir(t,c,C),{viewCache:c,changes:C}}function ir(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=li(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(yn(li(t)))}}function rr(e,t,n,i,r,a){const c=t.eventCache;if(null!=Wi(i,n))return t;{let s,C;if(gt(n))if((0,o.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=fi(t),r=n instanceof pn?n:pn.EMPTY_NODE,o=Bi(i,r);s=e.filter.updateFullNode(t.eventCache.getNode(),o,a)}else{const n=Ui(i,fi(t));s=e.filter.updateFullNode(t.eventCache.getNode(),n,a)}else{const l=ft(n);if(".priority"===l){(0,o.hu)(1===ut(n),"Can't have a priority with additional path components");const r=c.getNode();C=t.serverCache.getNode();const a=qi(i,n,r,C);s=null!=a?e.filter.updatePriority(r,a):c.getNode()}else{const o=ht(n);let f;if(c.isCompleteForChild(l)){C=t.serverCache.getNode();const e=qi(i,n,c.getNode(),C);f=null!=e?c.getNode().getImmediateChild(l).updateChild(o,e):c.getNode().getImmediateChild(l)}else f=Gi(i,l,t.serverCache);s=null!=f?e.filter.updateChild(c.getNode(),l,f,o,r,a):c.getNode()}}return si(t,s,c.isFullyInitialized()||gt(n),e.filter.filtersNodes())}}function or(e,t,n,i,r,o,a,c){const s=t.serverCache;let C;const l=a?e.filter:e.filter.getIndexedFilter();if(gt(n))C=l.updateFullNode(s.getNode(),i,null);else if(l.filtersNodes()&&!s.isFiltered()){const e=s.getNode().updateChild(n,i);C=l.updateFullNode(s.getNode(),e,null)}else{const e=ft(n);if(!s.isCompleteForPath(n)&&ut(n)>1)return t;const r=ht(n),o=s.getNode().getImmediateChild(e),a=o.updateChild(r,i);C=".priority"===e?l.updatePriority(s.getNode(),a):l.updateChild(s.getNode(),e,a,r,Qi,null)}const f=Ci(t,C,s.isFullyInitialized()||gt(n),l.filtersNodes()),u=new Zi(r,f,o);return rr(e,f,n,r,u,c)}function ar(e,t,n,i,r,o,a){const c=t.eventCache;let s,C;const l=new Zi(r,t,o);if(gt(n))C=e.filter.updateFullNode(t.eventCache.getNode(),i,a),s=si(t,C,!0,e.filter.filtersNodes());else{const r=ft(n);if(".priority"===r)C=e.filter.updatePriority(t.eventCache.getNode(),i),s=si(t,C,c.isFullyInitialized(),c.isFiltered());else{const o=ht(n),C=c.getNode().getImmediateChild(r);let f;if(gt(o))f=i;else{const e=l.getCompleteChild(r);f=null!=e?".priority"===dt(o)&&e.getChild(Lt(o)).isEmpty()?e:e.updateChild(o,i):pn.EMPTY_NODE}if(C.equals(f))s=t;else{const n=e.filter.updateChild(c.getNode(),r,f,o,l,a);s=si(t,n,c.isFullyInitialized(),e.filter.filtersNodes())}}}return s}function cr(e,t){return e.eventCache.isCompleteForChild(t)}function sr(e,t,n,i,r,o,a){let c=t;return i.foreach(((i,s)=>{const C=vt(n,i);cr(t,ft(C))&&(c=ar(e,c,C,s,r,o,a))})),i.foreach(((i,s)=>{const C=vt(n,i);cr(t,ft(C))||(c=ar(e,c,C,s,r,o,a))})),c}function Cr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function lr(e,t,n,i,r,o,a,c){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let s,C=t;s=gt(n)?i:new di(null).setTree(n,i);const l=t.serverCache.getNode();return s.children.inorderTraversal(((n,i)=>{if(l.hasChild(n)){const s=t.serverCache.getNode().getImmediateChild(n),l=Cr(e,s,i);C=or(e,C,new Ct(n),l,r,o,a,c)}})),s.children.inorderTraversal(((n,i)=>{const s=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!l.hasChild(n)&&!s){const s=t.serverCache.getNode().getImmediateChild(n),l=Cr(e,s,i);C=or(e,C,new Ct(n),l,r,o,a,c)}})),C}function fr(e,t,n,i,r,o,a){if(null!=Wi(r,n))return t;const c=t.serverCache.isFiltered(),s=t.serverCache;if(null!=i.value){if(gt(n)&&s.isFullyInitialized()||s.isCompleteForPath(n))return or(e,t,n,s.getNode().getChild(n),r,o,c,a);if(gt(n)){let i=new di(null);return s.getNode().forEachChild(Ut,((e,t)=>{i=i.set(new Ct(e),t)})),lr(e,t,n,i,r,o,c,a)}return t}{let C=new di(null);return i.foreach(((e,t)=>{const i=vt(n,e);s.isCompleteForPath(i)&&(C=C.set(e,s.getNode().getChild(i)))})),lr(e,t,n,C,r,o,c,a)}}function ur(e,t,n,i,r){const o=t.serverCache,a=Ci(t,o.getNode(),o.isFullyInitialized()||gt(n),o.isFiltered());return rr(e,a,n,i,Qi,r)}function hr(e,t,n,i,r,a){let c;if(null!=Wi(i,n))return t;{const s=new Zi(i,t,r),C=t.eventCache.getNode();let l;if(gt(n)||".priority"===ft(n)){let n;if(t.serverCache.isFullyInitialized())n=Ui(i,fi(t));else{const e=t.serverCache.getNode();(0,o.hu)(e instanceof pn,"serverChildren would be complete if leaf node"),n=Bi(i,e)}l=e.filter.updateFullNode(C,n,a)}else{const r=ft(n);let o=Gi(i,r,t.serverCache);null==o&&t.serverCache.isCompleteForChild(r)&&(o=C.getImmediateChild(r)),l=null!=o?e.filter.updateChild(C,r,o,ht(n),s,a):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(C,r,pn.EMPTY_NODE,ht(n),s,a):C,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(c=Ui(i,fi(t)),c.isLeafNode()&&(l=e.filter.updateFullNode(l,c,a)))}return c=t.serverCache.isFullyInitialized()||null!=Wi(i,lt()),si(t,l,c,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Sn(n.getIndex()),r=Tn(n);this.processor_=er(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),s=r.updateFullNode(pn.EMPTY_NODE,a.getNode(),null),C=new ti(c,o.isFullyInitialized(),i.filtersNodes()),l=new ti(s,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ci(l,C),this.eventGenerator_=new ni(this.query_)}get query(){return this.query_}}function pr(e){return e.viewCache_.serverCache.getNode()}function mr(e,t){const n=fi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!gt(t)&&!n.getImmediateChild(ft(t)).isEmpty())?n.getChild(t):null}function Lr(e){return 0===e.eventRegistrations_.length}function vr(e,t){e.eventRegistrations_.push(t)}function gr(e,t,n){const i=[];if(n){(0,o.hu)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Mr(e,t,n,i){t.type===Gn.MERGE&&null!==t.source.queryId&&((0,o.hu)(fi(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.hu)(li(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,a=nr(e.processor_,r,t,n,i);return tr(e.processor_,a.viewCache),(0,o.hu)(a.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,Hr(e,a.changes,a.viewCache.eventCache.getNode(),null)}function Vr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,((e,t)=>{i.push(bn(e,t))}))}return n.isFullyInitialized()&&i.push(yn(n.getNode())),Hr(e,i,n.getNode(),t)}function Hr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return ii(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr,yr;class br{constructor(){this.views=new Map}}function _r(e){(0,o.hu)(!zr,"__referenceConstructor has already been defined"),zr=e}function xr(){return(0,o.hu)(zr,"Reference.ts has not been loaded"),zr}function wr(e){return 0===e.views.size}function Sr(e,t,n,i){const r=t.source.queryId;if(null!==r){const a=e.views.get(r);return(0,o.hu)(null!=a,"SyncTree gave us an op for an invalid query."),Mr(a,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(Mr(o,t,n,i));return r}}function Nr(e,t,n,i,r){const o=t._queryIdentifier,a=e.views.get(o);if(!a){let e=Ui(n,r?i:null),o=!1;e?o=!0:i instanceof pn?(e=Bi(n,i),o=!1):(e=pn.EMPTY_NODE,o=!1);const a=ci(new ti(e,o,!1),new ti(i,r,!1));return new dr(t,a)}return a}function kr(e,t,n,i,r,o){const a=Nr(e,t,i,r,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,a),vr(a,n),Vr(a,n)}function Er(e,t,n,i){const r=t._queryIdentifier,o=[];let a=[];const c=Rr(e);if("default"===r)for(const[s,C]of e.views.entries())a=a.concat(gr(C,n,i)),Lr(C)&&(e.views.delete(s),C.query._queryParams.loadsAllData()||o.push(C.query));else{const t=e.views.get(r);t&&(a=a.concat(gr(t,n,i)),Lr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||o.push(t.query)))}return c&&!Rr(e)&&o.push(new(xr())(t._repo,t._path)),{removed:o,events:a}}function Tr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ir(e,t){let n=null;for(const i of e.views.values())n=n||mr(i,t);return n}function Ar(e,t){const n=t._queryParams;if(n.loadsAllData())return Or(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Pr(e,t){return null!=Ar(e,t)}function Rr(e){return null!=Or(e)}function Or(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){(0,o.hu)(!yr,"__referenceConstructor has already been defined"),yr=e}function Fr(){return(0,o.hu)(yr,"Reference.ts has not been loaded"),yr}let jr=1;class Ur{constructor(e){this.listenProvider_=e,this.syncPointTree_=new di(null),this.pendingWriteTree_=ji(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Br(e,t,n,i,r){return xi(e.pendingWriteTree_,t,n,i,r),r?to(e,new Zn(Yn(),t,n)):[]}function qr(e,t,n,i){wi(e.pendingWriteTree_,t,n,i);const r=di.fromObject(n);return to(e,new ei(Yn(),t,r))}function Wr(e,t,n=!1){const i=Si(e.pendingWriteTree_,t),r=Ni(e.pendingWriteTree_,t);if(r){let t=new di(null);return null!=i.snap?t=t.set(lt(),!0):O(i.children,(e=>{t=t.set(new Ct(e),!0)})),to(e,new Jn(i.path,t,n))}return[]}function $r(e,t,n){return to(e,new Zn(Kn(),t,n))}function Gr(e,t,n){const i=di.fromObject(n);return to(e,new ei(Kn(),t,i))}function Yr(e,t){return to(e,new Qn(Kn(),t))}function Kr(e,t,n){const i=co(e,n);if(i){const n=so(i),r=n.path,o=n.queryId,a=Mt(r,t),c=new Qn(Xn(o),a);return Co(e,r,c)}return[]}function Xr(e,t,n,i,r=!1){const o=t._path,a=e.syncPointTree_.get(o);let c=[];if(a&&("default"===t._queryIdentifier||Pr(a,t))){const s=Er(a,t,n,i);wr(a)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const C=s.removed;if(c=s.events,!r){const n=-1!==C.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(o,((e,t)=>Rr(t)));if(n&&!r){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=lo(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,o=ro(e,i);e.listenProvider_.startListening(fo(r),oo(e,r),o.hashFn,o.onComplete)}}}if(!r&&C.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(fo(t),n)}else C.forEach((t=>{const n=e.queryToTagMap.get(ao(t));e.listenProvider_.stopListening(fo(t),n)}))}uo(e,C)}return c}function Jr(e,t,n,i){const r=co(e,i);if(null!=r){const i=so(r),o=i.path,a=i.queryId,c=Mt(o,t),s=new Zn(Xn(a),c,n);return Co(e,o,s)}return[]}function Qr(e,t,n,i){const r=co(e,i);if(r){const i=so(r),o=i.path,a=i.queryId,c=Mt(o,t),s=di.fromObject(n),C=new ei(Xn(a),c,s);return Co(e,o,C)}return[]}function Zr(e,t,n,i=!1){const r=t._path;let a=null,c=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Mt(e,r);a=a||Ir(t,n),c=c||Rr(t)}));let s,C=e.syncPointTree_.get(r);if(C?(c=c||Rr(C),a=a||Ir(C,lt())):(C=new br,e.syncPointTree_=e.syncPointTree_.set(r,C)),null!=a)s=!0;else{s=!1,a=pn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=Ir(t,lt());n&&(a=a.updateImmediateChild(e,n))}))}const l=Pr(C,t);if(!l&&!t._queryParams.loadsAllData()){const n=ao(t);(0,o.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ho();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const f=_i(e.pendingWriteTree_,r);let u=kr(C,t,n,f,a,s);if(!l&&!c&&!i){const n=Ar(C,t);u=u.concat(po(e,t,n))}return u}function eo(e,t,n){const i=!0,r=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Mt(e,t),r=Ir(n,i);if(r)return r}));return Ai(r,t,o,n,i)}function to(e,t){return no(t,e.syncPointTree_,null,_i(e.pendingWriteTree_,lt()))}function no(e,t,n,i){if(gt(e.path))return io(e,t,n,i);{const r=t.get(lt());null==n&&null!=r&&(n=Ir(r,lt()));let o=[];const a=ft(e.path),c=e.operationForChild(a),s=t.children.get(a);if(s&&c){const e=n?n.getImmediateChild(a):null,t=Yi(i,a);o=o.concat(no(c,s,e,t))}return r&&(o=o.concat(Sr(r,e,i,n))),o}}function io(e,t,n,i){const r=t.get(lt());null==n&&null!=r&&(n=Ir(r,lt()));let o=[];return t.children.inorderTraversal(((t,r)=>{const a=n?n.getImmediateChild(t):null,c=Yi(i,t),s=e.operationForChild(t);s&&(o=o.concat(io(s,r,a,c)))})),r&&(o=o.concat(Sr(r,e,i,n))),o}function ro(e,t){const n=t.query,i=oo(e,n);return{hashFn:()=>{const e=pr(t)||pn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Kr(e,n._path,i):Yr(e,n._path);{const i=U(t,n);return Xr(e,n,null,i)}}}}function oo(e,t){const n=ao(t);return e.queryToTagMap.get(n)}function ao(e){return e._path.toString()+"$"+e._queryIdentifier}function co(e,t){return e.tagToQueryMap.get(t)}function so(e){const t=e.indexOf("$");return(0,o.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ct(e.substr(0,t))}}function Co(e,t,n){const i=e.syncPointTree_.get(t);(0,o.hu)(i,"Missing sync point for query tag that we're tracking");const r=_i(e.pendingWriteTree_,t);return Sr(i,n,r,null)}function lo(e){return e.fold(((e,t,n)=>{if(t&&Rr(t)){const e=Or(t);return[e]}{let e=[];return t&&(e=Tr(t)),O(n,((t,n)=>{e=e.concat(n)})),e}}))}function fo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Fr())(e._repo,e._path):e}function uo(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ao(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ho(){return jr++}function po(e,t,n){const i=t._path,r=oo(e,t),a=ro(e,n),c=e.listenProvider_.startListening(fo(t),r,a.hashFn,a.onComplete),s=e.syncPointTree_.subtree(i);if(r)(0,o.hu)(!Rr(s.value),"If we're adding a query, it shouldn't be shadowed");else{const t=s.fold(((e,t,n)=>{if(!gt(e)&&t&&Rr(t))return[Or(t).query];{let e=[];return t&&(e=e.concat(Tr(t).map((e=>e.query)))),O(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(fo(i),oo(e,i))}}return c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mo(t)}node(){return this.node_}}class Lo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new Lo(this.syncTree_,t)}node(){return eo(this.syncTree_,this.path_)}}const vo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},go=function(e,t,n){return e&&"object"===typeof e?((0,o.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Mo(e[".sv"],t,n):"object"===typeof e[".sv"]?Vo(e[".sv"],t):void(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Mo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.hu)(!1,"Unexpected server value: "+e)}},Vo=function(e,t,n){e.hasOwnProperty("increment")||(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,o.hu)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,o.hu)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const a=r,c=a.getValue();return"number"!==typeof c?i:c+i},Ho=function(e,t,n,i){return yo(t,new Lo(n,e),i)},zo=function(e,t,n){return yo(e,new mo(t),n)};function yo(e,t,n){const i=e.getPriority().val(),r=go(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=go(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new nn(o,gn(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new nn(r))),i.forEachChild(cn,((e,i)=>{const r=yo(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function _o(e,t){let n=t instanceof Ct?t:new Ct(t),i=e,r=ft(n);while(null!==r){const e=(0,o.DV)(i.node.children,r)||{children:{},childCount:0};i=new bo(r,i,e),n=ht(n),r=ft(n)}return i}function xo(e){return e.node.value}function wo(e,t){e.node.value=t,Ao(e)}function So(e){return e.node.childCount>0}function No(e){return void 0===xo(e)&&!So(e)}function ko(e,t){O(e.node.children,((n,i)=>{t(new bo(n,e,i))}))}function Eo(e,t,n,i){n&&!i&&t(e),ko(e,(e=>{Eo(e,t,!0,i)})),n&&i&&t(e)}function To(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Io(e){return new Ct(null===e.parent?e.name:Io(e.parent)+"/"+e.name)}function Ao(e){null!==e.parent&&Po(e.parent,e.name,e)}function Po(e,t,n){const i=No(n),r=(0,o.r3)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ao(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ao(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=/[\[\].#$\/\u0000-\u001F\u007F]/,Oo=/[\[\].#$\u0000-\u001F\u007F]/,Do=10485760,Fo=function(e){return"string"===typeof e&&0!==e.length&&!Ro.test(e)},jo=function(e){return"string"===typeof e&&0!==e.length&&!Oo.test(e)},Uo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),jo(e)},Bo=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!S(e)||e&&"object"===typeof e&&(0,o.r3)(e,".sv")},qo=function(e,t,n,i){i&&void 0===t||Wo((0,o.gK)(e,"value"),t,n)},Wo=function(e,t,n){const i=n instanceof Ct?new yt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+wt(i));if("function"===typeof t)throw new Error(e+"contains a function "+wt(i)+" with contents = "+t.toString());if(S(t))throw new Error(e+"contains "+t.toString()+" "+wt(i));if("string"===typeof t&&t.length>Do/3&&(0,o.ug)(t)>Do)throw new Error(e+"contains a string greater than "+Do+" utf8 bytes "+wt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(O(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Fo(t)))throw new Error(e+" contains an invalid key ("+t+") "+wt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');bt(i,t),Wo(e,o,i),_t(i)})),n&&r)throw new Error(e+' contains ".value" child '+wt(i)+" in addition to actual children.")}},$o=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=mt(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!Fo(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Vt);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&zt(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Go=function(e,t,n,i){if(i&&void 0===t)return;const r=(0,o.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const a=[];O(t,((e,t)=>{const i=new Ct(e);if(Wo(r,t,vt(n,i)),".priority"===dt(i)&&!Bo(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(i)})),$o(r,a)},Yo=function(e,t,n,i){if((!i||void 0!==n)&&!jo(n))throw new Error((0,o.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ko=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yo(e,t,n,i)},Xo=function(e,t){if(".info"===ft(t))throw new Error(e+" failed = Can't modify data under /.info/")},Jo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Fo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Uo(n))throw new Error((0,o.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||Ht(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function ea(e,t,n){Zo(e,n),na(e,(e=>Ht(e,t)))}function ta(e,t,n){Zo(e,n),na(e,(e=>zt(e,t)||zt(t,e)))}function na(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const o=r.path;t(o)?(ia(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ia(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();M&&z("event: "+n.toString()),G(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="repo_interrupt",oa=25;class aa{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=On(),this.transactionQueueTree_=new bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ca(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||Y())e.server_=new Pn(e.repoInfo_,((t,n,i,r)=>{la(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>fa(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.Pz)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Rt(e.repoInfo_,t,((t,n,i,r)=>{la(e,t,n,i,r)}),(t=>{fa(e,t)}),(t=>{ua(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=Le(e.repoInfo_,(()=>new $n(e.stats_,e.server_))),e.infoData_=new Rn,e.infoSyncTree_=new Ur({startListening:(t,n,i,r)=>{let o=[];const a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=$r(e.infoSyncTree_,t._path,a),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),ha(e,"connected",!1),e.serverSyncTree_=new Ur({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);ta(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function sa(e){const t=e.infoData_.getNode(new Ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Ca(e){return vo({timestamp:sa(e)})}function la(e,t,n,i,r){e.dataUpdateCount++;const a=new Ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let c=[];if(r)if(i){const t=(0,o.UI)(n,(e=>gn(e)));c=Qr(e.serverSyncTree_,a,t,r)}else{const t=gn(n);c=Jr(e.serverSyncTree_,a,t,r)}else if(i){const t=(0,o.UI)(n,(e=>gn(e)));c=Gr(e.serverSyncTree_,a,t)}else{const t=gn(n);c=$r(e.serverSyncTree_,a,t)}let s=a;c.length>0&&(s=_a(e,a)),ta(e.eventQueue_,s,c)}function fa(e,t){ha(e,"connected",t),!1===t&&La(e)}function ua(e,t){O(t,((t,n)=>{ha(e,t,n)}))}function ha(e,t,n){const i=new Ct("/.info/"+t),r=gn(n);e.infoData_.updateSnapshot(i,r);const o=$r(e.infoSyncTree_,i,r);ta(e.eventQueue_,i,o)}function da(e){return e.nextWriteId_++}function pa(e,t,n,i,r){Va(e,"set",{path:t.toString(),value:n,priority:i});const o=Ca(e),a=gn(n,i),c=eo(e.serverSyncTree_,t),s=zo(a,c,o),C=da(e),l=Br(e.serverSyncTree_,t,s,C,!0);Zo(e.eventQueue_,l),e.server_.put(t.toString(),a.val(!0),((n,i)=>{const o="ok"===n;o||x("set at "+t+" failed: "+n);const a=Wr(e.serverSyncTree_,C,!o);ta(e.eventQueue_,t,a),Ha(e,r,n,i)}));const f=Ea(e,t);_a(e,f),ta(e.eventQueue_,f,[])}function ma(e,t,n,i){Va(e,"update",{path:t.toString(),value:n});let r=!0;const o=Ca(e),a={};if(O(n,((n,i)=>{r=!1,a[n]=Ho(vt(t,n),gn(i),e.serverSyncTree_,o)})),r)z("update() called with empty data.  Don't do anything."),Ha(e,i,"ok",void 0);else{const r=da(e),o=qr(e.serverSyncTree_,t,a,r);Zo(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const a="ok"===n;a||x("update at "+t+" failed: "+n);const c=Wr(e.serverSyncTree_,r,!a),s=c.length>0?_a(e,t):t;ta(e.eventQueue_,s,c),Ha(e,i,n,o)})),O(n,(n=>{const i=Ea(e,vt(t,n));_a(e,i)})),ta(e.eventQueue_,t,[])}}function La(e){Va(e,"onDisconnectEvents");const t=Ca(e),n=On();Fn(e.onDisconnect_,lt(),((i,r)=>{const o=Ho(i,r,e.serverSyncTree_,t);Dn(n,i,o)}));let i=[];Fn(n,lt(),((t,n)=>{i=i.concat($r(e.serverSyncTree_,t,n));const r=Ea(e,t);_a(e,r)})),e.onDisconnect_=On(),ta(e.eventQueue_,lt(),i)}function va(e,t,n){let i;i=".info"===ft(t._path)?Zr(e.infoSyncTree_,t,n):Zr(e.serverSyncTree_,t,n),ea(e.eventQueue_,t._path,i)}function ga(e,t,n){let i;i=".info"===ft(t._path)?Xr(e.infoSyncTree_,t,n):Xr(e.serverSyncTree_,t,n),ea(e.eventQueue_,t._path,i)}function Ma(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ra)}function Va(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),z(n,...t)}function Ha(e,t,n,i){t&&G((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const o=new Error(r);o.code=e,t(o)}}))}function za(e,t,n){return eo(e.serverSyncTree_,t,n)||pn.EMPTY_NODE}function ya(e,t=e.transactionQueueTree_){if(t||ka(e,t),xo(t)){const n=Sa(e,t);(0,o.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&ba(e,Io(t),n)}else So(t)&&ko(t,(t=>{ya(e,t)}))}function ba(e,t,n){const i=n.map((e=>e.currentWriteId)),r=za(e,t,i);let a=r;const c=r.hash();for(let l=0;l<n.length;l++){const e=n[l];(0,o.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Mt(t,e.path);a=a.updateChild(i,e.currentOutputSnapshotRaw)}const s=a.val(!0),C=t;e.server_.put(C.toString(),s,(i=>{Va(e,"transaction put response",{path:C.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Wr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ka(e,_o(e.transactionQueueTree_,t)),ya(e,e.transactionQueueTree_),ta(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)G(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{x("transaction at "+C.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}_a(e,t)}}),c)}function _a(e,t){const n=wa(e,t),i=Io(n),r=Sa(e,n);return xa(e,r,i),i}function xa(e,t,n){if(0===t.length)return;const i=[];let r=[];const a=t.filter((e=>0===e.status)),c=a.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const a=t[s],C=Mt(n,a.path);let l,f=!1;if((0,o.hu)(null!==C,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)f=!0,l=a.abortReason,r=r.concat(Wr(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status)if(a.retryCount>=oa)f=!0,l="maxretry",r=r.concat(Wr(e.serverSyncTree_,a.currentWriteId,!0));else{const n=za(e,a.path,c);a.currentInputSnapshot=n;const i=t[s].update(n.val());if(void 0!==i){Wo("transaction failed: Data returned ",i,a.path);let t=gn(i);const s="object"===typeof i&&null!=i&&(0,o.r3)(i,".priority");s||(t=t.updatePriority(n.getPriority()));const C=a.currentWriteId,l=Ca(e),f=zo(t,n,l);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=f,a.currentWriteId=da(e),c.splice(c.indexOf(C),1),r=r.concat(Br(e.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),r=r.concat(Wr(e.serverSyncTree_,C,!0))}else f=!0,l="nodata",r=r.concat(Wr(e.serverSyncTree_,a.currentWriteId,!0))}ta(e.eventQueue_,n,r),r=[],f&&(t[s].status=2,function(e){setTimeout(e,Math.floor(0))}(t[s].unwatcher),t[s].onComplete&&("nodata"===l?i.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):i.push((()=>t[s].onComplete(new Error(l),!1,null)))))}ka(e,e.transactionQueueTree_);for(let o=0;o<i.length;o++)G(i[o]);ya(e,e.transactionQueueTree_)}function wa(e,t){let n,i=e.transactionQueueTree_;n=ft(t);while(null!==n&&void 0===xo(i))i=_o(i,n),t=ht(t),n=ft(t);return i}function Sa(e,t){const n=[];return Na(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Na(e,t,n){const i=xo(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ko(t,(t=>{Na(e,t,n)}))}function ka(e,t){const n=xo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,wo(t,n.length>0?n:void 0)}ko(t,(t=>{ka(e,t)}))}function Ea(e,t){const n=Io(wa(e,t)),i=_o(e.transactionQueueTree_,t);return To(i,(t=>{Ta(e,t)})),Ta(e,i),Eo(i,(t=>{Ta(e,t)})),n}function Ta(e,t){const n=xo(t);if(n){const i=[];let r=[],a=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.hu)(a===t-1,"All SENT items should be at beginning of queue."),a=t,n[t].status=3,n[t].abortReason="set"):((0,o.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Wr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===a?wo(t,void 0):n.length=a+1,ta(e.eventQueue_,Io(t),r);for(let e=0;e<i.length;e++)G(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Aa(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):x(`Invalid query segment '${n}' in query '${e}'`)}return t}const Pa=function(e,t){const n=Ra(e),i=n.namespace;"firebase.com"===n.domain&&_(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||_("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||w();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Ct(n.pathString)}},Ra=function(e){let t="",n="",i="",r="",o="",a=!0,c="https",s=443;if("string"===typeof e){let C=e.indexOf("//");C>=0&&(c=e.substring(0,C-1),e=e.substring(C+2));let l=e.indexOf("/");-1===l&&(l=e.length);let f=e.indexOf("?");-1===f&&(f=e.length),t=e.substring(0,Math.min(l,f)),l<f&&(r=Ia(e.substring(l,f)));const u=Aa(e.substring(Math.min(e.length,f)));C=t.indexOf(":"),C>=0?(a="https"===c||"wss"===c,s=parseInt(t.substring(C+1),10)):C=t.length;const h=t.slice(0,C);if("localhost"===h.toLowerCase())n="localhost";else if(h.split(".").length<=2)n=h;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in u&&(o=u["ns"])}return{host:t,port:s,domain:n,subdomain:i,secure:a,scheme:c,pathString:r,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oa{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.Pz)(this.snapshot.exportVal())}}class Da{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return gt(this._path)?null:dt(this._path)}get ref(){return new Ua(this._repo,this._path)}get _queryIdentifier(){const e=An(this._queryParams),t=P(e);return"{}"===t?"default":t}get _queryObject(){return An(this._queryParams)}isEqual(e){if(e=(0,o.m9)(e),!(e instanceof ja))return!1;const t=this._repo===e._repo,n=Ht(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pt(this._path)}}class Ua extends ja{constructor(e,t){super(e,t,new En,!1)}get parent(){const e=Lt(this._path);return null===e?null:new Ua(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Ba{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ct(e),n=Wa(this.ref,e);return new Ba(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Ba(n,Wa(this.ref,t),cn))))}hasChild(e){const t=new Ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qa(e,t){return e=(0,o.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Wa(e._root,t):e._root}function Wa(e,t){return e=(0,o.m9)(e),null===ft(e._path)?Ko("child","path",t,!1):Yo("child","path",t,!1),new Ua(e._repo,vt(e._path,t))}function $a(e){return Xo("remove",e._path),Ga(e,null)}function Ga(e,t){e=(0,o.m9)(e),Xo("set",e._path),qo("set",t,e._path,!1);const n=new o.BH;return pa(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ya(e,t){Go("update",t,e._path,!1);const n=new o.BH;return ma(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Ka{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Oa("value",this,new Ba(e.snapshotNode,new Ua(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Da(this,e,t):null}matches(e){return e instanceof Ka&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Xa{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Da(this,e,t):null}createEvent(e,t){(0,o.hu)(null!=e.childName,"Child events should have a childName.");const n=Wa(new Ua(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Oa(e.type,this,new Ba(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Xa&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ja(e,t,n,i,r){let o;if("object"===typeof i&&(o=void 0,r=i),"function"===typeof i&&(o=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{ga(e._repo,e,c),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const a=new Fa(n,o||void 0),c="value"===t?new Ka(a):new Xa(t,a);return va(e._repo,e,c),()=>ga(e._repo,e,c)}function Qa(e,t,n,i){return Ja(e,"value",t,n,i)}_r(Ua),Dr(Ua);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Za="FIREBASE_DATABASE_EMULATOR_HOST",ec={};let tc=!1;function nc(e,t,n,i,r){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||_("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,c,s=Pa(o,r),C=s.repoInfo;"undefined"!==typeof process&&(c={NODE_ENV:"production",BASE_URL:"/"}[Za]),c?(a=!0,o=`http://${c}?ns=${C.namespace}`,s=Pa(o,r),C=s.repoInfo):a=!s.repoInfo.secure;const l=r&&a?new Q(Q.OWNER):new J(e.name,e.options,t);Jo("Invalid Firebase Database URL",s),gt(s.path)||_("Database URL must point to the root of a Firebase Database (not including a child path).");const f=rc(C,e,l,new X(e.name,n));return new oc(f,e)}function ic(e,t){const n=ec[t];n&&n[e.key]===e||_(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Ma(e),delete n[e.key]}function rc(e,t,n,i){let r=ec[t.name];r||(r={},ec[t.name]=r);let o=r[e.toURLString()];return o&&_("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new aa(e,tc,n,i),r[e.toURLString()]=o,o}class oc{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ca(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ua(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ic(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&_("Cannot call "+e+" on a deleted database.")}}function ac(e=(0,i.Mq)(),t){return(0,i.qX)(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cc(e){l(i.Jn),(0,i.Xd)(new r.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return nc(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(c,s,e),(0,i.KN)(c,s,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Rt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};cc()},3413:function(e,t,n){"use strict";n.r(t),n.d(t,{MultiDrag:function(){return Bt},Sortable:function(){return nt},Swap:function(){return kt}});n(1703);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}function C(e,t){if(null==e)return{};var n,i,r=s(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e){return f(e)||u(e)||h(e)||p()}function f(e){if(Array.isArray(e))return d(e)}function u(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function h(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var m="1.14.0";function L(e){if("undefined"!==typeof window&&window.navigator)return!!navigator.userAgent.match(e)}var v=L(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),g=L(/Edge/i),M=L(/firefox/i),V=L(/safari/i)&&!L(/chrome/i)&&!L(/android/i),H=L(/iP(ad|od|hone)/i),z=L(/chrome/i)&&L(/android/i),y={capture:!1,passive:!1};function b(e,t,n){e.addEventListener(t,n,!v&&y)}function _(e,t,n){e.removeEventListener(t,n,!v&&y)}function x(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(n){return!1}return!1}}function w(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function S(e,t,n,i){if(e){n=n||document;do{if(null!=t&&(">"===t[0]?e.parentNode===n&&x(e,t):x(e,t))||i&&e===n)return e;if(e===n)break}while(e=w(e))}return null}var N,k=/\s+/g;function E(e,t,n){if(e&&t)if(e.classList)e.classList[n?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(k," ").replace(" "+t+" "," ");e.className=(i+(n?" "+t:"")).replace(k," ")}}function T(e,t,n){var i=e&&e.style;if(i){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=n+("string"===typeof n?"":"px")}}function I(e,t){var n="";if("string"===typeof e)n=e;else do{var i=T(e,"transform");i&&"none"!==i&&(n=i+" "+n)}while(!t&&(e=e.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(n)}function A(e,t,n){if(e){var i=e.getElementsByTagName(t),r=0,o=i.length;if(n)for(;r<o;r++)n(i[r],r);return i}return[]}function P(){var e=document.scrollingElement;return e||document.documentElement}function R(e,t,n,i,r){if(e.getBoundingClientRect||e===window){var o,a,c,s,C,l,f;if(e!==window&&e.parentNode&&e!==P()?(o=e.getBoundingClientRect(),a=o.top,c=o.left,s=o.bottom,C=o.right,l=o.height,f=o.width):(a=0,c=0,s=window.innerHeight,C=window.innerWidth,l=window.innerHeight,f=window.innerWidth),(t||n)&&e!==window&&(r=r||e.parentNode,!v))do{if(r&&r.getBoundingClientRect&&("none"!==T(r,"transform")||n&&"static"!==T(r,"position"))){var u=r.getBoundingClientRect();a-=u.top+parseInt(T(r,"border-top-width")),c-=u.left+parseInt(T(r,"border-left-width")),s=a+o.height,C=c+o.width;break}}while(r=r.parentNode);if(i&&e!==window){var h=I(r||e),d=h&&h.a,p=h&&h.d;h&&(a/=p,c/=d,f/=d,l/=p,s=a+l,C=c+f)}return{top:a,left:c,bottom:s,right:C,width:f,height:l}}}function O(e,t,n){var i=q(e,!0),r=R(e)[t];while(i){var o=R(i)[n],a=void 0;if(a="top"===n||"left"===n?r>=o:r<=o,!a)return i;if(i===P())break;i=q(i,!1)}return!1}function D(e,t,n,i){var r=0,o=0,a=e.children;while(o<a.length){if("none"!==a[o].style.display&&a[o]!==nt.ghost&&(i||a[o]!==nt.dragged)&&S(a[o],n.draggable,e,!1)){if(r===t)return a[o];r++}o++}return null}function F(e,t){var n=e.lastElementChild;while(n&&(n===nt.ghost||"none"===T(n,"display")||t&&!x(n,t)))n=n.previousElementSibling;return n||null}function j(e,t){var n=0;if(!e||!e.parentNode)return-1;while(e=e.previousElementSibling)"TEMPLATE"===e.nodeName.toUpperCase()||e===nt.clone||t&&!x(e,t)||n++;return n}function U(e){var t=0,n=0,i=P();if(e)do{var r=I(e),o=r.a,a=r.d;t+=e.scrollLeft*o,n+=e.scrollTop*a}while(e!==i&&(e=e.parentNode));return[t,n]}function B(e,t){for(var n in e)if(e.hasOwnProperty(n))for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[n][i])return Number(n);return-1}function q(e,t){if(!e||!e.getBoundingClientRect)return P();var n=e,i=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var r=T(n);if(n.clientWidth<n.scrollWidth&&("auto"==r.overflowX||"scroll"==r.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==r.overflowY||"scroll"==r.overflowY)){if(!n.getBoundingClientRect||n===document.body)return P();if(i||t)return n;i=!0}}}while(n=n.parentNode);return P()}function W(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function $(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function G(e,t){return function(){if(!N){var n=arguments,i=this;1===n.length?e.call(i,n[0]):e.apply(i,n),N=setTimeout((function(){N=void 0}),t)}}}function Y(){clearTimeout(N),N=void 0}function K(e,t,n){e.scrollLeft+=t,e.scrollTop+=n}function X(e){var t=window.Polymer,n=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0)}function J(e,t){T(e,"position","absolute"),T(e,"top",t.top),T(e,"left",t.left),T(e,"width",t.width),T(e,"height",t.height)}function Q(e){T(e,"position",""),T(e,"top",""),T(e,"left",""),T(e,"width",""),T(e,"height","")}var Z="Sortable"+(new Date).getTime();function ee(){var e,t=[];return{captureAnimationState:function(){if(t=[],this.options.animation){var e=[].slice.call(this.el.children);e.forEach((function(e){if("none"!==T(e,"display")&&e!==nt.ghost){t.push({target:e,rect:R(e)});var n=r({},t[t.length-1].rect);if(e.thisAnimationDuration){var i=I(e,!0);i&&(n.top-=i.f,n.left-=i.e)}e.fromRect=n}}))}},addAnimationState:function(e){t.push(e)},removeAnimationState:function(e){t.splice(B(t,{target:e}),1)},animateAll:function(n){var i=this;if(!this.options.animation)return clearTimeout(e),void("function"===typeof n&&n());var r=!1,o=0;t.forEach((function(e){var t=0,n=e.target,a=n.fromRect,c=R(n),s=n.prevFromRect,C=n.prevToRect,l=e.rect,f=I(n,!0);f&&(c.top-=f.f,c.left-=f.e),n.toRect=c,n.thisAnimationDuration&&$(s,c)&&!$(a,c)&&(l.top-c.top)/(l.left-c.left)===(a.top-c.top)/(a.left-c.left)&&(t=ne(l,s,C,i.options)),$(c,a)||(n.prevFromRect=a,n.prevToRect=c,t||(t=i.options.animation),i.animate(n,l,c,t)),t&&(r=!0,o=Math.max(o,t),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout((function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null}),t),n.thisAnimationDuration=t)})),clearTimeout(e),r?e=setTimeout((function(){"function"===typeof n&&n()}),o):"function"===typeof n&&n(),t=[]},animate:function(e,t,n,i){if(i){T(e,"transition",""),T(e,"transform","");var r=I(this.el),o=r&&r.a,a=r&&r.d,c=(t.left-n.left)/(o||1),s=(t.top-n.top)/(a||1);e.animatingX=!!c,e.animatingY=!!s,T(e,"transform","translate3d("+c+"px,"+s+"px,0)"),this.forRepaintDummy=te(e),T(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),T(e,"transform","translate3d(0,0,0)"),"number"===typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout((function(){T(e,"transition",""),T(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1}),i)}}}}function te(e){return e.offsetWidth}function ne(e,t,n,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-n.top,2)+Math.pow(t.left-n.left,2))*i.animation}var ie=[],re={initializeByDefault:!0},oe={mount:function(e){for(var t in re)re.hasOwnProperty(t)&&!(t in e)&&(e[t]=re[t]);ie.forEach((function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")})),ie.push(e)},pluginEvent:function(e,t,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var o=e+"Global";ie.forEach((function(i){t[i.pluginName]&&(t[i.pluginName][o]&&t[i.pluginName][o](r({sortable:t},n)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](r({sortable:t},n)))}))},initializePlugins:function(e,t,n,i){for(var r in ie.forEach((function(i){var r=i.pluginName;if(e.options[r]||i.initializeByDefault){var o=new i(e,t,e.options);o.sortable=e,o.options=e.options,e[r]=o,c(n,o.defaults)}})),e.options)if(e.options.hasOwnProperty(r)){var o=this.modifyOption(e,r,e.options[r]);"undefined"!==typeof o&&(e.options[r]=o)}},getEventProperties:function(e,t){var n={};return ie.forEach((function(i){"function"===typeof i.eventProperties&&c(n,i.eventProperties.call(t[i.pluginName],e))})),n},modifyOption:function(e,t,n){var i;return ie.forEach((function(r){e[r.pluginName]&&r.optionListeners&&"function"===typeof r.optionListeners[t]&&(i=r.optionListeners[t].call(e[r.pluginName],n))})),i}};function ae(e){var t=e.sortable,n=e.rootEl,i=e.name,o=e.targetEl,a=e.cloneEl,c=e.toEl,s=e.fromEl,C=e.oldIndex,l=e.newIndex,f=e.oldDraggableIndex,u=e.newDraggableIndex,h=e.originalEvent,d=e.putSortable,p=e.extraEventProperties;if(t=t||n&&n[Z],t){var m,L=t.options,M="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||v||g?(m=document.createEvent("Event"),m.initEvent(i,!0,!0)):m=new CustomEvent(i,{bubbles:!0,cancelable:!0}),m.to=c||n,m.from=s||n,m.item=o||n,m.clone=a,m.oldIndex=C,m.newIndex=l,m.oldDraggableIndex=f,m.newDraggableIndex=u,m.originalEvent=h,m.pullMode=d?d.lastPutMode:void 0;var V=r(r({},p),oe.getEventProperties(i,t));for(var H in V)m[H]=V[H];n&&n.dispatchEvent(m),L[M]&&L[M].call(t,m)}}var ce=["evt"],se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.evt,o=C(n,ce);oe.pluginEvent.bind(nt)(e,t,r({dragEl:le,parentEl:fe,ghostEl:ue,rootEl:he,nextEl:de,lastDownEl:pe,cloneEl:me,cloneHidden:Le,dragStarted:Ne,putSortable:ze,activeSortable:nt.active,originalEvent:i,oldIndex:ve,oldDraggableIndex:Me,newIndex:ge,newDraggableIndex:Ve,hideGhostForTarget:Qe,unhideGhostForTarget:Ze,cloneNowHidden:function(){Le=!0},cloneNowShown:function(){Le=!1},dispatchSortableEvent:function(e){Ce({sortable:t,name:e,originalEvent:i})}},o))};function Ce(e){ae(r({putSortable:ze,cloneEl:me,targetEl:le,rootEl:he,oldIndex:ve,oldDraggableIndex:Me,newIndex:ge,newDraggableIndex:Ve},e))}var le,fe,ue,he,de,pe,me,Le,ve,ge,Me,Ve,He,ze,ye,be,_e,xe,we,Se,Ne,ke,Ee,Te,Ie,Ae=!1,Pe=!1,Re=[],Oe=!1,De=!1,Fe=[],je=!1,Ue=[],Be="undefined"!==typeof document,qe=H,We=g||v?"cssFloat":"float",$e=Be&&!z&&!H&&"draggable"in document.createElement("div"),Ge=function(){if(Be){if(v)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),Ye=function(e,t){var n=T(e),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=D(e,0,t),o=D(e,1,t),a=r&&T(r),c=o&&T(o),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+R(r).width,C=c&&parseInt(c.marginLeft)+parseInt(c.marginRight)+R(o).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&a["float"]&&"none"!==a["float"]){var l="left"===a["float"]?"left":"right";return!o||"both"!==c.clear&&c.clear!==l?"horizontal":"vertical"}return r&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=i&&"none"===n[We]||o&&"none"===n[We]&&s+C>i)?"vertical":"horizontal"},Ke=function(e,t,n){var i=n?e.left:e.top,r=n?e.right:e.bottom,o=n?e.width:e.height,a=n?t.left:t.top,c=n?t.right:t.bottom,s=n?t.width:t.height;return i===a||r===c||i+o/2===a+s/2},Xe=function(e,t){var n;return Re.some((function(i){var r=i[Z].options.emptyInsertThreshold;if(r&&!F(i)){var o=R(i),a=e>=o.left-r&&e<=o.right+r,c=t>=o.top-r&&t<=o.bottom+r;return a&&c?n=i:void 0}})),n},Je=function(e){function t(e,n){return function(i,r,o,a){var c=i.options.group.name&&r.options.group.name&&i.options.group.name===r.options.group.name;if(null==e&&(n||c))return!0;if(null==e||!1===e)return!1;if(n&&"clone"===e)return e;if("function"===typeof e)return t(e(i,r,o,a),n)(i,r,o,a);var s=(n?i:r).options.group.name;return!0===e||"string"===typeof e&&e===s||e.join&&e.indexOf(s)>-1}}var n={},i=e.group;i&&"object"==o(i)||(i={name:i}),n.name=i.name,n.checkPull=t(i.pull,!0),n.checkPut=t(i.put),n.revertClone=i.revertClone,e.group=n},Qe=function(){!Ge&&ue&&T(ue,"display","none")},Ze=function(){!Ge&&ue&&T(ue,"display","")};Be&&document.addEventListener("click",(function(e){if(Pe)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Pe=!1,!1}),!0);var et=function(e){if(le){e=e.touches?e.touches[0]:e;var t=Xe(e.clientX,e.clientY);if(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[Z]._onDragOver(n)}}},tt=function(e){le&&le.parentNode[Z]._isOutsideThisEl(e.target)};function nt(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=c({},t),e[Z]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ye(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==nt.supportPointer&&"PointerEvent"in window&&!V,emptyInsertThreshold:5};for(var i in oe.initializePlugins(this,e,n),n)!(i in t)&&(t[i]=n[i]);for(var r in Je(t),this)"_"===r.charAt(0)&&"function"===typeof this[r]&&(this[r]=this[r].bind(this));this.nativeDraggable=!t.forceFallback&&$e,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?b(e,"pointerdown",this._onTapStart):(b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Re.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),c(this,ee())}function it(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function rt(e,t,n,i,r,o,a,c){var s,C,l=e[Z],f=l.options.onMove;return!window.CustomEvent||v||g?(s=document.createEvent("Event"),s.initEvent("move",!0,!0)):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=t,s.from=e,s.dragged=n,s.draggedRect=i,s.related=r||t,s.relatedRect=o||R(t),s.willInsertAfter=c,s.originalEvent=a,e.dispatchEvent(s),f&&(C=f.call(l,s,a)),C}function ot(e){e.draggable=!1}function at(){je=!1}function ct(e,t,n){var i=R(D(n.el,0,n.options,!0)),r=10;return t?e.clientX<i.left-r||e.clientY<i.top&&e.clientX<i.right:e.clientY<i.top-r||e.clientY<i.bottom&&e.clientX<i.left}function st(e,t,n){var i=R(F(n.el,n.options.draggable)),r=10;return t?e.clientX>i.right+r||e.clientX<=i.right&&e.clientY>i.bottom&&e.clientX>=i.left:e.clientX>i.right&&e.clientY>i.top||e.clientX<=i.right&&e.clientY>i.bottom+r}function Ct(e,t,n,i,r,o,a,c){var s=i?e.clientY:e.clientX,C=i?n.height:n.width,l=i?n.top:n.left,f=i?n.bottom:n.right,u=!1;if(!a)if(c&&Te<C*r){if(!Oe&&(1===Ee?s>l+C*o/2:s<f-C*o/2)&&(Oe=!0),Oe)u=!0;else if(1===Ee?s<l+Te:s>f-Te)return-Ee}else if(s>l+C*(1-r)/2&&s<f-C*(1-r)/2)return lt(t);return u=u||a,u&&(s<l+C*o/2||s>f-C*o/2)?s>l+C/2?1:-1:0}function lt(e){return j(le)<j(e)?1:-1}function ft(e){var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,i=0;while(n--)i+=t.charCodeAt(n);return i.toString(36)}function ut(e){Ue.length=0;var t=e.getElementsByTagName("input"),n=t.length;while(n--){var i=t[n];i.checked&&Ue.push(i)}}function ht(e){return setTimeout(e,0)}function dt(e){return clearTimeout(e)}nt.prototype={constructor:nt,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(ke=null)},_getDirection:function(e,t){return"function"===typeof this.options.direction?this.options.direction.call(this,e,t,le):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,i=this.options,r=i.preventOnFilter,o=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,c=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||c,C=i.filter;if(ut(n),!le&&!(/mousedown|pointerdown/.test(o)&&0!==e.button||i.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!V||!c||"SELECT"!==c.tagName.toUpperCase())&&(c=S(c,i.draggable,n,!1),(!c||!c.animated)&&pe!==c)){if(ve=j(c),Me=j(c,i.draggable),"function"===typeof C){if(C.call(this,e,c,this))return Ce({sortable:t,rootEl:s,name:"filter",targetEl:c,toEl:n,fromEl:n}),se("filter",t,{evt:e}),void(r&&e.cancelable&&e.preventDefault())}else if(C&&(C=C.split(",").some((function(i){if(i=S(s,i.trim(),n,!1),i)return Ce({sortable:t,rootEl:i,name:"filter",targetEl:c,fromEl:n,toEl:n}),se("filter",t,{evt:e}),!0})),C))return void(r&&e.cancelable&&e.preventDefault());i.handle&&!S(s,i.handle,n,!1)||this._prepareDragStart(e,a,c)}}},_prepareDragStart:function(e,t,n){var i,r=this,o=r.el,a=r.options,c=o.ownerDocument;if(n&&!le&&n.parentNode===o){var s=R(n);if(he=o,le=n,fe=le.parentNode,de=le.nextSibling,pe=n,He=a.group,nt.dragged=le,ye={target:le,clientX:(t||e).clientX,clientY:(t||e).clientY},we=ye.clientX-s.left,Se=ye.clientY-s.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,le.style["will-change"]="all",i=function(){se("delayEnded",r,{evt:e}),nt.eventCanceled?r._onDrop():(r._disableDelayedDragEvents(),!M&&r.nativeDraggable&&(le.draggable=!0),r._triggerDragStart(e,t),Ce({sortable:r,name:"choose",originalEvent:e}),E(le,a.chosenClass,!0))},a.ignore.split(",").forEach((function(e){A(le,e.trim(),ot)})),b(c,"dragover",et),b(c,"mousemove",et),b(c,"touchmove",et),b(c,"mouseup",r._onDrop),b(c,"touchend",r._onDrop),b(c,"touchcancel",r._onDrop),M&&this.nativeDraggable&&(this.options.touchStartThreshold=4,le.draggable=!0),se("delayStart",this,{evt:e}),!a.delay||a.delayOnTouchOnly&&!t||this.nativeDraggable&&(g||v))i();else{if(nt.eventCanceled)return void this._onDrop();b(c,"mouseup",r._disableDelayedDrag),b(c,"touchend",r._disableDelayedDrag),b(c,"touchcancel",r._disableDelayedDrag),b(c,"mousemove",r._delayedDragTouchMoveHandler),b(c,"touchmove",r._delayedDragTouchMoveHandler),a.supportPointer&&b(c,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(i,a.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){le&&ot(le),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;_(e,"mouseup",this._disableDelayedDrag),_(e,"touchend",this._disableDelayedDrag),_(e,"touchcancel",this._disableDelayedDrag),_(e,"mousemove",this._delayedDragTouchMoveHandler),_(e,"touchmove",this._delayedDragTouchMoveHandler),_(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?b(document,"pointermove",this._onTouchMove):b(document,t?"touchmove":"mousemove",this._onTouchMove):(b(le,"dragend",this),b(he,"dragstart",this._onDragStart));try{document.selection?ht((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(n){}},_dragStarted:function(e,t){if(Ae=!1,he&&le){se("dragStarted",this,{evt:t}),this.nativeDraggable&&b(document,"dragover",tt);var n=this.options;!e&&E(le,n.dragClass,!1),E(le,n.ghostClass,!0),nt.active=this,e&&this._appendGhost(),Ce({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(be){this._lastX=be.clientX,this._lastY=be.clientY,Qe();var e=document.elementFromPoint(be.clientX,be.clientY),t=e;while(e&&e.shadowRoot){if(e=e.shadowRoot.elementFromPoint(be.clientX,be.clientY),e===t)break;t=e}if(le.parentNode[Z]._isOutsideThisEl(e),t)do{if(t[Z]){var n=void 0;if(n=t[Z]._onDragOver({clientX:be.clientX,clientY:be.clientY,target:e,rootEl:t}),n&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);Ze()}},_onTouchMove:function(e){if(ye){var t=this.options,n=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,o=ue&&I(ue,!0),a=ue&&o&&o.a,c=ue&&o&&o.d,s=qe&&Ie&&U(Ie),C=(r.clientX-ye.clientX+i.x)/(a||1)+(s?s[0]-Fe[0]:0)/(a||1),l=(r.clientY-ye.clientY+i.y)/(c||1)+(s?s[1]-Fe[1]:0)/(c||1);if(!nt.active&&!Ae){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(ue){o?(o.e+=C-(_e||0),o.f+=l-(xe||0)):o={a:1,b:0,c:0,d:1,e:C,f:l};var f="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");T(ue,"webkitTransform",f),T(ue,"mozTransform",f),T(ue,"msTransform",f),T(ue,"transform",f),_e=C,xe=l,be=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!ue){var e=this.options.fallbackOnBody?document.body:he,t=R(le,!0,qe,!0,e),n=this.options;if(qe){Ie=e;while("static"===T(Ie,"position")&&"none"===T(Ie,"transform")&&Ie!==document)Ie=Ie.parentNode;Ie!==document.body&&Ie!==document.documentElement?(Ie===document&&(Ie=P()),t.top+=Ie.scrollTop,t.left+=Ie.scrollLeft):Ie=P(),Fe=U(Ie)}ue=le.cloneNode(!0),E(ue,n.ghostClass,!1),E(ue,n.fallbackClass,!0),E(ue,n.dragClass,!0),T(ue,"transition",""),T(ue,"transform",""),T(ue,"box-sizing","border-box"),T(ue,"margin",0),T(ue,"top",t.top),T(ue,"left",t.left),T(ue,"width",t.width),T(ue,"height",t.height),T(ue,"opacity","0.8"),T(ue,"position",qe?"absolute":"fixed"),T(ue,"zIndex","100000"),T(ue,"pointerEvents","none"),nt.ghost=ue,e.appendChild(ue),T(ue,"transform-origin",we/parseInt(ue.style.width)*100+"% "+Se/parseInt(ue.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,i=e.dataTransfer,r=n.options;se("dragStart",this,{evt:e}),nt.eventCanceled?this._onDrop():(se("setupClone",this),nt.eventCanceled||(me=X(le),me.draggable=!1,me.style["will-change"]="",this._hideClone(),E(me,this.options.chosenClass,!1),nt.clone=me),n.cloneId=ht((function(){se("clone",n),nt.eventCanceled||(n.options.removeCloneOnHide||he.insertBefore(me,le),n._hideClone(),Ce({sortable:n,name:"clone"}))})),!t&&E(le,r.dragClass,!0),t?(Pe=!0,n._loopId=setInterval(n._emulateDragOver,50)):(_(document,"mouseup",n._onDrop),_(document,"touchend",n._onDrop),_(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(n,i,le)),b(document,"drop",n),T(le,"transform","translateZ(0)")),Ae=!0,n._dragStartId=ht(n._dragStarted.bind(n,t,e)),b(document,"selectstart",n),Ne=!0,V&&T(document.body,"user-select","none"))},_onDragOver:function(e){var t,n,i,o,a=this.el,c=e.target,s=this.options,C=s.group,l=nt.active,f=He===C,u=s.sort,h=ze||l,d=this,p=!1;if(!je){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),c=S(c,s.draggable,a,!0),k("dragOver"),nt.eventCanceled)return p;if(le.contains(e.target)||c.animated&&c.animatingX&&c.animatingY||d._ignoreWhileAnimating===c)return A(!1);if(Pe=!1,l&&!s.disabled&&(f?u||(i=fe!==he):ze===this||(this.lastPutMode=He.checkPull(this,l,le,e))&&C.checkPut(this,l,le,e))){if(o="vertical"===this._getDirection(e,c),t=R(le),k("dragOverValid"),nt.eventCanceled)return p;if(i)return fe=he,I(),this._hideClone(),k("revert"),nt.eventCanceled||(de?he.insertBefore(le,de):he.appendChild(le)),A(!0);var m=F(a,s.draggable);if(!m||st(e,o,this)&&!m.animated){if(m===le)return A(!1);if(m&&a===e.target&&(c=m),c&&(n=R(c)),!1!==rt(he,a,le,t,c,n,e,!!c))return I(),a.appendChild(le),fe=a,P(),A(!0)}else if(m&&ct(e,o,this)){var L=D(a,0,s,!0);if(L===le)return A(!1);if(c=L,n=R(c),!1!==rt(he,a,le,t,c,n,e,!1))return I(),a.insertBefore(le,L),fe=a,P(),A(!0)}else if(c.parentNode===a){n=R(c);var v,g,M=0,V=le.parentNode!==a,H=!Ke(le.animated&&le.toRect||t,c.animated&&c.toRect||n,o),z=o?"top":"left",y=O(c,"top","top")||O(le,"top","top"),b=y?y.scrollTop:void 0;if(ke!==c&&(v=n[z],Oe=!1,De=!H&&s.invertSwap||V),M=Ct(e,c,n,o,H?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,De,ke===c),0!==M){var _=j(le);do{_-=M,g=fe.children[_]}while(g&&("none"===T(g,"display")||g===ue))}if(0===M||g===c)return A(!1);ke=c,Ee=M;var x=c.nextElementSibling,w=!1;w=1===M;var N=rt(he,a,le,t,c,n,e,w);if(!1!==N)return 1!==N&&-1!==N||(w=1===N),je=!0,setTimeout(at,30),I(),w&&!x?a.appendChild(le):c.parentNode.insertBefore(le,w?x:c),y&&K(y,0,b-y.scrollTop),fe=le.parentNode,void 0===v||De||(Te=Math.abs(v-R(c)[z])),P(),A(!0)}if(a.contains(le))return A(!1)}return!1}function k(s,C){se(s,d,r({evt:e,isOwner:f,axis:o?"vertical":"horizontal",revert:i,dragRect:t,targetRect:n,canSort:u,fromSortable:h,target:c,completed:A,onMove:function(n,i){return rt(he,a,le,t,n,R(n),e,i)},changed:P},C))}function I(){k("dragOverAnimationCapture"),d.captureAnimationState(),d!==h&&h.captureAnimationState()}function A(t){return k("dragOverCompleted",{insertion:t}),t&&(f?l._hideClone():l._showClone(d),d!==h&&(E(le,ze?ze.options.ghostClass:l.options.ghostClass,!1),E(le,s.ghostClass,!0)),ze!==d&&d!==nt.active?ze=d:d===nt.active&&ze&&(ze=null),h===d&&(d._ignoreWhileAnimating=c),d.animateAll((function(){k("dragOverAnimationComplete"),d._ignoreWhileAnimating=null})),d!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(c===le&&!le.animated||c===a&&!c.animated)&&(ke=null),s.dragoverBubble||e.rootEl||c===document||(le.parentNode[Z]._isOutsideThisEl(e.target),!t&&et(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),p=!0}function P(){ge=j(le),Ve=j(le,s.draggable),Ce({sortable:d,name:"change",toEl:a,newIndex:ge,newDraggableIndex:Ve,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){_(document,"mousemove",this._onTouchMove),_(document,"touchmove",this._onTouchMove),_(document,"pointermove",this._onTouchMove),_(document,"dragover",et),_(document,"mousemove",et),_(document,"touchmove",et)},_offUpEvents:function(){var e=this.el.ownerDocument;_(e,"mouseup",this._onDrop),_(e,"touchend",this._onDrop),_(e,"pointerup",this._onDrop),_(e,"touchcancel",this._onDrop),_(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;ge=j(le),Ve=j(le,n.draggable),se("drop",this,{evt:e}),fe=le&&le.parentNode,ge=j(le),Ve=j(le,n.draggable),nt.eventCanceled||(Ae=!1,De=!1,Oe=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),dt(this.cloneId),dt(this._dragStartId),this.nativeDraggable&&(_(document,"drop",this),_(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),V&&T(document.body,"user-select",""),T(le,"transform",""),e&&(Ne&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),ue&&ue.parentNode&&ue.parentNode.removeChild(ue),(he===fe||ze&&"clone"!==ze.lastPutMode)&&me&&me.parentNode&&me.parentNode.removeChild(me),le&&(this.nativeDraggable&&_(le,"dragend",this),ot(le),le.style["will-change"]="",Ne&&!Ae&&E(le,ze?ze.options.ghostClass:this.options.ghostClass,!1),E(le,this.options.chosenClass,!1),Ce({sortable:this,name:"unchoose",toEl:fe,newIndex:null,newDraggableIndex:null,originalEvent:e}),he!==fe?(ge>=0&&(Ce({rootEl:fe,name:"add",toEl:fe,fromEl:he,originalEvent:e}),Ce({sortable:this,name:"remove",toEl:fe,originalEvent:e}),Ce({rootEl:fe,name:"sort",toEl:fe,fromEl:he,originalEvent:e}),Ce({sortable:this,name:"sort",toEl:fe,originalEvent:e})),ze&&ze.save()):ge!==ve&&ge>=0&&(Ce({sortable:this,name:"update",toEl:fe,originalEvent:e}),Ce({sortable:this,name:"sort",toEl:fe,originalEvent:e})),nt.active&&(null!=ge&&-1!==ge||(ge=ve,Ve=Me),Ce({sortable:this,name:"end",toEl:fe,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){se("nulling",this),he=le=fe=ue=de=me=pe=Le=ye=be=Ne=ge=Ve=ve=Me=ke=Ee=ze=He=nt.dragged=nt.ghost=nt.clone=nt.active=null,Ue.forEach((function(e){e.checked=!0})),Ue.length=_e=xe=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":le&&(this._onDragOver(e),it(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e,t=[],n=this.el.children,i=0,r=n.length,o=this.options;i<r;i++)e=n[i],S(e,o.draggable,this.el,!1)&&t.push(e.getAttribute(o.dataIdAttr)||ft(e));return t},sort:function(e,t){var n={},i=this.el;this.toArray().forEach((function(e,t){var r=i.children[t];S(r,this.options.draggable,i,!1)&&(n[e]=r)}),this),t&&this.captureAnimationState(),e.forEach((function(e){n[e]&&(i.removeChild(n[e]),i.appendChild(n[e]))})),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return S(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(void 0===t)return n[e];var i=oe.modifyOption(this,e,t);n[e]="undefined"!==typeof i?i:t,"group"===e&&Je(n)},destroy:function(){se("destroy",this);var e=this.el;e[Z]=null,_(e,"mousedown",this._onTapStart),_(e,"touchstart",this._onTapStart),_(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(_(e,"dragover",this),_(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),(function(e){e.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Re.splice(Re.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Le){if(se("hideClone",this),nt.eventCanceled)return;T(me,"display","none"),this.options.removeCloneOnHide&&me.parentNode&&me.parentNode.removeChild(me),Le=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(Le){if(se("showClone",this),nt.eventCanceled)return;le.parentNode!=he||this.options.group.revertClone?de?he.insertBefore(me,de):he.appendChild(me):he.insertBefore(me,le),this.options.group.revertClone&&this.animate(le,me),T(me,"display",""),Le=!1}}else this._hideClone()}},Be&&b(document,"touchmove",(function(e){(nt.active||Ae)&&e.cancelable&&e.preventDefault()})),nt.utils={on:b,off:_,css:T,find:A,is:function(e,t){return!!S(e,t,e,!1)},extend:W,throttle:G,closest:S,toggleClass:E,clone:X,index:j,nextTick:ht,cancelNextTick:dt,detectDirection:Ye,getChild:D},nt.get=function(e){return e[Z]},nt.mount=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t[0].constructor===Array&&(t=t[0]),t.forEach((function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(nt.utils=r(r({},nt.utils),e.utils)),oe.mount(e)}))},nt.create=function(e,t){return new nt(e,t)},nt.version=m;var pt,mt,Lt,vt,gt,Mt,Vt=[],Ht=!1;function zt(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"===typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):this.options.supportPointer?b(document,"pointermove",this._handleFallbackAutoScroll):t.touches?b(document,"touchmove",this._handleFallbackAutoScroll):b(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):(_(document,"pointermove",this._handleFallbackAutoScroll),_(document,"touchmove",this._handleFallbackAutoScroll),_(document,"mousemove",this._handleFallbackAutoScroll)),bt(),yt(),Y()},nulling:function(){gt=mt=pt=Ht=Mt=Lt=vt=null,Vt.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var n=this,i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,o=document.elementFromPoint(i,r);if(gt=e,t||this.options.forceAutoScrollFallback||g||v||V){xt(e,this.options,o,t);var a=q(o,!0);!Ht||Mt&&i===Lt&&r===vt||(Mt&&bt(),Mt=setInterval((function(){var o=q(document.elementFromPoint(i,r),!0);o!==a&&(a=o,yt()),xt(e,n.options,o,t)}),10),Lt=i,vt=r)}else{if(!this.options.bubbleScroll||q(o,!0)===P())return void yt();xt(e,this.options,q(o,!1),!1)}}},c(e,{pluginName:"scroll",initializeByDefault:!0})}function yt(){Vt.forEach((function(e){clearInterval(e.pid)})),Vt=[]}function bt(){clearInterval(Mt)}var _t,xt=G((function(e,t,n,i){if(t.scroll){var r,o=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,c=t.scrollSensitivity,s=t.scrollSpeed,C=P(),l=!1;mt!==n&&(mt=n,yt(),pt=t.scroll,r=t.scrollFn,!0===pt&&(pt=q(n,!0)));var f=0,u=pt;do{var h=u,d=R(h),p=d.top,m=d.bottom,L=d.left,v=d.right,g=d.width,M=d.height,V=void 0,H=void 0,z=h.scrollWidth,y=h.scrollHeight,b=T(h),_=h.scrollLeft,x=h.scrollTop;h===C?(V=g<z&&("auto"===b.overflowX||"scroll"===b.overflowX||"visible"===b.overflowX),H=M<y&&("auto"===b.overflowY||"scroll"===b.overflowY||"visible"===b.overflowY)):(V=g<z&&("auto"===b.overflowX||"scroll"===b.overflowX),H=M<y&&("auto"===b.overflowY||"scroll"===b.overflowY));var w=V&&(Math.abs(v-o)<=c&&_+g<z)-(Math.abs(L-o)<=c&&!!_),S=H&&(Math.abs(m-a)<=c&&x+M<y)-(Math.abs(p-a)<=c&&!!x);if(!Vt[f])for(var N=0;N<=f;N++)Vt[N]||(Vt[N]={});Vt[f].vx==w&&Vt[f].vy==S&&Vt[f].el===h||(Vt[f].el=h,Vt[f].vx=w,Vt[f].vy=S,clearInterval(Vt[f].pid),0==w&&0==S||(l=!0,Vt[f].pid=setInterval(function(){i&&0===this.layer&&nt.active._onTouchMove(gt);var t=Vt[this.layer].vy?Vt[this.layer].vy*s:0,n=Vt[this.layer].vx?Vt[this.layer].vx*s:0;"function"===typeof r&&"continue"!==r.call(nt.dragged.parentNode[Z],n,t,e,gt,Vt[this.layer].el)||K(Vt[this.layer].el,n,t)}.bind({layer:f}),24))),f++}while(t.bubbleScroll&&u!==C&&(u=q(u,!1)));Ht=l}}),30),wt=function(e){var t=e.originalEvent,n=e.putSortable,i=e.dragEl,r=e.activeSortable,o=e.dispatchSortableEvent,a=e.hideGhostForTarget,c=e.unhideGhostForTarget;if(t){var s=n||r;a();var C=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,l=document.elementFromPoint(C.clientX,C.clientY);c(),s&&!s.el.contains(l)&&(o("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function St(){}function Nt(){}function kt(){function e(){this.defaults={swapClass:"sortable-swap-highlight"}}return e.prototype={dragStart:function(e){var t=e.dragEl;_t=t},dragOverValid:function(e){var t=e.completed,n=e.target,i=e.onMove,r=e.activeSortable,o=e.changed,a=e.cancel;if(r.options.swap){var c=this.sortable.el,s=this.options;if(n&&n!==c){var C=_t;!1!==i(n)?(E(n,s.swapClass,!0),_t=n):_t=null,C&&C!==_t&&E(C,s.swapClass,!1)}o(),t(!0),a()}},drop:function(e){var t=e.activeSortable,n=e.putSortable,i=e.dragEl,r=n||this.sortable,o=this.options;_t&&E(_t,o.swapClass,!1),_t&&(o.swap||n&&n.options.swap)&&i!==_t&&(r.captureAnimationState(),r!==t&&t.captureAnimationState(),Et(i,_t),r.animateAll(),r!==t&&t.animateAll())},nulling:function(){_t=null}},c(e,{pluginName:"swap",eventProperties:function(){return{swapItem:_t}}})}function Et(e,t){var n,i,r=e.parentNode,o=t.parentNode;r&&o&&!r.isEqualNode(t)&&!o.isEqualNode(e)&&(n=j(e),i=j(t),r.isEqualNode(o)&&n<i&&i++,r.insertBefore(t,r.children[n]),o.insertBefore(e,o.children[i]))}St.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=D(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:wt},c(St,{pluginName:"revertOnSpill"}),Nt.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable,i=n||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:wt},c(Nt,{pluginName:"removeOnSpill"});var Tt,It,At,Pt,Rt,Ot=[],Dt=[],Ft=!1,jt=!1,Ut=!1;function Bt(){function e(e){for(var t in this)"_"===t.charAt(0)&&"function"===typeof this[t]&&(this[t]=this[t].bind(this));e.options.supportPointer?b(document,"pointerup",this._deselectMultiDrag):(b(document,"mouseup",this._deselectMultiDrag),b(document,"touchend",this._deselectMultiDrag)),b(document,"keydown",this._checkKeyDown),b(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,n){var i="";Ot.length&&It===e?Ot.forEach((function(e,t){i+=(t?", ":"")+e.textContent})):i=n.textContent,t.setData("Text",i)}}}return e.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(e){var t=e.dragEl;At=t},delayEnded:function(){this.isMultiDrag=~Ot.indexOf(At)},setupClone:function(e){var t=e.sortable,n=e.cancel;if(this.isMultiDrag){for(var i=0;i<Ot.length;i++)Dt.push(X(Ot[i])),Dt[i].sortableIndex=Ot[i].sortableIndex,Dt[i].draggable=!1,Dt[i].style["will-change"]="",E(Dt[i],this.options.selectedClass,!1),Ot[i]===At&&E(Dt[i],this.options.chosenClass,!1);t._hideClone(),n()}},clone:function(e){var t=e.sortable,n=e.rootEl,i=e.dispatchSortableEvent,r=e.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||Ot.length&&It===t&&(Wt(!0,n),i("clone"),r()))},showClone:function(e){var t=e.cloneNowShown,n=e.rootEl,i=e.cancel;this.isMultiDrag&&(Wt(!1,n),Dt.forEach((function(e){T(e,"display","")})),t(),Rt=!1,i())},hideClone:function(e){var t=this,n=(e.sortable,e.cloneNowHidden),i=e.cancel;this.isMultiDrag&&(Dt.forEach((function(e){T(e,"display","none"),t.options.removeCloneOnHide&&e.parentNode&&e.parentNode.removeChild(e)})),n(),Rt=!0,i())},dragStartGlobal:function(e){e.sortable;!this.isMultiDrag&&It&&It.multiDrag._deselectMultiDrag(),Ot.forEach((function(e){e.sortableIndex=j(e)})),Ot=Ot.sort((function(e,t){return e.sortableIndex-t.sortableIndex})),Ut=!0},dragStarted:function(e){var t=this,n=e.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){Ot.forEach((function(e){e!==At&&T(e,"position","absolute")}));var i=R(At,!1,!0,!0);Ot.forEach((function(e){e!==At&&J(e,i)})),jt=!0,Ft=!0}n.animateAll((function(){jt=!1,Ft=!1,t.options.animation&&Ot.forEach((function(e){Q(e)})),t.options.sort&&$t()}))}},dragOver:function(e){var t=e.target,n=e.completed,i=e.cancel;jt&&~Ot.indexOf(t)&&(n(!1),i())},revert:function(e){var t=e.fromSortable,n=e.rootEl,i=e.sortable,r=e.dragRect;Ot.length>1&&(Ot.forEach((function(e){i.addAnimationState({target:e,rect:jt?R(e):r}),Q(e),e.fromRect=r,t.removeAnimationState(e)})),jt=!1,qt(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(e){var t=e.sortable,n=e.isOwner,i=e.insertion,r=e.activeSortable,o=e.parentEl,a=e.putSortable,c=this.options;if(i){if(n&&r._hideClone(),Ft=!1,c.animation&&Ot.length>1&&(jt||!n&&!r.options.sort&&!a)){var s=R(At,!1,!0,!0);Ot.forEach((function(e){e!==At&&(J(e,s),o.appendChild(e))})),jt=!0}if(!n)if(jt||$t(),Ot.length>1){var C=Rt;r._showClone(t),r.options.animation&&!Rt&&C&&Dt.forEach((function(e){r.addAnimationState({target:e,rect:Pt}),e.fromRect=Pt,e.thisAnimationDuration=null}))}else r._showClone(t)}},dragOverAnimationCapture:function(e){var t=e.dragRect,n=e.isOwner,i=e.activeSortable;if(Ot.forEach((function(e){e.thisAnimationDuration=null})),i.options.animation&&!n&&i.multiDrag.isMultiDrag){Pt=c({},t);var r=I(At,!0);Pt.top-=r.f,Pt.left-=r.e}},dragOverAnimationComplete:function(){jt&&(jt=!1,$t())},drop:function(e){var t=e.originalEvent,n=e.rootEl,i=e.parentEl,r=e.sortable,o=e.dispatchSortableEvent,a=e.oldIndex,c=e.putSortable,s=c||this.sortable;if(t){var C=this.options,l=i.children;if(!Ut)if(C.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),E(At,C.selectedClass,!~Ot.indexOf(At)),~Ot.indexOf(At))Ot.splice(Ot.indexOf(At),1),Tt=null,ae({sortable:r,rootEl:n,name:"deselect",targetEl:At,originalEvt:t});else{if(Ot.push(At),ae({sortable:r,rootEl:n,name:"select",targetEl:At,originalEvt:t}),t.shiftKey&&Tt&&r.el.contains(Tt)){var f,u,h=j(Tt),d=j(At);if(~h&&~d&&h!==d)for(d>h?(u=h,f=d):(u=d,f=h+1);u<f;u++)~Ot.indexOf(l[u])||(E(l[u],C.selectedClass,!0),Ot.push(l[u]),ae({sortable:r,rootEl:n,name:"select",targetEl:l[u],originalEvt:t}))}else Tt=At;It=s}if(Ut&&this.isMultiDrag){if(jt=!1,(i[Z].options.sort||i!==n)&&Ot.length>1){var p=R(At),m=j(At,":not(."+this.options.selectedClass+")");if(!Ft&&C.animation&&(At.thisAnimationDuration=null),s.captureAnimationState(),!Ft&&(C.animation&&(At.fromRect=p,Ot.forEach((function(e){if(e.thisAnimationDuration=null,e!==At){var t=jt?R(e):p;e.fromRect=t,s.addAnimationState({target:e,rect:t})}}))),$t(),Ot.forEach((function(e){l[m]?i.insertBefore(e,l[m]):i.appendChild(e),m++})),a===j(At))){var L=!1;Ot.forEach((function(e){e.sortableIndex===j(e)||(L=!0)})),L&&o("update")}Ot.forEach((function(e){Q(e)})),s.animateAll()}It=s}(n===i||c&&"clone"!==c.lastPutMode)&&Dt.forEach((function(e){e.parentNode&&e.parentNode.removeChild(e)}))}},nullingGlobal:function(){this.isMultiDrag=Ut=!1,Dt.length=0},destroyGlobal:function(){this._deselectMultiDrag(),_(document,"pointerup",this._deselectMultiDrag),_(document,"mouseup",this._deselectMultiDrag),_(document,"touchend",this._deselectMultiDrag),_(document,"keydown",this._checkKeyDown),_(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(e){if(("undefined"===typeof Ut||!Ut)&&It===this.sortable&&(!e||!S(e.target,this.options.draggable,this.sortable.el,!1))&&(!e||0===e.button))while(Ot.length){var t=Ot[0];E(t,this.options.selectedClass,!1),Ot.shift(),ae({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:t,originalEvt:e})}},_checkKeyDown:function(e){e.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(e){e.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},c(e,{pluginName:"multiDrag",utils:{select:function(e){var t=e.parentNode[Z];t&&t.options.multiDrag&&!~Ot.indexOf(e)&&(It&&It!==t&&(It.multiDrag._deselectMultiDrag(),It=t),E(e,t.options.selectedClass,!0),Ot.push(e))},deselect:function(e){var t=e.parentNode[Z],n=Ot.indexOf(e);t&&t.options.multiDrag&&~n&&(E(e,t.options.selectedClass,!1),Ot.splice(n,1))}},eventProperties:function(){var e=this,t=[],n=[];return Ot.forEach((function(i){var r;t.push({multiDragElement:i,index:i.sortableIndex}),r=jt&&i!==At?-1:jt?j(i,":not(."+e.options.selectedClass+")"):j(i),n.push({multiDragElement:i,index:r})})),{items:l(Ot),clones:[].concat(Dt),oldIndicies:t,newIndicies:n}},optionListeners:{multiDragKey:function(e){return e=e.toLowerCase(),"ctrl"===e?e="Control":e.length>1&&(e=e.charAt(0).toUpperCase()+e.substr(1)),e}}})}function qt(e,t){Ot.forEach((function(n,i){var r=t.children[n.sortableIndex+(e?Number(i):0)];r?t.insertBefore(n,r):t.appendChild(n)}))}function Wt(e,t){Dt.forEach((function(n,i){var r=t.children[n.sortableIndex+(e?Number(i):0)];r?t.insertBefore(n,r):t.appendChild(n)}))}function $t(){Ot.forEach((function(e){e!==At&&e.parentNode&&e.parentNode.removeChild(e)}))}nt.mount(new zt),nt.mount(Nt,St),t["default"]=nt},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},6866:function(e,t,n){"use strict";n.r(t),n.d(t,{BaseTransition:function(){return i.P$},Comment:function(){return i.sv},EffectScope:function(){return i.Bj},Fragment:function(){return i.HY},KeepAlive:function(){return i.Ob},ReactiveEffect:function(){return i.qq},Static:function(){return i.qG},Suspense:function(){return i.n4},Teleport:function(){return i.lR},Text:function(){return i.xv},Transition:function(){return i.uT},TransitionGroup:function(){return i.W3},VueElement:function(){return i.a2},callWithAsyncErrorHandling:function(){return i.$d},callWithErrorHandling:function(){return i.KU},camelize:function(){return i._A},capitalize:function(){return i.kC},cloneVNode:function(){return i.Ho},compatUtils:function(){return i.ry},compile:function(){return r},computed:function(){return i.Fl},createApp:function(){return i.ri},createBlock:function(){return i.j4},createCommentVNode:function(){return i.kq},createElementBlock:function(){return i.iD},createElementVNode:function(){return i._},createHydrationRenderer:function(){return i.Eo},createPropsRestProxy:function(){return i.p1},createRenderer:function(){return i.Us},createSSRApp:function(){return i.vr},createSlots:function(){return i.Nv},createStaticVNode:function(){return i.uE},createTextVNode:function(){return i.Uk},createVNode:function(){return i.Wm},customRef:function(){return i.ZM},defineAsyncComponent:function(){return i.RC},defineComponent:function(){return i.aZ},defineCustomElement:function(){return i.MW},defineEmits:function(){return i.Bz},defineExpose:function(){return i.WY},defineProps:function(){return i.yb},defineSSRCustomElement:function(){return i.Ah},devtools:function(){return i.mW},effect:function(){return i.cE},effectScope:function(){return i.B},getCurrentInstance:function(){return i.FN},getCurrentScope:function(){return i.nZ},getTransitionRawChildren:function(){return i.Q6},guardReactiveProps:function(){return i.F4},h:function(){return i.h},handleError:function(){return i.S3},hydrate:function(){return i.ZB},initCustomFormatter:function(){return i.Mr},initDirectivesForSSR:function(){return i.Nd},inject:function(){return i.f3},isMemoSame:function(){return i.nQ},isProxy:function(){return i.X3},isReactive:function(){return i.PG},isReadonly:function(){return i.$y},isRef:function(){return i.dq},isRuntimeOnly:function(){return i.of},isShallow:function(){return i.yT},isVNode:function(){return i.lA},markRaw:function(){return i.Xl},mergeDefaults:function(){return i.u_},mergeProps:function(){return i.dG},nextTick:function(){return i.Y3},normalizeClass:function(){return i.C_},normalizeProps:function(){return i.vs},normalizeStyle:function(){return i.j5},onActivated:function(){return i.dl},onBeforeMount:function(){return i.wF},onBeforeUnmount:function(){return i.Jd},onBeforeUpdate:function(){return i.Xn},onDeactivated:function(){return i.se},onErrorCaptured:function(){return i.d1},onMounted:function(){return i.bv},onRenderTracked:function(){return i.bT},onRenderTriggered:function(){return i.Yq},onScopeDispose:function(){return i.EB},onServerPrefetch:function(){return i.vl},onUnmounted:function(){return i.SK},onUpdated:function(){return i.ic},openBlock:function(){return i.wg},popScopeId:function(){return i.Cn},provide:function(){return i.JJ},proxyRefs:function(){return i.WL},pushScopeId:function(){return i.dD},queuePostFlushCb:function(){return i.qb},reactive:function(){return i.qj},readonly:function(){return i.OT},ref:function(){return i.iH},registerRuntimeCompiler:function(){return i.Y1},render:function(){return i.sY},renderList:function(){return i.Ko},renderSlot:function(){return i.WI},resolveComponent:function(){return i.up},resolveDirective:function(){return i.Q2},resolveDynamicComponent:function(){return i.LL},resolveFilter:function(){return i.eq},resolveTransitionHooks:function(){return i.U2},setBlockTracking:function(){return i.qZ},setDevtoolsHook:function(){return i.ec},setTransitionHooks:function(){return i.nK},shallowReactive:function(){return i.Um},shallowReadonly:function(){return i.YS},shallowRef:function(){return i.XI},ssrContextKey:function(){return i.Uc},ssrUtils:function(){return i.G},stop:function(){return i.sT},toDisplayString:function(){return i.zw},toHandlerKey:function(){return i.hR},toHandlers:function(){return i.mx},toRaw:function(){return i.IU},toRef:function(){return i.Vh},toRefs:function(){return i.BK},transformVNodeArgs:function(){return i.C3},triggerRef:function(){return i.oR},unref:function(){return i.SU},useAttrs:function(){return i.l1},useCssModule:function(){return i.fb},useCssVars:function(){return i.sj},useSSRContext:function(){return i.Zq},useSlots:function(){return i.Rr},useTransitionState:function(){return i.Y8},vModelCheckbox:function(){return i.e8},vModelDynamic:function(){return i.YZ},vModelRadio:function(){return i.G2},vModelSelect:function(){return i.bM},vModelText:function(){return i.nr},vShow:function(){return i.F8},version:function(){return i.i8},warn:function(){return i.ZK},watch:function(){return i.YP},watchEffect:function(){return i.m0},watchPostEffect:function(){return i.Rh},watchSyncEffect:function(){return i.yX},withAsyncContext:function(){return i.mv},withCtx:function(){return i.w5},withDefaults:function(){return i.b9},withDirectives:function(){return i.wy},withKeys:function(){return i.D2},withMemo:function(){return i.MX},withModifiers:function(){return i.iM},withScopeId:function(){return i.HX}});var i=n(9242);const r=()=>{0}},6983:function(e,t,n){n(1703),n(2087),function(t,i){e.exports=i(n(6866),n(3413))}("undefined"!==typeof self&&self,(function(e,t){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({"00ee":function(e,t,n){var i=n("b622"),r=i("toStringTag"),o={};o[r]="z",e.exports="[object z]"===String(o)},"0366":function(e,t,n){var i=n("1c0b");e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var i=n("fc6a"),r=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return r(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?c(e):r(i(e))}},"06cf":function(e,t,n){var i=n("83ab"),r=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("c04e"),s=n("5135"),C=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=i?l:function(e,t){if(e=a(e),t=c(t,!0),C)try{return l(e,t)}catch(n){}if(s(e,t))return o(!r.f.call(e,t),e[t])}},"0cfb":function(e,t,n){var i=n("83ab"),r=n("d039"),o=n("cc12");e.exports=!i&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"13d5":function(e,t,n){"use strict";var i=n("23e7"),r=n("d58f").left,o=n("a640"),a=n("ae40"),c=o("reduce"),s=a("reduce",{1:0});i({target:"Array",proto:!0,forced:!c||!s},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(e,t,n){var i=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"159b":function(e,t,n){var i=n("da84"),r=n("fdbc"),o=n("17c2"),a=n("9112");for(var c in r){var s=i[c],C=s&&s.prototype;if(C&&C.forEach!==o)try{a(C,"forEach",o)}catch(l){C.forEach=o}}},"17c2":function(e,t,n){"use strict";var i=n("b727").forEach,r=n("a640"),o=n("ae40"),a=r("forEach"),c=o("forEach");e.exports=a&&c?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},"1be4":function(e,t,n){var i=n("d066");e.exports=i("document","documentElement")},"1c0b":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"1c7e":function(e,t,n){var i=n("b622"),r=i("iterator"),o=!1;try{var a=0,c={next:function(){return{done:!!a++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(s){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(s){}return n}},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1dde":function(e,t,n){var i=n("d039"),r=n("b622"),o=n("2d00"),a=r("species");e.exports=function(e){return o>=51||!i((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"23cb":function(e,t,n){var i=n("a691"),r=Math.max,o=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):o(n,t)}},"23e7":function(e,t,n){var i=n("da84"),r=n("06cf").f,o=n("9112"),a=n("6eeb"),c=n("ce4e"),s=n("e893"),C=n("94ca");e.exports=function(e,t){var n,l,f,u,h,d,p=e.target,m=e.global,L=e.stat;if(l=m?i:L?i[p]||c(p,{}):(i[p]||{}).prototype,l)for(f in t){if(h=t[f],e.noTargetGet?(d=r(l,f),u=d&&d.value):u=l[f],n=C(m?f:p+(L?".":"#")+f,e.forced),!n&&void 0!==u){if(typeof h===typeof u)continue;s(h,u)}(e.sham||u&&u.sham)&&o(h,"sham",!0),a(l,f,h,e)}}},"241c":function(e,t,n){var i=n("ca84"),r=n("7839"),o=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},"25f0":function(e,t,n){"use strict";var i=n("6eeb"),r=n("825a"),o=n("d039"),a=n("ad6d"),c="toString",s=RegExp.prototype,C=s[c],l=o((function(){return"/a/b"!=C.call({source:"a",flags:"b"})})),f=C.name!=c;(l||f)&&i(RegExp.prototype,c,(function(){var e=r(this),t=String(e.source),n=e.flags,i=String(void 0===n&&e instanceof RegExp&&!("flags"in s)?a.call(e):n);return"/"+t+"/"+i}),{unsafe:!0})},"2ca0":function(e,t,n){"use strict";var i=n("23e7"),r=n("06cf").f,o=n("50c4"),a=n("5a34"),c=n("1d80"),s=n("ab13"),C=n("c430"),l="".startsWith,f=Math.min,u=s("startsWith"),h=!C&&!u&&!!function(){var e=r(String.prototype,"startsWith");return e&&!e.writable}();i({target:"String",proto:!0,forced:!h&&!u},{startsWith:function(e){var t=String(c(this));a(e);var n=o(f(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return l?l.call(t,i,n):t.slice(n,n+i.length)===i}})},"2d00":function(e,t,n){var i,r,o=n("da84"),a=n("342f"),c=o.process,s=c&&c.versions,C=s&&s.v8;C?(i=C.split("."),r=i[0]+i[1]):a&&(i=a.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=a.match(/Chrome\/(\d+)/),i&&(r=i[1]))),e.exports=r&&+r},"342f":function(e,t,n){var i=n("d066");e.exports=i("navigator","userAgent")||""},"35a1":function(e,t,n){var i=n("f5df"),r=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||r[i(e)]}},"37e8":function(e,t,n){var i=n("83ab"),r=n("9bf2"),o=n("825a"),a=n("df75");e.exports=i?Object.defineProperties:function(e,t){o(e);var n,i=a(t),c=i.length,s=0;while(c>s)r.f(e,n=i[s++],t[n]);return e}},"3bbe":function(e,t,n){var i=n("861d");e.exports=function(e){if(!i(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3ca3":function(e,t,n){"use strict";var i=n("6547").charAt,r=n("69f3"),o=n("7dd0"),a="String Iterator",c=r.set,s=r.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:String(e),index:0})}),(function(){var e,t=s(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=i(n,r),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},4160:function(e,t,n){"use strict";var i=n("23e7"),r=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"428f":function(e,t,n){var i=n("da84");e.exports=i},"44ad":function(e,t,n){var i=n("d039"),r=n("c6b6"),o="".split;e.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?o.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var i=n("b622"),r=n("7c73"),o=n("9bf2"),a=i("unscopables"),c=Array.prototype;void 0==c[a]&&o.f(c,a,{configurable:!0,value:r(null)}),e.exports=function(e){c[a][e]=!0}},"44e7":function(e,t,n){var i=n("861d"),r=n("c6b6"),o=n("b622"),a=o("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==r(e))}},4930:function(e,t,n){var i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())}))},"4d64":function(e,t,n){var i=n("fc6a"),r=n("50c4"),o=n("23cb"),a=function(e){return function(t,n,a){var c,s=i(t),C=r(s.length),l=o(a,C);if(e&&n!=n){while(C>l)if(c=s[l++],c!=c)return!0}else for(;C>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},"4de4":function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").filter,o=n("1dde"),a=n("ae40"),c=o("filter"),s=a("filter");i({target:"Array",proto:!0,forced:!c||!s},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var i=n("0366"),r=n("7b0b"),o=n("9bdd"),a=n("e95a"),c=n("50c4"),s=n("8418"),C=n("35a1");e.exports=function(e){var t,n,l,f,u,h,d=r(e),p="function"==typeof this?this:Array,m=arguments.length,L=m>1?arguments[1]:void 0,v=void 0!==L,g=C(d),M=0;if(v&&(L=i(L,m>2?arguments[2]:void 0,2)),void 0==g||p==Array&&a(g))for(t=c(d.length),n=new p(t);t>M;M++)h=v?L(d[M],M):d[M],s(n,M,h);else for(f=g.call(d),u=f.next,n=new p;!(l=u.call(f)).done;M++)h=v?o(f,L,[l.value,M],!0):l.value,s(n,M,h);return n.length=M,n}},"4fad":function(e,t,n){var i=n("23e7"),r=n("6f53").entries;i({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"50c4":function(e,t,n){var i=n("a691"),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},5135:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},5319:function(e,t,n){"use strict";var i=n("d784"),r=n("825a"),o=n("7b0b"),a=n("50c4"),c=n("a691"),s=n("1d80"),C=n("8aa5"),l=n("14c3"),f=Math.max,u=Math.min,h=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};i("replace",2,(function(e,t,n,i){var L=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=i.REPLACE_KEEPS_$0,g=L?"$":"$0";return[function(n,i){var r=s(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,r,i):t.call(String(r),n,i)},function(e,i){if(!L&&v||"string"===typeof i&&-1===i.indexOf(g)){var o=n(t,e,this,i);if(o.done)return o.value}var s=r(e),h=String(this),d="function"===typeof i;d||(i=String(i));var p=s.global;if(p){var V=s.unicode;s.lastIndex=0}var H=[];while(1){var z=l(s,h);if(null===z)break;if(H.push(z),!p)break;var y=String(z[0]);""===y&&(s.lastIndex=C(h,a(s.lastIndex),V))}for(var b="",_=0,x=0;x<H.length;x++){z=H[x];for(var w=String(z[0]),S=f(u(c(z.index),h.length),0),N=[],k=1;k<z.length;k++)N.push(m(z[k]));var E=z.groups;if(d){var T=[w].concat(N,S,h);void 0!==E&&T.push(E);var I=String(i.apply(void 0,T))}else I=M(w,h,S,N,E,i);S>=_&&(b+=h.slice(_,S)+I,_=S+w.length)}return b+h.slice(_)}];function M(e,n,i,r,a,c){var s=i+e.length,C=r.length,l=p;return void 0!==a&&(a=o(a),l=d),t.call(c,l,(function(t,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return t;if(l>C){var f=h(l/10);return 0===f?t:f<=C?void 0===r[f-1]?o.charAt(1):r[f-1]+o.charAt(1):t}c=r[l-1]}return void 0===c?"":c}))}}))},5692:function(e,t,n){var i=n("c430"),r=n("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:i?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var i=n("d066"),r=n("241c"),o=n("7418"),a=n("825a");e.exports=i("Reflect","ownKeys")||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},"5a34":function(e,t,n){var i=n("44e7");e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5db7":function(e,t,n){"use strict";var i=n("23e7"),r=n("a2bf"),o=n("7b0b"),a=n("50c4"),c=n("1c0b"),s=n("65f0");i({target:"Array",proto:!0},{flatMap:function(e){var t,n=o(this),i=a(n.length);return c(e),t=s(n,0),t.length=r(t,n,n,i,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},6547:function(e,t,n){var i=n("a691"),r=n("1d80"),o=function(e){return function(t,n){var o,a,c=String(r(t)),s=i(n),C=c.length;return s<0||s>=C?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===C||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):o:e?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(e,t,n){var i=n("861d"),r=n("e8b5"),o=n("b622"),a=o("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"69f3":function(e,t,n){var i,r,o,a=n("7f9a"),c=n("da84"),s=n("861d"),C=n("9112"),l=n("5135"),f=n("f772"),u=n("d012"),h=c.WeakMap,d=function(e){return o(e)?r(e):i(e,{})},p=function(e){return function(t){var n;if(!s(t)||(n=r(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(a){var m=new h,L=m.get,v=m.has,g=m.set;i=function(e,t){return g.call(m,e,t),t},r=function(e){return L.call(m,e)||{}},o=function(e){return v.call(m,e)}}else{var M=f("state");u[M]=!0,i=function(e,t){return C(e,M,t),t},r=function(e){return l(e,M)?e[M]:{}},o=function(e){return l(e,M)}}e.exports={set:i,get:r,has:o,enforce:d,getterFor:p}},"6eeb":function(e,t,n){var i=n("da84"),r=n("9112"),o=n("5135"),a=n("ce4e"),c=n("8925"),s=n("69f3"),C=s.get,l=s.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var s=!!c&&!!c.unsafe,C=!!c&&!!c.enumerable,u=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||r(n,"name",t),l(n).source=f.join("string"==typeof t?t:"")),e!==i?(s?!u&&e[t]&&(C=!0):delete e[t],C?e[t]=n:r(e,t,n)):C?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&C(this).source||c(this)}))},"6f53":function(e,t,n){var i=n("83ab"),r=n("df75"),o=n("fc6a"),a=n("d1e7").f,c=function(e){return function(t){var n,c=o(t),s=r(c),C=s.length,l=0,f=[];while(C>l)n=s[l++],i&&!a.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}};e.exports={entries:c(!0),values:c(!1)}},"73d9":function(e,t,n){var i=n("44d2");i("flatMap")},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var i=n("428f"),r=n("5135"),o=n("e538"),a=n("9bf2").f;e.exports=function(e){var t=i.Symbol||(i.Symbol={});r(t,e)||a(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(e,t,n){var i=n("1d80");e.exports=function(e){return Object(i(e))}},"7c73":function(e,t,n){var i,r=n("825a"),o=n("37e8"),a=n("7839"),c=n("d012"),s=n("1be4"),C=n("cc12"),l=n("f772"),f=">",u="<",h="prototype",d="script",p=l("IE_PROTO"),m=function(){},L=function(e){return u+d+f+e+u+"/"+d+f},v=function(e){e.write(L("")),e.close();var t=e.parentWindow.Object;return e=null,t},g=function(){var e,t=C("iframe"),n="java"+d+":";return t.style.display="none",s.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(L("document.F=Object")),e.close(),e.F},M=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(t){}M=i?v(i):g();var e=a.length;while(e--)delete M[h][a[e]];return M()};c[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=r(e),n=new m,m[h]=null,n[p]=e):n=M(),void 0===t?n:o(n,t)}},"7dd0":function(e,t,n){"use strict";var i=n("23e7"),r=n("9ed3"),o=n("e163"),a=n("d2bb"),c=n("d44e"),s=n("9112"),C=n("6eeb"),l=n("b622"),f=n("c430"),u=n("3f8c"),h=n("ae93"),d=h.IteratorPrototype,p=h.BUGGY_SAFARI_ITERATORS,m=l("iterator"),L="keys",v="values",g="entries",M=function(){return this};e.exports=function(e,t,n,l,h,V,H){r(n,t,l);var z,y,b,_=function(e){if(e===h&&k)return k;if(!p&&e in S)return S[e];switch(e){case L:return function(){return new n(this,e)};case v:return function(){return new n(this,e)};case g:return function(){return new n(this,e)}}return function(){return new n(this)}},x=t+" Iterator",w=!1,S=e.prototype,N=S[m]||S["@@iterator"]||h&&S[h],k=!p&&N||_(h),E="Array"==t&&S.entries||N;if(E&&(z=o(E.call(new e)),d!==Object.prototype&&z.next&&(f||o(z)===d||(a?a(z,d):"function"!=typeof z[m]&&s(z,m,M)),c(z,x,!0,!0),f&&(u[x]=M))),h==v&&N&&N.name!==v&&(w=!0,k=function(){return N.call(this)}),f&&!H||S[m]===k||s(S,m,k),u[t]=k,h)if(y={values:_(v),keys:V?k:_(L),entries:_(g)},H)for(b in y)(p||w||!(b in S))&&C(S,b,y[b]);else i({target:t,proto:!0,forced:p||w},y);return y}},"7f9a":function(e,t,n){var i=n("da84"),r=n("8925"),o=i.WeakMap;e.exports="function"===typeof o&&/native code/.test(r(o))},"825a":function(e,t,n){var i=n("861d");e.exports=function(e){if(!i(e))throw TypeError(String(e)+" is not an object");return e}},"83ab":function(e,t,n){var i=n("d039");e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var i=n("c04e"),r=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=i(t);a in e?r.f(e,a,o(0,n)):e[a]=n}},"861d":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},8875:function(e,t,n){var i,r,o;(function(n,a){r=[],i=a,o="function"===typeof i?i.apply(t,r):i,void 0===o||(e.exports=o)})("undefined"!==typeof self&&self,(function(){function e(){var t=Object.getOwnPropertyDescriptor(document,"currentScript");if(!t&&"currentScript"in document&&document.currentScript)return document.currentScript;if(t&&t.get!==e&&document.currentScript)return document.currentScript;try{throw new Error}catch(h){var n,i,r,o=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,a=/@([^@]*):(\d+):(\d+)\s*$/gi,c=o.exec(h.stack)||a.exec(h.stack),s=c&&c[1]||!1,C=c&&c[2]||!1,l=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");s===l&&(n=document.documentElement.outerHTML,i=new RegExp("(?:[^\\n]+?\\n){0,"+(C-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=n.replace(i,"$1").trim());for(var u=0;u<f.length;u++){if("interactive"===f[u].readyState)return f[u];if(f[u].src===s)return f[u];if(s===l&&f[u].innerHTML&&f[u].innerHTML.trim()===r)return f[u]}return null}}return e}))},8925:function(e,t,n){var i=n("c6cd"),r=Function.toString;"function"!=typeof i.inspectSource&&(i.inspectSource=function(e){return r.call(e)}),e.exports=i.inspectSource},"8aa5":function(e,t,n){"use strict";var i=n("6547").charAt;e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},"8bbf":function(t,n){t.exports=e},"90e3":function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+i).toString(36)}},9112:function(e,t,n){var i=n("83ab"),r=n("9bf2"),o=n("5c6c");e.exports=i?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var i=n("ad6d"),r=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,s=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),C=r.UNSUPPORTED_Y||r.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||C;f&&(c=function(e){var t,n,r,c,f=this,u=C&&f.sticky,h=i.call(f),d=f.source,p=0,m=e;return u&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),m=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(d="(?: "+d+")",m=" "+m,p++),n=new RegExp("^(?:"+d+")",h)),l&&(n=new RegExp("^"+d+"$(?!\\s)",h)),s&&(t=f.lastIndex),r=o.call(u?n:f,m),u?r?(r.input=r.input.slice(p),r[0]=r[0].slice(p),r.index=f.lastIndex,f.lastIndex+=r[0].length):f.lastIndex=0:s&&r&&(f.lastIndex=f.global?r.index+r[0].length:t),l&&r&&r.length>1&&a.call(r[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),e.exports=c},"94ca":function(e,t,n){var i=n("d039"),r=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==C||n!=s&&("function"==typeof t?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(r,".").toLowerCase()},c=o.data={},s=o.NATIVE="N",C=o.POLYFILL="P";e.exports=o},"99af":function(e,t,n){"use strict";var i=n("23e7"),r=n("d039"),o=n("e8b5"),a=n("861d"),c=n("7b0b"),s=n("50c4"),C=n("8418"),l=n("65f0"),f=n("1dde"),u=n("b622"),h=n("2d00"),d=u("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",L=h>=51||!r((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),v=f("concat"),g=function(e){if(!a(e))return!1;var t=e[d];return void 0!==t?!!t:o(e)},M=!L||!v;i({target:"Array",proto:!0,forced:M},{concat:function(e){var t,n,i,r,o,a=c(this),f=l(a,0),u=0;for(t=-1,i=arguments.length;t<i;t++)if(o=-1===t?a:arguments[t],g(o)){if(r=s(o.length),u+r>p)throw TypeError(m);for(n=0;n<r;n++,u++)n in o&&C(f,u,o[n])}else{if(u>=p)throw TypeError(m);C(f,u++,o)}return f.length=u,f}})},"9bdd":function(e,t,n){var i=n("825a");e.exports=function(e,t,n,r){try{return r?t(i(n)[0],n[1]):t(n)}catch(a){var o=e["return"];throw void 0!==o&&i(o.call(e)),a}}},"9bf2":function(e,t,n){var i=n("83ab"),r=n("0cfb"),o=n("825a"),a=n("c04e"),c=Object.defineProperty;t.f=i?c:function(e,t,n){if(o(e),t=a(t,!0),o(n),r)try{return c(e,t,n)}catch(i){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var i=n("ae93").IteratorPrototype,r=n("7c73"),o=n("5c6c"),a=n("d44e"),c=n("3f8c"),s=function(){return this};e.exports=function(e,t,n){var C=t+" Iterator";return e.prototype=r(i,{next:o(1,n)}),a(e,C,!1,!0),c[C]=s,e}},"9f7f":function(e,t,n){"use strict";var i=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=i((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=i((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a2bf:function(e,t,n){"use strict";var i=n("e8b5"),r=n("50c4"),o=n("0366"),a=function(e,t,n,c,s,C,l,f){var u,h=s,d=0,p=!!l&&o(l,f,3);while(d<c){if(d in n){if(u=p?p(n[d],d,t):n[d],C>0&&i(u))h=a(e,t,u,r(u.length),h,C-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[h]=u}h++}d++}return h};e.exports=a},a352:function(e,n){e.exports=t},a434:function(e,t,n){"use strict";var i=n("23e7"),r=n("23cb"),o=n("a691"),a=n("50c4"),c=n("7b0b"),s=n("65f0"),C=n("8418"),l=n("1dde"),f=n("ae40"),u=l("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,p=Math.min,m=9007199254740991,L="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u||!h},{splice:function(e,t){var n,i,l,f,u,h,v=c(this),g=a(v.length),M=r(e,g),V=arguments.length;if(0===V?n=i=0:1===V?(n=0,i=g-M):(n=V-2,i=p(d(o(t),0),g-M)),g+n-i>m)throw TypeError(L);for(l=s(v,i),f=0;f<i;f++)u=M+f,u in v&&C(l,f,v[u]);if(l.length=i,n<i){for(f=M;f<g-i;f++)u=f+i,h=f+n,u in v?v[h]=v[u]:delete v[h];for(f=g;f>g-i+n;f--)delete v[f-1]}else if(n>i)for(f=g-i;f>M;f--)u=f+i-1,h=f+n-1,u in v?v[h]=v[u]:delete v[h];for(f=0;f<n;f++)v[f+M]=arguments[f+2];return v.length=g-i+n,l}})},a4d3:function(e,t,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("d066"),a=n("c430"),c=n("83ab"),s=n("4930"),C=n("fdbf"),l=n("d039"),f=n("5135"),u=n("e8b5"),h=n("861d"),d=n("825a"),p=n("7b0b"),m=n("fc6a"),L=n("c04e"),v=n("5c6c"),g=n("7c73"),M=n("df75"),V=n("241c"),H=n("057f"),z=n("7418"),y=n("06cf"),b=n("9bf2"),_=n("d1e7"),x=n("9112"),w=n("6eeb"),S=n("5692"),N=n("f772"),k=n("d012"),E=n("90e3"),T=n("b622"),I=n("e538"),A=n("746f"),P=n("d44e"),R=n("69f3"),O=n("b727").forEach,D=N("hidden"),F="Symbol",j="prototype",U=T("toPrimitive"),B=R.set,q=R.getterFor(F),W=Object[j],$=r.Symbol,G=o("JSON","stringify"),Y=y.f,K=b.f,X=H.f,J=_.f,Q=S("symbols"),Z=S("op-symbols"),ee=S("string-to-symbol-registry"),te=S("symbol-to-string-registry"),ne=S("wks"),ie=r.QObject,re=!ie||!ie[j]||!ie[j].findChild,oe=c&&l((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,n){var i=Y(W,t);i&&delete W[t],K(e,t,n),i&&e!==W&&K(W,t,i)}:K,ae=function(e,t){var n=Q[e]=g($[j]);return B(n,{type:F,tag:e,description:t}),c||(n.description=t),n},ce=C?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof $},se=function(e,t,n){e===W&&se(Z,t,n),d(e);var i=L(t,!0);return d(n),f(Q,i)?(n.enumerable?(f(e,D)&&e[D][i]&&(e[D][i]=!1),n=g(n,{enumerable:v(0,!1)})):(f(e,D)||K(e,D,v(1,{})),e[D][i]=!0),oe(e,i,n)):K(e,i,n)},Ce=function(e,t){d(e);var n=m(t),i=M(n).concat(de(n));return O(i,(function(t){c&&!fe.call(n,t)||se(e,t,n[t])})),e},le=function(e,t){return void 0===t?g(e):Ce(g(e),t)},fe=function(e){var t=L(e,!0),n=J.call(this,t);return!(this===W&&f(Q,t)&&!f(Z,t))&&(!(n||!f(this,t)||!f(Q,t)||f(this,D)&&this[D][t])||n)},ue=function(e,t){var n=m(e),i=L(t,!0);if(n!==W||!f(Q,i)||f(Z,i)){var r=Y(n,i);return!r||!f(Q,i)||f(n,D)&&n[D][i]||(r.enumerable=!0),r}},he=function(e){var t=X(m(e)),n=[];return O(t,(function(e){f(Q,e)||f(k,e)||n.push(e)})),n},de=function(e){var t=e===W,n=X(t?Z:m(e)),i=[];return O(n,(function(e){!f(Q,e)||t&&!f(W,e)||i.push(Q[e])})),i};if(s||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=E(e),n=function(e){this===W&&n.call(Z,e),f(this,D)&&f(this[D],t)&&(this[D][t]=!1),oe(this,t,v(1,e))};return c&&re&&oe(W,t,{configurable:!0,set:n}),ae(t,e)},w($[j],"toString",(function(){return q(this).tag})),w($,"withoutSetter",(function(e){return ae(E(e),e)})),_.f=fe,b.f=se,y.f=ue,V.f=H.f=he,z.f=de,I.f=function(e){return ae(T(e),e)},c&&(K($[j],"description",{configurable:!0,get:function(){return q(this).description}}),a||w(W,"propertyIsEnumerable",fe,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:$}),O(M(ne),(function(e){A(e)})),i({target:F,stat:!0,forced:!s},{for:function(e){var t=String(e);if(f(ee,t))return ee[t];var n=$(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!ce(e))throw TypeError(e+" is not a symbol");if(f(te,e))return te[e]},useSetter:function(){re=!0},useSimple:function(){re=!1}}),i({target:"Object",stat:!0,forced:!s,sham:!c},{create:le,defineProperty:se,defineProperties:Ce,getOwnPropertyDescriptor:ue}),i({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:he,getOwnPropertySymbols:de}),i({target:"Object",stat:!0,forced:l((function(){z.f(1)}))},{getOwnPropertySymbols:function(e){return z.f(p(e))}}),G){var pe=!s||l((function(){var e=$();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));i({target:"JSON",stat:!0,forced:pe},{stringify:function(e,t,n){var i,r=[e],o=1;while(arguments.length>o)r.push(arguments[o++]);if(i=t,(h(t)||void 0!==e)&&!ce(e))return u(t)||(t=function(e,t){if("function"==typeof i&&(t=i.call(this,e,t)),!ce(t))return t}),r[1]=t,G.apply(null,r)}})}$[j][U]||x($[j],U,$[j].valueOf),P($,F),k[D]=!0},a630:function(e,t,n){var i=n("23e7"),r=n("4df4"),o=n("1c7e"),a=!o((function(e){Array.from(e)}));i({target:"Array",stat:!0,forced:a},{from:r})},a640:function(e,t,n){"use strict";var i=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){throw 1},1)}))}},a691:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},ab13:function(e,t,n){var i=n("b622"),r=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(i){}}return!1}},ac1f:function(e,t,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var i=n("825a");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,n){var i=n("83ab"),r=n("d039"),o=n("5135"),a=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(o(c,e))return c[e];t||(t={});var n=[][e],C=!!o(t,"ACCESSORS")&&t.ACCESSORS,l=o(t,0)?t[0]:s,f=o(t,1)?t[1]:void 0;return c[e]=!!n&&!r((function(){if(C&&!i)return!0;var e={length:-1};C?a(e,1,{enumerable:!0,get:s}):e[1]=1,n.call(e,l,f)}))}},ae93:function(e,t,n){"use strict";var i,r,o,a=n("e163"),c=n("9112"),s=n("5135"),C=n("b622"),l=n("c430"),f=C("iterator"),u=!1,h=function(){return this};[].keys&&(o=[].keys(),"next"in o?(r=a(a(o)),r!==Object.prototype&&(i=r)):u=!0),void 0==i&&(i={}),l||s(i,f)||c(i,f,h),e.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:u}},b041:function(e,t,n){"use strict";var i=n("00ee"),r=n("f5df");e.exports=i?{}.toString:function(){return"[object "+r(this)+"]"}},b0c0:function(e,t,n){var i=n("83ab"),r=n("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,s="name";i&&!(s in o)&&r(o,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},b622:function(e,t,n){var i=n("da84"),r=n("5692"),o=n("5135"),a=n("90e3"),c=n("4930"),s=n("fdbf"),C=r("wks"),l=i.Symbol,f=s?l:l&&l.withoutSetter||a;e.exports=function(e){return o(C,e)||(c&&o(l,e)?C[e]=l[e]:C[e]=f("Symbol."+e)),C[e]}},b64b:function(e,t,n){var i=n("23e7"),r=n("7b0b"),o=n("df75"),a=n("d039"),c=a((function(){o(1)}));i({target:"Object",stat:!0,forced:c},{keys:function(e){return o(r(e))}})},b727:function(e,t,n){var i=n("0366"),r=n("44ad"),o=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,C=function(e){var t=1==e,n=2==e,C=3==e,l=4==e,f=6==e,u=5==e||f;return function(h,d,p,m){for(var L,v,g=o(h),M=r(g),V=i(d,p,3),H=a(M.length),z=0,y=m||c,b=t?y(h,H):n?y(h,0):void 0;H>z;z++)if((u||z in M)&&(L=M[z],v=V(L,z,g),e))if(t)b[z]=v;else if(v)switch(e){case 3:return!0;case 5:return L;case 6:return z;case 2:s.call(b,L)}else if(l)return!1;return f?-1:C||l?l:b}};e.exports={forEach:C(0),map:C(1),filter:C(2),some:C(3),every:C(4),find:C(5),findIndex:C(6)}},c04e:function(e,t,n){var i=n("861d");e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var i=n("da84"),r=n("ce4e"),o="__core-js_shared__",a=i[o]||r(o,{});e.exports=a},c740:function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").findIndex,o=n("44d2"),a=n("ae40"),c="findIndex",s=!0,C=a(c);c in[]&&Array(1)[c]((function(){s=!1})),i({target:"Array",proto:!0,forced:s||!C},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(c)},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},c975:function(e,t,n){"use strict";var i=n("23e7"),r=n("4d64").indexOf,o=n("a640"),a=n("ae40"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,C=o("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:s||!C||!l},{indexOf:function(e){return s?c.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},ca84:function(e,t,n){var i=n("5135"),r=n("fc6a"),o=n("4d64").indexOf,a=n("d012");e.exports=function(e,t){var n,c=r(e),s=0,C=[];for(n in c)!i(a,n)&&i(c,n)&&C.push(n);while(t.length>s)i(c,n=t[s++])&&(~o(C,n)||C.push(n));return C}},caad:function(e,t,n){"use strict";var i=n("23e7"),r=n("4d64").includes,o=n("44d2"),a=n("ae40"),c=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!c},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc12:function(e,t,n){var i=n("da84"),r=n("861d"),o=i.document,a=r(o)&&r(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},ce4e:function(e,t,n){var i=n("da84"),r=n("9112");e.exports=function(e,t){try{r(i,e,t)}catch(n){i[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var i=n("428f"),r=n("da84"),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(i[e])||o(r[e]):i[e]&&i[e][t]||r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!i.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:i},d28b:function(e,t,n){var i=n("746f");i("iterator")},d2bb:function(e,t,n){var i=n("825a"),r=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return i(n),r(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(e,t,n){var i=n("00ee"),r=n("6eeb"),o=n("b041");i||r(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var i=n("9bf2").f,r=n("5135"),o=n("b622"),a=o("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,a)&&i(e,a,{configurable:!0,value:t})}},d58f:function(e,t,n){var i=n("1c0b"),r=n("7b0b"),o=n("44ad"),a=n("50c4"),c=function(e){return function(t,n,c,s){i(n);var C=r(t),l=o(C),f=a(C.length),u=e?f-1:0,h=e?-1:1;if(c<2)while(1){if(u in l){s=l[u],u+=h;break}if(u+=h,e?u<0:f<=u)throw TypeError("Reduce of empty array with no initial value")}for(;e?u>=0:f>u;u+=h)u in l&&(s=n(s,l[u],u,C));return s}};e.exports={left:c(!1),right:c(!0)}},d784:function(e,t,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("d039"),o=n("b622"),a=n("9263"),c=n("9112"),s=o("species"),C=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),u=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var d=o(e),p=!r((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),m=p&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!p||!m||"replace"===e&&(!C||!l||u)||"split"===e&&!h){var L=/./[d],v=n(d,""[e],(function(e,t,n,i,r){return t.exec===a?p&&!r?{done:!0,value:L.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:u}),g=v[0],M=v[1];i(String.prototype,e,g),i(RegExp.prototype,d,2==t?function(e,t){return M.call(e,this,t)}:function(e){return M.call(e,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},d81d:function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").map,o=n("1dde"),a=n("ae40"),c=o("map"),s=a("map");i({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var i=n("23e7"),r=n("83ab"),o=n("56ef"),a=n("fc6a"),c=n("06cf"),s=n("8418");i({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,n,i=a(e),r=c.f,C=o(i),l={},f=0;while(C.length>f)n=r(i,t=C[f++]),void 0!==n&&s(l,t,n);return l}})},dbf1:function(e,t,n){"use strict";(function(e){function i(){return"undefined"!==typeof window?window.console:e.console}n.d(t,"a",(function(){return r}));var r=i()}).call(this,n("c8ba"))},ddb0:function(e,t,n){var i=n("da84"),r=n("fdbc"),o=n("e260"),a=n("9112"),c=n("b622"),s=c("iterator"),C=c("toStringTag"),l=o.values;for(var f in r){var u=i[f],h=u&&u.prototype;if(h){if(h[s]!==l)try{a(h,s,l)}catch(p){h[s]=l}if(h[C]||a(h,C,f),r[f])for(var d in o)if(h[d]!==o[d])try{a(h,d,o[d])}catch(p){h[d]=o[d]}}}},df75:function(e,t,n){var i=n("ca84"),r=n("7839");e.exports=Object.keys||function(e){return i(e,r)}},e01a:function(e,t,n){"use strict";var i=n("23e7"),r=n("83ab"),o=n("da84"),a=n("5135"),c=n("861d"),s=n("9bf2").f,C=n("e893"),l=o.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},u=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof u?new l(e):void 0===e?l():l(e);return""===e&&(f[t]=!0),t};C(u,l);var h=u.prototype=l.prototype;h.constructor=u;var d=h.toString,p="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;s(h,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=d.call(e);if(a(f,e))return"";var n=p?t.slice(7,-1):t.replace(m,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:u})}},e163:function(e,t,n){var i=n("5135"),r=n("7b0b"),o=n("f772"),a=n("e177"),c=o("IE_PROTO"),s=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=r(e),i(e,c)?e[c]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},e177:function(e,t,n){var i=n("d039");e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var i=n("fc6a"),r=n("44d2"),o=n("3f8c"),a=n("69f3"),c=n("7dd0"),s="Array Iterator",C=a.set,l=a.getterFor(s);e.exports=c(Array,"Array",(function(e,t){C(this,{type:s,target:i(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},e439:function(e,t,n){var i=n("23e7"),r=n("d039"),o=n("fc6a"),a=n("06cf").f,c=n("83ab"),s=r((function(){a(1)})),C=!c||s;i({target:"Object",stat:!0,forced:C,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},e538:function(e,t,n){var i=n("b622");t.f=i},e893:function(e,t,n){var i=n("5135"),r=n("56ef"),o=n("06cf"),a=n("9bf2");e.exports=function(e,t){for(var n=r(t),c=a.f,s=o.f,C=0;C<n.length;C++){var l=n[C];i(e,l)||c(e,l,s(t,l))}}},e8b5:function(e,t,n){var i=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}},e95a:function(e,t,n){var i=n("b622"),r=n("3f8c"),o=i("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||a[o]===e)}},f5df:function(e,t,n){var i=n("00ee"),r=n("c6b6"),o=n("b622"),a=o("toStringTag"),c="Arguments"==r(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(n){}};e.exports=i?r:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=s(t=Object(e),a))?n:c?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},f772:function(e,t,n){var i=n("5692"),r=n("90e3"),o=i("keys");e.exports=function(e){return o[e]||(o[e]=r(e))}},fb15:function(e,t,n){"use strict";if(n.r(t),"undefined"!==typeof window){var i=window.document.currentScript,r=n("8875");i=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var o=i&&i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("a434"),n("159b"),n("a4d3"),n("e439"),n("dbb4"),n("b64b");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){if(Array.isArray(e))return e}n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function l(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done);i=!0)if(n.push(a.value),t&&n.length===t)break}catch(s){r=!0,o=s}finally{try{i||null==c["return"]||c["return"]()}finally{if(r)throw o}}return n}}n("a630"),n("fb6a"),n("b0c0"),n("25f0");function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function u(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return C(e)||l(e,t)||u(e,t)||h()}function p(e){if(Array.isArray(e))return f(e)}function m(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function L(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e){return p(e)||m(e)||u(e)||L()}var g=n("a352"),M=n.n(g);function V(e){null!==e.parentElement&&e.parentElement.removeChild(e)}function H(e,t,n){var i=0===n?e.children[0]:e.children[n-1].nextSibling;e.insertBefore(t,i)}var z=n("dbf1");n("13d5"),n("4fad"),n("ac1f"),n("5319");function y(e){var t=Object.create(null);return function(n){var i=t[n];return i||(t[n]=e(n))}}var b=/-(\w)/g,_=y((function(e){return e.replace(b,(function(e,t){return t.toUpperCase()}))})),x=(n("5db7"),n("73d9"),["Start","Add","Remove","Update","End"]),w=["Choose","Unchoose","Sort","Filter","Clone"],S=["Move"],N=[S,x,w].flatMap((function(e){return e})).map((function(e){return"on".concat(e)})),k={manage:S,manageAndEmit:x,emit:w};function E(e){return-1!==N.indexOf(e)}n("caad"),n("2ca0");var T=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function I(e){return T.includes(e)}function A(e){return["transition-group","TransitionGroup"].includes(e)}function P(e){return["id","class","role","style"].includes(e)||e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("on")}function R(e){return e.reduce((function(e,t){var n=d(t,2),i=n[0],r=n[1];return e[i]=r,e}),{})}function O(e){var t=e.$attrs,n=e.componentData,i=void 0===n?{}:n,r=R(Object.entries(t).filter((function(e){var t=d(e,2),n=t[0];t[1];return P(n)})));return s(s({},r),i)}function D(e){var t=e.$attrs,n=e.callBackBuilder,i=R(F(t));Object.entries(n).forEach((function(e){var t=d(e,2),n=t[0],r=t[1];k[n].forEach((function(e){i["on".concat(e)]=r(e)}))}));var r="[data-draggable]".concat(i.draggable||"");return s(s({},i),{},{draggable:r})}function F(e){return Object.entries(e).filter((function(e){var t=d(e,2),n=t[0];t[1];return!P(n)})).map((function(e){var t=d(e,2),n=t[0],i=t[1];return[_(n),i]})).filter((function(e){var t=d(e,2),n=t[0];t[1];return!E(n)}))}n("c740");function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function B(e,t,n){return t&&U(e.prototype,t),n&&U(e,n),e}var q=function(e){var t=e.el;return t},W=function(e,t){return e.__draggable_context=t},$=function(e){return e.__draggable_context},G=function(){function e(t){var n=t.nodes,i=n.header,r=n.default,o=n.footer,a=t.root,c=t.realList;j(this,e),this.defaultNodes=r,this.children=[].concat(v(i),v(r),v(o)),this.externalComponent=a.externalComponent,this.rootTransition=a.transition,this.tag=a.tag,this.realList=c}return B(e,[{key:"render",value:function(e,t){var n=this.tag,i=this.children,r=this._isRootComponent,o=r?{default:function(){return i}}:i;return e(n,t,o)}},{key:"updated",value:function(){var e=this.defaultNodes,t=this.realList;e.forEach((function(e,n){W(q(e),{element:t[n],index:n})}))}},{key:"getUnderlyingVm",value:function(e){return $(e)}},{key:"getVmIndexFromDomIndex",value:function(e,t){var n=this.defaultNodes,i=n.length,r=t.children,o=r.item(e);if(null===o)return i;var a=$(o);if(a)return a.index;if(0===i)return 0;var c=q(n[0]),s=v(r).findIndex((function(e){return e===c}));return e<s?0:i}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),e}(),Y=n("8bbf");function K(e,t){var n=e[t];return n?n():[]}function X(e){var t=e.$slots,n=e.realList,i=e.getKey,r=n||[],o=["header","footer"].map((function(e){return K(t,e)})),a=d(o,2),c=a[0],C=a[1],l=t.item;if(!l)throw new Error("draggable element must have an item slot");var f=r.flatMap((function(e,t){return l({element:e,index:t}).map((function(t){return t.key=i(e),t.props=s(s({},t.props||{}),{},{"data-draggable":!0}),t}))}));if(f.length!==r.length)throw new Error("Item slot must have only one child");return{header:c,footer:C,default:f}}function J(e){var t=A(e),n=!I(e)&&!t;return{transition:t,externalComponent:n,tag:n?Object(Y["resolveComponent"])(e):t?Y["TransitionGroup"]:e}}function Q(e){var t=e.$slots,n=e.tag,i=e.realList,r=e.getKey,o=X({$slots:t,realList:i,getKey:r}),a=J(n);return new G({nodes:o,root:a,realList:i})}function Z(e,t){var n=this;Object(Y["nextTick"])((function(){return n.$emit(e.toLowerCase(),t)}))}function ee(e){var t=this;return function(n,i){if(null!==t.realList)return t["onDrag".concat(e)](n,i)}}function te(e){var t=this,n=ee.call(this,e);return function(i,r){n.call(t,i,r),Z.call(t,e,i)}}var ne=null,ie={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:function(e){return e}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},re=["update:modelValue","change"].concat(v([].concat(v(k.manageAndEmit),v(k.emit)).map((function(e){return e.toLowerCase()})))),oe=Object(Y["defineComponent"])({name:"draggable",inheritAttrs:!1,props:ie,emits:re,data:function(){return{error:!1}},render:function(){try{this.error=!1;var e=this.$slots,t=this.$attrs,n=this.tag,i=this.componentData,r=this.realList,o=this.getKey,a=Q({$slots:e,tag:n,realList:r,getKey:o});this.componentStructure=a;var c=O({$attrs:t,componentData:i});return a.render(Y["h"],c)}catch(s){return this.error=!0,Object(Y["h"])("pre",{style:{color:"red"}},s.stack)}},created:function(){null!==this.list&&null!==this.modelValue&&z["a"].error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted:function(){var e=this;if(!this.error){var t=this.$attrs,n=this.$el,i=this.componentStructure;i.updated();var r=D({$attrs:t,callBackBuilder:{manageAndEmit:function(t){return te.call(e,t)},emit:function(t){return Z.bind(e,t)},manage:function(t){return ee.call(e,t)}}}),o=1===n.nodeType?n:n.parentElement;this._sortable=new M.a(o,r),this.targetDomElement=o,o.__draggable_component__=this}},updated:function(){this.componentStructure.updated()},beforeUnmount:function(){void 0!==this._sortable&&this._sortable.destroy()},computed:{realList:function(){var e=this.list;return e||this.modelValue},getKey:function(){var e=this.itemKey;return"function"===typeof e?e:function(t){return t[e]}}},watch:{$attrs:{handler:function(e){var t=this._sortable;t&&F(e).forEach((function(e){var n=d(e,2),i=n[0],r=n[1];t.option(i,r)}))},deep:!0}},methods:{getUnderlyingVm:function(e){return this.componentStructure.getUnderlyingVm(e)||null},getUnderlyingPotencialDraggableComponent:function(e){return e.__draggable_component__},emitChanges:function(e){var t=this;Object(Y["nextTick"])((function(){return t.$emit("change",e)}))},alterList:function(e){if(this.list)e(this.list);else{var t=v(this.modelValue);e(t),this.$emit("update:modelValue",t)}},spliceList:function(){var e=arguments,t=function(t){return t.splice.apply(t,v(e))};this.alterList(t)},updatePosition:function(e,t){var n=function(n){return n.splice(t,0,n.splice(e,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(e){var t=e.to,n=e.related,i=this.getUnderlyingPotencialDraggableComponent(t);if(!i)return{component:i};var r=i.realList,o={list:r,component:i};if(t!==n&&r){var a=i.getUnderlyingVm(n)||{};return s(s({},a),o)}return o},getVmIndexFromDomIndex:function(e){return this.componentStructure.getVmIndexFromDomIndex(e,this.targetDomElement)},onDragStart:function(e){this.context=this.getUnderlyingVm(e.item),e.item._underlying_vm_=this.clone(this.context.element),ne=e.item},onDragAdd:function(e){var t=e.item._underlying_vm_;if(void 0!==t){V(e.item);var n=this.getVmIndexFromDomIndex(e.newIndex);this.spliceList(n,0,t);var i={element:t,newIndex:n};this.emitChanges({added:i})}},onDragRemove:function(e){if(H(this.$el,e.item,e.oldIndex),"clone"!==e.pullMode){var t=this.context,n=t.index,i=t.element;this.spliceList(n,1);var r={element:i,oldIndex:n};this.emitChanges({removed:r})}else V(e.clone)},onDragUpdate:function(e){V(e.item),H(e.from,e.item,e.oldIndex);var t=this.context.index,n=this.getVmIndexFromDomIndex(e.newIndex);this.updatePosition(t,n);var i={element:this.context.element,oldIndex:t,newIndex:n};this.emitChanges({moved:i})},computeFutureIndex:function(e,t){if(!e.element)return 0;var n=v(t.to.children).filter((function(e){return"none"!==e.style["display"]})),i=n.indexOf(t.related),r=e.component.getVmIndexFromDomIndex(i),o=-1!==n.indexOf(ne);return o||!t.willInsertAfter?r:r+1},onDragMove:function(e,t){var n=this.move,i=this.realList;if(!n||!i)return!0;var r=this.getRelatedContextFromMoveEvent(e),o=this.computeFutureIndex(r,e),a=s(s({},this.context),{},{futureIndex:o}),c=s(s({},e),{},{relatedContext:r,draggedContext:a});return n(c,t)},onDragEnd:function(){ne=null}}}),ae=oe;t["default"]=ae},fb6a:function(e,t,n){"use strict";var i=n("23e7"),r=n("861d"),o=n("e8b5"),a=n("23cb"),c=n("50c4"),s=n("fc6a"),C=n("8418"),l=n("b622"),f=n("1dde"),u=n("ae40"),h=f("slice"),d=u("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),m=[].slice,L=Math.max;i({target:"Array",proto:!0,forced:!h||!d},{slice:function(e,t){var n,i,l,f=s(this),u=c(f.length),h=a(e,u),d=a(void 0===t?u:t,u);if(o(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(f,h,d);for(i=new(void 0===n?Array:n)(L(d-h,0)),l=0;h<d;h++,l++)h in f&&C(i,l,f[h]);return i.length=l,i}})},fc6a:function(e,t,n){var i=n("44ad"),r=n("1d80");e.exports=function(e){return i(r(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var i=n("4930");e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})["default"]}))},65:function(e,t,n){"use strict";n.d(t,{MT:function(){return ee},rn:function(){return ie}});n(1703);var i=n(3396),r=n(4870);function o(){return a().__VUE_DEVTOOLS_GLOBAL_HOOK__}function a(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const c="function"===typeof Proxy,s="devtools-plugin:setup",C="plugin:settings:set";let l,f;function u(){var e;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,f=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(l=!0,f=n.g.perf_hooks.performance):l=!1),l}function h(){return u()?f.now():Date.now()}class d{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const a in e.settings){const t=e.settings[a];n[a]=t.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},n);try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(r,t)}catch(o){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(o){}r=e},now(){return h()}},t&&t.on(C,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function p(e,t){const n=e,i=a(),r=o(),C=c&&n.enableEarlyProxy;if(!r||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&C){const e=C?new d(n,r):null,o=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else r.emit(s,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var m="store";function L(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function v(e){return null!==e&&"object"===typeof e}function g(e){return e&&"function"===typeof e.then}function M(e,t){return function(){return e(t)}}function V(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function H(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;y(e,n,[],e._modules.root,!0),z(e,n,t)}function z(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,a={};L(o,(function(t,n){a[n]=M(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=(0,r.qj)({data:t}),e.strict&&N(e),i&&n&&e._withCommit((function(){i.data=null}))}function y(e,t,n,i,r){var o=!n.length,a=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=i),!o&&!r){var c=k(t,n.slice(0,-1)),s=n[n.length-1];e._withCommit((function(){c[s]=i.state}))}var C=i.context=b(e,a,n);i.forEachMutation((function(t,n){var i=a+n;x(e,i,t,C)})),i.forEachAction((function(t,n){var i=t.root?n:a+n,r=t.handler||t;w(e,i,r,C)})),i.forEachGetter((function(t,n){var i=a+n;S(e,i,t,C)})),i.forEachChild((function(i,o){y(e,t,n.concat(o),i,r)}))}function b(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var o=E(n,i,r),a=o.payload,c=o.options,s=o.type;return c&&c.root||(s=t+s),e.dispatch(s,a)},commit:i?e.commit:function(n,i,r){var o=E(n,i,r),a=o.payload,c=o.options,s=o.type;c&&c.root||(s=t+s),e.commit(s,a,c)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return _(e,t)}},state:{get:function(){return k(e.state,n)}}}),r}function _(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function x(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function w(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return g(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function S(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)})}function N(e){(0,i.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function k(e,t){return t.reduce((function(e,t){return e[t]}),e)}function E(e,t,n){return v(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var T="vuex bindings",I="vuex:mutations",A="vuex:actions",P="vuex",R=0;function O(e,t){p({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[T]},(function(n){n.addTimelineLayer({id:I,label:"Vuex Mutations",color:D}),n.addTimelineLayer({id:A,label:"Vuex Actions",color:D}),n.addInspector({id:P,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===P)if(n.filter){var i=[];W(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[q(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===P){var i=n.nodeId;_(t,i),n.state=$(Y(t._modules,i),"root"===i?t.getters:t._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===P){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(P),n.sendInspectorState(P),n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=R++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:A,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},r=Date.now()-e._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:A,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var D=8702998,F=6710886,j=16777215,U={label:"namespaced",textColor:j,backgroundColor:F};function B(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function q(e,t){return{id:t||"root",label:B(t),tags:e.namespaced?[U]:[],children:Object.keys(e._children).map((function(n){return q(e._children[n],t+n+"/")}))}}function W(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[U]:[]}),Object.keys(t._children).forEach((function(r){W(e,t._children[r],n,i+r+"/")}))}function $(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var o=G(t);r.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?B(e):e,editable:!1,value:K((function(){return o[e]}))}}))}return r}function G(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var r=t,o=i.pop();i.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[o]=K((function(){return e[n]}))}else t[n]=K((function(){return e[n]}))})),t}function Y(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,i,r){var o=e[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+t+'".');return r===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function K(e){try{return e()}catch(t){return t}}var X=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},X.prototype.addChild=function(e,t){this._children[e]=t},X.prototype.removeChild=function(e){delete this._children[e]},X.prototype.getChild=function(e){return this._children[e]},X.prototype.hasChild=function(e){return e in this._children},X.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},X.prototype.forEachChild=function(e){L(this._children,e)},X.prototype.forEachGetter=function(e){this._rawModule.getters&&L(this._rawModule.getters,e)},X.prototype.forEachAction=function(e){this._rawModule.actions&&L(this._rawModule.actions,e)},X.prototype.forEachMutation=function(e){this._rawModule.mutations&&L(this._rawModule.mutations,e)},Object.defineProperties(X.prototype,J);var Q=function(e){this.register([],e,!1)};function Z(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void 0;Z(e.concat(i),t.getChild(i),n.modules[i])}}Q.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Q.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Q.prototype.update=function(e){Z([],this.root,e)},Q.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0);var r=new X(t,n);if(0===e.length)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&L(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},Q.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i&&i.runtime&&t.removeChild(n)},Q.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var i=e.strict;void 0===i&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,c=a.dispatch,s=a.commit;this.dispatch=function(e,t){return c.call(o,e,t)},this.commit=function(e,t,n){return s.call(o,e,t,n)},this.strict=i;var C=this._modules.root.state;y(this,C,[],this._modules.root),z(this,C),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||m,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&O(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var i=this,r=E(e,t,n),o=r.type,a=r.payload,c=(r.options,{type:o,payload:a}),s=this._mutations[o];s&&(this._withCommit((function(){s.forEach((function(e){e(a)}))})),this._subscribers.slice().forEach((function(e){return e(c,i.state)})))},te.prototype.dispatch=function(e,t){var n=this,i=E(e,t),r=i.type,o=i.payload,a={type:r,payload:o},c=this._actions[r];if(c){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(a,n.state)}))}catch(C){0}var s=c.length>1?Promise.all(c.map((function(e){return e(o)}))):c[0](o);return new Promise((function(e,t){s.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(a,n.state)}))}catch(C){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(a,n.state,e)}))}catch(C){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return V(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return V(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var r=this;return(0,i.YP)((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),y(this,this.state,e,this._modules.get(e),n.preserveState),z(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=k(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),H(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),H(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);var ie=ae((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=ce(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n}));ae((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var o=ce(this.$store,"mapMutations",e);if(!o)return;i=o.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),ae((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||ce(this.$store,"mapGetters",e))return this.$store.getters[r]},n[i].vuex=!0})),n})),ae((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var o=ce(this.$store,"mapActions",e);if(!o)return;i=o.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n}));function re(e){return oe(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function oe(e){return Array.isArray(e)||v(e)}function ae(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ce(e,t,n){var i=e._modulesNamespaceMap[n];return i}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return pe},qX:function(){return fe},Xd:function(){return le},Mq:function(){return Le},ZF:function(){return me},KN:function(){return ve}});var i=n(7142),r=n(5168),o=n(223);n(2801);const a=(e,t)=>t.some((t=>e instanceof t));let c,s;function C(){return c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(H(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),p.set(t,e),t}function L(e){if(u.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));u.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function g(e){v=e(v)}function M(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(z(this),t),H(f.get(this))}:function(...t){return H(e.apply(z(this),t))}:function(t,...n){const i=e.call(z(this),t,...n);return h.set(i,t.sort?t.sort():[t]),H(i)}}function V(e){return"function"===typeof e?M(e):(e instanceof IDBTransaction&&L(e),a(e,C())?new Proxy(e,v):e)}function H(e){if(e instanceof IDBRequest)return m(e);if(d.has(e))return d.get(e);const t=V(e);return t!==e&&(d.set(e,t),p.set(t,e)),t}const z=e=>p.get(e);function y(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),c=H(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(H(a.result),e.oldVersion,e.newVersion,H(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),c}const b=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],x=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=_.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!b.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let a=o.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),r&&o.done]))[0]};return x.set(t,o),o}g((e=>({...e,get:(t,n,i)=>w(t,n)||e.get(t,n,i),has:(t,n)=>!!w(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const k="@firebase/app",E="0.7.31",T=new r.Yd("@firebase/app"),I="@firebase/app-compat",A="@firebase/analytics-compat",P="@firebase/analytics",R="@firebase/app-check-compat",O="@firebase/app-check",D="@firebase/auth",F="@firebase/auth-compat",j="@firebase/database",U="@firebase/database-compat",B="@firebase/functions",q="@firebase/functions-compat",W="@firebase/installations",$="@firebase/installations-compat",G="@firebase/messaging",Y="@firebase/messaging-compat",K="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="9.9.3",oe="[DEFAULT]",ae={[k]:"fire-core",[I]:"fire-core-compat",[P]:"fire-analytics",[A]:"fire-analytics-compat",[O]:"fire-app-check",[R]:"fire-app-check-compat",[D]:"fire-auth",[F]:"fire-auth-compat",[j]:"fire-rtdb",[U]:"fire-rtdb-compat",[B]:"fire-fn",[q]:"fire-fn-compat",[W]:"fire-iid",[$]:"fire-iid-compat",[G]:"fire-fcm",[Y]:"fire-fcm-compat",[K]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ce=new Map,se=new Map;function Ce(e,t){try{e.container.addComponent(t)}catch(n){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(se.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;se.set(t,e);for(const n of ce.values())Ce(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ue={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new o.LL("app","Firebase",ue);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=re;function me(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw he.create("bad-app-name",{appName:String(r)});const a=ce.get(r);if(a){if((0,o.vZ)(e,a.options)&&(0,o.vZ)(n,a.config))return a;throw he.create("duplicate-app",{appName:r})}const c=new i.H0(r);for(const i of se.values())c.addComponent(i);const s=new de(e,n,c);return ce.set(r,s),s}function Le(e=oe){const t=ce.get(e);if(!t)throw he.create("no-app",{appName:e});return t}function ve(e,t,n){var r;let o=null!==(r=ae[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),c=t.match(/\s|\//);if(a||c){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&e.push("and"),c&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void T.warn(e.join(" "))}le(new i.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge="firebase-heartbeat-database",Me=1,Ve="firebase-heartbeat-store";let He=null;function ze(){return He||(He=y(ge,Me,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ve)}}}).catch((e=>{throw he.create("idb-open",{originalErrorMessage:e.message})}))),He}async function ye(e){var t;try{const t=await ze();return t.transaction(Ve).objectStore(Ve).get(_e(e))}catch(n){if(n instanceof o.ZR)T.warn(n.message);else{const e=he.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});T.warn(e.message)}}}async function be(e,t){var n;try{const n=await ze(),i=n.transaction(Ve,"readwrite"),r=i.objectStore(Ve);return await r.put(t,_e(e)),i.done}catch(i){if(i instanceof o.ZR)T.warn(i.message);else{const e=he.create("idb-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message});T.warn(e.message)}}}function _e(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=1024,we=2592e6;class Se{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ee(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=we})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=ke(this._heartbeatsCache.heartbeats),i=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function ke(e,t=xe){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Te(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Te(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ee{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ye(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return be(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return be(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Te(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){le(new i.wA("platform-logger",(e=>new S(e)),"PRIVATE")),le(new i.wA("heartbeat",(e=>new Se(e)),"PRIVATE")),ve(k,E,e),ve(k,E,"esm2017"),ve("fire-js","")}Ie("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return C},wA:function(){return r}});n(1703);var i=n(223);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(s(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function c(e){return e===o?void 0:e}function s(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return C},in:function(){return r}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,c={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},s=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=c[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class C{constructor(e){this.name=e,this._logLevel=a,this._logHandler=s,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},8796:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(3396),r=n(4870);const o=(0,i.aZ)({__name:"contenteditable",props:{tag:String,contenteditable:{type:[Boolean,String],default:!0},modelValue:String,noHtml:{type:Boolean,default:!0},noNl:{type:Boolean,default:!1}},emits:{returned:String,"update:modelValue":String},setup(e,{emit:t}){const n=e;function o(e,t,n){return e.split(t).join(n)}const a=(0,r.iH)();function c(){return n.noHtml?a.value.innerText:a.value.innerHTML}function s(e){n.noHtml?a.value.innerText=e:a.value.innerHTML=e}function C(e){t("update:modelValue",c())}function l(e){e.preventDefault();let t=(e.originalEvent||e).clipboardData.getData("text/plain");n.noNl&&(t=o(t,"\r\n"," "),t=o(t,"\n"," "),t=o(t,"\r"," ")),window.document.execCommand("insertText",!1,t)}function f(e){"Enter"==e.key&&n.noNl&&(e.preventDefault(),t("returned",c()))}return(0,i.bv)((()=>{var e;s(null!=(e=n.modelValue)?e:"")})),(0,i.YP)((()=>n.modelValue),((e,t)=>{e!=c()&&s(null!=e?e:"")})),(0,i.YP)((()=>n.noHtml),((e,t)=>{var i;s(null!=(i=n.modelValue)?i:"")})),(t,n)=>((0,i.wg)(),(0,i.j4)((0,i.LL)(e.tag),{contenteditable:e.contenteditable,onInput:C,onBlur:C,onPaste:l,onKeypress:f,ref_key:"element",ref:a},null,40,["contenteditable"]))}})},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return D},p7:function(){return tt}});n(1703);var i=n(3396),r=n(4870);
/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const c=Object.assign;function s(e,t){const n={};for(const i in t){const r=t[i];n[i]=l(r)?r.map(e):e(r)}return n}const C=()=>{},l=Array.isArray;const f=/\/$/,u=e=>e.replace(f,"");function h(e,t,n="/"){let i,r={},o="",a="";const c=t.indexOf("#");let s=t.indexOf("?");return c<s&&c>=0&&(s=-1),s>-1&&(i=t.slice(0,s),o=t.slice(s+1,c>-1?c:t.length),r=e(o)),c>-1&&(i=i||t.slice(0,c),a=t.slice(c,t.length)),i=V(null!=i?i:t,n),{fullPath:i+(o&&"?")+o+a,path:i,query:r,hash:a}}function d(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function p(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&L(t.matched[i],n.matched[r])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function L(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!g(e[n],t[n]))return!1;return!0}function g(e,t){return l(e)?M(e,t):l(t)?M(t,e):e===t}function M(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function V(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,o,a=n.length-1;for(r=0;r<i.length;r++)if(o=i[r],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var H,z;(function(e){e["pop"]="pop",e["push"]="push"})(H||(H={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(z||(z={}));function y(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),u(e)}const b=/^[^#]+#/;function _(e,t){return e.replace(b,"#")+t}function x(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const w=()=>({left:window.pageXOffset,top:window.pageYOffset});function S(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=x(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const k=new Map;function E(e,t){k.set(e,t)}function T(e){const t=k.get(e);return k.delete(e),t}let I=()=>location.protocol+"//"+location.host;function A(e,t){const{pathname:n,search:i,hash:r}=t,o=e.indexOf("#");if(o>-1){let t=r.includes(e.slice(o))?e.slice(o).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),p(n,"")}const a=p(n,e);return a+i+r}function P(e,t,n,i){let r=[],o=[],a=null;const s=({state:o})=>{const c=A(e,location),s=n.value,C=t.value;let l=0;if(o){if(n.value=c,t.value=o,a&&a===s)return void(a=null);l=C?o.position-C.position:0}else i(c);r.forEach((e=>{e(n.value,s,{delta:l,type:H.pop,direction:l?l>0?z.forward:z.back:z.unknown})}))};function C(){a=n.value}function l(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return o.push(t),t}function f(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:w()}),"")}function u(){for(const e of o)e();o=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:C,listen:l,destroy:u}}function R(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?w():null}}function O(e){const{history:t,location:n}=window,i={value:A(e,n)},r={value:t.state};function o(i,o,a){const c=e.indexOf("#"),s=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+i:I()+e+i;try{t[a?"replaceState":"pushState"](o,"",s),r.value=o}catch(C){console.error(C),n[a?"replace":"assign"](s)}}function a(e,n){const a=c({},t.state,R(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});o(e,a,!0),i.value=e}function s(e,n){const a=c({},r.value,t.state,{forward:e,scroll:w()});o(a.current,a,!0);const s=c({},R(i.value,e,null),{position:a.position+1},n);o(e,s,!1),i.value=e}return r.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:s,replace:a}}function D(e){e=y(e);const t=O(e),n=P(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=c({location:"",base:e,go:i,createHref:_.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function F(e){return"string"===typeof e||e&&"object"===typeof e}function j(e){return"string"===typeof e||"symbol"===typeof e}const U={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B=Symbol("");var q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(q||(q={}));function W(e,t){return c(new Error,{type:e,[B]:!0},t)}function $(e,t){return e instanceof Error&&B in e&&(null==t||!!(e.type&t))}const G="[^/]+?",Y={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=c({},Y,t),i=[];let r=n.start?"^":"";const o=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let t=0;t<c.length;t++){const i=c[t];let a=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(K,"\\$&"),a+=40;else if(1===i.type){const{value:e,repeatable:n,optional:s,regexp:C}=i;o.push({name:e,repeatable:n,optional:s});const l=C||G;if(l!==G){a+=10;try{new RegExp(`(${l})`)}catch(f){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+f.message)}}let u=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(u=s&&c.length<2?`(?:/${u})`:"/"+u),s&&(u+="?"),r+=u,a+=20,s&&(a+=-8),n&&(a+=-20),".*"===l&&(a+=-50)}e.push(a)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function s(e){const t=e.match(a),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=o[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function C(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:a,optional:c}=e,s=o in t?t[o]:"";if(l(s)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const C=l(s)?s.join("/"):s;if(!C){if(!c)throw new Error(`Missing required param "${o}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=C}}return n||"/"}return{re:a,score:i,keys:o,parse:s,stringify:C}}function J(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Q(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=J(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(Z(i))return 1;if(Z(r))return-1}return r.length-i.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${C}": ${e}`)}let n=0,i=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let c,s=0,C="",l="";function f(){C&&(0===n?o.push({type:0,value:C}):1===n||2===n||3===n?(o.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${C}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:C,regexp:l,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),C="")}function u(){C+=c}while(s<e.length)if(c=e[s++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(C&&f(),a()):":"===c?(f(),n=1):u();break;case 4:u(),n=i;break;case 1:"("===c?n=2:te.test(c)?u():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&s--);break;case 2:")"===c?"\\"==l[l.length-1]?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&s--,l="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${C}"`),f(),a(),r}function ie(e,t,n){const i=X(ne(e.path),n);const r=c(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function re(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function o(e,n,i){const r=!i,s=ae(e);s.aliasOf=i&&i.record;const f=le(t,e),u=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(c({},s,{components:i?i.record.components:s.components,path:e,aliasOf:i?i.record:s}))}let h,d;for(const t of u){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&i+c)}if(h=ie(t,n,f),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),r&&e.name&&!se(h)&&a(e.name)),s.children){const e=s.children;for(let t=0;t<e.length;t++)o(e[t],h,i&&i.children[t])}i=i||h,l(h)}return d?()=>{a(d)}:C}function a(e){if(j(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(){return n}function l(e){let t=0;while(t<n.length&&Q(e,n[t])>=0&&(e.record.path!==n[t].record.path||!fe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!se(e)&&i.set(e.record.name,e)}function f(e,t){let r,o,a,s={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw W(1,{location:e});a=r.record.name,s=c(oe(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),o=r.stringify(s)}else if("path"in e)o=e.path,r=n.find((e=>e.re.test(o))),r&&(s=r.parse(o),a=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw W(1,{location:e,currentLocation:t});a=r.record.name,s=c({},t.params,e.params),o=r.stringify(s)}const C=[];let l=r;while(l)C.unshift(l.record),l=l.parent;return{name:a,path:o,params:s,matched:C,meta:Ce(C)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:f,removeRoute:a,getRoutes:s,getRecordMatcher:r}}function oe(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function se(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ce(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function le(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function fe(e,t){return t.children.some((t=>t===e||fe(e,t)))}const ue=/#/g,he=/&/g,de=/\//g,pe=/=/g,me=/\?/g,Le=/\+/g,ve=/%5B/g,ge=/%5D/g,Me=/%5E/g,Ve=/%60/g,He=/%7B/g,ze=/%7C/g,ye=/%7D/g,be=/%20/g;function _e(e){return encodeURI(""+e).replace(ze,"|").replace(ve,"[").replace(ge,"]")}function xe(e){return _e(e).replace(He,"{").replace(ye,"}").replace(Me,"^")}function we(e){return _e(e).replace(Le,"%2B").replace(be,"+").replace(ue,"%23").replace(he,"%26").replace(Ve,"`").replace(He,"{").replace(ye,"}").replace(Me,"^")}function Se(e){return we(e).replace(pe,"%3D")}function Ne(e){return _e(e).replace(ue,"%23").replace(me,"%3F")}function ke(e){return null==e?"":Ne(e).replace(de,"%2F")}function Ee(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Te(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(Le," "),n=e.indexOf("="),o=Ee(n<0?e:e.slice(0,n)),a=n<0?null:Ee(e.slice(n+1));if(o in t){let e=t[o];l(e)||(e=t[o]=[e]),e.push(a)}else t[o]=a}return t}function Ie(e){let t="";for(let n in e){const i=e[n];if(n=Se(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=l(i)?i.map((e=>e&&we(e))):[i&&we(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ae(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=l(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}const Pe=Symbol(""),Re=Symbol(""),Oe=Symbol(""),De=Symbol(""),Fe=Symbol("");function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ue(e,t,n,i,r){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((a,c)=>{const s=e=>{!1===e?c(W(4,{from:n,to:t})):e instanceof Error?c(e):F(e)?c(W(2,{from:t,to:e})):(o&&i.enterCallbacks[r]===o&&"function"===typeof e&&o.push(e),a())},C=e.call(i&&i.instances[r],t,n,s);let l=Promise.resolve(C);e.length<3&&(l=l.then(s)),l.catch((e=>c(e)))}))}function Be(e,t,n,i){const r=[];for(const o of e){0;for(const e in o.components){let c=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(qe(c)){const a=c.__vccOpts||c,s=a[t];s&&r.push(Ue(s,n,i,o,e))}else{let s=c();0,r.push((()=>s.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const c=a(r)?r.default:r;o.components[e]=c;const s=c.__vccOpts||c,C=s[t];return C&&Ue(C,n,i,o,e)()}))))}}}return r}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function We(e){const t=(0,i.f3)(Oe),n=(0,i.f3)(De),o=(0,i.Fl)((()=>t.resolve((0,r.SU)(e.to)))),a=(0,i.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const a=r.findIndex(L.bind(null,i));if(a>-1)return a;const c=Xe(e[t-2]);return t>1&&Xe(i)===c&&r[r.length-1].path!==c?r.findIndex(L.bind(null,e[t-2])):a})),c=(0,i.Fl)((()=>a.value>-1&&Ke(n.params,o.value.params))),s=(0,i.Fl)((()=>a.value>-1&&a.value===n.matched.length-1&&v(n.params,o.value.params)));function l(n={}){return Ye(n)?t[(0,r.SU)(e.replace)?"replace":"push"]((0,r.SU)(e.to)).catch(C):Promise.resolve()}return{route:o,href:(0,i.Fl)((()=>o.value.href)),isActive:c,isExactActive:s,navigate:l}}const $e=(0,i.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=(0,r.qj)(We(e)),{options:o}=(0,i.f3)(Oe),a=(0,i.Fl)((()=>({[Je(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},r)}}}),Ge=$e;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!l(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,i.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,i.f3)(Fe),a=(0,i.Fl)((()=>e.route||o.value)),s=(0,i.f3)(Re,0),C=(0,i.Fl)((()=>{let e=(0,r.SU)(s);const{matched:t}=a.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,i.Fl)((()=>a.value.matched[C.value]));(0,i.JJ)(Re,(0,i.Fl)((()=>C.value+1))),(0,i.JJ)(Pe,l),(0,i.JJ)(Fe,a);const f=(0,r.iH)();return(0,i.YP)((()=>[f.value,l.value,e.name]),(([e,t,n],[i,r,o])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&L(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=a.value,o=e.name,s=l.value,C=s&&s.components[o];if(!C)return Ze(n.default,{Component:C,route:r});const u=s.props[o],h=u?!0===u?r.params:"function"===typeof u?u(r):u:null,d=e=>{e.component.isUnmounted&&(s.instances[o]=null)},p=(0,i.h)(C,c({},h,t,{onVnodeUnmounted:d,ref:f}));return Ze(n.default,{Component:p,route:r})||p}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Qe;function tt(e){const t=re(e.routes,e),n=e.parseQuery||Te,a=e.stringifyQuery||Ie,f=e.history;const u=je(),p=je(),L=je(),v=(0,r.XI)(U);let g=U;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const M=s.bind(null,(e=>""+e)),V=s.bind(null,ke),z=s.bind(null,Ee);function y(e,n){let i,r;return j(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function b(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function _(){return t.getRoutes().map((e=>e.record))}function x(e){return!!t.getRecordMatcher(e)}function k(e,i){if(i=c({},i||v.value),"string"===typeof e){const r=h(n,e,i.path),o=t.resolve({path:r.path},i),a=f.createHref(r.fullPath);return c(r,o,{params:z(o.params),hash:Ee(r.hash),redirectedFrom:void 0,href:a})}let r;if("path"in e)r=c({},e,{path:h(n,e.path,i.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];r=c({},e,{params:V(e.params)}),i.params=V(i.params)}const o=t.resolve(r,i),s=e.hash||"";o.params=M(z(o.params));const C=d(a,c({},e,{hash:xe(s),path:o.path})),l=f.createHref(C);return c({fullPath:C,hash:s,query:a===Ie?Ae(e.query):e.query||{}},o,{redirectedFrom:void 0,href:l})}function I(e){return"string"===typeof e?h(n,e,v.value.path):c({},e)}function A(e,t){if(g!==e)return W(8,{from:t,to:e})}function P(e){return D(e)}function R(e){return P(c(I(e),{replace:!0}))}function O(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=I(i):{path:i},i.params={}),c({query:e.query,hash:e.hash,params:"path"in i?{}:e.params},i)}}function D(e,t){const n=g=k(e),i=v.value,r=e.state,o=e.force,s=!0===e.replace,C=O(n);if(C)return D(c(I(C),{state:r,force:o,replace:s}),t||n);const l=n;let f;return l.redirectedFrom=t,!o&&m(a,i,n)&&(f=W(16,{to:l,from:i}),ne(i,i,!0,!1)),(f?Promise.resolve(f):B(l,i)).catch((e=>$(e)?$(e,2)?e:te(e):Z(e,l,i))).then((e=>{if(e){if($(e,2))return D(c({replace:s},I(e.to),{state:r,force:o}),t||l)}else e=G(l,i,!0,s,r);return q(l,i,e),e}))}function F(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[i,r,o]=it(e,t);n=Be(i.reverse(),"beforeRouteLeave",e,t);for(const c of i)c.leaveGuards.forEach((i=>{n.push(Ue(i,e,t))}));const a=F.bind(null,e,t);return n.push(a),nt(n).then((()=>{n=[];for(const i of u.list())n.push(Ue(i,e,t));return n.push(a),nt(n)})).then((()=>{n=Be(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(Ue(i,e,t))}));return n.push(a),nt(n)})).then((()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(l(i.beforeEnter))for(const r of i.beforeEnter)n.push(Ue(r,e,t));else n.push(Ue(i.beforeEnter,e,t));return n.push(a),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Be(o,"beforeRouteEnter",e,t),n.push(a),nt(n)))).then((()=>{n=[];for(const i of p.list())n.push(Ue(i,e,t));return n.push(a),nt(n)})).catch((e=>$(e,8)?e:Promise.reject(e)))}function q(e,t,n){for(const i of L.list())i(e,t,n)}function G(e,t,n,i,r){const a=A(e,t);if(a)return a;const s=t===U,C=o?history.state:{};n&&(i||s?f.replace(e.fullPath,c({scroll:s&&C&&C.scroll},r)):f.push(e.fullPath,r)),v.value=e,ne(e,t,n,s),te()}let Y;function K(){Y||(Y=f.listen(((e,t,n)=>{if(!ce.listening)return;const i=k(e),r=O(i);if(r)return void D(c(r,{replace:!0}),i).catch(C);g=i;const a=v.value;o&&E(N(a.fullPath,n.delta),w()),B(i,a).catch((e=>$(e,12)?e:$(e,2)?(D(e.to,i).then((e=>{$(e,20)&&!n.delta&&n.type===H.pop&&f.go(-1,!1)})).catch(C),Promise.reject()):(n.delta&&f.go(-n.delta,!1),Z(e,i,a)))).then((e=>{e=e||G(i,a,!1),e&&(n.delta&&!$(e,8)?f.go(-n.delta,!1):n.type===H.pop&&$(e,20)&&f.go(-1,!1)),q(i,a,e)})).catch(C)})))}let X,J=je(),Q=je();function Z(e,t,n){te(e);const i=Q.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return X&&v.value!==U?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))}function te(e){return X||(X=!e,K(),J.list().forEach((([t,n])=>e?n(e):t())),J.reset()),e}function ne(t,n,r,a){const{scrollBehavior:c}=e;if(!o||!c)return Promise.resolve();const s=!r&&T(N(t.fullPath,0))||(a||!r)&&history.state&&history.state.scroll||null;return(0,i.Y3)().then((()=>c(t,n,s))).then((e=>e&&S(e))).catch((e=>Z(e,t,n)))}const ie=e=>f.go(e);let oe;const ae=new Set,ce={currentRoute:v,listening:!0,addRoute:y,removeRoute:b,hasRoute:x,getRoutes:_,resolve:k,options:e,push:P,replace:R,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:u.add,beforeResolve:p.add,afterEach:L.add,onError:Q.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.SU)(v)}),o&&!oe&&v.value===U&&(oe=!0,P(f.location).catch((e=>{0})));const n={};for(const r in U)n[r]=(0,i.Fl)((()=>v.value[r]));e.provide(Oe,t),e.provide(De,(0,r.qj)(n)),e.provide(Fe,v);const a=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(g=U,Y&&Y(),Y=null,v.value=U,oe=!1,X=!1),a()}}};return ce}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],i=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){const o=t.matched[a];o&&(e.matched.find((e=>L(e,o)))?i.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find((e=>L(e,c)))||r.push(c))}return[n,i,r]}}}]);
//# sourceMappingURL=chunk-vendors.c90c7a14.js.map