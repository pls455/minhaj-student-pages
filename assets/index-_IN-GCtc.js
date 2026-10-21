(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const jn=()=>{};var lr={};/**
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
 */const Gr=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);s<128?t[r++]=s:s<2048?(t[r++]=s>>6|192,t[r++]=s&63|128):(s&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=s>>18|240,t[r++]=s>>12&63|128,t[r++]=s>>6&63|128,t[r++]=s&63|128):(t[r++]=s>>12|224,t[r++]=s>>6&63|128,t[r++]=s&63|128)}return t},qn=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const s=e[r++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[r++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[r++],a=e[r++],p=e[r++],g=((s&7)<<18|(i&63)<<12|(a&63)<<6|p&63)-65536;t[n++]=String.fromCharCode(55296+(g>>10)),t[n++]=String.fromCharCode(56320+(g&1023))}else{const i=e[r++],a=e[r++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Hr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,p=a?e[s+1]:0,g=s+2<e.length,y=g?e[s+2]:0,b=i>>2,I=(i&3)<<4|p>>4;let w=(p&15)<<2|y>>6,P=y&63;g||(P=64,a||(w=64)),n.push(r[b],r[I],r[w],r[P])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):qn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<e.length;){const i=r[e.charAt(s++)],p=s<e.length?r[e.charAt(s)]:0;++s;const y=s<e.length?r[e.charAt(s)]:64;++s;const I=s<e.length?r[e.charAt(s)]:64;if(++s,i==null||p==null||y==null||I==null)throw new zn;const w=i<<2|p>>4;if(n.push(w),y!==64){const P=p<<4&240|y>>2;if(n.push(P),I!==64){const S=y<<6&192|I;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class zn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gn=function(e){const t=Gr(e);return Hr.encodeByteArray(t,!0)},Yt=function(e){return Gn(e).replace(/\./g,"")},Hn=function(e){try{return Hr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Wn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kn=()=>Wn().__FIREBASE_DEFAULTS__,Qn=()=>{if(typeof process>"u"||typeof lr>"u")return;const e=lr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Jn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hn(e[1]);return t&&JSON.parse(t)},Wr=()=>{try{return jn()||Kn()||Qn()||Jn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yn=e=>Wr()?.emulatorHosts?.[e],Xn=e=>{const t=Yn(e);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),n]:[t.substring(0,r),n]},Kr=()=>Wr()?.config;/**
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
 */class Zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
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
 */function ts(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Yt(JSON.stringify(r)),Yt(JSON.stringify(a)),""].join(".")}function es(){try{return typeof indexedDB=="object"}catch{return!1}}function rs(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(r){t(r)}})}/**
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
 */const ns="FirebaseError";class Tt extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=ns,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?ss(i,n):"Error",p=`${this.serviceName}: ${a} (${s}).`;return new Tt(s,p,n)}}function ss(e,t){try{let r=0,n="";for(;r<e.length;){const s=e.indexOf("{$",r);if(s===-1){n+=e.substring(r);break}const i=e.indexOf("}",s+2);if(i===-1){n+=e.substring(r);break}const a=e.substring(s+2,i),p=t[a];n+=e.substring(r,s)+(p!=null?String(p):`<${a}?>`),r=i+1}return n}catch{return e}}function Xt(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const s of r){if(!n.includes(s))return!1;const i=e[s],a=t[s];if(ur(i)&&ur(a)){if(!Xt(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!r.includes(s))return!1;return!0}function ur(e){return e!==null&&typeof e=="object"}/**
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
 */function wt(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Jr(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function is(e){return(await fetch(e,{credentials:"include"})).ok}class Pt{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ht="[DEFAULT]";/**
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
 */class os{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new Zn;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:r});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cs(t))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=ht){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ht){return this.instances.has(t)}getOptions(t=ht){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[i,a]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(i);n===p&&a.resolve(s)}return s}onInit(t,r){const n=this.normalizeInstanceIdentifier(r),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&t(i,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(n)for(const s of n)try{s(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:as(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=ht){return this.component?this.component.multipleInstances?t:ht:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function as(e){return e===ht?void 0:e}function cs(e){return e.instantiationMode==="EAGER"}/**
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
 */class ls{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new os(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const us={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},hs=A.INFO,fs={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},ds=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),s=fs[t];if(s)console[s](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yr{constructor(t){this.name=t,this._logLevel=hs,this._logHandler=ds,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?us[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const ps=(e,t)=>t.some(r=>e instanceof r);let hr,fr;function ms(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gs(){return fr||(fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xr=new WeakMap,Pe=new WeakMap,Zr=new WeakMap,we=new WeakMap,je=new WeakMap;function ys(e){const t=new Promise((r,n)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{r(at(e.result)),s()},a=()=>{n(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&Xr.set(r,e)}).catch(()=>{}),je.set(t,e),t}function _s(e){if(Pe.has(e))return;const t=new Promise((r,n)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{r(),s()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Pe.set(e,t)}let De={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Pe.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Zr.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return at(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function bs(e){De=e(De)}function Es(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(ve(this),t,...r);return Zr.set(n,t.sort?t.sort():[t]),at(n)}:gs().includes(e)?function(...t){return e.apply(ve(this),t),at(Xr.get(this))}:function(...t){return at(e.apply(ve(this),t))}}function Is(e){return typeof e=="function"?Es(e):(e instanceof IDBTransaction&&_s(e),ps(e,ms())?new Proxy(e,De):e)}function at(e){if(e instanceof IDBRequest)return ys(e);if(we.has(e))return we.get(e);const t=Is(e);return t!==e&&(we.set(e,t),je.set(t,e)),t}const ve=e=>je.get(e);function ws(e,t,{blocked:r,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),p=at(a);return n&&a.addEventListener("upgradeneeded",g=>{n(at(a.result),g.oldVersion,g.newVersion,at(a.transaction),g)}),r&&a.addEventListener("blocked",g=>r(g.oldVersion,g.newVersion,g)),p.then(g=>{i&&g.addEventListener("close",()=>i()),s&&g.addEventListener("versionchange",y=>s(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const vs=["get","getKey","getAll","getAllKeys","count"],As=["put","add","delete","clear"],Ae=new Map;function dr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ae.get(t))return Ae.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,s=As.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(s||vs.includes(r)))return;const i=async function(a,...p){const g=this.transaction(a,s?"readwrite":"readonly");let y=g.store;return n&&(y=y.index(p.shift())),(await Promise.all([y[r](...p),s&&g.done]))[0]};return Ae.set(t,i),i}bs(e=>({...e,get:(t,r,n)=>dr(t,r)||e.get(t,r,n),has:(t,r)=>!!dr(t,r)||e.has(t,r)}));/**
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
 */class Ts{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ss(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Ss(e){return e.getComponent()?.type==="VERSION"}const Ce="@firebase/app",pr="0.16.2";/**
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
 */const tt=new Yr("@firebase/app"),Vs="@firebase/app-compat",Ns="@firebase/analytics-compat",Rs="@firebase/analytics",Ps="@firebase/app-check-compat",Ds="@firebase/app-check",Cs="@firebase/auth",Os="@firebase/auth-compat",$s="@firebase/database",Fs="@firebase/data-connect",ks="@firebase/database-compat",Ls="@firebase/functions",Ms="@firebase/functions-compat",Us="@firebase/installations",xs="@firebase/installations-compat",Bs="@firebase/messaging",js="@firebase/messaging-compat",qs="@firebase/performance",zs="@firebase/performance-compat",Gs="@firebase/remote-config",Hs="@firebase/remote-config-compat",Ws="@firebase/storage",Ks="@firebase/storage-compat",Qs="@firebase/firestore",Js="@firebase/ai",Ys="@firebase/firestore-compat",Xs="firebase",Zs="12.19.0";/**
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
 */const Oe="[DEFAULT]",ti={[Ce]:"fire-core",[Vs]:"fire-core-compat",[Rs]:"fire-analytics",[Ns]:"fire-analytics-compat",[Ds]:"fire-app-check",[Ps]:"fire-app-check-compat",[Cs]:"fire-auth",[Os]:"fire-auth-compat",[$s]:"fire-rtdb",[Fs]:"fire-data-connect",[ks]:"fire-rtdb-compat",[Ls]:"fire-fn",[Ms]:"fire-fn-compat",[Us]:"fire-iid",[xs]:"fire-iid-compat",[Bs]:"fire-fcm",[js]:"fire-fcm-compat",[qs]:"fire-perf",[zs]:"fire-perf-compat",[Gs]:"fire-rc",[Hs]:"fire-rc-compat",[Ws]:"fire-gcs",[Ks]:"fire-gcs-compat",[Qs]:"fire-fst",[Ys]:"fire-fst-compat",[Js]:"fire-vertex","fire-js":"fire-js",[Xs]:"fire-js-all"};/**
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
 */const Zt=new Map,ei=new Map,$e=new Map;function mr(e,t){try{e.container.addComponent(t)}catch(r){tt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function te(e){const t=e.name;if($e.has(t))return tt.debug(`There were multiple attempts to register component ${t}.`),!1;$e.set(t,e);for(const r of Zt.values())mr(r,e);for(const r of ei.values())mr(r,e);return!0}function ri(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function ni(e){return e==null?!1:e.settings!==void 0}/**
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
 */const si={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Z=new Qr("app","Firebase",si);/**
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
 */class ii{constructor(t,r,n){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=Zs;function tn(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const n={name:Oe,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw Z.create("bad-app-name",{appName:String(s)});if(r||(r=Kr()),!r)throw Z.create("no-options");const i=Zt.get(s);if(i)if(Xt(r,i.options)){if(Xt(n,i.config))return i;throw Z.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Z.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(r)});const a=new ls(s);for(const g of $e.values())a.addComponent(g);const p=new ii(r,n,a);return Zt.set(s,p),p}function ai(e=Oe){const t=Zt.get(e);if(!t&&e===Oe&&Kr())return tn();if(!t)throw Z.create("no-app",{appName:e});return t}function _t(e,t,r){let n=ti[e]??e;r&&(n+=`-${r}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tt.warn(a.join(" "));return}te(new Pt(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const ci="firebase-heartbeat-database",li=1,Dt="firebase-heartbeat-store";let Te=null;function en(){return Te||(Te=ws(ci,li,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Dt)}catch(r){console.warn(r)}}}}).catch(e=>{throw Z.create("idb-open",{originalErrorMessage:e.message})})),Te}async function ui(e){try{const r=(await en()).transaction(Dt),n=await r.objectStore(Dt).get(rn(e));return await r.done,n}catch(t){if(t instanceof Tt)tt.warn(t.message);else{const r=Z.create("idb-get",{originalErrorMessage:t?.message});tt.warn(r.message)}}}async function gr(e,t){try{const n=(await en()).transaction(Dt,"readwrite");await n.objectStore(Dt).put(t,rn(e)),await n.done}catch(r){if(r instanceof Tt)tt.warn(r.message);else{const n=Z.create("idb-set",{originalErrorMessage:r?.message});tt.warn(n.message)}}}function rn(e){return`${e.name}!${e.options.appId}`}/**
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
 */const hi=1024,fi=30;class di{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new mi(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=yr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>fi){const s=gi(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){tt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yr(),{heartbeatsToSend:r,unsentEntries:n}=pi(this._heartbeatsCache.heartbeats),s=Yt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return tt.warn(t),""}}}function yr(){return new Date().toISOString().substring(0,10)}function pi(e,t=hi){const r=[];let n=e.slice();for(const s of e){const i=r.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),_r(r)>t){i.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),_r(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class mi{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return es()?rs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await ui(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return gr(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return gr(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function _r(e){return Yt(JSON.stringify({version:2,heartbeats:e})).length}function gi(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}/**
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
 */function yi(e){te(new Pt("platform-logger",t=>new Ts(t),"PRIVATE")),te(new Pt("heartbeat",t=>new di(t),"PRIVATE")),_t(Ce,pr,e),_t(Ce,pr,"esm2020"),_t("fire-js","")}/**
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
 */yi("");var _i="firebase",bi="12.19.0";/**
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
 */_t(_i,bi,"app");var br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(h,c){function u(){}u.prototype=c.prototype,h.F=c.prototype,h.prototype=new u,h.prototype.constructor=h,h.D=function(d,f,m){for(var l=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)l[ut-2]=arguments[ut];return c.prototype[f].apply(d,l)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,r),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(h,c,u){u||(u=0);const d=Array(16);if(typeof c=="string")for(var f=0;f<16;++f)d[f]=c.charCodeAt(u++)|c.charCodeAt(u++)<<8|c.charCodeAt(u++)<<16|c.charCodeAt(u++)<<24;else for(f=0;f<16;++f)d[f]=c[u++]|c[u++]<<8|c[u++]<<16|c[u++]<<24;c=h.g[0],u=h.g[1],f=h.g[2];let m=h.g[3],l;l=c+(m^u&(f^m))+d[0]+3614090360&4294967295,c=u+(l<<7&4294967295|l>>>25),l=m+(f^c&(u^f))+d[1]+3905402710&4294967295,m=c+(l<<12&4294967295|l>>>20),l=f+(u^m&(c^u))+d[2]+606105819&4294967295,f=m+(l<<17&4294967295|l>>>15),l=u+(c^f&(m^c))+d[3]+3250441966&4294967295,u=f+(l<<22&4294967295|l>>>10),l=c+(m^u&(f^m))+d[4]+4118548399&4294967295,c=u+(l<<7&4294967295|l>>>25),l=m+(f^c&(u^f))+d[5]+1200080426&4294967295,m=c+(l<<12&4294967295|l>>>20),l=f+(u^m&(c^u))+d[6]+2821735955&4294967295,f=m+(l<<17&4294967295|l>>>15),l=u+(c^f&(m^c))+d[7]+4249261313&4294967295,u=f+(l<<22&4294967295|l>>>10),l=c+(m^u&(f^m))+d[8]+1770035416&4294967295,c=u+(l<<7&4294967295|l>>>25),l=m+(f^c&(u^f))+d[9]+2336552879&4294967295,m=c+(l<<12&4294967295|l>>>20),l=f+(u^m&(c^u))+d[10]+4294925233&4294967295,f=m+(l<<17&4294967295|l>>>15),l=u+(c^f&(m^c))+d[11]+2304563134&4294967295,u=f+(l<<22&4294967295|l>>>10),l=c+(m^u&(f^m))+d[12]+1804603682&4294967295,c=u+(l<<7&4294967295|l>>>25),l=m+(f^c&(u^f))+d[13]+4254626195&4294967295,m=c+(l<<12&4294967295|l>>>20),l=f+(u^m&(c^u))+d[14]+2792965006&4294967295,f=m+(l<<17&4294967295|l>>>15),l=u+(c^f&(m^c))+d[15]+1236535329&4294967295,u=f+(l<<22&4294967295|l>>>10),l=c+(f^m&(u^f))+d[1]+4129170786&4294967295,c=u+(l<<5&4294967295|l>>>27),l=m+(u^f&(c^u))+d[6]+3225465664&4294967295,m=c+(l<<9&4294967295|l>>>23),l=f+(c^u&(m^c))+d[11]+643717713&4294967295,f=m+(l<<14&4294967295|l>>>18),l=u+(m^c&(f^m))+d[0]+3921069994&4294967295,u=f+(l<<20&4294967295|l>>>12),l=c+(f^m&(u^f))+d[5]+3593408605&4294967295,c=u+(l<<5&4294967295|l>>>27),l=m+(u^f&(c^u))+d[10]+38016083&4294967295,m=c+(l<<9&4294967295|l>>>23),l=f+(c^u&(m^c))+d[15]+3634488961&4294967295,f=m+(l<<14&4294967295|l>>>18),l=u+(m^c&(f^m))+d[4]+3889429448&4294967295,u=f+(l<<20&4294967295|l>>>12),l=c+(f^m&(u^f))+d[9]+568446438&4294967295,c=u+(l<<5&4294967295|l>>>27),l=m+(u^f&(c^u))+d[14]+3275163606&4294967295,m=c+(l<<9&4294967295|l>>>23),l=f+(c^u&(m^c))+d[3]+4107603335&4294967295,f=m+(l<<14&4294967295|l>>>18),l=u+(m^c&(f^m))+d[8]+1163531501&4294967295,u=f+(l<<20&4294967295|l>>>12),l=c+(f^m&(u^f))+d[13]+2850285829&4294967295,c=u+(l<<5&4294967295|l>>>27),l=m+(u^f&(c^u))+d[2]+4243563512&4294967295,m=c+(l<<9&4294967295|l>>>23),l=f+(c^u&(m^c))+d[7]+1735328473&4294967295,f=m+(l<<14&4294967295|l>>>18),l=u+(m^c&(f^m))+d[12]+2368359562&4294967295,u=f+(l<<20&4294967295|l>>>12),l=c+(u^f^m)+d[5]+4294588738&4294967295,c=u+(l<<4&4294967295|l>>>28),l=m+(c^u^f)+d[8]+2272392833&4294967295,m=c+(l<<11&4294967295|l>>>21),l=f+(m^c^u)+d[11]+1839030562&4294967295,f=m+(l<<16&4294967295|l>>>16),l=u+(f^m^c)+d[14]+4259657740&4294967295,u=f+(l<<23&4294967295|l>>>9),l=c+(u^f^m)+d[1]+2763975236&4294967295,c=u+(l<<4&4294967295|l>>>28),l=m+(c^u^f)+d[4]+1272893353&4294967295,m=c+(l<<11&4294967295|l>>>21),l=f+(m^c^u)+d[7]+4139469664&4294967295,f=m+(l<<16&4294967295|l>>>16),l=u+(f^m^c)+d[10]+3200236656&4294967295,u=f+(l<<23&4294967295|l>>>9),l=c+(u^f^m)+d[13]+681279174&4294967295,c=u+(l<<4&4294967295|l>>>28),l=m+(c^u^f)+d[0]+3936430074&4294967295,m=c+(l<<11&4294967295|l>>>21),l=f+(m^c^u)+d[3]+3572445317&4294967295,f=m+(l<<16&4294967295|l>>>16),l=u+(f^m^c)+d[6]+76029189&4294967295,u=f+(l<<23&4294967295|l>>>9),l=c+(u^f^m)+d[9]+3654602809&4294967295,c=u+(l<<4&4294967295|l>>>28),l=m+(c^u^f)+d[12]+3873151461&4294967295,m=c+(l<<11&4294967295|l>>>21),l=f+(m^c^u)+d[15]+530742520&4294967295,f=m+(l<<16&4294967295|l>>>16),l=u+(f^m^c)+d[2]+3299628645&4294967295,u=f+(l<<23&4294967295|l>>>9),l=c+(f^(u|~m))+d[0]+4096336452&4294967295,c=u+(l<<6&4294967295|l>>>26),l=m+(u^(c|~f))+d[7]+1126891415&4294967295,m=c+(l<<10&4294967295|l>>>22),l=f+(c^(m|~u))+d[14]+2878612391&4294967295,f=m+(l<<15&4294967295|l>>>17),l=u+(m^(f|~c))+d[5]+4237533241&4294967295,u=f+(l<<21&4294967295|l>>>11),l=c+(f^(u|~m))+d[12]+1700485571&4294967295,c=u+(l<<6&4294967295|l>>>26),l=m+(u^(c|~f))+d[3]+2399980690&4294967295,m=c+(l<<10&4294967295|l>>>22),l=f+(c^(m|~u))+d[10]+4293915773&4294967295,f=m+(l<<15&4294967295|l>>>17),l=u+(m^(f|~c))+d[1]+2240044497&4294967295,u=f+(l<<21&4294967295|l>>>11),l=c+(f^(u|~m))+d[8]+1873313359&4294967295,c=u+(l<<6&4294967295|l>>>26),l=m+(u^(c|~f))+d[15]+4264355552&4294967295,m=c+(l<<10&4294967295|l>>>22),l=f+(c^(m|~u))+d[6]+2734768916&4294967295,f=m+(l<<15&4294967295|l>>>17),l=u+(m^(f|~c))+d[13]+1309151649&4294967295,u=f+(l<<21&4294967295|l>>>11),l=c+(f^(u|~m))+d[4]+4149444226&4294967295,c=u+(l<<6&4294967295|l>>>26),l=m+(u^(c|~f))+d[11]+3174756917&4294967295,m=c+(l<<10&4294967295|l>>>22),l=f+(c^(m|~u))+d[2]+718787259&4294967295,f=m+(l<<15&4294967295|l>>>17),l=u+(m^(f|~c))+d[9]+3951481745&4294967295,h.g[0]=h.g[0]+c&4294967295,h.g[1]=h.g[1]+(f+(l<<21&4294967295|l>>>11))&4294967295,h.g[2]=h.g[2]+f&4294967295,h.g[3]=h.g[3]+m&4294967295}n.prototype.v=function(h,c){c===void 0&&(c=h.length);const u=c-this.blockSize,d=this.C;let f=this.h,m=0;for(;m<c;){if(f==0)for(;m<=u;)s(this,h,m),m+=this.blockSize;if(typeof h=="string"){for(;m<c;)if(d[f++]=h.charCodeAt(m++),f==this.blockSize){s(this,d),f=0;break}}else for(;m<c;)if(d[f++]=h[m++],f==this.blockSize){s(this,d),f=0;break}}this.h=f,this.o+=c},n.prototype.A=function(){var h=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);h[0]=128;for(var c=1;c<h.length-8;++c)h[c]=0;c=this.o*8;for(var u=h.length-8;u<h.length;++u)h[u]=c&255,c/=256;for(this.v(h),h=Array(16),c=0,u=0;u<4;++u)for(let d=0;d<32;d+=8)h[c++]=this.g[u]>>>d&255;return h};function i(h,c){var u=p;return Object.prototype.hasOwnProperty.call(u,h)?u[h]:u[h]=c(h)}function a(h,c){this.h=c;const u=[];let d=!0;for(let f=h.length-1;f>=0;f--){const m=h[f]|0;d&&m==c||(u[f]=m,d=!1)}this.g=u}var p={};function g(h){return-128<=h&&h<128?i(h,function(c){return new a([c|0],c<0?-1:0)}):new a([h|0],h<0?-1:0)}function y(h){if(isNaN(h)||!isFinite(h))return I;if(h<0)return T(y(-h));const c=[];let u=1;for(let d=0;h>=u;d++)c[d]=h/u|0,u*=4294967296;return new a(c,0)}function b(h,c){if(h.length==0)throw Error("number format error: empty string");if(c=c||10,c<2||36<c)throw Error("radix out of range: "+c);if(h.charAt(0)=="-")return T(b(h.substring(1),c));if(h.indexOf("-")>=0)throw Error('number format error: interior "-" character');const u=y(Math.pow(c,8));let d=I;for(let m=0;m<h.length;m+=8){var f=Math.min(8,h.length-m);const l=parseInt(h.substring(m,m+f),c);f<8?(f=y(Math.pow(c,f)),d=d.j(f).add(y(l))):(d=d.j(u),d=d.add(y(l)))}return d}var I=g(0),w=g(1),P=g(16777216);e=a.prototype,e.m=function(){if(V(this))return-T(this).m();let h=0,c=1;for(let u=0;u<this.g.length;u++){const d=this.i(u);h+=(d>=0?d:4294967296+d)*c,c*=4294967296}return h},e.toString=function(h){if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(S(this))return"0";if(V(this))return"-"+T(this).toString(h);const c=y(Math.pow(h,6));var u=this;let d="";for(;;){const f=X(u,c).g;u=H(u,f.j(c));let m=((u.g.length>0?u.g[0]:u.h)>>>0).toString(h);if(u=f,S(u))return m+d;for(;m.length<6;)m="0"+m;d=m+d}},e.i=function(h){return h<0?0:h<this.g.length?this.g[h]:this.h};function S(h){if(h.h!=0)return!1;for(let c=0;c<h.g.length;c++)if(h.g[c]!=0)return!1;return!0}function V(h){return h.h==-1}e.l=function(h){return h=H(this,h),V(h)?-1:S(h)?0:1};function T(h){const c=h.g.length,u=[];for(let d=0;d<c;d++)u[d]=~h.g[d];return new a(u,~h.h).add(w)}e.abs=function(){return V(this)?T(this):this},e.add=function(h){const c=Math.max(this.g.length,h.g.length),u=[];let d=0;for(let f=0;f<=c;f++){let m=d+(this.i(f)&65535)+(h.i(f)&65535),l=(m>>>16)+(this.i(f)>>>16)+(h.i(f)>>>16);d=l>>>16,m&=65535,l&=65535,u[f]=l<<16|m}return new a(u,u[u.length-1]&-2147483648?-1:0)};function H(h,c){return h.add(T(c))}e.j=function(h){if(S(this)||S(h))return I;if(V(this))return V(h)?T(this).j(T(h)):T(T(this).j(h));if(V(h))return T(this.j(T(h)));if(this.l(P)<0&&h.l(P)<0)return y(this.m()*h.m());const c=this.g.length+h.g.length,u=[];for(var d=0;d<2*c;d++)u[d]=0;for(d=0;d<this.g.length;d++)for(let f=0;f<h.g.length;f++){const m=this.i(d)>>>16,l=this.i(d)&65535,ut=h.i(f)>>>16,cr=h.i(f)&65535;u[2*d+2*f]+=l*cr,mt(u,2*d+2*f),u[2*d+2*f+1]+=m*cr,mt(u,2*d+2*f+1),u[2*d+2*f+1]+=l*ut,mt(u,2*d+2*f+1),u[2*d+2*f+2]+=m*ut,mt(u,2*d+2*f+2)}for(h=0;h<c;h++)u[h]=u[2*h+1]<<16|u[2*h];for(h=c;h<2*c;h++)u[h]=0;return new a(u,0)};function mt(h,c){for(;(h[c]&65535)!=h[c];)h[c+1]+=h[c]>>>16,h[c]&=65535,c++}function q(h,c){this.g=h,this.h=c}function X(h,c){if(S(c))throw Error("division by zero");if(S(h))return new q(I,I);if(V(h))return c=X(T(h),c),new q(T(c.g),T(c.h));if(V(c))return c=X(h,T(c)),new q(T(c.g),c.h);if(h.g.length>30){if(V(h)||V(c))throw Error("slowDivide_ only works with positive integers.");for(var u=w,d=c;d.l(h)<=0;)u=ar(u),d=ar(d);var f=gt(u,1),m=gt(d,1);for(d=gt(d,2),u=gt(u,2);!S(d);){var l=m.add(d);l.l(h)<=0&&(f=f.add(u),m=l),d=gt(d,1),u=gt(u,1)}return c=H(h,f.j(c)),new q(f,c)}for(f=I;h.l(c)>=0;){for(u=Math.max(1,Math.floor(h.m()/c.m())),d=Math.ceil(Math.log(u)/Math.LN2),d=d<=48?1:Math.pow(2,d-48),m=y(u),l=m.j(c);V(l)||l.l(h)>0;)u-=d,m=y(u),l=m.j(c);S(m)&&(m=w),f=f.add(m),h=H(h,l)}return new q(f,h)}e.B=function(h){return X(this,h).h},e.and=function(h){const c=Math.max(this.g.length,h.g.length),u=[];for(let d=0;d<c;d++)u[d]=this.i(d)&h.i(d);return new a(u,this.h&h.h)},e.or=function(h){const c=Math.max(this.g.length,h.g.length),u=[];for(let d=0;d<c;d++)u[d]=this.i(d)|h.i(d);return new a(u,this.h|h.h)},e.xor=function(h){const c=Math.max(this.g.length,h.g.length),u=[];for(let d=0;d<c;d++)u[d]=this.i(d)^h.i(d);return new a(u,this.h^h.h)};function ar(h){const c=h.g.length+1,u=[];for(let d=0;d<c;d++)u[d]=h.i(d)<<1|h.i(d-1)>>>31;return new a(u,h.h)}function gt(h,c){const u=c>>5;c%=32;const d=h.g.length-u,f=[];for(let m=0;m<d;m++)f[m]=c>0?h.i(m+u)>>>c|h.i(m+u+1)<<32-c:h.i(m+u);return new a(f,h.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=y,a.fromString=b,nn=a}).apply(typeof br<"u"?br:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class B{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}B.UNAUTHENTICATED=new B(null),B.GOOGLE_CREDENTIALS=new B("google-credentials-uid"),B.FIRST_PARTY=new B("first-party-uid"),B.MOCK_USER=new B("mock-user");/**
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
 */let St="12.19.0";function Ei(e){St=e}/**
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
 */const vt=new Yr("@firebase/firestore");function ee(e,...t){if(vt.logLevel<=A.DEBUG){const r=t.map(ze);vt.debug(`Firestore (${St}): ${e}`,...r)}}function qe(e,...t){if(vt.logLevel<=A.ERROR){const r=t.map(ze);vt.error(`Firestore (${St}): ${e}`,...r)}}function sn(e,...t){if(vt.logLevel<=A.WARN){const r=t.map(ze);vt.warn(`Firestore (${St}): ${e}`,...r)}}function ze(e){if(typeof e=="string")return e;try{return(function(r){return JSON.stringify(r)})(e)}catch{return e}}/**
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
 */function F(e,t,r){let n="Unexpected state";typeof t=="string"?n=t:r=t,on(e,n,r)}function on(e,t,r){let n=`FIRESTORE (${St}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(r!==void 0)try{n+=" CONTEXT: "+JSON.stringify(r)}catch{n+=" CONTEXT: "+r}throw qe(n),new Error(n)}function et(e,t,r,n){let s="Unexpected state";typeof r=="string"?s=r:n=r,e||on(t,s,n)}function Ct(e,t){return e}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class E extends Tt{constructor(t,r){super(t,r),this.code=t,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class an{constructor(t,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ii{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,r){t.enqueueRetryable((()=>r(B.UNAUTHENTICATED)))}shutdown(){}}class wi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,r){this.changeListener=r,t.enqueueRetryable((()=>r(this.token.user)))}shutdown(){this.changeListener=null}}class vi{constructor(t){this.auth=null,t.onInit((r=>{this.auth=r}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(et(typeof t.accessToken=="string",42297,{Z:t}),new an(t.accessToken,new B(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,r){}shutdown(){}}class Ai{constructor(t,r,n){this.ee=t,this.te=r,this.re=n,this.type="FirstParty",this.user=B.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const t=this.ie();return t&&this.ne.set("Authorization",t),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Ti{constructor(t,r,n){this.ee=t,this.te=r,this.re=n}getToken(){return Promise.resolve(new Ai(this.ee,this.te,this.re))}start(t,r){t.enqueueRetryable((()=>r(B.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Er{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Si{constructor(t,r){this.se=r,this.appCheck=null,this.oe=null,ni(t)&&t.settings.appCheckToken&&(this.oe=t.settings.appCheckToken),r.onInit((n=>{this.appCheck=n}))}getToken(){return this.oe?Promise.resolve(new Er(this.oe)):this.appCheck?this.appCheck.getToken().then((t=>t?(et(typeof t.token=="string",3470,{tokenResult:t}),new Er(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,r){}shutdown(){}}/**
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
 */class Vi{constructor(t,r,n,s,i,a,p,g,y,b,I,w,P){this.databaseId=t,this.appId=r,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=b,this.apiKey=I,this._customHeaders=w,this.grpcFlowControlWindow=P}}const Fe="(default)";class Ot{constructor(t,r){this.projectId=t,this.database=r||Fe}static empty(){return new Ot("","")}get isDefaultDatabase(){return this.database===Fe}isEqual(t){return t instanceof Ot&&t.projectId===this.projectId&&t.database===this.database}}function Ni(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ot(e.options.projectId,t)}function C(e,t){return e<t?-1:e>t?1:0}function ke(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++){const s=e.charAt(n),i=t.charAt(n);if(s!==i)return Se(s)===Se(i)?C(s,i):Se(s)?1:-1}return C(e.length,t.length)}const Ri=55296,Pi=57343;function Se(e){const t=e.charCodeAt(0);return t>=Ri&&t<=Pi}function Di(e,t,r){return e.length===t.length&&e.every(((n,s)=>r(n,t[s])))}/**
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
 */const Le="__name__";class Q{constructor(t,r,n){r===void 0?r=0:r>t.length&&F(637,{offset:r,range:t.length}),n===void 0?n=t.length-r:n>t.length-r&&F(1746,{length:n,range:t.length-r}),this.segments=t,this.offset=r,this.len=n}get length(){return this.len}isEqual(t){return Q.comparator(this,t)===0}child(t){const r=this.segments.slice(this.offset,this.limit());return t instanceof Q?t.forEach((n=>{r.push(n)})):r.push(t),this.construct(r)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}forEach(t){for(let r=this.offset,n=this.limit();r<n;r++)t(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,r){const n=Math.min(t.length,r.length);for(let s=0;s<n;s++){const i=Q.compareSegments(t.get(s),r.get(s));if(i!==0)return i}return C(t.length,r.length)}static compareSegments(t,r){const n=Q.isNumericId(t),s=Q.isNumericId(r);return n&&!s?-1:!n&&s?1:n&&s?Q.extractNumericId(t).compare(Q.extractNumericId(r)):ke(t,r)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return nn.fromString(t.substring(4,t.length-2))}}class $ extends Q{construct(t,r,n){return new $(t,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const r=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter((s=>s.length>0)))}return new $(r)}static emptyPath(){return new $([])}}const Ci=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let bt=class yt extends Q{construct(t,r,n){return new yt(t,r,n)}static isValidIdentifier(t){return Ci.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Le}static keyField(){return new yt([Le])}static fromServerFormat(t){const r=[];let n="",s=0;const i=()=>{if(n.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let a=!1;for(;s<t.length;){const p=t[s];if(p==="\\"){if(s+1===t.length)throw new E(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[s+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new E(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=g,s+=2}else p==="`"?(a=!a,s++):p!=="."||a?(n+=p,s++):(i(),s++)}if(i(),a)throw new E(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(r)}static emptyPath(){return new yt([])}};/**
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
 */class L{constructor(t){this.path=t}static fromPath(t){return new L($.fromString(t))}static fromName(t){return new L($.fromString(t).popFirst(5))}static empty(){return new L($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&$.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,r){return $.comparator(t.path,r.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new $(t.slice()))}}/**
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
 */function Oi(e,t,r){if(!r)throw new E(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ir(e){if(L.isDocumentKey(e))throw new E(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function cn(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function de(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":F(12329,{type:typeof e})}function Ge(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=de(e);throw new E(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}function $i(e,t){if(t<=0)throw new E(_.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */function ln(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let zt=null;function Fi(){return zt===null?zt=(function(){return 268435456+Math.round(2147483648*Math.random())})():zt++,"0x"+zt.toString(16)}/**
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
 */function ki(e){return e==null}function re(e){return e===0&&1/e==-1/0}/**
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
 */const Ve="RestConnection",Li={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Mi{get ae(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.ue=r+"://"+t.host,this._e=`projects/${n}/databases/${s}`,this.ce=this.databaseId.database===Fe?`project_id=${n}`:`project_id=${n}&database_id=${s}`}le(t,r,n,s,i){const a=Fi(),p=this.he(t,r.toUriEncodedString());ee(Ve,`Sending RPC '${t}' ${a}:`,p,n);const g={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.fe(g,s,i);const{host:y}=new URL(p),b=Jr(y);return this.me(t,p,g,n,b).then((I=>(ee(Ve,`Received RPC '${t}' ${a}: `,I),I)),(I=>{throw sn(Ve,`RPC '${t}' ${a} failed with error: `,I,"url: ",p,"request:",n),I}))}de(t,r,n,s,i,a){return this.le(t,r,n,s,i)}fe(t,r,n){if(t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+St})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))t[s]=this.databaseInfo._customHeaders[s]}he(t,r){const n=Li[t];let s=`${this.ue}/v1/${r}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */var wr,v;function vr(e){if(e===void 0)return qe("RPC_ERROR","HTTP error has no status"),_.UNKNOWN;switch(e){case 200:return _.OK;case 400:return _.FAILED_PRECONDITION;case 401:return _.UNAUTHENTICATED;case 403:return _.PERMISSION_DENIED;case 404:return _.NOT_FOUND;case 409:return _.ABORTED;case 416:return _.OUT_OF_RANGE;case 429:return _.RESOURCE_EXHAUSTED;case 499:return _.CANCELLED;case 500:return _.UNKNOWN;case 501:return _.UNIMPLEMENTED;case 503:return _.UNAVAILABLE;case 504:return _.DEADLINE_EXCEEDED;default:return e>=200&&e<300?_.OK:e>=400&&e<500?_.FAILED_PRECONDITION:e>=500&&e<600?_.INTERNAL:_.UNKNOWN}}/**
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
 */(v=wr||(wr={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS";class Ui extends Mi{Ee(t,r){throw new Error("Not supported by FetchConnection")}async me(t,r,n,s,i){const a=JSON.stringify(s);let p;try{const g={method:"POST",headers:n,body:a};i&&(g.credentials="include"),p=await fetch(r,g)}catch(g){const y=g,b=y?.message,I=y?.cause?String(y.cause):void 0,w=(b&&I?`${b} (${I})`:b??I)??y?.statusText??String(g);throw new E(vr(y?.status),`Request failed with error: ${w}`)}if(!p.ok){let g=await p.json();Array.isArray(g)&&(g=g[0]);const y=g?.error?.message;throw new E(vr(p.status),`Request failed with error: ${y??p.statusText}`)}return p.json()}}/**
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
 */function Ar(e){let t=0;for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function pe(e,t){for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function xi(e,t){const r=[];for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.push(t(e[n],n,e));return r}/**
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
 */class Bi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(t){this.binaryString=t}static fromBase64String(t){const r=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bi("Invalid base64 string: "+i):i}})(t);return new rt(r)}static fromUint8Array(t){const r=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new rt(r)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const ji=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dt(e){if(et(!!e,39018),typeof e=="string"){let t=0;const r=ji.exec(e);if(et(!!r,46558,{timestamp:e}),r[1]){let s=r[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:O(e.seconds),nanos:O(e.nanos)}}function O(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function $t(e){return typeof e=="string"?rt.fromBase64String(e):rt.fromUint8Array(e)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function G(e,t){const r={typeString:e};return t&&(r.value=t),r}function Mt(e,t){if(!cn(e))throw new E(_.INVALID_ARGUMENT,"JSON must be an object");let r;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in e)){r=`JSON missing required field: '${n}'`;break}const a=e[n];if(s&&typeof a!==s){r=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){r=`Expected '${n}' field to equal '${i.value}'`;break}}if(r)throw new E(_.INVALID_ARGUMENT,r);return!0}/**
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
 */const Tr=-62135596800,Sr=1e6;class R{static now(){return R.fromMillis(Date.now())}static fromDate(t){return R.fromMillis(t.getTime())}static fromMillis(t){const r=Math.floor(t/1e3),n=Math.floor((t-1e3*r)*Sr);return new R(r,n)}static fromInstant(t){if(!t||typeof t.Te!="bigint")throw new E(_.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return R._fromEpochNanoseconds(t.Te)}static _fromEpochNanoseconds(t){let r,n;if(t>=0n)r=Number(t/1000000000n),n=Number(t%1000000000n);else{const s=t%1000000000n;s===0n?(r=Number(t/1000000000n),n=0):(r=Number(t/1000000000n-1n),n=Number(s+1000000000n))}return new R(r,n)}constructor(t,r){if(this.seconds=t,this.nanoseconds=r,r<0)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<Tr)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sr}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new E(_.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const t=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(t)}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:R._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Mt(t,R._jsonSchema))return new R(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Tr;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}R._jsonSchemaVersion="firestore/timestamp/1.0",R._jsonSchema={type:G("string",R._jsonSchemaVersion),seconds:G("number"),nanoseconds:G("number")};function He(e){return(e?.mapValue?.fields||{}).__type__?.stringValue==="server_timestamp"}function un(e){const t=e.mapValue.fields.__previous_value__;return He(t)?un(t):t}function Ft(e){const t=dt(e.mapValue.fields.__local_write_time__.timestampValue);return new R(t.seconds,t.nanos)}/**
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
 */const hn="__type__",qi="__max__",Gt={},fn="__vector__",ne="value";function pt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?He(e)?4:(function(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===qi})(e)?9007199254740991:(function(r){return(r?.mapValue?.fields||{})[hn]?.stringValue===fn})(e)?10:11:F(28295,{value:e})}function se(e,t,r){if(e===t)return!0;const n=pt(e);if(n!==pt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ft(e).isEqual(Ft(t));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const p=dt(i.timestampValue),g=dt(a.timestampValue);return p.seconds===g.seconds&&p.nanos===g.nanos})(e,t);case 5:return e.stringValue===t.stringValue;case 6:return(function(i,a){return $t(i.bytesValue).isEqual($t(a.bytesValue))})(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return(function(i,a){return O(i.geoPointValue.latitude)===O(a.geoPointValue.latitude)&&O(i.geoPointValue.longitude)===O(a.geoPointValue.longitude)})(e,t);case 2:return(function(i,a,p){if("integerValue"in i&&"integerValue"in a)return O(i.integerValue)===O(a.integerValue);let g,y;return!("doubleValue"in i)||!("doubleValue"in a)?!1:(g=O(i.doubleValue),y=O(a.doubleValue),g===y?re(g)===re(y):!!(p===void 0||p.Pe)&&isNaN(g)&&isNaN(y))})(e,t,r);case 9:return Di(e.arrayValue.values||[],t.arrayValue.values||[],((s,i)=>se(s,i,r)));case 10:case 11:return(function(i,a,p){const g=i.mapValue.fields||{},y=a.mapValue.fields||{};if(Ar(g)!==Ar(y))return!1;for(const b in g)if(g.hasOwnProperty(b)&&(y[b]===void 0||!se(g[b],y[b],p)))return!1;return!0})(e,t,r);default:return F(52216,{left:e})}}function kt(e,t){return(e.values||[]).find((r=>se(r,t)))!==void 0}function ie(e,t){if(e===t)return 0;const r=pt(e),n=pt(t);if(r!==n)return C(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return C(e.booleanValue,t.booleanValue);case 2:return(function(i,a){const p=O(i.integerValue||i.doubleValue),g=O(a.integerValue||a.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(e,t);case 3:return Vr(e.timestampValue,t.timestampValue);case 4:return Vr(Ft(e),Ft(t));case 5:return ke(e.stringValue,t.stringValue);case 6:return(function(i,a){const p=$t(i),g=$t(a);return p.compareTo(g)})(e.bytesValue,t.bytesValue);case 7:return(function(i,a){const p=i.split("/"),g=a.split("/");for(let y=0;y<p.length&&y<g.length;y++){const b=C(p[y],g[y]);if(b!==0)return b}return C(p.length,g.length)})(e.referenceValue,t.referenceValue);case 8:return(function(i,a){const p=C(O(i.latitude),O(a.latitude));return p!==0?p:C(O(i.longitude),O(a.longitude))})(e.geoPointValue,t.geoPointValue);case 9:return Nr(e.arrayValue,t.arrayValue);case 10:return(function(i,a){const p=i.fields||{},g=a.fields||{},y=p[ne]?.arrayValue,b=g[ne]?.arrayValue,I=C(y?.values?.length||0,b?.values?.length||0);return I!==0?I:Nr(y,b)})(e.mapValue,t.mapValue);case 11:return(function(i,a){if(i===Gt&&a===Gt)return 0;if(i===Gt)return 1;if(a===Gt)return-1;const p=i.fields||{},g=Object.keys(p),y=a.fields||{},b=Object.keys(y);g.sort(),b.sort();for(let I=0;I<g.length&&I<b.length;++I){const w=ke(g[I],b[I]);if(w!==0)return w;const P=ie(p[g[I]],y[b[I]]);if(P!==0)return P}return C(g.length,b.length)})(e.mapValue,t.mapValue);default:throw F(23264,{Re:r})}}function Vr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return C(e,t);const r=dt(e),n=dt(t),s=C(r.seconds,n.seconds);return s!==0?s:C(r.nanos,n.nanos)}function Nr(e,t){const r=e.values||[],n=t.values||[];for(let s=0;s<r.length&&s<n.length;++s){const i=ie(r[s],n[s]);if(i!==void 0&&i!==0)return i}return C(r.length,n.length)}function oe(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function dn(e){return!!e&&"arrayValue"in e}function Rr(e){return!!e&&"nullValue"in e}function Pr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ne(e){return!!e&&"mapValue"in e}function Vt(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return pe(e.mapValue.fields,((r,n)=>t.mapValue.fields[r]=Vt(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=Vt(e.arrayValue.values[r]);return t}return{...e}}class ae{constructor(t,r){this.position=t,this.inclusive=r}}/**
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
 */class pn{}class K extends pn{constructor(t,r,n){super(),this.field=t,this.op=r,this.value=n}static create(t,r,n){return t.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(t,r,n):new zi(t,r,n):r==="array-contains"?new Wi(t,n):r==="in"?new Ki(t,n):r==="not-in"?new Qi(t,n):r==="array-contains-any"?new Ji(t,n):new K(t,r,n)}static createKeyFieldInFilter(t,r,n){return r==="in"?new Gi(t,n):new Hi(t,n)}matches(t){const r=t.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(ie(r,this.value)):r!==null&&pt(this.value)===pt(r)&&this.matchesComparison(ie(r,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends pn{constructor(t,r){super(),this.filters=t,this.op=r,this.Ae=null}static create(t,r){return new Ut(t,r)}matches(t){return(function(n){return n.op==="and"})(this)?this.filters.find((r=>!r.matches(t)))===void 0:this.filters.find((r=>r.matches(t)))!==void 0}getFlattenedFilters(){return this.Ae!==null||(this.Ae=this.filters.reduce(((t,r)=>t.concat(r.getFlattenedFilters())),[])),this.Ae}getFilters(){return Object.assign([],this.filters)}}class zi extends K{constructor(t,r,n){super(t,r,n),this.key=L.fromName(n.referenceValue)}matches(t){const r=L.comparator(t.key,this.key);return this.matchesComparison(r)}}class Gi extends K{constructor(t,r){super(t,"in",r),this.keys=mn("in",r)}matches(t){return this.keys.some((r=>r.isEqual(t.key)))}}class Hi extends K{constructor(t,r){super(t,"not-in",r),this.keys=mn("not-in",r)}matches(t){return!this.keys.some((r=>r.isEqual(t.key)))}}function mn(e,t){return(t.arrayValue?.values||[]).map((r=>L.fromName(r.referenceValue)))}class Wi extends K{constructor(t,r){super(t,"array-contains",r)}matches(t){const r=t.data.field(this.field);return dn(r)&&kt(r.arrayValue,this.value)}}class Ki extends K{constructor(t,r){super(t,"in",r)}matches(t){const r=t.data.field(this.field);return r!==null&&kt(this.value.arrayValue,r)}}class Qi extends K{constructor(t,r){super(t,"not-in",r)}matches(t){if(kt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=t.data.field(this.field);return r!==null&&r.nullValue===void 0&&!kt(this.value.arrayValue,r)}}class Ji extends K{constructor(t,r){super(t,"array-contains-any",r)}matches(t){const r=t.data.field(this.field);return!(!dn(r)||!r.arrayValue.values)&&r.arrayValue.values.some((n=>kt(this.value.arrayValue,n)))}}/**
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
 */class ce{constructor(t,r="asc"){this.field=t,this.dir=r}}/**
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
 */class M{static fromTimestamp(t){return new M(t)}static min(){return new M(new R(0,0))}static max(){return new M(new R(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class le{constructor(t,r){this.comparator=t,this.root=r||k.EMPTY}insert(t,r){return new le(this.comparator,this.root.insert(t,r,this.comparator).copy(null,null,k.BLACK,null,null))}remove(t){return new le(this.comparator,this.root.remove(t,this.comparator).copy(null,null,k.BLACK,null,null))}get(t){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(t,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(t){let r=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return r+n.left.size;s<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((r,n)=>(t(r,n),!1)))}toString(){const t=[];return this.inorderTraversal(((r,n)=>(t.push(`${r}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ht(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ht(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ht(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ht(this.root,t,this.comparator,!0)}}class Ht{constructor(t,r,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=r?n(t.key,r):1,r&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const r={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class k{constructor(t,r,n,s,i){this.key=t,this.value=r,this.color=n??k.RED,this.left=s??k.EMPTY,this.right=i??k.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,r,n,s,i){return new k(t??this.key,r??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,r,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,r,n),null):i===0?s.copy(null,r,null,null,null):s.copy(null,null,null,null,s.right.insert(t,r,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return k.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,r){let n,s=this;if(r(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,r),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),r(t,s.key)===0){if(s.right.isEmpty())return k.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,r))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,k.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,k.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,r)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}k.EMPTY=null,k.RED=!0,k.BLACK=!1;k.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,r,n,s,i){return this}insert(t,r,n){return new k(t,r)}remove(t,r){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ue{constructor(t){this.comparator=t,this.data=new le(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((r,n)=>(t(r),!1)))}forEachInRange(t,r){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;r(s.key)}}forEachWhile(t,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const r=this.data.getIteratorFrom(t);return r.hasNext()?r.getNext().key:null}getIterator(){return new Dr(this.data.getIterator())}getIteratorFrom(t){return new Dr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let r=this;return r.size<t.size&&(r=t,t=this),t.forEach((n=>{r=r.add(n)})),r}isEqual(t){if(!(t instanceof ue)||this.size!==t.size)return!1;const r=this.data.getIterator(),n=t.data.getIterator();for(;r.hasNext();){const s=r.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((r=>{t.push(r)})),t}toString(){const t=[];return this.forEach((r=>t.push(r))),"SortedSet("+t.toString()+")"}copy(t){const r=new ue(this.comparator);return r.data=t,r}}class Dr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class J{constructor(t){this.value=t}static empty(){return new J({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let r=this.value;for(let n=0;n<t.length-1;++n)if(r=(r.mapValue.fields||{})[t.get(n)],!Ne(r))return null;return r=(r.mapValue.fields||{})[t.lastSegment()],r||null}}set(t,r){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vt(r)}setAll(t){let r=bt.emptyPath(),n={},s=[];t.forEach(((a,p)=>{if(!r.isImmediateParentOf(p)){const g=this.getFieldsMap(r);this.applyChanges(g,n,s),n={},s=[],r=p.popLast()}a?n[p.lastSegment()]=Vt(a):s.push(p.lastSegment())}));const i=this.getFieldsMap(r);this.applyChanges(i,n,s)}delete(t){const r=this.field(t.popLast());Ne(r)&&r.mapValue.fields&&delete r.mapValue.fields[t.lastSegment()]}isEqual(t){return se(this.value,t.value)}getFieldsMap(t){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=r.mapValue.fields[t.get(n)];Ne(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},r.mapValue.fields[t.get(n)]=s),r=s}return r.mapValue.fields}applyChanges(t,r,n){pe(r,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new J(Vt(this.value))}}/**
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
 */class st{constructor(t,r,n,s,i,a,p){this.key=t,this.documentType=r,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=p}static newInvalidDocument(t){return new st(t,0,M.min(),M.min(),M.min(),J.empty(),0)}static newFoundDocument(t,r,n,s){return new st(t,1,r,M.min(),n,s,0)}static newNoDocument(t,r){return new st(t,2,r,M.min(),M.min(),J.empty(),0)}static newUnknownDocument(t,r){return new st(t,3,r,M.min(),M.min(),J.empty(),2)}convertToFoundDocument(t,r){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=J.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=J.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof st&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yi{constructor(t,r=null,n=[],s=[],i=null,a=null,p=null){this.path=t,this.collectionGroup=r,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=p,this.Ie=null}}function Cr(e,t=null,r=[],n=[],s=null,i=null,a=null){return new Yi(e,t,r,n,s,i,a)}/**
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
 */class xt{constructor(t,r=null,n=[],s=[],i=null,a="F",p=null,g=null){this.path=t,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=p,this.endAt=g,this.pe=null,this.ye=null,this.we=null,this.startAt,this.endAt}}function gn(e){return e.collectionGroup!==null}function yn(e){const t=Ct(e);if(t.pe===null){t.pe=[];const r=new Set;for(const i of t.explicitOrderBy)t.pe.push(i),r.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let p=new ue(bt.comparator);return a.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(t).forEach((i=>{r.has(i.canonicalString())||i.isKeyField()||t.pe.push(new ce(i,n))})),r.has(bt.keyField().canonicalString())||t.pe.push(new ce(bt.keyField(),n))}return t.pe}function Xi(e){const t=Ct(e);return t.ye||(t.ye=_n(t,yn(e))),t.ye}function _n(e,t){if(e.limitType==="F")return Cr(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ce(s.field,i)}));const r=e.endAt?new ae(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new ae(e.startAt.position,e.startAt.inclusive):null;return Cr(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}function Me(e,t){const r=e.filters.concat([t]);return new xt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}/**
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
 */function bn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:re(t)?"-0":t}}function Zi(e,t,r){return(function(s){return typeof s=="number"&&Number.isInteger(s)&&!re(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER})(t)?(function(s){return{integerValue:""+s}})(t):bn(e,t)}/**
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
 */const to={asc:"ASCENDING",desc:"DESCENDING"},eo={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ro={and:"AND",or:"OR"};class no{constructor(t,r){this.databaseId=t,this.useProto3Json=r}}function Re(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function so(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Or(e){return et(!!e,49232),M.fromTimestamp((function(r){const n=dt(r);return new R(n.seconds,n.nanos)})(e))}function En(e,t){return Ue(e,t).canonicalString()}function Ue(e,t){const r=(function(s){return new $(["projects",s.projectId,"databases",s.database])})(e).child("documents");return t===void 0?r:r.child(t)}function io(e,t){const r=(function(s){const i=$.fromString(s);return et(vn(i),10190,{key:i.toString()}),i})(t);if(r.get(1)!==e.databaseId.projectId)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new L((function(s){return et(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)})(r))}function In(e,t){const r={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=(function(y,b){return En(y.databaseId,b)})(e,s);const i=(function(y){if(y.length!==0)return wn(Ut.create(y,"and"))})(t.filters);i&&(r.structuredQuery.where=i);const a=(function(y){if(y.length!==0)return y.map((b=>(function(w){return{field:it(w.field),direction:oo(w.dir)}})(b)))})(t.orderBy);a&&(r.structuredQuery.orderBy=a);const p=(function(y,b){return y.useProto3Json||ki(b)?b:{value:b}})(e,t.limit);return p!==null&&(r.structuredQuery.limit=p),t.startAt&&(r.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(t.startAt)),t.endAt&&(r.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(t.endAt)),{ve:r,parent:s}}function oo(e){return to[e]}function ao(e){return eo[e]}function co(e){return ro[e]}function it(e){return{fieldPath:e.canonicalString()}}function wn(e){return e instanceof K?(function(r){if(r.op==="=="){if(Pr(r.value))return{unaryFilter:{field:it(r.field),op:"IS_NAN"}};if(Rr(r.value))return{unaryFilter:{field:it(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(Pr(r.value))return{unaryFilter:{field:it(r.field),op:"IS_NOT_NAN"}};if(Rr(r.value))return{unaryFilter:{field:it(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:it(r.field),op:ao(r.op),value:r.value}}})(e):e instanceof Ut?(function(r){const n=r.getFilters().map((s=>wn(s)));return n.length===1?n[0]:{compositeFilter:{op:co(r.op),filters:n}}})(e):F(54877,{filter:e})}function vn(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function An(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
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
 */function We(e){return new no(e,!0)}/**
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
 */class lo{}class uo extends lo{constructor(t,r,n,s){super(),this.authCredentials=t,this.appCheckCredentials=r,this.connection=n,this.serializer=s,this.be=!1}De(){if(this.be)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}le(t,r,n,s){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.le(t,Ue(r,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(_.UNKNOWN,i.toString())}))}de(t,r,n,s,i){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,p])=>this.connection.de(t,Ue(r,n),s,a,p,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new E(_.UNKNOWN,a.toString())}))}terminate(){this.be=!0,this.connection.terminate()}}async function ho(e,t){const r=Ct(e),{ve:n,parent:s}=In(r.serializer,Xi(t));return(await r.de("RunQuery",r.serializer.databaseId,s,{structuredQuery:n.structuredQuery})).filter((i=>!!i.document)).map((i=>(function(p,g,y){const b=io(p,g.name),I=Or(g.updateTime),w=g.createTime?Or(g.createTime):M.min(),P=new J({mapValue:{fields:g.fields}}),S=st.newFoundDocument(b,I,w,P);return y?S.setHasCommittedMutations():S})(r.serializer,i.document,void 0)))}async function fo(e,t,r){const n=Ct(e),{request:s,Ne:i,parent:a}=(function(b,I,w,P){const{ve:S,parent:V}=In(b,I),T={},H=[];let mt=0;return w.forEach((q=>{const X="aggregate_"+mt++;T[X]=q.alias,q.aggregateType==="count"?H.push({alias:X,count:{}}):q.aggregateType==="avg"?H.push({alias:X,avg:{field:it(q.fieldPath)}}):q.aggregateType==="sum"&&H.push({alias:X,sum:{field:it(q.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:H,structuredQuery:S.structuredQuery},parent:S.parent},Ne:T,parent:V}})(n.serializer,(function(b){const I=Ct(b);return I.we||(I.we=_n(I,b.explicitOrderBy)),I.we})(t),r);n.connection.ae||delete s.parent;const p=(await n.de("RunAggregationQuery",n.serializer.databaseId,a,s,1)).filter((y=>!!y.result));et(p.length===1,64727);const g=p[0].result?.aggregateFields;return Object.keys(g).reduce(((y,b)=>(y[i[b]]=g[b],y)),{})}/**
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
 */const Tn="ComponentProvider",Nt=new Map;function Sn(e){if(e._terminated)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.");if(!Nt.has(e)){ee(Tn,"Initializing Datastore");const t=(function(i){return new Ui(i)})((function(i,a,p,g,y){return new Vi(i,a,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,ln(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator,g,y._customHeaders,y.grpcFlowControlWindow)})(e._databaseId,e.app.options.appId||"",e._persistenceKey,e.app.options.apiKey,e._freezeSettings())),r=We(e._databaseId),n=(function(i,a,p,g){return new uo(i,a,p,g)})(e._authCredentials,e._appCheckCredentials,t,r);Nt.set(e,n)}return Nt.get(e)}const po=1048576,Vn="firestore.googleapis.com",$r=!0;class Fr{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new E(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vn,this.ssl=$r}else this.host=t.host,this.ssl=t.ssl??$r;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<po)throw new E(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if((function(n,s,i,a){if(s===!0&&a===!0)throw new E(_.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ln(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new E(_.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&(function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),a=Object.keys(s);if(i.length!==a.length)return!1;for(const p of i)if(n[p]!==s[p])return!1;return!0})(this._customHeaders,t._customHeaders)}}class me{constructor(t,r,n,s){this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new E(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fr(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Ii;switch(n.type){case"firstParty":return new Ti(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const n=Nt.get(r);n&&(ee(Tn,"Removing Datastore"),Nt.delete(r),n.terminate())})(this),Promise.resolve()}}function mo(e,t){const r=typeof e=="object"?e:ai(),n=typeof e=="string"?e:t,s=ri(r,"firestore/lite").getImmediate({identifier:n});if(!s._initialized){const i=Xn("firestore");i&&go(s,...i)}return s}function go(e,t,r,n={}){e=Ge(e,me);const s=Jr(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},p=`${t}:${r}`;s&&is(`https://${p}`),i.host!==Vn&&i.host!==p&&sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...i,host:p,ssl:s,emulatorOptions:n};if(!Xt(g,a)&&(e._setSettings(g),n.mockUserToken)){let y,b;if(typeof n.mockUserToken=="string")y=n.mockUserToken,b=B.MOCK_USER;else{y=ts(n.mockUserToken,e._app?.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new E(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new B(I)}e._authCredentials=new wi(new an(y,b))}}/**
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
 */class nt{constructor(t,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new nt(this.firestore,t,this._query)}}class U{constructor(t,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new U(this.firestore,t,this._key)}toJSON(){return{type:U._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,r,n){if(Mt(r,U._jsonSchema))return new U(t,n||null,new L($.fromString(r.referencePath)))}}U._jsonSchemaVersion="firestore/documentReference/1.0",U._jsonSchema={type:G("string",U._jsonSchemaVersion),referencePath:G("string")};class Et extends nt{constructor(t,r,n){super(t,r,(function(i){return new xt(i)})(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new U(this.firestore,null,new L(t))}withConverter(t){return new Et(this.firestore,t,this._path)}}function Bt(e,t,...r){if(e=wt(e),Oi("collection","path",t),e instanceof me){const n=$.fromString(t,...r);return Ir(n),new Et(e,null,n)}{if(!(e instanceof U||e instanceof Et))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child($.fromString(t,...r));return Ir(n),new Et(e.firestore,null,n)}}/**
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
 */class z{constructor(t){this._byteString=t}static fromBase64String(t){try{return new z(rt.fromBase64String(t))}catch(r){throw new E(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t){return new z(rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:z._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Mt(t,z._jsonSchema))return z.fromBase64String(t.bytes)}}z._jsonSchemaVersion="firestore/bytes/1.0",z._jsonSchema={type:G("string",z._jsonSchemaVersion),bytes:G("string")};/**
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
 */class Ke{constructor(...t){for(let r=0;r<t.length;++r)if(t[r].length===0)throw new E(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function ge(){return new Ke(Le)}/**
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
 */class Nn{constructor(t){this._methodName=t}}/**
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
 */class Y{constructor(t,r){if(!isFinite(t)||t<-90||t>90)throw new E(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new E(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Y._jsonSchemaVersion}}static fromJSON(t){if(Mt(t,Y._jsonSchema))return new Y(t.latitude,t.longitude)}}Y._jsonSchemaVersion="firestore/geoPoint/1.0",Y._jsonSchema={type:G("string",Y._jsonSchemaVersion),latitude:G("number"),longitude:G("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class W{constructor(t){this._values=(t||[]).map((r=>r))}toArray(){return this._values.map((t=>t))}isEqual(t){/**
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
*/return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:W._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Mt(t,W._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((r=>typeof r=="number")))return new W(t.vectorValues);throw new E(_.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}W._jsonSchemaVersion="firestore/vectorValue/1.0",W._jsonSchema={type:G("string",W._jsonSchemaVersion),vectorValues:G("object")};/**
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
 */const yo=/^__.*__$/;function Rn(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:e})}}class Qe{constructor(t,r,n,s,i,a){this.settings=t,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Qe({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){const r=this.path?.child(t),n=this.contextWith({path:r,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){const r=this.path?.child(t),n=this.contextWith({path:r,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return he(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((r=>t.isPrefixOf(r)))!==void 0||this.fieldTransforms.find((r=>t.isPrefixOf(r.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Rn(this.dataSource)&&yo.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class _o{constructor(t,r,n){this.databaseId=t,this.ignoreUndefinedProperties=r,this.serializer=n||We(t)}createContext(t,r,n,s=!1){return new Qe({dataSource:t,methodName:r,targetDoc:n,path:bt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pn(e){const t=e._freezeSettings(),r=We(e._databaseId);return new _o(e._databaseId,!!t.ignoreUndefinedProperties,r)}function Dn(e,t,r,n=!1){return Je(r,e.createContext(n?4:3,t))}function Je(e,t,r){if(On(e=wt(e)))return Eo("Unsupported field value:",t,e),bo(e,t);if(e instanceof Nn)return(function(s,i){if(!Rn(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(s,i){const a=[];let p=0;for(const g of s){let y=Je(g,i.childContextForArray(p));y==null&&(y={nullValue:"NULL_VALUE"}),a.push(y),p++}return{arrayValue:{values:a}}})(e,t)}return(function(s,i,a){if((s=wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Zi(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const p=R.fromDate(s);return{timestampValue:Re(i.serializer,p)}}if(s instanceof R){const p=new R(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Re(i.serializer,p)}}if(Cn(s)){const p=R.fromInstant(s),g=new R(p.seconds,1e3*Math.floor(p.nanoseconds/1e3));return{timestampValue:Re(i.serializer,g)}}if(s instanceof Y)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof z)return{bytesValue:so(i.serializer,s._byteString)};if(s instanceof U){const p=i.databaseId,g=s.firestore._databaseId;if(!g.isEqual(p))throw i.createError(`Document reference is for database ${g.projectId}/${g.database} but should be for database ${p.projectId}/${p.database}`);return{referenceValue:En(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof W)return(function(g,y){const b=g instanceof W?g.toArray():g;return{mapValue:{fields:{[hn]:{stringValue:fn},[ne]:{arrayValue:{values:b.map((w=>{if(typeof w!="number")throw y.createError("VectorValues must only contain numeric values.");return bn(y.serializer,w)}))}}}}}})(s,i);if(An(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${de(s)}`)})(e,t)}function bo(e,t){const r={};return(function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0})(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(e,((n,s)=>{const i=Je(s,t.childContextForField(n));i!=null&&(r[n]=i)})),{mapValue:{fields:r}}}function Cn(e){if(typeof e!="object"||e===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&e instanceof Temporal.Instant)return!0;const t=e;return t[Symbol.toStringTag]==="Temporal.Instant"&&typeof t.Te=="bigint"}function On(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof R||e instanceof Y||e instanceof z||e instanceof U||e instanceof Nn||e instanceof W||Cn(e)||An(e))}function Eo(e,t,r){if(!On(r)||!cn(r)){const n=de(r);throw n==="an object"?t.createError(e+" a custom object"):t.createError(e+" "+n)}}function Ye(e,t,r){if((t=wt(t))instanceof Ke)return t._internalPath;if(typeof t=="string")return wo(e,t);throw he("Field path arguments must be of type string or ",e,!1,void 0,r)}const Io=new RegExp("[~\\*/\\[\\]]");function wo(e,t,r){if(t.search(Io)>=0)throw he(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new Ke(...t.split("."))._internalPath}catch{throw he(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function he(e,t,r,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let p=`Function ${t}() called with invalid data`;r&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(i||a)&&(g+=" (found",i&&(g+=` in field ${n}`),a&&(g+=` in document ${s}`),g+=")"),new E(_.INVALID_ARGUMENT,p+e+g)}/**
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
 */class $n{constructor(t,r,n,s,i){this._firestore=t,this._userDataWriter=r,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new U(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Fn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const r=this._document.data.field(Ye("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r)}}}class Fn extends $n{data(){return super.data()}}class vo{constructor(t,r){this._docs=r,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,r){this._docs.forEach(t,r)}}/**
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
 */class Xe{}class ye extends Xe{}function jt(e,t,...r){let n=[];t instanceof Xe&&n.push(t),n=n.concat(r),(function(i){const a=i.filter((g=>g instanceof Ze)).length,p=i.filter((g=>g instanceof _e)).length;if(a>1||a>0&&p>0)throw new E(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)e=s._apply(e);return e}class _e extends ye{constructor(t,r,n){super(),this._field=t,this._op=r,this._value=n,this.type="where"}static _create(t,r,n){return new _e(t,r,n)}_apply(t){const r=this._parse(t);return kn(t._query,r),new nt(t.firestore,t.converter,Me(t._query,r))}_parse(t){const r=Pn(t.firestore);return(function(i,a,p,g,y,b,I){let w;if(y.isKeyField()){if(b==="array-contains"||b==="array-contains-any")throw new E(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${b}' queries on documentId().`);if(b==="in"||b==="not-in"){Lr(I,b);const S=[];for(const V of I)S.push(kr(g,i,V));w={arrayValue:{values:S}}}else w=kr(g,i,I)}else b!=="in"&&b!=="not-in"&&b!=="array-contains-any"||Lr(I,b),w=Dn(p,a,I,b==="in"||b==="not-in");return K.create(y,b,w)})(t._query,"where",r,t.firestore._databaseId,this._field,this._op,this._value)}}function ct(e,t,r){const n=t,s=Ye("where",e);return _e._create(s,n,r)}class Ze extends Xe{constructor(t,r){super(),this.type=t,this._queryConstraints=r}static _create(t,r){return new Ze(t,r)}_parse(t){const r=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return r.length===1?r[0]:Ut.create(r,this._getOperator())}_apply(t){const r=this._parse(t);return r.getFilters().length===0?t:((function(s,i){let a=s;const p=i.getFlattenedFilters();for(const g of p)kn(a,g),a=Me(a,g)})(t._query,r),new nt(t.firestore,t.converter,Me(t._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tr extends ye{constructor(t,r){super(),this._field=t,this._direction=r,this.type="orderBy"}static _create(t,r){return new tr(t,r)}_apply(t){const r=(function(s,i,a){if(s.startAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ce(i,a)})(t._query,this._field,this._direction);return new nt(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new xt(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,r))}}function fe(e,t="asc"){const r=t,n=Ye("orderBy",e);return tr._create(n,r)}class er extends ye{constructor(t,r,n){super(),this.type=t,this._limit=r,this._limitType=n}static _create(t,r,n){return new er(t,r,n)}_apply(t){return new nt(t.firestore,t.converter,(function(n,s,i){return new xt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),s,i,n.startAt,n.endAt)})(t._query,this._limit,this._limitType))}}function be(e){return $i("limit",e),er._create("limit",e,"F")}class rr extends ye{constructor(t,r,n){super(),this.type=t,this._docOrFields=r,this._inclusive=n}static _create(t,r,n){return new rr(t,r,n)}_apply(t){const r=Ao(t,this.type,this._docOrFields,this._inclusive);return new nt(t.firestore,t.converter,(function(s,i){return new xt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(t._query,r))}}function nr(...e){return rr._create("startAfter",e,!1)}function Ao(e,t,r,n){if(r[0]=wt(r[0]),r[0]instanceof $n)return(function(i,a,p,g,y){if(!g)throw new E(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${p}().`);const b=[];for(const I of yn(i))if(I.field.isKeyField())b.push(oe(a,g.key));else{const w=g.data.field(I.field);if(He(w))throw new E(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+I.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const P=I.field.canonicalString();throw new E(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}b.push(w)}return new ae(b,y)})(e._query,e.firestore._databaseId,t,r[0]._document,n);{const s=Pn(e.firestore);return(function(a,p,g,y,b,I){const w=a.explicitOrderBy;if(b.length>w.length)throw new E(_.INVALID_ARGUMENT,`Too many arguments provided to ${y}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let S=0;S<b.length;S++){const V=b[S];if(w[S].field.isKeyField()){if(typeof V!="string")throw new E(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${y}(), but got a ${typeof V}`);if(!gn(a)&&V.indexOf("/")!==-1)throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${y}() must be a plain document ID, but '${V}' contains a slash.`);const T=a.path.child($.fromString(V));if(!L.isDocumentKey(T))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${y}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const H=new L(T);P.push(oe(p,H))}else{const T=Dn(g,y,V);P.push(T)}}return new ae(P,I)})(e._query,e.firestore._databaseId,s,t,r,n)}}function kr(e,t,r){if(typeof(r=wt(r))=="string"){if(r==="")throw new E(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gn(t)&&r.indexOf("/")!==-1)throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=t.path.child($.fromString(r));if(!L.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return oe(e,new L(n))}if(r instanceof U)return oe(e,r._key);throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${de(r)}.`)}function Lr(e,t){if(!Array.isArray(e)||e.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function kn(e,t){const r=(function(s,i){for(const a of s)for(const p of a.getFlattenedFilters())if(i.indexOf(p.op)>=0)return p.op;return null})(e.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(r!==null)throw r===t.op?new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class To{convertValue(t,r="none"){switch(pt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return O(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes($t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const n={};return pe(t,((s,i)=>{n[s]=this.convertValue(i,r)})),n}convertVectorValue(t){const r=t.fields?.[ne].arrayValue?.values?.map((n=>O(n.doubleValue)));return new W(r)}convertGeoPoint(t){return new Y(O(t.latitude),O(t.longitude))}convertArray(t,r){return(t.values||[]).map((n=>this.convertValue(n,r)))}convertServerTimestamp(t,r){switch(r){case"previous":const n=un(t);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(Ft(t));default:return null}}convertTimestamp(t){const r=dt(t);return new R(r.seconds,r.nanos)}convertDocumentKey(t,r){const n=$.fromString(t);et(vn(n),9688,{name:t});const s=new Ot(n.get(1),n.get(3)),i=new L(n.popFirst(5));return s.isEqual(r)||qe(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),i}}class Ln extends To{constructor(t){super(),this.firestore=t}convertBytes(t){return new z(t)}convertReference(t){const r=this.convertDocumentKey(t,this.firestore._databaseId);return new U(this.firestore,null,r)}}function Ee(e){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new E(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((e=Ge(e,nt))._query);const t=Sn(e.firestore),r=new Ln(e.firestore);return ho(t,e._query).then((n=>{const s=n.map((i=>new Fn(e.firestore,r,i.key,i,e.converter)));return e._query.limitType==="L"&&s.reverse(),new vo(e,s)}))}const Mr="4.17.2";/**
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
 */class So{constructor(t,r,n){this.alias=t,this.aggregateType=r,this.fieldPath=n}}/**
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
 */class Vo{constructor(t="count",r){this._internalFieldPath=r,this.type="AggregateField",this.aggregateType=t}}class No{constructor(t,r,n){this._userDataWriter=r,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new J({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
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
 */function Ro(e){return Po(e,{count:Do()})}function Po(e,t){const r=Ge(e.firestore,me),n=Sn(r),s=xi(t,((i,a)=>new So(a,i.aggregateType,i._internalFieldPath)));return fo(n,e._query,s).then((i=>(function(p,g,y){const b=new Ln(p);return new No(g,b,y)})(r,e,i)))}function Do(){return new Vo("count")}/**
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
 */(function(){Ei(`${oi}_lite`),te(new Pt("firestore/lite",((t,{instanceIdentifier:r,options:n})=>{const s=t.getProvider("app").getImmediate(),i=new me(new vi(t.getProvider("auth-internal")),new Si(s,t.getProvider("app-check-internal")),Ni(s,r),s);return n&&i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),_t("firestore-lite",Mr,""),_t("firestore-lite",Mr,"esm2020")})();const Ur=24,lt=(e="")=>String(e).normalize("NFKD").toLowerCase().replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06EDـ]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/\s+/g," ").trim(),j=e=>e?.name||e?.title||"",sr=e=>[...e].sort((t,r)=>(Number.isFinite(t.order)?t.order:1/0)-(Number.isFinite(r.order)?r.order:1/0)||j(t).localeCompare(j(r),"ar")||t.id.localeCompare(r.id)),xr=(e,t)=>!t||e.branchIds?.includes(t)||e.branchId===t,xe=(e,t)=>!lt(t)||lt([e.title,e.name,e.description,...Array.isArray(e.keywords)?e.keywords:[],...Array.isArray(e.searchTokens)?e.searchTokens:[]].filter(Boolean).join(" ")).includes(lt(t)),Mn=e=>{try{const t=new URL(e);return t.protocol==="https:"?t.href:null}catch{return null}},N=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Co=(e,t,r)=>{const n=["branch","subject","unit","lesson","type"];if(!n.includes(t))return{...e};const s={...e,[t]:r};for(const i of n.slice(n.indexOf(t)+1))s[i]="";return s},Oo=e=>{const t=lt(j(e));return t.includes("علم")?"scientific":t.includes("ادب")?"literary":t.includes("صناع")?"industrial":t.includes("رياد")?"entrepreneurial":t.includes("تجار")?"commercial":null},Be=(e,t=[])=>{const r=[...new Set([...Array.isArray(e?.branchIds)?e.branchIds:[],...e?.branchId?[e.branchId]:[]])];return r.length?r.map(n=>j(t.find(s=>s.id===n))||"فرع غير متاح").join(" / "):"الفرع غير محدد"},$o=(e,t=[])=>e?`${j(e)} — ${Be(e,t)}`:"";async function Fo(e,{onProgress:t=()=>{},isCancelled:r=()=>!1,maxPages:n=100}={}){const s=new Map;let i=null;for(let a=0;a<n;a++){if(r())throw new Error("search-cancelled");const p=await e(i);if(r())throw new Error("search-cancelled");for(const g of p.items)s.set(g.id,g);if(t(s.size),!p.hasMore)return sr([...s.values()]);if(!p.cursor||p.cursor===i)throw new Error("search-incomplete");i=p.cursor}throw new Error("search-limit")}const ko=tn({projectId:"minhaj-fresh",apiKey:"AIzaSyDlNZ9MyIblUCWszyWe_LiWgDQKoxuRHMQ",storageBucket:"minhaj-fresh.firebasestorage.app"}),qt=mo(ko,"(default)"),Lo=new Set(["branches","subjects","curriculumUnits","lessons","contentTypes"]);async function Rt(e,t={}){if(!Lo.has(e))throw new Error("catalog-not-allowed");const r=[ct("active","==",!0)];if(e==="curriculumUnits"||e==="lessons"){if(!t.subject)return[];r.push(ct("subjectId","==",t.subject))}e==="lessons"&&t.unit&&r.push(ct("unitId","==",t.unit));let n=null;const s=[];do{const i=[...r,fe(ge()),be(200)];n&&i.push(nr(n));const a=await Ee(jt(Bt(qt,e),...i));s.push(...a.docs.map(p=>({...p.data(),id:p.id}))),n=a.size===200?a.docs.at(-1):null}while(n);return sr(s)}function ir(e){const t=[ct("active","==",!0)];e.branch&&t.push(ct("branchIds","array-contains",e.branch));for(const[r,n]of[["subject","subjectId"],["unit","unitId"],["lesson","lessonId"],["type","contentTypeId"]])e[r]&&t.push(ct(n,"==",e[r]));return t}async function Mo(e,t=null){const r=[...ir(e),fe("order","asc"),fe(ge(),"asc"),be(Ur)];t&&r.push(nr(t));const n=await Ee(jt(Bt(qt,"resources"),...r));if(n.docs.some(s=>!Number.isFinite(s.data().order)))throw new Error("invalid-order");return{items:n.docs.map(s=>({...s.data(),id:s.id})),cursor:n.docs.at(-1)||null,hasMore:n.size===Ur}}async function Uo(e={}){return(await Ro(jt(Bt(qt,"resources"),...ir(e)))).data().count}async function xo(e={},t={}){const r={...e};return Fo(async n=>{const s=[...ir(r),fe(ge()),be(200)];n&&s.push(nr(n));const i=await Ee(jt(Bt(qt,"resources"),...s));return{items:i.docs.map(a=>({...a.data(),id:a.id})),cursor:i.docs.at(-1)||null,hasMore:i.size===200}},t)}async function Bo(e){const t=[...new Set(e.filter(n=>typeof n=="string"&&n.length<=1500&&!n.includes("/")))],r=[];for(let n=0;n<t.length;n+=30){const s=await Ee(jt(Bt(qt,"resources"),ct("active","==",!0),ct(ge(),"in",t.slice(n,n+30)),be(30)));r.push(...s.docs.map(i=>({...i.data(),id:i.id})))}return sr(r)}function At(e){const t=String(e?.code||"").replace(/^firestore\//,"");return t==="failed-precondition"?"تعذّر تنفيذ الاستعلام لأن فهرس Firebase المطلوب غير متاح أو لم يكتمل بناؤه. هذا خطأ تحميل وليس دليلًا على خلو المكتبة؛ يحتاج مسؤول المشروع إلى مراجعة الفهرس.":t==="permission-denied"||t==="unauthenticated"?"تعذّرت قراءة المحتوى بسبب صلاحيات الوصول. هذا لا يعني أن المكتبة فارغة؛ يرجى إبلاغ مسؤول المشروع.":e?.message==="invalid-order"?"تحتاج بعض المصادر إلى تصحيح حقل الترتيب لدى مسؤول المشروع؛ تعذّر عرض هذه الدفعة، وليس هذا دليلًا على خلو المكتبة.":e?.message==="search-limit"||e?.message==="search-incomplete"?"لم يكتمل فحص جميع صفحات الاختيار، لذلك لا يمكن تأكيد نتائج البحث. ضيّق الفلاتر ثم أعد المحاولة.":t==="resource-exhausted"?"تعذّر إكمال القراءة بسبب حد الخدمة. حاول لاحقًا؛ لا يمكن تأكيد عدد المصادر الآن.":"لم نستطع الوصول إلى المكتبة. تحقق من اتصالك بالإنترنت ثم أعد المحاولة."}const Lt=e=>`./assets/${e}`,Br={home:"m3 10 9-7 9 7v10H3V10Zm6 10v-7h6v7",book:"M12 7c-3-3-7-3-10-2v14c4-1 7 0 10 2m0-14c3-3 7-3 10-2v14c-4-1-7 0-10 2V7Z",heart:"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",info:"M12 11v6m0-10h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",search:"m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",arrow:"M19 12H5m7 7-7-7 7-7",filter:"M4 7h16M7 12h10m-7 5h4",check:"m5 12 4 4L19 6",external:"M14 3h7v7m0-7L10 14m0-11H3v18h18v-7",layers:"m12 3 10 6-10 6L2 9l10-6Zm-10 12 10 6 10-6M2 12l10 6 10-6",refresh:"M20 7v5h-5M4 17v-5h5M6 7a7 7 0 0 1 12-1l2 6M4 12l2 6a7 7 0 0 0 12-1"},x=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Br[e]||Br.book}"/></svg>`,ot=document.querySelector("#app"),ft=e=>Number(e).toLocaleString("ar-PS"),Ie={get(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}},set(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}}},jr=Ie.get("minhaj-selection-v1",{}),o={view:["library","favorites","about"].includes(location.hash.slice(1))?location.hash.slice(1):"home",filters:{branch:jr.branch||"",subject:"",unit:"",lesson:"",type:""},branches:[],subjects:[],units:[],lessons:[],types:[],items:[],favoriteItems:[],favoriteIds:Ie.get("minhaj-favorites-v1",[]),cursor:null,hasMore:!1,total:null,totalAll:null,query:"",busy:!0,moreBusy:!1,catalogBusy:!0,catalogError:"",referenceError:"",error:"",countError:!1,referenceBusy:!1,searchBusy:!1,searchError:"",searchItems:null,searchProgress:0,searchRequest:0,searchCache:new Map,searchTimer:null,baseRef:0,moreError:"",branchOpen:!jr.branch,request:0,refs:0,online:navigator.onLine};Array.isArray(o.favoriteIds)||(o.favoriteIds=[]);const Qt={home:"الرئيسية",library:"المكتبة",favorites:"المفضلة",about:"عن منهاج"};function Wt(e){const t=document.createElement("div");t.className="toast",t.setAttribute("role","status"),t.textContent=e,document.body.append(t),setTimeout(()=>t.remove(),3500)}function qr(e){const t=e==="home"?"":e;location.hash===(t?"#"+t:"")?(o.view!==e&&(o.view=e),D()):location.hash=t}function zr(){return j(o.branches.find(e=>e.id===o.filters.branch))}function Kt(e,t,r,n=!1){return`<option value="">${r}</option>`+e.map(s=>`<option value="${N(s.id)}" ${s.id===t?"selected":""}>${N(n?$o(s,o.branches):j(s))}</option>`).join("")}function jo(){return`<details class="branch-picker" ${o.branchOpen?"open":""}><summary><span>${x("layers")} ${zr()?`فرعك الدراسي: ${N(zr())}`:"اختر فرعك الدراسي"}</span><span class="muted">${o.branchOpen?"إخفاء":"تغيير"} <span aria-hidden="true">⌄</span></span></summary><div class="branch-grid">${o.branches.map(e=>{const t=Oo(e);return`<button class="branch-card ${o.filters.branch===e.id?"selected":""}" data-branch="${N(e.id)}" aria-pressed="${o.filters.branch===e.id}">${t?`<img src="${Lt(`minhaj_branch_${t}.png`)}" alt=""/>`:x("book")}<span class="branch-copy">${N(j(e))}</span>${o.filters.branch===e.id?`<span class="check-mark">${x("check")}</span>`:""}</button>`}).join("")}${!o.catalogBusy&&!o.branches.length?'<p class="muted">لا توجد فروع متاحة حاليًا.</p>':""}</div><button class="reset-button" data-action="all-branches">تصفح جميع الفروع</button></details>`}function qo(){const e=o.subjects.filter(r=>xr(r,o.filters.branch)),t=o.units.filter(r=>!r.branchIds?.length||xr(r,o.filters.branch));return`<aside class="filter-panel" aria-label="مرشحات المكتبة"><div class="filter-heading">${x("filter")}<h2>خصّص مكتبتك</h2></div><p class="muted">من المادة إلى ما تحتاجه بالضبط</p><div class="filter-fields"><label>المادة الدراسية<select data-filter="subject" ${o.catalogBusy||o.referenceBusy?"disabled":""}>${Kt(e,o.filters.subject,"جميع المواد",!0)}</select></label><label>الوحدة<select data-filter="unit" ${!o.filters.subject||o.referenceBusy?"disabled":""}>${Kt(t,o.filters.unit,"جميع الوحدات")}</select></label><label>الدرس <small class="muted">(اختياري)</small><select data-filter="lesson" ${!o.filters.subject||o.referenceBusy?"disabled":""}>${Kt(o.lessons,o.filters.lesson,"جميع الدروس")}</select></label><label>نوع المحتوى<select data-filter="type" ${o.catalogBusy?"disabled":""}>${Kt(o.types,o.filters.type,"جميع الأنواع")}</select></label></div><button class="reset-button" data-action="reset">مسح الفرع وجميع المرشحات</button><p class="muted">تُعرض المصادر النشطة فقط، وبالترتيب المعتمد في منهاج.</p></aside>`}function zo(e){const t=Mn(e.url),r=o.favoriteIds.includes(e.id);return`<article class="resource-card"><div class="resource-top"><span class="type-icon">${x("book")}</span><span class="badge">${N(j(o.types.find(n=>n.id===e.contentTypeId))||"مصدر تعليمي")}</span><button class="favorite-button ${r?"saved":""}" data-favorite="${N(e.id)}" aria-label="${r?"إزالة من المفضلة":"حفظ في المفضلة"}: ${N(e.title)}" aria-pressed="${r}">${x("heart")}</button></div><h3>${N(e.title||"مصدر تعليمي")}</h3>${e.description?`<p>${N(e.description)}</p>`:""}<div class="resource-meta">${N(j(o.subjects.find(n=>n.id===e.subjectId)))}${Be(e,o.branches)?` · ${N(Be(e,o.branches))}`:""}${e.unitId?` · ${N(j(o.units.find(n=>n.id===e.unitId)))}`:""}</div><div class="resource-footer">${t?`<a class="open-link" href="${N(t)}" target="_blank" rel="noopener noreferrer">فتح المصدر ${x("external")}</a>`:'<span class="muted">رابط المصدر غير متاح</span>'}${t?`<button class="reset-button" data-share="${N(e.id)}">مشاركة</button>`:`<button class="reset-button" data-share="${N(e.id)}" disabled aria-label="مشاركة غير متاحة: رابط المصدر غير صالح">مشاركة غير متاحة</button>`}</div></article>`}function Go(){return`<div class="loading" role="status"><span class="loader"><img src="${Lt("minhaj_brand_mark.png")}" alt=""/></span><p>منهاج يجهّز مصادرك…</p></div>`}function Ho(e,t,r=!1){return`<div class="empty-state"><img src="${Lt(r?"minhaj_empty_search.png":"minhaj_empty_library.png")}" alt=""/><h3>${e}</h3><p>${t}</p>${r?'<button class="reset-button" data-action="clear-search">مسح البحث</button>':""}</div>`}function Wo(){const e=!!o.query&&o.view!=="favorites";if(!e&&o.busy)return Go();if(!e&&o.error)return`<div class="error-panel" role="alert"><h3>لم تكتمل قراءة المصادر</h3><p>${N(o.error)}</p><button class="primary-button" data-action="retry">${x("refresh")} أعد المحاولة</button></div>`;const t=o.view==="favorites"?o.favoriteItems:o.items,r=e?(o.searchItems||[]).filter(s=>xe(s,o.query)):t.filter(s=>xe(s,o.query));if(e&&o.searchBusy)return`<div class="search-progress muted" role="status">جارٍ البحث في جميع الصفحات… ${ft(o.searchProgress)} مصدر مفحوص</div>`;if(e&&o.searchError)return`<div class="error-panel" role="alert"><p>${N(o.searchError)}</p><button class="primary-button" data-action="retry-search">إعادة البحث</button></div>`;let n=r.length?`<div class="resource-grid">${r.map(zo).join("")}</div>`:Ho(o.query?"لا توجد نتائج مطابقة":o.view==="favorites"?"مكتبتك المفضلة تبدأ من هنا":o.total===0?"لا توجد مصادر متاحة حاليًا لهذه الاختيارات":"لا توجد مصادر ظاهرة في هذه الدفعات",o.query?"جرّب كلمة أخرى.":o.view==="favorites"?"اضغط علامة القلب بجانب أي مصدر لحفظه على هذا الجهاز.":o.total===0?"لا توجد مصادر نشطة منشورة لهذه الاختيارات.":"لم تظهر مصادر في الدفعات المرتبة. لا يمكن استنتاج خلو المكتبة؛ قد تحتاج مصادر إلى ضبط ترتيبها.",!!o.query);return e&&(n=`<p class="muted search-count">نتائج البحث: ${ft(r.length)}</p>`+n),o.view!=="favorites"&&!e&&(n+=`<div class="pagination"><p class="muted">تم تحميل ${ft(o.items.length)} مصدر${o.total!==null?` من ${ft(o.total)}`:""}</p>${o.hasMore?`<button class="primary-button" data-action="more" ${o.moreBusy?"disabled":""}>${o.moreBusy?"جارٍ التحميل…":"المزيد من المصادر"}</button>`:""}</div>`,o.moreError&&(n+=`<div class="error-panel"><p>${N(o.moreError)}</p><button class="reset-button" data-action="retry-more">إعادة محاولة تحميل المزيد</button></div>`),!o.hasMore&&o.total>o.items.length&&(n+='<p class="error-panel">هناك مصادر نشطة لم تُضبط قيمة ترتيبها بعد، لذلك لا تظهر في القائمة المرتبة.</p>')),n}function Ko(){return`<section class="workspace">${o.view==="favorites"?"":qo()}<div class="library-panel"><div class="library-toolbar"><div><h2>${o.view==="favorites"?"مصادرك المفضلة":"المصادر التعليمية"}</h2><p class="muted">${o.view==="favorites"?"محفوظة على هذا الجهاز فقط، دون مزامنة مع حساب التطبيق.":"كتب وملخصات وروابط تساعدك على التعلّم"}</p></div><span class="count-pill" aria-live="polite">${o.view==="favorites"?ft(o.favoriteItems.length):o.query?o.searchBusy||o.searchError||o.searchItems===null?"—":ft(o.searchItems.filter(e=>xe(e,o.query)).length):o.total===null?"—":ft(o.total)} مصدر</span></div><label class="search-box">${x("search")}<input id="search" type="search" value="${N(o.query)}" placeholder="ابحث في كل المصادر" aria-label="ابحث في كل المصادر" autocomplete="off"/></label><p class="muted search-hint">عند نجاح البحث تُفحص جميع صفحات المصادر المطابقة لاختياراتك؛ قد يستهلك ذلك قراءات إضافية. النتائج لا تُعرض إذا تعذّر اكتمال التغطية.</p>${o.countError?'<p class="muted">تعذّر تحديث العدد من الخادم.</p>':""}<div id="resource-content" aria-busy="${o.query&&o.view!=="favorites"?o.searchBusy:o.busy}">${Wo()}</div></div></section>`}function Qo(){return`<section><div class="section-title"><h2>اكتشف المكتبة</h2><span class="muted">كل خطوة تقرّبك</span></div><div class="home-grid">${[["المصادر التعليمية","كتب وملخصات وروابط","book",""],["التأسيس","خطوة ثابتة من البداية","layers","تأسيس"],["الحلول","شروحات تساعدك على الفهم","check","حلول"],["الاختبارات","تدرّب وراجع إجاباتك","book","اختبار"],["بطاقات المراجعة","سؤال وجواب للتذكر","layers","بطاق"]].map(([t,r,n,s])=>{const i=!s||o.types.some(a=>lt(j(a)).includes(lt(s)));return`<button class="home-tile" data-section="${N(s)}" ${i?"":"disabled"}>${x(n)}<h3>${t}</h3><p>${i?r:"لا يوجد محتوى من هذا النوع حاليًا"}</p>${i?x("arrow"):""}</button>`}).join("")}</div></section>`}function Jo(){return`<section class="library-panel"><h2>منهاج، مساحة الطالب</h2><p>مصادر تعليمية منظّمة، بروح تطبيق منهاج نفسه؛ اختر فرعك، ثم المادة والوحدة والدرس ونوع المحتوى لتصل إلى ما تحتاجه.</p><h3>مكتبة واحدة، على التطبيق والويب</h3><p>تُقرأ الفروع والمحتويات النشطة مباشرةً من قاعدة منهاج. لا يتضمن هذا الموقع واجهة إدارة أو صلاحيات تعديل.</p><h3>خصوصيتك أولًا</h3><p>التصفح لا يحتاج إلى تسجيل الدخول. تُحفظ اختيارات الفرع ومعرّفات المفضلة محليًا في هذا المتصفح فقط، ولا تُرسل إلى Firebase، ولا تتزامن مع التطبيق. لا يقرأ الموقع بيانات الطلاب أو حساباتهم.</p><h3>ما المتاح في هذه النسخة؟</h3><p>المكتبة، الفلاتر المتتابعة، البحث العربي في جميع صفحات المصادر المطابقة للاختيارات عند النجاح (وقد يستهلك قراءات إضافية)، فتح المصادر ومشاركتها، والمفضلة المحلية. ميزات الحساب والمساعد وإنشاء الاختبارات والبطاقات الخاصة لم تُنقل إلى هذه النسخة للالتزام بالقراءة فقط.</p><button class="primary-button" data-nav="library">تصفح المكتبة ${x("arrow")}</button></section>`}function D(){const e=document.activeElement,t=e?.id==="search",r=e?.matches?.("main h1"),n=t?e.selectionStart:null,s=e?.dataset?.focusKey||(e?.dataset?.nav?`nav:${e.dataset.nav}`:e?.dataset?.filter?`filter:${e.dataset.filter}`:e?.dataset?.branch?`branch:${e.dataset.branch}`:e?.dataset?.action?`action:${e.dataset.action}`:e?.dataset?.favorite?`favorite:${e.dataset.favorite}`:e?.dataset?.share?`share:${e.dataset.share}`:null);if(ot.innerHTML=`<div class="app-shell"><aside class="sidebar"><a class="brand" href="#" aria-label="منهاج، الرئيسية"><img src="${Lt("minhaj_brand_mark.png")}" alt="شعار منهاج"/><span>منهاج<small>رفيق رحلتك التعليمية</small></span></a><nav aria-label="التنقل الرئيسي">${[["home","home"],["library","book"],["favorites","heart"],["about","info"]].map(([a,p])=>`<button class="nav-button ${o.view===a?"active":""}" data-nav="${a}" ${o.view===a?'aria-current="page"':""}>${x(p)}<span>${Qt[a]}</span></button>`).join("")}</nav><div class="sidebar-note">${x("book")}<p>خطوة واضحة.<br/>تعلّم بثقة.</p><small>نسخة الطالب · ويب</small></div></aside><main class="main"><header class="topbar"><div class="topbar-label">منهاج <span>/</span> ${Qt[o.view]}</div><span class="connection">${o.online?"مكتبتك، أينما كنت":"غير متصل بالإنترنت"}</span></header>${o.online?"":'<div class="offline-banner" role="status">أنت غير متصل. يلزم الاتصال لقراءة أحدث المصادر.</div>'}${o.view==="home"?`<section class="welcome"><div class="welcome-copy"><span class="eyebrow">مساحتك للتعلّم</span><h1 tabindex="-1">مرحبًا بك في منهاج</h1><p>اكتشف مصادر تساعدك على التعلّم بثقة</p><button class="primary-button" data-nav="library">ابدأ من مكتبتك ${x("arrow")}</button></div><img class="welcome-mark" src="${Lt("minhaj_brand_mark.png")}" alt=""/></section>`:`<div class="section-title"><h1 tabindex="-1">${Qt[o.view]}</h1><span class="muted">تعلّم بخطوات واضحة وهادئة</span></div>`}${o.referenceError?`<div class="error-panel" role="alert"><p>${N(o.referenceError)}</p><button class="reset-button" data-action="retry-references">إعادة تحميل المراجع</button></div>`:""}${o.catalogError?`<div class="error-panel" role="alert"><p>${N(o.catalogError)}</p><button class="reset-button" data-action="retry-catalog">إعادة تحميل الفلاتر</button></div>`:""}${o.view==="home"||o.view==="library"?jo():""}${o.view==="home"?Qo():""}${o.view==="about"?Jo():Ko()}<footer class="footer"><span>منهاج · التعلّم يبدأ بخطوة</span><span>مكتبة الطالب · قراءة فقط</span></footer></main></div>`,t){const a=document.querySelector("#search");a?.focus();try{a?.setSelectionRange(n,n)}catch{}}else if(r)ot.querySelector("main h1")?.focus({preventScroll:!0});else if(s){const[a,...p]=s.split(":"),g=p.join(":"),y=["nav","filter","branch","action","favorite","share"].includes(a)?a:"share";[...ot.querySelectorAll(`[data-${y}]`)].find(b=>b.dataset[y]===g)?.focus({preventScroll:!0})}const i=ot.querySelector("details");i?.addEventListener("toggle",()=>{o.branchOpen=i.open})}async function It(e=!1){if(e&&(o.moreBusy||o.busy||!o.hasMore))return;const t=e?o.request:++o.request,r={...o.filters};o.moreError="",e?o.moreBusy=!0:(o.moreError="",o.moreBusy=!1,o.busy=!0,o.error="",o.items=[],o.cursor=null,o.hasMore=!1,o.total=null,o.countError=!1),D();let n=!1;e||Uo(r).then(s=>{t!==o.request||n||(o.total=s,Object.values(r).some(Boolean)||(o.totalAll=s),D())}).catch(()=>{t===o.request&&(o.countError=!0,D())});try{const s=await Mo(r,e?o.cursor:null);if(t!==o.request)return;const i=new Set(o.items.map(a=>a.id));o.items=e?[...o.items,...s.items.filter(a=>!i.has(a.id))]:s.items,o.cursor=s.cursor,o.hasMore=s.hasMore,o.error=""}catch(s){if(t!==o.request)return;e?o.moreError=At(s):(n=!0,o.error=At(s),o.total=null)}finally{t===o.request&&(o.busy=!1,o.moreBusy=!1,D())}}async function Un(){const e=++o.refs;o.referenceBusy=!0,D();try{const[t,r]=await Promise.all([Rt("curriculumUnits",o.filters),Rt("lessons",o.filters)]);if(e!==o.refs)return;o.units=t,o.lessons=r,o.referenceError=""}catch(t){if(e!==o.refs)return;o.units=[],o.lessons=[],o.referenceError=At(t)}finally{e===o.refs&&(o.referenceBusy=!1,D())}}async function Jt(e,t){o.filters=Co(o.filters,e,t),e==="branch"||e==="subject"?(o.units=[],o.lessons=[]):e==="unit"&&(o.lessons=[]),o.moreBusy=!1,o.moreError="",o.query="",o.searchItems=null,o.searchCache.clear(),o.searchRequest++,clearTimeout(o.searchTimer),o.searchBusy=!1,e==="branch"&&(o.branchOpen=!1,Ie.set("minhaj-selection-v1",{branch:t})),["branch","subject","unit"].includes(e)&&(o.referenceError="",Un()),It()}function Yo(){return JSON.stringify(o.filters)}async function xn(){if(!o.query||o.view==="favorites")return;const e=++o.searchRequest,t=Yo();o.searchBusy=!0,o.searchError="",o.searchProgress=0,o.searchItems=null,D();try{let r=o.searchCache.get(t);if(!r){if(r=await xo({...o.filters},{onProgress:n=>{e===o.searchRequest&&(o.searchProgress=n,D())},isCancelled:()=>e!==o.searchRequest}),e!==o.searchRequest)return;o.searchCache.clear(),o.searchCache.set(t,r)}if(e!==o.searchRequest)return;o.searchItems=r}catch(r){e===o.searchRequest&&(o.searchError=At(r))}finally{e===o.searchRequest&&(o.searchBusy=!1,D())}}async function or(){const e=++o.request;o.busy=!0,o.error="",D();try{const t=await Bo(o.favoriteIds);e===o.request&&(o.favoriteItems=t)}catch(t){e===o.request&&(o.error=At(t))}finally{e===o.request&&(o.busy=!1,D())}}async function Bn(){const e=++o.baseRef;o.catalogBusy=!0,o.catalogError="",D();try{const[t,r,n]=await Promise.all([Rt("branches"),Rt("subjects"),Rt("contentTypes")]);if(e!==o.baseRef)return;o.branches=t,o.subjects=r,o.types=n,t.some(s=>s.id===o.filters.branch)||(o.filters.branch="")}catch(t){e===o.baseRef&&(o.catalogError=At(t))}finally{e===o.baseRef&&(o.catalogBusy=!1,D())}}async function Xo(){D(),await Bn(),o.view==="favorites"?or():o.view!=="about"&&It()}ot.addEventListener("change",e=>{e.target.matches("[data-filter]")&&Jt(e.target.dataset.filter,e.target.value)});ot.addEventListener("input",e=>{e.target.id==="search"&&(o.query=e.target.value,o.searchRequest++,clearTimeout(o.searchTimer),o.searchBusy=!!o.query&&o.view!=="favorites",o.searchError="",o.searchItems=null,D(),o.searchBusy&&(o.searchTimer=setTimeout(xn,250)))});ot.addEventListener("click",async e=>{const t=e.target.closest("button");if(t){if(t.dataset.nav){qr(t.dataset.nav);return}if(t.dataset.branch){Jt("branch",t.dataset.branch);return}if(t.dataset.favorite){const r=t.dataset.favorite,n=o.favoriteIds.includes(r)?o.favoriteIds.filter(s=>s!==r):[...o.favoriteIds,r];Ie.set("minhaj-favorites-v1",n)?(o.favoriteIds=n,o.view==="favorites"&&(o.favoriteItems=o.favoriteItems.filter(s=>n.includes(s.id))),D(),Wt(n.includes(r)?"حُفظ المصدر في مفضلة هذا الجهاز":"أُزيل المصدر من المفضلة")):Wt("تعذّر الحفظ محليًا؛ تحقق من إعدادات المتصفح.");return}if(t.dataset.share){const r=[...o.items,...o.searchItems||[],...o.favoriteItems].find(s=>s.id===t.dataset.share),n=Mn(r?.url);if(!n)return;try{navigator.share?await navigator.share({title:r.title,url:n}):(await navigator.clipboard.writeText(n),Wt("تم نسخ رابط المصدر"))}catch(s){s.name!=="AbortError"&&Wt("تعذّرت المشاركة؛ يمكنك نسخ الرابط من زر فتح المصدر.")}return}if("section"in t.dataset){const r=t.dataset.section,n=r&&o.types.find(s=>lt(j(s)).includes(lt(r)))?.id||"";o.filters={...o.filters,type:n},o.query="",o.searchItems=null,qr("library");return}switch(t.dataset.action){case"more":!o.moreBusy&&o.hasMore&&It(!0);break;case"retry":o.view==="favorites"?or():It();break;case"retry-catalog":Bn();break;case"retry-references":o.referenceError="",Un();break;case"retry-search":xn();break;case"retry-more":It(!0);break;case"clear-search":o.query="",o.searchRequest++,clearTimeout(o.searchTimer),o.searchBusy=!1,o.searchError="",o.searchItems=null,D();break;case"all-branches":Jt("branch","");break;case"reset":Jt("branch","");break}}});window.addEventListener("hashchange",()=>{const e=location.hash.slice(1)||"home";o.view=Object.hasOwn(Qt,e)?e:"home",o.query="",o.searchRequest++,clearTimeout(o.searchTimer),o.searchItems=null,o.error="",o.request++,o.view==="favorites"?or():o.view!=="about"?It():D(),window.scrollTo({top:0,behavior:"instant"}),setTimeout(()=>ot.querySelector("main h1")?.focus(),0)});for(const e of["online","offline"])window.addEventListener(e,()=>{o.online=navigator.onLine,D()});Xo();
