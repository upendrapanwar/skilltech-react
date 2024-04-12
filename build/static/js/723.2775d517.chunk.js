"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[723],{5699:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(6723);const r=e=>{let{styleClass:s,children:a}=e;return(0,t.jsx)("div",{className:"text-xl font-semibold ".concat(s),children:a})},c=e=>{let{title:s,children:a,topMargin:c,TopSideButtons:l}=e;return(0,t.jsxs)("div",{className:"card w-full p-6 bg-base-100 shadow-xl "+(c||"mt-6"),children:[(0,t.jsxs)(r,{styleClass:l?"inline-block":"",children:[s,l&&(0,t.jsx)("div",{className:"inline-block float-right",children:l})]}),(0,t.jsx)("div",{className:"divider mt-2"}),(0,t.jsx)("div",{className:"h-full w-full pb-6 bg-base-100",children:a})]})}},1723:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(2483),r=a(25),c=a(1223),l=a(9136),n=a(3936),o=a(3688),i=a(9918),d=a(3376),m=a(3049),h=a(7757),u=a(1222),p=a(3117),b=(a(5699),a(82)),x=a(6723);const j=e=>{var s;let{userId:a}=e;const r=[{title:"Defaulted Subscription Payment of Subscribers",url:"defaulted-subscription-paymentof-subscriber"},{title:"My Active Referrals",url:"my-active-referral"},{title:"My Inactive Referrals",url:"my-inactive-referral"}],[c,l]=(0,t.useState)([]),[n,o]=(0,t.useState)([]),[d,m]=(0,t.useState)([]),[h,j]=(0,t.useState)([]),[f,v]=(0,t.useState)(0),N="defaulted-subscription-paymentof-subscriber";(0,t.useEffect)((()=>{g()}),[]),i.oR.configure();const g=()=>{l(N),u.A.post("common/".concat(N),{userId:a.id}).then((e=>{e.data.status&&(i.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),o(e.data.data),console.log(n))})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+N)};return(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"hvg__card_section mb-4",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h4",{children:"Ambassador Reports"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"table_view_panel table-responsive-sm",children:(0,x.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,x.jsx)("div",{className:"divider mt-2"}),(0,x.jsx)("div",{className:"",children:(0,x.jsx)("div",{className:"flex w-[100%] align-center",children:(0,x.jsx)(p.l1,{initialValues:{start_date:"",end_date:"",report_type:null},validationSchema:b.A,onSubmit:(e,s)=>{let{resetForm:t}=s;const c=new Date(e.end_date);c.setDate(c.getDate()+1);((e,s)=>{let{resetForm:t}=s;console.log(e),v(e.report_type);const c=r[e.report_type].url;var n=c;l(c),console.log("API url:",c),e.start_date&&(n+="/"+e.start_date),e.end_date&&(n+="/"+e.end_date),u.A.post("common/".concat(n),{userId:a.id}).then((e=>{e.data.status?(i.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),"defaulted-subscription-paymentof-subscriber"===c&&o(e.data.data),"my-active-referral"===c&&m(e.data.data),"my-inactive-referral"===c&&j(e.data.data)):("defaulted-subscription-paymentof-subscriber"===c&&o(""),"my-active-referral"===c&&m(""),"my-inactive-referral"===c&&j(""))})).catch((e=>{i.oR.dismiss(),e.response&&(t(),i.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})({...e,end_date:c.toISOString().slice(0,10)},{resetForm:t})},children:e=>{let{resetForm:s}=e;return(0,x.jsxs)(p.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row ambassador_reports_search_row",children:[(0,x.jsxs)("div",{className:"flex flex-col col-3",children:[(0,x.jsx)("label",{htmlFor:"start_date",children:"Start Date: "}),(0,x.jsx)("br",{}),(0,x.jsx)(p.D0,{name:"start_date",type:"date",className:"form-control input input-bordered w-full max-w-xs"}),(0,x.jsx)(p.Kw,{name:"start_date",component:"div",className:"text-danger text-sm"})]}),(0,x.jsxs)("div",{className:"flex flex-col col-3",children:[(0,x.jsx)("label",{htmlFor:"end_date",children:"End Date: "}),(0,x.jsx)("br",{}),(0,x.jsx)(p.D0,{name:"end_date",type:"date",className:"form-control input input-bordered w-full max-w-xs"}),(0,x.jsx)(p.Kw,{name:"end_date",component:"div",className:"text-danger text-sm"})]}),(0,x.jsxs)("div",{className:"flex flex-col col-6",children:[(0,x.jsx)("label",{htmlFor:"report_type",children:"Report Type: "}),(0,x.jsxs)(p.D0,{as:"select",name:"report_type",id:"report_type",className:"form-control dropdown-content z-[1] menu p-2 shadow bg-base-100 w-64",children:[(0,x.jsx)("option",{value:"",children:"Select an option"}),(0,x.jsx)("option",{value:0,children:" Defaulted Subscriptions Payments of Subscribers"}),(0,x.jsx)("option",{value:1,children:" My Active Referrals"}),(0,x.jsx)("option",{value:2,children:" My Inactive Referrals"})]}),(0,x.jsx)(p.Kw,{name:"report_type",component:"div",className:"text-danger text-sm"})]})]})}),(0,x.jsxs)("div",{className:"flex align-center justify-between mt-6 ambassador_reports_search_ft",children:[(0,x.jsx)("button",{type:"submit",className:"btn btn-primary btn-color bt-size",children:"Search"}),(0,x.jsx)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>(e=>{e();const s=r[f].url;l(s),u.A.post("common/".concat(s),{userId:a.id}).then((e=>{e.data.status?(i.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),"defaulted-subscription-paymentof-subscriber"===s&&o(e.data.data),"my-active-referral"===s&&m(e.data.data),"my-inactive-referral"===s&&j(e.data.data)):("defaulted-subscription-paymentof-subscriber"===s&&o(""),"my-active-referral"===s&&m(""),"my-inactive-referral"===s&&j(""))})).catch((s=>{i.oR.dismiss(),s.response&&(e(),i.oR.error(s.response.data.message,{autoClose:3e3})),console.log(s)}))})(s),children:"Reset"})]})]})}})})}),(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("strong",{children:(null===(s=r[f])||void 0===s?void 0:s.title)||""})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"table_view_panel table-responsive-sm",children:(0,x.jsxs)("table",{className:"table table-striped",children:[(0,x.jsx)("thead",{children:(0,x.jsx)("tr",{children:[["Referral (Subscriber) First Name","Referral (Subscriber) Last Name","Payment Failure Reason"],["Referral (Subscriber) First Name","Referral (Subscriber) Last Name","Date of use of referral code","Referral Status (by Subscriber)"],["Referral (Subscriber) First Name","Referral (Subscriber) Last Name","Date of use of referral code","Referral Status (by Subscriber)"]][f].map(((e,s)=>(0,x.jsx)("th",{children:e},s)))})}),(0,x.jsxs)("tbody",{children:["defaulted-subscription-paymentof-subscriber"===c&&n.length>0&&n.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{children:[e.firstname?e.firstname:"N/A"," "]}),(0,x.jsx)("td",{children:e.surname?e.surname:"N/A"}),(0,x.jsx)("td",{children:e.payment_status?"Payment failed":"N/A"})]},s))),"my-active-referral"===c&&d.length>0&&d.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{children:[e.firstname?e.firstname:"N/A"," "]}),(0,x.jsx)("td",{children:e.surname?e.surname:"N/A"}),(0,x.jsx)("td",{children:e.referral_used_date?new Date(e.referral_used_date).toLocaleDateString():"N/A"}),(0,x.jsx)("td",{children:e.referral_status?e.referral_status:"N/A"})]},s))),"my-inactive-referral"===c&&h&&h.map(((e,s)=>(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{children:[e.firstname?e.firstname:"N/A"," "]}),(0,x.jsx)("td",{children:e.surname?e.surname:"N/A"}),(0,x.jsx)("td",{children:e.referral_used_date?new Date(e.referral_used_date).toLocaleDateString():"N/A"}),(0,x.jsx)("td",{children:e.referral_status?e.referral_status:"N/A"})]},s)})))]})]})})})]})]})})})]})})})},f=()=>{const e=JSON.parse(localStorage.getItem("authInfo"))?JSON.parse(localStorage.getItem("authInfo")):null,s=(0,d.zy)(),[a,p]=(0,t.useState)(null);let[b,f]=(0,t.useState)("");const v=JSON.parse(localStorage.getItem("userInfo")),N=(0,h.wA)(),g=(0,h.d4)((e=>e.cart));var _={};const y=(0,d.Zp)();let[S,R]=(0,t.useState)(!1),[A,w]=(0,t.useState)(!1),[C,D]=(0,t.useState)([]);const[I,k]=(0,t.useState)(!1),[F,P]=(0,t.useState)(null),z=sessionStorage.getItem("referralCode"),[O,E]=(0,t.useState)(1),M=5*O,L=M-5,q=b.slice(L,M);(0,t.useEffect)((()=>{let e=s.pathname.slice(s.pathname.lastIndexOf("/"),s.pathname.length);console.log("pathname=",e),"/success"===e&&T(),"/cancel"===e&&V(),Y(),J(),K(),U()}),[]),i.oR.configure();const J=()=>{const s={userid:e.id};u.A.post("common/fetch-ambassador-code",s).then((e=>{i.oR.dismiss(),e.data.status&&(console.log("referral_code=",e.data.data.referral_code),R(e.data.data.referral_code))})).catch((e=>{console.log("Error",e)}))},T=async e=>{g.forEach(((e,s)=>{_[s]=e})),console.log("cartData=",_);let s=localStorage.getItem("merchantData"),a=localStorage.getItem("subscriptionId"),t=localStorage.getItem("uuid"),r=s?JSON.parse(s):"";if(t=t.replace(/^"(.*)"$/,"$1"),""===r)return;let c="";"Order for Hign Vista Subscription"===r.item_description&&(c="yes"),"Order for one off payment"===r.item_description&&(c="no");const l={merchantData:r,userid:v.id,payment_status:"success",is_recurring:c,is_active:"true",coursesData:_,uuid:t,id:a,referralCode:z};console.log("Updated dataArray",l),u.A.post("common/save-subscription",l).then((e=>{e&&(console.log("Save subscription: ",e),i.oR.success("Payment Successful!",{position:"top-center",autoClose:3e3}),N((0,m.sX)()))})).catch((e=>{i.oR.dismiss(),localStorage.setItem("merchantData",""),e.response&&i.oR.error("Payment Failed!",{position:"top-center",autoClose:5e3})})),Y()},V=e=>{g.forEach(((e,s)=>{_[s]=e})),console.log("cancel payment=",e);let s=localStorage.getItem("merchantData"),a=localStorage.getItem("uuid");a=a.replace(/^"(.*)"$/,"$1");let t=s?JSON.parse(s):"";console.log("merchantDataResult=",t);let r="";if(""===t)return;"Order for Hign Vista Subscription"===t.item_description&&(r="yes"),"Order for one off payment"===t.item_description&&(r="no");const c={merchantData:t,userid:v.id,payment_status:"cancel",is_recurring:r,is_active:"false",coursesData:_,uuid:a};u.A.post("common/save-subscription",c).then((e=>{e&&(i.oR.success("Payment Cancelled!",{position:"top-center",autoClose:3e3}),N((0,m.sX)()))})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error("Payment Failed!",{position:"top-center",autoClose:5e3})})),Y()},Y=()=>{u.A.get("common/get-my-courses/"+v.id).then((e=>{i.oR.dismiss(),e.data&&e.data.status&&(f(e.data.data),console.log("setMyCourses#######***** ",e.data.data))})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error("Code is not available",{position:"top-center",autoClose:3e3})}))},U=()=>{u.A.get("common/get-referrals-this-month/"+v.id).then((e=>{i.oR.dismiss(),e.data&&e.data.status&&(w(e.data.data),console.log("getReferralsThisMonth response",e.data.data))})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error("Code is not available",{position:"top-center",autoClose:3e3})}))},$=e=>{u.A.put("common/cancel-course/"+e).then((e=>{i.oR.dismiss(),e.data&&e.data.status&&(console.log("Cancel response data:",e.data.data),Y(),i.oR.success("Payment cancelled.",{position:"top-center",autoClose:3e3}))})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error("Code is not available",{position:"top-center",autoClose:3e3})}))},K=()=>{u.A.post("common/payment-due-this-month",{userId:e.id}).then((e=>{e.data.status&&(i.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),D(e.data.data),console.log("paymentDueToAmbassador response",e.data.data))})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.A,{}),(0,x.jsxs)("div",{className:"hvg__page_banner",children:[(0,x.jsx)("div",{className:"banner-thumnail",children:(0,x.jsx)("img",{src:r,alt:""})}),(0,x.jsx)("div",{className:"banner-container",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"banner-content",children:(0,x.jsx)("div",{className:"banner-heading col-md-6",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("h1",{children:"Agent / Ambassador Dashboard"})})})})})})]}),(0,x.jsx)("div",{className:"hvg__main_container",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"card welcome_user_card mb-4",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)("p",{className:"mb-0",children:["Welcome to, ",(0,x.jsx)("strong",{children:e.name})," ",(0,x.jsx)("span",{className:"user_icon",children:(0,x.jsx)("i",{className:"far fa-smile"})})]})})}),(0,x.jsx)("div",{className:"card welcome_user_card mb-4",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("p",{className:"col-4 mb-0",children:["Referral Code: ",(0,x.jsx)("strong",{children:S})]}),(0,x.jsxs)("p",{className:"col-4 mb-0",children:["Referral Count: ",(0,x.jsx)("strong",{children:C.referral_count?C.referral_count:"0"})]}),(0,x.jsxs)("p",{className:"col-4 mb-0",children:["Due amount: ",(0,x.jsx)("strong",{children:C.due_amount?"R".concat(C.due_amount):"0"})]})]})})})}),(0,x.jsx)("div",{className:"hvg__card_section mb-4 ",children:(0,x.jsxs)("div",{className:"row d-flex ",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h4",{children:"Total Monthly Payouts (Last 4 months)"})}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("div",{className:"table-pie-image mt-2",children:(0,x.jsx)("img",{src:l.A,alt:""})}),(0,x.jsx)("div",{className:"amb-btn mt-4",children:(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",children:["View All Payouts",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:c.A,alt:""})})]})})]})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h4",{children:"Top selling course packages"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)("div",{className:"top_seller_package",children:[(0,x.jsxs)("div",{className:"top_seller_item",children:[(0,x.jsx)("div",{className:"ts_col ts_label",children:"Earnings to date"}),(0,x.jsx)("div",{className:"ts_col ts_value",children:"R200,00"})]}),(0,x.jsxs)("div",{className:"top_seller_item",children:[(0,x.jsx)("div",{className:"ts_col ts_label",children:"Earnings to date"}),(0,x.jsx)("div",{className:"ts_col ts_value",children:"R200,00"})]}),(0,x.jsx)("div",{className:"amb-btn mt-4 mb-4",children:(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",children:["Update my profile",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:c.A,alt:""})})]})})]})})]})})]})}),(0,x.jsx)("div",{className:"hvg__card_section mb-4",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsxs)("div",{className:"card-header",children:[(0,x.jsx)("h4",{children:"My Courses"}),(0,x.jsx)("p",{className:"mb-0",children:"You are currently enrolled in.."})]}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("div",{className:"table_view_panel table-responsive-sm",children:[(0,x.jsxs)("table",{className:"table table-striped",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"col",children:"Index"}),(0,x.jsx)("th",{scope:"col",children:"Course Name"}),(0,x.jsx)("th",{scope:"col",children:"Start date (MM/DD/YYYY)"}),(0,x.jsx)("th",{scope:"col",children:"Action"})]})}),(0,x.jsx)("tbody",{children:q.length>0?q.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:s+1+5*(O-1)}),(0,x.jsx)("th",{scope:"row",children:e.course_title}),(0,x.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()}),(0,x.jsx)("td",{children:(0,x.jsx)("button",{type:"button",className:"btn btn-primary btn-color bt-size-auto",onClick:()=>(async(e,s)=>{let a=localStorage.getItem("merchantData");const t=JSON.parse(e),r={token:t.token,merchantId:t.merchant_id,signature:t.signature,merchantData:a};console.log("reqData",r),u.A.post("common/cancel-payfast-payment",r).then((e=>{i.oR.dismiss(),e.data&&"success"===e.data.status?(console.log("Cancel response data:",e.data.data),$(s),i.oR.success("Payment cancelled.",{position:"top-center",autoClose:3e3})):i.oR.error("Error in cancellation.",{position:"top-center",autoClose:3e3})})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error("Error in cancellation.",{position:"top-center",autoClose:3e3})}))})(e.merchantData,e._id),children:"Unsubscribe"})})]},s))):(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"3",children:"No data available"})})})]}),(0,x.jsxs)("div",{className:"ambassador_myreport_btn_ft",children:[(0,x.jsx)("button",{className:"btn btn-primary btn-color bt-size",onClick:()=>{E(O-1)},disabled:1===O,children:"Previous"}),(0,x.jsx)("button",{className:"btn btn-primary btn-color bt-size",onClick:()=>{E(O+1)},disabled:M>=b.length,children:"Next"})]})]}),(0,x.jsxs)("div",{className:"amb-btn",children:[(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>{y("/learner/my-courses")},children:["Go to courses"," ",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:c.A,alt:""})})]}),(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>{y("/learner/order-history")},children:["View order history"," ",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:c.A,alt:""})})]})]})]})]})}),(0,x.jsx)(j,{userId:v}),(0,x.jsx)("div",{className:"hvg__card_section mb-4",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h4",{children:"Referrals this month"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"table_view_panel table-responsive-sm",children:(0,x.jsxs)("table",{className:"table table-striped",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"col",children:"Index"}),(0,x.jsx)("th",{scope:"col",children:"Subscriber First Name"}),(0,x.jsx)("th",{scope:"col",children:"Subscriber Last Name"}),(0,x.jsx)("th",{scope:"col",children:"Date of use of referral code"}),(0,x.jsx)("th",{scope:"col",children:"Referral Status (by Subscriber)"})]})}),(0,x.jsx)("tbody",{children:A.length>0?A.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:s+1}),(0,x.jsx)("td",{children:e.firstname}),(0,x.jsx)("td",{children:e.surname}),(0,x.jsx)("td",{children:new Date(e.referral_used_date).toLocaleDateString()}),(0,x.jsx)("td",{children:"Active"===e.referral_status?(0,x.jsx)("span",{className:"badge badge-success",children:"Active"}):(0,x.jsx)("span",{className:"badge badge-danger",children:"In-active"})})]},s))):(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"4",children:"No data available"})})})]})})})]})})]})}),(0,x.jsx)(o.A,{})]})}},82:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(947);const r=t.Ik().shape({start_date:t.p6().required("Start date is required"),end_date:t.p6().required("End date is required"),report_type:t.Yj().required("Report type is required")})}}]);
//# sourceMappingURL=723.2775d517.chunk.js.map