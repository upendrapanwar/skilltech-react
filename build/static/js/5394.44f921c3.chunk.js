"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[5394],{8470:(e,a,s)=>{s(6723)},5512:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});var r=s(2483),t=s(3376),i=s(9891),d=s(2659),n=s(2595),o=(s(1728),s(3117)),c=s(1222),l=s(9918),u=(s(5549),s(614),s(8470),s(4848)),b=s(7757),m=s(3074),p=s(3191),f=s(1914),x=(s(7650),s(82)),_=s(5699),h=s(1250),A=s(6723);const j=()=>{const e=[{title:"Active Subcripton of Ambassador",url:"active-subscribed-ambassador"},{title:"Active Subscription of Subscriber",url:"active-subscribed-subscriber"},{title:"Defaulted Subscription Payment of Ambassador",url:"defaulted-subscription-paymentof-ambassador"},{title:"Defaulted Subscription Payment of Subscribers",url:"defaulted-subscription-paymentof-subscriber"},{title:"Subscription cancelled by Ambassador",url:"subscription-cancelledby-ambassador"},{title:"Subscription cancelled by Subscriber",url:"subscription-cancelledby-subscriber"},{title:"Referral Per Ambassador",url:"active-inactive-referral-per-ambassador"},{title:"Active Referral Per Ambassador",url:"active-referral-per-ambassador"},{title:"Inactive Referral Per Ambassador",url:"inactive-referral-per-ambassador"},{title:"Payment due to ambassador",url:"payment-due-to-ambassador"}],[a,s]=(0,r.useState)("/admin/active-subscribed-ambassador"),[j,N]=(0,r.useState)([]),[S,y]=(0,r.useState)([]),[v,g]=(0,r.useState)([]),[E,I]=(0,r.useState)([]),[R,D]=(0,r.useState)([]),[C,w]=(0,r.useState)([]),[F,L]=(0,r.useState)([]),[M,P]=(0,r.useState)([]),[T,O]=(0,r.useState)([]),[U,k]=(0,r.useState)([]),[B,Y]=(0,r.useState)([]),[V,q]=(0,r.useState)([]),[J,X]=(0,r.useState)([]),[H,G]=(0,r.useState)([]),[z,K]=(0,r.useState)(0),W=(0,b.wA)(),[Z,Q]=(0,r.useState)({startDate:new Date,endDate:new Date}),$=JSON.parse(localStorage.getItem("authInfo"));(0,t.zy)();console.log("authInfo=",$);let[ee,ae]=(0,r.useState)(!1);const[se,re]=(0,r.useState)("");let[te,ie]=(0,r.useState)($?$.id:null);(0,t.Zp)();const{newNotificationMessage:de,newNotificationStatus:ne}=(0,r.useState)(""),oe="active-subscribed-ambassador";(0,r.useEffect)((()=>{""!==de&&(1===ne&&f.hm.success(de,"Success"),0===ne&&f.hm.error(de,"Error"),W((0,m.fd)())),ce()}),[]),l.oR.configure();const ce=()=>{g(oe),c.A.get("admin/".concat(oe)).then((e=>{e.data.status&&(l.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),I(e.data.data),console.log(E))})).catch((e=>{l.oR.dismiss(),e.response&&l.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+oe)};console.log("activeSubscribedAmbassador",E),console.log("activeSubscribedSubscriber",R),console.log("defaultedSubscriptionPaymentofambassador",C),console.log("defaultedSubscriptionPaymentofsubscriber",F),console.log("subscriptionCancelledbyAmbassador",M),console.log("subscriptionCancelledbySubscriber",T),console.log("ActiveInactiveReferralPerAmbassador",U),console.log("paymentDueToAmbassador",J);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,A.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,A.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,A.jsx)(d.A,{}),(0,A.jsx)("main",{className:"flex-1 overflow-y-auto pt-2 px-2  bg-base-200",children:(0,A.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,A.jsxs)("div",{className:"row",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,A.jsx)("div",{className:"text-xl font-semibold py-1 px-2",children:"Report"}),(0,A.jsx)("button",{type:"button",onClick:()=>{c.A.get("/admin/bulk-payment-report").then((e=>{e.data.status&&(l.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),G(e.data.data),console.log("bulkPaymentData response",e.data.data))})).catch((e=>{l.oR.dismiss(),e.response&&l.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)}));const e=[["RECIPIENT NAME","RECIPIENT ACCOUNT","RECIPIENT ACCOUNT TYPE","BRANCH CODE","AMOUNT","OWN REFERENCE","RECIPIENT REFERENCE","EMAIL 1 NOTIFY","EMAIL 1 ADDRESS","EMAIL 1 SUBJECT","EMAIL 2 NOTIFY","EMAIL 2 ADDRESS","EMAIL 2 SUBJECT","EMAIL 3 NOTIFY","EMAIL 3 ADDRESS","EMAIL 3 SUBJECT","EMAIL 4 NOTIFY","EMAIL 4 ADDRESS","EMAIL 4 SUBJECT","EMAIL 5 NOTIFY","EMAIL 5 ADDRESS","EMAIL 5 SUBJECT","FAX 1 NOTIFY","FAX 1 CODE","FAX 1 NUMBER","FAX 1 SUBJECT","FAX 2 NOTIFY","FAX 2 CODE","FAX 2 NUMBER","FAX 2 SUBJECT","SMS 1 NOTIFY","SMS 1 CODE","SMS 1 NUMBER","SMS 2 NOTIFY","SMS 2 CODE","SMS 2 NUMBER"],...H.map((e=>{let{recipient_name:a,recipient_account:s,recipient_acount_type:r,branch_code:t,amount:i,own_reference:d,recipient_reference:n,email_1_notify:o,email_1_address:c,email_1_subject:l,email_2_notify:u,email_2_address:b,email_2_subject:m,email_3_notify:p,email_3_address:f,email_3_subject:x,email_4_notify:_,email_4_address:h,email_4_subject:A,email_5_notify:j,email_5_address:N,email_5_subject:S,fax_1_notify:y,fax_1_code:v,fax_1_number:g,fax_1_subject:E,fax_2_notify:I,fax_2_code:R,fax_2_number:D,fax_2_subject:C,sms_1_notify:w,sms_1_code:F,sms_1_number:L,sms_2_notify:M,sms_2_code:P,sms_2_number:T}=e;return[a,s,r,t,i,d,n,o,c,l,u,b,m,p,f,x,_,h,A,j,N,S,y,v,g,E,I,R,D,C,w,F,L,M,P,T]}))].map((e=>e.join(","))).join("\n"),a=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,h.saveAs)(a,"bulk_payment_report_of_ambassador.csv")},className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Bulk Payment CSV Export"})]}),(0,A.jsx)("div",{className:"divider mt-2"}),(0,A.jsx)("div",{className:"",children:(0,A.jsx)("div",{className:"flex w-[100%] align-center",children:(0,A.jsx)(o.l1,{initialValues:{start_date:"",end_date:"",report_type:null},validationSchema:x.A,onSubmit:(a,r)=>{let{resetForm:t}=r;const i=new Date(a.end_date);i.setDate(i.getDate()+1);((a,r)=>{let{resetForm:t}=r;console.log(a),N(a),K(a.report_type);const i=e[a.report_type].url;var d=i;g(i),console.log("API url:",i),s("/admin/".concat(i)),a.start_date&&(d+="/"+a.start_date),a.end_date&&(d+="/"+a.end_date),c.A.get("admin/".concat(d),a).then((e=>{e.data.status?(l.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),"active-subscribed-ambassador"===i&&I(e.data.data),"active-subscribed-subscriber"===i&&D(e.data.data),"defaulted-subscription-paymentof-ambassador"===i&&w(e.data.data),"defaulted-subscription-paymentof-subscriber"===i&&L(e.data.data),"subscription-cancelledby-ambassador"===i&&P(e.data.data),"subscription-cancelledby-subscriber"===i&&O(e.data.data),"active-inactive-referral-per-ambassador"===i&&k(e.data.data),"active-referral-per-ambassador"===i&&Y(e.data.data),"inactive-referral-per-ambassador"===i&&q(e.data.data),"payment-due-to-ambassador"===i&&X(e.data.data),console.log("reportApiUrl=",v)):("active-subscribed-ambassador"===i&&I(""),"active-subscribed-subscriber"===i&&D(""),"defaulted-subscription-paymentof-ambassador"===i&&w(""),"defaulted-subscription-paymentof-subscriber"===i&&L(""),"subscription-cancelledby-ambassador"===i&&P(""),"subscription-cancelledby-subscriber"===i&&O(""),"active-inactive-referral-per-ambassador"===i&&k(""),"active-referral-per-ambassador"===i&&Y(""),"inactive-referral-per-ambassador"===i&&q(""),"payment-due-to-ambassador"===i&&X(""))})).catch((e=>{l.oR.dismiss(),e.response&&(t(),l.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})({...a,end_date:i.toISOString().slice(0,10)},{resetForm:t})},children:a=>{let{resetForm:r}=a;return(0,A.jsxs)(o.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("label",{htmlFor:"start_date",children:"Start Date"}),(0,A.jsx)(o.D0,{name:"start_date",type:"date",className:"input input-bordered w-full max-w-xs"}),(0,A.jsx)(o.Kw,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("label",{htmlFor:"end_date",children:"End Date"}),(0,A.jsx)(o.D0,{name:"end_date",type:"date",className:"input input-bordered w-full max-w-xs"}),(0,A.jsx)(o.Kw,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("label",{htmlFor:"report_type",children:"Report Type"}),(0,A.jsxs)(o.D0,{as:"select",name:"report_type",id:"report_type",className:"dropdown-content z-[1] menu p-2 shadow bg-base-100 w-64",children:[(0,A.jsx)("option",{value:"",children:"Select an option"}),(0,A.jsx)("option",{value:0,children:" Active Subscritpion of Ambassador"}),(0,A.jsx)("option",{value:1,children:" Active Subscription of Subscriber"}),(0,A.jsx)("option",{value:2,children:" Defaulted Subscription payment of Ambassador"}),(0,A.jsx)("option",{value:3,children:" Defaulted Subscription pyament of Subscriber"}),(0,A.jsx)("option",{value:4,children:" Cancellation of Subscription-Cancelled by Ambassador"}),(0,A.jsx)("option",{value:5,children:" Cancellation of Subscriptioin-Cancelled by Subcriber"}),(0,A.jsx)("option",{value:6,children:" Referral Per Ambassador"}),(0,A.jsx)("option",{value:7,children:" Active Referral Per Ambassador"}),(0,A.jsx)("option",{value:8,children:" Inactive Referral Per Ambassador"}),(0,A.jsx)("option",{value:9,children:" Payment due to Ambassador"})]}),(0,A.jsx)(o.Kw,{name:"report_type",component:"div",className:"text-red-500 text-sm"})]}),(0,A.jsxs)("div",{className:"flex align-center justify-between mt-6",children:[(0,A.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",children:"Search"}),(0,A.jsx)("button",{type:"button",className:"btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>(a=>{a();const r=e[z].url;g(r),s("/admin/".concat(r)),c.A.get("admin/".concat(r),j).then((e=>{if(e.data.status){if(l.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),"active-subscribed-ambassador"===r&&I(e.data.data),"active-subscribed-subscriber"===r&&D(e.data.data),"defaulted-subscription-paymentof-ambassador"===r){const a=e.data.data.filter((e=>null!==e.userid&&"cancel payment"===e.payment_status));w(a)}if("defaulted-subscription-paymentof-subscriber"===r){const a=e.data.data.filter((e=>null!==e.userid&&"cancel payment"===e.payment_status));L(a)}if("subscription-cancelledby-ambassador"===r){const a=e.data.data.filter((e=>null!==e.userId));P(a)}if("subscription-cancelledby-subscriber"===r){const a=e.data.data.filter((e=>null!==e.userId));O(a)}"active-inactive-referral-per-ambassador"===r&&k(e.data.data),"active-referral-per-ambassador"===r&&Y(e.data.data),"inactive-referral-per-ambassador"===r&&q(e.data.data),"payment-due-to-ambassador"===r&&X(e.data.data),console.log("reportApiUrl=",v)}else"active-subscribed-ambassador"===r&&I(""),"active-subscribed-subscriber"===r&&D(""),"defaulted-subscription-paymentof-ambassador"===r&&w(""),"defaulted-subscription-paymentof-subscriber"===r&&L(""),"subscription-cancelledby-ambassador"===r&&P(""),"subscription-cancelledby-subscriber"===r&&O(""),"active-inactive-referral-per-ambassador"===r&&k(""),"active-referral-per-ambassador"===r&&Y(""),"inactive-referral-per-ambassador"===r&&q(""),"payment-due-to-ambassador"===r&&X("")})).catch((e=>{l.oR.dismiss(),e.response&&(a(),l.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})(r),children:"Reset"})]})]})}})})}),(0,A.jsx)(_.A,{title:e[z].title||"",topMargin:"mt-2",children:(0,A.jsx)("div",{className:"overflow-x-auto w-full",children:(0,A.jsxs)("table",{className:"table w-full",children:[(0,A.jsx)("thead",{children:[["Ambassador First Name","Ambassador Last Name","Ambassador Referral Code","Date of HVG subscription","Subscription Status","Date of ambassador sign up"],["Subscriber First Name","Subscriber Last Name","Date of HVG subscription","Subscription Status"],["Ambassador First Name","Ambassador Last Name","Ambassador Referral Code","Payment Failure Reason"],["Subscriber First Name","Subscriber Last Name","Payment Failure Reason"],["Ambassador First Name","Ambassador Last Name","Ambassador Referral Code","Date of HVG subscription Cancellation"],["Subscriber First Name","Subscriber Last Name","Date of HVG subscription Cancellation"],["Subscriber First Name","Subcriber Last Name","Ambassador Referral Code Used ","Referred Ambassador First Name","Referred Ambassador Last Name","\tDate of use of referral code","HVG Subscription status"],["Subscriber First Name","Subcriber Last Name","Ambassador Referral Code Used ","Referred Ambassador First Name","Referred Ambassador Last Name","\tDate of use of referral code"],["Subscriber First Name","Subcriber Last Name","Ambassador Referral Code Used ","Referred Ambassador First Name","Referred Ambassador Last Name","\tDate of use of referral code"],["Ambassador First Name","Ambassador Last Name","Ambassador Referral Code","Current active referrals","Total amount due this month"]][z].map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsx)("td",{children:e},a)})))}),(0,A.jsxs)("tbody",{children:["active-subscribed-ambassador"===v&&E.length>0&&E.map(((e,a)=>(0,A.jsxs)("tr",{children:[""!==e.firstname&&(0,A.jsxs)("td",{children:[e.firstname?e.firstname:"N/A"," "]}),""!==e.surname&&(0,A.jsx)("td",{children:e.surname?e.surname:"N/A"}),""!==e.referral_code&&(0,A.jsx)("td",{children:e.referral_code?e.referral_code:"N/A"}),""!==e.subscription_date&&(0,A.jsx)("td",{children:e.subscription_date?new Date(e.subscription_date).toLocaleDateString():"N/A"}),""!==e.subscription_status&&(0,A.jsx)("td",{children:e.subscription_status?e.subscription_status:"N/A"}),""!==e.ambassador_date&&(0,A.jsx)("td",{children:e.ambassador_date?new Date(e.ambassador_date).toLocaleDateString():"N/A"})]},a))),"active-subscribed-subscriber"===v&&R.length>0&&R.map(((e,a)=>(0,A.jsxs)("tr",{children:[(0,A.jsxs)("td",{children:[e.firstname?e.firstname:"N/A"," "]}),(0,A.jsx)("td",{children:e.surname?e.surname:"N/A"}),(0,A.jsx)("td",{children:e.subscription_date?new Date(e.subscription_date).toLocaleDateString():"N/A"}),(0,A.jsx)("td",{children:e.subscription_status?e.subscription_status:"N/A"})]},a))),"defaulted-subscription-paymentof-ambassador"===v&&C&&C.map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.userid&&e.userid.firstname?e.userid.firstname:"N/A"}),(0,A.jsx)("td",{children:e.userid&&e.userid.surname?e.userid.surname:"N/A"}),(0,A.jsx)("td",{children:e.userid&&e.userid.referral_code?e.userid.referral_code:"N/A"}),(0,A.jsx)("td",{children:e.payment_status="Payment failed"})]},a)}))),"defaulted-subscription-paymentof-subscriber"===v&&F&&F.map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.userid&&e.userid.firstname?e.userid.firstname:"N/A"}),(0,A.jsx)("td",{children:e.userid&&e.userid.surname?e.userid.surname:"N/A"}),(0,A.jsx)("td",{children:"cancel"===e.payment_status?"Payment failed":""})]},a)}))),"subscription-cancelledby-ambassador"===v&&M.map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.userId&&e.userId.firstname?e.userId.firstname:"N/A"}),(0,A.jsx)("td",{children:e.userId&&e.userId.surname?e.userId.surname:"N/A"}),(0,A.jsx)("td",{children:e.userId&&e.userId.referral_code?e.userId.referral_code:"N/A"}),(0,A.jsx)("td",{children:e.cancellation_date?new Date(e.cancellation_date).toLocaleDateString():"N/A"})]},a)}))),"subscription-cancelledby-subscriber"===v&&T.map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.userId&&e.userId.firstname?e.userId.firstname:"N/A"}),(0,A.jsx)("td",{children:e.userId&&e.userId.surname?e.userId.surname:"N/A"}),(0,A.jsx)("td",{children:e.cancellation_date?new Date(e.cancellation_date).toLocaleDateString():"N/A"})]},a)}))),"active-inactive-referral-per-ambassador"===v&&U.map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.Subscriber_firstname||"N/A"}),(0,A.jsx)("td",{children:e.Subscriber_lastname||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_referralcode||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_firstname||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_lastname||"N/A"}),(0,A.jsx)("td",{children:e.Date_of_use_of_referral_code||"N/A"}),(0,A.jsx)("td",{children:e.HVG_Subscription_status||"N/A"})]},a)}))),"active-referral-per-ambassador"===v&&B.map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.Subscriber_firstname||"N/A"}),(0,A.jsx)("td",{children:e.Subscriber_lastname||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_referralcode||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_firstname||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_lastname||"N/A"}),(0,A.jsx)("td",{children:e.Date_of_use_of_referral_code||"N/A"})]},a)}))),"inactive-referral-per-ambassador"===v&&V.map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.Subscriber_firstname||"N/A"}),(0,A.jsx)("td",{children:e.Subscriber_lastname||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_referralcode||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_firstname||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_lastname||"N/A"}),(0,A.jsx)("td",{children:e.Date_of_use_of_referral_code||"N/A"})]},a)}))),"payment-due-to-ambassador"===v&&J.map(((e,a)=>(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.Ambassador_firstname||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_lastname||"N/A"}),(0,A.jsx)("td",{children:e.Ambassador_referralcode||"N/A"}),(0,A.jsx)("td",{children:e.referral_count||"N/A"}),(0,A.jsx)("td",{children:e.due_amount||"N/A"})]},a)}))),(0,A.jsx)("tr",{children:(0,A.jsx)("td",{style:{"text-align":"right"},colspan:"6",children:(0,A.jsx)(i.N_,{className:"inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",to:a,children:"View More"})})})]})]})})})]})})]}),(0,A.jsx)(u.A,{})]}),(0,A.jsx)(p.A,{}),(0,A.jsx)(n.A,{})]})}},1728:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(947);const t=r.Ik().shape({email:r.Yj().email().required("Email is required"),password:r.Yj().required("Password is required.").min(6,"Password is too short - should be 6 chars minimum.").max(20,"Password is too long - should be 20 chars maximum.")})},82:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(947);const t=r.Ik().shape({start_date:r.p6().required("Start date is required"),end_date:r.p6().required("End date is required")})}}]);
//# sourceMappingURL=5394.44f921c3.chunk.js.map