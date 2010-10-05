(function(b){(function(){var i,o=[],e,l,h;b.support.validity===true&&document.addEventListener&&!window.noHTMLExtFixes&&document.addEventListener("submit",function(k){k.target.checkValidity&&b.attr(k.target,"novalidate")===undefined&&k.target.checkValidity()},true);b(document).bind("invalid",function(k){if(!i){l=k.target.form;if(b.support.validity===true&&l&&!window.noHTMLExtFixes){var m=b(l).bind("submit.preventInvalidSubmit",function(p){if(b.attr(l,"novalidate")===undefined){p.stopImmediatePropagation();
return false}}).data("events").submit;m&&m.length>1&&m.unshift(m.pop())}i=b.Event("firstinvalid");b(k.target).trigger(i)}i&&i.isDefaultPrevented()&&k.preventDefault();if(b.support.validity!==true||b.inArray(k.target,o)==-1)o.push(k.target);else if(!window.noHTMLExtFixes){h=true;k.stopImmediatePropagation()}k.extraData="fix";clearTimeout(e);e=setTimeout(function(){var p={type:"lastinvalid",cancelable:false,invalidlist:b(o)};b.browser.webkit&&!h&&i.target!==document.activeElement&&!b.data(i.target,
"maybePreventedinvalid")&&b.webshims.validityAlert.showFor(i.target);i=h=false;o=[];b(l).unbind("submit.preventInvalidSubmit");b(k.target).trigger(p,p)},0)})})();b.extend(b.expr.filters,{valid:function(i){return(b.attr(i,"validity")||{valid:true}).valid},invalid:function(i){return!b.expr.filters.valid(i)},willValidate:function(i){return b.attr(i,"willValidate")}});var q=function(){this._create()};q.prototype={_create:function(){this.alert=b('<div class="validity-alert" role="alert"><div class="va-box" /></div>').css({position:"absolute",
display:"none"});this.hideTimer=false;this.boundHide=b.proxy(this,"hide")},hideDelay:5E3,createAlert:function(){if(!this.created){this.created=true;var i=this;b(function(){i.alert.appendTo("body")})}},showFor:function(i,o){i=b(i);var e=(i.data("inputUIReplace")||{visual:i}).visual;this.createAlert();this.clear();this.getMessage(i);this.position(e);this.show();o||i.focus();this.hideTimer=setTimeout(this.boundHide,this.hideDelay);b(document).bind("focusout.validityalert",this.boundHide)},getMessage:function(i){b("> div",
this.alert).html(i.attr("validationMessage"))},position:function(i){var o=i.offset();o.top+=i.outerHeight();this.alert.css(o)},clear:function(){clearTimeout(this.hideTimer);b(document).unbind("focusout.validityalert");this.alert.stop().css({opacity:""})},show:function(){this.alert.fadeIn()},hide:function(){this.clear();this.alert.fadeOut()}};b.webshims.validityAlert=new q;b.webshims.validityMessages.en=b.webshims.validityMessages.en||b.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form. Only certain values are allowed for this field. {%title}",
tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};b.webshims.validityMessages["en-US"]=b.webshims.validityMessages["en-US"]||b.webshims.validityMessages.en;b.webshims.validityMessages[""]=b.webshims.validityMessages[""]||b.webshims.validityMessages.en;b.webshims.validityMessages.de=b.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",
url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",
tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};b.webshims.activeValidationMessages=b.webshims.validityMessages[""];b(document).bind("htmlExtLangChange",function(){b.webshims.activeLang(b.webshims.validityMessages,"validation-base",function(i){b.webshims.activeValidationMessages=i})});b.each(b.support.validationMessage?
["customValidationMessage"]:["customValidationMessage","validationMessage"],function(i,o){b.webshims.attr(o,{elementNames:["input","select","textarea"],getter:function(e){var l="";if(!b.attr(e,"willValidate"))return l;var h=b.attr(e,"validity")||{valid:1};if(h.valid)return l;if(h.customError||o==="validationMessage")if(l="validationMessage"in e?e.validationMessage:b.data(e,"customvalidationMessage"))return l;b.each(h,function(k,m){if(!(k=="valid"||!m)){if((l=b.webshims.activeValidationMessages[k])&&
typeof l!=="string")l=l[(e.getAttribute("type")||"").toLowerCase()]||l.defaultMessage;if(l)return false}});l&&b.each(["value","min","max","title","maxlength","label"],function(k,m){if(l.indexOf("{%"+m)!==-1){var p=(m=="label"?b.trim(b("label[for="+e.id+"]",e.form).text()).replace(/\*$|:$/,""):b.attr(e,m))||"";l=l.replace("{%"+m+"}",p);if("value"==m)l=l.replace("{%valueLen}",p.length)}});return l||""}})});b.support.validationMessage=b.support.validationMessage||"shim"})(jQuery);
(function(b){if(!(b.support.validity!==true||b.support.fieldsetValidation||window.noHTMLExtFixes)){b.support.fieldsetValidation="shim";b.webshims.addMethod("checkValidity",function(){if(b.nodeName(this,"fieldset")){var q=true;b(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(q=false)});return q}else if(this.checkValidity)return this.checkValidity()})}})(jQuery);
(function(b){if(!(b.support.validity===true&&(b('<input type="datetime-local" />')[0].type!=="datetime-local"||b('<input type="range" />')[0].type!=="range"))){var q=b.webshims.inputTypes;b.webshims.addInputType=function(h,k){q[h]=k};var i={};b.webshims.addValidityRule=function(h,k){i[h]=k};var o=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"];b.webshims.attr("validity",{elementNames:["input"],getter:function(h){var k=
h.validity;if(!k)return k;var m={};b.each(o,function(c,d){m[d]=k[d]});if(!b.attr(h,"willValidate"))return m;var p=b(h),r=p.val(),a={};m.customError=!!b.data(h,"hasCustomError");if(m.customError)m.valid=false;if((h.nodeName||"").toLowerCase()=="select")return m;b.each(i,function(c,d){var j;if(d(p,r,a)){m[c]=true;if(m.valid){if((j=b.webshims.activeValidationMessages[c])&&typeof j!=="string")j=j[a.type||(h.getAttribute("type")||"").toLowerCase()]||j.defaultMessage||c;h.setCustomValidity(j)}m.valid=false}});
m.valid&&h.setCustomValidity("");return m}});b.webshims.addMethod("setCustomValidity",function(h){h+="";this.setCustomValidity(h);b.data(this,"hasCustomError",!!h)});var e=function(h){if(q[(h.getAttribute&&this.getAttribute("type")||"").toLowerCase()])b.attr(h,"validity")};b.webshims.attr("value",{elementNames:["input"],setter:function(h,k,m){m();e(h)},getter:true});var l=b.fn.val;b.fn.val=function(){var h=l.apply(this,arguments);this.each(function(){e(this)});return h};document.addEventListener&&
document.addEventListener("change",function(h){e(h.target)},true);b.webshims.addReady(function(h){b("input",h).each(function(){e(this)})})}})(jQuery);
(function(b){var q,i=function(){if(!q){q=true;var o=parseInt("NaN",10),e=b.webshims.inputTypes,l=function(a){return typeof a=="number"||b.trim(a)&&a==a*1},h=function(a){return b('<input type="'+a+'" />').attr("type")===a},k=function(a){return(a.getAttribute("type")||"").toLowerCase()},m=function(a,c){var d=b.attr(a,"step");if(d==="any")return d;c=c||k(a);if(!e[c]||!e[c].step)return d;d=e.number.asNumber(d);return(!isNaN(d)&&d>0?d:e[c].step)*e[c].stepScaleFactor},p=function(a,c,d){if(!(a+"AsNumber"in
d)){d[a+"AsNumber"]=e[d.type].asNumber(c.attr(a));if(isNaN(d[a+"AsNumber"])&&a+"Default"in e[d.type])d[a+"AsNumber"]=e[d.type][a+"Default"]}},r=function(a,c){a=""+a;c-=a.length;for(var d=0;d<c;d++)a="0"+a;return a};b.webshims.addValidityRule("stepMismatch",function(a,c,d){if(c==="")return false;if(!("type"in d))d.type=k(a[0]);if(d.type=="date")return false;var j=false;if(e[d.type]&&e[d.type].step){if(!("step"in d))d.step=m(a[0],d.type);if(d.step=="any")return false;if(!("valueAsNumber"in d))d.valueAsNumber=
e[d.type].asNumber(c);if(isNaN(d.valueAsNumber))return false;p("min",a,d);a=d.minAsNumber;if(isNaN(a))a=e[d.type].stepBase||0;j=Math.abs((d.valueAsNumber-a)%d.step);j=!(j<=1.0E-7||Math.abs(j-d.step)<=1.0E-7)}return j});b.each([{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}],function(a,c){b.webshims.addValidityRule(c.name,function(d,j,f){var n=false;if(j==="")return n;if(!("type"in f))f.type=k(d[0]);if(e[f.type]&&e[f.type].asNumber){if(!("valueAsNumber"in f))f.valueAsNumber=
e[f.type].asNumber(j);if(isNaN(f.valueAsNumber))return false;p(c.attr,d,f);if(isNaN(f[c.attr+"AsNumber"]))return n;n=f[c.attr+"AsNumber"]*c.factor<=f.valueAsNumber*c.factor-1.0E-7}return n})});b.webshims.attr("valueAsNumber",{elementNames:["input"],getter:function(a){var c=k(a);return e[c]&&e[c].asNumber?e[c].asNumber(b.attr(a,"value")):o},setter:function(a,c,d){var j=k(a);if(e[j]&&e[j].numberToString)if(isNaN(c))b.attr(a,"value","");else{c=e[j].numberToString(c);if(c!==false)b.attr(a,"value",c);
else throw"INVALID_STATE_ERR: DOM Exception 11";}else d()}});b.webshims.attr("valueAsDate",{elementNames:["input"],getter:function(a){var c=k(a);return e[c]&&e[c].asDate&&!e[c].noAsDate?e[c].asDate(b.attr(a,"value")):null},setter:function(a,c,d){var j=k(a);if(e[j]&&e[j].dateToString){if(!window.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(c===null)b.attr(a,"value","");else{c=e[j].dateToString(c);if(c!==false)b.attr(a,"value",c);else throw"INVALID_STATE_ERR: DOM Exception 11";
}}else d()}});h("number")||b.webshims.addInputType("number",{mismatch:function(a){return!l(a)},step:1,stepScaleFactor:1,asNumber:function(a){return l(a)?a*1:o},numberToString:function(a){return l(a)?a:false}});!h("number")&&e.number&&b.webshims.addInputType("range",b.extend({},e.number,{minDefault:0,maxDefault:100}));!h("date")&&e.number&&b.webshims.addInputType("date",{mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return true;var c=a.split(/\u002D/);if(c.length!==3)return true;var d=false;
b.each(c,function(j,f){if(!(l(f)||f&&f=="0"+f*1)){d=true;return false}});if(d)return d;if(c[0].length!==4||c[1].length!=2||c[1]>12||c[2].length!=2||c[2]>33)d=true;return a!==this.dateToString(this.asDate(a,true))},step:1,stepScaleFactor:864E5,asDate:function(a,c){if(!c&&this.mismatch(a))return null;return new Date(this.asNumber(a,true))},asNumber:function(a,c){var d=o;if(c||!this.mismatch(a)){a=a.split(/\u002D/);d=Date.UTC(a[0],a[1]-1,a[2])}return d},numberToString:function(a){return l(a)?this.dateToString(new Date(a*
1)):false},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+r(a.getUTCMonth()+1,2)+"-"+r(a.getUTCDate(),2):false}});!h("time")&&e.number&&e.date&&b.webshims.addInputType("time",b.extend({},e.date,{mismatch:function(a,c){if(!a||!a.split||!/\d$/.test(a))return true;a=a.split(/\u003A/);if(a.length<2||a.length>3)return true;var d=false,j;if(a[2]){a[2]=a[2].split(/\u002E/);j=parseInt(a[2][1],10);a[2]=a[2][0]}b.each(a,function(f,n){if(!(l(n)||n&&n=="0"+n*1)||n.length!==2){d=true;
return false}});if(d)return true;if(a[0]>23||a[0]<0||a[1]>59||a[1]<0)return true;if(a[2]&&(a[2]>59||a[2]<0))return true;if(j&&isNaN(j))return true;if(j)if(j<100)j*=100;else if(j<10)j*=10;return c===true?[a,j]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var c=o;a=this.mismatch(a,true);if(a!==true){c=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0);if(a[1])c+=a[1]}return c},dateToString:function(a){if(a&&a.getUTCHours){var c=
r(a.getUTCHours(),2)+":"+r(a.getUTCMinutes(),2),d=a.getSeconds();if(d!="0")c+=":"+r(d,2);d=a.getUTCMilliseconds();if(d!="0")c+="."+r(d,3);return c}else return false}}));!h("datetime-local")&&e.number&&e.time&&b.webshims.addInputType("datetime-local",b.extend({},e.time,{mismatch:function(a,c){if(!a||!a.split||(a+"special").split(/\u0054/).length!==2)return true;a=a.split(/\u0054/);return e.date.mismatch(a[0])||e.time.mismatch(a[1],c)},noAsDate:true,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?
null:a},asNumber:function(a){var c=o,d=this.mismatch(a,true);if(d!==true){a=a.split(/\u0054/)[0].split(/\u002D/);c=Date.UTC(a[0],a[1]-1,a[2],d[0][0],d[0][1],d[0][2]||0);if(d[1])c+=d[1]}return c},dateToString:function(a,c){return e.date.dateToString(a)+"T"+e.time.dateToString(a,c)}}));(function(){var a=b.webshims.loader.modules["number-date-type"].options,c=function(f,n,g){g=g||{};if(!("type"in g))g.type=k(f);if(!("step"in g))g.step=m(f,g.type);if(!("valueAsNumber"in g))g.valueAsNumber=e[g.type].asNumber(b.attr(f,
"value"));var s=g.step=="any"?e[g.type].step*e[g.type].stepScaleFactor:g.step;p("min",b(f),g);p("max",b(f),g);if(isNaN(g.valueAsNumber))g.valueAsNumber=e[g.type].stepBase||0;if(g.step!=="any")g.valueAsNumber=Math.round((g.valueAsNumber-(g.valueAsNumber-(g.minAsnumber||0))%g.step)*1E7)/1E7;f=g.valueAsNumber+s*n;if(!isNaN(g.minAsNumber)&&f<g.minAsNumber)f=g.valueAsNumber*n<g.minAsNumber?g.minAsNumber:isNaN(g.maxAsNumber)?Number.MAX_VALUE:g.maxAsNumber;else if(!isNaN(g.maxAsNumber)&&f>g.maxAsNumber)f=
g.valueAsNumber*n>g.maxAsNumber?g.maxAsNumber:isNaN(g.minAsNumber)?Number.MIN_VALUE:g.minAsNumber;return f},d=function(f,n,g){if(!(f.disabled||f.readOnly||b(g).hasClass("step-controls"))){b.attr(f,"value",e[n].numberToString(c(f,b(g).hasClass("step-up")?1:-1,{type:n})));b(f).unbind("blur.stepeventshim").trigger("input");if(document.activeElement){if(document.activeElement!==f)try{f.focus()}catch(s){}setTimeout(function(){if(document.activeElement!==f)try{f.focus()}catch(t){}b(f).one("blur.stepeventshim",
function(){b(f).trigger("change")})},0)}}};if(a.stepArrows){var j={elementNames:["input"],setter:function(f,n,g){g();if(n=b.data(f,"step-controls"))n[f.disabled||f.readonly?"addClass":"removeClass"]("disabled-step-control")}};b.webshims.attr("disabled",j);b.webshims.attr("readonly",j)}b.webshims.addReady(function(f){a.stepArrows&&b("input",f).each(function(){var n=k(this);if(!(!e[n]||!e[n].asNumber||!a.stepArrows||a.stepArrows!==true&&!a.stepArrows[n])){var g=this,s=b(this).css("direction")=="rtl"?
{action:"insertBefore",side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"left"},t=b('<span class="step-controls"><span class="step-up" /><span class="step-down" tabindex="-1" /></span>')[s.action](this).bind("mousedown mousepress",function(v){d(g,n,v.target);return false});b(this).addClass("has-step-controls").data("step-controls",t).attr({readonly:this.readOnly,disabled:this.disabled});if(a.recalcWidth){var u=t.outerWidth(true)+(parseInt(b(this).css("padding"+s.side),10)||
0),w=parseInt(b(this).css("border"+s.side+"width"),10)||0;t.css(s.otherSide,(w+u)*-1);u++;b(this).css("width",b(this).width()-u).css("padding"+s.side,u)}}})})})();b.webshims.attr("type",{elementNames:["input"],getter:function(a){var c=k(a);return b.webshims.inputTypes[c]?c:a.type||a.getAttribute("type")},setter:true})}};if(b.webshims.addValidityRule)i();else b.support.validity===true?b.webshims.readyModules("implement-types",i,true,true):b.webshims.readyModules("validity",i,true,true)})(jQuery);
