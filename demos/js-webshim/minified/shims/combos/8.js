var swfmini=function(){function e(){if(!C){try{var e=T.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var n=x.length,a=0;n>a;a++)x[a]()}}function t(e){C?e():x[x.length]=e}function n(){}function a(){N&&r()}function r(){var e=T.getElementsByTagName("body")[0],t=p(h);t.setAttribute("type",b);var n=e.appendChild(t);if(n){var a=0;(function(){if(typeof n.GetVariable!=m){var r=n.GetVariable("$version");r&&(r=r.split(" ")[1].split(","),M.pv=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)])}else if(10>a)return a++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),n=null})()}}function i(e){var t=null,n=c(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=m)t=n;else{var a=n.getElementsByTagName(h)[0];a&&(t=a)}return t}function o(e,t,n){var a,r=c(n);if(M.wk&&312>M.wk)return a;if(r)if(typeof e.id==m&&(e.id=n),M.ie&&M.win){var i="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?i+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(i+=" "+o+'="'+e[o]+'"'));var u="";for(var l in t)t[l]!=Object.prototype[l]&&(u+='<param name="'+l+'" value="'+t[l]+'" />');r.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+u+"</object>",A[A.length]=e.id,a=c(e.id)}else{var d=p(h);d.setAttribute("type",b);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?d.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&d.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(d,v,t[v]);r.parentNode.replaceChild(d,r),a=d}return a}function s(e,t,n){var a=p("param");a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a)}function u(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(M.ie&&M.win?(t.style.display="none",function(){4==t.readyState?l(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function l(e){var t=c(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(n){}return t}function p(e){return T.createElement(e)}function d(e){var t=M.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function f(e,t){if(S){var n,a=t?"visible":"hidden";C&&n&&c(e)&&(c(e).style.visibility=a)}}var m="undefined",h="object",v=jQuery.webshims||window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,E=navigator,N=!1,x=[a],A=[],k=[],C=!1,S=!0,M=function(){var e=typeof T.getElementById!=m&&typeof T.getElementsByTagName!=m&&typeof T.createElement!=m,t=E.userAgent.toLowerCase(),n=E.platform.toLowerCase(),a=n?/win/.test(n):/win/.test(t),r=n?/mac/.test(n):/mac/.test(t),i=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],u=null;if(typeof E.plugins!=m&&typeof E.plugins[g]==h)u=E.plugins[g].description,!u||typeof E.mimeTypes!=m&&E.mimeTypes[b]&&!E.mimeTypes[b].enabledPlugin||(N=!0,o=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(u.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(u.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(u)?parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=m)try{var l=new ActiveXObject(y);l&&(u=l.GetVariable("$version"),u&&(o=!0,u=u.split(" ")[1].split(","),s=[parseInt(u[0],10),parseInt(u[1],10),parseInt(u[2],10)]))}catch(c){}return{w3:e,pv:s,wk:i,ie:o,win:a,mac:r}}();return function(){M.ie&&M.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=k.length,t=0;e>t;t++)k[t][0].detachEvent(k[t][1],k[t][2]);for(var n=A.length,a=0;n>a;a++)u(A[a]);for(var r in M)M[r]=null;M=null;for(var i in swfmini)swfmini[i]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return M.w3?i(e):void 0},embedSWF:function(e,n,a,r,i,s,u,l,c,p){var v={success:!1,id:n};M.w3&&!(M.wk&&312>M.wk)&&e&&n&&a&&r&&i?(f(n,!1),t(function(){a+="",r+="";var t={};if(c&&typeof c===h)for(var s in c)t[s]=c[s];t.data=e,t.width=a,t.height=r;var g={};if(l&&typeof l===h)for(var y in l)g[y]=l[y];if(u&&typeof u===h)for(var b in u)typeof g.flashvars!=m?g.flashvars+="&"+b+"="+u[b]:g.flashvars=b+"="+u[b];if(d(i)){var w=o(t,g,n);t.id==n&&f(n,!0),v.success=!0,v.ref=w}else f(n,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){S=!1},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,n){return M.w3?o(e,t,n):void 0},showExpressInstall:function(){},removeSWF:function(e){M.w3&&u(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:n,expressInstallCallback:function(){}}}();webshims.register("dom-extend",function(e,t,n,a,r){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var i=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once! Webshims and other Plugins might not work properly."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),e(i)}var o=t.modules,s=/\s*,\s*/,u={},l={},c={},p={},d={},f=e.fn.val,m=function(t,n,a,r,i){return i?f.call(e(t)):f.call(e(t),a)};e.widget||function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var a,r=0;null!=(a=n[r]);r++)try{e(a).triggerHandler("remove")}catch(i){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var a=e.isFunction(t);return this.each(function(i){if(n=this,1===n.nodeType)if(a){var o=t.call(n,i,e.prop(n,"value",r,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,r,i){i||(i=a),e(i)[r?"onTrigger":"on"](t,n),this.on("remove",function(a){a.originalEvent||e(i).off(t,n)})};var h="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,n,a){if(t=t.jquery?t[0]:t,!t)return a||{};var i=e.data(t,h);return a!==r&&(i||(i=e.data(t,h,{})),n&&(i[n]=a)),n?i&&i[n]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var a=v(this,"shadowData"),r=a&&a[t.prop]||this;-1==e.inArray(r,n)&&n.push(r)}),this.pushStack(n)}}),e.Tween.propHooks._default&&e.css&&function(){var n=!1;try{n="10px"==e.css(e('<b style="width: 10px" />')[0],"width","")}catch(a){t.error(a)}var r=n?function(t,n){return e.css(t,n,!1,"")}:function(t,n){return e.css(t,n,"")};e.extend(e.Tween.propHooks._default,{get:function(t){var n;return null==t.elem[t.prop]&&!l[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(n=r(t.elem,t.prop),n&&"auto"!==n?n:0):l[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):l[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}})}(),["removeAttr","prop","attr"].forEach(function(n){u[n]=e[n],e[n]=function(t,a,i,o,s){var p="val"==o,f=p?m:u[n];if(!t||!l[a]||1!==t.nodeType||!p&&o&&"attr"==n&&e.attrFn[a])return f(t,a,i,o,s);var h,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=n||i!==!1&&null!==i?n:"removeAttr";if(b||(b=c["*"]),b&&(b=b[a]),b&&(h=b[w]),h){if("value"==a&&(v=h.isVal,h.isVal=p),"removeAttr"===w)return h.value.call(t);if(i===r)return h.get?h.get.call(t):h.value;h.set&&("attr"==n&&i===!0&&(i=a),g=h.set.call(t,i)),"value"==a&&(h.isVal=v)}else g=f(t,a,i,o,s);if((i!==r||"removeAttr"===w)&&d[y]&&d[y][a]){var T;T="removeAttr"==w?!1:"prop"==w?!!i:!0,d[y][a].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,i,T,p?"val":w,n)})}return g},p[n]=function(e,a,i){c[e]||(c[e]={}),c[e][a]||(c[e][a]={});var o=c[e][a][n],s=function(e,t,r){return t&&t[e]?t[e]:r&&r[e]?r[e]:"prop"==n&&"value"==a?function(e){var t=this;return i.isVal?m(t,a,e,!1,0===arguments.length):u[n](t,a,e)}:"prop"==n&&"value"==e&&i.value.apply?function(){var e=u[n](this,a);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return u[n](this,a,e)}};c[e][a][n]=i,i.value===r&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==a?function(){throw a+" is readonly on "+e}:function(){t.info(a+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(a.createElement("foobar")),n=Object.prototype.hasOwnProperty,r=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var u,l;if(!(r&&(u=a.createElement(i))&&(l=t.getPrototypeOf(u))&&e!==l)||u[o]&&n.call(u,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var c=u[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},l[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var n={};t.addReady(function(a,i){var o={},s=function(t){o[t]||(o[t]=e(a.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(o[t]=o[t].add(i)))};e.each(n,function(e,n){return s(e),n&&n.forEach?(n.forEach(function(t){o[e].each(t)}),r):(t.warn("Error: with "+e+"-property. methods: "+n),r)}),o=null});var i,o=e([]),s=function(t,r){n[t]?n[t].push(r):n[t]=[r],e.isDOMReady&&(i||e(a.getElementsByTagName(t))).each(r)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(a.getElementsByTagName(t))),i||o},flushTmpCache:function(){i=null},content:function(t,n){s(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,n,a){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[n]=this[n],this[n]=a})})}}}(),b=function(e,t){e.defaultValue===r&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var a=n.prop("id");return a||(t++,a="ID-"+t,n.eq(0).prop("id",a)),a}}(),implement:function(e,n){var a=v(e,"implemented")||v(e,"implemented",{});return a[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(a[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,n,a){var r,i=(e._data(t,"events")||{})[n];i&&i.length>1&&(r=i.pop(),a||(a="bind"),"bind"==a&&i.delegateCount?i.splice(i.delegateCount,0,r):i.unshift(r)),t=null},addShadowDom:function(){var r,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(r),r=setTimeout(function(){if("resize"==t.type){var r=e(n).width(),u=e(n).width();if(u==i&&r==o)return;i=u,o=r,s.height=s.getHeight(),s.width=s.getWidth()}e(a).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=a.body,r=a.documentElement;s[t]=function(){return Math.max(n["scroll"+e],r["scroll"+e],n["offset"+e],r["offset"+e],r["client"+e])}})},start:function(){!this.init&&a.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).bind("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(n,a,r){r=r||{},n.jquery&&(n=n[0]),a.jquery&&(a=a[0]);var i=e.data(n,h)||e.data(n,h,{}),o=e.data(a,h)||e.data(a,h,{}),s={};r.shadowFocusElement?r.shadowFocusElement&&(r.shadowFocusElement.jquery&&(r.shadowFocusElement=r.shadowFocusElement[0]),s=e.data(r.shadowFocusElement,h)||e.data(r.shadowFocusElement,h,s)):r.shadowFocusElement=a,e(n).on("remove",function(t){t.originalEvent||e(a).remove()}),i.hasShadow=a,s.nativeElement=o.nativeElement=n,s.shadowData=o.shadowData=i.shadowData={nativeElement:n,shadowElement:a,shadowFocusElement:r.shadowFocusElement},r.shadowChilds&&r.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),r.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=r.data),r=null,t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=a.createElement("a");return t.style.display="none",function(n,a){b(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,r=this.getAttribute(a);if(null==r)return"";if(t.setAttribute("href",r+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(i){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,a){"string"==typeof a&&(a=a.split(s)),a.forEach(function(a){t.defineNodeNamesProperty(n,a,{prop:{set:function(t){e.attr(this,a,t)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(n,a,r){return l[a]=!0,r.reflect&&t.propTypes[r.propType||"standard"](r,a),["prop","attr","removeAttr"].forEach(function(i){var o=r[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),p[i](n,a,o),"*"!=n&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(n,a,o),r[i]=o)}),r.initAttr&&y.content(n,a),r},defineNodeNameProperties:function(e,n,a,r){for(var i in n)!r&&n[i].initAttr&&y.createTmpCache(e),a&&(n[i][a]||(n[i][a]={},["value","set","get"].forEach(function(e){e in n[i]&&(n[i][a][e]=n[i][e],delete n[i][e])}))),n[i]=t.defineNodeNameProperty(e,i,n[i]);return r||y.flushTmpCache(),n},createElement:function(n,a,r){var i;return e.isFunction(a)&&(a={after:a}),y.createTmpCache(n),a.before&&y.createElement(n,a.before),r&&(i=t.defineNodeNameProperties(n,r,!1,!0)),a.after&&y.createElement(n,a.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,n,a,r){"string"==typeof t&&(t=t.split(s)),e.isFunction(a)&&(a={set:a}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof n&&(n=n.split(s)),a.initAttr&&y.createTmpCache(e),n.forEach(function(t){d[e][t]||(d[e][t]=[],l[t]=!0),a.set&&(r&&(a.set.only=r),d[e][t].push(a.set)),a.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,a,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(n,a,{attr:{set:function(e){this.setAttribute(a,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(a);return null==e?r:a}},removeAttr:{value:function(){this.removeAttribute(a),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var a;return n===r?(a=e.attributes[t]||{},n=a.specified?a.value:null,null==n?r:n):("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n),r)}},activeLang:function(){var n,a,r=[],i={},s=/:\/\/|^\.*\//,u=function(n,a,r){var i;return a&&r&&-1!==e.inArray(a,r.availabeLangs||[])?(n.loading=!0,i=r.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+a+".js",function(){n.langObj[a]?(n.loading=!1,c(n,!0)):e(function(){n.langObj[a]&&c(n,!0),n.loading=!1})}),!0):!1},l=function(e){i[e]&&i[e].forEach(function(e){e.callback(n,a,"")})},c=function(e,t){if(e.activeLang!=n&&e.activeLang!==a){var r=o[e.module].options;e.langObj[n]||a&&e.langObj[a]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[a],n),l(e.module)):t||u(e,n,r)||u(e,a,r)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),l(e.module))}},p=function(t){return"string"==typeof t&&t!==n?(n=t,a=n.split("-")[0],n==a&&(a=!1),e.each(r,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(n,a,"")):(t.activeLang||(t.activeLang=""),r.push(t),c(t))),n};return p}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,a,r,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[n](e,a,r,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},a=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(r,i){if(e.each(n,function(t,n){for(var o=e(t,r).add(i.filter(t)),s=0,u=o.length;u>s;s++)a(o[s],n)}),r===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),u=s.length;if(o&&!e(o).closest("section, article")[0]&&a(o,"banner"),!u)return;var l=s[u-1];e(l).closest("section, article")[0]||a(l,"contentinfo")}})}}(jQuery,document),webshims.register("form-core",function(e,t,n,a,r,i){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,a=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),a.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!n.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var n=["form-validation"];i.lazyCustomMessages&&(i.customMessages=!0,n.push("form-message")),i.addValidators&&n.push("form-validators"),t.reTest(n),e(a).off(".lazyloadvalidation")},u=function(t){var n=!1;return e(t).jProp("elements").each(function(){return n=e(this).is(":invalid"),n?!1:r}),n},l=/^(?:form|fieldset)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return l.test(t.nodeName||"")?!u(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return l.test(t.nodeName||"")?u(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(n){}return!1},t.triggerInlineForm=function(t,n){e(t).trigger(n)};var c=function(e,n,a){s(),t.ready("form-validation",function(){e[n].apply(e,a)})};t.wsPopover={id:0,_create:function(){this.options=e.extend({},t.cfg.wspopover,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){c(this,"show",arguments)}},t.validityAlert={showFor:function(){c(this,"showFor",arguments)}},function(){var t,n,r=[];e(a).on("invalid",function(i){if(!i.wrongWebkitInvalid){var o=e(i.target);if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=i.isDefaultPrevented;var s=e.Event("firstinvalidsystem");e(a).triggerHandler(s,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&i.preventDefault(),r.push(i.target),i.extraData="fix",clearTimeout(n),n=setTimeout(function(){var n={type:"lastinvalid",cancelable:!1,invalidlist:e(r)};t=!1,r=[],e(i.target).trigger(n,n)},9),o=null}})}(),t.getContentValidationMessage=function(t,n,a){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return a&&i[a]&&(i=i[a]),"object"==typeof i&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||e.each(n,function(e,t){return t&&"valid"!=e&&i[e]?(i=i[e],!1):r})),"object"==typeof i&&(i=i.defaultMessage),i||""},e.fn.getErrorMessage=function(n){var a="",r=this[0];return r&&(a=t.getContentValidationMessage(r,!1,n)||e.prop(r,"customValidationMessage")||e.prop(r,"validationMessage")),a},t.ready("forms",function(){e(a).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&e(t.target).is(":invalid")&&s()})}),t.ready("WINDOWLOAD",s),i.overrideMessages&&(i.customMessages=!0,t.reTest("form-message"),t.error("overrideMessages is deprecated. use customMessages instead.")),i.replaceValidationUI&&t.ready("DOM forms",function(){e(a).on("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),t.validityAlert.showFor(e.target))})})}),webshims.register("form-message",function(e,t,n,a,r,i){"use strict";i.overrideMessages&&(i.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead."));var o=t.validityMessages,s=i.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]=o["en-US"]||o.en,o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zulässig.",email:"{%value} ist keine gültige E-Mail-Adresse.",url:"{%value} ist kein(e) gültige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zulässig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen können."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen können."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zulässig. Hier sind nur bestimmte Werte zulässig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat für dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das Kästchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte wählen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu früh. {%min} ist die früheste Zeit, die Sie benutzen können."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu spät. {%max} ist die späteste Zeit, die Sie benutzen können."});var u=o[""],l=function(t,n){return t&&"string"!=typeof t&&(t=t[e.prop(n,"type")]||t[(n.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(n,a){var r,i=l(u[a],n),s=e.prop(n,"type");return i||(i=l(o[""][a],n)||e.prop(n,"validationMessage"),t.info("could not find errormessage for: "+a+" / "+s+". in language: "+e.webshims.activeLang())),i&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==i.indexOf("{%"+o)){var u=("label"==o?e.trim(e('label[for="'+n.id+'"]',n.form).text()).replace(/\*$|:$/,""):e.prop(n,o))||"";"patternMismatch"!=a||"title"!=o||u||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(r||(r=e(n).getShadowElement().data("wsWidget"+s)),r&&r.formatValue&&(u=r.formatValue(u,!1))),i=i.replace("{%"+o+"}",u),"value"==o&&(i=i.replace("{%valueLen}",u.length))}}),i||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){u=e}}),s.forEach(function(n){t.defineNodeNamesProperty(["fieldset","output","button"],n,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(a){var i=t.defineNodeNameProperty(a,n,{prop:{get:function(){var n=this,a="";if(!e.prop(n,"willValidate"))return a;var o=e.prop(n,"validity")||{valid:1};return o.valid?a:(a=t.getContentValidationMessage(n,o))?a:o.customError&&n.nodeName&&(a=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(n):t.data(n,"customvalidationMessage"))?a:(e.each(o,function(e,i){return"valid"!=e&&i?(a=t.createValidationMessage(n,e),a?!1:r):r}),a||"")},writeable:!1}})})})}),function(e,t,n){"use strict";var a,r,i=t.audio&&t.video,o=!1,s=n.bugs,u="mediaelement-jaris",l=function(){n.ready(u,function(){n.mediaelement.createSWF||(n.mediaelement.loadSwf=!0,n.reTest([u],i))})},c=n.cfg.mediaelement;if(!c)return n.error("mediaelement wasn't implemented but loaded"),void 0;if(i){var p=document.createElement("video");t.videoBuffered="buffered"in p,o="loop"in p,n.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(n.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),n.loader.loadList(["mediaelement-native-fix"]))}if(i&&!c.preferFlash){var d={1:1,2:1},f=function(t){var a,i;!c.preferFlash&&(e(t.target).is("audio, video")||(i=t.target.parentNode)&&e("source:last",i)[0]==t.target)&&(a=e(t.target).closest("audio, video"))&&!d[a.prop("error")]&&e(function(){r&&!c.preferFlash?(l(),n.ready("WINDOWLOAD "+u,function(){setTimeout(function(){c.preferFlash||!n.mediaelement.createSWF||a.is(".nonnative-api-active")||(c.preferFlash=!0,document.removeEventListener("error",f,!0),e("audio, video").each(function(){n.mediaelement.selectSource(this)}),n.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",f,!0)})};document.addEventListener("error",f,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!d[t]?(f({target:this}),!1):void 0})}t.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof e("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}}(),a=t.track&&!s.track,n.register("mediaelement-core",function(e,t,n,s,p){r=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(r?"swf":"no-swf");var d=t.mediaelement;d.parseRtmp=function(e){var n,a,r,i=e.src.split("://"),o=i[1].split("/");for(e.server=i[0]+"://"+o[0]+"/",e.streamId=[],n=1,a=o.length;a>n;n++)r||-1===o[n].indexOf(":")||(o[n]=o[n].split(":")[1],r=!0),r?e.streamId.push(o[n]):e.server+=o[n]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,n){t=e(t);var a,r={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return r.src?(a=t.attr("data-server"),null!=a&&(r.server=a),a=t.attr("type"),a?(r.type=a,r.container=e.trim(a.split(";")[0])):(n||(n=t[0].nodeName.toLowerCase(),"source"==n&&(n=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),r.server?(r.type=n+"/rtmp",r.container=n+"/rtmp"):(a=d.getTypeForSrc(r.src,n,r),a&&(r.type=a,r.container=a))),a=t.attr("media"),a&&(r.media=a),("audio/rtmp"==r.type||"video/rtmp"==r.type)&&(r.server?r.streamId=r.src:d.parseRtmp(r)),r):r},m=!r&&"postMessage"in n&&i,h=function(){h.loaded||(h.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var n;return function(){!n&&m&&(n=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){r?l():v()};t.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),d.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},d.mimeTypes.source=e.extend({},d.mimeTypes.audio,d.mimeTypes.video),d.getTypeForSrc=function(t,n){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return n+"/rtmp";
t=t.split("?")[0].split("."),t=t[t.length-1];var a;return e.each(d.mimeTypes[n],function(e,n){return-1!==n.indexOf(t)?(a=e,!1):p}),a},d.srces=function(t,n){if(t=e(t),!n){n=[];var a=t[0].nodeName.toLowerCase(),r=f(t,a);return r.src?n.push(r):e("source",t).each(function(){r=f(this,a),r.src&&n.push(r)}),n}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(n)||(n=[n]),n.forEach(function(e){var n=s.createElement("source");"string"==typeof e&&(e={src:e}),n.setAttribute("src",e.src),e.type&&n.setAttribute("type",e.type),e.media&&n.setAttribute("media",e.media),t.append(n)})},e.fn.loadMediaSrc=function(t,n){return this.each(function(){n!==p&&(e(this).removeAttr("poster"),n&&e.attr(this,"poster",n)),d.srces(this,t),e(this).mediaLoad()})},d.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],d.canThirdPlaySrces=function(t,n){var a="";return(r||m)&&(t=e(t),n=n||d.srces(t),e.each(n,function(e,t){return t.container&&t.src&&(r&&-1!=d.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(a=t,!1):p})),a};var y={};d.canNativePlaySrces=function(t,n){var a="";if(i){t=e(t);var r=(t[0].nodeName||"").toLowerCase(),o=(y[r]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return a;n=n||d.srces(t),e.each(n,function(e,n){return n.type&&o.call(t[0],n.type)?(a=n,!1):p})}return a};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};d.setError=function(n,a){if(e("source",n).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(n).mediaLoad()}catch(r){}}else a||(a="can't play sources"),e(n).pause().data("mediaerror",a),t.error("mediaelementError: "+a),setTimeout(function(){e(n).data("mediaerror")&&e(n).trigger("mediaerror")},1)};var T=function(){var e;return function(n,a,i){t.ready(r?u:"mediaelement-yt",function(){d.createSWF?d.createSWF(n,a,i):e||(e=!0,g(),T(n,a,i))}),e||!m||d.createSWF||v()}}(),E=function(e,t,n,a,r){var i;n||n!==!1&&t&&"third"==t.isActive?(i=d.canThirdPlaySrces(e,a),i?T(e,i,t):r?d.setError(e,!1):E(e,t,!1,a,!0)):(i=d.canNativePlaySrces(e,a),i?t&&"third"==t.isActive&&d.setActive(e,"html5",t):r?(d.setError(e,!1),t&&"third"==t.isActive&&d.setActive(e,"html5",t)):E(e,t,!0,a,!0))},N=/^(?:embed|object|datalist)$/i,x=function(n,a){var r=t.data(n,"mediaelementBase")||t.data(n,"mediaelementBase",{}),i=d.srces(n),o=n.parentNode;clearTimeout(r.loadTimer),e.data(n,"mediaerror",!1),i.length&&o&&1==o.nodeType&&!N.test(o.nodeName||"")&&(a=a||t.data(n,"mediaelement"),E(n,a,c.preferFlash||p,i))};d.selectSource=x,e(s).on("ended",function(n){var a=t.data(n.target,"mediaelement");(!o||a&&"html5"!=a.isActive||e.prop(n.target,"loop"))&&setTimeout(function(){!e.prop(n.target,"paused")&&e.prop(n.target,"loop")&&e(n.target).prop("currentTime",0).play()},1)}),t.ready("dom-support",function(){o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(n){var a=t.defineNodeNameProperty(n,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");x(this,e),!i||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}});y[n]=t.defineNodeNameProperty(n,"canPlayType",{prop:{value:function(t){var a="";return i&&y[n].prop._supvalue&&(a=y[n].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&r&&(t=e.trim((t||"").split(";")[0]),-1!=d.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(n.loadTimer),n.loadTimer=setTimeout(function(){x(e),e=null},9)}})});var A=function(){var r=function(){if(t.implement(this,"mediaelement")&&(x(this),i)){var a,r,o=this,s=function(){var t=e.prop(o,"buffered");if(t){for(var n="",a=0,r=t.length;r>a;a++)n+=t.end(a);return n}},u=function(){var n=s();n!=r&&(r=n,t.info("needed to trigger progress manually"),e(o).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(r=s()),clearTimeout(a),a=setTimeout(u,999)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(r=!1),clearTimeout(a)}}),"ActiveXObject"in n&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}},o=!1;t.ready("dom-support",function(){o=!0,t.addReady(function(t,n){var a=e("video, audio",t).add(n.filter("video, audio")).each(r);!h.loaded&&e("track",a).length&&h(),a=null})}),i&&!o&&t.addReady(function(n,r){o||e("video, audio",n).add(r.filter("video, audio")).each(function(){return d.canNativePlaySrces(this)?(a&&!t.modules.track.options.override||h.loaded||!e("track",this).length||h(),p):(g(),o=!0,!1)})})};a&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),i?(t.isReady("mediaelement-core",!0),A(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(u,A),t.ready("track",h)})}(jQuery,Modernizr,webshims);