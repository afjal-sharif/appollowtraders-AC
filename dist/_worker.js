var _e=Object.defineProperty;var Zt=t=>{throw TypeError(t)};var De=(t,e,a)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var v=(t,e,a)=>De(t,typeof e!="symbol"?e+"":e,a),Ut=(t,e,a)=>e.has(t)||Zt("Cannot "+a);var d=(t,e,a)=>(Ut(t,e,"read from private field"),a?a.call(t):e.get(t)),f=(t,e,a)=>e.has(t)?Zt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),m=(t,e,a,n)=>(Ut(t,e,"write to private field"),n?n.call(t,a):e.set(t,a),a),y=(t,e,a)=>(Ut(t,e,"access private method"),a);var te=(t,e,a,n)=>({set _(r){m(t,e,r,a)},get _(){return d(t,e,n)}});var ee=(t,e,a)=>(n,r)=>{let s=-1;return o(0);async function o(l){if(l<=s)throw new Error("next() called multiple times");s=l;let i,c=!1,p;if(t[l]?(p=t[l][0][0],n.req.routeIndex=l):p=l===t.length&&r||void 0,p)try{i=await p(n,()=>o(l+1))}catch(u){if(u instanceof Error&&e)n.error=u,i=await e(u,n),c=!0;else throw u}else n.finalized===!1&&a&&(i=await a(n));return i&&(n.finalized===!1||c)&&(n.res=i),n}},Oe=Symbol(),Re=async(t,e=Object.create(null))=>{const{all:a=!1,dot:n=!1}=e,s=(t instanceof he?t.raw.headers:t.headers).get("Content-Type");return s!=null&&s.startsWith("multipart/form-data")||s!=null&&s.startsWith("application/x-www-form-urlencoded")?Me(t,{all:a,dot:n}):{}};async function Me(t,e){const a=await t.formData();return a?je(a,e):{}}function je(t,e){const a=Object.create(null);return t.forEach((n,r)=>{e.all||r.endsWith("[]")?He(a,r,n):a[r]=n}),e.dot&&Object.entries(a).forEach(([n,r])=>{n.includes(".")&&(qe(a,n,r),delete a[n])}),a}var He=(t,e,a)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(a):t[e]=[t[e],a]:e.endsWith("[]")?t[e]=[a]:t[e]=a},qe=(t,e,a)=>{if(/(?:^|\.)__proto__\./.test(e))return;let n=t;const r=e.split(".");r.forEach((s,o)=>{o===r.length-1?n[s]=a:((!n[s]||typeof n[s]!="object"||Array.isArray(n[s])||n[s]instanceof File)&&(n[s]=Object.create(null)),n=n[s])})},ue=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},Fe=t=>{const{groups:e,path:a}=ze(t),n=ue(a);return Ge(n,e)},ze=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(a,n)=>{const r=`@${n}`;return e.push([r,a]),r}),{groups:e,path:t}},Ge=(t,e)=>{for(let a=e.length-1;a>=0;a--){const[n]=e[a];for(let r=t.length-1;r>=0;r--)if(t[r].includes(n)){t[r]=t[r].replace(n,e[a][1]);break}}return t},Ot={},Ke=(t,e)=>{if(t==="*")return"*";const a=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(a){const n=`${t}#${e}`;return Ot[n]||(a[2]?Ot[n]=e&&e[0]!==":"&&e[0]!=="*"?[n,a[1],new RegExp(`^${a[2]}(?=/${e})`)]:[t,a[1],new RegExp(`^${a[2]}$`)]:Ot[n]=[t,a[1],!0]),Ot[n]}return null},Yt=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,a=>{try{return e(a)}catch{return a}})}},Ue=t=>Yt(t,decodeURI),me=t=>{const e=t.url,a=e.indexOf("/",e.indexOf(":")+4);let n=a;for(;n<e.length;n++){const r=e.charCodeAt(n);if(r===37){const s=e.indexOf("?",n),o=e.indexOf("#",n),l=s===-1?o===-1?void 0:o:o===-1?s:Math.min(s,o),i=e.slice(a,l);return Ue(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(r===63||r===35)break}return e.slice(a,n)},Ve=t=>{const e=me(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},lt=(t,e,...a)=>(a.length&&(e=lt(e,...a)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),ve=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),a=[];let n="";return e.forEach(r=>{if(r!==""&&!/\:/.test(r))n+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){a.length===0&&n===""?a.push("/"):a.push(n);const s=r.replace("?","");n+="/"+s,a.push(n)}else n+="/"+r}),a.filter((r,s,o)=>o.indexOf(r)===s)},Vt=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?Yt(t,fe):t):t,be=(t,e,a)=>{let n;if(!a&&e&&!/[%+]/.test(e)){let o=t.indexOf("?",8);if(o===-1)return;for(t.startsWith(e,o+1)||(o=t.indexOf(`&${e}`,o+1));o!==-1;){const l=t.charCodeAt(o+e.length+1);if(l===61){const i=o+e.length+2,c=t.indexOf("&",i);return Vt(t.slice(i,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=t.indexOf(`&${e}`,o+1)}if(n=/[%+]/.test(t),!n)return}const r={};n??(n=/[%+]/.test(t));let s=t.indexOf("?",8);for(;s!==-1;){const o=t.indexOf("&",s+1);let l=t.indexOf("=",s);l>o&&o!==-1&&(l=-1);let i=t.slice(s+1,l===-1?o===-1?void 0:o:l);if(n&&(i=Vt(i)),s=o,i==="")continue;let c;l===-1?c="":(c=t.slice(l+1,o===-1?void 0:o),n&&(c=Vt(c))),a?(r[i]&&Array.isArray(r[i])||(r[i]=[]),r[i].push(c)):r[i]??(r[i]=c)}return e?r[e]:r},$e=be,Qe=(t,e)=>be(t,e,!0),fe=decodeURIComponent,ae=t=>Yt(t,fe),ut,N,G,ye,ge,Qt,U,oe,he=(oe=class{constructor(t,e="/",a=[[]]){f(this,G);v(this,"raw");f(this,ut);f(this,N);v(this,"routeIndex",0);v(this,"path");v(this,"bodyCache",{});f(this,U,t=>{const{bodyCache:e,raw:a}=this,n=e[t];if(n)return n;const r=Object.keys(e)[0];return r?e[r].then(s=>(r==="json"&&(s=JSON.stringify(s)),new Response(s)[t]())):e[t]=a[t]()});this.raw=t,this.path=e,m(this,N,a),m(this,ut,{})}param(t){return t?y(this,G,ye).call(this,t):y(this,G,ge).call(this)}query(t){return $e(this.url,t)}queries(t){return Qe(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((a,n)=>{e[n]=a}),e}async parseBody(t){return Re(this,t)}json(){return d(this,U).call(this,"text").then(t=>JSON.parse(t))}text(){return d(this,U).call(this,"text")}arrayBuffer(){return d(this,U).call(this,"arrayBuffer")}blob(){return d(this,U).call(this,"blob")}formData(){return d(this,U).call(this,"formData")}addValidatedData(t,e){d(this,ut)[t]=e}valid(t){return d(this,ut)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[Oe](){return d(this,N)}get matchedRoutes(){return d(this,N)[0].map(([[,t]])=>t)}get routePath(){return d(this,N)[0].map(([[,t]])=>t)[this.routeIndex].path}},ut=new WeakMap,N=new WeakMap,G=new WeakSet,ye=function(t){const e=d(this,N)[0][this.routeIndex][1][t],a=y(this,G,Qt).call(this,e);return a&&/\%/.test(a)?ae(a):a},ge=function(){const t={},e=Object.keys(d(this,N)[0][this.routeIndex][1]);for(const a of e){const n=y(this,G,Qt).call(this,d(this,N)[0][this.routeIndex][1][a]);n!==void 0&&(t[a]=/\%/.test(n)?ae(n):n)}return t},Qt=function(t){return d(this,N)[1]?d(this,N)[1][t]:t},U=new WeakMap,oe),Xe={Stringify:1},xe=async(t,e,a,n,r)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const s=t.callbacks;return s!=null&&s.length?(r?r[0]+=t:r=[t],Promise.all(s.map(l=>l({phase:e,buffer:r,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(i=>xe(i,e,!1,n,r))).then(()=>r[0]))):Promise.resolve(t)},Ye="text/plain; charset=UTF-8",$t=(t,e)=>({"Content-Type":t,...e}),Pt=(t,e)=>new Response(t,e),Tt,Ct,H,mt,q,C,Nt,vt,bt,Z,Lt,At,V,ct,de,We=(de=class{constructor(t,e){f(this,V);f(this,Tt);f(this,Ct);v(this,"env",{});f(this,H);v(this,"finalized",!1);v(this,"error");f(this,mt);f(this,q);f(this,C);f(this,Nt);f(this,vt);f(this,bt);f(this,Z);f(this,Lt);f(this,At);v(this,"render",(...t)=>(d(this,vt)??m(this,vt,e=>this.html(e)),d(this,vt).call(this,...t)));v(this,"setLayout",t=>m(this,Nt,t));v(this,"getLayout",()=>d(this,Nt));v(this,"setRenderer",t=>{m(this,vt,t)});v(this,"header",(t,e,a)=>{this.finalized&&m(this,C,Pt(d(this,C).body,d(this,C)));const n=d(this,C)?d(this,C).headers:d(this,Z)??m(this,Z,new Headers);e===void 0?n.delete(t):a!=null&&a.append?n.append(t,e):n.set(t,e)});v(this,"status",t=>{m(this,mt,t)});v(this,"set",(t,e)=>{d(this,H)??m(this,H,new Map),d(this,H).set(t,e)});v(this,"get",t=>d(this,H)?d(this,H).get(t):void 0);v(this,"newResponse",(...t)=>y(this,V,ct).call(this,...t));v(this,"body",(t,e,a)=>y(this,V,ct).call(this,t,e,a));v(this,"text",(t,e,a)=>!d(this,Z)&&!d(this,mt)&&!e&&!a&&!this.finalized?new Response(t):y(this,V,ct).call(this,t,e,$t(Ye,a)));v(this,"json",(t,e,a)=>y(this,V,ct).call(this,JSON.stringify(t),e,$t("application/json",a)));v(this,"html",(t,e,a)=>{const n=r=>y(this,V,ct).call(this,r,e,$t("text/html; charset=UTF-8",a));return typeof t=="object"?xe(t,Xe.Stringify,!1,{}).then(n):n(t)});v(this,"redirect",(t,e)=>{const a=String(t);return this.header("Location",/[^\x00-\xFF]/.test(a)?encodeURI(a):a),this.newResponse(null,e??302)});v(this,"notFound",()=>(d(this,bt)??m(this,bt,()=>Pt()),d(this,bt).call(this,this)));m(this,Tt,t),e&&(m(this,q,e.executionCtx),this.env=e.env,m(this,bt,e.notFoundHandler),m(this,At,e.path),m(this,Lt,e.matchResult))}get req(){return d(this,Ct)??m(this,Ct,new he(d(this,Tt),d(this,At),d(this,Lt))),d(this,Ct)}get event(){if(d(this,q)&&"respondWith"in d(this,q))return d(this,q);throw Error("This context has no FetchEvent")}get executionCtx(){if(d(this,q))return d(this,q);throw Error("This context has no ExecutionContext")}get res(){return d(this,C)||m(this,C,Pt(null,{headers:d(this,Z)??m(this,Z,new Headers)}))}set res(t){if(d(this,C)&&t){t=Pt(t.body,t);for(const[e,a]of d(this,C).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const n=d(this,C).headers.getSetCookie();t.headers.delete("set-cookie");for(const r of n)t.headers.append("set-cookie",r)}else t.headers.set(e,a)}m(this,C,t),this.finalized=!0}get var(){return d(this,H)?Object.fromEntries(d(this,H)):{}}},Tt=new WeakMap,Ct=new WeakMap,H=new WeakMap,mt=new WeakMap,q=new WeakMap,C=new WeakMap,Nt=new WeakMap,vt=new WeakMap,bt=new WeakMap,Z=new WeakMap,Lt=new WeakMap,At=new WeakMap,V=new WeakSet,ct=function(t,e,a){const n=d(this,C)?new Headers(d(this,C).headers):d(this,Z)??new Headers;if(typeof e=="object"&&"headers"in e){const s=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(const[o,l]of s)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(a)for(const[s,o]of Object.entries(a))if(typeof o=="string")n.set(s,o);else{n.delete(s);for(const l of o)n.append(s,l)}const r=typeof e=="number"?e:(e==null?void 0:e.status)??d(this,mt);return Pt(t,{status:r,headers:n})},de),P="ALL",Je="all",Ze=["get","post","put","delete","options","patch"],we="Can not add a route since the matcher is already built.",ke=class extends Error{},ta="__COMPOSED_HANDLER",ea=t=>t.text("404 Not Found",404),ne=(t,e)=>{if("getResponse"in t){const a=t.getResponse();return e.newResponse(a.body,a)}return console.error(t),e.text("Internal Server Error",500)},A,I,Pe,_,W,Rt,Mt,ft,aa=(ft=class{constructor(e={}){f(this,I);v(this,"get");v(this,"post");v(this,"put");v(this,"delete");v(this,"options");v(this,"patch");v(this,"all");v(this,"on");v(this,"use");v(this,"router");v(this,"getPath");v(this,"_basePath","/");f(this,A,"/");v(this,"routes",[]);f(this,_,ea);v(this,"errorHandler",ne);v(this,"onError",e=>(this.errorHandler=e,this));v(this,"notFound",e=>(m(this,_,e),this));v(this,"fetch",(e,...a)=>y(this,I,Mt).call(this,e,a[1],a[0],e.method));v(this,"request",(e,a,n,r)=>e instanceof Request?this.fetch(a?new Request(e,a):e,n,r):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${lt("/",e)}`,a),n,r)));v(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(y(this,I,Mt).call(this,e.request,e,void 0,e.request.method))})});[...Ze,Je].forEach(s=>{this[s]=(o,...l)=>(typeof o=="string"?m(this,A,o):y(this,I,W).call(this,s,d(this,A),o),l.forEach(i=>{y(this,I,W).call(this,s,d(this,A),i)}),this)}),this.on=(s,o,...l)=>{for(const i of[o].flat()){m(this,A,i);for(const c of[s].flat())l.map(p=>{y(this,I,W).call(this,c.toUpperCase(),d(this,A),p)})}return this},this.use=(s,...o)=>(typeof s=="string"?m(this,A,s):(m(this,A,"*"),o.unshift(s)),o.forEach(l=>{y(this,I,W).call(this,P,d(this,A),l)}),this);const{strict:n,...r}=e;Object.assign(this,r),this.getPath=n??!0?e.getPath??me:Ve}route(e,a){const n=this.basePath(e);return a.routes.map(r=>{var o;let s;a.errorHandler===ne?s=r.handler:(s=async(l,i)=>(await ee([],a.errorHandler)(l,()=>r.handler(l,i))).res,s[ta]=r.handler),y(o=n,I,W).call(o,r.method,r.path,s)}),this}basePath(e){const a=y(this,I,Pe).call(this);return a._basePath=lt(this._basePath,e),a}mount(e,a,n){let r,s;n&&(typeof n=="function"?s=n:(s=n.optionHandler,n.replaceRequest===!1?r=i=>i:r=n.replaceRequest));const o=s?i=>{const c=s(i);return Array.isArray(c)?c:[c]}:i=>{let c;try{c=i.executionCtx}catch{}return[i.env,c]};r||(r=(()=>{const i=lt(this._basePath,e),c=i==="/"?0:i.length;return p=>{const u=new URL(p.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,p)}})());const l=async(i,c)=>{const p=await a(r(i.req.raw),...o(i));if(p)return p;await c()};return y(this,I,W).call(this,P,lt(e,"*"),l),this}},A=new WeakMap,I=new WeakSet,Pe=function(){const e=new ft({router:this.router,getPath:this.getPath});return e.errorHandler=this.errorHandler,m(e,_,d(this,_)),e.routes=this.routes,e},_=new WeakMap,W=function(e,a,n){e=e.toUpperCase(),a=lt(this._basePath,a);const r={basePath:this._basePath,path:a,method:e,handler:n};this.router.add(e,a,[n,r]),this.routes.push(r)},Rt=function(e,a){if(e instanceof Error)return this.errorHandler(e,a);throw e},Mt=function(e,a,n,r){if(r==="HEAD")return(async()=>new Response(null,await y(this,I,Mt).call(this,e,a,n,"GET")))();const s=this.getPath(e,{env:n}),o=this.router.match(r,s),l=new We(e,{path:s,matchResult:o,env:n,executionCtx:a,notFoundHandler:d(this,_)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await d(this,_).call(this,l)})}catch(p){return y(this,I,Rt).call(this,p,l)}return c instanceof Promise?c.then(p=>p||(l.finalized?l.res:d(this,_).call(this,l))).catch(p=>y(this,I,Rt).call(this,p,l)):c??d(this,_).call(this,l)}const i=ee(o[0],this.errorHandler,d(this,_));return(async()=>{try{const c=await i(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return y(this,I,Rt).call(this,c,l)}})()},ft),Ie=[];function na(t,e){const a=this.buildAllMatchers(),n=((r,s)=>{const o=a[r]||a[P],l=o[2][s];if(l)return l;const i=s.match(o[0]);if(!i)return[[],Ie];const c=i.indexOf("",1);return[o[1][c],i]});return this.match=n,n(t,e)}var Ht="[^/]+",Et=".*",St="(?:|/.*)",pt=Symbol(),sa=new Set(".\\+*[^]$()");function ra(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===Et||t===St?1:e===Et||e===St?-1:t===Ht?1:e===Ht?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var tt,et,D,st,oa=(st=class{constructor(){f(this,tt);f(this,et);f(this,D,Object.create(null))}insert(e,a,n,r,s){if(e.length===0){if(d(this,tt)!==void 0)throw pt;if(s)return;m(this,tt,a);return}const[o,...l]=e,i=o==="*"?l.length===0?["","",Et]:["","",Ht]:o==="/*"?["","",St]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(i){const p=i[1];let u=i[2]||Ht;if(p&&i[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw pt;if(c=d(this,D)[u],!c){if(Object.keys(d(this,D)).some(g=>g!==Et&&g!==St))throw pt;if(s)return;c=d(this,D)[u]=new st,p!==""&&m(c,et,r.varIndex++)}!s&&p!==""&&n.push([p,d(c,et)])}else if(c=d(this,D)[o],!c){if(Object.keys(d(this,D)).some(p=>p.length>1&&p!==Et&&p!==St))throw pt;if(s)return;c=d(this,D)[o]=new st}c.insert(l,a,n,r,s)}buildRegExpStr(){const a=Object.keys(d(this,D)).sort(ra).map(n=>{const r=d(this,D)[n];return(typeof d(r,et)=="number"?`(${n})@${d(r,et)}`:sa.has(n)?`\\${n}`:n)+r.buildRegExpStr()});return typeof d(this,tt)=="number"&&a.unshift(`#${d(this,tt)}`),a.length===0?"":a.length===1?a[0]:"(?:"+a.join("|")+")"}},tt=new WeakMap,et=new WeakMap,D=new WeakMap,st),Ft,_t,ie,da=(ie=class{constructor(){f(this,Ft,{varIndex:0});f(this,_t,new oa)}insert(t,e,a){const n=[],r=[];for(let o=0;;){let l=!1;if(t=t.replace(/\{[^}]+\}/g,i=>{const c=`@\\${o}`;return r[o]=[c,i],o++,l=!0,c}),!l)break}const s=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=r.length-1;o>=0;o--){const[l]=r[o];for(let i=s.length-1;i>=0;i--)if(s[i].indexOf(l)!==-1){s[i]=s[i].replace(l,r[o][1]);break}}return d(this,_t).insert(s,e,n,d(this,Ft),a),n}buildRegExp(){let t=d(this,_t).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const a=[],n=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,s,o)=>s!==void 0?(a[++e]=Number(s),"$()"):(o!==void 0&&(n[Number(o)]=++e),"")),[new RegExp(`^${t}`),a,n]}},Ft=new WeakMap,_t=new WeakMap,ie),ia=[/^$/,[],Object.create(null)],jt=Object.create(null);function Ee(t){return jt[t]??(jt[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,a)=>a?`\\${a}`:"(?:|/.*)")}$`))}function la(){jt=Object.create(null)}function ca(t){var c;const e=new da,a=[];if(t.length===0)return ia;const n=t.map(p=>[!/\*|\/:/.test(p[0]),...p]).sort(([p,u],[g,S])=>p?1:g?-1:u.length-S.length),r=Object.create(null);for(let p=0,u=-1,g=n.length;p<g;p++){const[S,B,R]=n[p];S?r[B]=[R.map(([O])=>[O,Object.create(null)]),Ie]:u++;let L;try{L=e.insert(B,u,S)}catch(O){throw O===pt?new ke(B):O}S||(a[u]=R.map(([O,k])=>{const M=Object.create(null);for(k-=1;k>=0;k--){const[xt,Gt]=L[k];M[xt]=Gt}return[O,M]}))}const[s,o,l]=e.buildRegExp();for(let p=0,u=a.length;p<u;p++)for(let g=0,S=a[p].length;g<S;g++){const B=(c=a[p][g])==null?void 0:c[1];if(!B)continue;const R=Object.keys(B);for(let L=0,O=R.length;L<O;L++)B[R[L]]=l[B[R[L]]]}const i=[];for(const p in o)i[p]=a[o[p]];return[s,i,r]}function dt(t,e){if(t){for(const a of Object.keys(t).sort((n,r)=>r.length-n.length))if(Ee(a).test(e))return[...t[a]]}}var $,Q,zt,Se,le,pa=(le=class{constructor(){f(this,zt);v(this,"name","RegExpRouter");f(this,$);f(this,Q);v(this,"match",na);m(this,$,{[P]:Object.create(null)}),m(this,Q,{[P]:Object.create(null)})}add(t,e,a){var l;const n=d(this,$),r=d(this,Q);if(!n||!r)throw new Error(we);n[t]||[n,r].forEach(i=>{i[t]=Object.create(null),Object.keys(i[P]).forEach(c=>{i[t][c]=[...i[P][c]]})}),e==="/*"&&(e="*");const s=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const i=Ee(e);t===P?Object.keys(n).forEach(c=>{var p;(p=n[c])[e]||(p[e]=dt(n[c],e)||dt(n[P],e)||[])}):(l=n[t])[e]||(l[e]=dt(n[t],e)||dt(n[P],e)||[]),Object.keys(n).forEach(c=>{(t===P||t===c)&&Object.keys(n[c]).forEach(p=>{i.test(p)&&n[c][p].push([a,s])})}),Object.keys(r).forEach(c=>{(t===P||t===c)&&Object.keys(r[c]).forEach(p=>i.test(p)&&r[c][p].push([a,s]))});return}const o=ve(e)||[e];for(let i=0,c=o.length;i<c;i++){const p=o[i];Object.keys(r).forEach(u=>{var g;(t===P||t===u)&&((g=r[u])[p]||(g[p]=[...dt(n[u],p)||dt(n[P],p)||[]]),r[u][p].push([a,s-c+i+1]))})}}buildAllMatchers(){const t=Object.create(null);return Object.keys(d(this,Q)).concat(Object.keys(d(this,$))).forEach(e=>{t[e]||(t[e]=y(this,zt,Se).call(this,e))}),m(this,$,m(this,Q,void 0)),la(),t}},$=new WeakMap,Q=new WeakMap,zt=new WeakSet,Se=function(t){const e=[];let a=t===P;return[d(this,$),d(this,Q)].forEach(n=>{const r=n[t]?Object.keys(n[t]).map(s=>[s,n[t][s]]):[];r.length!==0?(a||(a=!0),e.push(...r)):t!==P&&e.push(...Object.keys(n[P]).map(s=>[s,n[P][s]]))}),a?ca(e):null},le),X,F,ce,ua=(ce=class{constructor(t){v(this,"name","SmartRouter");f(this,X,[]);f(this,F,[]);m(this,X,t.routers)}add(t,e,a){if(!d(this,F))throw new Error(we);d(this,F).push([t,e,a])}match(t,e){if(!d(this,F))throw new Error("Fatal error");const a=d(this,X),n=d(this,F),r=a.length;let s=0,o;for(;s<r;s++){const l=a[s];try{for(let i=0,c=n.length;i<c;i++)l.add(...n[i]);o=l.match(t,e)}catch(i){if(i instanceof ke)continue;throw i}this.match=l.match.bind(l),m(this,X,[l]),m(this,F,void 0);break}if(s===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(d(this,F)||d(this,X).length!==1)throw new Error("No active router has been determined yet.");return d(this,X)[0]}},X=new WeakMap,F=new WeakMap,ce),It=Object.create(null),ma=t=>{for(const e in t)return!0;return!1},Y,T,at,ht,E,z,J,yt,va=(yt=class{constructor(e,a,n){f(this,z);f(this,Y);f(this,T);f(this,at);f(this,ht,0);f(this,E,It);if(m(this,T,n||Object.create(null)),m(this,Y,[]),e&&a){const r=Object.create(null);r[e]={handler:a,possibleKeys:[],score:0},m(this,Y,[r])}m(this,at,[])}insert(e,a,n){m(this,ht,++te(this,ht)._);let r=this;const s=Fe(a),o=[];for(let l=0,i=s.length;l<i;l++){const c=s[l],p=s[l+1],u=Ke(c,p),g=Array.isArray(u)?u[0]:c;if(g in d(r,T)){r=d(r,T)[g],u&&o.push(u[1]);continue}d(r,T)[g]=new yt,u&&(d(r,at).push(u),o.push(u[1])),r=d(r,T)[g]}return d(r,Y).push({[e]:{handler:n,possibleKeys:o.filter((l,i,c)=>c.indexOf(l)===i),score:d(this,ht)}}),r}search(e,a){var p;const n=[];m(this,E,It);let s=[this];const o=ue(a),l=[],i=o.length;let c=null;for(let u=0;u<i;u++){const g=o[u],S=u===i-1,B=[];for(let L=0,O=s.length;L<O;L++){const k=s[L],M=d(k,T)[g];M&&(m(M,E,d(k,E)),S?(d(M,T)["*"]&&y(this,z,J).call(this,n,d(M,T)["*"],e,d(k,E)),y(this,z,J).call(this,n,M,e,d(k,E))):B.push(M));for(let xt=0,Gt=d(k,at).length;xt<Gt;xt++){const Wt=d(k,at)[xt],K=d(k,E)===It?{}:{...d(k,E)};if(Wt==="*"){const rt=d(k,T)["*"];rt&&(y(this,z,J).call(this,n,rt,e,d(k,E)),m(rt,E,K),B.push(rt));continue}const[Ae,Jt,wt]=Wt;if(!g&&!(wt instanceof RegExp))continue;const j=d(k,T)[Ae];if(wt instanceof RegExp){if(c===null){c=new Array(i);let ot=a[0]==="/"?1:0;for(let kt=0;kt<i;kt++)c[kt]=ot,ot+=o[kt].length+1}const rt=a.substring(c[u]),Kt=wt.exec(rt);if(Kt){if(K[Jt]=Kt[0],y(this,z,J).call(this,n,j,e,d(k,E),K),ma(d(j,T))){m(j,E,K);const ot=((p=Kt[0].match(/\//))==null?void 0:p.length)??0;(l[ot]||(l[ot]=[])).push(j)}continue}}(wt===!0||wt.test(g))&&(K[Jt]=g,S?(y(this,z,J).call(this,n,j,e,K,d(k,E)),d(j,T)["*"]&&y(this,z,J).call(this,n,d(j,T)["*"],e,K,d(k,E))):(m(j,E,K),B.push(j)))}}const R=l.shift();s=R?B.concat(R):B}return n.length>1&&n.sort((u,g)=>u.score-g.score),[n.map(({handler:u,params:g})=>[u,g])]}},Y=new WeakMap,T=new WeakMap,at=new WeakMap,ht=new WeakMap,E=new WeakMap,z=new WeakSet,J=function(e,a,n,r,s){for(let o=0,l=d(a,Y).length;o<l;o++){const i=d(a,Y)[o],c=i[n]||i[P],p={};if(c!==void 0&&(c.params=Object.create(null),e.push(c),r!==It||s&&s!==It))for(let u=0,g=c.possibleKeys.length;u<g;u++){const S=c.possibleKeys[u],B=p[c.score];c.params[S]=s!=null&&s[S]&&!B?s[S]:r[S]??(s==null?void 0:s[S]),p[c.score]=!0}}},yt),nt,pe,ba=(pe=class{constructor(){v(this,"name","TrieRouter");f(this,nt);m(this,nt,new va)}add(t,e,a){const n=ve(e);if(n){for(let r=0,s=n.length;r<s;r++)d(this,nt).insert(t,n[r],a);return}d(this,nt).insert(t,e,a)}match(t,e){return d(this,nt).search(t,e)}},nt=new WeakMap,pe),Be=class extends aa{constructor(t={}){super(t),this.router=t.router??new ua({routers:[new pa,new ba]})}};const b=new Be;let Te="1234";const Ce="4321",Ne="2028-12-31";function qt(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function it(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}async function gt(t,e){if(!t.DATA_STORE)return[];let a;const n=[];do{const o=await t.DATA_STORE.list({prefix:e,cursor:a,limit:1e3});n.push(...o.keys.map(l=>l.name)),a=o.list_complete?void 0:o.cursor}while(a);const r=await Promise.all(n.map(o=>t.DATA_STORE.get(o))),s=[];for(let o=0;o<n.length;o++)if(r[o])try{s.push({_key:n[o],...JSON.parse(r[o])})}catch{}return s}function h(t){return new Response(t,{headers:{"content-type":"text/html;charset=UTF-8"}})}b.post("/login",async t=>{var o;const e=await t.req.formData(),a=e.get("pin"),n=await((o=t.env.DATA_STORE)==null?void 0:o.get("APP_PIN"))||Te,r=(e.get("username")||"").trim(),s=await gt(t.env,"user:");if(s.length>0&&r){const l=s.find(i=>i.username===r&&i.password===a&&i.active!==!1);if(l){const i=encodeURIComponent(JSON.stringify({auth:1,userId:l._key,username:l.username,role:l.role,name:l.name}));return new Response(null,{status:302,headers:{"Set-Cookie":`session=${i}; Path=/; HttpOnly; SameSite=Strict`,Location:"/"}})}return h(Bt("Invalid credentials",s.length>0))}if(a===n){const l=encodeURIComponent(JSON.stringify({auth:1,userId:"admin",username:"admin",role:"admin",name:"Administrator"}));return new Response(null,{status:302,headers:{"Set-Cookie":`session=${l}; Path=/; HttpOnly; SameSite=Strict`,Location:"/"}})}return h(Bt("Wrong PIN",s.length>0))});b.get("/logout",()=>new Response(null,{status:302,headers:{"Set-Cookie":"session=; Path=/; HttpOnly; Max-Age=0",Location:"/login"}}));function x(t){const a=(t.req.header("Cookie")||"").match(/session=([^;]+)/);if(!a)return null;try{return JSON.parse(decodeURIComponent(a[1]))}catch{return null}}b.use("*",async(t,e)=>{const a=new URL(t.req.url).pathname;if(a==="/login"&&t.req.method==="GET"){const c=await gt(t.env,"user:");return h(Bt("",c.length>0))}if(!(new URL(t.req.url).searchParams.get("master")===Ce)){const c=new Date().toISOString().slice(0,10);if(c>Ne)return h(se());if(t.env.DATA_STORE){const p=await t.env.DATA_STORE.get("APP_LICENSE");if(p&&c>p)return h(se())}}if(a.startsWith("/sp-portal")){const p=(t.req.header("Cookie")||"").match(/sp_session=([^;]+)/);if(a==="/sp-portal/login"&&t.req.method==="GET"||!p&&a!=="/sp-portal/login")return h(Xt(""));await e();return}const s=x(t);if(!(s!=null&&s.auth)&&a!=="/login")return h(Bt("",!1));const o={admin:[],manager:["/users","/admin"],entry:["/users","/admin","/reports","/profit-loss","/balance-sheet","/trial-balance","/stock","/receivable-payable","/salesperson","/expense-ledger"],viewer:["/inventory","/parties","/purchases","/sales","/payments","/expenses","/orders","/users","/admin","/salesperson"]},l=(s==null?void 0:s.role)||"admin";if((o[l]||[]).includes(a))return h(w(`<div class="card"><div class="empty" style="padding:40px"><h3>Access Denied</h3><p class="text-muted">You don't have permission to access this page.</p><a href="/" class="btn btn-primary" style="margin-top:12px">Go to Dashboard</a></div></div>`,"dashboard",s));await e()});b.get("/api/license-info",async t=>{const a=(t.env.DATA_STORE?await t.env.DATA_STORE.get("APP_LICENSE"):null)||Ne,n=Math.floor((new Date(a).getTime()-Date.now())/864e5);return t.json({expiry:a,days:n,status:n<0?"Expired":"Active"})});b.post("/api/set-license",async t=>{if(new URL(t.req.url).searchParams.get("master")!==Ce)return t.json({success:!1,error:"Unauthorized"},403);const a=await t.req.json();return t.env.DATA_STORE?(await t.env.DATA_STORE.put("APP_LICENSE",String((a==null?void 0:a.date)||"")),t.json({success:!0})):t.json({success:!1,error:"KV not configured"},500)});b.post("/api/list",async t=>{const e=await t.req.json();return t.json(await gt(t.env,(e==null?void 0:e.prefix)||""))});b.post("/api/save",async t=>{if(!t.env.DATA_STORE)return t.json({success:!1,error:"KV not configured"},500);const e=await t.req.json(),a=(e==null?void 0:e.prefix)||"",n=e==null?void 0:e.id,r=e==null?void 0:e.key,s=(e==null?void 0:e.data)||{},o=(e==null?void 0:e.logAction)||"",l=(e==null?void 0:e.logDetail)||"";let i=r;if(i||(n?i=n.startsWith(a)?n:a+n:i=a+qt()),await t.env.DATA_STORE.put(i,JSON.stringify(s)),o){const c=x(t),p="modlog:"+qt();await t.env.DATA_STORE.put(p,JSON.stringify({action:o,detail:l,key:i,prefix:a,user:(c==null?void 0:c.name)||(c==null?void 0:c.username)||"System",timestamp:new Date().toISOString()}))}return t.json({success:!0,key:i})});b.post("/api/get",async t=>{if(!t.env.DATA_STORE)return t.json(null);const{key:e}=await t.req.json(),a=await t.env.DATA_STORE.get(e);return t.json(a?JSON.parse(a):null)});b.post("/api/delete",async t=>{if(!t.env.DATA_STORE)return t.json({success:!1,error:"KV not configured"},500);const e=await t.req.json(),a=e==null?void 0:e.key,n=(e==null?void 0:e.logDetail)||"";if(!a)return t.json({success:!1,error:"Key is required"},400);const r=await t.env.DATA_STORE.get(a);await t.env.DATA_STORE.delete(a);const s=x(t),o="modlog:"+qt();return await t.env.DATA_STORE.put(o,JSON.stringify({action:"delete",detail:n||"Deleted key: "+a,key:a,oldData:r?r.substring(0,500):"",user:(s==null?void 0:s.name)||(s==null?void 0:s.username)||"System",timestamp:new Date().toISOString()})),t.json({success:!0})});b.post("/api/export-all",async t=>{const e=["product:","party:","sale:","purchase:","payment:","expense:","exphead:","expsubhead:","bank:","cb:","user:","order:","salesperson:","creditlimit:","prodgroup:","modlog:"],a={};for(const n of e)a[n]=await gt(t.env,n);return t.json(a)});b.post("/api/import-all",async t=>{if(!t.env.DATA_STORE)return t.json({success:!1,error:"KV not configured"},500);const e=await t.req.json();let a=0;for(const[n,r]of Object.entries(e))if(Array.isArray(r))for(const s of r){const o=s._key||n+qt(),l={...s};delete l._key,await t.env.DATA_STORE.put(o,JSON.stringify(l)),a++}return t.json({success:!0,count:a})});b.post("/api/change-pin",async t=>{var r;const{oldPin:e,newPin:a}=await t.req.json(),n=await((r=t.env.DATA_STORE)==null?void 0:r.get("APP_PIN"))||Te;return e!==n?t.json({success:!1,error:"Wrong current PIN"}):!a||a.length<4?t.json({success:!1,error:"PIN must be at least 4 characters"}):(await t.env.DATA_STORE.put("APP_PIN",a),t.json({success:!0}))});b.post("/api/kv-keys",async t=>{const{prefix:e}=await t.req.json();if(!t.env.DATA_STORE)return t.json([]);const a=await t.env.DATA_STORE.list({prefix:e||"",limit:100});return t.json(a.keys.map(n=>n.name))});b.post("/api/kv-get",async t=>{const{key:e}=await t.req.json();if(!t.env.DATA_STORE)return t.json({value:null});const a=await t.env.DATA_STORE.get(e);return t.json({value:a})});b.post("/api/kv-delete",async t=>{const{key:e}=await t.req.json();return t.env.DATA_STORE?(await t.env.DATA_STORE.delete(e),t.json({success:!0})):t.json({success:!1})});b.post("/sp-portal/login",async t=>{const e=await t.req.formData(),a=e.get("code"),n=e.get("pin"),s=(await gt(t.env,"salesperson:")).find(o=>o.code===a&&o.pin===n&&o.active!==!1);if(s){const o=encodeURIComponent(JSON.stringify({spId:s._key,spName:s.name,spCode:s.code}));return new Response(null,{status:302,headers:{"Set-Cookie":`sp_session=${o}; Path=/; HttpOnly; SameSite=Strict`,Location:"/sp-portal"}})}return h(Xt("Invalid credentials"))});b.get("/sp-portal/logout",()=>new Response(null,{status:302,headers:{"Set-Cookie":"sp_session=; Path=/; HttpOnly; Max-Age=0",Location:"/sp-portal/login"}}));b.get("/",t=>h(w(ha(),"dashboard",x(t))));b.get("/inventory",t=>h(w(ya(),"inventory",x(t))));b.get("/stock-check",t=>h(w(ga(),"stockcheck",x(t))));b.get("/parties",t=>h(w(xa(),"parties",x(t))));b.get("/purchases",t=>h(w(wa(),"purchases",x(t))));b.get("/sales",t=>h(w(ka(),"sales",x(t))));b.get("/payments",t=>h(w(Pa(),"payments",x(t))));b.get("/expenses",t=>h(w(Ia(),"expenses",x(t))));b.get("/ledger",t=>h(w(Ea(),"ledger",x(t))));b.get("/expense-ledger",t=>h(w(Sa(),"expledger",x(t))));b.get("/profit-loss",t=>h(w(Ba(),"profitloss",x(t))));b.get("/balance-sheet",t=>h(w(Ta(),"balancesheet",x(t))));b.get("/trial-balance",t=>h(w(Ca(),"trialbalance",x(t))));b.get("/stock",t=>h(w(Na(),"stock",x(t))));b.get("/receivable-payable",t=>h(w(La(),"recpay",x(t))));b.get("/day-details",t=>h(w(Aa(),"daydetails",x(t))));b.get("/reports",t=>h(w(_a(),"reports",x(t))));b.get("/salesperson",t=>h(w(Da(),"salesperson",x(t))));b.get("/orders",t=>h(w(Oa(),"orders",x(t))));b.get("/users",t=>h(w(Ra(),"users",x(t))));b.get("/admin",t=>h(w(Ma(),"admin",x(t))));b.get("/mod-log",t=>h(w(ja(),"modlog",x(t))));b.get("/sp-portal",t=>h(fa(t)));b.get("/login",async t=>{const e=await gt(t.env,"user:");return h(Bt("",e.length>0))});function Dt(){return`<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#f0f2f5;--card:#ffffff;--text:#111827;--muted:#6b7280;
  --primary:#4f46e5;--primary-light:#eef2ff;--primary-fg:#fff;
  --accent:#059669;--accent-light:#ecfdf5;
  --danger:#dc2626;--danger-light:#fef2f2;
  --warning:#d97706;--warning-light:#fffbeb;
  --info:#0891b2;--info-light:#ecfeff;
  --border:#e5e7eb;--border-dark:#d1d5db;
  --sidebar-bg:#1e1b4b;--sidebar-fg:#a5b4fc;--sidebar-active:#6366f1;--sidebar-hover:rgba(255,255,255,.06);
  --radius:12px;--shadow:0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.04);--shadow-md:0 4px 6px -1px rgba(0,0,0,.07),0 2px 4px -2px rgba(0,0,0,.05);
  --transition:all .2s ease
}
body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);line-height:1.6;font-size:14px;-webkit-font-smoothing:antialiased}
a{color:var(--primary);text-decoration:none}
.app{display:flex;min-height:100vh}
.sidebar{width:250px;background:var(--sidebar-bg);color:var(--sidebar-fg);position:fixed;left:0;top:0;height:100vh;overflow:auto;z-index:50;transition:transform .3s ease;display:flex;flex-direction:column}
.sidebar .logo{padding:20px 16px;font-size:15px;font-weight:700;color:#fff;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:10px}
.sidebar .logo .logo-icon{width:34px;height:34px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#fff}
.sidebar nav{padding:10px 8px;flex:1;overflow-y:auto}
.sidebar nav .nav-group{font-size:10px;text-transform:uppercase;letter-spacing:.8px;color:rgba(255,255,255,.3);padding:12px 16px 4px;font-weight:700}
.sidebar nav a{display:flex;align-items:center;gap:10px;padding:8px 14px;border-radius:8px;color:var(--sidebar-fg);font-size:12.5px;font-weight:500;margin-bottom:1px;transition:var(--transition)}
.sidebar nav a .nav-icon{width:18px;text-align:center;font-size:16px;flex-shrink:0}
.sidebar nav a:hover{background:var(--sidebar-hover);color:#e0e7ff}
.sidebar nav a.active{background:var(--sidebar-active);color:#fff;box-shadow:0 2px 8px rgba(99,102,241,.3)}
.sidebar .sidebar-footer{padding:12px 16px;border-top:1px solid rgba(255,255,255,.08);font-size:10px;color:rgba(255,255,255,.3)}
.main{margin-left:250px;flex:1;padding:24px 28px;min-height:100vh}
.mobile-header{display:none;position:fixed;top:0;left:0;right:0;height:52px;background:var(--card);border-bottom:1px solid var(--border);z-index:40;padding:0 12px;align-items:center;gap:10px}
.hamburger{background:none;border:none;font-size:20px;cursor:pointer;color:var(--text);width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:8px}
.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:45;backdrop-filter:blur(2px)}
.overlay.open{display:block}
@media(max-width:900px){.sidebar{transform:translateX(-100%)}.sidebar.open{transform:translateX(0)}.mobile-header{display:flex}.main{margin-left:0;padding:64px 12px 20px}}
.page-header{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:20px}
.page-title{font-size:22px;font-weight:800;letter-spacing:-.4px}
.page-sub{font-size:12px;color:var(--muted);margin-top:2px}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);transition:var(--transition)}
.stats,.summary-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:12px;margin-bottom:16px}
.stat,.summary-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;box-shadow:var(--shadow);transition:var(--transition);position:relative;overflow:hidden}
.stat:hover,.summary-card:hover{box-shadow:var(--shadow-md);transform:translateY(-1px)}
.stat .label,.summary-card .label{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);font-weight:700;margin-bottom:4px}
.stat .value,.summary-card .value{font-size:20px;font-weight:800;font-variant-numeric:tabular-nums;letter-spacing:-.3px}
.tbl{width:100%;border-collapse:collapse;font-size:12.5px}
.tbl th{text-align:left;padding:10px 12px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);font-weight:700;border-bottom:2px solid var(--border);background:var(--bg);position:sticky;top:0;z-index:1}
.tbl td{padding:8px 12px;border-bottom:1px solid var(--border);vertical-align:middle}
.tbl tr:hover td{background:rgba(79,70,229,.02)}
.tbl .r{text-align:right;font-variant-numeric:tabular-nums}
.tbl .bold{font-weight:700}
.table-wrap{overflow:auto;-webkit-overflow-scrolling:touch;max-height:70vh}
.search-wrap{position:relative;max-width:340px;margin-bottom:14px}
.search-wrap input{padding-left:36px;background:var(--card)}
.search-wrap .icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:14px}
input,select,textarea{width:100%;padding:9px 12px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;background:var(--card);color:var(--text);outline:none;transition:var(--transition)}
input:focus,select:focus,textarea:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(79,70,229,.1)}
label{display:block;font-size:10px;font-weight:700;color:var(--muted);margin-bottom:4px;text-transform:uppercase;letter-spacing:.4px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.form-group{margin-bottom:12px}
@media(max-width:560px){.form-row{grid-template-columns:1fr}}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;padding:8px 14px;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;transition:var(--transition);font-family:inherit;white-space:nowrap}
.btn:active{transform:scale(.97)}
.btn-primary{background:var(--primary);color:var(--primary-fg);box-shadow:0 1px 3px rgba(79,70,229,.25)}
.btn-primary:hover{background:#4338ca}
.btn-success{background:var(--accent);color:#fff}
.btn-success:hover{background:#047857}
.btn-danger{background:var(--danger);color:#fff}
.btn-danger:hover{background:#b91c1c}
.btn-warning{background:var(--warning);color:#fff}
.btn-outline{background:transparent;color:var(--text);border:1px solid var(--border)}
.btn-outline:hover{background:var(--bg)}
.btn-sm{padding:5px 10px;font-size:11px;border-radius:6px}
.btn-xs{padding:3px 7px;font-size:10px;border-radius:5px}
.tabs{display:flex;gap:3px;background:var(--bg);border-radius:8px;padding:3px;margin-bottom:14px;width:fit-content;border:1px solid var(--border);flex-wrap:wrap}
.tab{padding:6px 14px;border:none;border-radius:6px;background:transparent;color:var(--muted);font-size:12px;font-weight:600;cursor:pointer;transition:var(--transition)}
.tab.active{background:var(--card);color:var(--primary);box-shadow:var(--shadow)}
.badge{display:inline-flex;align-items:center;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;letter-spacing:.3px}
.badge-cash{background:var(--accent-light);color:var(--accent)}
.badge-bank{background:var(--primary-light);color:var(--primary)}
.badge-danger{background:var(--danger-light);color:var(--danger)}
.badge-warning{background:var(--warning-light);color:var(--warning)}
.badge-info{background:var(--info-light);color:var(--info)}
.badge-success{background:var(--accent-light);color:var(--accent)}
.text-danger{color:var(--danger)}.text-success{color:var(--accent)}.text-warning{color:var(--warning)}.text-muted{color:var(--muted)}.text-primary{color:var(--primary)}
.empty{text-align:center;padding:32px 16px;color:var(--muted);font-size:12px}
.hidden{display:none !important}
.clickable{cursor:pointer;color:var(--primary);font-weight:700;transition:var(--transition)}.clickable:hover{text-decoration:underline}
.bold{font-weight:700}
.method-toggle{display:flex;gap:6px}
.method-btn{flex:1;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--card);cursor:pointer;font-size:12px;font-weight:600;text-align:center;color:var(--muted);transition:var(--transition)}
.method-btn.active{background:var(--primary);border-color:var(--primary);color:#fff}
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:100;align-items:center;justify-content:center;padding:12px;backdrop-filter:blur(3px)}
.modal-overlay.open{display:flex}
.modal{background:var(--card);border-radius:14px;padding:24px;width:100%;max-width:700px;max-height:90vh;overflow:auto;box-shadow:0 25px 60px rgba(0,0,0,.2)}
.modal h3{font-size:16px;font-weight:800;margin-bottom:16px;letter-spacing:-.3px}
.modal-lg{max-width:900px}
.modal-xl{max-width:1100px}
.pl-header{padding:16px 20px;border-bottom:2px solid var(--border)}
.pl-row{display:flex;justify-content:space-between;gap:12px;padding:7px 20px;font-size:13px}
.pl-row.total{font-weight:700;background:var(--bg);border-radius:6px;margin:3px 6px;padding:10px 14px}
.login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4338ca 100%)}
.login-card{background:var(--card);border-radius:18px;padding:40px 32px;width:90%;max-width:380px;text-align:center;box-shadow:0 25px 60px rgba(0,0,0,.3)}
.login-card h2{font-size:20px;font-weight:800;margin:14px 0 4px}
.login-card .sub{color:var(--muted);font-size:12px;margin-bottom:24px}
.login-card input{margin-bottom:14px}
.login-card .btn{width:100%;padding:12px}
.login-card .err{color:var(--danger);font-size:12px;margin-bottom:10px;font-weight:600}
.doc-link{cursor:pointer;color:var(--primary);font-weight:700;text-decoration:none;border-bottom:1px dashed var(--primary)}.doc-link:hover{text-decoration:none;background:var(--primary-light);border-radius:3px;padding:0 2px}
.section-title{font-size:13px;font-weight:700;color:var(--text);margin-bottom:10px;display:flex;align-items:center;gap:8px}
.section-title::after{content:'';flex:1;height:1px;background:var(--border)}
.date-nav{display:flex;align-items:center;gap:6px}
.date-nav button{background:var(--card);border:1px solid var(--border);border-radius:6px;padding:6px 10px;cursor:pointer;font-size:14px;transition:var(--transition)}
.date-nav button:hover{background:var(--bg)}
::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--border-dark);border-radius:3px}
@media print{.sidebar,.mobile-header,.overlay,.no-print,.btn:not(.print-btn){display:none !important}.main{margin-left:0 !important;padding:0 !important}.card{border:none !important;box-shadow:none !important;page-break-inside:avoid}.led-sale td{background:#eef2ff !important}.led-purchase td{background:#fffbeb !important}.led-receipt td,.led-payment td{background:#ecfdf5 !important}}
@media(max-width:600px){.tbl thead{display:none}.tbl tr{display:block;border-bottom:2px solid var(--border);margin-bottom:8px;padding:6px 0}.tbl td{display:flex;justify-content:space-between;padding:4px 10px;border:none}.stats,.summary-grid{grid-template-columns:1fr 1fr}}
.toast-container{position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none}
.toast{pointer-events:auto;display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:10px;font-size:13px;font-weight:600;color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.15);animation:toastIn .35s ease,toastOut .35s ease 3.5s forwards;min-width:260px;max-width:420px}
.toast-success{background:linear-gradient(135deg,#059669,#10b981)}
.toast-error{background:linear-gradient(135deg,#dc2626,#ef4444)}
.toast-warning{background:linear-gradient(135deg,#d97706,#f59e0b)}
.toast-info{background:linear-gradient(135deg,#0891b2,#06b6d4)}
.toast .toast-icon{font-size:18px;flex-shrink:0}
.toast .toast-msg{flex:1}
@keyframes toastIn{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}
@keyframes toastOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}
.rpt-placeholder{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 20px;color:var(--muted)}
.rpt-placeholder .material-symbols-outlined{font-size:48px;margin-bottom:12px;opacity:.4}
.rpt-placeholder p{font-size:14px;font-weight:600}
</style>`}function w(t,e,a){const n=(a==null?void 0:a.role)||"admin",r=(a==null?void 0:a.name)||"Admin",s={admin:["dashboard","inventory","stockcheck","parties","purchases","sales","payments","expenses","orders","ledger","expledger","profitloss","balancesheet","trialbalance","recpay","reports","stock","salesperson","daydetails","users","admin","modlog"],manager:["dashboard","inventory","stockcheck","parties","purchases","sales","payments","expenses","orders","ledger","expledger","profitloss","balancesheet","trialbalance","recpay","reports","stock","salesperson","daydetails","modlog"],entry:["dashboard","inventory","stockcheck","parties","purchases","sales","payments","expenses","orders","ledger","daydetails"],viewer:["dashboard","stockcheck","reports","profitloss","balancesheet","trialbalance","stock","recpay","ledger","expledger","daydetails"]},o=s[n]||s.viewer,l=[{group:"Main",items:[{path:"/",icon:"grid_view",label:"Dashboard",id:"dashboard"},{path:"/inventory",icon:"inventory_2",label:"Inventory",id:"inventory"},{path:"/stock-check",icon:"checklist",label:"Stock Check",id:"stockcheck"},{path:"/parties",icon:"groups",label:"Customers & Suppliers",id:"parties"}]},{group:"Transactions",items:[{path:"/purchases",icon:"shopping_cart",label:"Purchases",id:"purchases"},{path:"/sales",icon:"receipt_long",label:"Sales",id:"sales"},{path:"/payments",icon:"account_balance_wallet",label:"Accounts & Banking",id:"payments"},{path:"/expenses",icon:"payments",label:"Expenses",id:"expenses"},{path:"/orders",icon:"assignment",label:"Orders",id:"orders"}]},{group:"Ledgers & Reports",items:[{path:"/ledger",icon:"menu_book",label:"Ledger",id:"ledger"},{path:"/expense-ledger",icon:"receipt",label:"Expense Ledger",id:"expledger"},{path:"/profit-loss",icon:"trending_up",label:"Profit & Loss",id:"profitloss"},{path:"/balance-sheet",icon:"account_balance",label:"Balance Sheet",id:"balancesheet"},{path:"/trial-balance",icon:"balance",label:"Trial Balance",id:"trialbalance"},{path:"/receivable-payable",icon:"swap_horiz",label:"Receivable / Payable",id:"recpay"},{path:"/reports",icon:"assessment",label:"Reports",id:"reports"}]},{group:"Stock & Sales",items:[{path:"/stock",icon:"warehouse",label:"Stock & Valuation",id:"stock"},{path:"/salesperson",icon:"badge",label:"Salesperson Mgmt",id:"salesperson"},{path:"/day-details",icon:"calendar_today",label:"Day Details",id:"daydetails"}]},{group:"System",items:[{path:"/users",icon:"manage_accounts",label:"Users & Access",id:"users"},{path:"/mod-log",icon:"history",label:"Modification Log",id:"modlog"},{path:"/admin",icon:"settings",label:"Admin",id:"admin"}]}];let i="";for(const c of l){const p=c.items.filter(u=>o.includes(u.id));if(p.length!==0){i+=`<div class="nav-group">${c.group}</div>`;for(const u of p)i+=`<a href="${u.path}" class="${e===u.id?"active":""}"><span class="nav-icon material-symbols-outlined">${u.icon}</span>${u.label}</a>`}}return`<!doctype html>
<html lang="en"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Apollow Traders - BizManager</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
${Dt()}
<script src="https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js"><\/script>
<script>
// ============ GLOBAL UTILITIES ============
window.api=async function(path,body){var r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body||{})});var d=await r.json();if(!r.ok||(d&&d.success===false)){throw new Error(d.error||'Request failed');}return d;};
window.loadList=async function(prefix){return api('/api/list',{prefix:prefix});};
window.saveItem=async function(prefix,data,id,logAction,logDetail){return api('/api/save',{prefix:prefix,data:data,id:id,logAction:logAction||'',logDetail:logDetail||''});};
window.saveByKey=async function(key,data,logAction,logDetail){return api('/api/save',{key:key,data:data,logAction:logAction||'',logDetail:logDetail||''});};
window.deleteItem=async function(key,ask,logDetail){if(ask!==false&&!confirm('Delete this item?'))return;await api('/api/delete',{key:key,logDetail:logDetail||''});};
window.openModal=function(id){var el=document.getElementById(id);if(el)el.classList.add('open');};
window.closeModal=function(id){var el=document.getElementById(id);if(el)el.classList.remove('open');};
window.fmt=function(n){return Number(n||0).toLocaleString('en-IN',{minimumFractionDigits:0,maximumFractionDigits:2});};
window.todayISO=function(){return new Date().toISOString().slice(0,10);};
window.cleanForSave=function(obj){var c=Object.assign({},obj);delete c._key;return c;};
window.normalize=function(v){return String(v||'').trim().toLowerCase();};
window.fmtMethod=function(m){var map={cash:'Cash',bank_transfer:'Bank Transfer',cheque:'Cheque',credit_card:'Credit Card',mobile_payment:'Mobile Payment',credit:'On Credit',bank:'Bank',transfer:'Transfer'};return map[m]||String(m||'').toUpperCase();};
window.methodBadge=function(m){var cls=m==='cash'?'badge-cash':m==='cheque'?'badge-warning':m==='credit'?'badge-danger':'badge-bank';return'<span class="badge '+cls+'">'+fmtMethod(m)+'</span>';};
window.txnNo=function(prefix){var d=todayISO().replace(/-/g,'');return prefix+'-'+d+'-'+Math.random().toString(36).slice(2,7).toUpperCase();};
window.toggleSidebar=function(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('overlay').classList.toggle('open');};
window.exportXLS=function(tableId,fileName){
  try{var tbl=document.getElementById(tableId);if(!tbl){alert('Table not found');return;}
  var wb=XLSX.utils.table_to_book(tbl,{sheet:'Sheet1'});
  XLSX.writeFile(wb,(fileName||'export')+'.xlsx');
  }catch(e){alert('Export failed: '+e.message);}
};
window.printContent=function(elementId,title){
  var content=document.getElementById(elementId);if(!content)return alert('Content not found');
  var win=window.open('','_blank');
  win.document.write('<html><head><title>'+(title||'Print')+'</title><style>body{font-family:sans-serif;padding:20px;font-size:12px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:6px 8px;text-align:left;font-size:11px}.r{text-align:right}.bold{font-weight:bold}.text-danger{color:#dc2626}.text-success{color:#059669}.text-warning{color:#d97706}.text-muted{color:#666}.text-info{color:#0891b2}.text-primary{color:#4f46e5}.badge{padding:2px 6px;border-radius:3px;font-size:9px}.pl-row{display:flex;justify-content:space-between;padding:4px 12px}.pl-row.total{font-weight:bold;background:#f3f3f3;padding:8px 12px}.led-sale td{background:#eef2ff}.led-purchase td{background:#fffbeb}.led-receipt td,.led-payment td{background:#ecfdf5}.stat{display:inline-block;padding:8px 12px;margin:3px;border:1px solid #ddd;border-radius:6px}.stat .label{font-size:9px;text-transform:uppercase;color:#666;font-weight:bold}.stat .value{font-size:16px;font-weight:bold}.stats{margin-bottom:12px}.card{margin-bottom:12px;padding:10px}</style></head><body>'+content.innerHTML+'</body></html>');
  win.document.close();setTimeout(function(){win.print();win.close();},500);
};
// Document preview handler
window.previewDoc=function(type,key){
  window._previewType=type;window._previewKey=key;
  if(typeof window.showDocPreview==='function')window.showDocPreview(type,key);
  else{openModal('docPreview');document.getElementById('docPreviewContent').innerHTML='<div class="empty">Loading...</div>';loadDocPreview(type,key);}
};
window.loadDocPreview=async function(type,key){
  var data=await api('/api/get',{key:key});if(!data){document.getElementById('docPreviewContent').innerHTML='<div class="empty">Not found</div>';return;}
  var html='';
  if(type==='sale'){html=await buildSaleInvoice(data);}
  else if(type==='purchase'){html=buildPurchaseInvoice(data);}
  else if(type==='payment'||type==='receipt'){html=buildVoucher(data);}
  else if(type==='expense'){html=buildExpenseVoucher(data);}
  else if(type==='transfer'){html=buildVoucher(data);}
  else{html='<pre>'+JSON.stringify(data,null,2)+'</pre>';}
  document.getElementById('docPreviewContent').innerHTML='<div id="docPrintArea">'+html+'</div>';
};
window.buildSaleInvoice=async function(s){
  if(!s)return'';
  var sub=(s.items||[]).reduce(function(a,i){return a+(i.amount||0);},0);
  var discAmt=(s.discountType==='percent')?(sub*(s.discount||0)/100):(s.discount||0);
  var base=sub-discAmt+(s.extra||0);var vatAmt=(s.vatType==='percent')?(base*(s.vat||0)/100):(s.vat||0);
  var aitAmt=(s.aitType==='percent')?(base*(s.ait||0)/100):(s.ait||0);
  // Calculate previous balance for this customer
  var prevBal=0;var curBal=0;
  try{
    var allSales=await cachedList('sale:',30000);
    var allPayments=await cachedList('payment:',30000);
    var custSales=allSales.filter(function(x){return x.customerId===s.customerId});
    var custReceipts=allPayments.filter(function(x){return x.party===s.customerName&&x.type==='receipt'&&x.status==='done'});
    // Previous balance = all sales before this invoice - all payments before this invoice
    var prevSalesTotal=custSales.filter(function(x){return x.invoiceNo!==s.invoiceNo}).reduce(function(a,x){return a+(x.total||0)},0);
    var prevPaidTotal=custSales.filter(function(x){return x.invoiceNo!==s.invoiceNo}).reduce(function(a,x){return a+(x.paid||0)},0)+custReceipts.reduce(function(a,x){return a+(x.amount||0)},0);
    prevBal=prevSalesTotal-prevPaidTotal;
    curBal=prevBal+(s.total||0)-(s.paid||0);
  }catch(e){}
  return '<div style="max-width:700px;margin:0 auto"><div style="display:flex;justify-content:space-between;border-bottom:2px solid #333;padding-bottom:10px;margin-bottom:12px"><div><h2 style="margin:0;font-size:18px">SALES INVOICE</h2><b>No:</b> '+s.invoiceNo+'</div><div style="text-align:right"><b>Date:</b> '+s.date+'<br><b>Customer:</b> '+s.customerName+(s.salespersonName?'<br><span style="font-size:11px;color:#666">SP: '+s.salespersonName+'</span>':'')+'</div></div><table class="tbl"><thead><tr style="background:#f3f3f3"><th>#</th><th>Product</th><th class="r">Qty</th><th class="r">Rate</th><th class="r">Amount</th></tr></thead><tbody>'+(s.items||[]).map(function(it,i){return'<tr><td>'+(i+1)+'</td><td>'+it.productName+'</td><td class="r">'+it.qty+'</td><td class="r">'+fmt(it.rate)+'</td><td class="r">'+fmt(it.amount)+'</td></tr>';}).join('')+'</tbody></table><div style="display:flex;justify-content:flex-end;margin-top:12px"><div style="width:280px;line-height:1.8;font-size:12px"><div style="display:flex;justify-content:space-between"><span>Subtotal:</span><span>'+fmt(sub)+'</span></div><div style="display:flex;justify-content:space-between;color:#dc2626"><span>Discount:</span><span>-'+fmt(discAmt)+'</span></div><div style="display:flex;justify-content:space-between"><span>Extra:</span><span>+'+fmt(s.extra||0)+'</span></div><div style="display:flex;justify-content:space-between"><span>VAT:</span><span>+'+fmt(vatAmt)+'</span></div><div style="display:flex;justify-content:space-between"><span>AIT:</span><span>+'+fmt(aitAmt)+'</span></div><div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;border-top:2px solid #333;margin-top:4px;padding-top:4px"><span>Total:</span><span>'+fmt(s.total)+'</span></div><div style="display:flex;justify-content:space-between;color:#059669"><span>Paid:</span><span>'+fmt(s.paid)+'</span></div><div style="display:flex;justify-content:space-between;border-top:1px dashed #666"><span>Balance Due:</span><span>'+fmt((s.total||0)-(s.paid||0))+'</span></div><div style="border-top:2px solid #333;margin-top:6px;padding-top:6px"><div style="display:flex;justify-content:space-between;color:#6b7280"><span>Previous Balance:</span><span>'+fmt(Math.abs(prevBal))+' '+(prevBal>0?'Dr':'Cr')+'</span></div><div style="display:flex;justify-content:space-between;font-weight:800;font-size:13px;color:'+(curBal>0?'#dc2626':'#059669')+'"><span>Current Balance:</span><span>'+fmt(Math.abs(curBal))+' '+(curBal>0?'Dr':'Cr')+'</span></div></div></div></div></div>';
};
window.buildPurchaseInvoice=function(p){
  if(!p)return'';var sub=(p.items||[]).reduce(function(a,i){return a+(i.amount||0);},0);
  var base=sub-(p.discount||0)+(p.extra||0);var vatAmt=(p.vatType==='percent')?(base*(p.vat||0)/100):(p.vat||0);
  return '<div style="max-width:700px;margin:0 auto"><div style="display:flex;justify-content:space-between;border-bottom:2px solid #333;padding-bottom:10px;margin-bottom:12px"><div><h2 style="margin:0;font-size:18px">PURCHASE INVOICE</h2><b>No:</b> '+p.purchaseNo+'</div><div style="text-align:right"><b>Date:</b> '+p.date+'<br><b>Supplier:</b> '+p.supplierName+'</div></div><table class="tbl"><thead><tr style="background:#f3f3f3"><th>#</th><th>Item</th><th class="r">Qty</th><th class="r">Rate</th><th class="r">Amount</th></tr></thead><tbody>'+(p.items||[]).map(function(it,i){return'<tr><td>'+(i+1)+'</td><td>'+it.productName+'</td><td class="r">'+it.qty+'</td><td class="r">'+fmt(it.rate)+'</td><td class="r">'+fmt(it.amount)+'</td></tr>';}).join('')+'</tbody></table><div style="display:flex;justify-content:flex-end;margin-top:12px"><div style="width:260px;line-height:1.8;font-size:12px"><div style="display:flex;justify-content:space-between"><span>Subtotal:</span><span>'+fmt(sub)+'</span></div><div style="display:flex;justify-content:space-between;color:#dc2626"><span>Discount:</span><span>-'+fmt(p.discount||0)+'</span></div><div style="display:flex;justify-content:space-between"><span>Extra:</span><span>+'+fmt(p.extra||0)+'</span></div><div style="display:flex;justify-content:space-between"><span>VAT:</span><span>+'+fmt(vatAmt)+'</span></div><div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;border-top:2px solid #333;margin-top:4px;padding-top:4px"><span>Total:</span><span>'+fmt(p.total)+'</span></div><div style="display:flex;justify-content:space-between;color:#059669"><span>Paid:</span><span>'+fmt(p.paid)+'</span></div><div style="display:flex;justify-content:space-between;border-top:1px dashed #666"><span>Balance:</span><span>'+fmt((p.total||0)-(p.paid||0))+'</span></div></div></div></div>';
};
window.buildVoucher=function(p){
  if(!p)return'';
  return '<div style="max-width:500px;margin:0 auto;border:2px solid #333;padding:20px"><div style="display:flex;justify-content:space-between;border-bottom:1px solid #333;padding-bottom:8px"><h2 style="margin:0;font-size:16px">'+(p.type||'').toUpperCase()+' VOUCHER</h2><b>'+p.no+'</b></div><div style="margin:16px 0;line-height:2"><b>Date:</b> '+p.date+'<br><b>Party:</b> '+(p.party||'')+'<br><b>Method:</b> '+(p.method||'').toUpperCase()+(p.chequeNo?' (Chq: '+p.chequeNo+')':'')+'<br><b>Note:</b> '+(p.note||'N/A')+'<br><br><div style="font-size:22px;font-weight:bold">Amount: '+fmt(p.amount)+'</div></div><div style="margin-top:40px;display:flex;justify-content:space-between"><span>________________<br>Receiver</span><span>________________<br>Authorized</span></div></div>';
};
window.buildExpenseVoucher=function(e){
  if(!e)return'';
  return '<div style="max-width:500px;margin:0 auto;border:2px solid #333;padding:20px"><div style="border-bottom:1px solid #333;padding-bottom:8px"><h2 style="margin:0;font-size:16px">EXPENSE VOUCHER</h2></div><div style="margin:16px 0;line-height:2"><b>No:</b> '+e.expenseNo+'<br><b>Date:</b> '+e.date+'<br><b>Head:</b> '+e.headName+(e.subHeadName?' / '+e.subHeadName:'')+'<br><b>Method:</b> '+(e.method||'').toUpperCase()+(e.bankName?' ('+e.bankName+')':'')+'<br><b>Description:</b> '+(e.description||'N/A')+'<br><br><div style="font-size:22px;font-weight:bold">Amount: '+fmt(e.amount)+'</div></div></div>';
};
window.SESSION=${JSON.stringify(a||{})};
// ============ TOAST NOTIFICATION SYSTEM ============
window._toastReady=false;
window._toastQueue=[];
function _initToastContainer(){
  if(window._toastReady)return;
  if(!document.body)return;
  var container=document.createElement('div');container.className='toast-container';container.id='toastContainer';document.body.appendChild(container);
  window._toastReady=true;
  while(window._toastQueue.length){var q=window._toastQueue.shift();showToast(q.msg,q.type);}
}
if(document.body){_initToastContainer();}else{document.addEventListener('DOMContentLoaded',_initToastContainer);}
window.showToast=function(msg,type){
  type=type||'success';
  if(!window._toastReady){window._toastQueue.push({msg:msg,type:type});if(document.body)_initToastContainer();return;}
  var icons={success:'check_circle',error:'error',warning:'warning',info:'info'};
  var toast=document.createElement('div');
  toast.className='toast toast-'+type;
  toast.innerHTML='<span class="material-symbols-outlined toast-icon">'+(icons[type]||'info')+'</span><span class="toast-msg">'+msg+'</span>';
  var c=document.getElementById('toastContainer');if(c)c.appendChild(toast);
  setTimeout(function(){if(toast.parentNode)toast.parentNode.removeChild(toast)},4000);
};
// ============ GLOBAL DATA CACHE ============
window._dataCache={};
window._dataCacheTime={};
window.cachedList=async function(prefix,maxAgeMs){
  maxAgeMs=maxAgeMs||60000;
  var now=Date.now();
  if(window._dataCache[prefix]&&window._dataCacheTime[prefix]&&(now-window._dataCacheTime[prefix])<maxAgeMs){
    return window._dataCache[prefix];
  }
  var data=await loadList(prefix);
  window._dataCache[prefix]=data;
  window._dataCacheTime[prefix]=now;
  return data;
};
window.invalidateCache=function(prefix){
  if(prefix){delete window._dataCache[prefix];delete window._dataCacheTime[prefix];}
  else{window._dataCache={};window._dataCacheTime={};}
};
<\/script>
</head><body>
<div class="mobile-header">
  <button class="hamburger" onclick="toggleSidebar()"><span class="material-symbols-outlined">menu</span></button>
  <span style="font-weight:800;font-size:14px">Apollow Traders</span>
</div>
<div class="overlay" id="overlay" onclick="toggleSidebar()"></div>
<div class="app">
  <aside class="sidebar" id="sidebar">
    <div class="logo"><div class="logo-icon">AT</div>Apollow Traders</div>
    <nav>${i}<div class="nav-group" style="margin-top:12px"></div><a href="/sp-portal" target="_blank"><span class="nav-icon material-symbols-outlined">storefront</span>SP Portal</a><a href="/logout" style="opacity:.6"><span class="nav-icon material-symbols-outlined">logout</span>Logout</a></nav>
    <div class="sidebar-footer">BizManager v3.0 | ${r} (${n})</div>
  </aside>
  <main class="main">${t}</main>
</div>
<!-- Global Document Preview Modal -->
<div class="modal-overlay" id="docPreview"><div class="modal modal-lg">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="margin:0">Document Preview</h3><div><button class="btn btn-primary btn-sm" onclick="printContent('docPrintArea','Document')">Print</button> <button class="btn btn-outline btn-sm" onclick="closeModal('docPreview')">Close</button></div></div>
  <div id="docPreviewContent"></div>
</div></div>
<script>document.querySelectorAll('.sidebar nav a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('open');});});<\/script>
</body></html>`}function Bt(t,e=!1){return`<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>BizManager Login</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
${Dt()}</head><body>
<div class="login-page"><form class="login-card" method="POST" action="/login">
  <div style="width:52px;height:52px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto;color:#fff;font-weight:800;font-size:18px">AT</div>
  <h2>Apollow Traders</h2><div class="sub">Enter credentials to continue</div>
  ${t?`<div class="err">${t}</div>`:""}
  ${e?'<input name="username" placeholder="Username" style="text-align:center">':""}
  <input type="password" name="pin" placeholder="${e?"Password":"PIN"}" maxlength="20" autofocus required>
  <button type="submit" class="btn btn-primary">Login</button>
  <div style="margin-top:12px;font-size:11px;color:var(--muted)"><a href="/sp-portal/login">Salesperson Portal</a></div>
</form></div></body></html>`}function se(){return`<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>License Expired</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${Dt()}</head><body><div class="login-page"><div class="login-card"><h2>License Expired</h2><div class="sub">Please renew.</div></div></div></body></html>`}function Xt(t){return`<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SP Portal</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${Dt()}</head><body><div class="login-page"><form class="login-card" method="POST" action="/sp-portal/login"><h2>Salesperson Portal</h2><div class="sub">Enter code and PIN</div>${t?`<div class="err">${t}</div>`:""}<input name="code" placeholder="Code" style="text-align:center" required><input type="password" name="pin" placeholder="PIN" style="text-align:center" required><button type="submit" class="btn btn-primary">Login</button><div style="margin-top:12px"><a href="/login" style="font-size:11px;color:var(--muted)">Admin Login</a></div></form></div></body></html>`}function fa(t){const a=(t.req.header("Cookie")||"").match(/sp_session=([^;]+)/);let n={};if(a)try{n=JSON.parse(decodeURIComponent(a[1]))}catch{}const r=n.spId||"",s=n.spName||"Salesperson",o=n.spCode||"";return`<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SP Portal - ${it(s)}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
${Dt()}
</head><body style="background:var(--bg);padding:20px">
<div style="max-width:900px;margin:0 auto">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
<div><h2 style="margin:0">Salesperson Portal</h2><p class="text-muted" style="margin:4px 0 0">Welcome, <b>${it(s)}</b> (${it(o)})</p></div>
<a href="/sp-portal/logout" class="btn btn-outline btn-sm">Logout</a>
</div>
<div class="tabs" style="margin-bottom:14px"><button class="tab active" id="tabPlace" onclick="switchSPTab('place')">Place Order</button><button class="tab" id="tabOrders" onclick="switchSPTab('orders')">My Orders</button><button class="tab" id="tabReports" onclick="switchSPTab('reports')">My Reports</button><button class="tab" id="tabCustomers" onclick="switchSPTab('customers')">My Customers</button></div>
<div id="placeSection">
<div class="card">
<h3 style="font-size:15px;margin-bottom:14px">New Order</h3>
<div class="form-row"><div><label style="font-size:12px">Customer</label><select id="spCust" style="padding:12px 14px;font-size:14px"></select></div><div><label style="font-size:12px">Date</label><input type="date" id="spDate" style="padding:12px 14px;font-size:14px"></div></div>
<div id="spItems"></div>
<div style="margin:12px 0;display:flex;gap:8px"><button class="btn btn-outline" onclick="addSPItem()" style="padding:10px 16px;font-size:13px">+ Add Item</button><button class="btn btn-primary" onclick="submitOrd()" style="padding:10px 20px;font-size:13px">Submit Order</button></div>
<div id="spTotal" style="font-weight:700;font-size:17px;margin-top:10px;color:var(--primary)"></div>
</div>
</div>
<div id="ordersSection" class="hidden">
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Date</th><th>Order#</th><th>Customer</th><th class="r">Total</th><th>Status</th></tr></thead><tbody id="spOrdBody"></tbody></table></div></div>
</div>
<div id="reportsSection" class="hidden">
<div class="card" style="margin-bottom:14px">
<h3 style="font-size:15px;margin-bottom:10px">My Sales Reports</h3>
<div class="form-row"><div><label>Report</label><select id="spRptType" style="padding:10px 12px;font-size:13px"><option value="product">Product-wise Sales</option><option value="customer">Customer-wise Sales</option><option value="product-customer">Product + Customer Breakdown</option><option value="group-product">Group &amp; Product-wise</option><option value="customer-product">Customer &amp; Product Detail</option></select></div><div><label>From</label><input type="date" id="spRptFrom" style="padding:10px 12px;font-size:13px"></div><div><label>To</label><input type="date" id="spRptTo" style="padding:10px 12px;font-size:13px"></div></div>
<div style="margin-top:8px"><button class="btn btn-primary" onclick="renderSPReport()" style="padding:10px 20px;font-size:13px"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">visibility</span> View Report</button> <button class="btn btn-outline" onclick="exportXLS('spRptTbl','SP_Report')" style="padding:10px 14px;font-size:13px">Export XLS</button></div>
</div>
<div id="spRptPlaceholder" class="rpt-placeholder"><span class="material-symbols-outlined">assessment</span><p>Select report type and date range, then click <b>View Report</b></p></div>
<div id="spRptContent" class="hidden"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="spRptTbl"><thead id="spRptHead"></thead><tbody id="spRptBody"></tbody><tfoot id="spRptFoot"></tfoot></table></div></div></div>
</div>
<div id="customersSection" class="hidden">
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Customer Name</th><th>Phone</th><th>Address</th><th class="r">Total Sales</th><th class="r">Outstanding</th></tr></thead><tbody id="spCustListBody"></tbody></table></div></div>
</div>
</div>
<script>
window.api=async function(p,b){var r=await fetch(p,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b||{})});return r.json();};
window.loadList=async function(p){return api('/api/list',{prefix:p});};
window.saveItem=async function(p,d){return api('/api/save',{prefix:p,data:d});};
window.fmt=function(n){return Number(n||0).toLocaleString('en-IN');};
window.todayISO=function(){return new Date().toISOString().slice(0,10);};
window.txnNo=function(p){return p+'-'+todayISO().replace(/-/g,'')+'-'+Math.random().toString(36).slice(2,7).toUpperCase();};
var spP=[],spC=[],spI=[{pk:'',pn:'',q:1,r:0,a:0}],spOrders=[],spSales=[];
var SP_ID='${it(r)}';
var SP_NAME='${it(s)}';
var SP_CODE='${it(o)}';
window.switchSPTab=function(t){
  document.getElementById('placeSection').classList.toggle('hidden',t!=='place');
  document.getElementById('ordersSection').classList.toggle('hidden',t!=='orders');
  document.getElementById('reportsSection').classList.toggle('hidden',t!=='reports');
  document.getElementById('customersSection').classList.toggle('hidden',t!=='customers');
  document.getElementById('tabPlace').classList.toggle('active',t==='place');
  document.getElementById('tabOrders').classList.toggle('active',t==='orders');
  document.getElementById('tabReports').classList.toggle('active',t==='reports');
  document.getElementById('tabCustomers').classList.toggle('active',t==='customers');
  if(t==='orders')renderSPOrders();
  if(t==='customers')renderSPCustList();
};
(async function(){
  var d=await Promise.all([loadList('product:'),loadList('party:'),loadList('order:'),loadList('sale:')]);
  spP=d[0]||[];spC=(d[1]||[]).filter(function(p){return p.type==='customer';});spOrders=(d[2]||[]).filter(function(o){return o.spId===SP_ID||o.salespersonName===SP_NAME;});
  spSales=(d[3]||[]).filter(function(s){return s.salespersonId===SP_ID||s.salespersonName===SP_NAME;});
  // Filter customers: only show tagged to this salesperson
  spC=spC.filter(function(c){return c.salespersonId===SP_ID||c.salespersonName===SP_NAME;});
  document.getElementById('spCust').innerHTML='<option value="">Select Customer</option>'+spC.map(function(c){return'<option value="'+c._key+'">'+c.name+'</option>';}).join('');
  document.getElementById('spDate').value=todayISO();
  renderSI();renderSPOrders();
})();
window.addSPItem=function(){spI.push({pk:'',pn:'',q:1,r:0,a:0});renderSI();};
window.spSelProd=function(idx,val){
  var p=spP.find(function(x){return x._key===val;});
  if(p){spI[idx].pk=p._key;spI[idx].pn=p.name;spI[idx].r=p.salePrice||0;spI[idx].a=spI[idx].q*spI[idx].r;}
  updateSPTotals();
  var sel=document.getElementById('sp_sel_'+idx);if(sel)sel.value=val;
  var rEl=document.getElementById('sp_rate_'+idx);if(rEl)rEl.value=spI[idx].r;
  var aEl=document.getElementById('sp_amt_'+idx);if(aEl)aEl.textContent=fmt(spI[idx].a);
};
window.spChgQty=function(idx,val){spI[idx].q=+val||0;spI[idx].a=spI[idx].q*spI[idx].r;var aEl=document.getElementById('sp_amt_'+idx);if(aEl)aEl.textContent=fmt(spI[idx].a);updateSPTotals();};
window.spChgRate=function(idx,val){spI[idx].r=+val||0;spI[idx].a=spI[idx].q*spI[idx].r;var aEl=document.getElementById('sp_amt_'+idx);if(aEl)aEl.textContent=fmt(spI[idx].a);updateSPTotals();};
window.spRmItem=function(idx){spI.splice(idx,1);if(!spI.length)spI.push({pk:'',pn:'',q:1,r:0,a:0});renderSI();};
window.updateSPTotals=function(){var total=spI.reduce(function(s,x){return s+x.a;},0);document.getElementById('spTotal').textContent='Order Total: '+fmt(total);};
window.renderSI=function(){
  var html='';
  for(var i=0;i<spI.length;i++){
    var it=spI[i];
    html+='<div class="form-row" style="grid-template-columns:2fr 70px 90px 90px 34px;align-items:end;margin-bottom:6px;gap:8px">';
    html+='<select id="sp_sel_'+i+'" onchange="spSelProd('+i+',this.value)" style="padding:11px 12px;font-size:14px"><option value="">Select Product</option>';
    for(var j=0;j<spP.length;j++){
      var p=spP[j];
      html+='<option value="'+p._key+'"'+(it.pk===p._key?' selected':'')+'>'+p.name+' ['+(p.stock||0)+']</option>';
    }
    html+='</select>';
    html+='<input id="sp_qty_'+i+'" type="number" value="'+it.q+'" min="1" oninput="spChgQty('+i+',this.value)" style="padding:11px 8px;font-size:14px;text-align:center">';
    html+='<input id="sp_rate_'+i+'" type="number" value="'+it.r+'" oninput="spChgRate('+i+',this.value)" style="padding:11px 8px;font-size:14px;text-align:right" placeholder="Price">';
    html+='<div id="sp_amt_'+i+'" style="font-weight:700;font-size:14px;padding:11px 4px;text-align:right">'+fmt(it.a)+'</div>';
    html+='<button class="btn btn-danger btn-sm" onclick="spRmItem('+i+')" style="padding:8px 10px">x</button>';
    html+='</div>';
  }
  document.getElementById('spItems').innerHTML=html;
  updateSPTotals();
};
window.renderSPOrders=function(){
  var sorted=spOrders.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'');});
  document.getElementById('spOrdBody').innerHTML=!sorted.length?'<tr><td colspan="5" class="empty">No orders yet</td></tr>':sorted.map(function(o){
    var badge=o.status==='pending'?'badge-warning':o.status==='approved'?'badge-success':o.status==='denied'?'badge-danger':'badge-info';
    return'<tr><td>'+o.date+'</td><td class="bold">'+o.orderNo+'</td><td>'+o.customerName+'</td><td class="r bold">'+fmt(o.total)+'</td><td><span class="badge '+badge+'">'+(o.status||'pending')+'</span></td></tr>';
  }).join('');
};
window.renderSPReport=function(){
  var type=document.getElementById('spRptType').value;
  var from=document.getElementById('spRptFrom').value;
  var to=document.getElementById('spRptTo').value;
  var filtered=spSales.filter(function(s){return(!from||s.date>=from)&&(!to||s.date<=to);});
  // Show report content, hide placeholder
  document.getElementById('spRptPlaceholder').classList.add('hidden');
  document.getElementById('spRptContent').classList.remove('hidden');
  var head='',body='',foot='';
  if(type==='product'){
    head='<tr><th>#</th><th>Product</th><th class="r">Qty Sold</th><th class="r">Avg Rate</th><th class="r">Revenue</th></tr>';
    var byProd={};filtered.forEach(function(s){(s.items||[]).forEach(function(it){var n=it.productName;if(!byProd[n])byProd[n]={qty:0,rev:0};byProd[n].qty+=it.qty;byProd[n].rev+=it.amount||it.qty*it.rate;});});
    var tQ=0,tR=0;var idx=1;body=Object.entries(byProd).sort(function(a,b){return b[1].rev-a[1].rev;}).map(function(e){tQ+=e[1].qty;tR+=e[1].rev;var avgRate=e[1].qty?e[1].rev/e[1].qty:0;return'<tr><td>'+idx++ +'</td><td class="bold">'+e[0]+'</td><td class="r">'+e[1].qty+'</td><td class="r">'+fmt(avgRate)+'</td><td class="r bold">'+fmt(e[1].rev)+'</td></tr>';}).join('');
    foot='<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL</td><td class="r">'+tQ+'</td><td></td><td class="r">'+fmt(tR)+'</td></tr>';
  }else if(type==='customer'){
    head='<tr><th>#</th><th>Customer</th><th>Phone</th><th class="r">Invoices</th><th class="r">Revenue</th><th class="r">Paid</th><th class="r">Due</th></tr>';
    var byCust={};filtered.forEach(function(s){var n=s.customerName;var c=spC.find(function(x){return x._key===s.customerId;});if(!byCust[n])byCust[n]={count:0,rev:0,paid:0,phone:c?c.phone||'':''};byCust[n].count++;byCust[n].rev+=s.total||0;byCust[n].paid+=s.paid||0;});
    var tC=0,tRv=0,tPd=0;var idx2=1;body=Object.entries(byCust).sort(function(a,b){return b[1].rev-a[1].rev;}).map(function(e){tC+=e[1].count;tRv+=e[1].rev;tPd+=e[1].paid;var due=e[1].rev-e[1].paid;return'<tr><td>'+idx2++ +'</td><td class="bold">'+e[0]+'</td><td class="text-muted">'+e[1].phone+'</td><td class="r">'+e[1].count+'</td><td class="r">'+fmt(e[1].rev)+'</td><td class="r text-success">'+fmt(e[1].paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td></tr>';}).join('');
    foot='<tr style="background:var(--bg);font-weight:800"><td colspan="3">TOTAL</td><td class="r">'+tC+'</td><td class="r">'+fmt(tRv)+'</td><td class="r">'+fmt(tPd)+'</td><td class="r">'+fmt(tRv-tPd)+'</td></tr>';
  }else if(type==='product-customer'){
    head='<tr><th>#</th><th>Product</th><th>Customer</th><th class="r">Qty</th><th class="r">Revenue</th></tr>';
    var byPC={};filtered.forEach(function(s){(s.items||[]).forEach(function(it){var k=it.productName+'|||'+s.customerName;if(!byPC[k])byPC[k]={prod:it.productName,cust:s.customerName,qty:0,rev:0};byPC[k].qty+=it.qty;byPC[k].rev+=it.amount||it.qty*it.rate;});});
    var tQ2=0,tR2=0;var idx3=1;body=Object.values(byPC).sort(function(a,b){return a.prod.localeCompare(b.prod)||b.rev-a.rev;}).map(function(r){tQ2+=r.qty;tR2+=r.rev;return'<tr><td>'+idx3++ +'</td><td class="bold">'+r.prod+'</td><td>'+r.cust+'</td><td class="r">'+r.qty+'</td><td class="r bold">'+fmt(r.rev)+'</td></tr>';}).join('');
    foot='<tr style="background:var(--bg);font-weight:800"><td colspan="3">TOTAL</td><td class="r">'+tQ2+'</td><td class="r">'+fmt(tR2)+'</td></tr>';
  }else if(type==='group-product'){
    head='<tr><th>#</th><th>Group</th><th>Product</th><th class="r">Qty</th><th class="r">Revenue</th><th class="r">% Share</th></tr>';
    var byGP={};var grandTotal=0;filtered.forEach(function(s){(s.items||[]).forEach(function(it){var pr=spP.find(function(x){return x._key===(it.productKey||it.productId);});var grp=pr?pr.group||'Ungrouped':'Ungrouped';var k=grp+'|||'+it.productName;if(!byGP[k])byGP[k]={grp:grp,prod:it.productName,qty:0,rev:0};byGP[k].qty+=it.qty;byGP[k].rev+=it.amount||it.qty*it.rate;grandTotal+=it.amount||it.qty*it.rate;});});
    var tQ3=0,tR3=0;var idx4=1;body=Object.values(byGP).sort(function(a,b){return a.grp.localeCompare(b.grp)||b.rev-a.rev;}).map(function(r){tQ3+=r.qty;tR3+=r.rev;var pct=grandTotal?(r.rev/grandTotal*100).toFixed(1):'0';return'<tr><td>'+idx4++ +'</td><td><span class="badge badge-info">'+r.grp+'</span></td><td class="bold">'+r.prod+'</td><td class="r">'+r.qty+'</td><td class="r bold">'+fmt(r.rev)+'</td><td class="r text-muted">'+pct+'%</td></tr>';}).join('');
    foot='<tr style="background:var(--bg);font-weight:800"><td colspan="3">TOTAL</td><td class="r">'+tQ3+'</td><td class="r">'+fmt(tR3)+'</td><td class="r">100%</td></tr>';
  }else if(type==='customer-product'){
    head='<tr><th>#</th><th>Customer</th><th>Phone</th><th>Product</th><th class="r">Qty</th><th class="r">Rate</th><th class="r">Amount</th></tr>';
    var rows=[];filtered.forEach(function(s){var c=spC.find(function(x){return x._key===s.customerId;});(s.items||[]).forEach(function(it){rows.push({cust:s.customerName,phone:c?c.phone||'':'',prod:it.productName,qty:it.qty,rate:it.rate,amt:it.amount||it.qty*it.rate,date:s.date});});});
    rows.sort(function(a,b){return a.cust.localeCompare(b.cust)||a.prod.localeCompare(b.prod);});
    var tQ4=0,tA4=0;var idx5=1;body=rows.map(function(r){tQ4+=r.qty;tA4+=r.amt;return'<tr><td>'+idx5++ +'</td><td class="bold">'+r.cust+'</td><td class="text-muted">'+r.phone+'</td><td>'+r.prod+'</td><td class="r">'+r.qty+'</td><td class="r">'+fmt(r.rate)+'</td><td class="r bold">'+fmt(r.amt)+'</td></tr>';}).join('');
    foot='<tr style="background:var(--bg);font-weight:800"><td colspan="4">TOTAL</td><td class="r">'+tQ4+'</td><td></td><td class="r">'+fmt(tA4)+'</td></tr>';
  }
  document.getElementById('spRptHead').innerHTML=head;
  document.getElementById('spRptBody').innerHTML=body||'<tr><td colspan="7" class="empty">No sales data for selected period</td></tr>';
  document.getElementById('spRptFoot').innerHTML=foot;
};
window.renderSPCustList=function(){
  var rows=spC.map(function(c){
    var cs=spSales.filter(function(s){return s.customerId===c._key;});
    var totalS=cs.reduce(function(a,s){return a+(s.total||0);},0);
    var totalP=cs.reduce(function(a,s){return a+(s.paid||0);},0);
    var out=Math.max(0,totalS-totalP);
    return'<tr><td class="bold">'+c.name+'</td><td class="text-muted">'+( c.phone||'')+'</td><td class="text-muted">'+(c.address||'')+'</td><td class="r">'+fmt(totalS)+'</td><td class="r '+(out>0?'text-danger bold':'')+'">'+fmt(out)+'</td></tr>';
  }).join('');
  document.getElementById('spCustListBody').innerHTML=rows||'<tr><td colspan="5" class="empty">No tagged customers</td></tr>';
};
window.submitOrd=async function(){
  var ck=document.getElementById('spCust').value;
  var c=spC.find(function(x){return x._key===ck;});
  if(!c)return alert('Select customer');
  var v=spI.filter(function(i){return i.pk&&i.q>0;});
  if(!v.length)return alert('Add items');
  // Warn about zero-stock items (SP can still place order but warned)
  var zeroStockItems=v.filter(function(i){var p=spP.find(function(x){return x._key===i.pk;});return p&&(p.stock||0)<=0;}).map(function(i){return i.pn;});
  if(zeroStockItems.length){if(!confirm('Warning: The following items have 0 stock and may not be fulfilled:\\n'+zeroStockItems.join(', ')+'\\n\\nProceed anyway?'))return;}
  var t=v.reduce(function(s,i){return s+i.a;},0);
  var ord={date:document.getElementById('spDate').value,orderNo:txnNo('ORD'),customerId:c._key,customerName:c.name,spId:SP_ID,spName:SP_NAME,spCode:SP_CODE,items:v.map(function(i){return{productKey:i.pk,productName:i.pn,qty:i.q,rate:i.r,amount:i.a};}),total:t,status:'pending'};
  await saveItem('order:',ord);
  spOrders.unshift(ord);
  alert('Order submitted successfully: '+ord.orderNo);
  spI=[{pk:'',pn:'',q:1,r:0,a:0}];
  renderSI();switchSPTab('orders');
};
<\/script></body></html>`}function ha(){return new Date().toISOString().slice(0,10),`
<div class="page-header"><div><div class="page-title">Dashboard</div><div class="page-sub">Business overview</div></div></div>
<div class="stats" id="stats"></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px"><div class="card"><div class="section-title">Recent Sales</div><div id="recentSales" class="table-wrap"></div></div><div class="card"><div class="section-title">Recent Purchases</div><div id="recentPurchases" class="table-wrap"></div></div></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px"><div class="card"><div class="section-title">Low Stock Alerts</div><div id="lowStockAlerts" class="table-wrap"></div></div><div class="card"><div class="section-title">Pending Orders</div><div id="pendingOrders" class="table-wrap"></div></div></div>
<script>
(async function(){var data=await Promise.all([loadList('product:'),loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('expense:'),loadList('party:'),loadList('order:'),loadList('bank:')]);var products=data[0],sales=data[1],purchases=data[2],payments=data[3],expenses=data[4],parties=data[5],orders=data[6]||[];var customers=parties.filter(function(p){return p.type==='customer'});var suppliers=parties.filter(function(p){return p.type==='supplier'});var totalSales=sales.reduce(function(s,x){return s+(x.total||0)},0);var totalPurchases=purchases.reduce(function(s,x){return s+(x.total||0)},0);var totalExpenses=expenses.reduce(function(s,x){return s+(x.amount||0)},0);
var receivables=0;customers.forEach(function(c){var cs=sales.filter(function(s){return s.customerId===c._key});var cr=payments.filter(function(p){return(p.party===c.name)&&p.type==='receipt'&&p.status==='done'});var td=cs.reduce(function(s,x){return s+(x.total||0)},0);var tr=cs.reduce(function(s,x){return s+(x.paid||0)},0)+cr.reduce(function(s,x){return s+(x.amount||0)},0);receivables+=Math.max(0,td-tr)});
var payables=0;suppliers.forEach(function(s){var sp=purchases.filter(function(p){return p.supplierId===s._key});var py=payments.filter(function(p){return p.party===s.name&&p.type==='payment'&&p.status==='done'});var td=sp.reduce(function(a,x){return a+(x.total||0)},0);var tp=sp.reduce(function(a,x){return a+(x.paid||0)},0)+py.reduce(function(a,x){return a+(x.amount||0)},0);payables+=Math.max(0,td-tp)});
var cashFlow=payments.filter(function(p){return p.status==='done'}).reduce(function(sum,p){return p.type==='receipt'?sum+(p.amount||0):p.type==='payment'?sum-(p.amount||0):sum},0);
var banks=data[7]||[];var bankBal=banks.reduce(function(s,b){return s+(b.balance||b.openingBalance||0)},0);
var cashReceipts=payments.filter(function(p){return p.method==='cash'&&p.type==='receipt'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashPayouts=payments.filter(function(p){return p.method==='cash'&&p.type==='payment'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashExpenses=expenses.filter(function(e){return e.method==='cash'}).reduce(function(s,e){return s+(e.amount||0)},0);
var salePaidCash=sales.filter(function(s){return s.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var purPaidCash=purchases.filter(function(p){return p.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
// Transfers: Cash received from bank (toAcc=Cash) and Cash sent to bank (fromAcc=Cash)
var trfToCash=payments.filter(function(p){return p.type==='transfer'&&p.toAcc==='Cash'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var trfFromCash=payments.filter(function(p){return p.type==='transfer'&&p.fromAcc==='Cash'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashInHand=salePaidCash+cashReceipts-purPaidCash-cashPayouts-cashExpenses+trfToCash-trfFromCash;
document.getElementById('stats').innerHTML=[{l:'Total Sales',v:fmt(totalSales),c:'var(--accent)'},{l:'Total Purchases',v:fmt(totalPurchases),c:'var(--primary)'},{l:'Expenses',v:fmt(totalExpenses),c:'var(--warning)'},{l:'Cash in Hand',v:fmt(cashInHand),c:cashInHand>=0?'var(--accent)':'var(--danger)'},{l:'Bank Balance',v:fmt(bankBal),c:'var(--primary)'},{l:'Receivables',v:fmt(receivables),c:'var(--info)'},{l:'Payables',v:fmt(payables),c:'var(--danger)'},{l:'Products',v:products.length,c:'var(--primary)'},{l:'Pending Orders',v:orders.filter(function(o){return o.status==='pending'}).length,c:'var(--warning)'}].map(function(s){return'<div class="stat"><div class="label">'+s.l+'</div><div class="value" style="color:'+s.c+'">'+s.v+'</div></div>'}).join('');
var rS=sales.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'')}).slice(0,5);document.getElementById('recentSales').innerHTML=rS.length?'<table class="tbl"><thead><tr><th>Date</th><th>Invoice</th><th>Customer</th><th class="r">Total</th></tr></thead><tbody>'+rS.map(function(s){return'<tr><td>'+s.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td>'+s.customerName+'</td><td class="r bold">'+fmt(s.total)+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">No sales</div>';
var rP=purchases.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'')}).slice(0,5);document.getElementById('recentPurchases').innerHTML=rP.length?'<table class="tbl"><thead><tr><th>Date</th><th>#</th><th>Supplier</th><th class="r">Total</th></tr></thead><tbody>'+rP.map(function(p){return'<tr><td>'+p.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27purchase\\x27,\\x27'+p._key+'\\x27)">'+p.purchaseNo+'</span></td><td>'+p.supplierName+'</td><td class="r bold">'+fmt(p.total)+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">No purchases</div>';
var ls=products.filter(function(p){return(p.stock||0)<=5}).sort(function(a,b){return(a.stock||0)-(b.stock||0)}).slice(0,8);document.getElementById('lowStockAlerts').innerHTML=ls.length?'<table class="tbl"><thead><tr><th>Product</th><th class="r">Stock</th></tr></thead><tbody>'+ls.map(function(p){return'<tr><td>'+p.name+'</td><td class="r bold '+(p.stock<=0?'text-danger':'text-warning')+'">'+p.stock+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">All OK</div>';
var po=orders.filter(function(o){return o.status==='pending'}).slice(0,5);document.getElementById('pendingOrders').innerHTML=po.length?'<table class="tbl"><thead><tr><th>Order#</th><th>Customer</th><th class="r">Total</th></tr></thead><tbody>'+po.map(function(o){return'<tr><td>'+o.orderNo+'</td><td>'+o.customerName+'</td><td class="r bold">'+fmt(o.total)+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">None</div>'})();
<\/script>`}function ya(){return`
<div class="page-header"><div><div class="page-title">Inventory</div><div class="page-sub">Products & stock (Group-wise)</div></div><div style="display:flex;gap:6px"><button class="btn btn-outline" onclick="openGroupMgr()"><span class="material-symbols-outlined" style="font-size:16px">folder</span> Manage Groups</button><button class="btn btn-primary" onclick="openAddP()"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add Product</button></div></div>
<div class="form-row" style="margin-bottom:14px"><div class="search-wrap" style="margin-bottom:0"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input placeholder="Search..." oninput="filterP(this.value)" id="pSearch"></div><div><label>Group Filter</label><select id="pGroupFilter" onchange="filterP(document.getElementById('pSearch').value)"><option value="">All Groups</option></select></div></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Group</th><th>SKU</th><th class="r">Buy</th><th class="r">Sell</th><th class="r">Stock</th><th class="r">Act</th></tr></thead><tbody id="pBody"></tbody></table></div></div>
<div class="modal-overlay" id="addProduct"><div class="modal"><h3 id="pTitle">Add Product</h3><input type="hidden" id="editPK"><div class="form-group"><label>Name</label><input id="pN" placeholder="Name"></div><div class="form-row"><div><label>Group</label><select id="pG"><option value="">No Group</option></select></div><div><label>SKU</label><input id="pS" placeholder="Auto"></div></div><div class="form-row"><div><label>Unit</label><input id="pU" value="pcs"></div><div><label>Stock</label><input type="number" id="pSt" placeholder="0"></div></div><div class="form-row"><div><label>Purchase Price</label><input type="number" id="pB" placeholder="0"></div><div><label>Sale Price</label><input type="number" id="pSl" placeholder="0"></div></div><div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('addProduct')">Cancel</button><button class="btn btn-primary" onclick="saveP()">Save</button></div></div></div>
<div class="modal-overlay" id="groupMgr"><div class="modal"><h3>Product Groups</h3>
<div style="display:flex;gap:6px;margin-bottom:12px"><input id="newGroupName" placeholder="New group name"><button class="btn btn-primary" onclick="saveGroup()">Add</button></div>
<div id="groupList"></div>
<div style="text-align:right;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('groupMgr')">Close</button></div>
</div></div>
<script>
var prods=[],ek=null,prodGroups=[];
async function loadP(){var d=await Promise.all([loadList('product:'),loadList('prodgroup:')]);prods=d[0];prodGroups=d[1]||[];updateGroupDropdowns();renderP(prods)}
function updateGroupDropdowns(){var opts='<option value="">No Group</option>'+prodGroups.map(function(g){return'<option value="'+g.name+'">'+g.name+'</option>'}).join('');document.getElementById('pG').innerHTML=opts;document.getElementById('pGroupFilter').innerHTML='<option value="">All Groups</option>'+prodGroups.map(function(g){return'<option value="'+g.name+'">'+g.name+'</option>'}).join('')}
function renderP(l){document.getElementById('pBody').innerHTML=!l.length?'<tr><td colspan="7" class="empty">No products</td></tr>':l.map(function(p){return'<tr><td class="bold">'+p.name+'</td><td>'+(p.group?'<span class="badge badge-info">'+p.group+'</span>':'-')+'</td><td><span class="badge badge-info">'+(p.sku||'')+'</span></td><td class="r">'+fmt(p.purchasePrice)+'</td><td class="r">'+fmt(p.salePrice)+'</td><td class="r bold '+((p.stock||0)<=0?'text-danger':(p.stock||0)<=5?'text-warning':'')+'">'+fmt(p.stock)+'</td><td class="r"><button class="btn btn-outline btn-sm" onclick="editP(\\x27'+p._key+'\\x27)">E</button> <button class="btn btn-danger btn-sm" onclick="delP(\\x27'+p._key+'\\x27)">D</button></td></tr>'}).join('')}
window.openAddP=function(){ek=null;document.getElementById('pTitle').textContent='Add Product';['pN','pS','pB','pSl','pSt'].forEach(function(i){document.getElementById(i).value=''});document.getElementById('pU').value='pcs';document.getElementById('pG').value='';openModal('addProduct')}
window.editP=function(k){var p=prods.find(function(x){return x._key===k});if(!p)return;ek=k;document.getElementById('pTitle').textContent='Edit Product';document.getElementById('pN').value=p.name||'';document.getElementById('pS').value=p.sku||'';document.getElementById('pU').value=p.unit||'pcs';document.getElementById('pG').value=p.group||'';document.getElementById('pB').value=p.purchasePrice||0;document.getElementById('pSl').value=p.salePrice||0;document.getElementById('pSt').value=p.stock||0;openModal('addProduct')}
window.saveP=async function(){var n=document.getElementById('pN').value.trim();if(!n){showToast('Product name is required','warning');return;}var s=document.getElementById('pS').value.trim()||(n.slice(0,3).toUpperCase()+'-'+Math.random().toString(36).slice(2,6).toUpperCase());var d={name:n,sku:s,group:document.getElementById('pG').value,unit:document.getElementById('pU').value||'pcs',purchasePrice:+document.getElementById('pB').value||0,salePrice:+document.getElementById('pSl').value||0,stock:+document.getElementById('pSt').value||0};try{if(ek){await saveByKey(ek,d,'edit','Edited product: '+n);ek=null;showToast('Product updated successfully','success')}else{await saveItem('product:',d,null,'create','Created product: '+n);showToast('Product added successfully','success')}invalidateCache('product:');closeModal('addProduct');loadP()}catch(e){showToast('Failed to save product: '+e.message,'error')}}
window.delP=async function(k){var p=prods.find(function(x){return x._key===k});if(!confirm('Delete '+(p?p.name:'')+'?'))return;try{await deleteItem(k,false,'Deleted product: '+(p?p.name:''));invalidateCache('product:');showToast('Product deleted successfully','success');loadP()}catch(e){showToast('Failed to delete product','error')}}
window.filterP=function(q){var t=normalize(q);var gf=document.getElementById('pGroupFilter').value;renderP(prods.filter(function(p){return(!gf||p.group===gf)&&(normalize(p.name).includes(t)||normalize(p.sku).includes(t)||normalize(p.group).includes(t))}))}
window.openGroupMgr=function(){document.getElementById('newGroupName').value='';var html=prodGroups.map(function(g){return'<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid var(--border)"><span>'+g.name+'</span><button class="btn btn-danger btn-xs" onclick="delGroup(\\x27'+g._key+'\\x27)">Del</button></div>'}).join('');document.getElementById('groupList').innerHTML=html||'<div class="empty">No groups</div>';openModal('groupMgr')}
window.saveGroup=async function(){var n=document.getElementById('newGroupName').value.trim();if(!n)return;await saveItem('prodgroup:',{name:n});loadP();setTimeout(openGroupMgr,300)}
window.delGroup=async function(k){await deleteItem(k,false,'Deleted product group');loadP();setTimeout(openGroupMgr,300)}
loadP();
<\/script>`}function ga(){return`
<div class="page-header"><div><div class="page-title">Stock Check</div><div class="page-sub">Quick stock availability lookup</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('sckPrint','Stock Check')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('sckTbl','StockCheck')">Export XLS</button></div></div>
<div class="form-row" style="margin-bottom:14px"><div class="search-wrap" style="margin-bottom:0"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input id="sckSearch" placeholder="Search product name..." oninput="filterSck()" style="padding:12px 12px 12px 36px;font-size:15px"></div><div><label>Group</label><select id="sckGroup" onchange="filterSck()"><option value="">All Groups</option></select></div></div>
<div id="sckPrint"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="sckTbl"><thead><tr><th>Product Name</th><th>Group</th><th class="r">Available Qty</th></tr></thead><tbody id="sckBody"></tbody></table></div></div></div>
<script>
var sckProds=[],sckGroups=[];
async function loadSck(){var d=await Promise.all([loadList('product:'),loadList('prodgroup:')]);sckProds=d[0];sckGroups=d[1]||[];sckProds.sort(function(a,b){return(a.name||'').localeCompare(b.name||'')});document.getElementById('sckGroup').innerHTML='<option value="">All Groups</option>'+sckGroups.map(function(g){return'<option value="'+g.name+'">'+g.name+'</option>'}).join('');filterSck()}
function renderSck(list){document.getElementById('sckBody').innerHTML=!list.length?'<tr><td colspan="3" class="empty">No products found</td></tr>':list.map(function(p){var st=p.stock||0;return'<tr><td class="bold" style="font-size:14px">'+p.name+'</td><td>'+(p.group?'<span class="badge badge-info">'+p.group+'</span>':'-')+'</td><td class="r bold" style="font-size:15px;'+(st<=0?'color:var(--danger)':st<=5?'color:var(--warning)':'color:var(--accent)')+'">'+st+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL PRODUCTS: '+list.length+'</td><td class="r">'+list.reduce(function(s,p){return s+(p.stock||0)},0)+'</td></tr>'}
window.filterSck=function(){var t=(document.getElementById('sckSearch').value||'').trim().toLowerCase();var gf=document.getElementById('sckGroup').value;var fl=sckProds.filter(function(p){return(!t||(p.name||'').toLowerCase().includes(t))&&(!gf||p.group===gf)});renderSck(fl)}
loadSck();
<\/script>`}function xa(){return`
<div class="page-header"><div><div class="page-title">Customers & Suppliers</div><div class="page-sub">Contacts</div></div><button class="btn btn-primary" onclick="openAddParty()"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add</button></div>
<div class="tabs"><button class="tab active" onclick="switchPT('customer',this)">Customers</button><button class="tab" onclick="switchPT('supplier',this)">Suppliers</button></div>
<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input placeholder="Search..." oninput="filterPa(this.value)"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Phone</th><th>Address</th><th>Salesperson</th><th class="r">Credit Limit</th><th class="r">Balance</th><th class="r">Act</th></tr></thead><tbody id="paBody"></tbody></table></div></div>
<div class="modal-overlay" id="addParty"><div class="modal"><h3 id="paTitle">Add</h3><input type="hidden" id="paEK"><div class="form-group"><label>Name</label><input id="paN"></div><div class="form-row"><div><label>Phone</label><input id="paPh"></div><div><label>Credit Limit</label><input type="number" id="paCL" placeholder="0=none"></div></div><div class="form-group"><label>Address</label><input id="paAd"></div><div class="form-group" id="paSPDiv"><label>Salesperson</label><select id="paSP"><option value="">None</option></select></div><div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('addParty')">Cancel</button><button class="btn btn-primary" onclick="savePa()">Save</button></div></div></div>
<script>
var aP=[],pT='customer',paSPList=[];
window.switchPT=function(t,el){pT=t;document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});el.classList.add('active');renderPa();document.getElementById('paSPDiv').classList.toggle('hidden',pT!=='customer')}
window.openAddParty=function(){document.getElementById('paTitle').textContent='Add '+(pT==='customer'?'Customer':'Supplier');document.getElementById('paEK').value='';['paN','paPh','paAd'].forEach(function(i){document.getElementById(i).value=''});document.getElementById('paCL').value='';document.getElementById('paSP').value='';document.getElementById('paSPDiv').classList.toggle('hidden',pT!=='customer');openModal('addParty')}
window.savePa=async function(){var ek=document.getElementById('paEK').value;var n=document.getElementById('paN').value.trim();if(!n){showToast('Name is required','warning');return;}var spId=document.getElementById('paSP').value;var sp=paSPList.find(function(x){return x._key===spId});var d={name:n,phone:document.getElementById('paPh').value.trim(),address:document.getElementById('paAd').value.trim(),creditLimit:+document.getElementById('paCL').value||0,salespersonId:spId||'',salespersonName:sp?sp.name:''};try{if(ek){var old=aP.find(function(x){return x._key===ek});if(old)d=Object.assign({},cleanForSave(old),d);await saveByKey(ek,d);showToast('Contact updated successfully','success')}else{d.type=pT;d.balance=0;await saveItem('party:',d);showToast((pT==='customer'?'Customer':'Supplier')+' added successfully','success')}invalidateCache('party:');closeModal('addParty');loadPa()}catch(e){showToast('Failed to save: '+e.message,'error')}}
window.editPa=function(k){var p=aP.find(function(x){return x._key===k});if(!p)return;pT=p.type;document.getElementById('paTitle').textContent='Edit';document.getElementById('paEK').value=p._key;document.getElementById('paN').value=p.name||'';document.getElementById('paPh').value=p.phone||'';document.getElementById('paAd').value=p.address||'';document.getElementById('paCL').value=p.creditLimit||'';document.getElementById('paSP').value=p.salespersonId||'';document.getElementById('paSPDiv').classList.toggle('hidden',pT!=='customer');openModal('addParty')}
async function loadPa(){var d=await Promise.all([loadList('party:'),loadList('salesperson:')]);aP=d[0];paSPList=d[1]||[];document.getElementById('paSP').innerHTML='<option value="">None</option>'+paSPList.map(function(s){return'<option value="'+s._key+'">'+s.name+'</option>'}).join('');renderPa()}
function renderPa(li){var l=li||aP.filter(function(p){return p.type===pT});document.getElementById('paBody').innerHTML=!l.length?'<tr><td colspan="7" class="empty">None</td></tr>':l.map(function(p){return'<tr><td class="bold">'+p.name+'</td><td class="text-muted">'+(p.phone||'')+'</td><td class="text-muted">'+(p.address||'')+'</td><td>'+(p.salespersonName?'<span class="badge badge-info">'+p.salespersonName+'</span>':'-')+'</td><td class="r">'+(p.creditLimit?fmt(p.creditLimit):'--')+'</td><td class="r bold '+((p.balance||0)>0?'text-danger':'text-success')+'">'+fmt(Math.abs(p.balance||0))+((p.balance||0)>0?' Dr':p.balance<0?' Cr':'')+'</td><td class="r"><button class="btn btn-outline btn-sm" onclick="editPa(\\x27'+p._key+'\\x27)">Edit</button></td></tr>'}).join('')}
window.filterPa=function(q){var t=normalize(q);renderPa(aP.filter(function(p){return p.type===pT&&(normalize(p.name).includes(t)||normalize(p.phone).includes(t))}))}
loadPa();
<\/script>`}function wa(){return`
<div class="page-header"><div><div class="page-title">Purchases</div><div class="page-sub">Purchase products from suppliers</div></div><button class="btn btn-primary" onclick="openPurchase()"><span class="material-symbols-outlined" style="font-size:16px">add</span> New Purchase</button></div>
<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input placeholder="Search purchases..." oninput="filterPur(this.value)"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="purTable"><thead><tr><th>Date</th><th>Purchase#</th><th>Supplier</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Due</th><th class="r">Act</th></tr></thead><tbody id="purBody"></tbody></table></div></div>
<div class="modal-overlay" id="purModal"><div class="modal modal-lg"><h3 id="purTitle">New Purchase</h3>
<input type="hidden" id="purEK">
<div class="form-row"><div><label>Purchase No</label><input id="purNo" readonly></div><div><label>Date</label><input type="date" id="purDate"></div></div>
<div class="form-row"><div><label>Supplier</label><select id="purSupplier"><option value="">Select...</option></select></div><div></div></div>
<div class="section-title" style="margin-top:12px">Items</div>
<div id="purItems"></div>
<button class="btn btn-outline btn-sm" onclick="addPurItem()" style="margin:8px 0">+ Add Item</button>
<div class="form-row" style="margin-top:12px"><div><label>Discount</label><input type="number" id="purDisc" value="0" oninput="calcPur()"></div><div><label>Extra Charges</label><input type="number" id="purExtra" value="0" oninput="calcPur()"></div></div>
<div class="form-row"><div><label>VAT/Tax</label><div style="display:flex;gap:4px"><input type="number" id="purVat" value="0" oninput="calcPur()"><select id="purVatType" onchange="calcPur()" style="width:80px"><option value="amount">Amt</option><option value="percent">%</option></select></div></div><div><label>Total</label><input id="purTotal" readonly class="bold"></div></div>
<div class="form-row"><div><label>Paid</label><input type="number" id="purPaid" value="0"></div><div><label>Payment Method</label><select id="purMethod" onchange="togglePurBank()"><option value="cash">Cash</option><option value="bank_transfer">Bank Transfer</option><option value="cheque">Cheque</option><option value="credit_card">Credit Card</option><option value="mobile_payment">Mobile Payment</option><option value="credit">On Credit</option></select></div></div>
<div class="form-row" id="purBankRow" class="hidden"><div><label>Bank</label><select id="purBank"><option value="">Select Bank...</option></select></div><div id="purChequeDiv" class="hidden"><label>Cheque No</label><input id="purCheque"></div></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('purModal')">Cancel</button><button class="btn btn-primary" onclick="savePur()">Save Purchase</button></div>
</div></div>
<script>
var purs=[],prods=[],suppliers=[],purBanks=[];
window.togglePurBank=function(){var m=document.getElementById('purMethod').value;var needsBank=m==='bank_transfer'||m==='cheque'||m==='credit_card'||m==='mobile_payment';document.getElementById('purBankRow').classList.toggle('hidden',!needsBank);document.getElementById('purChequeDiv').classList.toggle('hidden',m!=='cheque')};
async function loadPur(){var d=await Promise.all([loadList('purchase:'),loadList('product:'),loadList('party:'),loadList('bank:')]);purs=d[0];prods=d[1];suppliers=d[2].filter(function(p){return p.type==='supplier'});purBanks=d[3]||[];
document.getElementById('purSupplier').innerHTML='<option value="">Select...</option>'+suppliers.map(function(s){return'<option value="'+s._key+'">'+s.name+'</option>'}).join('');
document.getElementById('purBank').innerHTML='<option value="">Select Bank...</option>'+purBanks.map(function(b){return'<option value="'+b.name+'">'+b.name+'</option>'}).join('');
renderPur(purs)}
function renderPur(l){l.sort(function(a,b){return(b.date||'').localeCompare(a.date)});document.getElementById('purBody').innerHTML=!l.length?'<tr><td colspan="7" class="empty">No purchases</td></tr>':l.map(function(p){var due=(p.total||0)-(p.paid||0);return'<tr><td>'+p.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27purchase\\x27,\\x27'+p._key+'\\x27)">'+p.purchaseNo+'</span></td><td>'+p.supplierName+'</td><td class="r bold">'+fmt(p.total)+'</td><td class="r text-success">'+fmt(p.paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editPur(\\x27'+p._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delPur(\\x27'+p._key+'\\x27)">Del</button></td></tr>'}).join('')}
window.openPurchase=function(){document.getElementById('purEK').value='';document.getElementById('purNo').value=txnNo('PUR');document.getElementById('purDate').value=todayISO();document.getElementById('purSupplier').value='';document.getElementById('purDisc').value=0;document.getElementById('purExtra').value=0;document.getElementById('purVat').value=0;document.getElementById('purPaid').value=0;window._purItems=[{pk:'',pn:'',qty:1,rate:0,amt:0}];renderPurItems();openModal('purModal')}
window._purItems=[];
function renderPurItems(){document.getElementById('purItems').innerHTML='<table class="tbl" style="font-size:12px"><thead><tr><th>Product</th><th style="width:70px">Qty</th><th style="width:90px">Rate</th><th style="width:90px">Amt</th><th style="width:30px"></th></tr></thead><tbody>'+window._purItems.map(function(it,i){return'<tr><td><select onchange="purItemCh('+i+',this)" style="font-size:12px"><option value="">Select...</option>'+prods.map(function(p){return'<option value="'+p._key+'" '+(it.pk===p._key?'selected':'')+'>'+p.name+'</option>'}).join('')+'</select></td><td><input type="number" value="'+it.qty+'" onchange="purQty('+i+',this)" style="width:60px"></td><td><input type="number" value="'+it.rate+'" onchange="purRate('+i+',this)" style="width:80px"></td><td class="r bold">'+fmt(it.amt)+'</td><td><button class="btn btn-danger btn-xs" onclick="rmPurItem('+i+')">X</button></td></tr>'}).join('')+'</tbody></table>';calcPur()}
window.addPurItem=function(){window._purItems.push({pk:'',pn:'',qty:1,rate:0,amt:0});renderPurItems()}
window.rmPurItem=function(i){window._purItems.splice(i,1);renderPurItems()}
window.purItemCh=function(i,el){var p=prods.find(function(x){return x._key===el.value});window._purItems[i].pk=el.value;window._purItems[i].pn=p?p.name:'';window._purItems[i].rate=p?p.purchasePrice||0:0;window._purItems[i].amt=window._purItems[i].qty*window._purItems[i].rate;renderPurItems()}
window.purQty=function(i,el){window._purItems[i].qty=+el.value||0;window._purItems[i].amt=window._purItems[i].qty*window._purItems[i].rate;renderPurItems()}
window.purRate=function(i,el){window._purItems[i].rate=+el.value||0;window._purItems[i].amt=window._purItems[i].qty*window._purItems[i].rate;renderPurItems()}
window.calcPur=function(){var sub=window._purItems.reduce(function(s,x){return s+x.amt},0);var disc=+document.getElementById('purDisc').value||0;var extra=+document.getElementById('purExtra').value||0;var base=sub-disc+extra;var vt=document.getElementById('purVatType').value;var vv=+document.getElementById('purVat').value||0;var vatAmt=vt==='percent'?base*vv/100:vv;document.getElementById('purTotal').value=fmt(base+vatAmt)}
window.savePur=async function(){var ek=document.getElementById('purEK').value;var sid=document.getElementById('purSupplier').value;if(!sid){showToast('Please select a supplier','warning');return;}var items=window._purItems.filter(function(x){return x.pk});if(!items.length){showToast('Please add at least one item','warning');return;}var sub=items.reduce(function(s,x){return s+x.amt},0);var disc=+document.getElementById('purDisc').value||0;var extra=+document.getElementById('purExtra').value||0;var base=sub-disc+extra;var vt=document.getElementById('purVatType').value;var vv=+document.getElementById('purVat').value||0;var vatAmt=vt==='percent'?base*vv/100:vv;var total=base+vatAmt;var paid=+document.getElementById('purPaid').value||0;var sup=suppliers.find(function(x){return x._key===sid});
var method=document.getElementById('purMethod').value;var bankName=document.getElementById('purBank').value||'';var chequeNo=document.getElementById('purCheque')?document.getElementById('purCheque').value:'';
var data={purchaseNo:document.getElementById('purNo').value,date:document.getElementById('purDate').value,supplierId:sid,supplierName:sup?sup.name:'',items:items.map(function(x){return{productId:x.pk,productName:x.pn,qty:x.qty,rate:x.rate,amount:x.amt}}),discount:disc,extra:extra,vat:vv,vatType:vt,total:total,paid:paid,method:method,bankName:bankName,chequeNo:chequeNo};
if(ek){var oldPur=purs.find(function(x){return x._key===ek});if(oldPur&&oldPur.paid>0&&oldPur.method!=='cash'&&oldPur.method!=='credit'&&oldPur.bankName){var oldBank=purBanks.find(function(b){return b.name===oldPur.bankName});if(oldBank){oldBank.balance=(oldBank.balance||0)+(oldPur.paid||0);await saveByKey(oldBank._key,cleanForSave(oldBank))}}
if(paid>0&&method!=='cash'&&method!=='credit'&&bankName){var bk=purBanks.find(function(b){return b.name===bankName});if(bk){bk.balance=(bk.balance||0)-paid;await saveByKey(bk._key,cleanForSave(bk))}}
await saveByKey(ek,data)}else{await saveItem('purchase:',data);for(var ii=0;ii<items.length;ii++){var pr=prods.find(function(x){return x._key===items[ii].pk});if(pr){pr.stock=(pr.stock||0)+items[ii].qty;pr.purchasePrice=items[ii].rate;await saveByKey(pr._key,cleanForSave(pr))}}
if(paid>0&&method!=='cash'&&method!=='credit'&&bankName){var bk2=purBanks.find(function(b){return b.name===bankName});if(bk2){bk2.balance=(bk2.balance||0)-paid;await saveByKey(bk2._key,cleanForSave(bk2))}}}
invalidateCache('purchase:');invalidateCache('product:');invalidateCache('bank:');
showToast(ek?'Purchase updated successfully':'Purchase saved successfully','success');
closeModal('purModal');loadPur()}
window.editPur=function(k){var p=purs.find(function(x){return x._key===k});if(!p)return;document.getElementById('purEK').value=k;document.getElementById('purNo').value=p.purchaseNo;document.getElementById('purDate').value=p.date;document.getElementById('purSupplier').value=p.supplierId;document.getElementById('purDisc').value=p.discount||0;document.getElementById('purExtra').value=p.extra||0;document.getElementById('purVat').value=p.vat||0;document.getElementById('purVatType').value=p.vatType||'amount';document.getElementById('purPaid').value=p.paid||0;document.getElementById('purMethod').value=p.method||'cash';togglePurBank();if(p.bankName)document.getElementById('purBank').value=p.bankName;if(p.chequeNo&&document.getElementById('purCheque'))document.getElementById('purCheque').value=p.chequeNo;window._purItems=(p.items||[]).map(function(x){return{pk:x.productId,pn:x.productName,qty:x.qty,rate:x.rate,amt:x.amount}});if(!window._purItems.length)window._purItems=[{pk:'',pn:'',qty:1,rate:0,amt:0}];document.getElementById('purTitle').textContent='Edit Purchase';renderPurItems();openModal('purModal')}
window.delPur=async function(k){if(!confirm('Delete purchase?'))return;await deleteItem(k,false);invalidateCache('purchase:');showToast('Purchase deleted successfully','success');loadPur()}
window.filterPur=function(q){var t=normalize(q);renderPur(purs.filter(function(p){return normalize(p.purchaseNo).includes(t)||normalize(p.supplierName).includes(t)||normalize(p.date).includes(t)}))}
loadPur();
<\/script>`}function ka(){return`
<div class="page-header"><div><div class="page-title">Sales</div><div class="page-sub">Manage invoices</div></div><button class="btn btn-primary" onclick="openSale()"><span class="material-symbols-outlined" style="font-size:16px">add</span> New Sale</button></div>
<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input placeholder="Search sales..." oninput="filterSal(this.value)"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="salTable"><thead><tr><th>Date</th><th>Invoice#</th><th>Customer</th><th>SP</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Due</th><th class="r">Act</th></tr></thead><tbody id="salBody"></tbody></table></div></div>
<div class="modal-overlay" id="salModal"><div class="modal modal-lg"><h3 id="salTitle">New Sale</h3>
<input type="hidden" id="salEK">
<div class="form-row"><div><label>Invoice No</label><input id="salNo" readonly></div><div><label>Date</label><input type="date" id="salDate"></div></div>
<div class="form-row"><div><label>Customer</label><select id="salCust" onchange="onSalCustChange()"><option value="">Select...</option></select></div><div><label>Salesperson</label><select id="salSP"><option value="">None</option></select></div></div>
<div id="creditWarn" class="hidden" style="padding:6px 10px;background:var(--danger-light);color:var(--danger);border-radius:6px;font-size:11px;font-weight:600;margin-bottom:8px"></div>
<div class="section-title" style="margin-top:12px">Items</div>
<div id="salItems"></div>
<button class="btn btn-outline btn-sm" onclick="addSalItem()" style="margin:8px 0">+ Add Item</button>
<div class="form-row" style="margin-top:12px"><div><label>Discount</label><div style="display:flex;gap:4px"><input type="number" id="salDisc" value="0" oninput="calcSal()"><select id="salDiscType" onchange="calcSal()" style="width:80px"><option value="amount">Amt</option><option value="percent">%</option></select></div></div><div><label>Extra Charges</label><input type="number" id="salExtra" value="0" oninput="calcSal()"></div></div>
<div class="form-row"><div><label>VAT/Tax</label><div style="display:flex;gap:4px"><input type="number" id="salVat" value="0" oninput="calcSal()"><select id="salVatType" onchange="calcSal()" style="width:80px"><option value="amount">Amt</option><option value="percent">%</option></select></div></div><div><label>AIT</label><div style="display:flex;gap:4px"><input type="number" id="salAit" value="0" oninput="calcSal()"><select id="salAitType" onchange="calcSal()" style="width:80px"><option value="amount">Amt</option><option value="percent">%</option></select></div></div></div>
<div class="form-row"><div><label>Total</label><input id="salTotal" readonly class="bold"></div><div><label>Paid</label><input type="number" id="salPaid" value="0"></div></div>
<div class="form-row"><div><label>Payment Method</label><select id="salMethod" onchange="toggleSalBank()"><option value="cash">Cash</option><option value="bank_transfer">Bank Transfer</option><option value="cheque">Cheque</option><option value="credit_card">Credit Card</option><option value="mobile_payment">Mobile Payment</option><option value="credit">On Credit</option></select></div><div id="salBankDiv"><label>Bank</label><select id="salBank"><option value="">Select Bank...</option></select></div></div>
<div class="form-group hidden" id="salChequeDiv"><label>Cheque No</label><input id="salCheque" placeholder="Cheque#"></div>
<div class="form-group"><label>Note</label><input id="salNote" placeholder="Sale note / remarks"></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('salModal')">Cancel</button><button class="btn btn-primary" onclick="saveSal()">Save Sale</button></div>
</div></div>
<script>
var sals=[],salProds=[],customers=[],spList=[],salBanks=[];
window.toggleSalBank=function(){var m=document.getElementById('salMethod').value;var needsBank=m==='bank_transfer'||m==='cheque'||m==='credit_card'||m==='mobile_payment';document.getElementById('salBankDiv').classList.toggle('hidden',!needsBank);document.getElementById('salChequeDiv').classList.toggle('hidden',m!=='cheque');
// Auto-fill paid amount when cash is selected
if(m==='cash'){var totalStr=document.getElementById('salTotal').value;var totalNum=parseFloat(String(totalStr).replace(/,/g,''))||0;document.getElementById('salPaid').value=totalNum}};
window.onSalCustChange=function(){var cid=document.getElementById('salCust').value;var cust=customers.find(function(x){return x._key===cid});if(cust&&cust.salespersonId){document.getElementById('salSP').value=cust.salespersonId}calcSal()};
async function loadSal(){var d=await Promise.all([loadList('sale:'),loadList('product:'),loadList('party:'),loadList('salesperson:'),loadList('bank:')]);sals=d[0];salProds=d[1];customers=d[2].filter(function(p){return p.type==='customer'});spList=d[3];salBanks=d[4]||[];
document.getElementById('salCust').innerHTML='<option value="">Select...</option>'+customers.map(function(c){return'<option value="'+c._key+'">'+c.name+'</option>'}).join('');
document.getElementById('salSP').innerHTML='<option value="">None</option>'+spList.map(function(s){return'<option value="'+s._key+'">'+s.name+'</option>'}).join('');
document.getElementById('salBank').innerHTML='<option value="">Select Bank...</option>'+salBanks.map(function(b){return'<option value="'+b.name+'">'+b.name+'</option>'}).join('');
renderSal(sals)}
function renderSal(l){l.sort(function(a,b){return(b.date||'').localeCompare(a.date)});document.getElementById('salBody').innerHTML=!l.length?'<tr><td colspan="8" class="empty">No sales</td></tr>':l.map(function(s){var due=(s.total||0)-(s.paid||0);return'<tr><td>'+s.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td>'+s.customerName+'</td><td class="text-muted">'+(s.salespersonName||'-')+'</td><td class="r bold">'+fmt(s.total)+'</td><td class="r text-success">'+fmt(s.paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editSal(\\x27'+s._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delSal(\\x27'+s._key+'\\x27)">Del</button></td></tr>'}).join('')}
window._salItems=[];
window.openSale=function(){document.getElementById('salEK').value='';document.getElementById('salNo').value=txnNo('INV');document.getElementById('salDate').value=todayISO();document.getElementById('salCust').value='';document.getElementById('salSP').value='';document.getElementById('salDisc').value=0;document.getElementById('salExtra').value=0;document.getElementById('salVat').value=0;document.getElementById('salAit').value=0;document.getElementById('salPaid').value=0;document.getElementById('salNote').value='';document.getElementById('salMethod').value='cash';document.getElementById('creditWarn').classList.add('hidden');toggleSalBank();window._salItems=[{pk:'',pn:'',qty:1,rate:0,amt:0}];renderSalItems();openModal('salModal')}
function renderSalItems(){document.getElementById('salItems').innerHTML='<table class="tbl" style="font-size:12px"><thead><tr><th>Product</th><th style="width:70px">Qty</th><th style="width:90px">Rate</th><th style="width:90px">Amt</th><th style="width:30px"></th></tr></thead><tbody>'+window._salItems.map(function(it,i){return'<tr><td><select onchange="salItemCh('+i+',this)" style="font-size:12px"><option value="">Select...</option>'+salProds.map(function(p){return'<option value="'+p._key+'" '+(it.pk===p._key?'selected':'')+'>'+p.name+' ['+fmt(p.stock||0)+']</option>'}).join('')+'</select></td><td><input type="number" value="'+it.qty+'" onchange="salQty('+i+',this)" style="width:60px"></td><td><input type="number" value="'+it.rate+'" onchange="salRate('+i+',this)" style="width:80px"></td><td class="r bold">'+fmt(it.amt)+'</td><td><button class="btn btn-danger btn-xs" onclick="rmSalItem('+i+')">X</button></td></tr>'}).join('')+'</tbody></table>';calcSal()}
window.addSalItem=function(){window._salItems.push({pk:'',pn:'',qty:1,rate:0,amt:0});renderSalItems()}
window.rmSalItem=function(i){window._salItems.splice(i,1);renderSalItems()}
window.salItemCh=function(i,el){var p=salProds.find(function(x){return x._key===el.value});window._salItems[i].pk=el.value;window._salItems[i].pn=p?p.name:'';window._salItems[i].rate=p?p.salePrice||0:0;window._salItems[i].amt=window._salItems[i].qty*window._salItems[i].rate;renderSalItems()}
window.salQty=function(i,el){window._salItems[i].qty=+el.value||0;window._salItems[i].amt=window._salItems[i].qty*window._salItems[i].rate;renderSalItems()}
window.salRate=function(i,el){window._salItems[i].rate=+el.value||0;window._salItems[i].amt=window._salItems[i].qty*window._salItems[i].rate;renderSalItems()}
window.calcSal=function(){var sub=window._salItems.reduce(function(s,x){return s+x.amt},0);var dt=document.getElementById('salDiscType').value;var dv=+document.getElementById('salDisc').value||0;var discAmt=dt==='percent'?sub*dv/100:dv;var extra=+document.getElementById('salExtra').value||0;var base=sub-discAmt+extra;var vt=document.getElementById('salVatType').value;var vv=+document.getElementById('salVat').value||0;var vatAmt=vt==='percent'?base*vv/100:vv;var at=document.getElementById('salAitType').value;var av=+document.getElementById('salAit').value||0;var aitAmt=at==='percent'?base*av/100:av;var totalVal=base+vatAmt+aitAmt;document.getElementById('salTotal').value=fmt(totalVal);
// Auto-fill Paid when method is cash
var meth=document.getElementById('salMethod').value;if(meth==='cash'){document.getElementById('salPaid').value=totalVal}
var cid=document.getElementById('salCust').value;var cust=customers.find(function(x){return x._key===cid});if(cust&&cust.creditLimit>0){var outstanding=sals.filter(function(x){return x.customerId===cid}).reduce(function(s,x){return s+((x.total||0)-(x.paid||0))},0);if(outstanding+totalVal>cust.creditLimit){document.getElementById('creditWarn').textContent='Credit limit warning: Outstanding '+fmt(outstanding)+' + this sale exceeds limit of '+fmt(cust.creditLimit);document.getElementById('creditWarn').classList.remove('hidden')}else{document.getElementById('creditWarn').classList.add('hidden')}}else{document.getElementById('creditWarn').classList.add('hidden')}}
window.saveSal=async function(){var ek=document.getElementById('salEK').value;var cid=document.getElementById('salCust').value;if(!cid){showToast('Please select a customer','warning');return;}var items=window._salItems.filter(function(x){return x.pk});if(!items.length){showToast('Please add at least one item','warning');return;}
// Stock validation - block if any product has 0 stock (new sale only)
if(!ek){var stockErrors=[];items.forEach(function(it){var pr=salProds.find(function(x){return x._key===it.pk});if(pr&&(pr.stock||0)<=0){stockErrors.push(pr.name+' (Stock: 0)')}else if(pr&&it.qty>(pr.stock||0)){stockErrors.push(pr.name+' (Available: '+(pr.stock||0)+', Requested: '+it.qty+')')}});if(stockErrors.length){showToast('Cannot create sale - Insufficient stock:\\n'+stockErrors.join(', '),'error');return;}}var sub=items.reduce(function(s,x){return s+x.amt},0);var dt=document.getElementById('salDiscType').value;var dv=+document.getElementById('salDisc').value||0;var discAmt=dt==='percent'?sub*dv/100:dv;var extra=+document.getElementById('salExtra').value||0;var base=sub-discAmt+extra;var vt=document.getElementById('salVatType').value;var vv=+document.getElementById('salVat').value||0;var vatAmt=vt==='percent'?base*vv/100:vv;var at=document.getElementById('salAitType').value;var av=+document.getElementById('salAit').value||0;var aitAmt=at==='percent'?base*av/100:av;var total=base+vatAmt+aitAmt;var paid=+document.getElementById('salPaid').value||0;
var cust=customers.find(function(x){return x._key===cid});var spId=document.getElementById('salSP').value;var sp=spList.find(function(x){return x._key===spId});
var method=document.getElementById('salMethod').value;var bankName=document.getElementById('salBank').value||'';var chequeNo=document.getElementById('salCheque')?document.getElementById('salCheque').value:'';
var data={invoiceNo:document.getElementById('salNo').value,date:document.getElementById('salDate').value,customerId:cid,customerName:cust?cust.name:'',salespersonId:spId,salespersonName:sp?sp.name:'',items:items.map(function(x){return{productId:x.pk,productName:x.pn,qty:x.qty,rate:x.rate,amount:x.amt}}),discount:dv,discountType:dt,extra:extra,vat:vv,vatType:vt,ait:av,aitType:at,total:total,paid:paid,method:method,bankName:bankName,chequeNo:chequeNo,note:document.getElementById('salNote').value};
if(ek){var oldSal=sals.find(function(x){return x._key===ek});if(oldSal&&oldSal.paid>0&&oldSal.method!=='cash'&&oldSal.method!=='credit'&&oldSal.bankName){var oldBk=salBanks.find(function(b){return b.name===oldSal.bankName});if(oldBk){oldBk.balance=(oldBk.balance||0)-(oldSal.paid||0);await saveByKey(oldBk._key,cleanForSave(oldBk))}}
if(paid>0&&method!=='cash'&&method!=='credit'&&bankName){var nbk=salBanks.find(function(b){return b.name===bankName});if(nbk){nbk.balance=(nbk.balance||0)+paid;await saveByKey(nbk._key,cleanForSave(nbk))}}
await saveByKey(ek,data,'edit','Edited sale: '+data.invoiceNo)}else{await saveItem('sale:',data,null,'create','Created sale: '+data.invoiceNo);for(var ii=0;ii<items.length;ii++){var pr=salProds.find(function(x){return x._key===items[ii].pk});if(pr){pr.stock=Math.max(0,(pr.stock||0)-items[ii].qty);await saveByKey(pr._key,cleanForSave(pr))}}
if(paid>0&&method!=='cash'&&method!=='credit'&&bankName){var bk2=salBanks.find(function(b){return b.name===bankName});if(bk2){bk2.balance=(bk2.balance||0)+paid;await saveByKey(bk2._key,cleanForSave(bk2))}}}
invalidateCache('sale:');invalidateCache('product:');invalidateCache('bank:');
showToast(ek?'Sale updated successfully':'Sale created: '+data.invoiceNo,'success');
closeModal('salModal');loadSal()}
window.editSal=function(k){var s=sals.find(function(x){return x._key===k});if(!s)return;document.getElementById('salEK').value=k;document.getElementById('salNo').value=s.invoiceNo;document.getElementById('salDate').value=s.date;document.getElementById('salCust').value=s.customerId;document.getElementById('salSP').value=s.salespersonId||'';document.getElementById('salDisc').value=s.discount||0;document.getElementById('salDiscType').value=s.discountType||'amount';document.getElementById('salExtra').value=s.extra||0;document.getElementById('salVat').value=s.vat||0;document.getElementById('salVatType').value=s.vatType||'amount';document.getElementById('salAit').value=s.ait||0;document.getElementById('salAitType').value=s.aitType||'amount';document.getElementById('salPaid').value=s.paid||0;document.getElementById('salMethod').value=s.method||'cash';document.getElementById('salNote').value=s.note||'';document.getElementById('salTitle').textContent='Edit Sale';toggleSalBank();window._salItems=(s.items||[]).map(function(x){return{pk:x.productId,pn:x.productName,qty:x.qty,rate:x.rate,amt:x.amount}});if(!window._salItems.length)window._salItems=[{pk:'',pn:'',qty:1,rate:0,amt:0}];renderSalItems();openModal('salModal')}
window.delSal=async function(k){var s=sals.find(function(x){return x._key===k});if(!confirm('Delete sale?'))return;await deleteItem(k,false,'Deleted sale: '+(s?s.invoiceNo:''));invalidateCache('sale:');showToast('Sale deleted successfully','success');loadSal()}
window.filterSal=function(q){var t=normalize(q);renderSal(sals.filter(function(s){return normalize(s.invoiceNo).includes(t)||normalize(s.customerName).includes(t)||normalize(s.date).includes(t)}))}
loadSal();
<\/script>`}function Pa(){return`
<div class="page-header"><div><div class="page-title">Accounts & Banking</div><div class="page-sub">Receipts, Payments, Transfers & Bank Accounts</div></div></div>
<div class="tabs"><button class="tab active" onclick="switchPayTab('receipt',this)">Receipts</button><button class="tab" onclick="switchPayTab('payment',this)">Payments</button><button class="tab" onclick="switchPayTab('transfer',this)">Transfers</button><button class="tab" onclick="switchPayTab('bank',this)">Bank Accounts</button><button class="tab" onclick="switchPayTab('bankledger',this)">Bank Ledger</button></div>
<div id="payTabContent"></div>
<div class="modal-overlay" id="payModal"><div class="modal"><h3 id="payTitle">New</h3>
<input type="hidden" id="payEK"><input type="hidden" id="payType">
<div class="form-row"><div><label>Voucher No</label><input id="payNo" readonly></div><div><label>Date</label><input type="date" id="payDt"></div></div>
<div class="form-group"><label>Party</label><select id="payParty"><option value="">Select...</option></select></div>
<div id="billSelection" class="hidden" style="margin-bottom:12px;max-height:200px;overflow:auto;border:1px solid var(--border);border-radius:8px;padding:8px"><div class="section-title">Outstanding Bills</div><div id="billList"></div></div>
<div class="form-group"><label>Amount</label><input type="number" id="payAmt" placeholder="0"></div>
<div class="form-row"><div><label>Method</label><select id="payMeth" onchange="toggleCheque()"><option value="cash">Cash</option><option value="bank_transfer">Bank Transfer</option><option value="cheque">Cheque</option><option value="credit_card">Credit Card</option><option value="mobile_payment">Mobile Payment</option></select></div><div id="bankSelDiv"><label>Bank</label><select id="payBank"><option value="">Select...</option></select></div></div>
<div class="form-group hidden" id="chequeDiv"><label>Cheque No</label><input id="payCheque" placeholder="Cheque#"></div>
<div class="form-group"><label>Note</label><input id="payNote" placeholder="Note"></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('payModal')">Cancel</button><button class="btn btn-primary" onclick="savePay()">Save</button></div>
</div></div>
<div class="modal-overlay" id="bankModal"><div class="modal"><h3 id="bankTitle">Add Bank</h3>
<input type="hidden" id="bankEK">
<div class="form-group"><label>Bank Name</label><input id="bankName"></div>
<div class="form-row"><div><label>Account No</label><input id="bankAc"></div><div><label>Opening Balance</label><input type="number" id="bankBal" value="0"></div></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('bankModal')">Cancel</button><button class="btn btn-primary" onclick="saveBank()">Save</button></div>
</div></div>
<script>
var pays=[],payParties=[],banks=[],payTab='receipt',paySales=[],payPurchases=[];
async function loadPay(){var d=await Promise.all([loadList('payment:'),loadList('party:'),loadList('bank:'),loadList('sale:'),loadList('purchase:'),loadList('expense:')]);pays=d[0];payParties=d[1];banks=d[2];paySales=d[3];payPurchases=d[4];window._blExpenses=d[5]||[];renderPayTab()}
window.switchPayTab=function(t,el){payTab=t;document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});el.classList.add('active');renderPayTab()}
function renderPayTab(){var c=document.getElementById('payTabContent');
if(payTab==='bankledger'){
  var bankOpts='<option value="">Select Bank...</option>'+banks.map(function(b){return'<option value="'+b.name+'">'+b.name+'</option>'}).join('');
  c.innerHTML='<div class="card" style="margin-bottom:14px;padding:14px 16px"><div class="form-row" style="align-items:end"><div><label>Bank Account</label><select id="blBank" onchange="renderBankLedger()" style="padding:10px 12px;font-size:13px">'+bankOpts+'</select></div><div><label>From</label><input type="date" id="blFrom" onchange="renderBankLedger()"></div><div><label>To</label><input type="date" id="blTo" onchange="renderBankLedger()"></div></div></div><div class="stats" id="blStats"></div><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="blTbl"><thead><tr><th>Date</th><th>Description</th><th>Ref</th><th class="r">Debit (In)</th><th class="r">Credit (Out)</th><th class="r">Balance</th></tr></thead><tbody id="blBody"></tbody></table></div></div>';
  return}
if(payTab==='bank'){c.innerHTML='<div style="margin:12px 0"><button class="btn btn-primary" onclick="openBankModal()"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add Bank</button></div><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Bank</th><th>Account No</th><th class="r">Balance</th><th class="r">Act</th></tr></thead><tbody>'+(!banks.length?'<tr><td colspan="4" class="empty">No banks</td></tr>':banks.map(function(b){return'<tr><td class="bold">'+b.name+'</td><td>'+(b.accountNo||'')+'</td><td class="r bold">'+fmt(b.balance||b.openingBalance||0)+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editBank(\\x27'+b._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delBank(\\x27'+b._key+'\\x27)">Del</button></td></tr>'}).join(''))+'</tbody></table></div></div>';return}
if(payTab==='transfer'){var trs=pays.filter(function(p){return p.type==='transfer'});c.innerHTML='<div style="margin:12px 0"><button class="btn btn-primary" onclick="openTransfer()"><span class="material-symbols-outlined" style="font-size:16px">swap_horiz</span> New Transfer</button></div><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Date</th><th>No</th><th>From</th><th>To</th><th class="r">Amount</th></tr></thead><tbody>'+(trs.length?trs.sort(function(a,b){return(b.date||'').localeCompare(a.date)}).map(function(t){return'<tr><td>'+t.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27transfer\\x27,\\x27'+t._key+'\\x27)">'+t.no+'</span></td><td>'+t.fromAcc+'</td><td>'+t.toAcc+'</td><td class="r bold">'+fmt(t.amount)+'</td></tr>'}).join(''):'<tr><td colspan="5" class="empty">No transfers</td></tr>')+'</tbody></table></div></div>';return}
var fl=pays.filter(function(p){return p.type===payTab&&p.status==='done'}).sort(function(a,b){return(b.date||'').localeCompare(a.date)});
c.innerHTML='<div style="margin:12px 0"><button class="btn btn-primary" onclick="openPayModal(\\x27'+payTab+'\\x27)"><span class="material-symbols-outlined" style="font-size:16px">add</span> New '+(payTab==='receipt'?'Receipt':'Payment')+'</button></div><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="payTbl"><thead><tr><th>Date</th><th>No</th><th>Party</th><th>Method</th><th class="r">Amount</th><th>Note</th><th class="r">Act</th></tr></thead><tbody>'+(fl.length?fl.map(function(p){return'<tr><td>'+p.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27'+p.type+'\\x27,\\x27'+p._key+'\\x27)">'+p.no+'</span></td><td>'+p.party+'</td><td>'+methodBadge(p.method)+'</td><td class="r bold">'+fmt(p.amount)+'</td><td class="text-muted">'+(p.note||'')+'</td><td class="r"><button class="btn btn-danger btn-xs" onclick="delPay(\\x27'+p._key+'\\x27)">Del</button></td></tr>'}).join(''):'<tr><td colspan="7" class="empty">None</td></tr>')+'</tbody></table></div></div>'}
window.openPayModal=function(type){document.getElementById('payEK').value='';document.getElementById('payType').value=type;document.getElementById('payTitle').textContent='New '+(type==='receipt'?'Receipt':'Payment');document.getElementById('payNo').value=txnNo(type==='receipt'?'RCV':'PAY');document.getElementById('payDt').value=todayISO();document.getElementById('payAmt').value='';document.getElementById('payNote').value='';document.getElementById('payMeth').value='cash';document.getElementById('payCheque').value='';document.getElementById('chequeDiv').classList.add('hidden');
var pts=type==='receipt'?payParties.filter(function(p){return p.type==='customer'}):payParties.filter(function(p){return p.type==='supplier'});document.getElementById('payParty').innerHTML='<option value="">Select...</option>'+pts.map(function(p){return'<option value="'+p.name+'">'+p.name+'</option>'}).join('');
document.getElementById('payBank').innerHTML='<option value="">Select...</option>'+banks.map(function(b){return'<option value="'+b.name+'">'+b.name+'</option>'}).join('');
document.getElementById('billSelection').classList.add('hidden');openModal('payModal');
document.getElementById('payParty').onchange=function(){showBills(type,this.value)}}
window.showBills=function(type,party){var div=document.getElementById('billSelection');var list=document.getElementById('billList');if(!party){div.classList.add('hidden');return}
var bills=[];if(type==='receipt'){bills=paySales.filter(function(s){return s.customerName===party&&(s.total||0)-(s.paid||0)>0}).map(function(s){return{no:s.invoiceNo,total:s.total,paid:s.paid,due:(s.total||0)-(s.paid||0),key:s._key}})}else{bills=payPurchases.filter(function(p){return p.supplierName===party&&(p.total||0)-(p.paid||0)>0}).map(function(p){return{no:p.purchaseNo,total:p.total,paid:p.paid,due:(p.total||0)-(p.paid||0),key:p._key}})}
if(bills.length){div.classList.remove('hidden');list.innerHTML='<table class="tbl" style="font-size:11px"><thead><tr><th>Bill#</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Due</th><th>Select</th></tr></thead><tbody>'+bills.map(function(b){return'<tr><td>'+b.no+'</td><td class="r">'+fmt(b.total)+'</td><td class="r">'+fmt(b.paid)+'</td><td class="r text-danger">'+fmt(b.due)+'</td><td><input type="checkbox" data-key="'+b.key+'" data-due="'+b.due+'" onchange="calcBillAmt()"></td></tr>'}).join('')+'</tbody></table>'}else{div.classList.add('hidden')}}
window.calcBillAmt=function(){var total=0;document.querySelectorAll('#billList input[type=checkbox]:checked').forEach(function(c){total+=+(c.dataset.due||0)});document.getElementById('payAmt').value=total}
window.toggleCheque=function(){var m=document.getElementById('payMeth').value;var needsBank=m==='bank_transfer'||m==='cheque'||m==='credit_card'||m==='mobile_payment';document.getElementById('bankSelDiv').classList.toggle('hidden',!needsBank);document.getElementById('chequeDiv').classList.toggle('hidden',m!=='cheque')}
window.savePay=async function(){var type=document.getElementById('payType').value;var party=document.getElementById('payParty').value;if(!party){showToast('Please select a party','warning');return;}var amt=+document.getElementById('payAmt').value||0;if(amt<=0){showToast('Please enter a valid amount','warning');return;}var data={type:type,no:document.getElementById('payNo').value,date:document.getElementById('payDt').value,party:party,amount:amt,method:document.getElementById('payMeth').value,bankName:document.getElementById('payBank').value,chequeNo:document.getElementById('payCheque').value,note:document.getElementById('payNote').value,status:'done'};
var bills=[];document.querySelectorAll('#billList input[type=checkbox]:checked').forEach(function(c){bills.push(c.dataset.key)});data.billKeys=bills;
await saveItem('payment:',data);
var method=data.method;var bankName=data.bankName;
if(method!=='cash'&&bankName){var bkObj=banks.find(function(b){return b.name===bankName});if(bkObj){if(type==='receipt'){bkObj.balance=(bkObj.balance||0)+amt}else{bkObj.balance=(bkObj.balance||0)-amt}await saveByKey(bkObj._key,cleanForSave(bkObj))}}
if(bills.length){var remaining=amt;for(var i=0;i<bills.length&&remaining>0;i++){var bk=bills[i];if(type==='receipt'){var sale=paySales.find(function(x){return x._key===bk});if(sale){var due=(sale.total||0)-(sale.paid||0);var apply=Math.min(remaining,due);sale.paid=(sale.paid||0)+apply;remaining-=apply;await saveByKey(bk,cleanForSave(sale))}}else{var pur=payPurchases.find(function(x){return x._key===bk});if(pur){var due2=(pur.total||0)-(pur.paid||0);var apply2=Math.min(remaining,due2);pur.paid=(pur.paid||0)+apply2;remaining-=apply2;await saveByKey(bk,cleanForSave(pur))}}}}
invalidateCache('payment:');invalidateCache('bank:');invalidateCache('sale:');invalidateCache('purchase:');
showToast((type==='receipt'?'Receipt':'Payment')+' saved successfully','success');
closeModal('payModal');loadPay()}
window.delPay=async function(k){if(!confirm('Delete? This will reverse any bank balance changes.'))return;
var p=pays.find(function(x){return x._key===k});if(p&&p.method!=='cash'&&p.bankName){var bkObj=banks.find(function(b){return b.name===p.bankName});if(bkObj){if(p.type==='receipt'){bkObj.balance=(bkObj.balance||0)-p.amount}else if(p.type==='payment'){bkObj.balance=(bkObj.balance||0)+p.amount}await saveByKey(bkObj._key,cleanForSave(bkObj))}}
await deleteItem(k,false);invalidateCache('payment:');invalidateCache('bank:');showToast('Transaction deleted successfully','success');loadPay()}
window.openTransfer=function(){
var accs=['Cash'].concat(banks.map(function(b){return b.name}));
var html='<div class="modal"><h3>Fund Transfer</h3><input type="hidden" id="trfEK"><div class="form-row"><div><label>Transfer No</label><input id="trfNo" readonly></div><div><label>Date</label><input type="date" id="trfDt"></div></div><div class="form-row"><div><label>From Account</label><select id="trfFrom">'+accs.map(function(a){return'<option value="'+a+'">'+a+'</option>'}).join('')+'</select></div><div><label>To Account</label><select id="trfTo">'+accs.map(function(a){return'<option value="'+a+'">'+a+'</option>'}).join('')+'</select></div></div><div class="form-group"><label>Amount</label><input type="number" id="trfAmt" placeholder="0"></div><div class="form-group"><label>Note</label><input id="trfNote" placeholder="Transfer note"></div><div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal(\\x27trfModal\\x27)">Cancel</button><button class="btn btn-primary" onclick="saveTransfer()">Transfer</button></div></div>';
var overlay=document.getElementById('trfModal');
if(!overlay){overlay=document.createElement('div');overlay.id='trfModal';overlay.className='modal-overlay';document.body.appendChild(overlay)}
overlay.innerHTML=html;
document.getElementById('trfNo').value=txnNo('TRF');
document.getElementById('trfDt').value=todayISO();
if(accs.length>1)document.getElementById('trfTo').selectedIndex=1;
overlay.classList.add('open')};
window.saveTransfer=async function(){var from=document.getElementById('trfFrom').value;var to=document.getElementById('trfTo').value;var amt=+document.getElementById('trfAmt').value||0;if(!from||!to||from===to)return alert('Select different accounts');if(amt<=0)return alert('Enter amount');var data={type:'transfer',no:document.getElementById('trfNo').value,date:document.getElementById('trfDt').value,fromAcc:from,toAcc:to,amount:amt,note:document.getElementById('trfNote').value,party:from+' → '+to,method:'transfer',status:'done'};await saveItem('payment:',data,null,'create','Transfer: '+from+' -> '+to+' Amount: '+amt);
if(from!=='Cash'){var fromBk=banks.find(function(b){return b.name===from});if(fromBk){fromBk.balance=(fromBk.balance||0)-amt;await saveByKey(fromBk._key,cleanForSave(fromBk))}}
if(to!=='Cash'){var toBk=banks.find(function(b){return b.name===to});if(toBk){toBk.balance=(toBk.balance||0)+amt;await saveByKey(toBk._key,cleanForSave(toBk))}}
var overlay=document.getElementById('trfModal');if(overlay)overlay.classList.remove('open');invalidateCache('payment:');invalidateCache('bank:');showToast('Transfer completed successfully','success');loadPay()}
window.renderBankLedger=function(){
  var bankName=document.getElementById('blBank')?document.getElementById('blBank').value:'';
  if(!bankName){document.getElementById('blBody').innerHTML='<tr><td colspan="6" class="empty">Select a bank account</td></tr>';document.getElementById('blStats').innerHTML='';return}
  var from=document.getElementById('blFrom')?document.getElementById('blFrom').value:'';
  var to=document.getElementById('blTo')?document.getElementById('blTo').value:'';
  var bk=banks.find(function(b){return b.name===bankName});
  var entries=[];
  // Opening balance entry
  entries.push({date:'--',desc:'Opening Balance',ref:'-',debit:bk?(bk.openingBalance||0):0,credit:0});
  // Sales payments to this bank
  paySales.filter(function(s){return s.bankName===bankName&&s.method!=='cash'&&s.method!=='credit'&&(s.paid||0)>0}).forEach(function(s){entries.push({date:s.date,desc:'Sale payment - '+s.customerName,ref:s.invoiceNo||'',debit:s.paid||0,credit:0})});
  // Purchase payments from this bank
  payPurchases.filter(function(p){return p.bankName===bankName&&p.method!=='cash'&&p.method!=='credit'&&(p.paid||0)>0}).forEach(function(p){entries.push({date:p.date,desc:'Purchase payment - '+p.supplierName,ref:p.purchaseNo||'',debit:0,credit:p.paid||0})});
  // Receipts into bank
  pays.filter(function(p){return p.type==='receipt'&&p.bankName===bankName&&p.method!=='cash'&&p.status==='done'}).forEach(function(p){entries.push({date:p.date,desc:'Receipt from '+p.party,ref:p.no||'',debit:p.amount||0,credit:0})});
  // Payments from bank
  pays.filter(function(p){return p.type==='payment'&&p.bankName===bankName&&p.method!=='cash'&&p.status==='done'}).forEach(function(p){entries.push({date:p.date,desc:'Payment to '+p.party,ref:p.no||'',debit:0,credit:p.amount||0})});
  // Transfers involving this bank
  pays.filter(function(p){return p.type==='transfer'&&p.status==='done'&&(p.fromAcc===bankName||p.toAcc===bankName)}).forEach(function(p){if(p.toAcc===bankName){entries.push({date:p.date,desc:'Transfer from '+p.fromAcc,ref:p.no||'',debit:p.amount||0,credit:0})}if(p.fromAcc===bankName){entries.push({date:p.date,desc:'Transfer to '+p.toAcc,ref:p.no||'',debit:0,credit:p.amount||0})}});
  // Expenses from bank
  var allExps=[];try{allExps=window._blExpenses||[]}catch(e){}
  allExps.filter(function(e){return e.bankName===bankName&&e.method!=='cash'}).forEach(function(e){entries.push({date:e.date,desc:'Expense: '+(e.headName||'')+(e.subHeadName?' / '+e.subHeadName:''),ref:e.expenseNo||'',debit:0,credit:e.amount||0})});
  // Filter by date and sort
  var filtered=entries.filter(function(e){return e.date==='--'||(!from||e.date>=from)&&(!to||e.date<=to)});
  filtered.sort(function(a,b){if(a.date==='--')return-1;if(b.date==='--')return 1;return(a.date||'').localeCompare(b.date)});
  // Calculate running balance
  var bal=0;filtered.forEach(function(e){bal+=e.debit-e.credit;e.balance=bal});
  var totalDr=filtered.reduce(function(s,e){return s+e.debit},0);var totalCr=filtered.reduce(function(s,e){return s+e.credit},0);
  document.getElementById('blStats').innerHTML='<div class="stats"><div class="stat"><div class="label">Total Inflow</div><div class="value text-success">'+fmt(totalDr)+'</div></div><div class="stat"><div class="label">Total Outflow</div><div class="value text-danger">'+fmt(totalCr)+'</div></div><div class="stat" style="border:2px solid var(--primary)"><div class="label">Current Balance</div><div class="value '+(bal>=0?'text-success':'text-danger')+'">'+fmt(bal)+'</div></div><div class="stat"><div class="label">Transactions</div><div class="value">'+(filtered.length-1)+'</div></div></div>';
  document.getElementById('blBody').innerHTML=!filtered.length?'<tr><td colspan="6" class="empty">No transactions</td></tr>':filtered.map(function(e){return'<tr'+(e.date==='--'?' style="background:var(--bg);font-weight:700"':'')+'><td>'+e.date+'</td><td>'+e.desc+'</td><td class="text-muted">'+e.ref+'</td><td class="r '+(e.debit?'text-success':'')+'">'+(e.debit?fmt(e.debit):'')+'</td><td class="r '+(e.credit?'text-danger':'')+'">'+(e.credit?fmt(e.credit):'')+'</td><td class="r bold '+(e.balance>=0?'text-success':'text-danger')+'">'+fmt(e.balance)+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800;border-top:2px solid var(--border-dark)"><td colspan="3">TOTALS</td><td class="r text-success">'+fmt(totalDr)+'</td><td class="r text-danger">'+fmt(totalCr)+'</td><td class="r bold">'+fmt(bal)+'</td></tr>'
};
window.openBankModal=function(){document.getElementById('bankEK').value='';document.getElementById('bankTitle').textContent='Add Bank';document.getElementById('bankName').value='';document.getElementById('bankAc').value='';document.getElementById('bankBal').value=0;openModal('bankModal')}
window.editBank=function(k){var b=banks.find(function(x){return x._key===k});if(!b)return;document.getElementById('bankEK').value=k;document.getElementById('bankTitle').textContent='Edit Bank';document.getElementById('bankName').value=b.name;document.getElementById('bankAc').value=b.accountNo||'';document.getElementById('bankBal').value=b.balance||b.openingBalance||0;openModal('bankModal')}
window.saveBank=async function(){var ek=document.getElementById('bankEK').value;var n=document.getElementById('bankName').value.trim();if(!n){showToast('Bank name is required','warning');return;}var d={name:n,accountNo:document.getElementById('bankAc').value.trim(),openingBalance:+document.getElementById('bankBal').value||0,balance:+document.getElementById('bankBal').value||0};try{if(ek){await saveByKey(ek,d);showToast('Bank updated successfully','success')}else{await saveItem('bank:',d);showToast('Bank added successfully','success')}invalidateCache('bank:');closeModal('bankModal');loadPay()}catch(e){showToast('Failed to save bank','error')}}
window.delBank=async function(k){if(!confirm('Delete bank?'))return;await deleteItem(k,false);invalidateCache('bank:');showToast('Bank deleted successfully','success');loadPay()}
loadPay();
<\/script>`}function Ia(){return`
<div class="page-header"><div><div class="page-title">Expenses</div><div class="page-sub">Track expenses by head & sub-head</div></div><button class="btn btn-primary" onclick="openExpense()"><span class="material-symbols-outlined" style="font-size:16px">add</span> New Expense</button></div>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px"><button class="btn btn-outline btn-sm" onclick="openHeadModal()">Manage Heads</button><button class="btn btn-outline btn-sm" onclick="openSubHeadModal()">Manage Sub-Heads</button></div>
<div class="form-row" style="margin-bottom:14px"><div><label>Filter by Head</label><select id="expFilterHead" onchange="renderExp()"><option value="">All Heads</option></select></div><div><label>Date Range</label><div style="display:flex;gap:4px"><input type="date" id="expFrom" onchange="renderExp()"><input type="date" id="expTo" onchange="renderExp()"></div></div></div>
<div class="stats" id="expStats"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="expTable"><thead><tr><th>Date</th><th>No</th><th>Head</th><th>Sub-Head</th><th>Method</th><th class="r">Amount</th><th>Description</th><th class="r">Act</th></tr></thead><tbody id="expBody"></tbody></table></div></div>
<div class="modal-overlay" id="expModal"><div class="modal"><h3>New Expense</h3>
<input type="hidden" id="expEK">
<div class="form-row"><div><label>Expense No</label><input id="expNo" readonly></div><div><label>Date</label><input type="date" id="expDt"></div></div>
<div class="form-row"><div><label>Head</label><select id="expHead" onchange="loadSubHeadOpts()"><option value="">Select...</option></select></div><div><label>Sub-Head</label><select id="expSub"><option value="">Select...</option></select></div></div>
<div class="form-row"><div><label>Amount</label><input type="number" id="expAmt" placeholder="0"></div><div><label>Method</label><select id="expMeth" onchange="toggleExpBank()"><option value="cash">Cash</option><option value="bank_transfer">Bank Transfer</option><option value="cheque">Cheque</option><option value="credit_card">Credit Card</option><option value="mobile_payment">Mobile Payment</option></select></div></div>
<div class="form-row" id="expBankRow"><div><label>Bank</label><select id="expBank"><option value="">Select Bank...</option></select></div><div id="expChequeDiv" class="hidden"><label>Cheque No</label><input id="expCheque" placeholder="Cheque#"></div></div>
<div class="form-group"><label>Description</label><input id="expDesc"></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('expModal')">Cancel</button><button class="btn btn-primary" onclick="saveExp()">Save</button></div>
</div></div>
<div class="modal-overlay" id="headModal"><div class="modal"><h3>Expense Heads</h3>
<div style="display:flex;gap:6px;margin-bottom:12px"><input id="newHead" placeholder="New head name"><button class="btn btn-primary" onclick="saveHead()">Add</button></div>
<div id="headList"></div>
<div style="text-align:right;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('headModal')">Close</button></div>
</div></div>
<div class="modal-overlay" id="subHeadModal"><div class="modal"><h3>Expense Sub-Heads</h3>
<div class="form-row"><div><label>Head</label><select id="shHead"><option value="">Select...</option></select></div><div><label>Sub-Head</label><input id="newSubHead" placeholder="Sub-head name"></div></div>
<button class="btn btn-primary btn-sm" onclick="saveSubHead()">Add</button>
<div id="subHeadList" style="margin-top:12px"></div>
<div style="text-align:right;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('subHeadModal')">Close</button></div>
</div></div>
<script>
var exps=[],expHeads=[],expSubHeads=[],expBanks=[];
async function loadExp(){var d=await Promise.all([loadList('expense:'),loadList('exphead:'),loadList('expsubhead:'),loadList('bank:')]);exps=d[0];expHeads=d[1];expSubHeads=d[2];expBanks=d[3]||[];
document.getElementById('expBank').innerHTML='<option value="">Select Bank...</option>'+expBanks.map(function(b){return'<option value="'+b.name+'">'+b.name+'</option>'}).join('');
var ho='<option value="">All Heads</option>'+expHeads.map(function(h){return'<option value="'+h.name+'">'+h.name+'</option>'}).join('');
document.getElementById('expFilterHead').innerHTML=ho;
document.getElementById('expHead').innerHTML='<option value="">Select...</option>'+expHeads.map(function(h){return'<option value="'+h.name+'">'+h.name+'</option>'}).join('');
document.getElementById('shHead').innerHTML='<option value="">Select...</option>'+expHeads.map(function(h){return'<option value="'+h.name+'">'+h.name+'</option>'}).join('');
renderExp()}
window.renderExp=function(){var fh=document.getElementById('expFilterHead').value;var from=document.getElementById('expFrom').value;var to=document.getElementById('expTo').value;var fl=exps.filter(function(e){return(!fh||e.headName===fh)&&(!from||e.date>=from)&&(!to||e.date<=to)}).sort(function(a,b){return(b.date||'').localeCompare(a.date)});
var total=fl.reduce(function(s,e){return s+(e.amount||0)},0);var cashT=fl.filter(function(e){return e.method==='cash'}).reduce(function(s,e){return s+(e.amount||0)},0);var bankT=fl.filter(function(e){return e.method!=='cash'}).reduce(function(s,e){return s+(e.amount||0)},0);
document.getElementById('expStats').innerHTML='<div class="stat"><div class="label">Total Expenses</div><div class="value text-danger">'+fmt(total)+'</div></div><div class="stat"><div class="label">Cash</div><div class="value">'+fmt(cashT)+'</div></div><div class="stat"><div class="label">Bank</div><div class="value">'+fmt(bankT)+'</div></div><div class="stat"><div class="label">Count</div><div class="value">'+fl.length+'</div></div>';
document.getElementById('expBody').innerHTML=!fl.length?'<tr><td colspan="8" class="empty">No expenses</td></tr>':fl.map(function(e){return'<tr><td>'+e.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27expense\\x27,\\x27'+e._key+'\\x27)">'+(e.expenseNo||'')+'</span></td><td><span class="badge badge-info">'+(e.headName||'')+'</span></td><td>'+(e.subHeadName||'')+'</td><td>'+methodBadge(e.method)+'</td><td class="r bold">'+fmt(e.amount)+'</td><td class="text-muted">'+(e.description||'')+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editExp(\\x27'+e._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delExp(\\x27'+e._key+'\\x27)">Del</button></td></tr>'}).join('')}
window.toggleExpBank=function(){var m=document.getElementById('expMeth').value;var needsBank=m==='bank_transfer'||m==='cheque'||m==='credit_card'||m==='mobile_payment';document.getElementById('expBankRow').classList.toggle('hidden',!needsBank);document.getElementById('expChequeDiv').classList.toggle('hidden',m!=='cheque')};
window.openExpense=function(){document.getElementById('expEK').value='';document.getElementById('expNo').value=txnNo('EXP');document.getElementById('expDt').value=todayISO();document.getElementById('expHead').value='';document.getElementById('expSub').innerHTML='<option value="">Select head first</option>';document.getElementById('expAmt').value='';document.getElementById('expMeth').value='cash';document.getElementById('expBank').value='';document.getElementById('expDesc').value='';toggleExpBank();openModal('expModal')}
window.loadSubHeadOpts=function(){var h=document.getElementById('expHead').value;var subs=expSubHeads.filter(function(s){return s.headName===h});document.getElementById('expSub').innerHTML='<option value="">Select...</option>'+subs.map(function(s){return'<option value="'+s.name+'">'+s.name+'</option>'}).join('')}
window.saveExp=async function(){var ek=document.getElementById('expEK').value;var h=document.getElementById('expHead').value;if(!h){showToast('Please select an expense head','warning');return;}var amt=+document.getElementById('expAmt').value||0;if(amt<=0){showToast('Please enter a valid amount','warning');return;}var meth=document.getElementById('expMeth').value;var bankName=meth!=='cash'?document.getElementById('expBank').value:'';var data={expenseNo:document.getElementById('expNo').value,date:document.getElementById('expDt').value,headName:h,subHeadName:document.getElementById('expSub').value,amount:amt,method:meth,bankName:bankName,chequeNo:meth==='cheque'?(document.getElementById('expCheque')?document.getElementById('expCheque').value:''):'',description:document.getElementById('expDesc').value};
if(ek){var oldExp=exps.find(function(x){return x._key===ek});if(oldExp&&oldExp.method!=='cash'&&oldExp.bankName){var oldBk=expBanks.find(function(b){return b.name===oldExp.bankName});if(oldBk){oldBk.balance=(oldBk.balance||0)+(oldExp.amount||0);await saveByKey(oldBk._key,cleanForSave(oldBk))}}
if(meth!=='cash'&&bankName){var bk=expBanks.find(function(b){return b.name===bankName});if(bk){bk.balance=(bk.balance||0)-amt;await saveByKey(bk._key,cleanForSave(bk))}}
await saveByKey(ek,data);showToast('Expense updated successfully','success')}else{await saveItem('expense:',data);if(meth!=='cash'&&bankName){var bk2=expBanks.find(function(b){return b.name===bankName});if(bk2){bk2.balance=(bk2.balance||0)-amt;await saveByKey(bk2._key,cleanForSave(bk2))}}showToast('Expense saved successfully','success')}
invalidateCache('expense:');invalidateCache('bank:');closeModal('expModal');loadExp()}
window.editExp=function(k){var e=exps.find(function(x){return x._key===k});if(!e)return;document.getElementById('expEK').value=k;document.getElementById('expNo').value=e.expenseNo||'';document.getElementById('expDt').value=e.date;document.getElementById('expHead').value=e.headName||'';loadSubHeadOpts();setTimeout(function(){document.getElementById('expSub').value=e.subHeadName||''},100);document.getElementById('expAmt').value=e.amount;document.getElementById('expMeth').value=e.method||'cash';document.getElementById('expBank').value=e.bankName||'';document.getElementById('expDesc').value=e.description||'';if(document.getElementById('expCheque'))document.getElementById('expCheque').value=e.chequeNo||'';toggleExpBank();openModal('expModal')}
window.delExp=async function(k){if(!confirm('Delete expense? Bank balance will be reversed if applicable.'))return;
var exp=exps.find(function(x){return x._key===k});if(exp&&exp.method!=='cash'&&exp.bankName){var bk=expBanks.find(function(b){return b.name===exp.bankName});if(bk){bk.balance=(bk.balance||0)+(exp.amount||0);await saveByKey(bk._key,cleanForSave(bk))}}
await deleteItem(k,false);invalidateCache('expense:');invalidateCache('bank:');showToast('Expense deleted successfully','success');loadExp()}
window.openHeadModal=function(){document.getElementById('newHead').value='';var html=expHeads.map(function(h){return'<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid var(--border)"><span>'+h.name+'</span><button class="btn btn-danger btn-xs" onclick="delHead(\\x27'+h._key+'\\x27)">Del</button></div>'}).join('');document.getElementById('headList').innerHTML=html||'<div class="empty">No heads</div>';openModal('headModal')}
window.saveHead=async function(){var n=document.getElementById('newHead').value.trim();if(!n)return;await saveItem('exphead:',{name:n});invalidateCache('exphead:');showToast('Expense head added','success');loadExp();setTimeout(openHeadModal,300)}
window.delHead=async function(k){await deleteItem(k,false);loadExp();setTimeout(openHeadModal,300)}
window.openSubHeadModal=function(){document.getElementById('newSubHead').value='';var html=expSubHeads.map(function(s){return'<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid var(--border)"><span>'+s.name+' <span class="text-muted">('+s.headName+')</span></span><button class="btn btn-danger btn-xs" onclick="delSubHead(\\x27'+s._key+'\\x27)">Del</button></div>'}).join('');document.getElementById('subHeadList').innerHTML=html||'<div class="empty">None</div>';openModal('subHeadModal')}
window.saveSubHead=async function(){var h=document.getElementById('shHead').value;var n=document.getElementById('newSubHead').value.trim();if(!h||!n){showToast('Select head and enter sub-head name','warning');return;}await saveItem('expsubhead:',{name:n,headName:h});invalidateCache('expsubhead:');showToast('Sub-head added','success');loadExp();setTimeout(openSubHeadModal,300)}
window.delSubHead=async function(k){await deleteItem(k,false);loadExp();setTimeout(openSubHeadModal,300)}
loadExp();
<\/script>`}function Ea(){return`
<style>.led-sale td{background:rgba(79,70,229,.04)!important}.led-purchase td{background:rgba(217,119,6,.04)!important}.led-receipt td,.led-payment td{background:rgba(5,150,105,.04)!important}</style>
<div class="page-header"><div><div class="page-title">Ledger</div><div class="page-sub">Party account history</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('ledgerPrint','Ledger')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('ledgerTbl','Ledger')">Export XLS</button></div></div>
<div class="form-row" style="margin-bottom:14px"><div><label>Party</label><select id="ledParty" onchange="renderLedger()"><option value="">Select party...</option></select></div><div><label>Date Range</label><div style="display:flex;gap:4px"><input type="date" id="ledFrom" onchange="renderLedger()"><input type="date" id="ledTo" onchange="renderLedger()"></div></div></div>
<div id="ledgerPrint"><div id="ledPartyInfo" style="display:none;margin-bottom:12px" class="card"><div style="display:flex;justify-content:space-between;flex-wrap:wrap"><div><strong id="ledPName" style="font-size:16px"></strong><div class="text-muted" style="font-size:12px"><span id="ledPType"></span> | Phone: <span id="ledPPhone"></span> | Address: <span id="ledPAddr"></span></div></div><div style="text-align:right" id="ledPBalSummary"></div></div></div>
<div class="stats" id="ledStats"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="ledgerTbl"><thead><tr><th>Date</th><th>Document</th><th>Type</th><th class="r">Debit</th><th class="r">Credit</th><th class="r">Balance</th></tr></thead><tbody id="ledBody"></tbody></table></div></div></div>
<script>
var ledParties=[],ledSales=[],ledPurchases=[],ledPayments=[];
async function loadLedger(){var d=await Promise.all([loadList('party:'),loadList('sale:'),loadList('purchase:'),loadList('payment:')]);ledParties=d[0];ledSales=d[1];ledPurchases=d[2];ledPayments=d[3];
document.getElementById('ledParty').innerHTML='<option value="">Select party...</option>'+ledParties.map(function(p){return'<option value="'+p._key+'">['+p.type.charAt(0).toUpperCase()+'] '+p.name+'</option>'}).join('')}
window.renderLedger=function(){var pk=document.getElementById('ledParty').value;if(!pk){document.getElementById('ledBody').innerHTML='<tr><td colspan="6" class="empty">Select a party</td></tr>';document.getElementById('ledStats').innerHTML='';document.getElementById('ledPartyInfo').style.display='none';return}
var p=ledParties.find(function(x){return x._key===pk});if(!p)return;var from=document.getElementById('ledFrom').value;var to=document.getElementById('ledTo').value;
// Show party details for print/export
document.getElementById('ledPartyInfo').style.display='block';
document.getElementById('ledPName').textContent=p.name;
document.getElementById('ledPType').textContent=p.type==='customer'?'Customer':'Supplier';
document.getElementById('ledPPhone').textContent=p.phone||'N/A';
document.getElementById('ledPAddr').textContent=p.address||'N/A';
var entries=[];
if(p.type==='customer'){ledSales.filter(function(s){return s.customerId===pk}).forEach(function(s){entries.push({date:s.date,doc:s.invoiceNo,docType:'sale',docKey:s._key,type:'Sale',debit:s.total||0,credit:0})});ledPayments.filter(function(r){return r.party===p.name&&r.type==='receipt'&&r.status==='done'}).forEach(function(r){entries.push({date:r.date,doc:r.no,docType:'receipt',docKey:r._key,type:'Receipt',debit:0,credit:r.amount||0})})}
else{ledPurchases.filter(function(pr){return pr.supplierId===pk}).forEach(function(pr){entries.push({date:pr.date,doc:pr.purchaseNo,docType:'purchase',docKey:pr._key,type:'Purchase',debit:0,credit:pr.total||0})});ledPayments.filter(function(py){return py.party===p.name&&py.type==='payment'&&py.status==='done'}).forEach(function(py){entries.push({date:py.date,doc:py.no,docType:'payment',docKey:py._key,type:'Payment',debit:py.amount||0,credit:0})})}
if(from)entries=entries.filter(function(e){return e.date>=from});if(to)entries=entries.filter(function(e){return e.date<=to});
entries.sort(function(a,b){return(a.date||'').localeCompare(b.date)});
var bal=0;entries.forEach(function(e){bal+=e.debit-e.credit;e.balance=bal});
var totalDr=entries.reduce(function(s,e){return s+e.debit},0);var totalCr=entries.reduce(function(s,e){return s+e.credit},0);
document.getElementById('ledPBalSummary').innerHTML='<div style="font-size:18px;font-weight:800;'+(bal>0?'color:var(--danger)':'color:var(--accent)')+'">'+fmt(Math.abs(bal))+' '+(bal>0?'Dr':'Cr')+'</div><div class="text-muted" style="font-size:11px">'+(p.type==='customer'?(bal>0?'Receivable':'Advance'):(bal>0?'Overpaid':'Payable'))+'</div>';
document.getElementById('ledStats').innerHTML='<div class="stat"><div class="label">Total Debit</div><div class="value text-danger">'+fmt(totalDr)+'</div></div><div class="stat"><div class="label">Total Credit</div><div class="value text-success">'+fmt(totalCr)+'</div></div><div class="stat"><div class="label">Balance</div><div class="value '+(bal>0?'text-danger':'text-success')+'">'+fmt(Math.abs(bal))+' '+(bal>0?'Dr':'Cr')+'</div></div>';
// Row color class based on type: led-sale, led-purchase, led-receipt, led-payment
document.getElementById('ledBody').innerHTML=!entries.length?'<tr><td colspan="6" class="empty">No entries</td></tr>':entries.map(function(e){var rowClass='led-'+e.type.toLowerCase();return'<tr class="'+rowClass+'"><td>'+e.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27'+e.docType+'\\x27,\\x27'+e.docKey+'\\x27)">'+e.doc+'</span></td><td><span class="badge '+(e.type==='Sale'?'badge-info':e.type==='Purchase'?'badge-warning':e.type==='Receipt'?'badge-success':'badge-cash')+'">'+e.type+'</span></td><td class="r '+(e.debit?'text-danger':'')+'">'+fmt(e.debit)+'</td><td class="r '+(e.credit?'text-success':'')+'">'+fmt(e.credit)+'</td><td class="r bold '+(e.balance>0?'text-danger':'text-success')+'">'+fmt(Math.abs(e.balance))+' '+(e.balance>0?'Dr':'Cr')+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800;border-top:2px solid var(--border-dark)"><td colspan="3">TOTAL ('+entries.length+' entries)</td><td class="r text-danger">'+fmt(totalDr)+'</td><td class="r text-success">'+fmt(totalCr)+'</td><td class="r bold '+(bal>0?'text-danger':'text-success')+'">'+fmt(Math.abs(bal))+' '+(bal>0?'Dr':'Cr')+'</td></tr>'}
loadLedger();
<\/script>`}function Sa(){return`
<div class="page-header"><div><div class="page-title">Expense Ledger</div><div class="page-sub">Head & sub-head breakdown</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('elPrint','Expense Ledger')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('elTbl','ExpenseLedger')">Export XLS</button></div></div>
<div class="form-row" style="margin-bottom:14px"><div><label>Head</label><select id="elHead" onchange="loadElSubOpts();renderEL()"><option value="">All Heads</option></select></div><div><label>Sub-Head</label><select id="elSub" onchange="renderEL()"><option value="">All Sub-Heads</option></select></div><div><label>From</label><input type="date" id="elFrom" onchange="renderEL()"></div><div><label>To</label><input type="date" id="elTo" onchange="renderEL()"></div></div>
<div id="elPrint"><div id="elSummary"></div>
<div class="card" style="padding:0;margin-top:14px"><div class="table-wrap"><table class="tbl" id="elTbl"><thead><tr><th>Head</th><th>Sub-Head</th><th class="r">Amount</th><th class="r">% of Total</th></tr></thead><tbody id="elBody"></tbody></table></div></div></div>
<script>
var elExps=[],elHeads=[],elSubHeads=[];
async function loadEL(){var d=await Promise.all([loadList('expense:'),loadList('exphead:'),loadList('expsubhead:')]);elExps=d[0];elHeads=d[1];elSubHeads=d[2]||[];
document.getElementById('elHead').innerHTML='<option value="">All Heads</option>'+elHeads.map(function(h){return'<option value="'+h.name+'">'+h.name+'</option>'}).join('');
renderEL()}
window.loadElSubOpts=function(){var h=document.getElementById('elHead').value;var subs=h?elSubHeads.filter(function(s){return s.headName===h}):elSubHeads;document.getElementById('elSub').innerHTML='<option value="">All Sub-Heads</option>'+subs.map(function(s){return'<option value="'+s.name+'">'+s.name+'</option>'}).join('')}
window.renderEL=function(){var from=document.getElementById('elFrom').value;var to=document.getElementById('elTo').value;var fHead=document.getElementById('elHead').value;var fSub=document.getElementById('elSub').value;
var fl=elExps.filter(function(e){return(!from||e.date>=from)&&(!to||e.date<=to)&&(!fHead||e.headName===fHead)&&(!fSub||e.subHeadName===fSub)});var total=fl.reduce(function(s,e){return s+(e.amount||0)},0);
var byHead={};fl.forEach(function(e){var h=e.headName||'Uncategorized';var sh=e.subHeadName||'General';if(!byHead[h])byHead[h]={total:0,subs:{}};byHead[h].total+=e.amount||0;if(!byHead[h].subs[sh])byHead[h].subs[sh]=0;byHead[h].subs[sh]+=e.amount||0});
var rows=[];Object.keys(byHead).sort().forEach(function(h){Object.keys(byHead[h].subs).sort().forEach(function(sh){rows.push({head:h,sub:sh,amt:byHead[h].subs[sh],pct:total?((byHead[h].subs[sh]/total)*100).toFixed(1):0})})});
document.getElementById('elSummary').innerHTML='<div class="stats"><div class="stat"><div class="label">Total Expenses</div><div class="value text-danger">'+fmt(total)+'</div></div><div class="stat"><div class="label">Categories</div><div class="value">'+Object.keys(byHead).length+'</div></div><div class="stat"><div class="label">Entries</div><div class="value">'+fl.length+'</div></div></div>';
document.getElementById('elBody').innerHTML=!rows.length?'<tr><td colspan="4" class="empty">No data</td></tr>':rows.map(function(r){return'<tr><td class="bold">'+r.head+'</td><td>'+r.sub+'</td><td class="r bold">'+fmt(r.amt)+'</td><td class="r text-muted">'+r.pct+'%</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL</td><td class="r">'+fmt(total)+'</td><td class="r">100%</td></tr>'}
loadEL();
<\/script>`}function Ba(){return`
<div class="page-header"><div><div class="page-title">Profit & Loss</div><div class="page-sub">Revenue, COGS, Expenses</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('plPrint','P&L')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('plTbl','ProfitLoss')">Export XLS</button></div></div>

<div class="form-row" style="margin-bottom:14px">
<div><label>From</label><input type="date" id="plFrom"></div>
<div><label>To</label><input type="date" id="plTo"></div>
<div style="display:flex;align-items:end"><button class="btn btn-primary" onclick="renderPL()" style="white-space:nowrap"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">visibility</span> View</button></div>
</div>

<div id="plPrint">
<div class="stats" id="plStats"></div>
<div class="card">
<table class="tbl" id="plTbl"><tbody id="plBody"></tbody></table>
</div>
</div>

<script>

// ================= FIFO HELPERS =================

// Build purchase batches (FIFO layers)
function buildInventoryFIFO(purchases){
  var stock = {};

  purchases.forEach(function(p){
    (p.items || []).forEach(function(it){

      if(!stock[it.productId]) stock[it.productId] = [];

      stock[it.productId].push({
        qty: it.qty,
        price: it.rate || it.price || 0,
        remaining: it.qty,
        date: p.date
      });

    });
  });

  // Sort by date (FIFO)
  Object.keys(stock).forEach(function(pid){
    stock[pid].sort(function(a,b){
      return new Date(a.date) - new Date(b.date);
    });
  });

  return stock;
}

// Calculate COGS using FIFO
function calculateCOGSFIFO(sales, stock){
  var totalCogs = 0;

  sales.forEach(function(s){

    (s.items || []).forEach(function(it){

      var qtyNeeded = it.qty;
      var layers = stock[it.productId] || [];

      for(var i=0; i<layers.length && qtyNeeded > 0; i++){

        var layer = layers[i];
        if(layer.remaining <= 0) continue;

        var used = Math.min(layer.remaining, qtyNeeded);

        totalCogs += used * layer.price;

        layer.remaining -= used;
        qtyNeeded -= used;
      }

    });

  });

  return totalCogs;
}

// ================= LOAD =================

async function loadPL(){
  var d=await Promise.all([
    loadList('sale:'),
    loadList('purchase:'),
    loadList('expense:'),
    loadList('product:')
  ]);
  window._plSales=d[0];
  window._plPurchases=d[1];
  window._plExpenses=d[2];
  window._plProducts=d[3];
  renderPL();
}

// ================= MAIN =================

window.renderPL=function(){

var from=document.getElementById('plFrom').value;
var to=document.getElementById('plTo').value;

var sales=window._plSales.filter(function(s){
  return(!from||s.date>=from)&&(!to||s.date<=to)
});

var expenses=window._plExpenses.filter(function(e){
  return(!from||e.date>=from)&&(!to||e.date<=to)
});

// Revenue
var revenue=sales.reduce(function(s,x){
  return s+(x.total||0)
},0);

// ✅ FIFO COGS
var stock = buildInventoryFIFO(window._plPurchases);
var cogs = calculateCOGSFIFO(sales, stock);

// Profit
var grossProfit=revenue-cogs;

var totalExp=expenses.reduce(function(s,e){
  return s+(e.amount||0)
},0);

var netProfit=grossProfit-totalExp;

// Expense grouping
var expByHead={};
expenses.forEach(function(e){
  var h=e.headName||'Other';
  expByHead[h]=(expByHead[h]||0)+(e.amount||0)
});

// ================= UI =================

document.getElementById('plStats').innerHTML=
'<div class="stat"><div class="label">Revenue</div><div class="value text-success">'+fmt(revenue)+'</div></div>'+
'<div class="stat"><div class="label">COGS</div><div class="value text-warning">'+fmt(cogs)+'</div></div>'+
'<div class="stat"><div class="label">Gross Profit</div><div class="value '+(grossProfit>=0?'text-success':'text-danger')+'">'+fmt(grossProfit)+'</div></div>'+
'<div class="stat"><div class="label">Net Profit</div><div class="value '+(netProfit>=0?'text-success':'text-danger')+'">'+fmt(netProfit)+'</div></div>';

var rows='';

// Revenue
rows+='<tr style="background:var(--accent-light)"><td class="bold" colspan="2">Revenue</td></tr>';
rows+='<tr><td style="padding-left:24px">Sales Revenue</td><td class="r bold">'+fmt(revenue)+'</td></tr>';
rows+='<tr style="background:var(--bg)"><td class="bold">Total Revenue</td><td class="r bold">'+fmt(revenue)+'</td></tr>';

// COGS
rows+='<tr style="background:var(--warning-light)"><td class="bold" colspan="2">Cost of Goods Sold</td></tr>';
rows+='<tr><td style="padding-left:24px">COGS (FIFO Based)</td><td class="r bold text-danger">'+fmt(cogs)+'</td></tr>';
rows+='<tr style="background:var(--bg)"><td class="bold">Gross Profit</td><td class="r bold '+(grossProfit>=0?'text-success':'text-danger')+'">'+fmt(grossProfit)+'</td></tr>';

// Expenses
rows+='<tr style="background:var(--danger-light)"><td class="bold" colspan="2">Expenses</td></tr>';

Object.keys(expByHead).sort().forEach(function(h){
  rows+='<tr><td style="padding-left:24px">'+h+'</td><td class="r">'+fmt(expByHead[h])+'</td></tr>';
});

rows+='<tr style="background:var(--bg)"><td class="bold">Total Expenses</td><td class="r bold text-danger">'+fmt(totalExp)+'</td></tr>';

// Net
rows+='<tr style="background:var(--primary-light);font-size:15px"><td class="bold">NET PROFIT / (LOSS)</td><td class="r bold '+(netProfit>=0?'text-success':'text-danger')+'">'+fmt(netProfit)+'</td></tr>';

document.getElementById('plBody').innerHTML=rows;

}

// ================= INIT =================
loadPL();

<\/script>`}function Ta(){return`
<div class="page-header"><div><div class="page-title">Balance Sheet</div><div class="page-sub">Assets, Liabilities & Equity</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('bsPrint','Balance Sheet')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('bsTbl','BalanceSheet')">Export XLS</button></div></div>
<div id="bsPrint"><div class="card"><table class="tbl" id="bsTbl"><tbody id="bsBody"></tbody></table></div></div>
<script>
async function loadBS(){var d=await Promise.all([loadList('product:'),loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('expense:'),loadList('party:'),loadList('bank:')]);var products=d[0],sales=d[1],purchases=d[2],payments=d[3],expenses=d[4],parties=d[5],banks=d[6];
var inventory=products.reduce(function(s,p){return s+((p.stock||0)*(p.purchasePrice||0))},0);
var receivables=0;parties.filter(function(p){return p.type==='customer'}).forEach(function(c){var cs=sales.filter(function(s){return s.customerId===c._key});var cr=payments.filter(function(p){return p.party===c.name&&p.type==='receipt'&&p.status==='done'});var td=cs.reduce(function(s,x){return s+(x.total||0)},0);var tr=cs.reduce(function(s,x){return s+(x.paid||0)},0)+cr.reduce(function(s,x){return s+(x.amount||0)},0);receivables+=Math.max(0,td-tr)});
var bankBal=banks.reduce(function(s,b){return s+(b.balance||b.openingBalance||0)},0);
var cashReceipts=payments.filter(function(p){return p.method==='cash'&&p.type==='receipt'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashPayouts=payments.filter(function(p){return p.method==='cash'&&p.type==='payment'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashExpenses=expenses.filter(function(e){return e.method==='cash'}).reduce(function(s,e){return s+(e.amount||0)},0);
var salePaidCash=sales.filter(function(s){return s.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var purPaidCash=purchases.filter(function(p){return p.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var trfToCashBS=payments.filter(function(p){return p.type==='transfer'&&p.toAcc==='Cash'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var trfFromCashBS=payments.filter(function(p){return p.type==='transfer'&&p.fromAcc==='Cash'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashBal=salePaidCash+cashReceipts-purPaidCash-cashPayouts-cashExpenses+trfToCashBS-trfFromCashBS;
var totalAssets=inventory+receivables+bankBal+Math.max(0,cashBal);
var payables=0;parties.filter(function(p){return p.type==='supplier'}).forEach(function(s){var sp=purchases.filter(function(p){return p.supplierId===s._key});var py=payments.filter(function(p){return p.party===s.name&&p.type==='payment'&&p.status==='done'});var td=sp.reduce(function(a,x){return a+(x.total||0)},0);var tp=sp.reduce(function(a,x){return a+(x.paid||0)},0)+py.reduce(function(a,x){return a+(x.amount||0)},0);payables+=Math.max(0,td-tp)});
var totalLiabilities=payables;
var equity=totalAssets-totalLiabilities;
var rows='<tr style="background:var(--accent-light)"><td class="bold" colspan="2">ASSETS</td></tr>';
rows+='<tr><td style="padding-left:24px">Inventory (at cost)</td><td class="r">'+fmt(inventory)+'</td></tr>';
rows+='<tr><td style="padding-left:24px">Accounts Receivable</td><td class="r">'+fmt(receivables)+'</td></tr>';
rows+='<tr><td style="padding-left:24px">Bank Balances</td><td class="r">'+fmt(bankBal)+'</td></tr>';
rows+='<tr><td style="padding-left:24px">Cash in Hand</td><td class="r">'+fmt(Math.max(0,cashBal))+'</td></tr>';
rows+='<tr style="background:var(--bg)"><td class="bold">Total Assets</td><td class="r bold">'+fmt(totalAssets)+'</td></tr>';
rows+='<tr style="background:var(--danger-light)"><td class="bold" colspan="2">LIABILITIES</td></tr>';
rows+='<tr><td style="padding-left:24px">Accounts Payable</td><td class="r">'+fmt(payables)+'</td></tr>';
rows+='<tr style="background:var(--bg)"><td class="bold">Total Liabilities</td><td class="r bold">'+fmt(totalLiabilities)+'</td></tr>';
rows+='<tr style="background:var(--primary-light)"><td class="bold" colspan="2">EQUITY</td></tr>';
rows+='<tr><td style="padding-left:24px">Owner Equity</td><td class="r">'+fmt(equity)+'</td></tr>';
rows+='<tr style="background:var(--bg)"><td class="bold">Total Liabilities + Equity</td><td class="r bold">'+fmt(totalLiabilities+equity)+'</td></tr>';
document.getElementById('bsBody').innerHTML=rows}
loadBS();
<\/script>`}function Ca(){return`
<div class="page-header"><div><div class="page-title">Trial Balance</div><div class="page-sub">Debit & Credit summary</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('tbPrint','Trial Balance')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('tbTbl','TrialBalance')">Export XLS</button></div></div>
<div id="tbPrint"><div class="stats" id="tbStats"></div><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="tbTbl"><thead><tr><th>Account</th><th class="r">Debit</th><th class="r">Credit</th></tr></thead><tbody id="tbBody"></tbody></table></div></div></div>
<script>
async function loadTB(){var d=await Promise.all([loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('expense:'),loadList('product:'),loadList('party:'),loadList('bank:')]);var sales=d[0],purchases=d[1],payments=d[2],expenses=d[3],products=d[4],parties=d[5],banks=d[6];
var accounts=[];
var totalSales=sales.reduce(function(s,x){return s+(x.total||0)},0);accounts.push({name:'Sales Revenue',debit:0,credit:totalSales});
var cogs=0;sales.forEach(function(s){(s.items||[]).forEach(function(it){var pr=products.find(function(p){return p._key===it.productId});cogs+=(pr?pr.purchasePrice||0:0)*it.qty})});accounts.push({name:'Cost of Goods Sold',debit:cogs,credit:0});
var totalPurchases=purchases.reduce(function(s,x){return s+(x.total||0)},0);accounts.push({name:'Purchases',debit:totalPurchases,credit:0});
var inventory=products.reduce(function(s,p){return s+((p.stock||0)*(p.purchasePrice||0))},0);accounts.push({name:'Inventory',debit:inventory,credit:0});
var receivables=0;parties.filter(function(p){return p.type==='customer'}).forEach(function(c){var cs=sales.filter(function(s){return s.customerId===c._key});var cr=payments.filter(function(p){return p.party===c.name&&p.type==='receipt'&&p.status==='done'});var td=cs.reduce(function(s,x){return s+(x.total||0)},0);var tr=cs.reduce(function(s,x){return s+(x.paid||0)},0)+cr.reduce(function(s,x){return s+(x.amount||0)},0);receivables+=Math.max(0,td-tr)});accounts.push({name:'Accounts Receivable',debit:receivables,credit:0});
var payables=0;parties.filter(function(p){return p.type==='supplier'}).forEach(function(s){var sp=purchases.filter(function(p){return p.supplierId===s._key});var py=payments.filter(function(p){return p.party===s.name&&p.type==='payment'&&p.status==='done'});var td=sp.reduce(function(a,x){return a+(x.total||0)},0);var tp=sp.reduce(function(a,x){return a+(x.paid||0)},0)+py.reduce(function(a,x){return a+(x.amount||0)},0);payables+=Math.max(0,td-tp)});accounts.push({name:'Accounts Payable',debit:0,credit:payables});
var totalExp=expenses.reduce(function(s,e){return s+(e.amount||0)},0);accounts.push({name:'Expenses',debit:totalExp,credit:0});
var bankBal=banks.reduce(function(s,b){return s+(b.balance||b.openingBalance||0)},0);accounts.push({name:'Bank Accounts',debit:bankBal,credit:0});
var totalDr=accounts.reduce(function(s,a){return s+a.debit},0);var totalCr=accounts.reduce(function(s,a){return s+a.credit},0);
document.getElementById('tbStats').innerHTML='<div class="stat"><div class="label">Total Debit</div><div class="value text-danger">'+fmt(totalDr)+'</div></div><div class="stat"><div class="label">Total Credit</div><div class="value text-success">'+fmt(totalCr)+'</div></div><div class="stat"><div class="label">Difference</div><div class="value '+(Math.abs(totalDr-totalCr)<1?'text-success':'text-danger')+'">'+fmt(Math.abs(totalDr-totalCr))+'</div></div>';
document.getElementById('tbBody').innerHTML=accounts.map(function(a){return'<tr><td class="bold">'+a.name+'</td><td class="r '+(a.debit?'text-danger':'')+'">'+fmt(a.debit)+'</td><td class="r '+(a.credit?'text-success':'')+'">'+fmt(a.credit)+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td>TOTALS</td><td class="r text-danger">'+fmt(totalDr)+'</td><td class="r text-success">'+fmt(totalCr)+'</td></tr>'}
loadTB();
<\/script>`}function Na(){return`
<div class="page-header"><div><div class="page-title">Stock & Valuation</div><div class="page-sub">Stock levels, value & alerts</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('stPrint','Stock')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('stTbl','Stock')">Export XLS</button></div></div>
<div class="tabs"><button class="tab active" onclick="switchStTab('all',this)">All Stock</button><button class="tab" onclick="switchStTab('available',this)">Available</button><button class="tab" onclick="switchStTab('low',this)">Low Stock</button><button class="tab" onclick="switchStTab('out',this)">Out of Stock</button></div>
<div class="form-row" style="margin-bottom:14px"><div><label>Group</label><select id="stGroupFilter" onchange="renderSt()"><option value="">All Groups</option></select></div><div class="search-wrap" style="margin-bottom:0"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input id="stSearch" placeholder="Search product..." oninput="renderSt()"></div></div>
<div class="stats" id="stStats"></div>
<div id="stPrint"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="stTbl"><thead><tr><th>Product</th><th>Group</th><th>SKU</th><th class="r">Stock</th><th class="r">Buy Price</th><th class="r">Sell Price</th><th class="r">Cost Value</th><th class="r">Sale Value</th><th>Status</th></tr></thead><tbody id="stBody"></tbody></table></div></div></div>
<script>
var stProds=[],stTab='all',stGroups=[];
async function loadSt(){var d=await Promise.all([loadList('product:'),loadList('prodgroup:')]);stProds=d[0];stGroups=d[1]||[];document.getElementById('stGroupFilter').innerHTML='<option value="">All Groups</option>'+stGroups.map(function(g){return'<option value="'+g.name+'">'+g.name+'</option>'}).join('');renderSt()}
window.switchStTab=function(t,el){stTab=t;document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});el.classList.add('active');renderSt()}
function renderSt(){var gf=document.getElementById('stGroupFilter').value;var sq=(document.getElementById('stSearch').value||'').trim().toLowerCase();var fl=stProds;if(stTab==='available')fl=fl.filter(function(p){return(p.stock||0)>0});else if(stTab==='low')fl=fl.filter(function(p){return(p.stock||0)>0&&(p.stock||0)<=5});else if(stTab==='out')fl=fl.filter(function(p){return(p.stock||0)<=0});
if(gf)fl=fl.filter(function(p){return p.group===gf});if(sq)fl=fl.filter(function(p){return(p.name||'').toLowerCase().includes(sq)});
var totalCost=fl.reduce(function(s,p){return s+((p.stock||0)*(p.purchasePrice||0))},0);var totalSale=fl.reduce(function(s,p){return s+((p.stock||0)*(p.salePrice||0))},0);var totalQty=fl.reduce(function(s,p){return s+(p.stock||0)},0);var lowCount=fl.filter(function(p){return(p.stock||0)>0&&(p.stock||0)<=5}).length;var outCount=fl.filter(function(p){return(p.stock||0)<=0}).length;
document.getElementById('stStats').innerHTML='<div class="stat"><div class="label">Total Products</div><div class="value">'+fl.length+'</div></div><div class="stat"><div class="label">Total Qty</div><div class="value">'+fmt(totalQty)+'</div></div><div class="stat"><div class="label">Cost Value</div><div class="value text-primary">'+fmt(totalCost)+'</div></div><div class="stat"><div class="label">Sale Value</div><div class="value text-success">'+fmt(totalSale)+'</div></div><div class="stat"><div class="label">Low Stock</div><div class="value text-warning">'+lowCount+'</div></div><div class="stat"><div class="label">Out of Stock</div><div class="value text-danger">'+outCount+'</div></div>';
document.getElementById('stBody').innerHTML=!fl.length?'<tr><td colspan="9" class="empty">No products</td></tr>':fl.map(function(p){var st=p.stock||0;var status=st<=0?'<span class="badge badge-danger">Out</span>':st<=5?'<span class="badge badge-warning">Low</span>':'<span class="badge badge-success">OK</span>';return'<tr><td class="bold">'+p.name+'</td><td>'+(p.group?'<span class="badge badge-info">'+p.group+'</span>':'-')+'</td><td class="text-muted">'+(p.sku||'')+'</td><td class="r bold '+(st<=0?'text-danger':st<=5?'text-warning':'')+'">'+st+'</td><td class="r">'+fmt(p.purchasePrice)+'</td><td class="r">'+fmt(p.salePrice)+'</td><td class="r">'+fmt(st*(p.purchasePrice||0))+'</td><td class="r text-success">'+fmt(st*(p.salePrice||0))+'</td><td>'+status+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="3">TOTAL</td><td class="r">'+fmt(totalQty)+'</td><td></td><td></td><td class="r">'+fmt(totalCost)+'</td><td class="r">'+fmt(totalSale)+'</td><td></td></tr>'}
loadSt();
<\/script>`}function La(){return`
<div class="page-header"><div><div class="page-title">Receivable / Payable</div><div class="page-sub">Outstanding balances with DSO & filters</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('rpPrint','Receivable-Payable')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('rpTbl','RecPayable')">Export XLS</button></div></div>
<div class="tabs"><button class="tab active" onclick="switchRP('receivable',this)">Receivables</button><button class="tab" onclick="switchRP('payable',this)">Payables</button></div>
<div class="card" style="margin-bottom:14px;padding:14px 16px">
<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;align-items:end">
<div><label>Search Party</label><input id="rpSearch" placeholder="Search name/phone..." oninput="renderRP()"></div>
<div><label>Salesperson</label><select id="rpSP" onchange="renderRP()"><option value="">All Salespersons</option></select></div>
<div><label>Date From</label><input type="date" id="rpFrom" onchange="renderRP()"></div>
<div><label>Date To</label><input type="date" id="rpTo" onchange="renderRP()"></div>
</div>
<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
<button class="btn btn-outline btn-xs" onclick="setRPDateRange('today')">Today</button>
<button class="btn btn-outline btn-xs" onclick="setRPDateRange('week')">This Week</button>
<button class="btn btn-outline btn-xs" onclick="setRPDateRange('month')">This Month</button>
<button class="btn btn-outline btn-xs" onclick="setRPDateRange('quarter')">This Quarter</button>
<button class="btn btn-outline btn-xs" onclick="setRPDateRange('year')">This Year</button>
<button class="btn btn-outline btn-xs" onclick="setRPDateRange('all')">All Time</button>
<div><label style="margin:0;display:inline"><input type="checkbox" id="rpOnlyOutstanding" onchange="renderRP()" checked> Only Outstanding</label></div>
</div>
</div>
<div class="stats" id="rpStats"></div>
<div id="rpPrint"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="rpTbl"><thead><tr><th>Party</th><th>Phone</th><th>Salesperson</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Outstanding</th><th class="r">Credit Limit</th><th class="r">DSO</th></tr></thead><tbody id="rpBody"></tbody></table></div></div></div>
<script>
var rpParties=[],rpSales=[],rpPurchases=[],rpPayments=[],rpTab='receivable',rpSPList=[];
async function loadRP(){var d=await Promise.all([loadList('party:'),loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('salesperson:')]);rpParties=d[0];rpSales=d[1];rpPurchases=d[2];rpPayments=d[3];rpSPList=d[4]||[];
document.getElementById('rpSP').innerHTML='<option value="">All Salespersons</option>'+rpSPList.map(function(s){return'<option value="'+s.name+'">'+s.name+'</option>'}).join('');
renderRP()}
window.switchRP=function(t,el){rpTab=t;document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});el.classList.add('active');renderRP()}
window.setRPDateRange=function(range){var today=new Date();var from='',to=todayISO();
if(range==='today'){from=to}
else if(range==='week'){var d=new Date(today);d.setDate(d.getDate()-d.getDay());from=d.toISOString().slice(0,10)}
else if(range==='month'){from=today.getFullYear()+'-'+(today.getMonth()+1<10?'0':'')+(today.getMonth()+1)+'-01'}
else if(range==='quarter'){var qm=Math.floor(today.getMonth()/3)*3;from=today.getFullYear()+'-'+(qm+1<10?'0':'')+(qm+1)+'-01'}
else if(range==='year'){from=today.getFullYear()+'-01-01'}
else{from='';to=''}
document.getElementById('rpFrom').value=from;document.getElementById('rpTo').value=to;renderRP()}
function renderRP(){var isRec=rpTab==='receivable';
var searchQ=(document.getElementById('rpSearch').value||'').trim().toLowerCase();
var spFilter=document.getElementById('rpSP').value;
var from=document.getElementById('rpFrom').value;
var to=document.getElementById('rpTo').value;
var onlyOut=document.getElementById('rpOnlyOutstanding').checked;
var pts=rpParties.filter(function(p){return p.type===(isRec?'customer':'supplier')});
if(searchQ){pts=pts.filter(function(p){return(p.name||'').toLowerCase().includes(searchQ)||(p.phone||'').toLowerCase().includes(searchQ)})}
if(spFilter&&isRec){pts=pts.filter(function(p){return p.salespersonName===spFilter})}
var rows=[];var grandTotal=0;var grandPaid=0;var grandOut=0;
pts.forEach(function(p){var txns,pays;
if(isRec){txns=rpSales.filter(function(s){return s.customerId===p._key&&(!from||s.date>=from)&&(!to||s.date<=to)&&(!spFilter||s.salespersonName===spFilter)});pays=rpPayments.filter(function(r){return r.party===p.name&&r.type==='receipt'&&r.status==='done'&&(!from||r.date>=from)&&(!to||r.date<=to)})}
else{txns=rpPurchases.filter(function(pr){return pr.supplierId===p._key&&(!from||pr.date>=from)&&(!to||pr.date<=to)});pays=rpPayments.filter(function(py){return py.party===p.name&&py.type==='payment'&&py.status==='done'&&(!from||py.date>=from)&&(!to||py.date<=to)})}
var total=txns.reduce(function(s,x){return s+(x.total||0)},0);var paid=txns.reduce(function(s,x){return s+(x.paid||0)},0)+pays.reduce(function(s,x){return s+(x.amount||0)},0);var out=Math.max(0,total-paid);
var dso=0;if(txns.length&&total>0){var avgDaily=total/Math.max(1,txns.length);dso=avgDaily>0?Math.round(out/avgDaily*30):0}
if(total>0&&(!onlyOut||out>0)){rows.push({name:p.name,phone:p.phone||'',sp:p.salespersonName||'-',total:total,paid:paid,out:out,cl:p.creditLimit||0,dso:dso});grandTotal+=total;grandPaid+=paid;grandOut+=out}});
rows.sort(function(a,b){return b.out-a.out});
document.getElementById('rpStats').innerHTML='<div class="stat"><div class="label">Total '+(isRec?'Receivable':'Payable')+'</div><div class="value '+(isRec?'text-info':'text-danger')+'">'+fmt(grandOut)+'</div></div><div class="stat"><div class="label">Parties</div><div class="value">'+rows.length+'</div></div><div class="stat"><div class="label">Total Billed</div><div class="value">'+fmt(grandTotal)+'</div></div><div class="stat"><div class="label">Total Collected</div><div class="value text-success">'+fmt(grandPaid)+'</div></div>';
document.getElementById('rpBody').innerHTML=!rows.length?'<tr><td colspan="8" class="empty">No outstanding</td></tr>':rows.map(function(r){return'<tr><td class="bold">'+r.name+'</td><td class="text-muted">'+r.phone+'</td><td>'+(r.sp!=='-'?'<span class="badge badge-info">'+r.sp+'</span>':'-')+'</td><td class="r">'+fmt(r.total)+'</td><td class="r text-success">'+fmt(r.paid)+'</td><td class="r bold '+(r.out>0?'text-danger':'')+'">'+fmt(r.out)+'</td><td class="r">'+(r.cl?fmt(r.cl):'--')+'</td><td class="r text-muted">'+r.dso+' days</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="3">TOTAL</td><td class="r">'+fmt(grandTotal)+'</td><td class="r">'+fmt(grandPaid)+'</td><td class="r">'+fmt(grandOut)+'</td><td></td><td></td></tr>'}
loadRP();
<\/script>`}function Aa(){return`
<div class="page-header"><div><div class="page-title">Day Details</div><div class="page-sub">Daily snapshot</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('dayPrint','Day Details')">Print</button></div></div>
<div class="date-nav" style="margin-bottom:16px"><button onclick="changeDay(-1)"><span class="material-symbols-outlined" style="font-size:16px">chevron_left</span></button><input type="date" id="dayDate" onchange="renderDay()" style="max-width:160px"><button onclick="changeDay(1)"><span class="material-symbols-outlined" style="font-size:16px">chevron_right</span></button><button class="btn btn-outline btn-sm" onclick="document.getElementById('dayDate').value=todayISO();renderDay()">Today</button></div>
<div id="dayPrint"><div class="stats" id="dayStats"></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px" id="daySections"></div></div>
<style>#daySections{grid-template-columns:1fr 1fr}@media(max-width:900px){#daySections{grid-template-columns:1fr}}</style>
<script>
var daySales=[],dayPurchases=[],dayPayments=[],dayExpenses=[];
async function loadDay(){var d=await Promise.all([loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('expense:')]);daySales=d[0];dayPurchases=d[1];dayPayments=d[2];dayExpenses=d[3];document.getElementById('dayDate').value=todayISO();renderDay()}
window.changeDay=function(dir){var d=new Date(document.getElementById('dayDate').value);d.setDate(d.getDate()+dir);document.getElementById('dayDate').value=d.toISOString().slice(0,10);renderDay()}
window.renderDay=function(){var dt=document.getElementById('dayDate').value;var ds=daySales.filter(function(s){return s.date===dt});var dp=dayPurchases.filter(function(p){return p.date===dt});var dr=dayPayments.filter(function(p){return p.date===dt&&p.status==='done'});var de=dayExpenses.filter(function(e){return e.date===dt});
var totalSales=ds.reduce(function(s,x){return s+(x.total||0)},0);var totalPurchases=dp.reduce(function(s,x){return s+(x.total||0)},0);var totalReceipts=dr.filter(function(r){return r.type==='receipt'}).reduce(function(s,x){return s+(x.amount||0)},0);var totalPayments=dr.filter(function(r){return r.type==='payment'}).reduce(function(s,x){return s+(x.amount||0)},0);var totalExpenses=de.reduce(function(s,x){return s+(x.amount||0)},0);
var dayCashIn=ds.filter(function(s){return s.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0)+dr.filter(function(r){return r.type==='receipt'&&r.method==='cash'}).reduce(function(s,x){return s+(x.amount||0)},0);
var dayCashOut=dp.filter(function(p){return p.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0)+dr.filter(function(r){return r.type==='payment'&&r.method==='cash'}).reduce(function(s,x){return s+(x.amount||0)},0)+de.filter(function(e){return e.method==='cash'}).reduce(function(s,x){return s+(x.amount||0)},0);
// Include transfers impact on cash
var dayTrfToCash=dr.filter(function(r){return r.type==='transfer'&&r.toAcc==='Cash'}).reduce(function(s,x){return s+(x.amount||0)},0);
var dayTrfFromCash=dr.filter(function(r){return r.type==='transfer'&&r.fromAcc==='Cash'}).reduce(function(s,x){return s+(x.amount||0)},0);
dayCashIn+=dayTrfToCash;
dayCashOut+=dayTrfFromCash;
// Calculate overall cash-in-hand (cumulative up to this date)
var allSalesUpTo=daySales.filter(function(s){return s.date<=dt});
var allPurUpTo=dayPurchases.filter(function(p){return p.date<=dt});
var allPayUpTo=dayPayments.filter(function(p){return p.date<=dt&&p.status==='done'});
var allExpUpTo=dayExpenses.filter(function(e){return e.date<=dt});
var cihSalesCash=allSalesUpTo.filter(function(s){return s.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var cihRecCash=allPayUpTo.filter(function(p){return p.method==='cash'&&p.type==='receipt'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cihPurCash=allPurUpTo.filter(function(p){return p.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var cihPayCash=allPayUpTo.filter(function(p){return p.method==='cash'&&p.type==='payment'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cihExpCash=allExpUpTo.filter(function(e){return e.method==='cash'}).reduce(function(s,e){return s+(e.amount||0)},0);
var cihTrfTo=allPayUpTo.filter(function(p){return p.type==='transfer'&&p.toAcc==='Cash'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cihTrfFrom=allPayUpTo.filter(function(p){return p.type==='transfer'&&p.fromAcc==='Cash'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashInHand=cihSalesCash+cihRecCash-cihPurCash-cihPayCash-cihExpCash+cihTrfTo-cihTrfFrom;

var dayBankIn=ds.filter(function(s){return s.method!=='cash'&&s.method!=='credit'}).reduce(function(s,x){return s+(x.paid||0)},0)+dr.filter(function(r){return r.type==='receipt'&&r.method!=='cash'}).reduce(function(s,x){return s+(x.amount||0)},0);
var dayBankOut=dp.filter(function(p){return p.method!=='cash'&&p.method!=='credit'}).reduce(function(s,x){return s+(x.paid||0)},0)+dr.filter(function(r){return r.type==='payment'&&r.method!=='cash'}).reduce(function(s,x){return s+(x.amount||0)},0)+de.filter(function(e){return e.method!=='cash'}).reduce(function(s,x){return s+(x.amount||0)},0);
document.getElementById('dayStats').innerHTML='<div class="stat"><div class="label">Sales</div><div class="value text-success">'+fmt(totalSales)+'</div></div><div class="stat"><div class="label">Purchases</div><div class="value text-primary">'+fmt(totalPurchases)+'</div></div><div class="stat"><div class="label">Receipts</div><div class="value text-info">'+fmt(totalReceipts)+'</div></div><div class="stat"><div class="label">Payments Out</div><div class="value text-warning">'+fmt(totalPayments)+'</div></div><div class="stat"><div class="label">Expenses</div><div class="value text-danger">'+fmt(totalExpenses)+'</div></div><div class="stat"><div class="label">Cash In</div><div class="value text-success">'+fmt(dayCashIn)+'</div></div><div class="stat"><div class="label">Cash Out</div><div class="value text-danger">'+fmt(dayCashOut)+'</div></div><div class="stat" style="border:2px solid var(--primary)"><div class="label">Cash in Hand</div><div class="value '+(cashInHand>=0?'text-success':'text-danger')+'">'+fmt(cashInHand)+'</div></div><div class="stat"><div class="label">Bank In</div><div class="value text-success">'+fmt(dayBankIn)+'</div></div><div class="stat"><div class="label">Bank Out</div><div class="value text-danger">'+fmt(dayBankOut)+'</div></div>';
// Separate Cash, Bank & Transfer transactions
var cashRecTxn=dr.filter(function(r){return r.type==='receipt'&&r.method==='cash'});
var cashPayTxn=dr.filter(function(r){return r.type==='payment'&&r.method==='cash'});
var bankRecTxn=dr.filter(function(r){return r.type==='receipt'&&r.method!=='cash'});
var bankPayTxn=dr.filter(function(r){return r.type==='payment'&&r.method!=='cash'});
var transferTxn=dr.filter(function(r){return r.type==='transfer'});
var cashSales=ds.filter(function(s){return s.method==='cash'});
var bankSales=ds.filter(function(s){return s.method!=='cash'&&s.method!=='credit'});
var creditSales=ds.filter(function(s){return s.method==='credit'});
var cashPurchases=dp.filter(function(p){return p.method==='cash'});
var bankPurchases=dp.filter(function(p){return p.method!=='cash'&&p.method!=='credit'});
var cashExpenses=de.filter(function(e){return e.method==='cash'});
var bankExpenses=de.filter(function(e){return e.method!=='cash'});

var html='';
// Sales section
html+='<div class="card"><div class="section-title">Sales ('+ds.length+')</div>'+(ds.length?'<table class="tbl"><thead><tr><th>Invoice</th><th>Customer</th><th>Method</th><th class="r">Total</th><th class="r">Paid</th></tr></thead><tbody>'+ds.map(function(s){return'<tr><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td>'+s.customerName+'</td><td>'+methodBadge(s.method)+'</td><td class="r bold">'+fmt(s.total)+'</td><td class="r text-success">'+fmt(s.paid)+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="3">Total</td><td class="r">'+fmt(totalSales)+'</td><td class="r">'+fmt(ds.reduce(function(s,x){return s+(x.paid||0)},0))+'</td></tr></tbody></table>':'<div class="empty">No sales</div>')+'</div>';
// Purchases section
html+='<div class="card"><div class="section-title">Purchases ('+dp.length+')</div>'+(dp.length?'<table class="tbl"><thead><tr><th>#</th><th>Supplier</th><th>Method</th><th class="r">Total</th><th class="r">Paid</th></tr></thead><tbody>'+dp.map(function(p){return'<tr><td><span class="doc-link" onclick="previewDoc(\\x27purchase\\x27,\\x27'+p._key+'\\x27)">'+p.purchaseNo+'</span></td><td>'+p.supplierName+'</td><td>'+methodBadge(p.method)+'</td><td class="r bold">'+fmt(p.total)+'</td><td class="r text-success">'+fmt(p.paid)+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="3">Total</td><td class="r">'+fmt(totalPurchases)+'</td><td class="r">'+fmt(dp.reduce(function(s,x){return s+(x.paid||0)},0))+'</td></tr></tbody></table>':'<div class="empty">No purchases</div>')+'</div>';
// CASH section
var cashItems=[];
cashSales.forEach(function(s){cashItems.push({desc:'Sale: '+s.invoiceNo+' - '+s.customerName,amt:s.paid||0,type:'in'})});
cashRecTxn.forEach(function(r){cashItems.push({desc:'Receipt: '+r.no+' - '+r.party,amt:r.amount||0,type:'in'})});
cashPurchases.forEach(function(p){cashItems.push({desc:'Purchase: '+p.purchaseNo+' - '+p.supplierName,amt:p.paid||0,type:'out'})});
cashPayTxn.forEach(function(p){cashItems.push({desc:'Payment: '+p.no+' - '+p.party,amt:p.amount||0,type:'out'})});
cashExpenses.forEach(function(e){cashItems.push({desc:'Expense: '+(e.expenseNo||'')+' - '+(e.headName||''),amt:e.amount||0,type:'out'})});
// Transfer cash-in/out
dr.filter(function(r){return r.type==='transfer'&&r.toAcc==='Cash'}).forEach(function(r){cashItems.push({desc:'Transfer In from '+r.fromAcc,amt:r.amount||0,type:'in'})});
dr.filter(function(r){return r.type==='transfer'&&r.fromAcc==='Cash'}).forEach(function(r){cashItems.push({desc:'Transfer Out to '+r.toAcc,amt:r.amount||0,type:'out'})});
var cashTotalIn=cashItems.filter(function(i){return i.type==='in'}).reduce(function(s,i){return s+i.amt},0);
var cashTotalOut=cashItems.filter(function(i){return i.type==='out'}).reduce(function(s,i){return s+i.amt},0);
html+='<div class="card"><div class="section-title" style="color:var(--accent)"><span class="material-symbols-outlined" style="font-size:18px">payments</span> Cash Transactions</div>'+(cashItems.length?'<table class="tbl"><thead><tr><th>Description</th><th class="r">In</th><th class="r">Out</th></tr></thead><tbody>'+cashItems.map(function(i){return'<tr><td>'+i.desc+'</td><td class="r text-success">'+(i.type==='in'?fmt(i.amt):'')+'</td><td class="r text-danger">'+(i.type==='out'?fmt(i.amt):'')+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td>NET CASH</td><td class="r text-success">'+fmt(cashTotalIn)+'</td><td class="r text-danger">'+fmt(cashTotalOut)+'</td></tr></tbody></table>':'<div class="empty">No cash transactions</div>')+'</div>';
// BANK section
var bankItems=[];
bankSales.forEach(function(s){bankItems.push({desc:'Sale: '+s.invoiceNo+' - '+s.customerName+(s.bankName?' ['+s.bankName+']':''),amt:s.paid||0,type:'in'})});
bankRecTxn.forEach(function(r){bankItems.push({desc:'Receipt: '+r.no+' - '+r.party+(r.bankName?' ['+r.bankName+']':''),amt:r.amount||0,type:'in'})});
bankPurchases.forEach(function(p){bankItems.push({desc:'Purchase: '+p.purchaseNo+' - '+p.supplierName+(p.bankName?' ['+p.bankName+']':''),amt:p.paid||0,type:'out'})});
bankPayTxn.forEach(function(p){bankItems.push({desc:'Payment: '+p.no+' - '+p.party+(p.bankName?' ['+p.bankName+']':''),amt:p.amount||0,type:'out'})});
bankExpenses.forEach(function(e){bankItems.push({desc:'Expense: '+(e.expenseNo||'')+' - '+(e.headName||'')+(e.bankName?' ['+e.bankName+']':''),amt:e.amount||0,type:'out'})});
var bankTotalIn=bankItems.filter(function(i){return i.type==='in'}).reduce(function(s,i){return s+i.amt},0);
var bankTotalOut=bankItems.filter(function(i){return i.type==='out'}).reduce(function(s,i){return s+i.amt},0);
html+='<div class="card"><div class="section-title" style="color:var(--primary)"><span class="material-symbols-outlined" style="font-size:18px">account_balance</span> Bank Transactions</div>'+(bankItems.length?'<table class="tbl"><thead><tr><th>Description</th><th class="r">In</th><th class="r">Out</th></tr></thead><tbody>'+bankItems.map(function(i){return'<tr><td>'+i.desc+'</td><td class="r text-success">'+(i.type==='in'?fmt(i.amt):'')+'</td><td class="r text-danger">'+(i.type==='out'?fmt(i.amt):'')+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td>NET BANK</td><td class="r text-success">'+fmt(bankTotalIn)+'</td><td class="r text-danger">'+fmt(bankTotalOut)+'</td></tr></tbody></table>':'<div class="empty">No bank transactions</div>')+'</div>';
// TRANSFERS section
html+='<div class="card"><div class="section-title" style="color:var(--info)"><span class="material-symbols-outlined" style="font-size:18px">swap_horiz</span> Fund Transfers</div>'+(transferTxn.length?'<table class="tbl"><thead><tr><th>No</th><th>From</th><th>To</th><th class="r">Amount</th></tr></thead><tbody>'+transferTxn.map(function(t){return'<tr><td>'+t.no+'</td><td>'+t.fromAcc+'</td><td>'+t.toAcc+'</td><td class="r bold">'+fmt(t.amount)+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="3">Total Transfers</td><td class="r">'+fmt(transferTxn.reduce(function(s,t){return s+(t.amount||0)},0))+'</td></tr></tbody></table>':'<div class="empty">No transfers</div>')+'</div>';
// Expenses section
html+='<div class="card"><div class="section-title">Expenses ('+de.length+')</div>'+(de.length?'<table class="tbl"><thead><tr><th>No</th><th>Head</th><th>Method</th><th class="r">Amount</th></tr></thead><tbody>'+de.map(function(e){return'<tr><td><span class="doc-link" onclick="previewDoc(\\x27expense\\x27,\\x27'+e._key+'\\x27)">'+(e.expenseNo||'')+'</span></td><td>'+e.headName+'</td><td>'+methodBadge(e.method)+'</td><td class="r bold">'+fmt(e.amount)+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="3">Total Expenses</td><td class="r">'+fmt(totalExpenses)+'</td></tr></tbody></table>':'<div class="empty">None</div>')+'</div>';
document.getElementById('daySections').innerHTML=html}
loadDay();
<\/script>`}function _a(){return`
<div class="page-header"><div><div class="page-title">Reports</div><div class="page-sub">Business analytics</div></div></div>
<div class="form-row" style="margin-bottom:14px"><div><label>Report Type</label><select id="rptType" onchange="toggleRptFilters();loadReport()">
<option value="date-sales">Date-wise Sales with P&amp;L</option>
<option value="product-sales">Product-wise Sales with P&amp;L</option>
<option value="customer-sales">Customer-wise Sales Summary</option>
<option value="customer-invoice-detail">Customer Invoice Detail</option>
<option value="sp-sales">Salesperson Performance</option>
<option value="sp-customer">SP &times; Customer Breakdown</option>
<option value="sp-product">SP &times; Product Breakdown</option>
<option value="date-purchases">Date-wise Purchases</option>
<option value="supplier-purchases">Supplier-wise Purchases</option>
<option value="product-purchases">Product-wise Purchases</option>
<option value="gross-profit">Date-wise Gross Profit</option>
<option value="customer-outstanding">Customer Outstanding</option>
</select></div><div><label>From</label><input type="date" id="rptFrom"></div><div><label>To</label><input type="date" id="rptTo"></div></div>
<div class="form-row" id="rptGroupFilter" style="margin-bottom:14px;display:none"><div><label>Product Group</label><select id="rptGroup"><option value="">All Groups</option></select></div><div><label>Product</label><select id="rptProduct"><option value="">All Products</option></select></div></div>
<div class="no-print" style="margin-bottom:12px;display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-primary" onclick="loadReport()"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">visibility</span> View Report</button><button class="btn btn-outline btn-sm" onclick="printContent('rptPrint','Report')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('rptTbl','Report')">Export XLS</button></div>
<div id="rptPlaceholder" class="rpt-placeholder"><span class="material-symbols-outlined">assessment</span><p>Select report type, date range, and click <b>View Report</b></p></div>
<div id="rptPrint" class="hidden"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="rptTbl"><thead id="rptHead"></thead><tbody id="rptBody"></tbody></table></div></div></div>
<script>
var rptSales=[],rptPurchases=[],rptProducts=[],rptParties=[],rptPayments=[],rptSP=[],rptGroups=[];
async function loadRptData(){var d=await Promise.all([loadList('sale:'),loadList('purchase:'),loadList('product:'),loadList('party:'),loadList('payment:'),loadList('salesperson:'),loadList('prodgroup:')]);rptSales=d[0];rptPurchases=d[1];rptProducts=d[2];rptParties=d[3];rptPayments=d[4];rptSP=d[5];rptGroups=d[6]||[];
document.getElementById('rptGroup').innerHTML='<option value="">All Groups</option>'+rptGroups.map(function(g){return'<option value="'+g.name+'">'+g.name+'</option>'}).join('');
document.getElementById('rptProduct').innerHTML='<option value="">All Products</option>'+rptProducts.map(function(p){return'<option value="'+p._key+'">'+p.name+'</option>'}).join('');
// Don't auto-load report - user will click View button
}
window.toggleRptFilters=function(){var type=document.getElementById('rptType').value;var showGroup=['product-sales','product-purchases','date-sales','gross-profit','customer-invoice-detail'].includes(type);document.getElementById('rptGroupFilter').style.display=showGroup?'grid':'none'}
window.loadReport=function(){var type=document.getElementById('rptType').value;var from=document.getElementById('rptFrom').value;var to=document.getElementById('rptTo').value;
var groupFilter=document.getElementById('rptGroup').value;var productFilter=document.getElementById('rptProduct').value;
// Helper to check if a sale/purchase contains filtered product/group
function matchesItemFilter(items){if(!groupFilter&&!productFilter)return true;return(items||[]).some(function(it){if(productFilter&&it.productId===productFilter)return true;if(groupFilter){var pr=rptProducts.find(function(p){return p._key===it.productId});if(pr&&pr.group===groupFilter)return true}return!productFilter&&!groupFilter})}
function filterItems(items){if(!groupFilter&&!productFilter)return items;return(items||[]).filter(function(it){if(productFilter)return it.productId===productFilter;if(groupFilter){var pr=rptProducts.find(function(p){return p._key===it.productId});return pr&&pr.group===groupFilter}return true})}
var sales=rptSales.filter(function(s){return(!from||s.date>=from)&&(!to||s.date<=to)&&matchesItemFilter(s.items)});
var purchases=rptPurchases.filter(function(p){return(!from||p.date>=from)&&(!to||p.date<=to)&&matchesItemFilter(p.items)});
var head='',body='',footer='';
if(type==='date-sales'){head='<tr><th>Date</th><th class="r">Invoices</th><th class="r">Sales</th><th class="r">Paid</th><th class="r">Due</th><th class="r">COGS</th><th class="r">Profit</th><th class="r">Margin%</th></tr>';var byDate={};sales.forEach(function(s){var d=s.date;if(!byDate[d])byDate[d]={sales:0,paid:0,cogs:0,count:0};byDate[d].sales+=s.total||0;byDate[d].paid+=s.paid||0;byDate[d].count++;(s.items||[]).forEach(function(it){var pr=rptProducts.find(function(p){return p._key===it.productId});byDate[d].cogs+=(pr?pr.purchasePrice||0:0)*it.qty})});var dates=Object.keys(byDate).sort();var tS=0,tP=0,tC=0,tCnt=0;body=dates.map(function(d){var r=byDate[d];var due=r.sales-r.paid;var profit=r.sales-r.cogs;var margin=r.sales?(profit/r.sales*100).toFixed(1):0;tS+=r.sales;tP+=r.paid;tC+=r.cogs;tCnt+=r.count;return'<tr><td>'+d+'</td><td class="r">'+r.count+'</td><td class="r">'+fmt(r.sales)+'</td><td class="r text-success">'+fmt(r.paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td><td class="r">'+fmt(r.cogs)+'</td><td class="r bold '+(profit>=0?'text-success':'text-danger')+'">'+fmt(profit)+'</td><td class="r">'+margin+'%</td></tr>'}).join('');var tProfit=tS-tC;footer='<tr style="background:var(--bg);font-weight:800"><td>TOTAL</td><td class="r">'+tCnt+'</td><td class="r">'+fmt(tS)+'</td><td class="r">'+fmt(tP)+'</td><td class="r">'+fmt(tS-tP)+'</td><td class="r">'+fmt(tC)+'</td><td class="r '+(tProfit>=0?'text-success':'text-danger')+'">'+fmt(tProfit)+'</td><td class="r">'+(tS?(tProfit/tS*100).toFixed(1):0)+'%</td></tr>'}
else if(type==='product-sales'){head='<tr><th>Product</th><th>Group</th><th class="r">Qty Sold</th><th class="r">Revenue</th><th class="r">COGS</th><th class="r">Profit</th><th class="r">Margin%</th></tr>';var byProd={};sales.forEach(function(s){filterItems(s.items).forEach(function(it){var k=it.productId||it.productName;var pr=rptProducts.find(function(p){return p._key===it.productId});if(!byProd[k])byProd[k]={name:it.productName,group:pr?pr.group||'':'',qty:0,rev:0,cogs:0};byProd[k].qty+=it.qty;byProd[k].rev+=it.amount;byProd[k].cogs+=(pr?pr.purchasePrice||0:0)*it.qty})});var tQ=0,tR=0,tCo=0;body=Object.values(byProd).sort(function(a,b){return b.rev-a.rev}).map(function(p){tQ+=p.qty;tR+=p.rev;tCo+=p.cogs;var margin=p.rev?((p.rev-p.cogs)/p.rev*100).toFixed(1):0;return'<tr><td class="bold">'+p.name+'</td><td>'+(p.group?'<span class="badge badge-info">'+p.group+'</span>':'-')+'</td><td class="r">'+p.qty+'</td><td class="r">'+fmt(p.rev)+'</td><td class="r">'+fmt(p.cogs)+'</td><td class="r bold '+(p.rev-p.cogs>=0?'text-success':'text-danger')+'">'+fmt(p.rev-p.cogs)+'</td><td class="r">'+margin+'%</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL</td><td class="r">'+tQ+'</td><td class="r">'+fmt(tR)+'</td><td class="r">'+fmt(tCo)+'</td><td class="r '+(tR-tCo>=0?'text-success':'text-danger')+'">'+fmt(tR-tCo)+'</td><td class="r">'+(tR?((tR-tCo)/tR*100).toFixed(1):0)+'%</td></tr>'}
else if(type==='customer-sales'){
// FIX: Only count paid from invoices (not separate receipt transactions to avoid double-counting)
head='<tr><th>Customer</th><th class="r">Invoices</th><th class="r">Sales</th><th class="r">Invoice Paid</th><th class="r">Receipts</th><th class="r">Total Paid</th><th class="r">Balance</th></tr>';var byCust={};sales.forEach(function(s){var n=s.customerName;if(!byCust[n])byCust[n]={sales:0,invPaid:0,rcptPaid:0,count:0};byCust[n].sales+=s.total||0;byCust[n].invPaid+=s.paid||0;byCust[n].count++});
// Add separate receipts (these are additional payments, NOT included in invoice paid)
rptPayments.filter(function(p){return p.type==='receipt'&&p.status==='done'&&(!from||p.date>=from)&&(!to||p.date<=to)}).forEach(function(p){if(byCust[p.party])byCust[p.party].rcptPaid+=p.amount||0});
var tSa=0,tIP=0,tRP=0,tCn=0;body=Object.entries(byCust).sort(function(a,b){return b[1].sales-a[1].sales}).map(function(e){var totalPaid=e[1].invPaid+e[1].rcptPaid;var out=Math.max(0,e[1].sales-totalPaid);tSa+=e[1].sales;tIP+=e[1].invPaid;tRP+=e[1].rcptPaid;tCn+=e[1].count;return'<tr><td class="bold">'+e[0]+'</td><td class="r">'+e[1].count+'</td><td class="r">'+fmt(e[1].sales)+'</td><td class="r text-success">'+fmt(e[1].invPaid)+'</td><td class="r text-info">'+fmt(e[1].rcptPaid)+'</td><td class="r text-success bold">'+fmt(totalPaid)+'</td><td class="r '+(out>0?'text-danger bold':'')+'">'+fmt(out)+'</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td>TOTAL</td><td class="r">'+tCn+'</td><td class="r">'+fmt(tSa)+'</td><td class="r">'+fmt(tIP)+'</td><td class="r">'+fmt(tRP)+'</td><td class="r">'+fmt(tIP+tRP)+'</td><td class="r text-danger">'+fmt(Math.max(0,tSa-tIP-tRP))+'</td></tr>'}
else if(type==='customer-invoice-detail'){
// New report: Customer Name + Invoice No + Sales + Receipts + Balance
head='<tr><th>Customer</th><th>Invoice#</th><th>Date</th><th class="r">Sale Total</th><th class="r">Invoice Paid</th><th class="r">Receipt Paid</th><th class="r">Balance</th></tr>';
var invRows=[];var tSale=0,tInvP=0,tRcpP=0;
sales.forEach(function(s){
  // Find receipts that explicitly reference this invoice
  var rcpts=rptPayments.filter(function(p){return p.type==='receipt'&&p.status==='done'&&p.party===s.customerName&&(p.billKeys||[]).indexOf(s._key)>=0});
  var rcptAmt=rcpts.reduce(function(a,r){return a+(r.amount||0)},0);
  var bal=(s.total||0)-(s.paid||0)-rcptAmt;
  tSale+=s.total||0;tInvP+=s.paid||0;tRcpP+=rcptAmt;
  invRows.push({cust:s.customerName,inv:s.invoiceNo,date:s.date,total:s.total||0,invPaid:s.paid||0,rcptPaid:rcptAmt,bal:Math.max(0,bal),key:s._key})
});
invRows.sort(function(a,b){return(b.date||'').localeCompare(a.date)});
body=invRows.map(function(r){return'<tr><td class="bold">'+r.cust+'</td><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+r.key+'\\x27)">'+r.inv+'</span></td><td>'+r.date+'</td><td class="r">'+fmt(r.total)+'</td><td class="r text-success">'+fmt(r.invPaid)+'</td><td class="r text-info">'+fmt(r.rcptPaid)+'</td><td class="r '+(r.bal>0?'text-danger bold':'')+'">'+fmt(r.bal)+'</td></tr>'}).join('');
footer='<tr style="background:var(--bg);font-weight:800"><td colspan="3">TOTAL ('+invRows.length+' invoices)</td><td class="r">'+fmt(tSale)+'</td><td class="r">'+fmt(tInvP)+'</td><td class="r">'+fmt(tRcpP)+'</td><td class="r text-danger">'+fmt(Math.max(0,tSale-tInvP-tRcpP))+'</td></tr>'}
else if(type==='sp-sales'){head='<tr><th>Salesperson</th><th class="r">Sales Count</th><th class="r">Revenue</th><th class="r">Paid</th><th class="r">Due</th></tr>';var bySP={};sales.forEach(function(s){var n=s.salespersonName||'Direct';if(!bySP[n])bySP[n]={count:0,rev:0,paid:0};bySP[n].count++;bySP[n].rev+=s.total||0;bySP[n].paid+=s.paid||0});var tCn2=0,tRv=0,tPd=0;body=Object.entries(bySP).sort(function(a,b){return b[1].rev-a[1].rev}).map(function(e){tCn2+=e[1].count;tRv+=e[1].rev;tPd+=e[1].paid;var due=e[1].rev-e[1].paid;return'<tr><td class="bold">'+e[0]+'</td><td class="r">'+e[1].count+'</td><td class="r bold">'+fmt(e[1].rev)+'</td><td class="r text-success">'+fmt(e[1].paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td>TOTAL</td><td class="r">'+tCn2+'</td><td class="r">'+fmt(tRv)+'</td><td class="r">'+fmt(tPd)+'</td><td class="r">'+fmt(tRv-tPd)+'</td></tr>'}
else if(type==='sp-customer'){head='<tr><th>Salesperson</th><th>Customer</th><th class="r">Sales</th><th class="r">Revenue</th><th class="r">Paid</th><th class="r">Due</th></tr>';var bySPC={};sales.forEach(function(s){var sp=s.salespersonName||'Direct';var cn=s.customerName||'Unknown';var k=sp+'|||'+cn;if(!bySPC[k])bySPC[k]={sp:sp,cust:cn,count:0,rev:0,paid:0};bySPC[k].count++;bySPC[k].rev+=s.total||0;bySPC[k].paid+=s.paid||0});var tCn3=0,tRv2=0,tPd2=0;body=Object.values(bySPC).sort(function(a,b){return a.sp.localeCompare(b.sp)||b.rev-a.rev}).map(function(r){tCn3+=r.count;tRv2+=r.rev;tPd2+=r.paid;var due=r.rev-r.paid;return'<tr><td class="bold">'+r.sp+'</td><td>'+r.cust+'</td><td class="r">'+r.count+'</td><td class="r bold">'+fmt(r.rev)+'</td><td class="r text-success">'+fmt(r.paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL</td><td class="r">'+tCn3+'</td><td class="r">'+fmt(tRv2)+'</td><td class="r">'+fmt(tPd2)+'</td><td class="r">'+fmt(tRv2-tPd2)+'</td></tr>'}
else if(type==='sp-product'){head='<tr><th>Salesperson</th><th>Product</th><th class="r">Qty</th><th class="r">Revenue</th></tr>';var bySPP={};sales.forEach(function(s){var sp=s.salespersonName||'Direct';(s.items||[]).forEach(function(it){var k=sp+'|||'+it.productName;if(!bySPP[k])bySPP[k]={sp:sp,prod:it.productName,qty:0,rev:0};bySPP[k].qty+=it.qty;bySPP[k].rev+=it.amount})});var tQ2=0,tRv3=0;body=Object.values(bySPP).sort(function(a,b){return a.sp.localeCompare(b.sp)||b.rev-a.rev}).map(function(r){tQ2+=r.qty;tRv3+=r.rev;return'<tr><td class="bold">'+r.sp+'</td><td>'+r.prod+'</td><td class="r">'+r.qty+'</td><td class="r bold">'+fmt(r.rev)+'</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL</td><td class="r">'+tQ2+'</td><td class="r">'+fmt(tRv3)+'</td></tr>'}
else if(type==='date-purchases'){head='<tr><th>Date</th><th class="r">Count</th><th class="r">Purchases</th><th class="r">Paid</th><th class="r">Due</th></tr>';var byDP={};purchases.forEach(function(p){if(!byDP[p.date])byDP[p.date]={total:0,paid:0,count:0};byDP[p.date].total+=p.total||0;byDP[p.date].paid+=p.paid||0;byDP[p.date].count++});var tDP=0,tDPp=0,tDPc=0;body=Object.keys(byDP).sort().map(function(d){tDP+=byDP[d].total;tDPp+=byDP[d].paid;tDPc+=byDP[d].count;var due=byDP[d].total-byDP[d].paid;return'<tr><td>'+d+'</td><td class="r">'+byDP[d].count+'</td><td class="r bold">'+fmt(byDP[d].total)+'</td><td class="r text-success">'+fmt(byDP[d].paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td>TOTAL</td><td class="r">'+tDPc+'</td><td class="r">'+fmt(tDP)+'</td><td class="r">'+fmt(tDPp)+'</td><td class="r">'+fmt(tDP-tDPp)+'</td></tr>'}
else if(type==='supplier-purchases'){head='<tr><th>Supplier</th><th class="r">Invoices</th><th class="r">Purchases</th><th class="r">Paid</th><th class="r">Due</th></tr>';var bySup={};purchases.forEach(function(p){var n=p.supplierName;if(!bySup[n])bySup[n]={total:0,paid:0,count:0};bySup[n].total+=p.total||0;bySup[n].paid+=p.paid||0;bySup[n].count++});rptPayments.filter(function(p){return p.type==='payment'&&p.status==='done'}).forEach(function(p){if(bySup[p.party])bySup[p.party].paid+=p.amount||0});var tSP=0,tSPp=0,tSPc=0;body=Object.entries(bySup).sort(function(a,b){return b[1].total-a[1].total}).map(function(e){var due=Math.max(0,e[1].total-e[1].paid);tSP+=e[1].total;tSPp+=e[1].paid;tSPc+=e[1].count;return'<tr><td class="bold">'+e[0]+'</td><td class="r">'+e[1].count+'</td><td class="r">'+fmt(e[1].total)+'</td><td class="r text-success">'+fmt(e[1].paid)+'</td><td class="r '+(due>0?'text-danger bold':'')+'">'+fmt(due)+'</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td>TOTAL</td><td class="r">'+tSPc+'</td><td class="r">'+fmt(tSP)+'</td><td class="r">'+fmt(tSPp)+'</td><td class="r">'+fmt(Math.max(0,tSP-tSPp))+'</td></tr>'}
else if(type==='product-purchases'){head='<tr><th>Product</th><th class="r">Qty</th><th class="r">Amount</th></tr>';var byPP={};purchases.forEach(function(p){(p.items||[]).forEach(function(it){var n=it.productName;if(!byPP[n])byPP[n]={qty:0,amt:0};byPP[n].qty+=it.qty;byPP[n].amt+=it.amount})});var tPQ=0,tPA=0;body=Object.entries(byPP).sort(function(a,b){return b[1].amt-a[1].amt}).map(function(e){tPQ+=e[1].qty;tPA+=e[1].amt;return'<tr><td class="bold">'+e[0]+'</td><td class="r">'+e[1].qty+'</td><td class="r bold">'+fmt(e[1].amt)+'</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td>TOTAL</td><td class="r">'+tPQ+'</td><td class="r">'+fmt(tPA)+'</td></tr>'}
else if(type==='gross-profit'){head='<tr><th>Date</th><th class="r">Sales</th><th class="r">COGS</th><th class="r">Gross Profit</th><th class="r">GP%</th></tr>';var byGP={};sales.forEach(function(s){var d=s.date;if(!byGP[d])byGP[d]={sales:0,cogs:0};byGP[d].sales+=s.total||0;(s.items||[]).forEach(function(it){var pr=rptProducts.find(function(p){return p._key===it.productId});byGP[d].cogs+=(pr?pr.purchasePrice||0:0)*it.qty})});var tGS=0,tGC=0;body=Object.keys(byGP).sort().map(function(d){var gp=byGP[d].sales-byGP[d].cogs;var margin=byGP[d].sales?(gp/byGP[d].sales*100).toFixed(1):0;tGS+=byGP[d].sales;tGC+=byGP[d].cogs;return'<tr><td>'+d+'</td><td class="r">'+fmt(byGP[d].sales)+'</td><td class="r">'+fmt(byGP[d].cogs)+'</td><td class="r bold '+(gp>=0?'text-success':'text-danger')+'">'+fmt(gp)+'</td><td class="r">'+margin+'%</td></tr>'}).join('');var tGP=tGS-tGC;footer='<tr style="background:var(--bg);font-weight:800"><td>TOTAL</td><td class="r">'+fmt(tGS)+'</td><td class="r">'+fmt(tGC)+'</td><td class="r '+(tGP>=0?'text-success':'text-danger')+'">'+fmt(tGP)+'</td><td class="r">'+(tGS?(tGP/tGS*100).toFixed(1):0)+'%</td></tr>'}
else if(type==='customer-outstanding'){
// FIX: Separate invoice-paid and receipt-paid to show clearly
head='<tr><th>Customer</th><th>Phone</th><th class="r">Sales</th><th class="r">Invoice Paid</th><th class="r">Receipts</th><th class="r">Outstanding</th></tr>';var byCO={};rptParties.filter(function(p){return p.type==='customer'}).forEach(function(c){var cs=rptSales.filter(function(s){return s.customerId===c._key});var totalS=cs.reduce(function(s,x){return s+(x.total||0)},0);var invPaid=cs.reduce(function(s,x){return s+(x.paid||0)},0);var rcptPaid=rptPayments.filter(function(p){return p.party===c.name&&p.type==='receipt'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);var out=Math.max(0,totalS-invPaid-rcptPaid);if(totalS>0)byCO[c.name]={phone:c.phone||'',sales:totalS,invPaid:invPaid,rcptPaid:rcptPaid,out:out}});var tOS=0,tOIP=0,tORP=0,tOO=0;body=Object.entries(byCO).sort(function(a,b){return b[1].out-a[1].out}).map(function(e){tOS+=e[1].sales;tOIP+=e[1].invPaid;tORP+=e[1].rcptPaid;tOO+=e[1].out;return'<tr><td class="bold">'+e[0]+'</td><td class="text-muted">'+e[1].phone+'</td><td class="r">'+fmt(e[1].sales)+'</td><td class="r text-success">'+fmt(e[1].invPaid)+'</td><td class="r text-info">'+fmt(e[1].rcptPaid)+'</td><td class="r '+(e[1].out>0?'text-danger bold':'')+'">'+fmt(e[1].out)+'</td></tr>'}).join('');footer='<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL</td><td class="r">'+fmt(tOS)+'</td><td class="r">'+fmt(tOIP)+'</td><td class="r">'+fmt(tORP)+'</td><td class="r text-danger">'+fmt(tOO)+'</td></tr>'}
document.getElementById('rptPlaceholder').classList.add('hidden');
document.getElementById('rptPrint').classList.remove('hidden');
document.getElementById('rptHead').innerHTML=head;document.getElementById('rptBody').innerHTML=(body||'<tr><td colspan="8" class="empty">No data for selected range</td></tr>')+footer}
loadRptData();
<\/script>`}function Da(){return`
<div class="page-header"><div><div class="page-title">Salesperson Management</div><div class="page-sub">Sales team CRUD</div></div><button class="btn btn-primary" onclick="openSPForm()"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add Salesperson</button></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Code</th><th>PIN</th><th>Phone</th><th>Status</th><th class="r">Sales</th><th class="r">Act</th></tr></thead><tbody id="spBody"></tbody></table></div></div>
<div class="modal-overlay" id="spModal"><div class="modal"><h3 id="spTitle">Add Salesperson</h3>
<input type="hidden" id="spEK">
<div class="form-group"><label>Name</label><input id="spName"></div>
<div class="form-row"><div><label>Code</label><input id="spCode" placeholder="e.g. SP01"></div><div><label>PIN (for portal login)</label><input id="spPin" placeholder="4 digits"></div></div>
<div class="form-row"><div><label>Phone</label><input id="spPhone"></div><div><label>Active</label><select id="spActive"><option value="true">Active</option><option value="false">Inactive</option></select></div></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('spModal')">Cancel</button><button class="btn btn-primary" onclick="saveSP()">Save</button></div>
</div></div>
<script>
var spPersons=[],spSales=[];
async function loadSP(){var d=await Promise.all([loadList('salesperson:'),loadList('sale:')]);spPersons=d[0];spSales=d[1];renderSP()}
function renderSP(){document.getElementById('spBody').innerHTML=!spPersons.length?'<tr><td colspan="7" class="empty">No salespersons</td></tr>':spPersons.map(function(s){var salesCount=spSales.filter(function(x){return x.salespersonId===s._key}).length;var salesTotal=spSales.filter(function(x){return x.salespersonId===s._key}).reduce(function(a,x){return a+(x.total||0)},0);return'<tr><td class="bold">'+s.name+'</td><td><span class="badge badge-info">'+s.code+'</span></td><td class="text-muted">'+s.pin+'</td><td>'+(s.phone||'')+'</td><td>'+(s.active!==false?'<span class="badge badge-success">Active</span>':'<span class="badge badge-danger">Inactive</span>')+'</td><td class="r bold">'+fmt(salesTotal)+' ('+salesCount+')</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editSP(\\x27'+s._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delSP(\\x27'+s._key+'\\x27)">Del</button></td></tr>'}).join('')}
window.openSPForm=function(){document.getElementById('spEK').value='';document.getElementById('spTitle').textContent='Add Salesperson';['spName','spCode','spPin','spPhone'].forEach(function(i){document.getElementById(i).value=''});document.getElementById('spActive').value='true';openModal('spModal')}
window.editSP=function(k){var s=spPersons.find(function(x){return x._key===k});if(!s)return;document.getElementById('spEK').value=k;document.getElementById('spTitle').textContent='Edit Salesperson';document.getElementById('spName').value=s.name;document.getElementById('spCode').value=s.code;document.getElementById('spPin').value=s.pin;document.getElementById('spPhone').value=s.phone||'';document.getElementById('spActive').value=s.active!==false?'true':'false';openModal('spModal')}
window.saveSP=async function(){var ek=document.getElementById('spEK').value;var n=document.getElementById('spName').value.trim();if(!n){showToast('Name is required','warning');return;}var d={name:n,code:document.getElementById('spCode').value.trim(),pin:document.getElementById('spPin').value.trim(),phone:document.getElementById('spPhone').value.trim(),active:document.getElementById('spActive').value==='true'};try{if(ek){await saveByKey(ek,d);showToast('Salesperson updated','success')}else{await saveItem('salesperson:',d);showToast('Salesperson added','success')}invalidateCache('salesperson:');closeModal('spModal');loadSP()}catch(e){showToast('Failed to save','error')}}
window.delSP=async function(k){if(!confirm('Delete?'))return;await deleteItem(k,false);invalidateCache('salesperson:');showToast('Salesperson deleted','success');loadSP()}
loadSP();
<\/script>`}function Oa(){return`
<div class="page-header"><div><div class="page-title">Orders</div><div class="page-sub">SP portal orders - approve, deny, convert</div></div></div>
<div class="tabs"><button class="tab active" onclick="switchOrdTab('pending',this)">Pending</button><button class="tab" onclick="switchOrdTab('approved',this)">Approved</button><button class="tab" onclick="switchOrdTab('denied',this)">Denied</button><button class="tab" onclick="switchOrdTab('converted',this)">Converted</button><button class="tab" onclick="switchOrdTab('all',this)">All</button></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Date</th><th>Order#</th><th>Customer</th><th>SP</th><th class="r">Total</th><th>Status</th><th class="r">Act</th></tr></thead><tbody id="ordBody"></tbody></table></div></div>
<script>
var ords=[],ordTab='pending';
async function loadOrd(){ords=await loadList('order:');renderOrd()}
window.switchOrdTab=function(t,el){ordTab=t;document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});el.classList.add('active');renderOrd()}
function renderOrd(){var fl=ordTab==='all'?ords:ords.filter(function(o){return o.status===ordTab});fl.sort(function(a,b){return(b.date||'').localeCompare(a.date)});
document.getElementById('ordBody').innerHTML=!fl.length?'<tr><td colspan="7" class="empty">No orders</td></tr>':fl.map(function(o){var statusBadge=o.status==='pending'?'badge-warning':o.status==='approved'?'badge-success':o.status==='denied'?'badge-danger':'badge-info';var acts='';if(o.status==='pending'){acts='<button class="btn btn-success btn-xs" onclick="approveOrd(\\x27'+o._key+'\\x27)">Approve</button> <button class="btn btn-danger btn-xs" onclick="denyOrd(\\x27'+o._key+'\\x27)">Deny</button>'}if(o.status==='approved'){acts='<button class="btn btn-primary btn-xs" onclick="convertOrd(\\x27'+o._key+'\\x27)">Convert to Invoice</button>'}return'<tr><td>'+o.date+'</td><td class="bold">'+o.orderNo+'</td><td>'+o.customerName+'</td><td class="text-muted">'+(o.spName||'')+'</td><td class="r bold">'+fmt(o.total)+'</td><td><span class="badge '+statusBadge+'">'+o.status+'</span></td><td class="r">'+acts+'</td></tr>'}).join('')}
window.approveOrd=async function(k){var o=ords.find(function(x){return x._key===k});if(!o)return;o.status='approved';await saveByKey(k,cleanForSave(o));invalidateCache('order:');showToast('Order approved','success');loadOrd()}
window.denyOrd=async function(k){var o=ords.find(function(x){return x._key===k});if(!o)return;o.status='denied';await saveByKey(k,cleanForSave(o));invalidateCache('order:');showToast('Order denied','info');loadOrd()}
window.convertOrd=async function(k){var o=ords.find(function(x){return x._key===k});if(!o)return;if(!confirm('Convert to sales invoice? Stock will be deducted.'))return;
var items=(o.items||[]).map(function(it){return{productId:it.productKey||it.productId||'',productName:it.productName,qty:it.qty,rate:it.rate,amount:it.amount||it.qty*it.rate}});
// Stock check before conversion
var prods=await loadList('product:');
var stockErrors=[];
for(var ii=0;ii<items.length;ii++){var pr=prods.find(function(x){return x._key===items[ii].productId});if(pr&&(pr.stock||0)<=0){stockErrors.push(pr.name+' (Stock: 0)')}else if(pr&&items[ii].qty>(pr.stock||0)){stockErrors.push(pr.name+' (Available: '+(pr.stock||0)+', Requested: '+items[ii].qty+')')}}
if(stockErrors.length){showToast('Cannot convert - Insufficient stock: '+stockErrors.join(', '),'error');return;}
var saleData={invoiceNo:txnNo('INV'),date:todayISO(),customerId:o.customerId||'',customerName:o.customerName,salespersonId:o.spId||'',salespersonName:o.spName||'',items:items,discount:0,discountType:'amount',extra:0,vat:0,vatType:'amount',ait:0,aitType:'amount',total:o.total,paid:0,method:'cash'};
await saveItem('sale:',saleData);
for(var ii2=0;ii2<items.length;ii2++){var pr2=prods.find(function(x){return x._key===items[ii2].productId});if(pr2){pr2.stock=Math.max(0,(pr2.stock||0)-items[ii2].qty);var c=Object.assign({},pr2);delete c._key;await saveByKey(pr2._key,c)}}
o.status='converted';o.convertedInvoice=saleData.invoiceNo;await saveByKey(k,cleanForSave(o));invalidateCache('order:');invalidateCache('sale:');invalidateCache('product:');showToast('Invoice created: '+saleData.invoiceNo+'. Stock deducted.','success');loadOrd()}
loadOrd();
<\/script>`}function Ra(){return`
<div class="page-header"><div><div class="page-title">Users & Access</div><div class="page-sub">Role-based access control</div></div><button class="btn btn-primary" onclick="openUserForm()"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add User</button></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Username</th><th>Role</th><th>Status</th><th class="r">Act</th></tr></thead><tbody id="userBody"></tbody></table></div></div>
<div class="card" style="margin-top:16px"><div class="section-title">Role Permissions</div>
<table class="tbl"><thead><tr><th>Role</th><th>Dashboard</th><th>Inventory</th><th>Parties</th><th>Purchases</th><th>Sales</th><th>Payments</th><th>Expenses</th><th>Reports</th><th>Admin</th></tr></thead><tbody>
<tr><td class="bold">Admin</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>
<tr><td class="bold">Manager</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>-</td></tr>
<tr><td class="bold">Entry</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td><td>-</td><td>-</td></tr>
<tr><td class="bold">Viewer</td><td>Y</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>Y</td><td>-</td></tr>
</tbody></table></div>
<div class="modal-overlay" id="userModal"><div class="modal"><h3 id="userTitle">Add User</h3>
<input type="hidden" id="userEK">
<div class="form-group"><label>Full Name</label><input id="userName"></div>
<div class="form-row"><div><label>Username</label><input id="userUname"></div><div><label>Password</label><input id="userPwd" type="password"></div></div>
<div class="form-row"><div><label>Role</label><select id="userRole"><option value="admin">Admin</option><option value="manager">Manager</option><option value="entry">Entry</option><option value="viewer">Viewer</option></select></div><div><label>Active</label><select id="userActive"><option value="true">Active</option><option value="false">Inactive</option></select></div></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('userModal')">Cancel</button><button class="btn btn-primary" onclick="saveUser()">Save</button></div>
</div></div>
<script>
var users=[];
async function loadUsers(){users=await loadList('user:');renderUsers()}
function renderUsers(){document.getElementById('userBody').innerHTML=!users.length?'<tr><td colspan="5" class="empty">No users. Using PIN login.</td></tr>':users.map(function(u){return'<tr><td class="bold">'+u.name+'</td><td>'+u.username+'</td><td><span class="badge badge-info">'+u.role+'</span></td><td>'+(u.active!==false?'<span class="badge badge-success">Active</span>':'<span class="badge badge-danger">Inactive</span>')+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editUser(\\x27'+u._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delUser(\\x27'+u._key+'\\x27)">Del</button></td></tr>'}).join('')}
window.openUserForm=function(){document.getElementById('userEK').value='';document.getElementById('userTitle').textContent='Add User';['userName','userUname','userPwd'].forEach(function(i){document.getElementById(i).value=''});document.getElementById('userRole').value='entry';document.getElementById('userActive').value='true';openModal('userModal')}
window.editUser=function(k){var u=users.find(function(x){return x._key===k});if(!u)return;document.getElementById('userEK').value=k;document.getElementById('userTitle').textContent='Edit User';document.getElementById('userName').value=u.name;document.getElementById('userUname').value=u.username;document.getElementById('userPwd').value=u.password||'';document.getElementById('userRole').value=u.role;document.getElementById('userActive').value=u.active!==false?'true':'false';openModal('userModal')}
window.saveUser=async function(){var ek=document.getElementById('userEK').value;var n=document.getElementById('userName').value.trim();var un=document.getElementById('userUname').value.trim();var pw=document.getElementById('userPwd').value;if(!n||!un||!pw){showToast('All fields are required','warning');return;}var d={name:n,username:un,password:pw,role:document.getElementById('userRole').value,active:document.getElementById('userActive').value==='true'};try{if(ek){await saveByKey(ek,d);showToast('User updated','success')}else{await saveItem('user:',d);showToast('User created','success')}invalidateCache('user:');closeModal('userModal');loadUsers()}catch(e){showToast('Failed to save user','error')}}
window.delUser=async function(k){if(!confirm('Delete user?'))return;await deleteItem(k,false);invalidateCache('user:');showToast('User deleted','success');loadUsers()}
loadUsers();
<\/script>`}function Ma(){return`
<div class="page-header"><div><div class="page-title">Admin</div><div class="page-sub">Settings, data & tools</div></div></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
<div class="card"><div class="section-title">Change PIN</div>
<div class="form-group"><label>Current PIN</label><input id="oldPin" type="password"></div>
<div class="form-group"><label>New PIN</label><input id="newPin" type="password"></div>
<button class="btn btn-primary" onclick="changePin()">Change PIN</button></div>
<div class="card"><div class="section-title">License Info</div><div id="licInfo">Loading...</div></div>
<div class="card"><div class="section-title">Export All Data</div><p class="text-muted" style="margin-bottom:8px;font-size:11px">Download complete backup as JSON</p><button class="btn btn-primary" onclick="exportAll()">Export</button></div>
<div class="card"><div class="section-title">Import Data</div><p class="text-muted" style="margin-bottom:8px;font-size:11px">Restore from JSON backup</p><input type="file" id="importFile" accept=".json" style="margin-bottom:8px"><button class="btn btn-warning" onclick="importAll()">Import</button></div>
<div class="card"><div class="section-title">KV Browser</div>
<div style="display:flex;gap:4px;margin-bottom:8px"><input id="kvPrefix" placeholder="Prefix (e.g. product:)"><button class="btn btn-outline btn-sm" onclick="browseKV()">Browse</button></div><div id="kvResults" style="max-height:300px;overflow:auto;font-size:11px"></div></div>
<div class="card"><div class="section-title">Purge Data</div><p class="text-muted" style="margin-bottom:8px;font-size:11px">Delete all data of a type</p>
<select id="purgeType" style="margin-bottom:8px"><option value="product:">Products</option><option value="party:">Parties</option><option value="purchase:">Purchases</option><option value="sale:">Sales</option><option value="payment:">Payments</option><option value="expense:">Expenses</option><option value="order:">Orders</option></select><button class="btn btn-danger" onclick="purgeData()">Purge</button></div>
</div>
<script>
(async function(){try{var li=await(await fetch('/api/license-info')).json();document.getElementById('licInfo').innerHTML='<div><b>Expiry:</b> '+li.expiry+'</div><div><b>Days Left:</b> '+li.days+'</div><div><b>Status:</b> <span class="badge '+(li.status==='Active'?'badge-success':'badge-danger')+'">'+li.status+'</span></div>'}catch(e){document.getElementById('licInfo').textContent='Error loading'}})();
window.changePin=async function(){try{await api('/api/change-pin',{oldPin:document.getElementById('oldPin').value,newPin:document.getElementById('newPin').value});showToast('PIN changed successfully','success');document.getElementById('oldPin').value='';document.getElementById('newPin').value=''}catch(e){showToast('Failed: '+e.message,'error')}}
window.exportAll=async function(){try{var data=await api('/api/export-all');var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='bizmanager-backup-'+todayISO()+'.json';a.click();showToast('Data exported successfully','success')}catch(e){showToast('Export failed','error')}}
window.importAll=async function(){var file=document.getElementById('importFile').files[0];if(!file)return alert('Select file');if(!confirm('This will merge with existing data. Continue?'))return;var text=await file.text();try{var data=JSON.parse(text);var result=await api('/api/import-all',data);invalidateCache();showToast('Imported '+result.count+' records successfully','success')}catch(e){showToast('Import failed: '+e.message,'error')}}
window.browseKV=async function(){var prefix=document.getElementById('kvPrefix').value;try{var keys=await api('/api/kv-keys',{prefix:prefix});document.getElementById('kvResults').innerHTML=keys.length?keys.map(function(k){return'<div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border)"><span style="word-break:break-all">'+k+'</span><div style="display:flex;gap:4px;flex-shrink:0"><button class="btn btn-outline btn-xs" onclick="viewKV(\\x27'+k+'\\x27)">View</button><button class="btn btn-danger btn-xs" onclick="deleteKV(\\x27'+k+'\\x27)">Del</button></div></div>'}).join(''):'<div class="empty">No keys</div>'}catch(e){alert(e.message)}}
window.viewKV=async function(k){try{var d=await api('/api/kv-get',{key:k});alert(JSON.stringify(d.value?JSON.parse(d.value):null,null,2))}catch(e){alert(e.message)}}
window.deleteKV=async function(k){if(!confirm('Delete '+k+'?'))return;try{await api('/api/kv-delete',{key:k});browseKV()}catch(e){alert(e.message)}}
window.purgeData=async function(){var prefix=document.getElementById('purgeType').value;if(!confirm('Delete ALL '+prefix+' data? This cannot be undone!'))return;try{var keys=await api('/api/kv-keys',{prefix:prefix});for(var i=0;i<keys.length;i++){await api('/api/kv-delete',{key:keys[i]})}alert('Purged '+keys.length+' records')}catch(e){alert(e.message)}}
<\/script>`}function ja(){return`
<div class="page-header"><div><div class="page-title">Modification Log</div><div class="page-sub">All edit, delete & create operations</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('mlPrint','Modification Log')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('mlTbl','ModLog')">Export XLS</button></div></div>
<div class="form-row" style="margin-bottom:14px"><div><label>Action</label><select id="mlAction" onchange="renderML()"><option value="">All Actions</option><option value="create">Create</option><option value="edit">Edit</option><option value="delete">Delete</option></select></div><div><label>Search</label><input id="mlSearch" placeholder="Search detail..." oninput="renderML()"></div><div><label>From</label><input type="date" id="mlFrom" onchange="renderML()"></div><div><label>To</label><input type="date" id="mlTo" onchange="renderML()"></div></div>
<div id="mlPrint"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="mlTbl"><thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Detail</th><th>Key</th></tr></thead><tbody id="mlBody"></tbody></table></div></div></div>
<script>
var mlLogs=[];
async function loadML(){mlLogs=await loadList('modlog:');renderML()}
window.renderML=function(){var af=document.getElementById('mlAction').value;var sq=(document.getElementById('mlSearch').value||'').trim().toLowerCase();var from=document.getElementById('mlFrom').value;var to=document.getElementById('mlTo').value;
var fl=mlLogs.filter(function(l){var d=(l.timestamp||'').slice(0,10);return(!af||l.action===af)&&(!sq||(l.detail||'').toLowerCase().includes(sq)||(l.key||'').toLowerCase().includes(sq)||(l.user||'').toLowerCase().includes(sq))&&(!from||d>=from)&&(!to||d<=to)});
fl.sort(function(a,b){return(b.timestamp||'').localeCompare(a.timestamp||'')});
document.getElementById('mlBody').innerHTML=!fl.length?'<tr><td colspan="5" class="empty">No modification logs</td></tr>':fl.map(function(l){var actionBadge=l.action==='delete'?'badge-danger':l.action==='edit'?'badge-warning':'badge-success';var ts=l.timestamp?new Date(l.timestamp).toLocaleString():'';return'<tr><td class="text-muted" style="font-size:11px;white-space:nowrap">'+ts+'</td><td class="bold">'+(l.user||'System')+'</td><td><span class="badge '+actionBadge+'">'+(l.action||'')+'</span></td><td>'+(l.detail||'')+'</td><td class="text-muted" style="font-size:10px;word-break:break-all">'+(l.key||'')+'</td></tr>'}).join('')}
loadML();
<\/script>`}const re=new Be,Ha=Object.assign({"/src/index.tsx":b});let Le=!1;for(const[,t]of Object.entries(Ha))t&&(re.all("*",e=>{let a;try{a=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,a)}),re.notFound(e=>{let a;try{a=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,a)}),Le=!0);if(!Le)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{re as default};
