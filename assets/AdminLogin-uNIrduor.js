import{L as b}from"./AdminLogo-DwhKIPdP.js";import{_ as p,c as u,a as e,b as l,w as g,a0 as x,F as f,e as h,r as i,o as _,j as y}from"./index-_qtn5XR0.js";const w={data(){return{fullScreenLoadingInstance:!1}},methods:{showFullScreenLoading({canCancel:s=!0,color:t="#000",loader:a="spinner",backgroundColor:r="#fff",opacity:d=.5,zIndex:o=9999}={}){this.fullScreenLoadingInstance=this.$loading.show({canCancel:s,color:t,loader:a,"background-color":r,opacity:d,"z-index":o})},hideFullScreenLoading(){this.fullScreenLoadingInstance.hide()}},mounted(){}},L={data(){return{}},components:{LogoIcon:b},methods:{onSubmit(){this.showFullScreenLoading({backgroundColor:"#FAA",loader:"dots"})}},mounted(){},mixins:[w]},S={class:"navbar navbar-expand-md container-fluid border-bottom border-5 border-dark-pr bg-gray-800 p-0"},v={class:"container"},k={class:"container flex-grow-1 d-flex"},I={class:"flex-grow-1 row justify-content-center align-items-center"},F={class:"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 pt-8"},C={class:"px-4 px-md-10 py-5 py-md-10 py-xxl-16 border border-white bg-gray-700 rounded rounded-3"},N=e("p",{class:"mb-5 fs-3 text-white text-center text-md-start"},[h("管理員登入"),e("span",{class:"lh-1 fs-6 ms-2 text-dark-pr d-none d-md-block"},"Sign In")],-1),V=y('<div class="mb-6"><label for="adminEmail" class="form-label text-gray-300">帳號</label><input type="email" class="form-control borderl bg-white text-white" style="--bs-bg-opacity:.15;" placeholder="電子郵件" id="adminEmail" aria-describedby="emailHelp"></div><div class="mb-8 mb-md-16 mb-xxl-24"><label for="adminPwd" class="form-label text-gray-300">密碼</label><input type="password" class="form-control borderl bg-white text-white" style="--bs-bg-opacity:.15;" placeholder="密碼" id="adminPwd" aria-describedby="emailHelp"></div><button type="submit" class="btn btn-dark-pr d-block mx-auto px-21 mb-6">登入 </button><p class="fs-6 text-primary text-center user-select-none"><span class="border-bottom border-primary">不可能忘記密碼吧！</span></p>',4),A=[V];function B(s,t,a,r,d,o){const c=i("LogoIcon"),m=i("RouterLink");return _(),u(f,null,[e("nav",S,[e("div",v,[l(m,{to:"/admin/login",class:"p-0"},{default:g(()=>[l(c,{style:{height:"72px"}})]),_:1})])]),e("div",k,[e("div",I,[e("div",F,[e("div",C,[N,e("form",{onSubmit:t[0]||(t[0]=(...n)=>o.onSubmit&&o.onSubmit(...n)),onKeydown:t[1]||(t[1]=x((...n)=>o.onSubmit&&o.onSubmit(...n),["enter"]))},A,32)])])])])],64)}const H=p(L,[["render",B]]);export{H as default};
