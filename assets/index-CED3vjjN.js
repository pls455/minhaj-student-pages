(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const Un=()=>{};var sr={};/**
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
 */const xr=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},xn=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],m=r[e++],g=((s&7)<<18|(i&63)<<12|(a&63)<<6|m&63)-65536;t[n++]=String.fromCharCode(55296+(g>>10)),t[n++]=String.fromCharCode(56320+(g&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,m=a?r[s+1]:0,g=s+2<r.length,_=g?r[s+2]:0,b=i>>2,I=(i&3)<<4|m>>4;let w=(m&15)<<2|_>>6,R=_&63;g||(R=64,a||(w=64)),n.push(e[b],e[I],e[w],e[R])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(xr(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):xn(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],m=s<r.length?e[r.charAt(s)]:0;++s;const _=s<r.length?e[r.charAt(s)]:64;++s;const I=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||m==null||_==null||I==null)throw new Bn;const w=i<<2|m>>4;if(n.push(w),_!==64){const R=m<<4&240|_>>2;if(n.push(R),I!==64){const V=_<<6&192|I;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Bn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jn=function(r){const t=xr(r);return Br.encodeByteArray(t,!0)},Wt=function(r){return jn(r).replace(/\./g,"")},qn=function(r){try{return Br.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function zn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gn=()=>zn().__FIREBASE_DEFAULTS__,Hn=()=>{if(typeof process>"u"||typeof sr>"u")return;const r=sr.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Wn=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&qn(r[1]);return t&&JSON.parse(t)},jr=()=>{try{return Un()||Gn()||Hn()||Wn()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Kn=r=>jr()?.emulatorHosts?.[r],Qn=r=>{const t=Kn(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},qr=()=>jr()?.config;/**
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
 */class Jn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function Yn(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Wt(JSON.stringify(e)),Wt(JSON.stringify(a)),""].join(".")}function Xn(){try{return typeof indexedDB=="object"}catch{return!1}}function Zn(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const ts="FirebaseError";class wt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=ts,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?es(i,n):"Error",m=`${this.serviceName}: ${a} (${s}).`;return new wt(s,m,n)}}function es(r,t){try{let e=0,n="";for(;e<r.length;){const s=r.indexOf("{$",e);if(s===-1){n+=r.substring(e);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(e);break}const a=r.substring(s+2,i),m=t[a];n+=r.substring(e,s)+(m!=null?String(m):`<${a}?>`),e=i+1}return n}catch{return r}}function Kt(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(ir(i)&&ir(a)){if(!Kt(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function ir(r){return r!==null&&typeof r=="object"}/**
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
 */function Et(r){return r&&r._delegate?r._delegate:r}/**
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
 */function Gr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rs(r){return(await fetch(r,{credentials:"include"})).ok}class Nt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ut="[DEFAULT]";/**
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
 */class ns{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Jn;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(is(t))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=ut){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ut){return this.instances.has(t)}getOptions(t=ut){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(i);n===m&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&t(i,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ss(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=ut){return this.component?this.component.multipleInstances?t:ut:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ss(r){return r===ut?void 0:r}function is(r){return r.instantiationMode==="EAGER"}/**
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
 */class os{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ns(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(A||(A={}));const as={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},ls=A.INFO,cs={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},us=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=cs[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hr{constructor(t){this.name=t,this._logLevel=ls,this._logHandler=us,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?as[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const hs=(r,t)=>t.some(e=>r instanceof e);let or,ar;function ds(){return or||(or=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fs(){return ar||(ar=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wr=new WeakMap,Ve=new WeakMap,Kr=new WeakMap,ye=new WeakMap,Le=new WeakMap;function ps(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(ot(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Wr.set(e,r)}).catch(()=>{}),Le.set(t,r),t}function ms(r){if(Ve.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Ve.set(r,t)}let Se={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Ve.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Kr.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ot(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function gs(r){Se=r(Se)}function _s(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(be(this),t,...e);return Kr.set(n,t.sort?t.sort():[t]),ot(n)}:fs().includes(r)?function(...t){return r.apply(be(this),t),ot(Wr.get(this))}:function(...t){return ot(r.apply(be(this),t))}}function ys(r){return typeof r=="function"?_s(r):(r instanceof IDBTransaction&&ms(r),hs(r,ds())?new Proxy(r,Se):r)}function ot(r){if(r instanceof IDBRequest)return ps(r);if(ye.has(r))return ye.get(r);const t=ys(r);return t!==r&&(ye.set(r,t),Le.set(t,r)),t}const be=r=>Le.get(r);function bs(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),m=ot(a);return n&&a.addEventListener("upgradeneeded",g=>{n(ot(a.result),g.oldVersion,g.newVersion,ot(a.transaction),g)}),e&&a.addEventListener("blocked",g=>e(g.oldVersion,g.newVersion,g)),m.then(g=>{i&&g.addEventListener("close",()=>i()),s&&g.addEventListener("versionchange",_=>s(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const Es=["get","getKey","getAll","getAllKeys","count"],Is=["put","add","delete","clear"],Ee=new Map;function lr(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Ee.get(t))return Ee.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Is.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Es.includes(e)))return;const i=async function(a,...m){const g=this.transaction(a,s?"readwrite":"readonly");let _=g.store;return n&&(_=_.index(m.shift())),(await Promise.all([_[e](...m),s&&g.done]))[0]};return Ee.set(t,i),i}gs(r=>({...r,get:(t,e,n)=>lr(t,e)||r.get(t,e,n),has:(t,e)=>!!lr(t,e)||r.has(t,e)}));/**
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
 */class ws{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(vs(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function vs(r){return r.getComponent()?.type==="VERSION"}const Ne="@firebase/app",cr="0.16.2";/**
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
 */const tt=new Hr("@firebase/app"),As="@firebase/app-compat",Ts="@firebase/analytics-compat",Vs="@firebase/analytics",Ss="@firebase/app-check-compat",Ns="@firebase/app-check",Rs="@firebase/auth",Ps="@firebase/auth-compat",Ds="@firebase/database",Cs="@firebase/data-connect",Os="@firebase/database-compat",$s="@firebase/functions",Fs="@firebase/functions-compat",ks="@firebase/installations",Ls="@firebase/installations-compat",Ms="@firebase/messaging",Us="@firebase/messaging-compat",xs="@firebase/performance",Bs="@firebase/performance-compat",js="@firebase/remote-config",qs="@firebase/remote-config-compat",zs="@firebase/storage",Gs="@firebase/storage-compat",Hs="@firebase/firestore",Ws="@firebase/ai",Ks="@firebase/firestore-compat",Qs="firebase",Js="12.19.0";/**
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
 */const Re="[DEFAULT]",Ys={[Ne]:"fire-core",[As]:"fire-core-compat",[Vs]:"fire-analytics",[Ts]:"fire-analytics-compat",[Ns]:"fire-app-check",[Ss]:"fire-app-check-compat",[Rs]:"fire-auth",[Ps]:"fire-auth-compat",[Ds]:"fire-rtdb",[Cs]:"fire-data-connect",[Os]:"fire-rtdb-compat",[$s]:"fire-fn",[Fs]:"fire-fn-compat",[ks]:"fire-iid",[Ls]:"fire-iid-compat",[Ms]:"fire-fcm",[Us]:"fire-fcm-compat",[xs]:"fire-perf",[Bs]:"fire-perf-compat",[js]:"fire-rc",[qs]:"fire-rc-compat",[zs]:"fire-gcs",[Gs]:"fire-gcs-compat",[Hs]:"fire-fst",[Ks]:"fire-fst-compat",[Ws]:"fire-vertex","fire-js":"fire-js",[Qs]:"fire-js-all"};/**
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
 */const Qt=new Map,Xs=new Map,Pe=new Map;function ur(r,t){try{r.container.addComponent(t)}catch(e){tt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Jt(r){const t=r.name;if(Pe.has(t))return tt.debug(`There were multiple attempts to register component ${t}.`),!1;Pe.set(t,r);for(const e of Qt.values())ur(e,r);for(const e of Xs.values())ur(e,r);return!0}function Zs(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function ti(r){return r==null?!1:r.settings!==void 0}/**
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
 */const ei={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Z=new zr("app","Firebase",ei);/**
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
 */class ri{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=Js;function Qr(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:Re,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw Z.create("bad-app-name",{appName:String(s)});if(e||(e=qr()),!e)throw Z.create("no-options");const i=Qt.get(s);if(i)if(Kt(e,i.options)){if(Kt(n,i.config))return i;throw Z.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Z.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(e)});const a=new os(s);for(const g of Pe.values())a.addComponent(g);const m=new ri(e,n,a);return Qt.set(s,m),m}function si(r=Re){const t=Qt.get(r);if(!t&&r===Re&&qr())return Qr();if(!t)throw Z.create("no-app",{appName:r});return t}function gt(r,t,e){let n=Ys[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tt.warn(a.join(" "));return}Jt(new Nt(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const ii="firebase-heartbeat-database",oi=1,Rt="firebase-heartbeat-store";let Ie=null;function Jr(){return Ie||(Ie=bs(ii,oi,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Rt)}catch(e){console.warn(e)}}}}).catch(r=>{throw Z.create("idb-open",{originalErrorMessage:r.message})})),Ie}async function ai(r){try{const e=(await Jr()).transaction(Rt),n=await e.objectStore(Rt).get(Yr(r));return await e.done,n}catch(t){if(t instanceof wt)tt.warn(t.message);else{const e=Z.create("idb-get",{originalErrorMessage:t?.message});tt.warn(e.message)}}}async function hr(r,t){try{const n=(await Jr()).transaction(Rt,"readwrite");await n.objectStore(Rt).put(t,Yr(r)),await n.done}catch(e){if(e instanceof wt)tt.warn(e.message);else{const n=Z.create("idb-set",{originalErrorMessage:e?.message});tt.warn(n.message)}}}function Yr(r){return`${r.name}!${r.options.appId}`}/**
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
 */const li=1024,ci=30;class ui{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new di(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=dr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>ci){const s=fi(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){tt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dr(),{heartbeatsToSend:e,unsentEntries:n}=hi(this._heartbeatsCache.heartbeats),s=Wt(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return tt.warn(t),""}}}function dr(){return new Date().toISOString().substring(0,10)}function hi(r,t=li){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),fr(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),fr(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class di{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xn()?Zn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ai(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return hr(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return hr(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function fr(r){return Wt(JSON.stringify({version:2,heartbeats:r})).length}function fi(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function pi(r){Jt(new Nt("platform-logger",t=>new ws(t),"PRIVATE")),Jt(new Nt("heartbeat",t=>new ui(t),"PRIVATE")),gt(Ne,cr,r),gt(Ne,cr,"esm2020"),gt("fire-js","")}/**
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
 */pi("");var mi="firebase",gi="12.19.0";/**
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
 */gt(mi,gi,"app");var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(u,o){function c(){}c.prototype=o.prototype,u.F=o.prototype,u.prototype=new c,u.prototype.constructor=u,u.D=function(f,d,p){for(var l=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)l[ct-2]=arguments[ct];return o.prototype[d].apply(f,l)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(u,o,c){c||(c=0);const f=Array(16);if(typeof o=="string")for(var d=0;d<16;++d)f[d]=o.charCodeAt(c++)|o.charCodeAt(c++)<<8|o.charCodeAt(c++)<<16|o.charCodeAt(c++)<<24;else for(d=0;d<16;++d)f[d]=o[c++]|o[c++]<<8|o[c++]<<16|o[c++]<<24;o=u.g[0],c=u.g[1],d=u.g[2];let p=u.g[3],l;l=o+(p^c&(d^p))+f[0]+3614090360&4294967295,o=c+(l<<7&4294967295|l>>>25),l=p+(d^o&(c^d))+f[1]+3905402710&4294967295,p=o+(l<<12&4294967295|l>>>20),l=d+(c^p&(o^c))+f[2]+606105819&4294967295,d=p+(l<<17&4294967295|l>>>15),l=c+(o^d&(p^o))+f[3]+3250441966&4294967295,c=d+(l<<22&4294967295|l>>>10),l=o+(p^c&(d^p))+f[4]+4118548399&4294967295,o=c+(l<<7&4294967295|l>>>25),l=p+(d^o&(c^d))+f[5]+1200080426&4294967295,p=o+(l<<12&4294967295|l>>>20),l=d+(c^p&(o^c))+f[6]+2821735955&4294967295,d=p+(l<<17&4294967295|l>>>15),l=c+(o^d&(p^o))+f[7]+4249261313&4294967295,c=d+(l<<22&4294967295|l>>>10),l=o+(p^c&(d^p))+f[8]+1770035416&4294967295,o=c+(l<<7&4294967295|l>>>25),l=p+(d^o&(c^d))+f[9]+2336552879&4294967295,p=o+(l<<12&4294967295|l>>>20),l=d+(c^p&(o^c))+f[10]+4294925233&4294967295,d=p+(l<<17&4294967295|l>>>15),l=c+(o^d&(p^o))+f[11]+2304563134&4294967295,c=d+(l<<22&4294967295|l>>>10),l=o+(p^c&(d^p))+f[12]+1804603682&4294967295,o=c+(l<<7&4294967295|l>>>25),l=p+(d^o&(c^d))+f[13]+4254626195&4294967295,p=o+(l<<12&4294967295|l>>>20),l=d+(c^p&(o^c))+f[14]+2792965006&4294967295,d=p+(l<<17&4294967295|l>>>15),l=c+(o^d&(p^o))+f[15]+1236535329&4294967295,c=d+(l<<22&4294967295|l>>>10),l=o+(d^p&(c^d))+f[1]+4129170786&4294967295,o=c+(l<<5&4294967295|l>>>27),l=p+(c^d&(o^c))+f[6]+3225465664&4294967295,p=o+(l<<9&4294967295|l>>>23),l=d+(o^c&(p^o))+f[11]+643717713&4294967295,d=p+(l<<14&4294967295|l>>>18),l=c+(p^o&(d^p))+f[0]+3921069994&4294967295,c=d+(l<<20&4294967295|l>>>12),l=o+(d^p&(c^d))+f[5]+3593408605&4294967295,o=c+(l<<5&4294967295|l>>>27),l=p+(c^d&(o^c))+f[10]+38016083&4294967295,p=o+(l<<9&4294967295|l>>>23),l=d+(o^c&(p^o))+f[15]+3634488961&4294967295,d=p+(l<<14&4294967295|l>>>18),l=c+(p^o&(d^p))+f[4]+3889429448&4294967295,c=d+(l<<20&4294967295|l>>>12),l=o+(d^p&(c^d))+f[9]+568446438&4294967295,o=c+(l<<5&4294967295|l>>>27),l=p+(c^d&(o^c))+f[14]+3275163606&4294967295,p=o+(l<<9&4294967295|l>>>23),l=d+(o^c&(p^o))+f[3]+4107603335&4294967295,d=p+(l<<14&4294967295|l>>>18),l=c+(p^o&(d^p))+f[8]+1163531501&4294967295,c=d+(l<<20&4294967295|l>>>12),l=o+(d^p&(c^d))+f[13]+2850285829&4294967295,o=c+(l<<5&4294967295|l>>>27),l=p+(c^d&(o^c))+f[2]+4243563512&4294967295,p=o+(l<<9&4294967295|l>>>23),l=d+(o^c&(p^o))+f[7]+1735328473&4294967295,d=p+(l<<14&4294967295|l>>>18),l=c+(p^o&(d^p))+f[12]+2368359562&4294967295,c=d+(l<<20&4294967295|l>>>12),l=o+(c^d^p)+f[5]+4294588738&4294967295,o=c+(l<<4&4294967295|l>>>28),l=p+(o^c^d)+f[8]+2272392833&4294967295,p=o+(l<<11&4294967295|l>>>21),l=d+(p^o^c)+f[11]+1839030562&4294967295,d=p+(l<<16&4294967295|l>>>16),l=c+(d^p^o)+f[14]+4259657740&4294967295,c=d+(l<<23&4294967295|l>>>9),l=o+(c^d^p)+f[1]+2763975236&4294967295,o=c+(l<<4&4294967295|l>>>28),l=p+(o^c^d)+f[4]+1272893353&4294967295,p=o+(l<<11&4294967295|l>>>21),l=d+(p^o^c)+f[7]+4139469664&4294967295,d=p+(l<<16&4294967295|l>>>16),l=c+(d^p^o)+f[10]+3200236656&4294967295,c=d+(l<<23&4294967295|l>>>9),l=o+(c^d^p)+f[13]+681279174&4294967295,o=c+(l<<4&4294967295|l>>>28),l=p+(o^c^d)+f[0]+3936430074&4294967295,p=o+(l<<11&4294967295|l>>>21),l=d+(p^o^c)+f[3]+3572445317&4294967295,d=p+(l<<16&4294967295|l>>>16),l=c+(d^p^o)+f[6]+76029189&4294967295,c=d+(l<<23&4294967295|l>>>9),l=o+(c^d^p)+f[9]+3654602809&4294967295,o=c+(l<<4&4294967295|l>>>28),l=p+(o^c^d)+f[12]+3873151461&4294967295,p=o+(l<<11&4294967295|l>>>21),l=d+(p^o^c)+f[15]+530742520&4294967295,d=p+(l<<16&4294967295|l>>>16),l=c+(d^p^o)+f[2]+3299628645&4294967295,c=d+(l<<23&4294967295|l>>>9),l=o+(d^(c|~p))+f[0]+4096336452&4294967295,o=c+(l<<6&4294967295|l>>>26),l=p+(c^(o|~d))+f[7]+1126891415&4294967295,p=o+(l<<10&4294967295|l>>>22),l=d+(o^(p|~c))+f[14]+2878612391&4294967295,d=p+(l<<15&4294967295|l>>>17),l=c+(p^(d|~o))+f[5]+4237533241&4294967295,c=d+(l<<21&4294967295|l>>>11),l=o+(d^(c|~p))+f[12]+1700485571&4294967295,o=c+(l<<6&4294967295|l>>>26),l=p+(c^(o|~d))+f[3]+2399980690&4294967295,p=o+(l<<10&4294967295|l>>>22),l=d+(o^(p|~c))+f[10]+4293915773&4294967295,d=p+(l<<15&4294967295|l>>>17),l=c+(p^(d|~o))+f[1]+2240044497&4294967295,c=d+(l<<21&4294967295|l>>>11),l=o+(d^(c|~p))+f[8]+1873313359&4294967295,o=c+(l<<6&4294967295|l>>>26),l=p+(c^(o|~d))+f[15]+4264355552&4294967295,p=o+(l<<10&4294967295|l>>>22),l=d+(o^(p|~c))+f[6]+2734768916&4294967295,d=p+(l<<15&4294967295|l>>>17),l=c+(p^(d|~o))+f[13]+1309151649&4294967295,c=d+(l<<21&4294967295|l>>>11),l=o+(d^(c|~p))+f[4]+4149444226&4294967295,o=c+(l<<6&4294967295|l>>>26),l=p+(c^(o|~d))+f[11]+3174756917&4294967295,p=o+(l<<10&4294967295|l>>>22),l=d+(o^(p|~c))+f[2]+718787259&4294967295,d=p+(l<<15&4294967295|l>>>17),l=c+(p^(d|~o))+f[9]+3951481745&4294967295,u.g[0]=u.g[0]+o&4294967295,u.g[1]=u.g[1]+(d+(l<<21&4294967295|l>>>11))&4294967295,u.g[2]=u.g[2]+d&4294967295,u.g[3]=u.g[3]+p&4294967295}n.prototype.v=function(u,o){o===void 0&&(o=u.length);const c=o-this.blockSize,f=this.C;let d=this.h,p=0;for(;p<o;){if(d==0)for(;p<=c;)s(this,u,p),p+=this.blockSize;if(typeof u=="string"){for(;p<o;)if(f[d++]=u.charCodeAt(p++),d==this.blockSize){s(this,f),d=0;break}}else for(;p<o;)if(f[d++]=u[p++],d==this.blockSize){s(this,f),d=0;break}}this.h=d,this.o+=o},n.prototype.A=function(){var u=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);u[0]=128;for(var o=1;o<u.length-8;++o)u[o]=0;o=this.o*8;for(var c=u.length-8;c<u.length;++c)u[c]=o&255,o/=256;for(this.v(u),u=Array(16),o=0,c=0;c<4;++c)for(let f=0;f<32;f+=8)u[o++]=this.g[c]>>>f&255;return u};function i(u,o){var c=m;return Object.prototype.hasOwnProperty.call(c,u)?c[u]:c[u]=o(u)}function a(u,o){this.h=o;const c=[];let f=!0;for(let d=u.length-1;d>=0;d--){const p=u[d]|0;f&&p==o||(c[d]=p,f=!1)}this.g=c}var m={};function g(u){return-128<=u&&u<128?i(u,function(o){return new a([o|0],o<0?-1:0)}):new a([u|0],u<0?-1:0)}function _(u){if(isNaN(u)||!isFinite(u))return I;if(u<0)return T(_(-u));const o=[];let c=1;for(let f=0;u>=c;f++)o[f]=u/c|0,c*=4294967296;return new a(o,0)}function b(u,o){if(u.length==0)throw Error("number format error: empty string");if(o=o||10,o<2||36<o)throw Error("radix out of range: "+o);if(u.charAt(0)=="-")return T(b(u.substring(1),o));if(u.indexOf("-")>=0)throw Error('number format error: interior "-" character');const c=_(Math.pow(o,8));let f=I;for(let p=0;p<u.length;p+=8){var d=Math.min(8,u.length-p);const l=parseInt(u.substring(p,p+d),o);d<8?(d=_(Math.pow(o,d)),f=f.j(d).add(_(l))):(f=f.j(c),f=f.add(_(l)))}return f}var I=g(0),w=g(1),R=g(16777216);r=a.prototype,r.m=function(){if(S(this))return-T(this).m();let u=0,o=1;for(let c=0;c<this.g.length;c++){const f=this.i(c);u+=(f>=0?f:4294967296+f)*o,o*=4294967296}return u},r.toString=function(u){if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(V(this))return"0";if(S(this))return"-"+T(this).toString(u);const o=_(Math.pow(u,6));var c=this;let f="";for(;;){const d=X(c,o).g;c=G(c,d.j(o));let p=((c.g.length>0?c.g[0]:c.h)>>>0).toString(u);if(c=d,V(c))return p+f;for(;p.length<6;)p="0"+p;f=p+f}},r.i=function(u){return u<0?0:u<this.g.length?this.g[u]:this.h};function V(u){if(u.h!=0)return!1;for(let o=0;o<u.g.length;o++)if(u.g[o]!=0)return!1;return!0}function S(u){return u.h==-1}r.l=function(u){return u=G(this,u),S(u)?-1:V(u)?0:1};function T(u){const o=u.g.length,c=[];for(let f=0;f<o;f++)c[f]=~u.g[f];return new a(c,~u.h).add(w)}r.abs=function(){return S(this)?T(this):this},r.add=function(u){const o=Math.max(this.g.length,u.g.length),c=[];let f=0;for(let d=0;d<=o;d++){let p=f+(this.i(d)&65535)+(u.i(d)&65535),l=(p>>>16)+(this.i(d)>>>16)+(u.i(d)>>>16);f=l>>>16,p&=65535,l&=65535,c[d]=l<<16|p}return new a(c,c[c.length-1]&-2147483648?-1:0)};function G(u,o){return u.add(T(o))}r.j=function(u){if(V(this)||V(u))return I;if(S(this))return S(u)?T(this).j(T(u)):T(T(this).j(u));if(S(u))return T(this.j(T(u)));if(this.l(R)<0&&u.l(R)<0)return _(this.m()*u.m());const o=this.g.length+u.g.length,c=[];for(var f=0;f<2*o;f++)c[f]=0;for(f=0;f<this.g.length;f++)for(let d=0;d<u.g.length;d++){const p=this.i(f)>>>16,l=this.i(f)&65535,ct=u.i(d)>>>16,nr=u.i(d)&65535;c[2*f+2*d]+=l*nr,ft(c,2*f+2*d),c[2*f+2*d+1]+=p*nr,ft(c,2*f+2*d+1),c[2*f+2*d+1]+=l*ct,ft(c,2*f+2*d+1),c[2*f+2*d+2]+=p*ct,ft(c,2*f+2*d+2)}for(u=0;u<o;u++)c[u]=c[2*u+1]<<16|c[2*u];for(u=o;u<2*o;u++)c[u]=0;return new a(c,0)};function ft(u,o){for(;(u[o]&65535)!=u[o];)u[o+1]+=u[o]>>>16,u[o]&=65535,o++}function j(u,o){this.g=u,this.h=o}function X(u,o){if(V(o))throw Error("division by zero");if(V(u))return new j(I,I);if(S(u))return o=X(T(u),o),new j(T(o.g),T(o.h));if(S(o))return o=X(u,T(o)),new j(T(o.g),o.h);if(u.g.length>30){if(S(u)||S(o))throw Error("slowDivide_ only works with positive integers.");for(var c=w,f=o;f.l(u)<=0;)c=rr(c),f=rr(f);var d=pt(c,1),p=pt(f,1);for(f=pt(f,2),c=pt(c,2);!V(f);){var l=p.add(f);l.l(u)<=0&&(d=d.add(c),p=l),f=pt(f,1),c=pt(c,1)}return o=G(u,d.j(o)),new j(d,o)}for(d=I;u.l(o)>=0;){for(c=Math.max(1,Math.floor(u.m()/o.m())),f=Math.ceil(Math.log(c)/Math.LN2),f=f<=48?1:Math.pow(2,f-48),p=_(c),l=p.j(o);S(l)||l.l(u)>0;)c-=f,p=_(c),l=p.j(o);V(p)&&(p=w),d=d.add(p),u=G(u,l)}return new j(d,u)}r.B=function(u){return X(this,u).h},r.and=function(u){const o=Math.max(this.g.length,u.g.length),c=[];for(let f=0;f<o;f++)c[f]=this.i(f)&u.i(f);return new a(c,this.h&u.h)},r.or=function(u){const o=Math.max(this.g.length,u.g.length),c=[];for(let f=0;f<o;f++)c[f]=this.i(f)|u.i(f);return new a(c,this.h|u.h)},r.xor=function(u){const o=Math.max(this.g.length,u.g.length),c=[];for(let f=0;f<o;f++)c[f]=this.i(f)^u.i(f);return new a(c,this.h^u.h)};function rr(u){const o=u.g.length+1,c=[];for(let f=0;f<o;f++)c[f]=u.i(f)<<1|u.i(f-1)>>>31;return new a(c,u.h)}function pt(u,o){const c=o>>5;o%=32;const f=u.g.length-c,d=[];for(let p=0;p<f;p++)d[p]=o>0?u.i(p+c)>>>o|u.i(p+c+1)<<32-o:u.i(p+c);return new a(d,u.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=_,a.fromString=b,Xr=a}).apply(typeof pr<"u"?pr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class x{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}x.UNAUTHENTICATED=new x(null),x.GOOGLE_CREDENTIALS=new x("google-credentials-uid"),x.FIRST_PARTY=new x("first-party-uid"),x.MOCK_USER=new x("mock-user");/**
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
 */let vt="12.19.0";function _i(r){vt=r}/**
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
 */const It=new Hr("@firebase/firestore");function Yt(r,...t){if(It.logLevel<=A.DEBUG){const e=t.map(Ue);It.debug(`Firestore (${vt}): ${r}`,...e)}}function Me(r,...t){if(It.logLevel<=A.ERROR){const e=t.map(Ue);It.error(`Firestore (${vt}): ${r}`,...e)}}function Zr(r,...t){if(It.logLevel<=A.WARN){const e=t.map(Ue);It.warn(`Firestore (${vt}): ${r}`,...e)}}function Ue(r){if(typeof r=="string")return r;try{return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
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
 */function $(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,tn(r,n,e)}function tn(r,t,e){let n=`FIRESTORE (${vt}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Me(n),new Error(n)}function et(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||tn(t,s,n)}function Pt(r,t){return r}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class E extends wt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class en{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(x.UNAUTHENTICATED)))}shutdown(){}}class bi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ei{constructor(t){this.auth=null,t.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(et(typeof t.accessToken=="string",42297,{Z:t}),new en(t.accessToken,new x(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class Ii{constructor(t,e,n){this.ee=t,this.te=e,this.re=n,this.type="FirstParty",this.user=x.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const t=this.ie();return t&&this.ne.set("Authorization",t),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class wi{constructor(t,e,n){this.ee=t,this.te=e,this.re=n}getToken(){return Promise.resolve(new Ii(this.ee,this.te,this.re))}start(t,e){t.enqueueRetryable((()=>e(x.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vi{constructor(t,e){this.se=e,this.appCheck=null,this.oe=null,ti(t)&&t.settings.appCheckToken&&(this.oe=t.settings.appCheckToken),e.onInit((n=>{this.appCheck=n}))}getToken(){return this.oe?Promise.resolve(new mr(this.oe)):this.appCheck?this.appCheck.getToken().then((t=>t?(et(typeof t.token=="string",3470,{tokenResult:t}),new mr(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */class Ai{constructor(t,e,n,s,i,a,m,g,_,b,I,w,R){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=b,this.apiKey=I,this._customHeaders=w,this.grpcFlowControlWindow=R}}const De="(default)";class Dt{constructor(t,e){this.projectId=t,this.database=e||De}static empty(){return new Dt("","")}get isDefaultDatabase(){return this.database===De}isEqual(t){return t instanceof Dt&&t.projectId===this.projectId&&t.database===this.database}}function Ti(r,t){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new E(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dt(r.options.projectId,t)}function P(r,t){return r<t?-1:r>t?1:0}function Ce(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return we(s)===we(i)?P(s,i):we(s)?1:-1}return P(r.length,t.length)}const Vi=55296,Si=57343;function we(r){const t=r.charCodeAt(0);return t>=Vi&&t<=Si}function Ni(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}/**
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
 */const Oe="__name__";class Q{constructor(t,e,n){e===void 0?e=0:e>t.length&&$(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&$(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Q.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Q?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Q.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return P(t.length,e.length)}static compareSegments(t,e){const n=Q.isNumericId(t),s=Q.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Q.extractNumericId(t).compare(Q.extractNumericId(e)):Ce(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xr.fromString(t.substring(4,t.length-2))}}class O extends Q{construct(t,e,n){return new O(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(y.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new O(e)}static emptyPath(){return new O([])}}const Ri=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let _t=class mt extends Q{construct(t,e,n){return new mt(t,e,n)}static isValidIdentifier(t){return Ri.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Oe}static keyField(){return new mt([Oe])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new E(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const m=t[s];if(m==="\\"){if(s+1===t.length)throw new E(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[s+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new E(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=g,s+=2}else m==="`"?(a=!a,s++):m!=="."||a?(n+=m,s++):(i(),s++)}if(i(),a)throw new E(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}};/**
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
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(O.fromString(t))}static fromName(t){return new k(O.fromString(t).popFirst(5))}static empty(){return new k(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return O.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new O(t.slice()))}}/**
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
 */function Pi(r,t,e){if(!e)throw new E(y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function gr(r){if(k.isDocumentKey(r))throw new E(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function rn(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ce(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":$(12329,{type:typeof r})}function xe(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new E(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ce(r);throw new E(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Di(r,t){if(t<=0)throw new E(y.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
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
 */function nn(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */let Bt=null;function Ci(){return Bt===null?Bt=(function(){return 268435456+Math.round(2147483648*Math.random())})():Bt++,"0x"+Bt.toString(16)}/**
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
 */function Oi(r){return r==null}function Xt(r){return r===0&&1/r==-1/0}/**
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
 */const ve="RestConnection",$i={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Fi{get ae(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.ue=e+"://"+t.host,this._e=`projects/${n}/databases/${s}`,this.ce=this.databaseId.database===De?`project_id=${n}`:`project_id=${n}&database_id=${s}`}le(t,e,n,s,i){const a=Ci(),m=this.he(t,e.toUriEncodedString());Yt(ve,`Sending RPC '${t}' ${a}:`,m,n);const g={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.fe(g,s,i);const{host:_}=new URL(m),b=Gr(_);return this.me(t,m,g,n,b).then((I=>(Yt(ve,`Received RPC '${t}' ${a}: `,I),I)),(I=>{throw Zr(ve,`RPC '${t}' ${a} failed with error: `,I,"url: ",m,"request:",n),I}))}de(t,e,n,s,i,a){return this.le(t,e,n,s,i)}fe(t,e,n){if(t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vt})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))t[s]=this.databaseInfo._customHeaders[s]}he(t,e){const n=$i[t];let s=`${this.ue}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */var _r,v;function yr(r){if(r===void 0)return Me("RPC_ERROR","HTTP error has no status"),y.UNKNOWN;switch(r){case 200:return y.OK;case 400:return y.FAILED_PRECONDITION;case 401:return y.UNAUTHENTICATED;case 403:return y.PERMISSION_DENIED;case 404:return y.NOT_FOUND;case 409:return y.ABORTED;case 416:return y.OUT_OF_RANGE;case 429:return y.RESOURCE_EXHAUSTED;case 499:return y.CANCELLED;case 500:return y.UNKNOWN;case 501:return y.UNIMPLEMENTED;case 503:return y.UNAVAILABLE;case 504:return y.DEADLINE_EXCEEDED;default:return r>=200&&r<300?y.OK:r>=400&&r<500?y.FAILED_PRECONDITION:r>=500&&r<600?y.INTERNAL:y.UNKNOWN}}/**
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
 */(v=_r||(_r={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS";class ki extends Fi{Ee(t,e){throw new Error("Not supported by FetchConnection")}async me(t,e,n,s,i){const a=JSON.stringify(s);let m;try{const g={method:"POST",headers:n,body:a};i&&(g.credentials="include"),m=await fetch(e,g)}catch(g){const _=g,b=_?.message,I=_?.cause?String(_.cause):void 0,w=(b&&I?`${b} (${I})`:b??I)??_?.statusText??String(g);throw new E(yr(_?.status),`Request failed with error: ${w}`)}if(!m.ok){let g=await m.json();Array.isArray(g)&&(g=g[0]);const _=g?.error?.message;throw new E(yr(m.status),`Request failed with error: ${_??m.statusText}`)}return m.json()}}/**
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
 */function br(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ue(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Li(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}/**
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
 */class Mi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mi("Invalid base64 string: "+i):i}})(t);return new rt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Ui=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(r){if(et(!!r,39018),typeof r=="string"){let t=0;const e=Ui.exec(r);if(et(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:D(r.seconds),nanos:D(r.nanos)}}function D(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ct(r){return typeof r=="string"?rt.fromBase64String(r):rt.fromUint8Array(r)}/**
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
 */function z(r,t){const e={typeString:r};return t&&(e.value=t),e}function Mt(r,t){if(!rn(r))throw new E(y.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new E(y.INVALID_ARGUMENT,e);return!0}/**
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
 */const Er=-62135596800,Ir=1e6;class N{static now(){return N.fromMillis(Date.now())}static fromDate(t){return N.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Ir);return new N(e,n)}static fromInstant(t){if(!t||typeof t.Te!="bigint")throw new E(y.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return N._fromEpochNanoseconds(t.Te)}static _fromEpochNanoseconds(t){let e,n;if(t>=0n)e=Number(t/1000000000n),n=Number(t%1000000000n);else{const s=t%1000000000n;s===0n?(e=Number(t/1000000000n),n=0):(e=Number(t/1000000000n-1n),n=Number(s+1000000000n))}return new N(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Er)throw new E(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ir}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new E(y.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const t=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(t)}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:N._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Mt(t,N._jsonSchema))return new N(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Er;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}N._jsonSchemaVersion="firestore/timestamp/1.0",N._jsonSchema={type:z("string",N._jsonSchemaVersion),seconds:z("number"),nanoseconds:z("number")};function Be(r){return(r?.mapValue?.fields||{}).__type__?.stringValue==="server_timestamp"}function sn(r){const t=r.mapValue.fields.__previous_value__;return Be(t)?sn(t):t}function Ot(r){const t=ht(r.mapValue.fields.__local_write_time__.timestampValue);return new N(t.seconds,t.nanos)}/**
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
 */const on="__type__",xi="__max__",jt={},an="__vector__",Zt="value";function dt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Be(r)?4:(function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===xi})(r)?9007199254740991:(function(e){return(e?.mapValue?.fields||{})[on]?.stringValue===an})(r)?10:11:$(28295,{value:r})}function te(r,t,e){if(r===t)return!0;const n=dt(r);if(n!==dt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ot(r).isEqual(Ot(t));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const m=ht(i.timestampValue),g=ht(a.timestampValue);return m.seconds===g.seconds&&m.nanos===g.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,a){return Ct(i.bytesValue).isEqual(Ct(a.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,a){return D(i.geoPointValue.latitude)===D(a.geoPointValue.latitude)&&D(i.geoPointValue.longitude)===D(a.geoPointValue.longitude)})(r,t);case 2:return(function(i,a,m){if("integerValue"in i&&"integerValue"in a)return D(i.integerValue)===D(a.integerValue);let g,_;return!("doubleValue"in i)||!("doubleValue"in a)?!1:(g=D(i.doubleValue),_=D(a.doubleValue),g===_?Xt(g)===Xt(_):!!(m===void 0||m.Pe)&&isNaN(g)&&isNaN(_))})(r,t,e);case 9:return Ni(r.arrayValue.values||[],t.arrayValue.values||[],((s,i)=>te(s,i,e)));case 10:case 11:return(function(i,a,m){const g=i.mapValue.fields||{},_=a.mapValue.fields||{};if(br(g)!==br(_))return!1;for(const b in g)if(g.hasOwnProperty(b)&&(_[b]===void 0||!te(g[b],_[b],m)))return!1;return!0})(r,t,e);default:return $(52216,{left:r})}}function $t(r,t){return(r.values||[]).find((e=>te(e,t)))!==void 0}function ee(r,t){if(r===t)return 0;const e=dt(r),n=dt(t);if(e!==n)return P(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return P(r.booleanValue,t.booleanValue);case 2:return(function(i,a){const m=D(i.integerValue||i.doubleValue),g=D(a.integerValue||a.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,t);case 3:return wr(r.timestampValue,t.timestampValue);case 4:return wr(Ot(r),Ot(t));case 5:return Ce(r.stringValue,t.stringValue);case 6:return(function(i,a){const m=Ct(i),g=Ct(a);return m.compareTo(g)})(r.bytesValue,t.bytesValue);case 7:return(function(i,a){const m=i.split("/"),g=a.split("/");for(let _=0;_<m.length&&_<g.length;_++){const b=P(m[_],g[_]);if(b!==0)return b}return P(m.length,g.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,a){const m=P(D(i.latitude),D(a.latitude));return m!==0?m:P(D(i.longitude),D(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return vr(r.arrayValue,t.arrayValue);case 10:return(function(i,a){const m=i.fields||{},g=a.fields||{},_=m[Zt]?.arrayValue,b=g[Zt]?.arrayValue,I=P(_?.values?.length||0,b?.values?.length||0);return I!==0?I:vr(_,b)})(r.mapValue,t.mapValue);case 11:return(function(i,a){if(i===jt&&a===jt)return 0;if(i===jt)return 1;if(a===jt)return-1;const m=i.fields||{},g=Object.keys(m),_=a.fields||{},b=Object.keys(_);g.sort(),b.sort();for(let I=0;I<g.length&&I<b.length;++I){const w=Ce(g[I],b[I]);if(w!==0)return w;const R=ee(m[g[I]],_[b[I]]);if(R!==0)return R}return P(g.length,b.length)})(r.mapValue,t.mapValue);default:throw $(23264,{Re:e})}}function wr(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return P(r,t);const e=ht(r),n=ht(t),s=P(e.seconds,n.seconds);return s!==0?s:P(e.nanos,n.nanos)}function vr(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=ee(e[s],n[s]);if(i!==void 0&&i!==0)return i}return P(e.length,n.length)}function re(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ln(r){return!!r&&"arrayValue"in r}function Ar(r){return!!r&&"nullValue"in r}function Tr(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ae(r){return!!r&&"mapValue"in r}function Tt(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ue(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Tt(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Tt(r.arrayValue.values[e]);return t}return{...r}}class ne{constructor(t,e){this.position=t,this.inclusive=e}}/**
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
 */class cn{}class K extends cn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Bi(t,e,n):e==="array-contains"?new zi(t,n):e==="in"?new Gi(t,n):e==="not-in"?new Hi(t,n):e==="array-contains-any"?new Wi(t,n):new K(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ji(t,n):new qi(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ee(e,this.value)):e!==null&&dt(this.value)===dt(e)&&this.matchesComparison(ee(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends cn{constructor(t,e){super(),this.filters=t,this.op=e,this.Ae=null}static create(t,e){return new Ut(t,e)}matches(t){return(function(n){return n.op==="and"})(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Ae!==null||(this.Ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Ae}getFilters(){return Object.assign([],this.filters)}}class Bi extends K{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class ji extends K{constructor(t,e){super(t,"in",e),this.keys=un("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class qi extends K{constructor(t,e){super(t,"not-in",e),this.keys=un("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function un(r,t){return(t.arrayValue?.values||[]).map((e=>k.fromName(e.referenceValue)))}class zi extends K{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ln(e)&&$t(e.arrayValue,this.value)}}class Gi extends K{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&$t(this.value.arrayValue,e)}}class Hi extends K{constructor(t,e){super(t,"not-in",e)}matches(t){if($t(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!$t(this.value.arrayValue,e)}}class Wi extends K{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ln(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>$t(this.value.arrayValue,n)))}}/**
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
 */class se{constructor(t,e="asc"){this.field=t,this.dir=e}}/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new N(0,0))}static max(){return new L(new N(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ie{constructor(t,e){this.comparator=t,this.root=e||F.EMPTY}insert(t,e){return new ie(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,F.BLACK,null,null))}remove(t){return new ie(this.comparator,this.root.remove(t,this.comparator).copy(null,null,F.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qt(this.root,t,this.comparator,!1)}getReverseIterator(){return new qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qt(this.root,t,this.comparator,!0)}}class qt{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class F{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??F.RED,this.left=s??F.EMPTY,this.right=i??F.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new F(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return F.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return F.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw $(27949);return t+(this.isRed()?0:1)}}F.EMPTY=null,F.RED=!0,F.BLACK=!1;F.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new F(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class oe{constructor(t){this.comparator=t,this.data=new ie(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vr(this.data.getIterator())}getIteratorFrom(t){return new Vr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof oe)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new oe(this.comparator);return e.data=t,e}}class Vr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class J{constructor(t){this.value=t}static empty(){return new J({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ae(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Tt(e)}setAll(t){let e=_t.emptyPath(),n={},s=[];t.forEach(((a,m)=>{if(!e.isImmediateParentOf(m)){const g=this.getFieldsMap(e);this.applyChanges(g,n,s),n={},s=[],e=m.popLast()}a?n[m.lastSegment()]=Tt(a):s.push(m.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ae(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return te(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ae(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ue(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new J(Tt(this.value))}}/**
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
 */class st{constructor(t,e,n,s,i,a,m){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=m}static newInvalidDocument(t){return new st(t,0,L.min(),L.min(),L.min(),J.empty(),0)}static newFoundDocument(t,e,n,s){return new st(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new st(t,2,e,L.min(),L.min(),J.empty(),0)}static newUnknownDocument(t,e){return new st(t,3,e,L.min(),L.min(),J.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=J.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=J.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof st&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ki{constructor(t,e=null,n=[],s=[],i=null,a=null,m=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=m,this.Ie=null}}function Sr(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Ki(r,t,e,n,s,i,a)}/**
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
 */class xt{constructor(t,e=null,n=[],s=[],i=null,a="F",m=null,g=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=m,this.endAt=g,this.pe=null,this.ye=null,this.we=null,this.startAt,this.endAt}}function hn(r){return r.collectionGroup!==null}function dn(r){const t=Pt(r);if(t.pe===null){t.pe=[];const e=new Set;for(const i of t.explicitOrderBy)t.pe.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let m=new oe(_t.comparator);return a.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.pe.push(new se(i,n))})),e.has(_t.keyField().canonicalString())||t.pe.push(new se(_t.keyField(),n))}return t.pe}function Qi(r){const t=Pt(r);return t.ye||(t.ye=fn(t,dn(r))),t.ye}function fn(r,t){if(r.limitType==="F")return Sr(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new se(s.field,i)}));const e=r.endAt?new ne(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ne(r.startAt.position,r.startAt.inclusive):null;return Sr(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function $e(r,t){const e=r.filters.concat([t]);return new xt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}/**
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
 */function pn(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xt(t)?"-0":t}}function Ji(r,t,e){return(function(s){return typeof s=="number"&&Number.isInteger(s)&&!Xt(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER})(t)?(function(s){return{integerValue:""+s}})(t):pn(r,t)}/**
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
 */const Yi={asc:"ASCENDING",desc:"DESCENDING"},Xi={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zi={and:"AND",or:"OR"};class to{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Te(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function eo(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Nr(r){return et(!!r,49232),L.fromTimestamp((function(e){const n=ht(e);return new N(n.seconds,n.nanos)})(r))}function mn(r,t){return Fe(r,t).canonicalString()}function Fe(r,t){const e=(function(s){return new O(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function ro(r,t){const e=(function(s){const i=O.fromString(s);return et(yn(i),10190,{key:i.toString()}),i})(t);if(e.get(1)!==r.databaseId.projectId)throw new E(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new E(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k((function(s){return et(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)})(e))}function gn(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=(function(_,b){return mn(_.databaseId,b)})(r,s);const i=(function(_){if(_.length!==0)return _n(Ut.create(_,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(_){if(_.length!==0)return _.map((b=>(function(w){return{field:it(w.field),direction:no(w.dir)}})(b)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const m=(function(_,b){return _.useProto3Json||Oi(b)?b:{value:b}})(r,t.limit);return m!==null&&(e.structuredQuery.limit=m),t.startAt&&(e.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(t.endAt)),{ve:e,parent:s}}function no(r){return Yi[r]}function so(r){return Xi[r]}function io(r){return Zi[r]}function it(r){return{fieldPath:r.canonicalString()}}function _n(r){return r instanceof K?(function(e){if(e.op==="=="){if(Tr(e.value))return{unaryFilter:{field:it(e.field),op:"IS_NAN"}};if(Ar(e.value))return{unaryFilter:{field:it(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Tr(e.value))return{unaryFilter:{field:it(e.field),op:"IS_NOT_NAN"}};if(Ar(e.value))return{unaryFilter:{field:it(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:it(e.field),op:so(e.op),value:e.value}}})(r):r instanceof Ut?(function(e){const n=e.getFilters().map((s=>_n(s)));return n.length===1?n[0]:{compositeFilter:{op:io(e.op),filters:n}}})(r):$(54877,{filter:r})}function yn(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function bn(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */function je(r){return new to(r,!0)}/**
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
 */class oo{}class ao extends oo{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.be=!1}De(){if(this.be)throw new E(y.FAILED_PRECONDITION,"The client has already been terminated.")}le(t,e,n,s){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.le(t,Fe(e,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(y.UNKNOWN,i.toString())}))}de(t,e,n,s,i){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,m])=>this.connection.de(t,Fe(e,n),s,a,m,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new E(y.UNKNOWN,a.toString())}))}terminate(){this.be=!0,this.connection.terminate()}}async function lo(r,t){const e=Pt(r),{ve:n,parent:s}=gn(e.serializer,Qi(t));return(await e.de("RunQuery",e.serializer.databaseId,s,{structuredQuery:n.structuredQuery})).filter((i=>!!i.document)).map((i=>(function(m,g,_){const b=ro(m,g.name),I=Nr(g.updateTime),w=g.createTime?Nr(g.createTime):L.min(),R=new J({mapValue:{fields:g.fields}}),V=st.newFoundDocument(b,I,w,R);return _?V.setHasCommittedMutations():V})(e.serializer,i.document,void 0)))}async function co(r,t,e){const n=Pt(r),{request:s,Ne:i,parent:a}=(function(b,I,w,R){const{ve:V,parent:S}=gn(b,I),T={},G=[];let ft=0;return w.forEach((j=>{const X="aggregate_"+ft++;T[X]=j.alias,j.aggregateType==="count"?G.push({alias:X,count:{}}):j.aggregateType==="avg"?G.push({alias:X,avg:{field:it(j.fieldPath)}}):j.aggregateType==="sum"&&G.push({alias:X,sum:{field:it(j.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:G,structuredQuery:V.structuredQuery},parent:V.parent},Ne:T,parent:S}})(n.serializer,(function(b){const I=Pt(b);return I.we||(I.we=fn(I,b.explicitOrderBy)),I.we})(t),e);n.connection.ae||delete s.parent;const m=(await n.de("RunAggregationQuery",n.serializer.databaseId,a,s,1)).filter((_=>!!_.result));et(m.length===1,64727);const g=m[0].result?.aggregateFields;return Object.keys(g).reduce(((_,b)=>(_[i[b]]=g[b],_)),{})}/**
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
 */const En="ComponentProvider",Vt=new Map;function In(r){if(r._terminated)throw new E(y.FAILED_PRECONDITION,"The client has already been terminated.");if(!Vt.has(r)){Yt(En,"Initializing Datastore");const t=(function(i){return new ki(i)})((function(i,a,m,g,_){return new Ai(i,a,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,nn(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator,g,_._customHeaders,_.grpcFlowControlWindow)})(r._databaseId,r.app.options.appId||"",r._persistenceKey,r.app.options.apiKey,r._freezeSettings())),e=je(r._databaseId),n=(function(i,a,m,g){return new ao(i,a,m,g)})(r._authCredentials,r._appCheckCredentials,t,e);Vt.set(r,n)}return Vt.get(r)}const uo=1048576,wn="firestore.googleapis.com",Rr=!0;class Pr{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new E(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wn,this.ssl=Rr}else this.host=t.host,this.ssl=t.ssl??Rr;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<uo)throw new E(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if((function(n,s,i,a){if(s===!0&&a===!0)throw new E(y.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nn(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new E(y.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new E(y.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new E(y.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new E(y.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&(function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),a=Object.keys(s);if(i.length!==a.length)return!1;for(const m of i)if(n[m]!==s[m])return!1;return!0})(this._customHeaders,t._customHeaders)}}class he{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new E(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new E(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pr(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new yi;switch(n.type){case"firstParty":return new wi(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Vt.get(e);n&&(Yt(En,"Removing Datastore"),Vt.delete(e),n.terminate())})(this),Promise.resolve()}}function ho(r,t){const e=typeof r=="object"?r:si(),n=typeof r=="string"?r:t,s=Zs(e,"firestore/lite").getImmediate({identifier:n});if(!s._initialized){const i=Qn("firestore");i&&fo(s,...i)}return s}function fo(r,t,e,n={}){r=xe(r,he);const s=Gr(t),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},m=`${t}:${e}`;s&&rs(`https://${m}`),i.host!==wn&&i.host!==m&&Zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...i,host:m,ssl:s,emulatorOptions:n};if(!Kt(g,a)&&(r._setSettings(g),n.mockUserToken)){let _,b;if(typeof n.mockUserToken=="string")_=n.mockUserToken,b=x.MOCK_USER;else{_=Yn(n.mockUserToken,r._app?.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new E(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new x(I)}r._authCredentials=new bi(new en(_,b))}}/**
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
 */class nt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new nt(this.firestore,t,this._query)}}class M{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new M(this.firestore,t,this._key)}toJSON(){return{type:M._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Mt(e,M._jsonSchema))return new M(t,n||null,new k(O.fromString(e.referencePath)))}}M._jsonSchemaVersion="firestore/documentReference/1.0",M._jsonSchema={type:z("string",M._jsonSchemaVersion),referencePath:z("string")};class yt extends nt{constructor(t,e,n){super(t,e,(function(i){return new xt(i)})(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new M(this.firestore,null,new k(t))}withConverter(t){return new yt(this.firestore,t,this._path)}}function de(r,t,...e){if(r=Et(r),Pi("collection","path",t),r instanceof he){const n=O.fromString(t,...e);return gr(n),new yt(r,null,n)}{if(!(r instanceof M||r instanceof yt))throw new E(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(O.fromString(t,...e));return gr(n),new yt(r.firestore,null,n)}}/**
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
 */class q{constructor(t){this._byteString=t}static fromBase64String(t){try{return new q(rt.fromBase64String(t))}catch(e){throw new E(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new q(rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:q._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Mt(t,q._jsonSchema))return q.fromBase64String(t.bytes)}}q._jsonSchemaVersion="firestore/bytes/1.0",q._jsonSchema={type:z("string",q._jsonSchemaVersion),bytes:z("string")};/**
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
 */class qe{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new E(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function ze(){return new qe(Oe)}/**
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
 */class vn{constructor(t){this._methodName=t}}/**
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
 */class Y{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Y._jsonSchemaVersion}}static fromJSON(t){if(Mt(t,Y._jsonSchema))return new Y(t.latitude,t.longitude)}}Y._jsonSchemaVersion="firestore/geoPoint/1.0",Y._jsonSchema={type:z("string",Y._jsonSchemaVersion),latitude:z("number"),longitude:z("number")};/**
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
 */class H{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){/**
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
*/return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:H._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Mt(t,H._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new H(t.vectorValues);throw new E(y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}H._jsonSchemaVersion="firestore/vectorValue/1.0",H._jsonSchema={type:z("string",H._jsonSchemaVersion),vectorValues:z("object")};/**
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
 */const po=/^__.*__$/;function An(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{dataSource:r})}}class Ge{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Ge({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){const e=this.path?.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){const e=this.path?.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return ae(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(An(this.dataSource)&&po.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class mo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||je(t)}createContext(t,e,n,s=!1){return new Ge({dataSource:t,methodName:e,targetDoc:n,path:_t.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tn(r){const t=r._freezeSettings(),e=je(r._databaseId);return new mo(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Vn(r,t,e,n=!1){return He(e,r.createContext(n?4:3,t))}function He(r,t,e){if(Nn(r=Et(r)))return _o("Unsupported field value:",t,r),go(r,t);if(r instanceof vn)return(function(s,i){if(!An(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(s,i){const a=[];let m=0;for(const g of s){let _=He(g,i.childContextForArray(m));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),m++}return{arrayValue:{values:a}}})(r,t)}return(function(s,i,a){if((s=Et(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ji(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const m=N.fromDate(s);return{timestampValue:Te(i.serializer,m)}}if(s instanceof N){const m=new N(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Te(i.serializer,m)}}if(Sn(s)){const m=N.fromInstant(s),g=new N(m.seconds,1e3*Math.floor(m.nanoseconds/1e3));return{timestampValue:Te(i.serializer,g)}}if(s instanceof Y)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof q)return{bytesValue:eo(i.serializer,s._byteString)};if(s instanceof M){const m=i.databaseId,g=s.firestore._databaseId;if(!g.isEqual(m))throw i.createError(`Document reference is for database ${g.projectId}/${g.database} but should be for database ${m.projectId}/${m.database}`);return{referenceValue:mn(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof H)return(function(g,_){const b=g instanceof H?g.toArray():g;return{mapValue:{fields:{[on]:{stringValue:an},[Zt]:{arrayValue:{values:b.map((w=>{if(typeof w!="number")throw _.createError("VectorValues must only contain numeric values.");return pn(_.serializer,w)}))}}}}}})(s,i);if(bn(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${ce(s)}`)})(r,t)}function go(r,t){const e={};return(function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0})(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ue(r,((n,s)=>{const i=He(s,t.childContextForField(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function Sn(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;const t=r;return t[Symbol.toStringTag]==="Temporal.Instant"&&typeof t.Te=="bigint"}function Nn(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof N||r instanceof Y||r instanceof q||r instanceof M||r instanceof vn||r instanceof H||Sn(r)||bn(r))}function _o(r,t,e){if(!Nn(e)||!rn(e)){const n=ce(e);throw n==="an object"?t.createError(r+" a custom object"):t.createError(r+" "+n)}}function We(r,t,e){if((t=Et(t))instanceof qe)return t._internalPath;if(typeof t=="string")return bo(r,t);throw ae("Field path arguments must be of type string or ",r,!1,void 0,e)}const yo=new RegExp("[~\\*/\\[\\]]");function bo(r,t,e){if(t.search(yo)>=0)throw ae(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new qe(...t.split("."))._internalPath}catch{throw ae(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ae(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let m=`Function ${t}() called with invalid data`;e&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(i||a)&&(g+=" (found",i&&(g+=` in field ${n}`),a&&(g+=` in document ${s}`),g+=")"),new E(y.INVALID_ARGUMENT,m+r+g)}/**
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
 */class Rn{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new M(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Pn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(We("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Pn extends Rn{data(){return super.data()}}class Eo{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}/**
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
 */class Ke{}class fe extends Ke{}function pe(r,t,...e){let n=[];t instanceof Ke&&n.push(t),n=n.concat(e),(function(i){const a=i.filter((g=>g instanceof Qe)).length,m=i.filter((g=>g instanceof me)).length;if(a>1||a>0&&m>0)throw new E(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class me extends fe{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new me(t,e,n)}_apply(t){const e=this._parse(t);return Cn(t._query,e),new nt(t.firestore,t.converter,$e(t._query,e))}_parse(t){const e=Tn(t.firestore);return(function(i,a,m,g,_,b,I){let w;if(_.isKeyField()){if(b==="array-contains"||b==="array-contains-any")throw new E(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${b}' queries on documentId().`);if(b==="in"||b==="not-in"){Cr(I,b);const V=[];for(const S of I)V.push(Dr(g,i,S));w={arrayValue:{values:V}}}else w=Dr(g,i,I)}else b!=="in"&&b!=="not-in"&&b!=="array-contains-any"||Cr(I,b),w=Vn(m,a,I,b==="in"||b==="not-in");return K.create(_,b,w)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function at(r,t,e){const n=t,s=We("where",r);return me._create(s,n,e)}class Qe extends Ke{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qe(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:Ut.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const m=i.getFlattenedFilters();for(const g of m)Cn(a,g),a=$e(a,g)})(t._query,e),new nt(t.firestore,t.converter,$e(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Je extends fe{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Je(t,e)}_apply(t){const e=(function(s,i,a){if(s.startAt!==null)throw new E(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new E(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new se(i,a)})(t._query,this._field,this._direction);return new nt(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new xt(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function ke(r,t="asc"){const e=t,n=We("orderBy",r);return Je._create(n,e)}class Ye extends fe{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Ye(t,e,n)}_apply(t){return new nt(t.firestore,t.converter,(function(n,s,i){return new xt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),s,i,n.startAt,n.endAt)})(t._query,this._limit,this._limitType))}}function Xe(r){return Di("limit",r),Ye._create("limit",r,"F")}class Ze extends fe{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Ze(t,e,n)}_apply(t){const e=Io(t,this.type,this._docOrFields,this._inclusive);return new nt(t.firestore,t.converter,(function(s,i){return new xt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(t._query,e))}}function Dn(...r){return Ze._create("startAfter",r,!1)}function Io(r,t,e,n){if(e[0]=Et(e[0]),e[0]instanceof Rn)return(function(i,a,m,g,_){if(!g)throw new E(y.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${m}().`);const b=[];for(const I of dn(i))if(I.field.isKeyField())b.push(re(a,g.key));else{const w=g.data.field(I.field);if(Be(w))throw new E(y.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+I.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const R=I.field.canonicalString();throw new E(y.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}b.push(w)}return new ne(b,_)})(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=Tn(r.firestore);return(function(a,m,g,_,b,I){const w=a.explicitOrderBy;if(b.length>w.length)throw new E(y.INVALID_ARGUMENT,`Too many arguments provided to ${_}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let V=0;V<b.length;V++){const S=b[V];if(w[V].field.isKeyField()){if(typeof S!="string")throw new E(y.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${_}(), but got a ${typeof S}`);if(!hn(a)&&S.indexOf("/")!==-1)throw new E(y.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${_}() must be a plain document ID, but '${S}' contains a slash.`);const T=a.path.child(O.fromString(S));if(!k.isDocumentKey(T))throw new E(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${_}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const G=new k(T);R.push(re(m,G))}else{const T=Vn(g,_,S);R.push(T)}}return new ne(R,I)})(r._query,r.firestore._databaseId,s,t,e,n)}}function Dr(r,t,e){if(typeof(e=Et(e))=="string"){if(e==="")throw new E(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hn(t)&&e.indexOf("/")!==-1)throw new E(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(O.fromString(e));if(!k.isDocumentKey(n))throw new E(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return re(r,new k(n))}if(e instanceof M)return re(r,e._key);throw new E(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ce(e)}.`)}function Cr(r,t){if(!Array.isArray(r)||r.length===0)throw new E(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Cn(r,t){const e=(function(s,i){for(const a of s)for(const m of a.getFlattenedFilters())if(i.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new E(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class wo{convertValue(t,e="none"){switch(dt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return D(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ct(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw $(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ue(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){const e=t.fields?.[Zt].arrayValue?.values?.map((n=>D(n.doubleValue)));return new H(e)}convertGeoPoint(t){return new Y(D(t.latitude),D(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=sn(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ot(t));default:return null}}convertTimestamp(t){const e=ht(t);return new N(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=O.fromString(t);et(yn(n),9688,{name:t});const s=new Dt(n.get(1),n.get(3)),i=new k(n.popFirst(5));return s.isEqual(e)||Me(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}class On extends wo{constructor(t){super(),this.firestore=t}convertBytes(t){return new q(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new M(this.firestore,null,e)}}function tr(r){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new E(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((r=xe(r,nt))._query);const t=In(r.firestore),e=new On(r.firestore);return lo(t,r._query).then((n=>{const s=n.map((i=>new Pn(r.firestore,e,i.key,i,r.converter)));return r._query.limitType==="L"&&s.reverse(),new Eo(r,s)}))}const Or="4.17.2";/**
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
 */class vo{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
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
 */class Ao{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class To{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new J({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
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
 */function Vo(r){return So(r,{count:No()})}function So(r,t){const e=xe(r.firestore,he),n=In(e),s=Li(t,((i,a)=>new vo(a,i.aggregateType,i._internalFieldPath)));return co(n,r._query,s).then((i=>(function(m,g,_){const b=new On(m);return new To(g,b,_)})(e,r,i)))}function No(){return new Ao("count")}/**
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
 */(function(){_i(`${ni}_lite`),Jt(new Nt("firestore/lite",((t,{instanceIdentifier:e,options:n})=>{const s=t.getProvider("app").getImmediate(),i=new he(new Ei(t.getProvider("auth-internal")),new vi(s,t.getProvider("app-check-internal")),Ti(s,e),s);return n&&i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),gt("firestore-lite",Or,""),gt("firestore-lite",Or,"esm2020")})();const $r=24,lt=(r="")=>String(r).normalize("NFKD").toLowerCase().replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06EDـ]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/\s+/g," ").trim(),W=r=>r?.name||r?.title||"",$n=r=>[...r].sort((t,e)=>(Number.isFinite(t.order)?t.order:1/0)-(Number.isFinite(e.order)?e.order:1/0)||W(t).localeCompare(W(e),"ar")||t.id.localeCompare(e.id)),Fr=(r,t)=>!t||r.branchIds?.includes(t)||r.branchId===t,Ro=(r,t)=>!lt(t)||lt([r.title,r.name,r.description,...Array.isArray(r.keywords)?r.keywords:[],...Array.isArray(r.searchTokens)?r.searchTokens:[]].filter(Boolean).join(" ")).includes(lt(t)),Fn=r=>{try{const t=new URL(r);return t.protocol==="https:"?t.href:null}catch{return null}},C=r=>String(r??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Po=(r,t,e)=>{const n=["branch","subject","unit","lesson","type"],s={...r,[t]:e};for(const i of n.slice(n.indexOf(t)+1))s[i]="";return s},Do=r=>{const t=lt(W(r));return t.includes("علم")?"scientific":t.includes("ادب")?"literary":t.includes("صناع")?"industrial":t.includes("رياد")?"entrepreneurial":t.includes("تجار")?"commercial":null},Co=Qr({projectId:"minhaj-fresh",apiKey:"AIzaSyDlNZ9MyIblUCWszyWe_LiWgDQKoxuRHMQ",storageBucket:"minhaj-fresh.firebasestorage.app"}),ge=ho(Co,"(default)"),Oo=new Set(["branches","subjects","curriculumUnits","lessons","contentTypes"]);async function St(r,t={}){if(!Oo.has(r))throw new Error("catalog-not-allowed");const e=[at("active","==",!0)];if(r==="curriculumUnits"||r==="lessons"){if(!t.subject)return[];e.push(at("subjectId","==",t.subject))}r==="lessons"&&t.unit&&e.push(at("unitId","==",t.unit));let n=null;const s=[];do{const i=[...e,ke(ze()),Xe(200)];n&&i.push(Dn(n));const a=await tr(pe(de(ge,r),...i));s.push(...a.docs.map(m=>({...m.data(),id:m.id}))),n=a.size===200?a.docs.at(-1):null}while(n);return $n(s)}function kn(r){const t=[at("active","==",!0)];r.branch&&t.push(at("branchIds","array-contains",r.branch));for(const[e,n]of[["subject","subjectId"],["unit","unitId"],["lesson","lessonId"],["type","contentTypeId"]])r[e]&&t.push(at(n,"==",r[e]));return t}async function $o(r,t=null){const e=[...kn(r),ke("order","asc"),ke(ze(),"asc"),Xe($r)];t&&e.push(Dn(t));const n=await tr(pe(de(ge,"resources"),...e));if(n.docs.some(s=>!Number.isFinite(s.data().order)))throw new Error("invalid-order");return{items:n.docs.map(s=>({...s.data(),id:s.id})),cursor:n.docs.at(-1)||null,hasMore:n.size===$r}}async function Fo(r={}){return(await Vo(pe(de(ge,"resources"),...kn(r)))).data().count}async function ko(r){const t=[...new Set(r.filter(n=>typeof n=="string"&&n.length<=1500&&!n.includes("/")))],e=[];for(let n=0;n<t.length;n+=30){const s=await tr(pe(de(ge,"resources"),at("active","==",!0),at(ze(),"in",t.slice(n,n+30)),Xe(30)));e.push(...s.docs.map(i=>({...i.data(),id:i.id})))}return $n(e)}function Ft(r){return r.code==="failed-precondition"?"هذا الاختيار يحتاج فهرسًا في Firebase. جرّب مرشحات أقل أو أعد المحاولة لاحقًا.":r.code==="permission-denied"?"تعذّرت قراءة المحتوى المتاح. يرجى المحاولة لاحقًا.":r.message==="invalid-order"?"تحتاج بعض المصادر إلى ضبط ترتيبها قبل عرضها.":"لم نستطع الوصول إلى المكتبة. تحقق من اتصالك بالإنترنت ثم أعد المحاولة."}const kt=r=>`./assets/${r}`,kr={home:"m3 10 9-7 9 7v10H3V10Zm6 10v-7h6v7",book:"M12 7c-3-3-7-3-10-2v14c4-1 7 0 10 2m0-14c3-3 7-3 10-2v14c-4-1-7 0-10 2V7Z",heart:"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",info:"M12 11v6m0-10h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",search:"m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",arrow:"M19 12H5m7 7-7-7 7-7",filter:"M4 7h16M7 12h10m-7 5h4",check:"m5 12 4 4L19 6",external:"M14 3h7v7m0-7L10 14m0-11H3v18h18v-7",layers:"m12 3 10 6-10 6L2 9l10-6Zm-10 12 10 6 10-6M2 12l10 6 10-6",refresh:"M20 7v5h-5M4 17v-5h5M6 7a7 7 0 0 1 12-1l2 6M4 12l2 6a7 7 0 0 0 12-1"},U=r=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${kr[r]||kr.book}"/></svg>`,Lt=document.querySelector("#app"),le=r=>Number(r).toLocaleString("ar-PS"),_e={get(r,t){try{return JSON.parse(localStorage.getItem(r))??t}catch{return t}},set(r,t){try{return localStorage.setItem(r,JSON.stringify(t)),!0}catch{return!1}}},Lr=_e.get("minhaj-selection-v1",{}),h={view:["library","favorites","about"].includes(location.hash.slice(1))?location.hash.slice(1):"home",filters:{branch:Lr.branch||"",subject:"",unit:"",lesson:"",type:""},branches:[],subjects:[],units:[],lessons:[],types:[],items:[],favoriteItems:[],favoriteIds:_e.get("minhaj-favorites-v1",[]),cursor:null,hasMore:!1,total:null,totalAll:null,query:"",busy:!0,moreBusy:!1,catalogBusy:!0,catalogError:"",error:"",countError:!1,branchOpen:!Lr.branch,request:0,refs:0,online:navigator.onLine};Array.isArray(h.favoriteIds)||(h.favoriteIds=[]);const Gt={home:"الرئيسية",library:"المكتبة",favorites:"المفضلة",about:"عن منهاج"};function At(r){const t=document.createElement("div");t.className="toast",t.setAttribute("role","status"),t.textContent=r,document.body.append(t),setTimeout(()=>t.remove(),3500)}function Mr(r){location.hash=r==="home"?"":r,h.view===r&&B()}function Ur(){return W(h.branches.find(r=>r.id===h.filters.branch))}function zt(r,t,e){return`<option value="">${e}</option>`+r.map(n=>`<option value="${C(n.id)}" ${n.id===t?"selected":""}>${C(W(n))}</option>`).join("")}function Lo(){return`<details class="branch-picker" ${h.branchOpen?"open":""}><summary><span>${U("layers")} ${Ur()?`فرعك الدراسي: ${C(Ur())}`:"اختر فرعك الدراسي"}</span><span class="muted">${h.branchOpen?"إخفاء":"تغيير"} <span aria-hidden="true">⌄</span></span></summary><div class="branch-grid">${h.branches.map(r=>{const t=Do(r);return`<button class="branch-card ${h.filters.branch===r.id?"selected":""}" data-branch="${C(r.id)}" aria-pressed="${h.filters.branch===r.id}">${t?`<img src="${kt(`minhaj_branch_${t}.png`)}" alt=""/>`:U("book")}<span class="branch-copy">${C(W(r))}</span>${h.filters.branch===r.id?`<span class="check-mark">${U("check")}</span>`:""}</button>`}).join("")}${!h.catalogBusy&&!h.branches.length?'<p class="muted">لا توجد فروع متاحة حاليًا.</p>':""}</div><button class="reset-button" data-action="all-branches">تصفح جميع الفروع</button></details>`}function Mo(){const r=h.subjects.filter(e=>Fr(e,h.filters.branch)),t=h.units.filter(e=>!e.branchIds?.length||Fr(e,h.filters.branch));return`<aside class="filter-panel" aria-label="مرشحات المكتبة"><div class="filter-heading">${U("filter")}<h2>خصّص مكتبتك</h2></div><p class="muted">من المادة إلى ما تحتاجه بالضبط</p><div class="filter-fields"><label>المادة الدراسية<select data-filter="subject" ${h.catalogBusy?"disabled":""}>${zt(r,h.filters.subject,"جميع المواد")}</select></label><label>الوحدة<select data-filter="unit" ${!h.filters.subject||h.catalogBusy?"disabled":""}>${zt(t,h.filters.unit,"جميع الوحدات")}</select></label><label>الدرس <small class="muted">(اختياري)</small><select data-filter="lesson" ${!h.filters.subject||h.catalogBusy?"disabled":""}>${zt(h.lessons,h.filters.lesson,"جميع الدروس")}</select></label><label>نوع المحتوى<select data-filter="type" ${h.catalogBusy?"disabled":""}>${zt(h.types,h.filters.type,"جميع الأنواع")}</select></label></div><button class="reset-button" data-action="reset">مسح الاختيارات</button><p class="muted">تُعرض المصادر النشطة فقط، وبالترتيب المعتمد في منهاج.</p></aside>`}function Uo(r){const t=Fn(r.url),e=h.favoriteIds.includes(r.id);return`<article class="resource-card"><div class="resource-top"><span class="type-icon">${U("book")}</span><span class="badge">${C(W(h.types.find(n=>n.id===r.contentTypeId))||"مصدر تعليمي")}</span><button class="favorite-button ${e?"saved":""}" data-favorite="${C(r.id)}" aria-label="${e?"إزالة من المفضلة":"حفظ في المفضلة"}: ${C(r.title)}" aria-pressed="${e}">${U("heart")}</button></div><h3>${C(r.title||"مصدر تعليمي")}</h3>${r.description?`<p>${C(r.description)}</p>`:""}<div class="resource-meta">${C(W(h.subjects.find(n=>n.id===r.subjectId)))}${r.unitId?` · ${C(W(h.units.find(n=>n.id===r.unitId)))}`:""}</div><div class="resource-footer">${t?`<a class="open-link" href="${C(t)}" target="_blank" rel="noopener noreferrer">فتح المصدر ${U("external")}</a>`:'<span class="muted">رابط المصدر غير متاح</span>'}<button class="reset-button" data-share="${C(r.id)}">مشاركة</button></div></article>`}function xo(){return`<div class="loading" role="status"><span class="loader"><img src="${kt("minhaj_brand_mark.png")}" alt=""/></span><p>منهاج يجهّز مصادرك…</p></div>`}function Bo(r,t,e=!1){return`<div class="empty-state"><img src="${kt(e?"minhaj_empty_search.png":"minhaj_empty_library.png")}" alt=""/><h3>${r}</h3><p>${t}</p>${e?'<button class="reset-button" data-action="clear-search">مسح البحث</button>':""}</div>`}function Ln(){if(h.busy)return xo();if(h.error)return`<div class="error-panel" role="alert"><h3>لم تكتمل قراءة المصادر</h3><p>${C(h.error)}</p><button class="primary-button" data-action="retry">${U("refresh")} أعد المحاولة</button></div>`;const t=(h.view==="favorites"?h.favoriteItems:h.items).filter(n=>Ro(n,h.query));let e=t.length?`<div class="resource-grid">${t.map(Uo).join("")}</div>`:Bo(h.query?"لا توجد نتائج في المصادر المحمّلة":h.view==="favorites"?"مكتبتك المفضلة تبدأ من هنا":h.total===0?"لا توجد مصادر متاحة حاليًا":"لا توجد مصادر ظاهرة في هذه الدفعات",h.query?"جرّب كلمة أخرى، أو حمّل دفعة إضافية إن توفّرت.":h.view==="favorites"?"اضغط علامة القلب بجانب أي مصدر لحفظه على هذا الجهاز.":"جرّب تغيير الاختيارات أو عُد لاحقًا عند إضافة محتوى جديد.",!!h.query);return h.view!=="favorites"&&(e+=`<div class="pagination"><p class="muted">تم تحميل ${le(h.items.length)} مصدر${h.total!==null?` من ${le(h.total)}`:""}</p>${h.hasMore?`<button class="primary-button" data-action="more" ${h.moreBusy?"disabled":""}>${h.moreBusy?"جارٍ التحميل…":"المزيد من المصادر"}</button>`:""}</div>`,!h.hasMore&&h.total>h.items.length&&(e+='<p class="error-panel">هناك مصادر نشطة لم تُضبط قيمة ترتيبها بعد، لذلك لا تظهر في القائمة المرتبة.</p>')),e}function jo(){return`<section class="workspace">${h.view==="favorites"?"":Mo()}<div class="library-panel"><div class="library-toolbar"><div><h2>${h.view==="favorites"?"مصادرك المفضلة":"المصادر التعليمية"}</h2><p class="muted">${h.view==="favorites"?"محفوظة على هذا الجهاز فقط، دون مزامنة مع حساب التطبيق.":"كتب وملخصات وروابط تساعدك على التعلّم"}</p></div><span class="count-pill" aria-live="polite">${h.view==="favorites"?le(h.favoriteItems.length):h.total===null?"—":le(h.total)} مصدر</span></div><label class="search-box">${U("search")}<input id="search" type="search" value="${C(h.query)}" placeholder="ابحث ضمن المصادر المحمّلة" aria-label="ابحث ضمن المصادر المحمّلة" autocomplete="off"/></label><p class="muted search-hint">البحث العربي يشمل العنوان والوصف والكلمات المفتاحية في الدفعات المحمّلة فقط.</p>${h.countError?'<p class="muted">تعذّر تحديث العدد من الخادم.</p>':""}<div id="resource-content" aria-busy="${h.busy}">${Ln()}</div></div></section>`}function qo(){return`<section><div class="section-title"><h2>اكتشف المكتبة</h2><span class="muted">كل خطوة تقرّبك</span></div><div class="home-grid">${[["المصادر التعليمية","كتب وملخصات وروابط","book",""],["التأسيس","خطوة ثابتة من البداية","layers","تأسيس"],["الحلول","شروحات تساعدك على الفهم","check","حلول"],["الاختبارات","تدرّب وراجع إجاباتك","book","اختبار"],["بطاقات المراجعة","سؤال وجواب للتذكر","layers","بطاق"]].map(([t,e,n,s])=>{const i=!s||h.types.some(a=>lt(W(a)).includes(lt(s)));return`<button class="home-tile" data-section="${C(s)}" ${i?"":"disabled"}>${U(n)}<h3>${t}</h3><p>${i?e:"لا يوجد محتوى من هذا النوع حاليًا"}</p>${i?U("arrow"):""}</button>`}).join("")}</div></section>`}function zo(){return`<section class="library-panel"><h2>منهاج، مساحة الطالب</h2><p>مصادر تعليمية منظّمة، بروح تطبيق منهاج نفسه؛ اختر فرعك، ثم المادة والوحدة والدرس ونوع المحتوى لتصل إلى ما تحتاجه.</p><h3>مكتبة واحدة، على التطبيق والويب</h3><p>تُقرأ الفروع والمحتويات النشطة مباشرةً من قاعدة منهاج. لا يتضمن هذا الموقع واجهة إدارة أو صلاحيات تعديل.</p><h3>خصوصيتك أولًا</h3><p>التصفح لا يحتاج إلى تسجيل الدخول. تُحفظ اختيارات الفرع ومعرّفات المفضلة محليًا في هذا المتصفح فقط، ولا تُرسل إلى Firebase، ولا تتزامن مع التطبيق. لا يقرأ الموقع بيانات الطلاب أو حساباتهم.</p><h3>ما المتاح في هذه النسخة؟</h3><p>المكتبة، الفلاتر المتتابعة، البحث العربي في المصادر المحمّلة، فتح المصادر ومشاركتها، والمفضلة المحلية. ميزات الحساب والمساعد وإنشاء الاختبارات والبطاقات الخاصة لم تُنقل إلى هذه النسخة للالتزام بالقراءة فقط.</p><button class="primary-button" data-nav="library">تصفح المكتبة ${U("arrow")}</button></section>`}function B(){const r=document.activeElement?.id==="search",t=r?document.activeElement.selectionStart:null;if(Lt.innerHTML=`<div class="app-shell"><aside class="sidebar"><a class="brand" href="#" aria-label="منهاج، الرئيسية"><img src="${kt("minhaj_brand_mark.png")}" alt="شعار منهاج"/><span>منهاج<small>رفيق رحلتك التعليمية</small></span></a><nav aria-label="التنقل الرئيسي">${[["home","home"],["library","book"],["favorites","heart"],["about","info"]].map(([n,s])=>`<button class="nav-button ${h.view===n?"active":""}" data-nav="${n}" ${h.view===n?'aria-current="page"':""}>${U(s)}<span>${Gt[n]}</span></button>`).join("")}</nav><div class="sidebar-note">${U("book")}<p>خطوة واضحة.<br/>تعلّم بثقة.</p><small>نسخة الطالب · ويب</small></div></aside><main class="main"><header class="topbar"><div class="topbar-label">منهاج <span>/</span> ${Gt[h.view]}</div><span class="connection">${h.online?"مكتبتك، أينما كنت":"غير متصل بالإنترنت"}</span></header>${h.online?"":'<div class="offline-banner" role="status">أنت غير متصل. يلزم الاتصال لقراءة أحدث المصادر.</div>'}${h.view==="home"?`<section class="welcome"><div class="welcome-copy"><span class="eyebrow">مساحتك للتعلّم</span><h1>مرحبًا بك في منهاج</h1><p>اكتشف مصادر تساعدك على التعلّم بثقة</p><button class="primary-button" data-nav="library">ابدأ من مكتبتك ${U("arrow")}</button></div><img class="welcome-mark" src="${kt("minhaj_brand_mark.png")}" alt=""/></section>`:`<div class="section-title"><h1>${Gt[h.view]}</h1><span class="muted">تعلّم بخطوات واضحة وهادئة</span></div>`}${h.catalogError?`<div class="error-panel" role="alert"><p>${C(h.catalogError)}</p><button class="reset-button" data-action="retry-catalog">إعادة تحميل الفلاتر</button></div>`:""}${h.view==="home"||h.view==="library"?Lo():""}${h.view==="home"?qo():""}${h.view==="about"?zo():jo()}<footer class="footer"><span>منهاج · التعلّم يبدأ بخطوة</span><span>مكتبة الطالب · قراءة فقط</span></footer></main></div>`,r){const n=document.querySelector("#search");n?.focus();try{n?.setSelectionRange(t,t)}catch{}}const e=Lt.querySelector("details");e?.addEventListener("toggle",()=>{h.branchOpen=e.open})}async function bt(r=!1){const t=r?h.request:++h.request,e={...h.filters};r?h.moreBusy=!0:(h.busy=!0,h.error="",h.items=[],h.cursor=null,h.hasMore=!1,h.total=null,h.countError=!1),B(),r||Fo(e).then(n=>{t===h.request&&(h.total=n,Object.values(e).some(Boolean)||(h.totalAll=n),B())}).catch(()=>{t===h.request&&(h.countError=!0,B())});try{const n=await $o(e,r?h.cursor:null);if(t!==h.request)return;const s=new Set(h.items.map(i=>i.id));h.items=r?[...h.items,...n.items.filter(i=>!s.has(i.id))]:n.items,h.cursor=n.cursor,h.hasMore=n.hasMore,h.error=""}catch(n){if(t!==h.request)return;r?At(Ft(n)):h.error=Ft(n)}finally{t===h.request&&(h.busy=!1,h.moreBusy=!1,B())}}async function Go(){const r=++h.refs;h.catalogBusy=!0,B();try{const[t,e]=await Promise.all([St("curriculumUnits",h.filters),St("lessons",h.filters)]);if(r!==h.refs)return;h.units=t,h.lessons=e,h.catalogError=""}catch(t){if(r!==h.refs)return;h.units=[],h.lessons=[],h.catalogError=Ft(t)}finally{r===h.refs&&(h.catalogBusy=!1,B())}}async function Ht(r,t){h.filters=Po(h.filters,r,t),h.query="",r==="branch"&&(h.branchOpen=!1,_e.set("minhaj-selection-v1",{branch:t})),["branch","subject","unit"].includes(r)&&Go(),bt()}async function er(){const r=++h.request;h.busy=!0,h.error="",B();try{const t=await ko(h.favoriteIds);r===h.request&&(h.favoriteItems=t)}catch(t){r===h.request&&(h.error=Ft(t))}finally{r===h.request&&(h.busy=!1,B())}}async function Mn(){B();try{const[r,t,e]=await Promise.all([St("branches"),St("subjects"),St("contentTypes")]);h.branches=r,h.subjects=t,h.types=e,r.some(n=>n.id===h.filters.branch)||(h.filters.branch=""),h.catalogBusy=!1,h.catalogError=""}catch(r){h.catalogError=Ft(r),h.catalogBusy=!1}h.view==="favorites"?er():bt()}Lt.addEventListener("change",r=>{r.target.matches("[data-filter]")&&Ht(r.target.dataset.filter,r.target.value)});Lt.addEventListener("input",r=>{if(r.target.id==="search"){h.query=r.target.value;const t=document.querySelector("#resource-content");t&&(t.innerHTML=Ln())}});Lt.addEventListener("click",async r=>{const t=r.target.closest("button");if(t){if(t.dataset.nav){Mr(t.dataset.nav);return}if(t.dataset.branch){Ht("branch",t.dataset.branch);return}if(t.dataset.favorite){const e=t.dataset.favorite,n=h.favoriteIds.includes(e)?h.favoriteIds.filter(s=>s!==e):[...h.favoriteIds,e];_e.set("minhaj-favorites-v1",n)?(h.favoriteIds=n,h.view==="favorites"&&(h.favoriteItems=h.favoriteItems.filter(s=>n.includes(s.id))),B(),At(n.includes(e)?"حُفظ المصدر في مفضلة هذا الجهاز":"أُزيل المصدر من المفضلة")):At("تعذّر الحفظ محليًا؛ تحقق من إعدادات المتصفح.");return}if(t.dataset.share){const e=[...h.items,...h.favoriteItems].find(s=>s.id===t.dataset.share),n=Fn(e?.url);if(!n)return;try{navigator.share?await navigator.share({title:e.title,url:n}):(await navigator.clipboard.writeText(n),At("تم نسخ رابط المصدر"))}catch(s){s.name!=="AbortError"&&At("تعذّرت المشاركة؛ يمكنك نسخ الرابط من زر فتح المصدر.")}return}if("section"in t.dataset){const e=t.dataset.section,n=e&&h.types.find(s=>lt(W(s)).includes(lt(e)))?.id||"";h.filters={...h.filters,type:n},h.query="",Mr("library"),bt();return}switch(t.dataset.action){case"more":!h.moreBusy&&h.hasMore&&bt(!0);break;case"retry":h.view==="favorites"?er():bt();break;case"retry-catalog":Mn();break;case"clear-search":h.query="",B();break;case"all-branches":Ht("branch","");break;case"reset":Ht("branch","");break}}});window.addEventListener("hashchange",()=>{const r=location.hash.slice(1)||"home";h.view=Object.hasOwn(Gt,r)?r:"home",h.query="",h.error="",h.request++,h.view==="favorites"?er():h.view!=="about"?bt():B(),window.scrollTo({top:0,behavior:"instant"})});for(const r of["online","offline"])window.addEventListener(r,()=>{h.online=navigator.onLine,B()});Mn();
