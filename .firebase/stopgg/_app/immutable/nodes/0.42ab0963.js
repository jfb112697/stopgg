import{g as tt,s as p,c as j,u as G,d as N,e as q,f as ge,h as X,i as Y,j as ae,r as me,k as oe,l as se,m as U,n as ie,p as lt,q as at,v as st,w as _e,o as it,x as rt}from"../chunks/scheduler.2ceede0e.js";import{S as w,i as x,g as T,s as W,h as y,j as B,c as Q,f as P,k as h,a as O,x as M,d as R,p as J,t as S,b as K,y as ne,z,l as ve,m as ce,n as ue,A as ke,B as Re,o as ot,e as fe,r as $,u as ee,v as te,w as le,C as Ze}from"../chunks/index.35e8ac99.js";import{w as nt,r as ft}from"../chunks/index.00fa2c39.js";import{p as ct}from"../chunks/stores.64e30b1d.js";import{u as pe,a as he,f as we,s as ut,b as dt,d as _t}from"../chunks/docStore.a1a0c116.js";function xe(a,e){const l={},t={},i={$$scope:1};let s=a.length;for(;s--;){const r=a[s],o=e[s];if(o){for(const n in r)n in o||(t[n]=1);for(const n in o)i[n]||(l[n]=o[n],i[n]=1);a[s]=o}else for(const n in r)i[n]=1}for(const r in t)r in l||(l[r]=void 0);return l}const de={};function Le(a){return a==="local"?localStorage:sessionStorage}function be(a,e,l){const t=(l==null?void 0:l.serializer)??JSON,i=(l==null?void 0:l.storage)??"local";function s(r,o){Le(i).setItem(r,t.stringify(o))}if(!de[a]){const r=nt(e,g=>{const E=Le(i).getItem(a);E&&g(t.parse(E));{const d=b=>{b.key===a&&g(b.newValue?t.parse(b.newValue):null)};return window.addEventListener("storage",d),()=>window.removeEventListener("storage",d)}}),{subscribe:o,set:n}=r;de[a]={set(g){s(a,g),n(g)},update(g){const E=g(tt(r));s(a,E),n(E)},subscribe:o}}return de[a]}be("modeOsPrefers",!1);be("modeUserPrefers",void 0);be("modeCurrent",!1);const $e="(prefers-reduced-motion: reduce)";function ht(){return window.matchMedia($e).matches}ft(ht(),a=>{{const e=t=>{a(t.matches)},l=window.matchMedia($e);return l.addEventListener("change",e),()=>{l.removeEventListener("change",e)}}});const gt=a=>({}),Ee=a=>({}),mt=a=>({}),Se=a=>({}),bt=a=>({}),Pe=a=>({});function De(a){let e,l,t;const i=a[22].lead,s=j(i,a,a[21],Pe);return{c(){e=T("div"),s&&s.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var o=B(e);s&&s.l(o),o.forEach(P),this.h()},h(){h(e,"class",l="app-bar-slot-lead "+a[4])},m(r,o){O(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&2097152)&&G(s,i,r,r[21],t?q(i,r[21],o,bt):N(r[21]),Pe),(!t||o&16&&l!==(l="app-bar-slot-lead "+r[4]))&&h(e,"class",l)},i(r){t||(R(s,r),t=!0)},o(r){S(s,r),t=!1},d(r){r&&P(e),s&&s.d(r)}}}function Ce(a){let e,l,t;const i=a[22].trail,s=j(i,a,a[21],Se);return{c(){e=T("div"),s&&s.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var o=B(e);s&&s.l(o),o.forEach(P),this.h()},h(){h(e,"class",l="app-bar-slot-trail "+a[2])},m(r,o){O(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&2097152)&&G(s,i,r,r[21],t?q(i,r[21],o,mt):N(r[21]),Se),(!t||o&4&&l!==(l="app-bar-slot-trail "+r[2]))&&h(e,"class",l)},i(r){t||(R(s,r),t=!0)},o(r){S(s,r),t=!1},d(r){r&&P(e),s&&s.d(r)}}}function He(a){let e,l,t;const i=a[22].headline,s=j(i,a,a[21],Ee);return{c(){e=T("div"),s&&s.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var o=B(e);s&&s.l(o),o.forEach(P),this.h()},h(){h(e,"class",l="app-bar-row-headline "+a[5])},m(r,o){O(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&2097152)&&G(s,i,r,r[21],t?q(i,r[21],o,gt):N(r[21]),Ee),(!t||o&32&&l!==(l="app-bar-row-headline "+r[5]))&&h(e,"class",l)},i(r){t||(R(s,r),t=!0)},o(r){S(s,r),t=!1},d(r){r&&P(e),s&&s.d(r)}}}function vt(a){let e,l,t,i,s,r,o,n,g,E,d=a[8].lead&&De(a);const b=a[22].default,L=j(b,a,a[21],null);let m=a[8].trail&&Ce(a),v=a[8].headline&&He(a);return{c(){e=T("div"),l=T("div"),d&&d.c(),t=W(),i=T("div"),L&&L.c(),r=W(),m&&m.c(),n=W(),v&&v.c(),this.h()},l(_){e=y(_,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var f=B(e);l=y(f,"DIV",{class:!0});var u=B(l);d&&d.l(u),t=Q(u),i=y(u,"DIV",{class:!0});var D=B(i);L&&L.l(D),D.forEach(P),r=Q(u),m&&m.l(u),u.forEach(P),n=Q(f),v&&v.l(f),f.forEach(P),this.h()},h(){h(i,"class",s="app-bar-slot-default "+a[3]),h(l,"class",o="app-bar-row-main "+a[6]),h(e,"class",g="app-bar "+a[7]),h(e,"data-testid","app-bar"),h(e,"role","toolbar"),h(e,"aria-label",a[0]),h(e,"aria-labelledby",a[1])},m(_,f){O(_,e,f),M(e,l),d&&d.m(l,null),M(l,t),M(l,i),L&&L.m(i,null),M(l,r),m&&m.m(l,null),M(e,n),v&&v.m(e,null),E=!0},p(_,[f]){_[8].lead?d?(d.p(_,f),f&256&&R(d,1)):(d=De(_),d.c(),R(d,1),d.m(l,t)):d&&(J(),S(d,1,1,()=>{d=null}),K()),L&&L.p&&(!E||f&2097152)&&G(L,b,_,_[21],E?q(b,_[21],f,null):N(_[21]),null),(!E||f&8&&s!==(s="app-bar-slot-default "+_[3]))&&h(i,"class",s),_[8].trail?m?(m.p(_,f),f&256&&R(m,1)):(m=Ce(_),m.c(),R(m,1),m.m(l,null)):m&&(J(),S(m,1,1,()=>{m=null}),K()),(!E||f&64&&o!==(o="app-bar-row-main "+_[6]))&&h(l,"class",o),_[8].headline?v?(v.p(_,f),f&256&&R(v,1)):(v=He(_),v.c(),R(v,1),v.m(e,null)):v&&(J(),S(v,1,1,()=>{v=null}),K()),(!E||f&128&&g!==(g="app-bar "+_[7]))&&h(e,"class",g),(!E||f&1)&&h(e,"aria-label",_[0]),(!E||f&2)&&h(e,"aria-labelledby",_[1])},i(_){E||(R(d),R(L,_),R(m),R(v),E=!0)},o(_){S(d),S(L,_),S(m),S(v),E=!1},d(_){_&&P(e),d&&d.d(),L&&L.d(_),m&&m.d(),v&&v.d()}}}const kt="flex flex-col",Rt="grid items-center",Lt="",Et="flex-none flex justify-between items-center",St="flex-auto",Pt="flex-none flex items-center space-x-4";function Dt(a,e,l){let t,i,s,r,o,n,{$$slots:g={},$$scope:E}=e;const d=ge(g);let{background:b="bg-surface-100-800-token"}=e,{border:L=""}=e,{padding:m="p-4"}=e,{shadow:v=""}=e,{spacing:_="space-y-4"}=e,{gridColumns:f="grid-cols-[auto_1fr_auto]"}=e,{gap:u="gap-4"}=e,{regionRowMain:D=""}=e,{regionRowHeadline:H=""}=e,{slotLead:k=""}=e,{slotDefault:I=""}=e,{slotTrail:V=""}=e,{label:c=""}=e,{labelledby:A=""}=e;return a.$$set=C=>{l(23,e=X(X({},e),Y(C))),"background"in C&&l(9,b=C.background),"border"in C&&l(10,L=C.border),"padding"in C&&l(11,m=C.padding),"shadow"in C&&l(12,v=C.shadow),"spacing"in C&&l(13,_=C.spacing),"gridColumns"in C&&l(14,f=C.gridColumns),"gap"in C&&l(15,u=C.gap),"regionRowMain"in C&&l(16,D=C.regionRowMain),"regionRowHeadline"in C&&l(17,H=C.regionRowHeadline),"slotLead"in C&&l(18,k=C.slotLead),"slotDefault"in C&&l(19,I=C.slotDefault),"slotTrail"in C&&l(20,V=C.slotTrail),"label"in C&&l(0,c=C.label),"labelledby"in C&&l(1,A=C.labelledby),"$$scope"in C&&l(21,E=C.$$scope)},a.$$.update=()=>{l(7,t=`${kt} ${b} ${L} ${_} ${m} ${v} ${e.class??""}`),a.$$.dirty&114688&&l(6,i=`${Rt} ${f} ${u} ${D}`),a.$$.dirty&131072&&l(5,s=`${Lt} ${H}`),a.$$.dirty&262144&&l(4,r=`${Et} ${k}`),a.$$.dirty&524288&&l(3,o=`${St} ${I}`),a.$$.dirty&1048576&&l(2,n=`${Pt} ${V}`)},e=Y(e),[c,A,n,o,r,s,i,t,d,b,L,m,v,_,f,u,D,H,k,I,V,E,g]}class Ct extends w{constructor(e){super(),x(this,e,Dt,vt,p,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Ht=a=>({}),Ie=a=>({}),It=a=>({}),Fe=a=>({});function Ft(a){let e,l,t,i,s,r,o,n,g,E,d;const b=a[17].lead,L=j(b,a,a[16],Fe),m=a[17].default,v=j(m,a,a[16],null),_=a[17].trail,f=j(_,a,a[16],Ie);return{c(){e=T("div"),l=T("div"),L&&L.c(),i=W(),s=T("div"),v&&v.c(),o=W(),n=T("div"),f&&f.c(),this.h()},l(u){e=y(u,"DIV",{class:!0,"data-testid":!0});var D=B(e);l=y(D,"DIV",{class:!0});var H=B(l);L&&L.l(H),H.forEach(P),i=Q(D),s=y(D,"DIV",{class:!0});var k=B(s);v&&v.l(k),k.forEach(P),o=Q(D),n=y(D,"DIV",{class:!0});var I=B(n);f&&f.l(I),I.forEach(P),D.forEach(P),this.h()},h(){h(l,"class",t="app-bar-lead "+a[2]),h(s,"class",r="app-bar-default "+a[1]),h(n,"class",g="app-bar-trail "+a[0]),h(e,"class",E="app-rail "+a[3]),h(e,"data-testid","app-rail")},m(u,D){O(u,e,D),M(e,l),L&&L.m(l,null),M(e,i),M(e,s),v&&v.m(s,null),M(e,o),M(e,n),f&&f.m(n,null),d=!0},p(u,[D]){L&&L.p&&(!d||D&65536)&&G(L,b,u,u[16],d?q(b,u[16],D,It):N(u[16]),Fe),(!d||D&4&&t!==(t="app-bar-lead "+u[2]))&&h(l,"class",t),v&&v.p&&(!d||D&65536)&&G(v,m,u,u[16],d?q(m,u[16],D,null):N(u[16]),null),(!d||D&2&&r!==(r="app-bar-default "+u[1]))&&h(s,"class",r),f&&f.p&&(!d||D&65536)&&G(f,_,u,u[16],d?q(_,u[16],D,Ht):N(u[16]),Ie),(!d||D&1&&g!==(g="app-bar-trail "+u[0]))&&h(n,"class",g),(!d||D&8&&E!==(E="app-rail "+u[3]))&&h(e,"class",E)},i(u){d||(R(L,u),R(v,u),R(f,u),d=!0)},o(u){S(L,u),S(v,u),S(f,u),d=!1},d(u){u&&P(e),L&&L.d(u),v&&v.d(u),f&&f.d(u)}}}const At="grid grid-rows-[auto_1fr_auto] overflow-y-auto",Vt="box-border",Tt="box-border",yt="box-border";function Bt(a,e,l){let t,i,s,r,{$$slots:o={},$$scope:n}=e,{background:g="bg-surface-100-800-token"}=e,{border:E=""}=e,{width:d="w-20"}=e,{height:b="h-full"}=e,{gap:L="gap-0"}=e,{regionLead:m=""}=e,{regionDefault:v=""}=e,{regionTrail:_=""}=e,{hover:f="bg-primary-hover-token"}=e,{active:u="bg-primary-active-token"}=e,{spacing:D="space-y-1"}=e,{aspectRatio:H="aspect-square"}=e;return ae("active",u),ae("hover",f),ae("spacing",D),ae("aspectRatio",H),a.$$set=k=>{l(18,e=X(X({},e),Y(k))),"background"in k&&l(4,g=k.background),"border"in k&&l(5,E=k.border),"width"in k&&l(6,d=k.width),"height"in k&&l(7,b=k.height),"gap"in k&&l(8,L=k.gap),"regionLead"in k&&l(9,m=k.regionLead),"regionDefault"in k&&l(10,v=k.regionDefault),"regionTrail"in k&&l(11,_=k.regionTrail),"hover"in k&&l(12,f=k.hover),"active"in k&&l(13,u=k.active),"spacing"in k&&l(14,D=k.spacing),"aspectRatio"in k&&l(15,H=k.aspectRatio),"$$scope"in k&&l(16,n=k.$$scope)},a.$$.update=()=>{l(3,t=`${At} ${g} ${E} ${d} ${b} ${L} ${e.class||""}`),a.$$.dirty&512&&l(2,i=`${Vt} ${m}`),a.$$.dirty&1024&&l(1,s=`${Tt} ${v}`),a.$$.dirty&2048&&l(0,r=`${yt} ${_}`)},e=Y(e),[r,s,i,t,g,E,d,b,L,m,v,_,f,u,D,H,n,o]}class Mt extends w{constructor(e){super(),x(this,e,Bt,Ft,p,{background:4,border:5,width:6,height:7,gap:8,regionLead:9,regionDefault:10,regionTrail:11,hover:12,active:13,spacing:14,aspectRatio:15})}}const Ot=a=>({}),Ae=a=>({});function Ve(a){let e,l,t;const i=a[16].lead,s=j(i,a,a[15],Ae);return{c(){e=T("div"),s&&s.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var o=B(e);s&&s.l(o),o.forEach(P),this.h()},h(){h(e,"class",l="app-rail-lead "+a[1])},m(r,o){O(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&32768)&&G(s,i,r,r[15],t?q(i,r[15],o,Ot):N(r[15]),Ae),(!t||o&2&&l!==(l="app-rail-lead "+r[1]))&&h(e,"class",l)},i(r){t||(R(s,r),t=!0)},o(r){S(s,r),t=!1},d(r){r&&P(e),s&&s.d(r)}}}function jt(a){let e,l,t,i,s,r,o,n,g,E,d,b=a[6].lead&&Ve(a);const L=a[16].default,m=j(L,a,a[15],null);let v=[{class:o="app-rail-anchor "+a[3]},{href:n=a[5].href},a[4](),{"data-testid":"app-rail-anchor"}],_={};for(let f=0;f<v.length;f+=1)_=X(_,v[f]);return{c(){e=T("a"),l=T("div"),b&&b.c(),t=W(),i=T("div"),m&&m.c(),this.h()},l(f){e=y(f,"A",{class:!0,href:!0,"data-testid":!0});var u=B(e);l=y(u,"DIV",{class:!0});var D=B(l);b&&b.l(D),t=Q(D),i=y(D,"DIV",{class:!0});var H=B(i);m&&m.l(H),H.forEach(P),D.forEach(P),u.forEach(P),this.h()},h(){h(i,"class",s="app-rail-label "+a[0]),h(l,"class",r="app-rail-wrapper "+a[2]),ne(e,_)},m(f,u){O(f,e,u),M(e,l),b&&b.m(l,null),M(l,t),M(l,i),m&&m.m(i,null),g=!0,E||(d=[z(e,"click",a[17]),z(e,"keydown",a[18]),z(e,"keyup",a[19]),z(e,"keypress",a[20]),z(e,"mouseover",a[21]),z(e,"mouseleave",a[22]),z(e,"focus",a[23]),z(e,"blur",a[24])],E=!0)},p(f,[u]){f[6].lead?b?(b.p(f,u),u&64&&R(b,1)):(b=Ve(f),b.c(),R(b,1),b.m(l,t)):b&&(J(),S(b,1,1,()=>{b=null}),K()),m&&m.p&&(!g||u&32768)&&G(m,L,f,f[15],g?q(L,f[15],u,null):N(f[15]),null),(!g||u&1&&s!==(s="app-rail-label "+f[0]))&&h(i,"class",s),(!g||u&4&&r!==(r="app-rail-wrapper "+f[2]))&&h(l,"class",r),ne(e,_=xe(v,[(!g||u&8&&o!==(o="app-rail-anchor "+f[3]))&&{class:o},(!g||u&32&&n!==(n=f[5].href))&&{href:n},f[4](),{"data-testid":"app-rail-anchor"}]))},i(f){g||(R(b),R(m,f),g=!0)},o(f){S(b),S(m,f),g=!1},d(f){f&&P(e),b&&b.d(),m&&m.d(f),E=!1,me(d)}}}const Gt="unstyled",Nt="w-full flex flex-col justify-center items-stretch text-center space-y-1",qt="font-bold text-xs";function zt(a,e,l){let t,i,s,r,o;const n=["selected","regionLead","regionLabel","hover","active","spacing","aspectRatio"];let g=oe(e,n),{$$slots:E={},$$scope:d}=e;const b=ge(E);let{selected:L=!1}=e,{regionLead:m="flex justify-center items-center"}=e,{regionLabel:v=""}=e,{hover:_=se("hover")}=e,{active:f=se("active")}=e,{spacing:u=se("spacing")}=e,{aspectRatio:D=se("aspectRatio")}=e;function H(){return delete g.class,g}function k(F){U.call(this,a,F)}function I(F){U.call(this,a,F)}function V(F){U.call(this,a,F)}function c(F){U.call(this,a,F)}function A(F){U.call(this,a,F)}function C(F){U.call(this,a,F)}function Z(F){U.call(this,a,F)}function re(F){U.call(this,a,F)}return a.$$set=F=>{l(5,e=X(X({},e),Y(F))),l(25,g=oe(e,n)),"selected"in F&&l(7,L=F.selected),"regionLead"in F&&l(8,m=F.regionLead),"regionLabel"in F&&l(9,v=F.regionLabel),"hover"in F&&l(10,_=F.hover),"active"in F&&l(11,f=F.active),"spacing"in F&&l(12,u=F.spacing),"aspectRatio"in F&&l(13,D=F.aspectRatio),"$$scope"in F&&l(15,d=F.$$scope)},a.$$.update=()=>{a.$$.dirty&2176&&l(14,t=L?f:""),l(3,i=`${Gt} ${e.class||""}`),a.$$.dirty&29696&&l(2,s=`${Nt} ${D} ${_} ${u} ${t}`),a.$$.dirty&256&&l(1,r=`${m}`),a.$$.dirty&512&&l(0,o=`${qt} ${v}`)},e=Y(e),[o,r,s,i,H,e,b,L,m,v,_,f,u,D,t,d,E,k,I,V,c,A,C,Z,re]}class Ut extends w{constructor(e){super(),x(this,e,zt,jt,p,{selected:7,regionLead:8,regionLabel:9,hover:10,active:11,spacing:12,aspectRatio:13})}}const Wt=a=>({}),Te=a=>({}),Qt=a=>({}),ye=a=>({}),Jt=a=>({}),Be=a=>({}),Kt=a=>({}),Me=a=>({}),Xt=a=>({}),Oe=a=>({}),Yt=a=>({}),je=a=>({});function Ge(a){let e,l,t;const i=a[19].header,s=j(i,a,a[18],je);return{c(){e=T("header"),s&&s.c(),this.h()},l(r){e=y(r,"HEADER",{id:!0,class:!0});var o=B(e);s&&s.l(o),o.forEach(P),this.h()},h(){h(e,"id","shell-header"),h(e,"class",l="flex-none "+a[8])},m(r,o){O(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&262144)&&G(s,i,r,r[18],t?q(i,r[18],o,Yt):N(r[18]),je),(!t||o&256&&l!==(l="flex-none "+r[8]))&&h(e,"class",l)},i(r){t||(R(s,r),t=!0)},o(r){S(s,r),t=!1},d(r){r&&P(e),s&&s.d(r)}}}function Ne(a){let e,l;const t=a[19].sidebarLeft,i=j(t,a,a[18],Oe);return{c(){e=T("aside"),i&&i.c(),this.h()},l(s){e=y(s,"ASIDE",{id:!0,class:!0});var r=B(e);i&&i.l(r),r.forEach(P),this.h()},h(){h(e,"id","sidebar-left"),h(e,"class",a[7])},m(s,r){O(s,e,r),i&&i.m(e,null),l=!0},p(s,r){i&&i.p&&(!l||r&262144)&&G(i,t,s,s[18],l?q(t,s[18],r,Xt):N(s[18]),Oe),(!l||r&128)&&h(e,"class",s[7])},i(s){l||(R(i,s),l=!0)},o(s){S(i,s),l=!1},d(s){s&&P(e),i&&i.d(s)}}}function qe(a){let e,l,t;const i=a[19].pageHeader,s=j(i,a,a[18],Me),r=s||Zt();return{c(){e=T("header"),r&&r.c(),this.h()},l(o){e=y(o,"HEADER",{id:!0,class:!0});var n=B(e);r&&r.l(n),n.forEach(P),this.h()},h(){h(e,"id","page-header"),h(e,"class",l="flex-none "+a[5])},m(o,n){O(o,e,n),r&&r.m(e,null),t=!0},p(o,n){s&&s.p&&(!t||n&262144)&&G(s,i,o,o[18],t?q(i,o[18],n,Kt):N(o[18]),Me),(!t||n&32&&l!==(l="flex-none "+o[5]))&&h(e,"class",l)},i(o){t||(R(r,o),t=!0)},o(o){S(r,o),t=!1},d(o){o&&P(e),r&&r.d(o)}}}function Zt(a){let e;return{c(){e=ce("(slot:header)")},l(l){e=ue(l,"(slot:header)")},m(l,t){O(l,e,t)},d(l){l&&P(e)}}}function ze(a){let e,l,t;const i=a[19].pageFooter,s=j(i,a,a[18],Be),r=s||pt();return{c(){e=T("footer"),r&&r.c(),this.h()},l(o){e=y(o,"FOOTER",{id:!0,class:!0});var n=B(e);r&&r.l(n),n.forEach(P),this.h()},h(){h(e,"id","page-footer"),h(e,"class",l="flex-none "+a[3])},m(o,n){O(o,e,n),r&&r.m(e,null),t=!0},p(o,n){s&&s.p&&(!t||n&262144)&&G(s,i,o,o[18],t?q(i,o[18],n,Jt):N(o[18]),Be),(!t||n&8&&l!==(l="flex-none "+o[3]))&&h(e,"class",l)},i(o){t||(R(r,o),t=!0)},o(o){S(r,o),t=!1},d(o){o&&P(e),r&&r.d(o)}}}function pt(a){let e;return{c(){e=ce("(slot:footer)")},l(l){e=ue(l,"(slot:footer)")},m(l,t){O(l,e,t)},d(l){l&&P(e)}}}function Ue(a){let e,l;const t=a[19].sidebarRight,i=j(t,a,a[18],ye);return{c(){e=T("aside"),i&&i.c(),this.h()},l(s){e=y(s,"ASIDE",{id:!0,class:!0});var r=B(e);i&&i.l(r),r.forEach(P),this.h()},h(){h(e,"id","sidebar-right"),h(e,"class",a[6])},m(s,r){O(s,e,r),i&&i.m(e,null),l=!0},p(s,r){i&&i.p&&(!l||r&262144)&&G(i,t,s,s[18],l?q(t,s[18],r,Qt):N(s[18]),ye),(!l||r&64)&&h(e,"class",s[6])},i(s){l||(R(i,s),l=!0)},o(s){S(i,s),l=!1},d(s){s&&P(e),i&&i.d(s)}}}function We(a){let e,l,t;const i=a[19].footer,s=j(i,a,a[18],Te);return{c(){e=T("footer"),s&&s.c(),this.h()},l(r){e=y(r,"FOOTER",{id:!0,class:!0});var o=B(e);s&&s.l(o),o.forEach(P),this.h()},h(){h(e,"id","shell-footer"),h(e,"class",l="flex-none "+a[2])},m(r,o){O(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&262144)&&G(s,i,r,r[18],t?q(i,r[18],o,Wt):N(r[18]),Te),(!t||o&4&&l!==(l="flex-none "+r[2]))&&h(e,"class",l)},i(r){t||(R(s,r),t=!0)},o(r){S(s,r),t=!1},d(r){r&&P(e),s&&s.d(r)}}}function wt(a){let e,l,t,i,s,r,o,n,g,E,d,b,L,m,v,_=a[10].header&&Ge(a),f=a[10].sidebarLeft&&Ne(a),u=a[10].pageHeader&&qe(a);const D=a[19].default,H=j(D,a,a[18],null);let k=a[10].pageFooter&&ze(a),I=a[10].sidebarRight&&Ue(a),V=a[10].footer&&We(a);return{c(){e=T("div"),_&&_.c(),l=W(),t=T("div"),f&&f.c(),i=W(),s=T("div"),u&&u.c(),r=W(),o=T("main"),H&&H.c(),g=W(),k&&k.c(),d=W(),I&&I.c(),b=W(),V&&V.c(),this.h()},l(c){e=y(c,"DIV",{id:!0,class:!0,"data-testid":!0});var A=B(e);_&&_.l(A),l=Q(A),t=y(A,"DIV",{class:!0});var C=B(t);f&&f.l(C),i=Q(C),s=y(C,"DIV",{id:!0,class:!0});var Z=B(s);u&&u.l(Z),r=Q(Z),o=y(Z,"MAIN",{id:!0,class:!0});var re=B(o);H&&H.l(re),re.forEach(P),g=Q(Z),k&&k.l(Z),Z.forEach(P),d=Q(C),I&&I.l(C),C.forEach(P),b=Q(A),V&&V.l(A),A.forEach(P),this.h()},h(){h(o,"id","page-content"),h(o,"class",n="flex-auto "+a[4]),h(s,"id","page"),h(s,"class",E=a[1]+" "+Qe),ve(s,"scrollbar-gutter",a[0]),h(t,"class","flex-auto "+$t),h(e,"id","appShell"),h(e,"class",a[9]),h(e,"data-testid","app-shell")},m(c,A){O(c,e,A),_&&_.m(e,null),M(e,l),M(e,t),f&&f.m(t,null),M(t,i),M(t,s),u&&u.m(s,null),M(s,r),M(s,o),H&&H.m(o,null),M(s,g),k&&k.m(s,null),M(t,d),I&&I.m(t,null),M(e,b),V&&V.m(e,null),L=!0,m||(v=z(s,"scroll",a[20]),m=!0)},p(c,[A]){c[10].header?_?(_.p(c,A),A&1024&&R(_,1)):(_=Ge(c),_.c(),R(_,1),_.m(e,l)):_&&(J(),S(_,1,1,()=>{_=null}),K()),c[10].sidebarLeft?f?(f.p(c,A),A&1024&&R(f,1)):(f=Ne(c),f.c(),R(f,1),f.m(t,i)):f&&(J(),S(f,1,1,()=>{f=null}),K()),c[10].pageHeader?u?(u.p(c,A),A&1024&&R(u,1)):(u=qe(c),u.c(),R(u,1),u.m(s,r)):u&&(J(),S(u,1,1,()=>{u=null}),K()),H&&H.p&&(!L||A&262144)&&G(H,D,c,c[18],L?q(D,c[18],A,null):N(c[18]),null),(!L||A&16&&n!==(n="flex-auto "+c[4]))&&h(o,"class",n),c[10].pageFooter?k?(k.p(c,A),A&1024&&R(k,1)):(k=ze(c),k.c(),R(k,1),k.m(s,null)):k&&(J(),S(k,1,1,()=>{k=null}),K()),(!L||A&2&&E!==(E=c[1]+" "+Qe))&&h(s,"class",E),A&1&&ve(s,"scrollbar-gutter",c[0]),c[10].sidebarRight?I?(I.p(c,A),A&1024&&R(I,1)):(I=Ue(c),I.c(),R(I,1),I.m(t,null)):I&&(J(),S(I,1,1,()=>{I=null}),K()),c[10].footer?V?(V.p(c,A),A&1024&&R(V,1)):(V=We(c),V.c(),R(V,1),V.m(e,null)):V&&(J(),S(V,1,1,()=>{V=null}),K()),(!L||A&512)&&h(e,"class",c[9])},i(c){L||(R(_),R(f),R(u),R(H,c),R(k),R(I),R(V),L=!0)},o(c){S(_),S(f),S(u),S(H,c),S(k),S(I),S(V),L=!1},d(c){c&&P(e),_&&_.d(),f&&f.d(),u&&u.d(),H&&H.d(c),k&&k.d(),I&&I.d(),V&&V.d(),m=!1,v()}}}const xt="w-full h-full flex flex-col overflow-hidden",$t="w-full h-full flex overflow-hidden",Qe="flex-1 overflow-x-hidden flex flex-col",el="flex-none overflow-x-hidden overflow-y-auto",tl="flex-none overflow-x-hidden overflow-y-auto";function ll(a,e,l){let t,i,s,r,o,n,g,E,{$$slots:d={},$$scope:b}=e;const L=ge(d);let{scrollbarGutter:m="auto"}=e,{regionPage:v=""}=e,{slotHeader:_="z-10"}=e,{slotSidebarLeft:f="w-auto"}=e,{slotSidebarRight:u="w-auto"}=e,{slotPageHeader:D=""}=e,{slotPageContent:H=""}=e,{slotPageFooter:k=""}=e,{slotFooter:I=""}=e;function V(c){U.call(this,a,c)}return a.$$set=c=>{l(21,e=X(X({},e),Y(c))),"scrollbarGutter"in c&&l(0,m=c.scrollbarGutter),"regionPage"in c&&l(1,v=c.regionPage),"slotHeader"in c&&l(11,_=c.slotHeader),"slotSidebarLeft"in c&&l(12,f=c.slotSidebarLeft),"slotSidebarRight"in c&&l(13,u=c.slotSidebarRight),"slotPageHeader"in c&&l(14,D=c.slotPageHeader),"slotPageContent"in c&&l(15,H=c.slotPageContent),"slotPageFooter"in c&&l(16,k=c.slotPageFooter),"slotFooter"in c&&l(17,I=c.slotFooter),"$$scope"in c&&l(18,b=c.$$scope)},a.$$.update=()=>{l(9,t=`${xt} ${e.class??""}`),a.$$.dirty&2048&&l(8,i=`${_}`),a.$$.dirty&4096&&l(7,s=`${el} ${f}`),a.$$.dirty&8192&&l(6,r=`${tl} ${u}`),a.$$.dirty&16384&&l(5,o=`${D}`),a.$$.dirty&32768&&l(4,n=`${H}`),a.$$.dirty&65536&&l(3,g=`${k}`),a.$$.dirty&131072&&l(2,E=`${I}`)},e=Y(e),[m,v,E,g,n,o,r,s,i,t,L,_,f,u,D,H,k,I,b,d,V]}class al extends w{constructor(e){super(),x(this,e,ll,wt,p,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}function sl(a){let e,l,t=String(a[1]).substring(0,2).toUpperCase()+"",i,s;return{c(){e=ke("svg"),l=ke("text"),i=ce(t),this.h()},l(r){e=Re(r,"svg",{class:!0,viewBox:!0});var o=B(e);l=Re(o,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var n=B(l);i=ue(n,t),n.forEach(P),o.forEach(P),this.h()},h(){h(l,"x","50%"),h(l,"y","50%"),h(l,"dominant-baseline","central"),h(l,"text-anchor","middle"),h(l,"font-weight","bold"),h(l,"font-size",150),h(l,"class",s="avatar-text "+a[2]),h(e,"class","avatar-initials w-full h-full"),h(e,"viewBox","0 0 512 512")},m(r,o){O(r,e,o),M(e,l),M(l,i)},p(r,o){o&2&&t!==(t=String(r[1]).substring(0,2).toUpperCase()+"")&&ot(i,t),o&4&&s!==(s="avatar-text "+r[2])&&h(l,"class",s)},d(r){r&&P(e)}}}function il(a){let e,l,t,i,s,r,o,n,g=[{class:l="avatar-image "+nl},{style:t=a[8].style??""},{src:i=a[0]},{alt:s=a[8].alt||""},a[7]()],E={};for(let d=0;d<g.length;d+=1)E=X(E,g[d]);return{c(){e=T("img"),this.h()},l(d){e=y(d,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){ne(e,E)},m(d,b){O(d,e,b),o||(n=[lt(r=a[4].call(null,e,a[5])),z(e,"error",a[19])],o=!0)},p(d,b){ne(e,E=xe(g,[{class:l},b&256&&t!==(t=d[8].style??"")&&{style:t},b&1&&!at(e.src,i=d[0])&&{src:i},b&256&&s!==(s=d[8].alt||"")&&{alt:s},d[7]()])),r&&st(r.update)&&b&32&&r.update.call(null,d[5])},d(d){d&&P(e),o=!1,me(n)}}}function rl(a){let e,l,t,i;function s(n,g){return n[0]?il:sl}let r=s(a),o=r(a);return{c(){e=T("figure"),o.c(),this.h()},l(n){e=y(n,"FIGURE",{class:!0,"data-testid":!0});var g=B(e);o.l(g),g.forEach(P),this.h()},h(){h(e,"class",l="avatar "+a[6]),h(e,"data-testid","avatar")},m(n,g){O(n,e,g),o.m(e,null),t||(i=[z(e,"click",a[15]),z(e,"keydown",a[16]),z(e,"keyup",a[17]),z(e,"keypress",a[18])],t=!0)},p(n,[g]){r===(r=s(n))&&o?o.p(n,g):(o.d(1),o=r(n),o&&(o.c(),o.m(e,null))),g&64&&l!==(l="avatar "+n[6])&&h(e,"class",l)},i:ie,o:ie,d(n){n&&P(e),o.d(),t=!1,me(i)}}}let ol="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",nl="w-full h-full object-cover";function fl(a,e,l){let t;const i=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let s=oe(e,i),{initials:r="AB"}=e,{fill:o="fill-token"}=e,{src:n=""}=e,{fallback:g=""}=e,{action:E=()=>{}}=e,{actionParams:d=""}=e,{background:b="bg-surface-400-500-token"}=e,{width:L="w-16"}=e,{border:m=""}=e,{rounded:v="rounded-full"}=e,{shadow:_=""}=e,{cursor:f=""}=e;function u(){return delete s.class,s}function D(c){U.call(this,a,c)}function H(c){U.call(this,a,c)}function k(c){U.call(this,a,c)}function I(c){U.call(this,a,c)}const V=()=>l(0,n=g);return a.$$set=c=>{l(8,e=X(X({},e),Y(c))),l(20,s=oe(e,i)),"initials"in c&&l(1,r=c.initials),"fill"in c&&l(2,o=c.fill),"src"in c&&l(0,n=c.src),"fallback"in c&&l(3,g=c.fallback),"action"in c&&l(4,E=c.action),"actionParams"in c&&l(5,d=c.actionParams),"background"in c&&l(9,b=c.background),"width"in c&&l(10,L=c.width),"border"in c&&l(11,m=c.border),"rounded"in c&&l(12,v=c.rounded),"shadow"in c&&l(13,_=c.shadow),"cursor"in c&&l(14,f=c.cursor)},a.$$.update=()=>{l(6,t=`${ol} ${b} ${L} ${m} ${v} ${_} ${f} ${e.class??""}`)},e=Y(e),[n,r,o,g,E,d,t,u,e,b,L,m,v,_,f,D,H,k,I,V]}class cl extends w{constructor(e){super(),x(this,e,fl,rl,p,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}const et="firebase";function ul(a){ae(et,a)}function dl(){return se(et)}function _l(a){let e;const l=a[4].default,t=j(l,a,a[3],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,s){t&&t.m(i,s),e=!0},p(i,[s]){t&&t.p&&(!e||s&8)&&G(t,l,i,i[3],e?q(l,i[3],s,null):N(i[3]),null)},i(i){e||(R(t,i),e=!0)},o(i){S(t,i),e=!1},d(i){t&&t.d(i)}}}function hl(a,e,l){let{$$slots:t={},$$scope:i}=e,{firestore:s}=e,{auth:r}=e,{storage:o}=e;return ul({firestore:s,auth:r,storage:o}),a.$$set=n=>{"firestore"in n&&l(0,s=n.firestore),"auth"in n&&l(1,r=n.auth),"storage"in n&&l(2,o=n.storage),"$$scope"in n&&l(3,i=n.$$scope)},[s,r,o,i,t]}class gl extends w{constructor(e){super(),x(this,e,hl,_l,p,{firestore:0,auth:1,storage:2})}}const ml=a=>({}),Je=a=>({}),bl=a=>({user:a&1}),Ke=a=>({user:a[0]});function vl(a){let e;const l=a[3].signedOut,t=j(l,a,a[2],Je);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,s){t&&t.m(i,s),e=!0},p(i,s){t&&t.p&&(!e||s&4)&&G(t,l,i,i[2],e?q(l,i[2],s,ml):N(i[2]),Je)},i(i){e||(R(t,i),e=!0)},o(i){S(t,i),e=!1},d(i){t&&t.d(i)}}}function kl(a){let e;const l=a[3].default,t=j(l,a,a[2],Ke);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,s){t&&t.m(i,s),e=!0},p(i,s){t&&t.p&&(!e||s&5)&&G(t,l,i,i[2],e?q(l,i[2],s,bl):N(i[2]),Ke)},i(i){e||(R(t,i),e=!0)},o(i){S(t,i),e=!1},d(i){t&&t.d(i)}}}function Rl(a){let e,l,t,i;const s=[kl,vl],r=[];function o(n,g){return n[0]?0:1}return e=o(a),l=r[e]=s[e](a),{c(){l.c(),t=fe()},l(n){l.l(n),t=fe()},m(n,g){r[e].m(n,g),O(n,t,g),i=!0},p(n,[g]){let E=e;e=o(n),e===E?r[e].p(n,g):(J(),S(r[E],1,1,()=>{r[E]=null}),K(),l=r[e],l?l.p(n,g):(l=r[e]=s[e](n),l.c()),R(l,1),l.m(t.parentNode,t))},i(n){i||(R(l),i=!0)},o(n){S(l),i=!1},d(n){n&&P(t),r[e].d(n)}}}function Ll(a,e,l){let t,{$$slots:i={},$$scope:s}=e;const r=dl().auth,o=pe(r);return _e(a,o,n=>l(0,t=n)),a.$$set=n=>{"$$scope"in n&&l(2,s=n.$$scope)},[t,o,s,i]}class El extends w{constructor(e){super(),x(this,e,Ll,Rl,p,{})}}function Sl(a){let e;const l=a[6].default,t=j(l,a,a[8],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,s){t&&t.m(i,s),e=!0},p(i,s){t&&t.p&&(!e||s&256)&&G(t,l,i,i[8],e?q(l,i[8],s,null):N(i[8]),null)},i(i){e||(R(t,i),e=!0)},o(i){S(t,i),e=!1},d(i){t&&t.d(i)}}}function Pl(a){let e,l="Report Matches";return{c(){e=T("span"),e.textContent=l},l(t){e=y(t,"SPAN",{"data-svelte-h":!0}),Ze(e)!=="svelte-7bqsr9"&&(e.textContent=l)},m(t,i){O(t,e,i)},p:ie,d(t){t&&P(e)}}}function Dl(a){let e;return{c(){e=ce("(icon)")},l(l){e=ue(l,"(icon)")},m(l,t){O(l,e,t)},d(l){l&&P(e)}}}function Cl(a){let e,l;return e=new Ut({props:{href:"/reporting",title:"Reporting",selected:a[2].url.pathname==="/reporting",$$slots:{lead:[Dl],default:[Pl]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,i){te(e,t,i),l=!0},p(t,i){const s={};i&4&&(s.selected=t[2].url.pathname==="/reporting"),i&256&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Hl(a){let e,l;return e=new Mt({props:{$$slots:{default:[Cl]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,i){te(e,t,i),l=!0},p(t,i){const s={};i&260&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Il(a){let e,l="cease.gg",t,i;return{c(){e=T("strong"),e.textContent=l,this.h()},l(s){e=y(s,"STRONG",{class:!0,"data-svelte-h":!0}),Ze(e)!=="svelte-honovf"&&(e.textContent=l),this.h()},h(){h(e,"class","text-xl uppercase font-mono")},m(s,r){O(s,e,r),t||(i=z(e,"click",a[7]),t=!0)},p:ie,d(s){s&&P(e),t=!1,i()}}}function Xe(a){let e,l;return e=new cl({props:{initials:a[1].split(" ").map(Ye).join(""),background:"bg-primary-500"}}),{c(){$(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,i){te(e,t,i),l=!0},p(t,i){const s={};i&2&&(s.initials=t[1].split(" ").map(Ye).join("")),e.$set(s)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Fl(a){let e,l,t=a[1]&&Xe(a);return{c(){t&&t.c(),e=fe()},l(i){t&&t.l(i),e=fe()},m(i,s){t&&t.m(i,s),O(i,e,s),l=!0},p(i,s){i[1]?t?(t.p(i,s),s&2&&R(t,1)):(t=Xe(i),t.c(),R(t,1),t.m(e.parentNode,e)):t&&(J(),S(t,1,1,()=>{t=null}),K())},i(i){l||(R(t),l=!0)},o(i){S(t),l=!1},d(i){i&&P(e),t&&t.d(i)}}}function Al(a){let e,l;return e=new El({props:{$$slots:{default:[Fl,({user:t})=>({3:t}),({user:t})=>t?8:0]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,i){te(e,t,i),l=!0},p(t,i){const s={};i&258&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Vl(a){let e,l;return e=new Ct({props:{$$slots:{trail:[Al],lead:[Il]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,i){te(e,t,i),l=!0},p(t,i){const s={};i&258&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Tl(a){let e,l;return e=new al({props:{$$slots:{header:[Vl],sidebarLeft:[Hl],default:[Sl]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,i){te(e,t,i),l=!0},p(t,i){const s={};i&262&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function yl(a){let e,l;return e=new gl({props:{auth:he,firestore:we,storage:ut,$$slots:{default:[Tl]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,i){te(e,t,i),l=!0},p(t,[i]){const s={};i&262&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}const Ye=a=>a.substring(0,1);function Bl(a,e,l){let t,i=ie,s=()=>(i(),i=rt(d,m=>l(4,t=m)),d),r,o;_e(a,ct,m=>l(2,o=m)),a.$$.on_destroy.push(()=>i());let{$$slots:n={},$$scope:g}=e;const E=pe(he);_e(a,E,m=>l(5,r=m));let d,b=null;it(async()=>{const v=new URLSearchParams(window.location.search).get("token");if(v)try{await dt(he,v)}catch(_){console.error("Authentication failed",_)}});const L=()=>{console.log("t")};return a.$$set=m=>{"$$scope"in m&&l(8,g=m.$$scope)},a.$$.update=()=>{a.$$.dirty&32&&r&&r.uid&&s(l(0,d=_t(we,`users/${r.uid}`))),a.$$.dirty&16&&l(1,b=(t==null?void 0:t.name)||null)},[d,b,o,E,t,r,n,L,g]}class ql extends w{constructor(e){super(),x(this,e,Bl,yl,p,{})}}export{ql as component};
