import{_ as g,o as c,c as p,a as n,n as u,p as w,f as y,F as I,i as A,g as k,k as U,b as L,O as D,r as v}from"./index-sQ41nP2O.js";const C={props:["imgUrl","index"],data(){return{url:"",imgLoadStatus:!1}},methods:{removePhoto(){this.$emit("remove",this.index)},moveUp(){this.$emit("move-up",this.index)},moveDown(){this.$emit("move-down",this.index)},onImageLoad(){this.imgLoadStatus=!0}},watch:{imgUrl(t){this.url=t}}},f=t=>(w("data-v-f540f81b"),t=t(),y(),t),E={class:"px-10 py-8 d-flex align-items-center justify-content-between border-bottom border-dark-pr"},B={class:"placeholder-glow"},x=["src"],P={class:"d-flex align-items-center"},$=f(()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"14",fill:"none",viewBox:"0 0 24 14"},[n("path",{fill:"currentColor","fill-rule":"evenodd",d:"M.82.821a1.668 1.668 0 0 1 2.357 0L12 9.643 20.82.82a1.667 1.667 0 1 1 2.357 2.357l-10 10a1.666 1.666 0 0 1-2.357 0l-10-10A1.667 1.667 0 0 1 .82.82Z","clip-rule":"evenodd"})],-1)),M=[$],S=f(()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"14",fill:"none",viewBox:"0 0 24 14"},[n("path",{fill:"currentColor","fill-rule":"evenodd",d:"M10.82.821a1.668 1.668 0 0 1 2.357 0l10 10a1.667 1.667 0 1 1-2.357 2.357L12 4.357l-8.822 8.821A1.667 1.667 0 1 1 .82 10.821l10-10Z","clip-rule":"evenodd"})],-1)),V=[S];function N(t,e,a,i,s,o){return c(),p("div",E,[n("div",B,[n("img",{src:a.imgUrl,alt:"",ref:"image",class:u(["mw-100 object-fit-cover",{"d-none":!s.imgLoadStatus}]),height:"130",width:"196",onLoad:e[0]||(e[0]=(...r)=>o.onImageLoad&&o.onImageLoad(...r))},null,42,x),n("div",{class:u(["placeholder bg-primary",{"d-none":s.imgLoadStatus}]),style:{height:"130px",width:"196px"}},null,2)]),n("div",P,[n("button",{class:"btn btn-outline-dark-pr px-2 px-md-17 py-5",type:"button",onClick:e[1]||(e[1]=(...r)=>o.removePhoto&&o.removePhoto(...r))},"移除照片"),n("button",{class:"btn btn-dark-pr p-5 ms-7 l-IconHoverEffect",type:"button",onClick:e[2]||(e[2]=(...r)=>o.moveDown&&o.moveDown(...r))},M),n("button",{class:"btn btn-dark-pr p-5 ms-3 l-IconHoverEffect",type:"button",onClick:e[3]||(e[3]=(...r)=>o.moveUp&&o.moveUp(...r))},V)])])}const j=g(C,[["render",N],["__scopeId","data-v-f540f81b"]]),O={},R={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"none",viewBox:"0 0 28 28"},T=n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M24.5 20.352c0 .481-.201.943-.56 1.283a1.96 1.96 0 0 1-1.35.532H5.41a1.96 1.96 0 0 1-1.35-.532 1.77 1.77 0 0 1-.56-1.283V10.37c0-.481.201-.943.56-1.283a1.96 1.96 0 0 1 1.35-.532h3.817l1.91-2.722h5.727l1.909 2.722h3.818c.506 0 .992.192 1.35.532.358.34.559.802.559 1.283v9.982Z"},null,-1),z=n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 18.667a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"},null,-1),F=[T,z];function J(t,e){return c(),p("svg",R,F)}const Z=g(O,[["render",J]]);var W={VITE_URL:"https://api-vercel-test-one.vercel.app",VITE_PATH:"",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDgxNjAzODUsImV4cCI6MTcwODc2NTE4NX0.3xrfCwF6eb36lDn0T65Vn_gQceyIGcS9mq-EQI38Z-g",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_WEIKEY:m}=W,Y={data(){return{bannerAry:[],tempPic:"",imgLoadStatus:!1}},methods:{getBannerData(){this.$http.get("https://api-vercel-test-one.vercel.app/dreamboost/banner/guest/banner").then(e=>{this.bannerAry=e.data.data.result}).catch(()=>{})},updateBannerData(t){const e=`${h}/dreamboost/banner/admin/banner`;this.$http.post(e,{bannerUrlArray:t},{headers:{Authorization:m}}).then(()=>{this.getBannerData()})},removePhoto(t){this.bannerAry.splice(t,1),this.bannerAry.forEach((a,i)=>{i>=t&&(this.bannerAry[i].orderBy-=1)});const e=`${h}/dreamboost/banner/admin/banner`;this.$http.post(e,{bannerUrlArray:this.bannerAry},{headers:{Authorization:m}}).then(()=>{this.getBannerData()})},movePhotoUp(t){if(t>0){const e=this.bannerAry[t];this.bannerAry.splice(t,1),this.bannerAry.splice(t-1,0,e)}},movePhotoDown(t){if(t<this.bannerAry.length-1){const e=this.bannerAry[t];this.bannerAry.splice(t,1),this.bannerAry.splice(t+1,0,e)}},uploadNewPicture(){const t=`${h}/dreamboost/upload`,e=`${h}/dreamboost/banner/admin/banner`,a=document.createElement("input");a.type="file",a.style.display="none",a.addEventListener("change",i=>{const s=i.target.files[0],o=new FormData;o.append("image",s),this.$http.post(t,o,{headers:{Authorization:m}}).then(r=>{const b={imgUrl:r.data.data.result,orderBy:this.bannerAry.length+1};return this.$http.post(e,{bannerUrlArray:[...this.bannerAry,b]},{headers:{Authorization:m}})}).then(()=>{this.getBannerData()}).catch(()=>{})}),a.click()},onImageLoad(){this.imgLoadStatus=!0}},components:{UpdateBannerImgCard:j,CameraIcon:Z},mounted(){this.getBannerData()}},H={class:"container mt-20"},Q={class:"row"},X={class:"col-12"},G=n("p",{class:"text-white text-center fs-3 mb-0"},"即時預覽",-1),K={class:"py-8 d-flex justify-content-center placeholder-glow"},q={class:"row justify-content-center mt-21"},tt={class:"col-12 col-lg-10"},et={class:"px-10 text-end"},nt=n("span",{class:"ms-2"},"新增封面照片",-1);function ot(t,e,a,i,s,o){const r=v("UpdateBannerImgCard"),b=v("CameraIcon");return c(),p("div",H,[n("div",Q,[n("div",X,[G,n("div",K,[n("img",{src:"https://picsum.photos/id/598/600/400",class:u({"d-none":!s.imgLoadStatus}),alt:"",onLoad:e[0]||(e[0]=(...l)=>o.onImageLoad&&o.onImageLoad(...l))},null,34),n("div",{class:u(["placeholder bg-primary",{"d-none":s.imgLoadStatus}]),style:{height:"400px",width:"600px"}},null,2)])])]),n("div",q,[n("div",tt,[s.bannerAry?(c(!0),p(I,{key:0},A(s.bannerAry,(l,d)=>(c(),D(r,{key:`${d}-img`,"img-url":l.imgUrl,onRemove:_=>o.removePhoto(d),onMoveUp:_=>o.movePhotoUp(d),onMoveDown:_=>o.movePhotoDown(d)},null,8,["img-url","onRemove","onMoveUp","onMoveDown"]))),128)):k("",!0),n("div",et,[n("button",{type:"button",href:"#",class:"btn btn-dark-pr mt-9 ms-auto py-5 px-11",onClick:e[1]||(e[1]=U((...l)=>o.uploadNewPicture&&o.uploadNewPicture(...l),["prevent"]))},[L(b,{width:"28",height:"28"}),nt])])])])])}const st=g(Y,[["render",ot]]);export{st as default};
