import{s as B,n as I,r as R}from"../chunks/scheduler.e108d1fd.js";import{S as F,i as M,g,s as A,m as P,e as T,h as x,j as O,y,c as E,f as u,n as S,k as C,a as k,x as h,z as N,A as z,B as $,o as w,r as q,C as H,u as U,v as X,d as D,t as G,w as J}from"../chunks/index.ffdf5588.js";const K=!0,oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"})),Q={200:["ácido sórbico","200"],201:["sorbato de sódio","201"],202:["sorbato de potássio","202"],203:["sorbato de potássio","203"],223:["metabissulfito de sódio","223"],281:["propionato de sódio","281"],282:["propionato de cálcio","282"],283:["propionato de potássio","283"],322:["lecitina de soja","lecitina","322"],327:["lactato de cálcio","327"],339:["fosfato de sódio"],412:["goma guar","412"],415:["goma xantana","415"],435:["polisorbato 60","435"],450:["pirofosfato ácido de sódio","pirofosfato dissódico","450"],471:["mono e diglicerídeos","471"],476:["pgpr","ricinoleato de glicerila","poliglicerol polirricinoleato","polirricinoleato de poliglicerol","476"],542:["fosfato de cálcio","fosfatos de cálcio","542"],"500ii":["bicarbonato de sódio","carbonato ácido de sódio","500ii"],"503ii":["bicarbonato de amônio","carbonato ácido de amônio","503ii"],"450i":["difosfato dissódico","450i"],"451i":["fosfato ácido de alumínio e sódio","fosfato de alumínio e sódio","451i"],"482i":["estearoil lactitato de cálcio","482i"],"481i":["estearoil lactilato de sódio","481i"],"472e":["ésteres de ácido diacetil tartárico","ésteres de mono e diglicerídeos de ácidos graxos com ácido diacetil tartárico","diacetil tartárico","472e"],"331iii":["citrato de sódio","citrato tri-sódico","331"],"460i":["celulose microcristalina","460"]};function L(m){let e,t,r="Aditivos presentes:",s,i,b,o,a,n="Ingredientes não analizados:",p,c;return{c(){e=g("p"),t=g("span"),t.textContent=r,s=A(),i=P(m[1]),b=A(),o=g("p"),a=g("span"),a.textContent=n,p=A(),c=P(m[2]),this.h()},l(f){e=x(f,"P",{});var v=O(e);t=x(v,"SPAN",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1qfpefc"&&(t.textContent=r),s=E(v),i=S(v,m[1]),v.forEach(u),b=E(f),o=x(f,"P",{});var l=O(o);a=x(l,"SPAN",{class:!0,"data-svelte-h":!0}),y(a)!=="svelte-rcibkt"&&(a.textContent=n),p=E(l),c=S(l,m[2]),l.forEach(u),this.h()},h(){C(t,"class","bold svelte-1lsxb03"),C(a,"class","bold svelte-1lsxb03")},m(f,v){k(f,e,v),h(e,t),h(e,s),h(e,i),k(f,b,v),k(f,o,v),h(o,a),h(o,p),h(o,c)},p(f,v){v&2&&w(i,f[1]),v&4&&w(c,f[2])},d(f){f&&(u(e),u(b),u(o))}}}function V(m){let e,t,r="Lista de Ingredientes:",s,i,b,o,a,n,p,c,f,v,l=m[1]&&L(m);return{c(){e=g("form"),t=g("label"),t.textContent=r,s=A(),i=g("textarea"),b=A(),o=g("button"),a=P("Analizar"),p=A(),l&&l.c(),c=T(),this.h()},l(d){e=x(d,"FORM",{});var _=O(e);t=x(_,"LABEL",{for:!0,"data-svelte-h":!0}),y(t)!=="svelte-12jtn6o"&&(t.textContent=r),s=E(_),i=x(_,"TEXTAREA",{id:!0,name:!0,class:!0}),O(i).forEach(u),b=E(_),o=x(_,"BUTTON",{});var j=O(o);a=S(j,"Analizar"),j.forEach(u),_.forEach(u),p=E(d),l&&l.l(d),c=T(),this.h()},h(){var d;C(t,"for","listOfIngredients"),C(i,"id","listOfIngredients"),C(i,"name","listOfIngredients"),C(i,"class","svelte-1lsxb03"),o.disabled=n=!((d=m[0])!=null&&d.length)},m(d,_){k(d,e,_),h(e,t),h(e,s),h(e,i),N(i,m[0]),h(e,b),h(e,o),h(o,a),k(d,p,_),l&&l.m(d,_),k(d,c,_),f||(v=[z(i,"input",m[4]),z(e,"submit",$(m[3]))],f=!0)},p(d,[_]){var j;_&1&&N(i,d[0]),_&1&&n!==(n=!((j=d[0])!=null&&j.length))&&(o.disabled=n),d[1]?l?l.p(d,_):(l=L(d),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null)},i:I,o:I,d(d){d&&(u(e),u(p),u(c)),l&&l.d(d),f=!1,R(v)}}}function W(m,e,t){let r,s,i;function b(){let a=r.toLowerCase();t(1,s="");for(const[n,p]of Object.entries(Q))for(const c of p)if(a.search(new RegExp(c))!==-1){a=a.split(c).join(""),t(1,s+=n+", ");break}s?t(1,s=s.slice(0,-2)+"."):t(1,s="Nada encontrado."),t(2,i=a),console.log("matched:",s)}function o(){r=this.value,t(0,r)}return[r,s,i,b,o]}class Y extends F{constructor(e){super(),M(this,e,W,V,B,{})}}function Z(m){let e,t,r,s,i="Analisador de ingredientes",b,o,a;return o=new Y({}),{c(){e=g("meta"),t=A(),r=g("section"),s=g("h1"),s.textContent=i,b=A(),q(o.$$.fragment),this.h()},l(n){const p=H("svelte-1jkadba",document.head);e=x(p,"META",{name:!0,content:!0}),p.forEach(u),t=E(n),r=x(n,"SECTION",{class:!0});var c=O(r);s=x(c,"H1",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-x1juot"&&(s.textContent=i),b=E(c),U(o.$$.fragment,c),c.forEach(u),this.h()},h(){document.title="Additives",C(e,"name","description"),C(e,"content","Experimental for Additives"),C(s,"class","svelte-39krom"),C(r,"class","svelte-39krom")},m(n,p){h(document.head,e),k(n,t,p),k(n,r,p),h(r,s),h(r,b),X(o,r,null),a=!0},p:I,i(n){a||(D(o.$$.fragment,n),a=!0)},o(n){G(o.$$.fragment,n),a=!1},d(n){n&&(u(t),u(r)),u(e),J(o)}}}class se extends F{constructor(e){super(),M(this,e,null,Z,B,{})}}export{se as component,oe as universal};
