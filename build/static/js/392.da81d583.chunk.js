"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[392],{8470:(e,t,a)=>{a(6723)},3817:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var s=a(2483),r=a(3376),o=a(2659),n=a(2595),d=(a(1728),a(3117)),i=a(1222),l=a(9918),c=(a(5549),a(614),a(8470),a(4848)),m=a(7757),u=a(3074),p=a(3191),x=a(1914),b=(a(7650),a(82)),f=(a(5699),a(5442)),h=a(1935),A=(a(5989),a(1250)),g=a(6723);const S=()=>{const[e,t]=(0,s.useState)([]),[a,S]=(0,s.useState)([]),[_,y]=(0,s.useState)([]),[j,w]=(0,s.useState)([]),[v,N]=(0,s.useState)([]),[R,E]=(0,s.useState)(0),D=(0,m.wA)(),[F,k]=(0,s.useState)({startDate:new Date,endDate:new Date}),M=JSON.parse(localStorage.getItem("authInfo"));(0,r.zy)();console.log("authInfo=",M);let[O,I]=(0,s.useState)(!1);const[q,C]=(0,s.useState)("");let[P,T]=(0,s.useState)(M?M.id:null);(0,r.Zp)();const{newNotificationMessage:B,newNotificationStatus:L}=(0,s.useState)(""),Y="defaulted-subscription-paymentof-ambassador";(0,s.useEffect)((()=>{""!==B&&(1===L&&x.hm.success(B,"Success"),0===L&&x.hm.error(B,"Error"),D((0,u.fd)())),z()}),[]),l.oR.configure();const z=()=>{i.A.get("admin/".concat(Y)).then((e=>{if(console.log("REports Data: ",e.data.data),e.data.status){l.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),S(e.data.data);var t=e.data.data;let s=[];t.forEach((function(e){s.push({Ambassador_firstname:e.userid.firstname,Ambassador_lastname:e.userid.surname,referral_code:e.userid.referral_code,payment_status:e.payment_status})})),y([{name:"AMBASSADOR FIRST NAME",selector:(e,t)=>e.Ambassador_firstname,cell:e=>e.Ambassador_firstname,sortable:!0},{name:"AMBASSADOR LAST NAME",selector:(e,t)=>e.Ambassador_lastname,cell:e=>e.Ambassador_lastname,sortable:!0},{name:"AMBASSADOR REFERRAL CODE",selector:(e,t)=>e.referral_code,cell:e=>(0,g.jsx)("span",{children:e.referral_code}),sortable:!0},{name:"PAIMENT FAILURE REASON",selector:(e,t)=>e.payment_status,cell:e=>(0,g.jsx)("span",{children:"cancel"===e.payment_status?"Payment failed":"Payment not done"}),sortable:!0}]),N(s),console.log(a)}})).catch((e=>{l.oR.dismiss(),e.response&&l.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+Y)},H=()=>{const e=[["AMBASSADOR FIRST NAME","AMBASSADOR LAST NAME","AMBASSADOR REFERRAL CODE","PAYMENT FAILURE REASON"],...v.map((e=>{let{Ambassador_firstname:t,Ambassador_lastname:a,referral_code:s,payment_status:r}=e;return[t,a,s,"cancel"===r?"Payment failed":"Payment not done"]}))].map((e=>e.join(","))).join("\n"),t=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,A.saveAs)(t,"defaulted_payment_of_ambassador.csv")};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,g.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,g.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,g.jsx)(o.A,{}),(0,g.jsx)("main",{className:"flex-1 overflow-y-auto pt-2 px-2  bg-base-200",children:(0,g.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,g.jsx)("div",{className:"text-xl font-semibold py-1 px-2",children:"Defaulted Subscription Payment of Ambassador"}),(0,g.jsx)("div",{className:"divider mt-2"}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("div",{className:"flex w-[100%] align-center",children:(0,g.jsx)(d.l1,{initialValues:{start_date:"",end_date:""},validationSchema:b.A,onSubmit:(e,t)=>{let{resetForm:s}=t;const r=new Date(e.end_date);r.setDate(r.getDate()+1);((e,t)=>{let{resetForm:s}=t;console.log("This is ambassador handleSubmit values check:",e);let r="defaulted-subscription-paymentof-ambassador";e.start_date&&(r+="/"+e.start_date),e.end_date&&(r+="/"+e.end_date),i.A.get("admin/".concat(r),e).then((e=>{if(e.data.status){l.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),S(e.data.data),console.log("userReport datewise:",e.data.data),console.log("userReport=",a);var t=e.data.data;let s=[];t.forEach((function(e){s.push({Ambassador_firstname:e.userid.firstname,Ambassador_lastname:e.userid.surname,referral_code:e.userid.referral_code,payment_status:e.payment_status})})),N(s)}})).catch((e=>{l.oR.dismiss(),e.response&&(s(),l.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})({...e,end_date:r.toISOString().slice(0,10)},{resetForm:s})},children:e=>{let{resetForm:t}=e;return(0,g.jsxs)(d.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("label",{htmlFor:"start_date",children:"Start Date"}),(0,g.jsx)(d.D0,{name:"start_date",type:"date",className:"input input-bordered w-full"}),(0,g.jsx)(d.Kw,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("label",{htmlFor:"end_date",children:"End Date"}),(0,g.jsx)(d.D0,{name:"end_date",type:"date",className:"input input-bordered w-full"}),(0,g.jsx)(d.Kw,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),(0,g.jsxs)("div",{className:"flex align-center justify-between mt-6",children:[(0,g.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Search"}),(0,g.jsx)("button",{type:"button",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>(e=>{e(),z()})(t),children:"Reset"}),(0,g.jsx)("button",{type:"button",className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:H,children:"Export"})]})]})}})})}),(0,g.jsx)("div",{className:"overflow-x-auto w-full",children:(0,g.jsx)(h.A,{columns:_,data:v,children:(0,g.jsx)(f.Ay,{title:"Table",noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pagination:!0,highlightOnHover:!0,customStyles:{rows:{style:{minHeight:"50px"}},cells:{style:{whiteSpace:"nowrap"}}}})})})]})})]}),(0,g.jsx)(c.A,{})]}),(0,g.jsx)(p.A,{}),(0,g.jsx)(n.A,{})]})}},1728:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(947);const r=s.Ik().shape({email:s.Yj().email().required("Email is required"),password:s.Yj().required("Password is required.").min(6,"Password is too short - should be 6 chars minimum.").max(20,"Password is too long - should be 20 chars maximum.")})},82:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(947);const r=s.Ik().shape({start_date:s.p6().required("Start date is required"),end_date:s.p6().required("End date is required"),report_type:s.Yj().required("Report type is required")})}}]);
//# sourceMappingURL=392.da81d583.chunk.js.map