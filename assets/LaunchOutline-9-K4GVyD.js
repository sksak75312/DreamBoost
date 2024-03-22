import{A as T,_ as y,o as v,c as S,a,m as u,s as $,b as t,w as f,F,d as r,q as c,e as o,t as b}from"./index-ZKny8dII.js";import{l as g}from"./launchStore-ikl0B8cv.js";import{m as I}from"./memberStore-0F_aYTiz.js";import{m as M,C as L}from"./CameraIcon-zd3qWGoZ.js";import{m as B}from"./mixinVeeValidate-LQg3d4dX.js";import{m as q}from"./mixinFullScreenLoading-9dNja2ki.js";import{L as E}from"./LaunchNav-LBRqZkVR.js";import{M as N}from"./MessageIcon-8I9dQ8cP.js";import{S as U}from"./StarFull-hqQk7cwm.js";import"./sweetAlert2Store-vFUo6cdB.js";import"./userStore-UL1hxTbg.js";const H=T("dateStore",{actions:{minDay(e){const{launchData:s}=g();let l;s.proposalStartTime&&e!=="startDate"?l=new Date(s.proposalStartTime):l=new Date,l.setDate(l.getDate()+7);const p=l.getFullYear(),_=String(l.getMonth()+1).padStart(2,"0"),h=String(l.getDate()).padStart(2,"0");return`${p}-${_}-${h}`},currentDay(){const e=new Date,s=e.getFullYear(),l=String(e.getMonth()+1).padStart(2,"0"),p=String(e.getDate()).padStart(2,"0");return`${s}-${l}-${p}`}}}),j={},A={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none"},G=a("path",{d:"M6.94531 13.4469L18.8815 1.51074M18.8815 9.46819V1.97964C18.8815 1.72067 18.6716 1.51074 18.4126 1.51074H10.924",stroke:"#258794","stroke-width":"2.17021","stroke-linecap":"round"},null,-1),P=a("path",{d:"M5.5745 1.51074H1.52344V18.8724H18.8851V14.532",stroke:"#258794","stroke-width":"2.17021","stroke-linecap":"round"},null,-1),W=[G,P];function Y(e,s){return v(),S("svg",A,W)}const z=y(j,[["render",Y]]),J="/DreamBoost/images/logoWhite.png",O={mixins:[M,B,q],methods:{...u(g,["getLaunch"]),...u(I,["postCheckToken"]),...u(H,["minDay"]),async imageHandler(e){this.showFullScreenLoading();const s=await this.uploadImage(e);s&&(this.launchData.proposalMainImage=s),this.hideFullScreenLoading()},changeStartDate(e){this.launchData.proposalStartTime=e.target.value,this.launchData.proposalEndTime&&(this.launchData.proposalEndTime="")}},computed:{...$(g,["launchData","launchState"])},async mounted(){this.showFullScreenLoading(),this.postCheckToken();const e=sessionStorage.getItem("launchID");e&&(await this.getLaunch(e),this.launchState="put"),this.hideFullScreenLoading()},components:{LaunchNav:E,ShareIcon:z,MessageIcon:N,StarFull:U,CameraIcon:L}},K={class:"container mb-26"},Q={class:"col-xl-8 mx-auto"},R={class:"col-12 mb-10"},X=a("div",{class:"mb-2"},[a("label",{for:"file",class:"form-label mb-0 text-gray-800 fs-5 fw-normal"},[o(" 專案封面 "),a("span",{class:"text-danger"}," * ")])],-1),Z=a("p",{class:"mb-0 fs-6"}," 請提供 JPEG 或 PNG 檔，圖片尺寸至少 1200x 800 px (3:2)； 2MB 以內。 ",-1),aa={style:{width:"20px","margin-top":"-2px"}},ea={class:"col-12 mb-11"},sa={class:"row gy-3"},ta={class:"col-md-6 col-lg-3"},oa=a("label",{for:"start-date",class:"form-label lh-md"},[o(" 專案開始時間 "),a("span",{class:"text-danger"}," * ")],-1),la={class:"col-md-6 col-lg-3"},na=a("label",{for:"end-date",class:"form-label lh-md"},[o(" 專案結束時間 "),a("span",{class:"text-danger"}," * ")],-1),ia=a("div",{class:"col-lg-6"},[a("p",{class:"py-7 px-4 bg-bgc-paper fs-6 rounded-4 mb-0 lh-sm"}," 專案提交後需要七個工作天進行內容檢視，所以開始時間至少為 7 天後。募資天數最短為 7 天，最長為 60 天。系統預設募資開始時間為 12:00，結束時間為 23:59:59，如需調整請於提交後與您的專案經理討論。 ")],-1),ra={class:"col-md-5 align-self-start"},ca={class:"mb-7"},da=a("label",{for:"title",class:"form-label lh-md lterSpc-2"},[o(" 專案標題 "),a("span",{class:"text-danger"}," * ")],-1),ma={class:"mb-7"},pa=a("label",{for:"category",class:"form-label lh-md lterSpc-2"},[o(" 專案類別 "),a("span",{class:"text-danger"}," * ")],-1),ha=a("option",{value:"",disabled:"",selected:""},"請選擇一種類別",-1),ua=a("option",{value:"挺好夢"},"挺好夢",-1),ga=a("option",{value:"科技設計"},"科技設計",-1),_a=a("option",{value:"健康生活"},"健康生活",-1),fa=a("option",{value:"時尚"},"時尚",-1),ba=a("option",{value:"公共在地"},"公共在地",-1),ya=a("option",{value:"美妝"},"美妝",-1),va={class:"mb-7"},Sa=a("label",{for:"target",class:"form-label lh-md lterSpc-2"},[o(" 募資目標 "),a("span",{class:"text-danger"}," * ")],-1),xa=a("p",{class:"fs-6 mb-0 text-gray-500"}," 募資目標金額最低為 $5,000 元。設定目標金額時，除了考量專案執行的成本支出外，也必須考慮回饋項目的成本，總體而言必須滿足「最低計畫可執行資金」的門檻，才是合理的募資目標。 ",-1),Da={class:"mb-7"},wa=a("label",{for:"summary",class:"form-label lh-md lterSpc-2"},[o(" 內容摘要 "),a("span",{class:"text-danger"}," * ")],-1),Va={class:"col-md-6 mx-auto"},ka=a("p",{class:"mb-7"},"專案卡片預覽",-1),Ca={class:"card py-9 px-7 mb-16 border-2 border-primary"},Ta=["src"],$a={class:"card-body p-0"},Fa={class:"d-block mb-1 fs-6 text-primary"},Ia={class:"card-title mb-7 fs-5 fw-semibold text-gray-700"},Ma=a("h4",{class:"d-flex align-items-center gap-3 mb-7 fw-normal text-gray-600 fs-5"},[a("span",{class:"d-flex justify-content-center align-items-center bg-primary rounded-circle",style:{width:"35px",height:"35px"}},[a("img",{src:J,class:"img-fluid",alt:"DreamBoost Logo"})]),o(" 發起人：Andrea Blanchard ")],-1),La=a("div",{class:"progress bg-secondary-light mb-7 rounded-pill",role:"progressbar","aria-label":"Basic example","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{height:"10px",width:"100%"}},[a("div",{class:"progress-bar text-white bg-primary-dark rounded-pill",style:{width:"80%"}})],-1),Ba={class:"d-flex justify-content-between align-items-center"},qa=a("p",{class:"mb-0 fs-5"},[o(" 已募資 "),a("span",{class:"fw-bold text-danger mb-0"},"80%")],-1),Ea={class:"d-flex align-items-center gap-3"},Na={class:"d-flex gap-1"},Ua={class:"d-block text-primary",style:{width:"13px","margin-top":"-1px"}},Ha={class:"d-flex gap-1"},ja={class:"d-block text-secondary-dark",style:{width:"15px","margin-top":"-2px"}},Aa={class:"d-block",style:{width:"20px"}},Ga=a("button",{type:"submit",class:"btn btn-primary w-100"},"下一步",-1);function Pa(e,s,l,p,_,h){const x=r("LaunchNav"),D=r("CameraIcon"),d=r("VField"),m=r("ErrorMessage"),w=r("MessageIcon"),V=r("StarFull"),k=r("ShareIcon"),C=r("VForm");return v(),S(F,null,[t(x,{"current-page":"專案大綱"}),a("main",K,[a("div",Q,[t(C,{class:"row align-items-center",onSubmit:s[5]||(s[5]=n=>e.$router.push("/launch/content"))},{default:f(({errors:n})=>[a("div",R,[X,Z,a("label",{for:"file",class:c(["btn btn-primary-light d-flex justify-content-center align-items-center gap-2 text-gray-700 fs-6 rounded-0",{"border-danger":n.圖片上傳}])},[a("i",aa,[t(D)]),o(" 上傳封面照片 ")],2),t(d,{type:"file",id:"file",name:"圖片上傳",class:c(["form-control d-none",{"is-invalid":n.圖片上傳}]),rules:"image|required",onChange:h.imageHandler},null,8,["class","onChange"]),t(m,{class:"invalid-feedback",name:"圖片上傳"})]),a("div",ea,[a("div",sa,[a("div",ta,[oa,t(d,{type:"date",id:"start-date",name:"開始時間",class:c(["form-control py-3",{"is-invalid":n.開始時間}]),value:e.launchData.proposalStartTime,onChange:h.changeStartDate,rules:"required",min:e.minDay("startDate")},null,8,["class","value","onChange","min"]),t(m,{class:"invalid-feedback",name:"開始時間"})]),a("div",la,[na,t(d,{type:"date",id:"end-date",name:"結束時間",class:c(["form-control py-3",{"is-invalid":n.結束時間}]),modelValue:e.launchData.proposalEndTime,"onUpdate:modelValue":s[0]||(s[0]=i=>e.launchData.proposalEndTime=i),rules:"required",disabled:!e.launchData.proposalStartTime,min:e.minDay()},null,8,["class","modelValue","disabled","min"]),t(m,{class:"invalid-feedback",name:"結束時間"})]),ia])]),a("div",ra,[a("div",ca,[da,t(d,{type:"text",id:"title",name:"標題",placeholder:"40個字以內的標題",class:c(["form-control py-3 fs-6",{"is-invalid":n.標題}]),modelValue:e.launchData.proposalTitle,"onUpdate:modelValue":s[1]||(s[1]=i=>e.launchData.proposalTitle=i),rules:"required"},null,8,["class","modelValue"]),t(m,{class:"invalid-feedback",name:"標題"})]),a("div",ma,[pa,t(d,{id:"category",name:"類別",class:c(["form-select py-3 fs-6",{"is-invalid":n.類別}]),modelValue:e.launchData.proposalCategory,"onUpdate:modelValue":s[2]||(s[2]=i=>e.launchData.proposalCategory=i),rules:"required",as:"select"},{default:f(()=>[ha,ua,ga,_a,fa,ba,ya]),_:2},1032,["class","modelValue"]),t(m,{class:"invalid-feedback",name:"類別"})]),a("div",va,[Sa,t(d,{type:"number",id:"target",name:"募資目標",class:c(["form-control mb-2 py-3 fs-6",{"is-invalid":n.募資目標}]),modelValue:e.launchData.proposalTargetMoney,"onUpdate:modelValue":s[3]||(s[3]=i=>e.launchData.proposalTargetMoney=i),rules:"required|min_value:5000",placeholder:"5000",min:"5000"},null,8,["class","modelValue"]),t(m,{class:"invalid-feedback",name:"募資目標"}),xa]),a("div",Da,[wa,t(d,{id:"summary",name:"內容摘要",class:c(["form-control py-3 fs-6",{"is-invalid":n.內容摘要}]),modelValue:e.launchData.proposalSummary,"onUpdate:modelValue":s[4]||(s[4]=i=>e.launchData.proposalSummary=i),rules:"required|max:65",as:"textarea",placeholder:"請在65個字以內簡短描述專案內容，吸引瀏覽者點擊你的專案",rows:"6"},null,8,["class","modelValue"]),t(m,{class:"invalid-feedback",name:"內容摘要"})])]),a("div",Va,[ka,a("div",Ca,[a("img",{src:e.launchData.proposalMainImage||"https://fakeimg.pl/350x250",class:"card-img-top object-fit-cover rounded-2 mb-12",alt:"卡片預覽的圖片",style:{height:"250px"}},null,8,Ta),a("div",$a,[a("span",Fa,"# "+b(e.launchData.proposalCategory||"類別"),1),a("h3",Ia,b(e.launchData.proposalTitle||"產品名稱"),1),Ma,La,a("div",Ba,[qa,a("div",Ea,[a("span",Na,[o("11 "),a("i",Ua,[t(w)])]),a("span",Ha,[o(" 18 "),a("i",ja,[t(V)])])]),a("i",Aa,[t(k)])])])]),Ga])]),_:1})])])],64)}const ee=y(O,[["render",Pa]]);export{ee as default};
