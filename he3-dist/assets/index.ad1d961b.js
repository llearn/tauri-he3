import{d as N,aa as H,n as m,r as x,H as T,c as k,w as f,u as c,o as l,j as b,b as u,e as V,t as i,R as h,a as y,F as B,cq as j,cc as z,J as E,cr as F,cd as M,M as $,an as q,h as A,_ as J}from"./index.fa3829f9.js";import{c as C}from"./index.686c53d3.js";const R={class:"wrapper"},G={class:"header"},K={key:0,class:"title"},P={key:1},Q={class:"content"},U=N({__name:"index",props:{clipboardValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(w,{emit:g}){const p=w,{t:d}=H(),O=m.exports.range(2,37),r=x(["1010","12","10","a","a"]),_=x([2,8,10,16,32]),S={2:"Binary",8:"Octal",10:"Decimal",16:"Hex"};T(()=>{var e,a;if((e=p.clipboardValue)!=null&&e.isNumber()){let t=parseInt(p.clipboardValue.getOriginData());g("acceptClipboardCb"),v(t,10,2)}if((a=p.clipboardValue)!=null&&a.isHex())try{let t=parseInt(p.clipboardValue.getOriginData(),16);v(t,10,2),g("acceptClipboardCb")}catch{}});function I(e,a){if(e==="")return!1;try{C(e,a,10)}catch{return!0}return!1}function L(e){_.value.splice(4,1,e);let a=r.value[4];v(a,e,4)}function v(e,a,t){let o="";const s=m.exports.get(e,"target.value",e);if(r.value[t]=s,s===""){r.value=["","","","",""];return}try{o=C(s,a,10)}catch{return}r.value=_.value.map(n=>C(o,10,n).toString())}function D(e){e&&($.writeTextToClipboard(e),q.success(d("common.copySuccess")))}return(e,a)=>{const t=A("a-button");return l(),k(c(M),{"max-width":1280},{one:f(()=>[b("div",R,[(l(!0),u(B,null,V(_.value,(o,s)=>(l(),u("div",{key:o,class:"item"},[b("div",G,[s!==4?(l(),u("span",K,i(c(d)(`baseConversion.${o}`))+" ("+i(S[o])+")",1)):(l(),u("span",P,[h(i(c(d)("baseConversion.base"))+": ",1),y(c(z),{ref_for:!0,ref:"select",value:_.value[4],style:{width:"120px"},size:"small",onChange:L},{default:f(()=>[(l(!0),u(B,null,V(c(O),n=>(l(),k(c(j),{key:n,value:n},{default:f(()=>[h(i(n),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value"])]))]),b("div",Q,[y(c(F),{class:E(I(r.value[s],o)&&"error"),value:r.value[s],onChange:n=>v(n,o,s)},null,8,["class","value","onChange"]),y(t,{class:"copybtn",onClick:n=>D(r.value[s])},{default:f(()=>[h(i(c(d)("common.copy")),1)]),_:2},1032,["onClick"])])]))),128))])]),_:1})}}});const Y=J(U,[["__scopeId","data-v-6599beef"]]);export{Y as default};