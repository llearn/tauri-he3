import{d as T,r as B,v as k,H as A,c as P,w as v,u as g,o as b,b as O,t as I,E as H,j as m,a as w,di as $,h as W}from"./index.fa3829f9.js";import{L as Y}from"./layout4.50af5d66.js";function R(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}else return Array.from(r)}var _=!1;if(typeof window<"u"){var y={get passive(){_=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var L=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),n=[],f=!1,M=-1,c=void 0,h=void 0,S=function(e){return n.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},p=function(e){var t=e||window.event;return S(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},D=function(e){if(h===void 0){var t=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;t&&i>0&&(h=document.body.style.paddingRight,document.body.style.paddingRight=i+"px")}c===void 0&&(c=document.body.style.overflow,document.body.style.overflow="hidden")},F=function(){h!==void 0&&(document.body.style.paddingRight=h,h=void 0),c!==void 0&&(document.body.style.overflow=c,c=void 0)},N=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},X=function(e,t){var i=e.targetTouches[0].clientY-M;return S(e.target)?!1:t&&t.scrollTop===0&&i>0||N(t)&&i<0?p(e):(e.stopPropagation(),!0)},C=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!n.some(function(o){return o.targetElement===e})){var i={targetElement:e,options:t||{}};n=[].concat(R(n),[i]),L?(e.ontouchstart=function(o){o.targetTouches.length===1&&(M=o.targetTouches[0].clientY)},e.ontouchmove=function(o){o.targetTouches.length===1&&X(o,e)},f||(document.addEventListener("touchmove",p,_?{passive:!1}:void 0),f=!0)):D(t)}},x=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}n=n.filter(function(t){return t.targetElement!==e}),L?(e.ontouchstart=null,e.ontouchmove=null,f&&n.length===0&&(document.removeEventListener("touchmove",p,_?{passive:!1}:void 0),f=!1)):n.length||F()};class V{constructor(e,t={}){const i={controlColor:"#FFFFFF",controlShadow:!0,addCircle:!1,addCircleBlur:!0,showLabels:!1,labelOptions:{before:"Before",after:"After",onHover:!1},smoothing:!0,smoothingAmount:100,hoverStart:!1,verticalMode:!1,startingPoint:50,fluidMode:!1};this.settings=Object.assign(i,t),this.safariAgent=navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1,this.el=e,this.images={},this.wrapper=null,this.control=null,this.arrowContainer=null,this.arrowAnimator=[],this.active=!1,this.slideWidth=50,this.lineWidth=2,this.arrowCoordinates={circle:[5,3],standard:[8,0]}}mount(){this.safariAgent&&(this.settings.smoothing=!1),this._shapeContainer(),this._getImages(),this._buildControl(),this._events()}_events(){this.el.addEventListener("mousedown",e=>{this._activate(!0),document.body.classList.add("icv__body"),C(this.el,{reserveScrollBarGap:!0}),this._slideCompare(e)}),this.el.addEventListener("mousemove",e=>this.active&&this._slideCompare(e)),this.el.addEventListener("mouseup",()=>this._activate(!1)),document.body.addEventListener("mouseup",()=>{document.body.classList.remove("icv__body"),x(this.el),this._activate(!1)}),this.control.addEventListener("touchstart",e=>{this._activate(!0),document.body.classList.add("icv__body"),C(this.el,{reserveScrollBarGap:!0})}),this.el.addEventListener("touchmove",e=>{this.active&&this._slideCompare(e)}),this.el.addEventListener("touchend",()=>{this._activate(!1),document.body.classList.remove("icv__body"),x(this.el)}),this.el.addEventListener("mouseenter",()=>{this.settings.hoverStart&&this._activate(!0);let e=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach((t,i)=>{t.style.cssText=`
        ${this.settings.verticalMode?`transform: translateY(${e[1]*(i===0?1:-1)}px);`:`transform: translateX(${e[1]*(i===0?1:-1)}px);`}
        `})}),this.el.addEventListener("mouseleave",()=>{let e=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach((t,i)=>{t.style.cssText=`
        ${this.settings.verticalMode?`transform: translateY(${i===0?`${e[0]}px`:`-${e[0]}px`});`:`transform: translateX(${i===0?`${e[0]}px`:`-${e[0]}px`});`}
        `})})}_slideCompare(e){let t=this.el.getBoundingClientRect(),i=e.touches!==void 0?e.touches[0].clientX-t.left:e.clientX-t.left,o=e.touches!==void 0?e.touches[0].clientY-t.top:e.clientY-t.top,s=this.settings.verticalMode?o/t.height*100:i/t.width*100;s>=0&&s<=100&&(this.settings.verticalMode?this.control.style.top=`calc(${s}% - ${this.slideWidth/2}px)`:this.control.style.left=`calc(${s}% - ${this.slideWidth/2}px)`,this.settings.fluidMode?this.settings.verticalMode?this.wrapper.style.clipPath=`inset(0 0 ${100-s}% 0)`:this.wrapper.style.clipPath=`inset(0 0 0 ${s}%)`:this.settings.verticalMode?this.wrapper.style.height=`calc(${s}%)`:this.wrapper.style.width=`calc(${100-s}%)`)}_activate(e){this.active=e}_shapeContainer(){let e=document.createElement("div"),t=document.createElement("span"),i=document.createElement("span");t.classList.add("icv__label","icv__label-before","keep"),i.classList.add("icv__label","icv__label-after","keep"),this.settings.labelOptions.onHover&&(t.classList.add("on-hover"),i.classList.add("on-hover")),this.settings.verticalMode&&(t.classList.add("vertical"),i.classList.add("vertical")),t.innerHTML=this.settings.labelOptions.before||"Before",i.innerHTML=this.settings.labelOptions.after||"After",this.settings.showLabels&&(this.el.appendChild(t),this.el.appendChild(i)),this.el.classList.add("icv",this.settings.verticalMode?"icv__icv--vertical":"icv__icv--horizontal",this.settings.fluidMode?"icv__is--fluid":"standard"),e.classList.add("icv__imposter"),this.el.appendChild(e)}_buildControl(){let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");const s="20";i.classList.add("icv__theme-wrapper");for(var a=0;a<=1;a++){let d=document.createElement("div"),u=`<svg
      height="15"
      width="15"
       style="
       transform: 
       scale(${this.settings.addCircle?.7:1.5})  
       rotateZ(${a===0?this.settings.verticalMode?"-90deg":"180deg":this.settings.verticalMode?"90deg":"0deg"}); height: ${s}px; width: ${s}px;
       
       ${this.settings.controlShadow?`
       -webkit-filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .33));
       filter: drop-shadow( 0px ${a===0?"-3px":"3px"} 5px rgba(0, 0, 0, .33));
       `:""}
       "
       xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 15 15">
       <path ${this.settings.addCircle?'fill="transparent"':`fill="${this.settings.controlColor}"`}
       stroke="${this.settings.controlColor}"
       stroke-linecap="round"
       stroke-width="${this.settings.addCircle?3:0}"
       d="M4.5 1.9L10 7.65l-5.5 5.4"
       />
     </svg>`;d.innerHTML+=u,this.arrowAnimator.push(d),i.appendChild(d)}let l=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach((d,u)=>{d.classList.add("icv__arrow-wrapper"),d.style.cssText=`
      ${this.settings.verticalMode?`transform: translateY(${u===0?`${l[0]}px`:`-${l[0]}px`});`:`transform: translateX(${u===0?`${l[0]}px`:`-${l[0]}px`});`}
      `}),e.classList.add("icv__control"),e.style.cssText=`
    ${this.settings.verticalMode?"height":"width "}: ${this.slideWidth}px;
    ${this.settings.verticalMode?"top":"left "}: calc(${this.settings.startingPoint}% - ${this.slideWidth/2}px);
    ${"ontouchstart"in document.documentElement?"":this.settings.smoothing?`transition: ${this.settings.smoothingAmount}ms ease-out;`:""}
    `,t.classList.add("icv__control-line"),t.style.cssText=`
      ${this.settings.verticalMode?"height":"width "}: ${this.lineWidth}px;
      background: ${this.settings.controlColor};
        ${this.settings.controlShadow?"box-shadow: 0px 0px 15px rgba(0,0,0,0.33);":""}
    `;let E=t.cloneNode(!0);o.classList.add("icv__circle"),o.style.cssText=`

      ${this.settings.addCircleBlur&&"-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)"};
      
      border: ${this.lineWidth}px solid ${this.settings.controlColor};
      ${this.settings.controlShadow&&"box-shadow: 0px 0px 15px rgba(0,0,0,0.33)"};
    `,e.appendChild(t),this.settings.addCircle&&e.appendChild(o),e.appendChild(i),e.appendChild(E),this.arrowContainer=i,this.control=e,this.el.appendChild(e)}_getImages(){let e=this.el.querySelectorAll("img, .keep");this.el.innerHTML="",e.forEach(i=>{this.el.appendChild(i)});let t=[...e].filter(i=>i.nodeName.toLowerCase()==="img");this.settings.verticalMode&&t.reverse();for(let i=0;i<=1;i++){let o=t[i];if(o.classList.add("icv__img"),o.classList.add(i===0?"icv__img-a":"icv__img-b"),i===1){let s=document.createElement("div"),a=t[1].src;s.classList.add("icv__wrapper"),s.style.cssText=`
            width: ${100-this.settings.startingPoint}%; 
            height: ${this.settings.startingPoint}%;

            ${"ontouchstart"in document.documentElement?"":this.settings.smoothing?`transition: ${this.settings.smoothingAmount}ms ease-out;`:""}
            ${this.settings.fluidMode&&`background-image: url(${a}); clip-path: inset(${this.settings.verticalMode?` 0 0 ${100-this.settings.startingPoint}% 0`:`0 0 0 ${this.settings.startingPoint}%`})`}
        `,s.appendChild(o),this.wrapper=s,this.el.appendChild(this.wrapper)}}if(this.settings.fluidMode){let i=t[0].src,o=document.createElement("div");o.classList.add("icv__fluidwrapper"),o.style.cssText=`
 
        background-image: url(${i});
        
      `,this.el.appendChild(o)}}}const j=V;const z={key:0,class:"image-replace"},G=["src"],q=["src"],J=T({__name:"index",setup(r){const e=B(),t=k({before:"",after:""});A(()=>{new j(e.value,{smoothing:!1}).mount()});const i=s=>{t.before=`file://${s.path}`},o=s=>{t.after=`file://${s.path}`};return(s,a)=>{const l=W("a-space");return b(),P(g(Y),{"right-width":150},{one:v(()=>[!t.before&&!t.after?(b(),O("div",z,I(s.$t("imageCompare.pickImage")),1)):H("",!0),m("div",{ref_key:"imageCompareRef",ref:e,id:"image-compare"},[m("img",{src:t.before},null,8,G),m("img",{src:t.after},null,8,q)],512)]),two:v(()=>[w(l,{direction:"vertical"},{default:v(()=>[w(g($),{title:s.$t("imageCompare.pickLeft"),"handle-file-selected":i},null,8,["title"]),w(g($),{title:s.$t("imageCompare.pickRight"),"handle-file-selected":o},null,8,["title"])]),_:1})]),_:1})}}});export{J as default};
