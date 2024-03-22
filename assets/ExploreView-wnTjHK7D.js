import{_ as x,o,c as a,a as e,f,b as r,t as n,e as h,n as D,w as j,d as c,g as y,m as g,F as w,r as C,l as F,q as H}from"./index-ZKny8dII.js";import{e as $}from"./exploreStore-0RzM94wX.js";import{u as k}from"./userStore-UL1hxTbg.js";import{s as I}from"./sweetAlert2Store-vFUo6cdB.js";import{m as M}from"./mixinFullScreenLoading-9dNja2ki.js";import{M as z}from"./MessageIcon-8I9dQ8cP.js";import{S as A}from"./StarFull-hqQk7cwm.js";import{S as B}from"./StarHollow-RvDE_JVe.js";import{C as L}from"./CuponCircle-uEjuryuY.js";const P={},N={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},U=e("path",{d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z",fill:"currentColor"},null,-1),O=[U];function T(t,s){return o(),a("svg",N,O)}const E=x(P,[["render",T]]),R="/DreamBoost/images/home/userIcon36.svg",q={props:{proposals:{type:Object,required:!0}},components:{MessageIcon:z,StarFull:A,StarHollow:B,ArrowUpRight:E},data(){return{randomValue:0}},mounted(){this.randomValue=Math.floor(Math.random()*20)},methods:{}},W={class:"card py-8 px-7 mb-16 border-2 border-primary rounded-4 card-shadow"},G={class:"position-relative"},J=["src"],K={class:"",style:{width:"24px","margin-top":"-2px"}},Q={class:"d-none",style:{width:"24px","margin-top":"-2px"}},X={class:"card-body p-0"},Y={class:"fs-6 text-primary"},Z={href:"",class:"title-hover"},ee={class:"card-title title-hover mb-7 fs-5 fw-semibold"},te={class:"d-flex align-items-center gap-3 mb-7 fw-normal text-gray-600 fs-5"},se=e("span",{class:"d-flex justify-content-center align-items-center bg-primary rounded-circle",style:{width:"35px",height:"35px"}},[e("img",{src:R,class:"img-fluid",alt:"DreamBoost Logo"})],-1),oe={class:"progress bg-secondary-light mb-7 rounded-pill",style:{height:"10px",width:"100%"},role:"progressbar","aria-label":"Basic example","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"},ae={class:"d-flex justify-content-between align-items-center"},re={class:"d-flex me-3"},le=e("p",{class:"mb-0 me-1"},"已募資",-1),ie={class:"fw-bold text-danger mb-0"},ne={class:"d-flex align-items-center gap-3"},ce={href:""},de={class:"d-flex gap-1 message-star-hover"},pe={class:"d-block text-primary-dark",style:{width:"14px","margin-top":"-1px"}},me={href:""},ue={class:"d-flex gap-1 message-star-hover"},_e={class:"d-block text-secondary-dark",style:{width:"16px","margin-top":"-2px"}},he={class:"share-hover"},ge={class:"d-block",style:{width:"20px","margin-top":"-2px"}};function fe(t,s,l,S,d,p){var v;const _=c("StarHollow"),u=c("StarFull"),i=c("MessageIcon"),m=c("ArrowUpRight"),b=c("router-link");return o(),a("div",{onClick:s[1]||(s[1]=f(V=>t.$router.push(`/product/${l.proposals.proposalID}/info`),["stop"]))},[e("div",W,[e("div",G,[e("img",{src:l.proposals.proposalMainImage,class:"card-img-top rounded-3 mb-12 object-fit-cover",alt:"提案主要照片",style:{height:"250px"}},null,8,J),e("button",{type:"button",class:"border-0 btn btn-empty d-flex align-items-center p-3 position-absolute top-0 end-0",style:{"z-index":"10"},onClick:s[0]||(s[0]=f(V=>t.$emit("favorite"),["stop"]))},[e("i",K,[r(_)]),e("i",Q,[r(u)])])]),e("div",X,[e("span",Y,"#"+n(l.proposals.proposalCategory),1),e("a",Z,[e("h3",ee,n(l.proposals.proposalTitle),1)]),e("h4",te,[se,h(" 發起人："+n((v=l.proposals.customizeProperty)==null?void 0:v.displayName),1)]),e("div",oe,[e("div",{class:"progress-bar text-white bg-primary-dark rounded-pill",style:D({width:d.randomValue+66+"%"})},null,4)]),e("div",ae,[e("div",re,[le,e("p",ie,n(d.randomValue+66)+"%",1)]),e("div",ne,[e("a",ce,[e("span",de,[h(n(d.randomValue)+" ",1),e("i",pe,[r(i)])])]),e("a",me,[e("span",ue,[h(n(d.randomValue+3)+" ",1),e("i",_e,[r(u)])])])]),r(b,{to:`/product/${l.proposals.proposalID}/info`},{default:j(()=>[e("span",he,[e("i",ge,[r(m)])])]),_:1},8,["to"])])])])])}const xe=x(q,[["render",fe]]),be={components:{CouponCircle:L,CardDefault:xe},data(){return{selectedCategory:null,filteredProposals:[{id:1,name:"挺好夢"},{id:2,name:"科技設計"},{id:3,name:"健康生活"},{id:4,name:"時尚"},{id:5,name:"公共在地"},{id:6,name:"美妝"}]}},mixins:[M],computed:{...y($,["proposals"]),...y(k,["userData"]),filteredData(){return this.selectedCategory?Object.values(this.proposals).filter(t=>t.proposalCategory===this.selectedCategory):Object.values(this.proposals)}},async mounted(){await this.showFullScreenLoading(),await this.getProposals(),await this.getUserData(),setTimeout(()=>{this.hideFullScreenLoading()},1500)},methods:{...g($,["getProposals"]),...g(k,["getUserData"]),...g(I,["errorAlert"]),favoriteHandler(){if(Object.values(this.userData).includes("")){const s=localStorage.getItem("userID");this.$router.push(`userboard/${s}/personal`),setTimeout(()=>{this.$route.path.startsWith("/userboard")&&this.errorAlert("需先完成會員資料")},1500)}},filterCategory(t){this.selectedCategory=t}}},ve={class:"container"},ye=F('<div class="d-flex justify-content-center mt-15 mb-5 position-relative"><div class="mb-5 mb-lg-3"><h1 class="title-center text-center position-relative">探索專案</h1><p class="fs-6 text-primary-light text-center mb-0">Explore Projects</p></div></div><div class="row col-12 col-lg-7 col-xl-6 mx-auto align-items-center"><div class="col-7 col-lg-6 mb-8 mx-auto"><label class="fw-medium mb-1" for="pr">專案狀態</label><select class="form-select col-3 border-primary" aria-label="Default select example"><option selected value="1" class="">進行中</option><option value="2">成功專案</option><option value="3">即將推出</option></select></div><div class="col-7 col-lg-6 mb-8 mx-auto"><label class="fw-medium mb-1" for="pr">專案排序</label><select class="form-select col-3 border-primary" aria-label="Default select example"><option selected value="1">熱門</option><option value="2">贊助人數</option><option value="3">最多收藏</option></select></div></div>',2),we={class:"postion-relative d-none d-xxl-block"},Ce={class:"container position-relative pt-8 pb-5"},$e={class:"container row gy-8 gy-md-10 justify-content-center position-absolute z-1"},ke=["onClick"],Se=e("div",{class:"container-fluid bg-primary-light py-30 py-lg-24 py-xl-23 py-xxl-8 mb-lg-8 mb-xl-14 mt-5"},null,-1),Ve=e("div",{class:"d-block d-lg-none container-fluid bg-primary-light py-28 py-md-29 mb-4"},null,-1),De={class:"container"},je={class:"row gx-4 gx-xl-10 list-unstyled pt-5"},Fe={key:0,class:"col-12 text-center"},He=e("p",{class:"fs-4 text-gray-600"},"此類別尚未有專案唷～歡迎提案",-1),Ie=[He];function Me(t,s,l,S,d,p){const _=c("CouponCircle"),u=c("CardDefault");return o(),a("main",null,[e("section",ve,[ye,e("div",we,[r(_,{class:"top-24 start-n20 position-absolute"})]),e("div",Ce,[e("div",$e,[(o(!0),a(w,null,C(d.filteredProposals,(i,m)=>(o(),a("div",{key:m,class:"col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"},[e("a",{class:H("categorylink categorylink"+i.id+" rounded-pill border border-2 border-white fs-4 fw-medium text-white lterSpc-5 text-center pt-7"),href:"",onClick:f(b=>p.filterCategory(i.name),["prevent"])},n(i.name),11,ke)]))),128))])])]),Se,Ve,e("section",De,[e("ul",je,[p.filteredData.length===0?(o(),a("li",Fe,Ie)):(o(!0),a(w,{key:1},C(p.filteredData,(i,m)=>(o(),a("li",{class:"col-12 col-md-6 col-lg-4",key:m},[r(u,{proposals:i,onFavorite:p.favoriteHandler},null,8,["proposals","onFavorite"])]))),128))])])])}const Ee=x(be,[["render",Me]]);export{Ee as default};
