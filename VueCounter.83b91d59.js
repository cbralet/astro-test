import{r as c,c as u,a as r,t as l,o as d}from"./chunks/vendor.cfe8b239.js";var v=(t,e)=>{const n=t.__vccOpts||t;for(const[o,a]of e)n[o]=a;return n};const i={setup(){const t=c(0);return{count:t,add:()=>t.value=t.value+1,subtract:()=>t.value=t.value-1}}},p={id:"vue",class:"counter"};function f(t,e,n,o,a,_){return d(),u("div",p,[r("button",{onClick:e[0]||(e[0]=s=>o.subtract())},"-"),r("pre",null,l(o.count),1),r("button",{onClick:e[1]||(e[1]=s=>o.add())},"+")])}var k=v(i,[["render",f]]);export{k as default};
