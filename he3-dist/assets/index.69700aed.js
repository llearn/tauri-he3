import{d as i,r as l,H as r,M as c,c as p,w as m,u as t,o as M,j as f,a as s,cg as E,cd as _}from"./index.fa3829f9.js";import{M as v}from"./MultiLineResult.eeac4e9b.js";const x=i({__name:"index",setup(A){const e=l("\u6C26\u4E09.example"),n=l("");r(()=>{u()});function u(){n.value=c.idnEncode(e.value)}return(o,a)=>(M(),p(t(_),{"max-width":1280},{one:m(()=>[f("div",null,[s(t(E),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d),title:o.$t("idnEncoding.input"),onChange:u},null,8,["modelValue","title"]),s(t(v),{result:n.value,"result-desc":o.$t("idnEncoding.output")},null,8,["result","result-desc"])])]),_:1}))}});export{x as default};