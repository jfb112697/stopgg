import{g as tt,s as he,e as V,f as Ve,h as W,i as x,d as C,u as G,j as N,k as z,l as ot,n as st}from"../chunks/scheduler.6af7431e.js";import{S as ge,i as me,d as F,v as be,j as D,s as q,k as M,l as T,c as J,g as A,m as g,a as I,z as j,f as m,r as U,t as R,b as K,n as we,A as nt,o as Ge,p as Ne,u as ze,w as Qe,x as qe,y as Je,B as lt}from"../chunks/index.35075c1a.js";import{w as rt,r as it}from"../chunks/index.d271e0c3.js";const at=!0,ct=!1,At=Object.freeze(Object.defineProperty({__proto__:null,prerender:at,ssr:ct},Symbol.toStringTag,{value:"Module"}));const $={};function ve(o){return o==="local"?localStorage:sessionStorage}function pe(o,e,t){const l=(t==null?void 0:t.serializer)??JSON,r=(t==null?void 0:t.storage)??"local";function s(a,i){ve(r).setItem(a,l.stringify(i))}if(!$[o]){const a=rt(e,c=>{const h=ve(r).getItem(o);h&&c(l.parse(h));{const P=L=>{L.key===o&&c(L.newValue?l.parse(L.newValue):null)};return window.addEventListener("storage",P),()=>window.removeEventListener("storage",P)}}),{subscribe:i,set:n}=a;$[o]={set(c){s(o,c),n(c)},update(c){const h=c(tt(a));s(o,h),n(h)},subscribe:i}}return $[o]}pe("modeOsPrefers",!1);pe("modeUserPrefers",void 0);pe("modeCurrent",!1);const Ue="(prefers-reduced-motion: reduce)";function ft(){return window.matchMedia(Ue).matches}it(ft(),o=>{{const e=l=>{o(l.matches)},t=window.matchMedia(Ue);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});const Z="node_modules/@skeletonlabs/skeleton/dist/components/AppBar/AppBar.svelte",ut=o=>({}),Se=o=>({}),dt=o=>({}),Pe=o=>({}),ht=o=>({}),ye=o=>({});function ee(o){let e,t,l;const r=o[22].lead,s=V(r,o,o[21],ye),a={c:function(){e=D("div"),s&&s.c(),this.h()},l:function(n){e=M(n,"DIV",{class:!0});var c=T(e);s&&s.l(c),c.forEach(A),this.h()},h:function(){g(e,"class",t="app-bar-slot-lead "+o[4]),C(e,Z,39,3,1366)},m:function(n,c){I(n,e,c),s&&s.m(e,null),l=!0},p:function(n,c){s&&s.p&&(!l||c&2097152)&&G(s,r,n,n[21],l?z(r,n[21],c,ht):N(n[21]),ye),(!l||c&16&&t!==(t="app-bar-slot-lead "+n[4]))&&g(e,"class",t)},i:function(n){l||(m(s,n),l=!0)},o:function(n){R(s,n),l=!1},d:function(n){n&&A(e),s&&s.d(n)}};return F("SvelteRegisterBlock",{block:a,id:ee.name,type:"if",source:"(39:2) {#if $$slots.lead}",ctx:o}),a}function te(o){let e,t,l;const r=o[22].trail,s=V(r,o,o[21],Pe),a={c:function(){e=D("div"),s&&s.c(),this.h()},l:function(n){e=M(n,"DIV",{class:!0});var c=T(e);s&&s.l(c),c.forEach(A),this.h()},h:function(){g(e,"class",t="app-bar-slot-trail "+o[2]),C(e,Z,45,3,1595)},m:function(n,c){I(n,e,c),s&&s.m(e,null),l=!0},p:function(n,c){s&&s.p&&(!l||c&2097152)&&G(s,r,n,n[21],l?z(r,n[21],c,dt):N(n[21]),Pe),(!l||c&4&&t!==(t="app-bar-slot-trail "+n[2]))&&g(e,"class",t)},i:function(n){l||(m(s,n),l=!0)},o:function(n){R(s,n),l=!1},d:function(n){n&&A(e),s&&s.d(n)}};return F("SvelteRegisterBlock",{block:a,id:te.name,type:"if",source:"(45:2) {#if $$slots.trail}",ctx:o}),a}function oe(o){let e,t,l;const r=o[22].headline,s=V(r,o,o[21],Se),a={c:function(){e=D("div"),s&&s.c(),this.h()},l:function(n){e=M(n,"DIV",{class:!0});var c=T(e);s&&s.l(c),c.forEach(A),this.h()},h:function(){g(e,"class",t="app-bar-row-headline "+o[5]),C(e,Z,50,2,1740)},m:function(n,c){I(n,e,c),s&&s.m(e,null),l=!0},p:function(n,c){s&&s.p&&(!l||c&2097152)&&G(s,r,n,n[21],l?z(r,n[21],c,ut):N(n[21]),Se),(!l||c&32&&t!==(t="app-bar-row-headline "+n[5]))&&g(e,"class",t)},i:function(n){l||(m(s,n),l=!0)},o:function(n){R(s,n),l=!1},d:function(n){n&&A(e),s&&s.d(n)}};return F("SvelteRegisterBlock",{block:a,id:oe.name,type:"if",source:"(50:1) {#if $$slots.headline}",ctx:o}),a}function se(o){let e,t,l,r,s,a,i,n,c,h,P=o[8].lead&&ee(o);const L=o[22].default,k=V(L,o,o[21],null);let _=o[8].trail&&te(o),S=o[8].headline&&oe(o);const w={c:function(){e=D("div"),t=D("div"),P&&P.c(),l=q(),r=D("div"),k&&k.c(),a=q(),_&&_.c(),n=q(),S&&S.c(),this.h()},l:function(u){e=M(u,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var p=T(e);t=M(p,"DIV",{class:!0});var y=T(t);P&&P.l(y),l=J(y),r=M(y,"DIV",{class:!0});var v=T(r);k&&k.l(v),v.forEach(A),a=J(y),_&&_.l(y),y.forEach(A),n=J(p),S&&S.l(p),p.forEach(A),this.h()},h:function(){g(r,"class",s="app-bar-slot-default "+o[3]),C(r,Z,42,2,1477),g(t,"class",i="app-bar-row-main "+o[6]),C(t,Z,36,1,1272),g(e,"class",c="app-bar "+o[7]),g(e,"data-testid","app-bar"),g(e,"role","toolbar"),g(e,"aria-label",o[0]),g(e,"aria-labelledby",o[1]),C(e,Z,34,0,1130)},m:function(u,p){I(u,e,p),j(e,t),P&&P.m(t,null),j(t,l),j(t,r),k&&k.m(r,null),j(t,a),_&&_.m(t,null),j(e,n),S&&S.m(e,null),h=!0},p:function(u,[p]){u[8].lead?P?(P.p(u,p),p&256&&m(P,1)):(P=ee(u),P.c(),m(P,1),P.m(t,l)):P&&(U(),R(P,1,1,()=>{P=null}),K()),k&&k.p&&(!h||p&2097152)&&G(k,L,u,u[21],h?z(L,u[21],p,null):N(u[21]),null),(!h||p&8&&s!==(s="app-bar-slot-default "+u[3]))&&g(r,"class",s),u[8].trail?_?(_.p(u,p),p&256&&m(_,1)):(_=te(u),_.c(),m(_,1),_.m(t,null)):_&&(U(),R(_,1,1,()=>{_=null}),K()),(!h||p&64&&i!==(i="app-bar-row-main "+u[6]))&&g(t,"class",i),u[8].headline?S?(S.p(u,p),p&256&&m(S,1)):(S=oe(u),S.c(),m(S,1),S.m(e,null)):S&&(U(),R(S,1,1,()=>{S=null}),K()),(!h||p&128&&c!==(c="app-bar "+u[7]))&&g(e,"class",c),(!h||p&1)&&g(e,"aria-label",u[0]),(!h||p&2)&&g(e,"aria-labelledby",u[1])},i:function(u){h||(m(P),m(k,u),m(_),m(S),h=!0)},o:function(u){R(P),R(k,u),R(_),R(S),h=!1},d:function(u){u&&A(e),P&&P.d(),k&&k.d(u),_&&_.d(),S&&S.d()}};return F("SvelteRegisterBlock",{block:w,id:se.name,type:"component",source:"",ctx:o}),w}const Ee="flex flex-col",Re="grid items-center",ke="",Ae="flex-none flex justify-between items-center",Be="flex-auto",He="flex-none flex items-center space-x-4";function gt(o,e,t){let l,r,s,a,i,n,{$$slots:c={},$$scope:h}=e;be("AppBar",c,["lead","default","trail","headline"]);const P=Ve(c);let{background:L="bg-surface-100-800-token"}=e,{border:k=""}=e,{padding:_="p-4"}=e,{shadow:S=""}=e,{spacing:w="space-y-4"}=e,{gridColumns:b="grid-cols-[auto_1fr_auto]"}=e,{gap:u="gap-4"}=e,{regionRowMain:p=""}=e,{regionRowHeadline:y=""}=e,{slotLead:v=""}=e,{slotDefault:E=""}=e,{slotTrail:B=""}=e,{label:d=""}=e,{labelledby:O=""}=e;return o.$$set=f=>{t(23,e=W(W({},e),x(f))),"background"in f&&t(9,L=f.background),"border"in f&&t(10,k=f.border),"padding"in f&&t(11,_=f.padding),"shadow"in f&&t(12,S=f.shadow),"spacing"in f&&t(13,w=f.spacing),"gridColumns"in f&&t(14,b=f.gridColumns),"gap"in f&&t(15,u=f.gap),"regionRowMain"in f&&t(16,p=f.regionRowMain),"regionRowHeadline"in f&&t(17,y=f.regionRowHeadline),"slotLead"in f&&t(18,v=f.slotLead),"slotDefault"in f&&t(19,E=f.slotDefault),"slotTrail"in f&&t(20,B=f.slotTrail),"label"in f&&t(0,d=f.label),"labelledby"in f&&t(1,O=f.labelledby),"$$scope"in f&&t(21,h=f.$$scope)},o.$capture_state=()=>({background:L,border:k,padding:_,shadow:S,spacing:w,gridColumns:b,gap:u,regionRowMain:p,regionRowHeadline:y,slotLead:v,slotDefault:E,slotTrail:B,label:d,labelledby:O,cBase:Ee,cRowMain:Re,cRowHeadline:ke,cSlotLead:Ae,cSlotDefault:Be,cSlotTrail:He,classesSlotTrail:n,classesSlotDefault:i,classesSlotLead:a,classesRowHeadline:s,classesRowMain:r,classesBase:l}),o.$inject_state=f=>{t(23,e=W(W({},e),f)),"background"in e&&t(9,L=f.background),"border"in e&&t(10,k=f.border),"padding"in e&&t(11,_=f.padding),"shadow"in e&&t(12,S=f.shadow),"spacing"in e&&t(13,w=f.spacing),"gridColumns"in e&&t(14,b=f.gridColumns),"gap"in e&&t(15,u=f.gap),"regionRowMain"in e&&t(16,p=f.regionRowMain),"regionRowHeadline"in e&&t(17,y=f.regionRowHeadline),"slotLead"in e&&t(18,v=f.slotLead),"slotDefault"in e&&t(19,E=f.slotDefault),"slotTrail"in e&&t(20,B=f.slotTrail),"label"in e&&t(0,d=f.label),"labelledby"in e&&t(1,O=f.labelledby),"classesSlotTrail"in e&&t(2,n=f.classesSlotTrail),"classesSlotDefault"in e&&t(3,i=f.classesSlotDefault),"classesSlotLead"in e&&t(4,a=f.classesSlotLead),"classesRowHeadline"in e&&t(5,s=f.classesRowHeadline),"classesRowMain"in e&&t(6,r=f.classesRowMain),"classesBase"in e&&t(7,l=f.classesBase)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{t(7,l=`${Ee} ${L} ${k} ${w} ${_} ${S} ${e.class??""}`),o.$$.dirty&114688&&t(6,r=`${Re} ${b} ${u} ${p}`),o.$$.dirty&131072&&t(5,s=`${ke} ${y}`),o.$$.dirty&262144&&t(4,a=`${Ae} ${v}`),o.$$.dirty&524288&&t(3,i=`${Be} ${E}`),o.$$.dirty&1048576&&t(2,n=`${He} ${B}`)},e=x(e),[d,O,n,i,a,s,r,l,P,L,k,_,S,w,b,u,p,y,v,E,B,h,c]}class Ke extends ge{constructor(e){super(e),me(this,e,gt,se,he,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1}),F("SvelteRegisterComponent",{component:this,tagName:"AppBar",options:e,id:se.name})}get background(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set background(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get border(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set border(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get padding(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set padding(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get shadow(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set shadow(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get spacing(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set spacing(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gridColumns(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gridColumns(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gap(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gap(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get regionRowMain(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set regionRowMain(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get regionRowHeadline(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set regionRowHeadline(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotLead(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotLead(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotDefault(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotDefault(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotTrail(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotTrail(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get labelledby(){throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set labelledby(e){throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Q="node_modules/@skeletonlabs/skeleton/dist/components/AppShell/AppShell.svelte",mt=o=>({}),Le=o=>({}),bt=o=>({}),Fe=o=>({}),pt=o=>({}),Ce=o=>({}),_t=o=>({}),De=o=>({}),wt=o=>({}),Me=o=>({}),vt=o=>({}),Te=o=>({});function ne(o){let e,t,l;const r=o[19].header,s=V(r,o,o[18],Te),a={c:function(){e=D("header"),s&&s.c(),this.h()},l:function(n){e=M(n,"HEADER",{id:!0,class:!0});var c=T(e);s&&s.l(c),c.forEach(A),this.h()},h:function(){g(e,"id","shell-header"),g(e,"class",t="flex-none "+o[8]),C(e,Q,35,2,1161)},m:function(n,c){I(n,e,c),s&&s.m(e,null),l=!0},p:function(n,c){s&&s.p&&(!l||c&262144)&&G(s,r,n,n[18],l?z(r,n[18],c,vt):N(n[18]),Te),(!l||c&256&&t!==(t="flex-none "+n[8]))&&g(e,"class",t)},i:function(n){l||(m(s,n),l=!0)},o:function(n){R(s,n),l=!1},d:function(n){n&&A(e),s&&s.d(n)}};return F("SvelteRegisterBlock",{block:a,id:ne.name,type:"if",source:"(35:1) {#if $$slots.header}",ctx:o}),a}function le(o){let e,t;const l=o[19].sidebarLeft,r=V(l,o,o[18],Me),s={c:function(){e=D("aside"),r&&r.c(),this.h()},l:function(i){e=M(i,"ASIDE",{id:!0,class:!0});var n=T(e);r&&r.l(n),n.forEach(A),this.h()},h:function(){g(e,"id","sidebar-left"),g(e,"class",o[7]),C(e,Q,42,3,1387)},m:function(i,n){I(i,e,n),r&&r.m(e,null),t=!0},p:function(i,n){r&&r.p&&(!t||n&262144)&&G(r,l,i,i[18],t?z(l,i[18],n,wt):N(i[18]),Me),(!t||n&128)&&g(e,"class",i[7])},i:function(i){t||(m(r,i),t=!0)},o:function(i){R(r,i),t=!1},d:function(i){i&&A(e),r&&r.d(i)}};return F("SvelteRegisterBlock",{block:s,id:le.name,type:"if",source:"(42:2) {#if $$slots.sidebarLeft}",ctx:o}),s}function re(o){let e,t,l;const r=o[19].pageHeader,s=V(r,o,o[18],De),a=s||We(o),i={c:function(){e=D("header"),a&&a.c(),this.h()},l:function(c){e=M(c,"HEADER",{id:!0,class:!0});var h=T(e);a&&a.l(h),h.forEach(A),this.h()},h:function(){g(e,"id","page-header"),g(e,"class",t="flex-none "+o[5]),C(e,Q,49,4,1660)},m:function(c,h){I(c,e,h),a&&a.m(e,null),l=!0},p:function(c,h){s&&s.p&&(!l||h&262144)&&G(s,r,c,c[18],l?z(r,c[18],h,_t):N(c[18]),De),(!l||h&32&&t!==(t="flex-none "+c[5]))&&g(e,"class",t)},i:function(c){l||(m(a,c),l=!0)},o:function(c){R(a,c),l=!1},d:function(c){c&&A(e),a&&a.d(c)}};return F("SvelteRegisterBlock",{block:i,id:re.name,type:"if",source:"(49:3) {#if $$slots.pageHeader}",ctx:o}),i}function We(o){let e;const t={c:function(){e=Ge("(slot:header)")},l:function(r){e=Ne(r,"(slot:header)")},m:function(r,s){I(r,e,s)},d:function(r){r&&A(e)}};return F("SvelteRegisterBlock",{block:t,id:We.name,type:"fallback",source:"(50:91) (slot:header)",ctx:o}),t}function ie(o){let e,t,l;const r=o[19].pageFooter,s=V(r,o,o[18],Ce),a=s||Xe(o),i={c:function(){e=D("footer"),a&&a.c(),this.h()},l:function(c){e=M(c,"FOOTER",{id:!0,class:!0});var h=T(e);a&&a.l(h),h.forEach(A),this.h()},h:function(){g(e,"id","page-footer"),g(e,"class",t="flex-none "+o[3]),C(e,Q,57,4,1973)},m:function(c,h){I(c,e,h),a&&a.m(e,null),l=!0},p:function(c,h){s&&s.p&&(!l||h&262144)&&G(s,r,c,c[18],l?z(r,c[18],h,pt):N(c[18]),Ce),(!l||h&8&&t!==(t="flex-none "+c[3]))&&g(e,"class",t)},i:function(c){l||(m(a,c),l=!0)},o:function(c){R(a,c),l=!1},d:function(c){c&&A(e),a&&a.d(c)}};return F("SvelteRegisterBlock",{block:i,id:ie.name,type:"if",source:"(57:3) {#if $$slots.pageFooter}",ctx:o}),i}function Xe(o){let e;const t={c:function(){e=Ge("(slot:footer)")},l:function(r){e=Ne(r,"(slot:footer)")},m:function(r,s){I(r,e,s)},d:function(r){r&&A(e)}};return F("SvelteRegisterBlock",{block:t,id:Xe.name,type:"fallback",source:"(58:91) (slot:footer)",ctx:o}),t}function ae(o){let e,t;const l=o[19].sidebarRight,r=V(l,o,o[18],Fe),s={c:function(){e=D("aside"),r&&r.c(),this.h()},l:function(i){e=M(i,"ASIDE",{id:!0,class:!0});var n=T(e);r&&r.l(n),n.forEach(A),this.h()},h:function(){g(e,"id","sidebar-right"),g(e,"class",o[6]),C(e,Q,63,3,2174)},m:function(i,n){I(i,e,n),r&&r.m(e,null),t=!0},p:function(i,n){r&&r.p&&(!t||n&262144)&&G(r,l,i,i[18],t?z(l,i[18],n,bt):N(i[18]),Fe),(!t||n&64)&&g(e,"class",i[6])},i:function(i){t||(m(r,i),t=!0)},o:function(i){R(r,i),t=!1},d:function(i){i&&A(e),r&&r.d(i)}};return F("SvelteRegisterBlock",{block:s,id:ae.name,type:"if",source:"(63:2) {#if $$slots.sidebarRight}",ctx:o}),s}function ce(o){let e,t,l;const r=o[19].footer,s=V(r,o,o[18],Le),a={c:function(){e=D("footer"),s&&s.c(),this.h()},l:function(n){e=M(n,"FOOTER",{id:!0,class:!0});var c=T(e);s&&s.l(c),c.forEach(A),this.h()},h:function(){g(e,"id","shell-footer"),g(e,"class",t="flex-none "+o[2]),C(e,Q,69,2,2329)},m:function(n,c){I(n,e,c),s&&s.m(e,null),l=!0},p:function(n,c){s&&s.p&&(!l||c&262144)&&G(s,r,n,n[18],l?z(r,n[18],c,mt):N(n[18]),Le),(!l||c&4&&t!==(t="flex-none "+n[2]))&&g(e,"class",t)},i:function(n){l||(m(s,n),l=!0)},o:function(n){R(s,n),l=!1},d:function(n){n&&A(e),s&&s.d(n)}};return F("SvelteRegisterBlock",{block:a,id:ce.name,type:"if",source:"(69:1) {#if $$slots.footer}",ctx:o}),a}function fe(o){let e,t,l,r,s,a,i,n,c,h,P,L,k,_,S,w=o[10].header&&ne(o),b=o[10].sidebarLeft&&le(o),u=o[10].pageHeader&&re(o);const p=o[19].default,y=V(p,o,o[18],null);let v=o[10].pageFooter&&ie(o),E=o[10].sidebarRight&&ae(o),B=o[10].footer&&ce(o);const d={c:function(){e=D("div"),w&&w.c(),t=q(),l=D("div"),b&&b.c(),r=q(),s=D("div"),u&&u.c(),a=q(),i=D("main"),y&&y.c(),c=q(),v&&v.c(),P=q(),E&&E.c(),L=q(),B&&B.c(),this.h()},l:function(f){e=M(f,"DIV",{id:!0,class:!0,"data-testid":!0});var H=T(e);w&&w.l(H),t=J(H),l=M(H,"DIV",{class:!0});var X=T(l);b&&b.l(X),r=J(X),s=M(X,"DIV",{id:!0,class:!0});var Y=T(s);u&&u.l(Y),a=J(Y),i=M(Y,"MAIN",{id:!0,class:!0});var _e=T(i);y&&y.l(_e),_e.forEach(A),c=J(Y),v&&v.l(Y),Y.forEach(A),P=J(X),E&&E.l(X),X.forEach(A),L=J(H),B&&B.l(H),H.forEach(A),this.h()},h:function(){g(i,"id","page-content"),g(i,"class",n="flex-auto "+o[4]),C(i,Q,53,3,1831),g(s,"id","page"),g(s,"class",h=o[1]+" "+ue),we(s,"scrollbar-gutter",o[0]),C(s,Q,46,2,1502),g(l,"class","flex-auto "+Ye),C(l,Q,39,1,1285),g(e,"id","appShell"),g(e,"class",o[9]),g(e,"data-testid","app-shell"),C(e,Q,32,0,1050)},m:function(f,H){I(f,e,H),w&&w.m(e,null),j(e,t),j(e,l),b&&b.m(l,null),j(l,r),j(l,s),u&&u.m(s,null),j(s,a),j(s,i),y&&y.m(i,null),j(s,c),v&&v.m(s,null),j(l,P),E&&E.m(l,null),j(e,L),B&&B.m(e,null),k=!0,_||(S=nt(s,"scroll",o[20],!1,!1,!1,!1),_=!0)},p:function(f,[H]){f[10].header?w?(w.p(f,H),H&1024&&m(w,1)):(w=ne(f),w.c(),m(w,1),w.m(e,t)):w&&(U(),R(w,1,1,()=>{w=null}),K()),f[10].sidebarLeft?b?(b.p(f,H),H&1024&&m(b,1)):(b=le(f),b.c(),m(b,1),b.m(l,r)):b&&(U(),R(b,1,1,()=>{b=null}),K()),f[10].pageHeader?u?(u.p(f,H),H&1024&&m(u,1)):(u=re(f),u.c(),m(u,1),u.m(s,a)):u&&(U(),R(u,1,1,()=>{u=null}),K()),y&&y.p&&(!k||H&262144)&&G(y,p,f,f[18],k?z(p,f[18],H,null):N(f[18]),null),(!k||H&16&&n!==(n="flex-auto "+f[4]))&&g(i,"class",n),f[10].pageFooter?v?(v.p(f,H),H&1024&&m(v,1)):(v=ie(f),v.c(),m(v,1),v.m(s,null)):v&&(U(),R(v,1,1,()=>{v=null}),K()),(!k||H&2&&h!==(h=f[1]+" "+ue))&&g(s,"class",h),H&1&&we(s,"scrollbar-gutter",f[0]),f[10].sidebarRight?E?(E.p(f,H),H&1024&&m(E,1)):(E=ae(f),E.c(),m(E,1),E.m(l,null)):E&&(U(),R(E,1,1,()=>{E=null}),K()),f[10].footer?B?(B.p(f,H),H&1024&&m(B,1)):(B=ce(f),B.c(),m(B,1),B.m(e,null)):B&&(U(),R(B,1,1,()=>{B=null}),K()),(!k||H&512)&&g(e,"class",f[9])},i:function(f){k||(m(w),m(b),m(u),m(y,f),m(v),m(E),m(B),k=!0)},o:function(f){R(w),R(b),R(u),R(y,f),R(v),R(E),R(B),k=!1},d:function(f){f&&A(e),w&&w.d(),b&&b.d(),u&&u.d(),y&&y.d(f),v&&v.d(),E&&E.d(),B&&B.d(),_=!1,S()}};return F("SvelteRegisterBlock",{block:d,id:fe.name,type:"component",source:"",ctx:o}),d}const je="w-full h-full flex flex-col overflow-hidden",Ye="w-full h-full flex overflow-hidden",ue="flex-1 overflow-x-hidden flex flex-col",Ie="flex-none overflow-x-hidden overflow-y-auto",Oe="flex-none overflow-x-hidden overflow-y-auto";function St(o,e,t){let l,r,s,a,i,n,c,h,{$$slots:P={},$$scope:L}=e;be("AppShell",P,["header","sidebarLeft","pageHeader","default","pageFooter","sidebarRight","footer"]);const k=Ve(P);let{scrollbarGutter:_="auto"}=e,{regionPage:S=""}=e,{slotHeader:w="z-10"}=e,{slotSidebarLeft:b="w-auto"}=e,{slotSidebarRight:u="w-auto"}=e,{slotPageHeader:p=""}=e,{slotPageContent:y=""}=e,{slotPageFooter:v=""}=e,{slotFooter:E=""}=e;function B(d){ot.call(this,o,d)}return o.$$set=d=>{t(21,e=W(W({},e),x(d))),"scrollbarGutter"in d&&t(0,_=d.scrollbarGutter),"regionPage"in d&&t(1,S=d.regionPage),"slotHeader"in d&&t(11,w=d.slotHeader),"slotSidebarLeft"in d&&t(12,b=d.slotSidebarLeft),"slotSidebarRight"in d&&t(13,u=d.slotSidebarRight),"slotPageHeader"in d&&t(14,p=d.slotPageHeader),"slotPageContent"in d&&t(15,y=d.slotPageContent),"slotPageFooter"in d&&t(16,v=d.slotPageFooter),"slotFooter"in d&&t(17,E=d.slotFooter),"$$scope"in d&&t(18,L=d.$$scope)},o.$capture_state=()=>({scrollbarGutter:_,regionPage:S,slotHeader:w,slotSidebarLeft:b,slotSidebarRight:u,slotPageHeader:p,slotPageContent:y,slotPageFooter:v,slotFooter:E,cBaseAppShell:je,cContentArea:Ye,cPage:ue,cSidebarLeft:Ie,cSidebarRight:Oe,classesFooter:h,classesPageFooter:c,classesPageContent:n,classesPageHeader:i,classesSidebarRight:a,classesSidebarLeft:s,classesHeader:r,classesBase:l}),o.$inject_state=d=>{t(21,e=W(W({},e),d)),"scrollbarGutter"in e&&t(0,_=d.scrollbarGutter),"regionPage"in e&&t(1,S=d.regionPage),"slotHeader"in e&&t(11,w=d.slotHeader),"slotSidebarLeft"in e&&t(12,b=d.slotSidebarLeft),"slotSidebarRight"in e&&t(13,u=d.slotSidebarRight),"slotPageHeader"in e&&t(14,p=d.slotPageHeader),"slotPageContent"in e&&t(15,y=d.slotPageContent),"slotPageFooter"in e&&t(16,v=d.slotPageFooter),"slotFooter"in e&&t(17,E=d.slotFooter),"classesFooter"in e&&t(2,h=d.classesFooter),"classesPageFooter"in e&&t(3,c=d.classesPageFooter),"classesPageContent"in e&&t(4,n=d.classesPageContent),"classesPageHeader"in e&&t(5,i=d.classesPageHeader),"classesSidebarRight"in e&&t(6,a=d.classesSidebarRight),"classesSidebarLeft"in e&&t(7,s=d.classesSidebarLeft),"classesHeader"in e&&t(8,r=d.classesHeader),"classesBase"in e&&t(9,l=d.classesBase)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{t(9,l=`${je} ${e.class??""}`),o.$$.dirty&2048&&t(8,r=`${w}`),o.$$.dirty&4096&&t(7,s=`${Ie} ${b}`),o.$$.dirty&8192&&t(6,a=`${Oe} ${u}`),o.$$.dirty&16384&&t(5,i=`${p}`),o.$$.dirty&32768&&t(4,n=`${y}`),o.$$.dirty&65536&&t(3,c=`${v}`),o.$$.dirty&131072&&t(2,h=`${E}`)},e=x(e),[_,S,h,c,n,i,a,s,r,l,k,w,b,u,p,y,v,E,L,P,B]}class Ze extends ge{constructor(e){super(e),me(this,e,St,fe,he,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17}),F("SvelteRegisterComponent",{component:this,tagName:"AppShell",options:e,id:fe.name})}get scrollbarGutter(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scrollbarGutter(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get regionPage(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set regionPage(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotHeader(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotHeader(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotSidebarLeft(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotSidebarLeft(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotSidebarRight(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotSidebarRight(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotPageHeader(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotPageHeader(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotPageContent(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotPageContent(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotPageFooter(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotPageFooter(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotFooter(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotFooter(e){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Pt="src/routes/+layout.svelte";function xe(o){let e;const t=o[0].default,l=V(t,o,o[1],null),r={c:function(){l&&l.c()},l:function(a){l&&l.l(a)},m:function(a,i){l&&l.m(a,i),e=!0},p:function(a,i){l&&l.p&&(!e||i&2)&&G(l,t,a,a[1],e?z(t,a[1],i,null):N(a[1]),null)},i:function(a){e||(m(l,a),e=!0)},o:function(a){R(l,a),e=!1},d:function(a){l&&l.d(a)}};return F("SvelteRegisterBlock",{block:r,id:xe.name,type:"slot",source:"(6:0) <AppShell>",ctx:o}),r}function $e(o){let e,t="stop.gg";const l={c:function(){e=D("strong"),e.textContent=t,this.h()},l:function(s){e=M(s,"STRONG",{class:!0,"data-svelte-h":!0}),lt(e)!=="svelte-16d2bww"&&(e.textContent=t),this.h()},h:function(){g(e,"class","text-xl uppercase font-mono"),C(e,Pt,11,4,243)},m:function(s,a){I(s,e,a)},p:st,d:function(s){s&&A(e)}};return F("SvelteRegisterBlock",{block:l,id:$e.name,type:"slot",source:'(10:3) <svelte:fragment slot=\\"lead\\">',ctx:o}),l}function et(o){let e,t;e=new Ke({props:{$$slots:{lead:[$e]},$$scope:{ctx:o}},$$inline:!0});const l={c:function(){ze(e.$$.fragment)},l:function(s){Qe(e.$$.fragment,s)},m:function(s,a){qe(e,s,a),t=!0},p:function(s,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i:function(s){t||(m(e.$$.fragment,s),t=!0)},o:function(s){R(e.$$.fragment,s),t=!1},d:function(s){Je(e,s)}};return F("SvelteRegisterBlock",{block:l,id:et.name,type:"slot",source:'(7:1) <svelte:fragment slot=\\"header\\">',ctx:o}),l}function de(o){let e,t;e=new Ze({props:{$$slots:{header:[et],default:[xe]},$$scope:{ctx:o}},$$inline:!0});const l={c:function(){ze(e.$$.fragment)},l:function(s){Qe(e.$$.fragment,s)},m:function(s,a){qe(e,s,a),t=!0},p:function(s,[a]){const i={};a&2&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i:function(s){t||(m(e.$$.fragment,s),t=!0)},o:function(s){R(e.$$.fragment,s),t=!1},d:function(s){Je(e,s)}};return F("SvelteRegisterBlock",{block:l,id:de.name,type:"component",source:"",ctx:o}),l}function yt(o,e,t){let{$$slots:l={},$$scope:r}=e;be("Layout",l,["default"]);const s=[];return Object.keys(e).forEach(a=>{!~s.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Layout> was created with unknown prop '${a}'`)}),o.$$set=a=>{"$$scope"in a&&t(1,r=a.$$scope)},o.$capture_state=()=>({AppShell:Ze,AppBar:Ke}),[l,r]}class Bt extends ge{constructor(e){super(e),me(this,e,yt,de,he,{}),F("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:de.name})}}export{Bt as component,At as universal};
