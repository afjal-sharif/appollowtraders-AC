var Mt=Object.defineProperty;var Za=a=>{throw TypeError(a)};var At=(a,t,e)=>t in a?Mt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var g=(a,t,e)=>At(a,typeof t!="symbol"?t+"":t,e),Ja=(a,t,e)=>t.has(a)||Za("Cannot "+e);var o=(a,t,e)=>(Ja(a,t,"read from private field"),e?e.call(a):t.get(a)),v=(a,t,e)=>t.has(a)?Za("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e),m=(a,t,e,n)=>(Ja(a,t,"write to private field"),n?n.call(a,e):t.set(a,e),e),k=(a,t,e)=>(Ja(a,t,"access private method"),e);var at=(a,t,e,n)=>({set _(i){m(a,t,i,e)},get _(){return o(a,t,n)}});var tt=(a,t,e)=>(n,i)=>{let r=-1;return s(0);async function s(d){if(d<=r)throw new Error("next() called multiple times");r=d;let c,l=!1,p;if(a[d]?(p=a[d][0][0],n.req.routeIndex=d):p=d===a.length&&i||void 0,p)try{c=await p(n,()=>s(d+1))}catch(u){if(u instanceof Error&&t)n.error=u,c=await t(u,n),l=!0;else throw u}else n.finalized===!1&&e&&(c=await e(n));return c&&(n.finalized===!1||l)&&(n.res=c),n}},Kt=Symbol(),Lt=async(a,t=Object.create(null))=>{const{all:e=!1,dot:n=!1}=t,r=(a instanceof bt?a.raw.headers:a.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?_t(a,{all:e,dot:n}):{}};async function _t(a,t){const e=await a.formData();return e?Ot(e,t):{}}function Ot(a,t){const e=Object.create(null);return a.forEach((n,i)=>{t.all||i.endsWith("[]")?zt(e,i,n):e[i]=n}),t.dot&&Object.entries(e).forEach(([n,i])=>{n.includes(".")&&(Ft(e,n,i),delete e[n])}),e}var zt=(a,t,e)=>{a[t]!==void 0?Array.isArray(a[t])?a[t].push(e):a[t]=[a[t],e]:t.endsWith("[]")?a[t]=[e]:a[t]=e},Ft=(a,t,e)=>{if(/(?:^|\.)__proto__\./.test(t))return;let n=a;const i=t.split(".");i.forEach((r,s)=>{s===i.length-1?n[r]=e:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},ut=a=>{const t=a.split("/");return t[0]===""&&t.shift(),t},Ht=a=>{const{groups:t,path:e}=Gt(a),n=ut(e);return qt(n,t)},Gt=a=>{const t=[];return a=a.replace(/\{[^}]+\}/g,(e,n)=>{const i=`@${n}`;return t.push([i,e]),i}),{groups:t,path:a}},qt=(a,t)=>{for(let e=t.length-1;e>=0;e--){const[n]=t[e];for(let i=a.length-1;i>=0;i--)if(a[i].includes(n)){a[i]=a[i].replace(n,t[e][1]);break}}return a},Ka={},Jt=(a,t)=>{if(a==="*")return"*";const e=a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(e){const n=`${a}#${t}`;return Ka[n]||(e[2]?Ka[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,e[1],new RegExp(`^${e[2]}(?=/${t})`)]:[a,e[1],new RegExp(`^${e[2]}$`)]:Ka[n]=[a,e[1],!0]),Ka[n]}return null},Ya=(a,t)=>{try{return t(a)}catch{return a.replace(/(?:%[0-9A-Fa-f]{2})+/g,e=>{try{return t(e)}catch{return e}})}},Ut=a=>Ya(a,decodeURI),ht=a=>{const t=a.url,e=t.indexOf("/",t.indexOf(":")+4);let n=e;for(;n<t.length;n++){const i=t.charCodeAt(n);if(i===37){const r=t.indexOf("?",n),s=t.indexOf("#",n),d=r===-1?s===-1?void 0:s:s===-1?r:Math.min(r,s),c=t.slice(e,d);return Ut(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(i===63||i===35)break}return t.slice(e,n)},Vt=a=>{const t=ht(a);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},pa=(a,t,...e)=>(e.length&&(t=pa(t,...e)),`${(a==null?void 0:a[0])==="/"?"":"/"}${a}${t==="/"?"":`${(a==null?void 0:a.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),mt=a=>{if(a.charCodeAt(a.length-1)!==63||!a.includes(":"))return null;const t=a.split("/"),e=[];let n="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))n+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){e.length===0&&n===""?e.push("/"):e.push(n);const r=i.replace("?","");n+="/"+r,e.push(n)}else n+="/"+i}),e.filter((i,r,s)=>s.indexOf(i)===r)},Ua=a=>/[%+]/.test(a)?(a.indexOf("+")!==-1&&(a=a.replace(/\+/g," ")),a.indexOf("%")!==-1?Ya(a,vt):a):a,gt=(a,t,e)=>{let n;if(!e&&t&&!/[%+]/.test(t)){let s=a.indexOf("?",8);if(s===-1)return;for(a.startsWith(t,s+1)||(s=a.indexOf(`&${t}`,s+1));s!==-1;){const d=a.charCodeAt(s+t.length+1);if(d===61){const c=s+t.length+2,l=a.indexOf("&",c);return Ua(a.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";s=a.indexOf(`&${t}`,s+1)}if(n=/[%+]/.test(a),!n)return}const i={};n??(n=/[%+]/.test(a));let r=a.indexOf("?",8);for(;r!==-1;){const s=a.indexOf("&",r+1);let d=a.indexOf("=",r);d>s&&s!==-1&&(d=-1);let c=a.slice(r+1,d===-1?s===-1?void 0:s:d);if(n&&(c=Ua(c)),r=s,c==="")continue;let l;d===-1?l="":(l=a.slice(d+1,s===-1?void 0:s),n&&(l=Ua(l))),e?(i[c]&&Array.isArray(i[c])||(i[c]=[]),i[c].push(l)):i[c]??(i[c]=l)}return t?i[t]:i},Xt=gt,$t=(a,t)=>gt(a,t,!0),vt=decodeURIComponent,et=a=>Ya(a,vt),ma,E,G,yt,ft,Xa,J,st,bt=(st=class{constructor(a,t="/",e=[[]]){v(this,G);g(this,"raw");v(this,ma);v(this,E);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});v(this,J,a=>{const{bodyCache:t,raw:e}=this,n=t[a];if(n)return n;const i=Object.keys(t)[0];return i?t[i].then(r=>(i==="json"&&(r=JSON.stringify(r)),new Response(r)[a]())):t[a]=e[a]()});this.raw=a,this.path=t,m(this,E,e),m(this,ma,{})}param(a){return a?k(this,G,yt).call(this,a):k(this,G,ft).call(this)}query(a){return Xt(this.url,a)}queries(a){return $t(this.url,a)}header(a){if(a)return this.raw.headers.get(a)??void 0;const t={};return this.raw.headers.forEach((e,n)=>{t[n]=e}),t}async parseBody(a){return Lt(this,a)}json(){return o(this,J).call(this,"text").then(a=>JSON.parse(a))}text(){return o(this,J).call(this,"text")}arrayBuffer(){return o(this,J).call(this,"arrayBuffer")}blob(){return o(this,J).call(this,"blob")}formData(){return o(this,J).call(this,"formData")}addValidatedData(a,t){o(this,ma)[a]=t}valid(a){return o(this,ma)[a]}get url(){return this.raw.url}get method(){return this.raw.method}get[Kt](){return o(this,E)}get matchedRoutes(){return o(this,E)[0].map(([[,a]])=>a)}get routePath(){return o(this,E)[0].map(([[,a]])=>a)[this.routeIndex].path}},ma=new WeakMap,E=new WeakMap,G=new WeakSet,yt=function(a){const t=o(this,E)[0][this.routeIndex][1][a],e=k(this,G,Xa).call(this,t);return e&&/\%/.test(e)?et(e):e},ft=function(){const a={},t=Object.keys(o(this,E)[0][this.routeIndex][1]);for(const e of t){const n=k(this,G,Xa).call(this,o(this,E)[0][this.routeIndex][1][e]);n!==void 0&&(a[e]=/\%/.test(n)?et(n):n)}return a},Xa=function(a){return o(this,E)[1]?o(this,E)[1][a]:a},J=new WeakMap,st),Yt={Stringify:1},kt=async(a,t,e,n,i)=>{typeof a=="object"&&!(a instanceof String)&&(a instanceof Promise||(a=a.toString()),a instanceof Promise&&(a=await a));const r=a.callbacks;return r!=null&&r.length?(i?i[0]+=a:i=[a],Promise.all(r.map(d=>d({phase:t,buffer:i,context:n}))).then(d=>Promise.all(d.filter(Boolean).map(c=>kt(c,t,!1,n,i))).then(()=>i[0]))):Promise.resolve(a)},Qt="text/plain; charset=UTF-8",Va=(a,t)=>({"Content-Type":a,...t}),Ba=(a,t)=>new Response(a,t),Ia,Ta,O,ga,z,I,Ea,va,ba,aa,Na,Ra,U,ua,ot,Wt=(ot=class{constructor(a,t){v(this,U);v(this,Ia);v(this,Ta);g(this,"env",{});v(this,O);g(this,"finalized",!1);g(this,"error");v(this,ga);v(this,z);v(this,I);v(this,Ea);v(this,va);v(this,ba);v(this,aa);v(this,Na);v(this,Ra);g(this,"render",(...a)=>(o(this,va)??m(this,va,t=>this.html(t)),o(this,va).call(this,...a)));g(this,"setLayout",a=>m(this,Ea,a));g(this,"getLayout",()=>o(this,Ea));g(this,"setRenderer",a=>{m(this,va,a)});g(this,"header",(a,t,e)=>{this.finalized&&m(this,I,Ba(o(this,I).body,o(this,I)));const n=o(this,I)?o(this,I).headers:o(this,aa)??m(this,aa,new Headers);t===void 0?n.delete(a):e!=null&&e.append?n.append(a,t):n.set(a,t)});g(this,"status",a=>{m(this,ga,a)});g(this,"set",(a,t)=>{o(this,O)??m(this,O,new Map),o(this,O).set(a,t)});g(this,"get",a=>o(this,O)?o(this,O).get(a):void 0);g(this,"newResponse",(...a)=>k(this,U,ua).call(this,...a));g(this,"body",(a,t,e)=>k(this,U,ua).call(this,a,t,e));g(this,"text",(a,t,e)=>!o(this,aa)&&!o(this,ga)&&!t&&!e&&!this.finalized?new Response(a):k(this,U,ua).call(this,a,t,Va(Qt,e)));g(this,"json",(a,t,e)=>k(this,U,ua).call(this,JSON.stringify(a),t,Va("application/json",e)));g(this,"html",(a,t,e)=>{const n=i=>k(this,U,ua).call(this,i,t,Va("text/html; charset=UTF-8",e));return typeof a=="object"?kt(a,Yt.Stringify,!1,{}).then(n):n(a)});g(this,"redirect",(a,t)=>{const e=String(a);return this.header("Location",/[^\x00-\xFF]/.test(e)?encodeURI(e):e),this.newResponse(null,t??302)});g(this,"notFound",()=>(o(this,ba)??m(this,ba,()=>Ba()),o(this,ba).call(this,this)));m(this,Ia,a),t&&(m(this,z,t.executionCtx),this.env=t.env,m(this,ba,t.notFoundHandler),m(this,Ra,t.path),m(this,Na,t.matchResult))}get req(){return o(this,Ta)??m(this,Ta,new bt(o(this,Ia),o(this,Ra),o(this,Na))),o(this,Ta)}get event(){if(o(this,z)&&"respondWith"in o(this,z))return o(this,z);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,z))return o(this,z);throw Error("This context has no ExecutionContext")}get res(){return o(this,I)||m(this,I,Ba(null,{headers:o(this,aa)??m(this,aa,new Headers)}))}set res(a){if(o(this,I)&&a){a=Ba(a.body,a);for(const[t,e]of o(this,I).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=o(this,I).headers.getSetCookie();a.headers.delete("set-cookie");for(const i of n)a.headers.append("set-cookie",i)}else a.headers.set(t,e)}m(this,I,a),this.finalized=!0}get var(){return o(this,O)?Object.fromEntries(o(this,O)):{}}},Ia=new WeakMap,Ta=new WeakMap,O=new WeakMap,ga=new WeakMap,z=new WeakMap,I=new WeakMap,Ea=new WeakMap,va=new WeakMap,ba=new WeakMap,aa=new WeakMap,Na=new WeakMap,Ra=new WeakMap,U=new WeakSet,ua=function(a,t,e){const n=o(this,I)?new Headers(o(this,I).headers):o(this,aa)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[s,d]of r)s.toLowerCase()==="set-cookie"?n.append(s,d):n.set(s,d)}if(e)for(const[r,s]of Object.entries(e))if(typeof s=="string")n.set(r,s);else{n.delete(r);for(const d of s)n.append(r,d)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,ga);return Ba(a,{status:i,headers:n})},ot),C="ALL",Zt="all",ae=["get","post","put","delete","options","patch"],xt="Can not add a route since the matcher is already built.",St=class extends Error{},te="__COMPOSED_HANDLER",ee=a=>a.text("404 Not Found",404),nt=(a,t)=>{if("getResponse"in a){const e=a.getResponse();return t.newResponse(e.body,e)}return console.error(a),t.text("Internal Server Error",500)},R,P,wt,M,W,La,_a,ya,ne=(ya=class{constructor(t={}){v(this,P);g(this,"get");g(this,"post");g(this,"put");g(this,"delete");g(this,"options");g(this,"patch");g(this,"all");g(this,"on");g(this,"use");g(this,"router");g(this,"getPath");g(this,"_basePath","/");v(this,R,"/");g(this,"routes",[]);v(this,M,ee);g(this,"errorHandler",nt);g(this,"onError",t=>(this.errorHandler=t,this));g(this,"notFound",t=>(m(this,M,t),this));g(this,"fetch",(t,...e)=>k(this,P,_a).call(this,t,e[1],e[0],t.method));g(this,"request",(t,e,n,i)=>t instanceof Request?this.fetch(e?new Request(t,e):t,n,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${pa("/",t)}`,e),n,i)));g(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(k(this,P,_a).call(this,t.request,t,void 0,t.request.method))})});[...ae,Zt].forEach(r=>{this[r]=(s,...d)=>(typeof s=="string"?m(this,R,s):k(this,P,W).call(this,r,o(this,R),s),d.forEach(c=>{k(this,P,W).call(this,r,o(this,R),c)}),this)}),this.on=(r,s,...d)=>{for(const c of[s].flat()){m(this,R,c);for(const l of[r].flat())d.map(p=>{k(this,P,W).call(this,l.toUpperCase(),o(this,R),p)})}return this},this.use=(r,...s)=>(typeof r=="string"?m(this,R,r):(m(this,R,"*"),s.unshift(r)),s.forEach(d=>{k(this,P,W).call(this,C,o(this,R),d)}),this);const{strict:n,...i}=t;Object.assign(this,i),this.getPath=n??!0?t.getPath??ht:Vt}route(t,e){const n=this.basePath(t);return e.routes.map(i=>{var s;let r;e.errorHandler===nt?r=i.handler:(r=async(d,c)=>(await tt([],e.errorHandler)(d,()=>i.handler(d,c))).res,r[te]=i.handler),k(s=n,P,W).call(s,i.method,i.path,r)}),this}basePath(t){const e=k(this,P,wt).call(this);return e._basePath=pa(this._basePath,t),e}mount(t,e,n){let i,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?i=c=>c:i=n.replaceRequest));const s=r?c=>{const l=r(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};i||(i=(()=>{const c=pa(this._basePath,t),l=c==="/"?0:c.length;return p=>{const u=new URL(p.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,p)}})());const d=async(c,l)=>{const p=await e(i(c.req.raw),...s(c));if(p)return p;await l()};return k(this,P,W).call(this,C,pa(t,"*"),d),this}},R=new WeakMap,P=new WeakSet,wt=function(){const t=new ya({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,m(t,M,o(this,M)),t.routes=this.routes,t},M=new WeakMap,W=function(t,e,n){t=t.toUpperCase(),e=pa(this._basePath,e);const i={basePath:this._basePath,path:e,method:t,handler:n};this.router.add(t,e,[n,i]),this.routes.push(i)},La=function(t,e){if(t instanceof Error)return this.errorHandler(t,e);throw t},_a=function(t,e,n,i){if(i==="HEAD")return(async()=>new Response(null,await k(this,P,_a).call(this,t,e,n,"GET")))();const r=this.getPath(t,{env:n}),s=this.router.match(i,r),d=new Wt(t,{path:r,matchResult:s,env:n,executionCtx:e,notFoundHandler:o(this,M)});if(s[0].length===1){let l;try{l=s[0][0][0][0](d,async()=>{d.res=await o(this,M).call(this,d)})}catch(p){return k(this,P,La).call(this,p,d)}return l instanceof Promise?l.then(p=>p||(d.finalized?d.res:o(this,M).call(this,d))).catch(p=>k(this,P,La).call(this,p,d)):l??o(this,M).call(this,d)}const c=tt(s[0],this.errorHandler,o(this,M));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return k(this,P,La).call(this,l,d)}})()},ya),Bt=[];function re(a,t){const e=this.buildAllMatchers(),n=((i,r)=>{const s=e[i]||e[C],d=s[2][r];if(d)return d;const c=r.match(s[0]);if(!c)return[[],Bt];const l=c.indexOf("",1);return[s[1][l],c]});return this.match=n,n(a,t)}var za="[^/]+",Pa=".*",Da="(?:|/.*)",ha=Symbol(),ie=new Set(".\\+*[^]$()");function se(a,t){return a.length===1?t.length===1?a<t?-1:1:-1:t.length===1||a===Pa||a===Da?1:t===Pa||t===Da?-1:a===za?1:t===za?-1:a.length===t.length?a<t?-1:1:t.length-a.length}var ta,ea,A,ia,oe=(ia=class{constructor(){v(this,ta);v(this,ea);v(this,A,Object.create(null))}insert(t,e,n,i,r){if(t.length===0){if(o(this,ta)!==void 0)throw ha;if(r)return;m(this,ta,e);return}const[s,...d]=t,c=s==="*"?d.length===0?["","",Pa]:["","",za]:s==="/*"?["","",Da]:s.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const p=c[1];let u=c[2]||za;if(p&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ha;if(l=o(this,A)[u],!l){if(Object.keys(o(this,A)).some(y=>y!==Pa&&y!==Da))throw ha;if(r)return;l=o(this,A)[u]=new ia,p!==""&&m(l,ea,i.varIndex++)}!r&&p!==""&&n.push([p,o(l,ea)])}else if(l=o(this,A)[s],!l){if(Object.keys(o(this,A)).some(p=>p.length>1&&p!==Pa&&p!==Da))throw ha;if(r)return;l=o(this,A)[s]=new ia}l.insert(d,e,n,i,r)}buildRegExpStr(){const e=Object.keys(o(this,A)).sort(se).map(n=>{const i=o(this,A)[n];return(typeof o(i,ea)=="number"?`(${n})@${o(i,ea)}`:ie.has(n)?`\\${n}`:n)+i.buildRegExpStr()});return typeof o(this,ta)=="number"&&e.unshift(`#${o(this,ta)}`),e.length===0?"":e.length===1?e[0]:"(?:"+e.join("|")+")"}},ta=new WeakMap,ea=new WeakMap,A=new WeakMap,ia),Fa,Ma,lt,le=(lt=class{constructor(){v(this,Fa,{varIndex:0});v(this,Ma,new oe)}insert(a,t,e){const n=[],i=[];for(let s=0;;){let d=!1;if(a=a.replace(/\{[^}]+\}/g,c=>{const l=`@\\${s}`;return i[s]=[l,c],s++,d=!0,l}),!d)break}const r=a.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let s=i.length-1;s>=0;s--){const[d]=i[s];for(let c=r.length-1;c>=0;c--)if(r[c].indexOf(d)!==-1){r[c]=r[c].replace(d,i[s][1]);break}}return o(this,Ma).insert(r,t,n,o(this,Fa),e),n}buildRegExp(){let a=o(this,Ma).buildRegExpStr();if(a==="")return[/^$/,[],[]];let t=0;const e=[],n=[];return a=a.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,r,s)=>r!==void 0?(e[++t]=Number(r),"$()"):(s!==void 0&&(n[Number(s)]=++t),"")),[new RegExp(`^${a}`),e,n]}},Fa=new WeakMap,Ma=new WeakMap,lt),de=[/^$/,[],Object.create(null)],Oa=Object.create(null);function Ct(a){return Oa[a]??(Oa[a]=new RegExp(a==="*"?"":`^${a.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,e)=>e?`\\${e}`:"(?:|/.*)")}$`))}function ce(){Oa=Object.create(null)}function pe(a){var l;const t=new le,e=[];if(a.length===0)return de;const n=a.map(p=>[!/\*|\/:/.test(p[0]),...p]).sort(([p,u],[y,S])=>p?1:y?-1:u.length-S.length),i=Object.create(null);for(let p=0,u=-1,y=n.length;p<y;p++){const[S,w,T]=n[p];S?i[w]=[T.map(([K])=>[K,Object.create(null)]),Bt]:u++;let N;try{N=t.insert(w,u,S)}catch(K){throw K===ha?new St(w):K}S||(e[u]=T.map(([K,B])=>{const L=Object.create(null);for(B-=1;B>=0;B--){const[xa,Ga]=N[B];L[xa]=Ga}return[K,L]}))}const[r,s,d]=t.buildRegExp();for(let p=0,u=e.length;p<u;p++)for(let y=0,S=e[p].length;y<S;y++){const w=(l=e[p][y])==null?void 0:l[1];if(!w)continue;const T=Object.keys(w);for(let N=0,K=T.length;N<K;N++)w[T[N]]=d[w[T[N]]]}const c=[];for(const p in s)c[p]=e[s[p]];return[r,c,i]}function da(a,t){if(a){for(const e of Object.keys(a).sort((n,i)=>i.length-n.length))if(Ct(e).test(t))return[...a[e]]}}var V,X,Ha,Pt,dt,ue=(dt=class{constructor(){v(this,Ha);g(this,"name","RegExpRouter");v(this,V);v(this,X);g(this,"match",re);m(this,V,{[C]:Object.create(null)}),m(this,X,{[C]:Object.create(null)})}add(a,t,e){var d;const n=o(this,V),i=o(this,X);if(!n||!i)throw new Error(xt);n[a]||[n,i].forEach(c=>{c[a]=Object.create(null),Object.keys(c[C]).forEach(l=>{c[a][l]=[...c[C][l]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=Ct(t);a===C?Object.keys(n).forEach(l=>{var p;(p=n[l])[t]||(p[t]=da(n[l],t)||da(n[C],t)||[])}):(d=n[a])[t]||(d[t]=da(n[a],t)||da(n[C],t)||[]),Object.keys(n).forEach(l=>{(a===C||a===l)&&Object.keys(n[l]).forEach(p=>{c.test(p)&&n[l][p].push([e,r])})}),Object.keys(i).forEach(l=>{(a===C||a===l)&&Object.keys(i[l]).forEach(p=>c.test(p)&&i[l][p].push([e,r]))});return}const s=mt(t)||[t];for(let c=0,l=s.length;c<l;c++){const p=s[c];Object.keys(i).forEach(u=>{var y;(a===C||a===u)&&((y=i[u])[p]||(y[p]=[...da(n[u],p)||da(n[C],p)||[]]),i[u][p].push([e,r-l+c+1]))})}}buildAllMatchers(){const a=Object.create(null);return Object.keys(o(this,X)).concat(Object.keys(o(this,V))).forEach(t=>{a[t]||(a[t]=k(this,Ha,Pt).call(this,t))}),m(this,V,m(this,X,void 0)),ce(),a}},V=new WeakMap,X=new WeakMap,Ha=new WeakSet,Pt=function(a){const t=[];let e=a===C;return[o(this,V),o(this,X)].forEach(n=>{const i=n[a]?Object.keys(n[a]).map(r=>[r,n[a][r]]):[];i.length!==0?(e||(e=!0),t.push(...i)):a!==C&&t.push(...Object.keys(n[C]).map(r=>[r,n[C][r]]))}),e?pe(t):null},dt),$,F,ct,he=(ct=class{constructor(a){g(this,"name","SmartRouter");v(this,$,[]);v(this,F,[]);m(this,$,a.routers)}add(a,t,e){if(!o(this,F))throw new Error(xt);o(this,F).push([a,t,e])}match(a,t){if(!o(this,F))throw new Error("Fatal error");const e=o(this,$),n=o(this,F),i=e.length;let r=0,s;for(;r<i;r++){const d=e[r];try{for(let c=0,l=n.length;c<l;c++)d.add(...n[c]);s=d.match(a,t)}catch(c){if(c instanceof St)continue;throw c}this.match=d.match.bind(d),m(this,$,[d]),m(this,F,void 0);break}if(r===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,s}get activeRouter(){if(o(this,F)||o(this,$).length!==1)throw new Error("No active router has been determined yet.");return o(this,$)[0]}},$=new WeakMap,F=new WeakMap,ct),Ca=Object.create(null),me=a=>{for(const t in a)return!0;return!1},Y,j,na,fa,D,H,Z,ka,ge=(ka=class{constructor(t,e,n){v(this,H);v(this,Y);v(this,j);v(this,na);v(this,fa,0);v(this,D,Ca);if(m(this,j,n||Object.create(null)),m(this,Y,[]),t&&e){const i=Object.create(null);i[t]={handler:e,possibleKeys:[],score:0},m(this,Y,[i])}m(this,na,[])}insert(t,e,n){m(this,fa,++at(this,fa)._);let i=this;const r=Ht(e),s=[];for(let d=0,c=r.length;d<c;d++){const l=r[d],p=r[d+1],u=Jt(l,p),y=Array.isArray(u)?u[0]:l;if(y in o(i,j)){i=o(i,j)[y],u&&s.push(u[1]);continue}o(i,j)[y]=new ka,u&&(o(i,na).push(u),s.push(u[1])),i=o(i,j)[y]}return o(i,Y).push({[t]:{handler:n,possibleKeys:s.filter((d,c,l)=>l.indexOf(d)===c),score:o(this,fa)}}),i}search(t,e){var p;const n=[];m(this,D,Ca);let r=[this];const s=ut(e),d=[],c=s.length;let l=null;for(let u=0;u<c;u++){const y=s[u],S=u===c-1,w=[];for(let N=0,K=r.length;N<K;N++){const B=r[N],L=o(B,j)[y];L&&(m(L,D,o(B,D)),S?(o(L,j)["*"]&&k(this,H,Z).call(this,n,o(L,j)["*"],t,o(B,D)),k(this,H,Z).call(this,n,L,t,o(B,D))):w.push(L));for(let xa=0,Ga=o(B,na).length;xa<Ga;xa++){const Qa=o(B,na)[xa],q=o(B,D)===Ca?{}:{...o(B,D)};if(Qa==="*"){const oa=o(B,j)["*"];oa&&(k(this,H,Z).call(this,n,oa,t,o(B,D)),m(oa,D,q),w.push(oa));continue}const[Rt,Wa,Sa]=Qa;if(!y&&!(Sa instanceof RegExp))continue;const _=o(B,j)[Rt];if(Sa instanceof RegExp){if(l===null){l=new Array(c);let la=e[0]==="/"?1:0;for(let wa=0;wa<c;wa++)l[wa]=la,la+=s[wa].length+1}const oa=e.substring(l[u]),qa=Sa.exec(oa);if(qa){if(q[Wa]=qa[0],k(this,H,Z).call(this,n,_,t,o(B,D),q),me(o(_,j))){m(_,D,q);const la=((p=qa[0].match(/\//))==null?void 0:p.length)??0;(d[la]||(d[la]=[])).push(_)}continue}}(Sa===!0||Sa.test(y))&&(q[Wa]=y,S?(k(this,H,Z).call(this,n,_,t,q,o(B,D)),o(_,j)["*"]&&k(this,H,Z).call(this,n,o(_,j)["*"],t,q,o(B,D))):(m(_,D,q),w.push(_)))}}const T=d.shift();r=T?w.concat(T):w}return n.length>1&&n.sort((u,y)=>u.score-y.score),[n.map(({handler:u,params:y})=>[u,y])]}},Y=new WeakMap,j=new WeakMap,na=new WeakMap,fa=new WeakMap,D=new WeakMap,H=new WeakSet,Z=function(t,e,n,i,r){for(let s=0,d=o(e,Y).length;s<d;s++){const c=o(e,Y)[s],l=c[n]||c[C],p={};if(l!==void 0&&(l.params=Object.create(null),t.push(l),i!==Ca||r&&r!==Ca))for(let u=0,y=l.possibleKeys.length;u<y;u++){const S=l.possibleKeys[u],w=p[l.score];l.params[S]=r!=null&&r[S]&&!w?r[S]:i[S]??(r==null?void 0:r[S]),p[l.score]=!0}}},ka),ra,pt,ve=(pt=class{constructor(){g(this,"name","TrieRouter");v(this,ra);m(this,ra,new ge)}add(a,t,e){const n=mt(t);if(n){for(let i=0,r=n.length;i<r;i++)o(this,ra).insert(a,n[i],e);return}o(this,ra).insert(a,t,e)}match(a,t){return o(this,ra).search(a,t)}},ra=new WeakMap,pt),Dt=class extends ne{constructor(a={}){super(a),this.router=a.router??new he({routers:[new ue,new ve]})}};const h=new Dt;let jt="1234";const It="4321",Tt="2028-12-31";function Q(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function ca(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}async function sa(a,t){if(!a.DATA_STORE)return[];let e;const n=[];do{const s=await a.DATA_STORE.list({prefix:t,cursor:e,limit:1e3});n.push(...s.keys.map(d=>d.name)),e=s.list_complete?void 0:s.cursor}while(e);const i=await Promise.all(n.map(s=>a.DATA_STORE.get(s))),r=[];for(let s=0;s<n.length;s++)if(i[s])try{r.push({_key:n[s],...JSON.parse(i[s])})}catch{}return r}function b(a){return new Response(a,{headers:{"content-type":"text/html;charset=UTF-8","Cache-Control":"no-store, no-cache, must-revalidate, proxy-revalidate",Pragma:"no-cache",Expires:"0"}})}h.post("/login",async a=>{var s;const t=await a.req.formData(),e=t.get("pin"),n=await((s=a.env.DATA_STORE)==null?void 0:s.get("APP_PIN"))||jt,i=(t.get("username")||"").trim(),r=await sa(a.env,"user:");if(r.length>0&&i){const d=r.find(c=>c.username===i&&c.password===e&&c.active!==!1);if(d){const c=encodeURIComponent(JSON.stringify({auth:1,userId:d._key,username:d.username,role:d.role,name:d.name}));return new Response(null,{status:302,headers:{"Set-Cookie":`session=${c}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`,Location:"/","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}return b(ja("Invalid credentials",r.length>0))}if(e===n){const d=encodeURIComponent(JSON.stringify({auth:1,userId:"admin",username:"admin",role:"admin",name:"Administrator"}));return new Response(null,{status:302,headers:{"Set-Cookie":`session=${d}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`,Location:"/","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}return b(ja("Wrong PIN",r.length>0))});h.get("/logout",()=>new Response(null,{status:302,headers:{"Set-Cookie":"session=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict",Location:"/login","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache","Clear-Site-Data":'"cache"'}}));function f(a){const e=(a.req.header("Cookie")||"").match(/session=([^;]+)/);if(!e)return null;try{return JSON.parse(decodeURIComponent(e[1]))}catch{return null}}h.use("*",async(a,t)=>{const e=new URL(a.req.url).pathname;if(e==="/login"&&a.req.method==="GET"){const l=await sa(a.env,"user:");return b(ja("",l.length>0))}if(e==="/api/company-settings"&&a.req.method==="GET"){await t();return}if(!(new URL(a.req.url).searchParams.get("master")===It)){const l=new Date().toISOString().slice(0,10);if(l>Tt)return b(rt());if(a.env.DATA_STORE){const p=await a.env.DATA_STORE.get("APP_LICENSE");if(p&&l>p)return b(rt())}}if(e.startsWith("/sp-portal")){const p=(a.req.header("Cookie")||"").match(/sp_session=([^;]+)/);if(e==="/sp-portal/login"&&a.req.method==="GET"||!p&&e!=="/sp-portal/login")return b($a(""));await t();return}const r=f(a);if(!(r!=null&&r.auth)&&e!=="/login")return b(ja("",!1));const s={admin:[],manager:["/users","/admin"],entry:["/users","/admin","/reports","/profit-loss","/balance-sheet","/trial-balance","/stock","/receivable-payable","/salesperson","/expense-ledger","/approvals","/company-settings"],viewer:["/inventory","/parties","/purchases","/sales","/payments","/expenses","/orders","/users","/admin","/salesperson","/approvals","/company-settings"]},d=(r==null?void 0:r.role)||"admin";if((s[d]||[]).includes(e))return b(x(`<div class="card"><div class="empty" style="padding:40px"><h3>Access Denied</h3><p class="text-muted">You don't have permission to access this page.</p><a href="/" class="btn btn-primary" style="margin-top:12px">Go to Dashboard</a></div></div>`,"dashboard",r));await t()});h.get("/api/license-info",async a=>{const e=(a.env.DATA_STORE?await a.env.DATA_STORE.get("APP_LICENSE"):null)||Tt,n=Math.floor((new Date(e).getTime()-Date.now())/864e5);return a.json({expiry:e,days:n,status:n<0?"Expired":"Active"})});h.post("/api/set-license",async a=>{if(new URL(a.req.url).searchParams.get("master")!==It)return a.json({success:!1,error:"Unauthorized"},403);const e=await a.req.json();return a.env.DATA_STORE?(await a.env.DATA_STORE.put("APP_LICENSE",String((e==null?void 0:e.date)||"")),a.json({success:!0})):a.json({success:!1,error:"KV not configured"},500)});h.post("/api/list",async a=>{const t=await a.req.json();return a.json(await sa(a.env,(t==null?void 0:t.prefix)||""))});const Et=["product:","party:","sale:","purchase:","payment:","expense:","bank:","order:","salesperson:"];h.post("/api/save",async a=>{if(!a.env.DATA_STORE)return a.json({success:!1,error:"KV not configured"},500);const t=await a.req.json(),e=(t==null?void 0:t.prefix)||"",n=t==null?void 0:t.id,i=t==null?void 0:t.key,r=(t==null?void 0:t.data)||{},s=(t==null?void 0:t.logAction)||"",d=(t==null?void 0:t.logDetail)||"",c=(t==null?void 0:t.skipApproval)===!0;let l=i;l||(n?l=n.startsWith(e)?n:e+n:l=e+Q());const p=f(a),u=(p==null?void 0:p.role)==="entry",y=!!(i||n),S=Et.some(w=>e&&e===w||l&&l.startsWith(w));if(u&&y&&S&&!c){const w="approval:"+Q(),T=await a.env.DATA_STORE.get(l);return await a.env.DATA_STORE.put(w,JSON.stringify({type:"edit",targetKey:l,prefix:e,newData:r,oldData:T?JSON.parse(T):null,detail:d||"Edit: "+l,requestedBy:(p==null?void 0:p.name)||(p==null?void 0:p.username)||"Unknown",requestedAt:new Date().toISOString(),status:"pending"})),a.json({success:!0,key:l,pending:!0,message:"Your edit has been submitted for approval"})}if(await a.env.DATA_STORE.put(l,JSON.stringify(r)),s){const w="modlog:"+Q();await a.env.DATA_STORE.put(w,JSON.stringify({action:s,detail:d,key:l,prefix:e,user:(p==null?void 0:p.name)||(p==null?void 0:p.username)||"System",timestamp:new Date().toISOString()}))}return a.json({success:!0,key:l})});h.post("/api/get",async a=>{if(!a.env.DATA_STORE)return a.json(null);const{key:t}=await a.req.json(),e=await a.env.DATA_STORE.get(t);return a.json(e?JSON.parse(e):null)});h.post("/api/delete",async a=>{if(!a.env.DATA_STORE)return a.json({success:!1,error:"KV not configured"},500);const t=await a.req.json(),e=t==null?void 0:t.key,n=(t==null?void 0:t.logDetail)||"",i=(t==null?void 0:t.skipApproval)===!0;if(!e)return a.json({success:!1,error:"Key is required"},400);const r=f(a),s=(r==null?void 0:r.role)==="entry",d=Et.some(p=>e.startsWith(p));if(s&&d&&!i){const p=await a.env.DATA_STORE.get(e),u="approval:"+Q();return await a.env.DATA_STORE.put(u,JSON.stringify({type:"delete",targetKey:e,prefix:e.split(":")[0]+":",newData:null,oldData:p?JSON.parse(p):null,detail:n||"Delete: "+e,requestedBy:(r==null?void 0:r.name)||(r==null?void 0:r.username)||"Unknown",requestedAt:new Date().toISOString(),status:"pending"})),a.json({success:!0,pending:!0,message:"Your delete request has been submitted for approval"})}const c=await a.env.DATA_STORE.get(e);await a.env.DATA_STORE.delete(e);const l="modlog:"+Q();return await a.env.DATA_STORE.put(l,JSON.stringify({action:"delete",detail:n||"Deleted key: "+e,key:e,oldData:c?c.substring(0,500):"",user:(r==null?void 0:r.name)||(r==null?void 0:r.username)||"System",timestamp:new Date().toISOString()})),a.json({success:!0})});h.post("/api/approval-list",async a=>a.json(await sa(a.env,"approval:")));h.post("/api/approval-action",async a=>{if(!a.env.DATA_STORE)return a.json({success:!1,error:"KV not configured"},500);const t=f(a),e=(t==null?void 0:t.role)||"";if(e!=="admin"&&e!=="manager")return a.json({success:!1,error:"Only admin/manager can approve"},403);const{approvalKey:n,action:i}=await a.req.json();if(!n)return a.json({success:!1,error:"Approval key required"},400);const r=await a.env.DATA_STORE.get(n);if(!r)return a.json({success:!1,error:"Approval not found"},404);const s=JSON.parse(r);if(s.status!=="pending")return a.json({success:!1,error:"Already processed"},400);if(i==="approve"){if(s.type==="edit"&&s.targetKey&&s.newData){await a.env.DATA_STORE.put(s.targetKey,JSON.stringify(s.newData));const d="modlog:"+Q();await a.env.DATA_STORE.put(d,JSON.stringify({action:"edit",detail:"Approved edit by "+s.requestedBy+": "+s.detail,key:s.targetKey,prefix:s.prefix,user:(t==null?void 0:t.name)||(t==null?void 0:t.username)||"System",timestamp:new Date().toISOString()}))}else if(s.type==="delete"&&s.targetKey){await a.env.DATA_STORE.delete(s.targetKey);const d="modlog:"+Q();await a.env.DATA_STORE.put(d,JSON.stringify({action:"delete",detail:"Approved delete by "+s.requestedBy+": "+s.detail,key:s.targetKey,prefix:s.prefix,user:(t==null?void 0:t.name)||(t==null?void 0:t.username)||"System",timestamp:new Date().toISOString()}))}s.status="approved"}else s.status="rejected";return s.processedBy=(t==null?void 0:t.name)||(t==null?void 0:t.username)||"System",s.processedAt=new Date().toISOString(),await a.env.DATA_STORE.put(n,JSON.stringify(s)),a.json({success:!0,status:s.status})});h.get("/api/company-settings",async a=>{if(!a.env.DATA_STORE)return a.json({companyName:"My Company",companyAddress:"",companyPhone:"",companyEmail:"",companyWebsite:"",companyTagline:"",companyTIN:"",primaryColor:"#4f46e5",sidebarColor:"#1e1b4b"});const t=await a.env.DATA_STORE.get("COMPANY_SETTINGS");return t?a.json(JSON.parse(t)):a.json({companyName:"My Company",companyAddress:"",companyPhone:"",companyEmail:"",companyWebsite:"",companyTagline:"",companyTIN:"",primaryColor:"#4f46e5",sidebarColor:"#1e1b4b"})});h.post("/api/company-settings",async a=>{if(!a.env.DATA_STORE)return a.json({success:!1,error:"KV not configured"},500);const t=f(a);if((t==null?void 0:t.role)!=="admin")return a.json({success:!1,error:"Only admin can change company settings"},403);const e=await a.req.json();return await a.env.DATA_STORE.put("COMPANY_SETTINGS",JSON.stringify(e)),a.json({success:!0})});h.post("/api/export-all",async a=>{const t=["product:","party:","sale:","purchase:","payment:","expense:","exphead:","expsubhead:","bank:","cb:","user:","order:","salesperson:","creditlimit:","prodgroup:","modlog:","approval:","companysettings:"],e={};for(const n of t)e[n]=await sa(a.env,n);return a.json(e)});h.post("/api/import-all",async a=>{if(!a.env.DATA_STORE)return a.json({success:!1,error:"KV not configured"},500);const t=await a.req.json();let e=0;for(const[n,i]of Object.entries(t))if(Array.isArray(i))for(const r of i){const s=r._key||n+Q(),d={...r};delete d._key,await a.env.DATA_STORE.put(s,JSON.stringify(d)),e++}return a.json({success:!0,count:e})});h.post("/api/change-pin",async a=>{var i;const{oldPin:t,newPin:e}=await a.req.json(),n=await((i=a.env.DATA_STORE)==null?void 0:i.get("APP_PIN"))||jt;return t!==n?a.json({success:!1,error:"Wrong current PIN"}):!e||e.length<4?a.json({success:!1,error:"PIN must be at least 4 characters"}):(await a.env.DATA_STORE.put("APP_PIN",e),a.json({success:!0}))});h.post("/api/kv-keys",async a=>{const{prefix:t}=await a.req.json();if(!a.env.DATA_STORE)return a.json([]);const e=await a.env.DATA_STORE.list({prefix:t||"",limit:100});return a.json(e.keys.map(n=>n.name))});h.post("/api/kv-get",async a=>{const{key:t}=await a.req.json();if(!a.env.DATA_STORE)return a.json({value:null});const e=await a.env.DATA_STORE.get(t);return a.json({value:e})});h.post("/api/kv-delete",async a=>{const{key:t}=await a.req.json();return a.env.DATA_STORE?(await a.env.DATA_STORE.delete(t),a.json({success:!0})):a.json({success:!1})});h.post("/sp-portal/login",async a=>{const t=await a.req.formData(),e=t.get("code"),n=t.get("pin"),r=(await sa(a.env,"salesperson:")).find(s=>s.code===e&&s.pin===n&&s.active!==!1);if(r){const s=encodeURIComponent(JSON.stringify({spId:r._key,spName:r.name,spCode:r.code}));return new Response(null,{status:302,headers:{"Set-Cookie":`sp_session=${s}; Path=/; HttpOnly; SameSite=Strict`,Location:"/sp-portal"}})}return b($a("Invalid credentials"))});h.get("/sp-portal/logout",()=>new Response(null,{status:302,headers:{"Set-Cookie":"sp_session=; Path=/; HttpOnly; Max-Age=0",Location:"/sp-portal/login"}}));h.get("/",a=>b(x(ke(),"dashboard",f(a))));h.get("/inventory",a=>b(x(xe(),"inventory",f(a))));h.get("/stock-check",a=>b(x(Se(),"stockcheck",f(a))));h.get("/parties",a=>b(x(we(),"parties",f(a))));h.get("/purchases",a=>b(x(Be(),"purchases",f(a))));h.get("/sales",a=>b(x(Ce(),"sales",f(a))));h.get("/payments",a=>b(x(Pe(),"payments",f(a))));h.get("/expenses",a=>b(x(De(),"expenses",f(a))));h.get("/ledger",a=>b(x(je(),"ledger",f(a))));h.get("/expense-ledger",a=>b(x(Ie(),"expledger",f(a))));h.get("/profit-loss",a=>b(x(Te(),"profitloss",f(a))));h.get("/balance-sheet",a=>b(x(Ee(),"balancesheet",f(a))));h.get("/trial-balance",a=>b(x(Ne(),"trialbalance",f(a))));h.get("/stock",a=>b(x(Re(),"stock",f(a))));h.get("/receivable-payable",a=>b(x(Me(),"recpay",f(a))));h.get("/day-details",a=>b(x(Ae(),"daydetails",f(a))));h.get("/reports",a=>b(x(Ke(),"reports",f(a))));h.get("/salesperson",a=>b(x(Le(),"salesperson",f(a))));h.get("/orders",a=>b(x(_e(),"orders",f(a))));h.get("/users",a=>b(x(Oe(),"users",f(a))));h.get("/admin",a=>b(x(ze(),"admin",f(a))));h.get("/mod-log",a=>b(x(Fe(),"modlog",f(a))));h.get("/approvals",a=>b(x(He(),"approvals",f(a))));h.get("/company-settings",a=>b(x(Ge(),"companysettings",f(a))));h.get("/truck-fare-report",a=>b(x(ye(),"truckfarereport",f(a))));h.get("/truck-fare-settings",a=>b(x(be(),"truckfaresettings",f(a))));h.get("/sp-portal",a=>b(fe(a)));h.get("/login",async a=>{const t=await sa(a.env,"user:");return b(ja("",t.length>0))});function be(){return`
<div class="page-header"><div><div class="page-title">Truck Fare Settings</div><div class="page-sub">Configure max truck fare per Thana</div></div><button class="btn btn-primary" onclick="openAddTF()"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add Thana Fare</button></div>
<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input placeholder="Search thana..." oninput="filterTF(this.value)"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Thana</th><th>District</th><th>Division</th><th class="r">Max Fare (৳)</th><th class="r">Act</th></tr></thead><tbody id="tfBody"></tbody></table></div></div>
<div class="modal-overlay" id="tfModal"><div class="modal" style="max-width:500px"><h3 id="tfTitle">Add Thana Fare</h3>
<input type="hidden" id="tfEK">
<div class="form-group"><label>Thana</label><div class="sr-wrap"><input id="tfTh" placeholder="Type to search thana..." oninput="tfGeoFilter()" onfocus="tfGeoShow()" autocomplete="off"><div class="sr-list" id="tfThL"></div></div></div>
<div class="form-row"><div><label>District</label><input id="tfDs" readonly class="text-muted"></div><div><label>Division</label><input id="tfDv" readonly class="text-muted"></div></div>
<div class="form-group"><label>Max Truck Fare (৳)</label><input type="number" id="tfMax" placeholder="Enter max fare amount" step="any"></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('tfModal')">Cancel</button><button class="btn btn-primary" onclick="saveTF()">Save</button></div>
</div></div>
<div class="modal-overlay" id="tfImportModal"><div class="modal" style="max-width:600px"><h3>Import Thana Fares from Excel</h3>
<div style="margin-bottom:12px;padding:10px;background:var(--bg);border-radius:8px;font-size:12px"><b>Columns:</b> Thana, Max Fare<br>District and Division are auto-filled from BD geo data.</div>
<div style="margin-bottom:12px"><button class="btn btn-outline btn-sm" onclick="downloadTFTemplate()"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">download</span> Download Template</button></div>
<div class="form-group"><label>Select Excel File</label><input type="file" id="tfImportFile" accept=".xlsx,.xls,.csv"></div>
<div id="tfImportPreview" style="display:none;margin:12px 0;max-height:200px;overflow:auto"></div>
<div id="tfImportStatus" style="margin:8px 0"></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('tfImportModal')">Cancel</button><button class="btn btn-primary" id="tfImportBtn" onclick="doImportTF()" disabled>Import</button></div>
</div></div>
<style>.sr-wrap{position:relative}.sr-list{display:none;position:absolute;top:100%;left:0;right:0;max-height:180px;overflow-y:auto;background:var(--card);border:1px solid var(--border);border-radius:6px;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,.15)}.sr-list.active{display:block}.sr-list div{padding:6px 10px;cursor:pointer;font-size:12px;border-bottom:1px solid var(--border)}.sr-list div:hover,.sr-list div.hl{background:var(--accent-light);color:var(--accent)}</style>
<script>
var _tfList=[],_tfGeo=[["Dhaka", "Dhaka", "Demra"], ["Dhaka", "Dhaka", "Dhaka Cantt."], ["Dhaka", "Dhaka", "Dhamrai"], ["Dhaka", "Dhaka", "Dhanmondi"], ["Dhaka", "Dhaka", "Gulshan"], ["Dhaka", "Dhaka", "Jatrabari"], ["Dhaka", "Dhaka", "Joypara"], ["Dhaka", "Dhaka", "Keraniganj"], ["Dhaka", "Dhaka", "Khilgaon"], ["Dhaka", "Dhaka", "Khilkhet"], ["Dhaka", "Dhaka", "Lalbag"], ["Dhaka", "Dhaka", "Mirpur"], ["Dhaka", "Dhaka", "Mohammadpur"], ["Dhaka", "Dhaka", "Motijheel"], ["Dhaka", "Dhaka", "Nawabganj"], ["Dhaka", "Dhaka", "New market"], ["Dhaka", "Dhaka", "Palton"], ["Dhaka", "Dhaka", "Ramna"], ["Dhaka", "Dhaka", "Sabujbag"], ["Dhaka", "Dhaka", "Savar"], ["Dhaka", "Dhaka", "Sutrapur"], ["Dhaka", "Dhaka", "Tejgaon"], ["Dhaka", "Dhaka", "Tejgaon Industrial Area"], ["Dhaka", "Dhaka", "Uttara"], ["Dhaka", "Faridpur", "Alfadanga"], ["Dhaka", "Faridpur", "Bhanga"], ["Dhaka", "Faridpur", "Boalmari"], ["Dhaka", "Faridpur", "Charbhadrasan"], ["Dhaka", "Faridpur", "Faridpur Sadar"], ["Dhaka", "Faridpur", "Madukhali"], ["Dhaka", "Faridpur", "Nagarkanda"], ["Dhaka", "Faridpur", "Sadarpur"], ["Dhaka", "Faridpur", "Shriangan"], ["Dhaka", "Gazipur", "Gazipur Sadar"], ["Dhaka", "Gazipur", "Kaliakaar"], ["Dhaka", "Gazipur", "Kaliganj"], ["Dhaka", "Gazipur", "Kapashia"], ["Dhaka", "Gazipur", "Monnunagar"], ["Dhaka", "Gazipur", "Sreepur"], ["Dhaka", "Gazipur", "Sripur"], ["Dhaka", "Gopalganj", "Gopalganj Sadar"], ["Dhaka", "Gopalganj", "Kashiani"], ["Dhaka", "Gopalganj", "Kotalipara"], ["Dhaka", "Gopalganj", "Maksudpur"], ["Dhaka", "Gopalganj", "Tungipara"], ["Dhaka", "Jamalpur", "Dewangonj"], ["Dhaka", "Jamalpur", "Islampur"], ["Dhaka", "Jamalpur", "Jamalpur"], ["Dhaka", "Jamalpur", "Malandah"], ["Dhaka", "Jamalpur", "Mathargonj"], ["Dhaka", "Jamalpur", "Shorishabari"], ["Dhaka", "Kishoreganj", "Bajitpur"], ["Dhaka", "Kishoreganj", "Bhairob"], ["Dhaka", "Kishoreganj", "Hossenpur"], ["Dhaka", "Kishoreganj", "Itna"], ["Dhaka", "Kishoreganj", "Karimganj"], ["Dhaka", "Kishoreganj", "Katiadi"], ["Dhaka", "Kishoreganj", "Kishoreganj Sadar"], ["Dhaka", "Kishoreganj", "Kuliarchar"], ["Dhaka", "Kishoreganj", "Mithamoin"], ["Dhaka", "Kishoreganj", "Nikli"], ["Dhaka", "Kishoreganj", "Ostagram"], ["Dhaka", "Kishoreganj", "Pakundia"], ["Dhaka", "Kishoreganj", "Tarial"], ["Dhaka", "Madaripur", "Barhamganj"], ["Dhaka", "Madaripur", "kalkini"], ["Dhaka", "Madaripur", "Madaripur Sadar"], ["Dhaka", "Madaripur", "Rajoir"], ["Dhaka", "Manikganj", "Doulatpur"], ["Dhaka", "Manikganj", "Gheor"], ["Dhaka", "Manikganj", "Lechhraganj"], ["Dhaka", "Manikganj", "Manikganj Sadar"], ["Dhaka", "Manikganj", "Saturia"], ["Dhaka", "Manikganj", "Shibloya"], ["Dhaka", "Manikganj", "Singari"], ["Dhaka", "Munshiganj", "Gajaria"], ["Dhaka", "Munshiganj", "Lohajong"], ["Dhaka", "Munshiganj", "Munshiganj Sadar"], ["Dhaka", "Munshiganj", "Sirajdikhan"], ["Dhaka", "Munshiganj", "Srinagar"], ["Dhaka", "Munshiganj", "Tangibari"], ["Dhaka", "Mymensingh", "Bhaluka"], ["Dhaka", "Mymensingh", "Fulbaria"], ["Dhaka", "Mymensingh", "Gaforgaon"], ["Dhaka", "Mymensingh", "Gouripur"], ["Dhaka", "Mymensingh", "Haluaghat"], ["Dhaka", "Mymensingh", "Isshwargonj"], ["Dhaka", "Mymensingh", "Muktagachha"], ["Dhaka", "Mymensingh", "Mymensingh Sadar"], ["Dhaka", "Mymensingh", "Nandail"], ["Dhaka", "Mymensingh", "Phulpur"], ["Dhaka", "Mymensingh", "Trishal"], ["Dhaka", "Narayanganj", "Araihazar"], ["Dhaka", "Narayanganj", "Baidder Bazar"], ["Dhaka", "Narayanganj", "Bandar"], ["Dhaka", "Narayanganj", "Fatullah"], ["Dhaka", "Narayanganj", "Narayanganj Sadar"], ["Dhaka", "Narayanganj", "Rupganj"], ["Dhaka", "Narayanganj", "Siddirganj"], ["Dhaka", "Narshingdi", "Belabo"], ["Dhaka", "Narshingdi", "Monohordi"], ["Dhaka", "Narshingdi", "Narshingdi Sadar"], ["Dhaka", "Narshingdi", "Palash"], ["Dhaka", "Narshingdi", "Raypura"], ["Dhaka", "Narshingdi", "Shibpur"], ["Dhaka", "Netrakona", "Susung Durgapur"], ["Dhaka", "Netrakona", "Atpara"], ["Dhaka", "Netrakona", "Barhatta"], ["Dhaka", "Netrakona", "Dharmapasha"], ["Dhaka", "Netrakona", "Dhobaura"], ["Dhaka", "Netrakona", "Kalmakanda"], ["Dhaka", "Netrakona", "Kendua"], ["Dhaka", "Netrakona", "Khaliajuri"], ["Dhaka", "Netrakona", "Madan"], ["Dhaka", "Netrakona", "Moddhynagar"], ["Dhaka", "Netrakona", "Mohanganj"], ["Dhaka", "Netrakona", "Netrakona Sadar"], ["Dhaka", "Netrakona", "Purbadhola"], ["Dhaka", "Rajbari", "Baliakandi"], ["Dhaka", "Rajbari", "Pangsha"], ["Dhaka", "Rajbari", "Rajbari Sadar"], ["Dhaka", "Shariatpur", "Bhedorganj"], ["Dhaka", "Shariatpur", "Damudhya"], ["Dhaka", "Shariatpur", "Gosairhat"], ["Dhaka", "Shariatpur", "Jajira"], ["Dhaka", "Shariatpur", "Naria"], ["Dhaka", "Shariatpur", "Shariatpur Sadar"], ["Dhaka", "Sherpur", "Bakshigonj"], ["Dhaka", "Sherpur", "Jhinaigati"], ["Dhaka", "Sherpur", "Nakla"], ["Dhaka", "Sherpur", "Nalitabari"], ["Dhaka", "Sherpur", "Sherpur Shadar"], ["Dhaka", "Sherpur", "Shribardi"], ["Dhaka", "Tangail", "Basail"], ["Dhaka", "Tangail", "Bhuapur"], ["Dhaka", "Tangail", "Delduar"], ["Dhaka", "Tangail", "Ghatail"], ["Dhaka", "Tangail", "Gopalpur"], ["Dhaka", "Tangail", "Kalihati"], ["Dhaka", "Tangail", "Kashkaolia"], ["Dhaka", "Tangail", "Madhupur"], ["Dhaka", "Tangail", "Mirzapur"], ["Dhaka", "Tangail", "Nagarpur"], ["Dhaka", "Tangail", "Sakhipur"], ["Dhaka", "Tangail", "Tangail Sadar"], ["Chittagong", "Bandarban", "Alikadam"], ["Chittagong", "Bandarban", "Bandarban Sadar"], ["Chittagong", "Bandarban", "Naikhong"], ["Chittagong", "Bandarban", "Roanchhari"], ["Chittagong", "Bandarban", "Ruma"], ["Chittagong", "Bandarban", "Thanchi"], ["Chittagong", "Brahmanbaria", "Akhaura"], ["Chittagong", "Brahmanbaria", "Banchharampur"], ["Chittagong", "Brahmanbaria", "Brahamanbaria Sadar"], ["Chittagong", "Brahmanbaria", "Kasba"], ["Chittagong", "Brahmanbaria", "Nabinagar"], ["Chittagong", "Brahmanbaria", "Nasirnagar"], ["Chittagong", "Brahmanbaria", "Sarail"], ["Chittagong", "Chandpur", "Chandpur Sadar"], ["Chittagong", "Chandpur", "Faridganj"], ["Chittagong", "Chandpur", "Hajiganj"], ["Chittagong", "Chandpur", "Hayemchar"], ["Chittagong", "Chandpur", "Kachua"], ["Chittagong", "Chandpur", "Matlobganj"], ["Chittagong", "Chandpur", "Shahrasti"], ["Chittagong", "Chittagong", "Anawara"], ["Chittagong", "Chittagong", "Boalkhali"], ["Chittagong", "Chittagong", "Chittagong Sadar"], ["Chittagong", "Chittagong", "East Joara"], ["Chittagong", "Chittagong", "Fatikchhari"], ["Chittagong", "Chittagong", "Hathazari"], ["Chittagong", "Chittagong", "Jaldi"], ["Chittagong", "Chittagong", "Lohagara"], ["Chittagong", "Chittagong", "Mirsharai"], ["Chittagong", "Chittagong", "Patia Head Office"], ["Chittagong", "Chittagong", "Rangunia"], ["Chittagong", "Chittagong", "Rouzan"], ["Chittagong", "Chittagong", "Sandwip"], ["Chittagong", "Chittagong", "Satkania"], ["Chittagong", "Chittagong", "Sitakunda"], ["Chittagong", "Comilla", "Barura"], ["Chittagong", "Comilla", "Brahmanpara"], ["Chittagong", "Comilla", "Burichang"], ["Chittagong", "Comilla", "Chandina"], ["Chittagong", "Comilla", "Chouddagram"], ["Chittagong", "Comilla", "Comilla Sadar"], ["Chittagong", "Comilla", "Daudkandi"], ["Chittagong", "Comilla", "Davidhar"], ["Chittagong", "Comilla", "Homna"], ["Chittagong", "Comilla", "Laksam"], ["Chittagong", "Comilla", "Langalkot"], ["Chittagong", "Comilla", "Muradnagar"], ["Chittagong", "Cox’s Bazar", "Chiringga"], ["Chittagong", "Cox’s Bazar", "Coxs Bazar Sadar"], ["Chittagong", "Cox’s Bazar", "Gorakghat"], ["Chittagong", "Cox’s Bazar", "Kutubdia"], ["Chittagong", "Cox’s Bazar", "Ramu"], ["Chittagong", "Cox’s Bazar", "Teknaf"], ["Chittagong", "Cox’s Bazar", "Ukhia"], ["Chittagong", "Feni", "Chhagalnaia"], ["Chittagong", "Feni", "Dagonbhuia"], ["Chittagong", "Feni", "Feni Sadar"], ["Chittagong", "Feni", "Pashurampur"], ["Chittagong", "Feni", "Sonagazi"], ["Chittagong", "Khagrachari", "Diginala"], ["Chittagong", "Khagrachari", "Khagrachari Sadar"], ["Chittagong", "Khagrachari", "Laxmichhari"], ["Chittagong", "Khagrachari", "Mahalchhari"], ["Chittagong", "Khagrachari", "Manikchhari"], ["Chittagong", "Khagrachari", "Matiranga"], ["Chittagong", "Khagrachari", "Panchhari"], ["Chittagong", "Khagrachari", "Ramghar Head Office"], ["Chittagong", "Lakshmipur", "Char Alexgander"], ["Chittagong", "Lakshmipur", "Lakshimpur Sadar"], ["Chittagong", "Lakshmipur", "Ramganj"], ["Chittagong", "Lakshmipur", "Raypur"], ["Chittagong", "Noakhali", "Basurhat"], ["Chittagong", "Noakhali", "Begumganj"], ["Chittagong", "Noakhali", "Chatkhil"], ["Chittagong", "Noakhali", "Hatiya"], ["Chittagong", "Noakhali", "Noakhali Sadar"], ["Chittagong", "Noakhali", "Senbag"], ["Chittagong", "Rangamati", "Barakal"], ["Chittagong", "Rangamati", "Bilaichhari"], ["Chittagong", "Rangamati", "Jarachhari"], ["Chittagong", "Rangamati", "Kalampati"], ["Chittagong", "Rangamati", "kaptai"], ["Chittagong", "Rangamati", "Longachh"], ["Chittagong", "Rangamati", "Marishya"], ["Chittagong", "Rangamati", "Naniachhar"], ["Chittagong", "Rangamati", "Rajsthali"], ["Chittagong", "Rangamati", "Rangamati Sadar"], ["Khulna", "Bagherhat", "Bagerhat Sadar"], ["Khulna", "Bagherhat", "Chalna Ankorage"], ["Khulna", "Bagherhat", "Chitalmari"], ["Khulna", "Bagherhat", "Fakirhat"], ["Khulna", "Bagherhat", "Kachua UPO"], ["Khulna", "Bagherhat", "Mollahat"], ["Khulna", "Bagherhat", "Morelganj"], ["Khulna", "Bagherhat", "Rampal"], ["Khulna", "Bagherhat", "Rayenda"], ["Khulna", "Chuadanga", "Alamdanga"], ["Khulna", "Chuadanga", "Chuadanga Sadar"], ["Khulna", "Chuadanga", "Damurhuda"], ["Khulna", "Chuadanga", "Doulatganj"], ["Khulna", "Jessore", "Bagharpara"], ["Khulna", "Jessore", "Chaugachha"], ["Khulna", "Jessore", "Jessore Sadar"], ["Khulna", "Jessore", "Jhikargachha"], ["Khulna", "Jessore", "Keshabpur"], ["Khulna", "Jessore", "Monirampur"], ["Khulna", "Jessore", "Noapara"], ["Khulna", "Jessore", "Sarsa"], ["Khulna", "Jinaidaha", "Harinakundu"], ["Khulna", "Jinaidaha", "Jinaidaha Sadar"], ["Khulna", "Jinaidaha", "Kotchandpur"], ["Khulna", "Jinaidaha", "Maheshpur"], ["Khulna", "Jinaidaha", "Naldanga"], ["Khulna", "Jinaidaha", "Shailakupa"], ["Khulna", "Khulna", "Alaipur"], ["Khulna", "Khulna", "Batiaghat"], ["Khulna", "Khulna", "Chalna Bazar"], ["Khulna", "Khulna", "Digalia"], ["Khulna", "Khulna", "Khulna Sadar"], ["Khulna", "Khulna", "Madinabad"], ["Khulna", "Khulna", "Paikgachha"], ["Khulna", "Khulna", "Phultala"], ["Khulna", "Khulna", "Sajiara"], ["Khulna", "Khulna", "Terakhada"], ["Khulna", "Kustia", "Bheramara"], ["Khulna", "Kustia", "Janipur"], ["Khulna", "Kustia", "Kumarkhali"], ["Khulna", "Kustia", "Kustia Sadar"], ["Khulna", "Kustia", "Rafayetpur"], ["Khulna", "Magura", "Arpara"], ["Khulna", "Magura", "Magura Sadar"], ["Khulna", "Magura", "Shripur"], ["Khulna", "Meherpur", "Gangni"], ["Khulna", "Meherpur", "Meherpur Sadar"], ["Khulna", "Narail", "Kalia"], ["Khulna", "Narail", "Laxmipasha"], ["Khulna", "Narail", "Mohajan"], ["Khulna", "Narail", "Narail Sadar"], ["Khulna", "Satkhira", "Ashashuni"], ["Khulna", "Satkhira", "Debbhata"], ["Khulna", "Satkhira", "kalaroa"], ["Khulna", "Satkhira", "Kaliganj UPO"], ["Khulna", "Satkhira", "Nakipur"], ["Khulna", "Satkhira", "Satkhira Sadar"], ["Khulna", "Satkhira", "Taala"], ["Sylhet", "Hobiganj", "Azmireeganj"], ["Sylhet", "Hobiganj", "Bahubal"], ["Sylhet", "Hobiganj", "Baniachang"], ["Sylhet", "Hobiganj", "Chunarughat"], ["Sylhet", "Hobiganj", "Hobiganj Sadar"], ["Sylhet", "Hobiganj", "Kalauk"], ["Sylhet", "Hobiganj", "Madhabpur"], ["Sylhet", "Hobiganj", "Nabiganj"], ["Sylhet", "Moulvibazar", "Baralekha"], ["Sylhet", "Moulvibazar", "Kamalganj"], ["Sylhet", "Moulvibazar", "Kulaura"], ["Sylhet", "Moulvibazar", "Moulvibazar Sadar"], ["Sylhet", "Moulvibazar", "Rajnagar"], ["Sylhet", "Moulvibazar", "Srimangal"], ["Sylhet", "Sunamganj", "Bishamsarpur"], ["Sylhet", "Sunamganj", "Chhatak"], ["Sylhet", "Sunamganj", "Dhirai Chandpur"], ["Sylhet", "Sunamganj", "Duara bazar"], ["Sylhet", "Sunamganj", "Ghungiar"], ["Sylhet", "Sunamganj", "Jagnnathpur"], ["Sylhet", "Sunamganj", "Sachna"], ["Sylhet", "Sunamganj", "Sunamganj Sadar"], ["Sylhet", "Sunamganj", "Tahirpur"], ["Sylhet", "Sylhet", "Balaganj"], ["Sylhet", "Sylhet", "Bianibazar"], ["Sylhet", "Sylhet", "Bishwanath"], ["Sylhet", "Sylhet", "Fenchuganj"], ["Sylhet", "Sylhet", "Goainhat"], ["Sylhet", "Sylhet", "Gopalganj"], ["Sylhet", "Sylhet", "Jaintapur"], ["Sylhet", "Sylhet", "Jakiganj"], ["Sylhet", "Sylhet", "Kanaighat"], ["Sylhet", "Sylhet", "Kompanyganj"], ["Sylhet", "Sylhet", "Sylhet Sadar"], ["Barisal", "Barguna", "Amtali"], ["Barisal", "Barguna", "Bamna"], ["Barisal", "Barguna", "Barguna Sadar"], ["Barisal", "Barguna", "Betagi"], ["Barisal", "Barguna", "Patharghata"], ["Barisal", "Barishal", "Agailzhara"], ["Barisal", "Barishal", "Babuganj"], ["Barisal", "Barishal", "Barajalia"], ["Barisal", "Barishal", "Barishal Sadar"], ["Barisal", "Barishal", "Gouranadi"], ["Barisal", "Barishal", "Mahendiganj"], ["Barisal", "Barishal", "Muladi"], ["Barisal", "Barishal", "Sahebganj"], ["Barisal", "Barishal", "Uzirpur"], ["Barisal", "Bhola", "Bhola Sadar"], ["Barisal", "Bhola", "Borhanuddin UPO"], ["Barisal", "Bhola", "Charfashion"], ["Barisal", "Bhola", "Doulatkhan"], ["Barisal", "Bhola", "Hajirhat"], ["Barisal", "Bhola", "Hatshoshiganj"], ["Barisal", "Bhola", "Lalmohan UPO"], ["Barisal", "Jhalokathi", "Jhalokathi Sadar"], ["Barisal", "Jhalokathi", "Kathalia"], ["Barisal", "Jhalokathi", "Nalchhiti"], ["Barisal", "Jhalokathi", "Rajapur"], ["Barisal", "Patuakhali", "Bauphal"], ["Barisal", "Patuakhali", "Dashmina"], ["Barisal", "Patuakhali", "Galachipa"], ["Barisal", "Patuakhali", "Khepupara"], ["Barisal", "Patuakhali", "Patuakhali Sadar"], ["Barisal", "Patuakhali", "Subidkhali"], ["Barisal", "Pirojpur", "Banaripara"], ["Barisal", "Pirojpur", "Bhandaria"], ["Barisal", "Pirojpur", "kaukhali"], ["Barisal", "Pirojpur", "Mathbaria"], ["Barisal", "Pirojpur", "Nazirpur"], ["Barisal", "Pirojpur", "Pirojpur Sadar"], ["Barisal", "Pirojpur", "Swarupkathi"], ["Rajshahi", "Bogra", "Alamdighi"], ["Rajshahi", "Bogra", "Bogra Sadar"], ["Rajshahi", "Bogra", "Dhunat"], ["Rajshahi", "Bogra", "Dupchachia"], ["Rajshahi", "Bogra", "Gabtoli"], ["Rajshahi", "Bogra", "Kahalu"], ["Rajshahi", "Bogra", "Nandigram"], ["Rajshahi", "Bogra", "Sariakandi"], ["Rajshahi", "Bogra", "Sherpur"], ["Rajshahi", "Bogra", "Shibganj"], ["Rajshahi", "Bogra", "Sonatola"], ["Rajshahi", "Chapinawabganj", "Bholahat"], ["Rajshahi", "Chapinawabganj", "Chapinawabganj Sadar"], ["Rajshahi", "Chapinawabganj", "Nachol"], ["Rajshahi", "Chapinawabganj", "Rohanpur"], ["Rajshahi", "Chapinawabganj", "Shibganj U.P.O"], ["Rajshahi", "Joypurhat", "Akkelpur"], ["Rajshahi", "Joypurhat", "Joypurhat Sadar"], ["Rajshahi", "Joypurhat", "kalai"], ["Rajshahi", "Joypurhat", "Khetlal"], ["Rajshahi", "Joypurhat", "panchbibi"], ["Rajshahi", "Naogaon", "Ahsanganj"], ["Rajshahi", "Naogaon", "Badalgachhi"], ["Rajshahi", "Naogaon", "Dhamuirhat"], ["Rajshahi", "Naogaon", "Mahadebpur"], ["Rajshahi", "Naogaon", "Naogaon Sadar"], ["Rajshahi", "Naogaon", "Niamatpur"], ["Rajshahi", "Naogaon", "Nitpur"], ["Rajshahi", "Naogaon", "Patnitala"], ["Rajshahi", "Naogaon", "Prasadpur"], ["Rajshahi", "Naogaon", "Raninagar"], ["Rajshahi", "Naogaon", "Sapahar"], ["Rajshahi", "Natore", "Gopalpur UPO"], ["Rajshahi", "Natore", "Harua"], ["Rajshahi", "Natore", "Hatgurudaspur"], ["Rajshahi", "Natore", "Laxman"], ["Rajshahi", "Natore", "Natore Sadar"], ["Rajshahi", "Natore", "Singra"], ["Rajshahi", "Pabna", "Banwarinagar"], ["Rajshahi", "Pabna", "Bera"], ["Rajshahi", "Pabna", "Bhangura"], ["Rajshahi", "Pabna", "Chatmohar"], ["Rajshahi", "Pabna", "Debottar"], ["Rajshahi", "Pabna", "Ishwardi"], ["Rajshahi", "Pabna", "Pabna Sadar"], ["Rajshahi", "Pabna", "Sathia"], ["Rajshahi", "Pabna", "Sujanagar"], ["Rajshahi", "Rajshahi", "Bagha"], ["Rajshahi", "Rajshahi", "Bhabaniganj"], ["Rajshahi", "Rajshahi", "Charghat"], ["Rajshahi", "Rajshahi", "Durgapur"], ["Rajshahi", "Rajshahi", "Godagari"], ["Rajshahi", "Rajshahi", "Khod Mohanpur"], ["Rajshahi", "Rajshahi", "Lalitganj"], ["Rajshahi", "Rajshahi", "Putia"], ["Rajshahi", "Rajshahi", "Rajshahi Sadar"], ["Rajshahi", "Rajshahi", "Tanor"], ["Rajshahi", "Sirajganj", "Baiddya Jam Toil"], ["Rajshahi", "Sirajganj", "Belkuchi"], ["Rangpur", "Dinajpur", "Bangla Hili"], ["Rangpur", "Dinajpur", "Biral"], ["Rangpur", "Dinajpur", "Birampur"], ["Rangpur", "Dinajpur", "Birganj"], ["Rangpur", "Dinajpur", "Chrirbandar"], ["Rangpur", "Dinajpur", "Dinajpur Sadar"], ["Rangpur", "Dinajpur", "Khansama"], ["Rangpur", "Dinajpur", "Maharajganj"], ["Rangpur", "Dinajpur", "Nababganj"], ["Rangpur", "Dinajpur", "Osmanpur"], ["Rangpur", "Dinajpur", "Parbatipur"], ["Rangpur", "Dinajpur", "Phulbari"], ["Rangpur", "Dinajpur", "Setabganj"], ["Rangpur", "Gaibandha", "Bonarpara"], ["Rangpur", "Gaibandha", "Gaibandha Sadar"], ["Rangpur", "Gaibandha", "Gobindaganj"], ["Rangpur", "Gaibandha", "Palashbari"], ["Rangpur", "Gaibandha", "Phulchhari"], ["Rangpur", "Gaibandha", "Saadullapur"], ["Rangpur", "Gaibandha", "Sundarganj"], ["Rangpur", "Kurigram", "Bhurungamari"], ["Rangpur", "Kurigram", "Chilmari"], ["Rangpur", "Kurigram", "Kurigram Sadar"], ["Rangpur", "Kurigram", "Nageshwar"], ["Rangpur", "Kurigram", "Rajarhat"], ["Rangpur", "Kurigram", "Rajibpur"], ["Rangpur", "Kurigram", "Roumari"], ["Rangpur", "Kurigram", "Ulipur"], ["Rangpur", "Lalmonirhat", "Aditmari"], ["Rangpur", "Lalmonirhat", "Hatibandha"], ["Rangpur", "Lalmonirhat", "Lalmonirhat Sadar"], ["Rangpur", "Lalmonirhat", "Patgram"], ["Rangpur", "Lalmonirhat", "Tushbhandar"], ["Rangpur", "Nilphamari", "Dimla"], ["Rangpur", "Nilphamari", "Domar"], ["Rangpur", "Nilphamari", "Jaldhaka"], ["Rangpur", "Nilphamari", "Kishoriganj"], ["Rangpur", "Nilphamari", "Nilphamari Sadar"], ["Rangpur", "Nilphamari", "Syedpur"], ["Rangpur", "Panchagarh", "Boda"], ["Rangpur", "Panchagarh", "Chotto Dab"], ["Rangpur", "Panchagarh", "Dabiganj"], ["Rangpur", "Panchagarh", "Panchagra Sadar"], ["Rangpur", "Panchagarh", "Tetulia"], ["Rangpur", "Rangpur", "Badarganj"], ["Rangpur", "Rangpur", "Gangachara"], ["Rangpur", "Rangpur", "Kaunia"], ["Rangpur", "Rangpur", "Mithapukur"], ["Rangpur", "Rangpur", "Pirgachha"], ["Rangpur", "Rangpur", "Rangpur Sadar"], ["Rangpur", "Rangpur", "Taraganj"], ["Rangpur", "Thakurgaon", "Baliadangi"], ["Rangpur", "Thakurgaon", "Jibanpur"], ["Rangpur", "Thakurgaon", "Pirganj"], ["Rangpur", "Thakurgaon", "Rani Sankail"], ["Rangpur", "Thakurgaon", "Thakurgaon Sadar"]];
function tfThanas(){return _tfGeo}
async function loadTF(){_tfList=await loadList('thanafare:');renderTF()}
function renderTF(list){var l=list||_tfList;document.getElementById('tfBody').innerHTML=!l.length?'<tr><td colspan="5" class="empty">No thana fares configured</td></tr>':l.sort(function(a,b){return(a.thana||'').localeCompare(b.thana)}).map(function(t){return'<tr><td class="bold">'+t.thana+'</td><td class="text-muted">'+(t.district||'')+'</td><td class="text-muted">'+(t.division||'')+'</td><td class="r bold">'+fmt(t.maxFare||0)+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editTF(\\x27'+t._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delTF(\\x27'+t._key+'\\x27)">Del</button></td></tr>'}).join('')}
window.filterTF=function(q){var t=normalize(q);renderTF(_tfList.filter(function(f){return normalize(f.thana).includes(t)||normalize(f.district||'').includes(t)}))}
window.openAddTF=function(){document.getElementById('tfTitle').textContent='Add Thana Fare';document.getElementById('tfEK').value='';document.getElementById('tfTh').value='';document.getElementById('tfDs').value='';document.getElementById('tfDv').value='';document.getElementById('tfMax').value='';openModal('tfModal')}
window.tfGeoFilter=function(){var q=document.getElementById('tfTh').value.trim().toLowerCase();var items=tfThanas().filter(function(r){return r[2].toLowerCase().includes(q)}).slice(0,40);var el=document.getElementById('tfThL');el.innerHTML=items.map(function(r){return'<div onclick="tfSelectThana(this.textContent,\\x27'+r[1]+'\\x27,\\x27'+r[0]+'\\x27)">'+r[2]+' ('+r[1]+')</div>'}).join('');el.classList.add('active')}
window.tfGeoShow=function(){var el=document.getElementById('tfThL');if(!el.innerHTML)tfGeoFilter();el.classList.add('active')}
window.tfSelectThana=function(th,ds,dv){th=th.replace(/\\s*\\(.*\\)/,'');document.getElementById('tfTh').value=th;document.getElementById('tfDs').value=ds;document.getElementById('tfDv').value=dv;document.getElementById('tfThL').classList.remove('active')}
document.addEventListener('click',function(e){if(!e.target.closest('.sr-wrap'))document.querySelectorAll('.sr-list').forEach(function(x){x.classList.remove('active')})})
window.editTF=function(k){var t=_tfList.find(function(x){return x._key===k});if(!t)return;document.getElementById('tfTitle').textContent='Edit Thana Fare';document.getElementById('tfEK').value=k;document.getElementById('tfTh').value=t.thana||'';document.getElementById('tfDs').value=t.district||'';document.getElementById('tfDv').value=t.division||'';document.getElementById('tfMax').value=t.maxFare||'';openModal('tfModal')}
window.saveTF=async function(){var ek=document.getElementById('tfEK').value;var th=document.getElementById('tfTh').value.trim();var ds=document.getElementById('tfDs').value.trim();var dv=document.getElementById('tfDv').value.trim();var mx=+document.getElementById('tfMax').value||0;
if(!th){showToast('Please select a thana','warning');return}if(mx<=0){showToast('Please enter a valid max fare','warning');return}
var dup=_tfList.find(function(x){return x.thana===th&&(!ek||x._key!==ek)});if(dup){showToast('Thana "'+th+'" already has a fare configured','warning');return}
var data={thana:th,district:ds,division:dv,maxFare:mx};
try{if(ek){await saveByKey(ek,data,'edit','Updated thana fare: '+th)}else{await saveItem('thanafare:',data,null,'create','Added thana fare: '+th)}invalidateCache('thanafare:');closeModal('tfModal');loadTF();showToast(ek?'Thana fare updated':'Thana fare added','success')}catch(e){showToast('Failed: '+e.message,'error')}}
window.delTF=async function(k){if(!confirm('Delete this thana fare setting?'))return;var t=_tfList.find(function(x){return x._key===k});await deleteItem(k,false,'Deleted thana fare: '+(t?t.thana:''));invalidateCache('thanafare:');loadTF();showToast('Deleted','success')}
loadTF();
<\/script>`}function ye(){return`
<div class="page-header"><div><div class="page-title">Truck Fare Report</div><div class="page-sub">Thana-wise fare analysis with exceed tracking</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('tfrPrint','Truck Fare Report')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('tfrTbl','TruckFareReport')">Export XLS</button></div></div>
<div class="card" style="margin-bottom:14px;padding:14px 16px">
<div class="form-row" style="align-items:end"><div><label>From</label><input type="date" id="tfrFrom" onchange="renderTFR()"></div><div><label>To</label><input type="date" id="tfrTo" onchange="renderTFR()"></div><div><label>Thana</label><select id="tfrThana" onchange="renderTFR()"><option value="">All Thanas</option></select></div><div style="display:flex;gap:6px;flex-wrap:wrap;padding-top:16px"><button class="btn btn-outline btn-xs" onclick="setTFRRange('month')">This Month</button><button class="btn btn-outline btn-xs" onclick="setTFRRange('year')">This Year</button><button class="btn btn-outline btn-xs" onclick="setTFRRange('all')">All Time</button><label style="margin:0;display:inline;font-size:12px"><input type="checkbox" id="tfrOnlyExceed" onchange="renderTFR()"> Only Exceeded</label></div></div>
</div>
<div class="stats" id="tfrStats"></div>
<div id="tfrPrint">
<div class="section-title" style="margin:14px 0 8px">Thana-wise Summary</div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="tfrTbl"><thead><tr><th>Thana</th><th>District</th><th class="r">Total Trips</th><th class="r">Total Fare</th><th class="r">Max Fare Limit</th><th class="r">Exceeded Trips</th><th class="r">Exceed Amount</th><th class="r">Avg Fare</th></tr></thead><tbody id="tfrBody"></tbody></table></div></div>
<div class="section-title" style="margin:18px 0 8px">Detailed Transactions</div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="tfrDetailTbl"><thead><tr><th>Date</th><th>Invoice</th><th>Customer</th><th>Thana</th><th class="r">Fare</th><th class="r">Max Limit</th><th>Status</th></tr></thead><tbody id="tfrDetailBody"></tbody></table></div></div>
</div>
<script>
var tfrSales=[],tfrFares=[],tfrParties=[];
async function loadTFR(){var d=await Promise.all([loadList('sale:'),loadList('thanafare:'),loadList('party:')]);tfrSales=d[0];tfrFares=d[1];tfrParties=d[2];
var thanas={};tfrSales.filter(function(s){return s.truckFare>0}).forEach(function(s){var th=s.customerThana||'';if(th&&!thanas[th])thanas[th]=true});tfrFares.forEach(function(f){if(f.thana&&!thanas[f.thana])thanas[f.thana]=true});
document.getElementById('tfrThana').innerHTML='<option value="">All Thanas</option>'+Object.keys(thanas).sort().map(function(t){return'<option value="'+t+'">'+t+'</option>'}).join('');
renderTFR()}
window.setTFRRange=function(r){var today=new Date();var from='',to=todayISO();
if(r==='month'){from=today.getFullYear()+'-'+(today.getMonth()+1<10?'0':'')+(today.getMonth()+1)+'-01'}
else if(r==='year'){from=today.getFullYear()+'-01-01'}
else{from='';to=''}
document.getElementById('tfrFrom').value=from;document.getElementById('tfrTo').value=to;renderTFR()}
window.renderTFR=function(){var from=document.getElementById('tfrFrom').value;var to=document.getElementById('tfrTo').value;var thFilter=document.getElementById('tfrThana').value;var onlyExceed=document.getElementById('tfrOnlyExceed').checked;
var fareSales=tfrSales.filter(function(s){return s.truckFare>0&&(!from||s.date>=from)&&(!to||s.date<=to)});
// Build fare map for thanas
var fareMap={};tfrFares.forEach(function(f){fareMap[f.thana]=f.maxFare||0});
// Attach max fare to each sale for easy access
fareSales.forEach(function(s){var th=s.customerThana||'';s._maxFare=fareMap[th]||0;s._exceeded=s._maxFare>0&&s.truckFare>s._maxFare;s._exceedAmt=s._exceeded?(s.truckFare-s._maxFare):0});
if(thFilter)fareSales=fareSales.filter(function(s){return s.customerThana===thFilter});
if(onlyExceed)fareSales=fareSales.filter(function(s){return s._exceeded});
// Thana-wise aggregation
var byThana={};fareSales.forEach(function(s){var th=s.customerThana||'Unknown';if(!byThana[th])byThana[th]={thana:th,district:'',trips:0,totalFare:0,maxFare:0,exceeded:0,exceedAmt:0};byThana[th].trips++;byThana[th].totalFare+=s.truckFare;byThana[th].maxFare=s._maxFare;if(s._exceeded){byThana[th].exceeded++;byThana[th].exceedAmt+=s._exceedAmt}});
// Fill district from parties
tfrParties.forEach(function(p){if(p.thana&&byThana[p.thana]&&!byThana[p.thana].district)byThana[p.thana].district=p.district||''});
tfrFares.forEach(function(f){if(f.thana&&byThana[f.thana]&&!byThana[f.thana].district)byThana[f.thana].district=f.district||''});
var rows=Object.values(byThana).sort(function(a,b){return b.totalFare-a.totalFare});
var grandTrips=rows.reduce(function(s,r){return s+r.trips},0);
var grandFare=rows.reduce(function(s,r){return s+r.totalFare},0);
var grandExceeded=rows.reduce(function(s,r){return s+r.exceeded},0);
var grandExceedAmt=rows.reduce(function(s,r){return s+r.exceedAmt},0);
document.getElementById('tfrStats').innerHTML='<div class="stat"><div class="label">Total Trips</div><div class="value">'+grandTrips+'</div></div><div class="stat"><div class="label">Total Fare</div><div class="value text-info">'+fmt(grandFare)+'</div></div><div class="stat"><div class="label">Exceeded Trips</div><div class="value text-danger">'+grandExceeded+'</div></div><div class="stat"><div class="label">Total Exceed Amount</div><div class="value text-danger">'+fmt(grandExceedAmt)+'</div></div><div class="stat"><div class="label">Avg Fare/Trip</div><div class="value">'+fmt(grandTrips?Math.round(grandFare/grandTrips):0)+'</div></div>';
document.getElementById('tfrBody').innerHTML=!rows.length?'<tr><td colspan="8" class="empty">No truck fare data</td></tr>':rows.map(function(r){return'<tr><td class="bold">'+r.thana+'</td><td class="text-muted">'+r.district+'</td><td class="r">'+r.trips+'</td><td class="r bold">'+fmt(r.totalFare)+'</td><td class="r">'+(r.maxFare?fmt(r.maxFare):'<span class="text-muted">Not set</span>')+'</td><td class="r '+(r.exceeded?'text-danger':'text-success')+'">'+r.exceeded+'</td><td class="r '+(r.exceedAmt?'text-danger':'')+'">'+fmt(r.exceedAmt)+'</td><td class="r text-muted">'+fmt(Math.round(r.totalFare/r.trips))+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL</td><td class="r">'+grandTrips+'</td><td class="r">'+fmt(grandFare)+'</td><td></td><td class="r">'+grandExceeded+'</td><td class="r">'+fmt(grandExceedAmt)+'</td><td class="r">'+fmt(grandTrips?Math.round(grandFare/grandTrips):0)+'</td></tr>';
// Detail table
fareSales.sort(function(a,b){return(b.date||'').localeCompare(a.date)});
document.getElementById('tfrDetailBody').innerHTML=!fareSales.length?'<tr><td colspan="7" class="empty">No data</td></tr>':fareSales.map(function(s){var status=s._maxFare>0?(s._exceeded?'<span class="badge badge-danger">Exceeded (+'+fmt(s._exceedAmt)+')</span>':'<span class="badge badge-success">OK</span>'):'<span class="badge badge-cash">No limit</span>';return'<tr><td>'+s.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td>'+s.customerName+'</td><td>'+(s.customerThana||'-')+'</td><td class="r bold">'+fmt(s.truckFare)+'</td><td class="r">'+(s._maxFare?fmt(s._maxFare):'-')+'</td><td>'+status+'</td></tr>'}).join('')}
loadTFR();
<\/script>`}function Aa(){return`<style>
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
@media(max-width:900px){
.sidebar{transform:translateX(-100%);width:280px}
.sidebar.open{transform:translateX(0)}
.mobile-header{display:flex}
.main{margin-left:0;padding:64px 12px 20px}
/* Bottom Navigation Bar */
.bottom-nav{display:flex;position:fixed;bottom:0;left:0;right:0;background:var(--card);border-top:1px solid var(--border);z-index:40;padding:4px 0 env(safe-area-inset-bottom,4px);box-shadow:0 -2px 10px rgba(0,0,0,.06)}
.bottom-nav .bnav-item{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6px 2px;cursor:pointer;color:var(--muted);text-decoration:none;transition:color .2s;-webkit-tap-highlight-color:transparent;position:relative;border:none;background:none;font-family:inherit}
.bottom-nav .bnav-item .bnav-icon{font-size:22px;line-height:1;transition:all .2s}
.bottom-nav .bnav-item .bnav-label{font-size:9px;font-weight:600;margin-top:2px;letter-spacing:.2px;transition:all .2s}
.bottom-nav .bnav-item.active{color:var(--primary)}
.bottom-nav .bnav-item.active .bnav-icon{transform:translateY(-2px);font-variation-settings:'FILL' 1}
.bottom-nav .bnav-item.active::before{content:'';position:absolute;top:-1px;left:50%;transform:translateX(-50%);width:36px;height:3px;background:var(--primary);border-radius:0 0 3px 3px}
.bottom-nav .bnav-more{position:relative}
.bottom-nav .bnav-more-menu{display:none;position:absolute;bottom:100%;right:0;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:6px;min-width:180px;box-shadow:0 -8px 30px rgba(0,0,0,.12);margin-bottom:8px;max-height:60vh;overflow-y:auto}
.bottom-nav .bnav-more-menu.open{display:block}
.bottom-nav .bnav-more-menu a{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:8px;color:var(--text);font-size:13px;font-weight:500;text-decoration:none;transition:background .15s}
.bottom-nav .bnav-more-menu a:active{background:var(--primary-light)}
.bottom-nav .bnav-more-menu a .material-symbols-outlined{font-size:18px;color:var(--muted)}
.bottom-nav .bnav-more-menu .bnav-menu-group{font-size:9px;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);padding:8px 14px 2px;font-weight:700}
.main{padding-bottom:76px}
/* Mobile-specific enhancements */
.mobile-header{height:56px;padding:0 12px;gap:8px;background:var(--card);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.mobile-header .hamburger{width:40px;height:40px}
.mobile-header .mh-title{font-weight:700;font-size:15px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mobile-header .mh-actions{display:flex;gap:4px;align-items:center}
.main{padding-top:68px}
.page-header{gap:8px;margin-bottom:14px}
.page-title{font-size:18px}
.page-sub{font-size:11px}
/* Mobile cards */
.card{padding:14px;border-radius:10px}
.stat .value,.summary-card .value{font-size:16px}
.stat .label,.summary-card .label{font-size:9px}
.stat,.summary-card{padding:10px 12px;border-radius:10px}
.stats,.summary-grid{gap:8px;grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}
/* Mobile forms */
input,select,textarea{padding:11px 14px;font-size:14px;border-radius:10px}
label{font-size:9px;margin-bottom:3px}
.form-row{gap:8px;margin-bottom:8px}
.form-group{margin-bottom:8px}
/* Mobile buttons */
.btn{padding:10px 16px;font-size:13px;border-radius:10px;min-height:42px}
.btn-sm{padding:7px 12px;font-size:12px;border-radius:8px;min-height:36px}
.btn-xs{padding:5px 10px;font-size:11px;border-radius:6px;min-height:32px}
/* Mobile tabs */
.tabs{width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:4px;gap:2px;flex-wrap:nowrap}
.tabs::-webkit-scrollbar{display:none}
.tab{padding:8px 14px;font-size:12px;white-space:nowrap;flex-shrink:0}
/* Mobile modals - fullscreen drawer */
.modal-overlay{padding:0;align-items:flex-end}
.modal{border-radius:20px 20px 0 0;padding:20px 16px;max-height:92vh;max-width:100%;width:100%;animation:slideUp .3s ease}
.modal h3{font-size:15px;margin-bottom:12px}
.modal-lg,.modal-xl{max-width:100%}
@keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
/* Modal drag handle */
.modal::before{content:'';display:block;width:36px;height:4px;background:var(--border-dark);border-radius:2px;margin:0 auto 14px}
/* Mobile table enhancements */
.table-wrap{max-height:60vh;border-radius:8px}
.tbl td{padding:6px 10px;font-size:12px}
/* Mobile search */
.search-wrap{max-width:100%}
.search-wrap input{padding:12px 12px 12px 38px;font-size:14px;border-radius:10px}
/* Mobile date nav */
.date-nav{flex-wrap:wrap;gap:4px}
/* Mobile sidebar adjustments */
.sidebar{width:280px;padding-top:env(safe-area-inset-top,0)}
.sidebar .logo{padding:16px}
.sidebar nav a{padding:12px 16px;font-size:13px;margin-bottom:2px}
.sidebar nav a .nav-icon{font-size:18px}
.sidebar nav .nav-group{padding:14px 16px 6px;font-size:9px}
/* Touch feedback */
.btn:active,.tab:active,.bnav-item:active{opacity:.7}
.tbl tr:active td{background:var(--primary-light)}
/* Safe area insets */
.mobile-header{padding-top:env(safe-area-inset-top,0);height:calc(56px + env(safe-area-inset-top,0))}
.main{padding-top:calc(68px + env(safe-area-inset-top,0))}
/* Grid improvements for mobile */
#daySections{grid-template-columns:1fr !important}
.pl-row{padding:5px 12px;font-size:12px}
/* Method toggle mobile */
.method-toggle{gap:4px}
.method-btn{padding:10px;font-size:13px}
/* Swipe indicator */
.sidebar::after{content:'';position:absolute;right:-20px;top:50%;transform:translateY(-50%);width:4px;height:40px;background:rgba(255,255,255,.3);border-radius:2px;opacity:0;transition:opacity .3s}
.sidebar.open::after{opacity:1}
/* FAB */
.fab{display:none;position:fixed;bottom:calc(68px + env(safe-area-inset-bottom,4px));right:16px;width:52px;height:52px;border-radius:50%;background:var(--primary);color:#fff;border:none;box-shadow:0 4px 14px rgba(79,70,229,.35);z-index:35;cursor:pointer;align-items:center;justify-content:center;transition:all .2s;-webkit-tap-highlight-color:transparent}
.fab .material-symbols-outlined{font-size:24px}
.fab:active{transform:scale(.92)}
.page-has-fab .fab{display:flex}
/* Mobile toast */
.toast-container{top:auto;bottom:calc(80px + env(safe-area-inset-bottom,4px));right:12px;left:12px}
.toast{min-width:auto;max-width:100%;border-radius:12px;font-size:12px;padding:10px 14px}
/* Landscape improvements */
@media(max-height:500px){.bottom-nav .bnav-item{padding:3px 2px}.bottom-nav .bnav-icon{font-size:20px}.bottom-nav .bnav-label{font-size:8px;margin-top:1px}.main{padding-bottom:60px}}
}
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
@media print{.sidebar,.mobile-header,.overlay,.no-print,.btn:not(.print-btn),.bottom-nav,.fab{display:none !important}.main{margin-left:0 !important;padding:0 !important}.card{border:none !important;box-shadow:none !important;page-break-inside:avoid}.led-sale td{background:#eef2ff !important}.led-purchase td{background:#fffbeb !important}.led-receipt td,.led-payment td{background:#ecfdf5 !important}}
@media(max-width:600px){.tbl thead{display:none}.tbl tr{display:block;border-bottom:2px solid var(--border);margin-bottom:8px;padding:6px 0;border-radius:8px;background:var(--card)}.tbl td{display:flex;justify-content:space-between;padding:6px 12px;border:none;font-size:12px}.tbl td::before{content:attr(data-label);font-weight:700;color:var(--muted);font-size:10px;text-transform:uppercase;letter-spacing:.3px;flex-shrink:0;margin-right:8px}.tbl td:first-child{padding-top:10px}.tbl td:last-child{padding-bottom:10px}.stats,.summary-grid{grid-template-columns:1fr 1fr}}
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
/* Tablet breakpoint */
@media(min-width:601px) and (max-width:900px){
.stats,.summary-grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}
.form-row{grid-template-columns:1fr 1fr}
.modal{max-width:90%;border-radius:16px;max-height:85vh}
.modal::before{display:none}
.modal-overlay{align-items:center;padding:20px}
.tbl thead{display:table-header-group}
.tbl tr{display:table-row}
.tbl td{display:table-cell}
.bottom-nav .bnav-label{font-size:10px}
.bottom-nav .bnav-icon{font-size:24px}
}
/* Desktop: hide bottom nav and mobile-only elements */
@media(min-width:901px){
.bottom-nav{display:none !important}
.fab{display:none !important}
}
</style>`}function x(a,t,e){const n=(e==null?void 0:e.role)||"admin",i=(e==null?void 0:e.name)||"Admin",r={admin:["dashboard","inventory","stockcheck","parties","purchases","sales","payments","expenses","orders","ledger","expledger","profitloss","balancesheet","trialbalance","recpay","reports","stock","salesperson","daydetails","users","admin","companysettings","approvals","modlog"],manager:["dashboard","inventory","stockcheck","parties","purchases","sales","payments","expenses","orders","ledger","expledger","profitloss","balancesheet","trialbalance","recpay","reports","stock","salesperson","daydetails","approvals","modlog"],entry:["dashboard","inventory","stockcheck","parties","purchases","sales","payments","expenses","orders","ledger","daydetails"],viewer:["dashboard","stockcheck","reports","profitloss","balancesheet","trialbalance","stock","recpay","ledger","expledger","daydetails"]},s=r[n]||r.viewer,d=[{group:"Main",items:[{path:"/",icon:"grid_view",label:"Dashboard",id:"dashboard"},{path:"/day-details",icon:"calendar_today",label:"Day Details",id:"daydetails"},{path:"/orders",icon:"assignment",label:"Orders",id:"orders"},{path:"/stock-check",icon:"checklist",label:"Stock Check",id:"stockcheck"}]},{group:"Inventory & Parties",items:[{path:"/inventory",icon:"inventory_2",label:"Inventory",id:"inventory"},{path:"/parties",icon:"groups",label:"Customers & Suppliers",id:"parties"}]},{group:"Transactions",items:[{path:"/purchases",icon:"shopping_cart",label:"Purchases",id:"purchases"},{path:"/sales",icon:"receipt_long",label:"Sales",id:"sales"},{path:"/payments",icon:"account_balance_wallet",label:"Accounts & Banking",id:"payments"},{path:"/expenses",icon:"payments",label:"Expenses",id:"expenses"}]},{group:"Reports",items:[{path:"/reports",icon:"assessment",label:"Reports",id:"reports"},{path:"/ledger",icon:"menu_book",label:"Ledger",id:"ledger"},{path:"/expense-ledger",icon:"receipt",label:"Expense Ledger",id:"expledger"},{path:"/receivable-payable",icon:"swap_horiz",label:"Receivable / Payable",id:"recpay"},{path:"/profit-loss",icon:"trending_up",label:"Profit & Loss",id:"profitloss"},{path:"/balance-sheet",icon:"account_balance",label:"Balance Sheet",id:"balancesheet"},{path:"/trial-balance",icon:"balance",label:"Trial Balance",id:"trialbalance"},{path:"/stock",icon:"warehouse",label:"Stock & Valuation",id:"stock"},{path:"/truck-fare-report",icon:"local_shipping",label:"Truck Fare Report",id:"truckfarereport"}]},{group:"System",items:[{path:"/users",icon:"manage_accounts",label:"Users & Access",id:"users"},{path:"/salesperson",icon:"badge",label:"Salesperson Mgmt",id:"salesperson"},{path:"/truck-fare-settings",icon:"local_shipping",label:"Truck Fare Settings",id:"truckfaresettings"},{path:"/approvals",icon:"task_alt",label:"Approval Queue",id:"approvals"},{path:"/company-settings",icon:"domain",label:"Company Settings",id:"companysettings"},{path:"/admin",icon:"settings",label:"Admin",id:"admin"},{path:"/mod-log",icon:"history",label:"Modification Log",id:"modlog"}]}];let c="";for(const l of d){const p=l.items.filter(u=>s.includes(u.id));if(p.length!==0){c+=`<div class="nav-group">${l.group}</div>`;for(const u of p)c+=`<a href="${u.path}" class="${t===u.id?"active":""}"><span class="nav-icon material-symbols-outlined">${u.icon}</span>${u.label}</a>`}}return`<!doctype html>
<html lang="en"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"/>
<meta name="theme-color" content="#1e1b4b"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="mobile-web-app-capable" content="yes"/>
<title>BizManager</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
${Aa()}
<script src="https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js"><\/script>
<script>
// ============ GLOBAL UTILITIES ============
window.api=async function(path,body){var r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body||{})});var d=await r.json();if(!r.ok||(d&&d.success===false)){throw new Error(d.error||'Request failed');}return d;};
window.loadList=async function(prefix){return api('/api/list',{prefix:prefix});};
window.saveItem=async function(prefix,data,id,logAction,logDetail){var r=await api('/api/save',{prefix:prefix,data:data,id:id,logAction:logAction||'',logDetail:logDetail||''});if(r&&r.pending){showToast(r.message||'Submitted for approval','info');}return r;};
window.saveByKey=async function(key,data,logAction,logDetail){var r=await api('/api/save',{key:key,data:data,logAction:logAction||'',logDetail:logDetail||''});if(r&&r.pending){showToast(r.message||'Submitted for approval','info');}return r;};
window.deleteItem=async function(key,ask,logDetail){if(ask!==false&&!confirm('Delete this item?'))return;var r=await api('/api/delete',{key:key,logDetail:logDetail||''});if(r&&r.pending){showToast(r.message||'Delete request submitted for approval','info');}return r;};
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
  var cs=window._companySettings||{};
  var companyHeader='<div style="text-align:center;border-bottom:2px solid #333;padding-bottom:10px;margin-bottom:16px">'
    +'<h1 style="margin:0;font-size:20px;font-weight:800">'+(cs.companyName||'')+'</h1>'
    +(cs.companyAddress?'<div style="font-size:11px;color:#555;margin-top:2px">'+cs.companyAddress+'</div>':'')
    +(cs.companyPhone||cs.companyEmail?'<div style="font-size:10px;color:#666;margin-top:2px">'+(cs.companyPhone?'Phone: '+cs.companyPhone:'')+(cs.companyPhone&&cs.companyEmail?' | ':'')+(cs.companyEmail?'Email: '+cs.companyEmail:'')+'</div>':'')
    +(cs.companyWebsite?'<div style="font-size:10px;color:#666">'+cs.companyWebsite+'</div>':'')
    +(cs.companyTIN?'<div style="font-size:10px;color:#666">TIN: '+cs.companyTIN+'</div>':'')
    +'</div>';
  // Skip company header if content already contains one (e.g. invoice/voucher previews)
  var contentHtml=content.innerHTML;
  var alreadyHasHeader=elementId==='docPrintArea';
  var win=window.open('','_blank');
  win.document.write('<html><head><title>'+(title||'Print')+'</title><style>body{font-family:sans-serif;padding:20px;font-size:12px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:6px 8px;text-align:left;font-size:11px}.r{text-align:right}.bold{font-weight:bold}.text-danger{color:#dc2626}.text-success{color:#059669}.text-warning{color:#d97706}.text-muted{color:#666}.text-info{color:#0891b2}.text-primary{color:#4f46e5}.badge{padding:2px 6px;border-radius:3px;font-size:9px}.pl-row{display:flex;justify-content:space-between;padding:4px 12px}.pl-row.total{font-weight:bold;background:#f3f3f3;padding:8px 12px}.led-sale td{background:#eef2ff}.led-purchase td{background:#fffbeb}.led-receipt td,.led-payment td{background:#ecfdf5}.stat{display:inline-block;padding:8px 12px;margin:3px;border:1px solid #ddd;border-radius:6px}.stat .label{font-size:9px;text-transform:uppercase;color:#666;font-weight:bold}.stat .value{font-size:16px;font-weight:bold}.stats{margin-bottom:12px}.card{margin-bottom:12px;padding:10px}</style></head><body>'+(alreadyHasHeader?'':companyHeader)+contentHtml+'</body></html>');
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
  // Calculate previous balance for this customer (including opening balance)
  var prevBal=0;var curBal=0;
  try{
    var allSales=await cachedList('sale:',30000);
    var allPayments=await cachedList('payment:',30000);
    var allParties=await cachedList('party:',30000);
    var custParty=allParties.find(function(x){return x._key===s.customerId});
    var custOB=custParty?(custParty.openingBalance||0):0;
    var custSales=allSales.filter(function(x){return x.customerId===s.customerId});
    var custReceipts=allPayments.filter(function(x){return x.party===s.customerName&&x.type==='receipt'&&x.status==='done'&&!x._autoInvoice&&!(x.billKeys&&x.billKeys.length)});
    // Previous balance = opening balance + all sales before this invoice - all payments before this invoice
    var prevSalesTotal=custSales.filter(function(x){return x.invoiceNo!==s.invoiceNo}).reduce(function(a,x){return a+(x.total||0)},0);
    var prevPaidTotal=custSales.filter(function(x){return x.invoiceNo!==s.invoiceNo}).reduce(function(a,x){return a+(x.paid||0)},0)+custReceipts.reduce(function(a,x){return a+(x.amount||0)},0);
    prevBal=custOB+prevSalesTotal-prevPaidTotal;
    curBal=prevBal+(s.total||0)-(s.paid||0);
  }catch(e){}
  return '<div style="max-width:700px;margin:0 auto">'+getCompanyHeader()+'<div style="display:flex;justify-content:space-between;border-bottom:2px solid #333;padding-bottom:10px;margin-bottom:12px"><div><h2 style="margin:0;font-size:18px">SALES INVOICE</h2><b>No:</b> '+s.invoiceNo+'</div><div style="text-align:right"><b>Date:</b> '+s.date+'<br><b>Customer:</b> '+s.customerName+(s.salespersonName?'<br><span style="font-size:11px;color:#666">SP: '+s.salespersonName+'</span>':'')+(s.createdBy?'<br><span style="font-size:10px;color:#888">Created by: '+s.createdBy+'</span>':'')+'</div></div><table class="tbl"><thead><tr style="background:#f3f3f3"><th>#</th><th>Product</th><th class="r">Qty</th><th class="r">Rate</th><th class="r">Amount</th></tr></thead><tbody>'+(s.items||[]).map(function(it,i){return'<tr><td>'+(i+1)+'</td><td>'+it.productName+'</td><td class="r">'+it.qty+'</td><td class="r">'+fmt(it.rate)+'</td><td class="r">'+fmt(it.amount)+'</td></tr>';}).join('')+'</tbody></table><div style="display:flex;justify-content:flex-end;margin-top:12px"><div style="width:280px;line-height:1.8;font-size:12px"><div style="display:flex;justify-content:space-between"><span>Subtotal:</span><span>'+fmt(sub)+'</span></div><div style="display:flex;justify-content:space-between;color:#dc2626"><span>Discount:</span><span>-'+fmt(discAmt)+'</span></div><div style="display:flex;justify-content:space-between"><span>Extra:</span><span>+'+fmt(s.extra||0)+'</span></div><div style="display:flex;justify-content:space-between"><span>VAT:</span><span>+'+fmt(vatAmt)+'</span></div><div style="display:flex;justify-content:space-between"><span>AIT:</span><span>+'+fmt(aitAmt)+'</span></div><div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;border-top:2px solid #333;margin-top:4px;padding-top:4px"><span>Total:</span><span>'+fmt(s.total)+'</span></div><div style="display:flex;justify-content:space-between;color:#059669"><span>Paid:</span><span>'+fmt(s.paid)+'</span></div><div style="display:flex;justify-content:space-between;border-top:1px dashed #666"><span>Balance Due:</span><span>'+fmt((s.total||0)-(s.paid||0))+'</span></div><div style="border-top:2px solid #333;margin-top:6px;padding-top:6px"><div style="display:flex;justify-content:space-between;color:#6b7280"><span>Previous Balance:</span><span>'+fmt(Math.abs(prevBal))+' '+(prevBal>0?'Dr':'Cr')+'</span></div><div style="display:flex;justify-content:space-between;font-weight:800;font-size:13px;color:'+(curBal>0?'#dc2626':'#059669')+'"><span>Current Balance:</span><span>'+fmt(Math.abs(curBal))+' '+(curBal>0?'Dr':'Cr')+'</span></div></div></div></div></div>';
};
window.buildPurchaseInvoice=function(p){
  if(!p)return'';var sub=(p.items||[]).reduce(function(a,i){return a+(i.amount||0);},0);
  var base=sub-(p.discount||0)+(p.extra||0);var vatAmt=(p.vatType==='percent')?(base*(p.vat||0)/100):(p.vat||0);
  return '<div style="max-width:700px;margin:0 auto">'+getCompanyHeader()+'<div style="display:flex;justify-content:space-between;border-bottom:2px solid #333;padding-bottom:10px;margin-bottom:12px"><div><h2 style="margin:0;font-size:18px">PURCHASE INVOICE</h2><b>No:</b> '+p.purchaseNo+'</div><div style="text-align:right"><b>Date:</b> '+p.date+'<br><b>Supplier:</b> '+p.supplierName+'</div></div><table class="tbl"><thead><tr style="background:#f3f3f3"><th>#</th><th>Item</th><th class="r">Qty</th><th class="r">Rate</th><th class="r">Amount</th></tr></thead><tbody>'+(p.items||[]).map(function(it,i){return'<tr><td>'+(i+1)+'</td><td>'+it.productName+'</td><td class="r">'+it.qty+'</td><td class="r">'+fmt(it.rate)+'</td><td class="r">'+fmt(it.amount)+'</td></tr>';}).join('')+'</tbody></table><div style="display:flex;justify-content:flex-end;margin-top:12px"><div style="width:260px;line-height:1.8;font-size:12px"><div style="display:flex;justify-content:space-between"><span>Subtotal:</span><span>'+fmt(sub)+'</span></div><div style="display:flex;justify-content:space-between;color:#dc2626"><span>Discount:</span><span>-'+fmt(p.discount||0)+'</span></div><div style="display:flex;justify-content:space-between"><span>Extra:</span><span>+'+fmt(p.extra||0)+'</span></div><div style="display:flex;justify-content:space-between"><span>VAT:</span><span>+'+fmt(vatAmt)+'</span></div><div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;border-top:2px solid #333;margin-top:4px;padding-top:4px"><span>Total:</span><span>'+fmt(p.total)+'</span></div><div style="display:flex;justify-content:space-between;color:#059669"><span>Paid:</span><span>'+fmt(p.paid)+'</span></div><div style="display:flex;justify-content:space-between;border-top:1px dashed #666"><span>Balance:</span><span>'+fmt((p.total||0)-(p.paid||0))+'</span></div></div></div></div>';
};
window.buildVoucher=function(p){
  if(!p)return'';
  return '<div style="max-width:500px;margin:0 auto;border:2px solid #333;padding:20px">'+getCompanyHeader()+'<div style="display:flex;justify-content:space-between;border-bottom:1px solid #333;padding-bottom:8px"><h2 style="margin:0;font-size:16px">'+(p.type||'').toUpperCase()+' VOUCHER</h2><b>'+p.no+'</b></div><div style="margin:16px 0;line-height:2"><b>Date:</b> '+p.date+'<br><b>Party:</b> '+(p.party||'')+'<br><b>Method:</b> '+(p.method||'').toUpperCase()+(p.chequeNo?' (Chq: '+p.chequeNo+')':'')+'<br><b>Note:</b> '+(p.note||'N/A')+'<br><br><div style="font-size:22px;font-weight:bold">Amount: '+fmt(p.amount)+'</div></div><div style="margin-top:40px;display:flex;justify-content:space-between"><span>________________<br>Receiver</span><span>________________<br>Authorized</span></div></div>';
};
window.buildExpenseVoucher=function(e){
  if(!e)return'';
  return '<div style="max-width:500px;margin:0 auto;border:2px solid #333;padding:20px">'+getCompanyHeader()+'<div style="border-bottom:1px solid #333;padding-bottom:8px"><h2 style="margin:0;font-size:16px">EXPENSE VOUCHER</h2></div><div style="margin:16px 0;line-height:2"><b>No:</b> '+e.expenseNo+'<br><b>Date:</b> '+e.date+'<br><b>Head:</b> '+e.headName+(e.subHeadName?' / '+e.subHeadName:'')+'<br><b>Method:</b> '+(e.method||'').toUpperCase()+(e.bankName?' ('+e.bankName+')':'')+'<br><b>Description:</b> '+(e.description||'N/A')+'<br><br><div style="font-size:22px;font-weight:bold">Amount: '+fmt(e.amount)+'</div></div></div>';
};
window.SESSION=${JSON.stringify(e||{})};
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
// ============ COMPANY SETTINGS LOADER ============
window._companySettings={};
window.loadCompanySettings=async function(){
  try{
    var r=await fetch('/api/company-settings');
    var cs=await r.json();
    window._companySettings=cs||{};
    // Apply color theme dynamically
    if(cs.primaryColor){
      document.documentElement.style.setProperty('--primary',cs.primaryColor);
      document.documentElement.style.setProperty('--sidebar-active',cs.primaryColor);
    }
    if(cs.sidebarColor){
      document.documentElement.style.setProperty('--sidebar-bg',cs.sidebarColor);
    }
    // Update branding text
    var logoEl=document.querySelector('.sidebar .logo');
    if(logoEl&&cs.companyName){
      var iconEl=logoEl.querySelector('.logo-icon');
      var initials=cs.companyName.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
      if(iconEl)iconEl.textContent=initials;
      logoEl.childNodes[logoEl.childNodes.length-1].textContent=cs.companyName;
    }
    var mobileTitle=document.querySelector('.mh-title');
    if(mobileTitle&&cs.companyName)mobileTitle.textContent=cs.companyName;
    // Update mobile theme color meta tag
    if(cs.sidebarColor){var metaTheme=document.querySelector('meta[name="theme-color"]');if(metaTheme)metaTheme.setAttribute('content',cs.sidebarColor);}
    // Update mobile header background on scroll for iOS-like feel
    if(cs.primaryColor){document.documentElement.style.setProperty('--bnav-active',cs.primaryColor);}
    // Update page title
    if(cs.companyName)document.title=cs.companyName+' - BizManager';
  }catch(e){console.log('Company settings load error:',e);}
};
loadCompanySettings();
// ============ COMPANY HEADER FOR INVOICES ============
window.getCompanyHeader=function(){
  var cs=window._companySettings||{};
  if(!cs.companyName)return'';
  return '<div style="text-align:center;border-bottom:2px solid #333;padding-bottom:10px;margin-bottom:14px">'
    +'<h1 style="margin:0;font-size:20px;font-weight:800">'+cs.companyName+'</h1>'
    +(cs.companyTagline?'<div style="font-size:11px;color:#777;font-style:italic;margin-top:2px">'+cs.companyTagline+'</div>':'')
    +(cs.companyAddress?'<div style="font-size:11px;color:#555;margin-top:2px">'+cs.companyAddress+'</div>':'')
    +(cs.companyPhone||cs.companyEmail?'<div style="font-size:10px;color:#666;margin-top:2px">'+(cs.companyPhone?'Phone: '+cs.companyPhone:'')+(cs.companyPhone&&cs.companyEmail?' | ':'')+(cs.companyEmail?'Email: '+cs.companyEmail:'')+'</div>':'')
    +(cs.companyWebsite?'<div style="font-size:10px;color:#666">'+cs.companyWebsite+'</div>':'')
    +(cs.companyTIN?'<div style="font-size:10px;color:#666">TIN/BIN: '+cs.companyTIN+'</div>':'')
    +'</div>';
};
<\/script>
</head><body>
<div class="mobile-header" id="mobileHeader">
  <button class="hamburger" onclick="toggleSidebar()"><span class="material-symbols-outlined">menu</span></button>
  <span class="mh-title">BizManager</span>
  <div class="mh-actions"><button class="hamburger" onclick="window.location.reload()" title="Refresh"><span class="material-symbols-outlined" style="font-size:20px">refresh</span></button></div>
</div>
<div class="overlay" id="overlay" onclick="toggleSidebar()"></div>
<div class="app">
  <aside class="sidebar" id="sidebar">
    <div class="logo"><div class="logo-icon">BM</div>BizManager</div>
    <nav>${c}<div class="nav-group" style="margin-top:12px">Portal</div><a href="/sp-portal" target="_blank"><span class="nav-icon material-symbols-outlined">storefront</span>SP Portal</a><div class="nav-group"></div><a href="/logout" style="opacity:.6"><span class="nav-icon material-symbols-outlined">logout</span>Logout</a></nav>
    <div class="sidebar-footer">BizManager v3.0 | ${i} (${n})</div>
  </aside>
  <main class="main">${a}</main>
</div>
<!-- Bottom Navigation Bar (Mobile Only) -->
<nav class="bottom-nav" id="bottomNav">
  <a href="/" class="bnav-item${t==="dashboard"?" active":""}"><span class="material-symbols-outlined bnav-icon">grid_view</span><span class="bnav-label">Home</span></a>
  <a href="/sales" class="bnav-item${t==="sales"?" active":""}"><span class="material-symbols-outlined bnav-icon">receipt_long</span><span class="bnav-label">Sales</span></a>
  <a href="/purchases" class="bnav-item${t==="purchases"?" active":""}"><span class="material-symbols-outlined bnav-icon">shopping_cart</span><span class="bnav-label">Purchase</span></a>
  <a href="/payments" class="bnav-item${t==="payments"?" active":""}"><span class="material-symbols-outlined bnav-icon">account_balance_wallet</span><span class="bnav-label">Accounts</span></a>
  <button class="bnav-item bnav-more" id="bnavMoreBtn" onclick="toggleBnavMore()"><span class="material-symbols-outlined bnav-icon">more_horiz</span><span class="bnav-label">More</span>
    <div class="bnav-more-menu" id="bnavMoreMenu">
      ${(function(){const l=[{group:"Main",items:[{p:"/day-details",i:"calendar_today",l:"Day Details",id:"daydetails"},{p:"/orders",i:"assignment",l:"Orders",id:"orders"},{p:"/stock-check",i:"checklist",l:"Stock Check",id:"stockcheck"}]},{group:"Inventory",items:[{p:"/inventory",i:"inventory_2",l:"Inventory",id:"inventory"},{p:"/parties",i:"groups",l:"Customers & Suppliers",id:"parties"}]},{group:"Finance",items:[{p:"/expenses",i:"payments",l:"Expenses",id:"expenses"}]},{group:"Reports",items:[{p:"/reports",i:"assessment",l:"Reports",id:"reports"},{p:"/ledger",i:"menu_book",l:"Ledger",id:"ledger"},{p:"/expense-ledger",i:"receipt",l:"Expense Ledger",id:"expledger"},{p:"/receivable-payable",i:"swap_horiz",l:"Receivable/Payable",id:"recpay"},{p:"/profit-loss",i:"trending_up",l:"Profit & Loss",id:"profitloss"},{p:"/balance-sheet",i:"account_balance",l:"Balance Sheet",id:"balancesheet"},{p:"/trial-balance",i:"balance",l:"Trial Balance",id:"trialbalance"},{p:"/stock",i:"warehouse",l:"Stock & Valuation",id:"stock"},{p:"/truck-fare-report",i:"local_shipping",l:"Truck Fare Report",id:"truckfarereport"},{p:"/truck-fare-settings",i:"local_shipping",l:"Truck Fare Settings",id:"truckfaresettings"}]},{group:"System",items:[{p:"/users",i:"manage_accounts",l:"Users & Access",id:"users"},{p:"/salesperson",i:"badge",l:"Salesperson",id:"salesperson"},{p:"/approvals",i:"task_alt",l:"Approvals",id:"approvals"},{p:"/company-settings",i:"domain",l:"Company Settings",id:"companysettings"},{p:"/admin",i:"settings",l:"Admin",id:"admin"},{p:"/mod-log",i:"history",l:"Mod Log",id:"modlog"}]}];let p="";for(const u of l){const y=u.items.filter(S=>s.includes(S.id));if(y.length){p+='<div class="bnav-menu-group">'+u.group+"</div>";for(const S of y)p+='<a href="'+S.p+'"'+(t===S.id?' style="color:var(--primary);font-weight:700"':"")+'><span class="material-symbols-outlined">'+S.i+"</span>"+S.l+"</a>"}}return p+='<div class="bnav-menu-group">Other</div><a href="/sp-portal" target="_blank"><span class="material-symbols-outlined">storefront</span>SP Portal</a><a href="/logout" style="color:var(--danger)"><span class="material-symbols-outlined">logout</span>Logout</a>',p})()}
    </div>
  </button>
</nav>
<!-- Global Document Preview Modal -->
<div class="modal-overlay" id="docPreview"><div class="modal modal-lg">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="margin:0">Document Preview</h3><div><button class="btn btn-primary btn-sm" onclick="printContent('docPrintArea','Document')">Print</button> <button class="btn btn-outline btn-sm" onclick="closeModal('docPreview')">Close</button></div></div>
  <div id="docPreviewContent"></div>
</div></div>
<script>
// Sidebar nav click closes sidebar
document.querySelectorAll('.sidebar nav a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('open');});});
// Bottom nav more menu toggle
window.toggleBnavMore=function(){
  var menu=document.getElementById('bnavMoreMenu');
  menu.classList.toggle('open');
  // Close when clicking outside
  if(menu.classList.contains('open')){
    setTimeout(function(){
      document.addEventListener('click',function closeBnav(e){
        if(!document.getElementById('bnavMoreBtn').contains(e.target)){
          menu.classList.remove('open');
          document.removeEventListener('click',closeBnav);
        }
      });
    },10);
  }
};
// Touch swipe to open/close sidebar
(function(){
  var startX=0,startY=0,tracking=false,sidebarOpen=false;
  document.addEventListener('touchstart',function(e){
    startX=e.touches[0].clientX;startY=e.touches[0].clientY;
    sidebarOpen=document.getElementById('sidebar').classList.contains('open');
    tracking=(startX<30&&!sidebarOpen)||(sidebarOpen);
  },{passive:true});
  document.addEventListener('touchmove',function(e){
    if(!tracking)return;
    var dx=e.touches[0].clientX-startX;var dy=Math.abs(e.touches[0].clientY-startY);
    if(dy>Math.abs(dx)){tracking=false;return;}
    if(!sidebarOpen&&dx>60){toggleSidebar();tracking=false;}
    if(sidebarOpen&&dx<-60){toggleSidebar();tracking=false;}
  },{passive:true});
})();
// Mobile: Update page title in header
(function(){
  var titleMap={dashboard:'Dashboard',inventory:'Inventory',stockcheck:'Stock Check',parties:'Customers & Suppliers',purchases:'Purchases',sales:'Sales',payments:'Accounts & Banking',expenses:'Expenses',ledger:'Ledger',expledger:'Expense Ledger',profitloss:'Profit & Loss',balancesheet:'Balance Sheet',trialbalance:'Trial Balance',stock:'Stock & Valuation',recpay:'Receivable/Payable',daydetails:'Day Details',reports:'Reports',salesperson:'Salesperson',orders:'Orders',users:'Users & Access',admin:'Admin',modlog:'Mod Log',approvals:'Approvals',companysettings:'Company Settings',truckfarereport:'Truck Fare Report',truckfaresettings:'Truck Fare Settings'};
  var mhTitle=document.querySelector('.mh-title');
  if(mhTitle&&titleMap['${t}'])mhTitle.textContent=titleMap['${t}'];
})();
// Close more menu when navigating
document.querySelectorAll('.bnav-more-menu a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('bnavMoreMenu').classList.remove('open');});});
<\/script>
</body></html>`}function ja(a,t=!1){return`<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#1e1b4b"><meta name="apple-mobile-web-app-capable" content="yes">
<title>BizManager Login</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
${Aa()}</head><body>
<div class="login-page"><form class="login-card" method="POST" action="/login">
  <div id="loginLogo" style="width:52px;height:52px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto;color:#fff;font-weight:800;font-size:18px">BM</div>
  <h2 id="loginTitle">BizManager</h2><div class="sub">Enter credentials to continue</div>
  ${a?`<div class="err">${a}</div>`:""}
  ${t?'<input name="username" placeholder="Username" style="text-align:center">':""}
  <input type="password" name="pin" placeholder="${t?"Password":"PIN"}" maxlength="20" autofocus required>
  <button type="submit" class="btn btn-primary" id="loginBtn">Login</button>
  <div style="margin-top:12px;font-size:11px;color:var(--muted)"><a href="/sp-portal/login">Salesperson Portal</a></div>
</form></div>
<script>
(async function(){try{var r=await fetch('/api/company-settings');var cs=await r.json();
if(cs.companyName){document.getElementById('loginTitle').textContent=cs.companyName;document.title=cs.companyName+' - Login';
var initials=cs.companyName.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
document.getElementById('loginLogo').textContent=initials;}
if(cs.primaryColor){document.documentElement.style.setProperty('--primary',cs.primaryColor);document.querySelector('.login-page').style.background='linear-gradient(135deg,'+cs.sidebarColor+' 0%,'+cs.primaryColor+' 100%)';document.getElementById('loginLogo').style.background='linear-gradient(135deg,'+cs.primaryColor+','+cs.sidebarColor+')';}
}catch(e){}})();
<\/script>
</body></html>`}function rt(){return`<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>License Expired</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${Aa()}</head><body><div class="login-page"><div class="login-card"><h2>License Expired</h2><div class="sub">Please renew.</div></div></div></body></html>`}function $a(a){return`<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"><meta name="theme-color" content="#1e1b4b"><meta name="apple-mobile-web-app-capable" content="yes"><title>SP Portal</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${Aa()}</head><body><div class="login-page"><form class="login-card" method="POST" action="/sp-portal/login"><h2>Salesperson Portal</h2><div class="sub">Enter code and PIN</div>${a?`<div class="err">${a}</div>`:""}<input name="code" placeholder="Code" style="text-align:center" required><input type="password" name="pin" placeholder="PIN" style="text-align:center" required><button type="submit" class="btn btn-primary">Login</button><div style="margin-top:12px"><a href="/login" style="font-size:11px;color:var(--muted)">Admin Login</a></div></form></div></body></html>`}function fe(a){const e=(a.req.header("Cookie")||"").match(/sp_session=([^;]+)/);let n={};if(e)try{n=JSON.parse(decodeURIComponent(e[1]))}catch{}const i=n.spId||"",r=n.spName||"Salesperson",s=n.spCode||"";return`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="theme-color" content="#1e1b4b"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>SP Portal - ${ca(r)}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
${Aa()}
<style>
/* SP Portal Mobile-First Styles */
.sp-app{min-height:100vh;background:var(--bg)}
.sp-header{position:fixed;top:0;left:0;right:0;z-index:40;background:linear-gradient(135deg,#1e1b4b,#312e81);color:#fff;padding:env(safe-area-inset-top,0) 0 0}
.sp-header-inner{display:flex;align-items:center;justify-content:space-between;padding:12px 16px}
.sp-header h2{font-size:16px;font-weight:700;margin:0;letter-spacing:-.2px}
.sp-header .sp-user{font-size:11px;opacity:.7;margin-top:1px}
.sp-header .sp-logout{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:4px;transition:all .2s;-webkit-tap-highlight-color:transparent}
.sp-header .sp-logout:hover{background:rgba(255,255,255,.2)}
.sp-header .sp-logout .material-symbols-outlined{font-size:16px}
.sp-body{padding:calc(72px + env(safe-area-inset-top,0)) 16px calc(68px + env(safe-area-inset-bottom,4px)) 16px;max-width:960px;margin:0 auto}
/* SP Bottom Tab Navigation */
.sp-bnav{display:none;position:fixed;bottom:0;left:0;right:0;background:var(--card);border-top:1px solid var(--border);z-index:40;padding:4px 0 env(safe-area-inset-bottom,4px);box-shadow:0 -2px 10px rgba(0,0,0,.06)}
.sp-bnav-item{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6px 2px;cursor:pointer;color:var(--muted);border:none;background:none;font-family:inherit;-webkit-tap-highlight-color:transparent;transition:color .2s;position:relative}
.sp-bnav-item .sp-bnav-icon{font-size:22px;line-height:1;transition:all .2s}
.sp-bnav-item .sp-bnav-label{font-size:9px;font-weight:600;margin-top:2px;letter-spacing:.2px}
.sp-bnav-item.active{color:var(--primary)}
.sp-bnav-item.active .sp-bnav-icon{transform:translateY(-2px);font-variation-settings:'FILL' 1}
.sp-bnav-item.active::before{content:'';position:absolute;top:-1px;left:50%;transform:translateX(-50%);width:36px;height:3px;background:var(--primary);border-radius:0 0 3px 3px}
.sp-bnav-item:active{opacity:.7}
/* Desktop top tabs (visible on desktop, hidden on mobile) */
.sp-tabs-desktop{display:flex;gap:3px;background:var(--bg);border-radius:8px;padding:3px;margin-bottom:14px;width:fit-content;border:1px solid var(--border)}
.sp-tabs-desktop .tab{padding:6px 14px;border:none;border-radius:6px;background:transparent;color:var(--muted);font-size:12px;font-weight:600;cursor:pointer;transition:var(--transition)}
.sp-tabs-desktop .tab.active{background:var(--card);color:var(--primary);box-shadow:var(--shadow)}
/* Order item cards for mobile */
.sp-item-card{background:var(--bg);border-radius:10px;padding:12px;margin-bottom:8px;border:1px solid var(--border)}
.sp-item-card .sp-item-row{display:grid;grid-template-columns:1fr;gap:8px}
.sp-item-card .sp-item-footer{display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding-top:8px;border-top:1px solid var(--border)}
.sp-item-card .sp-item-amt{font-weight:700;font-size:15px;color:var(--primary)}
.sp-item-card .sp-item-rm{background:var(--danger-light);color:var(--danger);border:none;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer}
/* Order total bar */
.sp-total-bar{position:sticky;bottom:0;background:var(--card);border-top:2px solid var(--primary);padding:14px 16px;border-radius:12px 12px 0 0;margin:12px -16px 0;display:flex;justify-content:space-between;align-items:center;box-shadow:0 -4px 12px rgba(0,0,0,.06)}
.sp-total-bar .sp-total-label{font-size:12px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.3px}
.sp-total-bar .sp-total-value{font-size:20px;font-weight:800;color:var(--primary)}
/* Mobile order card list */
.sp-order-card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:8px}
.sp-order-card .sp-oc-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px}
.sp-order-card .sp-oc-no{font-weight:700;font-size:13px}
.sp-order-card .sp-oc-date{font-size:11px;color:var(--muted)}
.sp-order-card .sp-oc-cust{font-size:12px;color:var(--text);margin-bottom:4px}
.sp-order-card .sp-oc-bottom{display:flex;justify-content:space-between;align-items:center}
.sp-order-card .sp-oc-total{font-weight:700;font-size:15px}
/* Mobile customer card */
.sp-cust-card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:8px}
.sp-cust-card .sp-cc-name{font-weight:700;font-size:14px;margin-bottom:2px}
.sp-cust-card .sp-cc-info{font-size:12px;color:var(--muted);margin-bottom:6px}
.sp-cust-card .sp-cc-stats{display:flex;gap:16px}
.sp-cust-card .sp-cc-stat{text-align:center}
.sp-cust-card .sp-cc-stat .label{font-size:9px;text-transform:uppercase;letter-spacing:.3px;color:var(--muted);font-weight:600}
.sp-cust-card .sp-cc-stat .value{font-size:14px;font-weight:700}
/* Mobile report controls */
.sp-rpt-controls{display:flex;flex-direction:column;gap:8px}
.sp-rpt-actions{display:flex;gap:6px;margin-top:4px}
/* Responsive breakpoints */
@media(min-width:769px){
  .sp-bnav{display:none !important}
  .sp-tabs-desktop{display:flex}
  .sp-body{padding:calc(72px + env(safe-area-inset-top,0)) 28px 28px;max-width:960px}
  .sp-header-inner{padding:14px 28px}
  .sp-header h2{font-size:18px}
  .sp-item-card .sp-item-row{grid-template-columns:2fr 70px 90px 90px 34px;align-items:end;gap:8px}
  .sp-order-cards{display:none}
  .sp-order-table{display:block}
  .sp-cust-cards{display:none}
  .sp-cust-table{display:block}
  .sp-rpt-controls{flex-direction:row;align-items:end}
  .sp-total-bar{margin:12px 0 0;border-radius:12px;position:static}
}
@media(max-width:768px){
  .sp-bnav{display:flex}
  .sp-tabs-desktop{display:none !important}
  .sp-item-card .sp-item-row{grid-template-columns:1fr 1fr}
  .sp-item-card .sp-item-row .sp-item-product{grid-column:1/-1}
  .sp-order-table{display:none}
  .sp-order-cards{display:block}
  .sp-cust-table{display:none}
  .sp-cust-cards{display:block}
  .sp-body .card{border-radius:10px;padding:14px}
  .sp-rpt-controls{flex-direction:column}
  .sp-rpt-actions{flex-wrap:wrap}
}
@media(max-width:400px){
  .sp-header h2{font-size:14px}
  .sp-header .sp-user{font-size:10px}
  .sp-item-card{padding:10px}
}
@media(max-height:500px) and (max-width:768px){
  .sp-bnav .sp-bnav-item{padding:3px 2px}
  .sp-bnav .sp-bnav-icon{font-size:20px}
  .sp-bnav .sp-bnav-label{font-size:8px;margin-top:1px}
  .sp-body{padding-bottom:56px}
}
</style>
</head><body>
<div class="sp-app">
<!-- Fixed Header -->
<div class="sp-header">
<div class="sp-header-inner">
<div><h2><span class="material-symbols-outlined" style="font-size:20px;vertical-align:middle;margin-right:4px">storefront</span>SP Portal</h2><div class="sp-user">Welcome, <b>${ca(r)}</b> (${ca(s)})</div></div>
<a href="/sp-portal/logout" class="sp-logout"><span class="material-symbols-outlined">logout</span>Logout</a>
</div>
</div>
<!-- Main Content -->
<div class="sp-body">
<!-- Desktop-only top tabs -->
<div class="sp-tabs-desktop"><button class="tab active" id="tabPlace" onclick="switchSPTab('place')"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">add_shopping_cart</span> Place Order</button><button class="tab" id="tabOrders" onclick="switchSPTab('orders')"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">list_alt</span> My Orders</button><button class="tab" id="tabReports" onclick="switchSPTab('reports')"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">bar_chart</span> My Reports</button><button class="tab" id="tabCustomers" onclick="switchSPTab('customers')"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">group</span> My Customers</button></div>

<div id="placeSection">
<div class="card">
<h3 style="font-size:15px;margin-bottom:14px"><span class="material-symbols-outlined" style="font-size:18px;vertical-align:middle;color:var(--primary)">shopping_cart</span> New Order</h3>
<div class="form-row"><div><label>Customer</label><select id="spCust"></select></div><div><label>Date</label><input type="date" id="spDate"></div></div>
<div id="spItems"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-outline" onclick="addSPItem()"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">add</span> Add Item</button><button class="btn btn-primary" onclick="submitOrd()"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">send</span> Submit Order</button></div>
<div id="spTotal" class="sp-total-bar" style="display:none"><div><div class="sp-total-label">Order Total</div><div class="sp-total-value" id="spTotalVal">0</div></div><button class="btn btn-primary" onclick="submitOrd()" style="padding:10px 20px"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">send</span> Submit</button></div>
</div>
</div>

<div id="ordersSection" class="hidden">
<!-- Desktop table -->
<div class="sp-order-table card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Date</th><th>Order#</th><th>Customer</th><th class="r">Total</th><th>Status</th></tr></thead><tbody id="spOrdBody"></tbody></table></div></div>
<!-- Mobile card list -->
<div class="sp-order-cards" id="spOrdCards"></div>
</div>

<div id="reportsSection" class="hidden">
<div class="card" style="margin-bottom:14px">
<h3 style="font-size:15px;margin-bottom:10px"><span class="material-symbols-outlined" style="font-size:18px;vertical-align:middle;color:var(--primary)">bar_chart</span> My Sales Reports</h3>
<div class="sp-rpt-controls"><div style="flex:1;min-width:150px"><label>Report</label><select id="spRptType"><option value="product">Product-wise Sales</option><option value="customer">Customer-wise Sales</option><option value="product-customer">Product + Customer</option><option value="group-product">Group &amp; Product-wise</option><option value="customer-product">Customer &amp; Product Detail</option></select></div><div style="min-width:120px"><label>From</label><input type="date" id="spRptFrom"></div><div style="min-width:120px"><label>To</label><input type="date" id="spRptTo"></div></div>
<div class="sp-rpt-actions" style="margin-top:8px"><button class="btn btn-primary" onclick="renderSPReport()"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">visibility</span> View Report</button><button class="btn btn-outline" onclick="exportXLS('spRptTbl','SP_Report')"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">download</span> Export</button></div>
</div>
<div id="spRptPlaceholder" class="rpt-placeholder"><span class="material-symbols-outlined">assessment</span><p>Select report type and date range, then click <b>View Report</b></p></div>
<div id="spRptContent" class="hidden"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="spRptTbl"><thead id="spRptHead"></thead><tbody id="spRptBody"></tbody><tfoot id="spRptFoot"></tfoot></table></div></div></div>
</div>

<div id="customersSection" class="hidden">
<!-- Desktop table -->
<div class="sp-cust-table card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Customer Name</th><th>Phone</th><th>Address</th><th class="r">Total Sales</th><th class="r">Outstanding</th></tr></thead><tbody id="spCustListBody"></tbody></table></div></div>
<!-- Mobile card list -->
<div class="sp-cust-cards" id="spCustCards"></div>
</div>
</div>
<!-- Bottom Navigation (mobile only) -->
<nav class="sp-bnav" id="spBnav">
<button class="sp-bnav-item active" data-tab="place" onclick="switchSPTab('place')"><span class="material-symbols-outlined sp-bnav-icon">add_shopping_cart</span><span class="sp-bnav-label">Order</span></button>
<button class="sp-bnav-item" data-tab="orders" onclick="switchSPTab('orders')"><span class="material-symbols-outlined sp-bnav-icon">list_alt</span><span class="sp-bnav-label">Orders</span></button>
<button class="sp-bnav-item" data-tab="reports" onclick="switchSPTab('reports')"><span class="material-symbols-outlined sp-bnav-icon">bar_chart</span><span class="sp-bnav-label">Reports</span></button>
<button class="sp-bnav-item" data-tab="customers" onclick="switchSPTab('customers')"><span class="material-symbols-outlined sp-bnav-icon">group</span><span class="sp-bnav-label">Customers</span></button>
</nav>
</div>
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"><\/script>
<script>
window.api=async function(p,b){var r=await fetch(p,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b||{})});return r.json();};
window.loadList=async function(p){return api('/api/list',{prefix:p});};
window.saveItem=async function(p,d){return api('/api/save',{prefix:p,data:d});};
window.fmt=function(n){return Number(n||0).toLocaleString('en-IN');};
window.todayISO=function(){return new Date().toISOString().slice(0,10);};
window.txnNo=function(p){return p+'-'+todayISO().replace(/-/g,'')+'-'+Math.random().toString(36).slice(2,7).toUpperCase();};
window.exportXLS=function(tableId,fileName){try{var tbl=document.getElementById(tableId);if(!tbl)return;var wb=XLSX.utils.table_to_book(tbl,{sheet:'Sheet1'});XLSX.writeFile(wb,(fileName||'export')+'.xlsx');}catch(e){alert('Export failed: '+e.message);}};
var spP=[],spC=[],spI=[{pk:'',pn:'',q:1,r:0,a:0}],spOrders=[],spSales=[];
var SP_ID='${ca(i)}';
var SP_NAME='${ca(r)}';
var SP_CODE='${ca(s)}';
window.switchSPTab=function(t){
  document.getElementById('placeSection').classList.toggle('hidden',t!=='place');
  document.getElementById('ordersSection').classList.toggle('hidden',t!=='orders');
  document.getElementById('reportsSection').classList.toggle('hidden',t!=='reports');
  document.getElementById('customersSection').classList.toggle('hidden',t!=='customers');
  /* Desktop top tabs */
  var tabPlace=document.getElementById('tabPlace');if(tabPlace){tabPlace.classList.toggle('active',t==='place');}
  var tabOrders=document.getElementById('tabOrders');if(tabOrders){tabOrders.classList.toggle('active',t==='orders');}
  var tabReports=document.getElementById('tabReports');if(tabReports){tabReports.classList.toggle('active',t==='reports');}
  var tabCustomers=document.getElementById('tabCustomers');if(tabCustomers){tabCustomers.classList.toggle('active',t==='customers');}
  /* Mobile bottom nav */
  document.querySelectorAll('.sp-bnav-item').forEach(function(el){el.classList.toggle('active',el.getAttribute('data-tab')===t);});
  if(t==='orders')renderSPOrders();
  if(t==='customers')renderSPCustList();
  window.scrollTo(0,0);
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
window.updateSPTotals=function(){var total=spI.reduce(function(s,x){return s+x.a;},0);var bar=document.getElementById('spTotal');var valEl=document.getElementById('spTotalVal');if(total>0){bar.style.display='flex';if(valEl)valEl.textContent=fmt(total);}else{bar.style.display='none';}};
window.renderSI=function(){
  var html='';
  for(var i=0;i<spI.length;i++){
    var it=spI[i];
    html+='<div class="sp-item-card">';
    html+='<div class="sp-item-row">';
    html+='<div class="sp-item-product" style="grid-column:1/-1"><label style="font-size:10px;font-weight:600;color:var(--muted);margin-bottom:3px;display:block">Product</label><select id="sp_sel_'+i+'" onchange="spSelProd('+i+',this.value)"><option value="">Select Product</option>';
    for(var j=0;j<spP.length;j++){
      var p=spP[j];
      html+='<option value="'+p._key+'"'+(it.pk===p._key?' selected':'')+'>'+p.name+' ['+(p.stock||0)+']</option>';
    }
    html+='</select></div>';
    html+='<div><label style="font-size:10px;font-weight:600;color:var(--muted);margin-bottom:3px;display:block">Qty</label><input id="sp_qty_'+i+'" type="number" value="'+it.q+'" min="1" oninput="spChgQty('+i+',this.value)" style="text-align:center"></div>';
    html+='<div><label style="font-size:10px;font-weight:600;color:var(--muted);margin-bottom:3px;display:block">Rate</label><input id="sp_rate_'+i+'" type="number" value="'+it.r+'" oninput="spChgRate('+i+',this.value)" style="text-align:right" placeholder="Price"></div>';
    html+='</div>';
    html+='<div class="sp-item-footer"><div class="sp-item-amt" id="sp_amt_'+i+'">'+fmt(it.a)+'</div><button class="sp-item-rm" onclick="spRmItem('+i+')"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">delete</span> Remove</button></div>';
    html+='</div>';
  }
  document.getElementById('spItems').innerHTML=html;
  updateSPTotals();
};
window.renderSPOrders=function(){
  var sorted=spOrders.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'');});
  /* Desktop table */
  document.getElementById('spOrdBody').innerHTML=!sorted.length?'<tr><td colspan="5" class="empty">No orders yet</td></tr>':sorted.map(function(o){
    var badge=o.status==='pending'?'badge-warning':o.status==='approved'?'badge-success':o.status==='denied'?'badge-danger':'badge-info';
    return'<tr><td>'+o.date+'</td><td class="bold">'+o.orderNo+'</td><td>'+o.customerName+'</td><td class="r bold">'+fmt(o.total)+'</td><td><span class="badge '+badge+'">'+(o.status||'pending')+'</span></td></tr>';
  }).join('');
  /* Mobile cards */
  var cardsEl=document.getElementById('spOrdCards');
  if(cardsEl){cardsEl.innerHTML=!sorted.length?'<div class="card" style="text-align:center;color:var(--muted);padding:32px">No orders yet</div>':sorted.map(function(o){
    var badge=o.status==='pending'?'badge-warning':o.status==='approved'?'badge-success':o.status==='denied'?'badge-danger':'badge-info';
    return'<div class="sp-order-card"><div class="sp-oc-top"><div><div class="sp-oc-no">'+o.orderNo+'</div><div class="sp-oc-date">'+o.date+'</div></div><span class="badge '+badge+'">'+(o.status||'pending')+'</span></div><div class="sp-oc-cust">'+o.customerName+'</div><div class="sp-oc-bottom"><div class="sp-oc-total">'+fmt(o.total)+'</div></div></div>';
  }).join('');}
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
  var custData=spC.map(function(c){
    var cs=spSales.filter(function(s){return s.customerId===c._key;});
    var totalS=cs.reduce(function(a,s){return a+(s.total||0);},0);
    var totalP=cs.reduce(function(a,s){return a+(s.paid||0);},0);
    var out=Math.max(0,totalS-totalP);
    return{c:c,totalS:totalS,out:out};
  });
  /* Desktop table */
  var rows=custData.map(function(d){return'<tr><td class="bold">'+d.c.name+'</td><td class="text-muted">'+(d.c.phone||'')+'</td><td class="text-muted">'+(d.c.address||'')+'</td><td class="r">'+fmt(d.totalS)+'</td><td class="r '+(d.out>0?'text-danger bold':'')+'">'+fmt(d.out)+'</td></tr>';}).join('');
  document.getElementById('spCustListBody').innerHTML=rows||'<tr><td colspan="5" class="empty">No tagged customers</td></tr>';
  /* Mobile cards */
  var cardsEl=document.getElementById('spCustCards');
  if(cardsEl){cardsEl.innerHTML=!custData.length?'<div class="card" style="text-align:center;color:var(--muted);padding:32px">No tagged customers</div>':custData.map(function(d){return'<div class="sp-cust-card"><div class="sp-cc-name">'+d.c.name+'</div><div class="sp-cc-info">'+(d.c.phone?'<span class="material-symbols-outlined" style="font-size:12px;vertical-align:middle">phone</span> '+d.c.phone:'')+(d.c.address?' &bull; '+d.c.address:'')+'</div><div class="sp-cc-stats"><div class="sp-cc-stat"><div class="label">Total Sales</div><div class="value">'+fmt(d.totalS)+'</div></div><div class="sp-cc-stat"><div class="label">Outstanding</div><div class="value '+(d.out>0?'text-danger':'text-success')+'">'+fmt(d.out)+'</div></div></div></div>';}).join('');}
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
<\/script></body></html>`}function ke(){var a=new Date().toISOString().slice(0,10),t=a.slice(0,7);return`
<div class="page-header"><div><div class="page-title">Dashboard</div><div class="page-sub">Business overview</div></div></div>
<div class="card no-print" style="margin-bottom:14px;padding:14px 16px">
<div class="form-row" style="align-items:end"><div><label>From</label><input type="date" id="dashFrom" value="${t}-01"></div><div><label>To</label><input type="date" id="dashTo" value="${a}"></div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-primary btn-sm" onclick="renderDash()">Apply</button><button class="btn btn-outline btn-xs" onclick="setDashRange('month')">This Month</button><button class="btn btn-outline btn-xs" onclick="setDashRange('today')">Today</button><button class="btn btn-outline btn-xs" onclick="setDashRange('year')">This Year</button><button class="btn btn-outline btn-xs" onclick="setDashRange('all')">All Time</button></div></div>
</div>
<div class="stats" id="stats"></div>
<div class="dash-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px"><div class="card"><div class="section-title">Recent Sales</div><div id="recentSales" class="table-wrap"></div></div><div class="card"><div class="section-title">Recent Purchases</div><div id="recentPurchases" class="table-wrap"></div></div></div>
<div class="dash-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:16px"><div class="card"><div class="section-title">Low Stock Alerts</div><div id="lowStockAlerts" class="table-wrap"></div></div><div class="card"><div class="section-title">Pending Orders</div><div id="pendingOrders" class="table-wrap"></div></div></div>
<style>@media(max-width:768px){.dash-grid{grid-template-columns:1fr !important;gap:10px !important}}</style>
<script>
var _dashData=null;
window.setDashRange=function(r){var today=new Date();var from='',to=todayISO();
if(r==='today'){from=to}
else if(r==='month'){from=today.getFullYear()+'-'+(today.getMonth()+1<10?'0':'')+(today.getMonth()+1)+'-01'}
else if(r==='year'){from=today.getFullYear()+'-01-01'}
else{from='';to=''}
document.getElementById('dashFrom').value=from;document.getElementById('dashTo').value=to;renderDash()};
(async function(){_dashData=await Promise.all([loadList('product:'),loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('expense:'),loadList('party:'),loadList('order:'),loadList('bank:')]);renderDash()})();
window.renderDash=function(){if(!_dashData)return;
var products=_dashData[0],allSales=_dashData[1],allPurchases=_dashData[2],allPayments=_dashData[3],allExpenses=_dashData[4],parties=_dashData[5],allOrders=_dashData[6]||[],banks=_dashData[7]||[];
var from=document.getElementById('dashFrom').value;var to=document.getElementById('dashTo').value;
var sales=allSales.filter(function(s){return(!from||s.date>=from)&&(!to||s.date<=to)});
var purchases=allPurchases.filter(function(p){return(!from||p.date>=from)&&(!to||p.date<=to)});
var payments=allPayments.filter(function(p){return(!from||p.date>=from)&&(!to||p.date<=to)});
var expenses=allExpenses.filter(function(e){return(!from||e.date>=from)&&(!to||e.date<=to)});
var orders=allOrders.filter(function(o){return(!from||o.date>=from)&&(!to||o.date<=to)});
var customers=parties.filter(function(p){return p.type==='customer'});var suppliers=parties.filter(function(p){return p.type==='supplier'});var totalSales=sales.reduce(function(s,x){return s+(x.total||0)},0);var totalPurchases=purchases.reduce(function(s,x){return s+(x.total||0)},0);var totalExpenses=expenses.reduce(function(s,x){return s+(x.amount||0)},0);
var receivables=0;customers.forEach(function(c){var cob=c.openingBalance||0;var cs=sales.filter(function(s){return s.customerId===c._key});var cr=payments.filter(function(p){return(p.party===c.name)&&p.type==='receipt'&&p.status==='done'&&!p._autoInvoice&&!(p.billKeys&&p.billKeys.length)});var td=cs.reduce(function(s,x){return s+(x.total||0)},0)+(cob>0?cob:0);var tr=cs.reduce(function(s,x){return s+(x.paid||0)},0)+cr.reduce(function(s,x){return s+(x.amount||0)},0)+(cob<0?Math.abs(cob):0);receivables+=Math.max(0,td-tr)});
var payables=0;suppliers.forEach(function(s){var sob=s.openingBalance||0;var sp=purchases.filter(function(p){return p.supplierId===s._key});var py=payments.filter(function(p){return p.party===s.name&&p.type==='payment'&&p.status==='done'&&!p._autoInvoice&&!(p.billKeys&&p.billKeys.length)});var td=sp.reduce(function(a,x){return a+(x.total||0)},0)+(sob>0?sob:0);var tp=sp.reduce(function(a,x){return a+(x.paid||0)},0)+py.reduce(function(a,x){return a+(x.amount||0)},0)+(sob<0?Math.abs(sob):0);payables+=Math.max(0,td-tp)});
var bankBal=banks.reduce(function(s,b){return s+(b.balance||b.openingBalance||0)},0);
var cashReceipts=payments.filter(function(p){return p.method==='cash'&&p.type==='receipt'&&p.status==='done'&&!p._autoInvoice}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashPayouts=payments.filter(function(p){return p.method==='cash'&&p.type==='payment'&&p.status==='done'&&!p._autoInvoice}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashExpenses2=expenses.filter(function(e){return e.method==='cash'}).reduce(function(s,e){return s+(e.amount||0)},0);
var salePaidCash=sales.filter(function(s){return s.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var purPaidCash=purchases.filter(function(p){return p.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var trfToCash=payments.filter(function(p){return p.type==='transfer'&&p.toAcc==='Cash'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var trfFromCash=payments.filter(function(p){return p.type==='transfer'&&p.fromAcc==='Cash'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashInHand=salePaidCash+cashReceipts-purPaidCash-cashPayouts-cashExpenses2+trfToCash-trfFromCash;
document.getElementById('stats').innerHTML=[{l:'Sales',v:fmt(totalSales),c:'var(--accent)'},{l:'Purchases',v:fmt(totalPurchases),c:'var(--primary)'},{l:'Expenses',v:fmt(totalExpenses),c:'var(--warning)'},{l:'Cash in Hand',v:fmt(cashInHand),c:cashInHand>=0?'var(--accent)':'var(--danger)'},{l:'Bank Balance',v:fmt(bankBal),c:'var(--primary)'},{l:'Receivables',v:fmt(receivables),c:'var(--info)'},{l:'Payables',v:fmt(payables),c:'var(--danger)'},{l:'Products',v:products.length,c:'var(--primary)'},{l:'Pending Orders',v:orders.filter(function(o){return o.status==='pending'}).length,c:'var(--warning)'}].map(function(s){return'<div class="stat"><div class="label">'+s.l+'</div><div class="value" style="color:'+s.c+'">'+s.v+'</div></div>'}).join('');
var rS=sales.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'')}).slice(0,5);document.getElementById('recentSales').innerHTML=rS.length?'<table class="tbl"><thead><tr><th>Date</th><th>Invoice</th><th>Customer</th><th class="r">Total</th></tr></thead><tbody>'+rS.map(function(s){return'<tr><td>'+s.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td>'+s.customerName+'</td><td class="r bold">'+fmt(s.total)+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">No sales</div>';
var rP=purchases.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'')}).slice(0,5);document.getElementById('recentPurchases').innerHTML=rP.length?'<table class="tbl"><thead><tr><th>Date</th><th>#</th><th>Supplier</th><th class="r">Total</th></tr></thead><tbody>'+rP.map(function(p){return'<tr><td>'+p.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27purchase\\x27,\\x27'+p._key+'\\x27)">'+p.purchaseNo+'</span></td><td>'+p.supplierName+'</td><td class="r bold">'+fmt(p.total)+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">No purchases</div>';
var ls=products.filter(function(p){return(p.stock||0)<=5}).sort(function(a,b){return(a.stock||0)-(b.stock||0)}).slice(0,8);document.getElementById('lowStockAlerts').innerHTML=ls.length?'<table class="tbl"><thead><tr><th>Product</th><th class="r">Stock</th></tr></thead><tbody>'+ls.map(function(p){return'<tr><td>'+p.name+'</td><td class="r bold '+(p.stock<=0?'text-danger':'text-warning')+'">'+p.stock+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">All OK</div>';
var po=allOrders.filter(function(o){return o.status==='pending'}).slice(0,5);document.getElementById('pendingOrders').innerHTML=po.length?'<table class="tbl"><thead><tr><th>Order#</th><th>Customer</th><th class="r">Total</th></tr></thead><tbody>'+po.map(function(o){return'<tr><td>'+o.orderNo+'</td><td>'+o.customerName+'</td><td class="r bold">'+fmt(o.total)+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">None</div>'};
<\/script>`}function xe(){return`
<div class="page-header"><div><div class="page-title">Inventory</div><div class="page-sub">Products & stock (Group-wise)</div></div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-outline" onclick="openImportProd()"><span class="material-symbols-outlined" style="font-size:16px">upload_file</span> Import Excel</button><button class="btn btn-outline" onclick="openGroupMgr()"><span class="material-symbols-outlined" style="font-size:16px">folder</span> Manage Groups</button><button class="btn btn-primary" onclick="openAddP()"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add Product</button></div></div>
<div class="form-row" style="margin-bottom:14px"><div class="search-wrap" style="margin-bottom:0"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input placeholder="Search..." oninput="filterP(this.value)" id="pSearch"></div><div><label>Group Filter</label><select id="pGroupFilter" onchange="filterP(document.getElementById('pSearch').value)"><option value="">All Groups</option></select></div></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Group</th><th>SKU</th><th class="r">Buy</th><th class="r">Sell</th><th class="r">Stock</th><th class="r">Act</th></tr></thead><tbody id="pBody"></tbody></table></div></div>
<div class="modal-overlay" id="addProduct"><div class="modal"><h3 id="pTitle">Add Product</h3><input type="hidden" id="editPK"><div class="form-group"><label>Name</label><input id="pN" placeholder="Name"></div><div class="form-row"><div><label>Group</label><select id="pG"><option value="">No Group</option></select></div><div><label>SKU</label><input id="pS" placeholder="Auto"></div></div><div class="form-row"><div><label>Unit</label><input id="pU" value="pcs"></div><div><label>Stock</label><input type="number" id="pSt" placeholder="0"></div></div><div class="form-row"><div><label>Purchase Price</label><input type="number" id="pB" placeholder="0"></div><div><label>Sale Price</label><input type="number" id="pSl" placeholder="0"></div></div><div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('addProduct')">Cancel</button><button class="btn btn-primary" onclick="saveP()">Save</button></div></div></div>
<div class="modal-overlay" id="groupMgr"><div class="modal"><h3>Product Groups</h3>
<div style="display:flex;gap:6px;margin-bottom:12px"><input id="newGroupName" placeholder="New group name"><button class="btn btn-primary" onclick="saveGroup()">Add</button></div>
<div id="groupList"></div>
<div style="text-align:right;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('groupMgr')">Close</button></div>
</div></div>
<div class="modal-overlay" id="importProdModal"><div class="modal" style="max-width:650px"><h3>Import Products from Excel</h3>
<div style="margin-bottom:12px;padding:10px;background:var(--bg);border-radius:8px;font-size:12px"><b>Required columns:</b> Name<br><b>Optional columns:</b> Group, SKU, Unit, Purchase Price, Sale Price, Stock<br><b>Note:</b> If a Group doesn't exist, it will be auto-created.</div>
<div style="margin-bottom:12px"><button class="btn btn-outline btn-sm" onclick="downloadProdTemplate()"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">download</span> Download Template</button></div>
<div class="form-group"><label>Select Excel File (.xlsx, .xls, .csv)</label><input type="file" id="prodImportFile" accept=".xlsx,.xls,.csv"></div>
<div id="prodImportPreview" style="display:none;margin:12px 0;max-height:250px;overflow:auto"></div>
<div id="prodImportStatus" style="margin:8px 0"></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('importProdModal')">Cancel</button><button class="btn btn-primary" id="prodImportBtn" onclick="doImportProd()" disabled>Import</button></div>
</div></div>
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"><\/script>
<script>
var prods=[],ek=null,prodGroups=[],_prodImportRows=[];
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
window.openImportProd=function(){document.getElementById('prodImportFile').value='';document.getElementById('prodImportPreview').style.display='none';document.getElementById('prodImportStatus').innerHTML='';document.getElementById('prodImportBtn').disabled=true;_prodImportRows=[];openModal('importProdModal')}
window.downloadProdTemplate=function(){var ws=XLSX.utils.aoa_to_sheet([['Name','Group','SKU','Unit','Purchase Price','Sale Price','Stock'],['Example Product','GroupA','EXP-001','pcs','100','150','50'],['Another Item','GroupB','','kg','200','280','30']]);var wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Template');XLSX.writeFile(wb,'product_import_template.xlsx')}
document.getElementById('prodImportFile').addEventListener('change',function(e){var file=e.target.files[0];if(!file)return;var reader=new FileReader();reader.onload=function(ev){try{var wb=XLSX.read(ev.target.result,{type:'array'});var ws=wb.Sheets[wb.SheetNames[0]];var rows=XLSX.utils.sheet_to_json(ws,{defval:''});if(!rows.length){document.getElementById('prodImportStatus').innerHTML='<span style="color:var(--danger)">No data found in file</span>';return}_prodImportRows=rows.map(function(r){var name=String(r['Name']||r['name']||r['NAME']||r['Product Name']||r['product name']||'').trim();var group=String(r['Group']||r['group']||r['GROUP']||r['Category']||'').trim();var sku=String(r['SKU']||r['sku']||r['Code']||'').trim();var unit=String(r['Unit']||r['unit']||'pcs').trim();var buy=parseFloat(r['Purchase Price']||r['purchase price']||r['Buy']||r['buy']||r['Cost']||0)||0;var sell=parseFloat(r['Sale Price']||r['sale price']||r['Sell']||r['sell']||r['Price']||0)||0;var stock=parseFloat(r['Stock']||r['stock']||r['Qty']||r['qty']||r['Quantity']||0)||0;return{name:name,group:group,sku:sku,unit:unit,purchasePrice:buy,salePrice:sell,stock:stock}}).filter(function(r){return r.name});
var prev=document.getElementById('prodImportPreview');prev.style.display='block';prev.innerHTML='<div style="font-weight:600;margin-bottom:6px">Preview ('+_prodImportRows.length+' products):</div><table class="tbl" style="font-size:11px"><thead><tr><th>Name</th><th>Group</th><th>SKU</th><th>Unit</th><th class="r">Buy</th><th class="r">Sell</th><th class="r">Stock</th></tr></thead><tbody>'+_prodImportRows.slice(0,20).map(function(r){return'<tr><td>'+r.name+'</td><td>'+r.group+'</td><td>'+r.sku+'</td><td>'+r.unit+'</td><td class="r">'+r.purchasePrice+'</td><td class="r">'+r.salePrice+'</td><td class="r">'+r.stock+'</td></tr>'}).join('')+(_prodImportRows.length>20?'<tr><td colspan="7" class="text-muted">...and '+(_prodImportRows.length-20)+' more rows</td></tr>':'')+'</tbody></table>';
document.getElementById('prodImportBtn').disabled=false;document.getElementById('prodImportStatus').innerHTML='<span style="color:var(--accent)">'+_prodImportRows.length+' valid products ready to import</span>'}catch(err){document.getElementById('prodImportStatus').innerHTML='<span style="color:var(--danger)">Error reading file: '+err.message+'</span>'}};reader.readAsArrayBuffer(file)})
window.doImportProd=async function(){if(!_prodImportRows.length)return;document.getElementById('prodImportBtn').disabled=true;document.getElementById('prodImportStatus').innerHTML='<span style="color:var(--primary)">Importing...</span>';var ok=0,fail=0;
var existingGroupNames=prodGroups.map(function(g){return g.name.toLowerCase()});var newGroups={};
for(var i=0;i<_prodImportRows.length;i++){try{var r=_prodImportRows[i];if(r.group&&!existingGroupNames.includes(r.group.toLowerCase())&&!newGroups[r.group.toLowerCase()]){await saveItem('prodgroup:',{name:r.group});newGroups[r.group.toLowerCase()]=true;existingGroupNames.push(r.group.toLowerCase())}var sku=r.sku||(r.name.slice(0,3).toUpperCase()+'-'+Math.random().toString(36).slice(2,6).toUpperCase());var d={name:r.name,group:r.group,sku:sku,unit:r.unit||'pcs',purchasePrice:r.purchasePrice,salePrice:r.salePrice,stock:r.stock};await saveItem('product:',d);ok++}catch(e){fail++}}
invalidateCache('product:');invalidateCache('prodgroup:');loadP();closeModal('importProdModal');showToast('Imported '+ok+' products'+(fail?' ('+fail+' failed)':''),'success');_prodImportRows=[]}
loadP();
<\/script>`}function Se(){return`
<div class="page-header"><div><div class="page-title">Stock Check</div><div class="page-sub">Quick stock availability lookup</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('sckPrint','Stock Check')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('sckTbl','StockCheck')">Export XLS</button></div></div>
<div class="form-row" style="margin-bottom:14px"><div class="search-wrap" style="margin-bottom:0"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input id="sckSearch" placeholder="Search product name..." oninput="filterSck()" style="padding:12px 12px 12px 36px;font-size:15px"></div><div><label>Group</label><select id="sckGroup" onchange="filterSck()"><option value="">All Groups</option></select></div></div>
<div id="sckPrint"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="sckTbl"><thead><tr><th>Product Name</th><th>Group</th><th class="r">Available Qty</th></tr></thead><tbody id="sckBody"></tbody></table></div></div></div>
<script>
var sckProds=[],sckGroups=[];
async function loadSck(){var d=await Promise.all([loadList('product:'),loadList('prodgroup:')]);sckProds=d[0];sckGroups=d[1]||[];sckProds.sort(function(a,b){return(a.name||'').localeCompare(b.name||'')});document.getElementById('sckGroup').innerHTML='<option value="">All Groups</option>'+sckGroups.map(function(g){return'<option value="'+g.name+'">'+g.name+'</option>'}).join('');filterSck()}
function renderSck(list){document.getElementById('sckBody').innerHTML=!list.length?'<tr><td colspan="3" class="empty">No products found</td></tr>':list.map(function(p){var st=p.stock||0;return'<tr><td class="bold" style="font-size:14px">'+p.name+'</td><td>'+(p.group?'<span class="badge badge-info">'+p.group+'</span>':'-')+'</td><td class="r bold" style="font-size:15px;'+(st<=0?'color:var(--danger)':st<=5?'color:var(--warning)':'color:var(--accent)')+'">'+st+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="2">TOTAL PRODUCTS: '+list.length+'</td><td class="r">'+list.reduce(function(s,p){return s+(p.stock||0)},0)+'</td></tr>'}
window.filterSck=function(){var t=(document.getElementById('sckSearch').value||'').trim().toLowerCase();var gf=document.getElementById('sckGroup').value;var fl=sckProds.filter(function(p){return(!t||(p.name||'').toLowerCase().includes(t))&&(!gf||p.group===gf)});renderSck(fl)}
loadSck();
<\/script>`}function we(){return`
<div class="page-header"><div><div class="page-title">Customers & Suppliers</div><div class="page-sub">Contacts</div></div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-outline" onclick="openImportParty()"><span class="material-symbols-outlined" style="font-size:16px">upload_file</span> Import Excel</button><button class="btn btn-primary" onclick="openAddParty()"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add</button></div></div>
<div class="tabs"><button class="tab active" onclick="switchPT('customer',this)">Customers</button><button class="tab" onclick="switchPT('supplier',this)">Suppliers</button></div>
<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input placeholder="Search..." oninput="filterPa(this.value)"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Phone</th><th>Thana</th><th>Salesperson</th><th class="r">Opening Bal</th><th class="r">Credit Limit</th><th class="r">Balance</th><th class="r">Act</th></tr></thead><tbody id="paBody"></tbody></table></div></div>
<div class="modal-overlay" id="addParty"><div class="modal" style="max-width:620px"><h3 id="paTitle">Add</h3><input type="hidden" id="paEK">
<div class="form-group"><label>Name</label><input id="paN"></div>
<div class="form-row"><div><label>Phone</label><input id="paPh"></div><div><label>Opening Balance</label><input type="number" id="paOB" placeholder="0" step="any"><div style="font-size:10px;color:var(--text-muted);margin-top:2px">Positive = Receivable/Payable, Negative = Advance</div></div></div>
<div class="form-row"><div><label>Credit Limit</label><input type="number" id="paCL" placeholder="0=none"></div><div></div></div>
<div class="form-group"><label>Address</label><input id="paAd"></div>
<div class="section-title" style="margin-top:8px;font-size:12px">Location (auto-fill enabled)</div>
<div class="form-row"><div><label>Division</label><div class="sr-wrap"><input id="paDv" placeholder="Type to search..." oninput="geoFilter('paDv','paDvL','division')" onfocus="geoShowList('paDvL')" autocomplete="off"><div class="sr-list" id="paDvL"></div></div></div><div><label>District</label><div class="sr-wrap"><input id="paDs" placeholder="Type to search..." oninput="geoFilter('paDs','paDsL','district')" onfocus="geoShowList('paDsL')" autocomplete="off"><div class="sr-list" id="paDsL"></div></div></div></div>
<div class="form-row"><div><label>Thana</label><div class="sr-wrap"><input id="paTh" placeholder="Type to search..." oninput="geoFilter('paTh','paThL','thana')" onfocus="geoShowList('paThL')" autocomplete="off"><div class="sr-list" id="paThL"></div></div></div><div><label>Post Office</label><div class="sr-wrap"><input id="paPo" placeholder="Type to search..." oninput="geoFilter('paPo','paPoL','postoffice')" onfocus="geoShowList('paPoL')" autocomplete="off"><div class="sr-list" id="paPoL"></div></div></div></div>
<div class="form-row"><div><label>Postcode</label><div class="sr-wrap"><input id="paPc" placeholder="Type to search..." oninput="geoFilter('paPc','paPcL','postcode')" onfocus="geoShowList('paPcL')" autocomplete="off"><div class="sr-list" id="paPcL"></div></div></div><div></div></div>
<div class="form-group" id="paSPDiv"><label>Salesperson</label><select id="paSP"><option value="">None</option></select></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('addParty')">Cancel</button><button class="btn btn-primary" onclick="savePa()">Save</button></div>
</div></div>
<div class="modal-overlay" id="importPartyModal"><div class="modal" style="max-width:700px"><h3>Import Customers/Suppliers from Excel</h3>
<div style="margin-bottom:12px;padding:10px;background:var(--bg);border-radius:8px;font-size:12px"><b>Columns:</b> Name, Phone, Address, Division, District, Thana, Post Office, Postcode, Salesperson, Opening Balance, Credit Limit<br><b>Note:</b> Imports into currently selected tab. Location fields are auto-validated against BD geo data.</div>
<div style="margin-bottom:12px"><button class="btn btn-outline btn-sm" onclick="downloadPartyTemplate()"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">download</span> Download Template</button></div>
<div class="form-group"><label>Select Excel File (.xlsx, .xls, .csv)</label><input type="file" id="paImportFile" accept=".xlsx,.xls,.csv"></div>
<div id="paImportPreview" style="display:none;margin:12px 0;max-height:250px;overflow:auto"></div>
<div id="paImportStatus" style="margin:8px 0"></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('importPartyModal')">Cancel</button><button class="btn btn-primary" id="paImportBtn" onclick="doImportParty()" disabled>Import</button></div>
</div></div>
<style>.sr-wrap{position:relative}.sr-list{display:none;position:absolute;top:100%;left:0;right:0;max-height:180px;overflow-y:auto;background:var(--card);border:1px solid var(--border);border-radius:6px;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,.15)}.sr-list.active{display:block}.sr-list div{padding:6px 10px;cursor:pointer;font-size:12px;border-bottom:1px solid var(--border)}.sr-list div:hover,.sr-list div.hl{background:var(--accent-light);color:var(--accent)}</style>
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"><\/script>
<script>
var aP=[],pT='customer',paSPList=[],_paImportRows=[];
var _BD_GEO=[["Dhaka","Dhaka","Demra","Demra","1360"],["Dhaka","Dhaka","Demra","Matuail","1362"],["Dhaka","Dhaka","Demra","Sarulia","1361"],["Dhaka","Dhaka","Dhaka Cantt.","Dhaka CantonmentTSO","1206"],["Dhaka","Dhaka","Dhamrai","Dhamrai","1350"],["Dhaka","Dhaka","Dhamrai","Kamalpur","1351"],["Dhaka","Dhaka","Dhanmondi","Jigatala TSO","1209"],["Dhaka","Dhaka","Gulshan","Banani TSO","1213"],["Dhaka","Dhaka","Gulshan","Gulshan Model Town","1212"],["Dhaka","Dhaka","Jatrabari","Dhania TSO","1232"],["Dhaka","Dhaka","Joypara","Joypara","1330"],["Dhaka","Dhaka","Joypara","Narisha","1332"],["Dhaka","Dhaka","Joypara","Palamganj","1331"],["Dhaka","Dhaka","Keraniganj","Ati","1312"],["Dhaka","Dhaka","Keraniganj","Dhaka Jute Mills","1311"],["Dhaka","Dhaka","Keraniganj","Kalatia","1313"],["Dhaka","Dhaka","Keraniganj","Keraniganj","1310"],["Dhaka","Dhaka","Khilgaon","KhilgaonTSO","1219"],["Dhaka","Dhaka","Khilkhet","KhilkhetTSO","1229"],["Dhaka","Dhaka","Lalbag","Posta TSO","1211"],["Dhaka","Dhaka","Mirpur","Mirpur TSO","1216"],["Dhaka","Dhaka","Mohammadpur","Mohammadpur Housing","1207"],["Dhaka","Dhaka","Mohammadpur","Sangsad BhabanTSO","1225"],["Dhaka","Dhaka","Motijheel","BangabhabanTSO","1222"],["Dhaka","Dhaka","Motijheel","DilkushaTSO","1223"],["Dhaka","Dhaka","Nawabganj","Agla","1323"],["Dhaka","Dhaka","Nawabganj","Churain","1325"],["Dhaka","Dhaka","Nawabganj","Daudpur","1322"],["Dhaka","Dhaka","Nawabganj","Hasnabad","1321"],["Dhaka","Dhaka","Nawabganj","Khalpar","1324"],["Dhaka","Dhaka","Nawabganj","Nawabganj","1320"],["Dhaka","Dhaka","New market","New Market TSO","1205"],["Dhaka","Dhaka","Palton","Dhaka GPO","1000"],["Dhaka","Dhaka","Ramna","Shantinagr TSO","1217"],["Dhaka","Dhaka","Sabujbag","Basabo TSO","1214"],["Dhaka","Dhaka","Savar","Amin Bazar","1348"],["Dhaka","Dhaka","Savar","Dairy Farm","1341"],["Dhaka","Dhaka","Savar","EPZ","1349"],["Dhaka","Dhaka","Savar","Jahangirnagar Univer","1342"],["Dhaka","Dhaka","Savar","Kashem Cotton Mills","1346"],["Dhaka","Dhaka","Savar","Rajphulbaria","1347"],["Dhaka","Dhaka","Savar","Savar","1340"],["Dhaka","Dhaka","Savar","Savar Canttonment","1344"],["Dhaka","Dhaka","Savar","Saver P.A.T.C","1343"],["Dhaka","Dhaka","Savar","Shimulia","1345"],["Dhaka","Dhaka","Sutrapur","Dhaka Sadar HO","1100"],["Dhaka","Dhaka","Sutrapur","Gendaria TSO","1204"],["Dhaka","Dhaka","Sutrapur","Wari TSO","1203"],["Dhaka","Dhaka","Tejgaon","Tejgaon TSO","1215"],["Dhaka","Dhaka","Tejgaon Industrial Area","Dhaka Politechnic","1208"],["Dhaka","Dhaka","Uttara","Uttara Model TwonTSO","1230"],["Dhaka","Faridpur","Alfadanga","Alfadanga","7870"],["Dhaka","Faridpur","Bhanga","Bhanga","7830"],["Dhaka","Faridpur","Boalmari","Boalmari","7860"],["Dhaka","Faridpur","Boalmari","Rupatpat","7861"],["Dhaka","Faridpur","Charbhadrasan","Charbadrashan","7810"],["Dhaka","Faridpur","Faridpur Sadar","Ambikapur","7802"],["Dhaka","Faridpur","Faridpur Sadar","Baitulaman Politecni","7803"],["Dhaka","Faridpur","Faridpur Sadar","Faridpursadar","7800"],["Dhaka","Faridpur","Faridpur Sadar","Kanaipur","7801"],["Dhaka","Faridpur","Madukhali","Kamarkali","7851"],["Dhaka","Faridpur","Madukhali","Madukhali","7850"],["Dhaka","Faridpur","Nagarkanda","Nagarkanda","7840"],["Dhaka","Faridpur","Nagarkanda","Talma","7841"],["Dhaka","Faridpur","Sadarpur","Bishwa jaker Manjil","7822"],["Dhaka","Faridpur","Sadarpur","Hat Krishapur","7821"],["Dhaka","Faridpur","Sadarpur","Sadarpur","7820"],["Dhaka","Faridpur","Shriangan","Shriangan","7804"],["Dhaka","Gazipur","Gazipur Sadar","B.O.F","1703"],["Dhaka","Gazipur","Gazipur Sadar","B.R.R","1701"],["Dhaka","Gazipur","Gazipur Sadar","Chandna","1702"],["Dhaka","Gazipur","Gazipur Sadar","Gazipur Sadar","1700"],["Dhaka","Gazipur","Gazipur Sadar","National University","1704"],["Dhaka","Gazipur","Kaliakaar","Kaliakaar","1750"],["Dhaka","Gazipur","Kaliakaar","Safipur","1751"],["Dhaka","Gazipur","Kaliganj","Kaliganj","1720"],["Dhaka","Gazipur","Kaliganj","Pubail","1721"],["Dhaka","Gazipur","Kaliganj","Santanpara","1722"],["Dhaka","Gazipur","Kaliganj","Vaoal Jamalpur","1723"],["Dhaka","Gazipur","Kapashia","kapashia","1730"],["Dhaka","Gazipur","Monnunagar","Ershad Nagar","1712"],["Dhaka","Gazipur","Monnunagar","Monnunagar","1710"],["Dhaka","Gazipur","Monnunagar","Nishat Nagar","1711"],["Dhaka","Gazipur","Sreepur","Barmi","1743"],["Dhaka","Gazipur","Sreepur","Bashamur","1747"],["Dhaka","Gazipur","Sreepur","Boubi","1748"],["Dhaka","Gazipur","Sreepur","Kawraid","1745"],["Dhaka","Gazipur","Sreepur","Satkhamair","1744"],["Dhaka","Gazipur","Sreepur","Sreepur","1740"],["Dhaka","Gazipur","Sripur","Rajendrapur","1741"],["Dhaka","Gazipur","Sripur","Rajendrapur Canttome","1742"],["Dhaka","Gopalganj","Gopalganj Sadar","Barfa","8102"],["Dhaka","Gopalganj","Gopalganj Sadar","Chandradighalia","8013"],["Dhaka","Gopalganj","Gopalganj Sadar","Gopalganj Sadar","8100"],["Dhaka","Gopalganj","Gopalganj Sadar","Ulpur","8101"],["Dhaka","Gopalganj","Kashiani","Jonapur","8133"],["Dhaka","Gopalganj","Kashiani","Kashiani","8130"],["Dhaka","Gopalganj","Kashiani","Ramdia College","8131"],["Dhaka","Gopalganj","Kashiani","Ratoil","8132"],["Dhaka","Gopalganj","Kotalipara","Kotalipara","8110"],["Dhaka","Gopalganj","Maksudpur","Batkiamari","8141"],["Dhaka","Gopalganj","Maksudpur","Khandarpara","8142"],["Dhaka","Gopalganj","Maksudpur","Maksudpur","8140"],["Dhaka","Gopalganj","Tungipara","Patgati","8121"],["Dhaka","Gopalganj","Tungipara","Tungipara","8120"],["Dhaka","Jamalpur","Dewangonj","Dewangonj","2030"],["Dhaka","Jamalpur","Dewangonj","Dewangonj S. Mills","2031"],["Dhaka","Jamalpur","Islampur","Durmoot","2021"],["Dhaka","Jamalpur","Islampur","Gilabari","2022"],["Dhaka","Jamalpur","Islampur","Islampur","2020"],["Dhaka","Jamalpur","Jamalpur","Jamalpur","2000"],["Dhaka","Jamalpur","Jamalpur","Nandina","2001"],["Dhaka","Jamalpur","Jamalpur","Narundi","2002"],["Dhaka","Jamalpur","Malandah","Jamalpur","2011"],["Dhaka","Jamalpur","Malandah","Mahmoodpur","2013"],["Dhaka","Jamalpur","Malandah","Malancha","2012"],["Dhaka","Jamalpur","Malandah","Malandah","2010"],["Dhaka","Jamalpur","Mathargonj","Balijhuri","2041"],["Dhaka","Jamalpur","Mathargonj","Mathargonj","2040"],["Dhaka","Jamalpur","Shorishabari","Bausee","2052"],["Dhaka","Jamalpur","Shorishabari","Gunerbari","2051"],["Dhaka","Jamalpur","Shorishabari","Jagannath Ghat","2053"],["Dhaka","Jamalpur","Shorishabari","Jamuna Sar Karkhana","2055"],["Dhaka","Jamalpur","Shorishabari","Pingna","2054"],["Dhaka","Jamalpur","Shorishabari","Shorishabari","2050"],["Dhaka","Kishoreganj","Bajitpur","Bajitpur","2336"],["Dhaka","Kishoreganj","Bajitpur","Laksmipur","2338"],["Dhaka","Kishoreganj","Bajitpur","Sararchar","2337"],["Dhaka","Kishoreganj","Bhairob","Bhairab","2350"],["Dhaka","Kishoreganj","Hossenpur","Hossenpur","2320"],["Dhaka","Kishoreganj","Itna","Itna","2390"],["Dhaka","Kishoreganj","Karimganj","Karimganj","2310"],["Dhaka","Kishoreganj","Katiadi","Gochhihata","2331"],["Dhaka","Kishoreganj","Katiadi","Katiadi","2330"],["Dhaka","Kishoreganj","Kishoreganj Sadar","Kishoreganj S.Mills","2301"],["Dhaka","Kishoreganj","Kishoreganj Sadar","Kishoreganj Sadar","2300"],["Dhaka","Kishoreganj","Kishoreganj Sadar","Maizhati","2302"],["Dhaka","Kishoreganj","Kishoreganj Sadar","Nilganj","2303"],["Dhaka","Kishoreganj","Kuliarchar","Chhoysuti","2341"],["Dhaka","Kishoreganj","Kuliarchar","Kuliarchar","2340"],["Dhaka","Kishoreganj","Mithamoin","Abdullahpur","2371"],["Dhaka","Kishoreganj","Mithamoin","MIthamoin","2370"],["Dhaka","Kishoreganj","Nikli","Nikli","2360"],["Dhaka","Kishoreganj","Ostagram","Ostagram","2380"],["Dhaka","Kishoreganj","Pakundia","Pakundia","2326"],["Dhaka","Kishoreganj","Tarial","Tarial","2316"],["Dhaka","Madaripur","Barhamganj","Bahadurpur","7932"],["Dhaka","Madaripur","Barhamganj","Barhamganj","7930"],["Dhaka","Madaripur","Barhamganj","Nilaksmibandar","7931"],["Dhaka","Madaripur","Barhamganj","Umedpur","7933"],["Dhaka","Madaripur","kalkini","Kalkini","7920"],["Dhaka","Madaripur","kalkini","Sahabrampur","7921"],["Dhaka","Madaripur","Madaripur Sadar","Charmugria","7901"],["Dhaka","Madaripur","Madaripur Sadar","Habiganj","7903"],["Dhaka","Madaripur","Madaripur Sadar","Kulpaddi","7902"],["Dhaka","Madaripur","Madaripur Sadar","Madaripur Sadar","7900"],["Dhaka","Madaripur","Madaripur Sadar","Mustafapur","7904"],["Dhaka","Madaripur","Rajoir","Khalia","7911"],["Dhaka","Madaripur","Rajoir","Rajoir","7910"],["Dhaka","Manikganj","Doulatpur","Doulatpur","1860"],["Dhaka","Manikganj","Gheor","Gheor","1840"],["Dhaka","Manikganj","Lechhraganj","Jhitka","1831"],["Dhaka","Manikganj","Lechhraganj","Lechhraganj","1830"],["Dhaka","Manikganj","Manikganj Sadar","Barangail","1804"],["Dhaka","Manikganj","Manikganj Sadar","Gorpara","1802"],["Dhaka","Manikganj","Manikganj Sadar","Mahadebpur","1803"],["Dhaka","Manikganj","Manikganj Sadar","Manikganj Bazar","1801"],["Dhaka","Manikganj","Manikganj Sadar","Manikganj Sadar","1800"],["Dhaka","Manikganj","Saturia","Baliati","1811"],["Dhaka","Manikganj","Saturia","Saturia","1810"],["Dhaka","Manikganj","Shibloya","Aricha","1851"],["Dhaka","Manikganj","Shibloya","Shibaloy","1850"],["Dhaka","Manikganj","Shibloya","Tewta","1852"],["Dhaka","Manikganj","Shibloya","Uthli","1853"],["Dhaka","Manikganj","Singari","Baira","1821"],["Dhaka","Manikganj","Singari","joymantop","1822"],["Dhaka","Manikganj","Singari","Singair","1820"],["Dhaka","Munshiganj","Gajaria","Gajaria","1510"],["Dhaka","Munshiganj","Gajaria","Hossendi","1511"],["Dhaka","Munshiganj","Gajaria","Rasulpur","1512"],["Dhaka","Munshiganj","Lohajong","Gouragonj","1334"],["Dhaka","Munshiganj","Lohajong","Gouragonj","1534"],["Dhaka","Munshiganj","Lohajong","Haldia SO","1532"],["Dhaka","Munshiganj","Lohajong","Haridia","1333"],["Dhaka","Munshiganj","Lohajong","Haridia DESO","1533"],["Dhaka","Munshiganj","Lohajong","Korhati","1531"],["Dhaka","Munshiganj","Lohajong","Lohajang","1530"],["Dhaka","Munshiganj","Lohajong","Madini Mandal","1335"],["Dhaka","Munshiganj","Lohajong","Medini Mandal EDSO","1535"],["Dhaka","Munshiganj","Munshiganj Sadar","Kathakhali","1503"],["Dhaka","Munshiganj","Munshiganj Sadar","Mirkadim","1502"],["Dhaka","Munshiganj","Munshiganj Sadar","Munshiganj Sadar","1500"],["Dhaka","Munshiganj","Munshiganj Sadar","Rikabibazar","1501"],["Dhaka","Munshiganj","Sirajdikhan","Ichapur","1542"],["Dhaka","Munshiganj","Sirajdikhan","Kola","1541"],["Dhaka","Munshiganj","Sirajdikhan","Malkha Nagar","1543"],["Dhaka","Munshiganj","Sirajdikhan","Shekher Nagar","1544"],["Dhaka","Munshiganj","Sirajdikhan","Sirajdikhan","1540"],["Dhaka","Munshiganj","Srinagar","Baghra","1557"],["Dhaka","Munshiganj","Srinagar","Barikhal","1551"],["Dhaka","Munshiganj","Srinagar","Bhaggyakul","1558"],["Dhaka","Munshiganj","Srinagar","Hashara","1553"],["Dhaka","Munshiganj","Srinagar","Kolapara","1554"],["Dhaka","Munshiganj","Srinagar","Kumarbhog","1555"],["Dhaka","Munshiganj","Srinagar","Mazpara","1552"],["Dhaka","Munshiganj","Srinagar","Srinagar","1550"],["Dhaka","Munshiganj","Srinagar","Vaggyakul SO","1556"],["Dhaka","Munshiganj","Tangibari","Bajrajugini","1523"],["Dhaka","Munshiganj","Tangibari","Baligao","1522"],["Dhaka","Munshiganj","Tangibari","Betkahat","1521"],["Dhaka","Munshiganj","Tangibari","Dighirpar","1525"],["Dhaka","Munshiganj","Tangibari","Hasail","1524"],["Dhaka","Munshiganj","Tangibari","Pura","1527"],["Dhaka","Munshiganj","Tangibari","Pura EDSO","1526"],["Dhaka","Munshiganj","Tangibari","Tangibari","1520"],["Dhaka","Mymensingh","Bhaluka","Bhaluka","2240"],["Dhaka","Mymensingh","Fulbaria","Fulbaria","2216"],["Dhaka","Mymensingh","Gaforgaon","Duttarbazar","2234"],["Dhaka","Mymensingh","Gaforgaon","Gaforgaon","2230"],["Dhaka","Mymensingh","Gaforgaon","Kandipara","2233"],["Dhaka","Mymensingh","Gaforgaon","Shibganj","2231"],["Dhaka","Mymensingh","Gaforgaon","Usti","2232"],["Dhaka","Mymensingh","Gouripur","Gouripur","2270"],["Dhaka","Mymensingh","Gouripur","Ramgopalpur","2271"],["Dhaka","Mymensingh","Haluaghat","Dhara","2261"],["Dhaka","Mymensingh","Haluaghat","Haluaghat","2260"],["Dhaka","Mymensingh","Haluaghat","Munshirhat","2262"],["Dhaka","Mymensingh","Isshwargonj","Atharabari","2282"],["Dhaka","Mymensingh","Isshwargonj","Isshwargonj","2280"],["Dhaka","Mymensingh","Isshwargonj","Sohagi","2281"],["Dhaka","Mymensingh","Muktagachha","Muktagachha","2210"],["Dhaka","Mymensingh","Mymensingh Sadar","Agriculture Universi","2202"],["Dhaka","Mymensingh","Mymensingh Sadar","Biddyaganj","2204"],["Dhaka","Mymensingh","Mymensingh Sadar","Kawatkhali","2201"],["Dhaka","Mymensingh","Mymensingh Sadar","Mymensingh Sadar","2200"],["Dhaka","Mymensingh","Mymensingh Sadar","Pearpur","2205"],["Dhaka","Mymensingh","Mymensingh Sadar","Shombhuganj","2203"],["Dhaka","Mymensingh","Nandail","Gangail","2291"],["Dhaka","Mymensingh","Nandail","Nandail","2290"],["Dhaka","Mymensingh","Phulpur","Beltia","2251"],["Dhaka","Mymensingh","Phulpur","Phulpur","2250"],["Dhaka","Mymensingh","Phulpur","Tarakanda","2252"],["Dhaka","Mymensingh","Trishal","Ahmadbad","2221"],["Dhaka","Mymensingh","Trishal","Dhala","2223"],["Dhaka","Mymensingh","Trishal","Ram Amritaganj","2222"],["Dhaka","Mymensingh","Trishal","Trishal","2220"],["Dhaka","Narayanganj","Araihazar","Araihazar","1450"],["Dhaka","Narayanganj","Araihazar","Gopaldi","1451"],["Dhaka","Narayanganj","Baidder Bazar","Baidder Bazar","1440"],["Dhaka","Narayanganj","Baidder Bazar","Bara Nagar","1441"],["Dhaka","Narayanganj","Baidder Bazar","Barodi","1442"],["Dhaka","Narayanganj","Bandar","Bandar","1410"],["Dhaka","Narayanganj","Bandar","BIDS","1413"],["Dhaka","Narayanganj","Bandar","D.C Mills","1411"],["Dhaka","Narayanganj","Bandar","Madanganj","1414"],["Dhaka","Narayanganj","Bandar","Nabiganj","1412"],["Dhaka","Narayanganj","Fatullah","Fatulla Bazar","1421"],["Dhaka","Narayanganj","Fatullah","Fatullah","1420"],["Dhaka","Narayanganj","Narayanganj Sadar","Narayanganj Sadar","1400"],["Dhaka","Narayanganj","Rupganj","Bhulta","1462"],["Dhaka","Narayanganj","Rupganj","Kanchan","1461"],["Dhaka","Narayanganj","Rupganj","Murapara","1464"],["Dhaka","Narayanganj","Rupganj","Nagri","1463"],["Dhaka","Narayanganj","Rupganj","Rupganj","1460"],["Dhaka","Narayanganj","Siddirganj","Adamjeenagar","1431"],["Dhaka","Narayanganj","Siddirganj","LN Mills","1432"],["Dhaka","Narayanganj","Siddirganj","Siddirganj","1430"],["Dhaka","Narshingdi","Belabo","Belabo","1640"],["Dhaka","Narshingdi","Monohordi","Hatirdia","1651"],["Dhaka","Narshingdi","Monohordi","Katabaria","1652"],["Dhaka","Narshingdi","Monohordi","Monohordi","1650"],["Dhaka","Narshingdi","Narshingdi Sadar","Karimpur","1605"],["Dhaka","Narshingdi","Narshingdi Sadar","Madhabdi","1604"],["Dhaka","Narshingdi","Narshingdi Sadar","Narshingdi College","1602"],["Dhaka","Narshingdi","Narshingdi Sadar","Narshingdi Sadar","1600"],["Dhaka","Narshingdi","Narshingdi Sadar","Panchdona","1603"],["Dhaka","Narshingdi","Narshingdi Sadar","UMC Jute Mills","1601"],["Dhaka","Narshingdi","Palash","Char Sindhur","1612"],["Dhaka","Narshingdi","Palash","Ghorashal","1613"],["Dhaka","Narshingdi","Palash","Ghorashal Urea Facto","1611"],["Dhaka","Narshingdi","Palash","Palash","1610"],["Dhaka","Narshingdi","Raypura","Bazar Hasnabad","1631"],["Dhaka","Narshingdi","Raypura","Radhaganj bazar","1632"],["Dhaka","Narshingdi","Raypura","Raypura","1630"],["Dhaka","Narshingdi","Shibpur","Shibpur","1620"],["Dhaka","Netrakona","Susung Durgapur","Susnng Durgapur","2420"],["Dhaka","Netrakona","Atpara","Atpara","2470"],["Dhaka","Netrakona","Barhatta","Barhatta","2440"],["Dhaka","Netrakona","Dharmapasha","Dharampasha","2450"],["Dhaka","Netrakona","Dhobaura","Dhobaura","2416"],["Dhaka","Netrakona","Dhobaura","Sakoai","2417"],["Dhaka","Netrakona","Kalmakanda","Kalmakanda","2430"],["Dhaka","Netrakona","Kendua","Kendua","2480"],["Dhaka","Netrakona","Khaliajuri","Khaliajhri","2460"],["Dhaka","Netrakona","Khaliajuri","Shaldigha","2462"],["Dhaka","Netrakona","Madan","Madan","2490"],["Dhaka","Netrakona","Moddhynagar","Moddoynagar","2456"],["Dhaka","Netrakona","Mohanganj","Mohanganj","2446"],["Dhaka","Netrakona","Netrakona Sadar","Baikherhati","2401"],["Dhaka","Netrakona","Netrakona Sadar","Netrakona Sadar","2400"],["Dhaka","Netrakona","Purbadhola","Jaria Jhanjhail","2412"],["Dhaka","Netrakona","Purbadhola","Purbadhola","2410"],["Dhaka","Netrakona","Purbadhola","Shamgonj","2411"],["Dhaka","Rajbari","Baliakandi","Baliakandi","7730"],["Dhaka","Rajbari","Baliakandi","Nalia","7731"],["Dhaka","Rajbari","Pangsha","Mrigibazar","7723"],["Dhaka","Rajbari","Pangsha","Pangsha","7720"],["Dhaka","Rajbari","Pangsha","Ramkol","7721"],["Dhaka","Rajbari","Pangsha","Ratandia","7722"],["Dhaka","Rajbari","Rajbari Sadar","Goalanda","7710"],["Dhaka","Rajbari","Rajbari Sadar","Khankhanapur","7711"],["Dhaka","Rajbari","Rajbari Sadar","Rajbari Sadar","7700"],["Dhaka","Shariatpur","Bhedorganj","Bhedorganj","8030"],["Dhaka","Shariatpur","Damudhya","Damudhya","8040"],["Dhaka","Shariatpur","Gosairhat","Gosairhat","8050"],["Dhaka","Shariatpur","Jajira","Jajira","8010"],["Dhaka","Shariatpur","Naria","Bhozeshwar","8021"],["Dhaka","Shariatpur","Naria","Gharisar","8022"],["Dhaka","Shariatpur","Naria","Kartikpur","8024"],["Dhaka","Shariatpur","Naria","Naria","8020"],["Dhaka","Shariatpur","Naria","Upshi","8023"],["Dhaka","Shariatpur","Shariatpur Sadar","Angaria","8001"],["Dhaka","Shariatpur","Shariatpur Sadar","Chikandi","8002"],["Dhaka","Shariatpur","Shariatpur Sadar","Shariatpur Sadar","8000"],["Dhaka","Sherpur","Bakshigonj","Bakshigonj","2140"],["Dhaka","Sherpur","Jhinaigati","Jhinaigati","2120"],["Dhaka","Sherpur","Nakla","Gonopaddi","2151"],["Dhaka","Sherpur","Nakla","Nakla","2150"],["Dhaka","Sherpur","Nalitabari","Hatibandha","2111"],["Dhaka","Sherpur","Nalitabari","Nalitabari","2110"],["Dhaka","Sherpur","Sherpur Shadar","Sherpur Shadar","2100"],["Dhaka","Sherpur","Shribardi","Shribardi","2130"],["Dhaka","Tangail","Basail","Basail","1920"],["Dhaka","Tangail","Bhuapur","Bhuapur","1960"],["Dhaka","Tangail","Delduar","Delduar","1910"],["Dhaka","Tangail","Delduar","Elasin","1913"],["Dhaka","Tangail","Delduar","Hinga Nagar","1914"],["Dhaka","Tangail","Delduar","Jangalia","1911"],["Dhaka","Tangail","Delduar","Lowhati","1915"],["Dhaka","Tangail","Delduar","Patharail","1912"],["Dhaka","Tangail","Ghatail","D. Pakutia","1982"],["Dhaka","Tangail","Ghatail","Dhalapara","1983"],["Dhaka","Tangail","Ghatail","Ghatial","1980"],["Dhaka","Tangail","Ghatail","Lohani","1984"],["Dhaka","Tangail","Ghatail","Zahidganj","1981"],["Dhaka","Tangail","Gopalpur","Gopalpur","1990"],["Dhaka","Tangail","Gopalpur","Hemnagar","1992"],["Dhaka","Tangail","Gopalpur","Jhowail","1991"],["Dhaka","Tangail","Kalihati","Ballabazar","1973"],["Dhaka","Tangail","Kalihati","Elinga","1974"],["Dhaka","Tangail","Kalihati","Kalihati","1970"],["Dhaka","Tangail","Kalihati","Nagarbari","1977"],["Dhaka","Tangail","Kalihati","Nagarbari SO","1976"],["Dhaka","Tangail","Kalihati","Nagbari","1972"],["Dhaka","Tangail","Kalihati","Palisha","1975"],["Dhaka","Tangail","Kalihati","Rajafair","1971"],["Dhaka","Tangail","Kashkaolia","Kashkawlia","1930"],["Dhaka","Tangail","Madhupur","Dhobari","1997"],["Dhaka","Tangail","Madhupur","Madhupur","1996"],["Dhaka","Tangail","Mirzapur","Gorai","1941"],["Dhaka","Tangail","Mirzapur","Jarmuki","1944"],["Dhaka","Tangail","Mirzapur","M.C. College","1942"],["Dhaka","Tangail","Mirzapur","Mirzapur","1940"],["Dhaka","Tangail","Mirzapur","Mohera","1945"],["Dhaka","Tangail","Mirzapur","Warri paikpara","1943"],["Dhaka","Tangail","Nagarpur","Dhuburia","1937"],["Dhaka","Tangail","Nagarpur","Nagarpur","1936"],["Dhaka","Tangail","Nagarpur","Salimabad","1938"],["Dhaka","Tangail","Sakhipur","Kochua","1951"],["Dhaka","Tangail","Sakhipur","Sakhipur","1950"],["Dhaka","Tangail","Tangail Sadar","Kagmari","1901"],["Dhaka","Tangail","Tangail Sadar","Korotia","1903"],["Dhaka","Tangail","Tangail Sadar","Purabari","1904"],["Dhaka","Tangail","Tangail Sadar","Santosh","1902"],["Dhaka","Tangail","Tangail Sadar","Tangail Sadar","1900"],["Chittagong","Bandarban","Alikadam","Alikadam","4650"],["Chittagong","Bandarban","Bandarban Sadar","Bandarban Sadar","4600"],["Chittagong","Bandarban","Naikhong","Naikhong","4660"],["Chittagong","Bandarban","Roanchhari","Roanchhari","4610"],["Chittagong","Bandarban","Ruma","Ruma","4620"],["Chittagong","Bandarban","Thanchi","Lama","4641"],["Chittagong","Bandarban","Thanchi","Thanchi","4630"],["Chittagong","Brahmanbaria","Akhaura","Akhaura","3450"],["Chittagong","Brahmanbaria","Akhaura","Azampur","3451"],["Chittagong","Brahmanbaria","Akhaura","Gangasagar","3452"],["Chittagong","Brahmanbaria","Banchharampur","Banchharampur","3420"],["Chittagong","Brahmanbaria","Brahamanbaria Sadar","Ashuganj","3402"],["Chittagong","Brahmanbaria","Brahamanbaria Sadar","Ashuganj Share","3403"],["Chittagong","Brahmanbaria","Brahamanbaria Sadar","Brahamanbaria Sadar","3400"],["Chittagong","Brahmanbaria","Brahamanbaria Sadar","Poun","3404"],["Chittagong","Brahmanbaria","Brahamanbaria Sadar","Talshahar","3401"],["Chittagong","Brahmanbaria","Kasba","Chandidar","3462"],["Chittagong","Brahmanbaria","Kasba","Chargachh","3463"],["Chittagong","Brahmanbaria","Kasba","Gopinathpur","3464"],["Chittagong","Brahmanbaria","Kasba","Kasba","3460"],["Chittagong","Brahmanbaria","Kasba","Kuti","3461"],["Chittagong","Brahmanbaria","Nabinagar","Jibanganj","3419"],["Chittagong","Brahmanbaria","Nabinagar","Kaitala","3417"],["Chittagong","Brahmanbaria","Nabinagar","Laubfatehpur","3411"],["Chittagong","Brahmanbaria","Nabinagar","Nabinagar","3410"],["Chittagong","Brahmanbaria","Nabinagar","Rasullabad","3412"],["Chittagong","Brahmanbaria","Nabinagar","Ratanpur","3414"],["Chittagong","Brahmanbaria","Nabinagar","Salimganj","3418"],["Chittagong","Brahmanbaria","Nabinagar","Shahapur","3415"],["Chittagong","Brahmanbaria","Nabinagar","Shamgram","3413"],["Chittagong","Brahmanbaria","Nasirnagar","Fandauk","3441"],["Chittagong","Brahmanbaria","Nasirnagar","Nasirnagar","3440"],["Chittagong","Brahmanbaria","Sarail","Chandura","3432"],["Chittagong","Brahmanbaria","Sarail","Sarial","3430"],["Chittagong","Brahmanbaria","Sarail","Shahbajpur","3431"],["Chittagong","Chandpur","Chandpur Sadar","Baburhat","3602"],["Chittagong","Chandpur","Chandpur Sadar","Chandpur Sadar","3600"],["Chittagong","Chandpur","Chandpur Sadar","Puranbazar","3601"],["Chittagong","Chandpur","Chandpur Sadar","Sahatali","3603"],["Chittagong","Chandpur","Faridganj","Chandra","3651"],["Chittagong","Chandpur","Faridganj","Faridganj","3650"],["Chittagong","Chandpur","Faridganj","Gridkaliandia","3653"],["Chittagong","Chandpur","Faridganj","Islampur Shah Isain","3655"],["Chittagong","Chandpur","Faridganj","Rampurbazar","3654"],["Chittagong","Chandpur","Faridganj","Rupsha","3652"],["Chittagong","Chandpur","Hajiganj","Bolakhal","3611"],["Chittagong","Chandpur","Hajiganj","Hajiganj","3610"],["Chittagong","Chandpur","Hayemchar","Gandamara","3661"],["Chittagong","Chandpur","Hayemchar","Hayemchar","3660"],["Chittagong","Chandpur","Kachua","Kachua","3630"],["Chittagong","Chandpur","Kachua","Pak Shrirampur","3631"],["Chittagong","Chandpur","Kachua","Rahima Nagar","3632"],["Chittagong","Chandpur","Kachua","Shachar","3633"],["Chittagong","Chandpur","Matlobganj","Kalipur","3642"],["Chittagong","Chandpur","Matlobganj","Matlobganj","3640"],["Chittagong","Chandpur","Matlobganj","Mohanpur","3641"],["Chittagong","Chandpur","Shahrasti","Chotoshi","3623"],["Chittagong","Chandpur","Shahrasti","Islamia Madrasha","3624"],["Chittagong","Chandpur","Shahrasti","Khilabazar","3621"],["Chittagong","Chandpur","Shahrasti","Pashchim Kherihar Al","3622"],["Chittagong","Chandpur","Shahrasti","Shahrasti","3620"],["Chittagong","Chittagong","Anawara","Anowara","4376"],["Chittagong","Chittagong","Anawara","Battali","4378"],["Chittagong","Chittagong","Anawara","Paroikora","4377"],["Chittagong","Chittagong","Boalkhali","Boalkhali","4366"],["Chittagong","Chittagong","Boalkhali","Charandwip","4369"],["Chittagong","Chittagong","Boalkhali","Iqbal Park","4365"],["Chittagong","Chittagong","Boalkhali","Kadurkhal","4368"],["Chittagong","Chittagong","Boalkhali","Kanungopara","4363"],["Chittagong","Chittagong","Boalkhali","Sakpura","4367"],["Chittagong","Chittagong","Boalkhali","Saroatoli","4364"],["Chittagong","Chittagong","Chittagong Sadar","Al- Amin Baria Madra","4221"],["Chittagong","Chittagong","Chittagong Sadar","Amin Jute Mills","4211"],["Chittagong","Chittagong","Chittagong Sadar","Anandabazar","4215"],["Chittagong","Chittagong","Chittagong Sadar","Bayezid Bostami","4210"],["Chittagong","Chittagong","Chittagong Sadar","Chandgaon","4212"],["Chittagong","Chittagong","Chittagong Sadar","Chawkbazar","4203"],["Chittagong","Chittagong","Chittagong Sadar","Chitt. Cantonment","4220"],["Chittagong","Chittagong","Chittagong Sadar","Chitt. Customs Acca","4219"],["Chittagong","Chittagong","Chittagong Sadar","Chitt. Politechnic In","4209"],["Chittagong","Chittagong","Chittagong Sadar","Chitt. Sailers Colon","4218"],["Chittagong","Chittagong","Chittagong Sadar","Chittagong Airport","4205"],["Chittagong","Chittagong","Chittagong Sadar","Chittagong Bandar","4100"],["Chittagong","Chittagong","Chittagong Sadar","Chittagong GPO","4000"],["Chittagong","Chittagong","Chittagong Sadar","Export Processing","4223"],["Chittagong","Chittagong","Chittagong Sadar","Firozshah","4207"],["Chittagong","Chittagong","Chittagong Sadar","Halishahar","4216"],["Chittagong","Chittagong","Chittagong Sadar","Halishshar","4225"],["Chittagong","Chittagong","Chittagong Sadar","Jalalabad","4214"],["Chittagong","Chittagong","Chittagong Sadar","Jaldia Merine Accade","4206"],["Chittagong","Chittagong","Chittagong Sadar","Middle Patenga","4222"],["Chittagong","Chittagong","Chittagong Sadar","Mohard","4208"],["Chittagong","Chittagong","Chittagong Sadar","North Halishahar","4226"],["Chittagong","Chittagong","Chittagong Sadar","North Katuli","4217"],["Chittagong","Chittagong","Chittagong Sadar","Pahartoli","4202"],["Chittagong","Chittagong","Chittagong Sadar","Patenga","4204"],["Chittagong","Chittagong","Chittagong Sadar","Rampura TSO","4224"],["Chittagong","Chittagong","Chittagong Sadar","Wazedia","4213"],["Chittagong","Chittagong","East Joara","Barma","4383"],["Chittagong","Chittagong","East Joara","Dohazari","4382"],["Chittagong","Chittagong","East Joara","East Joara","4380"],["Chittagong","Chittagong","East Joara","Gachbaria","4381"],["Chittagong","Chittagong","Fatikchhari","Bhandar Sharif","4352"],["Chittagong","Chittagong","Fatikchhari","Fatikchhari","4350"],["Chittagong","Chittagong","Fatikchhari","Harualchhari","4354"],["Chittagong","Chittagong","Fatikchhari","Najirhat","4353"],["Chittagong","Chittagong","Fatikchhari","Nanupur","4351"],["Chittagong","Chittagong","Fatikchhari","Narayanhat","4355"],["Chittagong","Chittagong","Hathazari","Chitt.University","4331"],["Chittagong","Chittagong","Hathazari","Fatahabad","4335"],["Chittagong","Chittagong","Hathazari","Gorduara","4332"],["Chittagong","Chittagong","Hathazari","Hathazari","4330"],["Chittagong","Chittagong","Hathazari","Katirhat","4333"],["Chittagong","Chittagong","Hathazari","Madrasa","4339"],["Chittagong","Chittagong","Hathazari","Mirzapur","4334"],["Chittagong","Chittagong","Hathazari","Nuralibari","4337"],["Chittagong","Chittagong","Hathazari","Yunus Nagar","4338"],["Chittagong","Chittagong","Jaldi","Banigram","4393"],["Chittagong","Chittagong","Jaldi","Gunagari","4392"],["Chittagong","Chittagong","Jaldi","Jaldi","4390"],["Chittagong","Chittagong","Jaldi","Khan Bahadur","4391"],["Chittagong","Chittagong","Lohagara","Chunti","4398"],["Chittagong","Chittagong","Lohagara","Lohagara","4396"],["Chittagong","Chittagong","Lohagara","Padua","4397"],["Chittagong","Chittagong","Mirsharai","Abutorab","4321"],["Chittagong","Chittagong","Mirsharai","Azampur","4325"],["Chittagong","Chittagong","Mirsharai","Bharawazhat","4323"],["Chittagong","Chittagong","Mirsharai","Darrogahat","4322"],["Chittagong","Chittagong","Mirsharai","Joarganj","4324"],["Chittagong","Chittagong","Mirsharai","Korerhat","4327"],["Chittagong","Chittagong","Mirsharai","Mirsharai","4320"],["Chittagong","Chittagong","Mirsharai","Mohazanhat","4328"],["Chittagong","Chittagong","Patia Head Office","Budhpara","4371"],["Chittagong","Chittagong","Patia Head Office","Patia Head Office","4370"],["Chittagong","Chittagong","Rangunia","Dhamair","4361"],["Chittagong","Chittagong","Rangunia","Rangunia","4360"],["Chittagong","Chittagong","Rouzan","B.I.T Post Office","4349"],["Chittagong","Chittagong","Rouzan","Beenajuri","4341"],["Chittagong","Chittagong","Rouzan","Dewanpur","4347"],["Chittagong","Chittagong","Rouzan","Fatepur","4345"],["Chittagong","Chittagong","Rouzan","Gahira","4343"],["Chittagong","Chittagong","Rouzan","Guzra Noapara","4346"],["Chittagong","Chittagong","Rouzan","jagannath Hat","4344"],["Chittagong","Chittagong","Rouzan","Kundeshwari","4342"],["Chittagong","Chittagong","Rouzan","Mohamuni","4348"],["Chittagong","Chittagong","Rouzan","Rouzan","4340"],["Chittagong","Chittagong","Sandwip","Sandwip","4300"],["Chittagong","Chittagong","Sandwip","Shiberhat","4301"],["Chittagong","Chittagong","Sandwip","Urirchar","4302"],["Chittagong","Chittagong","Satkania","Baitul Ijjat","4387"],["Chittagong","Chittagong","Satkania","Bazalia","4388"],["Chittagong","Chittagong","Satkania","Satkania","4386"],["Chittagong","Chittagong","Sitakunda","Barabkunda","4312"],["Chittagong","Chittagong","Sitakunda","Baroidhala","4311"],["Chittagong","Chittagong","Sitakunda","Bawashbaria","4313"],["Chittagong","Chittagong","Sitakunda","Bhatiari","4315"],["Chittagong","Chittagong","Sitakunda","Fouzdarhat","4316"],["Chittagong","Chittagong","Sitakunda","Jafrabad","4317"],["Chittagong","Chittagong","Sitakunda","Kumira","4314"],["Chittagong","Chittagong","Sitakunda","Sitakunda","4310"],["Chittagong","Comilla","Barura","Barura","3560"],["Chittagong","Comilla","Barura","Murdafarganj","3562"],["Chittagong","Comilla","Barura","Poyalgachha","3561"],["Chittagong","Comilla","Brahmanpara","Brahmanpara","3526"],["Chittagong","Comilla","Burichang","Burichang","3520"],["Chittagong","Comilla","Burichang","Maynamoti bazar","3521"],["Chittagong","Comilla","Chandina","Chandia","3510"],["Chittagong","Comilla","Chandina","Madhaiabazar","3511"],["Chittagong","Comilla","Chouddagram","Batisa","3551"],["Chittagong","Comilla","Chouddagram","Chiora","3552"],["Chittagong","Comilla","Chouddagram","Chouddagram","3550"],["Chittagong","Comilla","Comilla Sadar","Comilla Contoment","3501"],["Chittagong","Comilla","Comilla Sadar","Comilla Sadar","3500"],["Chittagong","Comilla","Comilla Sadar","Courtbari","3503"],["Chittagong","Comilla","Comilla Sadar","Halimanagar","3502"],["Chittagong","Comilla","Comilla Sadar","Suaganj","3504"],["Chittagong","Comilla","Daudkandi","Dashpara","3518"],["Chittagong","Comilla","Daudkandi","Daudkandi","3516"],["Chittagong","Comilla","Daudkandi","Eliotganj","3519"],["Chittagong","Comilla","Daudkandi","Gouripur","3517"],["Chittagong","Comilla","Davidhar","Barashalghar","3532"],["Chittagong","Comilla","Davidhar","Davidhar","3530"],["Chittagong","Comilla","Davidhar","Dhamtee","3533"],["Chittagong","Comilla","Davidhar","Gangamandal","3531"],["Chittagong","Comilla","Homna","Homna","3546"],["Chittagong","Comilla","Laksam","Bipulasar","3572"],["Chittagong","Comilla","Laksam","Laksam","3570"],["Chittagong","Comilla","Laksam","Lakshamanpur","3571"],["Chittagong","Comilla","Langalkot","Chhariabazar","3582"],["Chittagong","Comilla","Langalkot","Dhalua","3581"],["Chittagong","Comilla","Langalkot","Gunabati","3583"],["Chittagong","Comilla","Langalkot","Langalkot","3580"],["Chittagong","Comilla","Muradnagar","Bangra","3543"],["Chittagong","Comilla","Muradnagar","Companyganj","3542"],["Chittagong","Comilla","Muradnagar","Muradnagar","3540"],["Chittagong","Comilla","Muradnagar","Pantibazar","3545"],["Chittagong","Comilla","Muradnagar","Ramchandarpur","3541"],["Chittagong","Comilla","Muradnagar","Sonakanda","3544"],["Chittagong","Cox’s Bazar","Chiringga","Badarkali","4742"],["Chittagong","Cox’s Bazar","Chiringga","Chiringga","4740"],["Chittagong","Cox’s Bazar","Chiringga","Chiringga S.O","4741"],["Chittagong","Cox’s Bazar","Chiringga","Malumghat","4743"],["Chittagong","Cox’s Bazar","Coxs Bazar Sadar","Coxs Bazar Sadar","4700"],["Chittagong","Cox’s Bazar","Coxs Bazar Sadar","Eidga","4702"],["Chittagong","Cox’s Bazar","Coxs Bazar Sadar","Zhilanja","4701"],["Chittagong","Cox’s Bazar","Gorakghat","Gorakghat","4710"],["Chittagong","Cox’s Bazar","Kutubdia","Kutubdia","4720"],["Chittagong","Cox’s Bazar","Ramu","Ramu","4730"],["Chittagong","Cox’s Bazar","Teknaf","Hnila","4761"],["Chittagong","Cox’s Bazar","Teknaf","St.Martin","4762"],["Chittagong","Cox’s Bazar","Teknaf","Teknaf","4760"],["Chittagong","Cox’s Bazar","Ukhia","Ukhia","4750"],["Chittagong","Feni","Chhagalnaia","Chhagalnaia","3910"],["Chittagong","Feni","Chhagalnaia","Daraga Hat","3912"],["Chittagong","Feni","Chhagalnaia","Maharajganj","3911"],["Chittagong","Feni","Chhagalnaia","Puabashimulia","3913"],["Chittagong","Feni","Dagonbhuia","Chhilonia","3922"],["Chittagong","Feni","Dagonbhuia","Dagondhuia","3920"],["Chittagong","Feni","Dagonbhuia","Dudmukha","3921"],["Chittagong","Feni","Dagonbhuia","Rajapur","3923"],["Chittagong","Feni","Feni Sadar","Fazilpur","3901"],["Chittagong","Feni","Feni Sadar","Feni Sadar","3900"],["Chittagong","Feni","Feni Sadar","Laskarhat","3903"],["Chittagong","Feni","Feni Sadar","Sharshadie","3902"],["Chittagong","Feni","Pashurampur","Fulgazi","3942"],["Chittagong","Feni","Pashurampur","Munshirhat","3943"],["Chittagong","Feni","Pashurampur","Pashurampur","3940"],["Chittagong","Feni","Pashurampur","Shuarbazar","3941"],["Chittagong","Feni","Sonagazi","Ahmadpur","3932"],["Chittagong","Feni","Sonagazi","Kazirhat","3933"],["Chittagong","Feni","Sonagazi","Motiganj","3931"],["Chittagong","Feni","Sonagazi","Sonagazi","3930"],["Chittagong","Khagrachari","Diginala","Diginala","4420"],["Chittagong","Khagrachari","Khagrachari Sadar","Khagrachari Sadar","4400"],["Chittagong","Khagrachari","Laxmichhari","Laxmichhari","4470"],["Chittagong","Khagrachari","Mahalchhari","Mahalchhari","4430"],["Chittagong","Khagrachari","Manikchhari","Manikchhari","4460"],["Chittagong","Khagrachari","Matiranga","Matiranga","4450"],["Chittagong","Khagrachari","Panchhari","Panchhari","4410"],["Chittagong","Khagrachari","Ramghar Head Office","Ramghar Head Office","4440"],["Chittagong","Lakshmipur","Char Alexgander","Char Alexgander","3730"],["Chittagong","Lakshmipur","Char Alexgander","Hajirghat","3731"],["Chittagong","Lakshmipur","Char Alexgander","Ramgatirhat","3732"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Amani Lakshimpur","3709"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Bhabaniganj","3702"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Chandraganj","3708"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Choupalli","3707"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Dalal Bazar","3701"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Duttapara","3706"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Keramatganj","3704"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Lakshimpur Sadar","3700"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Mandari","3703"],["Chittagong","Lakshmipur","Lakshimpur Sadar","Rupchara","3705"],["Chittagong","Lakshmipur","Ramganj","Alipur","3721"],["Chittagong","Lakshmipur","Ramganj","Dolta","3725"],["Chittagong","Lakshmipur","Ramganj","Kanchanpur","3723"],["Chittagong","Lakshmipur","Ramganj","Naagmud","3724"],["Chittagong","Lakshmipur","Ramganj","Panpara","3722"],["Chittagong","Lakshmipur","Ramganj","Ramganj","3720"],["Chittagong","Lakshmipur","Raypur","Bhuabari","3714"],["Chittagong","Lakshmipur","Raypur","Haydarganj","3713"],["Chittagong","Lakshmipur","Raypur","Nagerdighirpar","3712"],["Chittagong","Lakshmipur","Raypur","Rakhallia","3711"],["Chittagong","Lakshmipur","Raypur","Raypur","3710"],["Chittagong","Noakhali","Basurhat","Basur Hat","3850"],["Chittagong","Noakhali","Basurhat","Charhajari","3851"],["Chittagong","Noakhali","Begumganj","Alaiarpur","3831"],["Chittagong","Noakhali","Begumganj","Amisha Para","3847"],["Chittagong","Noakhali","Begumganj","Banglabazar","3822"],["Chittagong","Noakhali","Begumganj","Bazra","3824"],["Chittagong","Noakhali","Begumganj","Begumganj","3820"],["Chittagong","Noakhali","Begumganj","Bhabani Jibanpur","3837"],["Chittagong","Noakhali","Begumganj","Choumohani","3821"],["Chittagong","Noakhali","Begumganj","Dauti","3843"],["Chittagong","Noakhali","Begumganj","Durgapur","3848"],["Chittagong","Noakhali","Begumganj","Gopalpur","3828"],["Chittagong","Noakhali","Begumganj","Jamidar Hat","3825"],["Chittagong","Noakhali","Begumganj","Joyag","3844"],["Chittagong","Noakhali","Begumganj","Joynarayanpur","3829"],["Chittagong","Noakhali","Begumganj","Khalafat Bazar","3833"],["Chittagong","Noakhali","Begumganj","Khalishpur","3842"],["Chittagong","Noakhali","Begumganj","Maheshganj","3838"],["Chittagong","Noakhali","Begumganj","Mir Owarishpur","3823"],["Chittagong","Noakhali","Begumganj","Nadona","3839"],["Chittagong","Noakhali","Begumganj","Nandiapara","3841"],["Chittagong","Noakhali","Begumganj","Oachhekpur","3835"],["Chittagong","Noakhali","Begumganj","Rajganj","3834"],["Chittagong","Noakhali","Begumganj","Sonaimuri","3827"],["Chittagong","Noakhali","Begumganj","Tangirpar","3832"],["Chittagong","Noakhali","Begumganj","Thanar Hat","3845"],["Chittagong","Noakhali","Chatkhil","Bansa Bazar","3879"],["Chittagong","Noakhali","Chatkhil","Bodalcourt","3873"],["Chittagong","Noakhali","Chatkhil","Chatkhil","3870"],["Chittagong","Noakhali","Chatkhil","Dosh Gharia","3878"],["Chittagong","Noakhali","Chatkhil","Karihati","3877"],["Chittagong","Noakhali","Chatkhil","Khilpara","3872"],["Chittagong","Noakhali","Chatkhil","Palla","3871"],["Chittagong","Noakhali","Chatkhil","Rezzakpur","3874"],["Chittagong","Noakhali","Chatkhil","Sahapur","3881"],["Chittagong","Noakhali","Chatkhil","Sampara","3882"],["Chittagong","Noakhali","Chatkhil","Shingbahura","3883"],["Chittagong","Noakhali","Chatkhil","Solla","3875"],["Chittagong","Noakhali","Hatiya","Afazia","3891"],["Chittagong","Noakhali","Hatiya","Hatiya","3890"],["Chittagong","Noakhali","Hatiya","Tamoraddi","3892"],["Chittagong","Noakhali","Noakhali Sadar","Chaprashir Hat","3811"],["Chittagong","Noakhali","Noakhali Sadar","Char Jabbar","3812"],["Chittagong","Noakhali","Noakhali Sadar","Charam Tua","3809"],["Chittagong","Noakhali","Noakhali Sadar","Din Monir Hat","3803"],["Chittagong","Noakhali","Noakhali Sadar","Kabirhat","3807"],["Chittagong","Noakhali","Noakhali Sadar","Khalifar Hat","3808"],["Chittagong","Noakhali","Noakhali Sadar","Mriddarhat","3806"],["Chittagong","Noakhali","Noakhali Sadar","Noakhali College","3801"],["Chittagong","Noakhali","Noakhali Sadar","Noakhali Sadar","3800"],["Chittagong","Noakhali","Noakhali Sadar","Pak Kishoreganj","3804"],["Chittagong","Noakhali","Noakhali Sadar","Sonapur","3802"],["Chittagong","Noakhali","Senbag","Beezbag","3862"],["Chittagong","Noakhali","Senbag","Chatarpaia","3864"],["Chittagong","Noakhali","Senbag","Kallyandi","3861"],["Chittagong","Noakhali","Senbag","Kankirhat","3863"],["Chittagong","Noakhali","Senbag","Senbag","3860"],["Chittagong","Noakhali","Senbag","T.P. Lamua","3865"],["Chittagong","Rangamati","Barakal","Barakal","4570"],["Chittagong","Rangamati","Bilaichhari","Bilaichhari","4550"],["Chittagong","Rangamati","Jarachhari","Jarachhari","4560"],["Chittagong","Rangamati","Kalampati","Betbunia","4511"],["Chittagong","Rangamati","Kalampati","Kalampati","4510"],["Chittagong","Rangamati","kaptai","Chandraghona","4531"],["Chittagong","Rangamati","kaptai","Kaptai","4530"],["Chittagong","Rangamati","kaptai","Kaptai Nuton Bazar","4533"],["Chittagong","Rangamati","kaptai","Kaptai Project","4532"],["Chittagong","Rangamati","Longachh","Longachh","4580"],["Chittagong","Rangamati","Marishya","Marishya","4590"],["Chittagong","Rangamati","Naniachhar","Nanichhar","4520"],["Chittagong","Rangamati","Rajsthali","Rajsthali","4540"],["Chittagong","Rangamati","Rangamati Sadar","Rangamati Sadar","4500"],["Khulna","Bagherhat","Bagerhat Sadar","Bagerhat Sadar","9300"],["Khulna","Bagherhat","Bagerhat Sadar","P.C College","9301"],["Khulna","Bagherhat","Bagerhat Sadar","Rangdia","9302"],["Khulna","Bagherhat","Chalna Ankorage","Chalna Ankorage","9350"],["Khulna","Bagherhat","Chalna Ankorage","Mongla Port","9351"],["Khulna","Bagherhat","Chitalmari","Barabaria","9361"],["Khulna","Bagherhat","Chitalmari","Chitalmari","9360"],["Khulna","Bagherhat","Fakirhat","Bhanganpar Bazar","9372"],["Khulna","Bagherhat","Fakirhat","Fakirhat","9370"],["Khulna","Bagherhat","Fakirhat","Mansa","9371"],["Khulna","Bagherhat","Kachua UPO","Kachua","9310"],["Khulna","Bagherhat","Kachua UPO","Sonarkola","9311"],["Khulna","Bagherhat","Mollahat","Charkulia","9383"],["Khulna","Bagherhat","Mollahat","Dariala","9382"],["Khulna","Bagherhat","Mollahat","Kahalpur","9381"],["Khulna","Bagherhat","Mollahat","Mollahat","9380"],["Khulna","Bagherhat","Mollahat","Nagarkandi","9384"],["Khulna","Bagherhat","Mollahat","Pak Gangni","9385"],["Khulna","Bagherhat","Morelganj","Morelganj","9320"],["Khulna","Bagherhat","Morelganj","Sannasi Bazar","9321"],["Khulna","Bagherhat","Morelganj","Telisatee","9322"],["Khulna","Bagherhat","Rampal","Foylahat","9341"],["Khulna","Bagherhat","Rampal","Gourambha","9343"],["Khulna","Bagherhat","Rampal","Rampal","9340"],["Khulna","Bagherhat","Rampal","Sonatunia","9342"],["Khulna","Bagherhat","Rayenda","Rayenda","9330"],["Khulna","Chuadanga","Alamdanga","Alamdanga","7210"],["Khulna","Chuadanga","Alamdanga","Hardi","7211"],["Khulna","Chuadanga","Chuadanga Sadar","Chuadanga Sadar","7200"],["Khulna","Chuadanga","Chuadanga Sadar","Munshiganj","7201"],["Khulna","Chuadanga","Damurhuda","Andulbaria","7222"],["Khulna","Chuadanga","Damurhuda","Damurhuda","7220"],["Khulna","Chuadanga","Damurhuda","Darshana","7221"],["Khulna","Chuadanga","Doulatganj","Doulatganj","7230"],["Khulna","Jessore","Bagharpara","Bagharpara","7470"],["Khulna","Jessore","Bagharpara","Gouranagar","7471"],["Khulna","Jessore","Chaugachha","Chougachha","7410"],["Khulna","Jessore","Jessore Sadar","Basundia","7406"],["Khulna","Jessore","Jessore Sadar","Chanchra","7402"],["Khulna","Jessore","Jessore Sadar","Churamankathi","7407"],["Khulna","Jessore","Jessore Sadar","Jessore Airbach","7404"],["Khulna","Jessore","Jessore Sadar","Jessore canttonment","7403"],["Khulna","Jessore","Jessore Sadar","Jessore Sadar","7400"],["Khulna","Jessore","Jessore Sadar","Jessore Upa-Shahar","7401"],["Khulna","Jessore","Jessore Sadar","Rupdia","7405"],["Khulna","Jessore","Jhikargachha","Jhikargachha","7420"],["Khulna","Jessore","Keshabpur","Keshobpur","7450"],["Khulna","Jessore","Monirampur","Monirampur","7440"],["Khulna","Jessore","Noapara","Bhugilhat","7462"],["Khulna","Jessore","Noapara","Noapara","7460"],["Khulna","Jessore","Noapara","Rajghat","7461"],["Khulna","Jessore","Sarsa","Bag Achra","7433"],["Khulna","Jessore","Sarsa","Benapole","7431"],["Khulna","Jessore","Sarsa","Jadabpur","7432"],["Khulna","Jessore","Sarsa","Sarsa","7430"],["Khulna","Jinaidaha","Harinakundu","Harinakundu","7310"],["Khulna","Jinaidaha","Jinaidaha Sadar","Jinaidaha Cadet College","7301"],["Khulna","Jinaidaha","Jinaidaha Sadar","Jinaidaha Sadar","7300"],["Khulna","Jinaidaha","Kotchandpur","Kotchandpur","7330"],["Khulna","Jinaidaha","Maheshpur","Maheshpur","7340"],["Khulna","Jinaidaha","Naldanga","Hatbar Bazar","7351"],["Khulna","Jinaidaha","Naldanga","Naldanga","7350"],["Khulna","Jinaidaha","Shailakupa","Kumiradaha","7321"],["Khulna","Jinaidaha","Shailakupa","Shailakupa","7320"],["Khulna","Khulna","Alaipur","Alaipur","9240"],["Khulna","Khulna","Alaipur","Belphulia","9242"],["Khulna","Khulna","Alaipur","Rupsha","9241"],["Khulna","Khulna","Batiaghat","Batiaghat","9260"],["Khulna","Khulna","Batiaghat","Surkalee","9261"],["Khulna","Khulna","Chalna Bazar","Bajua","9272"],["Khulna","Khulna","Chalna Bazar","Chalna Bazar","9270"],["Khulna","Khulna","Chalna Bazar","Dakup","9271"],["Khulna","Khulna","Chalna Bazar","Nalian","9273"],["Khulna","Khulna","Digalia","Chandni Mahal","9221"],["Khulna","Khulna","Digalia","Digalia","9220"],["Khulna","Khulna","Digalia","Gazirhat","9224"],["Khulna","Khulna","Digalia","Ghoshghati","9223"],["Khulna","Khulna","Digalia","Senhati","9222"],["Khulna","Khulna","Khulna Sadar","Atra Shilpa Area","9207"],["Khulna","Khulna","Khulna Sadar","BIT Khulna","9203"],["Khulna","Khulna","Khulna Sadar","Doulatpur","9202"],["Khulna","Khulna","Khulna Sadar","Jahanabad Canttonmen","9205"],["Khulna","Khulna","Khulna Sadar","Khula Sadar","9100"],["Khulna","Khulna","Khulna Sadar","Khulna G.P.O","9000"],["Khulna","Khulna","Khulna Sadar","Khulna Shipyard","9201"],["Khulna","Khulna","Khulna Sadar","Khulna University","9208"],["Khulna","Khulna","Khulna Sadar","Siramani","9204"],["Khulna","Khulna","Khulna Sadar","Sonali Jute Mills","9206"],["Khulna","Khulna","Madinabad","Amadee","9291"],["Khulna","Khulna","Madinabad","Madinabad","9290"],["Khulna","Khulna","Paikgachha","Chandkhali","9284"],["Khulna","Khulna","Paikgachha","Garaikhali","9285"],["Khulna","Khulna","Paikgachha","Godaipur","9281"],["Khulna","Khulna","Paikgachha","Kapilmoni","9282"],["Khulna","Khulna","Paikgachha","Katipara","9283"],["Khulna","Khulna","Paikgachha","Paikgachha","9280"],["Khulna","Khulna","Phultala","Phultala","9210"],["Khulna","Khulna","Sajiara","Chuknagar","9252"],["Khulna","Khulna","Sajiara","Ghonabanda","9251"],["Khulna","Khulna","Sajiara","Sajiara","9250"],["Khulna","Khulna","Sajiara","Shahapur","9253"],["Khulna","Khulna","Terakhada","Pak Barasat","9231"],["Khulna","Khulna","Terakhada","Terakhada","9230"],["Khulna","Kustia","Bheramara","Allardarga","7042"],["Khulna","Kustia","Bheramara","Bheramara","7040"],["Khulna","Kustia","Bheramara","Ganges Bheramara","7041"],["Khulna","Kustia","Janipur","Janipur","7020"],["Khulna","Kustia","Janipur","Khoksa","7021"],["Khulna","Kustia","Kumarkhali","Kumarkhali","7010"],["Khulna","Kustia","Kumarkhali","Panti","7011"],["Khulna","Kustia","Kustia Sadar","Islami University","7003"],["Khulna","Kustia","Kustia Sadar","Jagati","7002"],["Khulna","Kustia","Kustia Sadar","Kushtia Mohini","7001"],["Khulna","Kustia","Kustia Sadar","Kustia Sadar","7000"],["Khulna","Kustia","Mirpur","Amla Sadarpur","7032"],["Khulna","Kustia","Mirpur","Mirpur","7030"],["Khulna","Kustia","Mirpur","Poradaha","7031"],["Khulna","Kustia","Rafayetpur","Khasmathurapur","7052"],["Khulna","Kustia","Rafayetpur","Rafayetpur","7050"],["Khulna","Kustia","Rafayetpur","Taragunia","7051"],["Khulna","Magura","Arpara","Arpara","7620"],["Khulna","Magura","Magura Sadar","Magura Sadar","7600"],["Khulna","Magura","Mohammadpur","Binodpur","7631"],["Khulna","Magura","Mohammadpur","Mohammadpur","7630"],["Khulna","Magura","Mohammadpur","Nahata","7632"],["Khulna","Magura","Shripur","Langalbadh","7611"],["Khulna","Magura","Shripur","Nachol","7612"],["Khulna","Magura","Shripur","Shripur","7610"],["Khulna","Meherpur","Gangni","Gangni","7110"],["Khulna","Meherpur","Meherpur Sadar","Amjhupi","7101"],["Khulna","Meherpur","Meherpur Sadar","Amjhupi","7152"],["Khulna","Meherpur","Meherpur Sadar","Meherpur Sadar","7100"],["Khulna","Meherpur","Meherpur Sadar","Mujib Nagar Complex","7102"],["Khulna","Narail","Kalia","Kalia","7520"],["Khulna","Narail","Laxmipasha","Baradia","7514"],["Khulna","Narail","Laxmipasha","Itna","7512"],["Khulna","Narail","Laxmipasha","Laxmipasha","7510"],["Khulna","Narail","Laxmipasha","Lohagora","7511"],["Khulna","Narail","Laxmipasha","Naldi","7513"],["Khulna","Narail","Mohajan","Mohajan","7521"],["Khulna","Narail","Narail Sadar","Narail Sadar","7500"],["Khulna","Narail","Narail Sadar","Ratanganj","7501"],["Khulna","Satkhira","Ashashuni","Ashashuni","9460"],["Khulna","Satkhira","Ashashuni","Baradal","9461"],["Khulna","Satkhira","Debbhata","Debbhata","9430"],["Khulna","Satkhira","Debbhata","Gurugram","9431"],["Khulna","Satkhira","kalaroa","Chandanpur","9415"],["Khulna","Satkhira","kalaroa","Hamidpur","9413"],["Khulna","Satkhira","kalaroa","Jhaudanga","9412"],["Khulna","Satkhira","kalaroa","kalaroa","9410"],["Khulna","Satkhira","kalaroa","Khordo","9414"],["Khulna","Satkhira","kalaroa","Murarikati","9411"],["Khulna","Satkhira","Kaliganj UPO","Kaliganj UPO","9440"],["Khulna","Satkhira","Kaliganj UPO","Nalta Mubaroknagar","9441"],["Khulna","Satkhira","Kaliganj UPO","Ratanpur","9442"],["Khulna","Satkhira","Nakipur","Buri Goalini","9453"],["Khulna","Satkhira","Nakipur","Gabura","9454"],["Khulna","Satkhira","Nakipur","Habinagar","9455"],["Khulna","Satkhira","Nakipur","Nakipur","9450"],["Khulna","Satkhira","Nakipur","Naobeki","9452"],["Khulna","Satkhira","Nakipur","Noornagar","9451"],["Khulna","Satkhira","Satkhira Sadar","Budhhat","9403"],["Khulna","Satkhira","Satkhira Sadar","Gunakar kati","9402"],["Khulna","Satkhira","Satkhira Sadar","Satkhira Islamia Acc","9401"],["Khulna","Satkhira","Satkhira Sadar","Satkhira Sadar","9400"],["Khulna","Satkhira","Taala","Patkelghata","9421"],["Khulna","Satkhira","Taala","Taala","9420"],["Sylhet","Hobiganj","Azmireeganj","Azmireeganj","3360"],["Sylhet","Hobiganj","Bahubal","Bahubal","3310"],["Sylhet","Hobiganj","Baniachang","Baniachang","3350"],["Sylhet","Hobiganj","Baniachang","Jatrapasha","3351"],["Sylhet","Hobiganj","Baniachang","Kadirganj","3352"],["Sylhet","Hobiganj","Chunarughat","Chandpurbagan","3321"],["Sylhet","Hobiganj","Chunarughat","Chunarughat","3320"],["Sylhet","Hobiganj","Chunarughat","Narapati","3322"],["Sylhet","Hobiganj","Hobiganj Sadar","Gopaya","3302"],["Sylhet","Hobiganj","Hobiganj Sadar","Hobiganj Sadar","3300"],["Sylhet","Hobiganj","Hobiganj Sadar","Shaestaganj","3301"],["Sylhet","Hobiganj","Kalauk","Kalauk","3340"],["Sylhet","Hobiganj","Kalauk","Lakhai","3341"],["Sylhet","Hobiganj","Madhabpur","Itakhola","3331"],["Sylhet","Hobiganj","Madhabpur","Madhabpur","3330"],["Sylhet","Hobiganj","Madhabpur","Saihamnagar","3333"],["Sylhet","Hobiganj","Madhabpur","Shahajibazar","3332"],["Sylhet","Hobiganj","Nabiganj","Digalbak","3373"],["Sylhet","Hobiganj","Nabiganj","Golduba","3372"],["Sylhet","Hobiganj","Nabiganj","Goplarbazar","3371"],["Sylhet","Hobiganj","Nabiganj","Inathganj","3374"],["Sylhet","Hobiganj","Nabiganj","Nabiganj","3370"],["Sylhet","Moulvibazar","Baralekha","Baralekha","3250"],["Sylhet","Moulvibazar","Baralekha","Dhakkhinbag","3252"],["Sylhet","Moulvibazar","Baralekha","Juri","3251"],["Sylhet","Moulvibazar","Baralekha","Purbashahabajpur","3253"],["Sylhet","Moulvibazar","Kamalganj","Kamalganj","3220"],["Sylhet","Moulvibazar","Kamalganj","Keramatnaga","3221"],["Sylhet","Moulvibazar","Kamalganj","Munshibazar","3224"],["Sylhet","Moulvibazar","Kamalganj","Patrakhola","3222"],["Sylhet","Moulvibazar","Kamalganj","Shamsher Nagar","3223"],["Sylhet","Moulvibazar","Kulaura","Baramchal","3237"],["Sylhet","Moulvibazar","Kulaura","Kajaldhara","3234"],["Sylhet","Moulvibazar","Kulaura","Karimpur","3235"],["Sylhet","Moulvibazar","Kulaura","Kulaura","3230"],["Sylhet","Moulvibazar","Kulaura","Langla","3232"],["Sylhet","Moulvibazar","Kulaura","Prithimpasha","3233"],["Sylhet","Moulvibazar","Kulaura","Tillagaon","3231"],["Sylhet","Moulvibazar","Moulvibazar Sadar","Afrozganj","3203"],["Sylhet","Moulvibazar","Moulvibazar Sadar","Barakapan","3201"],["Sylhet","Moulvibazar","Moulvibazar Sadar","Monumukh","3202"],["Sylhet","Moulvibazar","Moulvibazar Sadar","Moulvibazar Sadar","3200"],["Sylhet","Moulvibazar","Rajnagar","Rajnagar","3240"],["Sylhet","Moulvibazar","Srimangal","Kalighat","3212"],["Sylhet","Moulvibazar","Srimangal","Khejurichhara","3213"],["Sylhet","Moulvibazar","Srimangal","Narain Chora","3211"],["Sylhet","Moulvibazar","Srimangal","Satgaon","3214"],["Sylhet","Moulvibazar","Srimangal","Srimangal","3210"],["Sylhet","Sunamganj","Bishamsarpur","Bishamsapur","3010"],["Sylhet","Sunamganj","Chhatak","Chhatak","3080"],["Sylhet","Sunamganj","Chhatak","Chhatak Cement Facto","3081"],["Sylhet","Sunamganj","Chhatak","Chhatak Paper Mills","3082"],["Sylhet","Sunamganj","Chhatak","Chourangi Bazar","3893"],["Sylhet","Sunamganj","Chhatak","Gabindaganj","3083"],["Sylhet","Sunamganj","Chhatak","Gabindaganj Natun Ba","3084"],["Sylhet","Sunamganj","Chhatak","Islamabad","3088"],["Sylhet","Sunamganj","Chhatak","jahidpur","3087"],["Sylhet","Sunamganj","Chhatak","Khurma","3085"],["Sylhet","Sunamganj","Chhatak","Moinpur","3086"],["Sylhet","Sunamganj","Dhirai Chandpur","Dhirai Chandpur","3040"],["Sylhet","Sunamganj","Dhirai Chandpur","Jagdal","3041"],["Sylhet","Sunamganj","Duara bazar","Duara bazar","3070"],["Sylhet","Sunamganj","Ghungiar","Ghungiar","3050"],["Sylhet","Sunamganj","Jagnnathpur","Atuajan","3062"],["Sylhet","Sunamganj","Jagnnathpur","Hasan Fatemapur","3063"],["Sylhet","Sunamganj","Jagnnathpur","Jagnnathpur","3060"],["Sylhet","Sunamganj","Jagnnathpur","Rasulganj","3064"],["Sylhet","Sunamganj","Jagnnathpur","Shiramsi","3065"],["Sylhet","Sunamganj","Jagnnathpur","Syedpur","3061"],["Sylhet","Sunamganj","Sachna","Sachna","3020"],["Sylhet","Sunamganj","Sunamganj Sadar","Pagla","3001"],["Sylhet","Sunamganj","Sunamganj Sadar","Patharia","3002"],["Sylhet","Sunamganj","Sunamganj Sadar","Sunamganj Sadar","3000"],["Sylhet","Sunamganj","Tahirpur","Tahirpur","3030"],["Sylhet","Sylhet","Balaganj","Balaganj","3120"],["Sylhet","Sylhet","Balaganj","Begumpur","3125"],["Sylhet","Sylhet","Balaganj","Brahman Shashon","3122"],["Sylhet","Sylhet","Balaganj","Gaharpur","3128"],["Sylhet","Sylhet","Balaganj","Goala Bazar","3124"],["Sylhet","Sylhet","Balaganj","Karua","3121"],["Sylhet","Sylhet","Balaganj","Kathal Khair","3127"],["Sylhet","Sylhet","Balaganj","Natun Bazar","3129"],["Sylhet","Sylhet","Balaganj","Omarpur","3126"],["Sylhet","Sylhet","Balaganj","Tajpur","3123"],["Sylhet","Sylhet","Bianibazar","Bianibazar","3170"],["Sylhet","Sylhet","Bianibazar","Churkai","3175"],["Sylhet","Sylhet","Bianibazar","jaldup","3171"],["Sylhet","Sylhet","Bianibazar","Kurar bazar","3173"],["Sylhet","Sylhet","Bianibazar","Mathiura","3172"],["Sylhet","Sylhet","Bianibazar","Salia bazar","3174"],["Sylhet","Sylhet","Bishwanath","Bishwanath","3130"],["Sylhet","Sylhet","Bishwanath","Dashghar","3131"],["Sylhet","Sylhet","Bishwanath","Deokalas","3133"],["Sylhet","Sylhet","Bishwanath","Doulathpur","3132"],["Sylhet","Sylhet","Bishwanath","Singer kanch","3134"],["Sylhet","Sylhet","Fenchuganj","Fenchuganj","3116"],["Sylhet","Sylhet","Fenchuganj","Fenchuganj SareKarkh","3117"],["Sylhet","Sylhet","Goainhat","Chiknagul","3152"],["Sylhet","Sylhet","Goainhat","Goainhat","3150"],["Sylhet","Sylhet","Goainhat","Jaflong","3151"],["Sylhet","Sylhet","Gopalganj","banigram","3164"],["Sylhet","Sylhet","Gopalganj","Chandanpur","3165"],["Sylhet","Sylhet","Gopalganj","Dakkhin Bhadashore","3162"],["Sylhet","Sylhet","Gopalganj","Dhaka Dakkhin","3161"],["Sylhet","Sylhet","Gopalganj","Gopalgannj","3160"],["Sylhet","Sylhet","Gopalganj","Ranaping","3163"],["Sylhet","Sylhet","Jaintapur","Jainthapur","3156"],["Sylhet","Sylhet","Jakiganj","Ichhamati","3191"],["Sylhet","Sylhet","Jakiganj","Jakiganj","3190"],["Sylhet","Sylhet","Kanaighat","Chatulbazar","3181"],["Sylhet","Sylhet","Kanaighat","Gachbari","3183"],["Sylhet","Sylhet","Kanaighat","Kanaighat","3180"],["Sylhet","Sylhet","Kanaighat","Manikganj","3182"],["Sylhet","Sylhet","Kompanyganj","Kompanyganj","3140"],["Sylhet","Sylhet","Sylhet Sadar","Birahimpur","3106"],["Sylhet","Sylhet","Sylhet Sadar","Jalalabad","3107"],["Sylhet","Sylhet","Sylhet Sadar","Jalalabad Cantoment","3104"],["Sylhet","Sylhet","Sylhet Sadar","Kadamtali","3111"],["Sylhet","Sylhet","Sylhet Sadar","Kamalbazer","3112"],["Sylhet","Sylhet","Sylhet Sadar","Khadimnagar","3103"],["Sylhet","Sylhet","Sylhet Sadar","Lalbazar","3113"],["Sylhet","Sylhet","Sylhet Sadar","Mogla","3108"],["Sylhet","Sylhet","Sylhet Sadar","Ranga Hajiganj","3109"],["Sylhet","Sylhet","Sylhet Sadar","Shahajalal Science &","3114"],["Sylhet","Sylhet","Sylhet Sadar","Silam","3105"],["Sylhet","Sylhet","Sylhet Sadar","Sylhe Sadar","3100"],["Sylhet","Sylhet","Sylhet Sadar","Sylhet Biman Bondar","3102"],["Sylhet","Sylhet","Sylhet Sadar","Sylhet Cadet Col","3101"],["Sylhet","Meherpur","Gangni","Gangni","7110"],["Sylhet","Meherpur","Meherpur Sadar","Amjhupi","7101"],["Sylhet","Meherpur","Meherpur Sadar","Amjhupi","7152"],["Sylhet","Meherpur","Meherpur Sadar","Meherpur Sadar","7100"],["Sylhet","Meherpur","Meherpur Sadar","Mujib Nagar Complex","7102"],["Sylhet","Narail","Kalia","Kalia","7520"],["Sylhet","Narail","Laxmipasha","Baradia","7514"],["Sylhet","Narail","Laxmipasha","Itna","7512"],["Sylhet","Narail","Laxmipasha","Laxmipasha","7510"],["Sylhet","Narail","Laxmipasha","Lohagora","7511"],["Sylhet","Narail","Laxmipasha","Naldi","7513"],["Sylhet","Narail","Mohajan","Mohajan","7521"],["Sylhet","Narail","Narail Sadar","Narail Sadar","7500"],["Sylhet","Narail","Narail Sadar","Ratanganj","7501"],["Sylhet","Satkhira","Ashashuni","Ashashuni","9460"],["Sylhet","Satkhira","Ashashuni","Baradal","9461"],["Sylhet","Satkhira","Debbhata","Debbhata","9430"],["Sylhet","Satkhira","Debbhata","Gurugram","9431"],["Sylhet","Satkhira","kalaroa","Chandanpur","9415"],["Sylhet","Satkhira","kalaroa","Hamidpur","9413"],["Sylhet","Satkhira","kalaroa","Jhaudanga","9412"],["Sylhet","Satkhira","kalaroa","kalaroa","9410"],["Sylhet","Satkhira","kalaroa","Khordo","9414"],["Sylhet","Satkhira","kalaroa","Murarikati","9411"],["Sylhet","Satkhira","Kaliganj UPO","Kaliganj UPO","9440"],["Sylhet","Satkhira","Kaliganj UPO","Nalta Mubaroknagar","9441"],["Sylhet","Satkhira","Kaliganj UPO","Ratanpur","9442"],["Sylhet","Satkhira","Nakipur","Buri Goalini","9453"],["Sylhet","Satkhira","Nakipur","Gabura","9454"],["Sylhet","Satkhira","Nakipur","Habinagar","9455"],["Sylhet","Satkhira","Nakipur","Nakipur","9450"],["Sylhet","Satkhira","Nakipur","Naobeki","9452"],["Sylhet","Satkhira","Nakipur","Noornagar","9451"],["Sylhet","Satkhira","Satkhira Sadar","Budhhat","9403"],["Sylhet","Satkhira","Satkhira Sadar","Gunakar kati","9402"],["Sylhet","Satkhira","Satkhira Sadar","Satkhira Islamia Acc","9401"],["Sylhet","Satkhira","Satkhira Sadar","Satkhira Sadar","9400"],["Sylhet","Satkhira","Taala","Patkelghata","9421"],["Sylhet","Satkhira","Taala","Taala","9420"],["Barisal","Barguna","Amtali","Amtali","8710"],["Barisal","Barguna","Bamna","Bamna","8730"],["Barisal","Barguna","Barguna Sadar","Barguna Sadar","8700"],["Barisal","Barguna","Barguna Sadar","Nali Bandar","8701"],["Barisal","Barguna","Betagi","Betagi","8740"],["Barisal","Barguna","Betagi","Darul Ulam","8741"],["Barisal","Barguna","Patharghata","Kakchira","8721"],["Barisal","Barguna","Patharghata","Patharghata","8720"],["Barisal","Barishal","Agailzhara","Agailzhara","8240"],["Barisal","Barishal","Agailzhara","Gaila","8241"],["Barisal","Barishal","Agailzhara","Paisarhat","8242"],["Barisal","Barishal","Babuganj","Babuganj","8210"],["Barisal","Barishal","Babuganj","Barishal Cadet","8216"],["Barisal","Barishal","Babuganj","Chandpasha","8212"],["Barisal","Barishal","Babuganj","Madhabpasha","8213"],["Barisal","Barishal","Babuganj","Nizamuddin College","8215"],["Barisal","Barishal","Babuganj","Rahamatpur","8211"],["Barisal","Barishal","Babuganj","Thakur Mallik","8214"],["Barisal","Barishal","Barajalia","Barajalia","8260"],["Barisal","Barishal","Barajalia","Osman Manjil","8261"],["Barisal","Barishal","Barishal Sadar","Barishal Sadar","8200"],["Barisal","Barishal","Barishal Sadar","Bukhainagar","8201"],["Barisal","Barishal","Barishal Sadar","Jaguarhat","8206"],["Barisal","Barishal","Barishal Sadar","Kashipur","8205"],["Barisal","Barishal","Barishal Sadar","Patang","8204"],["Barisal","Barishal","Barishal Sadar","Saheberhat","8202"],["Barisal","Barishal","Barishal Sadar","Sugandia","8203"],["Barisal","Barishal","Gouranadi","Batajor","8233"],["Barisal","Barishal","Gouranadi","Gouranadi","8230"],["Barisal","Barishal","Gouranadi","Kashemabad","8232"],["Barisal","Barishal","Gouranadi","Tarki Bandar","8231"],["Barisal","Barishal","Mahendiganj","Langutia","8274"],["Barisal","Barishal","Mahendiganj","Laskarpur","8271"],["Barisal","Barishal","Mahendiganj","Mahendiganj","8270"],["Barisal","Barishal","Mahendiganj","Nalgora","8273"],["Barisal","Barishal","Mahendiganj","Ulania","8272"],["Barisal","Barishal","Muladi","Charkalekhan","8252"],["Barisal","Barishal","Muladi","Kazirchar","8251"],["Barisal","Barishal","Muladi","Muladi","8250"],["Barisal","Barishal","Sahebganj","Charamandi","8281"],["Barisal","Barishal","Sahebganj","kalaskati","8284"],["Barisal","Barishal","Sahebganj","Padri Shibpur","8282"],["Barisal","Barishal","Sahebganj","Sahebganj","8280"],["Barisal","Barishal","Sahebganj","Shialguni","8283"],["Barisal","Barishal","Uzirpur","Dakuarhat","8223"],["Barisal","Barishal","Uzirpur","Dhamura","8221"],["Barisal","Barishal","Uzirpur","Jugirkanda","8222"],["Barisal","Barishal","Uzirpur","Shikarpur","8224"],["Barisal","Barishal","Uzirpur","Uzirpur","8220"],["Barisal","Bhola","Bhola Sadar","Bhola Sadar","8300"],["Barisal","Bhola","Bhola Sadar","Joynagar","8301"],["Barisal","Bhola","Borhanuddin UPO","Borhanuddin UPO","8320"],["Barisal","Bhola","Borhanuddin UPO","Mirzakalu","8321"],["Barisal","Bhola","Charfashion","Charfashion","8340"],["Barisal","Bhola","Charfashion","Dularhat","8341"],["Barisal","Bhola","Charfashion","Keramatganj","8342"],["Barisal","Bhola","Doulatkhan","Doulatkhan","8310"],["Barisal","Bhola","Doulatkhan","Hajipur","8311"],["Barisal","Bhola","Hajirhat","Hajirhat","8360"],["Barisal","Bhola","Hatshoshiganj","Hatshoshiganj","8350"],["Barisal","Bhola","Lalmohan UPO","Daurihat","8331"],["Barisal","Bhola","Lalmohan UPO","Gazaria","8332"],["Barisal","Bhola","Lalmohan UPO","Lalmohan UPO","8330"],["Barisal","Jhalokathi","Jhalokathi Sadar","Baukathi","8402"],["Barisal","Jhalokathi","Jhalokathi Sadar","Gabha","8403"],["Barisal","Jhalokathi","Jhalokathi Sadar","Jhalokathi Sadar","8400"],["Barisal","Jhalokathi","Jhalokathi Sadar","Nabagram","8401"],["Barisal","Jhalokathi","Jhalokathi Sadar","Shekherhat","8404"],["Barisal","Jhalokathi","Kathalia","Amua","8431"],["Barisal","Jhalokathi","Kathalia","Kathalia","8430"],["Barisal","Jhalokathi","Kathalia","Niamatee","8432"],["Barisal","Jhalokathi","Kathalia","Shoulajalia","8433"],["Barisal","Jhalokathi","Nalchhiti","Beerkathi","8421"],["Barisal","Jhalokathi","Nalchhiti","Nalchhiti","8420"],["Barisal","Jhalokathi","Rajapur","Rajapur","8410"],["Barisal","Patuakhali","Bauphal","Bagabandar","8621"],["Barisal","Patuakhali","Bauphal","Bauphal","8620"],["Barisal","Patuakhali","Bauphal","Birpasha","8622"],["Barisal","Patuakhali","Bauphal","Kalaia","8624"],["Barisal","Patuakhali","Bauphal","Kalishari","8623"],["Barisal","Patuakhali","Dashmina","Dashmina","8630"],["Barisal","Patuakhali","Galachipa","Galachipa","8640"],["Barisal","Patuakhali","Galachipa","Gazipur Bandar","8641"],["Barisal","Patuakhali","Khepupara","Khepupara","8650"],["Barisal","Patuakhali","Khepupara","Mahipur","8651"],["Barisal","Patuakhali","Patuakhali Sadar","Dumkee","8602"],["Barisal","Patuakhali","Patuakhali Sadar","Moukaran","8601"],["Barisal","Patuakhali","Patuakhali Sadar","Patuakhali Sadar","8600"],["Barisal","Patuakhali","Patuakhali Sadar","Rahimabad","8603"],["Barisal","Patuakhali","Subidkhali","Subidkhali","8610"],["Barisal","Pirojpur","Banaripara","Banaripara","8530"],["Barisal","Pirojpur","Banaripara","Chakhar","8531"],["Barisal","Pirojpur","Bhandaria","Bhandaria","8550"],["Barisal","Pirojpur","Bhandaria","Dhaoa","8552"],["Barisal","Pirojpur","Bhandaria","Kanudashkathi","8551"],["Barisal","Pirojpur","kaukhali","Jolagati","8513"],["Barisal","Pirojpur","kaukhali","Joykul","8512"],["Barisal","Pirojpur","kaukhali","Kaukhali","8510"],["Barisal","Pirojpur","kaukhali","Keundia","8511"],["Barisal","Pirojpur","Mathbaria","Betmor Natun Hat","8565"],["Barisal","Pirojpur","Mathbaria","Gulishakhali","8563"],["Barisal","Pirojpur","Mathbaria","Halta","8562"],["Barisal","Pirojpur","Mathbaria","Mathbaria","8560"],["Barisal","Pirojpur","Mathbaria","Shilarganj","8566"],["Barisal","Pirojpur","Mathbaria","Tiarkhali","8564"],["Barisal","Pirojpur","Mathbaria","Tushkhali","8561"],["Barisal","Pirojpur","Nazirpur","Nazirpur","8540"],["Barisal","Pirojpur","Nazirpur","Sriramkathi","8541"],["Barisal","Pirojpur","Pirojpur Sadar","Hularhat","8501"],["Barisal","Pirojpur","Pirojpur Sadar","Parerhat","8502"],["Barisal","Pirojpur","Pirojpur Sadar","Pirojpur Sadar","8500"],["Barisal","Pirojpur","Swarupkathi","Darus Sunnat","8521"],["Barisal","Pirojpur","Swarupkathi","Jalabari","8523"],["Barisal","Pirojpur","Swarupkathi","Kaurikhara","8522"],["Barisal","Pirojpur","Swarupkathi","Swarupkathi","8520"],["Rajshahi","Bogra","Alamdighi","Adamdighi","5890"],["Rajshahi","Bogra","Alamdighi","Nasharatpur","5892"],["Rajshahi","Bogra","Alamdighi","Santahar","5891"],["Rajshahi","Bogra","Bogra Sadar","Bogra Canttonment","5801"],["Rajshahi","Bogra","Bogra Sadar","Bogra Sadar","5800"],["Rajshahi","Bogra","Dhunat","Dhunat","5850"],["Rajshahi","Bogra","Dhunat","Gosaibari","5851"],["Rajshahi","Bogra","Dupchachia","Dupchachia","5880"],["Rajshahi","Bogra","Dupchachia","Talora","5881"],["Rajshahi","Bogra","Gabtoli","Gabtoli","5820"],["Rajshahi","Bogra","Gabtoli","Sukhanpukur","5821"],["Rajshahi","Bogra","Kahalu","Kahalu","5870"],["Rajshahi","Bogra","Nandigram","Nandigram","5860"],["Rajshahi","Bogra","Sariakandi","Chandan Baisha","5831"],["Rajshahi","Bogra","Sariakandi","Sariakandi","5830"],["Rajshahi","Bogra","Sherpur","Chandaikona","5841"],["Rajshahi","Bogra","Sherpur","Palli Unnyan Accadem","5842"],["Rajshahi","Bogra","Sherpur","Sherpur","5840"],["Rajshahi","Bogra","Shibganj","Shibganj","5810"],["Rajshahi","Bogra","Sonatola","Sonatola","5826"],["Rajshahi","Chapinawabganj","Bholahat","Bholahat","6330"],["Rajshahi","Chapinawabganj","Chapinawabganj Sadar","Amnura","6303"],["Rajshahi","Chapinawabganj","Chapinawabganj Sadar","Chapinawbganj Sadar","6300"],["Rajshahi","Chapinawabganj","Chapinawabganj Sadar","Rajarampur","6301"],["Rajshahi","Chapinawabganj","Chapinawabganj Sadar","Ramchandrapur","6302"],["Rajshahi","Chapinawabganj","Nachol","Mandumala","6311"],["Rajshahi","Chapinawabganj","Nachol","Nachol","6310"],["Rajshahi","Chapinawabganj","Rohanpur","Gomashtapur","6321"],["Rajshahi","Chapinawabganj","Rohanpur","Rohanpur","6320"],["Rajshahi","Chapinawabganj","Shibganj U.P.O","Kansart","6341"],["Rajshahi","Chapinawabganj","Shibganj U.P.O","Manaksha","6342"],["Rajshahi","Chapinawabganj","Shibganj U.P.O","Shibganj U.P.O","6340"],["Rajshahi","Joypurhat","Akkelpur","Akklepur","5940"],["Rajshahi","Joypurhat","Akkelpur","jamalganj","5941"],["Rajshahi","Joypurhat","Akkelpur","Tilakpur","5942"],["Rajshahi","Joypurhat","Joypurhat Sadar","Joypurhat Sadar","5900"],["Rajshahi","Joypurhat","kalai","kalai","5930"],["Rajshahi","Joypurhat","Khetlal","Khetlal","5920"],["Rajshahi","Joypurhat","panchbibi","Panchbibi","5910"],["Rajshahi","Naogaon","Ahsanganj","Ahsanganj","6596"],["Rajshahi","Naogaon","Ahsanganj","Bandai","6597"],["Rajshahi","Naogaon","Badalgachhi","Badalgachhi","6570"],["Rajshahi","Naogaon","Dhamuirhat","Dhamuirhat","6580"],["Rajshahi","Naogaon","Mahadebpur","Mahadebpur","6530"],["Rajshahi","Naogaon","Naogaon Sadar","Naogaon Sadar","6500"],["Rajshahi","Naogaon","Niamatpur","Niamatpur","6520"],["Rajshahi","Naogaon","Nitpur","Nitpur","6550"],["Rajshahi","Naogaon","Nitpur","Panguria","6552"],["Rajshahi","Naogaon","Nitpur","Porsa","6551"],["Rajshahi","Naogaon","Patnitala","Patnitala","6540"],["Rajshahi","Naogaon","Prasadpur","Balihar","6512"],["Rajshahi","Naogaon","Prasadpur","Manda","6511"],["Rajshahi","Naogaon","Prasadpur","Prasadpur","6510"],["Rajshahi","Naogaon","Raninagar","Kashimpur","6591"],["Rajshahi","Naogaon","Raninagar","Raninagar","6590"],["Rajshahi","Naogaon","Sapahar","Moduhil","6561"],["Rajshahi","Naogaon","Sapahar","Sapahar","6560"],["Rajshahi","Natore","Gopalpur UPO","Abdulpur","6422"],["Rajshahi","Natore","Gopalpur UPO","Gopalpur U.P.O","6420"],["Rajshahi","Natore","Gopalpur UPO","Lalpur S.O","6421"],["Rajshahi","Natore","Harua","Baraigram","6432"],["Rajshahi","Natore","Harua","Dayarampur","6431"],["Rajshahi","Natore","Harua","Harua","6430"],["Rajshahi","Natore","Hatgurudaspur","Hatgurudaspur","6440"],["Rajshahi","Natore","Laxman","Laxman","6410"],["Rajshahi","Natore","Natore Sadar","Baiddyabal Gharia","6402"],["Rajshahi","Natore","Natore Sadar","Digapatia","6401"],["Rajshahi","Natore","Natore Sadar","Madhnagar","6403"],["Rajshahi","Natore","Natore Sadar","Natore Sadar","6400"],["Rajshahi","Natore","Singra","Singra","6450"],["Rajshahi","Pabna","Banwarinagar","Banwarinagar","6650"],["Rajshahi","Pabna","Bera","Bera","6680"],["Rajshahi","Pabna","Bera","Kashinathpur","6682"],["Rajshahi","Pabna","Bera","Nakalia","6681"],["Rajshahi","Pabna","Bera","Puran Bharenga","6683"],["Rajshahi","Pabna","Bhangura","Bhangura","6640"],["Rajshahi","Pabna","Chatmohar","Chatmohar","6630"],["Rajshahi","Pabna","Debottar","Debottar","6610"],["Rajshahi","Pabna","Ishwardi","Dhapari","6621"],["Rajshahi","Pabna","Ishwardi","Ishwardi","6620"],["Rajshahi","Pabna","Ishwardi","Pakshi","6622"],["Rajshahi","Pabna","Ishwardi","Rajapur","6623"],["Rajshahi","Pabna","Pabna Sadar","Hamayetpur","6602"],["Rajshahi","Pabna","Pabna Sadar","Kaliko Cotton Mills","6601"],["Rajshahi","Pabna","Pabna Sadar","Pabna Sadar","6600"],["Rajshahi","Pabna","Sathia","Sathia","6670"],["Rajshahi","Pabna","Sujanagar","Sagarkandi","6661"],["Rajshahi","Pabna","Sujanagar","Sujanagar","6660"],["Rajshahi","Rajshahi","Bagha","Arani","6281"],["Rajshahi","Rajshahi","Bagha","Bagha","6280"],["Rajshahi","Rajshahi","Bhabaniganj","Bhabaniganj","6250"],["Rajshahi","Rajshahi","Bhabaniganj","Taharpur","6251"],["Rajshahi","Rajshahi","Charghat","Charghat","6270"],["Rajshahi","Rajshahi","Charghat","Sarda","6271"],["Rajshahi","Rajshahi","Durgapur","Durgapur","6240"],["Rajshahi","Rajshahi","Godagari","Godagari","6290"],["Rajshahi","Rajshahi","Godagari","Premtoli","6291"],["Rajshahi","Rajshahi","Khod Mohanpur","Khodmohanpur","6220"],["Rajshahi","Rajshahi","Lalitganj","Lalitganj","6210"],["Rajshahi","Rajshahi","Lalitganj","Rajshahi Sugar Mills","6211"],["Rajshahi","Rajshahi","Lalitganj","Shyampur","6212"],["Rajshahi","Rajshahi","Putia","Putia","6260"],["Rajshahi","Rajshahi","Rajshahi Sadar","Binodpur Bazar","6206"],["Rajshahi","Rajshahi","Rajshahi Sadar","Ghuramara","6100"],["Rajshahi","Rajshahi","Rajshahi Sadar","Kazla","6204"],["Rajshahi","Rajshahi","Rajshahi Sadar","Rajshahi Canttonment","6202"],["Rajshahi","Rajshahi","Rajshahi Sadar","Rajshahi Court","6201"],["Rajshahi","Rajshahi","Rajshahi Sadar","Rajshahi Sadar","6000"],["Rajshahi","Rajshahi","Rajshahi Sadar","Rajshahi University","6205"],["Rajshahi","Rajshahi","Rajshahi Sadar","Sapura","6203"],["Rajshahi","Rajshahi","Tanor","Tanor","6230"],["Rajshahi","Sirajganj","Baiddya Jam Toil","Baiddya Jam Toil","6730"],["Rajshahi","Sirajganj","Belkuchi","Belkuchi","6740"],["Rajshahi","Sirajganj","Belkuchi","Enayetpur","6751"],["Rajshahi","Sirajganj","Belkuchi","Rajapur","6742"],["Rangpur","Dinajpur","Bangla Hili","Bangla Hili","5270"],["Rangpur","Dinajpur","Biral","Biral","5210"],["Rangpur","Dinajpur","Birampur","Birampur","5266"],["Rangpur","Dinajpur","Birganj","Birganj","5220"],["Rangpur","Dinajpur","Chrirbandar","Chrirbandar","5240"],["Rangpur","Dinajpur","Chrirbandar","Ranirbandar","5241"],["Rangpur","Dinajpur","Dinajpur Sadar","Dinajpur Rajbari","5201"],["Rangpur","Dinajpur","Dinajpur Sadar","Dinajpur Sadar","5200"],["Rangpur","Dinajpur","Khansama","Khansama","5230"],["Rangpur","Dinajpur","Khansama","Pakarhat","5231"],["Rangpur","Dinajpur","Maharajganj","Maharajganj","5226"],["Rangpur","Dinajpur","Nababganj","Daudpur","5281"],["Rangpur","Dinajpur","Nababganj","Gopalpur","5282"],["Rangpur","Dinajpur","Nababganj","Nababganj","5280"],["Rangpur","Dinajpur","Osmanpur","Ghoraghat","5291"],["Rangpur","Dinajpur","Osmanpur","Osmanpur","5290"],["Rangpur","Dinajpur","Parbatipur","Parbatipur","5250"],["Rangpur","Dinajpur","Phulbari","Phulbari","5260"],["Rangpur","Dinajpur","Setabganj","Setabganj","5216"],["Rangpur","Gaibandha","Bonarpara","Bonarpara","5750"],["Rangpur","Gaibandha","Bonarpara","saghata","5751"],["Rangpur","Gaibandha","Gaibandha Sadar","Gaibandha Sadar","5700"],["Rangpur","Gaibandha","Gobindaganj","Gobindhaganj","5740"],["Rangpur","Gaibandha","Gobindaganj","Mahimaganj","5741"],["Rangpur","Gaibandha","Palashbari","Palashbari","5730"],["Rangpur","Gaibandha","Phulchhari","Bharatkhali","5761"],["Rangpur","Gaibandha","Phulchhari","Phulchhari","5760"],["Rangpur","Gaibandha","Saadullapur","Naldanga","5711"],["Rangpur","Gaibandha","Saadullapur","Saadullapur","5710"],["Rangpur","Gaibandha","Sundarganj","Bamandanga","5721"],["Rangpur","Gaibandha","Sundarganj","Sundarganj","5720"],["Rangpur","Kurigram","Bhurungamari","Bhurungamari","5670"],["Rangpur","Kurigram","Chilmari","Chilmari","5630"],["Rangpur","Kurigram","Chilmari","Jorgachh","5631"],["Rangpur","Kurigram","Kurigram Sadar","Kurigram Sadar","5600"],["Rangpur","Kurigram","Kurigram Sadar","Pandul","5601"],["Rangpur","Kurigram","Kurigram Sadar","Phulbari","5680"],["Rangpur","Kurigram","Nageshwar","Nageshwar","5660"],["Rangpur","Kurigram","Rajarhat","Nazimkhan","5611"],["Rangpur","Kurigram","Rajarhat","Rajarhat","5610"],["Rangpur","Kurigram","Rajibpur","Rajibpur","5650"],["Rangpur","Kurigram","Roumari","Roumari","5640"],["Rangpur","Kurigram","Ulipur","Bazarhat","5621"],["Rangpur","Kurigram","Ulipur","Ulipur","5620"],["Rangpur","Lalmonirhat","Aditmari","Aditmari","5510"],["Rangpur","Lalmonirhat","Hatibandha","Hatibandha","5530"],["Rangpur","Lalmonirhat","Lalmonirhat Sadar","Kulaghat SO","5502"],["Rangpur","Lalmonirhat","Lalmonirhat Sadar","Lalmonirhat Sadar","5500"],["Rangpur","Lalmonirhat","Lalmonirhat Sadar","Moghalhat","5501"],["Rangpur","Lalmonirhat","Patgram","Baura","5541"],["Rangpur","Lalmonirhat","Patgram","Burimari","5542"],["Rangpur","Lalmonirhat","Patgram","Patgram","5540"],["Rangpur","Lalmonirhat","Tushbhandar","Tushbhandar","5520"],["Rangpur","Nilphamari","Dimla","Dimla","5350"],["Rangpur","Nilphamari","Dimla","Ghaga Kharibari","5351"],["Rangpur","Nilphamari","Domar","Chilahati","5341"],["Rangpur","Nilphamari","Domar","Domar","5340"],["Rangpur","Nilphamari","Jaldhaka","Jaldhaka","5330"],["Rangpur","Nilphamari","Kishoriganj","Kishoriganj","5320"],["Rangpur","Nilphamari","Nilphamari Sadar","Nilphamari Sadar","5300"],["Rangpur","Nilphamari","Nilphamari Sadar","Nilphamari Sugar Mil","5301"],["Rangpur","Nilphamari","Syedpur","Syedpur","5310"],["Rangpur","Nilphamari","Syedpur","Syedpur Upashahar","5311"],["Rangpur","Panchagarh","Boda","Boda","5010"],["Rangpur","Panchagarh","Chotto Dab","Chotto Dab","5040"],["Rangpur","Panchagarh","Chotto Dab","Mirjapur","5041"],["Rangpur","Panchagarh","Dabiganj","Dabiganj","5020"],["Rangpur","Panchagarh","Panchagra Sadar","Panchagar Sadar","5000"],["Rangpur","Panchagarh","Tetulia","Tetulia","5030"],["Rangpur","Rangpur","Badarganj","Badarganj","5430"],["Rangpur","Rangpur","Badarganj","Shyampur","5431"],["Rangpur","Rangpur","Gangachara","Gangachara","5410"],["Rangpur","Rangpur","Kaunia","Haragachh","5441"],["Rangpur","Rangpur","Kaunia","Kaunia","5440"],["Rangpur","Rangpur","Mithapukur","Mithapukur","5460"],["Rangpur","Rangpur","Pirgachha","Pirgachha","5450"],["Rangpur","Rangpur","Rangpur Sadar","Alamnagar","5402"],["Rangpur","Rangpur","Rangpur Sadar","Mahiganj","5403"],["Rangpur","Rangpur","Rangpur Sadar","Rangpur Cadet Colleg","5404"],["Rangpur","Rangpur","Rangpur Sadar","Rangpur Carmiecal Col","5405"],["Rangpur","Rangpur","Rangpur Sadar","Rangpur Sadar","5400"],["Rangpur","Rangpur","Rangpur Sadar","Rangpur Upa-Shahar","5401"],["Rangpur","Rangpur","Taraganj","Taraganj","5420"],["Rangpur","Thakurgaon","Baliadangi","Baliadangi","5140"],["Rangpur","Thakurgaon","Baliadangi","Lahiri","5141"],["Rangpur","Thakurgaon","Jibanpur","Jibanpur","5130"],["Rangpur","Thakurgaon","Pirganj","Pirganj","5110"],["Rangpur","Thakurgaon","Pirganj","Pirganj","5470"],["Rangpur","Thakurgaon","Rani Sankail","Nekmarad","5121"],["Rangpur","Thakurgaon","Rani Sankail","Rani Sankail","5120"],["Rangpur","Thakurgaon","Thakurgaon Sadar","Ruhia","5103"],["Rangpur","Thakurgaon","Thakurgaon Sadar","Shibganj","5102"],["Rangpur","Thakurgaon","Thakurgaon Sadar","Thakurgaon Road","5101"],["Rangpur","Thakurgaon","Thakurgaon Sadar","Thakurgaon Sadar","5100"]];
function geoUnique(field){var idx={division:0,district:1,thana:2,postoffice:3,postcode:4}[field];var seen={};return _BD_GEO.filter(function(r){var v=r[idx];if(seen[v])return false;seen[v]=true;return true}).map(function(r){return r[idx]})}
function geoFilteredUnique(field,filters){var idx={division:0,district:1,thana:2,postoffice:3,postcode:4}[field];var filtered=_BD_GEO;if(filters.division)filtered=filtered.filter(function(r){return r[0]===filters.division});if(filters.district)filtered=filtered.filter(function(r){return r[1]===filters.district});if(filters.thana)filtered=filtered.filter(function(r){return r[2]===filters.thana});var seen={};return filtered.filter(function(r){var v=r[idx];if(seen[v])return false;seen[v]=true;return true}).map(function(r){return r[idx]})}
function getGeoContext(){return{division:document.getElementById('paDv').value.trim(),district:document.getElementById('paDs').value.trim(),thana:document.getElementById('paTh').value.trim()}}
window.geoFilter=function(inputId,listId,field){var q=document.getElementById(inputId).value.trim().toLowerCase();var ctx=getGeoContext();var items=geoFilteredUnique(field,ctx);if(q)items=items.filter(function(v){return v.toLowerCase().includes(q)});var el=document.getElementById(listId);el.innerHTML=items.slice(0,60).map(function(v){return'<div onclick="geoSelect(\\x27'+inputId+'\\x27,\\x27'+listId+'\\x27,\\x27'+field+'\\x27,this.textContent)">'+v+'</div>'}).join('');el.classList.add('active')}
window.geoShowList=function(listId){document.querySelectorAll('.sr-list').forEach(function(x){if(x.id!==listId)x.classList.remove('active')});var el=document.getElementById(listId);if(!el.innerHTML)return;el.classList.add('active')}
window.geoSelect=function(inputId,listId,field,val){document.getElementById(inputId).value=val;document.getElementById(listId).classList.remove('active');geoAutoFill(field,val)}
window.geoAutoFill=function(field,val){var matches=_BD_GEO.filter(function(r){var idx={division:0,district:1,thana:2,postoffice:3,postcode:4}[field];return r[idx]===val});if(!matches.length)return;var first=matches[0];
if(field==='thana'||field==='postcode'){document.getElementById('paDv').value=first[0];document.getElementById('paDs').value=first[1];document.getElementById('paTh').value=first[2];if(matches.length===1){document.getElementById('paPo').value=first[3];document.getElementById('paPc').value=first[4]}}
else if(field==='division'){document.getElementById('paDs').value='';document.getElementById('paTh').value='';document.getElementById('paPo').value='';document.getElementById('paPc').value=''}
else if(field==='district'){document.getElementById('paDv').value=first[0];document.getElementById('paTh').value='';document.getElementById('paPo').value='';document.getElementById('paPc').value=''}
else if(field==='postoffice'){document.getElementById('paDv').value=first[0];document.getElementById('paDs').value=first[1];document.getElementById('paTh').value=first[2];document.getElementById('paPc').value=first[4]}}
document.addEventListener('click',function(e){if(!e.target.closest('.sr-wrap'))document.querySelectorAll('.sr-list').forEach(function(x){x.classList.remove('active')})})
window.switchPT=function(t,el){pT=t;document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});el.classList.add('active');renderPa();document.getElementById('paSPDiv').classList.toggle('hidden',pT!=='customer')}
window.openAddParty=function(){document.getElementById('paTitle').textContent='Add '+(pT==='customer'?'Customer':'Supplier');document.getElementById('paEK').value='';['paN','paPh','paAd','paDv','paDs','paTh','paPo','paPc'].forEach(function(i){document.getElementById(i).value=''});document.getElementById('paCL').value='';document.getElementById('paOB').value='';document.getElementById('paSP').value='';document.getElementById('paSPDiv').classList.toggle('hidden',pT!=='customer');openModal('addParty')}
window.savePa=async function(){var ek=document.getElementById('paEK').value;var n=document.getElementById('paN').value.trim();if(!n){showToast('Name is required','warning');return;}var spId=document.getElementById('paSP').value;var sp=paSPList.find(function(x){return x._key===spId});var ob=parseFloat(document.getElementById('paOB').value)||0;var d={name:n,phone:document.getElementById('paPh').value.trim(),address:document.getElementById('paAd').value.trim(),division:document.getElementById('paDv').value.trim(),district:document.getElementById('paDs').value.trim(),thana:document.getElementById('paTh').value.trim(),postOffice:document.getElementById('paPo').value.trim(),postcode:document.getElementById('paPc').value.trim(),openingBalance:ob,creditLimit:+document.getElementById('paCL').value||0,salespersonId:spId||'',salespersonName:sp?sp.name:''};try{if(ek){var old=aP.find(function(x){return x._key===ek});if(old){d=Object.assign({},cleanForSave(old),d)}await saveByKey(ek,d);showToast('Contact updated successfully','success')}else{d.type=pT;d.balance=ob;await saveItem('party:',d);showToast((pT==='customer'?'Customer':'Supplier')+' added successfully','success')}invalidateCache('party:');closeModal('addParty');loadPa()}catch(e){showToast('Failed to save: '+e.message,'error')}}
window.editPa=function(k){var p=aP.find(function(x){return x._key===k});if(!p)return;pT=p.type;document.getElementById('paTitle').textContent='Edit';document.getElementById('paEK').value=p._key;document.getElementById('paN').value=p.name||'';document.getElementById('paPh').value=p.phone||'';document.getElementById('paAd').value=p.address||'';document.getElementById('paDv').value=p.division||'';document.getElementById('paDs').value=p.district||'';document.getElementById('paTh').value=p.thana||'';document.getElementById('paPo').value=p.postOffice||'';document.getElementById('paPc').value=p.postcode||'';document.getElementById('paOB').value=p.openingBalance||0;document.getElementById('paCL').value=p.creditLimit||'';document.getElementById('paSP').value=p.salespersonId||'';document.getElementById('paSPDiv').classList.toggle('hidden',pT!=='customer');openModal('addParty')}
async function loadPa(){var d=await Promise.all([loadList('party:'),loadList('salesperson:')]);aP=d[0];paSPList=d[1]||[];document.getElementById('paSP').innerHTML='<option value="">None</option>'+paSPList.map(function(s){return'<option value="'+s._key+'">'+s.name+'</option>'}).join('');renderPa()}
function renderPa(li){var l=li||aP.filter(function(p){return p.type===pT});document.getElementById('paBody').innerHTML=!l.length?'<tr><td colspan="8" class="empty">None</td></tr>':l.map(function(p){var ob=p.openingBalance||0;return'<tr><td class="bold">'+p.name+'</td><td class="text-muted">'+(p.phone||'')+'</td><td class="text-muted">'+(p.thana||p.district||'')+'</td><td>'+(p.salespersonName?'<span class="badge badge-info">'+p.salespersonName+'</span>':'-')+'</td><td class="r text-muted">'+(ob?fmt(Math.abs(ob))+(ob>0?' Dr':' Cr'):'--')+'</td><td class="r">'+(p.creditLimit?fmt(p.creditLimit):'--')+'</td><td class="r bold '+((p.balance||0)>0?'text-danger':'text-success')+'">'+fmt(Math.abs(p.balance||0))+((p.balance||0)>0?' Dr':p.balance<0?' Cr':'')+'</td><td class="r"><button class="btn btn-outline btn-sm" onclick="editPa(\\x27'+p._key+'\\x27)">Edit</button></td></tr>'}).join('')}
window.filterPa=function(q){var t=normalize(q);renderPa(aP.filter(function(p){return p.type===pT&&(normalize(p.name).includes(t)||normalize(p.phone||'').includes(t)||normalize(p.thana||'').includes(t)||normalize(p.district||'').includes(t))}))}
window.openImportParty=function(){document.getElementById('paImportFile').value='';document.getElementById('paImportPreview').style.display='none';document.getElementById('paImportStatus').innerHTML='';document.getElementById('paImportBtn').disabled=true;_paImportRows=[];openModal('importPartyModal')}
window.downloadPartyTemplate=function(){var ws=XLSX.utils.aoa_to_sheet([['Name','Phone','Address','Division','District','Thana','Post Office','Postcode','Salesperson','Opening Balance','Credit Limit'],['ABC Trading','01700000000','123 Main St','Dhaka','Dhaka','Dhanmondi','Dhanmondi','1209','','5000','10000']]);var wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Template');XLSX.writeFile(wb,'party_import_template.xlsx')}
document.getElementById('paImportFile').addEventListener('change',function(e){var file=e.target.files[0];if(!file)return;var reader=new FileReader();reader.onload=function(ev){try{var wb=XLSX.read(ev.target.result,{type:'array'});var ws=wb.Sheets[wb.SheetNames[0]];var rows=XLSX.utils.sheet_to_json(ws,{defval:''});if(!rows.length){document.getElementById('paImportStatus').innerHTML='<span style="color:var(--danger)">No data found</span>';return}
_paImportRows=rows.map(function(r){var name=String(r['Name']||r['name']||'').trim();var phone=String(r['Phone']||r['phone']||r['Mobile']||'').trim();var addr=String(r['Address']||r['address']||'').trim();var dv=String(r['Division']||r['division']||'').trim();var ds=String(r['District']||r['district']||'').trim();var th=String(r['Thana']||r['thana']||r['Upazila']||'').trim();var po=String(r['Post Office']||r['post office']||r['PostOffice']||'').trim();var pc=String(r['Postcode']||r['postcode']||r['Post Code']||'').trim();var sp=String(r['Salesperson']||r['SP']||'').trim();var ob=parseFloat(r['Opening Balance']||r['OB']||0)||0;var cl=parseFloat(r['Credit Limit']||r['CL']||0)||0;
if(th&&!dv){var m=_BD_GEO.find(function(g){return g[2].toLowerCase()===th.toLowerCase()});if(m){dv=m[0];ds=m[1];if(!po)po=m[3];if(!pc)pc=m[4]}}
if(pc&&!th){var m2=_BD_GEO.find(function(g){return g[4]===pc});if(m2){dv=m2[0];ds=m2[1];th=m2[2];if(!po)po=m2[3]}}
return{name:name,phone:phone,address:addr,division:dv,district:ds,thana:th,postOffice:po,postcode:pc,salesperson:sp,openingBalance:ob,creditLimit:cl}}).filter(function(r){return r.name});
var prev=document.getElementById('paImportPreview');prev.style.display='block';prev.innerHTML='<div style="font-weight:600;margin-bottom:6px">Preview ('+_paImportRows.length+' rows) as '+(pT==='customer'?'Customers':'Suppliers')+':</div><table class="tbl" style="font-size:11px"><thead><tr><th>Name</th><th>Phone</th><th>Thana</th><th>Postcode</th><th>SP</th><th class="r">OB</th><th class="r">CL</th></tr></thead><tbody>'+_paImportRows.slice(0,20).map(function(r){return'<tr><td>'+r.name+'</td><td>'+r.phone+'</td><td>'+r.thana+'</td><td>'+r.postcode+'</td><td>'+r.salesperson+'</td><td class="r">'+r.openingBalance+'</td><td class="r">'+r.creditLimit+'</td></tr>'}).join('')+(_paImportRows.length>20?'<tr><td colspan="7" class="text-muted">...and '+(_paImportRows.length-20)+' more</td></tr>':'')+'</tbody></table>';
document.getElementById('paImportBtn').disabled=false;document.getElementById('paImportStatus').innerHTML='<span style="color:var(--accent)">'+_paImportRows.length+' rows ready</span>'}catch(err){document.getElementById('paImportStatus').innerHTML='<span style="color:var(--danger)">Error: '+err.message+'</span>'}};reader.readAsArrayBuffer(file)})
window.doImportParty=async function(){if(!_paImportRows.length)return;document.getElementById('paImportBtn').disabled=true;document.getElementById('paImportStatus').innerHTML='<span style="color:var(--primary)">Importing...</span>';var ok=0,fail=0;
for(var i=0;i<_paImportRows.length;i++){try{var r=_paImportRows[i];var spMatch=paSPList.find(function(s){return s.name.toLowerCase()===r.salesperson.toLowerCase()});var d={type:pT,name:r.name,phone:r.phone,address:r.address,division:r.division,district:r.district,thana:r.thana,postOffice:r.postOffice,postcode:r.postcode,openingBalance:r.openingBalance,balance:r.openingBalance,creditLimit:r.creditLimit,salespersonId:spMatch?spMatch._key:'',salespersonName:spMatch?spMatch.name:''};await saveItem('party:',d);ok++}catch(e){fail++}}
invalidateCache('party:');loadPa();closeModal('importPartyModal');showToast('Imported '+ok+' '+(pT==='customer'?'customers':'suppliers')+(fail?' ('+fail+' failed)':''),'success');_paImportRows=[]}
loadPa();
<\/script>`}function Be(){return`
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
<div class="form-row"><div><label>Paid</label><input type="number" id="purPaid" value="0"></div><div><label>Payment Method</label><select id="purMethod" onchange="togglePurBank()"><option value="">Select Method...</option><option value="cash">Cash</option><option value="bank_transfer">Bank Transfer</option><option value="cheque">Cheque</option><option value="credit_card">Credit Card</option><option value="mobile_payment">Mobile Payment</option><option value="credit">On Credit</option></select></div></div>
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
window.openPurchase=function(){document.getElementById('purEK').value='';document.getElementById('purNo').value=txnNo('PUR');document.getElementById('purDate').value=todayISO();document.getElementById('purSupplier').value='';document.getElementById('purDisc').value=0;document.getElementById('purExtra').value=0;document.getElementById('purVat').value=0;document.getElementById('purPaid').value=0;document.getElementById('purMethod').value='';document.getElementById('purTitle').textContent='New Purchase';togglePurBank();window._purItems=[{pk:'',pn:'',qty:1,rate:0,amt:0}];renderPurItems();openModal('purModal')}
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
if(paid>0&&!method){showToast('Please select a payment method','warning');return;}
var data={purchaseNo:document.getElementById('purNo').value,date:document.getElementById('purDate').value,supplierId:sid,supplierName:sup?sup.name:'',items:items.map(function(x){return{productId:x.pk,productName:x.pn,qty:x.qty,rate:x.rate,amount:x.amt}}),discount:disc,extra:extra,vat:vv,vatType:vt,total:total,paid:paid,method:method,bankName:bankName,chequeNo:chequeNo,createdBy:window.SESSION?.name||window.SESSION?.username||'Admin'};
if(ek){
  var oldPur=purs.find(function(x){return x._key===ek});
  // Reverse old stock changes (remove old items, add new)
  if(oldPur&&oldPur.items){for(var ri=0;ri<oldPur.items.length;ri++){var rp=prods.find(function(x){return x._key===oldPur.items[ri].productId});if(rp){rp.stock=(rp.stock||0)-oldPur.items[ri].qty;await saveByKey(rp._key,cleanForSave(rp))}}}
  // Add new stock
  for(var ai=0;ai<items.length;ai++){var ap=prods.find(function(x){return x._key===items[ai].pk});if(ap){ap.stock=(ap.stock||0)+items[ai].qty;ap.purchasePrice=items[ai].rate;await saveByKey(ap._key,cleanForSave(ap))}}
  // Reverse old bank balance
  if(oldPur&&oldPur.paid>0&&oldPur.method!=='cash'&&oldPur.method!=='credit'&&oldPur.bankName){var oldBank=purBanks.find(function(b){return b.name===oldPur.bankName});if(oldBank){oldBank.balance=(oldBank.balance||0)+(oldPur.paid||0);await saveByKey(oldBank._key,cleanForSave(oldBank))}}
  // Apply new bank balance
  if(paid>0&&method!=='cash'&&method!=='credit'&&bankName){var bk=purBanks.find(function(b){return b.name===bankName});if(bk){bk.balance=(bk.balance||0)-paid;await saveByKey(bk._key,cleanForSave(bk))}}
  // Delete old auto-created payment voucher if exists
  if(oldPur&&oldPur._autoPayKey){try{await api('/api/delete',{key:oldPur._autoPayKey,skipApproval:true})}catch(e){}}
  // Create new auto payment voucher if paid > 0
  if(paid>0&&method!=='credit'){var payVch={type:'payment',no:txnNo('PAY'),date:data.date,party:sup?sup.name:'',amount:paid,method:method,bankName:bankName,chequeNo:chequeNo,note:'Auto: Purchase '+data.purchaseNo,status:'done',_autoInvoice:data.purchaseNo};var pvr=await api('/api/save',{prefix:'payment:',data:payVch,skipApproval:true});data._autoPayKey=pvr.key||''}
  await saveByKey(ek,data,'edit','Edited purchase: '+data.purchaseNo)
}else{
  var saveRes=await saveItem('purchase:',data,null,'create','Created purchase: '+data.purchaseNo);
  for(var ii=0;ii<items.length;ii++){var pr=prods.find(function(x){return x._key===items[ii].pk});if(pr){pr.stock=(pr.stock||0)+items[ii].qty;pr.purchasePrice=items[ii].rate;await saveByKey(pr._key,cleanForSave(pr))}}
  if(paid>0&&method!=='cash'&&method!=='credit'&&bankName){var bk2=purBanks.find(function(b){return b.name===bankName});if(bk2){bk2.balance=(bk2.balance||0)-paid;await saveByKey(bk2._key,cleanForSave(bk2))}}
  // Auto-create payment voucher if paid > 0
  if(paid>0&&method!=='credit'){var payVch2={type:'payment',no:txnNo('PAY'),date:data.date,party:sup?sup.name:'',amount:paid,method:method,bankName:bankName,chequeNo:chequeNo,note:'Auto: Purchase '+data.purchaseNo,status:'done',_autoInvoice:data.purchaseNo};var pvr2=await api('/api/save',{prefix:'payment:',data:payVch2,skipApproval:true});if(saveRes&&saveRes.key){data._autoPayKey=pvr2.key||'';await api('/api/save',{key:saveRes.key,data:data,skipApproval:true})}}
}
invalidateCache('purchase:');invalidateCache('product:');invalidateCache('bank:');invalidateCache('payment:');
showToast(ek?'Purchase updated successfully':'Purchase saved successfully','success');
closeModal('purModal');loadPur()}
window.editPur=function(k){var p=purs.find(function(x){return x._key===k});if(!p)return;document.getElementById('purEK').value=k;document.getElementById('purNo').value=p.purchaseNo;document.getElementById('purDate').value=p.date;document.getElementById('purSupplier').value=p.supplierId;document.getElementById('purDisc').value=p.discount||0;document.getElementById('purExtra').value=p.extra||0;document.getElementById('purVat').value=p.vat||0;document.getElementById('purVatType').value=p.vatType||'amount';document.getElementById('purPaid').value=p.paid||0;document.getElementById('purMethod').value=p.method||'cash';togglePurBank();if(p.bankName)document.getElementById('purBank').value=p.bankName;if(p.chequeNo&&document.getElementById('purCheque'))document.getElementById('purCheque').value=p.chequeNo;window._purItems=(p.items||[]).map(function(x){return{pk:x.productId,pn:x.productName,qty:x.qty,rate:x.rate,amt:x.amount}});if(!window._purItems.length)window._purItems=[{pk:'',pn:'',qty:1,rate:0,amt:0}];document.getElementById('purTitle').textContent='Edit Purchase';renderPurItems();openModal('purModal')}
window.delPur=async function(k){if(!confirm('Delete purchase? Stock and bank balance will be reversed.'))return;
var p=purs.find(function(x){return x._key===k});
if(p){
  // Reverse stock
  if(p.items){for(var ri=0;ri<p.items.length;ri++){var rp=prods.find(function(x){return x._key===p.items[ri].productId});if(rp){rp.stock=Math.max(0,(rp.stock||0)-p.items[ri].qty);await saveByKey(rp._key,cleanForSave(rp))}}}
  // Reverse bank balance
  if(p.paid>0&&p.method!=='cash'&&p.method!=='credit'&&p.bankName){var bk=purBanks.find(function(b){return b.name===p.bankName});if(bk){bk.balance=(bk.balance||0)+(p.paid||0);await saveByKey(bk._key,cleanForSave(bk))}}
  // Delete auto-created payment voucher
  if(p._autoPayKey){try{await api('/api/delete',{key:p._autoPayKey,skipApproval:true})}catch(e){}}
}
await deleteItem(k,false,'Deleted purchase: '+(p?p.purchaseNo:''));invalidateCache('purchase:');invalidateCache('product:');invalidateCache('bank:');invalidateCache('payment:');showToast('Purchase deleted successfully','success');loadPur()}
window.filterPur=function(q){var t=normalize(q);renderPur(purs.filter(function(p){return normalize(p.purchaseNo).includes(t)||normalize(p.supplierName).includes(t)||normalize(p.date).includes(t)}))}
loadPur();
<\/script>`}function Ce(){return`
<div class="page-header"><div><div class="page-title">Sales</div><div class="page-sub">Manage invoices</div></div><button class="btn btn-primary" onclick="openSale()"><span class="material-symbols-outlined" style="font-size:16px">add</span> New Sale</button></div>
<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:16px">search</span></span><input placeholder="Search sales..." oninput="filterSal(this.value)"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="salTable"><thead><tr><th>Date</th><th>Invoice#</th><th>Customer</th><th>SP</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Due</th><th class="r">Fare</th><th class="r">Act</th></tr></thead><tbody id="salBody"></tbody></table></div></div>
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
<div class="form-row"><div><label>Payment Method</label><select id="salMethod" onchange="toggleSalBank()"><option value="">Select Method...</option><option value="cash">Cash</option><option value="bank_transfer">Bank Transfer</option><option value="cheque">Cheque</option><option value="credit_card">Credit Card</option><option value="mobile_payment">Mobile Payment</option><option value="credit">On Credit</option></select></div><div id="salBankDiv"><label>Bank</label><select id="salBank"><option value="">Select Bank...</option></select></div></div>
<div class="form-group hidden" id="salChequeDiv"><label>Cheque No</label><input id="salCheque" placeholder="Cheque#"></div>
<div class="form-row"><div class="form-group"><label>Note</label><input id="salNote" placeholder="Sale note / remarks"></div><div class="form-group"><label>Truck Fare (Received from Customer)</label><input type="number" id="salTruckFare" value="0" placeholder="0" step="any" oninput="checkFareExceed()"><div id="fareExceedHint" style="font-size:10px;color:var(--text-muted);margin-top:2px">Counts as Customer Receive + Transportation Expense</div></div></div>
<div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('salModal')">Cancel</button><button class="btn btn-primary" onclick="saveSal()">Save Sale</button></div>
</div></div>
<script>
var sals=[],salProds=[],customers=[],spList=[],salBanks=[],_thanaFares=[];
window.toggleSalBank=function(){var m=document.getElementById('salMethod').value;var needsBank=m==='bank_transfer'||m==='cheque'||m==='credit_card'||m==='mobile_payment';document.getElementById('salBankDiv').classList.toggle('hidden',!needsBank);document.getElementById('salChequeDiv').classList.toggle('hidden',m!=='cheque');
// Auto-fill paid amount when cash is selected
if(m==='cash'){var totalStr=document.getElementById('salTotal').value;var totalNum=parseFloat(String(totalStr).replace(/,/g,''))||0;document.getElementById('salPaid').value=totalNum}};
window.onSalCustChange=function(){var cid=document.getElementById('salCust').value;var cust=customers.find(function(x){return x._key===cid});if(cust&&cust.salespersonId){document.getElementById('salSP').value=cust.salespersonId}calcSal();checkFareExceed()};
async function loadSal(){var d=await Promise.all([loadList('sale:'),loadList('product:'),loadList('party:'),loadList('salesperson:'),loadList('bank:'),loadList('thanafare:')]);sals=d[0];salProds=d[1];customers=d[2].filter(function(p){return p.type==='customer'});spList=d[3];salBanks=d[4]||[];_thanaFares=d[5]||[];
document.getElementById('salCust').innerHTML='<option value="">Select...</option>'+customers.map(function(c){return'<option value="'+c._key+'">'+c.name+'</option>'}).join('');
document.getElementById('salSP').innerHTML='<option value="">None</option>'+spList.map(function(s){return'<option value="'+s._key+'">'+s.name+'</option>'}).join('');
document.getElementById('salBank').innerHTML='<option value="">Select Bank...</option>'+salBanks.map(function(b){return'<option value="'+b.name+'">'+b.name+'</option>'}).join('');
renderSal(sals)}
window.checkFareExceed=function(){var cid=document.getElementById('salCust').value;var cust=customers.find(function(x){return x._key===cid});var fare=+document.getElementById('salTruckFare').value||0;var hint=document.getElementById('fareExceedHint');if(!cust||!fare){hint.innerHTML='Counts as Customer Receive + Transportation Expense';hint.style.color='var(--text-muted)';return}var th=(cust.thana||'').trim();var tf=_thanaFares.find(function(f){return f.thana===th});if(tf&&tf.maxFare>0){if(fare>tf.maxFare){hint.innerHTML='<span style="color:var(--danger);font-weight:600">⚠ EXCEEDED! Max for '+th+': '+fmt(tf.maxFare)+' | Over by: '+fmt(fare-tf.maxFare)+'</span>';hint.style.color='var(--danger)'}else{hint.innerHTML='<span style="color:var(--accent)">✓ Within limit for '+th+' (Max: '+fmt(tf.maxFare)+')</span>';hint.style.color='var(--accent)'}}else{hint.innerHTML='Counts as Customer Receive + Transportation Expense'+(th?' | No max fare set for '+th:'');hint.style.color='var(--text-muted)'}}
function renderSal(l){l.sort(function(a,b){return(b.date||'').localeCompare(a.date)});document.getElementById('salBody').innerHTML=!l.length?'<tr><td colspan="9" class="empty">No sales</td></tr>':l.map(function(s){var due=(s.total||0)-(s.paid||0);return'<tr><td>'+s.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td>'+s.customerName+'</td><td class="text-muted">'+(s.salespersonName||'-')+'</td><td class="r bold">'+fmt(s.total)+'</td><td class="r text-success">'+fmt(s.paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td><td class="r text-muted">'+(s.truckFare?(s.fareExceeded?'<span style="color:var(--danger)" title="Exceeded max '+fmt(s.fareMaxForThana||0)+' for '+(s.customerThana||'')+'">'+fmt(s.truckFare)+' ⚠</span>':fmt(s.truckFare)):'')+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editSal(\\x27'+s._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delSal(\\x27'+s._key+'\\x27)">Del</button></td></tr>'}).join('')}
window._salItems=[];
window.openSale=function(){document.getElementById('salEK').value='';document.getElementById('salNo').value=txnNo('INV');document.getElementById('salDate').value=todayISO();document.getElementById('salCust').value='';document.getElementById('salSP').value='';document.getElementById('salDisc').value=0;document.getElementById('salExtra').value=0;document.getElementById('salVat').value=0;document.getElementById('salAit').value=0;document.getElementById('salPaid').value=0;document.getElementById('salNote').value='';document.getElementById('salTruckFare').value=0;document.getElementById('salMethod').value='';document.getElementById('creditWarn').classList.add('hidden');toggleSalBank();window._salItems=[{pk:'',pn:'',qty:1,rate:0,amt:0}];renderSalItems();openModal('salModal')}
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
var method=document.getElementById('salMethod').value;var paid=+document.getElementById('salPaid').value||0;
if(paid>0&&!method){showToast('Please select a payment method','warning');return;}
// Stock validation - block if any product has 0 stock (new sale only)
if(!ek){var stockErrors=[];items.forEach(function(it){var pr=salProds.find(function(x){return x._key===it.pk});if(pr&&(pr.stock||0)<=0){stockErrors.push(pr.name+' (Stock: 0)')}else if(pr&&it.qty>(pr.stock||0)){stockErrors.push(pr.name+' (Available: '+(pr.stock||0)+', Requested: '+it.qty+')')}});if(stockErrors.length){showToast('Cannot create sale - Insufficient stock:\\n'+stockErrors.join(', '),'error');return;}}var sub=items.reduce(function(s,x){return s+x.amt},0);var dt=document.getElementById('salDiscType').value;var dv=+document.getElementById('salDisc').value||0;var discAmt=dt==='percent'?sub*dv/100:dv;var extra=+document.getElementById('salExtra').value||0;var base=sub-discAmt+extra;var vt=document.getElementById('salVatType').value;var vv=+document.getElementById('salVat').value||0;var vatAmt=vt==='percent'?base*vv/100:vv;var at=document.getElementById('salAitType').value;var av=+document.getElementById('salAit').value||0;var aitAmt=at==='percent'?base*av/100:av;var total=base+vatAmt+aitAmt;
var cust=customers.find(function(x){return x._key===cid});var spId=document.getElementById('salSP').value;var sp=spList.find(function(x){return x._key===spId});
var bankName=document.getElementById('salBank').value||'';var chequeNo=document.getElementById('salCheque')?document.getElementById('salCheque').value:'';
var truckFare=+document.getElementById('salTruckFare').value||0;var custThana=(cust&&cust.thana)||'';var fareExceeded=false;var fareMaxForThana=0;if(truckFare>0&&custThana){var tfMatch=_thanaFares.find(function(f){return f.thana===custThana});if(tfMatch&&tfMatch.maxFare>0){fareMaxForThana=tfMatch.maxFare;fareExceeded=truckFare>tfMatch.maxFare}}
var data={invoiceNo:document.getElementById('salNo').value,date:document.getElementById('salDate').value,customerId:cid,customerName:cust?cust.name:'',salespersonId:spId,salespersonName:sp?sp.name:'',createdBy:window.SESSION?.name||window.SESSION?.username||'Admin',items:items.map(function(x){return{productId:x.pk,productName:x.pn,qty:x.qty,rate:x.rate,amount:x.amt}}),discount:dv,discountType:dt,extra:extra,vat:vv,vatType:vt,ait:av,aitType:at,total:total,paid:paid,method:method,bankName:bankName,chequeNo:chequeNo,note:document.getElementById('salNote').value,truckFare:truckFare,customerThana:custThana,fareExceeded:fareExceeded,fareMaxForThana:fareMaxForThana};
if(ek){
  var oldSal=sals.find(function(x){return x._key===ek});
  // Reverse old stock (add back old items)
  if(oldSal&&oldSal.items){for(var ri=0;ri<oldSal.items.length;ri++){var rp=salProds.find(function(x){return x._key===oldSal.items[ri].productId});if(rp){rp.stock=(rp.stock||0)+oldSal.items[ri].qty;await saveByKey(rp._key,cleanForSave(rp))}}}
  // Deduct new stock
  for(var ni=0;ni<items.length;ni++){var np=salProds.find(function(x){return x._key===items[ni].pk});if(np){np.stock=Math.max(0,(np.stock||0)-items[ni].qty);await saveByKey(np._key,cleanForSave(np))}}
  // Reverse old bank balance
  if(oldSal&&oldSal.paid>0&&oldSal.method!=='cash'&&oldSal.method!=='credit'&&oldSal.bankName){var oldBk=salBanks.find(function(b){return b.name===oldSal.bankName});if(oldBk){oldBk.balance=(oldBk.balance||0)-(oldSal.paid||0);await saveByKey(oldBk._key,cleanForSave(oldBk))}}
  // Apply new bank balance
  if(paid>0&&method!=='cash'&&method!=='credit'&&bankName){var nbk=salBanks.find(function(b){return b.name===bankName});if(nbk){nbk.balance=(nbk.balance||0)+paid;await saveByKey(nbk._key,cleanForSave(nbk))}}
  // Delete old auto-created receipt voucher if exists
  if(oldSal&&oldSal._autoRcvKey){try{await api('/api/delete',{key:oldSal._autoRcvKey,skipApproval:true})}catch(e){}}
  // Create new auto receipt voucher if paid > 0
  if(paid>0&&method!=='credit'){var rcvVch={type:'receipt',no:txnNo('RCV'),date:data.date,party:cust?cust.name:'',amount:paid,method:method,bankName:bankName,chequeNo:chequeNo,note:'Auto: Sale '+data.invoiceNo,status:'done',_autoInvoice:data.invoiceNo};var rvr=await api('/api/save',{prefix:'payment:',data:rcvVch,skipApproval:true});data._autoRcvKey=rvr.key||''}
  // Reverse old truck fare vouchers
  if(oldSal&&oldSal._autoTfRcvKey){try{await api('/api/delete',{key:oldSal._autoTfRcvKey,skipApproval:true})}catch(e){}}
  if(oldSal&&oldSal._autoTfExpKey){try{await api('/api/delete',{key:oldSal._autoTfExpKey,skipApproval:true})}catch(e){}}
  // Create new truck fare vouchers if truckFare > 0
  if(data.truckFare>0){
    var tfRcv2={type:'receipt',no:txnNo('RCV'),date:data.date,party:cust?cust.name:'',amount:data.truckFare,method:'cash',bankName:'',chequeNo:'',note:'Truck Fare: '+data.invoiceNo,status:'done',_autoInvoice:data.invoiceNo,_isTruckFare:true};
    var tfRcvR2=await api('/api/save',{prefix:'payment:',data:tfRcv2,skipApproval:true});
    var tfExp2={expenseNo:txnNo('EXP'),date:data.date,headName:'Transportation',subHeadName:'Cement Truck Fare',amount:data.truckFare,method:'cash',bankName:'',chequeNo:'',description:'Truck Fare: '+data.invoiceNo+' ('+data.customerName+')',_autoInvoice:data.invoiceNo,_isTruckFare:true};
    var tfExpR2=await api('/api/save',{prefix:'expense:',data:tfExp2,skipApproval:true});
    data._autoTfRcvKey=tfRcvR2.key||'';data._autoTfExpKey=tfExpR2.key||''
  }
  await saveByKey(ek,data,'edit','Edited sale: '+data.invoiceNo)
}else{
  var saveRes=await saveItem('sale:',data,null,'create','Created sale: '+data.invoiceNo);
  for(var ii=0;ii<items.length;ii++){var pr=salProds.find(function(x){return x._key===items[ii].pk});if(pr){pr.stock=Math.max(0,(pr.stock||0)-items[ii].qty);await saveByKey(pr._key,cleanForSave(pr))}}
  if(paid>0&&method!=='cash'&&method!=='credit'&&bankName){var bk2=salBanks.find(function(b){return b.name===bankName});if(bk2){bk2.balance=(bk2.balance||0)+paid;await saveByKey(bk2._key,cleanForSave(bk2))}}
  // Auto-create receipt voucher if paid > 0
  if(paid>0&&method!=='credit'){var rcvVch2={type:'receipt',no:txnNo('RCV'),date:data.date,party:cust?cust.name:'',amount:paid,method:method,bankName:bankName,chequeNo:chequeNo,note:'Auto: Sale '+data.invoiceNo,status:'done',_autoInvoice:data.invoiceNo};var rvr2=await api('/api/save',{prefix:'payment:',data:rcvVch2,skipApproval:true});if(saveRes&&saveRes.key){data._autoRcvKey=rvr2.key||'';await api('/api/save',{key:saveRes.key,data:data,skipApproval:true})}}
  // Truck Fare: create receipt (customer receive) + expense (Transportation > Cement Truck Fare)
  if(data.truckFare>0&&saveRes&&saveRes.key){
    var tfRcv={type:'receipt',no:txnNo('RCV'),date:data.date,party:cust?cust.name:'',amount:data.truckFare,method:'cash',bankName:'',chequeNo:'',note:'Truck Fare: '+data.invoiceNo,status:'done',_autoInvoice:data.invoiceNo,_isTruckFare:true};
    var tfRcvRes=await api('/api/save',{prefix:'payment:',data:tfRcv,skipApproval:true});
    var tfExp={expenseNo:txnNo('EXP'),date:data.date,headName:'Transportation',subHeadName:'Cement Truck Fare',amount:data.truckFare,method:'cash',bankName:'',chequeNo:'',description:'Truck Fare: '+data.invoiceNo+' ('+data.customerName+')',_autoInvoice:data.invoiceNo,_isTruckFare:true};
    var tfExpRes=await api('/api/save',{prefix:'expense:',data:tfExp,skipApproval:true});
    data._autoTfRcvKey=tfRcvRes.key||'';data._autoTfExpKey=tfExpRes.key||'';
    await api('/api/save',{key:saveRes.key,data:data,skipApproval:true})
  }
}
invalidateCache('sale:');invalidateCache('product:');invalidateCache('bank:');invalidateCache('payment:');invalidateCache('expense:');
showToast(ek?'Sale updated successfully':'Sale created: '+data.invoiceNo,'success');
closeModal('salModal');loadSal()}
window.editSal=function(k){var s=sals.find(function(x){return x._key===k});if(!s)return;document.getElementById('salEK').value=k;document.getElementById('salNo').value=s.invoiceNo;document.getElementById('salDate').value=s.date;document.getElementById('salCust').value=s.customerId;document.getElementById('salSP').value=s.salespersonId||'';document.getElementById('salDisc').value=s.discount||0;document.getElementById('salDiscType').value=s.discountType||'amount';document.getElementById('salExtra').value=s.extra||0;document.getElementById('salVat').value=s.vat||0;document.getElementById('salVatType').value=s.vatType||'amount';document.getElementById('salAit').value=s.ait||0;document.getElementById('salAitType').value=s.aitType||'amount';document.getElementById('salPaid').value=s.paid||0;document.getElementById('salMethod').value=s.method||'cash';document.getElementById('salNote').value=s.note||'';document.getElementById('salTruckFare').value=s.truckFare||0;document.getElementById('salTitle').textContent='Edit Sale';toggleSalBank();window._salItems=(s.items||[]).map(function(x){return{pk:x.productId,pn:x.productName,qty:x.qty,rate:x.rate,amt:x.amount}});if(!window._salItems.length)window._salItems=[{pk:'',pn:'',qty:1,rate:0,amt:0}];renderSalItems();openModal('salModal')}
window.delSal=async function(k){var s=sals.find(function(x){return x._key===k});if(!confirm('Delete sale? Stock, bank balance and auto-voucher will be reversed.'))return;
if(s){
  // Reverse stock (add back)
  if(s.items){for(var ri=0;ri<s.items.length;ri++){var rp=salProds.find(function(x){return x._key===s.items[ri].productId});if(rp){rp.stock=(rp.stock||0)+s.items[ri].qty;await saveByKey(rp._key,cleanForSave(rp))}}}
  // Reverse bank balance
  if(s.paid>0&&s.method!=='cash'&&s.method!=='credit'&&s.bankName){var bk=salBanks.find(function(b){return b.name===s.bankName});if(bk){bk.balance=(bk.balance||0)-(s.paid||0);await saveByKey(bk._key,cleanForSave(bk))}}
  // Delete auto-created receipt voucher
  if(s._autoRcvKey){try{await api('/api/delete',{key:s._autoRcvKey,skipApproval:true})}catch(e){}}
  if(s._autoTfRcvKey){try{await api('/api/delete',{key:s._autoTfRcvKey,skipApproval:true})}catch(e){}}
  if(s._autoTfExpKey){try{await api('/api/delete',{key:s._autoTfExpKey,skipApproval:true})}catch(e){}}
}
await deleteItem(k,false,'Deleted sale: '+(s?s.invoiceNo:''));invalidateCache('sale:');invalidateCache('product:');invalidateCache('bank:');invalidateCache('payment:');invalidateCache('expense:');showToast('Sale deleted successfully','success');loadSal()}
window.filterSal=function(q){var t=normalize(q);renderSal(sals.filter(function(s){return normalize(s.invoiceNo).includes(t)||normalize(s.customerName).includes(t)||normalize(s.date).includes(t)}))}
loadSal();
<\/script>`}function Pe(){return`
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
if(payTab==='transfer'){var trs=pays.filter(function(p){return p.type==='transfer'});c.innerHTML='<div style="margin:12px 0"><button class="btn btn-primary" onclick="openTransfer()"><span class="material-symbols-outlined" style="font-size:16px">swap_horiz</span> New Transfer</button></div><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Date</th><th>No</th><th>From</th><th>To</th><th class="r">Amount</th><th class="r">Act</th></tr></thead><tbody>'+(trs.length?trs.sort(function(a,b){return(b.date||'').localeCompare(a.date)}).map(function(t){return'<tr><td>'+t.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27transfer\\x27,\\x27'+t._key+'\\x27)">'+t.no+'</span></td><td>'+t.fromAcc+'</td><td>'+t.toAcc+'</td><td class="r bold">'+fmt(t.amount)+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editTransfer(\\x27'+t._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delTransfer(\\x27'+t._key+'\\x27)">Del</button></td></tr>'}).join(''):'<tr><td colspan="6" class="empty">No transfers</td></tr>')+'</tbody></table></div></div>';return}
var fl=pays.filter(function(p){return p.type===payTab&&p.status==='done'}).sort(function(a,b){return(b.date||'').localeCompare(a.date)});
// Mark auto-created vouchers visually
c.innerHTML='<div style="margin:12px 0"><button class="btn btn-primary" onclick="openPayModal(\\x27'+payTab+'\\x27)"><span class="material-symbols-outlined" style="font-size:16px">add</span> New '+(payTab==='receipt'?'Receipt':'Payment')+'</button></div><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="payTbl"><thead><tr><th>Date</th><th>No</th><th>Party</th><th>Method</th><th class="r">Amount</th><th>Note</th><th class="r">Act</th></tr></thead><tbody>'+(fl.length?fl.map(function(p){return'<tr><td>'+p.date+'</td><td><span class="doc-link" onclick="previewDoc(\\x27'+p.type+'\\x27,\\x27'+p._key+'\\x27)">'+p.no+'</span></td><td>'+p.party+'</td><td>'+methodBadge(p.method)+'</td><td class="r bold">'+fmt(p.amount)+'</td><td class="text-muted">'+(p.note||'')+'</td><td class="r"><button class="btn btn-outline btn-xs" onclick="editPay(\\x27'+p._key+'\\x27)">Edit</button> <button class="btn btn-danger btn-xs" onclick="delPay(\\x27'+p._key+'\\x27)">Del</button></td></tr>'}).join(''):'<tr><td colspan="7" class="empty">None</td></tr>')+'</tbody></table></div></div>'}
window.openPayModal=function(type){document.getElementById('payEK').value='';document.getElementById('payType').value=type;document.getElementById('payTitle').textContent='New '+(type==='receipt'?'Receipt':'Payment');document.getElementById('payNo').value=txnNo(type==='receipt'?'RCV':'PAY');document.getElementById('payDt').value=todayISO();document.getElementById('payAmt').value='';document.getElementById('payNote').value='';document.getElementById('payMeth').value='cash';document.getElementById('payCheque').value='';document.getElementById('chequeDiv').classList.add('hidden');
var pts=type==='receipt'?payParties.filter(function(p){return p.type==='customer'}):payParties.filter(function(p){return p.type==='supplier'});document.getElementById('payParty').innerHTML='<option value="">Select...</option>'+pts.map(function(p){return'<option value="'+p.name+'">'+p.name+'</option>'}).join('');
document.getElementById('payBank').innerHTML='<option value="">Select...</option>'+banks.map(function(b){return'<option value="'+b.name+'">'+b.name+'</option>'}).join('');
document.getElementById('billSelection').classList.add('hidden');openModal('payModal');
document.getElementById('payParty').onchange=function(){showBills(type,this.value)}}
window.editPay=function(k){var p=pays.find(function(x){return x._key===k});if(!p)return;var type=p.type;document.getElementById('payEK').value=k;document.getElementById('payType').value=type;document.getElementById('payTitle').textContent='Edit '+(type==='receipt'?'Receipt':'Payment');document.getElementById('payNo').value=p.no||'';document.getElementById('payDt').value=p.date||todayISO();document.getElementById('payAmt').value=p.amount||'';document.getElementById('payNote').value=p.note||'';document.getElementById('payMeth').value=p.method||'cash';document.getElementById('payCheque').value=p.chequeNo||'';document.getElementById('chequeDiv').classList.toggle('hidden',p.method!=='cheque');var needsBank=p.method==='bank_transfer'||p.method==='cheque'||p.method==='credit_card'||p.method==='mobile_payment';document.getElementById('bankSelDiv').classList.toggle('hidden',!needsBank);
var pts=type==='receipt'?payParties.filter(function(x){return x.type==='customer'}):payParties.filter(function(x){return x.type==='supplier'});document.getElementById('payParty').innerHTML='<option value="">Select...</option>'+pts.map(function(x){return'<option value="'+x.name+'">'+x.name+'</option>'}).join('');document.getElementById('payParty').value=p.party||'';
document.getElementById('payBank').innerHTML='<option value="">Select...</option>'+banks.map(function(b){return'<option value="'+b.name+'">'+b.name+'</option>'}).join('');document.getElementById('payBank').value=p.bankName||'';
document.getElementById('billSelection').classList.add('hidden');openModal('payModal');
document.getElementById('payParty').onchange=function(){showBills(type,this.value)}}
window.showBills=function(type,party){var div=document.getElementById('billSelection');var list=document.getElementById('billList');if(!party){div.classList.add('hidden');return}
var bills=[];if(type==='receipt'){bills=paySales.filter(function(s){return s.customerName===party&&(s.total||0)-(s.paid||0)>0}).map(function(s){return{no:s.invoiceNo,total:s.total,paid:s.paid,due:(s.total||0)-(s.paid||0),key:s._key}})}else{bills=payPurchases.filter(function(p){return p.supplierName===party&&(p.total||0)-(p.paid||0)>0}).map(function(p){return{no:p.purchaseNo,total:p.total,paid:p.paid,due:(p.total||0)-(p.paid||0),key:p._key}})}
if(bills.length){div.classList.remove('hidden');list.innerHTML='<table class="tbl" style="font-size:11px"><thead><tr><th>Bill#</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Due</th><th>Select</th></tr></thead><tbody>'+bills.map(function(b){return'<tr><td>'+b.no+'</td><td class="r">'+fmt(b.total)+'</td><td class="r">'+fmt(b.paid)+'</td><td class="r text-danger">'+fmt(b.due)+'</td><td><input type="checkbox" data-key="'+b.key+'" data-due="'+b.due+'" onchange="calcBillAmt()"></td></tr>'}).join('')+'</tbody></table>'}else{div.classList.add('hidden')}}
window.calcBillAmt=function(){var total=0;document.querySelectorAll('#billList input[type=checkbox]:checked').forEach(function(c){total+=+(c.dataset.due||0)});document.getElementById('payAmt').value=total}
window.toggleCheque=function(){var m=document.getElementById('payMeth').value;var needsBank=m==='bank_transfer'||m==='cheque'||m==='credit_card'||m==='mobile_payment';document.getElementById('bankSelDiv').classList.toggle('hidden',!needsBank);document.getElementById('chequeDiv').classList.toggle('hidden',m!=='cheque')}
window.savePay=async function(){var ek=document.getElementById('payEK').value;var type=document.getElementById('payType').value;var party=document.getElementById('payParty').value;if(!party){showToast('Please select a party','warning');return;}var amt=+document.getElementById('payAmt').value||0;if(amt<=0){showToast('Please enter a valid amount','warning');return;}var data={type:type,no:document.getElementById('payNo').value,date:document.getElementById('payDt').value,party:party,amount:amt,method:document.getElementById('payMeth').value,bankName:document.getElementById('payBank').value,chequeNo:document.getElementById('payCheque').value,note:document.getElementById('payNote').value,status:'done'};
if(ek){
  // Editing: reverse old bank balance first
  var oldPay=pays.find(function(x){return x._key===ek});
  if(oldPay&&oldPay.method!=='cash'&&oldPay.bankName){var oldBk=banks.find(function(b){return b.name===oldPay.bankName});if(oldBk){if(oldPay.type==='receipt'){oldBk.balance=(oldBk.balance||0)-oldPay.amount}else{oldBk.balance=(oldBk.balance||0)+oldPay.amount}await saveByKey(oldBk._key,cleanForSave(oldBk))}}
  await saveByKey(ek,data,'edit','Edit '+(type==='receipt'?'receipt':'payment')+': '+data.no);
  // Apply new bank balance
  if(data.method!=='cash'&&data.bankName){var newBk=banks.find(function(b){return b.name===data.bankName});if(newBk){if(type==='receipt'){newBk.balance=(newBk.balance||0)+amt}else{newBk.balance=(newBk.balance||0)-amt}await saveByKey(newBk._key,cleanForSave(newBk))}}
  invalidateCache('payment:');invalidateCache('bank:');showToast((type==='receipt'?'Receipt':'Payment')+' updated successfully','success');closeModal('payModal');loadPay();return;
}
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
window._openTransferModal=function(editKey){
var accs=['Cash'].concat(banks.map(function(b){return b.name}));
var html='<div class="modal"><h3 id="trfTitle">Fund Transfer</h3><input type="hidden" id="trfEK"><div class="form-row"><div><label>Transfer No</label><input id="trfNo" readonly></div><div><label>Date</label><input type="date" id="trfDt"></div></div><div class="form-row"><div><label>From Account</label><select id="trfFrom">'+accs.map(function(a){return'<option value="'+a+'">'+a+'</option>'}).join('')+'</select></div><div><label>To Account</label><select id="trfTo">'+accs.map(function(a){return'<option value="'+a+'">'+a+'</option>'}).join('')+'</select></div></div><div class="form-group"><label>Amount</label><input type="number" id="trfAmt" placeholder="0"></div><div class="form-group"><label>Note</label><input id="trfNote" placeholder="Transfer note"></div><div style="display:flex;gap:6px;justify-content:flex-end;margin-top:14px"><button class="btn btn-outline" onclick="closeModal(\\x27trfModal\\x27)">Cancel</button><button class="btn btn-primary" onclick="saveTransfer()">Transfer</button></div></div>';
var overlay=document.getElementById('trfModal');
if(!overlay){overlay=document.createElement('div');overlay.id='trfModal';overlay.className='modal-overlay';document.body.appendChild(overlay)}
overlay.innerHTML=html;
if(editKey){
  var t=pays.find(function(x){return x._key===editKey});
  if(t){document.getElementById('trfEK').value=editKey;document.getElementById('trfTitle').textContent='Edit Transfer';document.getElementById('trfNo').value=t.no||'';document.getElementById('trfDt').value=t.date||todayISO();document.getElementById('trfFrom').value=t.fromAcc||'Cash';document.getElementById('trfTo').value=t.toAcc||'Cash';document.getElementById('trfAmt').value=t.amount||0;document.getElementById('trfNote').value=t.note||''}
}else{
  document.getElementById('trfEK').value='';document.getElementById('trfTitle').textContent='Fund Transfer';document.getElementById('trfNo').value=txnNo('TRF');document.getElementById('trfDt').value=todayISO();
  if(accs.length>1)document.getElementById('trfTo').selectedIndex=1;
}
overlay.classList.add('open')};
window.openTransfer=function(){window._openTransferModal()};
window.editTransfer=function(k){window._openTransferModal(k)};
window.saveTransfer=async function(){var ek=document.getElementById('trfEK').value;var from=document.getElementById('trfFrom').value;var to=document.getElementById('trfTo').value;var amt=+document.getElementById('trfAmt').value||0;if(!from||!to||from===to)return alert('Select different accounts');if(amt<=0)return alert('Enter amount');var data={type:'transfer',no:document.getElementById('trfNo').value,date:document.getElementById('trfDt').value,fromAcc:from,toAcc:to,amount:amt,note:document.getElementById('trfNote').value,party:from+' → '+to,method:'transfer',status:'done'};
if(ek){
  // EDIT: Reverse old transfer balances first
  var oldTrf=pays.find(function(x){return x._key===ek});
  if(oldTrf){
    if(oldTrf.fromAcc!=='Cash'){var oFBk=banks.find(function(b){return b.name===oldTrf.fromAcc});if(oFBk){oFBk.balance=(oFBk.balance||0)+(oldTrf.amount||0);await saveByKey(oFBk._key,cleanForSave(oFBk))}}
    if(oldTrf.toAcc!=='Cash'){var oTBk=banks.find(function(b){return b.name===oldTrf.toAcc});if(oTBk){oTBk.balance=(oTBk.balance||0)-(oldTrf.amount||0);await saveByKey(oTBk._key,cleanForSave(oTBk))}}
  }
  // Apply new balances
  if(from!=='Cash'){var fromBk=banks.find(function(b){return b.name===from});if(fromBk){fromBk.balance=(fromBk.balance||0)-amt;await saveByKey(fromBk._key,cleanForSave(fromBk))}}
  if(to!=='Cash'){var toBk=banks.find(function(b){return b.name===to});if(toBk){toBk.balance=(toBk.balance||0)+amt;await saveByKey(toBk._key,cleanForSave(toBk))}}
  await saveByKey(ek,data,'edit','Edited transfer: '+from+' -> '+to+' Amount: '+amt);
}else{
  await saveItem('payment:',data,null,'create','Transfer: '+from+' -> '+to+' Amount: '+amt);
  if(from!=='Cash'){var fromBk2=banks.find(function(b){return b.name===from});if(fromBk2){fromBk2.balance=(fromBk2.balance||0)-amt;await saveByKey(fromBk2._key,cleanForSave(fromBk2))}}
  if(to!=='Cash'){var toBk2=banks.find(function(b){return b.name===to});if(toBk2){toBk2.balance=(toBk2.balance||0)+amt;await saveByKey(toBk2._key,cleanForSave(toBk2))}}
}
var overlay=document.getElementById('trfModal');if(overlay)overlay.classList.remove('open');invalidateCache('payment:');invalidateCache('bank:');showToast(ek?'Transfer updated successfully':'Transfer completed successfully','success');loadPay()};
window.delTransfer=async function(k){if(!confirm('Delete transfer? Bank balances will be reversed.'))return;
var t=pays.find(function(x){return x._key===k});
if(t){
  if(t.fromAcc!=='Cash'){var fBk=banks.find(function(b){return b.name===t.fromAcc});if(fBk){fBk.balance=(fBk.balance||0)+(t.amount||0);await saveByKey(fBk._key,cleanForSave(fBk))}}
  if(t.toAcc!=='Cash'){var tBk=banks.find(function(b){return b.name===t.toAcc});if(tBk){tBk.balance=(tBk.balance||0)-(t.amount||0);await saveByKey(tBk._key,cleanForSave(tBk))}}
}
await deleteItem(k,false,'Deleted transfer: '+(t?t.no:''));invalidateCache('payment:');invalidateCache('bank:');showToast('Transfer deleted successfully','success');loadPay()}
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
  // Receipts into bank (exclude auto-created vouchers to avoid double-counting with sale payments above)
  pays.filter(function(p){return p.type==='receipt'&&p.bankName===bankName&&p.method!=='cash'&&p.status==='done'&&!p._autoInvoice}).forEach(function(p){entries.push({date:p.date,desc:'Receipt from '+p.party,ref:p.no||'',debit:p.amount||0,credit:0})});
  // Payments from bank (exclude auto-created vouchers to avoid double-counting with purchase payments above)
  pays.filter(function(p){return p.type==='payment'&&p.bankName===bankName&&p.method!=='cash'&&p.status==='done'&&!p._autoInvoice}).forEach(function(p){entries.push({date:p.date,desc:'Payment to '+p.party,ref:p.no||'',debit:0,credit:p.amount||0})});
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
<\/script>`}function De(){return`
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
<\/script>`}function je(){return`
<style>.led-sale td{background:rgba(79,70,229,.04)!important}.led-purchase td{background:rgba(217,119,6,.04)!important}.led-receipt td,.led-payment td{background:rgba(5,150,105,.04)!important}.led-opening td{background:rgba(107,114,128,.06)!important;font-style:italic}</style>
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
var ob=p.openingBalance||0;
if(ob!==0){entries.push({date:'--',doc:'Opening Balance',docType:'',docKey:'',type:'Opening',debit:ob>0?ob:0,credit:ob<0?Math.abs(ob):0,_isOB:true})}
if(p.type==='customer'){ledSales.filter(function(s){return s.customerId===pk}).forEach(function(s){entries.push({date:s.date,doc:s.invoiceNo,docType:'sale',docKey:s._key,type:'Sale',debit:s.total||0,credit:s.paid||0})});ledPayments.filter(function(r){return r.party===p.name&&r.type==='receipt'&&r.status==='done'&&!r._autoInvoice&&!(r.billKeys&&r.billKeys.length)}).forEach(function(r){entries.push({date:r.date,doc:r.no,docType:'receipt',docKey:r._key,type:'Receipt',debit:0,credit:r.amount||0})})}
else{ledPurchases.filter(function(pr){return pr.supplierId===pk}).forEach(function(pr){entries.push({date:pr.date,doc:pr.purchaseNo,docType:'purchase',docKey:pr._key,type:'Purchase',debit:pr.total||0,credit:pr.paid||0})});ledPayments.filter(function(py){return py.party===p.name&&py.type==='payment'&&py.status==='done'&&!py._autoInvoice&&!(py.billKeys&&py.billKeys.length)}).forEach(function(py){entries.push({date:py.date,doc:py.no,docType:'payment',docKey:py._key,type:'Payment',debit:py.amount||0,credit:0})})}
if(from)entries=entries.filter(function(e){return e._isOB||e.date>=from});if(to)entries=entries.filter(function(e){return e._isOB||e.date<=to});
entries.sort(function(a,b){if(a._isOB)return -1;if(b._isOB)return 1;return(a.date||'').localeCompare(b.date)});
var bal=0;entries.forEach(function(e){bal+=e.debit-e.credit;e.balance=bal});
var totalDr=entries.reduce(function(s,e){return s+e.debit},0);var totalCr=entries.reduce(function(s,e){return s+e.credit},0);
document.getElementById('ledPBalSummary').innerHTML='<div style="font-size:18px;font-weight:800;'+(bal>0?'color:var(--danger)':'color:var(--accent)')+'">'+fmt(Math.abs(bal))+' '+(bal>0?'Dr':'Cr')+'</div><div class="text-muted" style="font-size:11px">'+(p.type==='customer'?(bal>0?'Receivable':'Advance'):(bal>0?'Overpaid':'Payable'))+'</div>';
document.getElementById('ledStats').innerHTML='<div class="stat"><div class="label">Total Debit</div><div class="value text-danger">'+fmt(totalDr)+'</div></div><div class="stat"><div class="label">Total Credit</div><div class="value text-success">'+fmt(totalCr)+'</div></div><div class="stat"><div class="label">Balance</div><div class="value '+(bal>0?'text-danger':'text-success')+'">'+fmt(Math.abs(bal))+' '+(bal>0?'Dr':'Cr')+'</div></div>';
// Row color class based on type: led-sale, led-purchase, led-receipt, led-payment
document.getElementById('ledBody').innerHTML=!entries.length?'<tr><td colspan="6" class="empty">No entries</td></tr>':entries.map(function(e){var rowClass='led-'+e.type.toLowerCase();var badgeClass=e.type==='Sale'?'badge-info':e.type==='Purchase'?'badge-warning':e.type==='Receipt'?'badge-success':e.type==='Opening'?'badge-cash':'badge-cash';return'<tr class="'+rowClass+'"><td>'+e.date+'</td><td>'+(e.docKey?'<span class="doc-link" onclick="previewDoc(\\x27'+e.docType+'\\x27,\\x27'+e.docKey+'\\x27)">'+e.doc+'</span>':e.doc)+'</td><td><span class="badge '+badgeClass+'">'+e.type+'</span></td><td class="r '+(e.debit?'text-danger':'')+'">'+fmt(e.debit)+'</td><td class="r '+(e.credit?'text-success':'')+'">'+fmt(e.credit)+'</td><td class="r bold '+(e.balance>0?'text-danger':'text-success')+'">'+fmt(Math.abs(e.balance))+' '+(e.balance>0?'Dr':'Cr')+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800;border-top:2px solid var(--border-dark)"><td colspan="3">TOTAL ('+entries.length+' entries)</td><td class="r text-danger">'+fmt(totalDr)+'</td><td class="r text-success">'+fmt(totalCr)+'</td><td class="r bold '+(bal>0?'text-danger':'text-success')+'">'+fmt(Math.abs(bal))+' '+(bal>0?'Dr':'Cr')+'</td></tr>'}
loadLedger();
<\/script>`}function Ie(){return`
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
<\/script>`}function Te(){return`
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

<\/script>`}function Ee(){return`
<div class="page-header"><div><div class="page-title">Balance Sheet</div><div class="page-sub">Assets, Liabilities & Equity</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('bsPrint','Balance Sheet')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('bsTbl','BalanceSheet')">Export XLS</button></div></div>
<div id="bsPrint"><div class="card"><table class="tbl" id="bsTbl"><tbody id="bsBody"></tbody></table></div></div>
<script>
async function loadBS(){var d=await Promise.all([loadList('product:'),loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('expense:'),loadList('party:'),loadList('bank:')]);var products=d[0],sales=d[1],purchases=d[2],payments=d[3],expenses=d[4],parties=d[5],banks=d[6];
var inventory=products.reduce(function(s,p){return s+((p.stock||0)*(p.purchasePrice||0))},0);
var receivables=0;parties.filter(function(p){return p.type==='customer'}).forEach(function(c){var cob=c.openingBalance||0;var cs=sales.filter(function(s){return s.customerId===c._key});var cr=payments.filter(function(p){return p.party===c.name&&p.type==='receipt'&&p.status==='done'&&!p._autoInvoice&&!(p.billKeys&&p.billKeys.length)});var td=cs.reduce(function(s,x){return s+(x.total||0)},0)+(cob>0?cob:0);var tr=cs.reduce(function(s,x){return s+(x.paid||0)},0)+cr.reduce(function(s,x){return s+(x.amount||0)},0)+(cob<0?Math.abs(cob):0);receivables+=Math.max(0,td-tr)});
var bankBal=banks.reduce(function(s,b){return s+(b.balance||b.openingBalance||0)},0);
var nonAutoReceipts=payments.filter(function(p){return p.method==='cash'&&p.type==='receipt'&&p.status==='done'&&!p._autoInvoice}).reduce(function(s,p){return s+(p.amount||0)},0);
var nonAutoPayouts=payments.filter(function(p){return p.method==='cash'&&p.type==='payment'&&p.status==='done'&&!p._autoInvoice}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashExpenses=expenses.filter(function(e){return e.method==='cash'}).reduce(function(s,e){return s+(e.amount||0)},0);
var salePaidCash=sales.filter(function(s){return s.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var purPaidCash=purchases.filter(function(p){return p.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var trfToCashBS=payments.filter(function(p){return p.type==='transfer'&&p.toAcc==='Cash'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var trfFromCashBS=payments.filter(function(p){return p.type==='transfer'&&p.fromAcc==='Cash'&&p.status==='done'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashBal=salePaidCash+nonAutoReceipts-purPaidCash-nonAutoPayouts-cashExpenses+trfToCashBS-trfFromCashBS;
var totalAssets=inventory+receivables+bankBal+Math.max(0,cashBal);
var payables=0;parties.filter(function(p){return p.type==='supplier'}).forEach(function(s){var sob=s.openingBalance||0;var sp=purchases.filter(function(p){return p.supplierId===s._key});var py=payments.filter(function(p){return p.party===s.name&&p.type==='payment'&&p.status==='done'&&!p._autoInvoice&&!(p.billKeys&&p.billKeys.length)});var td=sp.reduce(function(a,x){return a+(x.total||0)},0)+(sob>0?sob:0);var tp=sp.reduce(function(a,x){return a+(x.paid||0)},0)+py.reduce(function(a,x){return a+(x.amount||0)},0)+(sob<0?Math.abs(sob):0);payables+=Math.max(0,td-tp)});
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
<\/script>`}function Ne(){return`
<div class="page-header"><div><div class="page-title">Trial Balance</div><div class="page-sub">Debit & Credit summary</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('tbPrint','Trial Balance')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('tbTbl','TrialBalance')">Export XLS</button></div></div>
<div id="tbPrint"><div class="stats" id="tbStats"></div><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="tbTbl"><thead><tr><th>Account</th><th class="r">Debit</th><th class="r">Credit</th></tr></thead><tbody id="tbBody"></tbody></table></div></div></div>
<script>
async function loadTB(){var d=await Promise.all([loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('expense:'),loadList('product:'),loadList('party:'),loadList('bank:')]);var sales=d[0],purchases=d[1],payments=d[2],expenses=d[3],products=d[4],parties=d[5],banks=d[6];
var accounts=[];
var totalSales=sales.reduce(function(s,x){return s+(x.total||0)},0);accounts.push({name:'Sales Revenue',debit:0,credit:totalSales});
var cogs=0;sales.forEach(function(s){(s.items||[]).forEach(function(it){var pr=products.find(function(p){return p._key===it.productId});cogs+=(pr?pr.purchasePrice||0:0)*it.qty})});accounts.push({name:'Cost of Goods Sold',debit:cogs,credit:0});
var totalPurchases=purchases.reduce(function(s,x){return s+(x.total||0)},0);accounts.push({name:'Purchases',debit:totalPurchases,credit:0});
var inventory=products.reduce(function(s,p){return s+((p.stock||0)*(p.purchasePrice||0))},0);accounts.push({name:'Inventory',debit:inventory,credit:0});
var receivables=0;parties.filter(function(p){return p.type==='customer'}).forEach(function(c){var cob=c.openingBalance||0;var cs=sales.filter(function(s){return s.customerId===c._key});var cr=payments.filter(function(p){return p.party===c.name&&p.type==='receipt'&&p.status==='done'&&!p._autoInvoice&&!(p.billKeys&&p.billKeys.length)});var td=cs.reduce(function(s,x){return s+(x.total||0)},0)+(cob>0?cob:0);var tr=cs.reduce(function(s,x){return s+(x.paid||0)},0)+cr.reduce(function(s,x){return s+(x.amount||0)},0)+(cob<0?Math.abs(cob):0);receivables+=Math.max(0,td-tr)});accounts.push({name:'Accounts Receivable',debit:receivables,credit:0});
var payables=0;parties.filter(function(p){return p.type==='supplier'}).forEach(function(s){var sob=s.openingBalance||0;var sp=purchases.filter(function(p){return p.supplierId===s._key});var py=payments.filter(function(p){return p.party===s.name&&p.type==='payment'&&p.status==='done'&&!p._autoInvoice&&!(p.billKeys&&p.billKeys.length)});var td=sp.reduce(function(a,x){return a+(x.total||0)},0)+(sob>0?sob:0);var tp=sp.reduce(function(a,x){return a+(x.paid||0)},0)+py.reduce(function(a,x){return a+(x.amount||0)},0)+(sob<0?Math.abs(sob):0);payables+=Math.max(0,td-tp)});accounts.push({name:'Accounts Payable',debit:0,credit:payables});
var totalExp=expenses.reduce(function(s,e){return s+(e.amount||0)},0);accounts.push({name:'Expenses',debit:totalExp,credit:0});
var bankBal=banks.reduce(function(s,b){return s+(b.balance||b.openingBalance||0)},0);accounts.push({name:'Bank Accounts',debit:bankBal,credit:0});
var totalDr=accounts.reduce(function(s,a){return s+a.debit},0);var totalCr=accounts.reduce(function(s,a){return s+a.credit},0);
document.getElementById('tbStats').innerHTML='<div class="stat"><div class="label">Total Debit</div><div class="value text-danger">'+fmt(totalDr)+'</div></div><div class="stat"><div class="label">Total Credit</div><div class="value text-success">'+fmt(totalCr)+'</div></div><div class="stat"><div class="label">Difference</div><div class="value '+(Math.abs(totalDr-totalCr)<1?'text-success':'text-danger')+'">'+fmt(Math.abs(totalDr-totalCr))+'</div></div>';
document.getElementById('tbBody').innerHTML=accounts.map(function(a){return'<tr><td class="bold">'+a.name+'</td><td class="r '+(a.debit?'text-danger':'')+'">'+fmt(a.debit)+'</td><td class="r '+(a.credit?'text-success':'')+'">'+fmt(a.credit)+'</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td>TOTALS</td><td class="r text-danger">'+fmt(totalDr)+'</td><td class="r text-success">'+fmt(totalCr)+'</td></tr>'}
loadTB();
<\/script>`}function Re(){return`
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
<\/script>`}function Me(){return`
<div class="page-header"><div><div class="page-title">Receivable / Payable</div><div class="page-sub">Outstanding balances with DSO & filters</div></div><div class="no-print" style="display:flex;gap:6px"><button class="btn btn-outline btn-sm" onclick="printContent('rpPrint','Receivable-Payable')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('rpTbl','RecPayable')">Export XLS</button></div></div>
<div class="tabs"><button class="tab active" onclick="switchRP('receivable',this)">Receivables</button><button class="tab" onclick="switchRP('payable',this)">Payables</button></div>
<div class="card" style="margin-bottom:14px;padding:14px 16px">
<div class="rp-filter-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;align-items:end"><style>@media(max-width:768px){.rp-filter-grid{grid-template-columns:1fr 1fr !important}}</style>
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
if(isRec){txns=rpSales.filter(function(s){return s.customerId===p._key&&(!from||s.date>=from)&&(!to||s.date<=to)&&(!spFilter||s.salespersonName===spFilter)});pays=rpPayments.filter(function(r){return r.party===p.name&&r.type==='receipt'&&r.status==='done'&&!r._autoInvoice&&!(r.billKeys&&r.billKeys.length)&&(!from||r.date>=from)&&(!to||r.date<=to)})}
else{txns=rpPurchases.filter(function(pr){return pr.supplierId===p._key&&(!from||pr.date>=from)&&(!to||pr.date<=to)});pays=rpPayments.filter(function(py){return py.party===p.name&&py.type==='payment'&&py.status==='done'&&!py._autoInvoice&&!(py.billKeys&&py.billKeys.length)&&(!from||py.date>=from)&&(!to||py.date<=to)})}
var ob=p.openingBalance||0;
var total=txns.reduce(function(s,x){return s+(x.total||0)},0)+(ob>0?ob:0);var paid=txns.reduce(function(s,x){return s+(x.paid||0)},0)+pays.reduce(function(s,x){return s+(x.amount||0)},0)+(ob<0?Math.abs(ob):0);var out=Math.max(0,total-paid);
var dso=0;if(txns.length&&total>0){var avgDaily=total/Math.max(1,txns.length);dso=avgDaily>0?Math.round(out/avgDaily*30):0}
if((total>0||ob!==0)&&(!onlyOut||out>0)){rows.push({name:p.name,phone:p.phone||'',sp:p.salespersonName||'-',total:total,paid:paid,out:out,cl:p.creditLimit||0,dso:dso,ob:ob});grandTotal+=total;grandPaid+=paid;grandOut+=out}});
rows.sort(function(a,b){return b.out-a.out});
document.getElementById('rpStats').innerHTML='<div class="stat"><div class="label">Total '+(isRec?'Receivable':'Payable')+'</div><div class="value '+(isRec?'text-info':'text-danger')+'">'+fmt(grandOut)+'</div></div><div class="stat"><div class="label">Parties</div><div class="value">'+rows.length+'</div></div><div class="stat"><div class="label">Total Billed</div><div class="value">'+fmt(grandTotal)+'</div></div><div class="stat"><div class="label">Total Collected</div><div class="value text-success">'+fmt(grandPaid)+'</div></div>';
document.getElementById('rpBody').innerHTML=!rows.length?'<tr><td colspan="8" class="empty">No outstanding</td></tr>':rows.map(function(r){return'<tr><td class="bold">'+r.name+'</td><td class="text-muted">'+r.phone+'</td><td>'+(r.sp!=='-'?'<span class="badge badge-info">'+r.sp+'</span>':'-')+'</td><td class="r">'+fmt(r.total)+'</td><td class="r text-success">'+fmt(r.paid)+'</td><td class="r bold '+(r.out>0?'text-danger':'')+'">'+fmt(r.out)+'</td><td class="r">'+(r.cl?fmt(r.cl):'--')+'</td><td class="r text-muted">'+r.dso+' days</td></tr>'}).join('')+'<tr style="background:var(--bg);font-weight:800"><td colspan="3">TOTAL</td><td class="r">'+fmt(grandTotal)+'</td><td class="r">'+fmt(grandPaid)+'</td><td class="r">'+fmt(grandOut)+'</td><td></td><td></td></tr>'}
loadRP();
<\/script>`}function Ae(){return`
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
var dayCashIn=ds.filter(function(s){return s.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0)+dr.filter(function(r){return r.type==='receipt'&&r.method==='cash'&&!r._autoInvoice}).reduce(function(s,x){return s+(x.amount||0)},0);
var dayCashOut=dp.filter(function(p){return p.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0)+dr.filter(function(r){return r.type==='payment'&&r.method==='cash'&&!r._autoInvoice}).reduce(function(s,x){return s+(x.amount||0)},0)+de.filter(function(e){return e.method==='cash'}).reduce(function(s,x){return s+(x.amount||0)},0);
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
var cihRecCash=allPayUpTo.filter(function(p){return p.method==='cash'&&p.type==='receipt'&&!p._autoInvoice}).reduce(function(s,p){return s+(p.amount||0)},0);
var cihPurCash=allPurUpTo.filter(function(p){return p.method==='cash'}).reduce(function(s,x){return s+(x.paid||0)},0);
var cihPayCash=allPayUpTo.filter(function(p){return p.method==='cash'&&p.type==='payment'&&!p._autoInvoice}).reduce(function(s,p){return s+(p.amount||0)},0);
var cihExpCash=allExpUpTo.filter(function(e){return e.method==='cash'}).reduce(function(s,e){return s+(e.amount||0)},0);
var cihTrfTo=allPayUpTo.filter(function(p){return p.type==='transfer'&&p.toAcc==='Cash'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cihTrfFrom=allPayUpTo.filter(function(p){return p.type==='transfer'&&p.fromAcc==='Cash'}).reduce(function(s,p){return s+(p.amount||0)},0);
var cashInHand=cihSalesCash+cihRecCash-cihPurCash-cihPayCash-cihExpCash+cihTrfTo-cihTrfFrom;

var dayBankIn=ds.filter(function(s){return s.method!=='cash'&&s.method!=='credit'}).reduce(function(s,x){return s+(x.paid||0)},0)+dr.filter(function(r){return r.type==='receipt'&&r.method!=='cash'&&!r._autoInvoice}).reduce(function(s,x){return s+(x.amount||0)},0);
var dayBankOut=dp.filter(function(p){return p.method!=='cash'&&p.method!=='credit'}).reduce(function(s,x){return s+(x.paid||0)},0)+dr.filter(function(r){return r.type==='payment'&&r.method!=='cash'&&!r._autoInvoice}).reduce(function(s,x){return s+(x.amount||0)},0)+de.filter(function(e){return e.method!=='cash'}).reduce(function(s,x){return s+(x.amount||0)},0);
document.getElementById('dayStats').innerHTML='<div class="stat"><div class="label">Sales</div><div class="value text-success">'+fmt(totalSales)+'</div></div><div class="stat"><div class="label">Purchases</div><div class="value text-primary">'+fmt(totalPurchases)+'</div></div><div class="stat"><div class="label">Receipts</div><div class="value text-info">'+fmt(totalReceipts)+'</div></div><div class="stat"><div class="label">Payments Out</div><div class="value text-warning">'+fmt(totalPayments)+'</div></div><div class="stat"><div class="label">Expenses</div><div class="value text-danger">'+fmt(totalExpenses)+'</div></div><div class="stat"><div class="label">Cash In</div><div class="value text-success">'+fmt(dayCashIn)+'</div></div><div class="stat"><div class="label">Cash Out</div><div class="value text-danger">'+fmt(dayCashOut)+'</div></div><div class="stat" style="border:2px solid var(--primary)"><div class="label">Cash in Hand</div><div class="value '+(cashInHand>=0?'text-success':'text-danger')+'">'+fmt(cashInHand)+'</div></div><div class="stat"><div class="label">Bank In</div><div class="value text-success">'+fmt(dayBankIn)+'</div></div><div class="stat"><div class="label">Bank Out</div><div class="value text-danger">'+fmt(dayBankOut)+'</div></div>';
// Separate Cash, Bank & Transfer transactions
var cashRecTxn=dr.filter(function(r){return r.type==='receipt'&&r.method==='cash'&&!r._autoInvoice});
var cashPayTxn=dr.filter(function(r){return r.type==='payment'&&r.method==='cash'&&!r._autoInvoice});
var bankRecTxn=dr.filter(function(r){return r.type==='receipt'&&r.method!=='cash'&&!r._autoInvoice});
var bankPayTxn=dr.filter(function(r){return r.type==='payment'&&r.method!=='cash'&&!r._autoInvoice});
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
<\/script>`}function Ke(){return`
<div class="page-header"><div><div class="page-title">Reports</div><div class="page-sub">Business analytics</div></div></div>
<div class="form-row" style="margin-bottom:14px"><div><label>Report Type</label><select id="rptType" onchange="toggleRptFilters()">
<option value="date-sales">Date-wise Sales</option>
<option value="product-sales">Product-wise Sales</option>
<option value="customer-sales">Customer-wise Sales</option>
<option value="gross-profit">Date-wise Gross Profit</option>
<option value="date-purchases">Date-wise Purchases</option>
<option value="supplier-purchases">Supplier-wise Purchases</option>
<option value="product-purchases">Product-wise Purchases</option>
<option value="customer-invoice-detail">Customer Invoice Detail</option>
<option value="sp-sales">Salesperson Performance</option>
<option value="sp-customer">SP &times; Customer Breakdown</option>
<option value="sp-product">SP &times; Product Breakdown</option>
<option value="customer-outstanding">Customer Outstanding</option>
</select></div><div><label>From</label><input type="date" id="rptFrom"></div><div><label>To</label><input type="date" id="rptTo"></div></div>
<div class="form-row" id="rptGroupFilter" style="margin-bottom:14px;display:none"><div><label>Product Group</label><select id="rptGroup"><option value="">All Groups</option></select></div><div><label>Product</label><select id="rptProduct"><option value="">All Products</option></select></div></div>
<div class="no-print" style="margin-bottom:12px;display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-primary" onclick="loadReport()"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">visibility</span> View Report</button><button class="btn btn-outline btn-sm" onclick="printContent('rptPrint','Report')">Print</button><button class="btn btn-outline btn-sm" onclick="exportXLS('rptTbl','Report')">Export XLS</button></div>
<div id="rptPlaceholder" class="rpt-placeholder"><span class="material-symbols-outlined">assessment</span><p>Select report type, date range, and click <b>View Report</b></p></div>
<div id="rptPrint" class="hidden"><div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="rptTbl" style="border-collapse:collapse"><thead id="rptHead"></thead><tbody id="rptBody"></tbody></table></div></div></div>
<script>
var rptSales=[],rptPurchases=[],rptProducts=[],rptParties=[],rptPayments=[],rptSP=[],rptGroups=[];
async function loadRptData(){var d=await Promise.all([loadList('sale:'),loadList('purchase:'),loadList('product:'),loadList('party:'),loadList('payment:'),loadList('salesperson:'),loadList('prodgroup:')]);rptSales=d[0];rptPurchases=d[1];rptProducts=d[2];rptParties=d[3];rptPayments=d[4];rptSP=d[5];rptGroups=d[6]||[];
document.getElementById('rptGroup').innerHTML='<option value="">All Groups</option>'+rptGroups.map(function(g){return'<option value="'+g.name+'">'+g.name+'</option>'}).join('');
document.getElementById('rptProduct').innerHTML='<option value="">All Products</option>'+rptProducts.map(function(p){return'<option value="'+p._key+'">'+p.name+'</option>'}).join('');}
window.toggleRptFilters=function(){var type=document.getElementById('rptType').value;var showGroup=['product-sales','product-purchases','date-sales','gross-profit','customer-invoice-detail','customer-sales'].includes(type);document.getElementById('rptGroupFilter').style.display=showGroup?'grid':'none'}
window.loadReport=function(){var type=document.getElementById('rptType').value;var from=document.getElementById('rptFrom').value;var to=document.getElementById('rptTo').value;
var groupFilter=document.getElementById('rptGroup').value;var productFilter=document.getElementById('rptProduct').value;
function matchesItemFilter(items){if(!groupFilter&&!productFilter)return true;return(items||[]).some(function(it){if(productFilter&&it.productId===productFilter)return true;if(groupFilter){var pr=rptProducts.find(function(p){return p._key===it.productId});if(pr&&pr.group===groupFilter)return true}return!productFilter&&!groupFilter})}
function filterItems(items){if(!groupFilter&&!productFilter)return items;return(items||[]).filter(function(it){if(productFilter)return it.productId===productFilter;if(groupFilter){var pr=rptProducts.find(function(p){return p._key===it.productId});return pr&&pr.group===groupFilter}return true})}
var sales=rptSales.filter(function(s){return(!from||s.date>=from)&&(!to||s.date<=to)&&matchesItemFilter(s.items)});
var purchases=rptPurchases.filter(function(p){return(!from||p.date>=from)&&(!to||p.date<=to)&&matchesItemFilter(p.items)});
var head='',body='';
var gs='background:var(--bg);font-weight:800';var ss='background:rgba(79,70,229,.04);font-weight:700';
// ===== DATE-WISE SALES (grouped by date, each invoice as a row) =====
if(type==='date-sales'){
head='<tr><th>Invoice No</th><th>Ref No</th><th>Trader Name</th><th>Entered by</th><th class="r">Total Amt</th><th class="r">Discount</th><th class="r">Ex. Char.</th><th class="r">VAT</th><th class="r">Amount</th><th>Link</th></tr>';
var byDate={};sales.forEach(function(s){var d=s.date;if(!byDate[d])byDate[d]=[];byDate[d].push(s)});
var dates=Object.keys(byDate).sort();var gTot=0,gDisc=0,gEx=0,gVat=0,gAmt=0;
body=dates.map(function(d){var rows=byDate[d];var dTot=0,dDisc=0,dEx=0,dVat=0,dAmt=0;
var html='<tr style="'+ss+'"><td colspan="10" style="font-size:13px">Date: '+d+(rows.some(function(s){return s.method==='credit'})?' <span class="badge badge-warning">Credit Bills</span>':'')+'</td></tr>';
rows.forEach(function(s){var sub=(s.items||[]).reduce(function(a,i){return a+(i.amount||0)},0);var dt2=s.discountType||'amount';var dv=s.discount||0;var discAmt=dt2==='percent'?sub*dv/100:dv;var vatAmt=(s.vatType==='percent')?((sub-discAmt+(s.extra||0))*(s.vat||0)/100):(s.vat||0);
dTot+=sub;dDisc+=discAmt;dEx+=(s.extra||0);dVat+=vatAmt;dAmt+=(s.total||0);
html+='<tr><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td class="text-muted">'+( s.note||'-')+'</td><td>'+s.customerName+'</td><td class="text-muted">'+(s.createdBy||'-')+'</td><td class="r">'+fmt(sub)+'</td><td class="r text-danger">'+fmt(discAmt)+'</td><td class="r">'+fmt(s.extra||0)+'</td><td class="r">'+fmt(vatAmt)+'</td><td class="r bold">'+fmt(s.total)+'</td><td>'+methodBadge(s.method)+'</td></tr>'});
gTot+=dTot;gDisc+=dDisc;gEx+=dEx;gVat+=dVat;gAmt+=dAmt;
html+='<tr style="'+ss+';border-top:2px solid var(--border-dark)"><td colspan="4" class="r bold">Sub Total ('+d+')</td><td class="r bold">'+fmt(dTot)+'</td><td class="r">'+fmt(dDisc)+'</td><td class="r">'+fmt(dEx)+'</td><td class="r">'+fmt(dVat)+'</td><td class="r bold">'+fmt(dAmt)+'</td><td></td></tr>';
return html}).join('');
body+='<tr style="'+gs+';border-top:3px solid #333"><td colspan="4" class="r bold" style="font-size:13px">Grand Total</td><td class="r bold">'+fmt(gTot)+'</td><td class="r">'+fmt(gDisc)+'</td><td class="r">'+fmt(gEx)+'</td><td class="r">'+fmt(gVat)+'</td><td class="r bold" style="font-size:14px">'+fmt(gAmt)+'</td><td></td></tr>'}
// ===== PRODUCT-WISE SALES (grouped by product) =====
else if(type==='product-sales'){
head='<tr><th>Invoice No</th><th>Customer Name</th><th>Purchase Invoice</th><th>Ref. No.</th><th class="r">Qty</th><th class="r">Unit Price</th><th class="r">Amount</th></tr>';
var byProd={};sales.forEach(function(s){filterItems(s.items).forEach(function(it){var k=it.productId||it.productName;if(!byProd[k])byProd[k]={name:it.productName,rows:[]};byProd[k].rows.push({inv:s.invoiceNo,cust:s.customerName,date:s.date,qty:it.qty,rate:it.rate,amt:it.amount||it.qty*it.rate,key:s._key})})});
var gQ=0,gA=0;
body=Object.values(byProd).sort(function(a,b){return a.name.localeCompare(b.name)}).map(function(prod){
var html='<tr style="'+ss+'"><td colspan="7" style="font-size:13px">'+prod.name+'</td></tr>';
var pQ=0,pA=0;
prod.rows.sort(function(a,b){return(a.date||'').localeCompare(b.date)}).forEach(function(r){pQ+=r.qty;pA+=r.amt;
html+='<tr><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+r.key+'\\x27)">'+r.inv+'</span></td><td>'+r.cust+'</td><td class="text-muted">-</td><td class="text-muted">'+r.date+'</td><td class="r">'+r.qty+'</td><td class="r">'+fmt(r.rate)+'</td><td class="r bold">'+fmt(r.amt)+'</td></tr>'});
gQ+=pQ;gA+=pA;
html+='<tr style="'+ss+';border-top:1px solid var(--border-dark)"><td colspan="4" class="r bold">Sub Total</td><td class="r bold">'+pQ+'</td><td></td><td class="r bold">'+fmt(pA)+'</td></tr>';
return html}).join('');
body+='<tr style="'+gs+';border-top:3px solid #333"><td colspan="4" class="r bold" style="font-size:13px">Grand Total</td><td class="r bold">'+gQ+'</td><td></td><td class="r bold" style="font-size:14px">'+fmt(gA)+'</td></tr>'}
// ===== CUSTOMER-WISE SALES (grouped by customer, then by invoice) =====
else if(type==='customer-sales'){
head='<tr><th>Invoice No</th><th>Product Description</th><th class="r">Qty</th><th class="r">Unit Price</th><th class="r">Discount</th><th class="r">Net Unit Price</th><th class="r">Amount</th></tr>';
var byCust={};sales.forEach(function(s){var cn=s.customerName;if(!byCust[cn])byCust[cn]={sales:[],totalAmt:0};byCust[cn].sales.push(s);byCust[cn].totalAmt+=s.total||0});
var gA2=0;
body=Object.entries(byCust).sort(function(a,b){return b[1].totalAmt-a[1].totalAmt}).map(function(e){
var custName=e[0],cData=e[1];var cAmt=0;
var html='<tr style="'+ss+'"><td colspan="7" style="font-size:13px">'+custName+'</td></tr>';
cData.sales.sort(function(a,b){return(a.date||'').localeCompare(b.date)}).forEach(function(s){
var sub=(s.items||[]).reduce(function(a,i){return a+(i.amount||0)},0);
var discPerItem=s.items&&s.items.length?(((s.discountType==='percent'?sub*(s.discount||0)/100:(s.discount||0)))/s.items.length):0;
(s.items||[]).forEach(function(it){var netRate=it.rate-(discPerItem/it.qty);cAmt+=it.amount||0;
html+='<tr><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td>'+it.productName+'</td><td class="r">'+it.qty+'</td><td class="r">'+fmt(it.rate)+'</td><td class="r text-danger">'+fmt(discPerItem)+'</td><td class="r">'+fmt(Math.max(0,netRate))+'</td><td class="r bold">'+fmt(it.amount)+'</td></tr>'})});
gA2+=cData.totalAmt;
html+='<tr style="'+ss+';border-top:1px solid var(--border-dark)"><td colspan="6" class="r bold">Customer Total</td><td class="r bold">'+fmt(cData.totalAmt)+'</td></tr>';
return html}).join('');
body+='<tr style="'+gs+';border-top:3px solid #333"><td colspan="6" class="r bold" style="font-size:13px">Grand Total</td><td class="r bold" style="font-size:14px">'+fmt(gA2)+'</td></tr>'}
// ===== DATE-WISE GROSS PROFIT =====
else if(type==='gross-profit'){
head='<tr><th>Invoice No</th><th>Trader Name</th><th class="r">Total Amount</th><th class="r">Discount</th><th class="r">Extra Charges</th><th class="r">AIT</th><th class="r">VAT</th><th class="r">Net Payable</th><th class="r">Total Cost</th><th class="r">Gross Profit</th><th class="r">Profit %</th></tr>';
var byDGP={};sales.forEach(function(s){var d=s.date;if(!byDGP[d])byDGP[d]=[];byDGP[d].push(s)});
var dates2=Object.keys(byDGP).sort();var gNet=0,gCost=0,gProf=0;
body=dates2.map(function(d){var rows=byDGP[d];var dNet=0,dCost=0;
var html='<tr style="'+ss+'"><td colspan="11" style="font-size:13px">Date: '+d+'</td></tr>';
rows.forEach(function(s){var sub=(s.items||[]).reduce(function(a,i){return a+(i.amount||0)},0);
var discAmt=(s.discountType==='percent')?sub*(s.discount||0)/100:(s.discount||0);
var vatAmt=(s.vatType==='percent')?((sub-discAmt+(s.extra||0))*(s.vat||0)/100):(s.vat||0);
var aitAmt=(s.aitType==='percent')?((sub-discAmt+(s.extra||0))*(s.ait||0)/100):(s.ait||0);
var cost=(s.items||[]).reduce(function(a,it){var pr=rptProducts.find(function(p){return p._key===it.productId});return a+((pr?pr.purchasePrice||0:0)*it.qty)},0);
var profit=(s.total||0)-cost;var pct=(s.total||0)?((profit/(s.total||1))*100).toFixed(1):0;
dNet+=(s.total||0);dCost+=cost;
html+='<tr><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+s._key+'\\x27)">'+s.invoiceNo+'</span></td><td>'+s.customerName+'</td><td class="r">'+fmt(sub)+'</td><td class="r text-danger">'+fmt(discAmt)+'</td><td class="r">'+fmt(s.extra||0)+'</td><td class="r">'+fmt(aitAmt)+'</td><td class="r">'+fmt(vatAmt)+'</td><td class="r bold">'+fmt(s.total)+'</td><td class="r">'+fmt(cost)+'</td><td class="r bold '+(profit>=0?'text-success':'text-danger')+'">'+fmt(profit)+'</td><td class="r">'+pct+'%</td></tr>'});
var dProf=dNet-dCost;gNet+=dNet;gCost+=dCost;gProf+=dProf;
html+='<tr style="'+ss+';border-top:1px solid var(--border-dark)"><td colspan="7" class="r bold">Sub Total</td><td class="r bold">'+fmt(dNet)+'</td><td class="r bold">'+fmt(dCost)+'</td><td class="r bold '+(dProf>=0?'text-success':'text-danger')+'">'+fmt(dProf)+'</td><td class="r">'+(dNet?(dProf/dNet*100).toFixed(1):0)+'%</td></tr>';
return html}).join('');
body+='<tr style="'+gs+';border-top:3px solid #333"><td colspan="7" class="r bold" style="font-size:13px">Grand Total</td><td class="r bold" style="font-size:14px">'+fmt(gNet)+'</td><td class="r bold">'+fmt(gCost)+'</td><td class="r bold '+(gProf>=0?'text-success':'text-danger')+'" style="font-size:14px">'+fmt(gProf)+'</td><td class="r">'+(gNet?(gProf/gNet*100).toFixed(1):0)+'%</td></tr>'}
// ===== DATE-WISE PURCHASES (grouped by date) =====
else if(type==='date-purchases'){
head='<tr><th>Invoice No</th><th>Ref No</th><th>Supplier Name</th><th>Bill Type</th><th class="r">Discount</th><th class="r">Ex. Ch.</th><th class="r">VAT</th><th class="r">Net Amount</th><th>Link</th></tr>';
var byDP={};purchases.forEach(function(p){var d=p.date;if(!byDP[d])byDP[d]=[];byDP[d].push(p)});
var dpDates=Object.keys(byDP).sort();var gDPA=0;
body=dpDates.map(function(d){var rows=byDP[d];var dA=0;
var html='<tr style="'+ss+'"><td colspan="9" style="font-size:13px">Date: '+d+'</td></tr>';
rows.forEach(function(p){var vatAmt=(p.vatType==='percent')?(((p.items||[]).reduce(function(a,i){return a+(i.amount||0)},0)-(p.discount||0)+(p.extra||0))*(p.vat||0)/100):(p.vat||0);dA+=(p.total||0);
html+='<tr><td><span class="doc-link" onclick="previewDoc(\\x27purchase\\x27,\\x27'+p._key+'\\x27)">'+p.purchaseNo+'</span></td><td class="text-muted">-</td><td>'+p.supplierName+'</td><td>'+methodBadge(p.method)+'</td><td class="r text-danger">'+fmt(p.discount||0)+'</td><td class="r">'+fmt(p.extra||0)+'</td><td class="r">'+fmt(vatAmt)+'</td><td class="r bold">'+fmt(p.total)+'</td><td>'+methodBadge(p.method)+'</td></tr>'});
gDPA+=dA;
html+='<tr style="'+ss+';border-top:1px solid var(--border-dark)"><td colspan="7" class="r bold">Sub Total</td><td class="r bold">'+fmt(dA)+'</td><td></td></tr>';
return html}).join('');
body+='<tr style="'+gs+';border-top:3px solid #333"><td colspan="7" class="r bold" style="font-size:13px">Grand Total</td><td class="r bold" style="font-size:14px">'+fmt(gDPA)+'</td><td></td></tr>'}
// ===== SUPPLIER-WISE PURCHASES (grouped by supplier, then date) =====
else if(type==='supplier-purchases'){
head='<tr><th>Invoice No</th><th>Product Description</th><th class="r">Qty</th><th class="r">Unit Price</th><th class="r">Total Price</th></tr>';
var bySup={};purchases.forEach(function(p){var sn=p.supplierName;if(!bySup[sn])bySup[sn]={purchases:[],total:0};bySup[sn].purchases.push(p);bySup[sn].total+=p.total||0});
var gSPA=0;
body=Object.entries(bySup).sort(function(a,b){return b[1].total-a[1].total}).map(function(e){
var supName=e[0],sData=e[1];var sA=0;
var html='<tr style="'+ss+'"><td colspan="5" style="font-size:13px">'+supName+'</td></tr>';
sData.purchases.sort(function(a,b){return(a.date||'').localeCompare(b.date)}).forEach(function(p){
(p.items||[]).forEach(function(it){sA+=it.amount||0;
html+='<tr><td><span class="doc-link" onclick="previewDoc(\\x27purchase\\x27,\\x27'+p._key+'\\x27)">'+p.purchaseNo+'</span></td><td>'+it.productName+'</td><td class="r">'+it.qty+'</td><td class="r">'+fmt(it.rate)+'</td><td class="r bold">'+fmt(it.amount)+'</td></tr>'})});
gSPA+=sData.total;
html+='<tr style="'+ss+';border-top:1px solid var(--border-dark)"><td colspan="4" class="r bold">Supplier Total</td><td class="r bold">'+fmt(sData.total)+'</td></tr>';
return html}).join('');
body+='<tr style="'+gs+';border-top:3px solid #333"><td colspan="4" class="r bold" style="font-size:13px">Grand Total</td><td class="r bold" style="font-size:14px">'+fmt(gSPA)+'</td></tr>'}
// ===== PRODUCT-WISE PURCHASES (grouped by product) =====
else if(type==='product-purchases'){
head='<tr><th>Invoice No</th><th>Date</th><th>Supplier Name</th><th class="r">Qty</th><th>Unit</th><th class="r">Net Unit Price</th><th class="r">Total Price</th></tr>';
var byPP={};purchases.forEach(function(p){filterItems(p.items).forEach(function(it){var k=it.productId||it.productName;var pr=rptProducts.find(function(x){return x._key===it.productId});if(!byPP[k])byPP[k]={name:it.productName,group:pr?pr.group||'':'',rows:[]};byPP[k].rows.push({inv:p.purchaseNo,date:p.date,sup:p.supplierName,qty:it.qty,rate:it.rate,amt:it.amount||it.qty*it.rate,unit:pr?pr.unit||'pcs':'pcs',key:p._key})})});
var gPPA=0;
body=Object.values(byPP).sort(function(a,b){return a.name.localeCompare(b.name)}).map(function(prod){
var html='<tr style="'+ss+'"><td colspan="7" style="font-size:13px">'+prod.name+(prod.group?' <span class="badge badge-info">'+prod.group+'</span>':'')+'</td></tr>';
var pA=0;
prod.rows.sort(function(a,b){return(a.date||'').localeCompare(b.date)}).forEach(function(r){pA+=r.amt;
html+='<tr><td><span class="doc-link" onclick="previewDoc(\\x27purchase\\x27,\\x27'+r.key+'\\x27)">'+r.inv+'</span></td><td>'+r.date+'</td><td>'+r.sup+'</td><td class="r">'+r.qty+'</td><td class="text-muted">'+r.unit+'</td><td class="r">'+fmt(r.rate)+'</td><td class="r bold">'+fmt(r.amt)+'</td></tr>'});
gPPA+=pA;
html+='<tr style="'+ss+';border-top:1px solid var(--border-dark)"><td colspan="6" class="r bold">Model Sub Total</td><td class="r bold">'+fmt(pA)+'</td></tr>';
return html}).join('');
body+='<tr style="'+gs+';border-top:3px solid #333"><td colspan="6" class="r bold" style="font-size:13px">Grand Total</td><td class="r bold" style="font-size:14px">'+fmt(gPPA)+'</td></tr>'}
// ===== REMAINING REPORTS (keep existing formats) =====
else if(type==='customer-invoice-detail'){
head='<tr><th>Customer</th><th>Invoice#</th><th>Date</th><th class="r">Sale Total</th><th class="r">Invoice Paid</th><th class="r">Receipt Paid</th><th class="r">Balance</th></tr>';
var invRows=[];var tSale=0,tInvP=0,tRcpP=0;
sales.forEach(function(s){var rcpts=rptPayments.filter(function(p){return p.type==='receipt'&&p.status==='done'&&p.party===s.customerName&&!p._autoInvoice&&!(p.billKeys&&p.billKeys.length)});var rcptAmt=rcpts.reduce(function(a,r){return a+(r.amount||0)},0);var custRcptShare=0;if(rcptAmt>0){var allCustSales=rptSales.filter(function(x){return x.customerName===s.customerName});var totalCustDue=allCustSales.reduce(function(a,x){return a+(Math.max(0,(x.total||0)-(x.paid||0)))},0);var thisDue=Math.max(0,(s.total||0)-(s.paid||0));if(totalCustDue>0)custRcptShare=Math.min(thisDue,rcptAmt*(thisDue/totalCustDue))}var bal=Math.max(0,(s.total||0)-(s.paid||0)-custRcptShare);tSale+=s.total||0;tInvP+=s.paid||0;tRcpP+=custRcptShare;invRows.push({cust:s.customerName,inv:s.invoiceNo,date:s.date,total:s.total||0,invPaid:s.paid||0,rcptPaid:custRcptShare,bal:bal,key:s._key})});
invRows.sort(function(a,b){return(b.date||'').localeCompare(a.date)});
body=invRows.map(function(r){return'<tr><td class="bold">'+r.cust+'</td><td><span class="doc-link" onclick="previewDoc(\\x27sale\\x27,\\x27'+r.key+'\\x27)">'+r.inv+'</span></td><td>'+r.date+'</td><td class="r">'+fmt(r.total)+'</td><td class="r text-success">'+fmt(r.invPaid)+'</td><td class="r text-info">'+fmt(r.rcptPaid)+'</td><td class="r '+(r.bal>0?'text-danger bold':'')+'">'+fmt(r.bal)+'</td></tr>'}).join('');
body+='<tr style="'+gs+'"><td colspan="3">TOTAL ('+invRows.length+' invoices)</td><td class="r">'+fmt(tSale)+'</td><td class="r">'+fmt(tInvP)+'</td><td class="r">'+fmt(tRcpP)+'</td><td class="r text-danger">'+fmt(Math.max(0,tSale-tInvP-tRcpP))+'</td></tr>'}
else if(type==='sp-sales'){head='<tr><th>Salesperson</th><th class="r">Sales Count</th><th class="r">Revenue</th><th class="r">Paid</th><th class="r">Due</th></tr>';var bySP2={};sales.forEach(function(s){var n=s.salespersonName||'Direct';if(!bySP2[n])bySP2[n]={count:0,rev:0,paid:0};bySP2[n].count++;bySP2[n].rev+=s.total||0;bySP2[n].paid+=s.paid||0});var tCn2=0,tRv=0,tPd=0;body=Object.entries(bySP2).sort(function(a,b){return b[1].rev-a[1].rev}).map(function(e){tCn2+=e[1].count;tRv+=e[1].rev;tPd+=e[1].paid;var due=e[1].rev-e[1].paid;return'<tr><td class="bold">'+e[0]+'</td><td class="r">'+e[1].count+'</td><td class="r bold">'+fmt(e[1].rev)+'</td><td class="r text-success">'+fmt(e[1].paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td></tr>'}).join('');body+='<tr style="'+gs+'"><td>TOTAL</td><td class="r">'+tCn2+'</td><td class="r">'+fmt(tRv)+'</td><td class="r">'+fmt(tPd)+'</td><td class="r">'+fmt(tRv-tPd)+'</td></tr>'}
else if(type==='sp-customer'){head='<tr><th>Salesperson</th><th>Customer</th><th class="r">Sales</th><th class="r">Revenue</th><th class="r">Paid</th><th class="r">Due</th></tr>';var bySPC={};sales.forEach(function(s){var sp=s.salespersonName||'Direct';var cn=s.customerName||'Unknown';var k=sp+'|||'+cn;if(!bySPC[k])bySPC[k]={sp:sp,cust:cn,count:0,rev:0,paid:0};bySPC[k].count++;bySPC[k].rev+=s.total||0;bySPC[k].paid+=s.paid||0});var tCn3=0,tRv2=0,tPd2=0;body=Object.values(bySPC).sort(function(a,b){return a.sp.localeCompare(b.sp)||b.rev-a.rev}).map(function(r){tCn3+=r.count;tRv2+=r.rev;tPd2+=r.paid;var due=r.rev-r.paid;return'<tr><td class="bold">'+r.sp+'</td><td>'+r.cust+'</td><td class="r">'+r.count+'</td><td class="r bold">'+fmt(r.rev)+'</td><td class="r text-success">'+fmt(r.paid)+'</td><td class="r '+(due>0?'text-danger':'')+'">'+fmt(due)+'</td></tr>'}).join('');body+='<tr style="'+gs+'"><td colspan="2">TOTAL</td><td class="r">'+tCn3+'</td><td class="r">'+fmt(tRv2)+'</td><td class="r">'+fmt(tPd2)+'</td><td class="r">'+fmt(tRv2-tPd2)+'</td></tr>'}
else if(type==='sp-product'){head='<tr><th>Salesperson</th><th>Product</th><th class="r">Qty</th><th class="r">Revenue</th></tr>';var bySPP={};sales.forEach(function(s){var sp=s.salespersonName||'Direct';(s.items||[]).forEach(function(it){var k=sp+'|||'+it.productName;if(!bySPP[k])bySPP[k]={sp:sp,prod:it.productName,qty:0,rev:0};bySPP[k].qty+=it.qty;bySPP[k].rev+=it.amount})});var tQ2=0,tRv3=0;body=Object.values(bySPP).sort(function(a,b){return a.sp.localeCompare(b.sp)||b.rev-a.rev}).map(function(r){tQ2+=r.qty;tRv3+=r.rev;return'<tr><td class="bold">'+r.sp+'</td><td>'+r.prod+'</td><td class="r">'+r.qty+'</td><td class="r bold">'+fmt(r.rev)+'</td></tr>'}).join('');body+='<tr style="'+gs+'"><td colspan="2">TOTAL</td><td class="r">'+tQ2+'</td><td class="r">'+fmt(tRv3)+'</td></tr>'}
else if(type==='customer-outstanding'){head='<tr><th>Customer</th><th>Phone</th><th class="r">Sales</th><th class="r">Invoice Paid</th><th class="r">Receipts</th><th class="r">Outstanding</th></tr>';var byCO={};rptParties.filter(function(p){return p.type==='customer'}).forEach(function(c){var cs=rptSales.filter(function(s){return s.customerId===c._key});var totalS=cs.reduce(function(s,x){return s+(x.total||0)},0);var invPaid=cs.reduce(function(s,x){return s+(x.paid||0)},0);var rcptPaid=rptPayments.filter(function(p){return p.party===c.name&&p.type==='receipt'&&p.status==='done'&&!p._autoInvoice&&!(p.billKeys&&p.billKeys.length)}).reduce(function(s,p){return s+(p.amount||0)},0);var out=Math.max(0,totalS-invPaid-rcptPaid);if(totalS>0)byCO[c.name]={phone:c.phone||'',sales:totalS,invPaid:invPaid,rcptPaid:rcptPaid,out:out}});var tOS=0,tOIP=0,tORP=0,tOO=0;body=Object.entries(byCO).sort(function(a,b){return b[1].out-a[1].out}).map(function(e){tOS+=e[1].sales;tOIP+=e[1].invPaid;tORP+=e[1].rcptPaid;tOO+=e[1].out;return'<tr><td class="bold">'+e[0]+'</td><td class="text-muted">'+e[1].phone+'</td><td class="r">'+fmt(e[1].sales)+'</td><td class="r text-success">'+fmt(e[1].invPaid)+'</td><td class="r text-info">'+fmt(e[1].rcptPaid)+'</td><td class="r '+(e[1].out>0?'text-danger bold':'')+'">'+fmt(e[1].out)+'</td></tr>'}).join('');body+='<tr style="'+gs+'"><td colspan="2">TOTAL</td><td class="r">'+fmt(tOS)+'</td><td class="r">'+fmt(tOIP)+'</td><td class="r">'+fmt(tORP)+'</td><td class="r text-danger">'+fmt(tOO)+'</td></tr>'}
document.getElementById('rptPlaceholder').classList.add('hidden');
document.getElementById('rptPrint').classList.remove('hidden');
document.getElementById('rptHead').innerHTML=head;document.getElementById('rptBody').innerHTML=body||'<tr><td colspan="10" class="empty">No data for selected range</td></tr>'}
loadRptData();
<\/script>`}function Le(){return`
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
<\/script>`}function _e(){return`
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
<\/script>`}function Oe(){return`
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
<\/script>`}function ze(){return`
<div class="page-header"><div><div class="page-title">Admin</div><div class="page-sub">Settings, data & tools</div></div></div>
<div class="admin-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><style>@media(max-width:768px){.admin-grid{grid-template-columns:1fr !important}}</style>
<div class="card"><div class="section-title">Change PIN</div>
<div class="form-group"><label>Current PIN</label><input id="oldPin" type="password"></div>
<div class="form-group"><label>New PIN</label><input id="newPin" type="password"></div>
<button class="btn btn-primary" onclick="changePin()">Change PIN</button></div>
<div class="card"><div class="section-title">License Info</div><div id="licInfo">Loading...</div></div>
<div class="card"><div class="section-title">Export All Data</div><p class="text-muted" style="margin-bottom:8px;font-size:11px">Download complete backup as JSON</p><button class="btn btn-primary" onclick="exportAll()">Export</button></div>
<div class="card"><div class="section-title">Import Data</div><p class="text-muted" style="margin-bottom:8px;font-size:11px">Restore from JSON backup</p><input type="file" id="importFile" accept=".json" style="margin-bottom:8px"><button class="btn btn-warning" onclick="importAll()">Import</button></div>
<div class="card" id="kvBrowserCard" style="display:none"><div class="section-title">KV Browser</div>
<div style="display:flex;gap:4px;margin-bottom:8px"><input id="kvPrefix" placeholder="Prefix (e.g. product:)"><button class="btn btn-outline btn-sm" onclick="browseKV()">Browse</button></div><div id="kvResults" style="max-height:300px;overflow:auto;font-size:11px"></div></div>
<div class="card" id="purgeDataCard" style="display:none"><div class="section-title">Purge Data</div><p class="text-muted" style="margin-bottom:8px;font-size:11px">Delete all data of a type</p>
<select id="purgeType" style="margin-bottom:8px"><option value="product:">Products</option><option value="party:">Parties</option><option value="purchase:">Purchases</option><option value="sale:">Sales</option><option value="payment:">Payments</option><option value="expense:">Expenses</option><option value="order:">Orders</option></select><button class="btn btn-danger" onclick="purgeData()">Purge</button></div>
<div class="card"><div class="section-title">Developer Tools</div><p class="text-muted" style="margin-bottom:8px;font-size:11px">Toggle visibility of KV Browser and Purge Data tools</p><div style="display:flex;gap:8px;align-items:center"><label style="display:inline;margin:0"><input type="checkbox" id="devToolsToggle" onchange="toggleDevTools()"> Show KV Browser & Purge Data</label></div></div>
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
window.toggleDevTools=async function(){var on=document.getElementById('devToolsToggle').checked;document.getElementById('kvBrowserCard').style.display=on?'block':'none';document.getElementById('purgeDataCard').style.display=on?'block':'none';try{await api('/api/save',{key:'ADMIN_DEV_TOOLS',data:{enabled:on},skipApproval:true})}catch(e){}}
// Check KV for dev tools setting
(async function(){try{var d=await api('/api/get',{key:'ADMIN_DEV_TOOLS'});if(d&&d.enabled){document.getElementById('devToolsToggle').checked=true;document.getElementById('kvBrowserCard').style.display='block';document.getElementById('purgeDataCard').style.display='block'}}catch(e){}})();
<\/script>`}function Fe(){return`
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
<\/script>`}function He(){return`
<div class="page-header"><div><div class="page-title">Approval Queue</div><div class="page-sub">Review and approve/reject pending changes from Entry users</div></div></div>
<div class="tabs"><button class="tab active" onclick="switchApprTab('pending',this)">Pending</button><button class="tab" onclick="switchApprTab('approved',this)">Approved</button><button class="tab" onclick="switchApprTab('rejected',this)">Rejected</button><button class="tab" onclick="switchApprTab('all',this)">All</button></div>
<div class="stats" id="apprStats"></div>
<div class="card" style="padding:0"><div class="table-wrap"><table class="tbl" id="apprTbl"><thead><tr><th>Requested</th><th>User</th><th>Type</th><th>Target</th><th>Detail</th><th>Status</th><th class="r">Actions</th></tr></thead><tbody id="apprBody"></tbody></table></div></div>
<div class="modal-overlay" id="apprDetailModal"><div class="modal modal-lg">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="margin:0">Change Details</h3><button class="btn btn-outline btn-sm" onclick="closeModal('apprDetailModal')">Close</button></div>
<div id="apprDetailContent"></div>
<div id="apprDetailActions" style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px"></div>
</div></div>
<script>
var apprItems=[],apprTab='pending';
async function loadAppr(){apprItems=await api('/api/approval-list');renderAppr()}
window.switchApprTab=function(t,el){apprTab=t;document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});el.classList.add('active');renderAppr()};
function renderAppr(){
  var fl=apprTab==='all'?apprItems:apprItems.filter(function(a){return a.status===apprTab});
  fl.sort(function(a,b){return(b.requestedAt||'').localeCompare(a.requestedAt||'')});
  var pending=apprItems.filter(function(a){return a.status==='pending'}).length;
  var approved=apprItems.filter(function(a){return a.status==='approved'}).length;
  var rejected=apprItems.filter(function(a){return a.status==='rejected'}).length;
  document.getElementById('apprStats').innerHTML='<div class="stat"><div class="label">Pending</div><div class="value text-warning">'+pending+'</div></div><div class="stat"><div class="label">Approved</div><div class="value text-success">'+approved+'</div></div><div class="stat"><div class="label">Rejected</div><div class="value text-danger">'+rejected+'</div></div><div class="stat"><div class="label">Total</div><div class="value">'+apprItems.length+'</div></div>';
  document.getElementById('apprBody').innerHTML=!fl.length?'<tr><td colspan="7" class="empty">No approval requests</td></tr>':fl.map(function(a){
    var statusBadge=a.status==='pending'?'badge-warning':a.status==='approved'?'badge-success':'badge-danger';
    var typeBadge=a.type==='delete'?'badge-danger':'badge-info';
    var ts=a.requestedAt?new Date(a.requestedAt).toLocaleString():'';
    var acts='';
    if(a.status==='pending'){acts='<button class="btn btn-success btn-xs" onclick="approveAppr(\\x27'+a._key+'\\x27)">Approve</button> <button class="btn btn-danger btn-xs" onclick="rejectAppr(\\x27'+a._key+'\\x27)">Reject</button> ';}
    acts+='<button class="btn btn-outline btn-xs" onclick="viewApprDetail(\\x27'+a._key+'\\x27)">View</button>';
    return'<tr><td class="text-muted" style="font-size:11px;white-space:nowrap">'+ts+'</td><td class="bold">'+(a.requestedBy||'')+'</td><td><span class="badge '+typeBadge+'">'+(a.type||'')+'</span></td><td class="text-muted" style="font-size:11px;word-break:break-all">'+(a.targetKey||'')+'</td><td>'+(a.detail||'')+'</td><td><span class="badge '+statusBadge+'">'+(a.status||'')+'</span>'+(a.processedBy?'<br><span class="text-muted" style="font-size:10px">by '+a.processedBy+'</span>':'')+'</td><td class="r">'+acts+'</td></tr>'
  }).join('')
}
window.approveAppr=async function(k){if(!confirm('Approve this change?'))return;try{await api('/api/approval-action',{approvalKey:k,action:'approve'});showToast('Change approved and applied','success');loadAppr()}catch(e){showToast('Failed: '+e.message,'error')}};
window.rejectAppr=async function(k){if(!confirm('Reject this change?'))return;try{await api('/api/approval-action',{approvalKey:k,action:'reject'});showToast('Change rejected','info');loadAppr()}catch(e){showToast('Failed: '+e.message,'error')}};
window._humanizeKey=function(k){
  var map={invoiceNo:'Invoice No',purchaseNo:'Purchase No',expenseNo:'Expense No',customerName:'Customer',supplierName:'Supplier',customerId:'Customer ID',supplierId:'Supplier ID',salespersonName:'Salesperson',salespersonId:'Salesperson ID',productName:'Product',productId:'Product ID',headName:'Head',subHeadName:'Sub-Head',bankName:'Bank',chequeNo:'Cheque No',companyName:'Company',companyAddress:'Address',companyPhone:'Phone',companyEmail:'Email',companyWebsite:'Website',companyTIN:'TIN/BIN',companyTagline:'Tagline',primaryColor:'Primary Color',sidebarColor:'Sidebar Color',openingBalance:'Opening Balance',creditLimit:'Credit Limit',vatType:'VAT Type',aitType:'AIT Type',discountType:'Discount Type'};
  if(map[k])return map[k];
  return k.replace(/([A-Z])/g,' $1').replace(/^./,function(s){return s.toUpperCase()}).replace(/_/g,' ');
};
window._humanizeVal=function(v){
  if(v===null||v===undefined)return'<span class="text-muted">N/A</span>';
  if(typeof v==='boolean')return v?'Yes':'No';
  if(typeof v==='number')return fmt(v);
  if(Array.isArray(v)){
    if(v.length===0)return'<span class="text-muted">(empty)</span>';
    if(v[0]&&typeof v[0]==='object'){return'<table class="tbl" style="font-size:11px;margin:4px 0"><thead><tr>'+Object.keys(v[0]).filter(function(k){return k!=='_key'}).map(function(k){return'<th>'+_humanizeKey(k)+'</th>'}).join('')+'</tr></thead><tbody>'+v.map(function(row){return'<tr>'+Object.keys(v[0]).filter(function(k){return k!=='_key'}).map(function(k){return'<td>'+(typeof row[k]==='number'?fmt(row[k]):(row[k]||''))+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table>';}
    return v.join(', ');
  }
  if(typeof v==='string'&&/^d{4}-d{2}-d{2}/.test(v)){try{return new Date(v).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'})}catch(e){return v}}
  return String(v);
};
window._humanizeData=function(data,title,bgColor){
  if(!data)return'<div class="empty">No data</div>';
  var html='';
  var skip=['_key'];
  var keys=Object.keys(data).filter(function(k){return skip.indexOf(k)===-1});
  html+='<table style="width:100%;font-size:12px;border-collapse:collapse">';
  keys.forEach(function(k){
    var val=data[k];
    var isArray=Array.isArray(val)&&val.length>0&&typeof val[0]==='object';
    html+='<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 10px;font-weight:700;color:var(--muted);white-space:nowrap;vertical-align:top;width:140px;font-size:11px;text-transform:uppercase;letter-spacing:.3px">'+_humanizeKey(k)+'</td><td style="padding:6px 10px">'+(isArray?_humanizeVal(val):_humanizeVal(val))+'</td></tr>';
  });
  html+='</table>';
  return html;
};
window._humanizeDiff=function(oldData,newData){
  if(!oldData||!newData)return'';
  var allKeys=Object.keys(Object.assign({},oldData,newData)).filter(function(k){return k!=='_key'});
  var html='<table style="width:100%;font-size:12px;border-collapse:collapse"><thead><tr style="background:var(--bg)"><th style="padding:6px 10px;text-align:left;font-size:10px;text-transform:uppercase;color:var(--muted)">Field</th><th style="padding:6px 10px;text-align:left;font-size:10px;text-transform:uppercase;color:var(--muted)">Old Value</th><th style="padding:6px 10px;text-align:left;font-size:10px;text-transform:uppercase;color:var(--muted)">New Value</th></tr></thead><tbody>';
  allKeys.forEach(function(k){
    var ov=oldData[k],nv=newData[k];
    var ovStr=JSON.stringify(ov),nvStr=JSON.stringify(nv);
    var changed=ovStr!==nvStr;
    var rowStyle=changed?'background:rgba(217,119,6,.06)':'';
    html+='<tr style="border-bottom:1px solid var(--border);'+rowStyle+'"><td style="padding:6px 10px;font-weight:700;color:var(--muted);font-size:11px;text-transform:uppercase;letter-spacing:.3px;white-space:nowrap;vertical-align:top">'+_humanizeKey(k)+(changed?' <span style="color:var(--warning);font-size:9px">CHANGED</span>':'')+'</td><td style="padding:6px 10px;vertical-align:top">'+(Array.isArray(ov)&&ov.length>0&&typeof ov[0]==='object'?_humanizeVal(ov):_humanizeVal(ov))+'</td><td style="padding:6px 10px;vertical-align:top'+(changed?';font-weight:700':'')+'">'+(Array.isArray(nv)&&nv.length>0&&typeof nv[0]==='object'?_humanizeVal(nv):_humanizeVal(nv))+'</td></tr>';
  });
  html+='</tbody></table>';
  return html;
};
window.viewApprDetail=function(k){
  var a=apprItems.find(function(x){return x._key===k});if(!a)return;
  var html='<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">';
  html+='<div class="card"><div class="section-title">Request Info</div><div style="line-height:2;font-size:12px"><b>Type:</b> '+(a.type||'')+'<br><b>Target:</b> '+(a.targetKey||'')+'<br><b>Requested By:</b> '+(a.requestedBy||'')+'<br><b>Requested At:</b> '+(a.requestedAt?new Date(a.requestedAt).toLocaleString():'')+'<br><b>Status:</b> <span class="badge '+(a.status==='pending'?'badge-warning':a.status==='approved'?'badge-success':'badge-danger')+'">'+(a.status||'')+'</span>'+(a.processedBy?'<br><b>Processed By:</b> '+a.processedBy:'')+(a.processedAt?'<br><b>Processed At:</b> '+new Date(a.processedAt).toLocaleString():'')+'</div></div>';
  if(a.type==='edit'){
    if(a.oldData&&a.newData){
      html+='<div class="card"><div class="section-title">Summary of Changes</div><div style="font-size:11px;color:var(--muted);margin-bottom:6px">Fields marked <span style="color:var(--warning);font-weight:700">CHANGED</span> have been modified</div></div>';
      html+='</div><div class="card" style="margin-top:14px;padding:0;overflow:auto;max-height:400px"><div style="padding:12px 16px 4px"><div class="section-title">Comparison: Old vs New</div></div>'+_humanizeDiff(a.oldData,a.newData)+'</div>';
    }else{
      html+='<div class="card"><div class="section-title">Proposed Data</div>'+_humanizeData(a.newData||a.oldData)+'</div>';
      html+='</div>';
    }
  }else{
    html+='<div class="card"><div class="section-title">Data to be Deleted</div>'+_humanizeData(a.oldData)+'</div>';
    html+='</div>';
  }
  document.getElementById('apprDetailContent').innerHTML=html;
  var actHtml='';
  if(a.status==='pending'){actHtml='<button class="btn btn-success" onclick="approveAppr(\\x27'+a._key+'\\x27);closeModal(\\x27apprDetailModal\\x27)">Approve</button><button class="btn btn-danger" onclick="rejectAppr(\\x27'+a._key+'\\x27);closeModal(\\x27apprDetailModal\\x27)">Reject</button>';}
  document.getElementById('apprDetailActions').innerHTML=actHtml;
  openModal('apprDetailModal');
};
loadAppr();
<\/script>`}function Ge(){return`
<div class="page-header"><div><div class="page-title">Company Settings</div><div class="page-sub">Configure company name, details & theme colors globally</div></div></div>
<div class="cs-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:16px"><style>@media(max-width:768px){.cs-grid{grid-template-columns:1fr !important}}</style>
<div class="card">
<div class="section-title">Company Information</div>
<div class="form-group"><label>Company Name</label><input id="csName" placeholder="Your Company Name"></div>
<div class="form-group"><label>Tagline / Slogan</label><input id="csTagline" placeholder="e.g. Quality Trading Since 1990"></div>
<div class="form-group"><label>Address</label><textarea id="csAddress" rows="2" placeholder="Full business address"></textarea></div>
<div class="form-row"><div><label>Phone</label><input id="csPhone" placeholder="+880-XXX-XXXX"></div><div><label>Email</label><input id="csEmail" placeholder="info@company.com"></div></div>
<div class="form-row"><div><label>Website</label><input id="csWebsite" placeholder="www.company.com"></div><div><label>TIN/BIN Number</label><input id="csTIN" placeholder="Tax ID"></div></div>
</div>
<div class="card">
<div class="section-title">Theme & Appearance</div>
<div class="form-row"><div><label>Primary Color</label><div style="display:flex;gap:8px;align-items:center"><input type="color" id="csPrimary" value="#4f46e5" style="width:50px;height:36px;padding:2px;cursor:pointer"><input id="csPrimaryText" value="#4f46e5" style="width:100px" oninput="document.getElementById('csPrimary').value=this.value" placeholder="#hex"></div></div><div><label>Sidebar Color</label><div style="display:flex;gap:8px;align-items:center"><input type="color" id="csSidebar" value="#1e1b4b" style="width:50px;height:36px;padding:2px;cursor:pointer"><input id="csSidebarText" value="#1e1b4b" style="width:100px" oninput="document.getElementById('csSidebar').value=this.value" placeholder="#hex"></div></div></div>
<div style="margin-top:12px"><div class="section-title">Preview</div>
<div id="csPreview" style="border:1px solid var(--border);border-radius:10px;overflow:hidden;height:120px;display:flex">
<div id="csPreviewSidebar" style="width:200px;padding:12px;color:#fff;display:flex;flex-direction:column;gap:6px"><div style="font-weight:800;font-size:13px" id="csPreviewLogo">Company</div><div style="font-size:11px;opacity:.7">Dashboard</div><div style="font-size:11px;opacity:.7">Inventory</div><div style="font-size:11px;padding:4px 8px;border-radius:6px" id="csPreviewActive">Sales</div></div>
<div style="flex:1;padding:12px;background:var(--bg)"><div style="font-weight:800;font-size:14px" id="csPreviewTitle">Dashboard</div><div style="margin-top:6px;display:flex;gap:6px"><div style="padding:6px 12px;border-radius:6px;color:#fff;font-size:11px;font-weight:600" id="csPreviewBtn">Button</div><div style="padding:6px 12px;border:1px solid var(--border);border-radius:6px;font-size:11px">Outline</div></div></div>
</div></div>
<div class="form-row" style="margin-top:14px"><div><button class="btn btn-outline" onclick="resetThemeDefaults()">Reset to Default</button></div></div>
</div>
</div>
<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px"><button class="btn btn-primary" onclick="saveCS()" style="padding:12px 28px;font-size:14px"><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">save</span> Save Settings</button></div>
<script>
var csData={};
async function loadCS(){
  try{
    var r=await fetch('/api/company-settings');
    csData=await r.json();
    document.getElementById('csName').value=csData.companyName||'';
    document.getElementById('csTagline').value=csData.companyTagline||'';
    document.getElementById('csAddress').value=csData.companyAddress||'';
    document.getElementById('csPhone').value=csData.companyPhone||'';
    document.getElementById('csEmail').value=csData.companyEmail||'';
    document.getElementById('csWebsite').value=csData.companyWebsite||'';
    document.getElementById('csTIN').value=csData.companyTIN||'';
    document.getElementById('csPrimary').value=csData.primaryColor||'#4f46e5';
    document.getElementById('csPrimaryText').value=csData.primaryColor||'#4f46e5';
    document.getElementById('csSidebar').value=csData.sidebarColor||'#1e1b4b';
    document.getElementById('csSidebarText').value=csData.sidebarColor||'#1e1b4b';
    updatePreview();
  }catch(e){console.log(e)}
}
window.updatePreview=function(){
  var pc=document.getElementById('csPrimary').value;
  var sc=document.getElementById('csSidebar').value;
  var nm=document.getElementById('csName').value||'Company';
  document.getElementById('csPreviewSidebar').style.background=sc;
  document.getElementById('csPreviewActive').style.background=pc;
  document.getElementById('csPreviewBtn').style.background=pc;
  document.getElementById('csPreviewLogo').textContent=nm;
  document.getElementById('csPrimaryText').value=pc;
  document.getElementById('csSidebarText').value=sc;
};
document.getElementById('csPrimary').addEventListener('input',updatePreview);
document.getElementById('csSidebar').addEventListener('input',updatePreview);
document.getElementById('csName').addEventListener('input',updatePreview);
window.resetThemeDefaults=function(){
  document.getElementById('csPrimary').value='#4f46e5';
  document.getElementById('csSidebar').value='#1e1b4b';
  updatePreview();
};
window.saveCS=async function(){
  var data={
    companyName:document.getElementById('csName').value.trim(),
    companyTagline:document.getElementById('csTagline').value.trim(),
    companyAddress:document.getElementById('csAddress').value.trim(),
    companyPhone:document.getElementById('csPhone').value.trim(),
    companyEmail:document.getElementById('csEmail').value.trim(),
    companyWebsite:document.getElementById('csWebsite').value.trim(),
    companyTIN:document.getElementById('csTIN').value.trim(),
    primaryColor:document.getElementById('csPrimary').value,
    sidebarColor:document.getElementById('csSidebar').value
  };
  try{
    await api('/api/company-settings',data);
    showToast('Company settings saved successfully! Reloading...','success');
    setTimeout(function(){window.location.reload()},1500);
  }catch(e){showToast('Failed to save: '+e.message,'error')}
};
loadCS();
<\/script>`}const it=new Dt,qe=Object.assign({"/src/index.tsx":h});let Nt=!1;for(const[,a]of Object.entries(qe))a&&(it.all("*",t=>{let e;try{e=t.executionCtx}catch{}return a.fetch(t.req.raw,t.env,e)}),it.notFound(t=>{let e;try{e=t.executionCtx}catch{}return a.fetch(t.req.raw,t.env,e)}),Nt=!0);if(!Nt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{it as default};
