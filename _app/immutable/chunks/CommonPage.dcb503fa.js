import{s as S,q as V,M as j,a as v,f as T,c as y,g as C,h as I,d as p,j as M,i as g,I as k,Z as O,O as Q,P as Z,Q as z,l as A,m as B,p as F}from"./scheduler.bdaa4df1.js";import{S as G,i as H,f as J,b as q,d as w,m as D,a as d,t as $,e as E}from"./index.49b0a900.js";import{M as K}from"./MainTitle.de67ff74.js";import{T as L}from"./TabTitle.07c1feb7.js";function N(l){let e;return{c(){e=A(l[0])},l(s){e=B(s,l[0])},m(s,r){g(s,e,r)},p(s,r){r&1&&F(e,s[0])},d(s){s&&p(e)}}}function R(l){let e,s,r,f,i,_,n,m;function P(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new L({props:b}),V.push(()=>J(e,"title",P)),i=new K({props:{$$slots:{default:[N]},$$scope:{ctx:l}}});const u=l[1].default,o=j(u,l,l[3],null);return{c(){q(e.$$.fragment),r=v(),f=T("div"),q(i.$$.fragment),_=v(),n=T("div"),o&&o.c(),this.h()},l(t){w(e.$$.fragment,t),r=y(t),f=C(t,"DIV",{class:!0});var a=I(f);w(i.$$.fragment,a),_=y(a),n=C(a,"DIV",{class:!0});var c=I(n);o&&o.l(c),c.forEach(p),a.forEach(p),this.h()},h(){M(n,"class","col gap-5 flex-1"),M(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,a){D(e,t,a),g(t,r,a),g(t,f,a),D(i,f,null),k(f,_),k(f,n),o&&o.m(n,null),m=!0},p(t,[a]){const c={};!s&&a&1&&(s=!0,c.title=t[0],O(()=>s=!1)),e.$set(c);const h={};a&9&&(h.$$scope={dirty:a,ctx:t}),i.$set(h),o&&o.p&&(!m||a&8)&&Q(o,u,t,t[3],m?z(u,t[3],a,null):Z(t[3]),null)},i(t){m||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),m=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),m=!1},d(t){t&&(p(r),p(f)),E(e,t),E(i),o&&o.d(t)}}}function U(l,e,s){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function _(n){i=n,s(0,i)}return l.$$set=n=>{"title"in n&&s(0,i=n.title),"$$scope"in n&&s(3,f=n.$$scope)},[i,r,_,f]}class tt extends G{constructor(e){super(),H(this,e,U,R,S,{title:0})}}export{tt as C};
