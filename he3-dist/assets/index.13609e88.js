import{d as O,q as H,r as o,n as k,M as F,c as i,w as t,u as e,o as d,j as L,a,cQ as r,fi as N,E as C,fj as M,fk as w,dr as S,cr as K,co as I,R,t as U,cS as B,cd as V,_ as T}from"./index.fa3829f9.js";import{M as G}from"./MultiLineResult.eeac4e9b.js";const j={class:"generator"},z=O({__name:"index",setup(A){const{t:u}=H(),P=o(""),g=o(""),c=o(2048),h=o([{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096}]),s=o("OpenSSH"),x=o([{label:"OpenSSH",value:"OpenSSH"},{label:"Putty",value:"Putty"},{label:"PEM",value:"Pem"}]),m=o(""),b=o(""),v=o("OpenSSH"),E=o([{label:"OpenSSH",value:"OpenSSH"},{label:"PEM",value:"Pem"}]),f=o(""),y=k.exports.debounce(()=>{p()},500);function p(){F.generateRSAKeyPair({keySize:c.value,privateKeyFormat:s.value,publicKeyFormat:v.value,passphrase:m.value,privateKeyComment:b.value,publicKeyComment:f.value,pemCharPerLine:72}).then(_=>{P.value=_.privateKey,g.value=_.publicKey})}return p(),(_,l)=>(d(),i(e(V),{"max-width":1280},{one:t(()=>[L("div",j,[a(e(B),{"label-col":{span:8},"wrapper-col":{span:12},size:"small",compact:""},{default:t(()=>[s.value==="OpenSSH"||s.value==="Putty"||s.value==="Pem"?(d(),i(e(r),{key:0,label:e(u)("rsaGenerator.private.passphrase")},{default:t(()=>[a(e(N),{value:m.value,"onUpdate:value":l[0]||(l[0]=n=>m.value=n),onChange:e(y)},null,8,["value","onChange"])]),_:1},8,["label"])):C("",!0),a(e(M),{ghost:"",class:"collapse"},{default:t(()=>[a(e(w),{header:e(u)("rsaGenerator.advance")},{default:t(()=>[a(e(r),{label:e(u)("rsaGenerator.keyLength")},{default:t(()=>[a(e(S),{value:c.value,"onUpdate:value":l[1]||(l[1]=n=>c.value=n),options:h.value,onChange:p},null,8,["value","options"])]),_:1},8,["label"]),a(e(r),{label:e(u)("rsaGenerator.private.format")},{default:t(()=>[a(e(S),{value:s.value,"onUpdate:value":l[2]||(l[2]=n=>s.value=n),options:x.value,onChange:p},null,8,["value","options"])]),_:1},8,["label"]),s.value==="Putty"?(d(),i(e(r),{key:0,label:e(u)("rsaGenerator.private.comment")},{default:t(()=>[a(e(K),{value:b.value,"onUpdate:value":l[3]||(l[3]=n=>b.value=n),onChange:e(y)},null,8,["value","onChange"])]),_:1},8,["label"])):C("",!0),a(e(r),{label:e(u)("rsaGenerator.public.format")},{default:t(()=>[a(e(S),{value:v.value,"onUpdate:value":l[4]||(l[4]=n=>v.value=n),options:E.value,onChange:p},null,8,["value","options"])]),_:1},8,["label"]),v.value==="OpenSSH"?(d(),i(e(r),{key:1,label:e(u)("rsaGenerator.public.comment")},{default:t(()=>[a(e(K),{value:f.value,"onUpdate:value":l[5]||(l[5]=n=>f.value=n),onChange:e(y)},null,8,["value","onChange"])]),_:1},8,["label"])):C("",!0)]),_:1},8,["header"])]),_:1}),a(e(r),{"wrapper-col":{offset:8,span:12}},{default:t(()=>[a(e(I),{type:"primary",onClick:p},{default:t(()=>[R(U(e(u)("common.generate")),1)]),_:1})]),_:1})]),_:1}),a(e(G),{result:g.value,"result-desc":e(u)("rsaGenerator.public.result")},null,8,["result","result-desc"]),a(e(G),{result:P.value,"result-desc":e(u)("rsaGenerator.private.result")},null,8,["result","result-desc"])])]),_:1}))}});const J=T(z,[["__scopeId","data-v-f7e2a1f1"]]);export{J as default};
