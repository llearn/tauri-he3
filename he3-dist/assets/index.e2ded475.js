import{d as b,r as f,as as $,c as k,w as a,u as x,o as C,a as e,j as w,Z as S,h as r,_ as X}from"./index.fa3829f9.js";import{L as Y}from"./layout3.7094ea6f.js";import{C as j}from"./CodeResult.b2a47f5c.js";const B={class:"preview"},z=b({__name:"index",setup(L){const u=f(0),o=f(0),s=f(0),v=f(1),d=f(0),c=$(()=>[`transform:translateX(${u.value}px) translateY(${o.value}px) rotate(${s.value}deg) scale(${v.value}) skew(${d.value}deg);`,`-webkit-transform:translateX(${u.value}px) translateY(${o.value}px) rotate(${s.value}deg) scale(${v.value}) skew(${d.value}deg);`,`-moz-transform:translateX(${u.value}px) translateY(${o.value}px) rotate(${s.value}deg) scale(${v.value}) skew(${d.value}deg);`]),g=$(()=>c.value.join(`
`));return(N,l)=>{const p=r("a-slider"),n=r("a-col"),m=r("a-input-number"),_=r("a-row"),i=r("a-form-item"),y=r("a-form"),U=r("a-divider");return C(),k(x(Y),{"left-width":400},{one:a(()=>[e(y,{"label-col":{span:5},"wrapper-col":{span:16}},{default:a(()=>[e(i,{label:"Translate X"},{default:a(()=>[e(_,null,{default:a(()=>[e(n,{span:18},{default:a(()=>[e(p,{value:u.value,"onUpdate:value":l[0]||(l[0]=t=>u.value=t),min:-100,max:100},null,8,["value"])]),_:1}),e(n,{span:4},{default:a(()=>[e(m,{value:u.value,"onUpdate:value":l[1]||(l[1]=t=>u.value=t),min:-100,max:100,style:{"margin-left":"16px"}},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{label:"Translate Y"},{default:a(()=>[e(_,null,{default:a(()=>[e(n,{span:18},{default:a(()=>[e(p,{value:o.value,"onUpdate:value":l[2]||(l[2]=t=>o.value=t),min:-100,max:100},null,8,["value"])]),_:1}),e(n,{span:4},{default:a(()=>[e(m,{value:o.value,"onUpdate:value":l[3]||(l[3]=t=>o.value=t),min:-100,max:100,style:{"margin-left":"16px"}},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{label:"Rotate"},{default:a(()=>[e(_,null,{default:a(()=>[e(n,{span:18},{default:a(()=>[e(p,{value:s.value,"onUpdate:value":l[4]||(l[4]=t=>s.value=t),min:-180,max:180},null,8,["value"])]),_:1}),e(n,{span:4},{default:a(()=>[e(m,{value:s.value,"onUpdate:value":l[5]||(l[5]=t=>s.value=t),min:-180,max:180,style:{"margin-left":"16px"}},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{label:"Skew"},{default:a(()=>[e(_,null,{default:a(()=>[e(n,{span:18},{default:a(()=>[e(p,{value:d.value,"onUpdate:value":l[6]||(l[6]=t=>d.value=t),min:-90,max:90},null,8,["value"])]),_:1}),e(n,{span:4},{default:a(()=>[e(m,{value:d.value,"onUpdate:value":l[7]||(l[7]=t=>d.value=t),min:-180,max:180,style:{"margin-left":"16px"}},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{label:"Scale"},{default:a(()=>[e(_,null,{default:a(()=>[e(n,{span:18},{default:a(()=>[e(p,{value:v.value,"onUpdate:value":l[8]||(l[8]=t=>v.value=t),min:0,max:4,step:.1},null,8,["value","step"])]),_:1}),e(n,{span:4},{default:a(()=>[e(m,{value:v.value,"onUpdate:value":l[9]||(l[9]=t=>v.value=t),min:0,max:4,style:{"margin-left":"16px"}},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U),e(x(j),{code:x(g),lang:"CSS"},null,8,["code"])]),two:a(()=>[w("div",B,[w("div",{class:"item",style:S(x(c).join(";"))},null,4)])]),_:1})}}});const I=X(z,[["__scopeId","data-v-6c9d9e7d"]]);export{I as default};