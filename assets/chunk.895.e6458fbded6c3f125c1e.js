(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[895],{81:(e,t,r)=>{"use strict"
function i(e,t,r){return(t="symbol"==typeof(i=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e
var i}function s(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function n(e,t,r,i,s){var n={}
return Object.keys(i).forEach(function(e){n[e]=i[e]}),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=r.slice().reverse().reduce(function(r,i){return i(e,t,r)||r},n),s&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(s):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}r.d(t,{_:()=>n,a:()=>s,b:()=>i})},191:(e,t,r)=>{"use strict"
const i=(0,r(1113).vs)("WarpDriveRuntimeConfig",{debug:{}}),s=function(){try{return globalThis.sessionStorage}catch{return}}(),n=s?.getItem("WarpDriveRuntimeConfig")
n&&Object.assign(i,JSON.parse(n))},434:(e,t,r)=>{"use strict"
r(1603),r(941)},793:(e,t,r)=>{"use strict"
r.d(t,{I:()=>m,a:()=>a,c:()=>k,d:()=>p,e:()=>w,f:()=>f,g:()=>g,s:()=>y,u:()=>R})
var i=r(8382),s=r(1113)
function n(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return e.clone=()=>new Headers(e),e.toJSON=()=>Array.from(e),e}function a(e){const{headers:t,ok:r,redirected:i,status:s,statusText:n,type:a,url:l}=e
return o(t),{headers:t,ok:r,redirected:i,status:s,statusText:n,type:a,url:l}}new Map([["duplex",["half"]],["records","array"],["data","json"],["body",{type:"string",klass:["Blob","ArrayBuffer","TypedArray","DataView","FormData","URLSearchParams","ReadableStream"]}],["disableTestWaiter","boolean"],["options","object"],["cacheOptions","object"],["op","string"],["store","object"],["url","string"],["cache",["default","force-cache","no-cache","no-store","only-if-cached","reload"]],["credentials",["include","omit","same-origin"]],["destination",["","object","audio","audioworklet","document","embed","font","frame","iframe","image","manifest","paintworklet","report","script","sharedworker","style","track","video","worker","xslt"]],["headers","headers"],["integrity","string"],["keepalive","boolean"],["method",["QUERY","GET","PUT","PATCH","DELETE","POST","OPTIONS","HEAD","CONNECT","TRACE"]],["mode",["same-origin","cors","navigate","no-cors"]],["redirect",["error","follow","manual"]],["referrer","string"],["signal","AbortSignal"],["controller","AbortController"],["referrerPolicy",["","same-origin","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]]]),(0,s.L1)("IS_FROZEN",Symbol("FROZEN")),(0,s.L1)("IS_COLLECTION",Symbol.for("Collection")),new Set([])
class l{constructor(e,t,r=!1){n(this,"hasSetStream",!1),n(this,"hasSetResponse",!1),n(this,"hasSubscribers",!1),n(this,"stream",k()),n(this,"response",null),n(this,"nextCalled",0),this.isRoot=r,this.requestId=t.id,this.controller=e.controller||t.controller,this.stream.promise.sizeHint=0,e.controller&&(e.controller!==t.controller&&t.controller.signal.addEventListener("abort",()=>{this.controller.abort(t.controller.signal.reason)}),delete e.controller)
let i=Object.assign({signal:this.controller.signal},e)
e.headers&&o(e.headers),this.enhancedRequest=i,this.request=e,this.god=t,this.stream.promise=this.stream.promise.then(e=>(this.god.stream===e&&this.hasSubscribers&&(this.god.stream=null),e))}get hasRequestedStream(){return this.god.hasRequestedStream}getResponse(){return this.hasSetResponse?this.response:1===this.nextCalled?this.god.response:null}getStream(){if(this.isRoot&&(this.god.hasRequestedStream=!0),!this.hasSetResponse){const e=this.god.response?.headers?.get("content-length")
this.stream.promise.sizeHint=e?parseInt(e,10):0}return this.hasSubscribers=!0,this.stream.promise}abort(e){this.controller.abort(e)}setStream(e){this.hasSetStream||(this.hasSetStream=!0,e instanceof Promise||(this.god.stream=e),this.stream.resolve(e))}resolveStream(){this.setStream(1===this.nextCalled?this.god.stream:null)}setResponse(e){if(!this.hasSetResponse)if(this.hasSetResponse=!0,e instanceof Response){let t=a(e)
this.response=t,this.god.response=t
const r=e.headers?.get("content-length")
this.stream.promise.sizeHint=r?parseInt(r,10):0}else this.response=e,this.god.response=e}}class c{constructor(e,t){this.id=e.requestId,this.___owner=e,this.request=e.enhancedRequest,this._isCacheHandler=t,this._finalized=!1}setStream(e){this.___owner.setStream(e)}setResponse(e){this.___owner.setResponse(e)}setIdentifier(e){this.___owner.god.identifier=e}get hasRequestedStream(){return this.___owner.hasRequestedStream}_finalize(){this._finalized=!0}}const u=(0,s.vs)("PromiseCache",new WeakMap),d=(0,s.vs)("RequestMap",new Map)
function h(e,t){d.set(e,t)}function f(e){d.delete(e)}function p(e){return d.get(e)}function y(e,t){u.set(e,t)}function g(e){return u.get(e)}const m=(0,s.L1)("IS_CACHE_HANDLER",Symbol("IS_CACHE_HANDLER"))
function _(e){return e&&!0===e[i.k0]}function b(e,t,r){return _(t)?t:r?{[i.k0]:!0,request:e.request,response:e.getResponse(),error:t}:{[i.k0]:!0,request:e.request,response:e.getResponse(),content:t}}function v(e){return new DOMException(e||"The user aborted a request.","AbortError")}function w(e,t,r,s){const n=new l(t,s,0===r),o=(a=e[r],0===r&&Boolean(a[m]))
var a
const u=new c(n,o)
let d
try{d=e[r].request(u,function(t){return n.nextCalled++,w(e,t,r+1,s)}),o&&u._finalize(),d&&o&&(d instanceof Promise||(h(n.requestId,{isError:!1,result:b(n,d,!1)}),d=Promise.resolve(d)))}catch(e){o&&h(n.requestId,{isError:!0,result:b(n,e,!0)}),d=Promise.reject(e)}const f=function(e){const t=k()
let r,{promise:s}=t
return s=s.finally(()=>{e.resolveStream(),r&&r.forEach(e=>e())}),s.onFinalize=e=>{r=r||[],r.push(e)},s[i.J6]=!0,s.getStream=()=>e.getStream(),s.abort=t=>{e.abort(v(t))},s.id=e.requestId,s.lid=e.god.identifier,s.requester=e.god.requester,t.promise=s,t}(n)
return p=d,Boolean(p&&p instanceof Promise&&!0===p[i.J6])?function(e,t,r){return e.setStream(t.getStream()),t.then(t=>{const s={[i.k0]:!0,request:e.request,response:t.response,content:t.content}
r.resolve(s)},t=>{if(_(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[i.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,r.reject(t)}),r.promise}(n,d,f):function(e,t,r){return t.then(t=>{if(e.controller.signal.aborted)return void r.reject(v(e.controller.signal.reason))
_(t)&&(e.setStream(e.god.stream),t=t.content)
const s={[i.k0]:!0,request:e.request,response:e.getResponse(),content:t}
r.resolve(s)},t=>{if(_(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[i.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,r.reject(t)}),r.promise}(n,d,f)
var p}function k(){let e,t
const r=new Promise((r,i)=>{e=r,t=i})
return{resolve:e,reject:t,promise:r}}function R(e,t){return e[i.J6]=!0,e.getStream=t.getStream,e.abort=t.abort,e.onFinalize=t.onFinalize,e.id=t.id,e.lid=t.lid,e.requester=t.requester,e}},941:(e,t)=>{"use strict"
Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
class r{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const r=this.doWork(e)
return this.set(e,r),r}set(e,t){if(this.state.size===this.size)for(const[r]of this.state){this.state.delete(r)
break}this.state.set(e,t)}clear(){this.state.clear()}}const i=/[ _]/g,s=/([a-z\d])([A-Z])/g,n=new r(e=>e.replace(s,"$1_$2").toLowerCase().replace(i,"-")),o={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]},a=/(\-|\_|\.|\s)+(.)?/g,l=/(^|\/)([A-Z])/g,c=new r(e=>e.replace(a,(e,t,r)=>r?r.toUpperCase():"").replace(l,e=>e.toLowerCase())),u=/([a-z\d])([A-Z]+)/g,d=/\-|\s+/g,h=new r(e=>e.replace(u,"$1_$2").replace(d,"_").toLowerCase()),f=/(^|\/)([a-z\u00C0-\u024F])/g,p=new r(e=>e.replace(f,e=>e.toUpperCase()))
function y(e){return p.get(e)}const g=/^\s*$/,m=/([\w/-]+[_/\s-])([a-z\d]+$)/,_=/([\w/\s-]+)([A-Z][a-z\d]*$)/,b=/[A-Z][a-z\d]*$/,v=new r(e=>function(e){return O(e,A,S)}(e)),w=new r(e=>function(e){return O(e,E,R)}(e)),k=new Set(o.uncountable),R=new Map,S=new Map,A=new Map(o.singular.reverse()),E=new Map(o.plurals.reverse())
function M(e){k.add(e.toLowerCase())}function C(e){e.forEach(e=>{R.set(e[0].toLowerCase(),e[1]),R.set(e[1].toLowerCase(),e[1]),S.set(e[1].toLowerCase(),e[0]),S.set(e[0].toLowerCase(),e[0])})}function T(){v.clear(),w.clear(),k.clear(),R.clear(),S.clear(),A.clear(),E.clear()}function q(e,t){const r=[e,...t.entries()]
t.clear(),r.forEach(e=>{t.set(e[0],e[1])})}function O(e,t,r){if(!e||g.test(e))return e
const i=e.toLowerCase()
if(k.has(i))return e
const s=m.exec(e)||_.exec(e),n=s?s[2].toLowerCase():null
if(n&&k.has(n))return e
const o=b.test(e)
for(let[a,l]of r)if(i.match(a+"$"))return o&&n&&r.has(n)&&(l=y(l),a=y(a)),e.replace(new RegExp(a,"i"),l)
for(const[a,l]of t)if(a.test(e))return e.replace(a,l)
return e}C(o.irregularPairs),t.camelize=function(e){return c.get(e)},t.capitalize=y,t.clear=function(){v.clear(),w.clear()},t.clearRules=T,t.dasherize=function(e){return n.get(e)},t.irregular=function(e,t){R.set(e.toLowerCase(),t),R.set(t.toLowerCase(),t),S.set(t.toLowerCase(),e),S.set(e.toLowerCase(),e)},t.loadIrregular=C,t.loadUncountable=function(e){e.forEach(e=>{M(e)})},t.plural=function(e,t){E.has(e)&&E.delete(e),q([e,t],E)},t.pluralize=function(e){return e?w.get(e):""},t.resetToDefaults=function(){T(),o.uncountable.forEach(e=>k.add(e)),o.singular.forEach(e=>A.set(e[0],e[1])),o.plurals.forEach(e=>E.set(e[0],e[1])),C(o.irregularPairs)},t.setMaxLRUCacheSize=function(e){c.size=e,h.size=e,p.size=e,n.size=e},t.singular=function(e,t){A.has(e)&&A.delete(e),q([e,t],A)},t.singularize=function(e){return e?v.get(e):""},t.uncountable=M,t.underscore=function(e){return h.get(e)}},1113:(e,t,r)=>{"use strict"
r.d(t,{L1:()=>l,Yj:()=>c,dN:()=>h,dV:()=>u,ml:()=>f,vs:()=>d})
const i="@warp-drive/core",s=globalThis,n=s.__warpDrive_universalCache=s.__warpDrive_universalCache??{}
s[i]=s[i]??{__version:"5.8.0"}
const o=s[i],a=o.__warpDrive_ModuleScopedCaches??{}
if(o.__warpDrive_hasOtherCopy)throw new Error("Multiple copies of WarpDrive detected, the application will malfunction.")
function l(e,t){return t}function c(e){return a[`(transient) ${e}`]??null}function u(e,t){return a[`(transient) ${e}`]=t}function d(e,t){return t}function h(e){return n[`(transient) ${e}`]??null}function f(e,t){return n[`(transient) ${e}`]=t}o.__warpDrive_hasOtherCopy=!0},1505:(e,t,r)=>{"use strict"
r.d(t,{FA:()=>i.a,RX:()=>i.f,Rh:()=>i.d,TP:()=>i.j,WX:()=>i.l,Yj:()=>i.h,di:()=>i.n,fV:()=>i.s,i:()=>i.k,o:()=>i.r,pG:()=>i.b,v7:()=>i.g,wT:()=>i.i})
var i=r(9471)},2139:(e,t,r)=>{"use strict"
function i(e,t){let r=e.load(t)
if(!r)throw new Error(t+" must export an initializer.")
let i=r.default
if(!i)throw new Error(t+" must have a default export")
return i.name||(i.name=t.slice(t.lastIndexOf("/")+1)),i}function s(e,t,r){var s=t+"/initializers/",n=t+"/instance-initializers/",o=[],a=[]
let l
l=r?{names:()=>Object.keys(r),load:e=>r[e]}:{names(){let e=globalThis.requirejs
if(!e||!e._eak_seen)throw new Error("No global AMD loader found. To use loadInitializers without a global AMD loader you must provide explicit modules")
return Object.keys(e._eak_seen)},load:e=>globalThis.require(e,null,null,!0)}
for(let i of l.names())i.startsWith(s)&&!i.endsWith("-test")?o.push(i):i.startsWith(n)&&!i.endsWith("-test")&&a.push(i)
!function(e,t,r){for(let s of r)e.initializer(i(t,s))}(e,l,o),function(e,t,r){for(let s of r)e.instanceInitializer(i(t,s))}(e,l,a)}r.r(t),r.d(t,{default:()=>s})},2492:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{BooleanTransform:()=>n,DateTransform:()=>o,NumberTransform:()=>l,StringTransform:()=>c,default:()=>s})
var i=r(4471)
const s=r.n(i)()
class n{deserialize(e,t){return null==e&&!0===t?.allowNull?null:"boolean"==typeof e?e:"string"==typeof e?/^(true|t|1)$/i.test(e):"number"==typeof e&&1===e}serialize(e,t){return null==e&&!0===t?.allowNull?null:Boolean(e)}static create(){return new this}}class o{deserialize(e,t){if("string"==typeof e){let t=e.indexOf("+")
return-1!==t&&e.length-5===t?(t+=3,new Date(e.slice(0,t)+":"+e.slice(t))):new Date(e)}return"number"==typeof e?new Date(e):null==e?e:null}serialize(e,t){return e instanceof Date&&!isNaN(e)?e.toISOString():null}static create(){return new this}}function a(e){return e==e&&e!==1/0&&e!==-1/0}class l{deserialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return a(t)?t:null}}serialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return a(t)?t:null}}static create(){return new this}}class c{deserialize(e,t){return e||""===e?String(e):null}serialize(e,t){return e||""===e?String(e):null}static create(){return new this}}},3299:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>m})
var i,s,n,o,a,l=r(81),c=r(1223),u=r(2735),d=r.n(u),h=r(9553),f=r(1603)
const p="undefined"!=typeof FastBoot,y="routeDidChange",g=["separator","prepend","replace"]
let m=(i=(0,u.service)("router"),s=(0,u.service)("-document"),n=class extends(d()){constructor(e){if(super(e),(0,l.a)(this,"router",o,this),(0,l.a)(this,"document",a,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)}),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const r=e.resolveRegistration("config:environment")
"object"==typeof(t=r)&&null!==t&&"pageTitle"in t&&g.forEach(e=>{if(!(0,h.isEmpty)(r.pageTitle[e])){const t=r.pageTitle[e]
this._defaultConfig[e]=t}})}var t
this.router.on(y,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,r=this._defaultConfig.prepend,i=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=i&&(e.replace=i)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const r=this.tokens.indexOf(t),i=[...this.tokens],s=t.previous
return e.previous=s,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),i.splice(r,1,e),void(this.tokens=i)}const r=this.tokens.slice(-1)[0]
r&&(e.previous=r??null,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:r,previous:i}=t
r&&(r.previous=i),i&&(i.next=r),t.previous=t.next=null
const s=[...this.tokens]
s.splice(s.indexOf(t),1),this.tokens=s}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const r=[]
for(;t--;){const i=e[t]
if(i){if(i.replace){r.unshift(i)
break}r.unshift(i)}}return r}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,r=[]
const i=[r],s=[]
return e.forEach(e=>{e.front?s.unshift(e):e.prepend?(t&&(t=!1,r=[],i.push(r)),r.unshift(e)):(t||(t=!0,r=[],i.push(r)),r.push(e))}),s.concat(i.reduce((e,t)=>e.concat(t),[]))}toString(){const e=this.sortedTokens,t=[]
for(let r=0,i=e.length;r<i;r++){const s=e[r]
s&&s.title&&(t.push(s.title),r+1<i&&t.push(s.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(y,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
p?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){p||(0,f.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find(t=>t.id===e)}updateFastbootTitle(e){if(!p)return
const t=this.document.head,r=t.childNodes
for(let n=0;n<r.length;n++){const e=r[n]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const i=this.document.createElement("title"),s=this.document.createTextNode(e)
i.appendChild(s),t.appendChild(i)}titleDidUpdate(e){}},o=(0,l._)(n.prototype,"router",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(n.prototype,"document",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},3445:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>y})
var i=r(2663),s=r(1130),n=r(1223),o=r(1115)
function a(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=new WeakMap,c=new WeakMap
let u=class{constructor(e,t){a(this,"args",void 0),this.args=t,l.set(this,!1),c.set(this,!1)}get isDestroying(){return l.get(this)||!1}get isDestroyed(){return c.get(this)||!1}willDestroy(){}}
class d{constructor(e){a(this,"owner",void 0),this.owner=e}createComponent(e,t){return new e(this.owner,t.named)}getContext(e){return e}}const h=(0,i.capabilities)("3.13",{destructor:!0,asyncLifecycleCallbacks:!1,updateHook:!1})
function f(e){e.isDestroyed||((0,s.destroy)(e),function(e){c.set(e,!0)}(e))}class p extends d{constructor(...e){super(...e),a(this,"capabilities",h)}destroyComponent(e){e.isDestroying||(function(e){l.set(e,!0)}(e),(0,n.schedule)("actions",e,e.willDestroy),(0,n.schedule)("destroy",this,f,e))}}class y extends u{constructor(e,t){super(e,t),(0,o.setOwner)(this,e)}}(0,i.setComponentManager)(e=>new p(e),y)},4467:(e,t,r)=>{"use strict"
r(1603)
var i=r(5546)
const s=new Set(["max-age","s-maxage","stale-if-error","stale-while-revalidate"])
function n(e){const t=Number.parseInt(e)
return Number.isNaN(t)||t<0?0:t}new i.qK(e=>{let t="",r="",i=!0
const o={}
for(let a=0;a<e.length;a++){const l=e.charAt(a)
if(","!==l){if("="===l)i=!1
else{if(" "===l||"\t"===l||"\n"===l)continue
i?t+=l:r+=l}a===e.length-1&&(o[t]=!s.has(t)||n(r))}else i=!0,o[t]=!s.has(t)||n(r),t="",r=""}return o},200)},5266:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>d})
var i,s,n,o=r(81),a=r(2735),l=r(336),c=r.n(l),u=r(4666)
let d=(i=(0,a.service)("page-title"),s=class extends(c()){constructor(e){super(e),(0,o.a)(this,"tokens",n,this),(0,o.b)(this,"tokenId",(0,u.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},n=(0,o._)(s.prototype,"tokens",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)},5348:(e,t,r)=>{"use strict"
r.d(t,{sw:()=>s,ud:()=>i.c})
var i=r(793)
const s=function(e){return e}},5546:(e,t,r)=>{"use strict"
r.d(t,{_k:()=>a,qK:()=>i})
class i{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const r=this.doWork(e)
return this.set(e,r),r}set(e,t){if(this.state.size===this.size)for(const[r]of this.state){this.state.delete(r)
break}this.state.set(e,t)}clear(){this.state.clear()}}const s=/[ _]/g,n=/([a-z\d])([A-Z])/g,o=new i(e=>e.replace(n,"$1_$2").toLowerCase().replace(s,"-"))
function a(e){return o.get(e)}},6316:(e,t,r)=>{"use strict"
r.d(t,{A:()=>a,O:()=>l,S:()=>p,a:()=>q,b:()=>E,c:()=>y,d:()=>M,e:()=>R,g:()=>T,j:()=>d,k:()=>m,l:()=>v,m:()=>C,n:()=>w,o:()=>g,p:()=>b,q:()=>A,r:()=>S,t:()=>_,u:()=>c})
var i,s=r(1113),n=(r(8382),r(793))
function o(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=(0,s.L1)("#[]",Symbol("#[]")),l=(0,s.L1)("#{}",Symbol("#{}"))
function c(e){const t=e({wellknown:{Array:a}});(0,s.dV)("signalHooks",t)}function u(e,t){return(0,s.Yj)("signalHooks").createSignal(e,t)}function d(){return(0,s.Yj)("signalHooks").willSyncFlushWatchers()}const h={isInitializer:!0}
function f(e){return"object"==typeof e&&null!==e&&Object.getPrototypeOf(e)===h}const p=(0,s.L1)("Signals",Symbol("Signals"))
function y(e){return e[p]||function(e){e[p]=new Map}(e),e[p]}function g(e,t,r,i){const s={key:r,context:t,signal:u(t,r),value:f(i)?i.value.call(t):i,isStale:!1}
return e.set(r,s),s}function m(e,t,r,i){let s=b(e,r)
return s||(s=g(e,t,r,i)),s}function _(e,t,r,i){{const n=function(e,t,r){return(0,s.Yj)("signalHooks").createMemo(e,t,r)}(t,r,i)
return e.set(r,n),n}}function b(e,t){return e?.get(t)}function v(e){k?.signals.add(e),function(e){(0,s.Yj)("signalHooks").consumeSignal(e)}(e.signal)}function w(e){e&&(e.isStale=!0,function(e){(0,s.Yj)("signalHooks").notifySignal(e)}(e.signal))}let k=null
function R(e,t,r,i){let s=b(e,r)
return s||(s=g(e,t,r,i)),v(s),s}function S(e,t,r,i){let s=b(e,r)
return s||(s=g(e,t,r,i),s.isStale=!0),v(s),s}function A(e,t){return{enumerable:!0,configurable:!1,get(){const r=R(y(this),this,e,t)
return r.isStale=!1,r.value},set(r){const i=m(y(this),this,e,t)
i.value!==r&&(i.value=r,w(i))}}}function E(e,t,r){Object.defineProperty(e,t,A(t,r))}function M(e,t,r){const i=A(t,r)
i.enumerable=!1,Object.defineProperty(e,t,i)}function C(e,t,r){const i=r.get
return r.get=function(){const e=y(this)
let r=e.get(t)
return r||(r=_(e,this,t,i.bind(this))),r()},r}function T(e,t,r){const i=r.get,s=r.set,n=r.isLocal
return r.get=function(){const e=y(this)
let r=b(e,t)
return r?r.isStale&&(r.isStale=!1,r.value=i.call(this)):r=g(e,this,t,i.call(this)),v(r),r.value},s&&(r.set=function(e){const r=y(this)
let i=b(r,t)
i||(i=g(r,this,t,void 0),i.isStale=!0),s.call(this,e),n&&(i.isStale=!0,w(i))}),r}function q(e,t,r){const i=Object.assign({enumerable:!0,configurable:!1},T(0,t,r))
Object.defineProperty(e,t,i)}const O=new WeakMap
function D(e){return e instanceof DOMException&&"AbortError"===e.name}class j{_trigger(){if(this._triggered)return
this._triggered=!0
const e=this._future.getStream()
e.sizeHint&&(this._sizeHint=e.sizeHint),this.promise=e.then(e=>e?async function(e,t){const r=t,i=e.getReader()
let s=0,n=null!==r._stream&&r._stream.readable.locked,o=n,a=r._stream?.writable.getWriter()
const l=[]
for(r._isPending=!1,r._isStarted=!0,r._startTime=performance.now();;){const{value:e,done:t}=await i.read()
if(t)break
if(s+=e.byteLength,r._bytesLoaded=s,r._lastPacketTime=performance.now(),n=n||null!==r._stream&&r._stream.readable.locked,n){if(!o){o=!0,a=r._stream.writable.getWriter()
for(const e of l)await a.ready,await a.write(e)
l.length=0}await a.ready,await a.write(e)}else l.push(e)}o?(await a.ready,await a.close()):r._stream&&(await r._stream.readable.cancel("The Stream Has Already Ended"),r._stream=null)
const c=performance.now()
r._endTime=c,r._isComplete=!0,r._isStarted=!1}(e,this):(this._isPending=!1,void(this._isComplete=!0)),e=>{this._isPending=!1,this._isStarted=!1,D(e)&&(this._isCancelled=!0,this._isComplete=!0),this._isErrored=!0,this._error=e})}get isPending(){return this._trigger(),this._isPending}get sizeHint(){return this._trigger(),this._sizeHint}get stream(){if(this._trigger(),!this._stream){if(this._isComplete||this._isCancelled||this._isErrored)return null
this._stream=new TransformStream}return this._stream.readable}get isStarted(){return this._trigger(),this._isStarted}get bytesLoaded(){return this._trigger(),this._bytesLoaded}get startTime(){return this._trigger(),this._startTime}get endTime(){return this._trigger(),this._endTime}get lastPacketTime(){return this._trigger(),this._lastPacketTime}get isComplete(){return this._trigger(),this._isComplete}get isCancelled(){return this._trigger(),this._isCancelled}get isErrored(){return this._trigger(),this._isErrored}get error(){return this._trigger(),this._error}get elapsedTime(){return(this.endTime||this.lastPacketTime)-this.startTime}get completedRatio(){return this.sizeHint?this.bytesLoaded/this.sizeHint:0}get remainingRatio(){return 1-this.completedRatio}get duration(){return this.endTime-this.startTime}get speed(){return this.bytesLoaded/(this.elapsedTime/1e3)}constructor(e){o(this,"_stream",null),o(this,"_future",void 0),o(this,"_triggered",!1),o(this,"promise",null),o(this,"abort",()=>{this._future.abort()}),this._future=e}}M(j.prototype,"_isPending",!0),M(j.prototype,"_isStarted",!1),M(j.prototype,"_isComplete",!1),M(j.prototype,"_isCancelled",!1),M(j.prototype,"_isErrored",!1),M(j.prototype,"_error",null),M(j.prototype,"_sizeHint",0),M(j.prototype,"_bytesLoaded",0),M(j.prototype,"_startTime",0),M(j.prototype,"_endTime",0),M(j.prototype,"_lastPacketTime",0)
const N={}
function x(e,t,r){const i=Object.assign({},t),s=Object.assign({},i.cacheOptions)
return r?s.reload=!0:!1===r?(delete s.reload,s.backgroundReload=!0):(delete s.backgroundReload,delete s.reload),i.cacheOptions=s,e.request(i)}function P(e,t,r){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of r)i=s(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}E(N,"reason",null),E(N,"value",null),E(N,"result",null),E(N,"error",null),E(N,"status","pending"),E(N,"isPending",!0),E(N,"isLoading",!0),E(N,"isSuccess",!1),E(N,"isError",!1),E(N,"request",null),E(N,"response",null),Object.defineProperty(N,"isCancelled",{get(){return this.isError&&D(this.reason)}}),Object.defineProperty(N,"loadingState",{get(){return this._loadingState||(this._loadingState=new j(this._request)),this._loadingState}})
const F=Symbol.dispose||Symbol.for("dispose")
class I{constructor(e,t){o(this,"_requester",void 0),o(this,"retry",async()=>{this._maybeUpdate("reload"),await this._localRequest}),o(this,"refresh",async()=>{this._maybeUpdate("refresh"),await this._latestRequest}),this._args=t,this.store=e,this._subscribedTo=null,this._subscription=null,this._intervalStart=null,this._invalidated=!1,this._nextInterval=null,this._requester=null,this.isDestroyed=!1,this[F]=z,this._installListeners(),this._beginPolling()}async _beginPolling(){try{this.isIdle||await this.request}catch{}finally{this.isDestroyed||this._scheduleInterval()}}get isIdle(){const{request:e,query:t}=this._args
return Boolean(!e&&!t)}get autorefreshTypes(){const{autorefresh:e}=this._args
let t
return t=!0===e?["online","invalid"]:"string"==typeof e?e.split(","):[],new Set(t)}async _scheduleInterval(){const{autorefreshThreshold:e}=this._args
if("undefined"!=typeof window&&"number"==typeof e&&e>0&&this.autorefreshTypes.has("interval")&&null===this._intervalStart){if(this._latestRequest){try{await this._latestRequest}catch{}if(this.isDestroyed)return}this._intervalStart=Date.now(),this._nextInterval=setTimeout(()=>{this._maybeUpdate()},e)}}_clearInterval(){this._nextInterval&&(clearTimeout(this._nextInterval),this._intervalStart=null)}_updateSubscriptions(){if(this.isIdle)return
const e=this._request.lid
if(this._subscribedTo===e)return
this._removeSubscriptions()
const t=this._getRequester()
this._requester=t,e&&L(t)&&(this._subscribedTo=e,this._subscription=t.notifications.subscribe(e,(r,i)=>{if(!this._isUpdating)switch(i){case"invalidated":this.autorefreshTypes.has("invalid")&&(this._invalidated=!0,this._maybeUpdate())
break
case"state":{const r=t.requestManager._deduped.get(e),i=r?.priority,s=this.reqState
i?i.blocking&&!s.isLoading?(this.isRefreshing=!1,this._maybeUpdate("policy",!0)):this.isRefreshing=!0:this.isRefreshing=!1}}}))}_removeSubscriptions(){const e=this._requester
this._subscription&&e&&L(e)&&(e.notifications.unsubscribe(this._subscription),this._subscribedTo=null,this._subscription=null,this._requester=null)}_installListeners(){"undefined"!=typeof window&&(this.isOnline=window.navigator.onLine,this._unavailableStart=this.isOnline?null:Date.now(),this.isHidden="hidden"===document.visibilityState,this._onlineChanged=e=>{this.isOnline="online"===e.type,"offline"===e.type&&null===this._unavailableStart&&(this._unavailableStart=Date.now()),this._maybeUpdate()},this._backgroundChanged=()=>{const e="hidden"===document.visibilityState
this.isHidden=e,e&&null===this._unavailableStart&&(this._unavailableStart=Date.now()),this._maybeUpdate()},window.addEventListener("online",this._onlineChanged,{passive:!0,capture:!0}),window.addEventListener("offline",this._onlineChanged,{passive:!0,capture:!0}),document.addEventListener("visibilitychange",this._backgroundChanged,{passive:!0,capture:!0}))}_maybeUpdate(e,t){if(this.isIdle)return
const{reqState:r}=this
if(r.isPending)return
if(!Boolean(this.isOnline&&!this.isHidden&&(e||this.autorefreshTypes.size))){if(!t&&e&&"_invalidated"!==e)throw new Error("Reload not available: the network is not online or the tab is hidden")
return}const{autorefreshTypes:i}=this
let s=this._invalidated||Boolean(e)
if(!s&&i.has("online")){const{_unavailableStart:e}=this,{autorefreshThreshold:t}=this._args,r="number"==typeof t?t:3e4
s=Boolean(e&&Date.now()-e>r)}if(!s&&i.has("interval")){const{_intervalStart:e}=this,{autorefreshThreshold:t}=this._args
e&&"number"==typeof t&&t>0&&(s=Boolean(Date.now()-e>=t))}if(this._unavailableStart=null,this._invalidated=!1,s){this._clearInterval(),this._isUpdating=!0
const t=("_invalidated"===e?null:e)??this._args.autorefreshBehavior??"policy",i=this._getRequester()
switch(r._request.requester||(r._request.requester=i),t){case"reload":this._latestRequest=r.reload()
break
case"refresh":this._latestRequest=r.refresh()
break
case"policy":this._latestRequest=r.refresh(!0)}"refresh"!==t&&(this._localRequest=this._latestRequest),this._scheduleInterval(),this._latestRequest.finally(()=>{this._isUpdating=!1})}}_getRequester(){return this._args.request?.requester?this._args.request.requester:this.store}get errorFeatures(){return{isHidden:this.isHidden,isOnline:this.isOnline,retry:this.retry}}get contentFeatures(){const e={isHidden:this.isHidden,isOnline:this.isOnline,reload:this.retry,refresh:this.refresh,isRefreshing:this.isRefreshing,latestRequest:this._latestRequest}
return e.isRefreshing&&(e.abort=()=>{this._latestRequest?.abort()}),e}get _request(){const{request:e,query:t}=this._args,{_localRequest:r,_originalRequest:i,_originalQuery:s}=this
return r&&e===i&&t===s?r:(this._originalQuery=t,this._originalRequest=e,e||this.store.request(t))}get request(){{const e=this._request
return this._updateSubscriptions(),e}}get reqState(){return function(e){let t=O.get(e)
return t||(t=function(e){const t=(0,n.g)(e),r=Object.create(N)
return r._request=e,r.reload=()=>x(e.requester,r.request,!0),r.refresh=(t=!1)=>x(e.requester,r.request,!0===t&&null),t?t.isError?(r.error=t.result,r.reason=t.result,r.status="rejected",r.isError=!0,r.isPending=!1,r.isLoading=!1,r.request=t.result.request,r.response=t.result.response):(r.result=t.result.content,r.value=t.result.content,r.status="fulfilled",r.isSuccess=!0,r.isPending=!1,r.isLoading=!1,r.request=t.result.request,r.response=t.result.response):e.then(t=>{(0,n.s)(e,{isError:!1,result:t}),r.result=t.content,r.value=t.content,r.status="fulfilled",r.isSuccess=!0,r.isPending=!1,r.isLoading=!1,r.request=t.request,r.response=t.response},t=>{(0,n.s)(e,{isError:!0,result:t}),r.error=t,r.reason=t,r.status="rejected",r.isError=!0,r.isPending=!1,r.isLoading=!1,r.request=t.request,r.response=t.response}),r}(e),O.set(e,t)),t}(this.request)}get result(){return this.reqState.result}}function L(e){return"requestManager"in e}function z(){const e=this
e.isDestroyed=!0,e._removeSubscriptions(),"undefined"!=typeof window&&(e._clearInterval(),window.removeEventListener("online",e._onlineChanged,{passive:!0,capture:!0}),window.removeEventListener("offline",e._onlineChanged,{passive:!0,capture:!0}),document.removeEventListener("visibilitychange",e._backgroundChanged,{passive:!0,capture:!0}))}P((i=I).prototype,"isIdle",[C]),P(i.prototype,"autorefreshTypes",[C]),P(i.prototype,"errorFeatures",[C]),P(i.prototype,"contentFeatures",[C]),P(i.prototype,"_request",[C]),P(i.prototype,"request",[C]),E(I.prototype,"isOnline",!0),E(I.prototype,"isHidden",!1),E(I.prototype,"isRefreshing",!1),E(I.prototype,"_localRequest",void 0),E(I.prototype,"_latestRequest",void 0),new WeakMap
const $={}
E($,"reason",null),E($,"value",null),E($,"result",null),E($,"error",null),E($,"status","pending"),E($,"isPending",!0),E($,"isLoading",!0),E($,"isSuccess",!1),E($,"isError",!1),Symbol.for("LegacyPromiseProxy")},7388:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>m})
var i=r(1389),s=r(1806),n=r.n(s),o=r(123),a=r(2735),l=r(9441),c=r(1505),u=r(941)
const d=new WeakMap,h=a.service??a.inject,f=new WeakMap
function p(){const e={},t=[],r=(0,l.o)(this),i=this.store.schema.fields(r),s={name:"Attributes",properties:["id"],expand:!0},n=s.properties,o=[s]
for(const a of i.values())switch(a.kind){case"attribute":n.push(a.name)
break
case"belongsTo":case"hasMany":{let r=e[a.kind]
void 0===r&&(r=e[a.kind]=[],o.push({name:a.kind,properties:r,expand:!0})),r.push(a.name),t.push(a.name)
break}}return o.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:o,expensiveProperties:t}}}var y=new WeakMap
class g extends(n()){constructor(...e){var t,r
super(...e),t=y,r=void function(e,t){let r=function(e,t){var r
let i=e.prototype
for(;i;){let e=null==(r=d.get(i))?void 0:r.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,r)}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:r}=this,i=function(e){let t=f.get(e)
return void 0===t&&(t=new Map,f.set(e,t)),t}(r),s=r.notifications.subscribe("resource",(s,o)=>{"added"===o&&this.watchTypeIfUnseen(r,i,s.type,e,t,n)}),n=[()=>{r.notifications.unsubscribe(s)}];(0,c.Rh)(r),Object.keys(r.cacheKeyManager._cache.resourcesByType).forEach(e=>{i.set(e,!1)}),i.forEach((s,o)=>{this.watchTypeIfUnseen(r,i,o,e,t,n)})
const o=()=>{n.forEach(e=>e()),i.forEach((e,t)=>{i.set(t,!1)}),this.releaseMethods.removeObject(o)}
return this.releaseMethods.pushObject(o),o}watchTypeIfUnseen(e,t,r,i,s,n){if(!0!==t.get(r)){const o=e.modelFor(r)
o.prototype._debugInfo=p
const a=this.wrapModelType(o,r)
n.push(this.observeModelType(r,s)),i([a]),t.set(r,!0)}}columnNameToDesc(e){return(0,u.capitalize)((0,u.underscore)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let r=0
return e.attributes.forEach((e,i)=>{if(r++>this.attributeLimit)return!1
const s=this.columnNameToDesc(i)
t.push({name:i,desc:s})}),t}getRecords(e,t){if(arguments.length<2){const r=e._debugContainerKey
if(r){const e=r.match(/model:(.*)/)
null!==e&&(t=e[1])}}return this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const r={id:e.id}
return e.eachAttribute(i=>{if(t++>this.attributeLimit)return!1
r[i]=e[i]}),r}getRecordKeywords(e){const t=[e.id]
return e.eachAttribute(r=>{t.push(e[r])}),(0,i.A)(t)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const r=[],i=["id","isNew","hasDirtyAttributes"]
return e.eachAttribute(e=>i.push(e)),i.forEach(i=>{const s=()=>{t(this.wrapRecord(e))};(0,o.addObserver)(e,i,s),r.push(function(){(0,o.removeObserver)(e,i,s)})}),function(){r.forEach(e=>e())}}}!function(e,t,r){let i={configurable:!0,enumerable:!0,writable:!0,initializer:null}
for(let s of r)i=s(e,t,i)||i
void 0===i.initializer?Object.defineProperty(e,t,i):function(e,t,r){let i=d.get(e)
i||(i=new Map,d.set(e,i)),i.set(t,r)}(e,t,i)}(g.prototype,"store",[h("store")])
const m=g},7853:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>l,modifier:()=>u})
var i=r(2294),s=r(2377),n=r(1130)
function o(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a{constructor(e){o(this,"capabilities",(0,s.capabilities)("3.22")),this.owner=e}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,r){const i=function(e,t){const r=e
return r.element=t,r}(e,t)
i.instance.modify(t,r.positional,r.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,n.destroy)(e)}}class l{constructor(e,t){(0,i.setOwner)(this,e)}modify(e,t,r){}}(0,s.setModifierManager)(e=>new a(e),l)
const c=new class{constructor(){o(this,"capabilities",(0,s.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,r){const i=function(e,t){const r=e
return r.element=t,r}(e,t),{positional:s,named:n}=r,o=e.instance(t,s,n)
"function"==typeof o&&(i.teardown=o)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const r=e.instance(e.element,t.positional,t.named)
"function"==typeof r&&(e.teardown=r)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}getDebugName(e){return e.instance.toString()}getDebugInstance(e){return e}}
function u(e,t){return e.toString=()=>t?.name||e.name,(0,s.setModifierManager)(()=>c,e)}},8047:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>or})
var i=r(1603),s=r(1113)
function n(e){return e._store}function o(e,t,r){return(e[t]=e[t]||Object.create(null))[r]}function a(e,t,r,i){(e[t]=e[t]||Object.create(null))[r]=i}function l(e,t){return!t.id||e.cache.isNew(t)}function c(e){return"belongsTo"===e.definition.kind}function u(e){return e.definition.isImplicit}function d(e){return"hasMany"===e.definition.kind}function h(e,t){if(c(e))e.remoteState&&t(e.remoteState),e.localState&&e.localState!==e.remoteState&&t(e.localState)
else if(d(e)){for(let r=0;r<e.remoteState.length;r++){const i=e.remoteState[r]
t(i)}e.additions?.forEach(t)}else e.localMembers.forEach(t),e.remoteMembers.forEach(r=>{e.localMembers.has(r)||t(r)})}function f(e,t,r,i){if(c(t))t.remoteState===r&&(t.remoteState=null),t.localState===r&&(t.localState=null,p(e,t))
else if(d(t)){t.remoteMembers.delete(r),t.additions?.delete(r)
const i=t.removals?.delete(r),s=t.remoteState.indexOf(r)
if(-1!==s&&t.remoteState.splice(s,1),!i){const i=t.localState?.indexOf(r);-1!==i&&void 0!==i&&(t.localState.splice(i,1),p(e,t))}}else t.remoteMembers.delete(r),t.localMembers.delete(r)}function p(e,t){if(!t.accessed)return
const r=t.identifier,i=t.definition.key
r!==e._removing&&e.store.notifyChange(r,"relationships",i)}function y(e){return"belongsTo"===e.kind||"hasMany"===e.kind}const g=null,m=Date.now()
function _(e,t){return`implicit-${e}:${t}${m}`}function b(e,t){e.inverseKind=t.kind,e.inverseKey=t.key,e.inverseName=t.name,e.inverseType=t.type,e.inverseIsAsync=t.isAsync,e.inverseIsCollection=t.isCollection,e.inverseIsPolymorphic=t.isPolymorphic,e.inverseIsImplicit=t.isImplicit,e.inverseIsLinksMode=t.isLinksMode
const r=!1!==e.resetOnRemoteUpdate&&!1!==t.resetOnRemoteUpdate
e.resetOnRemoteUpdate=r,t.resetOnRemoteUpdate=r}function v(e){var t
y(e)||(e={kind:"resource"===(t=e).kind?"belongsTo":"hasMany",name:t.name,type:t.type,options:Object.assign({},{async:!1,inverse:null,resetOnRemoteUpdate:!1},t.options)})
const r={},i=e.options
return r.kind=e.kind,r.key=e.sourceKey??e.name,r.name=e.name,r.type=e.type,r.isAsync=i.async,r.isImplicit=!1,r.isCollection="hasMany"===e.kind,r.isPolymorphic=i&&!!i.polymorphic,r.isLinksMode=i.linksMode??!1,r.inverseKey=i&&i.inverse||"",r.inverseName=i&&i.inverse||"",r.inverseType="",r.inverseIsAsync=g,r.inverseIsImplicit=i&&null===i.inverse||g,r.inverseIsCollection=g,r.inverseIsLinksMode=g,r.resetOnRemoteUpdate=!!y(e)&&!e.options?.linksMode&&!1!==e.options?.resetOnRemoteUpdate,r}function w(e,t,r){r?function(e,t,r){const s=t.value,n=e.get(t.record,t.field)
r&&e._addToTransaction(n)
const o=n.isDirty
n.state.hasReceivedData||(n.isDirty=!0),n.state.hasReceivedData=!0
const{definition:a}=n,{type:c}=n.definition,u=E(s,n,i=>{c!==i.type&&e.registerPolymorphicType(c,i.type),n.additions?.has(i)&&n.additions.delete(i),k(e,i,a.inverseKey,t.record,r)},i=>{n.removals?.has(i)&&n.removals.delete(i),R(e,i,a.inverseKey,t.record,r)})
if(n.remoteMembers=u.finalSet,n.remoteState=u.finalState,u.changed&&(n.isDirty=!0),n._diff=u,"hasMany"===n.definition.kind&&!1!==n.definition.resetOnRemoteUpdate&&(u.changed||o)){const r={removals:[],additions:[],triggered:!1}
n.removals&&(n.isDirty=!0,n.removals.forEach(i=>{r.triggered=!0,r.removals.push(i),k(e,i,a.inverseKey,t.record,!1)}),n.removals=null),n.additions&&(n.additions.forEach(i=>{l(e._realStore,i)||(r.triggered=!0,r.additions.push(i),n.isDirty=!0,n.additions.delete(i),R(e,i,a.inverseKey,t.record,!1))}),0===n.additions.size&&(n.additions=null)),r.triggered&&(0,i.deprecate)(`WarpDrive is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${n.identifier.type}>.${n.definition.key} hasMany relationship but will not be once this deprecation is resolved by opting into the new behavior:\n\n\tAdded: [${r.additions.map(e=>e.lid).join(", ")}]\n\tRemoved: [${r.removals.map(e=>e.lid).join(", ")}]`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"})}n.isDirty&&!o&&S(e,n)}(e,t,r):function(e,t,r){const i=t.value,s=e.get(t.record,t.field)
s.state.hasReceivedData=!0
const{additions:n,removals:o}=s,{inverseKey:a,type:l}=s.definition,{record:c}=t,u=s.isDirty
let d=!1
const h=i=>{const s=o?.has(i)
!s&&n?.has(i)||(l!==i.type&&e.registerPolymorphicType(l,i.type),d=!0,k(e,i,a,t.record,r),s&&o.delete(i))},f=t=>{const i=n?.has(t)
!i&&o?.has(t)||(d=!0,R(e,t,a,c,r),i&&n.delete(t))},y=E(i,s,h,f)
n&&n.size>0&&n.forEach(e=>{y.add.has(e)||(d=!0,f(e))}),o&&o.size>0&&o.forEach(e=>{y.del.has(e)||(d=!0,h(e))})
const g=y.changed||d
s.additions=y.add,s.removals=y.del,s.localState=y.finalState,g&&!u&&p(e,s)}(e,t,r)}function k(e,t,r,i,s){const n=e.get(t,r),{type:o}=n.definition
o!==i.type&&e.registerPolymorphicType(o,i.type),c(n)?(n.state.hasReceivedData=!0,n.state.isEmpty=!1,s&&(e._addToTransaction(n),null!==n.remoteState&&R(e,n.remoteState,n.definition.inverseKey,t,s),n.remoteState=i),n.localState!==i&&(!s&&n.localState&&R(e,n.localState,n.definition.inverseKey,t,s),n.localState=i,p(e,n))):d(n)?s?n.remoteMembers.has(i)||(e._addToTransaction(n),n.remoteState.push(i),n.remoteMembers.add(i),n.additions?.has(i)?n.additions.delete(i):(n.isDirty=!0,n.state.hasReceivedData=!0,S(e,n))):(n.isDirty||n.localState||(n.localState=[]),M(e,0,n,i,null,s)&&p(e,n)):s?n.remoteMembers.has(i)||(n.remoteMembers.add(i),n.localMembers.add(i)):n.localMembers.has(i)||n.localMembers.add(i)}function R(e,t,r,i,s){const n=e.get(t,r)
c(n)?(n.state.isEmpty=!0,s&&(e._addToTransaction(n),n.remoteState=null),n.localState===i&&(n.localState=null,p(e,n))):d(n)?s?(e._addToTransaction(n),T(n,i)&&p(e,n)):C(n,i)&&p(e,n):s?(n.remoteMembers.delete(i),n.localMembers.delete(i)):i&&n.localMembers.has(i)&&n.localMembers.delete(i)}function S(e,t){t.accessed&&e._scheduleLocalSync(t)}function A(e,t,r=!1){const s=e.get(t.record,t.field)
r&&e._addToTransaction(s)
const{definition:n,state:o}=s,a=r?"remoteState":"localState",c=s[a]
if(t.value!==c)if(c&&R(e,c,n.inverseKey,t.record,r),s[a]=t.value,o.hasReceivedData=!0,o.isEmpty=null===t.value,o.isStale=!1,o.hasFailedLoadAttempt=!1,t.value&&(n.type!==t.value.type&&e.registerPolymorphicType(n.type,t.value.type),k(e,t.value,n.inverseKey,t.record,r)),r){const{localState:t,remoteState:r}=s
if(t&&l(e._realStore,t)&&!r)return
t!==r&&t===c?(s.localState=r,p(e,s)):t!==r&&t!==c&&!1!==s.definition.resetOnRemoteUpdate&&(s.localState=r,(0,i.deprecate)(`WarpDrive is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${t?"Added: "+t.lid+"\n\t":""}${c?"Removed: "+c.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),p(e,s))}else p(e,s)
else if(o.hasReceivedData=!0,r){const{localState:o}=s
if(o&&l(e._realStore,o)&&!c)return
c&&o===c?function(e,t,r,i,s){const n=e.get(t,r)
d(n)&&s&&n.remoteMembers.has(i)&&p(e,n)}(e,c,n.inverseKey,t.record,r):o!==t.value&&!1!==s.definition.resetOnRemoteUpdate&&(s.localState=c,(0,i.deprecate)(`WarpDrive is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${o?"Added: "+o.lid+"\n\t":""}${c?"Removed: "+c.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),p(e,s))}}function E(e,t,r,i){const s=new Set(e),{localState:n,remoteState:o,remoteMembers:a}=t
if(e.length!==s.size){const{diff:l,duplicates:c}=function(e,t,r,i,s,n,o,a){const l=t.length,c=i.length,u=Math.max(l,c)
let d=r.size!==s.size,h=!1
const f=new Set,p=new Set,y=new Map,g=new Set,m=[],_=e?.length??0
for(let b=0,v=0;b<u;b++){let u,w=!1
if(b<l)if(u=t[b],g.has(u)){let e=y.get(u)
void 0===e&&(e=[],y.set(u,e)),e.push(b)}else m[v]=u,g.add(u),w=!0,s.has(u)||(b<_&&e[b]!==u&&(d=!0),f.add(u),n(u))
if(b<c){const t=i[b]
u!==i[v]?(h=!0,!a&&b<_?e[v]!==u&&(d=!0):d=!0):a&&!d&&v<_&&e[v]!==u&&(d=!0),r.has(t)||(d=!0,p.add(t),o(t))}else w&&v<c&&u!==i[v]&&(d=!0)
w&&v++}return{diff:{add:f,del:p,finalState:m,finalSet:g,changed:d,remoteOrderChanged:h},duplicates:y}}(n,e,s,o,a,r,i,t.definition.resetOnRemoteUpdate)
return l}return function(e,t,r,i,s,n,o,a){const l=t.length,c=i.length,u=Math.max(l,c),d=e?l===e.length:l===c
let h=r.size!==s.size,f=e?r.size!==e.length:h
const p=new Set,y=new Set,g=e?.length??0
for(let m=0;m<u;m++){let u
if(m<l&&(u=t[m],!s.has(u))&&(m<g&&e[m]!==u&&(f=!0),p.add(u),n(u)),m<c){const t=i[m]
d&&u!==t?(h=!0,m<g?e[m]!==u&&(f=!0):m<l&&(f=!0)):a&&d&&!f&&m<g&&e[m]!==t&&(f=!0),r.has(t)||(h=!0,y.add(t),o(t))}}return{add:p,del:y,finalState:t,finalSet:r,changed:f,remoteOrderChanged:h}}(n,e,s,o,a,r,i,t.definition.resetOnRemoteUpdate)}function M(e,t,r,i,s,n){return n?function(e,t,r,i,s){const{remoteMembers:n,additions:o,removals:a,remoteState:l}=r
if(n.has(i))return!1
n.add(i)
const c=null!==s&&s>=0&&s<l.length
return c?l.splice(s,0,i):l.push(i),o?.has(i)?(o.delete(i),!1):(r.isDirty||r.localState&&(c?0===s?r.localState.unshift(i):a?.size?r.isDirty=!0:r.localState.splice(s,0,i):r.localState.push(i)),!0)}(0,0,r,i,s):function(e,t,r,i,s){const{remoteMembers:n,removals:o}=r
let a=r.additions
if((n.has(i)||a?.has(i))&&!o?.has(i))return!1
if(o?.has(i))o.delete(i)
else{a||(a=r.additions=new Set),r.state.hasReceivedData=!0,a.add(i)
const{type:t}=r.definition
t!==i.type&&e.registerPolymorphicType(i.type,t)}return r.localState&&(null!==s?r.localState.splice(s,0,i):r.localState.push(i)),!0}(e,0,r,i,s)}function C(e,t){const{remoteMembers:r,additions:i}=e
let s=e.removals
if(!r.has(t)&&!i?.has(t)||s?.has(t))return!1
if(i?.has(t)?i.delete(t):(s||(s=e.removals=new Set),s.add(t)),e.localState){const r=e.localState.indexOf(t)
e.localState.splice(r,1)}return!0}function T(e,t){const{remoteMembers:r,additions:i,removals:s,remoteState:n}=e
if(!r.has(t))return!1
r.delete(t)
let o=n.indexOf(t)
return n.splice(o,1),s?.has(t)?(s.delete(t),!1):(e.localState&&(o=e.localState.indexOf(t),e.localState.splice(o,1)),!0)}function q(e,t,r,i){c(i)?A(e,{op:"replaceRelatedRecord",record:t,field:r,value:i.remoteState},!1):(w(e,{op:"replaceRelatedRecords",record:t,field:r,value:i.remoteState.slice()},!1),p(e,i))}const O=structuredClone
function D(e,t){e.accessed=!0
const r={}
return e.state.hasReceivedData&&(r.data=t?e.remoteState.slice():function(e){if(!e.isDirty)return e.localState
const t=e.remoteState.slice()
return e.removals?.forEach(e=>{const r=t.indexOf(e)
t.splice(r,1)}),e.additions?.forEach(e=>{t.push(e)}),e.localState=t,e.isDirty=!1,t}(e)),e.links&&(r.links=O(e.links)),e.meta&&(r.meta=O(e.meta)),r}function j(e,t){let r
e.accessed=!0
const i={}
return t&&e.remoteState?r=e.remoteState:!t&&e.localState&&(r=e.localState),(t&&null===e.remoteState||null===e.localState)&&e.state.hasReceivedData&&(r=null),e.links&&(i.links=e.links),void 0!==r&&(i.data=r),e.meta&&(i.meta=e.meta),i}function N(e,t,r,i,s,n){M(e,0,t,i,s,n)&&k(e,i,t.definition.inverseKey,r,n)}function x(e,t,r,i,s,n){(function(e,t,r,i,s,n){return n?T(r,i):C(r,i)})(0,0,r,i,0,n)&&R(e,i,r.definition.inverseKey,t,n)}function P(e){switch(typeof e){case"object":return e
case"string":return{href:e}}}function F(e,t){for(let r=0;r<e.length;r++)e[r]=t.upgradeIdentifier(e[r])
return e}const I=(0,s.L1)("Graphs",new Map)
class L{constructor(e){this._definitionCache=Object.create(null),this._metaCache=Object.create(null),this._potentialPolymorphicTypes=Object.create(null),this.identifiers=new Map,this.store=e,this._realStore=e._store,this.isDestroyed=!1,this._willSyncRemote=!1,this._willSyncLocal=!1,this._pushedUpdates={belongsTo:void 0,hasMany:void 0,deletions:[]},this._updatedRelationships=new Set,this._transaction=null,this._removing=null,this.silenceNotifications=!1}has(e,t){const r=this.identifiers.get(e)
return!!r&&void 0!==r[t]}getDefinition(e,t){let r=this._metaCache[e.type],i=r?.[t]
if(!i){const s=function(e,t,r){const i=e._definitionCache,s=e.store,l=e._potentialPolymorphicTypes,{type:c}=t
let u=o(i,c,r)
if(void 0!==u)return u
const d=s.schema.fields(t),h=(s.schema.cacheFields?.(t)??d).get(r)
if(!h){if(l[c]){const e=Object.keys(l[c])
for(let t=0;t<e.length;t++){const s=o(i,e[t],r)
if(s)return a(i,c,r,s),s.rhs_modelNames.push(c),s}}return i[c][r]=null,null}const f=v(h)
let p,y
const g=f.type
if(null===f.inverseKey?p=null:(y=function(e,t,r){const i=e.schema.fields(t).get(r)
return i?i.options.inverse:null}(n(s),t,r),p=!y&&f.isPolymorphic&&f.inverseKey?{kind:"belongsTo",key:f.inverseKey,name:f.inverseName,type:c,isAsync:!1,isImplicit:!1,isCollection:!1,isPolymorphic:!1}:y?v(s.schema.fields({type:g}).get(y)):null),!p){y=_(c,r),p={kind:"implicit",key:y,type:c,isAsync:!1,isImplicit:!0,isCollection:!0,isPolymorphic:!1},b(f,p),b(p,f)
const e={lhs_key:`${c}:${r}`,lhs_modelNames:[c],lhs_baseModelName:c,lhs_relationshipName:r,lhs_definition:f,lhs_isPolymorphic:f.isPolymorphic,rhs_key:p.key,rhs_modelNames:[g],rhs_baseModelName:g,rhs_relationshipName:p.key,rhs_definition:p,rhs_isPolymorphic:!1,hasInverse:!1,isSelfReferential:c===g,isReflexive:!1}
return a(i,g,y,e),a(i,c,r,e),e}const m=p.type
if(u=o(i,m,r)||o(i,g,y),u)return(u.lhs_baseModelName===m?u.lhs_modelNames:u.rhs_modelNames).push(c),a(i,c,r,u),u
b(f,p),b(p,f)
const w=[c]
c!==m&&w.push(m)
const k=m===g,R={lhs_key:`${m}:${r}`,lhs_modelNames:w,lhs_baseModelName:m,lhs_relationshipName:r,lhs_definition:f,lhs_isPolymorphic:f.isPolymorphic,rhs_key:`${g}:${y}`,rhs_modelNames:[g],rhs_baseModelName:g,rhs_relationshipName:y,rhs_definition:p,rhs_isPolymorphic:p.isPolymorphic,hasInverse:!0,isSelfReferential:k,isReflexive:k&&r===y}
return a(i,m,r,R),a(i,c,r,R),a(i,g,y,R),R}(this,e,t)
i=function(e,t,r){const i=e.isSelfReferential
return 1==(r===e.lhs_relationshipName)&&(!0===i||t===e.lhs_baseModelName||e.rhs_isPolymorphic&&e.lhs_modelNames.includes(t))}(s,e.type,t)?s.lhs_definition:s.rhs_definition,r=this._metaCache[e.type]=r||{},r[t]=i}return i}get(e,t){let r=this.identifiers.get(e)
r||(r=Object.create(null),this.identifiers.set(e,r))
let i=r[t]
if(!i){const s=this.getDefinition(e,t)
i="belongsTo"===s.kind?r[t]={definition:s,identifier:e,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},transactionRef:0,localState:null,remoteState:null,meta:null,links:null,accessed:!1}:"hasMany"===s.kind?r[t]={definition:s,identifier:e,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},remoteMembers:new Set,remoteState:[],additions:null,removals:null,meta:null,links:null,localState:null,isDirty:!1,transactionRef:0,accessed:!1,_diff:void 0}:r[t]=function(e,t){return{definition:e,identifier:t,localMembers:new Set,remoteMembers:new Set}}(s,e)}return i}getData(e,t){const r=this.get(e,t)
return c(r)?j(r,!1):D(r,!1)}getRemoteData(e,t){const r=this.get(e,t)
return c(r)?j(r,!0):D(r,!0)}registerPolymorphicType(e,t){const r=this._potentialPolymorphicTypes
let i=r[e]
i||(i=r[e]=Object.create(null)),i[t]=!0
let s=r[t]
s||(s=r[t]=Object.create(null)),s[e]=!0}isReleasable(e){const t=this.identifiers.get(e)
if(!t)return!0
const r=Object.keys(t)
for(let i=0;i<r.length;i++){const s=t[r[i]]
if(void 0!==s&&s.definition.inverseIsAsync&&!l(this._realStore,e))return!1}return!0}unload(e,t){const r=this.identifiers.get(e)
r&&Object.keys(r).forEach(e=>{const i=r[e]
i&&(function(e,t,r){if(u(t))return void(e.isReleasable(t.identifier)&&B(e,t))
const{identifier:i}=t,{inverseKey:s}=t.definition
t.definition.inverseIsImplicit||h(t,t=>function(e,t,r,i,s){if(!e.has(t,r))return
const n=e.get(t,r)
c(n)&&n.localState&&i!==n.localState||function(e,t,r,i){if(c(t)){const r=t.localState
!t.definition.isAsync||r&&l(e._realStore,r)?(t.localState===r&&null!==r&&(t.localState=null),t.remoteState===r&&null!==r&&(t.remoteState=null,t.state.hasReceivedData=!0,t.state.isEmpty=!0,t.localState&&!l(e._realStore,t.localState)&&(t.localState=null))):t.state.hasDematerializedInverse=!0,i||p(e,t)}else!t.definition.isAsync||r&&l(e._realStore,r)?f(e,t,r):t.state.hasDematerializedInverse=!0,i||p(e,t)}(e,n,i,s)}(e,t,s,i,r)),t.definition.inverseIsImplicit||t.definition.inverseIsAsync||(t.state.isStale=!0,U(t),t.definition.isAsync||r||p(e,t))}(this,i,t),u(i)&&(r[e]=void 0))})}_isDirty(e,t){const r=this.identifiers.get(e)
if(!r)return!1
const i=r[t]
if(!i)return!1
if(c(i))return i.localState!==i.remoteState
if(d(i)){const e=null!==i.additions&&i.additions.size>0,t=null!==i.removals&&i.removals.size>0
return e||t||K(i)}return!1}getChanged(e){const t=this.identifiers.get(e),r=new Map
if(!t)return r
const i=Object.keys(t)
for(let s=0;s<i.length;s++){const e=i[s],n=t[e]
if(n)if(c(n))n.localState!==n.remoteState&&r.set(e,{kind:"resource",remoteState:n.remoteState,localState:n.localState})
else if(d(n)){const t=null!==n.additions&&n.additions.size>0,i=null!==n.removals&&n.removals.size>0,s=K(n);(t||i||s)&&r.set(e,{kind:"collection",additions:new Set(n.additions),removals:new Set(n.removals),remoteState:n.remoteState,localState:D(n,!1).data||[],reordered:s})}}return r}hasChanged(e){const t=this.identifiers.get(e)
if(!t)return!1
const r=Object.keys(t)
for(let i=0;i<r.length;i++)if(this._isDirty(e,r[i]))return!0
return!1}rollback(e){const t=this.identifiers.get(e),r=[]
if(!t)return r
const i=Object.keys(t)
for(let s=0;s<i.length;s++){const n=i[s],o=t[n]
o&&this._isDirty(e,n)&&(q(this,e,n,o),r.push(n))}return r}remove(e){this._removing=e,this.unload(e),this.identifiers.delete(e),this._removing=null}push(e){if("deleteRecord"===e.op)this._pushedUpdates.deletions.push(e)
else{const t=this.getDefinition(e.record,e.field)
!function(e,t,r){const i=e[t.kind]=e[t.kind]||new Map
let s=i.get(t.inverseType)
s||(s=new Map,i.set(t.inverseType,s))
let n=s.get(r.field)
n||(n=[],s.set(r.field,n)),n.push(r)}(this._pushedUpdates,t,e)}if(!this._willSyncRemote){this._willSyncRemote=!0
const e=n(this.store)
e._cbs?e._schedule("coalesce",()=>this._flushRemoteQueue()):e._run(()=>this._flushRemoteQueue())}}update(e,t=!1){switch(e.op){case"mergeIdentifiers":{const t=this.identifiers.get(e.record)
t&&function(e,t,r){Object.keys(r).forEach(i=>{const s=r[i]
s&&function(e,t,r){r.identifier=t.value,h(r,i=>{const s=e.get(i,r.definition.inverseKey)
!function(e,t,r){c(t)?function(e,t,r){t.remoteState===r.record&&(t.remoteState=r.value),t.localState===r.record&&(t.localState=r.value,p(e,t))}(e,t,r):d(t)?function(e,t,r){if(t.remoteMembers.has(r.record)){t.remoteMembers.delete(r.record),t.remoteMembers.add(r.value)
const e=t.remoteState.indexOf(r.record)
t.remoteState.splice(e,1,r.value),t.isDirty=!0}t.additions?.has(r.record)&&(t.additions.delete(r.record),t.additions.add(r.value),t.isDirty=!0),t.removals?.has(r.record)&&(t.removals.delete(r.record),t.removals.add(r.value),t.isDirty=!0),t.isDirty&&p(e,t)}(e,t,r):function(e,t,r){t.remoteMembers.has(r.record)&&(t.remoteMembers.delete(r.record),t.remoteMembers.add(r.value)),t.localMembers.has(r.record)&&(t.localMembers.delete(r.record),t.localMembers.add(r.value))}(0,t,r)}(e,s,t)})}(e,t,s)})}(this,e,t)
break}case"update":case"updateRelationship":(function(e,t){const r=e.get(t.record,t.field),{definition:s,state:n,identifier:o}=r,{isCollection:a}=s,l=t.value
let c=!1,u=!1
if(l.meta&&(r.meta=l.meta),void 0!==l.data)if(c=!0,a){null===l.data&&(l.data=[])
const r=e.store.cacheKeyManager
e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:F(l.data,r)},!0)}else e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:l.data?e.store.cacheKeyManager.upgradeIdentifier(l.data):null},!0)
else!1!==s.isAsync||n.hasReceivedData||(c=!0,a?e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:[]},!0):e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:null},!0))
if(l.links){const e=r.links
if(r.links=l.links,l.links.related){const t=P(l.links.related),r=e&&e.related?P(e.related):null,a=r?r.href:null
t&&t.href&&t.href!==a&&((0,i.warn)(`You pushed a record of type '${o.type}' with a relationship '${s.key}' configured as 'async: false'. You've included a link but no primary data, this may be an error in your payload. WarpDrive will treat this relationship as known-to-be-empty.`,s.isAsync||n.hasReceivedData,{id:"ds.store.push-link-for-sync-relationship"}),u=!0)}}if(r.state.hasFailedLoadAttempt=!1,c){const e=null===l.data||Array.isArray(l.data)&&0===l.data.length
r.state.hasReceivedData=!0,r.state.isStale=!1,r.state.hasDematerializedInverse=!1,r.state.isEmpty=e}else u&&(a||!r.state.hasReceivedData||(d=r.transactionRef,h=e._transaction,0===d||null===h||d<h)?(r.state.isStale=!0,p(e,r)):r.state.isStale=!1)
var d,h})(this,e)
break
case"deleteRecord":{const t=e.record,r=this.identifiers.get(t)
r&&(Object.keys(r).forEach(e=>{const t=r[e]
t&&(r[e]=void 0,B(this,t))}),this.identifiers.delete(t))
break}case"replaceRelatedRecord":A(this,e,t)
break
case"add":(function(e,t,r){const{record:i,value:s,index:n}=t,o=e.get(i,t.field),a=c(o)
if(r&&a){if(s!==o.remoteState)A(e,{op:"replaceRelatedRecord",record:i,field:t.field,value:s},r)}else{if(o.isDirty||o.localState||(o.localState=[]),Array.isArray(s))for(let t=0;t<s.length;t++)N(e,o,i,s[t],void 0!==n?n+t:null,r)
else N(e,o,i,s,n??null,r)
p(e,o)}})(this,e,t)
break
case"remove":(function(e,t,r){const{record:i,value:s}=t,n=e.get(i,t.field),o=c(n)
if(r&&o){if(s===n.remoteState)A(e,{op:"replaceRelatedRecord",record:i,field:t.field,value:null},r)}else{if(Array.isArray(s))for(let o=0;o<s.length;o++)x(e,i,n,s[o],t.index,r)
else x(e,i,n,s,t.index,r)
p(e,n)}})(this,e,t)
break
case"replaceRelatedRecords":w(this,e,t)}}_scheduleLocalSync(e){this._updatedRelationships.add(e),this._willSyncLocal||(this._willSyncLocal=!0,n(this.store)._schedule("sync",()=>this._flushLocalQueue()))}_flushRemoteQueue(){if(!this._willSyncRemote)return
let e=(0,s.Yj)("transactionRef")??0
this._transaction=++e,(0,s.dV)("transactionRef",e),this._willSyncRemote=!1
const t=this._pushedUpdates,{deletions:r,hasMany:i,belongsTo:n}=t
t.deletions=[],t.hasMany=void 0,t.belongsTo=void 0
for(let s=0;s<r.length;s++)this.update(r[s],!0)
i&&z(this,i),n&&z(this,n),this._transaction=null}_addToTransaction(e){e.transactionRef=this._transaction}_flushLocalQueue(){if(!this._willSyncLocal)return
if(this.silenceNotifications)return this.silenceNotifications=!1,void(this._updatedRelationships=new Set)
this._willSyncLocal=!1
const e=this._updatedRelationships
this._updatedRelationships=new Set,e.forEach(e=>p(this,e))}destroy(){I.delete(this.store),this.identifiers.clear(),this.store=null,this.isDestroyed=!0}}function z(e,t){for(const r of t.values())for(const t of r.values())$(e,t)}function $(e,t){for(let r=0;r<t.length;r++)e.update(t[r],!0)}function U(e){c(e)?(e.localState=null,e.remoteState=null,e.state.hasReceivedData=!1,e.state.isEmpty=!0):(e.remoteMembers.clear(),e.remoteState=[],e.additions=null,e.removals=null,e.localState=null)}function B(e,t){const{identifier:r}=t,{inverseKey:i}=t.definition
h(t,t=>{e.has(t,i)&&f(e,e.get(t,i),r)}),c(t)?(t.definition.isAsync||U(t),t.localState=null):d(t)?t.definition.isAsync||(U(t),p(e,t)):(t.remoteMembers.clear(),t.localMembers.clear())}function K(e){if(e.isDirty)return!1
const{remoteState:t,localState:r,additions:i,removals:s}=e
if(null===r)return!1
for(let n=0,o=0;n<t.length;n++){const e=t[n],a=r[o]
if(e!==a){if(s&&s.has(e))continue
if(i&&i.has(a)){o++,n--
continue}return!0}o++}return!1}function H(e){return void 0!==e._instanceCache?e._instanceCache._storeWrapper:e}function G(e){return I.get(H(e))}var W=r(1505)
function Y(e){return e instanceof Error}r(8604),new Map
const V={iterator:()=>({next:()=>({done:!0,value:void 0})})}
class Z{constructor(e){this.version="2",this._capabilities=e,this.__cache=new Map,this.__graph=function(e){const t=H(e)
let r=I.get(t)
return r||(r=new L(t),I.set(t,r),n(t)._graph=r),r}(e),this.__destroyedCache=new Map,this.__documents=new Map}put(e){if(Y(e))return this._putDocument(e,void 0,void 0)
if(function(e){return!(e instanceof Error)&&e.content&&!("data"in e.content)&&!("included"in e.content)&&"meta"in e.content}(e))return this._putDocument(e,void 0,void 0)
const t=e.content,r=t.included
let i,s
const{cacheKeyManager:n}=this._capabilities
if(r)for(i=0,s=r.length;i<s;i++)r[i]=ce(this,n,r[i])
if(Array.isArray(t.data)){s=t.data.length
const o=[]
for(i=0;i<s;i++)o.push(ce(this,n,t.data[i]))
return this._putDocument(e,o,r)}if(null===t.data)return this._putDocument(e,null,r)
const o=ce(this,n,t.data)
return this._putDocument(e,o,r)}_putDocument(e,t,r){const i=Y(e)?function(e){const t={}
return e.content&&(de(t,e.content),"errors"in e.content?t.errors=e.content.errors:"object"==typeof e.error&&"errors"in e.error?t.errors=e.error.errors:t.errors=[{title:e.message}]),t}(e):function(e){const t={},r=e.content
return r&&de(t,r),t}(e)
void 0!==t&&(i.data=t),void 0!==r&&(i.included=r)
const s=e.request,n=s?this._capabilities.cacheKeyManager.getOrCreateDocumentIdentifier(s):null
if(n){i.lid=n.lid,e.content=i
const t=this.__documents.has(n.lid)
this.__documents.set(n.lid,e),this._capabilities.notifyChange(n,t?"updated":"added",null)}if("findHasMany"===e.request?.op){const t=e.request.options?.identifier,r=e.request.options?.field
r&&t&&this.__graph.push({op:"updateRelationship",record:t,field:r.name,value:i})}return i}patch(e){Array.isArray(e)?((0,W.Yj)(this._capabilities),this._capabilities._store._join(()=>{for(const t of e)fe(this,t)})):fe(this,e)}mutate(e){this.__graph.update(e,!1)}peek(e){if((0,W.wT)(e)){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:r,id:i,lid:s}=e,n=structuredClone(Object.assign({},t.remoteAttrs,t.inflightAttrs,t.localAttrs)),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach(t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))}),(0,W.Yj)(this._capabilities)
const l=this._capabilities._store
return pe(this,e).forEach((t,r)=>{if(r in n&&void 0!==n[r])return
const i=te(t,e,l)
void 0!==i&&(n[r]=i)}),{type:r,id:i,lid:s,attributes:n,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRemoteState(e){if((0,W.wT)(e)){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:r,id:i,lid:s}=e,n=structuredClone(t.remoteAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach(t=>{a[t].definition.isImplicit||(o[t]=structuredClone(this.__graph.getData(e,t)))}),(0,W.Yj)(this._capabilities)
const l=this._capabilities._store
return pe(this,e).forEach((t,r)=>{if(r in n&&void 0!==n[r])return
const i=te(t,e,l)
void 0!==i&&(n[r]=i)}),{type:r,id:i,lid:s,attributes:n,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRequest(e){return this.__documents.get(e.lid)||null}upsert(e,t,r){(0,W.Yj)(this._capabilities)
const i=this._capabilities._store
if(!i._cbs){let s
return i._run(()=>{s=he(this,e,t,r)}),s}return he(this,e,t,r)}fork(){throw new Error("Not Implemented")}merge(e){throw new Error("Not Implemented")}diff(){throw new Error("Not Implemented")}dump(){throw new Error("Not Implemented")}hydrate(e){throw new Error("Not Implemented")}clientDidCreate(e,t){this._createCache(e).isNew=!0
const r={}
if(void 0!==t){const i=pe(this,e),s=this.__graph,n=Object.keys(t)
for(let o=0;o<n.length;o++){const a=n[o],l=t[a]
if("id"===a)continue
const c=i.get(a)
let u
switch(void 0!==c?"kind"in c?c.kind:"attribute":null){case"attribute":this.setAttr(e,a,l),r[a]=l
break
case"belongsTo":this.mutate({op:"replaceRelatedRecord",field:a,record:e,value:l}),u=s.get(e,a),u.state.hasReceivedData=!0,u.state.isEmpty=!1
break
case"hasMany":this.mutate({op:"replaceRelatedRecords",field:a,record:e,value:l}),u=s.get(e,a),u.state.hasReceivedData=!0,u.state.isEmpty=!1
break
default:r[a]=l}}}return this._capabilities.notifyChange(e,"added",null),r}willCommit(e,t){if(Array.isArray(e))for(const r of e)me(this,r)
else me(this,e)}didCommit(e,t){const r=t?t.content:null,i=t?.request?.op??null,s=r&&r.data,n=Array.isArray(s),o=Array.isArray(e)&&e.length>1
if(Array.isArray(e))if(n)for(let c=0;c<e.length;c++)ge(this,e[c],s[c]??null,i)
else for(let c=0;c<e.length;c++)ge(this,e[c],0===c?s:null,i)
else ge(this,e,s,i)
const a=r&&r.included,{cacheKeyManager:l}=this._capabilities
if(a)for(let c=0,u=a.length;c<u;c++)ce(this,l,a[c])
return o&&n?{data:e}:{data:Array.isArray(e)?e[0]:e}}commitWasRejected(e,t){if(!Array.isArray(e))return ye(this,e,t||null)
for(let r=0;r<e.length;r++)ye(this,e[r],t&&0===r?t:null)}unloadRecord(e){const t=this._capabilities
if(!this.__cache.has(e))return void G(t)?.unload(e)
const r=!this.isDeletionCommitted(e)
let i=!1
const s=this.__peek(e,!1)
s.isNew||s.isDeletionCommitted?G(t)?.push({op:"deleteRecord",record:e,isNew:s.isNew}):G(t)?.unload(e),s.localAttrs=null,s.remoteAttrs=null,s.defaultAttrs=null,s.inflightAttrs=null
const n=function(e,t){const r=[],i=[],s=new Set
for(i.push(t);i.length>0;){const n=i.shift()
r.push(n),s.add(n)
const o=ue(e,t).iterator()
for(let e=o.next();!e.done;e=o.next()){const t=e.value
t&&!s.has(t)&&(s.add(t),i.push(t))}}return r}(t,e)
if(function(e,t){for(let r=0;r<t.length;++r){const i=t[r]
if(e.hasRecord(i))return!1}return!0}(t,n))for(let o=0;o<n.length;++o){const e=n[o]
t.notifyChange(e,"removed",null),i=!0,t.disconnectRecord(e)}this.__cache.delete(e),this.__destroyedCache.set(e,s),1===this.__destroyedCache.size&&setTimeout(()=>{this.__destroyedCache.clear()},100),!i&&r&&t.notifyChange(e,"removed",null)}getAttr(e,t){const r=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),r){const r=t,i=this.__peek(e,!0)
if(!i)return
if(i.localAttrs&&r in i.localAttrs)return i.localAttrs[r]
if(i.inflightAttrs&&r in i.inflightAttrs)return i.inflightAttrs[r]
if(i.remoteAttrs&&r in i.remoteAttrs)return i.remoteAttrs[r]
if(i.defaultAttrs&&r in i.defaultAttrs)return i.defaultAttrs[r]
{const t=pe(this,e).get(r);(0,W.Yj)(this._capabilities)
const s=te(t,e,this._capabilities._store)
return X(t)&&(i.defaultAttrs=i.defaultAttrs||Object.create(null),i.defaultAttrs[r]=s),s}}const i=t,s=this.__peek(e,!0),n=i[0]
let o=s.localAttrs&&n in s.localAttrs?s.localAttrs[n]:void 0
if(void 0===o&&(o=s.inflightAttrs&&n in s.inflightAttrs?s.inflightAttrs[n]:void 0),void 0===o&&(o=s.remoteAttrs&&n in s.remoteAttrs?s.remoteAttrs[n]:void 0),void 0!==o){for(let e=1;e<i.length;e++)if(o=o[i[e]],void 0===o)return
return o}}getRemoteAttr(e,t){const r=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),r){const r=t,i=this.__peek(e,!0)
if(!i)return
if(i.remoteAttrs&&r in i.remoteAttrs)return i.remoteAttrs[r]
if(i.defaultAttrs&&r in i.defaultAttrs)return i.defaultAttrs[r]
{const t=pe(this,e).get(r);(0,W.Yj)(this._capabilities)
const s=te(t,e,this._capabilities._store)
return X(t)&&(i.defaultAttrs=i.defaultAttrs||Object.create(null),i.defaultAttrs[r]=s),s}}const i=t,s=this.__peek(e,!0),n=i[0]
let o=s.remoteAttrs&&n in s.remoteAttrs?s.remoteAttrs[n]:void 0
if(void 0!==o){for(let e=1;e<i.length;e++)if(o=o[i[e]],void 0===o)return
return o}}setAttr(e,t,r){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=this.__peek(e,!1),s=t,n=i.inflightAttrs&&s in i.inflightAttrs?i.inflightAttrs[s]:i.remoteAttrs&&s in i.remoteAttrs?i.remoteAttrs[s]:void 0
return n!==r?(i.localAttrs=i.localAttrs||Object.create(null),i.localAttrs[s]=r,i.changes=i.changes||Object.create(null),i.changes[s]=[n,r]):i.localAttrs&&(delete i.localAttrs[s],delete i.changes[s]),i.defaultAttrs&&s in i.defaultAttrs&&delete i.defaultAttrs[s],void this._capabilities.notifyChange(e,"attributes",s)}const s=t,n=this.__peek(e,!1),o=s[0],a=n.inflightAttrs&&o in n.inflightAttrs?n.inflightAttrs[o]:n.remoteAttrs&&o in n.remoteAttrs?n.remoteAttrs[o]:void 0
let l
if(a){l=a[s[1]]
for(let e=2;e<s.length;e++)l=l[s[e]]}if(l!==r){n.localAttrs=n.localAttrs||Object.create(null),n.localAttrs[o]=n.localAttrs[o]||structuredClone(a),n.changes=n.changes||Object.create(null)
let e=n.localAttrs[o],t=1
for(;t<s.length-1;)e=e[s[t++]]
e[s[t]]=r,n.changes[o]=[a,n.localAttrs[o]]}else if(n.localAttrs)try{if(!a)return
JSON.stringify(a)!==JSON.stringify(n.localAttrs[o])&&(delete n.localAttrs[o],delete n.changes[o])}catch{}this._capabilities.notifyChange(e,"attributes",o)}changedAttrs(e){const t=this.__peek(e,!1)
return t&&t.changes||Object.create(null)}hasChangedAttrs(e){const t=this.__peek(e,!0)
return!!t&&(null!==t.inflightAttrs&&Object.keys(t.inflightAttrs).length>0||null!==t.localAttrs&&Object.keys(t.localAttrs).length>0)}rollbackAttrs(e){const t=this.__peek(e,!1)
let r
return t.isDeleted=!1,null!==t.localAttrs&&(r=Object.keys(t.localAttrs),t.localAttrs=null,t.changes=null),t.isNew&&(t.isDeletionCommitted=!0,t.isDeleted=!0,t.isNew=!1),t.inflightAttrs=null,t.defaultAttrs=null,t.errors&&(t.errors=null,this._capabilities.notifyChange(e,"errors",null)),this._capabilities.notifyChange(e,"state",null),r&&r.length&&re(this._capabilities,e,new Set(r)),r||[]}changedRelationships(e){return this.__graph.getChanged(e)}hasChangedRelationships(e){return this.__graph.hasChanged(e)}rollbackRelationships(e){let t
return(0,W.Yj)(this._capabilities),this._capabilities._store._join(()=>{t=this.__graph.rollback(e)}),t}getRelationship(e,t){return this.__graph.getData(e,t)}getRemoteRelationship(e,t){return this.__graph.getRemoteData(e,t)}setIsDeleted(e,t){this.__peek(e,!1).isDeleted=t,this._capabilities.notifyChange(e,"state",null)}getErrors(e){return this.__peek(e,!0).errors||[]}isEmpty(e){const t=this.__safePeek(e,!0)
return!t||null===t.remoteAttrs&&null===t.inflightAttrs&&null===t.localAttrs}isNew(e){return this.__safePeek(e,!0)?.isNew||!1}isDeleted(e){return this.__safePeek(e,!0)?.isDeleted||!1}isDeletionCommitted(e){return this.__safePeek(e,!0)?.isDeletionCommitted||!1}_createCache(e){const t={id:null,remoteAttrs:null,localAttrs:null,defaultAttrs:null,inflightAttrs:null,changes:null,errors:null,isNew:!1,isDeleted:!1,isDeletionCommitted:!1}
return this.__cache.set(e,t),t}__safePeek(e,t){let r=this.__cache.get(e)
return!r&&t&&(r=this.__destroyedCache.get(e)),r}__peek(e,t){return this.__safePeek(e,t)}}function Q(e){return c(e)?e.localState?[e.localState]:[]:e.additions?[...e.additions]:[]}function J(e){return c(e)?e.remoteState?[e.remoteState]:[]:e.remoteState}function X(e){return!!e&&ee(e.options)}function ee(e){return!!e&&"function"==typeof e.defaultValue}function te(e,t,r){const i=e?.options
if(e&&(i||e.type)&&("attribute"===e.kind||"field"===e.kind)){if(ee(i))return i.defaultValue()
if(i&&"defaultValue"in i)return i.defaultValue
if("attribute"!==e.kind&&e.type){const s=r.schema.transformation(e)
if(s?.defaultValue)return s.defaultValue(i||null,t)}}}function re(e,t,r){if(r)for(const i of r)e.notifyChange(t,"attributes",i)
else e.notifyChange(t,"attributes",null)}function ie(e,t,r){const i=new Set,s=Object.keys(t),n=s.length,o=e.localAttrs,a=Object.assign(Object.create(null),e.remoteAttrs,e.inflightAttrs)
for(let l=0;l<n;l++){const e=s[l]
if(!r.has(e))continue
const n=t[e]
o&&void 0!==o[e]||a[e]!==n&&i.add(e)}return i}function se(e){return!e||null===e.remoteAttrs&&null===e.inflightAttrs&&null===e.localAttrs}function ne(e,t=!1){if(!e)return!1
const r=e.isNew,i=se(e)
return r?!e.isDeleted:!(t&&e.isDeletionCommitted||i)}function oe(e,t,r,i){for(const s in i.relationships){const n=i.relationships[s],o=t.get(s)
n&&o&&ae(o)&&e.push({op:"updateRelationship",record:r,field:s,value:n})}}function ae(e){const{kind:t}=e
return"hasMany"===t||"belongsTo"===t||"resource"===t||"collection"===t}function le(e,t){const{localAttrs:r,remoteAttrs:i,inflightAttrs:s,defaultAttrs:n,changes:o}=e
if(!r)return e.changes=null,!1
let a=!1
const l=Object.keys(r)
for(let c=0,u=l.length;c<u;c++){const e=l[c];(s&&e in s?s[e]:i&&e in i?i[e]:void 0)===r[e]&&(a=!0,t?.delete(e),delete r[e],delete o[e]),n&&e in n&&delete n[e]}return a}function ce(e,t,r){let i=t.peekResourceKey(r)
return i=i?t.updateRecordIdentifier(i,r):t.getOrCreateRecordIdentifier(r),e.upsert(i,r,e._capabilities.hasRecord(i)),i}function ue(e,t){const r=G(e),i=r?.identifiers.get(t)
if(!i)return V
const s=[]
Object.keys(i).forEach(e=>{const t=i[e]
t&&!t.definition.isImplicit&&s.push(t)})
let n=0,o=0,a=0
return{iterator:()=>({next:()=>{const e=(()=>{for(;n<s.length;){for(;o<2;){const e=0===o?Q(s[n]):J(s[n])
for(;a<e.length;){const t=e[a++]
if(null!==t)return t}a=0,o++}o=0,n++}})()
return{value:e,done:void 0===e}}})}}function de(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta)}function he(e,t,r,i){let s
const n=e.__safePeek(t,!1),o=!!n,a=n||e._createCache(t),l=function(e,t,r){(0,W.Yj)(t)
const i=t._store.getRequestStateService()
return!ne(e)&&i.getPendingRequestsForRecord(r).some(e=>"query"===e.type)}(n,e._capabilities,t)||!ne(n),c=!function(e){if(!e)return!0
const t=e.isNew,r=e.isDeleted,i=se(e)
return(!t||r)&&i}(n)&&!l
a.isNew&&(a.isNew=!1,e._capabilities.notifyChange(t,"identity",null),e._capabilities.notifyChange(t,"state",null))
const u=pe(e,t)
return i&&o&&r.attributes&&(s=ie(a,r.attributes,u)),a.remoteAttrs=Object.assign(a.remoteAttrs||Object.create(null),r.attributes),a.localAttrs&&le(a,s)&&e._capabilities.notifyChange(t,"state",null),c||e._capabilities.notifyChange(t,"added",null),r.id&&(a.id=r.id),r.relationships&&oe(e.__graph,u,t,r),s?.size&&re(e._capabilities,t,s),s?.size?Array.from(s):void 0}function fe(e,t){const r=(0,W.wT)(t.record)
switch(!r&&(0,W.FA)(t.record),t.op){case"mergeIdentifiers":{const r=e.__cache.get(t.record)
r&&(e.__cache.set(t.value,r),e.__cache.delete(t.record)),e.__graph.update(t,!0)
break}case"update":r&&("field"in t?ae(pe(e,t.record).get(t.field))?e.__graph.push(t):e.upsert(t.record,{type:t.record.type,id:t.record.id,attributes:{[t.field]:t.value}},e._capabilities.hasRecord(t.record)):e.upsert(t.record,t.value,e._capabilities.hasRecord(t.record)))
break
case"add":r?"field"in t?e.__graph.push(t):e.upsert(t.record,t.value,e._capabilities.hasRecord(t.record)):function(e,t){const r=e.__documents.get(t.record.lid),{content:i}=r
if("data"===t.field){let r=!1
return Array.isArray(i.data)?Array.isArray(t.value)?void 0!==t.index?(r=!0,i.data.splice(t.index,0,...t.value)):(r=!0,i.data.push(...t.value)):void 0!==t.index?(r=!0,i.data.splice(t.index,0,t.value)):(r=!0,i.data.push(t.value)):(r=i.data!==t.value,r&&(i.data=t.value)),void(r&&e._capabilities.notifyChange(t.record,"updated",null))}i.included=i.included||[],Array.isArray(t.value)?i.included=i.included.concat(t.value):i.included.push(t.value)}(e,t)
break
case"remove":if(r)if("field"in t)e.__graph.push(t)
else{const r=e.__safePeek(t.record,!1)
r?(r.isDeleted=!0,r.isDeletionCommitted=!0,e.unloadRecord(t.record)):G(e._capabilities)?.push({op:"deleteRecord",record:t.record,isNew:!1})}else"field"in t&&function(e,t){const r=e.__documents.get(t.record.lid),{content:i}=r
if("data"===t.field){let r=!1
if(Array.isArray(i.data)){const e=Array.isArray(t.value)?t.value:[t.value]
for(let s=0;s<e.length;s++){const n=e[s]
if(void 0!==t.index){const e=t.index<i.data.length&&i.data[t.index]===n?t.index:i.data.indexOf(n);-1!==e&&(r=!0,i.data.splice(e,1))}else{const e=i.data.indexOf(n);-1!==e&&(r=!0,i.data.splice(e,1))}}}else r=i.data===t.value,r&&(i.data=null)
r&&e._capabilities.notifyChange(t.record,"updated",null)}else{i.included=i.included||[]
const e=Array.isArray(t.value)?t.value:[t.value]
for(const t of e){const e=i.included.indexOf(t);-1!==e&&i.included.splice(e,1)}}}(e,t)}}function pe(e,t){if(e._capabilities.schema.cacheFields){const r=e._capabilities.schema.cacheFields(t)
if(r)return r}return e._capabilities.schema.fields(t)}function ye(e,t,r){const i=e.__peek(t,!1)
if(i.inflightAttrs){const e=Object.keys(i.inflightAttrs)
if(e.length>0){const t=i.localAttrs=i.localAttrs||Object.create(null)
for(let r=0;r<e.length;r++)void 0===t[e[r]]&&(t[e[r]]=i.inflightAttrs[e[r]])}i.inflightAttrs=null}r&&(i.errors=r),e._capabilities.notifyChange(t,"errors",null)}function ge(e,t,r,i){const{cacheKeyManager:s}=e._capabilities,n=t.id,o="deleteRecord"!==i&&r?s.updateRecordIdentifier(t,r):t,a=e.__peek(o,!1);(a.isDeleted||"deleteRecord"===i)&&(e.__graph.push({op:"deleteRecord",record:o,isNew:!1}),a.isDeleted=!0,a.isDeletionCommitted=!0,e._capabilities.notifyChange(o,"removed",null))
const l=pe(e,o)
let c
a.isNew=!1,r&&(r.id&&!a.id&&(a.id=r.id),o===t&&o.id!==n&&e._capabilities.notifyChange(o,"identity",null),r.relationships&&oe(e.__graph,l,o,r),c=r.attributes)
const u=c&&ie(a,c,l)
a.remoteAttrs=Object.assign(a.remoteAttrs||Object.create(null),a.inflightAttrs,c),a.inflightAttrs=null,le(a,u),a.errors&&(a.errors=null,e._capabilities.notifyChange(o,"errors",null)),u?.size&&re(e._capabilities,o,u),e._capabilities.notifyChange(o,"state",null)}function me(e,t){const r=e.__peek(t,!1)
r.inflightAttrs?r.localAttrs&&Object.assign(r.inflightAttrs,r.localAttrs):r.inflightAttrs=r.localAttrs,r.localAttrs=null}var _e=r(2294),be=r(9441),ve=r(9369),we=r(5348),ke=r(6316)
class Re{constructor(e,t,r={}){this.__store=e,this._snapshots=null,this.modelName=t,this.adapterOptions=r.adapterOptions,this.include=r.include}get _recordArray(){return this.__store.peekAll(this.modelName)}get length(){return this._recordArray.length}snapshots(){if(null!==this._snapshots)return this._snapshots
this.__store
const{_fetchManager:e}=this.__store,t=this._recordArray[ve.a]
return this._snapshots=t.source.map(t=>e.createSnapshot(t)),this._snapshots}}function Se(e){}function Ae(e,t,r,i,s,n){return e?e.normalizeResponse(t,r,i,s,n):i}class Ee{constructor(e,t,r){this._store=r,this.__attributes=null,this._belongsToRelationships=Object.create(null),this._belongsToIds=Object.create(null),this._hasManyRelationships=Object.create(null),this._hasManyIds=Object.create(null),(0,W.Rh)(r)
const i=!!r._instanceCache.peek(t)
if(this.modelName=t.type,this.identifier=t,i&&this._attributes,this.id=t.id,this.adapterOptions=e.adapterOptions,this.include=e.include,this.modelName=t.type,i){const e=this._store.cache
this._changedAttributes=e.changedAttrs(t)}}get record(){return this._store.peekRecord(this.identifier)}get _attributes(){if(null!==this.__attributes)return this.__attributes
const e=this.__attributes=Object.create(null),{identifier:t}=this,r=this._store.cache
return this.eachAttribute((i,s)=>{e[i]=r.getAttr(t,i)}),e}get isNew(){const e=this._store.cache
return e?.isNew(this.identifier)||!1}attr(e){if(e in this._attributes)return this._attributes[e]}attributes(){return{...this._attributes}}changedAttributes(){const e=Object.create(null)
if(!this._changedAttributes)return e
const t=Object.keys(this._changedAttributes)
for(let r=0,i=t.length;r<i;r++){const i=t[r]
e[i]=this._changedAttributes[i].slice()}return e}belongsTo(e,t){const r=!(!t||!t.id)
let i
const s=this._store
if(!0===r&&e in this._belongsToIds)return this._belongsToIds[e]
if(!1===r&&e in this._belongsToRelationships)return this._belongsToRelationships[e]
s.schema.fields({type:this.modelName}).get(e)
const{identifier:n}=this,o=this._store.cache.getRelationship(n,e),a=o&&o.data,l=a?s.cacheKeyManager.getOrCreateRecordIdentifier(a):null
if(o&&void 0!==o.data){const e=s.cache
i=l&&!e.isDeleted(l)?r?l.id:s._fetchManager.createSnapshot(l):null}return r?this._belongsToIds[e]=i:this._belongsToRelationships[e]=i,i}hasMany(e,t){const r=!(!t||!t.ids)
let i
const s=this._hasManyIds[e],n=this._hasManyRelationships[e]
if(!0===r&&e in this._hasManyIds)return s
if(!1===r&&e in this._hasManyRelationships)return n
const o=this._store,{identifier:a}=(o.schema.fields({type:this.modelName}).get(e),this),l=this._store.cache.getRelationship(a,e)
return l.data&&(i=[],l.data.forEach(e=>{const t=o.cacheKeyManager.getOrCreateRecordIdentifier(e)
o.cache.isDeleted(t)||(r?i.push(t.id):i.push(o._fetchManager.createSnapshot(t)))})),r?this._hasManyIds[e]=i:this._hasManyRelationships[e]=i,i}eachAttribute(e,t){"function"==typeof this._store.modelFor?this._store.modelFor(this.identifier.type).eachAttribute(e,t):this._store.schema.fields(this.identifier).forEach((r,i)=>{"attribute"===r.kind&&e.call(t,i,r)})}eachRelationship(e,t){"function"==typeof this._store.modelFor?this._store.modelFor(this.identifier.type).eachRelationship(e,t):this._store.schema.fields(this.identifier).forEach((r,i)=>{"belongsTo"!==r.kind&&"hasMany"!==r.kind||e.call(t,i,r)})}serialize(e){return this._store,this._store.serializerFor(this.modelName).serialize(this,e)}}const Me=(0,s.L1)("SaveOp",Symbol("SaveOp"))
class Ce{constructor(e){(0,W.Rh)(e),this._store=e,this._pendingFetch=new Map,this.requestCache=e.getRequestStateService(),this.isDestroyed=!1}createSnapshot(e,t={}){return new Ee(t,e,this._store)}scheduleSave(e,t){const r=(0,we.ud)(),i={data:[{op:"saveRecord",recordIdentifier:e,options:t}]},s={snapshot:this.createSnapshot(e,t),resolver:r,identifier:e,options:t,queryRequest:i},n=this.requestCache._enqueue(r.promise,s.queryRequest)
return function(e,t){const{snapshot:r,resolver:i,identifier:s,options:n}=t,o=e.adapterFor(s.type),a=n[Me],l=r.modelName,c=e.modelFor(l)
let u=Promise.resolve().then(()=>o[a](e,c,r))
const d=e.serializerFor(l)
u=u.then(t=>{if(t)return Ae(d,e,c,t,r.id,a)}),i.resolve(u)}(this._store,s),n}scheduleFetch(e,t,r){const i={data:[{op:"findRecord",recordIdentifier:e,options:t}]},s=this.getPendingFetch(e,t)
if(s)return s
const n=e.type,o=(0,we.ud)(),a={identifier:e,resolver:o,options:t,queryRequest:i},l=o.promise,c=this._store,u=!c._instanceCache.recordIsLoaded(e)
let d=this.requestCache._enqueue(l,a.queryRequest).then(r=>{r.data&&!Array.isArray(r.data)&&(r.data.lid=e.lid)
const i=c._push(r,t.reload)
return i&&!Array.isArray(i)?i:e},t=>{const r=c.cache
if(!r||r.isEmpty(e)||u){let t=!0
if(c._graph){const i=c._graph
r||(t=i.isReleasable(e),t||i.unload(e,!0))}(r||t)&&(c._enableAsyncFlush=!0,c._instanceCache.unloadRecord(e),c._enableAsyncFlush=null)}throw t})
0===this._pendingFetch.size&&new Promise(e=>setTimeout(e,0)).then(()=>{this.flushAllPendingFetches()})
const h=this._pendingFetch
let f=h.get(n)
f||(f=new Map,h.set(n,f))
let p=f.get(e)
return p||(p=[],f.set(e,p)),p.push(a),a.promise=d,d}getPendingFetch(e,t){const r=this._pendingFetch.get(e.type)?.get(e)
if(r){const e=r.find(e=>function(e={},t={}){return r=e.adapterOptions,i=t.adapterOptions,(!r||r===i||0===Object.keys(r).length)&&function(e,t){if(!e?.length)return!0
if(!t?.length)return!1
const r=(Array.isArray(e)?e:e.split(",")).sort(),i=(Array.isArray(t)?t:t.split(",")).sort()
if(r.join(",")===i.join(","))return!0
for(let s=0;s<r.length;s++)if(!i.includes(r[s]))return!1
return!0}(e.include,t.include)
var r,i}(t,e.options))
if(e)return e.promise}}flushAllPendingFetches(){if(this.isDestroyed)return
const e=this._store
this._pendingFetch.forEach((t,r)=>function(e,t,r){const i=e.adapterFor(r)
if(i.findMany&&i.coalesceFindRequests){const s=[]
t.forEach((e,r)=>{e.length>1||(t.delete(r),s.push(e[0]))})
const n=s.length
if(n>1){const t=new Array(n),o=new Map
for(let r=0;r<n;r++){const i=s[r]
t[r]=e._fetchManager.createSnapshot(i.identifier,i.options),o.set(t[r],i)}let a
a=i.groupRecordsForFindMany?i.groupRecordsForFindMany(e,t):[t]
for(let s=0,n=a.length;s<n;s++)Oe(e,o,a[s],i,r)}else 1===n&&qe(e,i,s[0])}t.forEach(t=>{t.forEach(t=>{qe(e,i,t)})})}(e,t,r)),this._pendingFetch.clear()}fetchDataIfNeededForIdentifier(e,t={},r){const i=function(e,t){const r=e.cache
if(!r)return!0
const i=r.isNew(t),s=r.isDeleted(t),n=r.isEmpty(t)
return(!i||s)&&n}(this._store._instanceCache,e),s=function(e,t){const r=e.store.getRequestStateService()
return!e.recordIsLoaded(t)&&r.getPendingRequestsForRecord(t).some(e=>"query"===e.type)}(this._store._instanceCache,e)
let n
return i?(t.reload=!0,n=this.scheduleFetch(e,t,r)):n=s?this.getPendingFetch(e,t):Promise.resolve(e),n}destroy(){this.isDestroyed=!0}}function Te(e,t,r){for(let i=0,s=t.length;i<s;i++){const s=t[i],n=e.get(s)
n&&n.resolver.reject(r||new Error(`Expected: '<${s.modelName}:${s.id}>' to be present in the adapter provided payload, but it was not found.`))}}function qe(e,t,r){const s=r.identifier,n=s.type,o=e._fetchManager.createSnapshot(s,r.options),a=e.modelFor(s.type),l=s.id
let c=Promise.resolve().then(()=>t.findRecord(e,a,s.id,o))
c=c.then(t=>{const r=Ae(e.serializerFor(n),e,a,t,l,"findRecord")
return(0,i.warn)(`You requested a record of type '${n}' with id '${l}' but the adapter returned a payload with primary data having an id of '${r.data.id}'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead.`,(0,W.pG)(r.data.id)===(0,W.pG)(l),{id:"ds.store.findRecord.id-mismatch"}),r}),r.resolver.resolve(c)}function Oe(e,t,r,s,n){r.length>1?function(e,t,r,i){const s=e.modelFor(r)
return Promise.resolve().then(()=>{const r=i.map(e=>e.id)
return t.findMany(e,s,r,i)}).then(t=>Ae(e.serializerFor(r),e,s,t,null,"findMany"))}(e,s,n,r).then(s=>{!function(e,t,r,s){const n=new Map
for(let i=0;i<r.length;i++){const e=r[i].id
let t=n.get(e)
t||(t=[],n.set(e,t)),t.push(r[i])}const o=Array.isArray(s.included)?s.included:[],a=s.data
for(let i=0,c=a.length;i<c;i++){const e=a[i],r=n.get(e.id)
n.delete(e.id),r?r.forEach(r=>{t.get(r).resolver.resolve({data:e})}):o.push(e)}if(o.length>0&&e._push({data:null,included:o},!0),0===n.size)return
const l=[]
n.forEach(e=>{l.push(...e)}),(0,i.warn)('Ember Data expected to find records with the following ids in the adapter response from findMany but they were missing: [ "'+[...n.values()].map(e=>e[0].id).join('", "')+'" ]',{id:"ds.store.missing-records-from-adapter"}),Te(t,l)}(e,t,r,s)}).catch(e=>{Te(t,r,e)}):1===r.length&&qe(e,s,t.get(r[0]))}function De(e,t,r,i){const s=t.data?(n=t.data,o=(t,s)=>{const{id:n,type:o}=t
return function(e,t,r,i){const{id:s,type:n}=e
e.relationships||(e.relationships={})
const{relationships:o}=e,a=function(e,t,r,i){const{name:s}=r,{type:n}=t,o=function(e,t,r){const i=e.schema.fields(t).get(r)
return i?i.options.inverse:null}(e,{type:n},s)
if(o)return{inverseKey:o,kind:e.schema.fields({type:i}).get(o).kind}}(r,t,i,n)
if(a){const{inverseKey:e,kind:r}=a,i=o[e]?.data
"hasMany"===r&&void 0===i||(o[e]=o[e]||{},o[e].data=function(e,t,{id:r,type:i}){const s={id:r,type:i}
let n=null
if("hasMany"===t){const t=e||[]
e&&e.find(e=>e.type===s.type&&e.id===s.id)||t.push(s),n=t}else{const t=e||{}
Object.assign(t,s),n=t}return n}(i??null,r,t))}}(t,r,e,i),{id:n,type:o}},Array.isArray(n)?n.map(o):o(n)):null
var n,o
const a={}
"meta"in t&&(a.meta=t.meta),"links"in t&&(a.links=t.links),"data"in t&&(a.data=s)
const l={id:r.id,type:r.type,relationships:{[i.name]:a}}
return Array.isArray(t.included)||(t.included=[]),t.included.push(l),t}const je=new Set(["findRecord","findAll","query","queryRecord","findBelongsTo","findHasMany","updateRecord","createRecord","deleteRecord"]),Ne={request(e,t){if(e.request.url||!e.request.op||!je.has(e.request.op))return t(e.request)
const{store:r}=e.request
switch(r._fetchManager||(r._fetchManager=new Ce(r)),e.request.op){case"findRecord":return function(e){const{store:t,data:r}=e.request,{record:i,options:s}=r
let n
if((0,W.Rh)(t),t._instanceCache.recordIsLoaded(i))if(s.reload)n=t._fetchManager.scheduleFetch(i,s,e.request)
else{let r=null
const o=t.adapterFor(i.type)
void 0===s.reload&&o.shouldReloadRecord&&o.shouldReloadRecord(t,r=t._fetchManager.createSnapshot(i,s))?(s.reload=!0,n=t._fetchManager.scheduleFetch(i,s,e.request)):(!1===s.backgroundReload||!s.backgroundReload&&o.shouldBackgroundReloadRecord&&!o.shouldBackgroundReloadRecord(t,r=r||t._fetchManager.createSnapshot(i,s))||(s.backgroundReload=!0,t._fetchManager.scheduleFetch(i,s,e.request)),n=Promise.resolve(i))}else n=t._fetchManager.fetchDataIfNeededForIdentifier(i,s,e.request)
return n.then(e=>t.peekRecord(e))}(e)
case"findAll":return function(e){const{store:t,data:r}=e.request,{type:i,options:s}=r;(0,W.Rh)(t)
const n=t.adapterFor(i),o=t.recordArrayManager._live.get(i),a=new Re(t,i,s)
let l
return s.reload||!1!==s.reload&&(n.shouldReloadAll&&n.shouldReloadAll(t,a)||!n.shouldReloadAll&&0===a.length)?(o&&(o.isUpdating=!0),l=Pe(n,t,i,a,e.request,!0)):(l=Promise.resolve(t.peekAll(i)),(s.backgroundReload||!1!==s.backgroundReload&&(!n.shouldBackgroundReloadAll||n.shouldBackgroundReloadAll(t,a)))&&(o&&(o.isUpdating=!0),Pe(n,t,i,a,e.request,!1))),l}(e)
case"query":return function(e){const{store:t,data:r}=e.request;(0,W.Rh)(t)
let{options:i}=r
const{type:s,query:n}=r,o=t.adapterFor(s),a=i._recordArray||t.recordArrayManager.getCollection({type:s,query:n})
delete i._recordArray
const l=t.modelFor(s)
return Promise.resolve().then(()=>o.query(t,l,n,a,i)).then(e=>{const r=Ae(t.serializerFor(s),t,l,e,null,"query"),i=t._push(r,!0)
return t.recordArrayManager.populateManagedArray(a,i,r),a})}(e)
case"queryRecord":return function(e){const{store:t,data:r}=e.request,{type:i,query:s,options:n}=r,o=t.adapterFor(i),a=t.modelFor(i)
return Promise.resolve().then(()=>o.queryRecord(t,a,s,n)).then(e=>{const r=Ae(t.serializerFor(i),t,a,e,null,"queryRecord"),s=t._push(r,!0)
return s?t.peekRecord(s):null})}(e)
case"findBelongsTo":return function(e){const{store:t,data:r,records:i}=e.request,{options:s,record:n,links:o,useLink:a,field:l}=r,c=i?.[0],u=c&&t._fetchManager.getPendingFetch(c,s)
if(u)return u
if(a)return function(e,t,r,i,s){return Promise.resolve().then(()=>{const n=e.adapterFor(t.type),o=e._fetchManager.createSnapshot(t,s),a=r&&"string"!=typeof r?r.href:r
return n.findBelongsTo(e,o,a,i)}).then(r=>{const s=e.modelFor(i.type)
let n=Ae(e.serializerFor(i.type),e,s,r,null,"findBelongsTo")
return n.data||n.links||n.meta?(n=De(e,n,t,i),e._push(n,!0)):null},null)}(t,n,o.related,l,s)
const d=t._fetchManager
return s.reload?d.scheduleFetch(c,s,e.request):d.fetchDataIfNeededForIdentifier(c,s,e.request)}(e)
case"findHasMany":return function(e){const{store:t,data:r,records:i}=e.request,{options:s,record:n,links:o,useLink:a,field:l}=r
if(a)return function(e,t,r,i,s,n){return Promise.resolve().then(()=>{const o=t._fetchManager.createSnapshot(r,n),a=i&&"string"!=typeof i?i.href:i
return e.findHasMany(t,o,a,s)}).then(e=>{const i=t.modelFor(s.type)
let n=Ae(t.serializerFor(s.type),t,i,e,null,"findHasMany")
return n=De(t,n,r,s),t._push(n,!0)},null)}(t.adapterFor(n.type),t,n,o.related,l,s)
const c=new Array(i.length),u=t._fetchManager
for(let d=0;d<i.length;d++){const t=i[d]
Se(),c[d]=s.reload?u.scheduleFetch(t,s,e.request):u.fetchDataIfNeededForIdentifier(t,s,e.request)}return Promise.all(c)}(e)
case"updateRecord":case"createRecord":case"deleteRecord":return function(e){const{store:t,data:r,op:i}=e.request,{options:s,record:n}=r;(0,W.Rh)(t),t.cache.willCommit(n,e)
const o=Object.assign({[Me]:i},s)
return t._fetchManager.scheduleSave(n,o).then(r=>{let s
return t._join(()=>{s=t.cache.didCommit(n,{request:e.request,content:r})}),t.lifetimes?.didRequest&&"createRecord"===i&&t.lifetimes.didRequest(e.request,{status:201},null,t),t.peekRecord(s.data)}).catch(e=>{let r=e
throw e?"string"==typeof e&&(r=new Error(e)):r=new Error("Unknown Error Occurred During Request"),function(e,t,r){if(r&&!0===r.isAdapterError&&"InvalidError"===r.code){const i=e.serializerFor(t.type)
if(i&&"function"==typeof i.extractErrors){const s=i.extractErrors(e,e.modelFor(t.type),r,t.id)
r.errors=function(e){const t=[]
return e&&Object.keys(e).forEach(r=>{const i=(s=e[r],Array.isArray(s)?s:[s])
var s
for(let e=0;e<i.length;e++){let s="Invalid Attribute",n=`/data/attributes/${r}`
r===xe&&(s="Invalid Document",n="/data"),t.push({title:s,detail:i[e],source:{pointer:n}})}}),t}(s)}}const i=e.cache
if(r.errors){let e=r.errors
0===e.length&&(e=[{title:"Invalid Error",detail:"",source:{pointer:"/data"}}]),i.commitWasRejected(t,e)}else i.commitWasRejected(t)}(t,n,r),r})}(e)
default:return t(e.request)}}},xe="base"
function Pe(e,t,r,i,s,n){const o=t.modelFor(r)
let a=Promise.resolve().then(()=>e.findAll(t,o,null,i))
return a=a.then(e=>{const s=Ae(t.serializerFor(r),t,o,e,null,"findAll")
return t._push(s,n),i._recordArray.isUpdating=!1,i._recordArray}),a}function Fe(e,t){this._adapterCache=this._adapterCache||Object.create(null)
const r=(0,W.di)(e),{_adapterCache:i}=this
let s=i[r]
if(s)return s
const n=(0,_e.getOwner)(this)
return s=n.lookup(`adapter:${r}`),void 0!==s?(i[r]=s,s):(s=i.application||n.lookup("adapter:application"),void 0!==s?(i[r]=s,i.application=s,s):void 0)}function Ie(e){this._serializerCache=this._serializerCache||Object.create(null)
const t=(0,W.di)(e),{_serializerCache:r}=this
let i=r[t]
if(i)return i
const s=(0,_e.getOwner)(this)
return i=s.lookup(`serializer:${t}`),void 0!==i?(r[t]=i,i):(i=r.application||s.lookup("serializer:application"),void 0!==i?(r[t]=i,r.application=i,i):null)}function Le(e,t){const r=(0,W.di)(e),i=this.serializerFor(r),s=this.modelFor(r)
return i.normalize(s,t)}function ze(e,t){const r=t||e,i=t?(0,W.di)(e):"application"
this.serializerFor(i).pushPayload(this,r)}function $e(e,t){return this._fetchManager||(this._fetchManager=new Ce(this)),this._fetchManager.createSnapshot((0,be.o)(e)).serialize(t)}function Ue(){for(const e in this._adapterCache){const t=this._adapterCache[e]
"function"==typeof t.destroy&&t.destroy()}for(const e in this._serializerCache){const t=this._serializerCache[e]
"function"==typeof t.destroy&&t.destroy()}}var Be=r(4471),Ke=r.n(Be),He=r(9370),Ge=r(941)
function We(e){{const t=(0,Ge.dasherize)(e)
return(0,i.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}var Ye=r(8382),Ve=r(9280),Ze=r.n(Ve),Qe=r(7104),Je=r.n(Qe)
const Xe=new WeakMap
function et(e,t,r,i){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
i&&(s.initializer=i)
for(let n of r)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,r){let i=Xe.get(e)
i||(i=new Map,Xe.set(e,i)),i.set(t,r)}(e,t,s)}function tt(e,t,r){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of r)i=s(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}function rt(e,t){let r=function(e,t){var r
let i=e.prototype
for(;i;){let e=null==(r=Xe.get(i))?void 0:r.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}var it,st,nt,ot=r(1389),at=r(8410),lt=r.n(at),ct=r(3991)
function ut(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function dt(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ht=Je().extend(Ze()),ft=Symbol.for("LegacyPromiseProxy"),pt=ht
class yt extends pt{get id(){const{key:e,legacySupport:t}=this._belongsToState
return t.referenceFor("belongsTo",e).id()}get meta(){}async reload(e){const{key:t,legacySupport:r}=this._belongsToState
return await r.reloadBelongsTo(t,e),this}}tt((it=yt).prototype,"id",[ke.m]),tt(it.prototype,"meta",[(0,Be.computed)()]),yt.prototype[ft]=!0
class gt{constructor(e,t){this._update(e,t),this.isDestroyed=!1,this[ft]=!0}get length(){return this["[]"],this.content?this.content.length:0}get"[]"(){return this.content?.length&&this.content}forEach(e){this.content&&this.length&&this.content.forEach(e)}reload(e){return this.content.reload(e),this}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}destroy(){this.isDestroyed=!0,this.content=null,this.promise=null}get links(){return this.content?this.content.links:void 0}get meta(){return this.content?this.content.meta:void 0}_update(e,t){void 0!==t&&(this.content=t),this.promise=function(e,t){return e.isPending=!0,e.isSettled=!1,e.isFulfilled=!1,e.isRejected=!1,Promise.resolve(t).then(t=>(e.isPending=!1,e.isFulfilled=!0,e.isSettled=!0,e.content=t,t),t=>{throw e.isPending=!1,e.isFulfilled=!1,e.isRejected=!0,e.isSettled=!0,t})}(this,e)}static create({promise:e,content:t}){return new this(e,t)}}tt((st=gt).prototype,"length",[ke.m]),tt(st.prototype,"[]",[ke.m]),tt(st.prototype,"links",[ke.m]),tt(st.prototype,"meta",[ke.m]),(0,ke.b)(gt.prototype,"content",null),(0,ke.b)(gt.prototype,"isPending",!1),(0,ke.b)(gt.prototype,"isRejected",!1),(0,ke.b)(gt.prototype,"isFulfilled",!1),(0,ke.b)(gt.prototype,"isSettled",!1)
class mt{constructor(e,t,r,i,s){dt(this,"___token",void 0),dt(this,"___identifier",void 0),dt(this,"___relatedTokenMap",void 0),this.graph=t,this.key=s,this.hasManyRelationship=i,this.type=i.definition.type,this.store=e,this.___identifier=r,this.___token=e.notifications.subscribe(r,(e,t,r)=>{"relationships"===t&&r===s&&this._ref++}),this.___relatedTokenMap=new Map}destroy(){this.store.notifications.unsubscribe(this.___token),this.___relatedTokenMap.forEach(e=>{this.store.notifications.unsubscribe(e)}),this.___relatedTokenMap.clear()}get identifiers(){bt(this),this._ref
const e=this._resource(),t=this.___relatedTokenMap
return this.___relatedTokenMap=new Map,e&&e.data?e.data.map(e=>{const r=this.store.cacheKeyManager.getOrCreateRecordIdentifier(e)
let i=t.get(r)
return i?t.delete(r):i=this.store.notifications.subscribe(r,(e,t,r)=>{("identity"===t||"attributes"===t&&"id"===r)&&this._ref++}),this.___relatedTokenMap.set(r,i),r}):(t.forEach(e=>{this.store.notifications.unsubscribe(e)}),t.clear(),[])}_resource(){return this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){const e=this._resource()
return e&&e.links&&e.links.related?"link":"ids"}ids(){return this.identifiers.map(e=>e.id)}link(){const e=this._resource()
if(t=e,Boolean(t&&t.links&&t.links.related)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}var t
return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}async push(e,t){const{store:r}=this,i=Array.isArray(e)?{data:e}:e,s=Array.isArray(i.data)&&i.data.length>0&&_t(i.data[0]),n=Array.isArray(i.data)?s?r._push(i,!0):i.data.map(e=>r.cacheKeyManager.getOrCreateRecordIdentifier(e)):[],{identifier:o}=this.hasManyRelationship,a={}
if(Array.isArray(i.data)&&(a.data=n),"links"in i&&(a.links=i.links),"meta"in i&&(a.meta=i.meta),(0,W.Rh)(r),r._join(()=>{this.graph.push({op:"updateRelationship",record:o,field:this.key,value:a})}),!t)return this.load()}_isLoaded(){if(!this.hasManyRelationship.state.hasReceivedData)return!1
const e=this.graph.getData(this.hasManyRelationship.identifier,this.key)
return!!e.data&&e.data.every(e=>((0,W.Rh)(this.store),!0===this.store._instanceCache.recordIsLoaded(e,!0)))}value(){const e=kt.get(this.___identifier)
return bt(this)?e.getManyArray(this.key):(this._ref,null)}async load(e){const t=kt.get(this.___identifier)
return this.hasManyRelationship.definition.isAsync||Mt(this.store,this._resource())?t.getHasMany(this.key,e):t.reloadHasMany(this.key,e)}reload(e){return kt.get(this.___identifier).reloadHasMany(this.key,e)}}function _t(e){return Object.keys(e).filter(e=>"id"!==e&&"type"!==e&&"lid"!==e).length>0}function bt(e){return!!e._isLoaded()||(e.graph.get(e.___identifier,e.key).accessed=!0,!1)}function vt(e){return Boolean(e&&e.links&&e.links.related)}tt(mt.prototype,"identifiers",[ke.m]),(0,ke.d)(mt.prototype,"_ref",0)
class wt{constructor(e,t,r,i,s){this.graph=t,this.key=s,this.belongsToRelationship=i,this.type=i.definition.type,this.store=e,this.___identifier=r,this.___relatedToken=null,this.___token=e.notifications.subscribe(r,(e,t,r)=>{"relationships"===t&&r===s&&this._ref++})}destroy(){this.store.notifications.unsubscribe(this.___token),this.___token=null,this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)}get identifier(){this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)
const e=this._resource()
if(e&&e.data){const t=this.store.cacheKeyManager.getOrCreateRecordIdentifier(e.data)
return this.___relatedToken=this.store.notifications.subscribe(t,(e,t,r)=>{("identity"===t||"attributes"===t&&"id"===r)&&this._ref++}),t}return null}id(){return this.identifier?.id||null}link(){const e=this._resource()
if(vt(e)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}_resource(){return this._ref,this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){return vt(this._resource())?"link":"id"}async push(e,t){const{store:r}=this,i=e.data&&_t(e.data)?r._push(e,!0):e.data?r.cacheKeyManager.getOrCreateRecordIdentifier(e.data):null,{identifier:s}=this.belongsToRelationship,n={}
if((e.data||null===e.data)&&(n.data=i),"links"in e&&(n.links=e.links),"meta"in e&&(n.meta=e.meta),(0,W.Rh)(r),r._join(()=>{this.graph.push({op:"updateRelationship",record:s,field:this.key,value:n})}),!t)return this.load()}value(){const e=this._resource()
return e&&e.data?this.store.peekRecord(e.data):null}async load(e){const t=kt.get(this.___identifier)
return this.belongsToRelationship.definition.isAsync||Mt(this.store,this._resource())?t.getBelongsTo(this.key,e):t.reloadBelongsTo(this.key,e).then(()=>this.value())}reload(e){return kt.get(this.___identifier).reloadBelongsTo(this.key,e).then(()=>this.value())}}tt(wt.prototype,"identifier",[ke.m]),(0,ke.d)(wt.prototype,"_ref",0)
const kt=(0,s.L1)("LEGACY_SUPPORT",new Map)
function Rt(e){const t=(0,W.o)(e)
let r=kt.get(t)
return r||(r=new St(e,t),kt.set(t,r)),r}class St{constructor(e,t){this.record=e,this.store=(0,W.v7)((0,W.fV)(e,!1)),this.identifier=t,this.cache=this.store.cache,this.store._graph&&(this.graph=this.store._graph),this._manyArrayCache=Object.create(null),this._relationshipPromisesCache=Object.create(null),this._relationshipProxyCache=Object.create(null),this._pending=Object.create(null),this.references=Object.create(null)}_syncArray(e){if(this.isDestroyed||this.isDestroying)return
const t=e[ve.a].source,r=this.identifier,[i,s]=this._getCurrentState(r,e.key)
s.meta&&(e.meta=s.meta),s.links&&(e.links=s.links),t.length=0,(0,W.RX)(t,i)}mutate(e){this.cache.mutate(e)}_findBelongsTo(e,t,r,i){const s=Tt(this,e)
return this._findBelongsToByJsonApiResource(t,this.identifier,r,i).then(e=>Et(this,s,r,e),e=>Et(this,s,r,null,e))}reloadBelongsTo(e,t){const r=this._relationshipPromisesCache[e]
if(r)return r
const i=Tt(this,e),s=this.store.cache.getRelationship(this.identifier,i),n=this.graph.get(this.identifier,i)
n.state.hasFailedLoadAttempt=!1,n.state.shouldForceReload=!0
const o=this._findBelongsTo(i,s,n,t)
return this._relationshipProxyCache[i]?this._updatePromiseProxyFor("belongsTo",i,{promise:o}):o}getBelongsTo(e,t){const{identifier:r}=this,i=Tt(this,e),s=this.store.cache.getRelationship(this.identifier,i),n=s&&s.data?s.data:null,o=this.store,a=this.graph.get(this.identifier,i),l=a.definition.isAsync,c={key:e,store:o,legacySupport:this,modelName:a.definition.type}
if(l){if(a.state.hasFailedLoadAttempt)return this._relationshipProxyCache[i]
const e=this._findBelongsTo(i,s,a,t),r=n&&o._instanceCache.recordIsLoaded(n)
return this._updatePromiseProxyFor("belongsTo",i,{promise:e,content:r?o._instanceCache.getRecord(n):null,_belongsToState:c})}return null===n?null:o._instanceCache.getRecord(n)}setDirtyBelongsTo(e,t){const r=Tt(this,e)
return this.cache.mutate({op:"replaceRelatedRecord",record:this.identifier,field:r,value:(i=t,i?(0,W.o)(i):null)},!0)
var i}_getCurrentState(e,t){const r=this.cache.getRelationship(e,t),i=this.store._instanceCache,s=[]
if(r.data)for(let n=0;n<r.data.length;n++){const e=r.data[n]
i.recordIsLoaded(e,!0)&&s.push(e)}return[s,r]}getManyArray(e,t){const r=Tt(this,e)
if(this.graph){let e=this._manyArrayCache[r]
if(t||(t=this.graph.get(this.identifier,r).definition),!e){const[i,s]=this._getCurrentState(this.identifier,r),n=Ct(this,r)
e=(0,W.WX)({store:this.store,manager:this,source:i,type:t.type,isLoaded:!t.isAsync,editable:!0,isAsync:t.isAsync,isPolymorphic:t.isPolymorphic,field:n,identifier:this.identifier,links:s.links||null,meta:s.meta||null}),this._manyArrayCache[r]=e}return e}}fetchAsyncHasMany(e,t,r,i){const s=Tt(this,e)
if(this.graph){let e=this._relationshipPromisesCache[s]
if(e)return e
const n=this.cache.getRelationship(this.identifier,s),o=this._findHasManyByJsonApiResource(n,this.identifier,t,i)
return o?(e=o.then(()=>Et(this,s,t,r),e=>Et(this,s,t,r,e)),this._relationshipPromisesCache[s]=e,e):(r.isLoaded=!0,Promise.resolve(r))}}reloadHasMany(e,t){const r=Tt(this,e)
if(this.graph){const e=this._relationshipPromisesCache[r]
if(e)return e
const i=this.graph.get(this.identifier,r),{definition:s,state:n}=i
n.hasFailedLoadAttempt=!1,n.shouldForceReload=!0
const o=this.getManyArray(r,s),a=this.fetchAsyncHasMany(r,i,o,t)
return this._relationshipProxyCache[r]?this._updatePromiseProxyFor("hasMany",r,{promise:a}):a}}getHasMany(e,t){const r=Tt(this,e)
if(this.graph){const e=this.graph.get(this.identifier,r),{definition:i,state:s}=e,n=this.getManyArray(r,i)
if(i.isAsync){if(s.hasFailedLoadAttempt)return this._relationshipProxyCache[r]
const i=this.fetchAsyncHasMany(r,e,n,t)
return this._updatePromiseProxyFor("hasMany",r,{promise:i,content:n})}return n}}_updatePromiseProxyFor(e,t,r){let i=this._relationshipProxyCache[t]
if("hasMany"===e){const{promise:e,content:s}=r
return i?i._update(e,s):i=this._relationshipProxyCache[t]=new gt(e,s),i}if(i){const{promise:e,content:t}=r
void 0!==t&&i.set("content",t),i.set("promise",e)}else i=yt.create(r),this._relationshipProxyCache[t]=i
return i}referenceFor(e,t){const r=Tt(this,t)
let i=this.references[r]
if(!i){this.graph
const{graph:e,identifier:s}=this,n=e.get(s,r),o=n.definition.kind
"belongsTo"===o?i=new wt(this.store,e,s,n,t):"hasMany"===o&&(i=new mt(this.store,e,s,n,t)),this.references[r]=i}return i}_findHasManyByJsonApiResource(e,t,r,i={}){if(this.graph){if(!e)return
const{definition:s,state:n}=r
this.store
const o=this.store.adapterFor?.(s.type),{isStale:a,hasDematerializedInverse:l,hasReceivedData:c,isEmpty:u,shouldForceReload:d}=n,h=Mt(this.store,e),f=e.data,p=e.links&&e.links.related&&("function"==typeof o?.findHasMany||void 0===f)&&(d||l||a||!h&&!u),y=this.store.schema.fields({type:s.inverseType}).get(s.key),g={useLink:p,field:y,links:e.links,meta:e.meta,options:i,record:t}
if(p){const t=y.options.linksMode?{url:At(e),op:"findHasMany",method:"GET",records:f||[],data:g,[Ye._q]:!1}:{op:"findHasMany",records:f||[],data:g,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}
return this.store.request(t)}const m=c&&!u,_=l||u&&Array.isArray(f)&&f.length>0,b=!d&&!a&&(m||_)
if(b&&h)return
return b||c&&!u||_?(i.reload=i.reload||!b||void 0,this.store.request({op:"findHasMany",records:f,data:g,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})):void 0}}_findBelongsToByJsonApiResource(e,t,r,i={}){if(!e)return Promise.resolve(null)
const s=Tt(this,r.definition.key)
if(this._pending[s])return this._pending[s]
const n=e.data?e.data:null,{isStale:o,hasDematerializedInverse:a,hasReceivedData:l,isEmpty:c,shouldForceReload:u}=r.state,d=Mt(this.store,e),h=e.links?.related&&(u||a||o||!d&&!c),f=this.store.schema.fields(this.identifier).get(r.definition.key),p={useLink:h,field:f,links:e.links,meta:e.meta,options:i,record:t}
if(h){const t=f.options.linksMode?{url:At(e),op:"findBelongsTo",method:"GET",records:n?[n]:[],data:p,[Ye._q]:!1}:{op:"findBelongsTo",records:n?[n]:[],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}},r=this.store.request(t)
return this._pending[s]=r.then(e=>f.options.linksMode?e.content.data:e.content).finally(()=>{this._pending[s]=void 0}),this._pending[s]}const y=l&&d&&!c,g=a||c&&e.data,m=!u&&!o&&(y||g)
return m&&!n?Promise.resolve(null):m&&d||null===n?.id?Promise.resolve(n):n?(i.reload=i.reload||!m||void 0,this._pending[s]=this.store.request({op:"findBelongsTo",records:[n],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then(e=>e.content).finally(()=>{this._pending[s]=void 0}),this._pending[s]):Promise.resolve(null)}destroy(){this.isDestroying=!0
let e=this._manyArrayCache
this._manyArrayCache=Object.create(null),Object.keys(e).forEach(t=>{e[t].destroy()}),e=this._relationshipProxyCache,this._relationshipProxyCache=Object.create(null),Object.keys(e).forEach(t=>{const r=e[t]
r.destroy&&r.destroy()}),e=this.references,this.references=Object.create(null),Object.keys(e).forEach(t=>{e[t].destroy()}),this.isDestroyed=!0}}function At(e){const t=e.links?.related
return"object"==typeof t?t.href:t}function Et(e,t,r,i,s){delete e._relationshipPromisesCache[t],r.state.shouldForceReload=!1
const n="hasMany"===r.definition.kind
if(n&&(0,ke.n)(i[ve.a].signal),s){r.state.hasFailedLoadAttempt=!0
const i=e._relationshipProxyCache[t]
throw i&&!n&&(i.content&&i.content.isDestroying&&i.set("content",null),e.store.notifications._flush()),s}return n?i.isLoaded=!0:e.store.notifications._flush(),r.state.hasFailedLoadAttempt=!1,r.state.isStale=!1,n||!i?i:e.store.peekRecord(i)}function Mt(e,t){(0,W.Rh)(e)
const r=e._instanceCache,i=t.data
return Array.isArray(i)?i.every(e=>r.recordIsLoaded(e)):!i||r.recordIsLoaded(i)}function Ct(e,t){const{identifier:r,store:i}=e
return i.schema.fields(r).get(t)??i.schema.cacheFields?.(r).get(t)}function Tt(e,t){const r=Ct(e,t)
return r?r.sourceKey??r.name:t}const qt=lt()
var Ot=new WeakMap,Dt=new WeakMap
class jt extends qt{constructor(...e){super(...e),ut(this,Ot,void rt(this,"messages")),ut(this,Dt,void rt(this,"isEmpty"))}get errorsByAttributeName(){return new Map}errorsFor(e){const t=this.errorsByAttributeName
let r=t.get(e)
return void 0===r&&(r=(0,ot.A)(),t.set(e,r)),(0,Be.get)(r,"[]"),r}get content(){return(0,ot.A)()}unknownProperty(e){const t=this.errorsFor(e)
if(0!==t.length)return t}add(e,t){const r=this._findOrCreateMessages(e,t)
this.addObjects(r),this.errorsFor(e).addObjects(r),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e)}_findOrCreateMessages(e,t){const r=this.errorsFor(e),i=Array.isArray(t)?t:[t],s=new Array(i.length)
for(let n=0;n<i.length;n++){const t=i[n],o=r.findBy("message",t)
s[n]=o||{attribute:e,message:t}}return s}remove(e){if(this.isEmpty)return
const t=this.rejectBy("attribute",e)
this.content.setObjects(t)
const r=this.errorsFor(e)
for(let i=0;i<r.length;i++)r[i].attribute===e&&r.replace(i,1)
this.errorsByAttributeName.delete(e),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e),this.notifyPropertyChange("length")}clear(){if(this.isEmpty)return
const e=this.errorsByAttributeName,t=[]
e.forEach(function(e,r){t.push(r)}),e.clear(),t.forEach(e=>{this.notifyPropertyChange(e)}),this.__record.currentState.notify("isValid"),super.clear()}has(e){return this.errorsFor(e).length>0}}tt((nt=jt).prototype,"errorsByAttributeName",[(0,Be.computed)()]),et(nt.prototype,"messages",[(0,ct.mapBy)("content","message")]),tt(nt.prototype,"content",[(0,Be.computed)()]),et(nt.prototype,"isEmpty",[(0,ct.not)("length")])
var Nt,xt,Pt=r(4666)
function Ft(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function It(e={}){e.isReloading=!0,e.reload=!0
const t=(0,be.o)(this)
return this.isReloading=!0,this[He.pm].request({op:"findRecord",data:{options:e,record:t},cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then(()=>this).finally(()=>{this.isReloading=!1})}function Lt(e){let t
return this.currentState.isNew&&this.currentState.isDeleted?t=Promise.resolve(this):(this.errors.clear(),t=this[He.pm].saveRecord(this,e)),t}function zt(e){const{isNew:t}=this.currentState
return this.deleteRecord(),t?Promise.resolve(this):this.save(e).then(e=>(this.unloadRecord(),this))}function $t(e,t,r,i){if("belongsTo"===i.kind)r.notifyPropertyChange(t)
else if("hasMany"===i.kind){const s=kt.get(e),n=s&&s._manyArrayCache[t],o=s&&s._relationshipPromisesCache[t]
if(n&&o)return
n&&((0,ke.n)(n[ve.a].signal),i.options.async&&r.notifyPropertyChange(t))}}function Ut(e,t,r,i){(0,Pt.cacheFor)(i,r)!==e.cache.getAttr(t,r)&&i.notifyPropertyChange(r)}const Bt=/^\/?data\/(attributes|relationships)\/(.*)/,Kt=/^\/?data/
function Ht(e){return!!e&&e instanceof Error&&"isAdapterError"in e&&!0===e.isAdapterError&&"code"in e&&"InvalidError"===e.code}class Gt{constructor(e){const t=(0,be.fV)(e,!1),r=(0,W.o)(e)
this.identifier=r,this.record=e,this.cache=t.cache,this.pendingCount=0,this.fulfilledCount=0,this.rejectedCount=0,this._errorRequests=[],this._lastError=null
const i=t.getRequestStateService(),s=t.notifications,n=e=>{if("mutation"===e.type)switch(e.state){case"pending":this.isSaving=!0
break
case"rejected":this.isSaving=!1,this._lastError=e,e.response&&Ht(e.response.data)||this._errorRequests.push(e),Wt(this)
break
case"fulfilled":this._errorRequests=[],this._lastError=null,this.isSaving=!1,this.notify("isDirty"),Wt(this)}else switch(e.state){case"pending":this.pendingCount++,this.notify("isLoading")
break
case"rejected":this.pendingCount--,this._lastError=e,e.response&&Ht(e.response.data)||this._errorRequests.push(e),this.notify("isLoading"),Wt(this)
break
case"fulfilled":this.pendingCount--,this.fulfilledCount++,this.notify("isLoading"),this.notify("isDirty"),Wt(this),this._errorRequests=[],this._lastError=null}}
i.subscribeForRecord(r,n)
const o=i.getLastRequestForRecord(r)
o&&n(o),this.handler=s.subscribe(r,(e,t,r)=>{switch(t){case"state":this.notify("isSaved"),this.notify("isNew"),this.notify("isDeleted"),this.notify("isDirty")
break
case"attributes":this.notify("isEmpty"),this.notify("isDirty")
break
case"errors":this.updateInvalidErrors(this.record.errors),this.notify("isValid")}})}destroy(){(0,be.fV)(this.record,!1).notifications.unsubscribe(this.handler)}notify(e){const t=(0,ke.c)(this),r=(0,ke.p)(t,e)
r&&(0,ke.n)(r)}updateInvalidErrors(e){const t=this.cache.getErrors(this.identifier)
e.clear()
for(let r=0;r<t.length;r++){const i=t[r]
if(i.source&&i.source.pointer){const t=i.source.pointer.match(Bt)
let r
if(t?r=t[2]:-1!==i.source.pointer.search(Kt)&&(r="base"),r){const t=i.detail||i.title
e.add(r,t)}}}}cleanErrorRequests(){this.notify("isValid"),this.notify("isError"),this.notify("adapterError"),this._errorRequests=[],this._lastError=null}get isLoading(){return!this.isLoaded&&this.pendingCount>0&&0===this.fulfilledCount}get isLoaded(){return!!this.isNew||this.fulfilledCount>0||!this.isEmpty}get isSaved(){const e=this.cache
return this.isDeleted?e.isDeletionCommitted(this.identifier):!(this.isNew||this.isEmpty||!this.isValid||this.isDirty||this.isLoading)}get isEmpty(){const e=this.cache
return!this.isNew&&e.isEmpty(this.identifier)}get isNew(){return this.cache.isNew(this.identifier)}get isDeleted(){return this.cache.isDeleted(this.identifier)}get isValid(){return 0===this.record.errors.length}get isDirty(){const e=this.cache
return!(this.isEmpty||e.isDeletionCommitted(this.identifier)||this.isDeleted&&this.isNew)&&(this.isDeleted||this.isNew||e.hasChangedAttrs(this.identifier))}get isError(){return!!this._errorRequests[this._errorRequests.length-1]}get adapterError(){const e=this._lastError
return e?"rejected"===e.state&&e.response.data:null}get isPreloaded(){return!this.isEmpty&&this.isLoading}get stateName(){return this.isLoading?"root.loading":this.isEmpty?"root.empty":this.isDeleted?this.isSaving?"root.deleted.inFlight":this.isSaved?"root.deleted.saved":this.isValid?"root.deleted.uncommitted":"root.deleted.invalid":this.isNew?this.isSaving?"root.loaded.created.inFlight":this.isValid?"root.loaded.created.uncommitted":"root.loaded.created.invalid":this.isSaving?"root.loaded.updated.inFlight":this.isValid?this.isDirty?"root.loaded.updated.uncommitted":"root.loaded.saved":"root.loaded.updated.invalid"}get dirtyType(){return this.isLoading||this.isEmpty?"":this.isDirty&&this.isDeleted?"deleted":this.isNew?"created":this.isSaving||!this.isValid||this.isDirty?"updated":""}}function Wt(e){e.notify("isValid"),e.notify("isError"),e.notify("adapterError")}function Yt(e,t,r){const i=new WeakMap,s=r.get
return r.get=function(){let e=i.get(this)
return e||(e={hasComputed:!1,value:void 0},i.set(this,e)),e.hasComputed||(e.value=s.call(this),e.hasComputed=!0),e.value},r}tt((Nt=Gt).prototype,"isLoading",[ke.g]),tt(Nt.prototype,"isLoaded",[ke.g]),tt(Nt.prototype,"isSaved",[ke.g]),tt(Nt.prototype,"isEmpty",[ke.g]),tt(Nt.prototype,"isNew",[ke.g]),tt(Nt.prototype,"isDeleted",[ke.g]),tt(Nt.prototype,"isValid",[ke.g]),tt(Nt.prototype,"isDirty",[ke.g]),tt(Nt.prototype,"isError",[ke.g]),tt(Nt.prototype,"adapterError",[ke.g]),tt(Nt.prototype,"isPreloaded",[ke.m]),tt(Nt.prototype,"stateName",[ke.m]),tt(Nt.prototype,"dirtyType",[ke.m]),(0,ke.b)(Gt.prototype,"isSaving",!1)
class Vt extends(Ke()){init(e){const t=e._createProps,r=e._secretInit
e._createProps=null,e._secretInit=null
const i=this.store=r.store
super.init(e),this[He.pm]=i
const s=r.identifier
r.cb(this,s,r.store),this.___recordState=null,this.setProperties(t)
const n=i.notifications
this.___private_notifications=n.subscribe(s,(e,t,r)=>{!function(e,t,r,i,s){switch(t){case"added":case"attributes":r?Ut(s,e,r,i):i.eachAttribute(t=>{Ut(s,e,t,i)})
break
case"relationships":if(r){const t=i.constructor.relationshipsByName.get(r)
$t(e,r,i,t)}else i.eachRelationship((t,r)=>{$t(e,t,i,r)})
break
case"identity":(0,ke.n)((0,ke.p)((0,ke.c)(i),"id"))}}(e,t,r,this,i)})}destroy(){const e=(0,be.o)(this)
this.___recordState?.destroy(),(0,be.fV)(this,!1).notifications.unsubscribe(this.___private_notifications)
const t=kt.get(e)
t&&(t.destroy(),kt.delete(e)),super.destroy()}get isEmpty(){return this.currentState.isEmpty}get isLoading(){return this.currentState.isLoading}get isLoaded(){return this.currentState.isLoaded}get hasDirtyAttributes(){return this.currentState.isDirty}get isSaving(){return this.currentState.isSaving}get isDeleted(){return this.currentState.isDeleted}get isNew(){return this.currentState.isNew}get isValid(){return this.currentState.isValid}get dirtyType(){return this.currentState.dirtyType}get isError(){return this.currentState.isError}set isError(e){}get id(){return(0,be.o)(this).id}set id(e){const t=(0,W.pG)(e),r=(0,be.o)(this),i=t!==r.id;(0,W.Rh)(this.store),null!==t&&i&&(this.store._instanceCache.setRecordId(r,t),this.store.notifications.notify(r,"identity",null))}toString(){return`<model::${this.constructor.modelName}:${this.id}>`}get currentState(){return this.___recordState||(this.___recordState=new Gt(this)),this.___recordState}set currentState(e){throw new Error("cannot set currentState")}get errors(){const e=jt.create({__record:this})
return this.currentState.updateInvalidErrors(e),e}get adapterError(){return this.currentState.adapterError}set adapterError(e){throw new Error("adapterError is not directly settable")}notifyPropertyChange(e){const t=(0,ke.c)(this);(0,ke.e)(t,this,e,void 0),super.notifyPropertyChange(e)}attr(){}eachRelationship(e,t){this.constructor.eachRelationship(e,t)}relationshipFor(e){return this.constructor.relationshipsByName.get(e)}inverseFor(e){return this.constructor.inverseFor(e,(0,be.fV)(this,!1))}eachAttribute(e,t){this.constructor.eachAttribute(e,t)}static typeForRelationship(e,t){const r=this.relationshipsByName.get(e)
return r&&t.modelFor(r.type)}static get inverseMap(){return Object.create(null)}static inverseFor(e,t){const r=this.inverseMap
if(r[e])return r[e]
{const i=this._findInverseFor(e,t)
return r[e]=i,i}}static _findInverseFor(e,t){const r=this.relationshipsByName.get(e)
if(!r)return null
const{options:i}=r
return null===i.inverse?null:t.schema.hasResource(r)&&t.schema.fields(r).get(i.inverse)||null}static get relationships(){const e=new Map
return this.relationshipsByName.forEach(t=>{const{type:r}=t
e.has(r)||e.set(r,[]),e.get(r).push(t)}),e}static get relationshipNames(){const e={hasMany:[],belongsTo:[]}
return this.eachComputedProperty((t,r)=>{Zt(r)&&e[r.kind].push(t)}),e}static get relatedTypes(){const e=[],t=this.relationshipsObject,r=Object.keys(t)
for(let i=0;i<r.length;i++){const s=t[r[i]].type
e.includes(s)||e.push(s)}return e}static get relationshipsByName(){const e=new Map,t=this.relationshipsObject,r=Object.keys(t)
for(let i=0;i<r.length;i++){const s=t[r[i]]
e.set(s.name,s)}return e}static get relationshipsObject(){const e=Object.create(null)
return this.modelName,this.eachComputedProperty((t,r)=>{Zt(r)&&(r.key=t,r.name=t,e[t]=r)}),e}static get fields(){const e=new Map
return this.eachComputedProperty((t,r)=>{Zt(r)?e.set(t,r.kind):Qt(r)&&e.set(t,"attribute")}),e}static eachRelationship(e,t){this.relationshipsByName.forEach((r,i)=>{e.call(t,i,r)})}static eachRelatedType(e,t){const r=this.relatedTypes
for(let i=0;i<r.length;i++){const s=r[i]
e.call(t,s)}}static determineRelationshipType(e,t){const r=e.name,i=e.kind,s=this.inverseFor(r,t)
return s?"belongsTo"===s.kind?"belongsTo"===i?"oneToOne":"manyToOne":"belongsTo"===i?"oneToMany":"manyToMany":"belongsTo"===i?"oneToNone":"manyToNone"}static get attributes(){const e=new Map
return this.eachComputedProperty((t,r)=>{Qt(r)&&(r.key=t,r.name=t,e.set(t,r))}),e}static get transformedAttributes(){const e=new Map
return this.eachAttribute((t,r)=>{r.type&&e.set(t,r.type)}),e}static eachAttribute(e,t){this.attributes.forEach((r,i)=>{e.call(t,i,r)})}static eachTransformedAttribute(e,t){this.transformedAttributes.forEach((r,i)=>{e.call(t,i,r)})}static toString(){return`model:${this.modelName}`}}function Zt(e){return"object"==typeof e&&null!==e&&"kind"in e&&"options"in e&&("hasMany"===e.kind||"belongsTo"===e.kind)}function Qt(e){return"object"==typeof e&&null!==e&&"kind"in e&&"attribute"===e.kind}tt((xt=Vt).prototype,"isEmpty",[ke.m]),tt(xt.prototype,"isLoading",[ke.m]),tt(xt.prototype,"isLoaded",[ke.m]),tt(xt.prototype,"hasDirtyAttributes",[ke.m]),tt(xt.prototype,"isSaving",[ke.m]),tt(xt.prototype,"isDeleted",[ke.m]),tt(xt.prototype,"isNew",[ke.m]),tt(xt.prototype,"isValid",[ke.m]),tt(xt.prototype,"dirtyType",[ke.m]),tt(xt.prototype,"isError",[ke.m]),tt(xt.prototype,"id",[ke.g]),tt(xt.prototype,"currentState",[ke.g]),tt(xt.prototype,"errors",[Yt]),tt(xt.prototype,"adapterError",[ke.m]),Ft(Vt,"isModel",!0),Ft(Vt,"modelName",null),tt(xt,"inverseMap",[Yt]),tt(xt,"relationships",[Yt]),tt(xt,"relationshipNames",[Yt]),tt(xt,"relatedTypes",[Yt]),tt(xt,"relationshipsByName",[Yt]),tt(xt,"relationshipsObject",[Yt]),tt(xt,"fields",[Yt]),tt(xt,"attributes",[Yt]),tt(xt,"transformedAttributes",[Yt]),Vt.prototype.save=function(e){return(0,i.deprecate)("record.save is deprecated, please use store.request to initiate a request instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),Lt.call(this,e)},Vt.prototype.destroyRecord=function(e){return(0,i.deprecate)("record.destroyRecord is deprecated, please use store.request to initiate a request instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),zt.call(this,e)},Vt.prototype.unloadRecord=function(){this.currentState.isNew&&(this.isDestroyed||this.isDestroying)||this[He.pm].unloadRecord(this)},Vt.prototype.hasMany=function(e){return Rt(this).referenceFor("hasMany",e)},Vt.prototype.belongsTo=function(e){return Rt(this).referenceFor("belongsTo",e)},Vt.prototype.serialize=function(e){return this[He.pm],this[He.pm].serializeRecord(this,e)},Vt.prototype._createSnapshot=function(){const e=this[He.pm]
return e._fetchManager||(e._fetchManager=new Ce(e)),e._fetchManager.createSnapshot((0,be.o)(this))},Vt.prototype.deleteRecord=function(){this.currentState&&this[He.pm].deleteRecord(this)},Vt.prototype.changedAttributes=function(){return this[He.pm].cache.changedAttrs((0,be.o)(this))},Vt.prototype.rollbackAttributes=function(){const{currentState:e}=this,{isNew:t}=e,r=this[He.pm];(0,W.Rh)(r),r._join(()=>{r.cache.rollbackAttrs((0,be.o)(this)),this.errors.clear(),e.cleanErrorRequests(),t&&this.unloadRecord()})},Vt.prototype.reload=function(e={}){return(0,i.deprecate)("record.reload is deprecated, please use store.request to initiate a request instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),It.call(this,e)},(0,ke.a)(Vt.prototype,"isReloading",{get(){return(0,i.deprecate)("record.isReloading is deprecated, please use store.request and either <Request> or getRequuestState to keep track of the request state instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),this._isReloading??!1},set(e){this._isReloading=e},configurable:!0,isLocal:!0}),Vt.prototype._createProps=null,Vt.prototype._secretInit=null
class Jt{constructor(e){this.store=e,this._schemas=new Map,this._typeMisses=new Set}resourceTypes(){return Array.from(this._schemas.keys())}hasTrait(e){return!1}resourceHasTrait(e,t){return!1}transformation(e){}derivation(e){}hashFn(e){}resource(e){const t=We(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).schema}registerResources(e){}registerResource(e){}registerTransformation(e){}registerDerivation(e){}registerHashFn(e){}_loadModelSchema(e){const t=this.store.modelFor(e),r=t.attributes,i=Object.create(null)
r.forEach((e,t)=>i[t]=e)
const s=t.relationshipsObject||null,n=new Map
for(const a of Object.values(i))n.set(a.name,a)
for(const a of Object.values(s))n.set(a.name,a)
const o={schema:{legacy:!0,identity:{name:"id",kind:"@id"},type:e,fields:Array.from(n.values())},attributes:i,relationships:s,fields:n}
return this._schemas.set(e,o),o}fields(e){const t=We(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).fields}hasResource(e){const t=We(e.type)
return!!this._schemas.has(t)||!this._typeMisses.has(t)&&!(null===Xt(this.store,t)&&(this._typeMisses.add(t),1))}}function Xt(e,t){e._modelFactoryCache||(e._modelFactoryCache=Object.create(null))
const r=e._modelFactoryCache
let i=r[t]
if(!i){if(i=(0,_e.getOwner)(e).factoryFor(`model:${t}`),i||(i=function(e,t){const r=(0,_e.getOwner)(e),i=r.factoryFor(`mixin:${t}`),s=i&&i.class
if(s){const e=Vt.extend(s)
e.__isMixin=!0,e.__mixin=s,r.register(`model:${t}`,e)}return r.factoryFor(`model:${t}`)}(e,t)),!i)return null
const s=i.class
s.isModel&&(s.modelName&&Object.prototype.hasOwnProperty.call(s,"modelName")||Object.defineProperty(s,"modelName",{value:t})),r[t]=i}return i}function er(e,t){const r=e.type,i={_createProps:t??{},_secretInit:{identifier:e,store:this,cb:ir}}
return(0,_e.setOwner)(i,(0,_e.getOwner)(this)),Xt(this,r).class.create(i)}function tr(e){e.destroy()}function rr(e){(0,W.Rh)(this)
const t=Xt(this,We(e)),r=t&&t.class?t.class:null
if(r&&r.isModel&&!this._forceShim)return r}function ir(e,t,r){(0,W.TP)(e,t),W.i.set(e,r)}Jt.prototype.doesTypeExist=function(e){return(0,i.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this.hasResource({type:e})},Jt.prototype.attributesDefinitionFor=function(e){(0,i.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=We(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).attributes},Jt.prototype.relationshipsDefinitionFor=function(e){(0,i.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=We(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).relationships}
{let e=!1,t=!1,s=!1
if(e=!0,!s){const{buildSignalConfig:e}=(sr=r(8738),sr?.__esModule?sr:{default:sr,...sr});(0,ke.u)(e)}if(!s){const r=["Using WarpDrive with EmberJS requires configuring it to use Ember's reactivity system.","Previously this was provided by installing the package '@ember-data/tracking', but this package is now deprecated.","","To resolve this deprecation, follow these steps:",!!e&&'- remove "@ember-data/tracking" and (if needed) "@ember-data-types/tracking" from your project in both your package.json and tsconfig.json',!t&&'- add "@warp-drive/ember" to your project in your package.json (and run install)',"- add the following import to your app.js file:","","\t```","\timport '@warp-drive/ember/install';","\t```","","- mark this deprecation as resolved in your project by adding the following to your WarpDrive config in ember-cli-build.js:","","\t```",'\tconst { setConfig } = await import("@warp-drive/build-config");',"\tsetConfig(app, __dirname, {","\t  deprecations: {","\t    DEPRECATE_TRACKING_PACKAGE: false,","\t  },","\t});","\t```","","For more information, see the Package Unification RFC: https://rfcs.emberjs.com/id/1075-warp-drive-package-unification/"].filter(e=>!1!==e).join("\n");(0,i.deprecate)(r,!1,{id:"warp-drive.deprecate-tracking-package",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"4.13"},url:"https://deprecations.emberjs.com/id/warp-drive.deprecate-tracking-package"})}}var sr
function nr(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class or extends be.il{constructor(e){super(e),nr(this,"serializerFor",(...e)=>((0,i.deprecate)("store.serializerFor is deprecated, please use store.request to perform requests and builders/handlers/utils to produce and process them, or explicitly register the serializerFor hook and LegacyNetworkHandler from @ember-data/legacy-compat or @warp-drive/legacy.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),Ie.call(this,...e))),nr(this,"pushPayload",(...e)=>((0,i.deprecate)("store.pushPayload is deprecated, please use store.request to perform requests and builders/handlers/utils to produce and process them, or explicitly register the pushPayload and serializerFor hooks from @ember-data/legacy-compat or @warp-drive/legacy.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),ze.call(this,...e))),nr(this,"normalize",(...e)=>((0,i.deprecate)("store.normalize is deprecated, please use store.request to perform requests and builders/handlers/utils to produce and process them, or explicitly register the normalize and serializerFor hooks from @ember-data/legacy-compat or @warp-drive/legacy.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),Le.call(this,...e))),nr(this,"serializeRecord",(...e)=>((0,i.deprecate)("store.serializeRecord is deprecated, please use store.request to perform requests and builders/handlers/utils to produce and process them, or explicitly register the serializeRecord and serializerFor hooks from @ember-data/legacy-compat or @warp-drive/legacy.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),$e.call(this,...e))),"requestManager"in this||(this.requestManager=new be.Je,this.requestManager.use([Ne,be.Fp])),this.requestManager.useCache(be.lL)}createSchemaService(){return new Jt(this)}createCache(e){return new Z(e)}instantiateRecord(e,t){return er.call(this,e,t)}teardownRecord(e){return tr.call(this,e)}modelFor(e){return rr.call(this,e)||super.modelFor(e)}adapterFor(e,t){return(0,i.deprecate)("store.adapterFor is deprecated, please use store.request to perform requests and builders/handlers/utils to produce and process them, or explicitly register the adapterFor hook and LegacyNetworkHandler from @ember-data/legacy-compat or @warp-drive/legacy.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),Fe.call(this,e,t)}destroy(){Ue.call(this),super.destroy()}}},8382:(e,t,r)=>{"use strict"
r.d(t,{ER:()=>s,J6:()=>o,_q:()=>n,k0:()=>a})
var i=r(1113)
const s=(0,i.vs)("SkipCache",Symbol.for("wd:skip-cache")),n=(0,i.vs)("EnableHydration",Symbol.for("wd:enable-hydration")),o=(0,i.L1)("IS_FUTURE",Symbol("IS_FUTURE")),a=(0,i.L1)("DOC",Symbol("DOC"))},8411:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{ModuleRegistry:()=>g,default:()=>m})
class i{constructor(e,t,r){this.limit=e,this.func=t,this.store=r,this.size=0,this.misses=0,this.hits=0,this.store=r||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const s=/[ _]/g,n=new i(1e3,e=>{return(t=e,p.get(t)).replace(s,"-")
var t}),o=/^(\-|_)+(.)?/,a=/(.)(\-|\_|\.|\s)+(.)?/g,l=/(^|\/|\.)([a-z])/g,c=new i(1e3,e=>{const t=(e,t,r)=>r?`_${r.toUpperCase()}`:"",r=(e,t,r,i)=>t+(i?i.toUpperCase():""),i=e.split("/")
for(let s=0;s<i.length;s++)i[s]=i[s].replace(o,t).replace(a,r)
return i.join("/").replace(l,e=>e.toUpperCase())}),u=/([a-z\d])([A-Z]+)/g,d=/\-|\s+/g,h=new i(1e3,e=>e.replace(u,"$1_$2").replace(d,"_").toLowerCase()),f=/([a-z\d])([A-Z])/g,p=new i(1e3,e=>e.replace(f,"$1_$2").toLowerCase())
function y(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class g{constructor(e){this._entries=e||globalThis.requirejs.entries}moduleNames(){return Object.keys(this._entries)}has(e){return e in this._entries}get(...e){return globalThis.require(...e)}}class m{static create(e){return new this(e)}static withModules(e){var t
return y(t=class extends(this){},"explicitModules",e),t}constructor(e){if(y(this,"moduleBasedResolver",!0),y(this,"_deprecatedPodModulePrefix",!1),y(this,"_normalizeCache",Object.create(null)),y(this,"moduleNameLookupPatterns",[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]),Object.assign(this,e),!this._moduleRegistry){let e=this.constructor.explicitModules
e?this._moduleRegistry={moduleNames:()=>Object.keys(e),has:t=>Boolean(e[t]),get:t=>e[t],addModules(t){e=Object.assign({},e,t)}}:(void 0===globalThis.requirejs.entries&&(globalThis.requirejs.entries=globalThis.requirejs._eak_seen),this._moduleRegistry=new g)}this.pluralizedTypes=this.pluralizedTypes||Object.create(null),this.pluralizedTypes.config||(this.pluralizedTypes.config="config")}makeToString(e,t){return this.namespace.modulePrefix+"@"+t+":"}shouldWrapInClassFactory(){return!1}parseName(e){if(!0===e.parsedName)return e
let t,r,i,s=e.split("@")
if(3===s.length){if(0===s[0].length){t=`@${s[1]}`
let e=s[2].split(":")
r=e[0],i=e[1]}else t=`@${s[1]}`,r=s[0].slice(0,-1),i=s[2]
"template:components"===r&&(i=`components/${i}`,r="template")}else if(2===s.length){let e=s[0].split(":")
if(2===e.length)0===e[1].length?(r=e[0],i=`@${s[1]}`):(t=e[1],r=e[0],i=s[1])
else{let e=s[1].split(":")
t=s[0],r=e[0],i=e[1]}"template"===r&&0===t.lastIndexOf("components/",0)&&(i=`components/${i}`,t=t.slice(11))}else s=e.split(":"),r=s[0],i=s[1]
let n=i,o=this.namespace
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:r}),type:r,fullNameWithoutType:n,name:i,root:o,resolveMethodName:"resolve"+(a=r,c.get(a))}
var a}resolveOther(e){_("`modulePrefix` must be defined",this.namespace.modulePrefix)
let t=this.findModuleName(e)
if(t){let i=this._extractDefaultExport(t,e)
if(void 0===i)throw new Error(` Expected to find: '${e.fullName}' within '${t}' but got 'undefined'. Did you forget to 'export default' within '${t}'?`)
return this.shouldWrapInClassFactory(i,e)&&(r=i,i={create:e=>"function"==typeof r.extend?r.extend(e):r}),i}var r}normalize(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))}resolve(e){if("resolver:current"===e)return{create:()=>this}
let t,r=this.parseName(e),i=r.resolveMethodName
return"function"==typeof this[i]&&(t=this[i](r)),null==t&&(t=this.resolveOther(r)),t}addModules(e){if(!this._moduleRegistry.addModules)throw new Error("addModules is only supported when your Resolver has been configured to use static modules via Resolver.withModules()")
this._moduleRegistry.addModules(e)}_normalize(e){let t=e.split(":")
if(t.length>1){let e=t[0]
return"component"===e||"helper"===e||"modifier"===e||"template"===e&&0===t[1].indexOf("components/")?e+":"+t[1].replace(/_/g,"-"):e+":"+(r=t[1].replace(/\./g,"/"),n.get(r))}return e
var r}pluralize(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")}podBasedLookupWithPrefix(e,t){let r=t.fullNameWithoutType
return"template"===t.type&&(r=r.replace(/^components\//,"")),e+"/"+r+"/"+t.type}podBasedModuleName(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)}podBasedComponentsInSubdir(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)}resolveEngine(e){let t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)}resolveRouteMap(e){let t=e.fullNameWithoutType,r=t+"/routes"
if(this._moduleRegistry.has(r)){let e=this._extractDefaultExport(r)
return _(`The route map for ${t} should be wrapped by 'buildRoutes' before exporting.`,e.isRouteMap),e}}resolveTemplate(e){return this.resolveOther(e)}mainModuleName(e){if("main"===e.fullNameWithoutType)return e.prefix+"/"+e.type}defaultModuleName(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType}nestedColocationComponentModuleName(e){if("component"===e.type)return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType+"/index"}prefix(e){let t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t}findModuleName(e){let t,r=this.moduleNameLookupPatterns
for(let i=0,s=r.length;i<s;i++){let s=r[i].call(this,e)
if(s&&(s=this.chooseModuleName(s)),s&&this._moduleRegistry.has(s)&&(t=s),t)return t}}chooseModuleName(e){let t=(r=e,h.get(r))
var r
if(e!==t&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(t))throw new TypeError(`Ambiguous module names: '${e}' and '${t}'`)
return this._moduleRegistry.has(e)?e:this._moduleRegistry.has(t)?t:void 0}knownForType(e){let t=this._moduleRegistry.moduleNames(),r=Object.create(null)
for(let i=0,s=t.length;i<s;i++){let s=t[i],n=this.translateToContainerFullname(e,s)
n&&(r[n]=!0)}return r}translateToContainerFullname(e,t){let r=this.prefix({type:e}),i=r+"/",s="/"+e,n=t.indexOf(i),o=t.indexOf(s)
if(0===n&&o===t.length-s.length&&t.length>i.length+s.length)return e+":"+t.slice(n+i.length,o)
let a=r+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(a)&&t.length>a.length?e+":"+t.slice(a.length):void 0}_extractDefaultExport(e){let t=this._moduleRegistry.get(e,null,null,!0)
return t&&t.default&&(t=t.default),t}}function _(e,t){if(!t)throw new Error(e)}y(m,"moduleBasedResolver",!0)},8604:function(e){var t
t=function(){"use strict"
function e(e,t){return e(t={exports:{}},t.exports),t.exports}"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self
var t=e(function(e){e.exports&&(e.exports=function(){var e=3,t=4,r=12,i=13,s=16,n=17
function o(e,t){return 55296<=e.charCodeAt(t)&&e.charCodeAt(t)<=56319&&56320<=e.charCodeAt(t+1)&&e.charCodeAt(t+1)<=57343}function a(e,t){void 0===t&&(t=0)
var r=e.charCodeAt(t)
if(55296<=r&&r<=56319&&t<e.length-1){var i=r
return 56320<=(s=e.charCodeAt(t+1))&&s<=57343?1024*(i-55296)+(s-56320)+65536:i}if(56320<=r&&r<=57343&&t>=1){var s=r
return 55296<=(i=e.charCodeAt(t-1))&&i<=56319?1024*(i-55296)+(s-56320)+65536:s}return r}function l(o,a,l){var c=[o].concat(a).concat([l]),u=c[c.length-2],d=l,h=c.lastIndexOf(14)
if(h>1&&c.slice(1,h).every(function(t){return t==e})&&-1==[e,i,n].indexOf(o))return 2
var f=c.lastIndexOf(t)
if(f>0&&c.slice(1,f).every(function(e){return e==t})&&-1==[r,t].indexOf(u))return c.filter(function(e){return e==t}).length%2==1?3:4
if(0==u&&1==d)return 0
if(2==u||0==u||1==u)return 14==d&&a.every(function(t){return t==e})?2:1
if(2==d||0==d||1==d)return 1
if(6==u&&(6==d||7==d||9==d||10==d))return 0
if(!(9!=u&&7!=u||7!=d&&8!=d))return 0
if((10==u||8==u)&&8==d)return 0
if(d==e||15==d)return 0
if(5==d)return 0
if(u==r)return 0
var p=-1!=c.indexOf(e)?c.lastIndexOf(e)-1:c.length-2
return-1!=[i,n].indexOf(c[p])&&c.slice(p+1,-1).every(function(t){return t==e})&&14==d||15==u&&-1!=[s,n].indexOf(d)?0:-1!=a.indexOf(t)?2:u==t&&d==t?0:1}function c(o){return 1536<=o&&o<=1541||1757==o||1807==o||2274==o||3406==o||69821==o||70082<=o&&o<=70083||72250==o||72326<=o&&o<=72329||73030==o?r:13==o?0:10==o?1:0<=o&&o<=9||11<=o&&o<=12||14<=o&&o<=31||127<=o&&o<=159||173==o||1564==o||6158==o||8203==o||8206<=o&&o<=8207||8232==o||8233==o||8234<=o&&o<=8238||8288<=o&&o<=8292||8293==o||8294<=o&&o<=8303||55296<=o&&o<=57343||65279==o||65520<=o&&o<=65528||65529<=o&&o<=65531||113824<=o&&o<=113827||119155<=o&&o<=119162||917504==o||917505==o||917506<=o&&o<=917535||917632<=o&&o<=917759||918e3<=o&&o<=921599?2:768<=o&&o<=879||1155<=o&&o<=1159||1160<=o&&o<=1161||1425<=o&&o<=1469||1471==o||1473<=o&&o<=1474||1476<=o&&o<=1477||1479==o||1552<=o&&o<=1562||1611<=o&&o<=1631||1648==o||1750<=o&&o<=1756||1759<=o&&o<=1764||1767<=o&&o<=1768||1770<=o&&o<=1773||1809==o||1840<=o&&o<=1866||1958<=o&&o<=1968||2027<=o&&o<=2035||2070<=o&&o<=2073||2075<=o&&o<=2083||2085<=o&&o<=2087||2089<=o&&o<=2093||2137<=o&&o<=2139||2260<=o&&o<=2273||2275<=o&&o<=2306||2362==o||2364==o||2369<=o&&o<=2376||2381==o||2385<=o&&o<=2391||2402<=o&&o<=2403||2433==o||2492==o||2494==o||2497<=o&&o<=2500||2509==o||2519==o||2530<=o&&o<=2531||2561<=o&&o<=2562||2620==o||2625<=o&&o<=2626||2631<=o&&o<=2632||2635<=o&&o<=2637||2641==o||2672<=o&&o<=2673||2677==o||2689<=o&&o<=2690||2748==o||2753<=o&&o<=2757||2759<=o&&o<=2760||2765==o||2786<=o&&o<=2787||2810<=o&&o<=2815||2817==o||2876==o||2878==o||2879==o||2881<=o&&o<=2884||2893==o||2902==o||2903==o||2914<=o&&o<=2915||2946==o||3006==o||3008==o||3021==o||3031==o||3072==o||3134<=o&&o<=3136||3142<=o&&o<=3144||3146<=o&&o<=3149||3157<=o&&o<=3158||3170<=o&&o<=3171||3201==o||3260==o||3263==o||3266==o||3270==o||3276<=o&&o<=3277||3285<=o&&o<=3286||3298<=o&&o<=3299||3328<=o&&o<=3329||3387<=o&&o<=3388||3390==o||3393<=o&&o<=3396||3405==o||3415==o||3426<=o&&o<=3427||3530==o||3535==o||3538<=o&&o<=3540||3542==o||3551==o||3633==o||3636<=o&&o<=3642||3655<=o&&o<=3662||3761==o||3764<=o&&o<=3769||3771<=o&&o<=3772||3784<=o&&o<=3789||3864<=o&&o<=3865||3893==o||3895==o||3897==o||3953<=o&&o<=3966||3968<=o&&o<=3972||3974<=o&&o<=3975||3981<=o&&o<=3991||3993<=o&&o<=4028||4038==o||4141<=o&&o<=4144||4146<=o&&o<=4151||4153<=o&&o<=4154||4157<=o&&o<=4158||4184<=o&&o<=4185||4190<=o&&o<=4192||4209<=o&&o<=4212||4226==o||4229<=o&&o<=4230||4237==o||4253==o||4957<=o&&o<=4959||5906<=o&&o<=5908||5938<=o&&o<=5940||5970<=o&&o<=5971||6002<=o&&o<=6003||6068<=o&&o<=6069||6071<=o&&o<=6077||6086==o||6089<=o&&o<=6099||6109==o||6155<=o&&o<=6157||6277<=o&&o<=6278||6313==o||6432<=o&&o<=6434||6439<=o&&o<=6440||6450==o||6457<=o&&o<=6459||6679<=o&&o<=6680||6683==o||6742==o||6744<=o&&o<=6750||6752==o||6754==o||6757<=o&&o<=6764||6771<=o&&o<=6780||6783==o||6832<=o&&o<=6845||6846==o||6912<=o&&o<=6915||6964==o||6966<=o&&o<=6970||6972==o||6978==o||7019<=o&&o<=7027||7040<=o&&o<=7041||7074<=o&&o<=7077||7080<=o&&o<=7081||7083<=o&&o<=7085||7142==o||7144<=o&&o<=7145||7149==o||7151<=o&&o<=7153||7212<=o&&o<=7219||7222<=o&&o<=7223||7376<=o&&o<=7378||7380<=o&&o<=7392||7394<=o&&o<=7400||7405==o||7412==o||7416<=o&&o<=7417||7616<=o&&o<=7673||7675<=o&&o<=7679||8204==o||8400<=o&&o<=8412||8413<=o&&o<=8416||8417==o||8418<=o&&o<=8420||8421<=o&&o<=8432||11503<=o&&o<=11505||11647==o||11744<=o&&o<=11775||12330<=o&&o<=12333||12334<=o&&o<=12335||12441<=o&&o<=12442||42607==o||42608<=o&&o<=42610||42612<=o&&o<=42621||42654<=o&&o<=42655||42736<=o&&o<=42737||43010==o||43014==o||43019==o||43045<=o&&o<=43046||43204<=o&&o<=43205||43232<=o&&o<=43249||43302<=o&&o<=43309||43335<=o&&o<=43345||43392<=o&&o<=43394||43443==o||43446<=o&&o<=43449||43452==o||43493==o||43561<=o&&o<=43566||43569<=o&&o<=43570||43573<=o&&o<=43574||43587==o||43596==o||43644==o||43696==o||43698<=o&&o<=43700||43703<=o&&o<=43704||43710<=o&&o<=43711||43713==o||43756<=o&&o<=43757||43766==o||44005==o||44008==o||44013==o||64286==o||65024<=o&&o<=65039||65056<=o&&o<=65071||65438<=o&&o<=65439||66045==o||66272==o||66422<=o&&o<=66426||68097<=o&&o<=68099||68101<=o&&o<=68102||68108<=o&&o<=68111||68152<=o&&o<=68154||68159==o||68325<=o&&o<=68326||69633==o||69688<=o&&o<=69702||69759<=o&&o<=69761||69811<=o&&o<=69814||69817<=o&&o<=69818||69888<=o&&o<=69890||69927<=o&&o<=69931||69933<=o&&o<=69940||70003==o||70016<=o&&o<=70017||70070<=o&&o<=70078||70090<=o&&o<=70092||70191<=o&&o<=70193||70196==o||70198<=o&&o<=70199||70206==o||70367==o||70371<=o&&o<=70378||70400<=o&&o<=70401||70460==o||70462==o||70464==o||70487==o||70502<=o&&o<=70508||70512<=o&&o<=70516||70712<=o&&o<=70719||70722<=o&&o<=70724||70726==o||70832==o||70835<=o&&o<=70840||70842==o||70845==o||70847<=o&&o<=70848||70850<=o&&o<=70851||71087==o||71090<=o&&o<=71093||71100<=o&&o<=71101||71103<=o&&o<=71104||71132<=o&&o<=71133||71219<=o&&o<=71226||71229==o||71231<=o&&o<=71232||71339==o||71341==o||71344<=o&&o<=71349||71351==o||71453<=o&&o<=71455||71458<=o&&o<=71461||71463<=o&&o<=71467||72193<=o&&o<=72198||72201<=o&&o<=72202||72243<=o&&o<=72248||72251<=o&&o<=72254||72263==o||72273<=o&&o<=72278||72281<=o&&o<=72283||72330<=o&&o<=72342||72344<=o&&o<=72345||72752<=o&&o<=72758||72760<=o&&o<=72765||72767==o||72850<=o&&o<=72871||72874<=o&&o<=72880||72882<=o&&o<=72883||72885<=o&&o<=72886||73009<=o&&o<=73014||73018==o||73020<=o&&o<=73021||73023<=o&&o<=73029||73031==o||92912<=o&&o<=92916||92976<=o&&o<=92982||94095<=o&&o<=94098||113821<=o&&o<=113822||119141==o||119143<=o&&o<=119145||119150<=o&&o<=119154||119163<=o&&o<=119170||119173<=o&&o<=119179||119210<=o&&o<=119213||119362<=o&&o<=119364||121344<=o&&o<=121398||121403<=o&&o<=121452||121461==o||121476==o||121499<=o&&o<=121503||121505<=o&&o<=121519||122880<=o&&o<=122886||122888<=o&&o<=122904||122907<=o&&o<=122913||122915<=o&&o<=122916||122918<=o&&o<=122922||125136<=o&&o<=125142||125252<=o&&o<=125258||917536<=o&&o<=917631||917760<=o&&o<=917999?e:127462<=o&&o<=127487?t:2307==o||2363==o||2366<=o&&o<=2368||2377<=o&&o<=2380||2382<=o&&o<=2383||2434<=o&&o<=2435||2495<=o&&o<=2496||2503<=o&&o<=2504||2507<=o&&o<=2508||2563==o||2622<=o&&o<=2624||2691==o||2750<=o&&o<=2752||2761==o||2763<=o&&o<=2764||2818<=o&&o<=2819||2880==o||2887<=o&&o<=2888||2891<=o&&o<=2892||3007==o||3009<=o&&o<=3010||3014<=o&&o<=3016||3018<=o&&o<=3020||3073<=o&&o<=3075||3137<=o&&o<=3140||3202<=o&&o<=3203||3262==o||3264<=o&&o<=3265||3267<=o&&o<=3268||3271<=o&&o<=3272||3274<=o&&o<=3275||3330<=o&&o<=3331||3391<=o&&o<=3392||3398<=o&&o<=3400||3402<=o&&o<=3404||3458<=o&&o<=3459||3536<=o&&o<=3537||3544<=o&&o<=3550||3570<=o&&o<=3571||3635==o||3763==o||3902<=o&&o<=3903||3967==o||4145==o||4155<=o&&o<=4156||4182<=o&&o<=4183||4228==o||6070==o||6078<=o&&o<=6085||6087<=o&&o<=6088||6435<=o&&o<=6438||6441<=o&&o<=6443||6448<=o&&o<=6449||6451<=o&&o<=6456||6681<=o&&o<=6682||6741==o||6743==o||6765<=o&&o<=6770||6916==o||6965==o||6971==o||6973<=o&&o<=6977||6979<=o&&o<=6980||7042==o||7073==o||7078<=o&&o<=7079||7082==o||7143==o||7146<=o&&o<=7148||7150==o||7154<=o&&o<=7155||7204<=o&&o<=7211||7220<=o&&o<=7221||7393==o||7410<=o&&o<=7411||7415==o||43043<=o&&o<=43044||43047==o||43136<=o&&o<=43137||43188<=o&&o<=43203||43346<=o&&o<=43347||43395==o||43444<=o&&o<=43445||43450<=o&&o<=43451||43453<=o&&o<=43456||43567<=o&&o<=43568||43571<=o&&o<=43572||43597==o||43755==o||43758<=o&&o<=43759||43765==o||44003<=o&&o<=44004||44006<=o&&o<=44007||44009<=o&&o<=44010||44012==o||69632==o||69634==o||69762==o||69808<=o&&o<=69810||69815<=o&&o<=69816||69932==o||70018==o||70067<=o&&o<=70069||70079<=o&&o<=70080||70188<=o&&o<=70190||70194<=o&&o<=70195||70197==o||70368<=o&&o<=70370||70402<=o&&o<=70403||70463==o||70465<=o&&o<=70468||70471<=o&&o<=70472||70475<=o&&o<=70477||70498<=o&&o<=70499||70709<=o&&o<=70711||70720<=o&&o<=70721||70725==o||70833<=o&&o<=70834||70841==o||70843<=o&&o<=70844||70846==o||70849==o||71088<=o&&o<=71089||71096<=o&&o<=71099||71102==o||71216<=o&&o<=71218||71227<=o&&o<=71228||71230==o||71340==o||71342<=o&&o<=71343||71350==o||71456<=o&&o<=71457||71462==o||72199<=o&&o<=72200||72249==o||72279<=o&&o<=72280||72343==o||72751==o||72766==o||72873==o||72881==o||72884==o||94033<=o&&o<=94078||119142==o||119149==o?5:4352<=o&&o<=4447||43360<=o&&o<=43388?6:4448<=o&&o<=4519||55216<=o&&o<=55238?7:4520<=o&&o<=4607||55243<=o&&o<=55291?8:44032==o||44060==o||44088==o||44116==o||44144==o||44172==o||44200==o||44228==o||44256==o||44284==o||44312==o||44340==o||44368==o||44396==o||44424==o||44452==o||44480==o||44508==o||44536==o||44564==o||44592==o||44620==o||44648==o||44676==o||44704==o||44732==o||44760==o||44788==o||44816==o||44844==o||44872==o||44900==o||44928==o||44956==o||44984==o||45012==o||45040==o||45068==o||45096==o||45124==o||45152==o||45180==o||45208==o||45236==o||45264==o||45292==o||45320==o||45348==o||45376==o||45404==o||45432==o||45460==o||45488==o||45516==o||45544==o||45572==o||45600==o||45628==o||45656==o||45684==o||45712==o||45740==o||45768==o||45796==o||45824==o||45852==o||45880==o||45908==o||45936==o||45964==o||45992==o||46020==o||46048==o||46076==o||46104==o||46132==o||46160==o||46188==o||46216==o||46244==o||46272==o||46300==o||46328==o||46356==o||46384==o||46412==o||46440==o||46468==o||46496==o||46524==o||46552==o||46580==o||46608==o||46636==o||46664==o||46692==o||46720==o||46748==o||46776==o||46804==o||46832==o||46860==o||46888==o||46916==o||46944==o||46972==o||47e3==o||47028==o||47056==o||47084==o||47112==o||47140==o||47168==o||47196==o||47224==o||47252==o||47280==o||47308==o||47336==o||47364==o||47392==o||47420==o||47448==o||47476==o||47504==o||47532==o||47560==o||47588==o||47616==o||47644==o||47672==o||47700==o||47728==o||47756==o||47784==o||47812==o||47840==o||47868==o||47896==o||47924==o||47952==o||47980==o||48008==o||48036==o||48064==o||48092==o||48120==o||48148==o||48176==o||48204==o||48232==o||48260==o||48288==o||48316==o||48344==o||48372==o||48400==o||48428==o||48456==o||48484==o||48512==o||48540==o||48568==o||48596==o||48624==o||48652==o||48680==o||48708==o||48736==o||48764==o||48792==o||48820==o||48848==o||48876==o||48904==o||48932==o||48960==o||48988==o||49016==o||49044==o||49072==o||49100==o||49128==o||49156==o||49184==o||49212==o||49240==o||49268==o||49296==o||49324==o||49352==o||49380==o||49408==o||49436==o||49464==o||49492==o||49520==o||49548==o||49576==o||49604==o||49632==o||49660==o||49688==o||49716==o||49744==o||49772==o||49800==o||49828==o||49856==o||49884==o||49912==o||49940==o||49968==o||49996==o||50024==o||50052==o||50080==o||50108==o||50136==o||50164==o||50192==o||50220==o||50248==o||50276==o||50304==o||50332==o||50360==o||50388==o||50416==o||50444==o||50472==o||50500==o||50528==o||50556==o||50584==o||50612==o||50640==o||50668==o||50696==o||50724==o||50752==o||50780==o||50808==o||50836==o||50864==o||50892==o||50920==o||50948==o||50976==o||51004==o||51032==o||51060==o||51088==o||51116==o||51144==o||51172==o||51200==o||51228==o||51256==o||51284==o||51312==o||51340==o||51368==o||51396==o||51424==o||51452==o||51480==o||51508==o||51536==o||51564==o||51592==o||51620==o||51648==o||51676==o||51704==o||51732==o||51760==o||51788==o||51816==o||51844==o||51872==o||51900==o||51928==o||51956==o||51984==o||52012==o||52040==o||52068==o||52096==o||52124==o||52152==o||52180==o||52208==o||52236==o||52264==o||52292==o||52320==o||52348==o||52376==o||52404==o||52432==o||52460==o||52488==o||52516==o||52544==o||52572==o||52600==o||52628==o||52656==o||52684==o||52712==o||52740==o||52768==o||52796==o||52824==o||52852==o||52880==o||52908==o||52936==o||52964==o||52992==o||53020==o||53048==o||53076==o||53104==o||53132==o||53160==o||53188==o||53216==o||53244==o||53272==o||53300==o||53328==o||53356==o||53384==o||53412==o||53440==o||53468==o||53496==o||53524==o||53552==o||53580==o||53608==o||53636==o||53664==o||53692==o||53720==o||53748==o||53776==o||53804==o||53832==o||53860==o||53888==o||53916==o||53944==o||53972==o||54e3==o||54028==o||54056==o||54084==o||54112==o||54140==o||54168==o||54196==o||54224==o||54252==o||54280==o||54308==o||54336==o||54364==o||54392==o||54420==o||54448==o||54476==o||54504==o||54532==o||54560==o||54588==o||54616==o||54644==o||54672==o||54700==o||54728==o||54756==o||54784==o||54812==o||54840==o||54868==o||54896==o||54924==o||54952==o||54980==o||55008==o||55036==o||55064==o||55092==o||55120==o||55148==o||55176==o?9:44033<=o&&o<=44059||44061<=o&&o<=44087||44089<=o&&o<=44115||44117<=o&&o<=44143||44145<=o&&o<=44171||44173<=o&&o<=44199||44201<=o&&o<=44227||44229<=o&&o<=44255||44257<=o&&o<=44283||44285<=o&&o<=44311||44313<=o&&o<=44339||44341<=o&&o<=44367||44369<=o&&o<=44395||44397<=o&&o<=44423||44425<=o&&o<=44451||44453<=o&&o<=44479||44481<=o&&o<=44507||44509<=o&&o<=44535||44537<=o&&o<=44563||44565<=o&&o<=44591||44593<=o&&o<=44619||44621<=o&&o<=44647||44649<=o&&o<=44675||44677<=o&&o<=44703||44705<=o&&o<=44731||44733<=o&&o<=44759||44761<=o&&o<=44787||44789<=o&&o<=44815||44817<=o&&o<=44843||44845<=o&&o<=44871||44873<=o&&o<=44899||44901<=o&&o<=44927||44929<=o&&o<=44955||44957<=o&&o<=44983||44985<=o&&o<=45011||45013<=o&&o<=45039||45041<=o&&o<=45067||45069<=o&&o<=45095||45097<=o&&o<=45123||45125<=o&&o<=45151||45153<=o&&o<=45179||45181<=o&&o<=45207||45209<=o&&o<=45235||45237<=o&&o<=45263||45265<=o&&o<=45291||45293<=o&&o<=45319||45321<=o&&o<=45347||45349<=o&&o<=45375||45377<=o&&o<=45403||45405<=o&&o<=45431||45433<=o&&o<=45459||45461<=o&&o<=45487||45489<=o&&o<=45515||45517<=o&&o<=45543||45545<=o&&o<=45571||45573<=o&&o<=45599||45601<=o&&o<=45627||45629<=o&&o<=45655||45657<=o&&o<=45683||45685<=o&&o<=45711||45713<=o&&o<=45739||45741<=o&&o<=45767||45769<=o&&o<=45795||45797<=o&&o<=45823||45825<=o&&o<=45851||45853<=o&&o<=45879||45881<=o&&o<=45907||45909<=o&&o<=45935||45937<=o&&o<=45963||45965<=o&&o<=45991||45993<=o&&o<=46019||46021<=o&&o<=46047||46049<=o&&o<=46075||46077<=o&&o<=46103||46105<=o&&o<=46131||46133<=o&&o<=46159||46161<=o&&o<=46187||46189<=o&&o<=46215||46217<=o&&o<=46243||46245<=o&&o<=46271||46273<=o&&o<=46299||46301<=o&&o<=46327||46329<=o&&o<=46355||46357<=o&&o<=46383||46385<=o&&o<=46411||46413<=o&&o<=46439||46441<=o&&o<=46467||46469<=o&&o<=46495||46497<=o&&o<=46523||46525<=o&&o<=46551||46553<=o&&o<=46579||46581<=o&&o<=46607||46609<=o&&o<=46635||46637<=o&&o<=46663||46665<=o&&o<=46691||46693<=o&&o<=46719||46721<=o&&o<=46747||46749<=o&&o<=46775||46777<=o&&o<=46803||46805<=o&&o<=46831||46833<=o&&o<=46859||46861<=o&&o<=46887||46889<=o&&o<=46915||46917<=o&&o<=46943||46945<=o&&o<=46971||46973<=o&&o<=46999||47001<=o&&o<=47027||47029<=o&&o<=47055||47057<=o&&o<=47083||47085<=o&&o<=47111||47113<=o&&o<=47139||47141<=o&&o<=47167||47169<=o&&o<=47195||47197<=o&&o<=47223||47225<=o&&o<=47251||47253<=o&&o<=47279||47281<=o&&o<=47307||47309<=o&&o<=47335||47337<=o&&o<=47363||47365<=o&&o<=47391||47393<=o&&o<=47419||47421<=o&&o<=47447||47449<=o&&o<=47475||47477<=o&&o<=47503||47505<=o&&o<=47531||47533<=o&&o<=47559||47561<=o&&o<=47587||47589<=o&&o<=47615||47617<=o&&o<=47643||47645<=o&&o<=47671||47673<=o&&o<=47699||47701<=o&&o<=47727||47729<=o&&o<=47755||47757<=o&&o<=47783||47785<=o&&o<=47811||47813<=o&&o<=47839||47841<=o&&o<=47867||47869<=o&&o<=47895||47897<=o&&o<=47923||47925<=o&&o<=47951||47953<=o&&o<=47979||47981<=o&&o<=48007||48009<=o&&o<=48035||48037<=o&&o<=48063||48065<=o&&o<=48091||48093<=o&&o<=48119||48121<=o&&o<=48147||48149<=o&&o<=48175||48177<=o&&o<=48203||48205<=o&&o<=48231||48233<=o&&o<=48259||48261<=o&&o<=48287||48289<=o&&o<=48315||48317<=o&&o<=48343||48345<=o&&o<=48371||48373<=o&&o<=48399||48401<=o&&o<=48427||48429<=o&&o<=48455||48457<=o&&o<=48483||48485<=o&&o<=48511||48513<=o&&o<=48539||48541<=o&&o<=48567||48569<=o&&o<=48595||48597<=o&&o<=48623||48625<=o&&o<=48651||48653<=o&&o<=48679||48681<=o&&o<=48707||48709<=o&&o<=48735||48737<=o&&o<=48763||48765<=o&&o<=48791||48793<=o&&o<=48819||48821<=o&&o<=48847||48849<=o&&o<=48875||48877<=o&&o<=48903||48905<=o&&o<=48931||48933<=o&&o<=48959||48961<=o&&o<=48987||48989<=o&&o<=49015||49017<=o&&o<=49043||49045<=o&&o<=49071||49073<=o&&o<=49099||49101<=o&&o<=49127||49129<=o&&o<=49155||49157<=o&&o<=49183||49185<=o&&o<=49211||49213<=o&&o<=49239||49241<=o&&o<=49267||49269<=o&&o<=49295||49297<=o&&o<=49323||49325<=o&&o<=49351||49353<=o&&o<=49379||49381<=o&&o<=49407||49409<=o&&o<=49435||49437<=o&&o<=49463||49465<=o&&o<=49491||49493<=o&&o<=49519||49521<=o&&o<=49547||49549<=o&&o<=49575||49577<=o&&o<=49603||49605<=o&&o<=49631||49633<=o&&o<=49659||49661<=o&&o<=49687||49689<=o&&o<=49715||49717<=o&&o<=49743||49745<=o&&o<=49771||49773<=o&&o<=49799||49801<=o&&o<=49827||49829<=o&&o<=49855||49857<=o&&o<=49883||49885<=o&&o<=49911||49913<=o&&o<=49939||49941<=o&&o<=49967||49969<=o&&o<=49995||49997<=o&&o<=50023||50025<=o&&o<=50051||50053<=o&&o<=50079||50081<=o&&o<=50107||50109<=o&&o<=50135||50137<=o&&o<=50163||50165<=o&&o<=50191||50193<=o&&o<=50219||50221<=o&&o<=50247||50249<=o&&o<=50275||50277<=o&&o<=50303||50305<=o&&o<=50331||50333<=o&&o<=50359||50361<=o&&o<=50387||50389<=o&&o<=50415||50417<=o&&o<=50443||50445<=o&&o<=50471||50473<=o&&o<=50499||50501<=o&&o<=50527||50529<=o&&o<=50555||50557<=o&&o<=50583||50585<=o&&o<=50611||50613<=o&&o<=50639||50641<=o&&o<=50667||50669<=o&&o<=50695||50697<=o&&o<=50723||50725<=o&&o<=50751||50753<=o&&o<=50779||50781<=o&&o<=50807||50809<=o&&o<=50835||50837<=o&&o<=50863||50865<=o&&o<=50891||50893<=o&&o<=50919||50921<=o&&o<=50947||50949<=o&&o<=50975||50977<=o&&o<=51003||51005<=o&&o<=51031||51033<=o&&o<=51059||51061<=o&&o<=51087||51089<=o&&o<=51115||51117<=o&&o<=51143||51145<=o&&o<=51171||51173<=o&&o<=51199||51201<=o&&o<=51227||51229<=o&&o<=51255||51257<=o&&o<=51283||51285<=o&&o<=51311||51313<=o&&o<=51339||51341<=o&&o<=51367||51369<=o&&o<=51395||51397<=o&&o<=51423||51425<=o&&o<=51451||51453<=o&&o<=51479||51481<=o&&o<=51507||51509<=o&&o<=51535||51537<=o&&o<=51563||51565<=o&&o<=51591||51593<=o&&o<=51619||51621<=o&&o<=51647||51649<=o&&o<=51675||51677<=o&&o<=51703||51705<=o&&o<=51731||51733<=o&&o<=51759||51761<=o&&o<=51787||51789<=o&&o<=51815||51817<=o&&o<=51843||51845<=o&&o<=51871||51873<=o&&o<=51899||51901<=o&&o<=51927||51929<=o&&o<=51955||51957<=o&&o<=51983||51985<=o&&o<=52011||52013<=o&&o<=52039||52041<=o&&o<=52067||52069<=o&&o<=52095||52097<=o&&o<=52123||52125<=o&&o<=52151||52153<=o&&o<=52179||52181<=o&&o<=52207||52209<=o&&o<=52235||52237<=o&&o<=52263||52265<=o&&o<=52291||52293<=o&&o<=52319||52321<=o&&o<=52347||52349<=o&&o<=52375||52377<=o&&o<=52403||52405<=o&&o<=52431||52433<=o&&o<=52459||52461<=o&&o<=52487||52489<=o&&o<=52515||52517<=o&&o<=52543||52545<=o&&o<=52571||52573<=o&&o<=52599||52601<=o&&o<=52627||52629<=o&&o<=52655||52657<=o&&o<=52683||52685<=o&&o<=52711||52713<=o&&o<=52739||52741<=o&&o<=52767||52769<=o&&o<=52795||52797<=o&&o<=52823||52825<=o&&o<=52851||52853<=o&&o<=52879||52881<=o&&o<=52907||52909<=o&&o<=52935||52937<=o&&o<=52963||52965<=o&&o<=52991||52993<=o&&o<=53019||53021<=o&&o<=53047||53049<=o&&o<=53075||53077<=o&&o<=53103||53105<=o&&o<=53131||53133<=o&&o<=53159||53161<=o&&o<=53187||53189<=o&&o<=53215||53217<=o&&o<=53243||53245<=o&&o<=53271||53273<=o&&o<=53299||53301<=o&&o<=53327||53329<=o&&o<=53355||53357<=o&&o<=53383||53385<=o&&o<=53411||53413<=o&&o<=53439||53441<=o&&o<=53467||53469<=o&&o<=53495||53497<=o&&o<=53523||53525<=o&&o<=53551||53553<=o&&o<=53579||53581<=o&&o<=53607||53609<=o&&o<=53635||53637<=o&&o<=53663||53665<=o&&o<=53691||53693<=o&&o<=53719||53721<=o&&o<=53747||53749<=o&&o<=53775||53777<=o&&o<=53803||53805<=o&&o<=53831||53833<=o&&o<=53859||53861<=o&&o<=53887||53889<=o&&o<=53915||53917<=o&&o<=53943||53945<=o&&o<=53971||53973<=o&&o<=53999||54001<=o&&o<=54027||54029<=o&&o<=54055||54057<=o&&o<=54083||54085<=o&&o<=54111||54113<=o&&o<=54139||54141<=o&&o<=54167||54169<=o&&o<=54195||54197<=o&&o<=54223||54225<=o&&o<=54251||54253<=o&&o<=54279||54281<=o&&o<=54307||54309<=o&&o<=54335||54337<=o&&o<=54363||54365<=o&&o<=54391||54393<=o&&o<=54419||54421<=o&&o<=54447||54449<=o&&o<=54475||54477<=o&&o<=54503||54505<=o&&o<=54531||54533<=o&&o<=54559||54561<=o&&o<=54587||54589<=o&&o<=54615||54617<=o&&o<=54643||54645<=o&&o<=54671||54673<=o&&o<=54699||54701<=o&&o<=54727||54729<=o&&o<=54755||54757<=o&&o<=54783||54785<=o&&o<=54811||54813<=o&&o<=54839||54841<=o&&o<=54867||54869<=o&&o<=54895||54897<=o&&o<=54923||54925<=o&&o<=54951||54953<=o&&o<=54979||54981<=o&&o<=55007||55009<=o&&o<=55035||55037<=o&&o<=55063||55065<=o&&o<=55091||55093<=o&&o<=55119||55121<=o&&o<=55147||55149<=o&&o<=55175||55177<=o&&o<=55203?10:9757==o||9977==o||9994<=o&&o<=9997||127877==o||127938<=o&&o<=127940||127943==o||127946<=o&&o<=127948||128066<=o&&o<=128067||128070<=o&&o<=128080||128110==o||128112<=o&&o<=128120||128124==o||128129<=o&&o<=128131||128133<=o&&o<=128135||128170==o||128372<=o&&o<=128373||128378==o||128400==o||128405<=o&&o<=128406||128581<=o&&o<=128583||128587<=o&&o<=128591||128675==o||128692<=o&&o<=128694||128704==o||128716==o||129304<=o&&o<=129308||129310<=o&&o<=129311||129318==o||129328<=o&&o<=129337||129341<=o&&o<=129342||129489<=o&&o<=129501?i:127995<=o&&o<=127999?14:8205==o?15:9792==o||9794==o||9877<=o&&o<=9878||9992==o||10084==o||127752==o||127806==o||127859==o||127891==o||127908==o||127912==o||127979==o||127981==o||128139==o||128187<=o&&o<=128188||128295==o||128300==o||128488==o||128640==o||128658==o?s:128102<=o&&o<=128105?n:11}return this.nextBreak=function(e,t){if(void 0===t&&(t=0),t<0)return 0
if(t>=e.length-1)return e.length
for(var r=c(a(e,t)),i=[],s=t+1;s<e.length;s++)if(!o(e,s-1)){var n=c(a(e,s))
if(l(r,i,n))return s
i.push(n)}return e.length},this.splitGraphemes=function(e){for(var t,r=[],i=0;(t=this.nextBreak(e,i))<e.length;)r.push(e.slice(i,t)),i=t
return i<e.length&&r.push(e.slice(i)),r},this.iterateGraphemes=function(e){var t=0,r={next:function(){var r,i
return(i=this.nextBreak(e,t))<e.length?(r=e.slice(t,i),t=i,{value:r,done:!1}):t<e.length?(r=e.slice(t),t=e.length,{value:r,done:!1}):{value:void 0,done:!0}}.bind(this)}
return"undefined"!=typeof Symbol&&Symbol.iterator&&(r[Symbol.iterator]=function(){return r}),r},this.countGraphemes=function(e){for(var t,r=0,i=0;(t=this.nextBreak(e,i))<e.length;)i=t,r++
return i<e.length&&r++,r},this})}),r=new t,i=function(e,t,i){for(var s=r.iterateGraphemes(e.substring(t)),n="",o=0;o<i-t;o++){var a=s.next()
if(n+=a.value,a.done)break}return n},s=function(e,t,r,i,s,n,o){return{start:{line:e,column:t,offset:r},end:{line:i,column:s,offset:n},source:o||null}},n=e(function(e,t){e.exports=function(){var e,t="",r=function(r,i){if("string"!=typeof r)throw new TypeError("expected a string")
if(1===i)return r
if(2===i)return r+r
var s=r.length*i
if(e!==r||void 0===e)e=r,t=""
else if(t.length>=s)return t.substr(0,s)
for(;s>t.length&&i>1;)1&i&&(t+=r),i>>=1,r+=r
return t=(t+=r).substr(0,s)},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}
function s(e,t,i,s){var n=function(e,t){if(null==e||null==t)return e
var r=String(e),i="number"==typeof t?t:parseInt(t,10)
if(isNaN(i)||!isFinite(i))return r
var s=r.length
if(s>=i)return r
var n=String(" ")
""===n&&(n=" ")
for(var o=i-s;n.length<o;)n+=n
return(n.length>o?n.substr(0,o):n)+r}(String(t),i),o=r(" ",s.tabSize)
return n+" | "+e.replace(/\t/g,o)}function n(e,t,r,i,n){return e.slice(t,r).map(function(e,r){return s(e,t+r+1,i,n)}).join("\n")}var o={extraLines:2,tabSize:4}
return function(e,t,a,l){l=i({},o,l)
var c=e.split(/\r\n?|\n|\f/),u=Math.max(1,t-l.extraLines)-1,d=Math.min(t+l.extraLines,c.length),h=String(d).length,f=n(c,u,t,h,l),p=s(c[t-1].substring(0,a-1),t,h,l)
return[f,r(" ",p.length)+"^",n(c,t,d,h,l)].filter(Boolean).join("\n")}}()}),o=(new Error).stack,a=function(e,t,r,i,s){throw function(e){var t=Object.create(SyntaxError.prototype)
return Object.assign(t,e,{name:"SyntaxError"}),Object.defineProperty(t,"stack",{get:function(){return o?o.replace(/^(.+\n){1,3}/,String(t)+"\n"):""}}),t}({message:i?e+"\n"+n(t,i,s):e,rawMessage:e,source:r,line:i,column:s})},l=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i]
return"Unexpected token <"+e+"> at "+r.filter(Boolean).join(":")},c=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i]
return"Unexpected symbol <"+e+"> at "+r.filter(Boolean).join(":")},u={"{":0,"}":1,"[":2,"]":3,":":4,",":5},d={true:8,false:9,null:10},h={'"':0,"\\":1,"/":2,b:3,f:4,n:5,r:6,t:7,u:8}
function f(e){return e>="1"&&e<="9"}function p(e){return e>="0"&&e<="9"}function y(e){return p(e)||e>="a"&&e<="f"||e>="A"&&e<="F"}function g(e){return"e"===e||"E"===e}function m(e,t,r,i){var s=e.charAt(t)
if("\r"===s)t++,r++,i=1,"\n"===e.charAt(t)&&t++
else if("\n"===s)t++,r++,i=1
else{if("\t"!==s&&" "!==s)return null
t++,i++}return{index:t,line:r,column:i}}function _(e,t,r,i){var s=e.charAt(t)
return s in u?{type:u[s],line:r,column:i+1,index:t+1,value:null}:null}function b(e,t,r,i){for(var s in d)if(d.hasOwnProperty(s)&&e.substr(t,s.length)===s)return{type:d[s],line:r,column:i+s.length,index:t+s.length,value:s}
return null}function v(e,t,r,i){for(var s=t,n=0;t<e.length;){var o=e.charAt(t)
switch(n){case 0:if('"'!==o)return null
t++,n=1
break
case 1:if("\\"===o)t++,n=2
else{if('"'===o)return{type:6,line:r,column:i+ ++t-s,index:t,value:e.slice(s,t)}
t++}break
case 2:if(!(o in h))return null
if(t++,"u"===o)for(var a=0;a<4;a++){var l=e.charAt(t)
if(!l||!y(l))return null
t++}n=1}}}function w(e,t,r,i){var s=t,n=t,o=0
e:for(;t<e.length;){var a=e.charAt(t)
switch(o){case 0:if("-"===a)o=1
else if("0"===a)n=t+1,o=2
else{if(!f(a))return null
n=t+1,o=3}break
case 1:if("0"===a)n=t+1,o=2
else{if(!f(a))return null
n=t+1,o=3}break
case 2:if("."===a)o=4
else{if(!g(a))break e
o=6}break
case 3:if(p(a))n=t+1
else if("."===a)o=4
else{if(!g(a))break e
o=6}break
case 4:if(!p(a))break e
n=t+1,o=5
break
case 5:if(p(a))n=t+1
else{if(!g(a))break e
o=6}break
case 6:if("+"===a||"-"===a)o=7
else{if(!p(a))break e
n=t+1,o=7}break
case 7:if(!p(a))break e
n=t+1}t++}return n>0?{type:7,line:r,column:i+n-s,index:n,value:e.slice(s,n)}:null}var k={loc:!0,source:null}
function R(e,t,r){var i=t.length>0?t[t.length-1].loc.end:{line:1,column:1}
a("Unexpected end of input",e,r.source,i.line,i.column)}function S(e){for(var t=0,r=0;r<4;r++)t=16*t+parseInt(e[r],16)
return String.fromCharCode(t)}var A={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},E=['"',"\\","/"]
function M(e){for(var t="",r=0;r<e.length;r++){var i=e.charAt(r)
if("\\"===i){r++
var s=e.charAt(r)
if("u"===s)t+=S(e.substr(r+1,4)),r+=4
else if(-1!==E.indexOf(s))t+=s
else{if(!(s in A))break
t+=A[s]}}else t+=i}return t}function C(e,t,r,n){for(var o=void 0,c={type:"Object",children:[]},u=0;r<t.length;){var d=t[r]
switch(u){case 0:if(0!==d.type)return null
o=d,u=1,r++
break
case 1:if(1===d.type)return n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,d.loc.end.line,d.loc.end.column,d.loc.end.offset,n.source)),{value:c,index:r+1}
var h=T(e,t,r,n)
c.children.push(h.value),u=2,r=h.index
break
case 2:if(1===d.type)return n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,d.loc.end.line,d.loc.end.column,d.loc.end.offset,n.source)),{value:c,index:r+1}
5===d.type?(u=3,r++):a(l(i(e,d.loc.start.offset,d.loc.end.offset),n.source,d.loc.start.line,d.loc.start.column),e,n.source,d.loc.start.line,d.loc.start.column)
break
case 3:var f=T(e,t,r,n)
f?(r=f.index,c.children.push(f.value),u=2):a(l(i(e,d.loc.start.offset,d.loc.end.offset),n.source,d.loc.start.line,d.loc.start.column),e,n.source,d.loc.start.line,d.loc.start.column)}}R(e,t,n)}function T(e,t,r,n){for(var o=void 0,c={type:"Property",key:null,value:null},u=0;r<t.length;){var d=t[r]
switch(u){case 0:if(6!==d.type)return null
var h={type:"Identifier",value:M(e.slice(d.loc.start.offset+1,d.loc.end.offset-1)),raw:d.value}
n.loc&&(h.loc=d.loc),o=d,c.key=h,u=1,r++
break
case 1:4===d.type?(u=2,r++):a(l(i(e,d.loc.start.offset,d.loc.end.offset),n.source,d.loc.start.line,d.loc.start.column),e,n.source,d.loc.start.line,d.loc.start.column)
break
case 2:var f=D(e,t,r,n)
return c.value=f.value,n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,f.value.loc.end.line,f.value.loc.end.column,f.value.loc.end.offset,n.source)),{value:c,index:f.index}}}}function q(e,t,r,n){for(var o=void 0,c={type:"Array",children:[]},u=0,d=void 0;r<t.length;)switch(d=t[r],u){case 0:if(2!==d.type)return null
o=d,u=1,r++
break
case 1:if(3===d.type)return n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,d.loc.end.line,d.loc.end.column,d.loc.end.offset,n.source)),{value:c,index:r+1}
var h=D(e,t,r,n)
r=h.index,c.children.push(h.value),u=2
break
case 2:if(3===d.type)return n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,d.loc.end.line,d.loc.end.column,d.loc.end.offset,n.source)),{value:c,index:r+1}
5===d.type?(u=3,r++):a(l(i(e,d.loc.start.offset,d.loc.end.offset),n.source,d.loc.start.line,d.loc.start.column),e,n.source,d.loc.start.line,d.loc.start.column)
break
case 3:var f=D(e,t,r,n)
r=f.index,c.children.push(f.value),u=2}R(e,t,n)}function O(e,t,r,i){var s=t[r],n=null
switch(s.type){case 6:n=M(e.slice(s.loc.start.offset+1,s.loc.end.offset-1))
break
case 7:n=Number(s.value)
break
case 8:n=!0
break
case 9:n=!1
break
case 10:n=null
break
default:return null}var o={type:"Literal",value:n,raw:s.value}
return i.loc&&(o.loc=s.loc),{value:o,index:r+1}}function D(e,t,r,s){var n=t[r],o=O.apply(void 0,arguments)||C.apply(void 0,arguments)||q.apply(void 0,arguments)
if(o)return o
a(l(i(e,n.loc.start.offset,n.loc.end.offset),s.source,n.loc.start.line,n.loc.start.column),e,s.source,n.loc.start.line,n.loc.start.column)}return function(e,t){var r=function(e,t){for(var r=1,n=1,o=0,l=[];o<e.length;){var u=[e,o,r,n],d=m.apply(void 0,u)
if(d)o=d.index,r=d.line,n=d.column
else{var h=_.apply(void 0,u)||b.apply(void 0,u)||v.apply(void 0,u)||w.apply(void 0,u)
if(h){var f={type:h.type,value:h.value,loc:s(r,n,o,h.line,h.column,h.index,t.source)}
l.push(f),o=h.index,r=h.line,n=h.column}else a(c(i(e,o,o+1),t.source,r,n),e,t.source,r,n)}}return l}(e,t=Object.assign({},k,t))
0===r.length&&R(e,r,t)
var n=D(e,r,0,t)
if(n.index===r.length)return n.value
var o=r[n.index]
a(l(i(e,o.loc.start.offset,o.loc.end.offset),t.source,o.loc.start.line,o.loc.start.column),e,t.source,o.loc.start.line,o.loc.start.column)}},e.exports=t()},8738:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{buildSignalConfig:()=>a})
var i=r(4463),s=r(1223),n=r(5606)
const o=n.dirtyTag
function a(e){const t=e.wellknown.Array
return{createSignal:(e,r)=>r===t?[(0,i.tagForProperty)(e,r),(0,i.tagForProperty)(e,"length"),(0,i.tagForProperty)(e,"[]")]:(0,i.tagForProperty)(e,r),consumeSignal(e){if(Array.isArray(e))return(0,n.consumeTag)(e[0]),(0,n.consumeTag)(e[1]),void(0,n.consumeTag)(e[2]);(0,n.consumeTag)(e)},notifySignal(e){if(Array.isArray(e))return o(e[0]),o(e[1]),void o(e[2])
o(e)},createMemo:(e,t,r)=>{{const s=(0,i.tagForProperty)(e,t),o=(0,n.createCache)(r)
let a
const l=()=>{a=(0,n.getValue)(o)}
return()=>{const e=(0,n.track)(l)
return(0,n.updateTag)(s,e),(0,n.consumeTag)(e),a}}},willSyncFlushWatchers:()=>!!s._backburner.currentInstance&&!0!==s._backburner._autorun,waitFor:async e=>e}}},9369:(e,t,r)=>{"use strict"
r.d(t,{C:()=>o,D:()=>n,S:()=>s,a:()=>l,b:()=>a})
var i=r(1113)
const s=(0,i.L1)("SOURCE",Symbol("#source")),n=(0,i.L1)("Destroy",Symbol.dispose||Symbol.for("Dispose")),o=(0,i.L1)("Checkout",Symbol("Checkout")),a=(0,i.L1)("Commit",Symbol("Commit")),l=(0,i.L1)("Context",Symbol("Context"))},9370:(e,t,r)=>{"use strict"
r.d(t,{ZU:()=>n,pm:()=>s})
var i=r(1113)
const s=(0,i.L1)("Store",Symbol("Store")),n=(0,i.L1)("$type",Symbol("$type"));(0,i.L1)("RequestSignature",Symbol("RequestSignature"))},9441:(e,t,r)=>{"use strict"
r.d(t,{Fp:()=>i.F,Je:()=>i.z,fV:()=>i.s,il:()=>i.S,lL:()=>i.C,o:()=>i.r})
var i=r(9471)
r(9369),r(6316),r(4467),r(1603),r(5546),r(191)},9471:(e,t,r)=>{"use strict"
r.d(t,{C:()=>Ye,F:()=>Qt,S:()=>Ne,a:()=>A,b:()=>w,d:()=>xe,f:()=>Re,g:()=>Pe,h:()=>L,i:()=>S,j:()=>B,k:()=>K,l:()=>Xe,n:()=>R,r:()=>U,s:()=>H,z:()=>Jt})
var i=r(6316),s=r(1603),n=r(8382),o=r(9369),a=r(793),l=r(1113),c=(r(4467),r(5348))
Symbol("record-originated-on-client"),Symbol("key-type"),Symbol("warpDriveStaleCache")
const u="__$co"
var d=r(5546),h=(r(191),r(9370))
function f(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return"string"==typeof e?e:e.href}const y={async _request(e,t=(0,c.sw)({url:"",method:"GET"})){const r=this.links?.[e]
return r?(t.method=t.method||"GET",Object.assign(t,{url:p(r)}),(await this._store.request(t)).content):null},fetch(e=(0,c.sw)({url:"",method:"GET"})){return e.cacheOptions=e.cacheOptions||{},e.cacheOptions.key=this.identifier?.lid,this._request(this.links.related?"related":"self",e)},next(e){return this._request("next",e)},prev(e){return this._request("prev",e)},first(e){return this._request("first",e)},last(e){return this._request("last",e)},toJSON(){const e={}
return e.identifier=this.identifier,void 0!==this.data&&(e.data=this.data),void 0!==this.links&&(e.links=this.links),void 0!==this.errors&&(e.errors=this.errors),void 0!==this.meta&&(e.meta=this.meta),e},[o.D](){this._subscription&&(this._store.notifications.unsubscribe(this._subscription),this._store=null,this._subscription=null)}}
function g(e,t,r){const s=Object.create(y)
s._store=e,s._localCache=r,s.identifier=t
const n=(0,i.c)(s)
return t&&(s._subscription=e.notifications.subscribe(t,(e,t)=>{"updated"===t&&((0,i.n)((0,i.p)(n,"data")),(0,i.n)((0,i.p)(n,"links")),(0,i.n)((0,i.p)(n,"meta")),(0,i.n)((0,i.p)(n,"errors")))})),s}function m(e){return Boolean(e&&"object"==typeof e)}function _(e,t){return Boolean(m(e)&&t in e&&"string"==typeof e[t]&&e[t].length)}function b(e){return _(e,"lid")}function v(e){return _(e,"id")||Boolean(m(e)&&"id"in e&&"number"==typeof e.id)}function w(e){{let t
return t=null==e||""===e?null:String(e),(0,s.deprecate)(`The resource id '<${typeof e}> ${String(e)} ' is not normalized. Update your application code to use '${JSON.stringify(t)}' instead.`,t===e,{id:"ember-data:deprecate-non-strict-id",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function k(e){let t=null
return"string"==typeof e?t=e.length>0?e:null:"number"!=typeof e||isNaN(e)||(t=String(e)),t}function R(e){{const t=(0,d._k)(e)
return(0,s.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function S(e){return"@document"!==e.type&&void 0!==e[u]}function A(e){return"@document"===e.type&&void 0!==e[u]}(0,i.a)(y,"errors",{get(){const{identifier:e}=this
if(!e){const{document:e}=this._localCache
return"errors"in e?e.errors:void 0}const t=this._store.cache.peek(e)
return"errors"in t?t.errors:void 0}}),(0,i.a)(y,"data",{get(){const{identifier:e,_localCache:t}=this,r=e?this._store.cache.peek(e):t.document,i="data"in r?r.data:void 0
return Array.isArray(i)?e?this._store.recordArrayManager.getCollection({source:i.slice(),requestKey:e}):this._store.recordArrayManager.getCollection({source:i.slice()}):i?this._store.peekRecord(i):i}}),(0,i.a)(y,"links",{get(){const{identifier:e}=this
return e?this._store.cache.peek(e).links:this._localCache.document.links}}),(0,i.a)(y,"meta",{get(){const{identifier:e}=this
return e?this._store.cache.peek(e).meta:this._localCache.document.meta}})
const E="undefined"!=typeof FastBoot?FastBoot.require("crypto"):globalThis.crypto,M=new Map
let C=0
function T(e,t,r){"record"===r&&!e.id&&v(t)&&function(e,t,r){let i=e.get(t.type)
i||(i=new Map,e.set(t.type,i)),i.set(r,t.lid)}(M,e,t.id)}function q(e,t){const r=v(e)?w(e.id):null
return{type:function(e){return _(e,"type")}(e)?R(e.type):t?t.type:null,id:r}}function O(e,t){if("record"===t){if(b(e))return e.lid
if(v(e)){const t=R(e.type),r=M.get(t)?.get(e.id)
return r||`@lid:${t}-${e.id}`}return E.randomUUID()}if("document"===t)return e.url?e.method&&"GET"!==e.method.toUpperCase()?null:e.url:null}function D(...e){}function j(e,t,r){return e}class N{constructor(){f(this,"_cache",void 0),this._generate=(0,l.Yj)("configuredGenerationMethod")||O,this._update=(0,l.Yj)("configuredUpdateMethod")||T,this._forget=(0,l.Yj)("configuredForgetMethod")||D,this._reset=(0,l.Yj)("configuredResetMethod")||D,this._merge=j,this._keyInfoForResource=(0,l.Yj)("configuredKeyInfoMethod")||q,this._id=C++,this._cache={resources:new Map,resourcesByType:Object.create(null),documents:new Map,polymorphicLidBackMap:new Map}}__configureMerge(e){this._merge=e||j}upgradeIdentifier(e){return this._getRecordIdentifier(e,2)}_getRecordIdentifier(e,t){if(S(e))return e
const r=this._generate(e,"record")
let i=P(this._cache,r)
if(null!==i)return i
if(0!==t){if(2===t)e.lid=r,e[u]=this._id,i=x(e)
else{const t=this._keyInfoForResource(e,null)
t.lid=r,t[u]=this._id,i=x(t)}return F(this._cache,i),i}}peekResourceKey(e){return this._getRecordIdentifier(e,0)}peekRequestKey(e){let t=e.cacheOptions?.key
return t||(t=this._generate(e,"document")),t?this._cache.documents.get(t)??null:null}getOrCreateDocumentIdentifier(e){let t=e.cacheOptions?.key
if(t||(t=this._generate(e,"document")),!t)return null
let r=this._cache.documents.get(t)
return void 0===r&&(r={lid:t,type:"@document",[u]:this._id},this._cache.documents.set(t,r)),r}getOrCreateRecordIdentifier(e){return this._getRecordIdentifier(e,1)}createIdentifierForNewRecord(e){const t=this._generate(e,"record"),r=x({id:e.id||null,type:e.type,lid:t,[u]:this._id})
return F(this._cache,r),r}updateRecordIdentifier(e,t){let r=this.getOrCreateRecordIdentifier(e)
const i=this._keyInfoForResource(t,r)
let s=function(e,t,r,i){const s=t.id,{id:n,type:o,lid:a}=r,l=e.resourcesByType[r.type]
if(null!==n&&n!==s&&null!==s){const e=l&&l.id.get(s)
return void 0!==e&&e}{const r=t.type
if(null!==n&&n===s&&r===o&&b(i)&&i.lid!==a)return P(e,i.lid)||!1
if(null!==n&&n===s&&r&&r!==o&&b(i)&&i.lid===a){const t=e.resourcesByType[r],i=t&&t.id.get(s)
return void 0!==i&&i}}return!1}(this._cache,i,r,t)
const n=b(t)
if(s||r.type!==i.type&&(n&&delete t.lid,s=this.getOrCreateRecordIdentifier(t)),s){const e=r
r=this._mergeRecordIdentifiers(i,e,s,t),n&&(t.lid=r.lid)}const o=r.id;(function(e,t,r,i){i(e,r,"record"),void 0!==r.id&&(e.id=w(r.id))})(r,0,t,this._update)
const a=r.id
if(o!==a&&null!==a){const e=this._cache.resourcesByType[r.type]
e.id.set(a,r),null!==o&&e.id.delete(o)}return r}_mergeRecordIdentifiers(e,t,r,i){const s=this._merge(t,r,i),n=s===t?r:t,o=this._cache.polymorphicLidBackMap.get(n.lid)
o&&this._cache.polymorphicLidBackMap.delete(n.lid),this.forgetRecordIdentifier(n),this._cache.resources.set(n.lid,s)
const a=this._cache.polymorphicLidBackMap.get(s.lid)??[]
return a.push(n.lid),o&&o.forEach(e=>{a.push(e),this._cache.resources.set(e,s)}),this._cache.polymorphicLidBackMap.set(s.lid,a),s}forgetRecordIdentifier(e){const t=this.getOrCreateRecordIdentifier(e),r=this._cache.resourcesByType[t.type]
null!==t.id&&r.id.delete(t.id),this._cache.resources.delete(t.lid),r.lid.delete(t.lid)
const i=this._cache.polymorphicLidBackMap.get(t.lid)
i&&(i.forEach(e=>{this._cache.resources.delete(e)}),this._cache.polymorphicLidBackMap.delete(t.lid)),t[u]=void 0,this._forget(t,"record")}destroy(){M.clear(),this._reset()}}function x(e,t,r){return e}function P(e,t,r){return e.resources.get(t)||null}function F(e,t){e.resources.set(t.lid,t)
let r=e.resourcesByType[t.type]
r||(r={lid:new Map,id:new Map},e.resourcesByType[t.type]=r),r.lid.set(t.lid,t),t.id&&r.id.set(t.id,t)}class I{constructor(e){this._store=e,this._willNotify=!1,this._pendingNotifies=new Map}get cacheKeyManager(){return this._store.cacheKeyManager}get identifierCache(){return this.cacheKeyManager}_scheduleNotification(e,t){let r=this._pendingNotifies.get(e)
r||(r=new Set,this._pendingNotifies.set(e,r)),r.add(t),!0!==this._willNotify&&(this._willNotify=!0,this._store._cbs?this._store._schedule("notify",()=>this._flushNotifications()):this._flushNotifications())}_flushNotifications(){if(!1===this._willNotify)return
const e=this._pendingNotifies
this._pendingNotifies=new Map,this._willNotify=!1,e.forEach((e,t)=>{e.forEach(e=>{this._store.notifications.notify(t,"relationships",e)})})}notifyChange(e,t,r){"relationships"===t&&r?this._scheduleNotification(e,r):this._store.notifications.notify(e,t,r)}get schema(){return this._store.schema}setRecordId(e,t){this._store._instanceCache.setRecordId(e,t)}hasRecord(e){return Boolean(this._store._instanceCache.peek(e))}disconnectRecord(e){this._store._instanceCache.disconnect(e),this._pendingNotifies.delete(e)}}function L(e){}I.prototype.getSchemaDefinitionService=function(){return this.schema}
const z=(0,l.L1)("RecordCache",new Map)
function $(e){return z.get(e)}function U(e){return z.get(e)}function B(e,t){z.set(e,t)}const K=(0,l.L1)("StoreMap",new Map)
function H(e,t){return K.get(e)??null}class G{constructor(e){this.store=e,this.__instances={record:new Map,document:new Map},this._storeWrapper=new I(this.store),e.cacheKeyManager.__configureMerge((e,t,r)=>{let i=e
e.id!==t.id?i="id"in r&&e.id===r.id?e:t:e.type!==t.type&&(i="type"in r&&e.type===r.type?e:t)
const s=e===i?t:e,n=this.__instances.record.has(i),o=this.__instances.record.has(s)
if(n&&o&&"id"in r)throw new Error(`Failed to update the 'id' for the ResourceKey '${e.type}:${String(e.id)} (${e.lid})' to '${String(r.id)}', because that id is already in use by '${t.type}:${String(t.id)} (${t.lid})'`)
return this.store.cache.patch({op:"mergeIdentifiers",record:s,value:i}),this.unloadRecord(s),i})}peek(e){return this.__instances.record.get(e)}getDocument(e){let t=this.__instances.document.get(e)
return t||(t=g(this.store,e,null),this.__instances.document.set(e,t)),t}getRecord(e){let t=this.__instances.record.get(e)
return t||(t=W(this,e,{})),t}recordIsLoaded(e,t=!1){const r=this.cache
if(!r)return!1
const i=r.isNew(e),s=r.isEmpty(e)
return i?!r.isDeleted(e):!(t&&r.isDeletionCommitted(e)||s)}disconnect(e){this.__instances.record.get(e),this.store._graph?.remove(e),this.store.cacheKeyManager.forgetRecordIdentifier(e),K.delete(e),this.store._requestCache._clearEntries(e)}unloadRecord(e){this.store._join(()=>{!function(e,t){const r=e.__instances.record.get(t),i=e.cache
r&&(e.store.teardownRecord(r),e.__instances.record.delete(t),K.delete(r),z.delete(r)),i?(i.unloadRecord(t),K.delete(t)):e.disconnect(t),e.store._requestCache._clearEntries(t)}(this,e)})}clear(e){const t=this.store.cacheKeyManager._cache
if(void 0===e)t.resources.forEach(e=>{this.unloadRecord(e)})
else{const r=t.resourcesByType,i=r[e]?.lid
i&&i.forEach(e=>{this.unloadRecord(e)})}}setRecordId(e,t){const{type:r,lid:i}=e,n=e.id
null===n||null!==t?(this.store.cacheKeyManager.peekResourceKey({type:r,id:t}),null===e.id&&this.store.cacheKeyManager.updateRecordIdentifier(e,{type:r,id:t}),this.store.notifications.notify(e,"identity",null)):(0,s.warn)(`Your ${r} record was saved to the server, but the response does not have an id.`,!(null!==n&&null===t))}}function W(e,t,r){const i=e.store.instantiateRecord(t,r)
return B(i,t),K.set(i,e.store),e.__instances.record.set(t,i),i}function Y(e){return"added"===e||"state"===e||"updated"===e||"removed"===e||"invalidated"===e}class V{constructor(e){this.store=e,this.isDestroyed=!1,this._buffered=new Map,this._hasFlush=!1,this._cache=new Map}subscribe(e,t){let r=this._cache.get(e)
return t.for=e,r||(r=[],this._cache.set(e,r)),r.push(t),t}unsubscribe(e){this.isDestroyed||function(e,t){const r=e.for
if(r){const i=t.get(r)
if(!i)return
const s=i.indexOf(e)
if(-1===s)return
i.splice(s,1)}}(e,this._cache)}notify(e,t,r){if(this.isDestroyed)return!1
if(!S(e)&&!A(e))return!1
const i=function(e,t,r){const i=Boolean(e.get(t)?.length)
if(i||!Y(r))return i
const s=e.get(A(t)?"document":"resource")
return Boolean(s?.length)}(this._cache,e,t)
if(i){let i=this._buffered.get(e)
i||(i=[],this._buffered.set(e,i)),i.push([t,r||null]),this._scheduleNotify()}return i}_onNextFlush(e){this._onFlushCB=e}_scheduleNotify(){const e=this.store._enableAsyncFlush
return!(this._hasFlush&&!1!==e&&!(0,i.j)()||(e&&!(0,i.j)()?(this._hasFlush=!0,1):(this._flush(),0)))}_flush(){const e=this._buffered
if(e.size){this._buffered=new Map
for(const[t,r]of e)for(let e=0;e<r.length;e++)Z(this._cache,t,r[e][0],r[e][1])}this._hasFlush=!1,this._onFlushCB?.(),this._onFlushCB=void 0}destroy(){this.isDestroyed=!0,this._cache.clear()}}function Z(e,t,r,i){if(Y(r)){const i=e.get(A(t)?"document":"resource")
i&&i.forEach(e=>{e(t,r)})}const s=e.get(t)
return!(!s||!s.length||(s.forEach(e=>{e(t,r,i)}),0))}function Q(){if(this.isUpdating)return this._updatingPromise
this.isUpdating=!0
const e=this._update()
return e.finally(()=>{this._updatingPromise=null,this.isDestroying||this.isDestroyed||(this.isUpdating=!1)}),this._updatingPromise=e,e}function J(){const e=this[o.a]
return Promise.all(this.map(t=>e.store.saveRecord(t))).then(()=>this)}const X=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),ee=new Set(["push","pop","unshift","shift","splice","sort"])
function te(e){return X.has(e)}function re(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}function ie(e,t){return Boolean(e&&"number"!=typeof t&&e.has(t))}function se(e,t,r,s){const n=t.get(s)
switch(n.kind){case"method":return n.fn
case"readonly-value":return n.value
case"mutable-value":return(0,i.k)(r,e,s,n.value).value
case"readonly-field":case"mutable-field":return n.get.call(e)
default:return}}function ne(e,t,r,s,n){const o=t.get(s)
switch(o.kind){case"method":case"readonly-value":case"readonly-field":default:return!1
case"mutable-value":{const t=(0,i.k)(r,e,s,o.value)
return t.value!==n&&(t.value=n),!0}case"writeonly-field":case"mutable-field":return o.set.call(e,n),!0}}function oe(e,t,r,s,n,o,a){const l=t.get(s)
switch(l.kind){case"method":{let t=o.get(s)
return void 0===t&&(t=function(){(0,i.l)(n),a(!0)
const t=Reflect.apply(l.fn,e,arguments)
return a(!1),t},o.set(s,t)),t}case"mutable-field":case"readonly-field":return l.get.call(e)
case"readonly-value":return l.value
case"mutable-value":return(0,i.k)(r,e,s,l.value).value
default:return}}const ae=Proxy,le=(0,l.L1)("IS_COLLECTION",Symbol.for("Collection"))
function ce(e){return"destroy"===e||"isDestroying"===e||"isDestroyed"===e}const ue=["_updatingPromise","isDestroying","isDestroyed","query","isUpdating","isLoaded","meta","links","isAsync","isPolymorphic","identifier","cache","key","DEPRECATED_CLASS_NAME"],de={enumerable:!0,configurable:!1,get:function(){return this}},he=(0,i.q)("isUpdating",!1),fe={getOwnPropertyDescriptor:(e,t)=>"[]"===t?(Reflect.getOwnPropertyDescriptor(e,t)||Object.defineProperty(e,t,de),de):"isUpdating"===t?he:Reflect.getOwnPropertyDescriptor(e,t),get(e,t,r){const s=e[o.a]
if(t===i.S)return s.signals
const n=re(t)
if(s.signal.isStale&&(null!==n||"length"===t||"[]"===t||s.data&&t in s.data||te(t))&&(s.manager._syncArray(r),s.signal.isStale=!1),null!==n){const t=e[n]
return s.transaction||(0,i.l)(s.signal),t&&s.store._instanceCache.getRecord(t)}if("length"===t)return(0,i.l)(s.signal),e.length
if("[]"===t)return(0,i.l)(s.signal),r
if("isUpdating"===t)return he.get.call(r)
if(t===le)return!0
if(t===o.a)return s
if(ce(t))return s[t]
if(s.data&&t in s.data)return(0,i.l)(s.signal),s.data[t]
if(te(t)){let n=s.boundFns.get(t)
return void 0===n&&(n="forEach"===t?function(){(0,i.l)(s.signal),s.transaction=!0
const t=function(e,t,r,i,s){void 0===s&&(s=null)
const n=(t=t.slice()).length
for(let o=0;o<n;o++)i.call(s,r._instanceCache.getRecord(t[o]),o,e)
return e}(r,e,s.store,arguments[0],arguments[1])
return s.transaction=!1,t}:function(){(0,i.l)(s.signal),s.transaction=!0
const n=Reflect.apply(e[t],r,arguments)
return s.transaction=!1,n},s.boundFns.set(t,n)),n}if(function(e){return ee.has(e)}(t)){let i=s.boundFns.get(t)
return void 0===i&&(i=function(){if(!s.editable)return
const i=Array.prototype.slice.call(arguments)
s.transaction=!0
const n=s.mutate(e,r,t,i,s.signal)
return s.transaction=!1,n},s.boundFns.set(t,i)),i}if(s.features&&t in s.features){let e=s.boundFns.get(t)
if(e)return e
const n=s.features[t]
return"function"==typeof n?(e=function(){return(0,i.l)(s.signal),Reflect.apply(n,r,arguments)},s.boundFns.set(t,e),e):((0,i.l)(s.signal),n)}return ie(s.extensions,t)?oe(r,s.extensions,s.signals,t,s.signal,s.boundFns,e=>{s.transaction=e}):e[t]},set(e,t,r,s){const n=e[o.a]
if(t===i.S)return n.signals=r,!0
if(!n.editable&&!ue.includes(t))return!1
if("length"===t){if(!n.transaction&&0===r)return n.transaction=!0,n.mutate(e,s,"length 0",[],n.signal),n.transaction=!1,!0
if(n.transaction)return Reflect.set(e,t,r)}if(ce(t))return n[t]=r,!0
if(n.data&&t in n.data)return n.data[t]=r||null,!0
if("isUpdating"===t)return he.set.call(s,r),!0
if(ie(n.extensions,t))return ne(s,n.extensions,n.signals,t,r)
const a=re(t)
if(null===a||a>e.length){if(null!==a&&n.transaction){const t=U(r)
return e[a]=t,!0}return!(!n.features||!(t in n.features)||(n.features[t]=r,0))}const l=e[a],c=(u=r)?U(u):null
var u
return n.transaction?e[a]=c:n.mutate(e,s,"replace cell",[a,l,c],n.signal),!0},deleteProperty:(e,t)=>!!e[o.a].transaction&&Reflect.deleteProperty(e,t),getPrototypeOf:()=>Array.prototype},pe=()=>{}
function ye(e){const t=e.source,r={store:e.store,manager:e.manager,editable:e.editable,source:e.source,data:e.data,features:e.features,extensions:e.extensions,options:e.options,destroy:e.destroy||ge,mutate:e.mutate||pe,signals:null,signal:null,isDestroying:!1,isDestroyed:!1,transaction:!1,boundFns:new Map}
t[o.a]=r
const s=new ae(t,fe)
return(0,i.c)(s),r.signal=(0,i.o)(r.signals,s,i.A,void 0),s}function ge(e){const t=this[o.a]
this.isDestroying=!e,t.source.length=0,(0,i.n)(t.signal),this.isDestroyed=!e}function me(e){return ye({store:e.store,manager:e.manager,editable:!1,source:e.source,data:null,features:null,extensions:null,options:e.options,destroy:null,mutate:null})}function _e(){return this[o.a].store.findAll(this.modelName,{reload:!0})}function be(){const e=this[o.a],{query:t}=this
return e.store.query(this.modelName,t,{_recordArray:this})}function ve(e){ge.call(this,e??!1)
const{manager:t}=this[o.a]
t._managed.delete(this),t._pending.delete(this)}const we=(0,l.L1)("FAKE_ARR",{}),ke=4761
function Re(e,t){let r
for(;t.length>ke;)r=t.splice(0,ke),e.push(...r)
e.push(...t)}class Se{constructor(e){this.store=e.store,this.isDestroying=!1,this.isDestroyed=!1,this._live=new Map,this._managed=new Set,this._pending=new Map,this._staged=new Map,this._keyedArrays=new Map,this._identifiers=new Map,this._set=new Map,this._visibilitySet=new Map,this._documentSubscription=this.store.notifications.subscribe("document",(e,t)=>{if("updated"===t&&this._keyedArrays.has(e.lid)){const t=this._keyedArrays.get(e.lid)
this.dirtyArray(t,0,!0)}}),this._subscribeToResourceChanges()}_subscribeToResourceChanges(){this._subscription=this.store.notifications.subscribe("resource",(e,t)=>{const r=this.store.schema.resource?.(e);(!r||"legacy"in r&&r.legacy||!this.store.cache.isNew(e))&&("added"===t?(this._visibilitySet.set(e,!0),this.identifierAdded(e)):"removed"===t?(this._visibilitySet.set(e,!1),this.identifierRemoved(e)):"state"===t&&this.identifierChanged(e))})}_syncArray(e){const t=this._pending.get(e),r=Me(e)
if(!(r&&!t||this.isDestroying||this.isDestroyed||(t&&(function(e,t,r){const i=e[o.a].source,s=[],n=[]
t.forEach((e,t)=>{if("add"===e){if(r.has(t))return
s.push(t),r.add(t)}else r.has(t)&&(n.push(t),r.delete(t))}),n.length&&(n.length===i.length?i.length=0:n.forEach(e=>{const t=i.indexOf(e);-1!==t&&(i.splice(t,1),r.delete(e))})),s.length&&Re(i,s)}(e,t,this._set.get(e)),this._pending.delete(e)),r||function(e){const t=e[o.a]
return null!==t.features&&"LiveArray"===t.features.DEPRECATED_CLASS_NAME}(e)))){const t=e[o.a],r=t.signal,i=t.options.requestKey
if("cache-sync"===r.value){const t=this.store.cache.peek(i),r="data"in t&&Array.isArray(t.data)?t.data:[]
this.populateManagedArray(e,r,null)}}}mutate(e){this.store.cache.mutate(e)}liveArrayFor(e){let t=this._live.get(e)
const r=[],i=this._staged.get(e)
var s
return i&&(i.forEach((e,t)=>{"add"===e&&r.push(t)}),this._staged.delete(e)),t||(t=ye({store:(s={store:this.store,manager:this,source:r,type:e}).store,manager:s.manager,editable:!1,source:s.source,data:null,features:{modelName:s.type,update:Q,_update:_e,save:J,DEPRECATED_CLASS_NAME:"LiveArray",isUpdating:!1,isLoaded:!0,_updatingPromise:null},extensions:null,options:null,destroy:null,mutate:null}),this._live.set(e,t),this._set.set(t,new Set(r))),t}getCollection(e){if("requestKey"in e&&this._keyedArrays.has(e.requestKey.lid))return this._keyedArrays.get(e.requestKey.lid)
let t=null
var r
return"requestKey"in e?(t=me({store:this.store,manager:this,source:e.source,options:{requestKey:e.requestKey}}),this._keyedArrays.set(e.requestKey.lid,t),this._set.set(t,new Set(e.source)),Ae(this._identifiers,t,e.source)):"query"in e?(t=ye({store:(r={store:this.store,manager:this,source:[],type:e.type,query:e.query,isLoaded:!1,links:null,meta:null}).store,manager:r.manager,editable:!1,source:r.source,data:{links:r.links,meta:r.meta},features:{query:r.query,modelName:r.type,update:Q,_update:be,save:J,DEPRECATED_CLASS_NAME:"LegacyQueryArray",isUpdating:!1,isLoaded:r.isLoaded,_updatingPromise:null},extensions:null,options:null,destroy:ve,mutate:null}),this._set.set(t,new Set)):(t=me({store:this.store,manager:this,source:e.source,options:null}),this._set.set(t,new Set(e.source)),Ae(this._identifiers,t,e.source)),this._managed.add(t),t}dirtyArray(e,t,r){if(e===we)return
const s=e[o.a].signal;(!s.isStale||t>0)&&((0,i.n)(s),s.value=r?"cache-sync":"patch")}_getPendingFor(e,t,r){if(this.isDestroying||this.isDestroyed)return
const i=this._live.get(e.type),s=this._pending,n=new Map
if(t){const t=this._identifiers.get(e)
t&&t.forEach(e=>{let t=s.get(e)
t||(t=new Map,s.set(e,t)),n.set(e,t)})}if(i&&0===i[o.a].source.length&&r){const e=s.get(i)
if(!e||0===e.size)return n}if(i){let e=s.get(i)
e||(e=new Map,s.set(i,e)),n.set(i,e)}else{let t=this._staged.get(e.type)
t||(t=new Map,this._staged.set(e.type,t)),n.set(we,t)}return n}populateManagedArray(e,t,r){this._pending.delete(e)
const s=e[o.a].source,n=s.slice()
s.length=0,Re(s,t),this._set.set(e,new Set(t)),Me(e)&&((0,i.n)(e[o.a].signal),e.meta=r?.meta||null,e.links=r?.links||null,e.isLoaded=!0),function(e,t,r){for(let i=0;i<r.length;i++)Ee(e,t,r[i])}(this._identifiers,e,n),Ae(this._identifiers,e,t)}identifierAdded(e){const t=this._getPendingFor(e,!1)
t&&t.forEach((t,r)=>{"del"===t.get(e)?t.delete(e):(t.set(e,"add"),this.dirtyArray(r,t.size,!1))})}identifierRemoved(e){const t=this._getPendingFor(e,!0,!0)
t&&t.forEach((t,r)=>{"add"===t.get(e)?t.delete(e):(t.set(e,"del"),this.dirtyArray(r,t.size,!1))})}identifierChanged(e){const t=this.store._instanceCache.recordIsLoaded(e,!0)
this._visibilitySet.get(e)!==t&&(t?this.identifierAdded(e):this.identifierRemoved(e))}pause(){this.store.notifications.unsubscribe(this._subscription)}resume(){this._subscribeToResourceChanges()}clear(e=!0){for(const t of this._live.values())t.destroy(e)
for(const t of this._managed.values())t.destroy(e)
this._managed.clear(),this._identifiers.clear(),this._pending.clear()
for(const t of this._set.values())t.clear()
this._visibilitySet.clear()}destroy(){this.isDestroying=!0,this.clear(!1),this._live.clear(),this.store.notifications.unsubscribe(this._subscription),this.store.notifications.unsubscribe(this._documentSubscription),this.isDestroyed=!0}}function Ae(e,t,r){for(let i=0;i<r.length;i++){const s=r[i]
let n=e.get(s)
n||(n=new Set,e.set(s,n)),n.add(t)}}function Ee(e,t,r){const i=e.get(r)
i&&i.delete(t)}function Me(e){const t=e[o.a]
return null!==t.features&&"LegacyQueryArray"===t.features.DEPRECATED_CLASS_NAME}const Ce=(0,l.L1)("Touching",Symbol("touching")),Te=(0,l.L1)("RequestPromise",Symbol("promise")),qe=[]
class Oe{constructor(e){f(this,"_pending",new Map),f(this,"_done",new Map),f(this,"_subscriptions",new Map),f(this,"_toFlush",[]),f(this,"_store",void 0),this._store=e}_clearEntries(e){this._done.delete(e)}_enqueue(e,t){const r=t.data[0]
if("recordIdentifier"in r){const i=r.recordIdentifier,s="saveRecord"===r.op?"mutation":"query"
this._pending.has(i)||this._pending.set(i,[])
const n={state:"pending",request:t,type:s}
return n[Ce]=[r.recordIdentifier],n[Te]=e,this._pending.get(i).push(n),this._triggerSubscriptions(n),e.then(e=>{this._dequeue(i,n)
const r={state:"fulfilled",request:t,type:s,response:{data:e}}
return r[Ce]=n[Ce],this._addDone(r),this._triggerSubscriptions(r),e},e=>{this._dequeue(i,n)
const r={state:"rejected",request:t,type:s,response:{data:e}}
throw r[Ce]=n[Ce],this._addDone(r),this._triggerSubscriptions(r),e})}}_triggerSubscriptions(e){"pending"!==e.state?(this._toFlush.push(e),1===this._toFlush.length&&this._store.notifications._onNextFlush(()=>{this._flush()})):this._flushRequest(e)}_flush(){this._toFlush.forEach(e=>{this._flushRequest(e)}),this._toFlush=[]}_flushRequest(e){e[Ce].forEach(t=>{const r=this._subscriptions.get(t)
r&&r.forEach(t=>t(e))})}_dequeue(e,t){const r=this._pending.get(e)
this._pending.set(e,r.filter(e=>e!==t))}_addDone(e){e[Ce].forEach(t=>{const r=e.request.data[0].op
let i=this._done.get(t)
i&&(i=i.filter(e=>{let t
return t=Array.isArray(e.request.data)?e.request.data[0]:e.request.data,t.op!==r})),i=i||[],i.push(e),this._done.set(t,i)})}subscribeForRecord(e,t){let r=this._subscriptions.get(e)
r||(r=[],this._subscriptions.set(e,r)),r.push(t)}getPendingRequestsForRecord(e){return this._pending.get(e)||qe}getLastRequestForRecord(e){const t=this._done.get(e)
return t?t[t.length-1]:null}}const De=class{constructor(e){}},je=De.default?De.default:De
je!==De&&(0,s.deprecate)("The Store class extending from EmberObject is deprecated.\nPlease remove usage of EmberObject APIs and mark your class as not requiring it.\n\nTo mark the class as no longer extending from EmberObject, in ember-cli-build.js\nset the following config:\n\n```js\nconst app = new EmberApp(defaults, {\n  emberData: {\n    deprecations: {\n      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false\n    }\n  }\n});\n```\n",!1,{id:"ember-data:deprecate-store-extends-ember-object",until:"6.0",for:"ember-data",url:"https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object",since:{available:"4.13",enabled:"5.4"}})
class Ne extends je{get schema(){return this._schema||(this._schema=this.createSchemaService()),this._schema}get isDestroying(){return this._isDestroying}set isDestroying(e){this._isDestroying=e}get isDestroyed(){return this._isDestroyed}set isDestroyed(e){this._isDestroyed=e}get identifierCache(){return this.cacheKeyManager}constructor(e){super(e),Object.assign(this,e),this.cacheKeyManager=new N,this.notifications=new V(this),this.recordArrayManager=new Se({store:this}),this._requestCache=new Oe(this),this._instanceCache=new G(this),this.isDestroying=!1,this.isDestroyed=!1}_run(e){const t=this._cbs={}
e(),t.coalesce&&t.coalesce(),t.sync&&t.sync(),t.notify&&t.notify(),this._cbs=null}_join(e){this._cbs?e():this._run(e)}_schedule(e,t){this._cbs[e]=t}getRequestStateService(){return this._requestCache}_getAllPending(){}request(e){const t={store:this,[n._q]:e[n._q]??!0}
if(e.records){const r=this.cacheKeyManager
t.records=e.records.map(e=>r.getOrCreateRecordIdentifier(e))}const r=Object.assign({},e,t),i=this.requestManager.request(r)
return i.onFinalize(()=>{("findBelongsTo"!==e.op||e.url)&&this.notifications._flush()}),i}createRecord(e,t,r){let i
return this._join(()=>{const s=R(e),n={...t}
let o=null
if(null===n.id||void 0===n.id){const e=this.adapterFor?.(s,!0)
o=e&&e.generateIdForRecord?n.id=w(e.generateIdForRecord(this,s,n)):n.id=null}else o=n.id=w(n.id)
const a={type:s,id:o}
a.id&&this.cacheKeyManager.peekResourceKey(a),r?.lid&&(this.cacheKeyManager.peekResourceKey({lid:r?.lid}),a.lid=r.lid)
const l=this.cacheKeyManager.createIdentifierForNewRecord(a),c=this.cache,u=function(e,t,r){if(void 0!==r){const{type:i}=t,s=e.schema.fields({type:i})
if(s.size){const e=Object.keys(r)
for(let t=0;t<e.length;t++){const i=e[t],n=s.get(i)
n&&("hasMany"===n.kind?r[i]=Ie(r[i]):"belongsTo"===n.kind&&(r[i]=Le(r[i])))}}}return r}(this,l,n),d=c.clientDidCreate(l,u)
i=function(e,t,r){let i=e.__instances.record.get(t)
if(!i&&(i=W(e,t,r),i instanceof xt&&e.store.schema.resource)&&!e.store.schema.resource(t).legacy){const e=Pt(i)
return r&&Object.assign(e,r),e}return i}(this._instanceCache,l,d)}),i}deleteRecord(e){const t=$(e),r=this.cache
this._join(()=>{r.setIsDeleted(t,!0),r.isNew(t)&&this._instanceCache.unloadRecord(t)})}unloadRecord(e){const t=$(e)
t&&this._instanceCache.unloadRecord(t)}peekRecord(e,t){if(1===arguments.length&&Fe(e)){const t=this.cacheKeyManager.peekResourceKey(e)
return t&&this._instanceCache.recordIsLoaded(t)?this._instanceCache.getRecord(t):null}const r={type:R(e),id:k(t)},i=this.cacheKeyManager.peekResourceKey(r)
return i&&this._instanceCache.recordIsLoaded(i)?this._instanceCache.getRecord(i):null}peekAll(e){return this.recordArrayManager.liveArrayFor(R(e))}unloadAll(e){this._join(()=>{this._enableAsyncFlush=!0,void 0===e?(this.recordArrayManager.pause(),this._graph?.identifiers.clear(),this.recordArrayManager.clear(),this._instanceCache.clear()):this._instanceCache.clear(R(e)),this._enableAsyncFlush=null,this.notifications._flush(),void 0===e&&this.recordArrayManager.resume()})}push(e){const t=this._push(e,!1)
return Array.isArray(t)?t.map(e=>this._instanceCache.getRecord(e)):null===t?null:this._instanceCache.getRecord(t)}_push(e,t){let r
return t&&(this._enableAsyncFlush=!0),this._join(()=>{r=this.cache.put({content:e})}),this._enableAsyncFlush=null,"data"in r?r.data:null}get cache(){let{cache:e}=this._instanceCache
return e||(e=this._instanceCache.cache=this.createCache(this._instanceCache._storeWrapper)),e}destroy(){this.isDestroyed||(this.isDestroying=!0,this._graph?.destroy(),this._graph=void 0,this.notifications.destroy(),this.recordArrayManager.destroy(),this.cacheKeyManager.destroy(),this._instanceCache.clear(),this.isDestroyed=!0)}static create(e){return new this(e)}}function xe(e){}function Pe(e){return e}function Fe(e){return Boolean(null!==e&&"object"==typeof e&&("id"in e&&"type"in e&&e.id&&e.type||e.lid))}function Ie(e){return e.map(e=>Le(e))}function Le(e){return e?U(e):null}function ze(e,t){return"string"==typeof e||"number"==typeof e?{type:t,id:k(e)}:U(e)}Ne.prototype.getSchemaDefinitionService=function(){return(0,s.deprecate)("Use `store.schema` instead of `store.getSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema},Ne.prototype.registerSchemaDefinitionService=function(e){(0,s.deprecate)("Use `store.createSchemaService` instead of `store.registerSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e},Ne.prototype.registerSchema=function(e){(0,s.deprecate)("Use `store.createSchemaService` instead of `store.registerSchema()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e}
class $e{constructor(e,t){f(this,"___token",void 0),f(this,"___identifier",void 0),this.store=e,this.___identifier=t,this.___token=e.notifications.subscribe(t,(e,t,r)=>{("identity"===t||"attributes"===t&&"id"===r)&&this._ref++})}destroy(){this.store.notifications.unsubscribe(this.___token)}get type(){return this.identifier().type}id(){return this._ref,this.___identifier.id}identifier(){return this.___identifier}remoteType(){return"identity"}push(e){return Promise.resolve(e).then(e=>this.store.push(e))}value(){return this.store.peekRecord(this.___identifier)}load(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e)}reload(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e,{reload:!0})}}(0,i.b)($e.prototype,"_ref")
const Ue=(0,l.L1)("AvailableShims",new WeakMap)
class Be{constructor(e,t){this.__store=e,this.modelName=t}get fields(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach((t,r)=>{"attribute"!==t.kind&&"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(r,t.kind)}),e}get attributes(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach((t,r)=>{"attribute"===t.kind&&e.set(r,t)}),e}get relationshipsByName(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach((t,r)=>{"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(r,t)}),e}eachAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach((r,i)=>{"attribute"===r.kind&&e.call(t,i,r)})}eachRelationship(e,t){this.__store.schema.fields({type:this.modelName}).forEach((r,i)=>{"belongsTo"!==r.kind&&"hasMany"!==r.kind||e.call(t,i,r)})}eachTransformedAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach((r,i)=>{if("attribute"===r.kind){const s=r.type
s&&e.call(t,i,s)}})}}Ne.prototype.findRecord=function(e,t,r){(0,s.deprecate)("store.findRecord is deprecated. Use store.request instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),Fe(e)?r=t:e=Je(R(e),k(t))
const i=this.cacheKeyManager.getOrCreateRecordIdentifier(e)
return(r=r||{}).preload&&(this._instanceCache.recordIsLoaded(i)||(r.reload=!0),this._join(()=>{!function(e,t,r){const i={},s=e.schema.fields(t)
Object.keys(r).forEach(e=>{const t=r[e],n=s.get(e)
!n||"hasMany"!==n.kind&&"belongsTo"!==n.kind?(i.attributes||(i.attributes={}),i.attributes[e]=t):(i.relationships||(i.relationships={}),i.relationships[e]=function(e,t){const r=e.type
return"hasMany"===e.kind?{data:t.map(e=>ze(e,r))}:{data:t?ze(t,r):null}}(n,t))})
const n=e.cache,o=Boolean(e._instanceCache.peek(t))
n.upsert(t,i,o)}(this,i,r.preload)})),this.request({op:"findRecord",data:{record:i,options:r},cacheOptions:{[n.ER]:!0}}).then(e=>e.content)},Ne.prototype.findAll=function(e,t={}){return(0,s.deprecate)("store.findAll is deprecated. Use store.request instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),this.request({op:"findAll",data:{type:R(e),options:t||{}},cacheOptions:{[n.ER]:!0}}).then(e=>e.content)},Ne.prototype.query=function(e,t,r={}){return(0,s.deprecate)("store.query is deprecated. Use store.request instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),this.request({op:"query",data:{type:R(e),query:t,options:r},cacheOptions:{[n.ER]:!0}}).then(e=>e.content)},Ne.prototype.queryRecord=function(e,t,r){return(0,s.deprecate)("store.queryRecord is deprecated. Use store.request instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),this.request({op:"queryRecord",data:{type:R(e),query:t,options:r||{}},cacheOptions:{[n.ER]:!0}}).then(e=>e.content)},Ne.prototype.getReference=function(e,t){let r;(0,s.deprecate)("store.getReference is deprecated. There is no direct replacement. For working with the cache and relationships, use the cache with the appropriate identifiers. To load, use store.request.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),r=1===arguments.length&&Fe(e)?e:Je(R(e),k(t))
const i=this.cacheKeyManager.getOrCreateRecordIdentifier(r),n=function(e){const t=e
return t.reference||(t.reference=new WeakMap),t}(this._instanceCache.__instances).reference
let o=n.get(i)
return o||(o=new $e(this,i),n.set(i,o)),o},Ne.prototype.modelFor=function(e){return(0,s.deprecate)(`store.modelFor is deprecated, please use store.schema.fields({ type: '${e}' }) to access schema information instead.`,!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}}),function(e,t){let r=Ue.get(e)
r||(r=Object.create(null),Ue.set(e,r))
let i=r[t]
return void 0===i&&(i=r[t]=new Be(e,t)),i}(this,e)},Ne.prototype.saveRecord=function(e,t={}){(0,s.deprecate)("store.saveRecord is deprecated, please use store.request to initiate a save request instead.",!1,{id:"warp-drive:deprecate-legacy-request-methods",until:"6.0",for:"@warp-drive/core",url:"https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS",since:{enabled:"5.7",available:"5.7"}})
const r=U(e),i=this.cache
if(!r)return Promise.reject(new Error("Record Is Disconnected"))
if(function(e,t){const r=e.cache
return!r||function(e,t){return t.isDeletionCommitted(e)||t.isNew(e)&&t.isDeleted(e)}(t,r)}(this._instanceCache,r))return Promise.resolve(e)
t||(t={})
let o="updateRecord"
i.isNew(r)?o="createRecord":i.isDeleted(r)&&(o="deleteRecord")
const a={op:o,data:{options:t,record:r},records:[r],cacheOptions:{[n.ER]:!0}}
return this.request(a).then(e=>e.content)}
const Ke=new Set(["createRecord","updateRecord","deleteRecord"])
function He(e){return Boolean(e.op&&Ke.has(e.op))}function Ge(e){const t=function(e){return e instanceof AggregateError||"AggregateError"===e.name&&Array.isArray(e.errors)}(e),r=t?new AggregateError(structuredClone(e.errors),e.message):new Error(e.message)
return r.stack=e.stack,r.error=e.error,Object.assign(r,e),r}function We(e,t,r){if(e){const r=t.get(e)
if(r)return r.priority}return r}const Ye={request(e,t){if(!e.request.store||e.request.cacheOptions?.[n.ER])return t(e.request)
const{store:r}=e.request,i=r.cacheKeyManager.getOrCreateDocumentIdentifier(e.request)
i&&e.setIdentifier(i)
const s=r.requestManager._deduped,o=i&&s.get(i),a=i?r.cache.peekRequest(i):null
if(function(e,t,r,i){const{cacheOptions:s}=t
return t.op&&Ke.has(t.op)||s?.reload||!r||!(!e.lifetimes||!i)&&e.lifetimes.isHardExpired(i,e)}(r,e.request,!!a,i)){if(o)return o.priority={blocking:!0},o.promise
let n=Ze(t,e,i,{blocking:!0})
return i&&(n=n.finally(()=>{s.delete(i),r.notifications.notify(i,"state",null)}),s.set(i,{priority:{blocking:!0},promise:n}),queueMicrotask(()=>{r.notifications.notify(i,"state",null)})),r.requestManager._pending.set(e.id,n),n}if(function(e,t,r,i){const{cacheOptions:s}=t
return s?.backgroundReload||!(!e.lifetimes||!i)&&e.lifetimes.isSoftExpired(i,e)}(r,e.request,0,i)){let n=o?.promise||Ze(t,e,i,{blocking:!1})
i&&!o&&(n=n.finally(()=>{s.delete(i),r.notifications.notify(i,"state",null)}),s.set(i,{priority:{blocking:!1},promise:n}),queueMicrotask(()=>{r.notifications.notify(i,"state",null)})),r.requestManager._pending.set(e.id,n)}const l=e.request[n._q]||!1
if(e.setResponse(a.response),"error"in a){const t=l?Ve(r,e.request,{shouldHydrate:l,identifier:i},a.content):a.content,s=Ge(a)
throw s.content=t,s}return l?Ve(r,e.request,{shouldHydrate:l,identifier:i},a.content):a.content}}
function Ve(e,t,r,i){const{identifier:s}=r
return i&&r.shouldHydrate?s?e._instanceCache.getDocument(s):g(e,null,{request:t,document:i}):i??null}function Ze(e,t,r,i){const{store:s}=t.request,o={shouldHydrate:t.request[n._q]||!1,identifier:r,priority:i}
let a=!1
He(t.request)&&(a=!0,Array.isArray(t.request.records)?t.request.records.forEach(e=>{s.cache.willCommit(e,t)}):t.request.data?.record&&s.cache.willCommit(t.request.data.record,t)),s.lifetimes?.willRequest&&s.lifetimes.willRequest(t.request,r,s)
const l=e(t.request).then(e=>function(e,t,r,i){const{request:s}=t
let n
if(e.requestManager._pending.delete(t.id),e._enableAsyncFlush=!0,e._join(()=>{n=function(e,t,r,i){let s=null
return He(t)?Array.isArray(t.records)?s=e.cache.didCommit(t.records,i):t.data?.record?s=e.cache.didCommit(t.data.record,i):function(e){return!He(e.request)||("createRecord"===e.request.op&&201===e.response?.status?!!e.content&&Object.keys(e.content).length>0:204!==e.response?.status)}(i)&&(s=e.cache.put(i)):s=e.cache.put(i),Ve(e,t,r,s)}(e,s,r,i)}),e._enableAsyncFlush=null,e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,i.response,r.identifier,e),We(r.identifier,e.requestManager._deduped,r.priority).blocking)return n
e.notifications._flush()}(s,t,o,e),e=>function(e,t,r,i){if(e.requestManager._pending.delete(t.id),t.request.signal?.aborted)throw i
let s
if(e._enableAsyncFlush=!0,e._join(()=>{s=function(e,t,r,i){let s
if(!He(t.request))return s=e.cache.put(i),Ve(e,t.request,r,s)
{const r=i&&i.content&&"object"==typeof i.content&&"errors"in i.content&&Array.isArray(i.content.errors)?i.content.errors:void 0
Array.isArray(t.request.records)?e.cache.commitWasRejected(t.request.records,r):t.request.data?.record?e.cache.commitWasRejected(t.request.data.record,r):e.cache.put(i)}}(e,t,r,i)}),e._enableAsyncFlush=null,r.identifier&&e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,i.response,r.identifier,e),He(t.request))throw i
if(We(r.identifier,e.requestManager._deduped,r.priority).blocking){const e=Ge(i)
throw e.content=s,e}e.notifications._flush()}(s,t,o,e))
if(!a)return l
const c=t.request.data?.record||t.request.records?.[0]
return s._requestCache._enqueue(l,{data:[{op:"saveRecord",recordIdentifier:c,options:void 0}]})}function Qe(e){return Boolean(e&&"string"==typeof e)}function Je(e,t,r){if("object"==typeof e&&null!==e){const t=e
return S(t)||"id"in t&&(t.id=w(t.id)),t}{const i=w(t)
if(!Qe(i)){if(Qe(r))return{lid:r}
throw new Error("Expected either id or lid to be a valid string")}return Qe(r)?{type:e,id:i,lid:r}:{type:e,id:i}}}function Xe(e){const t=e.store.schema.CAUTION_MEGA_DANGER_ZONE_arrayExtensions?e.store.schema.CAUTION_MEGA_DANGER_ZONE_arrayExtensions(e.field):null
return ye({store:e.store,manager:e.manager,editable:e.editable,source:e.source,data:{links:e.links,meta:e.meta},features:{modelName:e.type,save:J,DEPRECATED_CLASS_NAME:"ManyArray",isLoaded:e.isLoaded,isAsync:e.isAsync,isPolymorphic:e.isPolymorphic,identifier:e.identifier,key:e.field.name,reload:rt,createRecord:it,notify:tt},extensions:t,options:null,destroy:st,mutate:et})}function et(e,t,r,i,s){const n=t
switch(r){case"length 0":return Reflect.set(e,"length",0),ut(n,[],s),!0
case"replace cell":{const[t,r,a]=i
return e[t]=a,function(e,t,r){dt(e,{op:"replaceRelatedRecord",record:e[o.a].features.identifier,field:e.key,...t},r)}(n,{value:a,prior:r,index:t},s),!0}case"push":{const o=nt(i)
at(n,e,e=>e.push(...o),"Cannot push duplicates to a hasMany's state.")
{const o=new Set(e),a=new Set
i.forEach(e=>{const t=U(e)
o.has(t)||(o.add(t),a.add(e))})
const l=Array.from(a),c=Reflect.apply(e[r],t,l)
return l.length&&lt(n,{value:nt(l)},s),c}}case"pop":{const o=Reflect.apply(e[r],t,i)
return o&&ct(n,{value:U(o)},s),o}case"unshift":{const o=nt(i)
at(n,e,e=>e.unshift(...o),"Cannot unshift duplicates to a hasMany's state.")
{const o=new Set(e),a=new Set
i.forEach(e=>{const t=U(e)
o.has(t)||(o.add(t),a.add(e))})
const l=Array.from(a),c=Reflect.apply(e[r],t,l)
return l.length&&lt(n,{value:nt(l),index:0},s),c}}case"shift":{const o=Reflect.apply(e[r],t,i)
return o&&ct(n,{value:U(o),index:0},s),o}case"sort":{const a=Reflect.apply(e[r],t,i)
return function(e,t,r){dt(e,{op:"sortRelatedRecords",record:e[o.a].features.identifier,field:e.key,value:t},r)}(n,a.map(U),s),a}case"splice":{const[a,l,...c]=i
if(0===a&&l===n[o.a].source.length){const i=nt(c)
at(n,e,e=>e.splice(a,l,...i),"Cannot replace a hasMany's state with a new state that contains duplicates.")
{const i=new Set(c),o=Array.from(i),u=[a,l].concat(o),d=Reflect.apply(e[r],t,u)
return ut(n,nt(o),s),d}}const u=nt(c)
at(n,e,e=>e.splice(a,l,...u),"Cannot splice a hasMany's state with a new state that contains duplicates.")
{const i=e.slice()
i.splice(a,l)
const o=new Set(i),u=[]
c.forEach(e=>{const t=U(e)
o.has(t)||(o.add(t),u.push(e))})
const d=[a,l,...u],h=Reflect.apply(e[r],t,d)
return l>0&&ct(n,{value:h.map(U),index:a},s),u.length>0&&lt(n,{value:nt(u),index:a},s),h}}}}function tt(){(0,i.n)(this[o.a].signal)}function rt(e){const{manager:t}=this[o.a]
return t.reloadHasMany(this.key,e)}function it(e){const{store:t}=this[o.a],r=t.createRecord(this.modelName,e)
return this.push(r),r}function st(){ge.call(this,!1)}function nt(e){return e.map(ot)}function ot(e){return U(e)}function at(e,t,r,i){const n=e[o.a].features.identifier,a=t.slice()
if(r(a),a.length!==new Set(a).size){const t=a.filter((e,t)=>a.indexOf(e)!==t);(0,s.deprecate)(`${i} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${n.type}:${n.id||n.lid}>.${e.key}\`\n\t- ${Array.from(new Set(t)).map(e=>S(e)?e.lid:U(e).lid).sort((e,t)=>e.localeCompare(t)).join("\n\t- ")}`,!1,{id:"ember-data:deprecate-many-array-duplicates",for:"ember-data",until:"6.0",since:{enabled:"5.3",available:"4.13"}})}}function lt(e,t,r){dt(e,{op:"add",record:e[o.a].features.identifier,field:e.key,...t},r)}function ct(e,t,r){dt(e,{op:"remove",record:e[o.a].features.identifier,field:e.key,...t},r)}function ut(e,t,r){dt(e,{op:"replaceRelatedRecords",record:e[o.a].features.identifier,field:e.key,value:t},r)}function dt(e,t,r){const{manager:s}=e[o.a]
s.mutate(t),(0,i.n)(r)}const ht=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),ft=new Set(["[]","length"])
function pt(e){return ht.has(e)}const yt=new Set(["push","pop","unshift","shift","splice","sort"])
class gt{constructor(e,t,r){const s=this
this[o.S]=r?.slice()
const n=e.editable??!1
this[o.a]=e
const a=e.store.schema,l=e.store.cache,{field:c}=e,u=(0,i.c)(this)
let d=null
const h=new Map
this.identifier=e.resourceKey,this.path=e.path,this.owner=t
let f=!1
const p=c.options?.key??"@identity",y="@identity"===p?WeakMap:Map,g="schema-array"===c.kind?new y:null,m=e.legacy?a.CAUTION_MEGA_DANGER_ZONE_arrayExtensions(c):null,_=new Proxy(this[o.S],{get(t,r,y){if(r===i.A)return d
if("identifier"===r)return s.identifier
if("owner"===r)return s.owner
if(r===o.a)return s[o.a]
const _=function(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}(r)
if(d.isStale&&(null!==_||ft.has(r)||pt(r))){d.isStale=!1
const t=l.getAttr(e.resourceKey,e.path)
t&&t!==s[o.S]&&(s[o.S].length=0,s[o.S].push(...t))}if("length"===r)return(0,i.l)(d),t.length
if("[]"===r)return(0,i.l)(d),y
if(null!==_){f||(0,i.l)(d)
const r=t[_]
if("array"===c.kind)return c.type?a.transformation(c).hydrate(r,c.options??null,s.owner):r
let n,l
if(c.options?.polymorphic){const e=c.options.type??"type"
n="@hash"===e?a.hashFn({type:c.type})(r,null,null):r[e]}else n=c.type
if("@hash"===p){const e=a.resource({type:n}).identity
l=a.hashFn(e)(r,e.options??null,e.name)}else l="@identity"===p?r:"@index"===p?_:r[p]
if(!l&&0!==l)return
const u=g.get(l),h=u?.value.deref()
if(h&&u.type===n&&u.identity===l)return u.index!==_&&(u.index=_,u.context.path[u.context.path.length-1]=_),h
h&&Promise.resolve().then(()=>{h[o.D]()})
const y=e.path.slice()
y.push(_)
const m={store:e.store,resourceKey:e.resourceKey,modeName:e.modeName,legacy:e.legacy,editable:e.editable,path:y,field:c,value:n},b=new xt(m)
return g.set(l,{type:n,identity:l,index:_,context:m,value:new WeakRef(b)}),b}if(pt(r)){let s=h.get(r)
return void 0===s&&(s="forEach"===r?function(){(0,i.l)(d),f=!0
const r=function(e,t,r,i,s){void 0===s&&(s=null)
const n=(t=t.slice()).length
for(let o=0;o<n;o++)i.call(s,t[o],o,e)
return e}(y,t,e.store,arguments[0],arguments[1])
return f=!1,r}:function(){(0,i.l)(d),f=!0
const e=Reflect.apply(t[r],y,arguments)
return f=!1,e},h.set(r,s)),s}if(function(e){return yt.has(e)}(r)){let e=h.get(r)
return void 0===e&&(e=function(){if(!n)throw new Error(`Mutating this array via ${String(r)} is not allowed because the ReactiveResource is not editable`);(0,i.l)(d),f=!0
const e=Reflect.apply(t[r],y,arguments)
return f=!1,e},h.set(r,e)),e}return ie(m,r)?oe(y,m,u,r,d,h,e=>{f=e}):Reflect.get(t,r,y)},set(t,r,i,h){if(!n){let t=e.resourceKey.type
return e.path&&(t=e.path[e.path.length-1]),!1}if("identifier"===r)return s.identifier=i,!0
if("owner"===r)return s.owner=i,!0
if(ie(m,r))return ne(h,m,u,r,i)
const f=Reflect.set(t,r,i,h)
if(f){if(!c.type)return l.setAttr(e.resourceKey,e.path,s[o.S]),d.isStale=!0,!0
let t=s[o.S]
if("schema-array"!==c.kind){const i=a.transformation(c)
if(!i)throw new Error(`No '${c.type}' transform defined for use by ${e.resourceKey.type}.${String(r)}`)
t=s[o.S].map(e=>i.serialize(e,c.options??null,s.owner))}l.setAttr(e.resourceKey,e.path,t),d.isStale=!0}return f},has:(e,t)=>"identifier"===t||"owner"===t||t===i.A||Reflect.has(e,t)})
return d=(0,i.e)(u,_,i.A,void 0),_}}function mt(e){const t=(0,i.e)(e.signals,e.record,e.path.at(-1),null),{record:r}=e
let s=t.value
if(s){if(t.isStale){const{store:r,resourceKey:i,path:s,field:n}=e,{cache:o}=r,a=o.getAttr(i,s)
if(null===a||!a&&void 0===a&&!n.options?.defaultValue)return t.value=null,null}return s}{const{store:i,resourceKey:n,path:o,field:a}=e,{cache:l}=i
let c=e.editable?l.getAttr(n,o):l.getRemoteAttr(n,o)
if(!c&&void 0===c&&a.options?.defaultValue&&(c=[]),!c)return null
s=new gt(e,r,c),t.value=s}return s}Object.defineProperty(gt.prototype,"[]",{enumerable:!0,configurable:!1,get:function(){return this}})
const _t=["alias","derived","@local"]
function bt(e){return t=e.kind,!_t.includes(t)&&"@id"!==e.kind&&"@hash"!==e.kind
var t}function vt(e){return e.sourceKey||e.name}function wt(e){return"sourceKey"in e&&e.sourceKey?e.sourceKey:e.name}class kt{constructor(e,t){const r=e[o.a]
this.record=e,this.store=r.store,this.identifier=r.resourceKey,this.editable=t}_syncArray(e){const t=this.editable?"getRelationship":"getRemoteRelationship",r=this.store.cache[t](this.identifier,e.key)
r.meta&&(e.meta=r.meta),r.links&&(e.links=r.links)
const i=e[o.a].source
i!==r.data&&(i.length=0,Re(i,r.data))}reloadHasMany(e,t){const r=this.store.schema.fields(this.identifier).get(e),i=t?function(e){const t={}
return"reload"in e&&(t.reload=e.reload),"backgroundReload"in e&&(t.backgroundReload=e.backgroundReload),t}(t):{reload:!0}
i.types=[r.type]
const s=this.store.cache.getRelationship(this.identifier,e),o={url:Rt(s),op:"findHasMany",method:"GET",records:s.data,cacheOptions:i,options:{field:r,identifier:this.identifier,links:s.links,meta:s.meta},[n._q]:!1}
return this.store.request(o)}mutate(e){this.store.cache.mutate(e)}}function Rt(e){const t=e.links?.related
return"object"==typeof t?t.href:t}const St=new Set([i.O,o.a,o.S])
class At{constructor(e){const{field:t,path:r}=e,s=this
this[o.S]=Object.assign({},e.value)
const n=(0,i.c)(this),a=this[i.O]=(0,i.e)(n,this,i.O,void 0)
this[o.a]=e
const l=e.resourceKey,{cache:c,schema:u}=e.store,d=e.legacy?u.CAUTION_MEGA_DANGER_ZONE_objectExtensions(t,null):null
return new Proxy(this[o.S],{ownKeys:()=>Object.keys(s[o.S]),has:(e,t)=>t in s[o.S],getOwnPropertyDescriptor:(t,r)=>({writable:e.editable,enumerable:!0,configurable:!0}),get(h,f,p){if(St.has(f))return s[f]
if(f===Symbol.toPrimitive)return()=>null
if(f===Symbol.toStringTag)return`ManagedObject<${l.type}:${l.id} (${l.lid})>`
if("constructor"===f)return Object
if("toString"===f)return function(){return`ManagedObject<${l.type}:${l.id} (${l.lid})>`}
if("toHTML"===f)return function(){return"<span>ManagedObject</span>"}
if(a.isStale){a.isStale=!1
let i=c.getAttr(l,r)
i&&i!==s[o.S]&&(t.type&&(i=u.transformation(t).hydrate(i,t.options??null,e.record)),s[o.S]=Object.assign({},i))}return"toJSON"===f?function(){return structuredClone(s[o.S])}:f in s[o.S]?((0,i.l)(a),s[o.S][f]):ie(d,f)?se(p,d,n,f):Reflect.get(h,f,p)},set(i,h,f,p){if(!(h in s[o.S])&&ie(d,h))return ne(p,d,n,h,f)
if(!Reflect.set(i,h,f,p))return!1
if(t.type){const i=u.transformation(t).serialize(s[o.S],t.options??null,e.record)
c.setAttr(l,r,i)}else c.setAttr(l,r,s[o.S])
return a.isStale=!0,!0}})}}const Et=(0,l.L1)("ManagedObjectMap",new Map)
function Mt(e,t){const r=Et.get(e)
if(r)return r.get(t.name)}class Ct{constructor(e){const{store:t,resourceKey:r}=e,{cache:i}=t,s=vt(e.field),n=e.editable?i.getRelationship(r,s):i.getRemoteRelationship(r,s)
this.lid=n.lid??n.links?.self??`relationship:${r.lid}.${s}`,this.data=n.data?t.peekRecord(n.data):null,this.name=s,this.links=n.links??{},this.meta=n.meta??{},this[o.a]=e}fetch(e){const t=e?.url??Tt(this.links.related)??Tt(this.links.self)??null
if(!t)throw new Error(`Cannot ${e?.method??"fetch"} ${this[o.a].resourceKey.type}.${String(this.name)} because it has no related link`)
const r=Object.assign({url:t,method:"GET"},e)
return this[o.a].store.request(r)}}function Tt(e){return e?"string"==typeof e?e:e.href:null}(0,i.b)(Ct.prototype,"data",null),(0,i.b)(Ct.prototype,"links",null),(0,i.b)(Ct.prototype,"meta",null)
const qt={"@hash":{get:function(e){const{field:t,path:r,resourceKey:i}=e,{schema:s,cache:n}=e.store,o=r.slice(0,-1),a=e.editable?n.getAttr(i,o):n.getRemoteAttr(i,o)
return s.hashFn(t)(a,t.options??null,t.name??null)},set:function(e){return!1},mutable:!1,enumerable:!1,serializable:!1},"@id":{get:function(e){return(0,i.e)(e.signals,e.record,"@identity",null),e.resourceKey.id},set:function(e){const{value:t,resourceKey:r,store:i}=e,s=String(t),n=s!==r.id
return null!==s&&n&&(i._instanceCache.setRecordId(r,s),i.notifications.notify(r,"identity",null)),!0},mutable:!0,enumerable:!0,serializable:!0},"@local":{get:function(e){const{field:t}=e,r=(0,i.k)(e.signals,e.record,t.name,t.options?.defaultValue??null)
return(0,i.l)(r),r.value},set:function(e){const{value:t}=e,r=(0,i.k)(e.signals,e.record,e.field.name,t)
return r.value!==t&&(r.value=t,(0,i.n)(r)),!0},mutable:!0,enumerable:!1,serializable:!1},alias:{get:function(e){},set:function(e){return!1},mutable:!0,enumerable:!0,serializable:!1},array:{get:mt,set:function(e){const{field:t,record:r,value:s}=e,{cache:n,schema:o}=e.store,a=(0,i.p)(e.signals,e.path.at(-1)),l=a?.value,c=t.type?o.transformation(t):null,u=null===s?null:t.type?s.map(e=>c.serialize(e,t.options??null,r)):s?.slice()
return n.setAttr(e.resourceKey,e.path,u),l&&(l[i.A].isStale=!0),!Array.isArray(u)&&a&&(a.value=null),!0},mutable:!0,enumerable:!0,serializable:!0},attribute:{get:function(e){(0,i.r)(e.signals,e.record,e.path.at(-1),null)
const{cache:t}=e.store
return e.editable?t.getAttr(e.resourceKey,e.path):t.getRemoteAttr(e.resourceKey,e.path)},set:function(e){return e.store.cache.setAttr(e.resourceKey,e.path,e.value),!0},mutable:!0,enumerable:!0,serializable:!0},belongsTo:{get:function(e){(0,i.e)(e.signals,e.record,e.path.at(-1),null)
const{field:t,resourceKey:r,store:s}=e,{schema:n,cache:o}=s
if(t.options.linksMode){const i=e.editable?o.getRelationship(r,vt(t)):o.getRemoteRelationship(r,vt(t))
return i.data?s.peekRecord(i.data):null}return n._kind("@legacy","belongsTo").get(s,e.record,r,t)},set:function(e){const{store:t}=e,{schema:r}=t
return r._kind("@legacy","belongsTo").set(t,e.record,e.resourceKey,e.field,e.value),!0},mutable:!0,enumerable:!0,serializable:!0},collection:{get:function(e){(0,i.e)(e.signals,e.record,e.path.at(-1),null)},set:function(e){return!1},mutable:!0,enumerable:!0,serializable:!0},derived:{get:function(e){const{schema:t}=e.store
return t.derivation(e.field)(e.record,e.field.options??null,e.field.name)},set:function(e){return!1},mutable:!0,enumerable:!0,serializable:!1},field:{get:function(e){(0,i.r)(e.signals,e.record,e.path.at(-1),null).isStale=!1
const{cache:t,schema:r}=e.store,s=e.editable?t.getAttr(e.resourceKey,e.path):t.getRemoteAttr(e.resourceKey,e.path),{field:n}=e
return n.type?r.transformation(n).hydrate(s,n.options??null,e.record):s},set:function(e){const{cache:t,schema:r}=e.store,{field:i}=e
if(!i.type)return t.setAttr(e.resourceKey,e.path,e.value),!0
const s=r.transformation(i).serialize(e.value,i.options??null,e.record)
return t.setAttr(e.resourceKey,e.path,s),!0},mutable:!0,enumerable:!0,serializable:!0},hasMany:{get:function(e){const t=(0,i.e)(e.signals,e.record,e.path.at(-1),null),{store:r,field:s}=e
if(s.options.linksMode){const{record:i}=e,n=t.value
if(n)return n
const{editable:o,resourceKey:a}=e,{cache:l}=r,c=l.getRelationship(a,vt(s))
if(!c)return null
const u=Xe({store:r,manager:new kt(i,o),source:c.data?.slice()??[],type:s.type,isLoaded:!0,editable:o,isAsync:s.options.async??!1,isPolymorphic:s.options.polymorphic??!1,field:s,identifier:a,links:c.links||null,meta:c.meta||null})
return t.value=u,u}return r.schema._kind("@legacy","hasMany").get(r,e.record,e.resourceKey,s)},set:function(e){const{store:t}=e
return t.schema._kind("@legacy","hasMany").set(t,e.record,e.resourceKey,e.field,e.value),!0},mutable:!0,enumerable:!0,serializable:!0},object:{get:function(e){(0,i.e)(e.signals,e.record,e.path.at(-1),null)
const{record:t,field:r}=e,s=Et.get(t)
let n
if(s&&(n=s.get(r.name)),n)return n
{const{store:i,resourceKey:o,path:a}=e,{cache:l,schema:c}=i
let u=e.editable?l.getAttr(o,a):l.getRemoteAttr(o,a)
if(!u)return null
r.type&&(u=c.transformation(r).hydrate(u,r.options??null,t)),n=new At({store:i,resourceKey:o,modeName:e.modeName,legacy:e.legacy,editable:e.editable,path:a,field:r,record:t,signals:e.signals,value:u}),s?s.set(r.name,n):Et.set(t,new Map([[r.name,n]]))}return n},set:function(e){const{field:t,value:r,record:s}=e,{cache:n,schema:o}=e.store
if(!t.type){let o=r
null!==r?o={...r}:Et.delete(s),n.setAttr(e.resourceKey,e.path,o)
const a=Mt(s,t)
return a&&(a[i.O].isStale=!0),!0}const a=o.transformation(t).serialize({...r},t.options??null,s)
n.setAttr(e.resourceKey,e.path,a)
const l=Mt(s,t)
return l&&(l[i.O].isStale=!0),!0},mutable:!0,enumerable:!0,serializable:!0},resource:{get:function(e){return(0,i.e)(e.signals,e.record,e.path.at(-1),null),new Ct(e)},set:function(e){return!1},mutable:!0,enumerable:!0,serializable:!0},"schema-array":{get:mt,set:function(e){const t=null===e.value?null:e.value?.slice(),r=(0,i.p)(e.signals,e.path.at(-1)),s=r?.value
return e.store.cache.setAttr(e.resourceKey,e.path,t),s&&(s[i.A].isStale=!0,Array.isArray(t)||(r.value=null)),!0},mutable:!0,enumerable:!0,serializable:!0},"schema-object":{get:function(e){const t=(0,i.e)(e.signals,e.record,e.path.at(-1),null),{store:r,resourceKey:s,path:n,field:a}=e,{cache:l}=r
let c=e.editable?l.getAttr(s,n):l.getRemoteAttr(s,n)
if(c||a.options?.polymorphic||!a.options?.defaultValue||(c={}),!c){if(t.value){const e=t.value
Promise.resolve().then(()=>{e.value[o.D]()}),t.value=null}return null}const{schema:u}=r
let d
if(a.options?.polymorphic){const e=a.options.type??"type"
d="@hash"===e?u.hashFn({type:a.type})(c,null,null):c[e]}else d=a.type
const h=u.resource({type:d}).identity,f=h?u.hashFn(h)(c,h.options??null,h.name):a.name,p=t.value
if(p){if(p.type===d&&p.identity===f)return p.value
Promise.resolve().then(()=>{p.value[o.D]()})}const y=new xt({store:e.store,resourceKey:e.resourceKey,modeName:e.modeName,legacy:e.legacy,editable:e.editable,path:e.path,field:e.field,value:d})
return t.value={type:d,identity:f,value:y},y},set:function(e){const{store:t,value:r}=e
let i=r
if(null!==r){i={...r}
const s=t.schema.fields({type:e.field.type})
for(const e of Object.keys(i))if(!s.has(e))return!1}else Et.delete(e.record)
return t.cache.setAttr(e.resourceKey,e.path,i),!0},mutable:!0,enumerable:!0,serializable:!0}},Ot=new Set(["length","nodeType","then","setInterval","document",n.k0]),Dt=[o.a,o.D,h.pm,o.C,o.b],jt=new Set(Dt),Nt=new Map
class xt{constructor(e){const t=e.resourceKey,r=null!==e.path,s=e.store.schema,n=r?e.value:t.type,a=s.resource(r?{type:n}:t).identity,l=new Map,c=e.legacy?r?s.CAUTION_MEGA_DANGER_ZONE_objectExtensions(e.field,n):s.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(t):null
this[o.a]=e,this[h.pm]=e.store
const u=r?s.fields({type:n}):s.fields(t),d="function"==typeof s.cacheFields?"cacheFields":"fields",f=r?s[d]({type:n}):s[d](t),p=(0,i.c)(this)
this.___notifications=e.store.notifications.subscribe(t,(n,l,c)=>{switch(l){case"identity":if(r||!a)return
if(a.name&&"@id"===a.kind){const e=p.get("@identity")
e&&(0,i.n)(e)}break
case"attributes":if(c)if(Array.isArray(c)){if(null===e.path)return
if(u=e.path,d=c,u.length===d.length&&u.every((e,t)=>e===d[t]))return void console.warn(`Notification unhandled for ${c.join(",")} on ${t.type}`,y)}else{if(r)return
const e=p.get(c)
e&&(0,i.n)(e)
const t=f.get(c)
if("array"===t?.kind||"schema-array"===t?.kind){const t=e?.value
if(t){const e=t[i.A];(0,i.n)(e)}}if("object"===t?.kind){const e=Mt(y,t)
if(e){const t=e[i.O];(0,i.n)(t)}}}break
case"relationships":if(c)if(Array.isArray(c));else{if(r)return
const n=f.get(c)
if("belongsTo"===n.kind){const e=p.get(c)
e&&(0,i.n)(e)}else if("resource"===n.kind);else if("hasMany"===n.kind){if(n.options.linksMode){const e=p.get(c)
if(e){const t=e.value
t&&(0,i.n)(t[o.a].signal)}return}if(s._kind("@legacy","hasMany").notify(e.store,y,t,n)&&n.options.async){const e=p.get(c)
e&&(0,i.n)(e)}}else n.kind}}var u,d})
const y=new Proxy(this,{ownKeys(){const e=a?.name,t=Array.from(u.keys())
return e&&t.unshift(e),t},has:(e,t)=>t===o.D||t===o.C||u.has(t),getOwnPropertyDescriptor(r,i){const s=i===a?.name?a:u.get(i)
if(function(e){return"constructor"===e||"prototype"===e||"__proto__"===e||"toString"===e||"toJSON"===e||"toHTML"===e||"symbol"==typeof e}(i))return{writable:!1,enumerable:!1,configurable:!0}
switch(s.kind){case"derived":return{writable:!1,enumerable:!0,configurable:!0}
case"@id":return{writable:null===t.id,enumerable:!0,configurable:!0}
case"@hash":return s.name?{writable:!1,enumerable:!0,configurable:!0}:{writable:!1,enumerable:!1,configurable:!1}
case"@local":case"field":case"attribute":case"resource":case"alias":case"belongsTo":case"hasMany":case"collection":case"schema-array":case"array":case"schema-object":case"object":return{writable:e.editable,enumerable:!0,configurable:!0}
default:return{writable:!1,enumerable:!1,configurable:!1}}},get(r,s,n){if(jt.has(s))return s===o.D?()=>Ft(n):s===o.C?()=>Promise.resolve(Pt(n)):s===o.b?()=>Promise.resolve(async function(e){await Promise.resolve()
const t=e[o.a]
t.store.cache.willCommit(t.resourceKey,null),t.store.cache.didCommit(t.resourceKey,null)}(n)):r[s]
if(s===i.S)return p
if("___notifications"===s)return r.___notifications
const d=s===a?.name?a:u.get(s)
if(!d){if(Ot.has(s))return
if(s===Symbol.toStringTag||"toString"===s){let e=l.get("toString")
return e||(e=function(){return(0,i.e)(p,n,"@identity",null),`Record<${t.type}:${t.id} (${t.lid})>`},l.set(s,e)),e}if("toHTML"===s){let e=l.get("toHTML")
return e||(e=function(){return(0,i.e)(p,n,"@identity",null),`<span>Record<${t.type}:${t.id} (${t.lid})></span>`},l.set(s,e)),e}if("toJSON"===s){let e=l.get("toJSON")
return e||(e=function(){const e={}
for(const t in n)e[t]=n[t]
return e},l.set(s,e)),e}if(s===Symbol.toPrimitive)return()=>null
if(s===Symbol.iterator){let e=l.get(Symbol.iterator)
return e||(e=function*(){for(const e in n)yield[e,n[e]]},l.set(Symbol.iterator,e)),e}return"constructor"===s?xt:ie(c,s)?se(n,c,p,s):void 0}const h="alias"===d.kind?d.options:d,f=e.path?.slice()??[],y=wt(h)
switch(f.push(y),h.kind){case"@id":case"@hash":case"@local":case"derived":case"field":case"attribute":case"schema-array":case"array":case"schema-object":case"object":case"resource":case"belongsTo":case"hasMany":case"collection":return qt[h.kind].get({store:e.store,resourceKey:t,modeName:e.modeName,legacy:e.legacy,editable:e.editable,path:f,field:h,record:n,signals:p,value:null})}},set(r,i,s,n){if("___notifications"===i)return r[i]=s,!0
if(!e.editable)return!1
const o=i===a?.name?a:u.get(i)
if(!o)return null!==e.path?e.value:t.type,!!ie(c,i)&&ne(n,c,p,i,s)
const l="alias"===o.kind?o.options:o,d=e.path?.slice()??[],h=wt(l)
switch(d.push(h),l.kind){case"@id":case"@hash":case"@local":case"field":case"attribute":case"derived":case"array":case"schema-array":case"schema-object":case"object":case"resource":case"belongsTo":case"hasMany":case"collection":return qt[l.kind].set({store:e.store,resourceKey:t,modeName:e.modeName,legacy:e.legacy,editable:e.editable,path:d,field:l,record:n,signals:p,value:s})
default:return!1}}})
return y}}function Pt(e){const t=e[o.a]
if(t.editable)throw new Error("Cannot checkout an already editable record")
const r=Nt.get(e)
if(r)return r
if(null!==t.path)throw new Error("Cannot checkout an embedded record")
const i=new xt({store:t.store,resourceKey:t.resourceKey,modeName:t.legacy?"legacy":"polaris",legacy:t.legacy,editable:!0,path:null,field:null,value:null})
return B(i,U(e)),Nt.set(e,i),i}function Ft(e){if(e[o.a].legacy)e.isDestroying=!0,e.isDestroyed=!0
else if(!e[o.a].editable){const t=Nt.get(e)
t&&(Ft(t),function(e){z.delete(e)}(t))}e[o.a].store.notifications.unsubscribe(e.___notifications),e.___notifications=null}const It=(0,l.L1)("Support",new WeakMap);(function(e){let t=It.get(e)
return t||(t={},It.set(e,t)),t._constructor=t._constructor||{name:`ReactiveResource<${U(e).type}>`,get modelName(){}}})[h.ZU]="@constructor"
const Lt=["constructor","__proto__"]
function zt(e,t,r){const i=e[t].get(r)
return i?.features??null}function $t(e){return"kind"in e&&("schema-array"===e.kind||"schema-object"===e.kind)}function Ut(e,t,r,i){if("resource"===r&&!("objectExtensions"in t)&&t.objectExtensions?.length)return null
const s="resource"===r?"object":r,n=e._extensions,o=e._cachedFieldExtensionsByField
if(o[s].has(t))return o[s].get(t)
const a=("resource"===r?t.objectExtensions:"object"===r?t.options?.objectExtensions:t.options?.arrayExtensions)||null
if(!a)return"array"===r?null:$t(t)?e.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(i?{type:i}:t):null
const l="resource"===r&&$t(t)?e.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(t):"object"===r&&$t(t)?e.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(i?{type:i}:t):null
if(!l&&1===a.length){const e=zt(n,s,a[0])
return o[s].set(t,e),e}const c=new Map(l)
for(const d of a){const e=zt(n,s,d)
if(e)for(const[t,r]of e)c.set(t,r)}const u=c.size?c:null
return o[s].set(t,u),u}((e,t,r)=>{const i=e[o.a].resourceKey
return"^"===t.key?i:i[t.key]})[h.ZU]="@identity"
class Bt{constructor(){this._schemas=new Map,this._transforms=new Map,this._hashFns=new Map,this._derivations=new Map,this._traits=new Map,this._modes=new Map,this._extensions={object:new Map,array:new Map},this._cachedFieldExtensionsByField={object:new Map,array:new Map}}resourceTypes(){return Array.from(this._schemas.keys())}hasTrait(e){return this._traits.has(e)}resourceHasTrait(e,t){return this._schemas.get(e.type).traits.has(t)}transformation(e){return"kind"in e&&e.kind,"name"in e&&e.name,this._transforms.get(e.type)}derivation(e){return"kind"in e&&e.kind,"name"in e&&e.name,this._derivations.get(e.type)}hashFn(e){return"kind"in e&&e.kind,"name"in e&&e.name,this._hashFns.get(e.type)}resource(e){return this._schemas.get(e.type).original}registerResources(e){e.forEach(e=>{this.registerResource(e)})}registerResource(e){const t=new Map,r={},i={}
for(const o of e.fields)t.set(o.name,o),"attribute"===o.kind?i[o.name]=o:"belongsTo"!==o.kind&&"hasMany"!==o.kind||(r[o.name]=o)
const s=new Set(function(e){return"@id"===e?.identity?.kind}(e)?e.traits:[]),n={original:e,finalized:0===s.size,fields:t,cacheFields:null,relationships:r,attributes:i,traits:s}
0===s.size&&(n.cacheFields=Ht(n)),this._schemas.set(e.type,n)}registerTrait(e){const t=Object.assign({},e,{fields:new Map})
for(const r of e.fields)t.fields.set(r.name,r)
this._traits.set(e.name,t)}registerTransformation(e){this._transforms.set(e[h.ZU],e)}registerDerivation(e){this._derivations.set(e[h.ZU],function(e){const t=(t,r,s)=>{const n=(0,i.c)(t)
let o=n.get(s)
return o||(o=(0,i.t)(n,t,s,()=>e(t,r,s))),o()}
return t[h.ZU]=e[h.ZU],t}(e))}CAUTION_MEGA_DANGER_ZONE_registerExtension(e){this._extensions[e.kind].set(e.name,function(e){const{kind:t,name:r}=e,i=new Map,s="function"==typeof e.features?e.features.prototype:e.features
for(const n of Object.getOwnPropertyNames(s)){if(Lt.includes(n))continue
const e=Object.getOwnPropertyDescriptor(s,n)
if(e.value){const{value:t}=e
i.set(n,"function"==typeof t?{kind:"method",fn:t}:e.writable?{kind:"mutable-value",value:t}:{kind:"readonly-value",value:t})
continue}if(e.get||e.set){const{get:t,set:r}=e
i.set(n,t&&r?{kind:"mutable-field",get:t,set:r}:t?{kind:"readonly-field",get:t}:{kind:"writeonly-field",set:r})
continue}}return{kind:t,name:r,features:i}}(e))}CAUTION_MEGA_DANGER_ZONE_resourceExtensions(e){return Ut(this,this.resource(e),"resource",null)}CAUTION_MEGA_DANGER_ZONE_objectExtensions(e,t){return Ut(this,e,"object",t)}CAUTION_MEGA_DANGER_ZONE_arrayExtensions(e){return Ut(this,e,"array",null)}CAUTION_MEGA_DANGER_ZONE_hasExtension(e){return this._extensions[e.kind].has(e.name)}_registerMode(e,t){this._modes.set(e,t)}_kind(e,t){return this._modes.get(e)[t]}registerHashFn(e){this._hashFns.set(e[h.ZU],e)}fields({type:e}){const t=this._schemas.get(e)
return t.finalized||Kt(this,t),t.fields}cacheFields({type:e}){const t=this._schemas.get(e)
return t.finalized||Kt(this,t),t.cacheFields}hasResource(e){return this._schemas.has(e.type)}}function Kt(e,t){const r=new Map,i=new Set
for(const s of t.traits){const n=e._traits.get(s)
Gt(e,n,r,i,t.original.type)}Wt(r,t.fields),t.fields=r,t.cacheFields=Ht(t),t.finalized=!0}function Ht(e){const{fields:t}=e,r=new Map
for(const[i,s]of t)if(bt(s)){const e=vt(s)
r.set(e,s)}return r}function Gt(e,t,r,i,n,o){if(!i.has(t)){if(i.add(t),t.traits?.length)for(const o of t.traits){const a=e._traits.get(o);(0,s.warn)(`The trait ${o} used by the trait ${t.name} MUST be supplied before the resource ${n} can be finalized for use.`,!!a,{id:"warp-drive:missing-trait-schema-for-resource"}),a&&Gt(e,a,r,i,n)}Wt(r,t.fields)}}function Wt(e,t){for(const[r,i]of t)e.set(r,i)}Bt.prototype.attributesDefinitionFor=function({type:e}){(0,s.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=this._schemas.get(e)
if(!t)throw new Error(`No schema defined for ${e}`)
return t.attributes},Bt.prototype.relationshipsDefinitionFor=function({type:e}){(0,s.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=this._schemas.get(e)
if(!t)throw new Error(`No schema defined for ${e}`)
return t.relationships},Bt.prototype.doesTypeExist=function(e){return(0,s.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schemas.has(e)}
const Yt="undefined"!=typeof fetch?(...e)=>fetch(...e):"undefined"!=typeof FastBoot?(...e)=>FastBoot.require("node-fetch")(...e):()=>{throw new Error("No Fetch Implementation Found")},Vt=new Set(["updateRecord","createRecord","deleteRecord"]),Zt=new Map([[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Timeout"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Range Not Satisfiable"],[417,"Expectation Failed"],[419,"Page Expired"],[420,"Enhance Your Calm"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[430,"Request Header Fields Too Large"],[431,"Request Header Fields Too Large"],[450,"Blocked By Windows Parental Controls"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Timeout"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[508,"Loop Detected"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]]),Qt={async request(e){let t
try{t=await Yt(e.request.url,e.request)}catch(e){throw e instanceof DOMException&&"AbortError"===e.name?(e.statusText="Aborted",e.status=20,e.isRequestError=!0):(e.statusText="Unknown Network Error",e.status=0,e instanceof DOMException||(e.code=0),e.isRequestError=!0),e}const r=!t.ok||t.status>=400,i=e.request.op,s=Boolean(i&&Vt.has(i))
if(!r&&!s&&204!==t.status&&!t.headers.has("date")){const e=new Headers(t.headers)
e.set("date",(new Date).toUTCString()),t=function(e,t){const r=(0,a.a)(e)
return new Response(e.body,Object.assign(r,t))}(t,{headers:e})}if(e.setResponse(t),204===t.status)return null
let n=""
{const r=t.body.getReader(),i=new TextDecoder
let s=e.hasRequestedStream,o=s?new TransformStream:null,a=o?.writable.getWriter()
for(s&&(e.request.signal?.addEventListener("abort",()=>{s&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))}),e.setStream(o.readable));;){const{done:t,value:l}=await r.read()
if(t){s&&(s=!1,await a.ready,await a.close())
break}if(n+=i.decode(l,{stream:!0}),s)await a.ready,await a.write(l)
else if(e.hasRequestedStream){const t=new TextEncoder
s=!0,o=new TransformStream,e.request.signal?.addEventListener("abort",()=>{s&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))}),e.setStream(o.readable),a=o.writable.getWriter(),await a.ready,await a.write(t.encode(n)),await a.ready,await a.write(l)}}s&&(s=!1,await a.ready,await a.close())}if(r){let r
try{r=JSON.parse(n)}catch{}const i=Array.isArray(r)?r:null!==(o=r)&&"object"==typeof o&&Array.isArray(r.errors)?r.errors:null,s=t.statusText||Zt.get(t.status)||"Unknown Request Error",a=`[${t.status} ${s}] ${e.request.method??"GET"} (${t.type}) - ${t.url}`,l=i?new AggregateError(i,a):new Error(a)
throw l.status=t.status,l.statusText=s,l.isRequestError=!0,l.code=l.status,l.name=l.statusText.replaceAll(" ","")+"Error",l.content=r,l}return JSON.parse(n)
var o}}
class Jt{constructor(e){Object.assign(this,e),this._pending=new Map,this._deduped=new Map,this._handlers=[]}useCache(e){return e[a.I]=!0,this._handlers.unshift(e),this}use(e){return this._handlers.push(...e),this}request(e){const t=this._handlers,r=e.controller||new AbortController
e.controller&&delete e.controller
const i=(0,l.dN)("REQ_ID")??0;(0,l.ml)("REQ_ID",i+1)
const s={controller:r,response:null,stream:null,hasRequestedStream:!1,id:i,identifier:null,requester:e[n._q]&&e.store?e.store:this},o=(0,a.e)(t,e,0,s),c=(0,a.d)(i),u=(0,a.u)(o.then(e=>((0,a.s)(u,{isError:!1,result:e}),(0,a.f)(i),e),e=>{throw(0,a.s)(u,{isError:!0,result:e}),(0,a.f)(i),e}),o)
return c&&(0,a.s)(u,c),u}static create(e){return new this(e)}}}}])
