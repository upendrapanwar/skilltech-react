"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[1723],{5699:(e,s,a)=>{a.d(s,{A:()=>l});var t=a(6723);const r=e=>{let{styleClass:s,children:a}=e;return(0,t.jsx)("div",{className:"text-xl font-semibold ".concat(s),children:a})},l=e=>{let{title:s,children:a,topMargin:l,TopSideButtons:c}=e;return(0,t.jsxs)("div",{className:"card w-full p-6 bg-base-100 shadow-xl "+(l||"mt-6"),children:[(0,t.jsxs)(r,{styleClass:c?"inline-block":"",children:[s,c&&(0,t.jsx)("div",{className:"inline-block float-right",children:c})]}),(0,t.jsx)("div",{className:"divider mt-2"}),(0,t.jsx)("div",{className:"h-full w-full pb-6 bg-base-100",children:a})]})}},1723:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});var t=a(2483),r=a(25),l=a(1223),c=a(9136),n=a(3936),i=a(2003),o=a(9918),d=a(3376),m=a(3049),h=a(7757),u=a(1222),b=a(3117),p=(a(5699),a(82)),x=a(6723);const j=e=>{var s;let{userId:a}=e;const r=[{title:"Defaulted Subscription Payment of Subscribers",url:"defaulted-subscription-paymentof-subscriber"},{title:"My Active Referrals",url:"my-active-referral"},{title:"My Inactive Referrals",url:"my-inactive-referral"}],[l,c]=(0,t.useState)([]),[n,i]=(0,t.useState)([]),[d,m]=(0,t.useState)([]),[h,j]=(0,t.useState)([]),[v,f]=(0,t.useState)(0),N="defaulted-subscription-paymentof-subscriber";(0,t.useEffect)((()=>{g()}),[]),o.oR.configure();const g=()=>{c(N),u.A.post("common/".concat(N),{userId:a.id}).then((e=>{e.data.status&&(o.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),i(e.data.data),console.log(n))})).catch((e=>{o.oR.dismiss(),e.response&&o.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)})),console.log("apiUrl="+N)};return(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"hvg__card_section mb-4",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h4",{children:"Ambassador Reports"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"table_view_panel table-responsive-sm",children:(0,x.jsxs)("div",{className:"bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200",children:[(0,x.jsx)("div",{className:"divider mt-2"}),(0,x.jsx)("div",{className:"",children:(0,x.jsx)("div",{className:"flex w-[100%] align-center",children:(0,x.jsx)(b.l1,{initialValues:{start_date:"",end_date:"",report_type:null},validationSchema:p.A,onSubmit:(e,s)=>{let{resetForm:t}=s;const l=new Date(e.end_date);l.setDate(l.getDate()+1);((e,s)=>{let{resetForm:t}=s;console.log(e),f(e.report_type);const l=r[e.report_type].url;var n=l;c(l),console.log("API url:",l),e.start_date&&(n+="/"+e.start_date),e.end_date&&(n+="/"+e.end_date),u.A.post("common/".concat(n),{userId:a.id}).then((e=>{e.data.status?(o.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),"defaulted-subscription-paymentof-subscriber"===l&&i(e.data.data),"my-active-referral"===l&&m(e.data.data),"my-inactive-referral"===l&&j(e.data.data)):("defaulted-subscription-paymentof-subscriber"===l&&i(""),"my-active-referral"===l&&m(""),"my-inactive-referral"===l&&j(""))})).catch((e=>{o.oR.dismiss(),e.response&&(t(),o.oR.error(e.response.data.message,{autoClose:3e3})),console.log(e)}))})({...e,end_date:l.toISOString().slice(0,10)},{resetForm:t})},children:e=>{let{resetForm:s}=e;return(0,x.jsxs)(b.lV,{className:"flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2",children:[(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row ambassador_reports_search_row",children:[(0,x.jsxs)("div",{className:"flex flex-col col-3",children:[(0,x.jsx)("label",{htmlFor:"start_date",children:"Start Date: "}),(0,x.jsx)("br",{}),(0,x.jsx)(b.D0,{name:"start_date",type:"date",className:"form-control input input-bordered w-full max-w-xs"}),(0,x.jsx)(b.Kw,{name:"start_date",component:"div",className:"text-danger text-sm"})]}),(0,x.jsxs)("div",{className:"flex flex-col col-3",children:[(0,x.jsx)("label",{htmlFor:"end_date",children:"End Date: "}),(0,x.jsx)("br",{}),(0,x.jsx)(b.D0,{name:"end_date",type:"date",className:"form-control input input-bordered w-full max-w-xs"}),(0,x.jsx)(b.Kw,{name:"end_date",component:"div",className:"text-danger text-sm"})]}),(0,x.jsxs)("div",{className:"flex flex-col col-6",children:[(0,x.jsx)("label",{htmlFor:"report_type",children:"Report Type: "}),(0,x.jsxs)(b.D0,{as:"select",name:"report_type",id:"report_type",className:"form-control dropdown-content z-[1] menu p-2 shadow bg-base-100 w-64",children:[(0,x.jsx)("option",{value:"",children:"Select an option"}),(0,x.jsx)("option",{value:0,children:" Defaulted Subscriptions Payments of Subscribers"}),(0,x.jsx)("option",{value:1,children:" My Active Referrals"}),(0,x.jsx)("option",{value:2,children:" My Inactive Referrals"})]}),(0,x.jsx)(b.Kw,{name:"report_type",component:"div",className:"text-danger text-sm"})]})]})}),(0,x.jsxs)("div",{className:"flex align-center justify-between mt-6 ambassador_reports_search_ft",children:[(0,x.jsx)("button",{type:"submit",className:"btn btn-primary btn-color bt-size",children:"Search"}),(0,x.jsx)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>(e=>{e();const s=r[v].url;c(s),u.A.post("common/".concat(s),{userId:a.id}).then((e=>{e.data.status?(o.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),"defaulted-subscription-paymentof-subscriber"===s&&i(e.data.data),"my-active-referral"===s&&m(e.data.data),"my-inactive-referral"===s&&j(e.data.data)):("defaulted-subscription-paymentof-subscriber"===s&&i(""),"my-active-referral"===s&&m(""),"my-inactive-referral"===s&&j(""))})).catch((s=>{o.oR.dismiss(),s.response&&(e(),o.oR.error(s.response.data.message,{autoClose:3e3})),console.log(s)}))})(s),children:"Reset"})]})]})}})})}),(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("strong",{children:(null===(s=r[v])||void 0===s?void 0:s.title)||""})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"table_view_panel table-responsive-sm",children:(0,x.jsxs)("table",{className:"table table-striped",children:[(0,x.jsx)("thead",{children:(0,x.jsx)("tr",{children:[["Referral (Subscriber) First Name","Referral (Subscriber) Last Name","Payment Failure Reason"],["Referral (Subscriber) First Name","Referral (Subscriber) Last Name","Date of use of referral code","Referral Status (by Subscriber)"],["Referral (Subscriber) First Name","Referral (Subscriber) Last Name","Date of use of referral code","Referral Status (by Subscriber)"]][v].map(((e,s)=>(0,x.jsx)("th",{children:e},s)))})}),(0,x.jsxs)("tbody",{children:["defaulted-subscription-paymentof-subscriber"===l&&n.length>0&&n.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{children:[e.firstname?e.firstname:"N/A"," "]}),(0,x.jsx)("td",{children:e.surname?e.surname:"N/A"}),(0,x.jsx)("td",{children:e.payment_status?"Payment failed":"N/A"})]},s))),"my-active-referral"===l&&d.length>0&&d.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{children:[e.firstname?e.firstname:"N/A"," "]}),(0,x.jsx)("td",{children:e.surname?e.surname:"N/A"}),(0,x.jsx)("td",{children:e.referral_used_date?new Date(e.referral_used_date).toLocaleDateString():"N/A"}),(0,x.jsx)("td",{children:e.referral_status?e.referral_status:"N/A"})]},s))),"my-inactive-referral"===l&&h&&h.map(((e,s)=>(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{children:[e.firstname?e.firstname:"N/A"," "]}),(0,x.jsx)("td",{children:e.surname?e.surname:"N/A"}),(0,x.jsx)("td",{children:e.referral_used_date?new Date(e.referral_used_date).toLocaleDateString():"N/A"}),(0,x.jsx)("td",{children:e.referral_status?e.referral_status:"N/A"})]},s)})))]})]})})})]})]})})})]})})})},v=()=>{const e=JSON.parse(localStorage.getItem("authInfo"))?JSON.parse(localStorage.getItem("authInfo")):null,s=(0,d.zy)(),[a,b]=(0,t.useState)(null);let[p,v]=(0,t.useState)("");const f=JSON.parse(localStorage.getItem("userInfo")),N=(0,h.wA)(),g=(0,h.d4)((e=>e.cart));var _={};const y=(0,d.Zp)();let[S,R]=(0,t.useState)(!1),[w,A]=(0,t.useState)(!1),[C,D]=(0,t.useState)([]);const[I,F]=(0,t.useState)(!1),[k,z]=(0,t.useState)(null),P=sessionStorage.getItem("referralCode"),[M,O]=(0,t.useState)(1),E=5*M,L=E-5,q=p.slice(L,E);(0,t.useEffect)((()=>{let e=s.pathname.slice(s.pathname.lastIndexOf("/"),s.pathname.length);console.log("pathname=",e),"/success"===e&&V(),"/cancel"===e&&Y(),J(),T(),K(),U()}),[]),o.oR.configure();const T=()=>{const s={userid:e.id};u.A.post("common/fetch-ambassador-code",s).then((e=>{o.oR.dismiss(),e.data.status&&(console.log("referral_code=",e.data.data.referral_code),R(e.data.data.referral_code))})).catch((e=>{console.log("Error",e)}))},V=async e=>{g.forEach(((e,s)=>{_[s]=e})),console.log("cartData=",_);let s=localStorage.getItem("merchantData"),a=localStorage.getItem("subscriptionId"),t=localStorage.getItem("uuid"),r=s?JSON.parse(s):"";if(t=t.replace(/^"(.*)"$/,"$1"),""===r)return;let l="";"Order for Hign Vista Subscription"===r.item_description&&(l="yes"),"Order for one off payment"===r.item_description&&(l="no");const c={merchantData:r,userid:f.id,payment_status:"success",is_recurring:l,is_active:"true",coursesData:_,uuid:t,id:a,referralCode:P};console.log("Updated dataArray",c),u.A.post("common/save-subscription",c).then((e=>{e&&(console.log("Save subscription: ",e),o.oR.success("Payment Successful!",{position:"top-center",autoClose:3e3}),N((0,m.sX)()))})).catch((e=>{o.oR.dismiss(),localStorage.setItem("merchantData",""),e.response&&o.oR.error("Payment Failed!",{position:"top-center",autoClose:5e3})})),J()},Y=e=>{g.forEach(((e,s)=>{_[s]=e})),console.log("cancel payment=",e);let s=localStorage.getItem("merchantData"),a=localStorage.getItem("uuid");a=a.replace(/^"(.*)"$/,"$1");let t=s?JSON.parse(s):"";console.log("merchantDataResult=",t);let r="";if(""===t)return;"Order for Hign Vista Subscription"===t.item_description&&(r="yes"),"Order for one off payment"===t.item_description&&(r="no");const l={merchantData:t,userid:f.id,payment_status:"cancel",is_recurring:r,is_active:"false",coursesData:_,uuid:a};u.A.post("common/save-subscription",l).then((e=>{e&&(o.oR.success("Payment Cancelled!",{position:"top-center",autoClose:3e3}),N((0,m.sX)()))})).catch((e=>{o.oR.dismiss(),e.response&&o.oR.error("Payment Failed!",{position:"top-center",autoClose:5e3})})),J()},J=()=>{u.A.get("common/get-my-courses/"+f.id).then((e=>{o.oR.dismiss(),e.data&&e.data.status&&(v(e.data.data),console.log("setMyCourses#######***** ",e.data.data))})).catch((e=>{o.oR.dismiss(),e.response&&o.oR.error("Code is not available",{position:"top-center",autoClose:3e3})}))},U=()=>{u.A.get("common/get-referrals-this-month/"+f.id).then((e=>{o.oR.dismiss(),e.data&&e.data.status&&(A(e.data.data),console.log("getReferralsThisMonth response",e.data.data))})).catch((e=>{o.oR.dismiss(),e.response&&o.oR.error("Code is not available",{position:"top-center",autoClose:3e3})}))},$=e=>{u.A.put("common/cancel-course/"+e).then((e=>{o.oR.dismiss(),e.data&&e.data.status&&(console.log("Cancel response data:",e.data.data),J(),o.oR.success("Payment cancelled.",{position:"top-center",autoClose:3e3}))})).catch((e=>{o.oR.dismiss(),e.response&&o.oR.error("Code is not available",{position:"top-center",autoClose:3e3})}))},K=()=>{u.A.post("common/payment-due-this-month",{userId:e.id}).then((e=>{e.data.status&&(o.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),D(e.data.data),console.log("paymentDueToAmbassador response",e.data.data))})).catch((e=>{o.oR.dismiss(),e.response&&o.oR.error(e.response.data.message,{autoClose:3e3}),console.log(e)}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.A,{}),(0,x.jsxs)("div",{className:"hvg__page_banner",children:[(0,x.jsx)("div",{className:"banner-thumnail",children:(0,x.jsx)("img",{src:r,alt:""})}),(0,x.jsx)("div",{className:"banner-container",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"banner-content",children:(0,x.jsx)("div",{className:"banner-heading col-md-6",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("h1",{children:"Agent / Ambassador Dashboard"})})})})})})]}),(0,x.jsx)("div",{className:"hvg__main_container",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"card welcome_user_card mb-4",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)("p",{className:"mb-0",children:["Welcome to, ",(0,x.jsx)("strong",{children:e.name})," ",(0,x.jsx)("span",{className:"user_icon",children:(0,x.jsx)("i",{className:"far fa-smile"})})]})})}),(0,x.jsx)("div",{className:"card welcome_user_card mb-4",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("p",{className:"col-4 mb-0",children:["Referral Code: ",(0,x.jsx)("strong",{children:S})]}),(0,x.jsxs)("p",{className:"col-4 mb-0",children:["Referral Count: ",(0,x.jsx)("strong",{children:C.referral_count?C.referral_count:"0"})]}),(0,x.jsxs)("p",{className:"col-4 mb-0",children:["Due amount: ",(0,x.jsx)("strong",{children:C.due_amount?"R".concat(C.due_amount):"0"})]})]})})})}),(0,x.jsx)("div",{className:"hvg__card_section mb-4 ",children:(0,x.jsxs)("div",{className:"row d-flex ",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h4",{children:"Total Monthly Payouts (Last 4 months)"})}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("div",{className:"table-pie-image mt-2",children:(0,x.jsx)("img",{src:c.A,alt:""})}),(0,x.jsx)("div",{className:"amb-btn mt-4",children:(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",children:["View All Payouts",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:l.A,alt:""})})]})})]})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h4",{children:"Top selling course packages"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)("div",{className:"top_seller_package",children:[(0,x.jsxs)("div",{className:"top_seller_item",children:[(0,x.jsx)("div",{className:"ts_col ts_label",children:"Earnings to date"}),(0,x.jsx)("div",{className:"ts_col ts_value",children:"R200,00"})]}),(0,x.jsxs)("div",{className:"top_seller_item",children:[(0,x.jsx)("div",{className:"ts_col ts_label",children:"Earnings to date"}),(0,x.jsx)("div",{className:"ts_col ts_value",children:"R200,00"})]}),(0,x.jsx)("div",{className:"amb-btn mt-4 mb-4",children:(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",children:["Update my profile",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:l.A,alt:""})})]})})]})})]})})]})}),(0,x.jsx)("div",{className:"hvg__card_section mb-4",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsxs)("div",{className:"card-header",children:[(0,x.jsx)("h4",{children:"My Courses"}),(0,x.jsx)("p",{className:"mb-0",children:"You are currently enrolled in.."})]}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("div",{className:"table_view_panel table-responsive-sm",children:[(0,x.jsxs)("table",{className:"table table-striped",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"col",children:"Index"}),(0,x.jsx)("th",{scope:"col",children:"Course Name"}),(0,x.jsx)("th",{scope:"col",children:"Start date (MM/DD/YYYY)"}),(0,x.jsx)("th",{scope:"col",children:"Action"})]})}),(0,x.jsx)("tbody",{children:q.length>0?q.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:s+1+5*(M-1)}),(0,x.jsx)("th",{scope:"row",children:e.course_title}),(0,x.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()}),(0,x.jsx)("td",{children:(0,x.jsx)("button",{type:"button",className:"btn btn-primary btn-color bt-size-auto",onClick:()=>$(e._id),children:"Unsubscribe"})})]},s))):(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"3",children:"No data available"})})})]}),(0,x.jsxs)("div",{className:"ambassador_myreport_btn_ft",children:[(0,x.jsx)("button",{className:"btn btn-primary btn-color bt-size",onClick:()=>{O(M-1)},disabled:1===M,children:"Previous"}),(0,x.jsx)("button",{className:"btn btn-primary btn-color bt-size",onClick:()=>{O(M+1)},disabled:E>=p.length,children:"Next"})]})]}),(0,x.jsxs)("div",{className:"amb-btn",children:[(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>{y("/learner/my-courses")},children:["Go to courses"," ",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:l.A,alt:""})})]}),(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>{y("/learner/order-history")},children:["View order history"," ",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:l.A,alt:""})})]})]})]})]})}),(0,x.jsx)(j,{userId:f}),(0,x.jsx)("div",{className:"hvg__card_section mb-4",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h4",{children:"Referrals this month"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"table_view_panel table-responsive-sm",children:(0,x.jsxs)("table",{className:"table table-striped",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"col",children:"Index"}),(0,x.jsx)("th",{scope:"col",children:"Subscriber First Name"}),(0,x.jsx)("th",{scope:"col",children:"Subscriber Last Name"}),(0,x.jsx)("th",{scope:"col",children:"Date of use of referral code"}),(0,x.jsx)("th",{scope:"col",children:"Referral Status (by Subscriber)"})]})}),(0,x.jsx)("tbody",{children:w.length>0?w.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:s+1}),(0,x.jsx)("td",{children:e.firstname}),(0,x.jsx)("td",{children:e.surname}),(0,x.jsx)("td",{children:new Date(e.referral_used_date).toLocaleDateString()}),(0,x.jsx)("td",{children:"Active"===e.referral_status?(0,x.jsx)("span",{className:"badge badge-success",children:"Active"}):(0,x.jsx)("span",{className:"badge badge-danger",children:"In-active"})})]},s))):(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"4",children:"No data available"})})})]})})})]})})]})}),(0,x.jsx)(i.A,{})]})}},82:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(947);const r=t.Ik().shape({start_date:t.p6().required("Start date is required"),end_date:t.p6().required("End date is required"),report_type:t.Yj().required("Report type is required")})}}]);
//# sourceMappingURL=1723.3f3a7d5d.chunk.js.map