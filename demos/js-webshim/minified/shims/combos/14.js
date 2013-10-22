!function(){var a,b,c=Function.prototype.call,d=Array.prototype,e=Object.prototype,f=d.slice;if(Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=f.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var g=new e,h=b.apply(g,c.concat(f.call(arguments)));return null!==h&&Object(h)===h?h:g}return b.apply(a,c.concat(f.call(arguments)))};return d}),b=c.bind(e.toString),a=c.bind(e.hasOwnProperty),Array.isArray||(Array.isArray=function(a){return"[object Array]"==b(a)}),Array.prototype.forEach||(Array.prototype.forEach=function(a){var c=s(this),d=arguments[1],e=0,f=c.length>>>0;if("[object Function]"!=b(a))throw new TypeError;for(;f>e;)e in c&&a.call(d,c[e],e,c),e++}),Array.prototype.map||(Array.prototype.map=function(a){var c=s(this),d=c.length>>>0,e=Array(d),f=arguments[1];if("[object Function]"!=b(a))throw new TypeError;for(var g=0;d>g;g++)g in c&&(e[g]=a.call(f,c[g],g,c));return e}),Array.prototype.filter||(Array.prototype.filter=function(a){var c=s(this),d=c.length>>>0,e=[],f=arguments[1];if("[object Function]"!=b(a))throw new TypeError;for(var g=0;d>g;g++)g in c&&a.call(f,c[g],g,c)&&e.push(c[g]);return e}),Array.prototype.every||(Array.prototype.every=function(a){var c=s(this),d=c.length>>>0,e=arguments[1];if("[object Function]"!=b(a))throw new TypeError;for(var f=0;d>f;f++)if(f in c&&!a.call(e,c[f],f,c))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(a){var c=s(this),d=c.length>>>0,e=arguments[1];if("[object Function]"!=b(a))throw new TypeError;for(var f=0;d>f;f++)if(f in c&&a.call(e,c[f],f,c))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(a){var c=s(this),d=c.length>>>0;if("[object Function]"!=b(a))throw new TypeError;if(!d&&1==arguments.length)throw new TypeError;var e,f=0;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f++];break}if(++f>=d)throw new TypeError}for(;d>f;f++)f in c&&(e=a.call(void 0,e,c[f],f,c));return e}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(a){var c=s(this),d=c.length>>>0;if("[object Function]"!=b(a))throw new TypeError;if(!d&&1==arguments.length)throw new TypeError;var e,f=d-1;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f--];break}if(--f<0)throw new TypeError}do f in this&&(e=a.call(void 0,e,c[f],f,c));while(f--);return e}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=s(this),c=b.length>>>0;if(!c)return-1;var d=0;for(arguments.length>1&&(d=q(arguments[1])),d=d>=0?d:c-Math.abs(d);c>d;d++)if(d in b&&b[d]===a)return d;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){var b=s(this),c=b.length>>>0;if(!c)return-1;var d=c-1;for(arguments.length>1&&(d=q(arguments[1])),d=d>=0?d:c-Math.abs(d);d>=0;d--)if(d in b&&a===b[d])return d;return-1}),2!=[1,2].splice(0).length){var g=Array.prototype.splice;Array.prototype.splice=function(a,b){return arguments.length?g.apply(this,[void 0===a?0:a,void 0===b?this.length-a:b].concat(f.call(arguments,2))):[]}}if(!Object.keys){var h=!0,i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],j=i.length;for(var k in{toString:null})h=!1;Object.keys=function t(b){if("object"!=typeof b&&"function"!=typeof b||null===b)throw new TypeError("Object.keys called on a non-object");var t=[];for(var c in b)a(b,c)&&t.push(c);if(h)for(var d=0,e=j;e>d;d++){var f=i[d];a(b,f)&&t.push(f)}return t}}Date.prototype.toISOString||(Date.prototype.toISOString=function(){var a,b,c;if(!isFinite(this))throw new RangeError;for(a=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return a.slice(0,3).join("-")+"T"+a.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()});var l="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";if(!String.prototype.trim||l.trim()){l="["+l+"]";var m=new RegExp("^"+l+l+"*"),n=new RegExp(l+l+"*$");String.prototype.trim=function(){return String(this).replace(m,"").replace(n,"")}}if("0".split(void 0,0).length){var o=String.prototype.split;String.prototype.split=function(a,b){return void 0===a&&0===b?[]:o.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var p=String.prototype.substr;String.prototype.substr=function(a,b){return p.call(this,0>a?(a=this.length+a)<0?0:a:a,b)}}var q=function(a){return a=+a,a!==a?a=-1:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(a>0||-1)*Math.floor(Math.abs(a))),a},r="a"!="a"[0],s=function(a){if(null==a)throw new TypeError;return r&&"string"==typeof a&&a?a.split(""):Object(a)}}(),function(a,b){var c="defineProperty",d=!!(Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor);if(d&&Object[c]&&Object.prototype.__defineGetter__&&!function(){try{var a=document.createElement("foo");Object[c](a,"bar",{get:function(){return!0}}),d=!!a.bar}catch(b){d=!1}a=null}(),Modernizr.objectAccessor=!!(d||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__),Modernizr.advancedObjectProperties=d,!(d&&Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor&&Object.defineProperty)){var e=Function.prototype.call,f=Object.prototype,g=e.bind(f.hasOwnProperty);b.objectCreate=function(c,d,e,f){var g,h=function(){};return h.prototype=c,g=new h,f||"__proto__"in g||Modernizr.objectAccessor||(g.__proto__=c),d&&b.defineProperties(g,d),e&&(g.options=a.extend(!0,{},g.options||{},e),e=g.options),g._create&&a.isFunction(g._create)&&g._create(e),g},b.defineProperties=function(a,c){for(var d in c)g(c,d)&&b.defineProperty(a,d,c[d]);return a},b.defineProperty=function(a,b,c){return"object"!=typeof c||null===c?a:g(c,"value")?(a[b]=c.value,a):(a.__defineGetter__&&("function"==typeof c.get&&a.__defineGetter__(b,c.get),"function"==typeof c.set&&a.__defineSetter__(b,c.set)),a)},b.getPrototypeOf=function(a){return Object.getPrototypeOf&&Object.getPrototypeOf(a)||a.__proto__||a.constructor&&a.constructor.prototype},b.getOwnPropertyDescriptor=function(a,b){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var c;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return c=Object.getOwnPropertyDescriptor(a,b)}catch(d){}c={configurable:!0,enumerable:!0,writable:!0,value:void 0};var e=a.__lookupGetter__&&a.__lookupGetter__(b),f=a.__lookupSetter__&&a.__lookupSetter__(b);if(!e&&!f){if(!g(a,b))return;return c.value=a[b],c}return delete c.writable,delete c.value,c.get=c.set=void 0,e&&(c.get=e),f&&(c.set=f),c}}}(webshims.$,webshims),webshims.register("dom-extend",function(a,b,c,d,e){"use strict";var f=!("hrefNormalized"in a.support)||a.support.hrefNormalized,g=!("getSetAttribute"in a.support)||a.support.getSetAttribute;if(b.assumeARIA=g||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==a('<input type="email" />').attr("type")||""===a("<form />").attr("novalidate")||"required"in a("<input />")[0].attributes)&&b.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),a.parseHTML||b.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!b.cfg.no$Switch){var h=function(){if(!c.jQuery||c.$&&c.jQuery!=c.$||c.jQuery.webshims||(b.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),c.$&&(c.$=b.$),c.jQuery=b.$),b.M!=Modernizr){b.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var a in Modernizr)a in b.M||(b.M[a]=Modernizr[a]);Modernizr=b.M}};h(),setTimeout(h,90),b.ready("DOM",h),a(h),b.ready("WINDOWLOAD",h)}var i=b.modules,j=/\s*,\s*/,k={},l={},m={},n={},o={},p=a.fn.val,q=function(b,c,d,e,f){return f?p.call(a(b)):p.call(a(b),d)};a.widget||!function(){var b=a.cleanData;a.cleanData=function(c){if(!a.widget)for(var d,e=0;null!=(d=c[e]);e++)try{a(d).triggerHandler("remove")}catch(f){}b(c)}}(),a.fn.val=function(b){var c=this[0];if(arguments.length&&null==b&&(b=""),!arguments.length)return c&&1===c.nodeType?a.prop(c,"value",b,"val",!0):p.call(this);if(a.isArray(b))return p.apply(this,arguments);var d=a.isFunction(b);return this.each(function(f){if(c=this,1===c.nodeType)if(d){var g=b.call(c,f,a.prop(c,"value",e,"val",!0));null==g&&(g=""),a.prop(c,"value",g,"val")}else a.prop(c,"value",b,"val")})},a.fn.onTrigger=function(a,b){return this.on(a,b).each(b)},a.fn.onWSOff=function(b,c,e,f){return f||(f=d),a(f)[e?"onTrigger":"on"](b,c),this.on("remove",function(d){d.originalEvent||a(f).off(b,c)}),this};var r="_webshimsLib"+Math.round(1e3*Math.random()),s=function(b,c,d){if(b=b.jquery?b[0]:b,!b)return d||{};var f=a.data(b,r);return d!==e&&(f||(f=a.data(b,r,{})),c&&(f[c]=d)),c?f&&f[c]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){a.fn[b.name]=function(){var c=[];return this.each(function(){var d=s(this,"shadowData"),e=d&&d[b.prop]||this;-1==a.inArray(e,c)&&c.push(e)}),this.pushStack(c)}}),["removeAttr","prop","attr"].forEach(function(c){k[c]=a[c],a[c]=function(b,d,f,g,h){var i="val"==g,j=i?q:k[c];if(!b||!l[d]||1!==b.nodeType||!i&&g&&"attr"==c&&a.attrFn[d])return j(b,d,f,g,h);var n,p,r,s=(b.nodeName||"").toLowerCase(),t=m[s],u="attr"!=c||f!==!1&&null!==f?c:"removeAttr";if(t||(t=m["*"]),t&&(t=t[d]),t&&(n=t[u]),n){if("value"==d&&(p=n.isVal,n.isVal=i),"removeAttr"===u)return n.value.call(b);if(f===e)return n.get?n.get.call(b):n.value;n.set&&("attr"==c&&f===!0&&(f=d),r=n.set.call(b,f)),"value"==d&&(n.isVal=p)}else r=j(b,d,f,g,h);if((f!==e||"removeAttr"===u)&&o[s]&&o[s][d]){var v;v="removeAttr"==u?!1:"prop"==u?!!f:!0,o[s][d].forEach(function(a){(!a.only||(a.only="prop"&&"prop"==c)||"attr"==a.only&&"prop"!=c)&&a.call(b,f,v,i?"val":u,c)})}return r},n[c]=function(a,d,f){m[a]||(m[a]={}),m[a][d]||(m[a][d]={});var g=m[a][d][c],h=function(a,b,e){return b&&b[a]?b[a]:e&&e[a]?e[a]:"prop"==c&&"value"==d?function(a){var b=this;return f.isVal?q(b,d,a,!1,0===arguments.length):k[c](b,d,a)}:"prop"==c&&"value"==a&&f.value.apply?function(){var a=k[c](this,d);return a&&a.apply&&(a=a.apply(this,arguments)),a}:function(a){return k[c](this,d,a)}};m[a][d][c]=f,f.value===e&&(f.set||(f.set=f.writeable?h("set",f,g):b.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+a}:function(){b.info(d+" is readonly on "+a)}),f.get||(f.get=h("get",f,g))),["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=h(a,g))})}});var t=function(){var a=b.getPrototypeOf(d.createElement("foobar")),c=Object.prototype.hasOwnProperty,e=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(f,g,h){var i,j;if(!(e&&(i=d.createElement(f))&&(j=b.getPrototypeOf(i))&&a!==j)||i[g]&&c.call(i,g))h._supvalue=function(){var a=s(this,"propValue");return a&&a[g]&&a[g].apply?a[g].apply(this,arguments):a&&a[g]},u.extendValue(f,g,h.value);else{var k=i[g];h._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k},j[g]=h.value}h.value._supvalue=h._supvalue}}(),u=function(){var c={};b.addReady(function(d,e){var f={},g=function(b){f[b]||(f[b]=a(d.getElementsByTagName(b)),e[0]&&a.nodeName(e[0],b)&&(f[b]=f[b].add(e)))};a.each(c,function(a,c){return g(a),c&&c.forEach?(c.forEach(function(b){f[a].each(b)}),void 0):(b.warn("Error: with "+a+"-property. methods: "+c),void 0)}),f=null});var e,f=a([]),g=function(b,f){c[b]?c[b].push(f):c[b]=[f],a.isDOMReady&&(e||a(d.getElementsByTagName(b))).each(f)};return{createTmpCache:function(b){return a.isDOMReady&&(e=e||a(d.getElementsByTagName(b))),e||f},flushTmpCache:function(){e=null},content:function(b,c){g(b,function(){var b=a.attr(this,c);null!=b&&a.attr(this,c,b)})},createElement:function(a,b){g(a,b)},extendValue:function(b,c,d){g(b,function(){a(this).each(function(){var a=s(this,"propValue",{});a[c]=this[c],this[c]=d})})}}}(),v=function(a,b){a.defaultValue===e&&(a.defaultValue=""),a.removeAttr||(a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue),a.removeAttr._supvalue.call(this)}}),a.attr||(a.attr={})};a.extend(b,{getID:function(){var b=(new Date).getTime();return function(c){c=a(c);var d=c.prop("id");return d||(b++,d="ID-"+b,c.eq(0).prop("id",d)),d}}(),implement:function(a,c){var d=s(a,"implemented")||s(a,"implemented",{});return d[c]?(b.warn(c+" already implemented for element #"+a.id),!1):(d[c]=!0,!0)},extendUNDEFProp:function(b,c){a.each(c,function(a,c){a in b||(b[a]=c)})},createPropDefault:v,data:s,moveToFirstEvent:function(b,c,d){var e,f=(a._data(b,"events")||{})[c];f&&f.length>1&&(e=f.pop(),d||(d="bind"),"bind"==d&&f.delegateCount?f.splice(f.delegateCount,0,e):f.unshift(e)),b=null},addShadowDom:function(){var e,f,g,h={init:!1,runs:0,test:function(){var a=h.getHeight(),b=h.getWidth();a!=h.height||b!=h.width?(h.height=a,h.width=b,h.handler({type:"docresize"}),h.runs++,h.runs<9&&setTimeout(h.test,90)):h.runs=0},handler:function(b){clearTimeout(e),e=setTimeout(function(){if("resize"==b.type){var e=a(c).width(),i=a(c).width();if(i==f&&e==g)return;f=i,g=e,h.height=h.getHeight(),h.width=h.getWidth()}a(d).triggerHandler("updateshadowdom")},"resize"==b.type?50:9)},_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(a,b){var c=d.body,e=d.documentElement;h[b]=function(){return Math.max(c["scroll"+a],e["scroll"+a],c["offset"+a],e["offset"+a],e["client"+a])}})},start:function(){!this.init&&d.body&&(this.init=!0,this._create(),this.height=h.getHeight(),this.width=h.getWidth(),setInterval(this.test,600),a(this.test),b.ready("WINDOWLOAD",this.test),a(d).on("updatelayout",this.handler),a(c).bind("resize",this.handler),function(){var b,c=a.fn.animate;a.fn.animate=function(){return clearTimeout(b),b=setTimeout(function(){h.test()},99),c.apply(this,arguments)}}())}};return b.docObserve=function(){b.ready("DOM",function(){h.start()})},function(c,d,e){if(c&&d){e=e||{},c.jquery&&(c=c[0]),d.jquery&&(d=d[0]);var f=a.data(c,r)||a.data(c,r,{}),g=a.data(d,r)||a.data(d,r,{}),h={};e.shadowFocusElement?e.shadowFocusElement&&(e.shadowFocusElement.jquery&&(e.shadowFocusElement=e.shadowFocusElement[0]),h=a.data(e.shadowFocusElement,r)||a.data(e.shadowFocusElement,r,h)):e.shadowFocusElement=d,a(c).on("remove",function(b){b.originalEvent||setTimeout(function(){a(d).remove()},4)}),f.hasShadow=d,h.nativeElement=g.nativeElement=c,h.shadowData=g.shadowData=f.shadowData={nativeElement:c,shadowElement:d,shadowFocusElement:e.shadowFocusElement},e.shadowChilds&&e.shadowChilds.each(function(){s(this,"shadowData",g.shadowData)}),e.data&&(h.shadowData.data=g.shadowData.data=f.shadowData.data=e.data),e=null}b.docObserve()}}(),propTypes:{standard:function(a){v(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}})},"boolean":function(a){v(a),a.prop||(a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}})},src:function(){var b=d.createElement("a");return b.style.display="none",function(c,d){v(c),c.prop||(c.prop={set:function(a){c.attr.set.call(this,a)},get:function(){var c,e=this.getAttribute(d);if(null==e)return"";if(b.setAttribute("href",e+""),!f){try{a(b).insertAfter(this),c=b.getAttribute("href",4)}catch(g){c=b.getAttribute("href",4)}a(b).detach()}return c||b.href}})}}(),enumarated:function(a){v(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();return b&&-1!=a.limitedTo.indexOf(b)||(b=a.defaultValue),b}})}},reflectProperties:function(c,d){"string"==typeof d&&(d=d.split(j)),d.forEach(function(d){b.defineNodeNamesProperty(c,d,{prop:{set:function(b){a.attr(this,d,b)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(c,d,e){return l[d]=!0,e.reflect&&(e.propType&&!b.propTypes[e.propType]?b.error("could not finde propType "+e.propType):b.propTypes[e.propType||"standard"](e,d)),["prop","attr","removeAttr"].forEach(function(f){var g=e[f];g&&(g="prop"===f?a.extend({writeable:!0},g):a.extend({},g,{writeable:!0}),n[f](c,d,g),"*"!=c&&b.cfg.extendNative&&"prop"==f&&g.value&&a.isFunction(g.value)&&t(c,d,g),e[f]=g)}),e.initAttr&&u.content(c,d),e},defineNodeNameProperties:function(a,c,d,e){for(var f in c)!e&&c[f].initAttr&&u.createTmpCache(a),d&&(c[f][d]||(c[f][d]={},["value","set","get"].forEach(function(a){a in c[f]&&(c[f][d][a]=c[f][a],delete c[f][a])}))),c[f]=b.defineNodeNameProperty(a,f,c[f]);return e||u.flushTmpCache(),c},createElement:function(c,d,e){var f;return a.isFunction(d)&&(d={after:d}),u.createTmpCache(c),d.before&&u.createElement(c,d.before),e&&(f=b.defineNodeNameProperties(c,e,!1,!0)),d.after&&u.createElement(c,d.after),u.flushTmpCache(),f},onNodeNamesPropertyModify:function(b,c,d,e){"string"==typeof b&&(b=b.split(j)),a.isFunction(d)&&(d={set:d}),b.forEach(function(a){o[a]||(o[a]={}),"string"==typeof c&&(c=c.split(j)),d.initAttr&&u.createTmpCache(a),c.forEach(function(b){o[a][b]||(o[a][b]=[],l[b]=!0),d.set&&(e&&(d.set.only=e),o[a][b].push(d.set)),d.initAttr&&u.content(a,b)}),u.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,f){f||(f={}),a.isFunction(f)&&(f.set=f),b.defineNodeNamesProperty(c,d,{attr:{set:function(a){this.setAttribute(d,a),f.set&&f.set.call(this,!0)},get:function(){var a=this.getAttribute(d);return null==a?e:d}},removeAttr:{value:function(){this.removeAttribute(d),f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){var d;return c===e?(d=a.attributes[b]||{},c=d.specified?d.value:null,null==c?e:c):("boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c),void 0)}},activeLang:function(){var c,d,e=[],f={},g=/:\/\/|^\.*\//,h=function(c,d,e){var f;return d&&e&&-1!==a.inArray(d,e.availableLangs||e.availabeLangs||[])?(c.loading=!0,f=e.langSrc,g.test(f)||(f=b.cfg.basePath+f),b.loader.loadScript(f+d+".js",function(){c.langObj[d]?(c.loading=!1,k(c,!0)):a(function(){c.langObj[d]&&k(c,!0),c.loading=!1})}),!0):!1},j=function(a){f[a]&&f[a].forEach(function(a){a.callback(c,d,"")})},k=function(a,b){if(a.activeLang!=c&&a.activeLang!==d){var e=i[a.module].options;a.langObj[c]||d&&a.langObj[d]?(a.activeLang=c,a.callback(a.langObj[c]||a.langObj[d],c),j(a.module)):b||h(a,c,e)||h(a,d,e)||!a.langObj[""]||""===a.activeLang||(a.activeLang="",a.callback(a.langObj[""],c),j(a.module))}},l=function(b){return"string"==typeof b&&b!==c?(c=b,d=c.split("-")[0],c==d&&(d=!1),a.each(e,function(a,b){k(b)})):"object"==typeof b&&(b.register?(f[b.register]||(f[b.register]=[]),f[b.register].push(b),b.callback(c,d,"")):(b.activeLang||(b.activeLang=""),e.push(b),k(b))),c};return l}()}),a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){b[a]=function(a,d,e,f){"string"==typeof a&&(a=a.split(j));var g={};return a.forEach(function(a){g[a]=b[c](a,d,e,f)}),g}}),b.isReady("webshimLocalization",!0)}),function(a,b){if(!(!a.webshims.assumeARIA||"content"in b.createElement("template")||(a(function(){var b=a("main").attr({role:"main"});b.length>1?webshims.error("only one main element allowed in document"):b.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in b.createElement("a")))){var c={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},d=function(a,b){var c=a.getAttribute("role");c||a.setAttribute("role",b)};a.webshims.addReady(function(e,f){if(a.each(c,function(b,c){for(var g=a(b,e).add(f.filter(b)),h=0,i=g.length;i>h;h++)d(g[h],c)}),e===b){var g=b.getElementsByTagName("header")[0],h=b.getElementsByTagName("footer"),i=h.length;if(g&&!a(g).closest("section, article")[0]&&d(g,"banner"),!i)return;var j=h[i-1];a(j).closest("section, article")[0]||d(j,"contentinfo")}})}}(webshims.$,document),function(){"JSON"in window&&JSON.stringify&&JSON.parse||(this.JSON||(this.JSON={}),function(){function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)d=rep[c],"string"==typeof d&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}())}(),function(){var a=webshims.$||jQuery;if("localStorage"in window&&"sessionStorage"in window)return a.webshims.isReady("json-storage",!0),void 0;var b,c=function(b){b&&b.indexOf&&-1!=b.indexOf(";")&&setTimeout(function(){a.webshims.warn("Bad key for localStorage: ; in localStorage. name was: "+b)},0)},d=!1;a.each(["opener","top","parent"],function(a,c){try{if(b=window[c],b&&"name"in b)return b.name,!1;b=!1}catch(d){b=!1}}),b||(b=window,d=!0);var e=function(a){if(!d)try{window.name=a}catch(c){}try{b.name=a}catch(c){b=window,d=!0}},f=function(){var a;if(!d)try{a=window.name}catch(c){}if(!a)try{a=b.name}catch(c){b=window,d=!0}return a},g=function(a){function b(a,b,c){var d,e;c?(d=new Date,d.setTime(d.getTime()+1e3*60*60*24*c),e="; expires="+d.toGMTString()):e="",document.cookie=a+"="+b+e+"; path=/"}function d(a){var b,c,d=a+"=",e=document.cookie.split(";");for(b=0;b<e.length;b++){for(c=e[b];" "==c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(d))return c.substring(d.length,c.length)}return null}function g(c){c=JSON.stringify(c),"session"==a?e(c):b("localStorage",c,365)}function h(){"session"==a?e(""):b("localStorage","",365)}function i(){var b;if(b="session"==a?f():d("localStorage"))try{b=JSON.parse(b)}catch(c){b={}}return b||{}}var j=i();return{clear:function(){j={},h()},getItem:function(a){return a in j?j[a]:null},key:function(a){var b=0;for(var c in j){if(b==a)return c;b++}return null},removeItem:function(a){delete j[a],g(j)},setItem:function(a,b){c(a),j[a]=b+"",g(j)}}};"sessionStorage"in window||(window.sessionStorage=new g("session")),function(){var b,d,e,f="(empty string)+1287520303738",h=function(d){clearTimeout(b);var h;return window.localStorage&&("swf"!=d||e&&e.key)?(a.webshims.isReady("json-storage",!0),void 0):("swf"===d&&(e=document.getElementById("swflocalstorageshim"),h=e?typeof e.GetVariable:"undefined","undefined"==h&&(e=document.swflocalstorageshim,h=e?typeof e.GetVariable:"undefined","undefined"==h&&(e=window.localstorageshim,h=e?typeof e.GetVariable:"undefined")),"undefined"!=h&&(window.localStorage={},window.localStorage.clear=function(){e.clear&&e.clear()},window.localStorage.key=function(a){e.key&&e.key(a)},window.localStorage.removeItem=function(a){e.removeItem&&e.removeItem(a)},window.localStorage.setItem=function(a,b){c(a),b+="",b||(b=f),e.setItem&&e.setItem(a,b)},window.localStorage.getItem=function(a){if(!e.getItem)return null;var b=e.getItem(a,b);return b==f&&(b=""),b},a.webshims.log("flash-localStorage was implemented"))),"localStorage"in window||(window.localStorage=new g("local"),a.webshims.warn("implement cookie-localStorage")),a.webshims.isReady("json-storage",!0),void 0)},i=a.webshims.cfg["json-storage"];webshims.swfLocalStorage={show:function(){i.exceededMessage&&a("#swflocalstorageshim-wrapper").prepend('<div class="polyfill-exceeded-message">'+i.exceededMessage+"</div>"),a("#swflocalstorageshim-wrapper").css({top:a(window).scrollTop()+20,left:a(window).width()/2-a("#swflocalstorageshim-wrapper").outerWidth()/2})},hide:function(b){if(a("#swflocalstorageshim-wrapper").css({top:"",left:""}).find("div.polyfill-exceeded-message").remove(),!b){var c=new Error("DOMException: QUOTA_EXCEEDED_ERR");throw c.code=22,c.name="DOMException",c}},isReady:h},webshims.ready("DOM swfmini",function(){var c=window.swfmini;d||"localStorage"in window&&document.getElementById("swflocalstorageshim")||(d=!0,c&&c.hasFlashPlayerVersion("8.0.0")?(a("body").append('<div id="swflocalstorageshim-wrapper"><div id="swflocalstorageshim" /></div>'),c.embedSWF(webshims.cfg.basePath+"swf/localStorage.swf"+(webshims.cfg.addCacheBuster||""),"swflocalstorageshim","295","198","8.0.0",null,{allowscriptaccess:"always"},{name:"swflocalstorageshim"},function(a){a.success||window.localStorage||h()}),clearTimeout(b),b=setTimeout(function(){"localStorage"in window||webshims.warn("Add your development-directory to the local-trusted security sandbox: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"),h()},0===location.protocol.indexOf("file")?500:9999)):h())})}()}();