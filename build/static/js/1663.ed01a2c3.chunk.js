"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[1663],{8470:(e,t,s)=>{s(6723)},4012:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var a=s(2483),r=s(3376),n=s(2659),i=s(2595),o=(s(1728),s(3117)),l=s(1222),d=s(9918),c=(s(5549),s(614),s(8470),s(4848)),u=s(7757),m=s(3074),b=s(3191),p=s(1914),x=(s(7650),s(82)),h=(s(5699),s(5442)),f=s(1935),S=(s(5989),s(1250)),g=s(6723);const j=()=>{const[e,t]=(0,a.useState)([]),[s,j]=(0,a.useState)([]),[y,_]=(0,a.useState)([]),[w,v]=(0,a.useState)([]),[N,A]=(0,a.useState)([]),[R,E]=(0,a.useState)(0),I=(0,u.wA)(),[k,C]=(0,a.useState)({startDate:new Date,endDate:new Date}),D=JSON.parse(localStorage.getItem("authInfo"));(0,r.zy)();console.log("authInfo=",D);let[F,q]=(0,a.useState)(!1);const[P,B]=(0,a.useState)("");let[T,M]=(0,a.useState)(D?D.id:null);(0,r.Zp)();const{newNotificationMessage:U,newNotificationStatus:O}=(0,a.useState)(""),Y="defaulted-subscription-paymentof-subscriber";(0,a.useEffect)((()=>{""!==U&&(1===O&&p.hm.success(U,"Success"),0===O&&p.hm.error(U,"Error"),I((0,m.fd)())),L()}),[]),d.oR.configure();const L=()=>{l.A.get("admin/".concat(Y)).then((e=>{if(e.data.status){d.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),j(e.data.data);var t=e.data.data;let a=[];t.forEach((function(e){a.push({Subscriber_firstname:e.Subscriber_firstname,Subscriber_lastname:e.Subscriber_lastname,payment_status:e.payment_status})})),_([{name:"SUBSCRIBER FIRST NAME",selector:(e,t)=>e.Subscriber_firstname,cell:e=>(0,g.jsx)("span",{children:e.Subscriber_firstname}),sortable:!0},{name:"SUBSCRIBER LAST NAME",selector:(e,t)=>e.Subscriber_lastname,cell:e=>(0,g.jsx)("span",{children:e.Subscriber_lastname}),sortable:!0},{name:"PAYMENT FAILURE REASON",selector:(e,t)=>e.payment_status,cell:e=>(0,g.jsx)("span",{children:"cancel"===e.payment_status?"Payment failed":"Payment not done"}),sortable:!0}]),A(a),console.log(s)}})).catch((e=>{d.oR.dismiss(),e.response&&d.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+Y)},z=()=>{const e=[["SUBSCRIBER FIRST NAME","SUBSCRIBER LAST NAME","PAYMENT FAILURE REASON"],...N.map((e=>{let{Subscriber_firstname:t,Subscriber_lastname:s,payment_status:a}=e;return[t,s,"cancel"===a?"Payment failed":"Payment not done"]}))].map((e=>e.join(","))).join("\n"),t=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,S.saveAs)(t,"defaulted_payment_of_subscriber.csv")};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,g.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,g.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,g.jsx)(n.A,{}),(0,g.jsx)("main",{className:"flex-1 overflow-y-auto pt-2 px-2  bg-base-200",children:(0,g.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,g.jsx)("div",{className:"text-xl font-semibold py-1 px-2",children:"Defaulted Subscription Payment of Subscriber"}),(0,g.jsx)("div",{className:"divider mt-2"}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("div",{className:"flex w-[100%] align-center",children:(0,g.jsx)(o.l1,{initialValues:{start_date:"",end_date:""},validationSchema:x.A,onSubmit:(e,t)=>{let{resetForm:a}=t;const r=new Date(e.end_date);r.setDate(r.getDate()+1);((e,t)=>{let{resetForm:a}=t;console.log("This is ambassador handleSubmit values check:",e);let r="defaulted-subscription-paymentof-subscriber";e.start_date&&(r+="/"+e.start_date),e.end_date&&(r+="/"+e.end_date),l.A.get("admin/".concat(r),e).then((e=>{if(e.data.status){d.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),j(e.data.data),console.log("userReport datewise:",e.data.data),console.log("userReport=",s);var t=e.data.data;let a=[];t.forEach((function(e){a.push({Subscriber_firstname:e.Subscriber_firstname,Subscriber_lastname:e.Subscriber_lastname,payment_status:e.payment_status})})),A(a)}})).catch((e=>{d.oR.dismiss(),e.response&&(a(),d.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})({...e,end_date:r.toISOString().slice(0,10)},{resetForm:a})},children:e=>{let{resetForm:t}=e;return(0,g.jsxs)(o.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("label",{htmlFor:"start_date",children:"Start Date"}),(0,g.jsx)(o.D0,{name:"start_date",type:"date",className:"input input-bordered w-full"}),(0,g.jsx)(o.Kw,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("label",{htmlFor:"end_date",children:"End Date"}),(0,g.jsx)(o.D0,{name:"end_date",type:"date",className:"input input-bordered w-full"}),(0,g.jsx)(o.Kw,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),(0,g.jsxs)("div",{className:"flex align-center justify-between mt-6",children:[(0,g.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Search"}),(0,g.jsx)("button",{type:"button",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>(e=>{e(),L()})(t),children:"Reset"}),(0,g.jsx)("button",{type:"button",className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:z,children:"Export"})]})]})}})})}),(0,g.jsx)("div",{className:"overflow-x-auto w-full",children:(0,g.jsx)(f.A,{columns:y,data:N,children:(0,g.jsx)(h.Ay,{title:"Table",noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pagination:!0,highlightOnHover:!0,customStyles:{rows:{style:{minHeight:"50px"}},cells:{style:{whiteSpace:"nowrap"}}}})})})]})})]}),(0,g.jsx)(c.A,{})]}),(0,g.jsx)(b.A,{}),(0,g.jsx)(i.A,{})]})}},1728:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(947);const r=a.Ik().shape({email:a.Yj().email().required("Email is required"),password:a.Yj().required("Password is required.").min(6,"Password is too short - should be 6 chars minimum.").max(20,"Password is too long - should be 20 chars maximum.")})},82:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(947);const r=a.Ik().shape({start_date:a.p6().required("Start date is required"),end_date:a.p6().required("End date is required"),report_type:a.Yj().required("Report type is required")})}}]);
//# sourceMappingURL=1663.ed01a2c3.chunk.js.map