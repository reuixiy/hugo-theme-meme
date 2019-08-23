;const userPrefers=getComputedStyle(document.documentElement).getPropertyValue('content');if(theme==="dark"){document.getElementById("theme-toggle").innerHTML="🌙";var els=[].slice.apply(document.getElementsByClassName("chroma"));for(var i=0;i<els.length;i++){els[i].className=els[i].className.replace(/ *\bchroma\b/g,"chroma-dark");}}else if(theme==="light"){document.getElementById("theme-toggle").innerHTML="🌞";var els=[].slice.apply(document.getElementsByClassName("chroma-dark"));for(var i=0;i<els.length;i++){els[i].className=els[i].className.replace(/ *\bchroma-dark\b/g,"chroma");}}else if(userPrefers==="dark"){document.documentElement.setAttribute('data-theme','dark');document.querySelector('meta[name="theme-color"]').setAttribute('content','#000');window.localStorage.setItem('theme','dark');document.getElementById("theme-toggle").innerHTML="🌙";var els=[].slice.apply(document.getElementsByClassName("chroma"));for(var i=0;i<els.length;i++){els[i].className=els[i].className.replace(/ *\bchroma\b/g,"chroma-dark");}}else if(userPrefers==="light"){document.documentElement.setAttribute('data-theme','light');document.querySelector('meta[name="theme-color"]').setAttribute('content','#fff');window.localStorage.setItem('theme','light');document.getElementById("theme-toggle").innerHTML="🌞";var els=[].slice.apply(document.getElementsByClassName("chroma-dark"));for(var i=0;i<els.length;i++){els[i].className=els[i].className.replace(/ *\bchroma-dark\b/g,"chroma");}}
function modeSwitcher(){const currentMode=document.documentElement.getAttribute('data-theme');if(currentMode==="dark"){document.documentElement.setAttribute('data-theme','light');document.querySelector('meta[name="theme-color"]').setAttribute('content','#fff');window.localStorage.setItem('theme','light');document.getElementById("theme-toggle").innerHTML="🌞";var els=[].slice.apply(document.getElementsByClassName("chroma-dark"));for(var i=0;i<els.length;i++){els[i].className=els[i].className.replace(/ *\bchroma-dark\b/g,"chroma");}}else{document.documentElement.setAttribute('data-theme','dark');document.querySelector('meta[name="theme-color"]').setAttribute('content','#000');window.localStorage.setItem('theme','dark');document.getElementById("theme-toggle").innerHTML="🌙";var els=[].slice.apply(document.getElementsByClassName("chroma"));for(var i=0;i<els.length;i++){els[i].className=els[i].className.replace(/ *\bchroma\b/g,"chroma-dark");}}}
window.addEventListener('storage',function(event){if(event.newValue==="dark"){document.documentElement.setAttribute('data-theme','dark');document.querySelector('meta[name="theme-color"]').setAttribute('content','#000');document.getElementById("theme-toggle").innerHTML="🌙";var els=[].slice.apply(document.getElementsByClassName("chroma"));for(var i=0;i<els.length;i++){els[i].className=els[i].className.replace(/ *\bchroma\b/g,"chroma-dark");}}else{document.documentElement.setAttribute('data-theme','light');document.querySelector('meta[name="theme-color"]').setAttribute('content','#fff');document.getElementById("theme-toggle").innerHTML="🌞";var els=[].slice.apply(document.getElementsByClassName("chroma-dark"));for(var i=0;i<els.length;i++){els[i].className=els[i].className.replace(/ *\bchroma-dark\b/g,"chroma");}}});;function langSwitcherOver(){document.getElementById("langs").setAttribute("style","display:block");}
function langSwitcherOut(){document.getElementById("langs").setAttribute("style","display:none");};var InstantClick=function(document,location){var $ua=navigator.userAgent,$isChromeForIOS=$ua.indexOf(' CriOS/')>-1,$hasTouch='createTouch'in document,$currentLocationWithoutHash,$urlToPreload,$preloadTimer,$lastTouchTimestamp,$history={},$xhr,$url=false,$title=false,$mustRedirect=false,$body=false,$timing={},$isPreloading=false,$isWaitingForCompletion=false,$trackedAssets=[],$useWhitelist,$preloadOnMousedown,$delayBeforePreload,$eventsCallbacks={fetch:[],receive:[],wait:[],change:[]}
function removeHash(url){var index=url.indexOf('#')
if(index<0){return url}
return url.substr(0,index)}
function getLinkTarget(target){while(target&&target.nodeName!='A'){target=target.parentNode}
return target}
function isBlacklisted(elem){do{if(!elem.hasAttribute){break}
if(elem.hasAttribute('data-instant')){return false}
if(elem.hasAttribute('data-no-instant')){return true}}
while(elem=elem.parentNode);return false}
function isWhitelisted(elem){do{if(!elem.hasAttribute){break}
if(elem.hasAttribute('data-no-instant')){return false}
if(elem.hasAttribute('data-instant')){return true}}
while(elem=elem.parentNode);return false}
function isPreloadable(a){var domain=location.protocol+'//'+location.host
if(a.target||a.hasAttribute('download')||a.href.indexOf(domain+'/')!=0||(a.href.indexOf('#')>-1&&removeHash(a.href)==$currentLocationWithoutHash)||($useWhitelist?!isWhitelisted(a):isBlacklisted(a))){return false}
return true}
function triggerPageEvent(eventType,arg1,arg2,arg3){var returnValue=false
for(var i=0;i<$eventsCallbacks[eventType].length;i++){if(eventType=='receive'){var altered=$eventsCallbacks[eventType][i](arg1,arg2,arg3)
if(altered){if('body'in altered){arg2=altered.body}
if('title'in altered){arg3=altered.title}
returnValue=altered}}
else{$eventsCallbacks[eventType][i](arg1,arg2,arg3)}}
return returnValue}
function changePage(title,body,newUrl,scrollY){document.documentElement.replaceChild(body,document.body)
if(newUrl){history.pushState(null,null,newUrl)
var hashIndex=newUrl.indexOf('#'),hashElem=hashIndex>-1&&document.getElementById(newUrl.substr(hashIndex+1)),offset=0
if(hashElem){while(hashElem.offsetParent){offset+=hashElem.offsetTop
hashElem=hashElem.offsetParent}}
scrollTo(0,offset)
$currentLocationWithoutHash=removeHash(newUrl)}
else{scrollTo(0,scrollY)}
if($isChromeForIOS&&document.title==title){document.title=title+String.fromCharCode(160)}
else{document.title=title}
instantanize()
triggerPageEvent('change',false)
var userscriptEvent=document.createEvent('HTMLEvents')
userscriptEvent.initEvent('instantclick:newpage',true,true)
dispatchEvent(userscriptEvent)}
function setPreloadingAsHalted(){$isPreloading=false
$isWaitingForCompletion=false}
function removeNoscriptTags(html){return html.replace(/<noscript[\s\S]+<\/noscript>/gi,'')}
function mousedown(e){if($lastTouchTimestamp>(+new Date-500)){return}
var a=getLinkTarget(e.target)
if(!a||!isPreloadable(a)){return}
preload(a.href)}
function mouseover(e){if($lastTouchTimestamp>(+new Date-500)){return}
var a=getLinkTarget(e.target)
if(!a||!isPreloadable(a)){return}
a.addEventListener('mouseout',mouseout)
if(!$delayBeforePreload){preload(a.href)}
else{$urlToPreload=a.href
$preloadTimer=setTimeout(preload,$delayBeforePreload)}}
function touchstart(e){$lastTouchTimestamp=+new Date
var a=getLinkTarget(e.target)
if(!a||!isPreloadable(a)){return}
if($preloadOnMousedown){a.removeEventListener('mousedown',mousedown)}
else{a.removeEventListener('mouseover',mouseover)}
preload(a.href)}
function click(e){var a=getLinkTarget(e.target)
if(!a||!isPreloadable(a)){return}
if(e.which>1||e.metaKey||e.ctrlKey){return}
e.preventDefault()
display(a.href)}
function mouseout(){if($preloadTimer){clearTimeout($preloadTimer)
$preloadTimer=false
return}
if(!$isPreloading||$isWaitingForCompletion){return}
$xhr.abort()
setPreloadingAsHalted()}
function readystatechange(){if($xhr.readyState<4){return}
if($xhr.status==0){return}
$timing.ready=+new Date-$timing.start
if($xhr.getResponseHeader('Content-Type').match(/\/(x|ht|xht)ml/)){var doc=document.implementation.createHTMLDocument('')
doc.documentElement.innerHTML=removeNoscriptTags($xhr.responseText)
$title=doc.title
$body=doc.body
var alteredOnReceive=triggerPageEvent('receive',$url,$body,$title)
if(alteredOnReceive){if('body'in alteredOnReceive){$body=alteredOnReceive.body}
if('title'in alteredOnReceive){$title=alteredOnReceive.title}}
var urlWithoutHash=removeHash($url)
$history[urlWithoutHash]={body:$body,title:$title,scrollY:urlWithoutHash in $history?$history[urlWithoutHash].scrollY:0}
var elems=doc.head.children,found=0,elem,data
for(var i=elems.length-1;i>=0;i--){elem=elems[i]
if(elem.hasAttribute('data-instant-track')){data=elem.getAttribute('href')||elem.getAttribute('src')||elem.innerHTML
for(var j=$trackedAssets.length-1;j>=0;j--){if($trackedAssets[j]==data){found++}}}}
if(found!=$trackedAssets.length){$mustRedirect=true}}
else{$mustRedirect=true}
if($isWaitingForCompletion){$isWaitingForCompletion=false
display($url)}}
function instantanize(isInitializing){document.body.addEventListener('touchstart',touchstart,true)
if($preloadOnMousedown){document.body.addEventListener('mousedown',mousedown,true)}
else{document.body.addEventListener('mouseover',mouseover,true)}
document.body.addEventListener('click',click,true)
if(!isInitializing){var scripts=document.body.getElementsByTagName('script'),script,copy,parentNode,nextSibling
for(i=0,j=scripts.length;i<j;i++){script=scripts[i]
if(script.hasAttribute('data-no-instant')){continue}
copy=document.createElement('script')
if(script.src){copy.src=script.src}
if(script.innerHTML){copy.innerHTML=script.innerHTML}
parentNode=script.parentNode
nextSibling=script.nextSibling
parentNode.removeChild(script)
parentNode.insertBefore(copy,nextSibling)}}}
function preload(url){if(!$preloadOnMousedown&&'display'in $timing&&+new Date-($timing.start+$timing.display)<100){return}
if($preloadTimer){clearTimeout($preloadTimer)
$preloadTimer=false}
if(!url){url=$urlToPreload}
if($isPreloading&&(url==$url||$isWaitingForCompletion)){return}
$isPreloading=true
$isWaitingForCompletion=false
$url=url
$body=false
$mustRedirect=false
$timing={start:+new Date}
triggerPageEvent('fetch')
$xhr.open('GET',url)
$xhr.send()}
function display(url){if(!('display'in $timing)){$timing.display=+new Date-$timing.start}
if($preloadTimer||!$isPreloading){if($preloadTimer&&$url&&$url!=url){location.href=url
return}
preload(url)
triggerPageEvent('wait')
$isWaitingForCompletion=true
return}
if($isWaitingForCompletion){location.href=url
return}
if($mustRedirect){location.href=$url
return}
if(!$body){triggerPageEvent('wait')
$isWaitingForCompletion=true
return}
$history[$currentLocationWithoutHash].scrollY=pageYOffset
setPreloadingAsHalted()
changePage($title,$body,$url)}
var supported='pushState'in history&&(!$ua.match('Android')||$ua.match('Chrome/'))&&location.protocol!="file:"
function init(){if($currentLocationWithoutHash){return}
if(!supported){triggerPageEvent('change',true)
return}
for(var i=arguments.length-1;i>=0;i--){var arg=arguments[i]
if(arg===true){$useWhitelist=true}
else if(arg=='mousedown'){$preloadOnMousedown=true}
else if(typeof arg=='number'){$delayBeforePreload=arg}}
$currentLocationWithoutHash=removeHash(location.href)
$history[$currentLocationWithoutHash]={body:document.body,title:document.title,scrollY:pageYOffset}
var elems=document.head.children,elem,data
for(var i=elems.length-1;i>=0;i--){elem=elems[i]
if(elem.hasAttribute('data-instant-track')){data=elem.getAttribute('href')||elem.getAttribute('src')||elem.innerHTML
$trackedAssets.push(data)}}
$xhr=new XMLHttpRequest()
$xhr.addEventListener('readystatechange',readystatechange)
instantanize(true)
triggerPageEvent('change',true)
addEventListener('popstate',function(){var loc=removeHash(location.href)
if(loc==$currentLocationWithoutHash){return}
if(!(loc in $history)){location.href=location.href
return}
$history[$currentLocationWithoutHash].scrollY=pageYOffset
$currentLocationWithoutHash=loc
changePage($history[loc].title,$history[loc].body,false,$history[loc].scrollY)})}
function on(eventType,callback){$eventsCallbacks[eventType].push(callback)}
return{supported:supported,init:init,on:on}}(document,location);;