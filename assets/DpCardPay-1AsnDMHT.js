import{m as y}from"./mixinVeeValidate-Y_Ip7w4Z.js";import{s as f}from"./sweetAlert2Store-lSa7D0DZ.js";import{m as k}from"./mixinFullScreenLoading-9dNja2ki.js";import{_ as N,k as C,c as l,a as e,t as _,A as V,b as a,w as p,r as b,o as i,v as w,B as M,s as u,F as g,d as v,e as h}from"./index-yuxx1_q5.js";const F="/DreamBoost/images/explore/light-credit-card.png",Y={mixins:[y,f,k],data(){return{creditCardNumber:"",formattedCreditCardNumber:"",expiryYear:"",years:[],totalMonth:"MM",months:[],checkNumber:"",yearsValue:"",monthValue:""}},methods:{...C(f,["successAlert"]),submit(){this.successAlert("購買成功"),this.$router.push("/")},formatCreditCardNumber(){this.creditCardNumber=this.creditCardNumber.replace(/\D/g,"").substring(0,16),this.formattedCreditCardNumber=this.creditCardNumber.replace(/\s/g,"").replace(/(.{4})/g,"$1 ")},getMonth(){for(let r=1;r<=12;r+=1){const t=r<10?`0${r}`:`${r}`;this.months.push(t)}},getYear(){const r=new Date().getFullYear();for(let t=r-3;t<=r+3;t+=1)this.years.push(t)},checkNum(r){this.checkNumber=this.checkNumber.replace(/\D/g,""),this.checkNumber.length>=3&&(this.checkNumber=this.checkNumber.substring(0,3),r.target.blur())}},components:{},mounted(){this.showFullScreenLoading(),this.getYear(),this.getMonth(),this.checkNum(),setTimeout(()=>{this.hideFullScreenLoading()},1e3)}},D={class:"container pt-22"},S={class:"d-flex flex-column justify-content-center align-items-center pb-30 position-relative"},A=e("h1",{class:"fs-3 text-center"},"輸入信用卡資料",-1),B=e("div",{class:"form-check mb-8"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"agreement",checked:""}),e("label",{class:"form-check-label text-gray-600 fs-6",for:"remember"}," 記住本次持卡人交易資料 ")],-1),q=e("img",{src:F,class:"img-fluid position-absolute translate-middle top-90",alt:"信用卡示意圖"},null,-1),L={key:0,class:"credit-card fs-3 text-gray-600 bg-white position-absolute top-108 start-22 start-sm-28 start-md-33 start-lg-37 start-xl-39 start-xxl-41"},E={class:"container"},I={class:"row d-flex justify-content-center mb-28"},T={class:"col-11 col-sm-8 col-lg-6 px-sm-15 px-xl-27 pt-29 pb-21 border border-2 border-primary rounded-4"},U={class:"row"},j={class:"col-12 mb-7"},z=e("label",{for:"cardnum",class:"form-label position-relative"},[h(" 信用卡號 "),e("span",{class:"text-danger"},"*")],-1),P={class:"col-12 mb-7"},G={class:"row"},H={class:"col-12 col-md-4"},J=e("label",{for:"deadlinemon",class:"form-label"},[h(" 有效期限 "),e("span",{class:"text-danger"}," * ")],-1),K=e("option",{value:"",selected:"",disabled:""},"MM",-1),O=["value"],Q={class:"col-12 col-md-4"},R=e("label",{for:"expiry-year",class:"form-label"},null,-1),W=e("option",{value:"",selected:"",disabled:""},"YY",-1),X=["value"],Z={class:"col-12 col-md-4 mt-6 mt-md-0"},$=e("label",{for:"checknum",class:"form-label"},[h(" 確認碼 "),e("span",{class:"text-danger"}," * ")],-1),ee={class:"col-12 mb-13"},se={class:"col-12 mb-4 mt-6 mt-md-0"},te=e("label",{for:"cardname",class:"form-label"},[h(" 持卡人姓名 "),e("span",{class:"text-danger"}," * ")],-1),re=e("p",{class:"text-gray-600 fs-6 fs-md-12 mb-0"}," 注意事項：為維護交易安全，本公司已配合國際組織全面採用信用卡3DS 2.0交易授權機制，如遇交易失敗，請洽詢發卡銀行或更換銀行卡片後重新交易。 ",-1),oe=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary w-100"}," 確認送出 ")],-1);function ae(r,t,le,ie,o,c){const n=b("VField"),d=b("ErrorMessage"),x=b("VForm");return i(),l("main",null,[e("section",D,[e("div",S,[A,B,e("div",null,[q,o.formattedCreditCardNumber?(i(),l("div",L,_(o.formattedCreditCardNumber),1)):V("",!0)])])]),e("section",E,[a(x,{onSubmit:c.submit},{default:p(({errors:m})=>[e("div",I,[e("div",T,[e("div",U,[e("div",j,[z,w(e("input",{id:"cardnum",name:"信用卡號",class:"form-control fs-6","onUpdate:modelValue":t[0]||(t[0]=s=>o.creditCardNumber=s),onInput:t[1]||(t[1]=(...s)=>c.formatCreditCardNumber&&c.formatCreditCardNumber(...s)),inputmode:"numeric"},null,544),[[M,o.creditCardNumber]])]),e("div",P,[e("div",G,[e("div",H,[J,a(n,{id:"deadlinemon",name:"年份",class:u(["form-select fs-6 text-gray-500",{"is-invalid":m.年份}]),modelValue:o.yearsValue,"onUpdate:modelValue":t[2]||(t[2]=s=>o.yearsValue=s),rules:"required",as:"select"},{default:p(()=>[K,(i(!0),l(g,null,v(o.months,s=>(i(),l("option",{key:s,value:s},_(s),9,O))),128))]),_:2},1032,["class","modelValue"]),a(d,{class:"invalid-feedback",name:"年份"})]),e("div",Q,[R,a(n,{id:"expiry-year",name:"月份",class:u(["form-select fs-6 text-gray-500 mt-2",{"is-invalid":m.月份}]),modelValue:o.expiryYear,"onUpdate:modelValue":t[3]||(t[3]=s=>o.expiryYear=s),rules:"required",as:"select"},{default:p(()=>[W,(i(!0),l(g,null,v(o.years,s=>(i(),l("option",{key:s,value:s},_(s),9,X))),128))]),_:2},1032,["class","modelValue"]),a(d,{class:"invalid-feedback",name:"月份"})]),e("div",Z,[$,a(n,{type:"text",id:"checknum",name:"確認碼",class:u(["form-control fs-6",{"is-invalid":m.確認碼}]),rules:"required",onInput:c.checkNum},null,8,["class","onInput"]),a(d,{class:"invalid-feedback",name:"確認碼"})])])]),e("div",ee,[e("div",se,[te,a(n,{type:"text",id:"cardname",name:"姓名",class:u(["form-control fs-6",{"is-invalid":m.姓名}]),rules:"required",placeholder:"請輸入卡片上的姓名"},null,8,["class"]),a(d,{class:"invalid-feedback",name:"姓名"})]),re]),oe])])])]),_:1},8,["onSubmit"])])])}const ue=N(Y,[["render",ae]]);export{ue as default};
