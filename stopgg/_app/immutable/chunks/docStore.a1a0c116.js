import{w as Yn}from"./index.00fa2c39.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Dl=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),i.push(n[l],n[h],n[f],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||u==null||h==null)throw new Ol;const f=r<<2|a>>4;if(i.push(f),u!==64){const p=a<<4&240|u>>2;if(i.push(p),h!==64){const E=u<<6&192|h;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ol extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pl=function(t){const e=$a(t);return Ba.encodeByteArray(e,!0)},ri=function(t){return Pl(t).replace(/\./g,"")},ja=function(t){try{return Ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=()=>Ll().__FIREBASE_DEFAULTS__,xl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ul=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ja(t[1]);return e&&JSON.parse(e)},rr=()=>{try{return Ml()||xl()||Ul()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qa=t=>{var e,n;return(n=(e=rr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},or=t=>{const e=qa(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ha=()=>{var t;return(t=rr())===null||t===void 0?void 0:t.config},za=t=>{var e;return(e=rr())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ri(JSON.stringify(n)),ri(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function $l(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jl(){const t=ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ql(){try{return typeof indexedDB=="object"}catch{return!1}}function Hl(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="FirebaseError";class me extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=zl,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Kl(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new me(s,a,i)}}function Kl(t,e){return t.replace(Gl,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Gl=/\{\$([^}]+)}/g;function Wl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(uo(r)&&uo(o)){if(!oi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function uo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ql(t,e){const n=new Yl(t,e);return n.subscribe.bind(n)}class Yl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Jl(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=is),s.error===void 0&&(s.error=is),s.complete===void 0&&(s.complete=is);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function is(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return t&&t._delegate?t._delegate:t}class De{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Fl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eh(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Zl(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zl(t){return t===et?void 0:t}function eh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const nh={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},ih=R.INFO,sh={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},rh=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=sh[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ar{constructor(e){this.name=e,this._logLevel=ih,this._logHandler=rh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const oh=(t,e)=>e.some(n=>t instanceof n);let lo,ho;function ah(){return lo||(lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ch(){return ho||(ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ga=new WeakMap,Ss=new WeakMap,Wa=new WeakMap,ss=new WeakMap,cr=new WeakMap;function uh(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(He(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ga.set(n,t)}).catch(()=>{}),cr.set(e,t),e}function lh(t){if(Ss.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ss.set(t,e)}let Cs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ss.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return He(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hh(t){Cs=t(Cs)}function dh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(rs(this),e,...n);return Wa.set(i,e.sort?e.sort():[e]),He(i)}:ch().includes(t)?function(...e){return t.apply(rs(this),e),He(Ga.get(this))}:function(...e){return He(t.apply(rs(this),e))}}function fh(t){return typeof t=="function"?dh(t):(t instanceof IDBTransaction&&lh(t),oh(t,ah())?new Proxy(t,Cs):t)}function He(t){if(t instanceof IDBRequest)return uh(t);if(ss.has(t))return ss.get(t);const e=fh(t);return e!==t&&(ss.set(t,e),cr.set(e,t)),e}const rs=t=>cr.get(t);function ph(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=He(o);return i&&o.addEventListener("upgradeneeded",c=>{i(He(o.result),c.oldVersion,c.newVersion,He(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const gh=["get","getKey","getAll","getAllKeys","count"],mh=["put","add","delete","clear"],os=new Map;function fo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(os.get(e))return os.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=mh.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||gh.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return os.set(e,r),r}hh(t=>({...t,get:(e,n,i)=>fo(e,n)||t.get(e,n,i),has:(e,n)=>!!fo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vh(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function vh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const As="@firebase/app",po="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new ar("@firebase/app"),wh="@firebase/app-compat",_h="@firebase/analytics-compat",Eh="@firebase/analytics",Ih="@firebase/app-check-compat",Th="@firebase/app-check",Sh="@firebase/auth",Ch="@firebase/auth-compat",Ah="@firebase/database",kh="@firebase/database-compat",bh="@firebase/functions",Rh="@firebase/functions-compat",Nh="@firebase/installations",Dh="@firebase/installations-compat",Oh="@firebase/messaging",Ph="@firebase/messaging-compat",Lh="@firebase/performance",Mh="@firebase/performance-compat",xh="@firebase/remote-config",Uh="@firebase/remote-config-compat",Fh="@firebase/storage",Vh="@firebase/storage-compat",$h="@firebase/firestore",Bh="@firebase/firestore-compat",jh="firebase",qh="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="[DEFAULT]",Hh={[As]:"fire-core",[wh]:"fire-core-compat",[Eh]:"fire-analytics",[_h]:"fire-analytics-compat",[Th]:"fire-app-check",[Ih]:"fire-app-check-compat",[Sh]:"fire-auth",[Ch]:"fire-auth-compat",[Ah]:"fire-rtdb",[kh]:"fire-rtdb-compat",[bh]:"fire-fn",[Rh]:"fire-fn-compat",[Nh]:"fire-iid",[Dh]:"fire-iid-compat",[Oh]:"fire-fcm",[Ph]:"fire-fcm-compat",[Lh]:"fire-perf",[Mh]:"fire-perf-compat",[xh]:"fire-rc",[Uh]:"fire-rc-compat",[Fh]:"fire-gcs",[Vh]:"fire-gcs-compat",[$h]:"fire-fst",[Bh]:"fire-fst-compat","fire-js":"fire-js",[jh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Map,bs=new Map;function zh(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ke(t){const e=t.name;if(bs.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;bs.set(e,t);for(const n of ai.values())zh(n,t);return!0}function _n(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ze=new vn("app","Firebase",Kh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=qh;function Qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ks,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ze.create("bad-app-name",{appName:String(s)});if(n||(n=Ha()),!n)throw ze.create("no-options");const r=ai.get(s);if(r){if(oi(n,r.options)&&oi(i,r.config))return r;throw ze.create("duplicate-app",{appName:s})}const o=new th(s);for(const c of bs.values())o.addComponent(c);const a=new Gh(n,i,o);return ai.set(s,a),a}function ki(t=ks){const e=ai.get(t);if(!e&&t===ks&&Ha())return Qa();if(!e)throw ze.create("no-app",{appName:t});return e}function de(t,e,n){var i;let s=(i=Hh[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(a.join(" "));return}Ke(new De(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="firebase-heartbeat-database",Qh=1,tn="firebase-heartbeat-store";let as=null;function Ya(){return as||(as=ph(Wh,Qh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tn)}}}).catch(t=>{throw ze.create("idb-open",{originalErrorMessage:t.message})})),as}async function Yh(t){try{return await(await Ya()).transaction(tn).objectStore(tn).get(Ja(t))}catch(e){if(e instanceof me)at.warn(e.message);else{const n=ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function go(t,e){try{const i=(await Ya()).transaction(tn,"readwrite");await i.objectStore(tn).put(e,Ja(t)),await i.done}catch(n){if(n instanceof me)at.warn(n.message);else{const i=ze.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(i.message)}}}function Ja(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=1024,Xh=30*24*60*60*1e3;class Zh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new td(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Xh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mo(),{heartbeatsToSend:n,unsentEntries:i}=ed(this._heartbeatsCache.heartbeats),s=ri(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mo(){return new Date().toISOString().substring(0,10)}function ed(t,e=Jh){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),yo(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yo(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class td{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ql()?Hl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return go(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return go(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yo(t){return ri(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){Ke(new De("platform-logger",e=>new yh(e),"PRIVATE")),Ke(new De("heartbeat",e=>new Zh(e),"PRIVATE")),de(As,po,t),de(As,po,"esm2017"),de("fire-js","")}nd("");var id="firebase",sd="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */de(id,sd,"app");function ur(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Xa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rd=Xa,Za=new vn("auth","Firebase",Xa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new ar("@firebase/auth");function od(t,...e){ci.logLevel<=R.WARN&&ci.warn(`Auth (${ft}): ${t}`,...e)}function Jn(t,...e){ci.logLevel<=R.ERROR&&ci.error(`Auth (${ft}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,...e){throw lr(t,...e)}function Ee(t,...e){return lr(t,...e)}function ad(t,e,n){const i=Object.assign(Object.assign({},rd()),{[e]:n});return new vn("auth","Firebase",i).create(e,{appName:t.name})}function lr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Za.create(t,...e)}function T(t,e,...n){if(!t)throw lr(e,...n)}function ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jn(e),new Error(e)}function Pe(t,e){t||ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cd(){return vo()==="http:"||vo()==="https:"}function vo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cd()||$l()||"connection"in navigator)?navigator.onLine:!0}function ld(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pe(n>e,"Short delay should be less than long delay!"),this.isMobile=Vl()||Bl()}get(){return ud()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){Pe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new En(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function In(t,e,n,i,s={}){return tc(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=wn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ec.fetch()(ic(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function tc(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},hd),e);try{const s=new fd(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Vn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vn(t,"user-disabled",o);const l=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ad(t,l,u);Oe(t,l)}}catch(s){if(s instanceof me)throw s;Oe(t,"network-request-failed",{message:String(s)})}}async function nc(t,e,n,i,s={}){const r=await In(t,e,n,i,s);return"mfaPendingCredential"in r&&Oe(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ic(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?hr(t.config,s):`${t.config.apiScheme}://${s}`}class fd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ee(this.auth,"network-request-failed")),dd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Ee(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t,e){return In(t,"POST","/v1/accounts:delete",e)}async function gd(t,e){return In(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function md(t,e=!1){const n=ue(t),i=await n.getIdToken(e),s=fr(i);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Qt(cs(s.auth_time)),issuedAtTime:Qt(cs(s.iat)),expirationTime:Qt(cs(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function cs(t){return Number(t)*1e3}function fr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Jn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ja(n);return s?JSON.parse(s):(Jn("Failed to decode base64 JWT payload"),null)}catch(s){return Jn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yd(t){const e=fr(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof me&&vd(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function vd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t){var e;const n=t.auth,i=await t.getIdToken(),s=await nn(t,gd(n,{idToken:i}));T(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Id(r.providerUserInfo):[],a=Ed(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new sc(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function _d(t){const e=ue(t);await ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ed(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Id(t){return t.map(e=>{var{providerId:n}=e,i=ur(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Td(t,e){const n=await tc(t,{},async()=>{const i=wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=ic(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ec.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Td(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new sn;return i&&(T(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(T(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(T(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ur(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new sc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await nn(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return md(this,e)}reload(){return _d(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ui(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nn(this,pd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,u,l;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,j=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:P,emailVerified:L,isAnonymous:le,providerData:fe,stsTokenManager:Xe}=n;T(P&&Xe,e,"internal-error");const Ze=sn.fromJSON(this.name,Xe);T(typeof P=="string",e,"internal-error"),Ue(h,e.name),Ue(f,e.name),T(typeof L=="boolean",e,"internal-error"),T(typeof le=="boolean",e,"internal-error"),Ue(p,e.name),Ue(E,e.name),Ue(A,e.name),Ue(v,e.name),Ue(V,e.name),Ue(j,e.name);const gt=new st({uid:P,auth:e,email:f,emailVerified:L,displayName:h,isAnonymous:le,photoURL:E,phoneNumber:p,tenantId:A,stsTokenManager:Ze,createdAt:V,lastLoginAt:j});return fe&&Array.isArray(fe)&&(gt.providerData=fe.map(Nl=>Object.assign({},Nl))),v&&(gt._redirectEventId=v),gt}static async _fromIdTokenResponse(e,n,i=!1){const s=new sn;s.updateFromServerResponse(n);const r=new st({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ui(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Map;function be(t){Pe(t instanceof Function,"Expected a class definition");let e=wo.get(t);return e?(Pe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rc.type="NONE";const _o=rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e,n){return`firebase:${t}:${e}:${n}`}class Et{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Xn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Xn("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Et(be(_o),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||be(_o);const o=Xn(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=st._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Et(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Et(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lc(e))return"Blackberry";if(hc(e))return"Webos";if(pr(e))return"Safari";if((e.includes("chrome/")||ac(e))&&!e.includes("edge/"))return"Chrome";if(uc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function oc(t=ie()){return/firefox\//i.test(t)}function pr(t=ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ac(t=ie()){return/crios\//i.test(t)}function cc(t=ie()){return/iemobile/i.test(t)}function uc(t=ie()){return/android/i.test(t)}function lc(t=ie()){return/blackberry/i.test(t)}function hc(t=ie()){return/webos/i.test(t)}function bi(t=ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sd(t=ie()){var e;return bi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cd(){return jl()&&document.documentMode===10}function dc(t=ie()){return bi(t)||uc(t)||hc(t)||lc(t)||/windows phone/i.test(t)||cc(t)}function Ad(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t,e=[]){let n;switch(t){case"Browser":n=Eo(ie());break;case"Worker":n=`${Eo(ie())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ft}/${i}`}async function pc(t,e){return In(t,"GET","/v2/recaptchaConfig",dr(t,e))}function Io(t){return t!==void 0&&t.enterprise!==void 0}class gc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mc(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Ee("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",kd().appendChild(i)})}function bd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Rd="https://www.google.com/recaptcha/enterprise.js?render=",Nd="recaptcha-enterprise",Dd="NO_RECAPTCHA";class Od{constructor(e){this.type=Nd,this.auth=Tn(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{pc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new gc(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Io(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Dd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Io(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}mc(Rd+a).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new Pd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Za,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=be(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Et.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ui(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ld()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ue(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}async initializeRecaptchaConfig(){const e=await pc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new gc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Od(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&be(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await Et.create(this,[be(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&od(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return ue(t)}class To{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ql(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){const n=_n(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(oi(r,e??{}))return s;Oe(s,"already-initialized")}return n.initialize({options:e})}function xd(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(be);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ud(t,e,n){const i=Tn(t);T(i._canInitEmulator,i,"emulator-config-failed"),T(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=yc(e),{host:o,port:a}=Fd(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Vd()}function yc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fd(t){const e=yc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:So(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:So(o)}}}function So(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vd(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ke("not implemented")}_getIdTokenResponse(e){return ke("not implemented")}_linkToIdToken(e,n){return ke("not implemented")}_getReauthenticationResolver(e){return ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e){return nc(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="http://localhost";class ct extends vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=ur(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ct(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return It(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,It(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,It(e,n)}buildRequest(){const e={requestUri:$d,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Sn{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Sn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ct._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ve.credential(n,i)}catch{return null}}}Ve.GOOGLE_SIGN_IN_METHOD="google.com";Ve.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Sn{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.GITHUB_SIGN_IN_METHOD="github.com";$e.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Sn{constructor(){super("twitter.com")}static credential(e,n){return ct._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Be.credential(n,i)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await st._fromIdTokenResponse(e,i,s),o=Co(i);return new ut({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Co(i);return new ut({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Co(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends me{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,li.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new li(e,n,i,s)}}function _c(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?li._fromErrorAndOperation(t,r,e,i):r})}async function Bd(t,e,n=!1){const i=await nn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ut._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await nn(t,_c(i,s,e,t),n);T(r.idToken,i,"internal-error");const o=fr(r.idToken);T(o,i,"internal-error");const{sub:a}=o;return T(t.uid===a,i,"user-mismatch"),ut._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Oe(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qd(t,e,n=!1){const i="signIn",s=await _c(t,i,e),r=await ut._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(t,e){return nc(t,"POST","/v1/accounts:signInWithCustomToken",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t,e){const n=Tn(t),i=await Hd(n,{token:e,returnSecureToken:!0}),s=await ut._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}function zd(t,e,n,i){return ue(t).onIdTokenChanged(e,n,i)}function Kd(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function Gd(t,e,n,i){return ue(t).onAuthStateChanged(e,n,i)}const hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hi,"1"),this.storage.removeItem(hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){const t=ie();return pr(t)||bi(t)}const Qd=1e3,Yd=10;class Ic extends Ec{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wd()&&Ad(),this.fallbackToPolling=dc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Cd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Yd):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Qd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ic.type="LOCAL";const Jd=Ic;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Ec{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tc.type="SESSION";const Sc=Tc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Ri(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await Xd(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ri.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=gr("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function ef(t){Ie().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function tf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sf(){return Cc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="firebaseLocalStorageDb",rf=1,di="firebaseLocalStorage",kc="fbase_key";class Cn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ni(t,e){return t.transaction([di],e?"readwrite":"readonly").objectStore(di)}function of(){const t=indexedDB.deleteDatabase(Ac);return new Cn(t).toPromise()}function Ns(){const t=indexedDB.open(Ac,rf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(di,{keyPath:kc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(di)?e(i):(i.close(),await of(),e(await Ns()))})})}async function Ao(t,e,n){const i=Ni(t,!0).put({[kc]:e,value:n});return new Cn(i).toPromise()}async function af(t,e){const n=Ni(t,!1).get(e),i=await new Cn(n).toPromise();return i===void 0?null:i.value}function ko(t,e){const n=Ni(t,!0).delete(e);return new Cn(n).toPromise()}const cf=800,uf=3;class bc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ns(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>uf)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ri._getInstance(sf()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tf(),!this.activeServiceWorker)return;this.sender=new Zd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ns();return await Ao(e,hi,"1"),await ko(e,hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ao(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>af(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ko(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ni(s,!1).getAll();return new Cn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bc.type="LOCAL";const lf=bc;new En(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e){return e?be(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends vc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return It(e,this._buildIdpRequest())}_linkToIdToken(e,n){return It(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return It(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function df(t){return qd(t.auth,new mr(t),t.bypassAuthState)}function ff(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),jd(n,new mr(t),t.bypassAuthState)}async function pf(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Bd(n,new mr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return df;case"linkViaPopup":case"linkViaRedirect":return pf;case"reauthViaPopup":case"reauthViaRedirect":return ff;default:Oe(this.auth,"internal-error")}}resolve(e){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new En(2e3,1e4);class wt extends Rc{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Pe(this.filter.length===1,"Popup operations only handle one event");const e=gr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gf.get())};e()}}wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="pendingRedirect",Zn=new Map;class yf extends Rc{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Zn.get(this.auth._key());if(!e){try{const i=await vf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Zn.set(this.auth._key(),e)}return this.bypassAuthState||Zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vf(t,e){const n=Ef(e),i=_f(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function wf(t,e){Zn.set(t._key(),e)}function _f(t){return be(t._redirectPersistence)}function Ef(t){return Xn(mf,t.config.apiKey,t.name)}async function If(t,e,n=!1){const i=Tn(t),s=hf(i,e),o=await new yf(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=10*60*1e3;class Sf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Nc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ee(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tf&&this.cachedEventUids.clear(),this.cachedEventUids.has(bo(e))}saveEventToCache(e){this.cachedEventUids.add(bo(e)),this.lastProcessedEventTime=Date.now()}}function bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Af(t,e={}){return In(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bf=/^https?/;async function Rf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Af(t);for(const n of e)try{if(Nf(n))return}catch{}Oe(t,"unauthorized-domain")}function Nf(t){const e=Rs(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!bf.test(n))return!1;if(kf.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new En(3e4,6e4);function Ro(){const t=Ie().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Of(t){return new Promise((e,n)=>{var i,s,r;function o(){Ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ro(),n(Ee(t,"network-request-failed"))},timeout:Df.get()})}if(!((s=(i=Ie().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ie().gapi)===null||r===void 0)&&r.load)o();else{const a=bd("iframefcb");return Ie()[a]=()=>{gapi.load?o():n(Ee(t,"network-request-failed"))},mc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ei=null,e})}let ei=null;function Pf(t){return ei=ei||Of(t),ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new En(5e3,15e3),Mf="__/auth/iframe",xf="emulator/auth/iframe",Uf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ff=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vf(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hr(e,xf):`https://${t.config.authDomain}/${Mf}`,i={apiKey:e.apiKey,appName:t.name,v:ft},s=Ff.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${wn(i).slice(1)}`}async function $f(t){const e=await Pf(t),n=Ie().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:Vf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ee(t,"network-request-failed"),a=Ie().setTimeout(()=>{r(o)},Lf.get());function c(){Ie().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jf=500,qf=600,Hf="_blank",zf="http://localhost";class No{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kf(t,e,n,i=jf,s=qf){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Bf),{width:i.toString(),height:s.toString(),top:r,left:o}),u=ie().toLowerCase();n&&(a=ac(u)?Hf:n),oc(u)&&(e=e||zf,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[p,E])=>`${f}${p}=${E},`,"");if(Sd(u)&&a!=="_self")return Gf(e||"",a),new No(null);const h=window.open(e||"",a,l);T(h,t,"popup-blocked");try{h.focus()}catch{}return new No(h)}function Gf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="__/auth/handler",Qf="emulator/auth/handler",Yf=encodeURIComponent("fac");async function Do(t,e,n,i,s,r){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ft,eventId:s};if(e instanceof wc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(r||{}))o[l]=h}if(e instanceof Sn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${Yf}=${encodeURIComponent(c)}`:"";return`${Jf(t)}?${wn(a).slice(1)}${u}`}function Jf({config:t}){return t.emulator?hr(t,Qf):`https://${t.authDomain}/${Wf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="webStorageSupport";class Xf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sc,this._completeRedirectFn=If,this._overrideRedirectResult=wf}async _openPopup(e,n,i,s){var r;Pe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Do(e,n,i,Rs(),s);return Kf(e,o,gr())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Do(e,n,i,Rs(),s);return ef(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Pe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await $f(e),i=new Sf(e);return n.register("authEvent",s=>(T(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(us,{type:us},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[us];o!==void 0&&n(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dc()||pr()||bi()}}const Zf=Xf;var Oo="@firebase/auth",Po="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function np(t){Ke(new De("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fc(t)},u=new Ld(i,s,r,c);return xd(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ke(new De("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(i=>new ep(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),de(Oo,Po,tp(t)),de(Oo,Po,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=5*60,sp=za("authIdTokenMaxAge")||ip;let Lo=null;const rp=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>sp)return;const s=n==null?void 0:n.token;Lo!==s&&(Lo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function op(t=ki()){const e=_n(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Md(t,{popupRedirectResolver:Zf,persistence:[lf,Jd,Sc]}),i=za("authTokenSyncURL");if(i){const r=rp(i);Kd(n,r,()=>r(n.currentUser)),zd(n,o=>r(o))}const s=qa("auth");return s&&Ud(n,`http://${s}`),n}np("Browser");var ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,yr=yr||{},I=ap||self;function Di(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function An(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cp(t){return Object.prototype.hasOwnProperty.call(t,ls)&&t[ls]||(t[ls]=++up)}var ls="closure_uid_"+(1e9*Math.random()>>>0),up=0;function lp(t,e,n){return t.call.apply(t.bind,arguments)}function hp(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ee(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ee=lp:ee=hp,ee.apply(null,arguments)}function $n(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function G(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ye(){this.s=this.s,this.o=this.o}var dp=0;Ye.prototype.s=!1;Ye.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dp!=0)&&cp(this)};Ye.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Mo(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Di(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function te(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var fp=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{I.addEventListener("test",()=>{},e),I.removeEventListener("test",()=>{},e)}catch{}return t}();function rn(t){return/^[\s\xa0]*$/.test(t)}function Oi(){var t=I.navigator;return t&&(t=t.userAgent)?t:""}function ye(t){return Oi().indexOf(t)!=-1}function wr(t){return wr[" "](t),t}wr[" "]=function(){};function pp(t,e){var n=og;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gp=ye("Opera"),Nt=ye("Trident")||ye("MSIE"),Oc=ye("Edge"),Ds=Oc||Nt,Pc=ye("Gecko")&&!(Oi().toLowerCase().indexOf("webkit")!=-1&&!ye("Edge"))&&!(ye("Trident")||ye("MSIE"))&&!ye("Edge"),mp=Oi().toLowerCase().indexOf("webkit")!=-1&&!ye("Edge");function Lc(){var t=I.document;return t?t.documentMode:void 0}var Os;e:{var hs="",ds=function(){var t=Oi();if(Pc)return/rv:([^\);]+)(\)|;)/.exec(t);if(Oc)return/Edge\/([\d\.]+)/.exec(t);if(Nt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mp)return/WebKit\/(\S+)/.exec(t);if(gp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ds&&(hs=ds?ds[1]:""),Nt){var fs=Lc();if(fs!=null&&fs>parseFloat(hs)){Os=String(fs);break e}}Os=hs}var Ps;if(I.document&&Nt){var xo=Lc();Ps=xo||parseInt(Os,10)||void 0}else Ps=void 0;var yp=Ps;function on(t,e){if(te.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pc){e:{try{wr(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&on.$.h.call(this)}}G(on,te);var vp={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),wp=0;function _p(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++wp,this.fa=this.ia=!1}function Pi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _r(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Ep(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Mc(t){const e={};for(const n in t)e[n]=t[n];return e}const Uo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xc(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Uo.length;r++)n=Uo[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Li(t){this.src=t,this.g={},this.h=0}Li.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ms(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new _p(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Ls(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Dc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Pi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ms(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Er="closure_lm_"+(1e6*Math.random()|0),ps={};function Uc(t,e,n,i,s){if(i&&i.once)return Vc(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Uc(t,e[r],n,i,s);return null}return n=Sr(n),t&&t[kn]?t.O(e,n,An(i)?!!i.capture:!!i,s):Fc(t,e,n,!1,i,s)}function Fc(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=An(s)?!!s.capture:!!s,a=Tr(t);if(a||(t[Er]=a=new Li(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Ip(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)fp||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Bc(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ip(){function t(n){return e.call(t.src,t.listener,n)}const e=Tp;return t}function Vc(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Vc(t,e[r],n,i,s);return null}return n=Sr(n),t&&t[kn]?t.P(e,n,An(i)?!!i.capture:!!i,s):Fc(t,e,n,!0,i,s)}function $c(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)$c(t,e[r],n,i,s);else i=An(i)?!!i.capture:!!i,n=Sr(n),t&&t[kn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ms(r,n,i,s),-1<n&&(Pi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ms(e,n,i,s)),(n=-1<t?e[t]:null)&&Ir(n))}function Ir(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[kn])Ls(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Bc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Tr(e))?(Ls(n,t),n.h==0&&(n.src=null,e[Er]=null)):Pi(t)}}}function Bc(t){return t in ps?ps[t]:ps[t]="on"+t}function Tp(t,e){if(t.fa)t=!0;else{e=new on(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Ir(t),t=n.call(i,e)}return t}function Tr(t){return t=t[Er],t instanceof Li?t:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sr(t){return typeof t=="function"?t:(t[gs]||(t[gs]=function(e){return t.handleEvent(e)}),t[gs])}function K(){Ye.call(this),this.i=new Li(this),this.S=this,this.J=null}G(K,Ye);K.prototype[kn]=!0;K.prototype.removeEventListener=function(t,e,n,i){$c(this,t,e,n,i)};function Y(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new te(e,t);else if(e instanceof te)e.target=e.target||t;else{var s=e;e=new te(i,t),xc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Bn(o,i,!0,e)&&s}if(o=e.g=t,s=Bn(o,i,!0,e)&&s,s=Bn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Bn(o,i,!1,e)&&s}K.prototype.N=function(){if(K.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Pi(n[i]);delete t.g[e],t.h--}}this.J=null};K.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};K.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Bn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ls(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Cr=I.JSON.stringify;class Sp{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Cp(){var t=Ar;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ap{constructor(){this.h=this.g=null}add(e,n){const i=jc.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var jc=new Sp(()=>new kp,t=>t.reset());class kp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bp(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Rp(t){I.setTimeout(()=>{throw t},0)}let an,cn=!1,Ar=new Ap,qc=()=>{const t=I.Promise.resolve(void 0);an=()=>{t.then(Np)}};var Np=()=>{for(var t;t=Cp();){try{t.h.call(t.g)}catch(n){Rp(n)}var e=jc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cn=!1};function Mi(t,e){K.call(this),this.h=t||1,this.g=e||I,this.j=ee(this.qb,this),this.l=Date.now()}G(Mi,K);m=Mi.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Y(this,"tick"),this.ga&&(kr(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kr(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}m.N=function(){Mi.$.N.call(this),kr(this),delete this.g};function br(t,e,n){if(typeof t=="function")n&&(t=ee(t,n));else if(t&&typeof t.handleEvent=="function")t=ee(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:I.setTimeout(t,e||0)}function Hc(t){t.g=br(()=>{t.g=null,t.i&&(t.i=!1,Hc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Dp extends Ye{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hc(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(t){Ye.call(this),this.h=t,this.g={}}G(un,Ye);var Fo=[];function zc(t,e,n,i){Array.isArray(n)||(n&&(Fo[0]=n.toString()),n=Fo);for(var s=0;s<n.length;s++){var r=Uc(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Kc(t){_r(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ir(e)},t),t.g={}}un.prototype.N=function(){un.$.N.call(this),Kc(this)};un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xi(){this.g=!0}xi.prototype.Ea=function(){this.g=!1};function Op(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Pp(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function _t(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Mp(t,n)+(i?" "+i:"")})}function Lp(t,e){t.info(function(){return"TIMEOUT: "+e})}xi.prototype.info=function(){};function Mp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Cr(n)}catch{return e}}var pt={},Vo=null;function Ui(){return Vo=Vo||new K}pt.Ta="serverreachability";function Gc(t){te.call(this,pt.Ta,t)}G(Gc,te);function ln(t){const e=Ui();Y(e,new Gc(e))}pt.STAT_EVENT="statevent";function Wc(t,e){te.call(this,pt.STAT_EVENT,t),this.stat=e}G(Wc,te);function re(t){const e=Ui();Y(e,new Wc(e,t))}pt.Ua="timingevent";function Qc(t,e){te.call(this,pt.Ua,t),this.size=e}G(Qc,te);function bn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){t()},e)}var Fi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rr(){}Rr.prototype.h=null;function $o(t){return t.h||(t.h=t.i())}function Jc(){}var Rn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nr(){te.call(this,"d")}G(Nr,te);function Dr(){te.call(this,"c")}G(Dr,te);var xs;function Vi(){}G(Vi,Rr);Vi.prototype.g=function(){return new XMLHttpRequest};Vi.prototype.i=function(){return{}};xs=new Vi;function Nn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new un(this),this.P=xp,t=Ds?125:void 0,this.V=new Mi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Xc}function Xc(){this.i=null,this.g="",this.h=!1}var xp=45e3,Us={},fi={};m=Nn.prototype;m.setTimeout=function(t){this.P=t};function Fs(t,e,n){t.L=1,t.v=Bi(Le(e)),t.s=n,t.S=!0,Zc(t,null)}function Zc(t,e){t.G=Date.now(),Dn(t),t.A=Le(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),au(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Xc,t.g=bu(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Dp(ee(t.Pa,t,t.g),t.O)),zc(t.U,t.g,"readystatechange",t.nb),e=t.I?Mc(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ln(),Op(t.j,t.u,t.A,t.m,t.W,t.s)}m.nb=function(t){t=t.target;const e=this.M;e&&we(t)==3?e.l():this.Pa(t)};m.Pa=function(t){try{if(t==this.g)e:{const l=we(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ds||this.g&&(this.h.h||this.g.ja()||Ho(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?ln(3):ln(2)),$i(this);var n=this.g.da();this.ca=n;t:if(eu(this)){var i=Ho(this.g);t="";var s=i.length,r=we(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tt(this),Yt(this);var o="";break t}this.h.i=new I.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Pp(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rn(a)){var u=a;break t}}u=null}if(n=u)_t(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vs(this,n);else{this.i=!1,this.o=3,re(12),tt(this),Yt(this);break e}}this.S?(tu(this,l,o),Ds&&this.i&&l==3&&(zc(this.U,this.V,"tick",this.mb),this.V.start())):(_t(this.j,this.m,o,null),Vs(this,o)),l==4&&tt(this),this.i&&!this.J&&(l==4?Su(this.l,this):(this.i=!1,Dn(this)))}else ig(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),tt(this),Yt(this)}}}catch{}finally{}};function eu(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function tu(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=Up(t,n),s==fi){e==4&&(t.o=4,re(14),i=!1),_t(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Us){t.o=4,re(15),_t(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else _t(t.j,t.m,s,null),Vs(t,s);eu(t)&&s!=fi&&s!=Us&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,re(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ur(e),e.M=!0,re(11))):(_t(t.j,t.m,n,"[Invalid Chunked Response]"),tt(t),Yt(t))}m.mb=function(){if(this.g){var t=we(this.g),e=this.g.ja();this.C<e.length&&($i(this),tu(this,t,e),this.i&&t!=4&&Dn(this))}};function Up(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?fi:(n=Number(e.substring(n,i)),isNaN(n)?Us:(i+=1,i+n>e.length?fi:(e=e.slice(i,i+n),t.C=i+n,e)))}m.cancel=function(){this.J=!0,tt(this)};function Dn(t){t.Y=Date.now()+t.P,nu(t,t.P)}function nu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bn(ee(t.lb,t),e)}function $i(t){t.B&&(I.clearTimeout(t.B),t.B=null)}m.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Lp(this.j,this.A),this.L!=2&&(ln(),re(17)),tt(this),this.o=2,Yt(this)):nu(this,this.Y-t)};function Yt(t){t.l.H==0||t.J||Su(t.l,t)}function tt(t){$i(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,kr(t.V),Kc(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Vs(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$s(n.i,t))){if(!t.K&&$s(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)mi(n),Hi(n);else break e;xr(n),re(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=bn(ee(n.ib,n),6e3));if(1>=lu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else nt(n,11)}else if((t.K||n.g==t)&&mi(n),!rn(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var r=i.i;r.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Or(r,r.h),r.h=null))}if(i.F){const A=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(i.Da=A,M(i.I,i.F,A))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=ku(i,i.J?i.pa:null,i.Y),o.K){hu(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&($i(a),Dn(a)),i.g=o}else Iu(i);0<n.j.length&&zi(n)}else u[0]!="stop"&&u[0]!="close"||nt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nt(n,7):Mr(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ln(4)}catch{}}function Fp(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Di(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Vp(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Di(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function iu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Di(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Vp(t),i=Fp(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $p(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function rt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rt){this.h=t.h,pi(this,t.j),this.s=t.s,this.g=t.g,gi(this,t.m),this.l=t.l;var e=t.i,n=new hn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Bo(this,n),this.o=t.o}else t&&(e=String(t).match(su))?(this.h=!1,pi(this,e[1]||"",!0),this.s=Ht(e[2]||""),this.g=Ht(e[3]||"",!0),gi(this,e[4]),this.l=Ht(e[5]||"",!0),Bo(this,e[6]||"",!0),this.o=Ht(e[7]||"")):(this.h=!1,this.i=new hn(null,this.h))}rt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zt(e,jo,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(zt(e,jo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(zt(n,n.charAt(0)=="/"?qp:jp,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zt(n,zp)),t.join("")};function Le(t){return new rt(t)}function pi(t,e,n){t.j=n?Ht(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bo(t,e,n){e instanceof hn?(t.i=e,Kp(t.i,t.h)):(n||(e=zt(e,Hp)),t.i=new hn(e,t.h))}function M(t,e,n){t.i.set(e,n)}function Bi(t){return M(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ht(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Bp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Bp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jo=/[#\/\?@]/g,jp=/[#\?:]/g,qp=/[#\?]/g,Hp=/[#\?@]/g,zp=/#/g;function hn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Je(t){t.g||(t.g=new Map,t.h=0,t.i&&$p(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}m=hn.prototype;m.add=function(t,e){Je(this),this.i=null,t=Ut(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ru(t,e){Je(t),e=Ut(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ou(t,e){return Je(t),e=Ut(t,e),t.g.has(e)}m.forEach=function(t,e){Je(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};m.ta=function(){Je(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};m.Z=function(t){Je(this);let e=[];if(typeof t=="string")ou(this,t)&&(e=e.concat(this.g.get(Ut(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};m.set=function(t,e){return Je(this),this.i=null,t=Ut(this,t),ou(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};m.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function au(t,e,n){ru(t,e),0<n.length&&(t.i=null,t.g.set(Ut(t,e),vr(n)),t.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Ut(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Kp(t,e){e&&!t.j&&(Je(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(ru(this,i),au(this,s,n))},t)),t.j=e}var Gp=class{constructor(t,e){this.g=t,this.map=e}};function cu(t){this.l=t||Wp,I.PerformanceNavigationTiming?(t=I.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wp=10;function uu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lu(t){return t.h?1:t.g?t.g.size:0}function $s(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Or(t,e){t.g?t.g.add(e):t.h=e}function hu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cu.prototype.cancel=function(){if(this.i=du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function du(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return vr(t.i)}var Qp=class{stringify(t){return I.JSON.stringify(t,void 0)}parse(t){return I.JSON.parse(t,void 0)}};function Yp(){this.g=new Qp}function Jp(t,e,n){const i=n||"";try{iu(t,function(s,r){let o=s;An(s)&&(o=Cr(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Xp(t,e){const n=new xi;if(I.Image){const i=new Image;i.onload=$n(jn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=$n(jn,n,i,"TestLoadImage: error",!1,e),i.onabort=$n(jn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=$n(jn,n,i,"TestLoadImage: timeout",!1,e),I.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function jn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function On(t){this.l=t.fc||null,this.j=t.ob||!1}G(On,Rr);On.prototype.g=function(){return new ji(this.l,this.j)};On.prototype.i=function(t){return function(){return t}}({});function ji(t,e){K.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Pr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(ji,K);var Pr=0;m=ji.prototype;m.open=function(t,e){if(this.readyState!=Pr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dn(this)};m.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||I).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=Pr};m.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fu(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function fu(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}m.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pn(this):dn(this),this.readyState==3&&fu(this)}};m.Za=function(t){this.g&&(this.response=this.responseText=t,Pn(this))};m.Ya=function(t){this.g&&(this.response=t,Pn(this))};m.ka=function(){this.g&&Pn(this)};function Pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dn(t)}m.setRequestHeader=function(t,e){this.v.append(t,e)};m.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Zp=I.JSON.parse;function U(t){K.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pu,this.L=this.M=!1}G(U,K);var pu="",eg=/^https?$/i,tg=["POST","PUT"];m=U.prototype;m.Oa=function(t){this.M=t};m.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():xs.g(),this.C=this.u?$o(this.u):$o(xs),this.g.onreadystatechange=ee(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){qo(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=I.FormData&&t instanceof I.FormData,!(0<=Dc(tg,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yu(this),0<this.B&&((this.L=ng(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ee(this.ua,this)):this.A=br(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){qo(this,r)}};function ng(t){return Nt&&typeof t.timeout=="number"&&t.ontimeout!==void 0}m.ua=function(){typeof yr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function qo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gu(t),qi(t)}function gu(t){t.F||(t.F=!0,Y(t,"complete"),Y(t,"error"))}m.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Y(this,"complete"),Y(this,"abort"),qi(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qi(this,!0)),U.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?mu(this):this.kb())};m.kb=function(){mu(this)};function mu(t){if(t.h&&typeof yr<"u"&&(!t.C[1]||we(t)!=4||t.da()!=2)){if(t.v&&we(t)==4)br(t.La,0,t);else if(Y(t,"readystatechange"),we(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(su)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),i=!eg.test(s?s.toLowerCase():"")}n=i}if(n)Y(t,"complete"),Y(t,"success");else{t.m=6;try{var r=2<we(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",gu(t)}}finally{qi(t)}}}}function qi(t,e){if(t.g){yu(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Y(t,"ready");try{n.onreadystatechange=i}catch{}}}function yu(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(I.clearTimeout(t.A),t.A=null)}m.isActive=function(){return!!this.g};function we(t){return t.g?t.g.readyState:0}m.da=function(){try{return 2<we(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Zp(e)}};function Ho(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ig(t){const e={};t=(t.g&&2<=we(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(rn(t[i]))continue;var n=bp(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}Ep(e,function(i){return i.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vu(t){let e="";return _r(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Lr(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=vu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):M(t,e,n))}function jt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wu(t){this.Ga=0,this.j=[],this.l=new xi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=jt("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=jt("baseRetryDelayMs",5e3,t),this.hb=jt("retryDelaySeedMs",1e4,t),this.eb=jt("forwardChannelMaxRetries",2,t),this.xa=jt("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cu(t&&t.concurrentRequestLimit),this.Ja=new Yp,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=wu.prototype;m.ra=8;m.H=1;function Mr(t){if(_u(t),t.H==3){var e=t.W++,n=Le(t.I);if(M(n,"SID",t.K),M(n,"RID",e),M(n,"TYPE","terminate"),Ln(t,n),e=new Nn(t,t.l,e),e.L=2,e.v=Bi(Le(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&I.Image&&(new Image().src=e.v,n=!0),n||(e.g=bu(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Dn(e)}Au(t)}function Hi(t){t.g&&(Ur(t),t.g.cancel(),t.g=null)}function _u(t){Hi(t),t.u&&(I.clearTimeout(t.u),t.u=null),mi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&I.clearTimeout(t.m),t.m=null)}function zi(t){if(!uu(t.i)&&!t.m){t.m=!0;var e=t.Na;an||qc(),cn||(an(),cn=!0),Ar.add(e,t),t.C=0}}function sg(t,e){return lu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=bn(ee(t.Na,t,e),Cu(t,t.C)),t.C++,!0)}m.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Nn(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Mc(r),xc(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Eu(this,s,e),n=Le(this.I),M(n,"RID",t),M(n,"CVER",22),this.F&&M(n,"X-HTTP-Session-Id",this.F),Ln(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(vu(r)))+"&"+e:this.o&&Lr(n,this.o,r)),Or(this.i,s),this.bb&&M(n,"TYPE","init"),this.P?(M(n,"$req",e),M(n,"SID","null"),s.aa=!0,Fs(s,n,null)):Fs(s,n,e),this.H=2}}else this.H==3&&(t?zo(this,t):this.j.length==0||uu(this.i)||zo(this))};function zo(t,e){var n;e?n=e.m:n=t.W++;const i=Le(t.I);M(i,"SID",t.K),M(i,"RID",n),M(i,"AID",t.V),Ln(t,i),t.o&&t.s&&Lr(i,t.o,t.s),n=new Nn(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Eu(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Or(t.i,n),Fs(n,i,e)}function Ln(t,e){t.na&&_r(t.na,function(n,i){M(e,i,n)}),t.h&&iu({},function(n,i){M(e,i,n)})}function Eu(t,e,n){n=Math.min(t.j.length,n);var i=t.h?ee(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=r,0>u)r=Math.max(0,s[c].g-100),a=!1;else try{Jp(l,o,"req"+u+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Iu(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;an||qc(),cn||(an(),cn=!0),Ar.add(e,t),t.A=0}}function xr(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=bn(ee(t.Ma,t),Cu(t,t.A)),t.A++,!0)}m.Ma=function(){if(this.u=null,Tu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=bn(ee(this.jb,this),t)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,re(10),Hi(this),Tu(this))};function Ur(t){t.B!=null&&(I.clearTimeout(t.B),t.B=null)}function Tu(t){t.g=new Nn(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Le(t.wa);M(e,"RID","rpc"),M(e,"SID",t.K),M(e,"AID",t.V),M(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&M(e,"TO",t.qa),M(e,"TYPE","xmlhttp"),Ln(t,e),t.o&&t.s&&Lr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Bi(Le(e)),n.s=null,n.S=!0,Zc(n,t)}m.ib=function(){this.v!=null&&(this.v=null,Hi(this),xr(this),re(19))};function mi(t){t.v!=null&&(I.clearTimeout(t.v),t.v=null)}function Su(t,e){var n=null;if(t.g==e){mi(t),Ur(t),t.g=null;var i=2}else if($s(t.i,e))n=e.F,hu(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Ui(),Y(i,new Qc(i,n)),zi(t)}else Iu(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&sg(t,e)||i==2&&xr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:nt(t,5);break;case 4:nt(t,10);break;case 3:nt(t,6);break;default:nt(t,2)}}}function Cu(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function nt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=ee(t.pb,t);n||(n=new rt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||pi(n,"https"),Bi(n)),Xp(n.toString(),i)}else re(2);t.H=0,t.h&&t.h.za(e),Au(t),_u(t)}m.pb=function(t){t?(this.l.info("Successfully pinged google.com"),re(2)):(this.l.info("Failed to ping google.com"),re(1))};function Au(t){if(t.H=0,t.ma=[],t.h){const e=du(t.i);(e.length!=0||t.j.length!=0)&&(Mo(t.ma,e),Mo(t.ma,t.j),t.i.i.length=0,vr(t.j),t.j.length=0),t.h.ya()}}function ku(t,e,n){var i=n instanceof rt?Le(n):new rt(n);if(i.g!="")e&&(i.g=e+"."+i.g),gi(i,i.m);else{var s=I.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new rt(null);i&&pi(r,i),e&&(r.g=e),s&&gi(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&M(i,n,e),M(i,"VER",t.ra),Ln(t,i),i}function bu(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new U(new On({ob:!0})):new U(t.va),e.Oa(t.J),e}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ru(){}m=Ru.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function yi(){if(Nt&&!(10<=Number(yp)))throw Error("Environmental error: no available transport.")}yi.prototype.g=function(t,e){return new ce(t,e)};function ce(t,e){K.call(this),this.g=new wu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!rn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ft(this)}G(ce,K);ce.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;re(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ku(t,null,t.Y),zi(t)};ce.prototype.close=function(){Mr(this.g)};ce.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Cr(t),t=n);e.j.push(new Gp(e.fb++,t)),e.H==3&&zi(e)};ce.prototype.N=function(){this.g.h=null,delete this.j,Mr(this.g),delete this.g,ce.$.N.call(this)};function Nu(t){Nr.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}G(Nu,Nr);function Du(){Dr.call(this),this.status=1}G(Du,Dr);function Ft(t){this.g=t}G(Ft,Ru);Ft.prototype.Ba=function(){Y(this.g,"a")};Ft.prototype.Aa=function(t){Y(this.g,new Nu(t))};Ft.prototype.za=function(t){Y(this.g,new Du)};Ft.prototype.ya=function(){Y(this.g,"b")};function rg(){this.blockSize=-1}function ge(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G(ge,rg);ge.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ms(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}ge.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)ms(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){ms(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){ms(this,i),s=0;break}}this.h=s,this.i+=e};ge.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function O(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var og={};function Fr(t){return-128<=t&&128>t?pp(t,function(e){return new O([e|0],0>e?-1:0)}):new O([t|0],0>t?-1:0)}function _e(t){if(isNaN(t)||!isFinite(t))return Tt;if(0>t)return Q(_e(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Bs;return new O(e,0)}function Ou(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Q(Ou(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_e(Math.pow(e,8)),i=Tt,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=_e(Math.pow(e,r)),i=i.R(r).add(_e(o))):(i=i.R(n),i=i.add(_e(o)))}return i}var Bs=4294967296,Tt=Fr(0),js=Fr(1),Ko=Fr(16777216);m=O.prototype;m.ea=function(){if(he(this))return-Q(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Bs+i)*e,e*=Bs}return t};m.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Re(this))return"0";if(he(this))return"-"+Q(this).toString(t);for(var e=_e(Math.pow(t,6)),n=this,i="";;){var s=wi(n,e).g;n=vi(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Re(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};m.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Re(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function he(t){return t.h==-1}m.X=function(t){return t=vi(this,t),he(t)?-1:Re(t)?0:1};function Q(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new O(n,~t.h).add(js)}m.abs=function(){return he(this)?Q(this):this};m.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new O(n,n[n.length-1]&-2147483648?-1:0)};function vi(t,e){return t.add(Q(e))}m.R=function(t){if(Re(this)||Re(t))return Tt;if(he(this))return he(t)?Q(this).R(Q(t)):Q(Q(this).R(t));if(he(t))return Q(this.R(Q(t)));if(0>this.X(Ko)&&0>t.X(Ko))return _e(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*i+2*s]+=o*c,qn(n,2*i+2*s),n[2*i+2*s+1]+=r*c,qn(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,qn(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,qn(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new O(n,0)};function qn(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qt(t,e){this.g=t,this.h=e}function wi(t,e){if(Re(e))throw Error("division by zero");if(Re(t))return new qt(Tt,Tt);if(he(t))return e=wi(Q(t),e),new qt(Q(e.g),Q(e.h));if(he(e))return e=wi(t,Q(e)),new qt(Q(e.g),e.h);if(30<t.g.length){if(he(t)||he(e))throw Error("slowDivide_ only works with positive integers.");for(var n=js,i=e;0>=i.X(t);)n=Go(n),i=Go(i);var s=mt(n,1),r=mt(i,1);for(i=mt(i,2),n=mt(n,2);!Re(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=mt(i,1),n=mt(n,1)}return e=vi(t,s.R(e)),new qt(s,e)}for(s=Tt;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=_e(n),o=r.R(e);he(o)||0<o.X(t);)n-=i,r=_e(n),o=r.R(e);Re(r)&&(r=js),s=s.add(r),t=vi(t,o)}return new qt(s,t)}m.gb=function(t){return wi(this,t).h};m.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new O(n,this.h&t.h)};m.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new O(n,this.h|t.h)};m.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new O(n,this.h^t.h)};function Go(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new O(n,t.h)}function mt(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new O(s,t.h)}yi.prototype.createWebChannel=yi.prototype.g;ce.prototype.send=ce.prototype.u;ce.prototype.open=ce.prototype.m;ce.prototype.close=ce.prototype.close;Fi.NO_ERROR=0;Fi.TIMEOUT=8;Fi.HTTP_ERROR=6;Yc.COMPLETE="complete";Jc.EventType=Rn;Rn.OPEN="a";Rn.CLOSE="b";Rn.ERROR="c";Rn.MESSAGE="d";K.prototype.listen=K.prototype.O;U.prototype.listenOnce=U.prototype.P;U.prototype.getLastError=U.prototype.Sa;U.prototype.getLastErrorCode=U.prototype.Ia;U.prototype.getStatus=U.prototype.da;U.prototype.getResponseJson=U.prototype.Wa;U.prototype.getResponseText=U.prototype.ja;U.prototype.send=U.prototype.ha;U.prototype.setWithCredentials=U.prototype.Oa;ge.prototype.digest=ge.prototype.l;ge.prototype.reset=ge.prototype.reset;ge.prototype.update=ge.prototype.j;O.prototype.add=O.prototype.add;O.prototype.multiply=O.prototype.R;O.prototype.modulo=O.prototype.gb;O.prototype.compare=O.prototype.X;O.prototype.toNumber=O.prototype.ea;O.prototype.toString=O.prototype.toString;O.prototype.getBits=O.prototype.D;O.fromNumber=_e;O.fromString=Ou;var ag=function(){return new yi},cg=function(){return Ui()},ys=Fi,ug=Yc,lg=pt,Wo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hg=On,Hn=Jc,dg=U,fg=ge,St=O;const Qo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new ar("@firebase/firestore");function Yo(){return lt.logLevel}function y(t,...e){if(lt.logLevel<=R.DEBUG){const n=e.map(Vr);lt.debug(`Firestore (${Vt}): ${t}`,...n)}}function Me(t,...e){if(lt.logLevel<=R.ERROR){const n=e.map(Vr);lt.error(`Firestore (${Vt}): ${t}`,...n)}}function Dt(t,...e){if(lt.logLevel<=R.WARN){const n=e.map(Vr);lt.warn(`Firestore (${Vt}): ${t}`,...n)}}function Vr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t="Unexpected state"){const e=`FIRESTORE (${Vt}) INTERNAL ASSERTION FAILED: `+t;throw Me(e),new Error(e)}function H(t,e){t||C()}function N(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends me{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class gg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mg{constructor(e){this.t=e,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ct,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ct)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(H(typeof i.accessToken=="string"),new Pu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new X(e)}}class yg{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=X.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class vg{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new yg(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _g{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string"),this.T=n.token,new wg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Eg(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function D(t,e){return t<e?-1:t>e?1:0}function Ot(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new ae(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new ae(0,0))}static max(){return new S(new ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,i){n===void 0?n=0:n>e.length&&C(),i===void 0?i=e.length-n:i>e.length-n&&C(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class x extends fn{construct(e,n,i){return new x(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new _(g.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Ig=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends fn{construct(e,n,i){return new oe(e,n,i)}static isValidIdentifier(e){return Ig.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new _(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new _(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new _(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(n)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(x.fromString(e))}static fromName(e){return new w(x.fromString(e).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&x.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return x.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new x(e.slice()))}}function Tg(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=S.fromTimestamp(i===1e9?new ae(n+1,0):new ae(n,i));return new Ge(s,w.empty(),e)}function Sg(t){return new Ge(t.readTime,t.key,-1)}class Ge{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ge(S.min(),w.empty(),-1)}static max(){return new Ge(S.max(),w.empty(),-1)}}function Cg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=w.comparator(t.documentKey,e.documentKey),n!==0?n:D(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t){if(t.code!==g.FAILED_PRECONDITION||t.message!==Ag)throw t;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new d((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):d.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):d.reject(n)}static resolve(e){return new d((n,i)=>{n(e)})}static reject(e){return new d((n,i)=>{i(e)})}static waitFor(e){return new d((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=d.resolve(!1);for(const i of e)n=n.next(s=>s?d.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new d((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===r&&i(o)},l=>s(l))}})}static doWhile(e,n){return new d((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Mn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Br.ct=-1;function Ki(t){return t==null}function qs(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.comparator=e,this.root=n||W.EMPTY}insert(e,n){return new F(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,W.BLACK,null,null))}remove(e){return new F(this.comparator,this.root.remove(e,this.comparator).copy(null,null,W.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zn(this.root,e,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zn(this.root,e,this.comparator,!0)}}class zn{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class W{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??W.RED,this.left=s??W.EMPTY,this.right=r??W.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new W(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return W.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1;W.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(t,e,n,i,s){return this}insert(t,e,n){return new W(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.comparator=e,this.data=new F(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xo(this.data.getIterator())}getIteratorFrom(e){return new Xo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ne)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ne(this.comparator);return n.data=e,n}}class Xo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(oe.comparator)}static empty(){return new je([])}unionWith(e){let n=new ne(oe.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new je(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ot(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Mu("Invalid base64 string: "+s):s}}(e);return new se(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new se(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}se.EMPTY_BYTE_STRING=new se("");const Rg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(t){if(H(!!t),typeof t=="string"){let e=0;const n=Rg.exec(t);if(H(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:B(t.seconds),nanos:B(t.nanos)}}function B(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ht(t){return typeof t=="string"?se.fromBase64String(t):se.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qr(t){const e=t.mapValue.fields.__previous_value__;return jr(e)?qr(e):e}function pn(t){const e=We(t.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,i,s,r,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class gn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jr(t)?4:Dg(t)?9007199254740991:10:C()}function Te(t,e){if(t===e)return!0;const n=dt(t);if(n!==dt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pn(t).isEqual(pn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=We(i.timestampValue),o=We(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ht(i.bytesValue).isEqual(ht(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return B(i.geoPointValue.latitude)===B(s.geoPointValue.latitude)&&B(i.geoPointValue.longitude)===B(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return B(i.integerValue)===B(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=B(i.doubleValue),o=B(s.doubleValue);return r===o?qs(r)===qs(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ot(t.arrayValue.values||[],e.arrayValue.values||[],Te);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Jo(r)!==Jo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Te(r[a],o[a])))return!1;return!0}(t,e);default:return C()}}function mn(t,e){return(t.values||[]).find(n=>Te(n,e))!==void 0}function Pt(t,e){if(t===e)return 0;const n=dt(t),i=dt(e);if(n!==i)return D(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=B(s.integerValue||s.doubleValue),a=B(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Zo(t.timestampValue,e.timestampValue);case 4:return Zo(pn(t),pn(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(s,r){const o=ht(s),a=ht(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=D(B(s.latitude),B(r.latitude));return o!==0?o:D(B(s.longitude),B(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Pt(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Kn.mapValue&&r===Kn.mapValue)return 0;if(s===Kn.mapValue)return 1;if(r===Kn.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const f=Pt(o[a[l]],c[u[l]]);if(f!==0)return f}return D(a.length,u.length)}(t.mapValue,e.mapValue);default:throw C()}}function Zo(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return D(t,e);const n=We(t),i=We(e),s=D(n.seconds,i.seconds);return s!==0?s:D(n.nanos,i.nanos)}function Lt(t){return Hs(t)}function Hs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=We(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ht(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,w.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Hs(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Hs(i.fields[a])}`;return r+"}"}(t.mapValue):C();var e,n}function zs(t){return!!t&&"integerValue"in t}function Hr(t){return!!t&&"arrayValue"in t}function ea(t){return!!t&&"nullValue"in t}function ta(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vs(t){return!!t&&"mapValue"in t}function Jt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gi(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Jt(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Dg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.value=e}static empty(){return new ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!vs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jt(n)}setAll(e){let n=oe.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Jt(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());vs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Te(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];vs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Gi(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new ve(Jt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Z(e,0,S.min(),S.min(),S.min(),ve.empty(),0)}static newFoundDocument(e,n,i,s){return new Z(e,1,n,S.min(),i,s,0)}static newNoDocument(e,n){return new Z(e,2,n,S.min(),S.min(),ve.empty(),0)}static newUnknownDocument(e,n){return new Z(e,3,n,S.min(),S.min(),ve.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.position=e,this.inclusive=n}}function na(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=w.comparator(w.fromName(o.referenceValue),n.key):i=Pt(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function ia(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Te(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Og(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{}class q extends xu{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Lg(e,n,i):n==="array-contains"?new Ug(e,i):n==="in"?new Fg(e,i):n==="not-in"?new Vg(e,i):n==="array-contains-any"?new $g(e,i):new q(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Mg(e,i):new xg(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pt(n,this.value)):n!==null&&dt(this.value)===dt(n)&&this.matchesComparison(Pt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Se extends xu{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Se(e,n)}matches(e){return Uu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Uu(t){return t.op==="and"}function Fu(t){return Pg(t)&&Uu(t)}function Pg(t){for(const e of t.filters)if(e instanceof Se)return!1;return!0}function Ks(t){if(t instanceof q)return t.field.canonicalString()+t.op.toString()+Lt(t.value);if(Fu(t))return t.filters.map(e=>Ks(e)).join(",");{const e=t.filters.map(n=>Ks(n)).join(",");return`${t.op}(${e})`}}function Vu(t,e){return t instanceof q?function(n,i){return i instanceof q&&n.op===i.op&&n.field.isEqual(i.field)&&Te(n.value,i.value)}(t,e):t instanceof Se?function(n,i){return i instanceof Se&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&Vu(r,i.filters[o]),!0):!1}(t,e):void C()}function $u(t){return t instanceof q?function(e){return`${e.field.canonicalString()} ${e.op} ${Lt(e.value)}`}(t):t instanceof Se?function(e){return e.op.toString()+" {"+e.getFilters().map($u).join(" ,")+"}"}(t):"Filter"}class Lg extends q{constructor(e,n,i){super(e,n,i),this.key=w.fromName(i.referenceValue)}matches(e){const n=w.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mg extends q{constructor(e,n){super(e,"in",n),this.keys=Bu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xg extends q{constructor(e,n){super(e,"not-in",n),this.keys=Bu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>w.fromName(i.referenceValue))}class Ug extends q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hr(n)&&mn(n.arrayValue,this.value)}}class Fg extends q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mn(this.value.arrayValue,n)}}class Vg extends q{constructor(e,n){super(e,"not-in",n)}matches(e){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mn(this.value.arrayValue,n)}}class $g extends q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>mn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function sa(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Bg(t,e,n,i,s,r,o)}function zr(t){const e=N(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Ks(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ki(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Lt(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Lt(i)).join(",")),e.dt=n}return e.dt}function Kr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Og(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Vu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ia(t.startAt,e.startAt)&&ia(t.endAt,e.endAt)}function Gs(t){return w.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function jg(t,e,n,i,s,r,o,a){return new Wi(t,e,n,i,s,r,o,a)}function Gr(t){return new Wi(t)}function ra(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Hg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function zg(t){return t.collectionGroup!==null}function At(t){const e=N(t);if(e.wt===null){e.wt=[];const n=Hg(e),i=qg(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new Xt(n)),e.wt.push(new Xt(oe.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xt(oe.keyField(),r))}}}return e.wt}function xe(t){const e=N(t);if(!e._t)if(e.limitType==="F")e._t=sa(e.path,e.collectionGroup,At(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of At(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Xt(r.field,o))}const i=e.endAt?new _i(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new _i(e.startAt.position,e.startAt.inclusive):null;e._t=sa(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e._t}function Ws(t,e,n){return new Wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qi(t,e){return Kr(xe(t),xe(e))&&t.limitType===e.limitType}function ju(t){return`${zr(xe(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>$u(i)).join(", ")}]`),Ki(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Lt(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Lt(i)).join(",")),`Target(${n})`}(xe(t))}; limitType=${t.limitType})`}function Yi(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):w.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of At(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=na(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,At(n),i)||n.endAt&&!function(s,r,o){const a=na(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,At(n),i))}(t,e)}function Kg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qu(t){return(e,n)=>{let i=!1;for(const s of At(t)){const r=Gg(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Gg(t,e,n){const i=t.field.isKeyField()?w.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Pt(a,c):C()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return C()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gi(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return bg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new F(w.comparator);function Qe(){return Wg}const Hu=new F(w.comparator);function Kt(...t){let e=Hu;for(const n of t)e=e.insert(n.key,n);return e}function Qg(t){let e=Hu;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function it(){return Zt()}function zu(){return Zt()}function Zt(){return new $t(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yg=new ne(w.comparator);function b(...t){let e=Yg;for(const n of t)e=e.add(n);return e}const Jg=new ne(D);function Xg(){return Jg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qs(e)?"-0":e}}function em(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this._=void 0}}function tm(t,e,n){return t instanceof Ys?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jr(s)&&(s=qr(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Ei?Ku(t,e):t instanceof Ii?Gu(t,e):function(i,s){const r=im(i,s),o=oa(r)+oa(i.gt);return zs(r)&&zs(i.gt)?em(o):Zg(i.serializer,o)}(t,e)}function nm(t,e,n){return t instanceof Ei?Ku(t,e):t instanceof Ii?Gu(t,e):n}function im(t,e){return t instanceof Js?zs(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Ys extends Ji{}class Ei extends Ji{constructor(e){super(),this.elements=e}}function Ku(t,e){const n=Wu(e);for(const i of t.elements)n.some(s=>Te(s,i))||n.push(i);return{arrayValue:{values:n}}}class Ii extends Ji{constructor(e){super(),this.elements=e}}function Gu(t,e){let n=Wu(e);for(const i of t.elements)n=n.filter(s=>!Te(s,i));return{arrayValue:{values:n}}}class Js extends Ji{constructor(e,n){super(),this.serializer=e,this.gt=n}}function oa(t){return B(t.integerValue||t.doubleValue)}function Wu(t){return Hr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sm(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Ei&&i instanceof Ei||n instanceof Ii&&i instanceof Ii?Ot(n.elements,i.elements,Te):n instanceof Js&&i instanceof Js?Te(n.gt,i.gt):n instanceof Ys&&i instanceof Ys}(t.transform,e.transform)}class ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wr{}function Qu(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new om(t.key,ot.none()):new Qr(t.key,t.data,ot.none());{const n=t.data,i=ve.empty();let s=new ne(oe.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Xi(t.key,i,new je(s.toArray()),ot.none())}}function rm(t,e,n){t instanceof Qr?function(i,s,r){const o=i.value.clone(),a=ca(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xi?function(i,s,r){if(!ti(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=ca(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(Yu(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function en(t,e,n,i){return t instanceof Qr?function(s,r,o,a){if(!ti(s.precondition,r))return o;const c=s.value.clone(),u=ua(s.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof Xi?function(s,r,o,a){if(!ti(s.precondition,r))return o;const c=ua(s.fieldTransforms,a,r),u=r.data;return u.setAll(Yu(s)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,i):function(s,r,o){return ti(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function aa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ot(n,i,(s,r)=>sm(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qr extends Wr{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xi extends Wr{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Yu(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function ca(t,e,n){const i=new Map;H(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,nm(o,a,n[s]))}return i}function ua(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,tm(r,o,e))}return i}class om extends Wr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&rm(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=en(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=en(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=zu();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=Qu(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),b())}isEqual(e){return this.batchId===e.batchId&&Ot(this.mutations,e.mutations,(n,i)=>aa(n,i))&&Ot(this.baseMutations,e.baseMutations,(n,i)=>aa(n,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,k;function Ju(t){if(t===void 0)return Me("GRPC error has no .code"),g.UNKNOWN;switch(t){case $.OK:return g.OK;case $.CANCELLED:return g.CANCELLED;case $.UNKNOWN:return g.UNKNOWN;case $.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case $.INTERNAL:return g.INTERNAL;case $.UNAVAILABLE:return g.UNAVAILABLE;case $.UNAUTHENTICATED:return g.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case $.NOT_FOUND:return g.NOT_FOUND;case $.ALREADY_EXISTS:return g.ALREADY_EXISTS;case $.PERMISSION_DENIED:return g.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case $.ABORTED:return g.ABORTED;case $.OUT_OF_RANGE:return g.OUT_OF_RANGE;case $.UNIMPLEMENTED:return g.UNIMPLEMENTED;case $.DATA_LOSS:return g.DATA_LOSS;default:return C()}}(k=$||($={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Gn}static getOrCreateInstance(){return Gn===null&&(Gn=new Yr),Gn}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Gn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=new St([4294967295,4294967295],0);function la(t){const e=lm().encode(t),n=new fg;return n.update(e),new Uint8Array(n.digest())}function ha(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new St([n,i],0),new St([s,r],0)]}class Jr{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Gt(`Invalid padding: ${n}`);if(i<0)throw new Gt(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Gt(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Gt(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=St.fromNumber(this.It)}Et(e,n,i){let s=e.add(n.multiply(St.fromNumber(i)));return s.compare(hm)===1&&(s=new St([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=la(e),[i,s]=ha(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);if(!this.At(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Jr(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=la(e),[i,s]=ha(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Gt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,xn.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Zi(S.min(),s,new F(D),Qe(),b())}}class xn{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new xn(i,n,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,i,s){this.Pt=e,this.removedTargetIds=n,this.key=i,this.bt=s}}class Xu{constructor(e,n){this.targetId=e,this.Vt=n}}class Zu{constructor(e,n,i=se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class da{constructor(){this.St=0,this.Dt=pa(),this.Ct=se.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=b(),n=b(),i=b();return this.Dt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:C()}}),new xn(this.Ct,this.xt,e,n,i)}Ft(){this.Nt=!1,this.Dt=pa()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class dm{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Qe(),this.zt=fa(),this.Wt=new F(D)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const i=this.Zt(n);switch(e.state){case 0:this.te(n)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(n);break;case 3:this.te(n)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),i.$t(e.resumeToken));break;default:C()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((i,s)=>{this.te(s)&&n(s)})}ne(e){var n;const i=e.targetId,s=e.Vt.count,r=this.se(i);if(r){const o=r.target;if(Gs(o))if(s===0){const a=new w(o.path);this.Yt(i,a,Z.newNoDocument(a,S.min()))}else H(s===1);else{const a=this.ie(i);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(i);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,u)}(n=Yr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var f,p,E,A,v,V;const j={localCacheCount:l,existenceFilterCount:h.count},P=h.unchangedNames;return P&&(j.bloomFilter={applied:u===0,hashCount:(f=P==null?void 0:P.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(A=(E=(p=P==null?void 0:P.bits)===null||p===void 0?void 0:p.bitmap)===null||E===void 0?void 0:E.length)!==null&&A!==void 0?A:0,padding:(V=(v=P==null?void 0:P.bits)===null||v===void 0?void 0:v.padding)!==null&&V!==void 0?V:0}),j}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let c,u;try{c=ht(r).toUint8Array()}catch(l){if(l instanceof Mu)return Dt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Jr(c,o,a)}catch(l){return Dt(l instanceof Gt?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:s!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(e,r,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Gs(a.target)){const c=new w(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Z.newNoDocument(c,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let i=b();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const s=new Zi(e,n,this.Wt,this.jt,i);return this.jt=Qe(),this.zt=fa(),this.Wt=new F(D),s}Jt(e,n){if(!this.te(e))return;const i=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,i),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),i&&(this.jt=this.jt.insert(n,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new da,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ne(D),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||y("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new da),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function fa(){return new F(w.comparator)}function pa(){return new F(w.comparator)}const fm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gm=(()=>({and:"AND",or:"OR"}))();class mm{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xs(t,e){return t.useProto3Json||Ki(e)?e:{value:e}}function ym(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kt(t){return H(!!t),S.fromTimestamp(function(e){const n=We(e);return new ae(n.seconds,n.nanos)}(t))}function wm(t,e){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function el(t){const e=x.fromString(t);return H(sl(e)),e}function ws(t,e){const n=el(e);if(n.get(1)!==t.databaseId.projectId)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new w(tl(n))}function Zs(t,e){return wm(t.databaseId,e)}function _m(t){const e=el(t);return e.length===4?x.emptyPath():tl(e)}function ga(t){return new x(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tl(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Em(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(H(u===void 0||typeof u=="string"),se.fromBase64String(u||"")):(H(u===void 0||u instanceof Uint8Array),se.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?g.UNKNOWN:Ju(c.code);return new _(u,c.message||"")}(o);n=new Zu(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=ws(t,i.document.name),r=kt(i.document.updateTime),o=i.document.createTime?kt(i.document.createTime):S.min(),a=new ve({mapValue:{fields:i.document.fields}}),c=Z.newFoundDocument(s,r,o,a),u=i.targetIds||[],l=i.removedTargetIds||[];n=new ni(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=ws(t,i.document),r=i.readTime?kt(i.readTime):S.min(),o=Z.newNoDocument(s,r),a=i.removedTargetIds||[];n=new ni([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=ws(t,i.document),r=i.removedTargetIds||[];n=new ni([],r,s,null)}else{if(!("filter"in e))return C();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new um(s,r),a=i.targetId;n=new Xu(a,o)}}return n}function Im(t,e){return{documents:[Zs(t,e.path)]}}function Tm(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Zs(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zs(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return il(Se.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:yt(l.field),direction:Am(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Xs(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Sm(t){let e=_m(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){H(i===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=nl(l);return h instanceof Se&&Fu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Xt(vt(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ki(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new _i(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new _i(f,h)}(n.endAt)),jg(e,s,o,r,a,"F",c,u)}function Cm(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nl(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vt(e.unaryFilter.field);return q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=vt(e.unaryFilter.field);return q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vt(e.unaryFilter.field);return q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=vt(e.unaryFilter.field);return q.create(r,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):t.fieldFilter!==void 0?function(e){return q.create(vt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Se.create(e.compositeFilter.filters.map(n=>nl(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return C()}}(e.compositeFilter.op))}(t):C()}function Am(t){return fm[t]}function km(t){return pm[t]}function bm(t){return gm[t]}function yt(t){return{fieldPath:t.canonicalString()}}function vt(t){return oe.fromServerFormat(t.fieldPath)}function il(t){return t instanceof q?function(e){if(e.op==="=="){if(ta(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NAN"}};if(ea(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ta(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NOT_NAN"}};if(ea(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yt(e.field),op:km(e.op),value:e.value}}}(t):t instanceof Se?function(e){const n=e.getFilters().map(i=>il(i));return n.length===1?n[0]:{compositeFilter:{op:bm(e.op),filters:n}}}(t):C()}function sl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,i,s,r=S.min(),o=S.min(),a=se.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new qe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.fe=e}}function Nm(t){const e=Sm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ws(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.rn=new Om}addToCollectionParentIndex(e,n){return this.rn.add(n),d.resolve()}getCollectionParents(e,n){return d.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return d.resolve()}deleteFieldIndex(e,n){return d.resolve()}getDocumentsMatchingTarget(e,n){return d.resolve(null)}getIndexType(e,n){return d.resolve(0)}getFieldIndexes(e,n){return d.resolve([])}getNextCollectionGroupToUpdate(e){return d.resolve(null)}getMinOffset(e,n){return d.resolve(Ge.min())}getMinOffsetFromCollectionGroup(e,n){return d.resolve(Ge.min())}updateCollectionGroup(e,n,i){return d.resolve()}updateIndexEntries(e,n){return d.resolve()}}class Om{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ne(x.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ne(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Mt(0)}static Mn(){return new Mt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.changes=new $t(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Z.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?d.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&en(i.mutation,s,je.empty(),ae.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,b()).next(()=>i))}getLocalViewOfDocuments(e,n,i=b()){const s=it();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Kt();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=it();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,b()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Qe();const o=Zt(),a=Zt();return n.forEach((c,u)=>{const l=i.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Xi)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),en(l.mutation,u,l.mutation.getFieldMask(),ae.now())):o.set(u.key,je.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Lm(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Zt();let s=new F((o,a)=>o-a),r=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=i.get(c)||je.empty();l=a.applyToLocalView(u,l),i.set(c,l);const h=(s.get(a.batchId)||b()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=zu();l.forEach(f=>{if(!r.has(f)){const p=Qu(n.get(f),i.get(f));p!==null&&h.set(f,p),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return d.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):d.resolve(it());let a=-1,c=r;return o.next(u=>d.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?d.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,b())).next(l=>({batchId:a,changes:Qg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new w(n)).next(i=>{let s=Kt();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Kt();return this.indexManager.getCollectionParents(e,s).next(o=>d.forEach(o,a=>{const c=function(u,l){return new Wi(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Z.newInvalidDocument(u)))});let o=Kt();return r.forEach((a,c)=>{const u=s.get(a);u!==void 0&&en(u.mutation,c,je.empty(),ae.now()),Yi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return d.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var i;return this.cs.set(n.id,{id:(i=n).id,version:i.version,createTime:kt(i.createTime)}),d.resolve()}getNamedQuery(e,n){return d.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(i){return{name:i.name,query:Nm(i.bundledQuery),readTime:kt(i.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.overlays=new F(w.comparator),this.ls=new Map}getOverlay(e,n){return d.resolve(this.overlays.get(n))}getOverlays(e,n){const i=it();return d.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.we(e,n,r)}),d.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),d.resolve()}getOverlaysForCollection(e,n,i){const s=it(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return d.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new F((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let l=r.get(u.largestBatchId);l===null&&(l=it(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=it(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return d.resolve(a)}we(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new cm(n,i));let r=this.ls.get(n);r===void 0&&(r=b(),this.ls.set(n,r)),this.ls.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.fs=new ne(z.ds),this.ws=new ne(z._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const i=new z(e,n);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ys(new z(e,n))}ps(e,n){e.forEach(i=>this.removeReference(i,n))}Is(e){const n=new w(new x([])),i=new z(n,e),s=new z(n,e+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new w(new x([])),i=new z(n,e),s=new z(n,e+1);let r=b();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new z(e,0),i=this.fs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class z{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return w.comparator(e.key,n.key)||D(e.As,n.As)}static _s(e,n){return D(e.As,n.As)||w.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ne(z.ds)}checkEmpty(e){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new am(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new z(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(e,n){return d.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.bs(i),r=s<0?0:s;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new z(n,0),s=new z(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.Ps(o.As);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ne(D);return n.forEach(s=>{const r=new z(s,0),o=new z(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.As)})}),d.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;w.isDocumentKey(r)||(r=r.child(""));const o=new z(new w(r),0);let a=new ne(D);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.As)),!0)},o),d.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){H(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return d.forEach(n.mutations,s=>{const r=new z(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,n){const i=new z(n,0),s=this.Rs.firstAfterOrEqual(i);return d.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,d.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.Ds=e,this.docs=new F(w.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return d.resolve(i?i.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(e,n){let i=Qe();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Z.newInvalidDocument(s))}),d.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Qe();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Cg(Sg(l),i)<=0||(s.has(l.key)||Yi(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return d.resolve(r)}getAllFromCollectionGroup(e,n,i,s){C()}Cs(e,n){return d.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new $m(this)}getSize(e){return d.resolve(this.size)}}class $m extends Pm{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),d.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.persistence=e,this.xs=new $t(n=>zr(n),Kr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Xr,this.targetCount=0,this.Ms=Mt.kn()}forEachTarget(e,n){return this.xs.forEach((i,s)=>n(s)),d.resolve()}getLastRemoteSnapshotVersion(e){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return d.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ns&&(this.Ns=n),d.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Mt(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,d.resolve()}updateTargetData(e,n){return this.Fn(n),d.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),d.waitFor(r).next(()=>s)}getTargetCount(e){return d.resolve(this.targetCount)}getTargetData(e,n){const i=this.xs.get(n)||null;return d.resolve(i)}addMatchingKeys(e,n,i){return this.ks.gs(n,i),d.resolve()}removeMatchingKeys(e,n,i){this.ks.ps(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),d.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ks.Es(n);return d.resolve(i)}containsKey(e,n){return d.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.$s={},this.overlays={},this.Os=new Br(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Bm(this),this.indexManager=new Dm,this.remoteDocumentCache=function(i){return new Vm(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new Rm(n),this.qs=new xm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Um,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.$s[e.toKey()];return i||(i=new Fm(n,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,i){y("MemoryPersistence","Starting transaction:",e);const s=new qm(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,n){return d.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,n)))}}class qm extends kg{constructor(e){super(),this.currentSequenceNumber=e}}class Zr{constructor(e){this.persistence=e,this.Qs=new Xr,this.js=null}static zs(e){return new Zr(e)}get Ws(){if(this.js)return this.js;throw C()}addReference(e,n,i){return this.Qs.addReference(i,n),this.Ws.delete(i.toString()),d.resolve()}removeReference(e,n,i){return this.Qs.removeReference(i,n),this.Ws.add(i.toString()),d.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),d.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Ws,i=>{const s=w.fromPath(i);return this.Hs(e,s).next(r=>{r||n.removeEntry(s,S.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(i=>{i?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return d.or([()=>d.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Fi=i,this.Bi=s}static Li(e,n){let i=b(),s=b();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new eo(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ki(e,n).next(r=>r||this.Gi(e,n,s,i)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(ra(n))return d.resolve(null);let i=xe(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ws(n,null,"F"),i=xe(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=b(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.ji(n,a);return this.zi(n,u,o,c.readTime)?this.Ki(e,Ws(n,null,"F")):this.Wi(e,u,n,c)}))})))}Gi(e,n,i,s){return ra(n)||s.isEqual(S.min())?this.Qi(e,n):this.Ui.getDocuments(e,i).next(r=>{const o=this.ji(n,r);return this.zi(n,o,i,s)?this.Qi(e,n):(Yo()<=R.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qs(n)),this.Wi(e,o,n,Tg(s,-1)))})}ji(e,n){let i=new ne(qu(e));return n.forEach((s,r)=>{Yi(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,n){return Yo()<=R.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ge.min())}Wi(e,n,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new F(D),this.Yi=new $t(r=>zr(r),Kr),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mm(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Km(t,e,n,i){return new zm(t,e,n,i)}async function rl(t,e){const n=N(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.tr(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=b();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(i,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function ol(t){const e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Gm(t,e){const n=N(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,l.addedDocuments,h)));let p=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(se.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,i)),s=s.insert(h,p),function(E,A,v){return E.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,p,l)&&a.push(n.Bs.updateTargetData(r,p))});let c=Qe(),u=b();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(Wm(r,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!i.isEqual(S.min())){const l=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(l)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Ji=s,r))}function Wm(t,e,n){let i=b(),s=b();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Qe();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:s}})}function Qm(t,e){const n=N(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Bs.getTargetData(i,e).next(r=>r?(s=r,d.resolve(s)):n.Bs.allocateTargetId(i).next(o=>(s=new qe(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function er(t,e,n){const i=N(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Mn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function ma(t,e,n){const i=N(t);let s=S.min(),r=b();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=N(a),h=l.Yi.get(u);return h!==void 0?d.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(i,o,xe(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?s:S.min(),n?r:b())).next(a=>(Ym(i,Kg(e),a),{documents:a,ir:r})))}function Ym(t,e,n){let i=t.Xi.get(e)||S.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Xi.set(e,i)}class ya{constructor(){this.activeTargetIds=Xg()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jm{constructor(){this.Hr=new ya,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,i){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ya,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn=null;function _s(){return Wn===null?Wn=268435456+Math.round(2147483648*Math.random()):Wn++,"0x"+Wn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="WebChannelConnection";class ty extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,i,s,r){const o=_s(),a=this.To(e,n);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.Eo(c,s,r),this.Ao(e,a,c,i).then(u=>(y("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Dt("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",i),u})}vo(e,n,i,s,r,o){return this.Io(e,n,i,s,r)}Eo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}To(e,n){const i=Zm[e];return`${this.mo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,i,s){const r=_s();return new Promise((o,a)=>{const c=new dg;c.setWithCredentials(!0),c.listenOnce(ug.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ys.NO_ERROR:const l=c.getResponseJson();y(J,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(l)),o(l);break;case ys.TIMEOUT:y(J,`RPC '${e}' ${r} timed out`),a(new _(g.DEADLINE_EXCEEDED,"Request time out"));break;case ys.HTTP_ERROR:const h=c.getStatus();if(y(J,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const E=function(A){const v=A.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(v)>=0?v:g.UNKNOWN}(p.status);a(new _(E,p.message))}else a(new _(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(g.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{y(J,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);y(J,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",u,i,15)})}Ro(e,n,i){const s=_s(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ag(),a=cg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new hg({})),this.Eo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const l=r.join("");y(J,`Creating RPC '${e}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,p=!1;const E=new ey({ro:v=>{p?y(J,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(f||(y(J,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),y(J,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},oo:()=>h.close()}),A=(v,V,j)=>{v.listen(V,P=>{try{j(P)}catch(L){setTimeout(()=>{throw L},0)}})};return A(h,Hn.EventType.OPEN,()=>{p||y(J,`RPC '${e}' stream ${s} transport opened.`)}),A(h,Hn.EventType.CLOSE,()=>{p||(p=!0,y(J,`RPC '${e}' stream ${s} transport closed`),E.wo())}),A(h,Hn.EventType.ERROR,v=>{p||(p=!0,Dt(J,`RPC '${e}' stream ${s} transport errored:`,v),E.wo(new _(g.UNAVAILABLE,"The operation could not be completed")))}),A(h,Hn.EventType.MESSAGE,v=>{var V;if(!p){const j=v.data[0];H(!!j);const P=j,L=P.error||((V=P[0])===null||V===void 0?void 0:V.error);if(L){y(J,`RPC '${e}' stream ${s} received error:`,L);const le=L.status;let fe=function(Ze){const gt=$[Ze];if(gt!==void 0)return Ju(gt)}(le),Xe=L.message;fe===void 0&&(fe=g.INTERNAL,Xe="Unknown error status: "+le+" with message "+L.message),p=!0,E.wo(new _(fe,Xe)),h.close()}else y(J,`RPC '${e}' stream ${s} received:`,j),E._o(j)}}),A(a,lg.STAT_EVENT,v=>{v.stat===Wo.PROXY?y(J,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Wo.NOPROXY&&y(J,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function Es(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){return new mm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,i,s,r,o,a,c){this.ii=e,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new cl(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Me(n.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===n&&this.Zo(i,s)},i=>{e(()=>{const s=new _(g.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,n){const i=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iy extends ny{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=Em(this.serializer,e),i=function(s){if(!("targetChange"in s))return S.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?kt(r.readTime):S.min()}(e);return this.listener.nu(n,i)}su(e){const n={};n.database=ga(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;if(o=Gs(a)?{documents:Im(s,a)}:{query:Tm(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=vm(s,r.resumeToken);const c=Xs(s,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(S.min())>0){o.readTime=ym(s,r.snapshotVersion.toTimestamp());const c=Xs(s,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const i=Cm(this.serializer,e);i&&(n.labels=i),this.Wo(n)}iu(e){const n={};n.database=ga(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(g.UNKNOWN,s.toString())})}vo(e,n,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(g.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class ry{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Me(n),this.mu=!1):y("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{Fn(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.vu.add(4),await Un(c),c.bu.set("Unknown"),c.vu.delete(4),await es(c)}(this))})}),this.bu=new ry(i,s)}}async function es(t){if(Fn(t))for(const e of t.Ru)await e(!0)}async function Un(t){for(const e of t.Ru)await e(!1)}function ul(t,e){const n=N(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),io(n)?no(n):Bt(n).Ko()&&to(n,e))}function ll(t,e){const n=N(t),i=Bt(n);n.Au.delete(e),i.Ko()&&hl(n,e),n.Au.size===0&&(i.Ko()?i.jo():Fn(n)&&n.bu.set("Unknown"))}function to(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(S.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bt(t).su(e)}function hl(t,e){t.Vu.qt(e),Bt(t).iu(e)}function no(t){t.Vu=new dm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Bt(t).start(),t.bu.gu()}function io(t){return Fn(t)&&!Bt(t).Uo()&&t.Au.size>0}function Fn(t){return N(t).vu.size===0}function dl(t){t.Vu=void 0}async function ay(t){t.Au.forEach((e,n)=>{to(t,e)})}async function cy(t,e){dl(t),io(t)?(t.bu.Iu(e),no(t)):t.bu.set("Unknown")}async function uy(t,e,n){if(t.bu.set("Online"),e instanceof Zu&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Au.delete(o),i.Vu.removeTarget(o))}(t,e)}catch(i){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await wa(t,i)}else if(e instanceof ni?t.Vu.Ht(e):e instanceof Xu?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(S.min()))try{const i=await ol(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.Au.get(c);u&&s.Au.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const u=s.Au.get(a);if(!u)return;s.Au.set(a,u.withResumeToken(se.EMPTY_BYTE_STRING,u.snapshotVersion)),hl(s,a);const l=new qe(u.target,a,c,u.sequenceNumber);to(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){y("RemoteStore","Failed to raise snapshot:",i),await wa(t,i)}}async function wa(t,e,n){if(!Mn(e))throw e;t.vu.add(1),await Un(t),t.bu.set("Offline"),n||(n=()=>ol(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await es(t)})}async function _a(t,e){const n=N(t);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const i=Fn(n);n.vu.add(3),await Un(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await es(n)}async function ly(t,e){const n=N(t);e?(n.vu.delete(2),await es(n)):e||(n.vu.add(2),await Un(n),n.bu.set("Unknown"))}function Bt(t){return t.Su||(t.Su=function(e,n,i){const s=N(e);return s.fu(),new iy(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:ay.bind(null,t),ao:cy.bind(null,t),nu:uy.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),io(t)?no(t):t.bu.set("Unknown")):(await t.Su.stop(),dl(t))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new so(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fl(t,e){if(Me("AsyncQueue",`${e}: ${t}`),Mn(t))return new _(g.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.comparator=e?(n,i)=>e(n,i)||w.comparator(n.key,i.key):(n,i)=>w.comparator(n.key,i.key),this.keyedMap=Kt(),this.sortedSet=new F(this.comparator)}static emptySet(e){return new bt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new bt;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.Cu=new F(w.comparator)}track(e){const n=e.doc.key,i=this.Cu.get(n);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(n):e.type===1&&i.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):C():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,i)=>{e.push(i)}),e}}class xt{constructor(e,n,i,s,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xt(e,n,bt.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.Nu=void 0,this.listeners=[]}}class dy{constructor(){this.queries=new $t(e=>ju(e),Qi),this.onlineState="Unknown",this.ku=new Set}}async function fy(t,e){const n=N(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new hy),s)try{r.Nu=await n.onListen(i)}catch(o){const a=fl(o,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&ro(n)}async function py(t,e){const n=N(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function gy(t,e){const n=N(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(s)&&(i=!0);o.Nu=s}}i&&ro(n)}function my(t,e,n){const i=N(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function ro(t){t.ku.forEach(e=>{e.next()})}class yy{constructor(e,n,i){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new xt(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=xt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.key=e}}class gl{constructor(e){this.key=e}}class vy{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=b(),this.mutatedKeys=b(),this.tc=qu(e),this.ec=new bt(this.tc)}get nc(){return this.Yu}sc(e,n){const i=n?n.ic:new Ea,s=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),p=Yi(this.query,h)?h:null,E=!!f&&this.mutatedKeys.has(f.key),A=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?E!==A&&(i.track({type:3,doc:p}),v=!0):this.rc(f,p)||(i.track({type:2,doc:p}),v=!0,(c&&this.tc(p,c)>0||u&&this.tc(p,u)<0)&&(a=!0)):!f&&p?(i.track({type:0,doc:p}),v=!0):f&&!p&&(i.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(p?(o=o.add(p),r=A?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),i.track({type:1,doc:l})}return{ec:o,ic:i,zi:a,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((u,l)=>function(h,f){const p=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return p(h)-p(f)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(i);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new xt(this.query,e.ec,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ea,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=b(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const n=[];return e.forEach(i=>{this.Zu.has(i)||n.push(new gl(i))}),this.Zu.forEach(i=>{e.has(i)||n.push(new pl(i))}),n}hc(e){this.Yu=e.ir,this.Zu=b();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return xt.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class wy{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class _y{constructor(e){this.key=e,this.fc=!1}}class Ey{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new $t(a=>ju(a),Qi),this._c=new Map,this.mc=new Set,this.gc=new F(w.comparator),this.yc=new Map,this.Ic=new Xr,this.Tc={},this.Ec=new Map,this.Ac=Mt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Iy(t,e){const n=Ry(t);let i,s;const r=n.wc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const o=await Qm(n.localStore,xe(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await Ty(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&ul(n.remoteStore,o)}return s}async function Ty(t,e,n,i,s){t.Rc=(h,f,p)=>async function(E,A,v,V){let j=A.view.sc(v);j.zi&&(j=await ma(E.localStore,A.query,!1).then(({documents:le})=>A.view.sc(le,j)));const P=V&&V.targetChanges.get(A.targetId),L=A.view.applyChanges(j,E.isPrimaryClient,P);return Ta(E,A.targetId,L.cc),L.snapshot}(t,h,f,p);const r=await ma(t.localStore,e,!0),o=new vy(e,r.ir),a=o.sc(r.documents),c=xn.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);Ta(t,n,u.cc);const l=new wy(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Sy(t,e){const n=N(t),i=n.wc.get(e),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter(r=>!Qi(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await er(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),ll(n.remoteStore,i.targetId),tr(n,i.targetId)}).catch($r)):(tr(n,i.targetId),await er(n.localStore,i.targetId,!0))}async function ml(t,e){const n=N(t);try{const i=await Gm(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.yc.get(r);o&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?H(o.fc):s.removedDocuments.size>0&&(H(o.fc),o.fc=!1))}),await vl(n,i,e)}catch(i){await $r(i)}}function Ia(t,e,n){const i=N(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&ro(a)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Cy(t,e,n){const i=N(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.yc.get(e),r=s&&s.key;if(r){let o=new F(w.comparator);o=o.insert(r,Z.newNoDocument(r,S.min()));const a=b().add(r),c=new Zi(S.min(),new Map,new F(D),o,a);await ml(i,c),i.gc=i.gc.remove(r),i.yc.delete(e),oo(i)}else await er(i.localStore,e,!1).then(()=>tr(i,e,n)).catch($r)}function tr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.wc.delete(i),n&&t.dc.Pc(i,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(i=>{t.Ic.containsKey(i)||yl(t,i)})}function yl(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(ll(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),oo(t))}function Ta(t,e,n){for(const i of n)i instanceof pl?(t.Ic.addReference(i.key,e),Ay(t,i)):i instanceof gl?(y("SyncEngine","Document no longer in limbo: "+i.key),t.Ic.removeReference(i.key,e),t.Ic.containsKey(i.key)||yl(t,i.key)):C()}function Ay(t,e){const n=e.key,i=n.path.canonicalString();t.gc.get(n)||t.mc.has(i)||(y("SyncEngine","New document in limbo: "+n),t.mc.add(i),oo(t))}function oo(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new w(x.fromString(e)),i=t.Ac.next();t.yc.set(i,new _y(n)),t.gc=t.gc.insert(n,i),ul(t.remoteStore,new qe(xe(Gr(n.path)),i,"TargetPurposeLimboResolution",Br.ct))}}async function vl(t,e,n){const i=N(t),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,c)=>{o.push(i.Rc(c,e,n).then(u=>{if((u||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=eo.Li(c.targetId,u);r.push(l)}}))}),await Promise.all(o),i.dc.nu(s),await async function(a,c){const u=N(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(c,h=>d.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>d.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Mn(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ji.get(h),p=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,E)}}}(i.localStore,r))}async function ky(t,e){const n=N(t);if(!n.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const i=await rl(n.localStore,e);n.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new _(g.CANCELLED,r))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await vl(n,i.er)}}function by(t,e){const n=N(t),i=n.yc.get(e);if(i&&i.fc)return b().add(i.key);{let s=b();const r=n._c.get(e);if(!r)return s;for(const o of r){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function Ry(t){const e=N(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ml.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=by.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cy.bind(null,e),e.dc.nu=gy.bind(null,e.eventManager),e.dc.Pc=my.bind(null,e.eventManager),e}class Sa{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=al(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Km(this.persistence,new Hm,e.initialUser,this.serializer)}createPersistence(e){return new jm(Zr.zs,this.serializer)}createSharedClientState(e){return new Jm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ny{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ia(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ky.bind(null,this.syncEngine),await ly(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dy}createDatastore(e){const n=al(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new ty(s));var s;return function(r,o,a,c){return new sy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>Ia(this.syncEngine,a,0),o=va.D()?new va:new Xm,new oy(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,c,u){const l=new Ey(i,s,r,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=N(e);y("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Un(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Me("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=X.UNAUTHENTICATED,this.clientId=Lu.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=fl(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Is(t,e){t.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await rl(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ca(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ly(t);y("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>_a(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>_a(e.remoteStore,r)),t._onlineComponents=e}function Py(t){return t.name==="FirebaseError"?t.code===g.FAILED_PRECONDITION||t.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ly(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Is(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Py(n))throw n;Dt("Error using user provided cache. Falling back to memory cache: "+n),await Is(t,new Sa)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Is(t,new Sa);return t._offlineComponents}async function My(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Ca(t,t._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Ca(t,new Ny))),t._onlineComponents}async function Aa(t){const e=await My(t),n=e.eventManager;return n.onListen=Iy.bind(null,e.syncEngine),n.onUnlisten=Sy.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t,e,n){if(!n)throw new _(g.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Uy(t,e,n,i){if(e===!0&&i===!0)throw new _(g.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ba(t){if(!w.isDocumentKey(t))throw new _(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":C()}function ii(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fy(t);throw new _(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new _(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wl((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class ao{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ra({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ra(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pg;switch(n.type){case"firstParty":return new vg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ka.get(e);n&&(y("ComponentProvider","Removing Datastore"),ka.delete(e),n.terminate())}(this),Promise.resolve()}}function Vy(t,e,n,i={}){var s;const r=(t=ii(t,ao))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Dt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=X.MOCK_USER;else{a=Ka(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new _(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new X(u)}t._authCredentials=new gg(new Pu(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class ts{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class yn extends ts{constructor(e,n,i){super(e,n,Gr(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new w(e))}withConverter(e){return new yn(this.firestore,e,this._path)}}function $y(t,e,...n){if(t=ue(t),arguments.length===1&&(e=Lu.A()),xy("doc","path",e),t instanceof ao){const i=x.fromString(e,...n);return ba(i),new Ne(t,null,new w(i))}{if(!(t instanceof Ne||t instanceof yn))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(x.fromString(e,...n));return ba(i),new Ne(t.firestore,t instanceof yn?t.converter:null,new w(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new cl(this,"async_queue_retry"),this.Xc=()=>{const n=Es();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Es();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Es();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ct;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Mn(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Me("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=so.createAndSchedule(this,e,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&C()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Na(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class nr extends ao{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new By,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_l(this),this._firestoreClient.terminate()}}function jy(t,e){const n=typeof t=="object"?t:ki(),i=typeof t=="string"?t:e||"(default)",s=_n(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=or("firestore");r&&Vy(s,...r)}return s}function qy(t){return t._firestoreClient||_l(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _l(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,c,u){return new Ng(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,wl(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Oy(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ti(se.fromBase64String(e))}catch(n){throw new _(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ti(se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}const zy=new RegExp("[~\\*/\\[\\]]");function Ky(t,e,n){if(e.search(zy)>=0)throw Da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new El(...e.split("."))._internalPath}catch{throw Da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Da(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new _(g.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Gy extends Il{data(){return super.data()}}function Tl(t,e){return typeof e=="string"?Ky(t,e):e instanceof El?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qy{convertValue(e,n="none"){switch(dt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return B(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw C()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Gi(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Hy(B(e.latitude),B(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=qr(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(pn(e));default:return null}}convertTimestamp(e){const n=We(e);return new ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=x.fromString(e);H(sl(i));const s=new gn(i.get(1),i.get(3)),r=new w(i.popFirst(5));return s.isEqual(n)||Me(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sl extends Il{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Tl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class si extends Sl{data(e={}){return super.data(e)}}class Yy{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Wt(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new si(this._firestore,this._userDataWriter,i.key,i,new Wt(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new si(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Wt(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new si(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Wt(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Jy(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Jy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}class Cl extends Qy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ti(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function Xy(t,...e){var n,i,s;t=ue(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Na(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Na(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof Ne)u=ii(t.firestore,nr),l=Gr(t._key.path),c={next:h=>{e[o]&&e[o](Zy(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ii(t,ts);u=ii(h.firestore,nr),l=h._query;const f=new Cl(u);c={next:p=>{e[o]&&e[o](new Yy(u,f,h,p))},error:e[o+1],complete:e[o+2]},Wy(t._query)}return function(h,f,p,E){const A=new Dy(E),v=new yy(f,A,p);return h.asyncQueue.enqueueAndForget(async()=>fy(await Aa(h),v)),()=>{A.Dc(),h.asyncQueue.enqueueAndForget(async()=>py(await Aa(h),v))}}(qy(u),l,a,c)}function Zy(t,e,n){const i=n.docs.get(e._key),s=new Cl(t);return new Sl(t,s,e._key,i,new Wt(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Vt=n})(ft),Ke(new De("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new nr(new mg(n.getProvider("auth-internal")),new _g(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),de(Qo,"3.13.0",t),de(Qo,"3.13.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="firebasestorage.googleapis.com",ev="storageBucket",tv=2*60*1e3,nv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends me{constructor(e,n,i=0){super(Ts(e),`Firebase Storage: ${n} (${Ts(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ts(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function Ts(t){return"storage/"+t}function iv(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae(Ce.UNKNOWN,t)}function sv(){return new Ae(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rv(){return new Ae(Ce.CANCELED,"User canceled the upload/download.")}function ov(t){return new Ae(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function av(t){return new Ae(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Oa(t){return new Ae(Ce.INVALID_ARGUMENT,t)}function kl(){return new Ae(Ce.APP_DELETED,"The Firebase app was deleted.")}function cv(t){return new Ae(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=pe.makeFromUrl(e,n)}catch{return new pe(e,"")}if(i.path==="")return i;throw av(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),E={bucket:1,path:3},A=n===Al?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",V=new RegExp(`^https?://${A}/${s}/${v}`,"i"),P=[{regex:a,indices:c,postModify:r},{regex:p,indices:E,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<P.length;L++){const le=P[L],fe=le.regex.exec(e);if(fe){const Xe=fe[le.indices.bucket];let Ze=fe[le.indices.path];Ze||(Ze=""),i=new pe(Xe,Ze),le.postModify(i);break}}if(i==null)throw ov(e);return i}}class uv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...v){u||(u=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(p,c())},v)}function f(){r&&clearTimeout(r)}function p(v,...V){if(u){f();return}if(v){f(),l.call(null,v,...V);return}if(c()||o){f(),l.call(null,v,...V);return}i<64&&(i*=2);let P;a===1?(a=2,P=0):P=(i+Math.random())*1e3,h(P)}let E=!1;function A(v){E||(E=!0,f(),!u&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,A(!0)},n),A}function hv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){return t!==void 0}function Pa(t,e,n,i){if(i<e)throw Oa(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Oa(`Invalid value for '${t}'. Expected ${n} or less.`)}function fv(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Si||(Si={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,i,s,r,o,a,c,u,l,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,E)=>{this.resolve_=p,this.reject_=E,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Qn(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Si.NO_ERROR,c=r.getStatus();if(!a||pv(c,this.additionalRetryCodes_)&&this.retry){const l=r.getErrorCode()===Si.ABORT;i(!1,new Qn(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;i(!0,new Qn(u,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());dv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=iv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?kl():rv();o(c)}else{const c=sv();o(c)}};this.canceled_?n(!1,new Qn(!1,null,!0)):this.backoffId_=lv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qn{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function mv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _v(t,e,n,i,s,r,o=!0){const a=fv(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return vv(u,e),mv(u,n),yv(u,r),wv(u,i),new gv(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Iv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this._service=e,n instanceof pe?this._location=n:this._location=pe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ci(e,n)}get root(){const e=new pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iv(this._location.path)}get storage(){return this._service}get parent(){const e=Ev(this._location.path);if(e===null)return null;const n=new pe(this._location.bucket,e);return new Ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw cv(e)}}function La(t,e){const n=e==null?void 0:e[ev];return n==null?null:pe.makeFromBucketSpec(n,t)}function Tv(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken=typeof s=="string"?s:Ka(s,t.app.options.projectId))}class Sv{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Al,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tv,this._maxUploadRetryTime=nv,this._requests=new Set,s!=null?this._bucket=pe.makeFromBucketSpec(s,this._host):this._bucket=La(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pe.makeFromBucketSpec(this._url,e):this._bucket=La(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pa("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pa("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ci(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new uv(kl());{const o=_v(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Ma="@firebase/storage",xa="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="storage";function Cv(t=ki(),e){t=ue(t);const i=_n(t,bl).getImmediate({identifier:e}),s=or("storage");return s&&Av(i,...s),i}function Av(t,e,n,i={}){Tv(t,e,n,i)}function kv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Sv(n,i,s,e,ft)}function bv(){Ke(new De(bl,kv,"PUBLIC").setMultipleInstances(!0)),de(Ma,xa,""),de(Ma,xa,"esm2017")}bv();function Xv(t,e=null){let n;if(!globalThis.window){const{subscribe:s}=Yn(e);return{subscribe:s}}if(!t){console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:s}=Yn(null);return{subscribe:s}}const{subscribe:i}=Yn((t==null?void 0:t.currentUser)??null,s=>(n=Gd(t,r=>{s(r)}),()=>n()));return{subscribe:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="type.googleapis.com/google.protobuf.Int64Value",Nv="type.googleapis.com/google.protobuf.UInt64Value";function Rl(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function ir(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>ir(e));if(typeof t=="function"||typeof t=="object")return Rl(t,e=>ir(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Ai(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Rv:case Nv:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Ai(e)):typeof t=="function"||typeof t=="object"?Rl(t,e=>Ai(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Rt extends me{constructor(e,n,i){super(`${co}/${e}`,n||""),this.details=i}}function Dv(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ov(t,e){let n=Dv(t),i=n,s;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!Ua[o])return new Rt("internal","internal");n=Ua[o],i=o}const a=r.message;typeof a=="string"&&(i=a),s=r.details,s!==void 0&&(s=Ai(s))}}catch{}return n==="ok"?null:new Rt(n,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:i,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="us-central1";function Lv(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new Rt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Mv{constructor(e,n,i,s,r=sr,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Pv(n,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=sr}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function xv(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Uv(t,e,n){return i=>Vv(t,e,i,n||{})}async function Fv(t,e,n,i){n["Content-Type"]="application/json";let s;try{s=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let r=null;try{r=await s.json()}catch{}return{status:s.status,json:r}}function Vv(t,e,n,i){const s=t._url(e);return $v(t,s,n,i)}async function $v(t,e,n,i){n=ir(n);const s={data:n},r={},o=await t.contextProvider.getContext(i.limitedUseAppCheckTokens);o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,c=Lv(a),u=await Promise.race([Fv(e,s,r,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!u)throw new Rt("cancelled","Firebase Functions instance was deleted.");const l=Ov(u.status,u.json);if(l)throw l;if(!u.json)throw new Rt("internal","Response is not valid JSON object.");let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new Rt("internal","Response is missing data field.");return{data:Ai(h)}}const Fa="@firebase/functions",Va="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="auth-internal",jv="app-check-internal",qv="messaging-internal";function Hv(t,e){const n=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(Bv),a=i.getProvider(qv),c=i.getProvider(jv);return new Mv(r,o,a,c,s,t)};Ke(new De(co,n,"PUBLIC").setMultipleInstances(!0)),de(Fa,Va,e),de(Fa,Va,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t=ki(),e=sr){const i=_n(ue(t),co).getImmediate({identifier:e}),s=or("functions");return s&&Kv(i,...s),i}function Kv(t,e,n){xv(ue(t),e,n)}function Gv(t,e,n){return Uv(ue(t),e,n)}Hv(fetch.bind(self));const Wv={apiKey:"AIzaSyCghesAqdvmIcnVvAc9oanMhjY8efN6vY0",authDomain:"stopgg.firebaseapp.com",projectId:"stopgg",storageBucket:"stopgg.appspot.com",messagingSenderId:"929946792108",appId:"1:929946792108:web:11e643f9409d2ef273ef09"},ns=Qa(Wv),Zv=op(ns),ew=jy(ns),tw=Cv(ns),Qv=zv(ns),nw=Gv(Qv,"submitTournament");function iw(t,e,n){const{startWith:i=null,deserialize:s=c=>c}=n||{};let r;const o=typeof e=="string"?$y(t,e):e,{subscribe:a}=Yn(i,c=>(r=Xy(o,u=>{c(u.exists()?s(u.data()):null)}),()=>r&&r()));return{subscribe:a,ref:o,id:o.id}}export{Zv as a,Jv as b,nw as c,iw as d,ew as f,tw as s,Xv as u};
