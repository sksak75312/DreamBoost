import{_ as b,V as C,o as c,c as d,b as s,w as i,F as w,r as $,d as o,N as O,P as U,E as W,g as L,h as N,i as H,j as Y,a as e,e as u,t as h,p as B,k as V,f as P,n as z,C as J,m as Q,l as R}from"./index-ZKny8dII.js";import{e as A}from"./exploreStore-0RzM94wX.js";import{m as X}from"./mixinFullScreenLoading-9dNja2ki.js";import{R as T}from"./RightArrow-WNYavUu6.js";import{C as Z}from"./CuponCircle-uEjuryuY.js";import{u as G}from"./userStore-UL1hxTbg.js";/* empty css                   */import{_ as K}from"./w-biglogo--vR3noKG.js";import{S as q}from"./StarFull-hqQk7cwm.js";import{M as E}from"./MessageIcon-8I9dQ8cP.js";const ee={data(){return{imgArray:[]}},methods:{imgData(){this.imgArray=["https://raw.githubusercontent.com/PinyiW0/DreamBoost/9d3cec53634e1297357325aa9565ffbd9e657190/public/images/home/pr-light-logo.svg","https://raw.githubusercontent.com/PinyiW0/DreamBoost/9d3cec53634e1297357325aa9565ffbd9e657190/public/images/home/pr-light-logo.svg"]}},components:{Vue3Marquee:C},mounted(){this.imgData()}},te={class:"container-fluid"},se=["src"];function oe(t,n,m,f,l,g){const p=o("Vue3Marquee");return c(),d("div",te,[s(p,{clone:!0,duration:6,direction:"reverse"},{default:i(()=>[(c(!0),d(w,null,$(l.imgArray,a=>(c(),d("img",{key:a,src:a,class:"img-fluid me-6"},null,8,se))),128))]),_:1})])}const le=b(ee,[["render",oe]]),ie={data(){return{imgArray:[]}},methods:{imgData(){this.imgArray=["https://raw.githubusercontent.com/PinyiW0/DreamBoost/880674654e4e31b44e5ab98a0beb1e0f948fc539/public/images/home/white-logo.svg","https://raw.githubusercontent.com/PinyiW0/DreamBoost/880674654e4e31b44e5ab98a0beb1e0f948fc539/public/images/home/white-logo.svg"]}},components:{Vue3Marquee:C},mounted(){this.imgData()}},re={class:"container-fluid bg-gray-700 mb-7"},ce=["src"];function ne(t,n,m,f,l,g){const p=o("Vue3Marquee");return c(),d("div",re,[s(p,{clone:!0,duration:8,direction:"normal"},{default:i(()=>[(c(!0),d(w,null,$(l.imgArray,a=>(c(),d("img",{key:a,src:a,class:"img-fluid me-20"},null,8,ce))),128))]),_:1})])}const ae=b(ie,[["render",ne]]),de={data(){return{imgArray:[]}},methods:{imgData(){this.imgArray=["https://raw.githubusercontent.com/PinyiW0/DreamBoost/880674654e4e31b44e5ab98a0beb1e0f948fc539/public/images/home/big_DREAMBOOST.svg","https://raw.githubusercontent.com/PinyiW0/DreamBoost/880674654e4e31b44e5ab98a0beb1e0f948fc539/public/images/home/db_logoAlong.svg"]}},components:{Vue3Marquee:C},mounted(){this.imgData()}},me={class:"container-fluid"},pe=["src"];function he(t,n,m,f,l,g){const p=o("Vue3Marquee");return c(),d("div",me,[s(p,{clone:!0,duration:10,direction:"reverse"},{default:i(()=>[(c(!0),d(w,null,$(l.imgArray,a=>(c(),d("img",{key:a,src:a,class:"img-fluid me-10"},null,8,pe))),128))]),_:1})])}const ue=b(de,[["render",he]]);var _e={VITE_URL:"https://api.dreamboost.shop",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDg5Mzk5MDcsImV4cCI6MTcxMTUzMTkwN30.BbIXGVkQOU2HqsiCg6UcwFZx-kBd7kdOP24kUD21c1M",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:ge}=_e,be={data(){return{modules:[O,U],bnData:[],EffectFade:W}},methods:{onSlideChange(){},getBnUrl(){this.$http.get(`${ge}/dreamboost/banner/guest/banner`).then(t=>{this.bnData=t.data.data.result}).catch(()=>{})},changeTokenState(){this.isToken=!this.isToken}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/,"$1");this.isToken=t},mounted(){this.getBnUrl()},computed:{...L(G,["isUser"])},components:{RightArrow:T,Swiper:N,SwiperSlide:H}},fe=t=>(B("data-v-55bed53d"),t=t(),V(),t),xe={class:"container py-15 bg-white"},ve={class:"rounded-5"},ye={class:"d-flex flex-column justify-content-center align-items-center"},we=["src"],ke={class:"bg-primary-dark col-12 py-7 rounded-bottom-5 position-absolute bottom-0"},$e={class:"text-secondary-light text-center lterSpc-10 mb-0 mx-8 bn-hover"},je=fe(()=>e("div",{class:"d-flex flex-column align-items-center position-absolute top-24 top-sm-24 px-10"},[e("img",{src:K,class:"img-fluid mb-5 col-12",alt:""}),e("p",{class:"fs-3 fw-light text-white mb-0 lterSpc-10"},"推動夢想不是夢 !")],-1));function Se(t,n,m,f,l,g){const p=o("RightArrow"),a=o("RouterLink"),_=o("swiper-slide"),x=o("swiper");return c(),d("div",xe,[s(x,{ref:"swiper",modules:[l.EffectFade],effect:"fade","slides-per-view":3,"space-between":120,"centered-slides":!0,breakpoints:{390:{slidesPerView:1}},autoplay:{delay:5e3,disableOnInteraction:!1},onSwiperslidechange:g.onSlideChange,class:"rounded-5 col-12 object-fit-cover",style:{height:"650px"}},{default:i(()=>[(c(!0),d(w,null,$(l.bnData,(v,r)=>(c(),Y(_,{key:`${r}-bn`},{default:i(()=>[e("div",ve,[e("div",ye,[s(a,{to:t.isUser?"/explore":"/member",class:"position-relative col-12 rounded-5 shadow"},{default:i(()=>[e("img",{src:v.imgUrl,class:"img-fluid rounded-5 w-100 object-fit-cover",style:{height:"650px"},alt:"推動夢想不是夢概念圖"},null,8,we),e("div",ke,[e("h4",$e,[u(h(t.isUser?"立即探索，發現新項目":"立刻加入會員，一起追夢去")+" ",1),e("span",null,[s(p,{style:{width:"24px",color:"var(--bs-secondary-light)","margin-top":"-2 px"}})])])])]),_:2},1032,["to"]),je])])]),_:2},1024))),128))]),_:1},8,["modules","onSwiperslidechange"])])}const Ie=b(be,[["render",Se],["__scopeId","data-v-55bed53d"]]),Me={props:{popularProjects:{type:Object,required:!0}},data(){return{randomValue:0}},components:{StarFull:q,MessageIcon:E},mounted(){this.randomValue=Math.floor(Math.random()*20)}},F=t=>(B("data-v-ac41c3c2"),t=t(),V(),t),Pe=F(()=>e("div",{class:"d-flex justify-content-center mb-6 d-block d-xl-none position-relative"},[e("div",{class:"mb-5 mb-lg-3"},[e("h2",{class:"title-center text-center position-relative"},"當前熱門專案"),e("p",{class:"fs-6 text-primary-light text-center mb-0"},"Current Hot Projects")])],-1)),De=["src"],Ce={class:"fs-6 text-primary mb-3"},Be={class:"mb-3"},Ve={class:"mb-9"},Re={class:"progress bg-secondary-light mb-7",style:{height:"10px"}},Ae={class:"d-flex align-items-center justify-content-between"},Le={class:"d-flex align-items-center"},ze=["src"],Te={class:"mb-0"},qe={class:"d-flex"},Ee={class:"d-flex me-3"},Fe=F(()=>e("p",{class:"mb-0 me-1"},"已募資",-1)),Oe={class:"fw-bold text-danger mb-0"},Ue={class:"d-flex align-items-center gap-3"},We={href:""},Ne={class:"d-flex gap-1 message-star-hover"},He={class:"d-block text-primary-dark",style:{width:"14px","margin-top":"-1px"}},Ye={href:""},Je={class:"d-flex gap-1 message-star-hover"},Qe={class:"d-block text-secondary-dark",style:{width:"16px","margin-top":"-2px"}};function Xe(t,n,m,f,l,g){var _,x,v,r,j,k,y,S,I;const p=o("MessageIcon"),a=o("StarFull");return c(),d(w,null,[Pe,e("div",{onClick:n[1]||(n[1]=P(D=>t.$router.push(`/product/${this.popularProjects.proposalID}/info`),["prevent"])),class:"popularcard-hover"},[e("img",{src:(_=m.popularProjects)==null?void 0:_.proposalMainImage,class:"imgcover img-fluid rounded-3 mb-7 col-12 h-100",style:{},alt:""},null,8,De),e("p",Ce,"# "+h((x=m.popularProjects)==null?void 0:x.proposalCategory),1),e("a",{class:"title-hover",onClick:n[0]||(n[0]=P(D=>{var M;return t.$router.push(`/product/${(M=this.popularProjects)==null?void 0:M.proposalID}/info`)},["prevent"]))},[e("h4",Be,h((v=m.popularProjects)==null?void 0:v.proposalTitle),1)]),e("p",Ve,h((j=(r=m.popularProjects)==null?void 0:r.customizeProperty)==null?void 0:j.introduction),1),e("div",Re,[e("div",{class:"progress-bar bg-primary-dark rounded-pill",role:"progressbar",style:z({width:l.randomValue+70+"%"}),"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},null,4)]),e("div",Ae,[e("div",Le,[e("img",{src:(y=(k=m.popularProjects)==null?void 0:k.customizeProperty)==null?void 0:y.userImage,class:"img-fluid me-6 rounded-5 border",style:{"max-width":"36px"},alt:"會員頭貼"},null,8,ze),e("p",Te,"發起人："+h((I=(S=m.popularProjects)==null?void 0:S.customizeProperty)==null?void 0:I.displayName),1)]),e("div",qe,[e("div",Ee,[Fe,e("p",Oe,h(l.randomValue+70)+"%",1)]),e("div",Ue,[e("a",We,[e("span",Ne,[u(h(l.randomValue)+" ",1),e("i",He,[s(p)])])]),e("a",Ye,[e("span",Je,[u(h(l.randomValue+2)+" ",1),e("i",Qe,[s(a)])])])])])])])],64)}const Ze=b(Me,[["render",Xe],["__scopeId","data-v-ac41c3c2"]]),Ge={props:{proposals:{type:Object,required:!0}},data(){return{randomValue:0}},components:{StarFull:q,MessageIcon:E},mounted(){this.randomValue=Math.floor(Math.random()*20)}},Ke=t=>(B("data-v-2ec9cdc8"),t=t(),V(),t),et={class:"row g-2 align-items-stretch"},tt={class:"col-md-4 pb-4"},st=["src"],ot={class:"col-md-8 pb-4 mt-0"},lt={class:"card-body d-flex flex-column justify-items-between p-3"},it={class:"card-text fs-6 text-primary mb-1"},rt={class:"card-title fs-5 mb-11"},ct={class:"progress bg-secondary-light mb-4",style:{height:"6px"}},nt={class:"d-flex justify-content-between align-items-center"},at={class:"d-flex me-3"},dt=Ke(()=>e("p",{class:"fs-5 mb-0 me-1"},"已募資",-1)),mt={class:"fs-5 fw-bold text-danger mb-0"},pt={class:"d-flex align-items-center gap-3"},ht={href:""},ut={class:"d-flex gap-1 message-star-hover"},_t={class:"d-block text-primary-dark",style:{width:"14px","margin-top":"-1px"}},gt={href:""},bt={class:"d-flex gap-1 message-star-hover"},ft={class:"d-block text-secondary-dark",style:{width:"16px","margin-top":"-2px"}};function xt(t,n,m,f,l,g){const p=o("MessageIcon"),a=o("StarFull");return c(),d("div",{class:"card col-12 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0 suggestcard-shadow",onClick:n[1]||(n[1]=P(_=>t.$router.push(`/product/${this.proposals.proposalID}/info`),["prevent"]))},[e("div",et,[e("div",tt,[e("img",{src:m.proposals.proposalMainImage,class:"img-fluid object-fit-cover col-12 h-100 rounded-2",alt:""},null,8,st)]),e("div",ot,[e("div",lt,[e("div",null,[e("p",it,"# "+h(m.proposals.proposalCategory),1),e("a",{class:"title-hover",onClick:n[0]||(n[0]=P(_=>t.$router.push(`/product/${this.proposals.proposalID}/info`),["prevent"]))},[e("h4",rt,h(m.proposals.proposalTitle),1)])]),e("div",null,[e("div",ct,[e("div",{class:"progress-bar bg-primary-dark rounded-pill",role:"progressbar",style:z({width:l.randomValue+50+"%"}),"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},null,4)]),e("div",nt,[e("div",at,[dt,e("p",mt,h(l.randomValue+50)+"%",1)]),e("div",pt,[e("a",ht,[e("span",ut,[u(h(l.randomValue)+" ",1),e("i",_t,[s(p)])])]),e("a",gt,[e("span",bt,[u(h(l.randomValue+2)+" ",1),e("i",ft,[s(a)])])])])])])])])])])}const vt=b(Ge,[["render",xt],["__scopeId","data-v-2ec9cdc8"]]),yt="/DreamBoost/images/home/cs_01.png",wt="/DreamBoost/images/home/cs_02.png",kt="/DreamBoost/images/home/cs_03.png",$t="/DreamBoost/images/home/cs_04.jpg",jt="/DreamBoost/images/home/cs_05.jpg",St="/DreamBoost/images/home/cs_06.png",It="/DreamBoost/images/home/cs_07.png",Mt="/DreamBoost/images/home/cs_08.png",Pt="/DreamBoost/images/home/cowork_01.png",Dt="/DreamBoost/images/home/cowork_02.png",Ct="/DreamBoost/images/home/cowork_03.png",Bt={components:{RightArrow:T,MarqueeDark:ae,CouponCircle:Z,HomeBn:Ie,MarqueeBiglogo:ue,MarqueeLight:le,PopularCard:Ze,SuggestCard:vt,CountTo:J},data(){return{limitedProposals:[],popularProjects:null}},mixins:[X],computed:{...L(A,["proposals"])},async mounted(){this.showFullScreenLoading(),await this.getProposals(),await this.updatePopularProjects(),setTimeout(()=>{this.hideFullScreenLoading()},1800)},watch:{proposals:{handler(t){this.updateLimitedProposals(t),this.popularProjects||this.updatePopularProjects()},immediate:!0}},methods:{...Q(A,["getProposals"]),updateLimitedProposals(t){this.limitedProposals=Object.values(t).slice(0,3)},async updatePopularProjects(){if(!this.popularProjects){const t=Object.values(this.proposals),n=Math.floor(Math.random()*t.length);this.popularProjects=t[n]}}}},Vt={class:"container"},Rt={class:"row pt-18 pb-20 justify-content-center"},At={class:"col-12 col-xl-6 mb-18 mb-md-20 mb-xl-0 px-3 px-sm-6 px-lg-10 me-0 me-xl-10"},Lt=e("div",{class:"mb-3 d-none d-xl-block"},[e("h1",{class:"title position-relative"},"當前熱門專案"),e("p",{class:"fs-6 text-primary-light mb-0"},"Current Hot Projects")],-1),zt={class:"col-12 col-xl-5"},Tt=R('<div class="mb-3 d-none d-xl-block"><h2 class="title position-relative">為您推薦</h2><p class="fs-6 text-primary-light mb-0">Recommended for You</p></div><div class="d-flex justify-content-center mb-6 d-block d-xl-none position-relative"><div class="mb-5 mb-lg-3"><h2 class="title-center text-center position-relative">為您推薦</h2><p class="fs-6 text-primary-light text-center mb-0">Recommended for You</p></div></div>',2),qt={class:"list-unstyled px-0 px-lg-8 px-xl-0 mb-8"},Et={class:"d-flex justify-content-center justify-content-lg-end align-items-center"},Ft={type:"button",class:"col-12 btn btn-secondary-light border border-2 border-primary rounded-3 px-lg-5 py-4 py-md-3 mt-5 mt-md-0 me-5 d-flex align-items-center justify-content-center btn-pr position-relative"},Ot={class:"px-3 d-flex justify-content-center align-items-center"},Ut=e("p",{class:"mb-0 pe-2 fw-semibold"},"查看更多",-1),Wt={class:"container pt-8 pb-5"},Nt=e("div",{class:"d-flex justify-content-center pb-5 position-relative"},[e("div",{class:"mb-5 mb-lg-3"},[e("h2",{class:"title-center text-center position-relative"},"專案類別"),e("p",{class:"fs-6 text-primary-light mb-0"},"Which Categories Interest You?")])],-1),Ht={class:"container row gy-8 gy-md-10 justify-content-center position-absolute translate-middle-null z-3"},Yt={class:"col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"},Jt={class:"col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"},Qt={class:"col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"},Xt={class:"col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"},Zt={class:"col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"},Gt={class:"col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"},Kt=e("div",{class:"container-fluid bg-primary-light py-31 py-lg-13 mb-xl-2"},null,-1),es=e("div",{class:"container-fluid bg-primary-light py-29 py-lg-13 d-block d-xl-none"},null,-1),ts=e("div",{class:"container-fluid bg-primary-light pt-1 d-none d-xl-block py-lg-1"},null,-1),ss={class:"container-fluid position-relative overflow-hidden"},os=R('<div class="d-flex justify-content-center pb-5 position-relative"><div class="pt-15 pt-md-26 pb-8 pb-md-21 mb-5 mb-lg-3"><h2 class="title-center text-center position-relative">即將推出</h2><p class="fs-6 text-center text-primary-light mb-0">Coming Soon</p></div><span class="position-absolute top-n100 end-n40 d-none d-md-block z-n1 bg-secondary-light rounded-circle z-n2" style="width:1045px;height:1045px;"></span><p class="position-absolute top-40 start-10 mb-0 d-none d-md-block fs-200 fw-light text-nowrap text-uppercase user-select-none z-n1" style="color:rgba(157, 212, 209, 0.45);letter-spacing:0.48px;"> Coming Soon </p><span class="position-absolute top-180 end-80 z-n1 d-none d-md-block bg-secondary-light rounded-circle" style="width:425px;height:425px;"></span></div>',1),ls={class:"container d-flex flex-column justify-content-center"},is={class:"row g-10 mb-7 pb-27"},rs={class:"col-12 col-sm-6 col-lg-2 g-4 g-sm-3 g-md-2"},cs={class:"position-relative rounded-3 h-100 csImage"},ns=e("h4",{class:"project-name1 text-center text-white mx-auto z-2 lterSpc-5"},"查看更多",-1),as=e("img",{src:yt,alt:"",class:"img-fluid object-fit-cover h-100 col-12 rounded-3"},null,-1),ds={class:"col-12 col-sm-6 col-lg-2 g-4 g-sm-3 g-md-2"},ms={class:"position-relative rounded-3 h-100 csImage"},ps=e("h4",{class:"project-name1 text-center text-white mx-auto z-2 lterSpc-5"},"查看更多",-1),hs=e("img",{src:wt,alt:"",class:"img-fluid object-fit-cover h-100 col-12 rounded-3"},null,-1),us={class:"col-12 col-sm-6 col-lg-4 g-4 g-sm-3 g-md-2"},_s={class:"position-relative rounded-3 h-100 csImage"},gs=e("h4",{class:"project-name2 text-center text-white mx-auto z-2 lterSpc-5"},"查看更多",-1),bs=e("img",{src:kt,alt:"",class:"img-fluid object-fit-cover h-100 col-12 rounded-3"},null,-1),fs={class:"col-12 col-sm-6 col-lg-4 g-4 g-sm-3 g-md-2"},xs={class:"position-relative rounded-3 h-100 csImage"},vs=e("h4",{class:"project-name2 text-center text-white mx-auto z-2 lterSpc-5"},"查看更多",-1),ys=e("img",{src:$t,alt:"",class:"img-fluid object-fit-cover h-100 col-12 rounded-3"},null,-1),ws={class:"col-12 col-sm-6 col-lg-4 g-4 g-sm-3 g-md-2"},ks={class:"position-relative rounded-3 h-100 csImage"},$s=e("h4",{class:"project-name2 text-center text-white mx-auto z-2 lterSpc-5"},"查看更多",-1),js=e("img",{src:jt,alt:"",class:"img-fluid object-fit-cover h-100 col-12 rounded-3"},null,-1),Ss={class:"col-12 col-sm-6 col-lg-4 g-4 g-sm-3 g-md-2"},Is={class:"position-relative rounded-3 h-100 csImage"},Ms=e("h4",{class:"project-name2 text-center text-white mx-auto z-2 lterSpc-5"},"查看更多",-1),Ps=e("img",{src:St,alt:"",class:"img-fluid object-fit-cover h-100 col-12 rounded-3"},null,-1),Ds={class:"col-12 col-sm-6 col-lg-2 g-4 g-sm-3 g-md-2"},Cs={class:"position-relative rounded-3 h-100 csImage"},Bs=e("h4",{class:"project-name1 text-center text-white mx-auto z-2 lterSpc-5"},"查看更多",-1),Vs=e("img",{src:It,alt:"",class:"img-fluid object-fit-cover h-100 col-12 rounded-3"},null,-1),Rs={class:"col-12 col-sm-6 col-lg-2 g-4 g-sm-3 g-md-2"},As={class:"position-relative rounded-3 h-100 csImage"},Ls=e("h4",{class:"project-name1 text-center text-white mx-auto z-2 lterSpc-5"},"查看更多",-1),zs=e("img",{src:Mt,alt:"",class:"img-fluid object-fit-cover h-100 col-12 rounded-3"},null,-1),Ts={class:"container-fluid bg-primary-dark"},qs={class:"container p-12"},Es=e("div",{class:"mb-7"},[e("h3",{class:"text-center text-white"},"將創意專案轉換為現實"),e("p",{class:"fs-6 text-center text-primary-light mb-3"},"Turn Creative Projects Into Reality"),e("p",{class:"fs-6 text-center text-gray-300 mb-8"},"在 DreamBoost 上，讓我們成為你夢想的翅膀")],-1),Fs={class:"row justify-content-center"},Os={class:"col-11 col-md-5 col-lg-3 border border-white rounded-4 me-0 me-md-5 me-lg-10 mb-5 p-6"},Us={class:"fs-1 fs-md-2 fs-lg-36 text-secondary-light text-center fw-bold mb-0"},Ws=e("p",{class:"fs-5 fs-lg-12 text-white text-center mb-0"},"個專案已募資",-1),Ns={class:"col-11 col-md-5 col-lg-3 border border-white rounded-4 me-0 me-md-5 me-lg-10 mb-5 p-6"},Hs={class:"fs-1 fs-md-2 fs-lg-36 text-secondary-light text-center fw-bold mb-0"},Ys=e("p",{class:"fs-5 fs-lg-12 text-white text-center mb-0"},"人已經參與募資計畫",-1),Js={class:"col-11 col-md-5 col-lg-3 border border-white rounded-4 me-0 me-md-5 py-6 h-100"},Qs={class:"fs-1 fs-md-2 fs-lg-36 text-secondary-light text-center fw-bold mb-0"},Xs=e("p",{class:"fs-5 fs-lg-12 text-white text-center mb-0"},"贊助計畫",-1),Zs={class:"container position-relative"},Gs=R('<div class="pt-19 mb-3 d-none d-lg-block position-relative"><h2 class="fs-3 title position-relative">合作聯繫</h2><p class="fs-6 text-primary-light mb-0">Cooperation Contact</p><div class="bg-primary position-absolute top-75 start-lg-12 start-xl-10" style="width:200px;height:2px;"></div></div><div class="d-flex justify-content-center pt-19 mb-6 d-block d-lg-none position-relative"><div class="mb-5 mb-lg-3"><h2 class="title-center text-center position-relative">合作聯繫</h2><p class="fs-6 text-primary-light mb-0">Cooperation Contact</p></div></div><ul class="row row-cols-1 row-cols-lg-3 g-xl-12 list-unstyled pb-14 pt-0 pt-lg-28 position-relative"><li class="col card border-0 mb-12 mx-0"><div class="card-body border-bottom border-4 border-secondary-light rounded-top-pill bg-primary shadow"><div class="d-flex flex-column align-items-center"><h3 class="card-title fs-28 fs-lg-3 text-white text-center mt-11 mb-0">活動邀約</h3><p class="fw-medium fs-28 fs-lg-3 text-white text-center mb-10">媒體採訪</p><div class="mx-5"><img src="'+Pt+'" class="img-fluid border border-1 border-white object-fit-cover mb-4 h-100 col-12" style="max-width:296px;" alt="活動邀約媒體採訪照片"></div></div><div class="d-flex justify-content-center justify-content-lg-end pt-3 pb-6 px-9"><a href="mailto:DreamBoost@mail.com" class="card-link icon-link icon-link-hover fs-4 fs-lg-5" style="--bs-link-color-rgb:255, 244, 138;--bs-link-hover-color-rgb:25, 135, 84;"> 聯繫我們 <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></a></div></div></li><li class="col card border-0 mb-12 mx-0 position-lg-absolute start-lg-33 start-xl-33 bottom-0 bottom-lg-12"><div class="card-body border-bottom border-4 border-secondary-light rounded-top-pill bg-primary shadow"><div class="d-flex flex-column align-items-center"><h3 class="card-title fs-28 fs-lg-3 text-white text-center mt-11 mb-0">團隊提案</h3><p class="fw-medium fs-28 fs-lg-3 text-white text-center mb-10">平台問題</p><img src="'+Dt+'" class="img-fluid border border-1 border-white object-fit-cover mb-4 h-100 col-12" style="max-width:296px;" alt="團隊提案平台問題照片"></div><div class="d-flex justify-content-center justify-content-lg-end pt-3 pb-6 px-9"><a href="mailto:DreamBoost@mail.com" class="card-link icon-link icon-link-hover fs-4 fs-lg-5" style="--bs-link-color-rgb:255, 244, 138;--bs-link-hover-color-rgb:25, 135, 84;"> 聯繫我們 <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></a></div></div></li><li class="col card border-0 mb-12 mx-0 position-lg-absolute start-lg-66 start-xl-66 bottom-0 bottom-lg-24"><div class="card-body border-bottom border-4 border-secondary-light rounded-top-pill bg-primary shadow"><div class="d-flex flex-column align-items-center"><h3 class="card-title fs-28 fs-lg-3 text-white text-center mt-11 mb-0">集資產業相關</h3><p class="fw-medium fs-28 fs-lg-3 text-white text-center mb-10">報導聯繫</p><img src="'+Ct+'" class="img-fluid border border-1 border-white object-fit-cover mb-4 h-100 col-12" style="max-width:296px;" alt="集資產業相關報導聯繫照片"></div><div class="d-flex justify-content-center justify-content-lg-end pt-3 pb-6 px-9"><a href="mailto:DreamBoost@mail.com" class="card-link icon-link icon-link-hover fs-4 fs-lg-5" style="--bs-link-color-rgb:255, 244, 138;--bs-link-hover-color-rgb:25, 135, 84;"> 聯繫我們 <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></a></div></div></li></ul>',3),Ks={class:"postion-relative d-none"};function eo(t,n,m,f,l,g){const p=o("HomeBn"),a=o("PopularCard"),_=o("SuggestCard"),x=o("RightArrow"),v=o("RouterLink"),r=o("router-link"),j=o("MarqueeLight"),k=o("MarqueeDark"),y=o("countTo"),S=o("MarqueeBiglogo"),I=o("CouponCircle");return c(),d("main",null,[s(p),e("div",Vt,[e("div",Rt,[e("div",At,[Lt,e("div",null,[s(a,{popularProjects:l.popularProjects},null,8,["popularProjects"])])]),e("div",zt,[Tt,e("ul",qt,[(c(!0),d(w,null,$(l.limitedProposals,(D,M)=>(c(),d("li",{key:M},[s(_,{proposals:D},null,8,["proposals"])]))),128))]),e("div",Et,[s(v,{to:"/explore"},{default:i(()=>[e("button",Ft,[e("span",Ot,[Ut,s(x,{class:"fs-3",style:{width:"18px"}})])])]),_:1})])])])]),e("div",Wt,[Nt,e("div",Ht,[e("div",Yt,[s(r,{to:{name:"explore"},class:"categorylink categorylink1 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"},{default:i(()=>[u(" 挺好夢 ")]),_:1})]),e("div",Jt,[s(r,{to:{name:"explore"},class:"categorylink categorylink2 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"},{default:i(()=>[u(" 科技設計 ")]),_:1})]),e("div",Qt,[s(r,{to:{name:"explore"},class:"categorylink categorylink3 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"},{default:i(()=>[u(" 健康生活 ")]),_:1})]),e("div",Xt,[s(r,{to:{name:"explore"},class:"categorylink categorylink4 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"},{default:i(()=>[u(" 時尚 ")]),_:1})]),e("div",Zt,[s(r,{to:{name:"explore"},class:"categorylink categorylink5 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"},{default:i(()=>[u(" 公共在地 ")]),_:1})]),e("div",Gt,[s(r,{to:{name:"explore"},class:"categorylink categorylink6 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"},{default:i(()=>[u(" 美妝 ")]),_:1})])])]),s(j),Kt,es,ts,e("div",ss,[os,e("div",ls,[e("div",is,[e("div",rs,[e("div",cs,[s(r,{to:{name:"explore"},class:"position-relative"},{default:i(()=>[ns,as]),_:1})])]),e("div",ds,[e("div",ms,[s(r,{to:{name:"explore"},class:"position-relative"},{default:i(()=>[ps,hs]),_:1})])]),e("div",us,[e("div",_s,[s(r,{to:{name:"explore"},class:"position-relative"},{default:i(()=>[gs,bs]),_:1})])]),e("div",fs,[e("div",xs,[s(r,{to:{name:"explore"},class:"position-relative"},{default:i(()=>[vs,ys]),_:1})])]),e("div",ws,[e("div",ks,[s(r,{to:{name:"explore"},class:"position-relative"},{default:i(()=>[$s,js]),_:1})])]),e("div",Ss,[e("div",Is,[s(r,{to:{name:"explore"},class:"position-relative"},{default:i(()=>[Ms,Ps]),_:1})])]),e("div",Ds,[e("div",Cs,[s(r,{to:{name:"explore"},class:"position-relative"},{default:i(()=>[Bs,Vs]),_:1})])]),e("div",Rs,[e("div",As,[s(r,{to:{name:"explore"},class:"position-relative"},{default:i(()=>[Ls,zs]),_:1})])])])])]),e("section",null,[s(k),e("div",Ts,[e("div",qs,[Es,e("div",Fs,[e("div",Os,[e("p",Us,[s(y,{startVal:0,endVal:20243,dicimals:2,duration:15e3,ref:t.refset},null,512)]),Ws]),e("div",Ns,[e("p",Hs,[s(y,{startVal:-100,endVal:1766,duration:15e3})]),Ys]),e("div",Js,[e("p",Qs,[s(y,{startVal:0,endVal:23786,dicimals:2,duration:15e3,ref:t.refset},null,512)]),Xs])])])]),s(S),s(k)]),e("section",Zs,[Gs,e("div",Ks,[s(I,{class:""})])])])}const po=b(Bt,[["render",eo]]);export{po as default};
