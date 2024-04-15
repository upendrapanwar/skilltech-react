"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[8305],{8470:(e,t,s)=>{s(6723)},4122:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(2483),r=s(3376),o=s(2659),n=s(2595),i=(s(1728),s(3117)),d=s(1222),l=s(9918),c=(s(5549),s(614),s(8470),s(4848)),u=s(7757),m=s(3074),p=s(3191),b=s(1914),x=(s(7650),s(82)),h=(s(5699),s(5442)),S=s(1935),f=(s(5989),s(1250)),A=s(6723);const g=()=>{const[e,t]=(0,a.useState)([]),[s,g]=(0,a.useState)([]),[_,j]=(0,a.useState)([]),[w,v]=(0,a.useState)([]),[N,R]=(0,a.useState)([]),[D,y]=(0,a.useState)(0),E=(0,u.wA)(),[O,I]=(0,a.useState)({startDate:new Date,endDate:new Date}),T=JSON.parse(localStorage.getItem("authInfo"));(0,r.zy)();console.log("authInfo=",T);let[F,C]=(0,a.useState)(!1);const[k,B]=(0,a.useState)("");let[M,q]=(0,a.useState)(T?T.id:null);(0,r.Zp)();const{newNotificationMessage:P,newNotificationStatus:U}=(0,a.useState)(""),H="active-subscribed-ambassador";(0,a.useEffect)((()=>{""!==P&&(1===U&&b.hm.success(P,"Success"),0===U&&b.hm.error(P,"Error"),E((0,m.fd)())),L()}),[]),l.oR.configure();const L=()=>{d.A.get("admin/".concat(H)).then((e=>{if(e.data.status){l.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),g(e.data.data);var t=e.data.data;let a=[];t.forEach((function(e){a.push({firstname:e.firstname,surname:e.surname,referral_code:e.referral_code,subscription_date:e.subscription_date,subscription_status:e.subscription_status,ambassador_date:e.ambassador_date})})),j([{name:"AMBASSADOR FIRST NAME",selector:(e,t)=>e.firstname,cell:e=>(0,A.jsx)("span",{children:e.firstname}),sortable:!0},{name:"AMBASSADOR LAST NAME",selector:(e,t)=>e.surname,cell:e=>(0,A.jsx)("span",{children:e.surname}),sortable:!0},{name:"AMBASSADOR REFERRAL CODE",selector:(e,t)=>e.referral_code,cell:e=>(0,A.jsx)("span",{children:e.referral_code}),sortable:!0},{name:"DATE OF HVG SUBSCRIPTION",selector:(e,t)=>e.subscription_date,cell:e=>{const t=new Date(e.subscription_date),s=t.getDate(),a=t.toLocaleString("en-us",{month:"short"}),r=t.getFullYear(),o="".concat(s," ").concat(a,", ").concat(r);return(0,A.jsx)("span",{children:o})},sortable:!0},{name:"SUBSCRIPTION STATUS",selector:(e,t)=>e.subscription_status,cell:e=>(0,A.jsx)("span",{children:e.subscription_status}),sortable:!0},{name:"DATE OF AMBASSADOR SIGN UP",selector:(e,t)=>e.ambassador_date,cell:e=>(0,A.jsx)("span",{children:e.ambassador_date}),sortable:!0}]),R(a),console.log(s)}})).catch((e=>{l.oR.dismiss(),e.response&&l.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+H)},G=()=>{const e=[["AMBASSADOR FIRST NAME","AMBASSADOR LAST NAME","AMBASSADOR REFERRAL CODE","DATE OF HVG SUBSCRIPTION","SUBSCRIPTION STATUS","DATE OF AMBASSADOR SIGN UP"],...N.map((e=>{let{firstname:t,surname:s,referral_code:a,subscription_date:r,subscription_status:o,ambassador_date:n}=e;return[t,s,a,r,o,n]}))].map((e=>e.join(","))).join("\n"),t=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,f.saveAs)(t,"active_subscribed_ambassador.csv")};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,A.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,A.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,A.jsx)(o.A,{}),(0,A.jsx)("main",{className:"flex-1 overflow-y-auto pt-2 px-2  bg-base-200",children:(0,A.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,A.jsx)("div",{className:"text-xl font-semibold py-1 px-2",children:"Active Subcripton of Ambassador"}),(0,A.jsx)("div",{className:"divider mt-2"}),(0,A.jsx)("div",{className:"",children:(0,A.jsx)("div",{className:"flex w-[100%] align-center",children:(0,A.jsx)(i.l1,{initialValues:{start_date:"",end_date:""},validationSchema:x.A,onSubmit:(e,t)=>{let{resetForm:a}=t;const r=new Date(e.end_date);r.setDate(r.getDate()+1);((e,t)=>{let{resetForm:a}=t;console.log("This is ambassador handleSubmit values check:",e);let r="active-subscribed-ambassador";e.start_date&&(r+="/"+e.start_date),e.end_date&&(r+="/"+e.end_date),d.A.get("admin/".concat(r),e).then((e=>{if(e.data.status){l.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),g(e.data.data),console.log("userReport datewise:",e.data.data),console.log("userReport=",s);var t=e.data.data;let a=[];t.forEach((function(e){a.push({firstname:e.firstname,surname:e.surname,referral_code:e.referral_code,subscription_date:e.subscription_date,subscription_status:e.subscription_status,ambassador_date:e.ambassador_date})})),R(a)}})).catch((e=>{l.oR.dismiss(),e.response&&(a(),l.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})({...e,end_date:r.toISOString().slice(0,10)},{resetForm:a})},children:e=>{let{resetForm:t}=e;return(0,A.jsxs)(i.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("label",{htmlFor:"start_date",children:"Start Date"}),(0,A.jsx)(i.D0,{name:"start_date",type:"date",className:"input input-bordered w-full"}),(0,A.jsx)(i.Kw,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("label",{htmlFor:"end_date",children:"End Date"}),(0,A.jsx)(i.D0,{name:"end_date",type:"date",className:"input input-bordered w-full"}),(0,A.jsx)(i.Kw,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),(0,A.jsxs)("div",{className:"flex align-center justify-between mt-6",children:[(0,A.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Search"}),(0,A.jsx)("button",{type:"button",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>(e=>{e(),L()})(t),children:"Reset"}),(0,A.jsx)("button",{type:"button",className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:G,children:"Export"})]})]})}})})}),(0,A.jsx)("div",{className:"overflow-x-auto w-full",children:(0,A.jsx)(S.A,{columns:_,data:N,children:(0,A.jsx)(h.Ay,{title:"Table",noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pagination:!0,highlightOnHover:!0,customStyles:{rows:{style:{minHeight:"50px"}},cells:{style:{whiteSpace:"nowrap"}}}})})})]})})]}),(0,A.jsx)(c.A,{})]}),(0,A.jsx)(p.A,{}),(0,A.jsx)(n.A,{})]})}},1728:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(947);const r=a.Ik().shape({email:a.Yj().email().required("Email is required"),password:a.Yj().required("Password is required.").min(6,"Password is too short - should be 6 chars minimum.").max(20,"Password is too long - should be 20 chars maximum.")})},82:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(947);const r=a.Ik().shape({start_date:a.p6().required("Start date is required"),end_date:a.p6().required("End date is required"),report_type:a.Yj().required("Report type is required")})}}]);
//# sourceMappingURL=8305.ad43269e.chunk.js.map