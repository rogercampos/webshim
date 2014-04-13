webshims.register("jme",function(a,b,c,d,e){"use strict";var f={},g={},h=Array.prototype.slice,i=a.extend({selector:".mediaplayer"},b.cfg.mediaelement.jme);b.cfg.mediaelement.jme=i,a.jme={plugins:{},data:function(b,c,d){var f=a(b).data("jme")||a.data(b,"jme",{});return d===e?c?f[c]:f:(f[c]=d,void 0)},registerPlugin:function(b,c){this.plugins[b]=c,c.nodeName||(c.nodeName=""),c.className||(c.className=b),i[b]=a.extend(c.options||{},i[b]),i[b]&&i[b].text?c.text=i[b].text:i.i18n&&i.i18n[b]&&(c.text=i.i18n[b])},defineMethod:function(a,b){g[a]=b},defineProp:function(b,c){c||(c={}),c.set||(c.set=c.readonly?function(){throw b+" is readonly"}:a.noop),c.get||(c.get=function(c){return a.jme.data(c,b)}),f[b]=c},prop:function(b,c,d){if(!f[c])return a.prop(b,c,d);if(d===e)return f[c].get(b);var g=f[c].set(b,d);g===e&&(g=d),"noDataSet"!=g&&a.jme.data(b,c,g)}},a.fn.jmeProp=function(b,c){return a.access(this,a.jme.prop,b,c,arguments.length>1)},a.fn.jmeFn=function(b){var c,d=h.call(arguments,1);return this.each(function(){return c=(g[b]||a.prop(this,b)).apply(this,d),c!==e?!1:void 0}),c!==e?c:this};var j={emptied:1,pause:1},k={canplay:1,canplaythrough:1},l=i.selector;a.jme.initJME=function(b,c){a(l,b).add(c.filter(l)).jmePlayer()},a.jme.getDOMList=function(b){var c=[];return b||(b=[]),"string"==typeof b&&(b=b.split(" ")),a.each(b,function(a,b){b&&(b=document.getElementById(b),b&&c.push(b))}),c},a.jme.getButtonText=function(b,c){var d,e,f=function(f){e!==f&&(e=f,b.removeClass(c[f?0:1]).addClass(c[f]),d&&(b.prop("checked",!!f),(b.data("checkboxradio")||{refresh:a.noop}).refresh()))};return b.is('[type="checkbox"], [type="radio"]')?(b.prop("checked",function(){return this.defaultChecked}),d=!0):b.is("a")&&b.on("click",function(a){a.preventDefault()}),f},a.fn.jmePlayer=function(c){return this.each(function(){c&&a.jme.data(this,a.extend(!0,{},c));var d,e,f,g,h,l,m=a("audio, video",this).eq(0),n=a(this),o=a.jme.data(this),p=a.jme.data(m[0]);n.addClass(m.prop("nodeName").toLowerCase()+"player"),p.player=n,p.media=m,o.media||(f=function(){m.off("canplay",e),clearTimeout(g)},e=function(){var a=m.prop("paused")?"idle":"playing";n.attr("data-state",a)},d=function(b){var c,d,h=b.type;f(),k[h]&&"waiting"!=l||("ended"==h||a.prop(this,"ended")?h="ended":"waiting"==h?a.prop(this,"readyState")>2?h="":(g=setTimeout(function(){m.prop("readyState")>2&&e()},9),m.on("canPlay",e)):j[h]?h="idle":(c=a.prop(this,"readyState"),d=a.prop(this,"paused"),h=!d&&3>c?"waiting":!d&&c>2?"playing":"idle"),"idle"==h&&n._seekpause&&(h=!1),h&&(l=h,n.attr("data-state",h)))},h=function(){var a,b=[{size:380,name:"x-small"},{size:490,name:"small"},{size:756,name:"medium"},{size:1024,name:"large"}],c=b.length;return function(){for(var d="x-large",e=0,f=n.outerWidth();c>e;e++)if(b[e].size>=f){d=b[e].name;break}a!=d&&(a=d,n.attr("data-playersize",d))}}(),o.media=m,o.player=n,m.on("ended emptied play",function(){var a,b=function(){f(),m.jmeFn("pause"),i.noReload||!m.prop("ended")||!m.prop("paused")||m.prop("autoplay")||m.prop("loop")||m.hasClass("no-reload")||(m.jmeFn("load"),n.attr("data-state","ended"))};return function(c){clearTimeout(a),"ended"!=c.type||i.noReload||m.prop("autoplay")||m.prop("loop")||m.hasClass("no-reload")||(a=setTimeout(b))}}()).on("emptied waiting canplay canplaythrough playing ended pause mediaerror",d).on("volumechange updateJMEState",function(){var b=a.prop(this,"volume");n[!b||a.prop(this,"muted")?"addClass":"removeClass"]("state-muted"),b=.01>b?"no":.36>b?"low":.7>b?"medium":"high",n.attr("data-volume",b)}),n.on({useractive:function(){n.attr("data-useractivity","true")}}).on("userinactive",{idletime:3500},function(){n.attr("data-useractivity","false")}).triggerHandler("userinactive"),h(),b.ready("dom-support",function(){n.onWSOff("updateshadowdom",h),b.addShadowDom()}),d&&m.on("updateJMEState",d).triggerHandler("updateJMEState"))})},a.jme.defineProp("isPlaying",{get:function(b){return!a.prop(b,"ended")&&!a.prop(b,"paused")&&a.prop(b,"readyState")>1&&!a.data(b,"mediaerror")},readonly:!0}),a.jme.defineProp("player",{readonly:!0}),a.jme.defineProp("media",{readonly:!0}),a.jme.defineProp("srces",{get:function(b){var c,d=a.jme.data(b),e=d.media.prop("src");return e?[{src:e}]:c=a.map(a("source",d.media).get(),function(b){var c={src:a.prop(b,"src")},d=a.attr(b,"media");return d&&(c.media=d),d=a.attr(b,"type"),d&&(c.type=d),c})},set:function(b,c){var d=a.jme.data(b),e=function(b,c){"string"==typeof c&&(c={src:c}),a(document.createElement("source")).attr(c).appendTo(d.media)};return d.media.removeAttr("src").find("source").remove(),a.isArray(c)?a.each(c,e):e(0,c),d.media.jmeFn("load"),"noDataSet"}}),a.jme.defineMethod("togglePlay",function(){a(this).jmeFn(f.isPlaying.get(this)?"pause":"play")}),a.jme.defineMethod("addControls",function(b){var c=a.jme.data(this)||{};if(c.media){var d=a.jme.data(c.player[0],"controlElements")||a([]);b=a(b),a.each(a.jme.plugins,function(d,e){b.filter("."+e.className).add(b.find("."+e.className)).each(function(){var b=a(this),d=a.jme.data(this);d.player=c.player,d.media=c.media,d._rendered||(d._rendered=!0,e.options&&a.each(e.options,function(a,b){a in d||(d[a]=b)}),e._create(b,c.media,c.player,d),b=null)})}),a.jme.data(c.player[0],"controlElements",d.add(b)),c.player.triggerHandler("controlsadded")}}),function(){var b={add:function(b,c,d){var e,f,g=a.data(b,"jmeuseractivity")||a.data(b,"jmeuseractivity",{idletime:2500,idle:!0,trigger:{}}),h=a(b),i=function(){g.idle||(g.idle=!0,g.trigger.userinactive&&h.trigger("userinactive"))},j=function(a){!a||"mousemove"===a.type&&a.pageX===e&&a.pageY===f||("mousemove"===a.type&&(e=a.pageX,f=a.pageY),g.idleTimer&&clearTimeout(g.idleTimer),g.idleTimer=setTimeout(i,g.idletime),g.idle&&(g.idle=!1,g.trigger.useractive&&h.trigger("useractive")))};g.idletime=(c||{}).idletime||g.idletime,c&&"idle"in c&&(g.idle=c.idle),g.trigger[d]=!0,g.bound||(h.on("mouseleave.jmeuseractivity",i).on("mousemove.jmeuseractivity focusin.jmeuseractivity mouseenter.jmeuseractivity keydown.jmeuseractivity keyup.jmeuseractivity mousedown.jmeuseractivity",j),g.bound=!0),g.idle||j({type:"initunidled"})},remove:function(b,c){var d=a.data(b,"jmeuseractivity")||a.data(b,"jmeuseractivity",{idletime:2500,idle:!0,trigger:{}});d.trigger[c]=!1,d.trigger.useractive||d.trigger.userinactive||(a(b).off(".jmeuseractivity"),d.bound=!1)}};a.each(["useractive","userinactive"],function(c,d){a.event.special[d]={setup:function(a){b.add(this,a,d)},teardown:function(){b.remove(this,d)}}})}(),b.ready("mediaelement",function(){b.addReady(a.jme.initJME)}),b._polyfill(["mediaelement"])}),webshims.register("mediacontrols",function(a,b,c,d,e){"use strict";function f(a){var b,c;a.release===!0&&(a.release=a.set);var d={start:function(){c||(c=!0,a.start&&a.start())},release:function(){c&&(c=!1,a.release&&a.release())},get:function(){return c?void 0:a.get.apply(this,arguments)},set:function(){var c=this,e=arguments;d.start(),clearTimeout(b),b=setTimeout(function(){a.set.apply(c,e)},33)}};return d.fns=a,d}var g="pseudoClasses",h={play:1,playing:1},i=b.cfg.mediaelement.jme,j=i.selector,k={pause:1,ended:1},l=function(){b.loader.loadList(["range-ui"])},m=function(a){l(),b.ready("range-ui",a)},n='<button class="{%class%}" type="button" aria-label="{%text%}"></button>',o='<div  class="{%class%}"></div>',p='<div class="{%class%}"></div>',q=function(){var a,b="";return"function"==typeof c.Audio&&(a=new Audio,a.volume=.55,b=a.volume=""),b}(),r=function(){var b={},c=/\{\{(.+?)\}\}/gim;return function(d,e){return d||(d=i.barTemplate),(!b[d]||e)&&(b[d]=d.replace(c,function(b,c){var d=a.jme.plugins[c];return d&&d.structure?d.structure.replace("{%class%}",c).replace("{%text%}",d.text||""):b})),b[d]||""}}();i.barTemplate||(i.barTemplate='<div class="play-pause-container">{{play-pause}}</div><div class="playlist-container"><div class="playlist-box">{{playlist-prev}}{{playlist-next}}</div></div><div class="currenttime-container">{{currenttime-display}}</div><div class="progress-container">{{time-slider}}</div><div class="duration-container">{{duration-display}}</div><div class="mute-container">{{mute-unmute}}</div><div class="volume-container">{{volume-slider}}</div><div class="subtitle-container"><div class="subtitle-controls">{{captions}}</div></div><div class="fullscreen-container">{{fullscreen}}</div>'),i.barStructure||(i.barStructure='<div class="jme-media-overlay"></div><div class="jme-controlbar'+q+'" tabindex="-1"><div class="jme-cb-box"></div></div>'),a.jme.defineProp("controlbar",{set:function(b,c){c=!!c;var d,e=a.jme.data(b),f=a("div.jme-mediaoverlay, div.jme-controlbar",e.player),g="";return c&&!f[0]?e._controlbar?e._controlbar.appendTo(e.player):(e.media.prop("controls",!1),g=r(),e._controlbar=a(i.barStructure),f=e._controlbar.find("div.jme-cb-box").addClass("media-controls"),d=e._controlbar.filter(".jme-media-overlay").addClass("play-pause"),d=d.add(f),a(g).appendTo(f),e._controlbar.appendTo(e.player),e.player.jmeFn("addControls",d)):c||f.detach(),f=null,d=null,c}}),a.jme.registerPlugin("play-pause",{pseudoClasses:{play:"state-paused",pause:"state-playing"},structure:n,text:"play / pause",_create:function(b,c){var d=a.jme.getButtonText(b,[this[g].play,this[g].pause]);c.on("play playing ended pause updateJMEState",function(a){var b=a.type;b=h[b]?1:k[b]?0:c.jmeProp("isPlaying")?1:0,d(b)}).triggerHandler("updateJMEState"),b.on(b.is("select")?"change":"click",function(a){c.jmeFn("togglePlay"),a.stopPropagation()})}}),a.jme.registerPlugin("mute-unmute",{pseudoClasses:{mute:"state-mute",unmute:"state-unmute"},structure:n,text:"mute / unmute",_create:function(b,c){var d=a.jme.getButtonText(b,[this[g].mute,this[g].unmute]);c.on("volumechange updateJMEState",function(){d(c.prop("muted")?1:0)}).triggerHandler("updateJMEState"),b.on(b.is("select")?"change":"click",function(a){c.prop("muted",!c.prop("muted")),a.stopPropagation()})}}),a.jme.registerPlugin("volume-slider",{structure:p,_create:function(a,b){var c=function(){var c,d;d=f({get:function(){var a=b.prop("volume");a!==e&&c.value(a)},set:function(){b.prop({muted:!1,volume:c.options.value})},release:!0}),c=a.rangeUI({min:0,max:1,step:"any",input:d.set,change:d.release,baseClass:"media-range"}).data("rangeUi"),b.on("volumechange",d.get)};m(c)}}),a.jme.registerPlugin("time-slider",{structure:p,pseudoClasses:{no:"no-duration"},options:{format:["mm","ss"]},_create:function(b,c,d){var e=this,h=function(){var h,i,j,k,l,m="has-duration",n=c.prop("duration");h=f({get:function(){var a=c.prop("currentTime");if(!isNaN(a))try{j.value(a)}catch(b){}},set:function(){try{c.prop("currentTime",j.options.value).triggerHandler("timechanged",[j.options.value])}catch(a){}},start:function(){null==l&&(l=c.prop("paused"),l?d._seekpause=!1:(d._seekpause=!0,c.pause()))},release:function(){h.fns.set(),l===!1&&c.play(),"_seekpause"in d&&delete d._seekpause,l=null}}),i=function(){n=c.prop("duration"),m=n&&isFinite(n)&&!isNaN(n),m?(j.disabled(!1),j.max(n),d.removeClass(e[g].no)):(j.disabled(!0),j.max(Number.MAX_VALUE),d.addClass(e[g].no))},j=b.rangeUI({min:0,value:c.prop("currentTime")||0,step:"any",input:h.set,change:h.release,textValue:function(a){return c.jmeFn("formatTime",a)},baseClass:"media-range"}).data("rangeUi"),k=a('<span class="time-select" />').appendTo(b),b.on({mouseenter:function(a){if(m){var d=(b.offset()||{left:0}).left,e=b.innerWidth(),f=function(a){var b=(a-d)/e*100;k.html(c.jmeFn("formatTime",n*b/100)).css({left:b+"%"})};setTimeout(function(){f(a.pageX),k.addClass("show-time-select")}),b.off(".jmetimeselect").on("mousemove.jmetimeselect",function(a){f(a.pageX)})}},mouseleave:function(){setTimeout(function(){k.removeClass("show-time-select"),b.off(".jmetimeselect")})}}),c.on({timeupdate:h.get,emptied:function(){i(),j.value(0)},durationchange:i}),d.jmeFn("addControls",a('<div class="buffer-progress" />').prependTo(b)),i()};m(h)}}),a.jme.defineMethod("concerningRange",function(b,c){var d=this,e={start:0,end:0};if(b||(b="buffered"),b=a.prop(d,b),null==c&&(c=a.prop(d,"currentTime")),!(b&&"length"in b))return e;for(var f=0,g=b.length;g>f&&(e.start=b.start(f),e.end=b.end(f),!(e.start<=c&&e.end>=c));f++);return e}),a.jme.defineProp("progress",{get:function(b){var c=a.jme.data(b);if(!c.media)return 0;var d=c.media.jmeFn("concerningRange").end/c.media.prop("duration")*100;return d>99.4&&(d=100),d||0},readonly:!0}),a.jme.registerPlugin("buffer-progress",{_create:function(b,c,d,e){var f=a('<div class="buffer-progress-indicator" />').appendTo(b),g=function(){var a=c.jmeProp("progress");e.progress!==a&&(e.progress=a,f.css("width",a+"%"))};c.on({progress:g,emptied:function(){f.css("width",0),e.progress=0},playing:g}),g()}});var s={hh:6e4,mm:60,ss:1,ms:.001},t=function(b,c){var d;c||(c=["mm","ss"]),null==b&&(d=a.jme.data(this),b=a.prop(d.media,"duration")),b||(b=0);for(var e,f=[],g=0,h=c.length;h>g;g++)"ms"==c[g]&&g==h-1?e=Math.round(b/s[c[g]]/10):(e=parseInt(b/s[c[g]],10),b%=s[c[g]]),10>e&&(e="0"+e),f.push(e);return f.join(":")};a.jme.defineMethod("formatTime",t),a.jme.defineProp("format",{set:function(b,c){a.isArray(c)||(c=c.split(":"));var d=a.jme.data(b);return d.format=c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),a.jme.registerPlugin("duration-display",{structure:o,options:{format:"mm:ss"},_create:function(a,b,c,d){"string"==typeof d.format&&(d.format=d.format.split(":"));var e=function(){a.html(t(b.prop("duration"),d.format))};b.on("durationchange emptied",e),a.on("updatetimeformat",e).jmeProp("format",d.format)}}),a.jme.defineProp("countdown",{set:function(b,c){var d=a.jme.data(b);return d.countdown=!!c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),a.jme.registerPlugin("currenttime-display",{structure:o,options:{format:"mm:ss",countdown:!1},_create:function(a,b,c,d){"string"==typeof d.format&&(d.format=d.format.split(":"));var e=function(){var c=b.prop("currentTime");d.countdown&&(c=(b.prop("duration")||0)-c,.7>c&&(c=0)),a.html(t(c,d.format))};b.on("timeupdate emptied durationchange",e),a.on("updatetimeformat",e).jmeProp("format",d.format)}}),a.jme.registerPlugin("poster-display",{structure:"<div />",options:{},_create:function(a,b){var c=function(){var c=b.prop("poster");c?a.html('<span></span><img src="'+c+'" class="poster-image" />'):a.empty()};b.on("emptied",c),c()}}),a.jme.fullscreen=function(){var b,d,e=document.documentElement,f={supportsFullScreen:Modernizr.prefixed("fullscreenEnabled",document,!1)||Modernizr.prefixed("fullScreenEnabled",document,!1),isFullScreen:function(){return!1},requestFullScreen:function(c){var e;b=[],a(c).parentsUntil("body").each(function(){var c,d=a.css(this,"position"),f=this.scrollLeft,g=this.scrollTop;e={elemStyle:this.style,elem:this},"static"!==d&&(c=!0,e.pos=e.elemStyle.position,this.style.position="static"),f&&(c=!0,e.left=f),g&&(c=!0,e.top=g),c&&b.push(e)}),d=!1;try{d={elemStyle:frameElement.style,elem:frameElement,css:{}},d.css.position=d.elemStyle.position,d.elemStyle.position="fixed",a.each(["top","left","right","bottom"],function(a,b){d.css[b]=d.elemStyle[b],d.elemStyle[b]="0px"}),a.each(["height","width"],function(a,b){d.css[b]=d.elemStyle[b],d.elemStyle[b]="100%"})}catch(f){d=!1}e=null},cancelFullScreen:function(){b&&(a.each(b,function(a,b){"pos"in b&&(b.elemStyle.position=b.pos),b.left&&(b.elem.scrollLeft=b.left),b.top&&(b.elem.scrollTop=b.top),b=null}),b=[]),d&&(a.each(d.css,function(a,b){d.elemStyle[a]=b}),d=!1)},eventName:"fullscreenchange",exitName:"exitFullscreen",requestName:"requestFullscreen",elementName:"fullscreenElement",enabledName:""};return f.cancelFullWindow=f.cancelFullScreen,f.requestFullWindow=f.requestFullScreen,f.supportsFullScreen&&(f.enabledName=f.supportsFullScreen,f.exitName=Modernizr.prefixed("exitFullscreen",document,!1)||Modernizr.prefixed("cancelFullScreen",document,!1),f.elementName=Modernizr.prefixed("fullscreenElement",document,!1)||Modernizr.prefixed("fullScreenElement",document,!1),f.supportsFullScreen=!!f.supportsFullScreen,("fullscreenElement"!=f.elementName||"exitFullscreen"!=f.exitName||"fullscreenEnabled"!=f.enabledName)&&a.each(Modernizr._domPrefixes,function(a,b){var c=b+"RequestFullscreen";return c in e||(c=b+"RequestFullScreen")&&c in e?(f.eventName=b+"fullscreenchange",f.requestName=c,!1):void 0}),f.isFullScreen=function(){return document[f.elementName]},f.requestFullScreen=function(a){return a[f.requestName]()},f.cancelFullScreen=function(){return document[f.exitName]()}),c.Modernizr&&"fullscreen"in Modernizr||a("html").addClass(f.supportsFullScreen?"fullscreen":"no-fullscreen"),c.parent!=c&&!function(){try{var b=c.frameElement;f.supportsFullScreen&&("allowfullscreen"in b&&!b.allowfullscreen?b.allowfullscreen=!0:(null==b.getAttribute("webkitallowfullscreen")&&b.setAttribute("webkitallowfullscreen",""),null==b.getAttribute("allowfullscreen")&&b.setAttribute("allowfullscreen","allowfullscreen")))}catch(d){f.supportsFullScreen||a("html").addClass("no-fullwindow")}}(),f}(),a.jme.defineProp("fullscreen",{set:function(b,d){var e=a.jme.data(b);if(!(e&&e.player||a(b).hasClass("player-fullscreen")))return"noDataSet";if(d){if(e.player.hasClass("player-fullscreen"))return"noDataSet";if(e.scrollPos={top:a(c).scrollTop(),left:a(c).scrollLeft()},a(document).off(".jmefullscreen").on("keydown.jmefullscreen",function(a){return 27==a.keyCode?(e.player.jmeProp("fullscreen",!1),!1):32!==a.keyCode||"form"in a.target?void 0:(e.media.jmeFn("togglePlay"),!1)}),"fullwindow"==d)a.jme.fullscreen.requestFullWindow(e.player[0]);else try{a.jme.fullscreen.requestFullScreen(e.player[0])}catch(f){}a("html").addClass("has-media-fullscreen"),e.player.addClass("player-fullscreen"),e.media.addClass("media-fullscreen"),a("button.play-pause",e.player).trigger("focus"),a.jme.fullscreen.supportsFullScreen&&a(document).on(a.jme.fullscreen.eventName+".jmefullscreen",function(){var c=a.jme.fullscreen.isFullScreen();c&&b==c?e.media.trigger("playerdimensionchange",["fullscreen"]):e.player.jmeProp("fullscreen",!1)}),e.media.trigger("playerdimensionchange",["fullwindow"])}else{if(e.player&&!e.player.hasClass("player-fullscreen"))return"noDataSet";if(a(document).off(".jmefullscreen"),a("html").removeClass("has-media-fullscreen"),e.player&&e.media&&(e.player.removeClass("player-fullscreen"),e.media.removeClass("media-fullscreen")),a.jme.fullscreen.isFullScreen())try{a.jme.fullscreen.cancelFullScreen()}catch(f){}else a.jme.fullscreen.cancelFullWindow();e.scrollPos&&(a(c).scrollTop(e.scrollPos.top),a(c).scrollLeft(e.scrollPos.left),delete e.scrollPos),e.media&&e.media.trigger("playerdimensionchange")}return"noDataSet"},get:function(b){var c=a.jme.data(b);if(c&&c.player){var d=c.player.hasClass("player-fullscreen");return d?a.jme.fullscreen.isFullScreen()||"fullwindow":!1}}}),a.jme.defineProp("autoplayfs"),a.jme.registerPlugin("fullscreen",{pseudoClasses:{enter:"state-enterfullscreen",exit:"state-exitfullscreen"},options:{fullscreen:!0,autoplayfs:!1},structure:n,text:"enter fullscreen / exit fullscreen",_create:function(b,c,d){var e=a.jme.getButtonText(b,[this[g].enter,this[g].exit]),f=function(){e(d.hasClass("player-fullscreen")?1:0)},h=this.options,i=function(){a(d.data("jme").controlElements).filter(".jme-media-overlay").off(".dblfullscreen").on("dblclick.dblfullscreen",function(){d.jmeProp("fullscreen",!d.jmeProp("fullscreen"))})};d.on("controlsadded",i),d.on("playerdimensionchange",f),b.on(b.is("select")?"change":"click",function(){var a=d.hasClass("player-fullscreen")?!1:h.fullscreen;d.jmeProp("fullscreen",a),a&&h.autoplayfs&&c.jmeFn("play")}),i(),f()}}),a.jme.ButtonMenu=function(b,c,d){this.button=a(b).attr({"aria-haspopup":"true"}),this.clickHandler=d,this.toggle=a.proxy(this,"toggle"),this.keyIndex=a.proxy(this,"keyIndex"),this._buttonClick=a.proxy(this,"_buttonClick"),this.addMenu(c),this._closeFocusOut(),this.button.on("click",this.toggle)},a.jme.ButtonMenu.prototype={addMenu:function(b){this.menu&&this.menu.remove(),this.menu=a(b),this.buttons=a("button",this.menu),this.menu.insertAfter(this.button),this.menu.on("keydown",this.keyIndex).delegate("button","click",this._buttonClick)},_closeFocusOut:function(){var a,b=this,c=function(){clearTimeout(a),setTimeout(function(){clearTimeout(a)},9)};this.menu.parent().on("focusin",c).on("mousedown",c).on("focusout",function(){a=setTimeout(function(){b.hide()},40)})},_buttonClick:function(a){this.clickHandler(this.buttons.index(a.currentTarget),a.currentTarget),this.hide()},keyIndex:function(a){var b=40==a.keyCode?1:38==a.keyCode?-1:0;if(b){var c=this.buttons.not(":disabled"),d=c.filter(":focus");d=c[c.index(d)+b]||c.filter(b>0?":first":":last"),d.focus(),a.preventDefault()}},show:function(){if(!this.isVisible){var b=this.buttons.not(":disabled");this.isVisible=!0,this.menu.addClass("visible-menu");try{this.activeElement=document.activeElement||this.button[0]}catch(c){this.activeElement=this.button[0]}setTimeout(function(){a(b.filter('[aria-checked="true"]')[0]||b[0]).focus()},60)}},toggle:function(){this[this.isVisible?"hide":"show"]()},hide:function(){if(this.isVisible){if(this.isVisible=!1,this.menu.removeClass("visible-menu"),this.activeElement)try{this.activeElement.focus()}catch(a){}this.activeElement=!1}}};var u={subtitles:1,caption:1},v=function(b){var c=a.map(b,function(a){var b="caption"==a.kind?"caption-type":"subtitle-type",c=a.language;return c=c?' <span class="track-lang">'+c+"</span>":"",'<li class="'+b+'" role="presentation"><button role="menuitemcheckbox">'+a.label+c+"</button></li>"});return"<div><ul>"+c.join("")+"</ul></div>"};a.jme.registerPlugin("captions",{pseudoClasses:{menu:"subtitle-menu"},structure:n,text:"subtitles",_create:function(c,d,e){var f=this,h=d.find("track"),i=a(c).clone().attr({role:"checkbox"}).insertBefore(c);e.attr("data-tracks",h.length>1?"many":h.length),c.attr("aria-haspopup","true"),b.ready("track",function(){function b(b){var e;k?k.addMenu(b):(e=function(b,c){"true"==a.attr(c,"aria-checked")?m[b].mode="disabled":a.each(m,function(a,c){c.mode=a==b?"showing":"disabled"}),d.prop("textTracks"),h()},k=new a.jme.ButtonMenu(c,b,e),i.on("click",function(){return e(0,this),!1})),h()}function h(){a("button",k.menu).each(function(b){var c="showing"==m[b].mode?"true":"false";b||i.attr("aria-checked",c),a.attr(this,"aria-checked",c)})}function j(){m=[],a.each(n,function(a,b){u[b.kind]&&3!=b.readyState&&m.push(b)}),e.attr("data-tracks",m.length>1?"many":m.length),m.length?(b('<div class="'+f[g].menu+'" >'+v(m)+"</div>"),a("span.jme-text, label span.jme-text",i).text((m[0].label||" ")+(m[0].lang||"")),(!e.hasClass(f[g].hasTrack)||e.hasClass(f[g].noTrack))&&(c.prop("disabled",!1),e.triggerHandler("controlschanged"))):(!e.hasClass(f[g].noTrack)||e.hasClass(f[g].hasTrack))&&(c.prop("disabled",!0),e.triggerHandler("controlschanged"))}var k,l,m=[],n=d.prop("textTracks"),o=function(){var a,b;return function(c){clearTimeout(a),clearTimeout(b),"updatesubtitlestate"==c.type&&(b=setTimeout(function(){d.trigger("updatetracklist")},0)),a=setTimeout(j,19)}}();n?(l=function(){var a;return function(){clearTimeout(a),a=setTimeout(h,20)}}(),j(),a([n]).on("addtrack removetrack",o).on("change",l),e.on("updatesubtitlestate",o),d.on("updatetrackdisplay",l)):(n=[],j())})}}),b.ready(b.cfg.mediaelement.plugins.concat(["mediaelement"]),function(){b.addReady(function(b,c){a(j,b).add(c.filter(j)).jmeProp("controlbar",!0)})}),b.ready("WINDOWLOAD",l)}),webshims.register("playlist",function(a){"use strict";function b(a){this._data=a,this._autoplay=null,this.lists={},this.on("showcontrolschange",this._updateControlsClass)}function c(b,d,e){this.list=b||[],this.playlists=d,this.media=d._data.media,this.player=d._data.player,this.options=a.extend(!0,{},c.defaults,e),this.options.itemTmpl=this.options.itemTmpl.trim(),this.deferred=a.Deferred(),this._selectedIndex=-1,this._selectedItem=null,this.$rendered=null,this._detectListType(),this.autoplay(this.options.autoplay),this.deferred.done(function(){this._addEvents(this),"auto"!=this.options.defaultSelected||this.media.jmeProp("srces").length||(this.options.defaultSelected=0),this.list[this.options.defaultSelected]&&this.selectedIndex(this.options.defaultSelected),this._fire("addlist")})}function d(a){return a.description=a.description||a.content,a.srces=[],(a.mediaGroups||[]).forEach(function(b){(b.contents||[]).forEach(function(b){b.src=b.src||b.url,a.srces.push(b)})}),a}function e(){return{src:a.attr(this,"href"),srclang:a.attr(this,"lang"),label:a.attr(this,"data-label")}}function f(){return{src:a.attr(this,"url")||a.attr(this,"href"),type:a.attr(this,"type")}}function g(){return 1==this.nodeType}var h=a.jme,i=0,j='<button class="{%class%}" type="button" aria-label="{%text%}"></button>';a.extend(b.prototype,{on:function(){a.fn.on.apply(a(this),arguments)},off:function(){a.fn.off.apply(a(this),arguments)},_getListId:function(a){var b;return b="string"==typeof a?a:a.id},_updateControlsClass:function(){this._data.player[this.getShowcontrolsList()?"addClass":"removeClass"]("has-playlist")},add:function(a,b){return a=new c(a,this,b),a.id||(i++,a.id="list-"+i),this.lists[a.id]=a,a.options.showcontrols&&this._data.player.addClass("has-playlist"),a},remove:function(a){var b=this._getListId(a);this.lists[b]&&(this.lists[b]._remove(),delete this.lists[b]),this.getShowcontrolsList()||this._data.player.removeClass("has-playlist")},getAutoplayList:function(){var b=null;return a.each(this.lists,function(a,c){return c.options.autoplay?(b=c,!1):void 0}),b},getShowcontrolsList:function(){var b=null;return a.each(this.lists,function(a,c){return c.options.showcontrols?(b=c,!1):void 0}),b}}),c.getText=function(a){return a.attr("content")||(a.text()||"").trim()},c.getUrl=function(a){return a.attr("content")||a.attr("url")||a.attr("href")||a.attr("src")||(a.text()||"").trim()},c.defaults={loop:!1,autoplay:!1,defaultSelected:"auto",addItemEvents:!0,showcontrols:!0,ajax:{},itemTmpl:'<li class="list-item"><% if(typeof poster == "string" && poster) {%><img src="<%=poster%>" /><% }%><h3><%=title%></h3><% if(typeof description == "string" && description) {%><div class="item-description"><%=description%></div><% }%></li>',renderer:function(b,c){return a.jme.tmpl(c,b)},mapDom:function(b){return{title:c.getText(a('[itemprop="name"], h1, h2, h3, h4, h5, h6, a',b)),srces:a('[itemprop="contentUrl"], a[type^="video"], a[type^="audio"]',b).map(function(){var d,e={src:c.getUrl(a(this))};return d="a"==this.nodeName.toLowerCase()?a.prop(this,"type"):c.getText(a('[itemprop="encodingFormat"]',b)),d&&(e.type=d),d=a.attr(this,"data-media"),d&&(e.media=d),e}).get(),tracks:a('a[type="text/vtt"]').map(e).get(),poster:c.getUrl(a('[itemprop="thumbnailUrl"], a[type^="image"], img',b))||null,description:c.getText(a('[itemprop="description"], .item-description, p',b))||null}},mapUrl:function(b,g){a.ajax(a.extend(b,{success:function(b){var h;a.isArray(b)?h=b:b.responseData&&b.responseData.feed?(b=b.responseData.feed,h=(b.entries||[]).map(d)):(h=[],a("item",b).each(function(){var b=a("enclosure, media\\:content",this).filter('[type^="video"], [type^="audio"]').map(f).get();b.length&&h.push({title:a("title",this).html(),srces:b,publishedDate:a("pubDate",this).html()||null,description:a("description",this).text()||null,poster:c.getUrl(a('itunes\\:image, media\\:thumbnail, enclosure[type^="image"], media\\:content[type^="image"]',this))||null,author:a("itunes\\:author",this).html()||null,duration:a("itunes\\:duration",this).html()||null,tracks:a("media\\:subTitle",this).map(e).get()||null})})),h!=b&&(h.fullData=b),g(h)}}))}},a.extend(c.prototype,{on:function(){a.fn.on.apply(a(this),arguments)},off:function(){a.fn.off.apply(a(this),arguments)},_detectListType:function(){var a;return"string"==typeof this.list?(this._createListFromUrl(),void 0):(this.list.nodeName||this.list.length>0&&this.list[0].nodeName?this._createListFromDom():this.list.responseData&&this.list.responseData.feed&&(a=this.list.responseData.feed,this.list=(a.entries||[]).map(d),this.list.fullData=a),this.deferred.resolveWith(this),void 0)},_createListFromUrl:function(){var a=this;this.options.ajax.url=this.list,this.options.mapUrl(this.options.ajax,function(b){a.list=b,a.deferred.resolveWith(a)})},_createListFromDom:function(){var b=this;this.$rendered=a(this.list).eq(0),this.list=[],this.$rendered&&(this._addDomList(),this.list=this.$rendered.children().map(function(){return b._createItemFromDom(this)}).get())},_createItemFromDom:function(a){var b=this.options.mapDom(a);return this._addItemData(b,a),b},_fire:function(b,c){var b=a.Event(b);a(this).triggerHandler(b,c),a(this.playlists).triggerHandler(b,a.merge([{list:this}],c||[])),this.$rendered&&this.$rendered.triggerHandler(b,c)},_addDomList:function(){this.$rendered.attr({"data-autoplay":this.options.autoplay,"data-loop":this.options.loop}).addClass("media-playlist").data("playlist",this)},_addItemData:function(b,c){var d=this;b.$item=a(c).data("itemData",b),this.options.addItemEvents&&b.$item.on("click.playlist",function(a){return d.options.addItemEvents?(d.playItem(b,a),!1):void 0})},_addEvents:function(a){var b=a.options,c=function(c){b.autoplay&&a.playNext(c)};this.media.on("ended",c),this._remove=function(){a.media.off("ended",c),a.autoplay(!1),a.$rendered&&a.$rendered.remove(),a._fire("removelist")}},_remove:function(){this._fire("removelist")},render:function(b){this.$rendered?b(this.$rendered,this.player,this):this.deferred.done(function(){var c,d=this,e=[];if(!this.$rendered){switch(a.each(this.list,function(b,c){var f=a(a.parseHTML(d.options.renderer(c,d.options.itemTmpl))).filter(g)[0];d._addItemData(c,f),e.push(f)}),c=(e[0]&&e[0].nodeName||"").toLowerCase()){case"li":this.$rendered=a.parseHTML("<ul />");break;case"option":this.$rendered=a.parseHTML("<select />");break;default:this.$rendered=a.parseHTML("<div />")}this.$rendered=a(this.$rendered).html(e),this._addDomList()}b(this.$rendered,this.player,this)})},_loadItem:function(b){var c=this.media;c.attr("poster",b.poster||""),a("track",c).remove(),a.each(b.tracks||[],function(b,d){a("<track />").attr(d).appendTo(c)}),c.jmeProp("srces",b.srces)},_getItem:function(b){return b&&(b.nodeName||b.jquery||"string"==typeof b)&&(b=a(b).data("itemData")),b},playItem:function(a,b){this.selectedItem(a,b),a&&this.media.play()},selectedIndex:function(a,b){return arguments.length?(this.selectedItem(this.list[a],b),void 0):this._selectedIndex},selectedItem:function(b,c){var d,e;return arguments.length?(e=-1,b=this._getItem(b),b&&a.each(this.list,function(a){return b==this?(e=a,!1):void 0}),e>=0&&this._loadItem(this.list[e]),e!=this._selectedIndex&&(d=this._selectedItem||null,d&&d.$item&&d.$item.removeClass("selected-item"),this._selectedItem=this.list[e]||null,this._selectedIndex=e,this._selectedItem&&this._selectedItem.$item&&this._selectedItem.$item.addClass("selected-item"),d!==this._selectedItem&&this._fire("itemchange",[{oldItem:d,from:c||null}])),void 0):this._selectedItem},playNext:function(){var a=this.getNext();a&&this.playItem(a)},playPrev:function(){var a=this.getPrev();a&&this.playItem(a)},getNext:function(){var a=this._selectedIndex+1;return this.list[a]||(this.options.loop?this.list[0]:null)},getPrev:function(){var a=this._selectedIndex-1;return this.list[a]||(this.options.loop?this.list[this.list.length-1]:null)}}),[{name:"autoplay",fn:"getAutoplayList"},{name:"showcontrols",fn:"getShowcontrolsList"},{name:"loop"}].forEach(function(a){c.prototype[a.name]=function(b){var c;return arguments.length?(b=!!b,b&&a.fn&&(c=this.playlists[a.fn](),c&&c!=this&&c[a.name](!1)),this.options[a.name]!=b&&(this.options[a.name]=b,this.$rendered&&this.$rendered.attr("data-"+a.name,b),this._fire(a.name+"change")),void 0):this.options[a.name]}}),h.defineProp("playlists",{writable:!1,get:function(c){var d=a.jme.data(c);return c!=d.player[0]?null:(d.playlists||(d.playlists=new b(d)),d.playlists)}}),h.defineMethod("addPlaylist",function(b,c){var d=a.jme.prop(this,"playlists");return d&&d.add?d.add(b,c):null}),[{name:"playlist-prev",text:"previous",get:"getPrev",play:"playPrev"},{name:"playlist-next",text:"next",get:"getNext",play:"playNext"}].forEach(function(b){a.jme.registerPlugin(b.name,{structure:j,text:b.text,_create:function(a,c,d){function e(){var c=g[b.get]();
c?a.prop({disabled:!1,title:c.title}):a.prop({disabled:!0,title:""})}function f(){var a=h.getShowcontrolsList();a!=g&&(g&&g.off("itemchange",e),g=a,g&&(g.on("itemchange",e),e()))}var g,h=d.jmeProp("playlists");a.on("click",function(){g&&g[b.play]()}),h.on({"addlist removelist showcontrolschange":f}),f()}})}),function(){var b={};a.jme.tmpl=function(a,c){return b[a]||(b[a]=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g,"',$1,'").split("<%").join("');").split("%>").join("p.push('")+"');}return p.join('');")),c?b[a](c):b[a]}}(),a.jme.Playlist=c});