import{_ as l,c as d,a as e,b as s,w as r,F as i,r as n,o as u,e as a}from"./index-2h2Iffh6.js";const _={data(){return{userId:localStorage.getItem("userID")}}},p={class:"bg-bgc-paper py-8"},m={class:"container"},b={class:"nav justify-content-md-center gap-19"},f={class:"nav-item"},h={class:"nav-item"},v={class:"nav-item"},k={class:"nav-item"},I={class:"nav-item"};function g(w,x,V,B,o,R){const t=n("RouterLink"),c=n("RouterView");return u(),d(i,null,[e("div",p,[e("nav",m,[e("ul",b,[e("li",f,[s(t,{to:`/userboard/${o.userId}/personal`,class:"userbd-link"},{default:r(()=>[a(" 個人頁面 ")]),_:1},8,["to"])]),e("li",h,[s(t,{to:`/userboard/${o.userId}/favorite`,class:"userbd-link"},{default:r(()=>[a(" 收藏專案 ")]),_:1},8,["to"])]),e("li",v,[s(t,{to:`/userboard/${o.userId}/sponsorrecord`,class:"userbd-link"},{default:r(()=>[a(" 贊助紀錄 ")]),_:1},8,["to"])]),e("li",k,[s(t,{to:`/userboard/${o.userId}/proposalrecord`,class:"userbd-link"},{default:r(()=>[a(" 提案紀錄 ")]),_:1},8,["to"])]),e("li",I,[s(t,{to:`/userboard/${o.userId}/news`,class:"userbd-link"},{default:r(()=>[a(" 最新通知 ")]),_:1},8,["to"])])])])]),s(c)],64)}const N=l(_,[["render",g]]);export{N as default};
