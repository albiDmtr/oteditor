const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/html2pdf.o4qhX1yN.js","../chunks/stores.BlWUnD7I.js","../chunks/entry.DWC4pRc1.js","../chunks/scheduler.BNZeKrfj.js","../chunks/environment.BwIdyy6-.js","../chunks/preload-helper.D6kgxu3v.js"])))=>i.map(i=>d[i]);
import{s as Je,e as j,q as D,z as M,a as E,b as $,x as ae,w as P,A as T,d as i,k as f,i as C,y as u,E as B,o as Ie,G as de,D as De,H as Ke,F as Qe,L as X,p as we,v as We,Z as Ye,m as Ce,l as ie,B as xe,I as je,J as Ee}from"../chunks/scheduler.BNZeKrfj.js";import{S as Ue,i as Ge,c as fe,b as ce,m as ue,t as ee,a as te,d as he,f as et,e as tt,g as lt}from"../chunks/index.D5VrrNi7.js";import{e as me}from"../chunks/each.te9pOleI.js";import{g as st}from"../chunks/entry.DWC4pRc1.js";import{S as nt}from"../chunks/Sidebar.BA-ceGGV.js";import{f as re,a as G,c as ot,b as Ae,d as at,s as rt,e as it}from"../chunks/stores.BlWUnD7I.js";import{S as Ze}from"../chunks/System3dModel.Ch-7YWE3.js";import{B as Xe}from"../chunks/Button.D-NdZsbg.js";import{_ as ft}from"../chunks/preload-helper.D6kgxu3v.js";const ct=({params:a})=>({id:a.id}),zt=Object.freeze(Object.defineProperty({__proto__:null,load:ct},Symbol.toStringTag,{value:"Module"}));function He(a,e,t){const l=a.slice();return l[8]=e[t].name,l[9]=e[t].iframe,l}function Ve(a){let e,t=me(a[1]),l=[];for(let n=0;n<t.length;n+=1)l[n]=Le(He(a,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=de()},l(n){for(let o=0;o<l.length;o+=1)l[o].l(n);e=de()},m(n,o){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(n,o);C(n,e,o)},p(n,o){if(o&2){t=me(n[1]);let s;for(s=0;s<t.length;s+=1){const r=He(n,t,s);l[s]?l[s].p(r,o):(l[s]=Le(r),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}},d(n){n&&i(e),De(l,n)}}}function Le(a){var b,g,m;let e,t,l=a[8]+"",n,o,s,r=((m=(g=(b=a[9])==null?void 0:b.contentDocument)==null?void 0:g.querySelector(".mpld3-figure"))==null?void 0:m.outerHTML)+"",c;return{c(){e=j("div"),t=j("p"),n=M(l),o=D(),s=new Ke(!1),c=D(),this.h()},l(_){e=E(_,"DIV",{style:!0});var w=$(e);t=E(w,"P",{style:!0,class:!0});var k=$(t);n=T(k,l),k.forEach(i),o=P(w),s=Qe(w,!1),c=P(w),w.forEach(i),this.h()},h(){X(t,"position","absolute"),X(t,"top","8px"),X(t,"left","50%"),X(t,"font-size","16px"),X(t,"font-weight","550"),X(t,"color","rgba(0, 0, 0, 0.9)"),X(t,"transform","translateX(-50%)"),f(t,"class","svelte-1j8thkp"),s.a=c,f(e,"style",`background: white;
                        border-radius: 0.5em;
                        width: 648px;
                        height: 500px;
                        overflow: hidden;
                        margin: 26px auto;
                        padding: 22px 0 42px 42px;
                        position: relative;
                        border: solid 2px rgb(240, 240, 240);`)},m(_,w){C(_,e,w),u(e,t),u(t,n),u(e,o),s.m(r,e),u(e,c)},p(_,w){var k,d,h;w&2&&l!==(l=_[8]+"")&&B(n,l),w&2&&r!==(r=((h=(d=(k=_[9])==null?void 0:k.contentDocument)==null?void 0:d.querySelector(".mpld3-figure"))==null?void 0:h.outerHTML)+"")&&s.p(r)},d(_){_&&i(e)}}}function ut(a){let e,t,l,n=`<img class="main-logo svelte-1j8thkp" src="../icon.svg" alt="logo"/>
            OpenTorsion Editor`,o,s,r,c,b="Analysis Results",g,m,_=re(new Date().toISOString())+"",w,k,d,h,y,I,p,A=G(a[2].name,20)+"",O,Z,V,W=re(a[2].date)+"",le,Y,L,se=a[2].components.reduce(Be,0)+"",ne,v,S,R,q=a[2].components.length+"",N,J,K=a[2].components.length>1?"components":"component",_e,ye,pe,oe,Pe='<p class="svelte-1j8thkp">OpenTorsion Editor</p> <p class="svelte-1j8thkp">2024, Aalto IIC</p>',Q;h=new Ze({props:{data:a[2],size:220}});let z=a[0]&&a[1]&&Ve(a);return{c(){e=j("div"),t=j("div"),l=j("span"),l.innerHTML=n,o=D(),s=j("div"),r=j("div"),c=j("h1"),c.textContent=b,g=D(),m=j("h2"),w=M(_),k=D(),d=j("div"),fe(h.$$.fragment),y=D(),I=j("div"),p=j("h4"),O=M(A),Z=D(),V=j("p"),le=M(W),Y=D(),L=j("p"),ne=M(se),v=M(`\r
                        elements`),S=D(),R=j("p"),N=M(q),J=D(),_e=M(K),ye=D(),z&&z.c(),pe=D(),oe=j("footer"),oe.innerHTML=Pe,this.h()},l(H){e=E(H,"DIV",{class:!0});var F=$(e);t=E(F,"DIV",{class:!0});var U=$(t);l=E(U,"SPAN",{class:!0,"data-svelte-h":!0}),ae(l)!=="svelte-1o1ctct"&&(l.innerHTML=n),o=P(U),s=E(U,"DIV",{class:!0});var ve=$(s);r=E(ve,"DIV",{class:!0});var ge=$(r);c=E(ge,"H1",{class:!0,"data-svelte-h":!0}),ae(c)!=="svelte-1fswug"&&(c.textContent=b),g=P(ge),m=E(ge,"H2",{class:!0});var Se=$(m);w=T(Se,_),Se.forEach(i),ge.forEach(i),k=P(ve),d=E(ve,"DIV",{class:!0});var ke=$(d);ce(h.$$.fragment,ke),y=P(ke),I=E(ke,"DIV",{class:!0});var x=$(I);p=E(x,"H4",{class:!0});var Me=$(p);O=T(Me,A),Me.forEach(i),Z=P(x),V=E(x,"P",{class:!0});var Te=$(V);le=T(Te,W),Te.forEach(i),Y=P(x),L=E(x,"P",{class:!0});var $e=$(L);ne=T($e,se),v=T($e,`\r
                        elements`),$e.forEach(i),S=P(x),R=E(x,"P",{class:!0});var be=$(R);N=T(be,q),J=P(be),_e=T(be,K),be.forEach(i),x.forEach(i),ke.forEach(i),ve.forEach(i),ye=P(U),z&&z.l(U),pe=P(U),oe=E(U,"FOOTER",{class:!0,"data-svelte-h":!0}),ae(oe)!=="svelte-33m62l"&&(oe.innerHTML=Pe),U.forEach(i),F.forEach(i),this.h()},h(){f(l,"class","logo-cont svelte-1j8thkp"),f(c,"class","svelte-1j8thkp"),f(m,"class","svelte-1j8thkp"),f(r,"class","main-text svelte-1j8thkp"),f(p,"class","svelte-1j8thkp"),f(V,"class","svelte-1j8thkp"),f(L,"class","svelte-1j8thkp"),f(R,"class","svelte-1j8thkp"),f(I,"class","info-text svelte-1j8thkp"),f(d,"class","info-cont box svelte-1j8thkp"),f(s,"class","main-header box svelte-1j8thkp"),f(oe,"class","svelte-1j8thkp"),f(t,"class","main-pdf-cont svelte-1j8thkp"),f(e,"class","template-cont svelte-1j8thkp")},m(H,F){C(H,e,F),u(e,t),u(t,l),u(t,o),u(t,s),u(s,r),u(r,c),u(r,g),u(r,m),u(m,w),u(s,k),u(s,d),ue(h,d,null),u(d,y),u(d,I),u(I,p),u(p,O),u(I,Z),u(I,V),u(V,le),u(I,Y),u(I,L),u(L,ne),u(L,v),u(I,S),u(I,R),u(R,N),u(R,J),u(R,_e),u(t,ye),z&&z.m(t,null),u(t,pe),u(t,oe),a[5](t),Q=!0},p(H,[F]){const U={};F&4&&(U.data=H[2]),h.$set(U),(!Q||F&4)&&A!==(A=G(H[2].name,20)+"")&&B(O,A),(!Q||F&4)&&W!==(W=re(H[2].date)+"")&&B(le,W),(!Q||F&4)&&se!==(se=H[2].components.reduce(Be,0)+"")&&B(ne,se),(!Q||F&4)&&q!==(q=H[2].components.length+"")&&B(N,q),(!Q||F&4)&&K!==(K=H[2].components.length>1?"components":"component")&&B(_e,K),H[0]&&H[1]?z?z.p(H,F):(z=Ve(H),z.c(),z.m(t,pe)):z&&(z.d(1),z=null)},i(H){Q||(ee(h.$$.fragment,H),Q=!0)},o(H){te(h.$$.fragment,H),Q=!1},d(H){H&&i(e),he(h),z&&z.d(),a[5](null)}}}const Be=(a,e)=>a+e.elements.length;function ht(a,e,t){let{plots:l}=e,{data:n}=e,{ready:o=!1}=e,s=setInterval(()=>{l&&(l!=null&&l.every(m=>{var _,w;return(w=(_=m.iframe)==null?void 0:_.contentDocument)==null?void 0:w.querySelector(".mpld3-figure")}))&&(clearInterval(s),t(0,o=!0))},200),r,c;const b=async()=>{if(r&&c){const _={margin:0,filename:`${G(n.name.replace(/[^a-zA-Z0-9-_()]/g,"-"),16)}-Analysis.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{width:1e3,height:c.offsetHeight,scale:2},jsPDF:{format:[200,c.offsetHeight/5]}};await r().set(_).from(c).save()}};Ie(async()=>{typeof window<"u"&&(r=(await ft(async()=>{const{default:m}=await import("../chunks/html2pdf.o4qhX1yN.js").then(_=>_.h);return{default:m}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)).default)});function g(m){we[m?"unshift":"push"](()=>{c=m,t(3,c)})}return a.$$set=m=>{"plots"in m&&t(1,l=m.plots),"data"in m&&t(2,n=m.data),"ready"in m&&t(0,o=m.ready)},[o,l,n,c,b,g]}class dt extends Ue{constructor(e){super(),Ge(this,e,ht,ut,Je,{plots:1,data:2,ready:0,downloadPdf:4})}get downloadPdf(){return this.$$.ctx[4]}}const mt="http://api.opentorsion.org",_t=mt;function Oe(a,e,t){const l=a.slice();return l[15]=e[t].name,l}function ze(a,e,t){const l=a.slice();return l[15]=e[t].name,l[18]=e[t].html,l[19]=e[t].iframe,l[20]=e,l[21]=t,l}function pt(a){let e,t="",l,n,o="";return{c(){e=j("div"),e.innerHTML=t,l=D(),n=j("div"),n.innerHTML=o,this.h()},l(s){e=E(s,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-2zcmkr"&&(e.innerHTML=t),l=P(s),n=E(s,"DIV",{class:!0,"data-svelte-h":!0}),ae(n)!=="svelte-2zcmkr"&&(n.innerHTML=o),this.h()},h(){f(e,"class","tile loading svelte-vuhlfx"),f(n,"class","tile loading svelte-vuhlfx")},m(s,r){C(s,e,r),C(s,l,r),C(s,n,r)},p:ie,i:ie,o:ie,d(s){s&&(i(e),i(l),i(n))}}}function vt(a){let e,t,l,n,o,s,r="There was an error while fetching the analysis results.",c,b,g;return b=new Xe({props:{icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>',onClick:a[9],color:"var(--main-error-color-dark)",$$slots:{default:[kt]},$$scope:{ctx:a}}}),{c(){e=j("div"),t=j("img"),n=D(),o=j("div"),s=j("p"),s.textContent=r,c=D(),fe(b.$$.fragment),this.h()},l(m){e=E(m,"DIV",{class:!0});var _=$(e);t=E(_,"IMG",{src:!0,alt:!0,class:!0}),n=P(_),o=E(_,"DIV",{class:!0});var w=$(o);s=E(w,"P",{class:!0,"data-svelte-h":!0}),ae(s)!=="svelte-u7a4uy"&&(s.textContent=r),c=P(w),ce(b.$$.fragment,w),w.forEach(i),_.forEach(i),this.h()},h(){xe(t.src,l="./../error.png")||f(t,"src",l),f(t,"alt","Error illustration"),f(t,"class","svelte-vuhlfx"),f(s,"class","svelte-vuhlfx"),f(o,"class","error-desc svelte-vuhlfx"),f(e,"class","error-cont svelte-vuhlfx")},m(m,_){C(m,e,_),u(e,t),u(e,n),u(e,o),u(o,s),u(o,c),ue(b,o,null),g=!0},p(m,_){const w={};_&4194304&&(w.$$scope={dirty:_,ctx:m}),b.$set(w)},i(m){g||(ee(b.$$.fragment,m),g=!0)},o(m){te(b.$$.fragment,m),g=!1},d(m){m&&i(e),he(b)}}}function gt(a){let e,t=me(a[3]),l=[];for(let n=0;n<t.length;n+=1)l[n]=Re(ze(a,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=de()},l(n){for(let o=0;o<l.length;o+=1)l[o].l(n);e=de()},m(n,o){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(n,o);C(n,e,o)},p(n,o){if(o&8){t=me(n[3]);let s;for(s=0;s<t.length;s+=1){const r=ze(n,t,s);l[s]?l[s].p(r,o):(l[s]=Re(r),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}},i:ie,o:ie,d(n){n&&i(e),De(l,n)}}}function kt(a){let e;return{c(){e=M("Retry")},l(t){e=T(t,"Retry")},m(t,l){C(t,e,l)},d(t){t&&i(e)}}}function Re(a){let e,t,l=a[15]+"",n,o,s,r,c,b=a[20],g=a[21],m,_;const w=()=>a[10](s,b,g),k=()=>a[10](null,b,g);return{c(){e=j("div"),t=j("p"),n=M(l),o=D(),s=j("iframe"),m=D(),this.h()},l(d){e=E(d,"DIV",{class:!0,id:!0});var h=$(e);t=E(h,"P",{class:!0});var y=$(t);n=T(y,l),y.forEach(i),o=P(h),s=E(h,"IFRAME",{title:!0,srcdoc:!0,style:!0});var I=$(s);I.forEach(i),m=P(h),h.forEach(i),this.h()},h(){f(t,"class","svelte-vuhlfx"),f(s,"title",r=a[15]),f(s,"srcdoc",c=a[18]),X(s,"width","100%"),X(s,"height","100%"),X(s,"border","none"),f(e,"class","tile main-response svelte-vuhlfx"),f(e,"id",_=a[15].replaceAll(" ",""))},m(d,h){C(d,e,h),u(e,t),u(t,n),u(e,o),u(e,s),w(),u(e,m)},p(d,h){a=d,h&8&&l!==(l=a[15]+"")&&B(n,l),h&8&&r!==(r=a[15])&&f(s,"title",r),h&8&&c!==(c=a[18])&&f(s,"srcdoc",c),(b!==a[20]||g!==a[21])&&(k(),b=a[20],g=a[21],w()),h&8&&_!==(_=a[15].replaceAll(" ",""))&&f(e,"id",_)},d(d){d&&i(e),k()}}}function bt(a){let e,t,l,n,o;return{c(){e=j("a"),t=je("svg"),l=je("path"),n=M(`\r
                Back to System Editor`),this.h()},l(s){e=E(s,"A",{href:!0,class:!0});var r=$(e);t=Ee(r,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var c=$(t);l=Ee(c,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),$(l).forEach(i),c.forEach(i),n=T(r,`\r
                Back to System Editor`),r.forEach(i),this.h()},h(){f(l,"stroke-linecap","round"),f(l,"stroke-linejoin","round"),f(l,"d","M15.75 19.5 8.25 12l7.5-7.5"),f(t,"class","icon-back svelte-vuhlfx"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"fill","none"),f(t,"viewBox","0 0 24 24"),f(t,"stroke-width","1.5"),f(t,"stroke","currentColor"),f(e,"href",o=`/system-editor/${a[7].id}`),f(e,"class","svelte-vuhlfx")},m(s,r){C(s,e,r),u(e,t),u(t,l),u(e,n)},p(s,r){r&128&&o!==(o=`/system-editor/${s[7].id}`)&&f(e,"href",o)},d(s){s&&i(e)}}}function wt(a){let e,t,l,n,o;return{c(){e=j("a"),t=je("svg"),l=je("path"),n=M(`\r
                Back to Component Editor`),this.h()},l(s){e=E(s,"A",{href:!0,class:!0});var r=$(e);t=Ee(r,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var c=$(t);l=Ee(c,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),$(l).forEach(i),c.forEach(i),n=T(r,`\r
                Back to Component Editor`),r.forEach(i),this.h()},h(){f(l,"stroke-linecap","round"),f(l,"stroke-linejoin","round"),f(l,"d","M15.75 19.5 8.25 12l7.5-7.5"),f(t,"class","icon-back svelte-vuhlfx"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"fill","none"),f(t,"viewBox","0 0 24 24"),f(t,"stroke-width","1.5"),f(t,"stroke","currentColor"),f(e,"href",o=`/component-editor/${a[0].id}`),f(e,"class","svelte-vuhlfx")},m(s,r){C(s,e,r),u(e,t),u(t,l),u(e,n)},p(s,r){r&1&&o!==(o=`/component-editor/${s[0].id}`)&&f(e,"href",o)},d(s){s&&i(e)}}}function jt(a){let e;return{c(){e=M(a[6])},l(t){e=T(t,a[6])},m(t,l){C(t,e,l)},p(t,l){l&64&&B(e,t[6])},d(t){t&&i(e)}}}function Et(a){let e,t=G(a[7].json.name,20)+"",l,n,o,s,r=re(a[7].json.date)+"",c,b,g,m=a[7].json.components.reduce(Fe,0)+"",_,w,k,d,h=a[7].json.components.length+"",y,I;return{c(){e=j("h2"),l=M(t),n=D(),o=j("p"),s=M("Created at "),c=M(r),b=D(),g=j("p"),_=M(m),w=M(`\r
                elements`),k=D(),d=j("p"),y=M(h),I=M(" components"),this.h()},l(p){e=E(p,"H2",{class:!0});var A=$(e);l=T(A,t),A.forEach(i),n=P(p),o=E(p,"P",{class:!0});var O=$(o);s=T(O,"Created at "),c=T(O,r),O.forEach(i),b=P(p),g=E(p,"P",{class:!0});var Z=$(g);_=T(Z,m),w=T(Z,`\r
                elements`),Z.forEach(i),k=P(p),d=E(p,"P",{class:!0});var V=$(d);y=T(V,h),I=T(V," components"),V.forEach(i),this.h()},h(){f(e,"class","svelte-vuhlfx"),f(o,"class","svelte-vuhlfx"),f(g,"class","svelte-vuhlfx"),f(d,"class","svelte-vuhlfx")},m(p,A){C(p,e,A),u(e,l),C(p,n,A),C(p,o,A),u(o,s),u(o,c),C(p,b,A),C(p,g,A),u(g,_),u(g,w),C(p,k,A),C(p,d,A),u(d,y),u(d,I)},p(p,A){A&128&&t!==(t=G(p[7].json.name,20)+"")&&B(l,t),A&128&&r!==(r=re(p[7].json.date)+"")&&B(c,r),A&128&&m!==(m=p[7].json.components.reduce(Fe,0)+"")&&B(_,m),A&128&&h!==(h=p[7].json.components.length+"")&&B(y,h)},d(p){p&&(i(e),i(n),i(o),i(b),i(g),i(k),i(d))}}}function yt(a){let e,t=G(a[7].json.components[0].name,20)+"",l,n,o,s,r=re(a[7].json.date)+"",c,b,g,m=a[7].json.components.reduce(qe,0)+"",_,w;return{c(){e=j("h2"),l=M(t),n=D(),o=j("p"),s=M("Analyzed at "),c=M(r),b=D(),g=j("p"),_=M(m),w=M(`\r
                elements`),this.h()},l(k){e=E(k,"H2",{class:!0});var d=$(e);l=T(d,t),d.forEach(i),n=P(k),o=E(k,"P",{class:!0});var h=$(o);s=T(h,"Analyzed at "),c=T(h,r),h.forEach(i),b=P(k),g=E(k,"P",{class:!0});var y=$(g);_=T(y,m),w=T(y,`\r
                elements`),y.forEach(i),this.h()},h(){f(e,"class","svelte-vuhlfx"),f(o,"class","svelte-vuhlfx"),f(g,"class","svelte-vuhlfx")},m(k,d){C(k,e,d),u(e,l),C(k,n,d),C(k,o,d),u(o,s),u(o,c),C(k,b,d),C(k,g,d),u(g,_),u(g,w)},p(k,d){d&128&&t!==(t=G(k[7].json.components[0].name,20)+"")&&B(l,t),d&128&&r!==(r=re(k[7].json.date)+"")&&B(c,r),d&128&&m!==(m=k[7].json.components.reduce(qe,0)+"")&&B(_,m)},d(k){k&&(i(e),i(n),i(o),i(b),i(g))}}}function $t(a){let e;return{c(){e=j("li"),this.h()},l(t){e=E(t,"LI",{class:!0}),$(e).forEach(i),this.h()},h(){f(e,"class","loading svelte-vuhlfx")},m(t,l){C(t,e,l)},p:ie,d(t){t&&i(e)}}}function Ct(a){let e,t=me(a[3]),l=[];for(let n=0;n<t.length;n+=1)l[n]=Ne(Oe(a,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=de()},l(n){for(let o=0;o<l.length;o+=1)l[o].l(n);e=de()},m(n,o){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(n,o);C(n,e,o)},p(n,o){if(o&8){t=me(n[3]);let s;for(s=0;s<t.length;s+=1){const r=Oe(n,t,s);l[s]?l[s].p(r,o):(l[s]=Ne(r),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}},d(n){n&&i(e),De(l,n)}}}function Ne(a){let e,t,l=a[15]+"",n,o,s;return{c(){e=j("li"),t=j("a"),n=M(l),s=D(),this.h()},l(r){e=E(r,"LI",{class:!0});var c=$(e);t=E(c,"A",{href:!0,class:!0});var b=$(t);n=T(b,l),b.forEach(i),s=P(c),c.forEach(i),this.h()},h(){f(t,"href",o=`#${a[15].replaceAll(" ","")}`),f(t,"class","svelte-vuhlfx"),f(e,"class","svelte-vuhlfx")},m(r,c){C(r,e,c),u(e,t),u(t,n),u(e,s)},p(r,c){c&8&&l!==(l=r[15]+"")&&B(n,l),c&8&&o!==(o=`#${r[15].replaceAll(" ","")}`)&&f(t,"href",o)},d(r){r&&i(e)}}}function At(a){let e,t,l,n,o,s="Analysis Plots:",r,c,b;t=new Ze({props:{data:a[7].json,size:240}});function g(h,y){return h[1]?yt:Et}let m=g(a),_=m(a);function w(h,y){if(h[3])return Ct;if(!h[2])return $t}let k=w(a),d=k&&k(a);return{c(){e=j("div"),fe(t.$$.fragment),l=D(),_.c(),n=D(),o=j("h4"),o.textContent=s,r=D(),c=j("ul"),d&&d.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var y=$(e);ce(t.$$.fragment,y),l=P(y),_.l(y),y.forEach(i),n=P(h),o=E(h,"H4",{class:!0,"data-svelte-h":!0}),ae(o)!=="svelte-tg3azj"&&(o.textContent=s),r=P(h),c=E(h,"UL",{class:!0});var I=$(c);d&&d.l(I),I.forEach(i),this.h()},h(){f(e,"class","system-info svelte-vuhlfx"),f(o,"class","plots-header svelte-vuhlfx"),f(c,"class","main-menu svelte-vuhlfx")},m(h,y){C(h,e,y),ue(t,e,null),u(e,l),_.m(e,null),C(h,n,y),C(h,o,y),C(h,r,y),C(h,c,y),d&&d.m(c,null),b=!0},p(h,y){const I={};y&128&&(I.data=h[7].json),t.$set(I),m===(m=g(h))&&_?_.p(h,y):(_.d(1),_=m(h),_&&(_.c(),_.m(e,null))),k===(k=w(h))&&d?d.p(h,y):(d&&d.d(1),d=k&&k(h),d&&(d.c(),d.m(c,null)))},i(h){b||(ee(t.$$.fragment,h),b=!0)},o(h){te(t.$$.fragment,h),b=!1},d(h){h&&(i(e),i(n),i(o),i(r),i(c)),he(t),_.d(),d&&d.d()}}}function It(a){let e,t,l,n,o,s,r,c,b,g,m,_=(a[1]?G(a[7].json.components[0].name,20):G(a[7].json.name,20))+"",w,k,d,h,y,I,p,A,O;const Z=[gt,vt,pt],V=[];function W(v,S){return v[3]?0:v[2]?1:2}n=W(a),o=V[n]=Z[n](a);function le(v,S){return v[1]?wt:bt}let Y=le(a),L=Y(a);d=new Xe({props:{icon:'<svg class="icon-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg>',onClick:a[8],isActive:a[3]!==void 0&&!a[2]&&a[5],$$slots:{default:[jt]},$$scope:{ctx:a}}}),y=new nt({props:{$$slots:{default:[At]},$$scope:{ctx:a}}});function se(v){a[12](v)}let ne={data:a[7].json,plots:a[3]};return a[5]!==void 0&&(ne.ready=a[5]),p=new dt({props:ne}),a[11](p),we.push(()=>et(p,"ready",se)),{c(){e=D(),t=j("main"),l=j("div"),o.c(),s=D(),r=j("div"),c=j("div"),L.c(),b=D(),g=j("h4"),m=M("Analysis of "),w=M(_),k=D(),fe(d.$$.fragment),h=D(),fe(y.$$.fragment),I=D(),fe(p.$$.fragment),this.h()},l(v){We("svelte-ouxpsu",document.head).forEach(i),e=P(v),t=E(v,"MAIN",{class:!0});var R=$(t);l=E(R,"DIV",{class:!0});var q=$(l);o.l(q),q.forEach(i),R.forEach(i),s=P(v),r=E(v,"DIV",{class:!0});var N=$(r);c=E(N,"DIV",{class:!0});var J=$(c);L.l(J),J.forEach(i),b=P(N),g=E(N,"H4",{class:!0});var K=$(g);m=T(K,"Analysis of "),w=T(K,_),K.forEach(i),k=P(N),ce(d.$$.fragment,N),N.forEach(i),h=P(v),ce(y.$$.fragment,v),I=P(v),ce(p.$$.fragment,v),this.h()},h(){document.title="Analysis | OpenTorsion Editor",f(l,"class","tiles-cont svelte-vuhlfx"),f(t,"class","svelte-vuhlfx"),f(c,"class","links svelte-vuhlfx"),f(g,"class","svelte-vuhlfx"),f(r,"class","main-top-bar svelte-vuhlfx")},m(v,S){C(v,e,S),C(v,t,S),u(t,l),V[n].m(l,null),C(v,s,S),C(v,r,S),u(r,c),L.m(c,null),u(r,b),u(r,g),u(g,m),u(g,w),u(r,k),ue(d,r,null),C(v,h,S),ue(y,v,S),C(v,I,S),ue(p,v,S),O=!0},p(v,[S]){let R=n;n=W(v),n===R?V[n].p(v,S):(lt(),te(V[R],1,1,()=>{V[R]=null}),tt(),o=V[n],o?o.p(v,S):(o=V[n]=Z[n](v),o.c()),ee(o,1),o.m(l,null)),Y===(Y=le(v))&&L?L.p(v,S):(L.d(1),L=Y(v),L&&(L.c(),L.m(c,null))),(!O||S&130)&&_!==(_=(v[1]?G(v[7].json.components[0].name,20):G(v[7].json.name,20))+"")&&B(w,_);const q={};S&44&&(q.isActive=v[3]!==void 0&&!v[2]&&v[5]),S&4194368&&(q.$$scope={dirty:S,ctx:v}),d.$set(q);const N={};S&4194446&&(N.$$scope={dirty:S,ctx:v}),y.$set(N);const J={};S&128&&(J.data=v[7].json),S&8&&(J.plots=v[3]),!A&&S&32&&(A=!0,J.ready=v[5],Ye(()=>A=!1)),p.$set(J)},i(v){O||(ee(o),ee(d.$$.fragment,v),ee(y.$$.fragment,v),ee(p.$$.fragment,v),O=!0)},o(v){te(o),te(d.$$.fragment,v),te(y.$$.fragment,v),te(p.$$.fragment,v),O=!1},d(v){v&&(i(e),i(t),i(s),i(r),i(h),i(I)),V[n].d(),L.d(),he(d),he(y,v),a[11](null),he(p,v)}}}const qe=(a,e)=>a+e.elements.length,Fe=(a,e)=>a+e.elements.length;function Dt(a,e,t){var I;let l,n,o;Ce(a,Ae,p=>t(7,l=p)),Ce(a,rt,p=>t(13,n=p)),Ce(a,it,p=>t(14,o=p));let{data:s}=e,r=!1;if(s.id.includes("-")&&o.has(s.id)){r=!0;const[p,A]=ot();A.name=((I=o.get(s.id))==null?void 0:I.name)||"Component",A.components=[o.get(s.id)],Ae.set({id:p,json:A})}else s.id&&n.has(s.id)?Ae.set({id:s.id,json:at(s.id)}):Ie(()=>{st("/")});let c=!1,b,g,m=!1,_="Download Analysis Results";const w=()=>{t(6,_="Downloading..."),g.downloadPdf().then(()=>{t(6,_="Download Analysis Results")})},k=()=>{t(2,c=!1);let p=l.json;fetch(`${_t}/analysis`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then(A=>A.json()).then(A=>{t(3,b=A)}).catch(A=>{t(2,c=!0)})};Ie(()=>{k()});function d(p,A,O){we[p?"unshift":"push"](()=>{A[O].iframe=p,t(3,b)})}function h(p){we[p?"unshift":"push"](()=>{g=p,t(4,g)})}function y(p){m=p,t(5,m)}return a.$$set=p=>{"data"in p&&t(0,s=p.data)},[s,r,c,b,g,m,_,l,w,k,d,h,y]}class Rt extends Ue{constructor(e){super(),Ge(this,e,Dt,It,Je,{data:0})}}export{Rt as component,zt as universal};