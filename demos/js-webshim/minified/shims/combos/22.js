(function(){var b=Function.prototype.call,a=Object.prototype,d=Array.prototype.slice,j,k;if(!Function.prototype.bind)Function.prototype.bind=function(g){var b=this;if("function"!=typeof b)throw new TypeError;var h=d.call(arguments,1),m=function(){if(this instanceof m){var a=function(){};a.prototype=b.prototype;var a=new a,k=b.apply(a,h.concat(d.call(arguments)));return null!==k&&Object(k)===k?k:a}return b.apply(g,h.concat(d.call(arguments)))};return m};k=b.bind(a.toString);j=b.bind(a.hasOwnProperty);
if(!Array.isArray)Array.isArray=function(g){return"[object Array]"==k(g)};if(!Array.prototype.forEach)Array.prototype.forEach=function(g,b){var h=f(this),m=0,a=h.length>>>0;if("[object Function]"!=k(g))throw new TypeError;for(;m<a;)m in h&&g.call(b,h[m],m,h),m++};if(!Array.prototype.map)Array.prototype.map=function(b,a){var h=f(this),m=h.length>>>0,c=Array(m);if("[object Function]"!=k(b))throw new TypeError;for(var e=0;e<m;e++)e in h&&(c[e]=b.call(a,h[e],e,h));return c};if(!Array.prototype.filter)Array.prototype.filter=
function(b,a){var h=f(this),m=h.length>>>0,c=[];if("[object Function]"!=k(b))throw new TypeError;for(var e=0;e<m;e++)e in h&&b.call(a,h[e],e,h)&&c.push(h[e]);return c};if(!Array.prototype.every)Array.prototype.every=function(b,a){var h=f(this),m=h.length>>>0;if("[object Function]"!=k(b))throw new TypeError;for(var e=0;e<m;e++)if(e in h&&!b.call(a,h[e],e,h))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=function(b,a){var h=f(this),e=h.length>>>0;if("[object Function]"!=k(b))throw new TypeError;
for(var c=0;c<e;c++)if(c in h&&b.call(a,h[c],c,h))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(b){var a=f(this),h=a.length>>>0;if("[object Function]"!=k(b))throw new TypeError;if(!h&&1==arguments.length)throw new TypeError;var e=0,c;if(2<=arguments.length)c=arguments[1];else{do{if(e in a){c=a[e++];break}if(++e>=h)throw new TypeError;}while(1)}for(;e<h;e++)e in a&&(c=b.call(void 0,c,a[e],e,a));return c};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(b){var e=
f(this),a=e.length>>>0;if("[object Function]"!=k(b))throw new TypeError;if(!a&&1==arguments.length)throw new TypeError;var c,a=a-1;if(2<=arguments.length)c=arguments[1];else{do{if(a in e){c=e[a--];break}if(0>--a)throw new TypeError;}while(1)}do a in this&&(c=b.call(void 0,c,e[a],a,e));while(a--);return c};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(b){var a=f(this),e=a.length>>>0;if(!e)return-1;var c=0;1<arguments.length&&(c=y(arguments[1]));for(c=0<=c?c:e-Math.abs(c);c<e;c++)if(c in
a&&a[c]===b)return c;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(b){var a=f(this),e=a.length>>>0;if(!e)return-1;var c=e-1;1<arguments.length&&(c=y(arguments[1]));for(c=0<=c?c:e-Math.abs(c);0<=c;c--)if(c in a&&b===a[c])return c;return-1};if(2!=[1,2].splice(0).length){var n=Array.prototype.splice;Array.prototype.splice=function(b,c){return!arguments.length?[]:n.apply(this,[void 0===b?0:b,void 0===c?this.length-b:c].concat(d.call(arguments,2)))}}if(!Object.keys){var c=
!0,u="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),i=u.length,r;for(r in{toString:null})c=!1;Object.keys=function(b){if("object"!=typeof b&&"function"!=typeof b||null===b)throw new TypeError("Object.keys called on a non-object");var a=[],e;for(e in b)j(b,e)&&a.push(e);if(c)for(e=0;e<i;e++){var k=u[e];j(b,k)&&a.push(k)}return a}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){var b,c,a;if(!isFinite(this))throw new RangeError;
b=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];for(c=b.length;c--;)a=b[c],10>a&&(b[c]="0"+a);return b.slice(0,3).join("-")+"T"+b.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()};b="\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
if(!String.prototype.trim||b.trim()){var b="["+b+"]",q=RegExp("^"+b+b+"*"),e=RegExp(b+b+"*$");String.prototype.trim=function(){return(""+this).replace(q,"").replace(e,"")}}if("0".split(void 0,0).length){var C=String.prototype.split;String.prototype.split=function(b,c){return void 0===b&&0===c?[]:C.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var D=String.prototype.substr;String.prototype.substr=function(b,c){return D.call(this,0>b?0>(b=this.length+b)?0:b:b,c)}}var y=function(b){b=+b;
b!==b?b=-1:0!==b&&b!==1/0&&b!==-(1/0)&&(b=(0<b||-1)*Math.floor(Math.abs(b)));return b},o="a"!="a"[0],f=function(b){if(null==b)throw new TypeError;return o&&"string"==typeof b&&b?b.split(""):Object(b)}})();
(function(b,a){var d=!(!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor);d&&!b.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var b=document.createElement("foo");Object.defineProperty(b,"bar",{get:function(){return!0}});d=!!b.bar}catch(a){d=!1}b=null}();Modernizr.objectAccessor=!(!(d||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__)||b.browser.opera&&!(11<=a.browserVersion));Modernizr.advancedObjectProperties=d;
if(!d||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty){var j=Function.prototype.call.bind(Object.prototype.hasOwnProperty);a.objectCreate=function(b,d,c,j){var i;i=function(){};i.prototype=b;i=new i;if(!j&&!("__proto__"in i)&&!Modernizr.objectAccessor)i.__proto__=b;d&&a.defineProperties(i,d);if(c)i.options=jQuery.extend(!0,{},i.options||{},c),c=i.options;i._create&&jQuery.isFunction(i._create)&&i._create(c);return i};a.defineProperties=function(b,
d){for(var c in d)j(d,c)&&a.defineProperty(b,c,d[c]);return b};a.defineProperty=function(b,a,c){if("object"!=typeof c||null===c)return b;if(j(c,"value"))return b[a]=c.value,b;b.__defineGetter__&&("function"==typeof c.get&&b.__defineGetter__(a,c.get),"function"==typeof c.set&&b.__defineSetter__(a,c.set));return b};a.getPrototypeOf=function(b){return Object.getPrototypeOf&&Object.getPrototypeOf(b)||b.__proto__||b.constructor&&b.constructor.prototype};a.getOwnPropertyDescriptor=function(b,a){if("object"!==
typeof b&&"function"!==typeof b||null===b)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var c;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return c=Object.getOwnPropertyDescriptor(b,a)}catch(d){}c={configurable:!0,enumerable:!0,writable:!0,value:void 0};var i=b.__lookupGetter__&&b.__lookupGetter__(a),r=b.__lookupSetter__&&b.__lookupSetter__(a);if(!i&&!r){if(!j(b,a))return;c.value=b[a];return c}delete c.writable;delete c.value;c.get=c.set=void 0;if(i)c.get=
i;if(r)c.set=r;return c}}})(jQuery,jQuery.webshims);
(function(b,a,d){var j=a.audio&&a.video,k=!1,n=d.cfg.mediaelement,c=d.bugs,u=function(){d.ready("mediaelement-swf",function(){if(!d.mediaelement.createSWF)d.modules["mediaelement-swf"].test=b.noop,d.reTest(["mediaelement-swf"],j)})},i;if(j){var r=document.createElement("video");a.videoBuffered="buffered"in r;k="loop"in r;d.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));a.videoBuffered||(d.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:a.videoBuffered,d:["dom-support"]}),d.reTest("mediaelement-native-fix"))}if(j&&!n.preferFlash){var q=function(a){var c=a.target.parentNode;!n.preferFlash&&(b(a.target).is("audio, video")||c&&b("source:last",c)[0]==a.target)&&d.ready("DOM mediaelement",function(){i&&u();d.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){i&&!n.preferFlash&&d.mediaelement.createSWF&&!b(a.target).closest("audio, video").is(".nonnative-api-active")?(n.preferFlash=!0,document.removeEventListener("error",
q,!0),b("audio, video").mediaLoad(),d.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+a.target.src)):i||document.removeEventListener("error",q,!0)},20)})})};document.addEventListener("error",q,!0);b("audio, video").each(function(){this.error&&q({target:this})})}c.track=!1;a.track&&function(){if(!c.track)c.track="number"!=typeof b("<track />")[0].readyState;if(!c.track)try{new TextTrackCue(2,3,"")}catch(a){try{new TextTrackCue("",2,3,"","",!1);var i=TextTrackCue;
window.TextTrackCue=function(b,a,c,e,f,g){3!=arguments.length&&d.warn("TextTrackCue has 3 arguments: startTime, endTime and text. everything else is deprecated");return 4<arguments.length?new i(b,a,c,e,f||"",g||!1):new i("",b,a,c,"",!1)}}catch(k){c.track=!0}}var j=d.cfg.track,n=function(a){b(a.target).filter("track").each(f)},f=function(){if(c.track||!j.override&&3==b.prop(this,"readyState"))j.override=!0,d.reTest("track"),document.removeEventListener("error",n,!0),this&&b.nodeName(this,"track")?
d.error("track support was overwritten. Please check your vtt including your vtt mime-type"):d.info("track support was overwritten. due to bad browser support")},g=function(){document.addEventListener("error",n,!0);c.track?f():b("track").each(f)};j.override||(d.isReady("track")?g():b(g))}();d.register("mediaelement-core",function(b,d,q,r,o){i=swfobject.hasFlashPlayerVersion("9.0.115");var f=d.mediaelement,g=function(a,c){var a=b(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;
var t=a.attr("type");if(t)d.type=t,d.container=b.trim(t.split(";")[0]);else if(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),t=f.getTypeForSrc(d.src,c))d.type=t,d.container=t;if(t=a.attr("media"))d.media=t;return d},w=!i&&"postMessage"in q&&j,h=function(){var a;return function(){!a&&w&&(a=!0,d.loader.loadScript("https://www.youtube.com/player_api"),b(function(){d.polyfill("mediaelement-yt")}))}}(),m=function(){i?u():h()};
d.addPolyfill("mediaelement-yt",{test:!w,d:["dom-support"]});f.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov",
"qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};f.mimeTypes.source=b.extend({},f.mimeTypes.audio,f.mimeTypes.video);f.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;b.each(f.mimeTypes[c],function(b,c){if(-1!==c.indexOf(a))return d=
b,!1});return d};f.srces=function(a,c){a=b(a);if(c)a.removeAttr("src").removeAttr("type").find("source").remove(),b.isArray(c)||(c=[c]),c.forEach(function(b){var c=r.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var c=[],d=a[0].nodeName.toLowerCase(),f=g(a,d);f.src?c.push(f):b("source",a).each(function(){f=g(this,d);f.src&&c.push(f)});return c}};b.fn.loadMediaSrc=
function(a,c){return this.each(function(){c!==o&&(b(this).removeAttr("poster"),c&&b.attr(this,"poster",c));f.srces(this,a);b(this).mediaLoad()})};f.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");f.canThirdPlaySrces=function(a,c){var d="";if(i||w)a=b(a),c=c||f.srces(a),b.each(c,function(b,a){if(a.container&&
a.src&&(i&&-1!=f.swfMimeTypes.indexOf(a.container)||w&&"video/youtube"==a.container))return d=a,!1});return d};var p={};f.canNativePlaySrces=function(a,c){var d="";if(j){var a=b(a),i=(a[0].nodeName||"").toLowerCase();if(!p[i])return d;c=c||f.srces(a);b.each(c,function(b,c){if(c.type&&p[i].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};f.setError=function(a,c){c||(c="can't play sources");b(a).pause().data("mediaerror",c);d.warn("mediaelementError: "+c);setTimeout(function(){b(a).data("mediaerror")&&
b(a).trigger("mediaerror")},1)};var B=function(){var b;return function(a,c,e){d.ready(i?"mediaelement-swf":"mediaelement-yt",function(){f.createSWF?f.createSWF(a,c,e):b||(b=!0,m(),B(a,c,e))});!b&&w&&!f.createSWF&&h()}}(),z=function(b,a,c,d,e){c||!1!==c&&a&&"third"==a.isActive?(c=f.canThirdPlaySrces(b,d))?B(b,c,a):e?f.setError(b,!1):z(b,a,!1,d,!0):(c=f.canNativePlaySrces(b,d))?a&&"third"==a.isActive&&f.setActive(b,"html5",a):e?(f.setError(b,!1),a&&"third"==a.isActive&&f.setActive(b,"html5",a)):z(b,
a,!0,d,!0)},F=/^(?:embed|object|datalist)$/i,A=function(a,c){var i=d.data(a,"mediaelementBase")||d.data(a,"mediaelementBase",{}),h=f.srces(a),g=a.parentNode;clearTimeout(i.loadTimer);b.data(a,"mediaerror",!1);if(h.length&&g&&!(1!=g.nodeType||F.test(g.nodeName||"")))c=c||d.data(a,"mediaelement"),z(a,c,n.preferFlash||o,h)};b(r).bind("ended",function(a){var c=d.data(a.target,"mediaelement");(!k||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,
"loop")&&b(a.target).prop("currentTime",0).play()},1)});k||d.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var c=d.defineNodeNameProperty(a,"load",{prop:{value:function(){var b=d.data(this,"mediaelement");A(this,b);j&&(!b||"html5"==b.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});p[a]=d.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(c){var d="";j&&p[a].prop._supvalue&&(d=p[a].prop._supvalue.call(this,c),"no"==
d&&(d=""));!d&&i&&(c=b.trim((c||"").split(";")[0]),-1!=f.swfMimeTypes.indexOf(c)&&(d="maybe"));return d}}})});d.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,a=d.data(b,"mediaelementBase")||d.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){A(b);b=null},9)}});q=function(){d.addReady(function(a,c){b("video, audio",a).add(c.filter("video, audio")).each(function(){b.browser.msie&&8<d.browserVersion&&b.prop(this,"paused")&&
!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay])')?b(this).prop("preload","metadata").mediaLoad():A(this);if(j){var a,c,f=this,i=function(){var a=b.prop(f,"buffered");if(a){for(var c="",d=0,i=a.length;d<i;d++)c+=a.end(d);return c}},h=function(){var a=i();a!=c&&(c=a,b(f).triggerHandler("progress"))};b(this).bind("play loadstart progress",function(b){"progress"==b.type&&(c=i());clearTimeout(a);a=setTimeout(h,999)}).bind("emptied stalled mediaerror abort suspend",
function(b){"emptied"==b.type&&(c=!1);clearTimeout(a)})}})})};a.track&&!c.track&&d.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});j?(d.isReady("mediaelement-core",!0),q(),d.ready("WINDOWLOAD mediaelement",m)):d.ready("mediaelement-swf",q);b(function(){d.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(b,a,d,j,k,n){var c=a.mediaelement,u=d.swfobject,i=Modernizr.audio&&Modernizr.video,r=u.hasFlashPlayerVersion("9.0.115"),q=0,d={paused:!0,ended:!1,currentSrc:"",duration:d.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(b){if(b)a.error("buffered index size error");else return 0},end:function(b){if(b)a.error("buffered index size error");else return 0},length:0}},e=Object.keys(d),C={currentTime:0,volume:1,
muted:!1};Object.keys(C);var D=b.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:k},d,C),y=/^jwplayer-/,o=function(b){if(b=j.getElementById(b.replace(y,"")))return b=a.data(b,"mediaelement"),"third"==b.isActive?b:null},f=function(b){return(b=a.data(b,"mediaelement"))&&"third"==b.isActive?b:null},g=function(a,l){l=b.Event(l);l.preventDefault();b.event.trigger(l,k,a)},w=n.playerPath||a.cfg.basePath+
"jwplayer/"+(n.playerName||"player.swf"),h=n.pluginPath||a.cfg.basePath+"swf/jwwebshims.swf";a.extendUNDEFProp(n.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});a.extendUNDEFProp(n.jwVars,{screencolor:"ffffffff"});a.extendUNDEFProp(n.jwAttrs,{bgcolor:"#000000"});var m=function(a,l){var d=a.duration;if(!(d&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=d}catch(e){}a.duration&&
a.duration!=a._lastDuration?(g(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&c.jwEvents.Model.META(b.extend({duration:a.duration},l),a),a._durationCalcs--):a._durationCalcs++}},p=function(b,a){3>b&&clearTimeout(a._canplaythroughTimer);if(3<=b&&3>a.readyState)a.readyState=b,g(a._elem,"canplay"),clearTimeout(a._canplaythroughTimer),a._canplaythroughTimer=setTimeout(function(){p(4,a)},4E3);if(4<=b&&4>a.readyState)a.readyState=b,g(a._elem,"canplaythrough");a.readyState=b};b.extend(b.event.customEvent,
{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0});c.jwEvents={View:{PLAY:function(b){var a=o(b.id);if(a&&!a.stopPlayPause&&(a._ppFlag=!0,a.paused==b.state)){a.paused=!b.state;if(a.ended)a.ended=!1;g(a._elem,b.state?"play":"pause")}}},Model:{BUFFER:function(a){var l=o(a.id);if(l&&"percentage"in a&&l._bufferedEnd!=a.percentage){l.networkState=100==a.percentage?1:2;(isNaN(l.duration)||5<a.percentage&&25>a.percentage||100===a.percentage)&&m(l,a);if(l.ended)l.ended=
!1;if(l.duration){2<a.percentage&&20>a.percentage?p(3,l):20<a.percentage&&p(4,l);if(l._bufferedEnd&&l._bufferedEnd>a.percentage)l._bufferedStart=l.currentTime||0;l._bufferedEnd=a.percentage;l.buffered.length=1;if(100==a.percentage)l.networkState=1,p(4,l);b.event.trigger("progress",k,l._elem,!0)}}},META:function(b,a){if(a=a&&a.networkState?a:o(b.id))if("duration"in b){if(!a._metadata||!((!b.height||a.videoHeight==b.height)&&b.duration===a.duration)){a._metadata=!0;var c=a.duration;if(b.duration)a.duration=
b.duration;a._lastDuration=a.duration;if(b.height||b.width)a.videoHeight=b.height||0,a.videoWidth=b.width||0;if(!a.networkState)a.networkState=2;1>a.readyState&&p(1,a);a.duration&&c!==a.duration&&g(a._elem,"durationchange");g(a._elem,"loadedmetadata")}}else a._callMeta=!0},TIME:function(b){var a=o(b.id);if(a&&a.currentTime!==b.position){a.currentTime=b.position;a.duration&&a.duration<a.currentTime&&m(a,b);2>a.readyState&&p(2,a);if(a.ended)a.ended=!1;g(a._elem,"timeupdate")}},STATE:function(b){var a=
o(b.id);if(a)switch(b.newstate){case "BUFFERING":if(a.ended)a.ended=!1;p(1,a);g(a._elem,"waiting");break;case "PLAYING":a.paused=!1;a._ppFlag=!0;a.duration||m(a,b);3>a.readyState&&p(3,a);if(a.ended)a.ended=!1;g(a._elem,"playing");break;case "PAUSED":if(!a.paused&&!a.stopPlayPause)a.paused=!0,a._ppFlag=!0,g(a._elem,"pause");break;case "COMPLETED":4>a.readyState&&p(4,a),a.ended=!0,g(a._elem,"ended")}}},Controller:{ERROR:function(a){var b=o(a.id);b&&c.setError(b._elem,a.message)},SEEK:function(a){var b=
o(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(c){}if(b.currentTime!=a.position)b.currentTime=a.position,g(b._elem,"timeupdate")}},VOLUME:function(a){var b=o(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,g(b._elem,"volumechange")},MUTE:function(a){if(!a.state){var b=o(a.id);if(b&&b.muted!=a.state)b.muted=a.state,g(b._elem,"volumechange")}}}};var B=function(a){var l=!0;b.each(c.jwEvents,function(c,d){b.each(d,function(b){try{a.jwapi["add"+c+"Listener"](b,
"jQuery.webshims.mediaelement.jwEvents."+c+"."+b)}catch(d){return l=!1}})});return l},z=function(a){var b=a.actionQueue.length,c=0,d;if(b&&"third"==a.isActive)for(;a.actionQueue.length&&b>c;)c++,d=a.actionQueue.shift(),a.jwapi[d.fn].apply(a.jwapi,d.args);if(a.actionQueue.length)a.actionQueue=[]},F=function(a){a&&(a._ppFlag===k&&b.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if("third"==a.isActive&&(a._ppFlag===k||!a.paused))try{b(a._elem).play()}catch(c){}},1)},A=function(a){if(a&&
"video"==a._elemNodeName){var c,d,e,f,v,s,i,h,g=function(g,j){if(j&&g&&!(1>j||1>g||"third"!=a.isActive))if(c&&(c.remove(),c=!1),f=g,v=j,clearTimeout(i),d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e){s=s||b(a._elem).getShadowElement();var k;d&&!e?(k=s.height(),g*=k/j,j=k):!d&&e&&(k=s.width(),j*=k/g,g=k);h=!0;setTimeout(function(){h=!1},9);s.css({width:g,height:j})}},j=function(){if(!("third"!=a.isActive||b.prop(a._elem,"readyState")&&b.prop(this,"videoWidth"))){var f=b.prop(a._elem,
"poster");if(f&&(d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e))c&&(c.remove(),c=!1),c=b('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),c.bind("load error alreadycomplete",function(){clearTimeout(i);var a=this,d=a.naturalWidth||a.width||a.offsetWidth,G=a.naturalHeight||a.height||a.offsetHeight;G&&d?(g(d,G),a=null):setTimeout(function(){d=a.naturalWidth||a.width||a.offsetWidth;G=a.naturalHeight||a.height||a.offsetHeight;
g(d,G);c&&(c.remove(),c=!1);a=null},9);b(this).unbind()}).prop("src",f).appendTo("body").each(function(){this.complete||this.error?b(this).triggerHandler("alreadycomplete"):(clearTimeout(i),i=setTimeout(function(){b(a._elem).triggerHandler("error")},9999))})}};b(a._elem).bind("loadedmetadata",function(){g(b.prop(this,"videoWidth"),b.prop(this,"videoHeight"))}).bind("emptied",j).bind("swfstageresize updatemediaelementdimensions",function(){h||g(f,v)}).bind("emptied",function(){f=void 0;v=void 0}).triggerHandler("swfstageresize");
j();b.prop(a._elem,"readyState")&&g(b.prop(a._elem,"videoWidth"),b.prop(a._elem,"videoHeight"))}};c.playerResize=function(a){a&&(a=j.getElementById(a.replace(y,"")))&&b(a).triggerHandler("swfstageresize")};b(j).bind("emptied",function(a){a=f(a.target);F(a)});var E;c.jwPlayerReady=function(c){var d=o(c.id),e=0,f=function(){if(!(9<e))if(e++,B(d)){if(d.wasSwfReady)b(d._elem).mediaLoad();else{var i=parseFloat(c.version,10);(5.6>i||6<=i)&&a.warn("mediaelement-swf is only testet with jwplayer 5.6+")}d.wasSwfReady=
!0;d.tryedReframeing=0;z(d);F(d)}else clearTimeout(d.reframeTimer),d.reframeTimer=setTimeout(f,9*e),2<e&&9>d.tryedReframeing&&(d.tryedReframeing++,d.shadowElem.css({overflow:"visible"}),setTimeout(function(){d.shadowElem.css({overflow:"hidden"})},16))};if(d&&d.jwapi){if(!d.tryedReframeing)d.tryedReframeing=0;clearTimeout(E);d.jwData=c;d.shadowElem.removeClass("flashblocker-assumed");b.prop(d._elem,"volume",d.volume);b.prop(d._elem,"muted",d.muted);f()}};var H=b.noop;if(i){var K={play:1,playing:1},
t="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),J=t.map(function(a){return a+".webshimspolyfill"}).join(" "),L=function(c){var d=a.data(c.target,"mediaelement");d&&(c.originalEvent&&c.originalEvent.type===c.type)==("third"==d.activating)&&(c.stopImmediatePropagation(),K[c.type]&&d.isActive!=d.activating&&b(c.target).pause())},H=function(c){b(c).unbind(J).bind(J,L);t.forEach(function(b){a.moveToFirstEvent(c,b)})};H(j)}c.setActive=function(c,d,
e){e||(e=a.data(c,"mediaelement"));if(e&&e.isActive!=d){"html5"!=d&&"third"!=d&&a.warn("wrong type for mediaelement activating: "+d);var f=a.data(c,"shadowData");e.activating=d;b(c).pause();e.isActive=d;"third"==d?(f.shadowElement=f.shadowFocusElement=e.shadowElem[0],b(c).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(b(c).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1);b(c).trigger("mediaelementapichange")}};
var O=function(){var a="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),b=a.length;return function(c){if(c){var d=b,e=c.networkState;for(p(0,c);--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;e&&g(c._elem,"emptied")}}}(),I=function(a,c){var d=a._elem,e=a.shadowElem;b(d)[c?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!c?e.css({width:0,height:0}):e.css({width:d.style.width||
b(d).width(),height:d.style.height||b(d).height()})};c.createSWF=function(d,e,f){if(r){1>q?q=1:q++;var g=b.extend({},n.jwVars,{image:b.prop(d,"poster")||"",file:e.srcProp}),j=b(d).data("jwvars")||{};f||(f=a.data(d,"mediaelement"));if(f&&f.swfCreated)c.setActive(d,"third",f),O(f),f.currentSrc=e.srcProp,b.extend(g,j),n.changeJW(g,d,e,f,"load"),x(d,"sendEvent",["LOAD",g]);else{var v=b.prop(d,"controls"),s="jwplayer-"+a.getID(d),k=b.extend({},n.jwParams,b(d).data("jwparams")),m=d.nodeName.toLowerCase(),
p=b.extend({},n.jwAttrs,{name:s,id:s},b(d).data("jwattrs")),o=b('<div class="polyfill-'+m+' polyfill-mediaelement" id="wrapper-'+s+'"><div id="'+s+'"></div>').css({position:"relative",overflow:"hidden"}),f=a.data(d,"mediaelement",a.objectCreate(D,{actionQueue:{value:[]},shadowElem:{value:o},_elemNodeName:{value:m},_elem:{value:d},currentSrc:{value:e.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(b){if(b>=f.buffered.length)a.error("buffered index size error");else return 0},end:function(b){if(b>=
f.buffered.length)a.error("buffered index size error");else return(f.duration-f._bufferedStart)*f._bufferedEnd/100+f._bufferedStart},length:0}}}));I(f,v);o.insertBefore(d);i&&b.extend(f,{volume:b.prop(d,"volume"),muted:b.prop(d,"muted")});b.extend(g,{id:s,controlbar:v?n.jwVars.controlbar||("video"==m?"over":"bottom"):"video"==m?"none":"bottom",icons:""+(v&&"video"==m)},j,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});g.plugins=g.plugins?g.plugins+(","+h):h;a.addShadowDom(d,o);H(d);c.setActive(d,
"third",f);n.changeJW(g,d,e,f,"embed");b(d).bind("updatemediaelementdimensions updateshadowdom",function(){I(f,b.prop(d,"controls"))});A(f);u.embedSWF(w,s,"100%","100%","9.0.0",!1,g,k,p,function(c){if(c.success)f.jwapi=c.ref,v||b(c.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!c.ref.parentNode&&o[0].parentNode||"none"==c.ref.style.display)o.addClass("flashblocker-assumed"),b(d).trigger("flashblocker"),a.warn("flashblocker assumed");b(c.ref).css({minHeight:"2px",minWidth:"2px",
display:"block"})},9),E||(clearTimeout(E),E=setTimeout(function(){var d=b(c.ref);1<d[0].offsetWidth&&1<d[0].offsetHeight&&0===location.protocol.indexOf("file:")?a.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>d[0].offsetWidth||2>d[0].offsetHeight)&&a.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){b(d).mediaLoad()},
1)};var x=function(a,b,c,d){return(d=d||f(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(c){var d={},h,j=function(a){"audio"==c&&("videoHeight"==a||"videoWidth"==a)||(d[a]={get:function(){var b=f(this);return b?b[a]:i&&h[a].prop._supget?h[a].prop._supget.apply(this):D[a]},writeable:!1})},k=function(a,b){j(a);delete d[a].writeable;
d[a].set=b};k("volume",function(b){var c=f(this);if(c){if(b*=100,!isNaN(b)){var d=c.muted;(0>b||100<b)&&a.error("volume greater or less than allowed "+b/100);x(this,"sendEvent",["VOLUME",b],c);if(d)try{c.jwapi.sendEvent("mute","true")}catch(e){}b/=100;if(!(c.volume==b||"third"!=c.isActive))c.volume=b,g(c._elem,"volumechange")}}else if(h.volume.prop._supset)return h.volume.prop._supset.apply(this,arguments)});k("muted",function(a){var b=f(this);if(b){if(a=!!a,x(this,"sendEvent",["mute",""+a],b),!(b.muted==
a||"third"!=b.isActive))b.muted=a,g(b._elem,"volumechange")}else if(h.muted.prop._supset)return h.muted.prop._supset.apply(this,arguments)});k("currentTime",function(a){var b=f(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=!0;b.stopPlayPause=!1},50);x(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,g(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(h.currentTime.prop._supset)return h.currentTime.prop._supset.apply(this,
arguments)});["play","pause"].forEach(function(a){d[a]={value:function(){var b=f(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),x(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("third"==b.isActive&&(b._ppFlag=!0,b.paused!=("play"!=a)))b.paused="play"!=a,g(b._elem,a)},1);else if(h[a].prop._supvalue)return h[a].prop._supvalue.apply(this,arguments)}}});e.forEach(j);a.onNodeNamesPropertyModify(c,"controls",function(d,e){var g=f(this);b(this)[e?"addClass":"removeClass"]("webshims-controls");
if(g){try{x(this,e?"showControls":"hideControls",[c],g)}catch(h){a.warn("you need to generate a crossdomain.xml")}"audio"==c&&I(g,e);b(g.jwapi).attr("tabindex",e?"0":"-1")}});h=a.defineNodeNameProperties(c,d,"prop")});if(r){var M=b.cleanData,N=b.browser.msie&&9>a.browserVersion,P={object:1,OBJECT:1};b.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&q)for(b=0;b<c;b++)if(P[a[b].nodeName]){if("sendEvent"in a[b]){q--;try{a[b].sendEvent("play",!1)}catch(e){}}if(N)try{for(d in a[b])"function"==typeof a[b][d]&&
(a[b][d]=null)}catch(f){}}return M.apply(this,arguments)}}i||(["poster","src"].forEach(function(b){a.defineNodeNamesProperty("src"==b?["audio","video","source"]:["video"],b,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(b){a.defineNodeNamesBooleanProperty(["audio","video"],b)}),a.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},
NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});
