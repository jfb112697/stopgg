import{s as C,x as O,y as R,d as g,p as E}from"../chunks/scheduler.1ce69c66.js";import{S as z,i as B,d as q,v as D,j as b,o as w,s as H,k as $,l as S,p as j,g as d,c as N,a as u,z as k,q as x}from"../chunks/index.76dd1e18.js";import{p as _}from"../chunks/stores.e31273bd.js";const y="node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(r){var v;let e,i=r[0].status+"",o,l,n,c=((v=r[0].error)==null?void 0:v.message)+"",s;const h={c:function(){e=b("h1"),o=w(i),l=H(),n=b("p"),s=w(c),this.h()},l:function(t){e=$(t,"H1",{});var a=S(e);o=j(a,i),a.forEach(d),l=N(t),n=$(t,"P",{});var m=S(n);s=j(m,c),m.forEach(d),this.h()},h:function(){g(e,y,4,0,57),g(n,y,5,0,81)},m:function(t,a){u(t,e,a),k(e,o),u(t,l,a),u(t,n,a),k(n,s)},p:function(t,[a]){var m;a&1&&i!==(i=t[0].status+"")&&x(o,i),a&1&&c!==(c=((m=t[0].error)==null?void 0:m.message)+"")&&x(s,c)},i:E,o:E,d:function(t){t&&(d(e),d(l),d(n))}};return q("SvelteRegisterBlock",{block:h,id:f.name,type:"component",source:"",ctx:r}),h}function P(r,e,i){let o;O(_,"page"),R(r,_,s=>i(0,o=s));let{$$slots:l={},$$scope:n}=e;D("Error",l,[]);const c=[];return Object.keys(e).forEach(s=>{!~c.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Error> was created with unknown prop '${s}'`)}),r.$capture_state=()=>({page:_,$page:o}),[o]}class I extends z{constructor(e){super(e),B(this,e,P,f,C,{}),q("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}}export{I as component};
