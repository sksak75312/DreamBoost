import{z as l}from"./index-6sPLfC2Q.js";import{S as o}from"./sweetalert2.all-5piKeY6q.js";const u=l("sweetAlert2",{actions:{successAlert(t){return o.fire({icon:"success",iconColor:"#258794",title:t,showConfirmButton:!1,timer:1800})},errorAlert(t){return o.fire({icon:"error",title:t,showConfirmButton:!1,timer:1800})},confirmAlert(t){return o.mixin({customClass:{confirmButton:"btn btn-primary px-4",cancelButton:"btn btn-primary-light px-4 me-3"},buttonsStyling:!1}).fire({title:t,icon:"warning",showCancelButton:!0,confirmButtonText:"確認",cancelButtonText:"取消",reverseButtons:!0})}}});var m={VITE_URL:"https://api.dreamboost.shop",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDg5Mzk5MDcsImV4cCI6MTcxMTUzMTkwN30.BbIXGVkQOU2HqsiCg6UcwFZx-kBd7kdOP24kUD21c1M",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{successAlert:n,errorAlert:i}=u(),{VITE_URL:a}=m,c={proposalTitle:"",proposalMainImage:"",proposalCategory:"",proposalTargetMoney:5e3,proposalArticle:"",proposalSummary:"",proposalStartTime:"",proposalEndTime:"",proposalFAQs:[{question:"",answer:""}],proposalImages:["temp"],customizeProperty:{userName:"",userEmail:"",userTel:"",userLeader:"",userIdentity:"",userImage:"",userRepresent:"",registerName:"",displayName:"",introduction:"",fanPage:"",projectPage:""}},d=l("launchStore",{state:()=>({launchData:JSON.parse(JSON.stringify(c)),launchState:""}),actions:{async postLaunch(){let t;try{const e=await this.$http.post(`${a}/dreamboost/proposal/normal/proposal`,this.launchData),{message:s,success:r}=e.data;sessionStorage.setItem("launchID",e.data.data.proposalID),n(s),t=r}catch(e){i(e.response.data.message)}return t},async putLaunch(t){let e;try{const s=await this.$http.put(`${a}/dreamboost/proposal/admin/proposal/${t}`,this.launchData),{message:r,success:p}=s.data;n(r),e=p}catch(s){i(s.response.data.message)}return e},async getLaunch(t){try{const e=await this.$http.get(`${a}/dreamboost/proposal/normal/proposal/${t}`);this.launchData=e.data.data.result}catch(e){throw new Error(e)}},async submitLaunch(){let t;const e=sessionStorage.getItem("launchID");try{t=(await this.$http.post(`${a}/dreamboost/proposal/admin/changeToReview`,{proposalID:e})).data.success,n("提案已提交審核"),sessionStorage.removeItem("launchID"),this.launchData=JSON.parse(JSON.stringify(c))}catch(s){i(s.response.data.message)}return t},setUserEmail(t){this.launchData.customizeProperty.userEmail=t}}});export{d as l,u as s};
