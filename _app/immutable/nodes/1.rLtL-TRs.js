import{s as L,q as b,e as w,z as M,v as N,d as m,w as E,a as q,b as B,A as S,k as d,B as P,i as H,y as u,E as V,m as Q}from"../chunks/scheduler.BNZeKrfj.js";import{S as R,i as U,c as A,b as O,m as T,t as F,a as J,d as K}from"../chunks/index.D5VrrNi7.js";import{s as W,g as X}from"../chunks/entry.DCR3iCnf.js";import{H as Y}from"../chunks/Header.Ca-wQX0s.js";import{B as Z}from"../chunks/Button.D-NdZsbg.js";const ee=()=>{const s=W;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},te={subscribe(s){return ee().page.subscribe(s)}};function se(s){let r;return{c(){r=M("Go to front page")},l(t){r=S(t,"Go to front page")},m(t,l){H(t,r,l)},d(t){t&&m(r)}}}function re(s){var x;let r,t,l,a,i,j,C,o,g,$=s[0].status+"",z,G,_,v=((x=s[0].error)==null?void 0:x.message)+"",k,I,p,h;return t=new Y({}),p=new Z({props:{color:"rgb(30, 30, 30)",icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>',onClick:s[1],$$slots:{default:[se]},$$scope:{ctx:s}}}),{c(){r=b(),A(t.$$.fragment),l=b(),a=w("div"),i=w("img"),C=b(),o=w("div"),g=w("h1"),z=M($),G=b(),_=w("h4"),k=M(v),I=b(),A(p.$$.fragment),this.h()},l(e){N("svelte-yfhjzk",document.head).forEach(m),r=E(e),O(t.$$.fragment,e),l=E(e),a=q(e,"DIV",{class:!0});var f=B(a);i=q(f,"IMG",{class:!0,src:!0,alt:!0}),C=E(f),o=q(f,"DIV",{class:!0});var c=B(o);g=q(c,"H1",{class:!0});var y=B(g);z=S(y,$),y.forEach(m),G=E(c),_=q(c,"H4",{class:!0});var D=B(_);k=S(D,v),D.forEach(m),I=E(c),O(p.$$.fragment,c),c.forEach(m),f.forEach(m),this.h()},h(){document.title="Error | OpenTorsion Editor",d(i,"class","illustration svelte-w7nqbz"),P(i.src,j="./../error.png")||d(i,"src",j),d(i,"alt","Error illustration"),d(g,"class","svelte-w7nqbz"),d(_,"class","svelte-w7nqbz"),d(o,"class","error-desc svelte-w7nqbz"),d(a,"class","main-page svelte-w7nqbz")},m(e,n){H(e,r,n),T(t,e,n),H(e,l,n),H(e,a,n),u(a,i),u(a,C),u(a,o),u(o,g),u(g,z),u(o,G),u(o,_),u(_,k),u(o,I),T(p,o,null),h=!0},p(e,[n]){var c;(!h||n&1)&&$!==($=e[0].status+"")&&V(z,$),(!h||n&1)&&v!==(v=((c=e[0].error)==null?void 0:c.message)+"")&&V(k,v);const f={};n&4&&(f.$$scope={dirty:n,ctx:e}),p.$set(f)},i(e){h||(F(t.$$.fragment,e),F(p.$$.fragment,e),h=!0)},o(e){J(t.$$.fragment,e),J(p.$$.fragment,e),h=!1},d(e){e&&(m(r),m(l),m(a)),K(t,e),K(p)}}}function ae(s,r,t){let l;return Q(s,te,i=>t(0,l=i)),[l,()=>{X("/")}]}let ue=class extends R{constructor(r){super(),U(this,r,ae,re,L,{})}};export{ue as component};