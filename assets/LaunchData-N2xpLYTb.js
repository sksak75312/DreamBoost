import{B as f,_ as g,s as n,x as b,c as _,b as d,a as e,k as o,n as r,e as l,f as v,F as D,o as P,r as c}from"./index-WtwVpptg.js";import{m as u}from"./memberStore-_ijtevef.js";import{L as I}from"./LaunchNav-bwT0lH7M.js";import{m as w,C as U}from"./CameraIcon-H97NrzfT.js";var x={VITE_URL:"https://api.dreamboost.shop",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDg5Mzk5MDcsImV4cCI6MTcxMTUzMTkwN30.BbIXGVkQOU2HqsiCg6UcwFZx-kBd7kdOP24kUD21c1M",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m}=x,p=f("userStore",{state:()=>({userData:{userAvatarImage:"",userBirthday:"1970/01/01",userGender:"male",userTelephone:"",customizeProperty:{userEmail:"",launchLeader:"",launchIdentity:"",registerName:"",displayName:"",introduction:"",fanPage:"",projectPage:""}}}),actions:{getUserData(){this.$http.get(`${m}/dreamboost/user/normal/userprofile`).then(t=>{this.userData=t.data.data.result}).catch(t=>{console.log(t);const{userEmail:s}=u();this.userData.customizeProperty.userEmail=s})},postUserData(){this.$http.post(`${m}/dreamboost/user/normal/userprofile`,this.userData).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}}}),N={mixins:[w],methods:{...n(p,["getUserData","postUserData"]),...n(u,["postCheckToken"]),async imageHandler(t){this.userData.userAvatarImage=await this.uploadImage(t)}},computed:{...b(p,["userData"])},async mounted(){await this.postCheckToken(),await this.getUserData()},components:{LaunchNav:I,CameraIcon:U}},z={class:"container"},k={class:"col-xl-8 mx-auto mb-26"},V=e("p",{class:"fs-6"}," 在這個區塊您將撰寫提案者需要提供的個人資料及身份驗證，在填寫提案團隊資訊的同時，您可以增加更多和本次專案相關的資訊連結及粉絲專頁，讓瀏覽者對您有更多的了解。 ",-1),E={class:"row gy-6"},M={class:"col-lg-6"},C=e("label",{for:"launchLeader",class:"form-label"},[l(" 提案負責人姓名 "),e("span",{class:"text-danger"}," * ")],-1),L={class:"col-12"},T={class:"row gy-3"},j={class:"col-md-6"},B=e("label",{for:"email",class:"form-label"},[l(" 電子郵件 "),e("span",{class:"text-danger"}," * ")],-1),X=e("div",{class:"col-md-6 align-self-end"},[e("button",{type:"button",class:"btn btn-primary-light w-100 w-md-auto"}," 發送驗證信 ")],-1),S={class:"col-12"},O={class:"row gy-3"},R={class:"col-md-6"},J=e("label",{for:"tel",class:"form-label"},[l(" 行動電話 "),e("span",{class:"text-danger"}," * ")],-1),F=e("div",{class:"col-md-6 align-self-end"},[e("button",{type:"button",class:"btn btn-primary-light w-100 w-md-auto"}," 發送驗證碼 ")],-1),W={class:"col-12"},$={class:"row"},A={class:"col-md-6"},G=e("label",{for:"identity",class:"form-label"},[l(" 提案人身份 "),e("span",{class:"text-danger"}," * ")],-1),Y={class:"d-flex gap-2"},H=e("select",{id:"identity",class:"form-select w-50 w-md-25"},[e("option",{value:"個人"},"個人"),e("option",{value:"公司"},"公司")],-1),Q=e("p",{class:"mt-1 fs-12 text-gray-300"}," 提案者必須是具備完全行為能力的自然人、合法登記的法人或團體。 ",-1),Z={class:"col-md-6"},q=e("label",{for:"registerName",class:"form-label"},[l(" 登記名稱 "),e("span",{class:"text-danger"}," * ")],-1),K=e("p",{class:"mt-1 fs-6 text-gray-300"}," 請填寫與上方身分證字號 / 統一編號資料相符之登記名稱。如您的提案身份為公司 / 非營利組織，提案人身份及登記名稱將揭露於專案頁面中。 ",-1),ee={class:"col-12"},te={class:"row"},se={class:"col-md-6"},ae={class:"d-flex align-items-center mb-9"},oe=["src"],re=e("h5",{class:"mt-0 mb-1 fs-6"},"2MB 以內的 JPEG 或 PNG 檔",-1),le=e("p",{class:"mb-2 fs-6"}," 圖片為目前的會員圖片，建議更新為適合此專案的個人或團隊照片。 ",-1),ie={for:"feedbackImg",class:"btn btn-primary d-flex justify-content-center gap-2 px-0 py-2 w-100 rounded-0"},ne={style:{width:"20px","margin-top":"-2px"}},de=e("label",{for:"displayName",class:"form-label"},[l(" 顯示名稱 "),e("span",{class:"text-danger"}," * ")],-1),ce=e("p",{class:"mt-1 fs-6 text-gray-300"}," 顯示名稱將會被瀏覽者視為此計畫的執行團隊。此名稱為您目前的會員名稱，建議更新為適合此專案的個人或團隊名稱。 ",-1),me={class:"col-md-6"},pe=e("label",{for:"selfIntroduction",class:"form-label"},[l(" 自我介紹 "),e("span",{class:"text-danger"}," * ")],-1),ue={class:"col-12"},he=e("label",{for:"fansPage",class:"form-label"}," 粉絲專頁 ",-1),ye={class:"col-12"},fe=e("label",{for:"projectPage",class:"form-label"}," 專案網頁 ",-1),ge={class:"col-12 mt-17"},be={class:"row justify-content-between"},_e=e("div",{class:"col-md-3"},[e("button",{type:"button",class:"btn btn-gray-400 px-7 w-100 mb-4 mb-md-0"}," 刪除專案 ")],-1),ve={class:"col-md-8 col-lg-6 d-flex justify-content-end flex-wrap"},De=e("button",{type:"button",class:"btn btn-primary-light px-17 mb-4 mb-md-0 me-md-6 w-100 w-md-auto"}," 預覽專案 ",-1);function Pe(t,s,Ie,we,Ue,i){const h=c("LaunchNav"),y=c("CameraIcon");return P(),_(D,null,[d(h,{"current-page":"提案資料"}),e("div",z,[e("div",k,[V,e("form",E,[e("div",M,[C,o(e("input",{type:"text",id:"launchLeader",class:"form-control border-primary-light py-3",placeholder:"為核實及平台提案資料留存用，請填寫真實姓名。","onUpdate:modelValue":s[0]||(s[0]=a=>t.userData.customizeProperty.launchLeader=a)},null,512),[[r,t.userData.customizeProperty.launchLeader]])]),e("div",L,[e("div",T,[e("div",j,[B,o(e("input",{type:"email",id:"email",name:"email",class:"form-control border-primary-light py-3",placeholder:"預設帶入會員的電子郵件",disabled:"","onUpdate:modelValue":s[1]||(s[1]=a=>t.userData.customizeProperty.userEmail=a)},null,512),[[r,t.userData.customizeProperty.userEmail]])]),X])]),e("div",S,[e("div",O,[e("div",R,[J,o(e("input",{type:"tel",id:"tel",name:"tel",class:"form-control border-primary-light py-3",placeholder:"+8869-XX-XXX-XXX","onUpdate:modelValue":s[2]||(s[2]=a=>t.userData.userTelephone=a)},null,512),[[r,t.userData.userTelephone]])]),F])]),e("div",W,[e("div",$,[e("div",A,[G,e("div",Y,[H,o(e("input",{type:"text",id:"identity1",class:"form-control border-primary-light py-3",placeholder:"請輸入身分證字號","onUpdate:modelValue":s[3]||(s[3]=a=>t.userData.customizeProperty.launchIdentity=a)},null,512),[[r,t.userData.customizeProperty.launchIdentity]])]),Q]),e("div",Z,[q,o(e("input",{type:"text",id:"registerName",name:"registerName",class:"form-control border-primary-light py-3","onUpdate:modelValue":s[4]||(s[4]=a=>t.userData.customizeProperty.registerName=a)},null,512),[[r,t.userData.customizeProperty.registerName]]),K])])]),e("div",ee,[e("div",te,[e("div",se,[e("div",ae,[e("img",{src:t.userData.userAvatarImage||"https://fakeimg.pl/120x120",class:"flex-shrink-0 me-7 img-fluid object-fit-cover",style:{width:"120px",height:"120px"},alt:"..."},null,8,oe),e("div",null,[re,le,e("input",{type:"file",id:"feedbackImg",class:"d-none",onChange:s[5]||(s[5]=(...a)=>i.imageHandler&&i.imageHandler(...a))},null,32),e("label",ie,[e("i",ne,[d(y)]),l(" 上傳封面照片 ")])])]),e("div",null,[de,o(e("input",{type:"text",id:"displayName",name:"registerName",class:"form-control border-primary-light py-3",placeholder:"預設帶入會員名稱","onUpdate:modelValue":s[6]||(s[6]=a=>t.userData.customizeProperty.displayName=a)},null,512),[[r,t.userData.customizeProperty.displayName]]),ce])]),e("div",me,[pe,o(e("textarea",{name:"",id:"selfIntroduction",rows:"10",class:"form-control border-primary-light py-3","onUpdate:modelValue":s[7]||(s[7]=a=>t.userData.customizeProperty.introduction=a)},null,512),[[r,t.userData.customizeProperty.introduction]])])])]),e("div",ue,[he,o(e("input",{type:"text",id:"fansPage",name:"fansPage",class:"form-control border-primary-light py-3",placeholder:"如果有和計畫相關的粉絲專頁，請直接貼上完整網址。","onUpdate:modelValue":s[8]||(s[8]=a=>t.userData.customizeProperty.fanPage=a)},null,512),[[r,t.userData.customizeProperty.fanPage]])]),e("div",ye,[fe,o(e("input",{type:"text",id:"projectPage",name:"fansPage",class:"form-control border-primary-light py-3",placeholder:"如果有和計畫相關的粉絲專頁，請直接貼上完整網址。","onUpdate:modelValue":s[9]||(s[9]=a=>t.userData.customizeProperty.projectPage=a)},null,512),[[r,t.userData.customizeProperty.projectPage]])]),e("div",ge,[e("div",be,[_e,e("div",ve,[De,e("button",{type:"submit",class:"btn btn-primary px-17 w-100 w-md-auto",onClick:s[10]||(s[10]=v((...a)=>t.postUserData&&t.postUserData(...a),["prevent"]))}," 提交專案 ")])])])])])])],64)}const Ve=g(N,[["render",Pe]]);export{Ve as default};
