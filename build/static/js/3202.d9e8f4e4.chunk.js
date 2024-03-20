"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[3202],{8470:(e,a,s)=>{s(6723)},7492:(e,a,s)=>{s.r(a),s.d(a,{default:()=>g});var t=s(2483),r=s(3376),o=s(9517),n=s(2595),d=(s(1728),s(3117)),l=s(1222),i=s(9918),c=(s(5549),s(614),s(8470),s(4848)),m=s(7757),u=s(3074),b=s(3191),p=s(1914),x=(s(7650),s(82)),A=(s(5699),s(5442)),h=s(1935),f=(s(5989),s(1250)),_=s(6723);const g=()=>{const[e,a]=(0,t.useState)([]),[s,g]=(0,t.useState)([]),[S,j]=(0,t.useState)([]),[w,R]=(0,t.useState)([]),[v,N]=(0,t.useState)([]),[E,y]=(0,t.useState)(0),T=(0,m.wA)(),[D,O]=(0,t.useState)({startDate:new Date,endDate:new Date}),M=JSON.parse(localStorage.getItem("authInfo"));(0,r.zy)();console.log("authInfo=",M);let[C,F]=(0,t.useState)(!1);const[k,I]=(0,t.useState)("");let[q,L]=(0,t.useState)(M?M.id:null);(0,r.Zp)();const{newNotificationMessage:B,newNotificationStatus:H}=(0,t.useState)(""),U="payment-due-to-ambassador";(0,t.useEffect)((()=>{""!==B&&(1===H&&p.hm.success(B,"Success"),0===H&&p.hm.error(B,"Error"),T((0,u.fd)())),V()}),[]),i.oR.configure();const V=()=>{l.A.get("admin/".concat(U)).then((e=>{if(e.data.status){i.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),g(e.data.data);var a=e.data.data;let t=[];a.forEach((function(e){t.push({Ambassador_firstname:e.Ambassador_firstname,Ambassador_lastname:e.Ambassador_lastname,Ambassador_referralcode:e.Ambassador_referralcode,referral_count:e.referral_count,due_amount:e.due_amount})})),j([{name:"AMBASSADOR FIRST NAME",selector:(e,a)=>e.Ambassador_firstname,cell:e=>e.Ambassador_firstname,sortable:!0},{name:"AMBASSADOR LAST NAME",selector:(e,a)=>e.Ambassador_lastname,cell:e=>e.Ambassador_lastname,sortable:!0},{name:"AMBASSADOR REFERRAL CODE",selector:(e,a)=>e.Ambassador_referralcode,cell:e=>(0,_.jsx)("span",{children:e.Ambassador_referralcode}),sortable:!0},{name:"CURRENT ACTIVE REFERRAL",selector:(e,a)=>e.referral_count,cell:e=>(0,_.jsx)("span",{children:e.referral_count}),sortable:!0},{name:"TOTAL AMOUNT DUE THIS MONTH",selector:(e,a)=>e.due_amount,cell:e=>(0,_.jsx)("span",{children:e.due_amount}),sortable:!0}]),N(t),console.log(s)}})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+U)},z=()=>{const e=[["AMBASSADOR FIRST NAME","AMBASSADOR LAST NAME","AMBASSADOR REFERRAL CODE","CURRENT ACTIVE REFERRAL","TOTAL AMOUNT DUE THIS MONTH"],...v.map((e=>{let{Ambassador_firstname:a,Ambassador_lastname:s,Ambassador_referralcode:t,referral_count:r,due_amount:o}=e;return[a,s,t,r,o]}))].map((e=>e.join(","))).join("\n"),a=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,f.saveAs)(a,"payment_due_to_ambassador.csv")};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,_.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,_.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,_.jsx)(o.A,{}),(0,_.jsx)("main",{className:"flex-1 overflow-y-auto pt-2 px-2  bg-base-200",children:(0,_.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,_.jsx)("div",{className:"text-xl font-semibold py-1 px-2",children:"Active and Inactive Referrals per Ambassador"}),(0,_.jsx)("div",{className:"divider mt-2"}),(0,_.jsx)("div",{className:"",children:(0,_.jsx)("div",{className:"flex w-[100%] align-center",children:(0,_.jsx)(d.l1,{initialValues:{start_date:"",end_date:""},validationSchema:x.A,onSubmit:(e,a)=>{let{resetForm:t}=a;((e,a)=>{let{resetForm:t}=a;console.log("This is ambassador handleSubmit values check:",e);let r="payment-due-to-ambassador";e.start_date&&(r+="/"+e.start_date),e.end_date&&(r+="/"+e.end_date),l.A.get("admin/".concat(r),e).then((e=>{if(e.data.status){i.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),g(e.data.data),console.log("userReport datewise:",e.data.data),console.log("userReport=",s);var a=e.data.data;let t=[];a.forEach((function(e){t.push({Ambassador_firstname:e.Ambassador_firstname,Ambassador_lastname:e.Ambassador_lastname,Ambassador_referralcode:e.Ambassador_referralcode,referral_count:e.referral_count,due_amount:e.due_amount})})),N(t)}})).catch((e=>{i.oR.dismiss(),e.response&&(t(),i.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})(e,{resetForm:t})},children:e=>{let{resetForm:a}=e;return(0,_.jsxs)(d.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,_.jsxs)("div",{className:"flex flex-col",children:[(0,_.jsx)("label",{htmlFor:"start_date",children:"Start Date"}),(0,_.jsx)(d.D0,{name:"start_date",type:"date",className:"input input-bordered w-full"}),(0,_.jsx)(d.Kw,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,_.jsxs)("div",{className:"flex flex-col",children:[(0,_.jsx)("label",{htmlFor:"end_date",children:"End Date"}),(0,_.jsx)(d.D0,{name:"end_date",type:"date",className:"input input-bordered w-full"}),(0,_.jsx)(d.Kw,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),(0,_.jsxs)("div",{className:"flex align-center justify-between mt-6",children:[(0,_.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Search"}),(0,_.jsx)("button",{type:"button",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>(e=>{e(),V()})(a),children:"Reset"}),(0,_.jsx)("button",{type:"button",className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:z,children:"Export"})]})]})}})})}),(0,_.jsx)("div",{className:"overflow-x-auto w-full",children:(0,_.jsx)(h.A,{columns:S,data:v,children:(0,_.jsx)(A.Ay,{title:"Table",noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pagination:!0,highlightOnHover:!0,customStyles:{rows:{style:{minHeight:"50px"}},cells:{style:{whiteSpace:"nowrap"}}}})})})]})})]}),(0,_.jsx)(c.A,{})]}),(0,_.jsx)(b.A,{}),(0,_.jsx)(n.A,{})]})}},1728:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(947);const r=t.Ik().shape({email:t.Yj().email().required("Email is required"),password:t.Yj().required("Password is required.").min(6,"Password is too short - should be 6 chars minimum.").max(20,"Password is too long - should be 20 chars maximum.")})},82:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(947);const r=t.Ik().shape({start_date:t.p6().required("Start date is required"),end_date:t.p6().required("End date is required")})}}]);
//# sourceMappingURL=3202.d9e8f4e4.chunk.js.map