"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[5493],{8470:(e,a,s)=>{s(6723)},94:(e,a,s)=>{s.r(a),s.d(a,{default:()=>A});var t=s(2483),r=s(3376),o=s(2659),n=s(2595),l=(s(1728),s(3117)),i=s(1222),d=s(9918),c=(s(5549),s(614),s(8470),s(4848)),m=s(7757),u=s(3074),b=s(3191),_=s(1914),f=(s(7650),s(82)),p=(s(5699),s(5442)),x=s(1935),S=(s(5989),s(1250)),h=s(6723);const A=()=>{const[e,a]=(0,t.useState)([]),[s,A]=(0,t.useState)([]),[g,j]=(0,t.useState)([]),[R,w]=(0,t.useState)([]),[v,E]=(0,t.useState)([]),[D,N]=(0,t.useState)(0),y=(0,m.wA)(),[F,C]=(0,t.useState)({startDate:new Date,endDate:new Date}),I=JSON.parse(localStorage.getItem("authInfo"));(0,r.zy)();console.log("authInfo=",I);let[B,O]=(0,t.useState)(!1);const[k,T]=(0,t.useState)("");let[U,M]=(0,t.useState)(I?I.id:null);(0,r.Zp)();const{newNotificationMessage:q,newNotificationStatus:L}=(0,t.useState)(""),H="active-referral-per-ambassador";(0,t.useEffect)((()=>{""!==q&&(1===L&&_.hm.success(q,"Success"),0===L&&_.hm.error(q,"Error"),y((0,u.fd)())),P()}),[]),d.oR.configure();const P=()=>{i.A.get("admin/".concat(H)).then((e=>{if(e.data.status){d.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),A(e.data.data);var a=e.data.data;let t=[];a.forEach((function(e){t.push({Subscriber_firstname:e.Subscriber_firstname,Subscriber_lastname:e.Subscriber_lastname,referral_code:e.Ambassador_referralcode,Ambassador_firstname:e.Ambassador_firstname,Ambassador_lastname:e.Ambassador_lastname,Date_of_use_of_referral_code:e.Date_of_use_of_referral_code})})),j([{name:"SUBSCRIBER FIRST NAME",selector:(e,a)=>e.Subscriber_firstname,cell:e=>(0,h.jsx)("span",{children:e.Subscriber_firstname}),sortable:!0},{name:"SUBSCRIBER LAST NAME",selector:(e,a)=>e.Subscriber_lastname,cell:e=>(0,h.jsx)("span",{children:e.Subscriber_lastname}),sortable:!0},{name:"AMBASSADOR REFERRAL CODE USED",selector:(e,a)=>e.referral_code,cell:e=>(0,h.jsx)("span",{children:e.referral_code}),sortable:!0},{name:"AMBASSADOR FIRST NAME",selector:(e,a)=>e.Ambassador_firstname,cell:e=>e.Ambassador_firstname,sortable:!0},{name:"AMBASSADOR LAST NAME",selector:(e,a)=>e.Ambassador_lastname,cell:e=>e.Ambassador_lastname,sortable:!0},{name:"DATE OF USE OF REFERRAL USED",selector:(e,a)=>e.Date_of_use_of_referral_code,cell:e=>{const a=new Date(e.Date_of_use_of_referral_code),s=a.getDate(),t=a.toLocaleString("en-us",{month:"short"}),r=a.getFullYear(),o="".concat(s," ").concat(t,", ").concat(r);return(0,h.jsx)("span",{children:o})},sortable:!0}]),E(t),console.log(s)}})).catch((e=>{d.oR.dismiss(),e.response&&d.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+H)},V=()=>{const e=[["SUBSCRIBER FIRST NAME","SUBSCRIBER LAST NAME","AMBASSADOR REFERRAL CODE USED","DATE OF USE OF REFERRAL USED","HVG SUBSCRIPTION STATUS"],...v.map((e=>{let{Subscriber_firstname:a,Subscriber_lastname:s,referral_code:t,Date_of_use_of_referral_code:r,HVG_Subscription_status:o}=e;return[a,s,t,r,o]}))].map((e=>e.join(","))).join("\n"),a=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,S.saveAs)(a,"active_referral_per_ambassador.csv")};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,h.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,h.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,h.jsx)(o.A,{}),(0,h.jsx)("main",{className:"flex-1 overflow-y-auto pt-2 px-2  bg-base-200",children:(0,h.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,h.jsx)("div",{className:"text-xl font-semibold py-1 px-2",children:"Active Referrals per Ambassador"}),(0,h.jsx)("div",{className:"divider mt-2"}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("div",{className:"flex w-[100%] align-center",children:(0,h.jsx)(l.l1,{initialValues:{start_date:"",end_date:""},validationSchema:f.A,onSubmit:(e,a)=>{let{resetForm:t}=a;const r=new Date(e.end_date);r.setDate(r.getDate()+1);((e,a)=>{let{resetForm:t}=a;console.log("This is ambassador handleSubmit values check:",e);let r="active-referral-per-ambassador";e.start_date&&(r+="/"+e.start_date),e.end_date&&(r+="/"+e.end_date),i.A.get("admin/".concat(r),e).then((e=>{if(e.data.status){d.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),A(e.data.data),console.log("userReport datewise:",e.data.data),console.log("userReport=",s);var a=e.data.data;let t=[];a.forEach((function(e){t.push({Subscriber_firstname:e.Subscriber_firstname,Subscriber_lastname:e.Subscriber_lastname,referral_code:e.Ambassador_referralcode,Ambassador_firstname:e.Ambassador_firstname,Ambassador_lastname:e.Ambassador_lastname,Date_of_use_of_referral_code:e.Date_of_use_of_referral_code})})),E(t)}})).catch((e=>{d.oR.dismiss(),e.response&&(t(),d.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})({...e,end_date:r.toISOString().slice(0,10)},{resetForm:t})},children:e=>{let{resetForm:a}=e;return(0,h.jsxs)(l.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("label",{htmlFor:"start_date",children:"Start Date"}),(0,h.jsx)(l.D0,{name:"start_date",type:"date",className:"input input-bordered w-full"}),(0,h.jsx)(l.Kw,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("label",{htmlFor:"end_date",children:"End Date"}),(0,h.jsx)(l.D0,{name:"end_date",type:"date",className:"input input-bordered w-full"}),(0,h.jsx)(l.Kw,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),(0,h.jsxs)("div",{className:"flex align-center justify-between mt-6",children:[(0,h.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Search"}),(0,h.jsx)("button",{type:"button",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>(e=>{e(),P()})(a),children:"Reset"}),(0,h.jsx)("button",{type:"button",className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:V,children:"Export"})]})]})}})})}),(0,h.jsx)("div",{className:"overflow-x-auto w-full",children:(0,h.jsx)(x.A,{columns:g,data:v,children:(0,h.jsx)(p.Ay,{title:"Table",noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pagination:!0,highlightOnHover:!0,customStyles:{rows:{style:{minHeight:"50px"}},cells:{style:{whiteSpace:"nowrap"}}}})})})]})})]}),(0,h.jsx)(c.A,{})]}),(0,h.jsx)(b.A,{}),(0,h.jsx)(n.A,{})]})}},1728:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(947);const r=t.Ik().shape({email:t.Yj().email().required("Email is required"),password:t.Yj().required("Password is required.").min(6,"Password is too short - should be 6 chars minimum.").max(20,"Password is too long - should be 20 chars maximum.")})},82:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(947);const r=t.Ik().shape({start_date:t.p6().required("Start date is required"),end_date:t.p6().required("End date is required"),report_type:t.Yj().required("Report type is required")})}}]);
//# sourceMappingURL=5493.67274ee3.chunk.js.map