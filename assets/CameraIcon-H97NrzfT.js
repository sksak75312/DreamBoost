import{_ as l,o as m,c as d,a as p}from"./index-WtwVpptg.js";var _={VITE_URL:"https://api.dreamboost.shop",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDg5Mzk5MDcsImV4cCI6MTcxMTUzMTkwN30.BbIXGVkQOU2HqsiCg6UcwFZx-kBd7kdOP24kUD21c1M",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const k={methods:{async uploadImage(e){var s;let t="";const{VITE_URL:r}=_;try{const o=(s=document.cookie.split("; ").find(i=>i.startsWith("db")))==null?void 0:s.split("=")[1];this.$http.defaults.headers.common.Authorization=o;const n=e.target.files[0],a=new FormData;a.append("image",n);const c=await this.$http.post(`${r}/dreamboost/upload`,a);t=c.data.data.result,console.log(c)}catch(o){throw new Error(o)}return t}}},h={},I={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},M=p("path",{d:"M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z",fill:"currentColor"},null,-1),f=[M];function u(e,t){return m(),d("svg",I,f)}const C=l(h,[["render",u]]);export{C,k as m};
