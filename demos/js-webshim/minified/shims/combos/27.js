var swfmini=function(){function e(){if(!C){try{var e=T.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var r=k.length,n=0;r>n;n++)k[n]()}}function t(e){C?e():k[k.length]=e}function r(){}function n(){E&&a()}function a(){var e=T.getElementsByTagName("body")[0],t=p(m);t.setAttribute("type",b);var r=e.appendChild(t);if(r){var n=0;(function(){if(typeof r.GetVariable!=h){var a=r.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),P.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),r=null})()}}function i(e){var t=null,r=c(e);if(r&&"OBJECT"==r.nodeName)if(typeof r.SetVariable!=h)t=r;else{var n=r.getElementsByTagName(m)[0];n&&(t=n)}return t}function o(e,t,r){var n,a=c(r);if(P.wk&&312>P.wk)return n;if(a)if(typeof e.id==h&&(e.id=r),P.ie&&P.win){var i="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?i+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(i+=" "+o+'="'+e[o]+'"'));var u="";for(var l in t)t[l]!=Object.prototype[l]&&(u+='<param name="'+l+'" value="'+t[l]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+u+"</object>",N[N.length]=e.id,n=c(e.id)}else{var d=p(m);d.setAttribute("type",b);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?d.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&d.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(d,v,t[v]);a.parentNode.replaceChild(d,a),n=d}return n}function s(e,t,r){var n=p("param");n.setAttribute("name",t),n.setAttribute("value",r),e.appendChild(n)}function u(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(P.ie&&P.win?(t.style.display="none",function(){4==t.readyState?l(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function l(e){var t=c(e);if(t){for(var r in t)"function"==typeof t[r]&&(t[r]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(r){}return t}function p(e){return T.createElement(e)}function d(e){var t=P.pv,r=e.split(".");return r[0]=parseInt(r[0],10),r[1]=parseInt(r[1],10)||0,r[2]=parseInt(r[2],10)||0,t[0]>r[0]||t[0]==r[0]&&t[1]>r[1]||t[0]==r[0]&&t[1]==r[1]&&t[2]>=r[2]?!0:!1}function f(e,t){if(S){var r,n=t?"visible":"hidden";C&&r&&c(e)&&(c(e).style.visibility=n)}}var h="undefined",m="object",v=jQuery.webshims||window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,x=navigator,E=!1,k=[n],N=[],A=[],C=!1,S=!0,P=function(){var e=typeof T.getElementById!=h&&typeof T.getElementsByTagName!=h&&typeof T.createElement!=h,t=x.userAgent.toLowerCase(),r=x.platform.toLowerCase(),n=r?/win/.test(r):/win/.test(t),a=r?/mac/.test(r):/mac/.test(t),i=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],u=null;if(typeof x.plugins!=h&&typeof x.plugins[g]==m)u=x.plugins[g].description,!u||typeof x.mimeTypes!=h&&x.mimeTypes[b]&&!x.mimeTypes[b].enabledPlugin||(E=!0,o=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(u.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(u.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(u)?parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=h)try{var l=new ActiveXObject(y);l&&(u=l.GetVariable("$version"),u&&(o=!0,u=u.split(" ")[1].split(","),s=[parseInt(u[0],10),parseInt(u[1],10),parseInt(u[2],10)]))}catch(c){}return{w3:e,pv:s,wk:i,ie:o,win:n,mac:a}}();return function(){P.ie&&P.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=A.length,t=0;e>t;t++)A[t][0].detachEvent(A[t][1],A[t][2]);for(var r=N.length,n=0;r>n;n++)u(N[n]);for(var a in P)P[a]=null;P=null;for(var i in swfmini)swfmini[i]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return P.w3?i(e):void 0},embedSWF:function(e,r,n,a,i,s,u,l,c,p){var v={success:!1,id:r};P.w3&&!(P.wk&&312>P.wk)&&e&&r&&n&&a&&i?(f(r,!1),t(function(){n+="",a+="";var t={};if(c&&typeof c===m)for(var s in c)t[s]=c[s];t.data=e,t.width=n,t.height=a;var g={};if(l&&typeof l===m)for(var y in l)g[y]=l[y];if(u&&typeof u===m)for(var b in u)typeof g.flashvars!=h?g.flashvars+="&"+b+"="+u[b]:g.flashvars=b+"="+u[b];if(d(i)){var w=o(t,g,r);t.id==r&&f(r,!0),v.success=!0,v.ref=w}else f(r,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){S=!1},ua:P,getFlashPlayerVersion:function(){return{major:P.pv[0],minor:P.pv[1],release:P.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,r){return P.w3?o(e,t,r):void 0},showExpressInstall:function(){},removeSWF:function(e){P.w3&&u(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:r,expressInstallCallback:function(){}}}();webshims.register("filereader",function(e,t){"use strict";(function(){var r=swfmini,n=e.Callbacks("once unique memory"),a=0,i=null;if(window.FileReader)return e.fn.fileReader=function(){return this},void 0;e.fn.fileReader=function(t){if(this.length){t=e.extend(e.fn.fileReader.defaults,t);var r=this;n.add(function(){return o(r,t)}),e.isFunction(t.callback)&&n.add(t.callback),FileAPIProxy.ready||FileAPIProxy.init(t)}return this},e.fn.fileReader.defaults={id:"fileReaderSWFObject",multiple:null,accept:null,label:null,extensions:null,filereader:"files/filereader.swf",expressInstall:null,debugMode:!1,callback:!1};var o=function(t,r){return t.each(function(t,n){n=e(n);var o,s,u,l=n.attr("id");l||(l="flashFileInput"+a,n.attr("id",l),a++),o=n.prop("multiple"),s=n.data("swfaccept")||n.prop("accept")||r.accept,u=n.jProp("labels").map(function(){return e(this).text()}).get().join(" ")||n.data("swflabel")||r.label,FileAPIProxy.inputs[l]=n,FileAPIProxy.swfObject.add(l,o,s,u,r.extensions),n.css("z-index",0).mouseover(function(e){l!==i&&(e=e||window.event,i=l,FileAPIProxy.swfObject.mouseover(l),FileAPIProxy.container.height(n.outerHeight()).width(n.outerWidth()).css(n.offset()))}).click(function(e){return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1})})};window.FileAPIProxy={ready:!1,_inititalized:!1,init:function(t){var a=this;this.debugMode=t.debugMode,this.container||(this.container=e("<div>").attr("id",t.id).wrap("<div>").parent().css({position:"fixed",width:"1px",height:"1px",display:"inline-block",background:"transparent","z-index":99999}).on("mouseover mouseout mousedown mouseup",function(t){i&&e("#"+i).trigger(t.type)}).appendTo("body"),r.embedSWF(t.filereader,t.id,"100%","100%","10",t.expressInstall,{debugMode:t.debugMode?!0:""},{wmode:"transparent",allowScriptAccess:"sameDomain"},{},function(t){a.swfObject=t.ref,e(a.swfObject).css({display:"block",outline:0}).attr("tabindex",0),a.ready=t.success&&"function"==typeof t.ref.add,a.ready&&n.fire()}))},swfObject:null,container:null,inputs:{},readers:{},onFileInputEvent:function(e){if(this.debugMode&&console.info("FileInput Event ",e.type,e),e.target in this.inputs){var r=this.inputs[e.target];e.target=r[0],"change"===e.type&&t.data(e.target,"fileList",new FileList(e.files)),r.trigger(e)}window.focus()},onFileReaderEvent:function(e){if(this.debugMode&&console.info("FileReader Event ",e.type,e,e.target in this.readers),e.target in this.readers){var t=this.readers[e.target];e.target=t,t._handleFlashEvent.call(t,e)}},onFileReaderError:function(e){this.debugMode&&console.log(e)},onSWFReady:function(){return this.container.css({position:"absolute"}),this.ready="function"==typeof this.swfObject.add,this.ready&&n.fire(),!0}},window.FileReader=function(){this.EMPTY=0,this.LOADING=1,this.DONE=2,this.readyState=0,this.result=null,this.error=null,this.onloadstart=null,this.onprogress=null,this.onload=null,this.onabort=null,this.onerror=null,this.onloadend=null,this._callbacks={loadstart:e.Callbacks("unique"),progress:e.Callbacks("unique"),abort:e.Callbacks("unique"),error:e.Callbacks("unique"),load:e.Callbacks("unique"),loadend:e.Callbacks("unique")},this._id=null},window.FileReader.prototype={readAsBinaryString:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsBinaryString")},readAsText:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsText")},readAsDataURL:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsDataURL")},readAsArrayBuffer:function(){throw"Whoops FileReader.readAsArrayBuffer is unimplemented"},abort:function(){this.result=null,this.readyState!==this.EMPTY&&this.readyState!==this.DONE&&FileAPIProxy.swfObject.abort(this._id)},addEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].add(t)},removeEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].remove(t)},dispatchEvent:function(t){if(t.target=this,t.type in this._callbacks){var r=this["on"+t.type];e.isFunction(r)&&r(t),this._callbacks[t.type].fire(t)}return!0},_register:function(e){this._id=e.input+"."+e.name,FileAPIProxy.readers[this._id]=this},_start:function(e){if(this._register(e),this.readyState===this.LOADING)throw{type:"InvalidStateError",code:11,message:"The object is in an invalid state."}},_handleFlashEvent:function(e){switch(e.type){case"loadstart":this.readyState=this.LOADING;break;case"loadend":this.readyState=this.DONE;break;case"load":this.readyState=this.DONE,this.result=FileAPIProxy.swfObject.result(this._id);break;case"error":this.result=null,this.error={name:"NotReadableError",message:"The File cannot be read!"}}this.dispatchEvent(new FileReaderEvent(e))}},window.FileReaderEvent=function(e){this.initEvent(e)},window.FileReaderEvent.prototype={initEvent:function(t){e.extend(this,{type:null,target:null,currentTarget:null,eventPhase:2,bubbles:!1,cancelable:!1,defaultPrevented:!1,isTrusted:!1,timeStamp:(new Date).getTime()},t)},stopPropagation:function(){},stopImmediatePropagation:function(){},preventDefault:function(){}},window.FileList=function(e){if(e){for(var t=0;e.length>t;t++)this[t]=e[t];this.length=e.length}else this.length=0},window.FileList.prototype={item:function(e){return e in this?this[e]:null}}})(),t.defineNodeNameProperty("input","files",{prop:{writeable:!1,get:function(){return"file"!=this.type?null:(e(this).is(".ws-filereader")||t.error("please add the 'ws-filereader' class to your input[type='file'] to implement files-property"),t.data(this,"fileList")||t.data(this,"fileList",new FileList))}}}),t.defineNodeNamesBooleanProperty("input","multiple"),e.fn.fileReader.defaults.filereader=t.cfg.basePath+"swf/filereader.swf";var r=["DOM"];t.modules["form-core"].loaded&&r.push("forms"),t.ready(r,function(){t.addReady(function(t){e('input[type="file"].ws-filereader',t).fileReader()})})});