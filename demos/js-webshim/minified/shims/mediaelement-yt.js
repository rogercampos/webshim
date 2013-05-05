webshims.register("mediaelement-yt",function(e,t,n,a,r){"use strict";var i=t.mediaelement,o=jQuery.Deferred();n.onYouTubePlayerAPIReady=function(){o.resolve()},n.YT&&YT.Player&&n.onYouTubePlayerAPIReady();var s={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),r):0},end:function(e){return e?(t.error("buffered index size error"),r):0},length:0}},u=Object.keys(s),l={currentTime:0,volume:1,muted:!1};Object.keys(l);var c=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_metadata:!1,_callMeta:!1,currentTime:0,_buffered:0,_ppFlag:r},s,l),p=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,r,t)},d=function(){var e=["_buffered","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth","_callMeta"],t=e.length;return function(n){if(n){var a=t,r=n.networkState;for(n.readyState=0;--a;)delete n[e[a]];n.buffered.length=0,clearInterval(n._timeInterval),r&&p(n._elem,"emptied")}}}(),f=function(t){var n=t._elem,a=t.shadowElem;a.css({width:n.style.width||e(n).width(),height:n.style.height||e(n).height()})},m=function(e){try{e.nodeName}catch(n){return null}var a=t.data(e,"mediaelement");return a&&"third"==a.isActive?a:null},h=function(n){var a;return n=n.split("?"),-1!=n[0].indexOf("youtube.com/watch")&&n[1]?(n=n[1].split("&"),e.each(n,function(e,t){return t=t.split("="),"v"==t[0]?(n=t[1],a=!0,!1):r})):-1!=n[0].indexOf("youtube.com/v/")&&(n=n[0].split("/"),e.each(n,function(e,t){return a?(n=t,!1):("v"==t&&(a=!0),r)})),a||t.warn("no youtube id found: "+n),n},v=function(t){t&&(t._ppFlag===r&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===r||!t.paused))try{e(t._elem).play()}catch(n){}},1)},g=e.noop;(function(){var n={play:1,playing:1},r=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],i=r.map(function(e){return e+".webshimspolyfill"}).join(" "),o=function(a){var r=t.data(a.target,"mediaelement");if(r){var i=a.originalEvent&&a.originalEvent.type===a.type;i==("third"==r.activating)&&(a.stopImmediatePropagation(),n[a.type]&&r.isActive!=r.activating&&e(a.target).pause())}};g=function(n){e(n).off(i).on(i,o),r.forEach(function(e){t.moveToFirstEvent(n,e)})},g(a)})(),e(a).on("emptied",function(e){var t=m(e.target);v(t)}),i.setActive=function(n,a,r){if(r||(r=t.data(n,"mediaelement")),r&&r.isActive!=a){"html5"!=a&&"third"!=a&&t.warn("wrong type for mediaelement activating: "+a);var i=t.data(n,"shadowData");r.activating=a,e(n).pause(),r.isActive=a,"third"==a?(i.shadowElement=i.shadowFocusElement=r.shadowElem[0],e(n).addClass("yt-api-active nonnative-api-active").hide().getShadowElement().show()):(clearInterval(r._timeInterval),e(n).removeClass("yt-api-active nonnative-api-active").show().getShadowElement().hide(),i.shadowElement=i.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")}};var y=function(t,n){n._ppFlag=!0,"playing"==t&&(y("play",n),3>n.readyState&&(n.readyState=3,p(n._elem,"canplay")),e(n._elem).trigger("playing")),"play"==t&&n.paused?(n.paused=!1,p(n._elem,"play")):"pause"!=t||n.paused||(n.paused=!0,p(n._elem,"pause"))},b=function(t,n,a,r){o.done(function(){var i=function(){var n,r;a._metadata&&a._ytAPI.getVideoLoadedFraction&&(r=a._ytAPI.getVideoLoadedFraction(),n=r*a.duration,a._buffered!==n&&(a._buffered=n,a.buffered.length=1,e(t).trigger("progress")),r>.99&&(a.networkState=1),4>a.readyState&&a.currentTime&&(a._buffered-a.currentTime>9||r>.9)&&(a.readyState=4,p(a._elem,"canplaythrough")))},o=function(){if(a._ytAPI&&a._ytAPI.getCurrentTime){var n=a._ytAPI.getCurrentTime();a.currentTime!=n&&(a.currentTime=n,e(t).trigger("timeupdate")),i()}},s=function(){if("third"==a.isActive&&a._ytAPI&&a._ytAPI.getVolume){var n,r=a._ytAPI.getVolume()/100,s=a._ytAPI.isMuted();r!=a.volume&&(a.volume=r,n=!0),s!=a.muted&&(a.muted=s,n=!0),o(),i(),n&&e(t).trigger("volumechange")}},u=function(){clearInterval(a._timeInterval),a._timeInterval=setInterval(function(){var n=a._ytAPI.getCurrentTime();a.currentTime!=n&&(a.currentTime=n,e(t).trigger("timeupdate"))},350)};a._ytAPI=new YT.Player(n,{height:"100%",width:"100%",allowfullscreen:"allowfullscreen",webkitallowfullscreen:"allowfullscreen",playerVars:{allowfullscreen:!0,fs:1,rel:0,showinfo:0,autohide:1,controls:e.prop(t,"controls")?1:0},videoId:r,events:{onReady:function(){v(a),setTimeout(s,9),setInterval(s,5e3)},onStateChange:function(n){if(n.target.getDuration){var r;if(!a._metadata){var i=n.target.getDuration();i&&(a._metadata=!0,a.duration=i,1>a.readyState&&(a.readyState=1),1>a.networkState&&(a.networkState=2),r=!0)}r&&e(t).trigger("durationchange").trigger("loadedmetadata"),setTimeout(s,9),1==n.data?(y("playing",a),u()):2==n.data?(clearInterval(a._timeInterval),y("pause",a)):3==n.data?(a.readyState>2&&(a.readyState=2),a.networkState=2,e(t).trigger("waiting")):0===n.data&&(a.readyState>4&&(a.readyState=4),a.networkState=1,clearInterval(a._timeInterval),e(t).trigger("ended"))}}}}),e(t).on("updateytdata",s)})};i.createSWF=function(n,a,s){s||(s=t.data(n,"mediaelement"));var u=h(a.src);if(s)return i.setActive(n,"third",s),d(s),s.currentSrc=a.srcProp,o.done(function(){s._ytAPI.loadVideoById&&s._ytAPI.loadVideoById(u)}),r;e.prop(n,"controls");var l="yt-"+t.getID(n),p=e('<div class="polyfill-video polyfill-mediaelement" id="wrapper-'+l+'"><div id="'+l+'"></div>').css({position:"relative",overflow:"hidden"}),m=function(){f(s)};s=t.data(n,"mediaelement",t.objectCreate(c,{shadowElem:{value:p},_elem:{value:n},currentSrc:{value:a.srcProp},buffered:{value:{start:function(e){return e>=s.buffered.length?(t.error("buffered index size error"),r):0},end:function(e){return e>=s.buffered.length?(t.error("buffered index size error"),r):s._buffered},length:0}}})),f(s),p.insertBefore(n),t.addShadowDom(n,p),i.setActive(n,"third",s),g(n),b(n,l,s,u),e(n).on("updatemediaelementdimensions",m).onWSOff("updateshadowdom",m)},function(){var n,a=function(t){clearTimeout(t.updateDataTimer),t.updateDataTimer=setTimeout(function(){e(t._elem).triggerHandler("updateytdata")},9)},i={},o=function(e){i[e]={get:function(){var t=m(this);return t?t[e]:n[e].prop._supget.apply(this)},writeable:!1}},s=function(e,t){o(e),delete i[e].writeable,i[e].set=t};u.forEach(o),s("currentTime",function(e){var t=m(this);return t?(e*=1,!isNaN(e)&&t._ytAPI&&t._ytAPI.seekTo&&(t._ytAPI.seekTo(e),a(t)),r):n.currentTime.prop._supset.apply(this,arguments)}),s("muted",function(e){var t=m(this);return t?(t._ytAPI&&t._ytAPI.mute&&(t._ytAPI[e?"mute":"unMute"](),a(t)),r):n.muted.prop._supset.apply(this,arguments)}),s("volume",function(e){var i=m(this);return i?(e*=100,!isNaN(e)&&i._ytAPI&&i._ytAPI.setVolume&&((0>e||e>100)&&t.error("volume greater or less than allowed "+e/100),i._ytAPI.setVolume(e),a(i)),r):n.volume.prop._supset.apply(this,arguments)}),e.each(["play","pause"],function(e,t){var a=t+"Video";i[t]={value:function(){var e=m(this);return e?(e._ytAPI&&e._ytAPI[a]&&(e._ytAPI[a](),y(t,e)),r):n[t].prop._supvalue.apply(this,arguments)}}}),n=t.defineNodeNameProperties("video",i,"prop")}()});