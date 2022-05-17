import{r as f}from"./chunks/chunk.53e0902c.js";var l={exports:{}},n={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=f.exports,p=60103;n.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;p=a("react.element"),n.Fragment=a("react.fragment")}var m=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x=Object.prototype.hasOwnProperty,y={key:!0,ref:!0,__self:!0,__source:!0};function _(o,r,s){var e,t={},c=null,i=null;s!==void 0&&(c=""+s),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)x.call(r,e)&&!y.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:p,type:o,key:c,ref:i,props:t,_owner:m.current}}n.jsx=_;n.jsxs=_;l.exports=n;var v=l.exports;const{jsx:u,jsxs:b,Fragment:R}=v;function j(){const[o,r]=f.exports.useState(0),s=()=>r(t=>t+1);return b("div",{id:"react",className:"counter",children:[u("button",{onClick:()=>r(t=>t-1),children:"-"}),u("pre",{children:o}),u("button",{onClick:s,children:"+"})]})}export{j as default};
