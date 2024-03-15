import{M as y}from"./MessageIcon-TxeNSydF.js";import{_,o as m,c as h,a as s,f as p,b as t,t as e,e as l,n as w,w as v,r}from"./index-yuxx1_q5.js";import{S as V}from"./StarFull-7oFF-1K_.js";import{S as k}from"./StarHollow-spiTrjbH.js";const M={},S={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},C=s("path",{d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z",fill:"currentColor"},null,-1),H=[C];function B(i,a){return m(),h("svg",S,H)}const I=_(M,[["render",B]]),D="/DreamBoost/images/home/userIcon36.svg",z={props:{proposals:{type:Object,required:!0}},components:{MessageIcon:y,StarFull:V,StarHollow:k,ArrowUpRight:I},data(){return{randomValue:0}},mounted(){this.randomValue=Math.floor(Math.random()*20)},methods:{}},$={class:"card py-8 px-7 mb-16 border-2 border-primary rounded-4 card-shadow"},j={class:"position-relative"},N=["src"],A={class:"",style:{width:"24px","margin-top":"-2px"}},F={class:"d-none",style:{width:"24px","margin-top":"-2px"}},L={class:"card-body p-0"},R={class:"fs-6 text-primary"},U={href:"",class:"title-hover"},T={class:"card-title title-hover mb-7 fs-5 fw-semibold"},q={class:"d-flex align-items-center gap-3 mb-7 fw-normal text-gray-600 fs-5"},E=s("span",{class:"d-flex justify-content-center align-items-center bg-primary rounded-circle",style:{width:"35px",height:"35px"}},[s("img",{src:D,class:"img-fluid",alt:"DreamBoost Logo"})],-1),O={class:"progress bg-secondary-light mb-7 rounded-pill",style:{height:"10px",width:"100%"},role:"progressbar","aria-label":"Basic example","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"},P={class:"d-flex justify-content-between align-items-center"},G={class:"d-flex me-3"},J=s("p",{class:"mb-0 me-1"},"已募資",-1),K={class:"fw-bold text-danger mb-0"},Q={class:"d-flex align-items-center gap-3"},W={href:""},X={class:"d-flex gap-1 message-star-hover"},Y={class:"d-block text-primary-dark",style:{width:"14px","margin-top":"-1px"}},Z={href:""},ss={class:"d-flex gap-1 message-star-hover"},os={class:"d-block text-secondary-dark",style:{width:"16px","margin-top":"-2px"}},ts={class:"share-hover"},es={class:"d-block",style:{width:"20px","margin-top":"-2px"}};function as(i,a,o,rs,n,ns){var d;const g=r("StarHollow"),c=r("StarFull"),u=r("MessageIcon"),f=r("ArrowUpRight"),x=r("router-link");return m(),h("div",{onClick:a[1]||(a[1]=p(b=>i.$router.push(`/product/${o.proposals.proposalID}/info`),["stop"]))},[s("div",$,[s("div",j,[s("img",{src:o.proposals.proposalMainImage,class:"card-img-top rounded-3 mb-12 object-fit-cover",alt:"提案主要照片",style:{height:"250px"}},null,8,N),s("button",{type:"button",class:"border-0 btn btn-empty d-flex align-items-center p-3 position-absolute top-0 end-0",style:{"z-index":"10"},onClick:a[0]||(a[0]=p(b=>i.$emit("favorite"),["stop"]))},[s("i",A,[t(g)]),s("i",F,[t(c)])])]),s("div",L,[s("span",R,"#"+e(o.proposals.proposalCategory),1),s("a",U,[s("h3",T,e(o.proposals.proposalTitle),1)]),s("h4",q,[E,l(" 發起人："+e((d=o.proposals.customizeProperty)==null?void 0:d.displayName),1)]),s("div",O,[s("div",{class:"progress-bar text-white bg-primary-dark rounded-pill",style:w({width:n.randomValue+66+"%"})},null,4)]),s("div",P,[s("div",G,[J,s("p",K,e(n.randomValue+66)+"%",1)]),s("div",Q,[s("a",W,[s("span",X,[l(e(n.randomValue)+" ",1),s("i",Y,[t(u)])])]),s("a",Z,[s("span",ss,[l(e(n.randomValue+3)+" ",1),s("i",os,[t(c)])])])]),t(x,{to:`/product/${o.proposals.proposalID}/info`},{default:v(()=>[s("span",ts,[s("i",es,[t(f)])])]),_:1},8,["to"])])])])])}const ps=_(z,[["render",as]]);export{ps as C};
