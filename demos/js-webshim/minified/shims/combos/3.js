webshims.register("dom-extend",function(e,t,r,a,n){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var i=function(){if(!r.jQuery||r.$&&r.jQuery!=r.$||r.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly.."),r.$&&(r.$=t.$),r.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),t.ready("DOM",i),e(i),t.ready("WINDOWLOAD",i)}var o=t.modules,s=/\s*,\s*/,u={},l={},c={},d={},p={},f=e.fn.val,h=function(t,r,a,n,i){return i?f.call(e(t)):f.call(e(t),a)};e.widget||function(){var t=e.cleanData;e.cleanData=function(r){if(!e.widget)for(var a,n=0;null!=(a=r[n]);n++)try{e(a).triggerHandler("remove")}catch(i){}t(r)}}(),e.fn.val=function(t){var r=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return r&&1===r.nodeType?e.prop(r,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var a=e.isFunction(t);return this.each(function(i){if(r=this,1===r.nodeType)if(a){var o=t.call(r,i,e.prop(r,"value",n,"val",!0));null==o&&(o=""),e.prop(r,"value",o,"val")}else e.prop(r,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,r,n,i){i||(i=a),e(i)[n?"onTrigger":"on"](t,r),this.on("remove",function(a){a.originalEvent||e(i).off(t,r)})};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,r,a){if(t=t.jquery?t[0]:t,!t)return a||{};var i=e.data(t,m);return a!==n&&(i||(i=e.data(t,m,{})),r&&(i[r]=a)),r?i&&i[r]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var r=[];return this.each(function(){var a=v(this,"shadowData"),n=a&&a[t.prop]||this;-1==e.inArray(n,r)&&r.push(n)}),this.pushStack(r)}}),e.Tween.propHooks._default&&e.css&&function(){var r=!1;try{r="10px"==e.css(e('<b style="width: 10px" />')[0],"width","")}catch(a){t.error(a)}var n=r?function(t,r){return e.css(t,r,!1,"")}:function(t,r){return e.css(t,r,"")};e.extend(e.Tween.propHooks._default,{get:function(t){var r;return null==t.elem[t.prop]&&!l[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(r=n(t.elem,t.prop),r&&"auto"!==r?r:0):l[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):l[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}})}(),["removeAttr","prop","attr"].forEach(function(r){u[r]=e[r],e[r]=function(t,a,i,o,s){var d="val"==o,f=d?h:u[r];if(!t||!l[a]||1!==t.nodeType||!d&&o&&"attr"==r&&e.attrFn[a])return f(t,a,i,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=r||i!==!1&&null!==i?r:"removeAttr";if(b||(b=c["*"]),b&&(b=b[a]),b&&(m=b[w]),m){if("value"==a&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(i===n)return m.get?m.get.call(t):m.value;m.set&&("attr"==r&&i===!0&&(i=a),g=m.set.call(t,i)),"value"==a&&(m.isVal=v)}else g=f(t,a,i,o,s);if((i!==n||"removeAttr"===w)&&p[y]&&p[y][a]){var T;T="removeAttr"==w?!1:"prop"==w?!!i:!0,p[y][a].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==r)||"attr"==e.only&&"prop"!=r)&&e.call(t,i,T,d?"val":w,r)})}return g},d[r]=function(e,a,i){c[e]||(c[e]={}),c[e][a]||(c[e][a]={});var o=c[e][a][r],s=function(e,t,n){return t&&t[e]?t[e]:n&&n[e]?n[e]:"prop"==r&&"value"==a?function(e){var t=this;return i.isVal?h(t,a,e,!1,0===arguments.length):u[r](t,a,e)}:"prop"==r&&"value"==e&&i.value.apply?function(){var e=u[r](this,a);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return u[r](this,a,e)}};c[e][a][r]=i,i.value===n&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==a?function(){throw a+" is readonly on "+e}:function(){t.info(a+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(a.createElement("foobar")),r=Object.prototype.hasOwnProperty,n=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var u,l;if(!(n&&(u=a.createElement(i))&&(l=t.getPrototypeOf(u))&&e!==l)||u[o]&&r.call(u,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var c=u[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},l[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var r={};t.addReady(function(a,i){var o={},s=function(t){o[t]||(o[t]=e(a.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(o[t]=o[t].add(i)))};e.each(r,function(e,r){return s(e),r&&r.forEach?(r.forEach(function(t){o[e].each(t)}),n):(t.warn("Error: with "+e+"-property. methods: "+r),n)}),o=null});var i,o=e([]),s=function(t,n){r[t]?r[t].push(n):r[t]=[n],e.isDOMReady&&(i||e(a.getElementsByTagName(t))).each(n)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(a.getElementsByTagName(t))),i||o},flushTmpCache:function(){i=null},content:function(t,r){s(t,function(){var t=e.attr(this,r);null!=t&&e.attr(this,r,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,r,a){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[r]=this[r],this[r]=a})})}}}(),b=function(e,t){e.defaultValue===n&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(r){r=e(r);var a=r.prop("id");return a||(t++,a="ID-"+t,r.eq(0).prop("id",a)),a}}(),implement:function(e,r){var a=v(e,"implemented")||v(e,"implemented",{});return a[r]?(t.warn(r+" already implemented for element #"+e.id),!1):(a[r]=!0,!0)},extendUNDEFProp:function(t,r){e.each(r,function(e,r){e in t||(t[e]=r)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,r,a){var n,i=(e._data(t,"events")||{})[r];i&&i.length>1&&(n=i.pop(),a||(a="bind"),"bind"==a&&i.delegateCount?i.splice(i.delegateCount,0,n):i.unshift(n)),t=null},addShadowDom:function(){var n,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(n),n=setTimeout(function(){if("resize"==t.type){var n=e(r).width(),u=e(r).width();if(u==i&&n==o)return;i=u,o=n,s.height=s.getHeight(),s.width=s.getWidth()}e(a).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var r=a.body,n=a.documentElement;s[t]=function(){return Math.max(r["scroll"+e],n["scroll"+e],r["offset"+e],n["offset"+e],n["client"+e])}})},start:function(){!this.init&&a.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).bind("resize",this.handler),function(){var t,r=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),r.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(r,a,n){n=n||{},r.jquery&&(r=r[0]),a.jquery&&(a=a[0]);var i=e.data(r,m)||e.data(r,m,{}),o=e.data(a,m)||e.data(a,m,{}),s={};n.shadowFocusElement?n.shadowFocusElement&&(n.shadowFocusElement.jquery&&(n.shadowFocusElement=n.shadowFocusElement[0]),s=e.data(n.shadowFocusElement,m)||e.data(n.shadowFocusElement,m,s)):n.shadowFocusElement=a,e(r).on("remove",function(t){t.originalEvent||e(a).remove()}),i.hasShadow=a,s.nativeElement=o.nativeElement=r,s.shadowData=o.shadowData=i.shadowData={nativeElement:r,shadowElement:a,shadowFocusElement:n.shadowFocusElement},n.shadowChilds&&n.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),n.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=n.data),n=null,t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=a.createElement("a");return t.style.display="none",function(r,a){b(r),r.prop||(r.prop={set:function(e){r.attr.set.call(this,e)},get:function(){var r,n=this.getAttribute(a);if(null==n)return"";if(t.setAttribute("href",n+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),r=t.getAttribute("href",4)}catch(i){r=t.getAttribute("href",4)}e(t).detach()}return r||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(r,a){"string"==typeof a&&(a=a.split(s)),a.forEach(function(a){t.defineNodeNamesProperty(r,a,{prop:{set:function(t){e.attr(this,a,t)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(r,a,n){return l[a]=!0,n.reflect&&t.propTypes[n.propType||"standard"](n,a),["prop","attr","removeAttr"].forEach(function(i){var o=n[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[i](r,a,o),"*"!=r&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(r,a,o),n[i]=o)}),n.initAttr&&y.content(r,a),n},defineNodeNameProperties:function(e,r,a,n){for(var i in r)!n&&r[i].initAttr&&y.createTmpCache(e),a&&(r[i][a]||(r[i][a]={},["value","set","get"].forEach(function(e){e in r[i]&&(r[i][a][e]=r[i][e],delete r[i][e])}))),r[i]=t.defineNodeNameProperty(e,i,r[i]);return n||y.flushTmpCache(),r},createElement:function(r,a,n){var i;return e.isFunction(a)&&(a={after:a}),y.createTmpCache(r),a.before&&y.createElement(r,a.before),n&&(i=t.defineNodeNameProperties(r,n,!1,!0)),a.after&&y.createElement(r,a.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,r,a,n){"string"==typeof t&&(t=t.split(s)),e.isFunction(a)&&(a={set:a}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof r&&(r=r.split(s)),a.initAttr&&y.createTmpCache(e),r.forEach(function(t){p[e][t]||(p[e][t]=[],l[t]=!0),a.set&&(n&&(a.set.only=n),p[e][t].push(a.set)),a.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(r,a,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(r,a,{attr:{set:function(e){this.setAttribute(a,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(a);return null==e?n:a}},removeAttr:{value:function(){this.removeAttribute(a),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,r){if(e.nodeName){var a;return r===n?(a=e.attributes[t]||{},r=a.specified?a.value:null,null==r?n:r):("boolean"==typeof r?r?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,r),n)}},activeLang:function(){var r,a,n=[],i={},s=/:\/\/|^\.*\//,u=function(r,a,n){var i;return a&&n&&-1!==e.inArray(a,n.availabeLangs||[])?(r.loading=!0,i=n.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+a+".js",function(){r.langObj[a]?(r.loading=!1,c(r,!0)):e(function(){r.langObj[a]&&c(r,!0),r.loading=!1})}),!0):!1},l=function(e){i[e]&&i[e].forEach(function(e){e.callback(r,a,"")})},c=function(e,t){if(e.activeLang!=r&&e.activeLang!==a){var n=o[e.module].options;e.langObj[r]||a&&e.langObj[a]?(e.activeLang=r,e.callback(e.langObj[r]||e.langObj[a],r),l(e.module)):t||u(e,r,n)||u(e,a,n)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],r),l(e.module))}},d=function(t){return"string"==typeof t&&t!==r?(r=t,a=r.split("-")[0],r==a&&(a=!1),e.each(n,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(r,a,"")):(t.activeLang||(t.activeLang=""),n.push(t),c(t))),r};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,r){t[e]=function(e,a,n,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[r](e,a,n,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var r={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},a=function(e,t){var r=e.getAttribute("role");r||e.setAttribute("role",t)};e.webshims.addReady(function(n,i){if(e.each(r,function(t,r){for(var o=e(t,n).add(i.filter(t)),s=0,u=o.length;u>s;s++)a(o[s],r)}),n===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),u=s.length;if(o&&!e(o).closest("section, article")[0]&&a(o,"banner"),!u)return;var l=s[u-1];e(l).closest("section, article")[0]||a(l,"contentinfo")}})}}(jQuery,document),webshims.register("form-core",function(e,t,r,a,n,i){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var r=t.isDefaultPrevented,a=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),a.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!r.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var r=["form-validation"];i.lazyCustomMessages&&(i.customMessages=!0,r.push("form-message")),i.addValidators&&r.push("form-validators"),t.reTest(r),e(a).off(".lazyloadvalidation")},u=function(t){var r=!1;return e(t).jProp("elements").each(function(){return r=e(this).is(":invalid"),r?!1:n}),r},l=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return l.test(t.nodeName||"")?!u(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return l.test(t.nodeName||"")?u(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(r){}return!1},t.triggerInlineForm=function(t,r){e(t).trigger(r)};var c=function(e,r,a){s(),t.ready("form-validation",function(){e[r].apply(e,a)})};t.wsPopover={id:0,_create:function(){this.options=e.extend({},t.cfg.wspopover,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){c(this,"show",arguments)}},t.validityAlert={showFor:function(){c(this,"showFor",arguments)}},function(){var t,r,n=[];e(a).on("invalid",function(i){if(!i.wrongWebkitInvalid){var o=e(i.target);if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=i.isDefaultPrevented;var s=e.Event("firstinvalidsystem");e(a).triggerHandler(s,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&i.preventDefault(),n.push(i.target),i.extraData="fix",clearTimeout(r),r=setTimeout(function(){var r={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(i.target).trigger(r,r)},9),o=null}})}(),t.getContentValidationMessage=function(t,r,a){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return a&&i[a]&&(i=i[a]),"object"==typeof i&&(r=r||e.prop(t,"validity")||{valid:1},r.valid||e.each(r,function(e,t){return t&&"valid"!=e&&i[e]?(i=i[e],!1):n})),"object"==typeof i&&(i=i.defaultMessage),i||""},e.fn.getErrorMessage=function(r){var a="",n=this[0];return n&&(a=t.getContentValidationMessage(n,!1,r)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),a},t.ready("forms",function(){e(a).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&e(t.target).is(":invalid")&&s()})}),t.ready("WINDOWLOAD",s),i.overrideMessages&&(i.customMessages=!0,t.reTest("form-message"),t.error("overrideMessages is deprecated. use customMessages instead.")),i.replaceValidationUI&&t.ready("DOM forms",function(){e(a).on("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),t.validityAlert.showFor(e.target))})})}),webshims.register("form-message",function(e,t,r,a,n,i){"use strict";i.overrideMessages&&(i.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead."));var o=t.validityMessages,s=i.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]=o["en-US"]||o.en,o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zulässig.",email:"{%value} ist keine gültige E-Mail-Adresse.",url:"{%value} ist kein(e) gültige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zulässig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen können."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen können."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zulässig. Hier sind nur bestimmte Werte zulässig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat für dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das Kästchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte wählen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu früh. {%min} ist die früheste Zeit, die Sie benutzen können."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu spät. {%max} ist die späteste Zeit, die Sie benutzen können."});var u=o[""],l=function(t,r){return t&&"string"!=typeof t&&(t=t[e.prop(r,"type")]||t[(r.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(r,a){var n,i=l(u[a],r),s=e.prop(r,"type");return i||(i=l(o[""][a],r)||e.prop(r,"validationMessage"),t.info("could not find errormessage for: "+a+" / "+s+". in language: "+e.webshims.activeLang())),i&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==i.indexOf("{%"+o)){var u=("label"==o?e.trim(e('label[for="'+r.id+'"]',r.form).text()).replace(/\*$|:$/,""):e.prop(r,o))||"";"patternMismatch"!=a||"title"!=o||u||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(n||(n=e(r).getShadowElement().data("wsWidget"+s)),n&&n.formatValue&&(u=n.formatValue(u,!1))),i=i.replace("{%"+o+"}",u),"value"==o&&(i=i.replace("{%valueLen}",u.length))}}),i||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){u=e}}),s.forEach(function(r){t.defineNodeNamesProperty(["fieldset","output","button"],r,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(a){var i=t.defineNodeNameProperty(a,r,{prop:{get:function(){var r=this,a="";if(!e.prop(r,"willValidate"))return a;var o=e.prop(r,"validity")||{valid:1};return o.valid?a:(a=t.getContentValidationMessage(r,o))?a:o.customError&&r.nodeName&&(a=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(r):t.data(r,"customvalidationMessage"))?a:(e.each(o,function(e,i){return"valid"!=e&&i?(a=t.createValidationMessage(r,e),a?!1:n):n}),a||"")},writeable:!1}})})})});