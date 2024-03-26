import{A as I,m as T,_ as m,o as d,c as i,a as t,t as v,z as C,S as y,g as M,u as L,B as E,p as D,k as x,b as B,F as c,r as u,d as b,j as f}from"./index-oVBGm4bI.js";import{m as w}from"./mixinSwalToast-bZvn4e3b.js";import{m as $}from"./mixinFullScreenLoading-9dNja2ki.js";const P=I("adminStore",{state:()=>({denyProposalData:"",name:"adminStore"}),getters:{getUserName:e=>`傳出的內容為${e.name}`},actions:{updateDenyModalData(e){this.denyProposalData=e}}}),U={props:["proposalData"],data(){return{}},methods:{...T(P,["updateDenyModalData"]),emitActive(){this.$emit("emitActive",this.proposalData.proposalID,this.proposalData.proposalTitle)},emitDeny(){this.updateDenyModalData(this.proposalData),this.$emit("emitDeny")}}},A={class:"card bg-transparent border-0"},R={class:"card-body bg-transparent py-2 px-3 py-md-3 px-md-6 px-lg-8 border rounded d-flex justify-content-between align-items-center"},F={class:"w-100 row align-items-center g-0"},j={class:"col-12 col-sm-7"},V={class:"d-flex align-items-center"},O=["src"],N={class:"flex-grow-1 text-white text-truncate"},q={class:"mb-0 fs-14 fs-md-5 text-truncate"},G={class:"col-12 col-sm-5"},Y={key:0,class:"d-flex justify-content-sm-end align-items-center"},z=t("button",{class:"btn btn-outline-dark-pr px-2 px-md-4 px-lg-6"},"查看",-1),H={key:1,class:"d-flex justify-content-end align-items-center"},J=t("p",{class:"mb-0 text-secondary-light"},"審查通過",-1),K=["href"];function Q(e,s,a,h,l,o){return d(),i("div",A,[t("div",R,[t("div",F,[t("div",j,[t("div",V,[t("img",{src:a.proposalData.proposalMainImage,alt:"",class:"object-fit-cover rounded-pill me-2 me-md-4 me-lg-8",width:"48",height:"48"},null,8,O),t("div",N,[t("p",q,v(a.proposalData.proposalTitle),1)])])]),t("div",G,[a.proposalData.proposalStatus==="review"?(d(),i("div",Y,[z,t("button",{class:"btn btn-outline-dark-pr px-2 px-md-4 px-lg-6 ms-1 ms-sm-2 ms-md-4",onClick:s[0]||(s[0]=(...n)=>o.emitActive&&o.emitActive(...n))},"通過"),t("button",{class:"btn btn-outline-dark-pr px-2 px-md-4 px-lg-6 ms-1 ms-sm-2 ms-md-4",onClick:s[1]||(s[1]=(...n)=>o.emitDeny&&o.emitDeny(...n))},"退回")])):a.proposalData.proposalStatus==="active"?(d(),i("div",H,[J,t("a",{class:"btn btn-outline-dark-pr px-2 px-md-4 px-lg-6 ms-1 ms-sm-2 ms-md-4",href:`/#/product/${a.proposalData.proposalID}/info`,target:"_blank"},"查看",8,K)])):C("",!0)])])])])}const W=m(U,[["render",Q]]);var X={VITE_URL:"https://api.dreamboost.shop",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g}=X,Z={data(){return{modalInstance:"",denyMessages:""}},methods:{show(){this.denyMessages="",this.modalInstance.show()},hide(){this.modalInstance.hide()},doubleCheck(){y.fire({title:"確定要退回提案嗎？",icon:"question",allowOutsideClick:!1,showCancelButton:!0,buttonsStyling:!0,confirmButtonText:"確認",cancelButtonText:"取消"}).then(e=>{e.isConfirmed&&this.denyProposal(),e.isDismissed}).catch(()=>{this.addToast({content:"退回提案過程出現錯誤",style:"error"})})},denyProposal(){this.showFullScreenLoading(),Promise.all([this.$http.post(`${g}/dreamboost/proposal/admin/changeToDraft`,{proposalID:this.denyProposalData.proposalID}),this.$http.post(`${g}/dreamboost/message/admin/message`,{messageToUserID:`${this.denyProposalData.proposalByUserID}`,messageTitle:"提案審核失敗",messageContent:`退回原因：${this.denyMessages}`,messageTime:new Date().getTime()})]).then(()=>{this.hideFullScreenLoading(),this.addToast({content:"已經提案退回",style:"info"}),this.hide(),this.$emit("updateProposalDatas")}).catch(()=>{this.hideFullScreenLoading(),this.addToast({content:"退回提案過程出現錯誤，請聯繫工程師",style:"error"})})}},mounted(){this.modalInstance=new this.$bs.Modal(this.$refs.modalInstance,{focus:!1})},computed:{...M(P,["denyProposalData"])},components:{},watch:{},mixins:[w,$]},tt=e=>(D("data-v-1bcd4a9a"),e=e(),x(),e),et={class:"modal fade",ref:"modalInstance","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",style:{"background-color":"rgba(11, 17, 28, 0.6)"}},st={class:"modal-dialog modal-lg modal-dialog-centered"},ot={class:"modal-content bg-gray-700 border border-light"},at={class:"modal-header border-bottom-0"},nt={class:"modal-body"},dt=tt(()=>t("div",{class:"border-bottom"},[t("h2",{class:"mb-4 text-white fw-nromal text-center"},"退回專案"),t("p",{class:"mb-8 text-dark-pr text-center fs-18"},"請輸入退回原因")],-1)),it={class:"mt-12 px-10"},lt={class:"card bg-transparent border-0"},rt={class:"card-body bg-transparent pt-3 pb-6 ps-8 pe-3 border-gray-500 border-bottom d-flex justify-content-between"},ct={class:"d-flex"},pt=["src"],mt={class:"d-flex flex-column justify-content-center text-white"},ht={class:"mb-0"},_t={class:"modal-footer border-top-0"};function ut(e,s,a,h,l,o){return d(),i("div",et,[t("div",st,[t("div",ot,[t("div",at,[t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:s[0]||(s[0]=(...n)=>o.hide&&o.hide(...n))})]),t("div",nt,[dt,t("div",it,[t("div",lt,[t("div",rt,[t("div",ct,[t("img",{src:e.denyProposalData.proposalMainImage,alt:"主要圖片",class:"rounded-pill me-10",width:"48",height:"48"},null,8,pt),t("div",mt,[t("p",ht,v(e.denyProposalData.proposalTitle),1)])])])]),L(t("textarea",{class:"form-control bg-transparent text-white mt-16",placeholder:"輸入退回原因",id:"",style:{height:"150px"},"onUpdate:modelValue":s[1]||(s[1]=n=>l.denyMessages=n)},null,512),[[E,l.denyMessages]])])]),t("div",_t,[t("button",{type:"button",class:"btn btn-dark-pr py-3 px-16",onClick:s[2]||(s[2]=(...n)=>o.doubleCheck&&o.doubleCheck(...n))},"儲存並關閉")])])])],512)}const bt=m(Z,[["render",ut],["__scopeId","data-v-1bcd4a9a"]]);var ft={VITE_URL:"https://api.dreamboost.shop",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p}=ft,gt={data(){return{reviewProposals:[],activeProposals:[]}},methods:{showDenyProposalModal(){this.$refs.proposalModal.show()},getDatas(){this.showFullScreenLoading({canCancel:!1,loader:"dots"}),Promise.all([this.$http.get(`${p}/dreamboost/proposal/admin/inReviewProposals`),this.$http.get(`${p}/dreamboost/proposal/guest/inActiveProposals`)]).then(e=>{this.reviewProposals=e[0].data.data.result,this.activeProposals=e[1].data.data.result,this.addToast({content:"提案資料取得完畢"}),this.hideFullScreenLoading()}).catch(()=>{this.addToast({content:"取得API資料過程出現錯誤，請嘗試重新整理畫面再次取得。",style:"error"}),this.hideFullScreenLoading()})},activateProposal(e,s){y.fire({title:"確認審核？",text:`${s}`,footer:"注意，一旦審核通過即不可再修改狀態了。",icon:"question",allowOutsideClick:!1,showCancelButton:!0,buttonsStyling:!0,confirmButtonText:"確認",cancelButtonText:"取消"}).then(a=>a.isConfirmed?(this.showFullScreenLoading(),this.$http.post(`${p}/dreamboost/proposal/admin/changeToActive`,{proposalID:e})):a.isDismissed?Promise.reject(new Error("User cancelled")):Promise.reject(new Error("其他錯誤狀況"))).then(()=>{this.hideFullScreenLoading(),this.addToast({content:`${s} 已上架完成`}),this.getDatas()}).catch(a=>{this.hideFullScreenLoading(),a.message!=="User cancelled"&&this.addToast({content:"審核過程出現錯誤，請重新整理後再次操作。如果重複出現此提示請洽工程師。",style:"error"})})}},components:{ProposalCard:W,ProposalModal:bt},mounted(){this.getDatas()},watched:{},mixins:[$,w]},S=e=>(D("data-v-cd942516"),e=e(),x(),e),vt={class:"container"},yt={class:"row justify-content-center"},Dt={class:"col-12 col-lg-10"},xt=S(()=>t("div",{class:"d-flex mb-4"},[t("p",{class:"mb-0 fs-3 text-white mt-19"},"待審查方案")],-1)),wt={class:"l-CardGapY"},$t={class:"row justify-content-center"},Pt={class:"col-12 col-lg-10"},St=S(()=>t("div",{class:"d-flex mb-4"},[t("p",{class:"mb-0 fs-3 text-white mt-19"},"審查成功方案")],-1)),kt={class:"l-CardGapY"};function It(e,s,a,h,l,o){const n=b("ProposalModal"),_=b("ProposalCard");return d(),i(c,null,[B(n,{ref:"proposalModal",onUpdateProposalDatas:o.getDatas},null,8,["onUpdateProposalDatas"]),t("div",vt,[t("div",yt,[t("div",Dt,[xt,t("div",wt,[(d(!0),i(c,null,u(l.reviewProposals,r=>(d(),f(_,{"proposal-data":r,key:r.proposalID,onEmitActive:o.activateProposal,onEmitDeny:o.showDenyProposalModal},null,8,["proposal-data","onEmitActive","onEmitDeny"]))),128))])])]),t("div",$t,[t("div",Pt,[St,t("div",kt,[(d(!0),i(c,null,u(l.activeProposals,(r,k)=>(d(),f(_,{"proposal-data":r,key:`${k}-list`},null,8,["proposal-data"]))),128))])])])])],64)}const Lt=m(gt,[["render",It],["__scopeId","data-v-cd942516"]]);export{Lt as default};
