(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{313:function(e,t,a){"use strict";a.r(t);var i=a(6),n=a(1),s=a(0),l=a(15),c=a(83),o=a(10),r=a(2),d=a(9),b=a(65),u=a(300),j=a(199);a(150),a(149),a(112),a(299);function f({listKey:e,value:t,onAddUser:a,many:i,isDisabled:s}){const c="authenticated"+e,{data:u}=Object(l.useQuery)(l.gql`
    query User {
      ${c} {
        _label_
        id
      }
    }
  `);if(u&&u[c]){const e=u[c].id;if(null!==t&&(i?t.some(t=>t.id===e):t.id===e))return null;const l=`${i?"Add":"Set as"} ${u[c]._label_}`;return Object(n.jsx)(b.a,{placement:"top",content:l},e=>Object(n.jsx)(d.b,{css:{marginLeft:r.d},variant:"ghost",ref:e,onClick:()=>{a(u[c])},icon:o.n,"aria-label":l,isDisabled:s}))}return null}function m({field:e,value:t}){const{many:a}=e.config,{fullPath:i}=e.getRefList();let s,l=!1,c=i;return a?(s="View List of Related Items",t.length||(l=!0),c=`${c}?!id_in="${t.slice(0,100).map(({id:e})=>e).join(",")}"`):(s="View Item Details",t?c=`${c}/${t.id}`:l=!0),Object(n.jsx)(b.a,{placement:"top",content:s},e=>Object(n.jsx)(d.b,{ref:e,icon:o.k,"aria-label":s,variant:"ghost",css:{marginLeft:r.d},target:"_blank",to:c,isDisabled:l}))}function g({field:e,item:t,onCreate:a,isDisabled:l}){const{list:c,openCreateItemModal:u}=Object(j.e)();let f,m=e.getRefList(),g="Create and add "+m.singular;return t&&t.id&&(f=m.fields.filter(t=>"Relationship"===t.type&&t.config.ref===c.key&&t.config.refFieldPath===e.path).reduce((e,a)=>{const n={_label_:t._label_||"<link to parent>",id:t.id};return Object(i.a)(Object(i.a)({},e),{},{[a.path]:a.config.many?[n]:n})},{})),Object(n.jsx)(s.Fragment,null,Object(n.jsx)(b.a,{placement:"top",content:g},e=>Object(n.jsx)(d.b,{ref:e,onClick:u,icon:o.o,"aria-label":g,variant:"ghost",css:{marginLeft:r.d},isDisabled:l})),Object(n.jsx)(j.a,{prefillData:f,onCreate:({data:e})=>{a(e[m.gqlNames.createMutationName])}}))}t.default=({autoFocus:e,field:t,value:a=[],renderContext:i,errors:s,onChange:l,item:o,list:r,isDisabled:d})=>{const{many:b,ref:O}=t.config,{authStrategy:p}=Object(j.d)(),x="ks-input-"+t.path,h=t.getRefList();return Object(n.jsx)(c.a,null,Object(n.jsx)(c.d,{htmlFor:x,field:t,errors:s}),Object(n.jsx)(c.b,{text:t.adminDoc}),Object(n.jsx)(c.c,null,Object(n.jsx)("div",{css:{flex:1}},Object(n.jsx)(u.a,{autoFocus:e,isMulti:b,field:t,value:a,errors:s,renderContext:i,htmlID:x,onChange:e=>{const{many:a}=t.config;l(a?e?e.map(e=>e.value):[]:e?e.value:null)},isDisabled:d})),Object(n.jsx)(j.b,{list:h},Object(n.jsx)(g,{onCreate:e=>{l(b?a.concat(e):e)},field:t,item:o,list:r,isDisabled:d})),p&&O===p.listKey&&Object(n.jsx)(f,{many:b,onAddUser:e=>{l(b?a.concat(e):e)},value:a,listKey:p.listKey,isDisabled:d}),Object(n.jsx)(m,{field:t,value:a})))}}}]);