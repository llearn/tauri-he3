import{d as m,r as s,n as b,H as v,cs as h,c,w as x,u as t,o as u,a as d,cg as g,E as A,cd as C,h as y,_ as E}from"./index.fa3829f9.js";import{M}from"./MultiLineResult.eeac4e9b.js";const S=m({__name:"index",setup(w){const l=s("1fc05187c8f8f0ef6861ab5fbb9019ceae80f5120d8593b91f5e9d4199e02bb4fad9e9bc314b7514b9b9dadf9e5fac4e"),n=s(""),o=s(!1),f=b.exports.debounce(r,500);v(()=>{r()});async function r(){let e=l.value.toLowerCase().replaceAll(" ","").replaceAll("-","").replaceAll(":","").replaceAll(",","").replaceAll("*","");try{const a=await i(e);o.value=!1,n.value=a}catch(a){o.value=!0,console.error("Convert failed",a)}}function i(e){return h.from(e,"hex").toString("base64")}return(e,a)=>{const _=y("a-alert");return u(),c(t(C),{"max-width":1280},{one:x(()=>[d(t(g),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=p=>l.value=p),title:e.$t("hexToBase64.input"),onChange:t(f),"select-all-on-mount":""},null,8,["modelValue","title","onChange"]),o.value?(u(),c(_,{key:0,class:"alert",message:e.$t("hexToBase64.errMsg"),type:"error"},null,8,["message"])):A("",!0),d(t(M),{"result-desc":e.$t("hexToBase64.result"),result:n.value},null,8,["result-desc","result"])]),_:1})}}});const V=E(S,[["__scopeId","data-v-1410326b"]]);export{V as default};