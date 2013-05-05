webshims.register("mediaelement-jaris",function(e,t,n,a,i,r){"use strict";var o=t.mediaelement,s=n.swfmini,u=Modernizr.audio&&Modernizr.video,l=s.hasFlashPlayerVersion("9.0.115"),c=0,p={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),i):0},end:function(e){return e?(t.error("buffered index size error"),i):0},length:0}},d=Object.keys(p),f={currentTime:0,volume:1,muted:!1};Object.keys(f);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:i,_calledMeta:!1,lastDuration:0},p,f),h=function(e){try{e.nodeName}catch(n){return null}var a=t.data(e,"mediaelement");return a&&"third"==a.isActive?a:null},v=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,i,t)},g=r.playerPath||t.cfg.basePath+"swf/"+(r.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(r.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(r.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(r.attrs,{bgcolor:"#000000"});var y=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,v(t._elem,"canplay"),t.paused||v(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){y(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,v(t._elem,"canplaythrough")),t.readyState=e};e.extend(e.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0}),o.jarisEvent={};var b,w={onPlayPause:function(e,t,n){var a,i;if(null==n)try{a=t.api.api_get("isPlaying")}catch(r){}else a=n;a==t.paused&&(t.paused=!a,i=t.paused?"pause":"play",t._ppFlag=!0,v(t._elem,i),3>t.readyState&&y(3,t),t.paused||v(t._elem,"playing"))},onNotBuffering:function(e,t){y(3,t)},onDataInitialized:function(e,t){var n,a=t.duration;t.duration=e.duration,a==t.duration||isNaN(t.duration)||t._calledMeta&&2>(n=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&y(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,v(t._elem,"durationchange")},n>50?0:n>9?9:99):(t.lastDuration=t.duration,t.duration&&v(t._elem,"durationchange"),t._calledMeta||v(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),y(1,t),v(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(y(3,t),v(t._elem,"playing")),v(t._elem,"timeupdate")},onProgress:function(t,n){if(n.ended&&(n.ended=!1),n.duration&&!isNaN(n.duration)){var a=t.loaded/t.total;a>.02&&.2>a?y(3,n):a>.2&&(a>.99&&(n.networkState=1),y(4,n)),n._bufferedEnd&&n._bufferedEnd>a&&(n._bufferedStart=n.currentTime||0),n._bufferedEnd=a,n.buffered.length=1,e.event.trigger("progress",i,n._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&y(4,t),t.ended=!0,v(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,v(t._elem,"volumechange"))},ready:function(){var n=function(e){var t=!0;try{e.api.api_get("volume")}catch(n){t=!1}return t};return function(a,r){var o=0,s=function(){return o>9?(r.tryedReframeing=0,i):(o++,r.tryedReframeing++,n(r)?(r.wasSwfReady=!0,r.tryedReframeing=0,T(r),x(r)):6>r.tryedReframeing?3>r.tryedReframeing?(r.reframeTimer=setTimeout(s,9),r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},1)):(r.shadowElem.css({overflow:"hidden"}),e(r._elem).mediaLoad()):(clearTimeout(r.reframeTimer),t.error("reframing error")),i)};r&&r.api&&(r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(b),clearTimeout(r.reframeTimer),r.shadowElem.removeClass("flashblocker-assumed"),o?r.reframeTimer=setTimeout(s,9):s())}}()};w.onMute=w.onVolumeChange;var x=function(e){var n,a=e.actionQueue.length,i=0;if(a&&"third"==e.isActive)for(;e.actionQueue.length&&a>i;){i++,n=e.actionQueue.shift();try{e.api[n.fn].apply(e.api,n.args)}catch(r){t.warn(r)}}e.actionQueue.length&&(e.actionQueue=[])},T=function(t){t&&((t._ppFlag===i&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===i||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(n){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(u){var E={play:1,playing:1},k=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],A=k.map(function(e){return e+".webshimspolyfill"}).join(" "),S=function(n){var a=t.data(n.target,"mediaelement");if(a){var i=n.originalEvent&&n.originalEvent.type===n.type;i==("third"==a.activating)&&(n.stopImmediatePropagation(),E[n.type]&&a.isActive!=a.activating&&e(n.target).pause())}};N=function(n){e(n).off(A).on(A,S),k.forEach(function(e){t.moveToFirstEvent(n,e)})},N(a)}o.setActive=function(n,a,i){if(i||(i=t.data(n,"mediaelement")),i&&i.isActive!=a){"html5"!=a&&"third"!=a&&t.warn("wrong type for mediaelement activating: "+a);var r=t.data(n,"shadowData");i.activating=a,e(n).pause(),i.isActive=a,"third"==a?(r.shadowElement=r.shadowFocusElement=i.shadowElem[0],e(n).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(n).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")}};var C=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(n){if(n){var a=t,i=n.networkState;for(y(0,n),clearTimeout(n._durationChangeTimer);--a>-1;)delete n[e[a]];n.actionQueue=[],n.buffered.length=0,i&&v(n._elem,"emptied")}}}(),M=function(t,n){var a=t._elem,i=t.shadowElem;e(a)[n?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||n?i.css({width:a.style.width||e(a).width(),height:a.style.height||e(a).height()}):i.css({width:0,height:0})},_=function(){var t={"":1,auto:1};return function(n){var a=e.attr(n,"preload");return null==a||"none"==a||e.prop(n,"autoplay")?!1:(a=e.prop(n,"preload"),!!(t[a]||"metadata"==a&&e(n).is(".preload-in-doubt, video:not([poster])")))}}(),D={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},P=function(e){return e.replace?e.replace(D.A,"%26").replace(D.a,"%26").replace(D.e,"%3D").replace(D.q,"%3F"):e};o.createSWF=function(n,a,p){if(!l)return setTimeout(function(){e(n).mediaLoad()},1),i;1>c?c=1:c++,p||(p=t.data(n,"mediaelement")),(e.attr(n,"height")||e.attr(n,"width"))&&t.warn("width or height content attributes used. Webshims only uses CSS (computed styles or inline styles) to detect size of a video/audio");var d,f="audio/rtmp"==a.type||"video/rtmp"==a.type,h=e.extend({},r.vars,{poster:P(e.attr(n,"poster")&&e.prop(n,"poster")||""),source:P(a.streamId||a.srcProp),server:P(a.server||"")}),v=e(n).data("vars")||{},y=e.prop(n,"controls"),x="jarisplayer-"+t.getID(n),T=e.extend({},r.params,e(n).data("params")),E=n.nodeName.toLowerCase(),k=e.extend({},r.attrs,{name:x,id:x},e(n).data("attrs")),A=function(){M(p,e.prop(n,"controls"))};p&&p.swfCreated?(o.setActive(n,"third",p),p.currentSrc=a.srcProp,p.shadowElem.html('<div id="'+x+'">'),p.api=!1,p.actionQueue=[],d=p.shadowElem,C(p)):(d=e('<div class="polyfill-'+E+' polyfill-mediaelement" id="wrapper-'+x+'"><div id="'+x+'"></div>').css({position:"relative",overflow:"hidden"}),p=t.data(n,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:d},_elemNodeName:{value:E},_elem:{value:n},currentSrc:{value:a.srcProp},swfCreated:{value:!0},id:{value:x.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),i):0},end:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),i):(p.duration-p._bufferedStart)*p._bufferedEnd+p._bufferedStart},length:0}}})),M(p,y),d.insertBefore(n),u&&e.extend(p,{volume:e.prop(n,"volume"),muted:e.prop(n,"muted"),paused:e.prop(n,"paused")}),t.addShadowDom(n,d),N(n),o.setActive(n,"third",p),e(n).on({updatemediaelementdimensions:A}).onWSOff("updateshadowdom",A)),o.jarisEvent[p.id]||(o.jarisEvent[p.id]=function(e){if("ready"==e.type){var t=function(){p.api&&(_(n)&&p.api.api_preload(),w.ready(e,p))};p.api?t():setTimeout(t,9)}else p.currentTime=e.position,p.api&&(!p._calledMeta&&isNaN(e.duration)&&p.duration!=e.duration&&isNaN(p.duration)&&w.onDataInitialized(e,p),p._ppFlag||"onPlayPause"==e.type||w.onPlayPause(e,p),w[e.type]&&w[e.type](e,p)),p.duration=e.duration}),e.extend(h,{id:x,evtId:p.id,controls:""+y,autostart:"false",nodename:E},v),f?h.streamtype="rtmp":"audio/mpeg"==a.type||"audio/mp3"==a.type?(h.type="audio",h.streamtype="file"):"video/youtube"==a.type&&(h.streamtype="youtube"),r.changeSWF(h,n,a,p,"embed"),clearTimeout(p.flashBlock),s.embedSWF(g,x,"100%","100%","9.0.115",!1,h,T,k,function(a){a.success&&(p.api=a.ref,y||e(a.ref).attr("tabindex","-1").css("outline","none"),p.flashBlock=setTimeout(function(){(!a.ref.parentNode&&d[0].parentNode||"none"==a.ref.style.display)&&(d.addClass("flashblocker-assumed"),e(n).trigger("flashblocker"),t.warn("flashblocker assumed")),e(a.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),b||(clearTimeout(b),b=setTimeout(function(){var n=e(a.ref);n[0].offsetWidth>1&&n[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>n[0].offsetWidth||2>n[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),n=null},8e3)))})};var F=function(e,t,n,a){return a=a||h(e),a?(a.api&&a.api[t]?a.api[t].apply(a.api,n||[]):(a.actionQueue.push({fn:t,args:n}),a.actionQueue.length>10&&setTimeout(function(){a.actionQueue.length>5&&a.actionQueue.shift()},99)),a):!1};if(["audio","video"].forEach(function(n){var a,i={},r=function(e){("audio"!=n||"videoHeight"!=e&&"videoWidth"!=e)&&(i[e]={get:function(){var t=h(this);return t?t[e]:u&&a[e].prop._supget?a[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){r(e),delete i[e].writeable,i[e].set=t};o("volume",function(e){var n=h(this);if(n)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),F(this,"api_volume",[e],n),n.volume!=e&&(n.volume=e,v(n._elem,"volumechange")),n=null);else if(a.volume.prop._supset)return a.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=h(this);if(t)e=!!e,F(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,v(t._elem,"volumechange")),t=null;else if(a.muted.prop._supset)return a.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=h(this);if(t)e*=1,isNaN(e)||F(this,"api_seek",[e],t);else if(a.currentTime.prop._supset)return a.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){i[e]={value:function(){var t=h(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),F(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,v(t._elem,e));else if(a[e].prop._supvalue)return a[e].prop._supvalue.apply(this,arguments)}}}),d.forEach(r),t.onNodeNamesPropertyModify(n,"controls",function(t,a){var i=h(this);e(this)[a?"addClass":"removeClass"]("webshims-controls"),i&&("audio"==n&&M(i,a),F(this,"api_controls",[a],i))}),t.onNodeNamesPropertyModify(n,"preload",function(){var e=h(this);e&&_(this)&&F(this,"api_preload",[],e)}),a=t.defineNodeNameProperties(n,i,"prop")}),l&&e.cleanData){var O=e.cleanData,I={object:1,OBJECT:1};e.cleanData=function(e){var t,n;if(e&&(n=e.length)&&c)for(t=0;n>t;t++)if(I[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(a){}}return O.apply(this,arguments)}}u||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});