"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[8475],{8470:(e,s,a)=>{a(6723)},8456:(e,s,a)=>{a.r(s),a.d(s,{default:()=>A});var t=a(2483),r=a(3376),o=a(2659),n=a(2595),i=(a(1728),a(3117)),l=a(1222),d=a(9918),c=(a(5549),a(614),a(8470),a(4848)),m=a(7757),u=a(3074),b=a(3191),_=a(1914),p=(a(7650),a(82)),S=(a(5699),a(5442)),f=a(1935),x=(a(5989),a(1250)),h=a(6723);const A=()=>{const[e,s]=(0,t.useState)([]),[a,A]=(0,t.useState)([]),[g,R]=(0,t.useState)([]),[j,w]=(0,t.useState)([]),[v,E]=(0,t.useState)([]),[N,D]=(0,t.useState)(0),y=(0,m.wA)(),[F,I]=(0,t.useState)({startDate:new Date,endDate:new Date}),T=JSON.parse(localStorage.getItem("authInfo"));(0,r.zy)();console.log("authInfo=",T);let[B,O]=(0,t.useState)(!1);const[C,M]=(0,t.useState)("");let[k,U]=(0,t.useState)(T?T.id:null);(0,r.Zp)();const{newNotificationMessage:H,newNotificationStatus:V}=(0,t.useState)(""),q="active-inactive-referral-per-ambassador";(0,t.useEffect)((()=>{""!==H&&(1===V&&_.hm.success(H,"Success"),0===V&&_.hm.error(H,"Error"),y((0,u.fd)())),G()}),[]),d.oR.configure();const G=()=>{l.A.get("admin/".concat(q)).then((e=>{if(e.data.status){d.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),A(e.data.data);var s=e.data.data;let t=[];s.forEach((function(e){t.push({Subscriber_firstname:e.Subscriber_firstname,Subscriber_lastname:e.Subscriber_lastname,referral_code:e.Ambassador_referralcode,Ambassador_firstname:e.Ambassador_firstname,Ambassador_lastname:e.Ambassador_lastname,Date_of_use_of_referral_code:e.Date_of_use_of_referral_code,HVG_Subscription_status:e.HVG_Subscription_status})})),R([{name:"SUBSCRIBER FIRST NAME",selector:(e,s)=>e.Subscriber_firstname,cell:e=>(0,h.jsx)("span",{children:e.Subscriber_firstname}),sortable:!0},{name:"SUBSCRIBER LAST NAME",selector:(e,s)=>e.Subscriber_lastname,cell:e=>(0,h.jsx)("span",{children:e.Subscriber_lastname}),sortable:!0},{name:"AMBASSADOR REFERRAL CODE USED",selector:(e,s)=>e.referral_code,cell:e=>(0,h.jsx)("span",{children:e.referral_code}),sortable:!0},{name:"AMBASSADOR FIRST NAME",selector:(e,s)=>e.Ambassador_firstname,cell:e=>e.Ambassador_firstname,sortable:!0},{name:"AMBASSADOR LAST NAME",selector:(e,s)=>e.Ambassador_lastname,cell:e=>e.Ambassador_lastname,sortable:!0},{name:"DATE OF USE OF REFERRAL USED",selector:(e,s)=>e.Date_of_use_of_referral_code,cell:e=>{const s=new Date(e.Date_of_use_of_referral_code),a=s.getDate(),t=s.toLocaleString("en-us",{month:"short"}),r=s.getFullYear(),o="".concat(a," ").concat(t,", ").concat(r);return(0,h.jsx)("span",{children:o})},sortable:!0},{name:"HVG SUBSCRIPTION STATUS",selector:(e,s)=>e.HVG_Subscription_status,cell:e=>(0,h.jsx)("span",{children:e.HVG_Subscription_status}),sortable:!0}]),E(t),console.log(a)}})).catch((e=>{d.oR.dismiss(),e.response&&d.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+q)},L=()=>{const e=[["SUBSCRIBER FIRST NAME","SUBSCRIBER LAST NAME","AMBASSADOR REFERRAL CODE","AMBASSADOR FIRST NAME","AMBASSADOR LAST NAME","DATE OF USE OF REFERRAL","HVG SUBSCRIPTION STATUS"],...v.map((e=>{let{Subscriber_firstname:s,Subscriber_lastname:a,referral_code:t,Ambassador_firstname:r,Ambassador_lastname:o,Date_of_use_of_referral_code:n,HVG_Subscription_status:i}=e;return[s,a,t,r,o,n,i]}))].map((e=>e.join(","))).join("\n"),s=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,x.saveAs)(s,"referral_per_ambassador.csv")};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,h.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,h.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,h.jsx)(o.A,{}),(0,h.jsx)("main",{className:"flex-1 overflow-y-auto pt-2 px-2  bg-base-200",children:(0,h.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,h.jsx)("div",{className:"text-xl font-semibold py-1 px-2",children:"Active and Inactive Referrals per Ambassador"}),(0,h.jsx)("div",{className:"divider mt-2"}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("div",{className:"flex w-[100%] align-center",children:(0,h.jsx)(i.l1,{initialValues:{start_date:"",end_date:""},validationSchema:p.A,onSubmit:(e,s)=>{let{resetForm:t}=s;const r=new Date(e.end_date);r.setDate(r.getDate()+1);((e,s)=>{let{resetForm:t}=s;console.log("This is ambassador handleSubmit values check:",e);let r="active-inactive-referral-per-ambassador";e.start_date&&(r+="/"+e.start_date),e.end_date&&(r+="/"+e.end_date),l.A.get("admin/".concat(r),e).then((e=>{if(e.data.status){d.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),A(e.data.data),console.log("userReport datewise:",e.data.data),console.log("userReport=",a);var s=e.data.data;let t=[];s.forEach((function(e){t.push({Subscriber_firstname:e.Subscriber_firstname,Subscriber_lastname:e.Subscriber_lastname,referral_code:e.Ambassador_referralcode,Ambassador_firstname:e.Ambassador_firstname,Ambassador_lastname:e.Ambassador_lastname,Date_of_use_of_referral_code:e.Date_of_use_of_referral_code,HVG_Subscription_status:e.HVG_Subscription_status})})),E(t)}})).catch((e=>{d.oR.dismiss(),e.response&&(t(),d.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})({...e,end_date:r.toISOString().slice(0,10)},{resetForm:t})},children:e=>{let{resetForm:s}=e;return(0,h.jsxs)(i.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("label",{htmlFor:"start_date",children:"Start Date"}),(0,h.jsx)(i.D0,{name:"start_date",type:"date",className:"input input-bordered w-full"}),(0,h.jsx)(i.Kw,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("label",{htmlFor:"end_date",children:"End Date"}),(0,h.jsx)(i.D0,{name:"end_date",type:"date",className:"input input-bordered w-full"}),(0,h.jsx)(i.Kw,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),(0,h.jsxs)("div",{className:"flex align-center justify-between mt-6",children:[(0,h.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Search"}),(0,h.jsx)("button",{type:"button",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>(e=>{e(),G()})(s),children:"Reset"}),(0,h.jsx)("button",{type:"button",className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:L,children:"Export"})]})]})}})})}),(0,h.jsx)("div",{className:"overflow-x-auto w-full",children:(0,h.jsx)(f.A,{columns:g,data:v,children:(0,h.jsx)(S.Ay,{title:"Table",noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pagination:!0,highlightOnHover:!0,customStyles:{rows:{style:{minHeight:"50px"}},cells:{style:{whiteSpace:"nowrap"}}}})})})]})})]}),(0,h.jsx)(c.A,{})]}),(0,h.jsx)(b.A,{}),(0,h.jsx)(n.A,{})]})}},1728:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(947);const r=t.Ik().shape({email:t.Yj().email().required("Email is required"),password:t.Yj().required("Password is required.").min(6,"Password is too short - should be 6 chars minimum.").max(20,"Password is too long - should be 20 chars maximum.")})},82:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(947);const r=t.Ik().shape({start_date:t.p6().required("Start date is required"),end_date:t.p6().required("End date is required"),report_type:t.Yj().required("Report type is required")})}}]);
//# sourceMappingURL=8475.932546c9.chunk.js.map