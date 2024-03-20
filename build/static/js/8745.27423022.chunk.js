"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[8745],{8470:(e,t,a)=>{a(6723)},9826:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var s=a(2483),r=a(3376),n=a(9517),o=a(2595),l=(a(1728),a(3117)),i=a(1222),d=a(9918),c=(a(5549),a(614),a(8470),a(4848)),u=a(7757),m=a(3074),b=a(3191),p=a(1914),x=(a(7650),a(82)),h=(a(5699),a(5442)),A=a(1935),f=(a(5989),a(1250)),g=a(6723);const S=()=>{const[e,t]=(0,s.useState)([]),[a,S]=(0,s.useState)([]),[_,N]=(0,s.useState)([]),[j,w]=(0,s.useState)([]),[v,y]=(0,s.useState)([]),[R,E]=(0,s.useState)(0),I=(0,u.wA)(),[D,C]=(0,s.useState)({startDate:new Date,endDate:new Date}),O=JSON.parse(localStorage.getItem("authInfo"));(0,r.zy)();console.log("authInfo=",O);let[F,k]=(0,s.useState)(!1);const[T,M]=(0,s.useState)("");let[L,B]=(0,s.useState)(O?O.id:null);(0,r.Zp)();const{newNotificationMessage:q,newNotificationStatus:P}=(0,s.useState)(""),H="subscription-cancelledby-ambassador";(0,s.useEffect)((()=>{""!==q&&(1===P&&p.hm.success(q,"Success"),0===P&&p.hm.error(q,"Error"),I((0,m.fd)())),z()}),[]),d.oR.configure();const z=()=>{i.A.get("admin/".concat(H)).then((e=>{if(e.data.status){d.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),S(e.data.data);var t=e.data.data;let s=[];t.forEach((function(e){t.forEach((function(e){e.userId&&s.push({Ambassador_firstname:e.userId.firstname||"N/A",Ambassador_lastname:e.userId.surname||"N/A",referral_code:e.userId.referral_code||"N/A",subscription_cancellation_date:e.cancellation_date||"N/A"})}))})),N([{name:"AMBASSADOR FIRST NAME",selector:(e,t)=>e.Ambassador_firstname,cell:e=>e.Ambassador_firstname,sortable:!0},{name:"AMBASSADOR LAST NAME",selector:(e,t)=>e.Ambassador_lastname,cell:e=>e.Ambassador_lastname,sortable:!0},{name:"AMBASSADOR REFERRAL CODE",selector:(e,t)=>e.referral_code,cell:e=>(0,g.jsx)("span",{children:e.referral_code}),sortable:!0},{name:"DATE OF HVG SUBSCRIPTION CALCELLATION",selector:(e,t)=>e.subscription_cancellation_date,cell:e=>{const t=new Date(e.subscription_cancellation_date),a=t.getDate(),s=t.toLocaleString("en-us",{month:"short"}),r=t.getFullYear(),n="".concat(a," ").concat(s,", ").concat(r);return(0,g.jsx)("span",{children:n})},sortable:!0}]),y(s),console.log(a)}})).catch((e=>{d.oR.dismiss(),e.response&&d.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+H)},U=()=>{const e=[["AMBASSADOR FIRST NAME","AMBASSADOR LAST NAME","AMBASSADOR REFERRAL CODE","DATE OF SUBSCRIPTION CANCELLATION"],...v.map((e=>{let{Ambassador_firstname:t,Ambassador_lastname:a,referral_code:s,subscription_cancellation_date:r}=e;return[t,a,s,r]}))].map((e=>e.join(","))).join("\n"),t=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,f.saveAs)(t,"subscription_cancelled_by_ambassador.csv")};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,g.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,g.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,g.jsx)(n.A,{}),(0,g.jsx)("main",{className:"flex-1 overflow-y-auto pt-2 px-2  bg-base-200",children:(0,g.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,g.jsx)("div",{className:"text-xl font-semibold py-1 px-2",children:"Subscription cancelled by Ambassador"}),(0,g.jsx)("div",{className:"divider mt-2"}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("div",{className:"flex w-[100%] align-center",children:(0,g.jsx)(l.l1,{initialValues:{start_date:"",end_date:""},validationSchema:x.A,onSubmit:(e,t)=>{let{resetForm:s}=t;((e,t)=>{let{resetForm:s}=t;console.log("This is ambassador handleSubmit values check:",e);let r="subscription-cancelledby-ambassador";e.start_date&&(r+="/"+e.start_date),e.end_date&&(r+="/"+e.end_date),i.A.get("admin/".concat(r),e).then((e=>{if(e.data.status){d.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),S(e.data.data),console.log("userReport datewise:",e.data.data),console.log("userReport=",a);var t=e.data.data;let s=[];t.forEach((function(e){t.forEach((function(e){e.userId&&s.push({Ambassador_firstname:e.userId.firstname||"N/A",Ambassador_lastname:e.userId.surname||"N/A",referral_code:e.userId.referral_code||"N/A",subscription_cancellation_date:e.cancellation_date||"N/A"})}))})),y(s)}})).catch((e=>{d.oR.dismiss(),e.response&&(s(),d.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})(e,{resetForm:s})},children:e=>{let{resetForm:t}=e;return(0,g.jsxs)(l.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("label",{htmlFor:"start_date",children:"Start Date"}),(0,g.jsx)(l.D0,{name:"start_date",type:"date",className:"input input-bordered w-full"}),(0,g.jsx)(l.Kw,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("label",{htmlFor:"end_date",children:"End Date"}),(0,g.jsx)(l.D0,{name:"end_date",type:"date",className:"input input-bordered w-full"}),(0,g.jsx)(l.Kw,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),(0,g.jsxs)("div",{className:"flex align-center justify-between mt-6",children:[(0,g.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Search"}),(0,g.jsx)("button",{type:"button",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>(e=>{e(),z()})(t),children:"Reset"}),(0,g.jsx)("button",{type:"button",className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:U,children:"Export"})]})]})}})})}),(0,g.jsx)("div",{className:"overflow-x-auto w-full",children:(0,g.jsx)(A.A,{columns:_,data:v,children:(0,g.jsx)(h.Ay,{title:"Table",noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pagination:!0,highlightOnHover:!0,customStyles:{rows:{style:{minHeight:"50px"}},cells:{style:{whiteSpace:"nowrap"}}}})})})]})})]}),(0,g.jsx)(c.A,{})]}),(0,g.jsx)(b.A,{}),(0,g.jsx)(o.A,{})]})}},1728:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(947);const r=s.Ik().shape({email:s.Yj().email().required("Email is required"),password:s.Yj().required("Password is required.").min(6,"Password is too short - should be 6 chars minimum.").max(20,"Password is too long - should be 20 chars maximum.")})},82:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(947);const r=s.Ik().shape({start_date:s.p6().required("Start date is required"),end_date:s.p6().required("End date is required")})}}]);
//# sourceMappingURL=8745.27423022.chunk.js.map