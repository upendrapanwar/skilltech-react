"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[2407],{2158:(e,a,n)=>{n.r(a),n.d(a,{default:()=>p});var s=n(2483),o=n(1223),l=n(3936),r=n(2003),c=n(1933),i=n(9918),t=n(5925),d=n(3117),m=n(1222),h=n(3376),u=(n(6176),n(6723));const p=()=>{const e=JSON.parse(localStorage.getItem("userInfo"));let[a,n]=(0,s.useState)("false"),[p,x]=(0,s.useState)(null),[f,_]=(0,s.useState)(e.id),[j,g]=(0,s.useState)(null),[b,v]=(0,s.useState)(null),[N,y]=(0,s.useState)(!1),[k,w]=(0,s.useState)("");console.log("userid",f);const B=(0,h.Zp)();(0,s.useEffect)((()=>{S()}),[]),i.oR.configure();const S=async()=>{const e=(new Date).getFullYear().toString().substr(-2);let a="HG".concat(e);try{const e=await m.A.get("common/get-referral-code");if(e.data.status){a+=(e.data.data+1).toString(),console.log("Referral code generated:",a),x(a)}}catch(n){console.log("Error",n)}},A=(a,s)=>{let{setSubmitting:o}=s;a.refer_friend=[...a.refer_friend,k],console.log("Check handle submit"),n(!0),a.certificate=j,a.bank_proof=b,a.referral_code=p,console.log("Submitting form...",a);m.A.post("common/ambassador-subscription",a).then((a=>{if(i.oR.dismiss(),a.data.status){let n={id:a.data.data._id,isSubscriberRegister:"yes"};localStorage.setItem("authInfo",JSON.stringify(n));let s=JSON.parse(localStorage.getItem("userInfo"));s.role="ambassador",localStorage.setItem("userInfo",JSON.stringify(s)),i.oR.success(a.data.message,{position:"top-center",autoClose:3e3}),console.log("Response data after becoming ambassador",a.data),console.log("Email is sending from here!"),m.A.get("common/send-email-ambassador/".concat(e.id)).then((e=>{i.oR.dismiss(),e.data.status&&console.log("Email has been sent to ambassador!")})).catch((e=>{console.log("Error",e)})),B("/ambessador/dashboard")}})).catch((e=>{i.oR.dismiss(),e.response&&i.oR.error(e.response.data.message,{position:"top-center",autoClose:3e3})})).finally((()=>{console.log("inside3"),setTimeout((()=>{n(!1)}),300)}))},C=e=>{const{checked:a}=e.target;y(a)},R=e=>{const{value:a}=e.target;w(a),console.log("OtherOptionValue",k)};return(0,u.jsxs)(u.Fragment,{children:[!0===a?(0,u.jsx)(c.A,{}):"",(0,u.jsx)(l.A,{}),(0,u.jsx)("div",{className:"hvg__main_container",children:(0,u.jsx)("section",{className:"ambessador-regi-section",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("div",{className:"ambeReg-heading text-center mb-4",children:(0,u.jsx)("h1",{children:"Ambassador Registration Form"})}),(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"hvg__subscribeForm_wrapper col-md-8 mx-auto",children:[(0,u.jsx)("div",{className:"headingcls",children:(0,u.jsx)("h4",{children:"You\u2019re one step away from becoming a High Vista Ambassador and unlocking the awesome benefits this offers."})}),(0,u.jsx)("div",{className:"subheadingcls",children:"To get signed up as ambassador, please provide the information requested below. When you\u2019re done, keep an eye on your inbox for the your referral code and useful information on how to maximise your rewards."}),(0,u.jsx)("div",{className:"subheadingNote",children:(0,u.jsx)("strong",{children:"Please note:"})}),(0,u.jsx)("div",{children:"You\u2019ll need to upload some important documents to complete the Ambassador sign-up. Please have certified copies of your South African ID and proof of banking ready."}),(0,u.jsx)("div",{className:"form-wrapper mt-4 ",children:(0,u.jsx)(d.l1,{initialValues:{uid:f,account_holder_name:"",bank:"",branch:"",branch_code:"",type_of_account:"",account_number:"",bank_proof:"",referral_code:"",refer_friend:[],certificate:"",confirm_details:"",update_information:""},onSubmit:(e,a)=>{let{setSubmitting:n}=a;console.log("onSubmit is working"),n(!0),A(e,n)},validationSchema:t.A,children:e=>{let{values:a,errors:n,touched:s,handleChange:l,handleBlur:r,handleSubmit:c,isValid:i,isSubmitting:t}=e;return(0,u.jsx)("form",{encType:"multipart/form-data",onSubmit:c,children:(0,u.jsxs)("fieldset",{children:[(0,u.jsxs)("div",{className:"avg__form_panel",children:[(0,u.jsx)("legend",{children:"1. Bank Account Information"}),(0,u.jsxs)("p",{children:["Please confirm your banking details.",(0,u.jsx)("br",{}),(0,u.jsx)("strong",{children:"Account details"})]}),(0,u.jsxs)("p",{children:["Who do you bank with?",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsxs)("div",{className:"row form-row",children:[(0,u.jsx)("div",{className:"form-group col-md-6",children:(0,u.jsxs)("select",{className:"form-control",name:"bank",id:"bank",onChange:l,onBlur:r,children:[(0,u.jsx)("option",{value:"",children:"Select Bank list"}),(0,u.jsx)("option",{value:"ABSA",children:"ABSA"}),(0,u.jsx)("option",{value:"african_bank_ltd",children:"African Bank Ltd"}),(0,u.jsx)("option",{value:"bidvest_bank",children:"Bidvest Bank"}),(0,u.jsx)("option",{value:"capitec_bank",children:"Capitec Bank"}),(0,u.jsx)("option",{value:"discovery_bank",children:"Discovery Bank"}),(0,u.jsx)("option",{value:"first_national_bank",children:"First National Bank"}),(0,u.jsx)("option",{value:"investec",children:"Investec"}),(0,u.jsx)("option",{value:"nedbank",children:"Nedbank"}),(0,u.jsx)("option",{value:"mercantile_bank",children:"Mercantile Bank"}),(0,u.jsx)("option",{value:"standard_bank",children:"Standard Bank"}),(0,u.jsx)("option",{value:"tyme_bank",children:"TymeBank"})]})}),(0,u.jsx)("div",{className:"form-group col-md-8",children:s.bank&&n.bank?(0,u.jsx)("small",{className:"text-danger",children:n.bank}):null})]}),(0,u.jsx)("div",{className:"row form-row",children:(0,u.jsxs)("div",{className:"form-group col-md-6",children:[(0,u.jsxs)("label",{htmlFor:"branch",children:["Branch ",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{type:"text",className:"form-control",name:"branch",id:"branch",placeholder:"",onChange:l,onBlur:r,value:a.branch}),s.branch&&n.branch?(0,u.jsx)("small",{className:"text-danger",children:n.branch}):null]})}),(0,u.jsx)("div",{className:"row form-row",children:(0,u.jsxs)("div",{className:"form-group col-md-6",children:[(0,u.jsxs)("label",{htmlFor:"branch_code",children:["Branch Code",(0,u.jsx)("span",{children:"(if available)"})]}),(0,u.jsx)("input",{type:"text",className:"form-control",name:"branch_code",id:"branch_code",placeholder:"",onChange:l,onBlur:r,value:a.branch_code})]})}),(0,u.jsx)("div",{className:"row form-row",children:(0,u.jsxs)("div",{className:"form-group col-md-6",children:[(0,u.jsxs)("label",{htmlFor:"account_number",children:["Account Number",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{type:"text",className:"form-control",name:"account_number",id:"account_number",placeholder:"",onChange:l,onBlur:r,value:a.account_number}),s.account_number&&n.account_number?(0,u.jsx)("small",{className:"text-danger",children:n.account_number}):null]})}),(0,u.jsx)("div",{className:"row form-row",children:(0,u.jsxs)("div",{className:"form-group col-md-6",children:[(0,u.jsxs)("label",{htmlFor:"account_holder_name",children:["Bank account holder's full name",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{type:"text",className:"form-control",name:"account_holder_name",id:"account_holder_name",placeholder:"",onChange:l,onBlur:r,value:a.account_holder_name}),s.account_holder_name&&n.account_holder_name?(0,u.jsx)("small",{className:"text-danger",children:n.account_holder_name}):null]})}),(0,u.jsx)("div",{className:"row form-row",children:(0,u.jsxs)("div",{className:"form-group col-md-6",children:[(0,u.jsxs)("label",{htmlFor:"type_of_account",children:["Account Type",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsxs)("select",{className:"form-control",name:"type_of_account",id:"type_of_account",onChange:l,onBlur:r,children:[(0,u.jsx)("option",{value:"",children:"Select Account Type"}),(0,u.jsx)("option",{value:"current_account",children:"Current account"}),(0,u.jsx)("option",{value:"savings_account",children:"Savings account"})]}),s.type_of_account&&n.type_of_account?(0,u.jsx)("small",{className:"text-danger",children:n.type_of_account}):null]})})]}),(0,u.jsxs)("div",{className:"avg__form_panel",children:[(0,u.jsx)("legend",{children:"2. Please upload proof of banking (stamped bank letter / stamped e-statement)"}),(0,u.jsxs)("div",{className:"row form-row",children:[(0,u.jsx)("div",{className:"form-group col-md-12",children:(0,u.jsx)("input",{type:"file",id:"bank_proof",name:"bank_proof",onChange:e=>{l(e),(e=>{const a=new FileReader;a.readAsDataURL(e.target.files[0]),a.onload=()=>{console.log("called: ",a),v(a.result)}})(e)},onBlur:r})}),(0,u.jsx)("div",{className:"form-group col-md-6",children:s.bank_proof&&n.bank_proof?(0,u.jsx)("small",{className:"text-danger",children:n.bank_proof}):null})]})]}),(0,u.jsxs)("div",{className:"avg__form_panel",children:[(0,u.jsxs)("legend",{children:["3. Please upload a certified copy of your South African ID",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsxs)("div",{className:"row form-row",children:[(0,u.jsx)("div",{className:"form-group col-md-12",children:(0,u.jsx)("input",{type:"file",id:"certificate",name:"certificate",onChange:e=>{l(e),(e=>{const a=new FileReader;a.readAsDataURL(e.target.files[0]),a.onload=()=>{console.log("called: ",a),g(a.result)},console.log(e.target.files[0])})(e)},onBlur:r})}),(0,u.jsx)("div",{className:"form-group col-md-6",children:s.certificate&&n.certificate?(0,u.jsx)("small",{className:"text-danger",children:n.certificate}):null})]})]}),(0,u.jsxs)("div",{className:"avg__form_panel",children:[(0,u.jsx)("input",{type:"checkbox",id:"confirm_details",name:"confirm_details",onChange:l,onBlur:r,value:"true"}),"Please confirm the detail you have provided is correct",(0,u.jsx)("div",{className:"form-group col-md-6",children:s.confirm_details&&n.confirm_details?(0,u.jsx)("small",{className:"text-danger",children:n.confirm_details}):null})]}),(0,u.jsxs)("div",{className:"avg__form_panel",children:[(0,u.jsx)("input",{type:"checkbox",id:"update_information",name:"update_information",onChange:l,onBlur:r,value:"true"}),"Please confirm that you will update any information provided should it change",(0,u.jsx)("div",{className:"form-group col-md-6",children:s.update_information&&n.update_information?(0,u.jsx)("small",{className:"text-danger",children:n.update_information}):null})]}),(0,u.jsx)("div",{className:"avg__form_panel",children:(0,u.jsxs)("div",{className:"form-row",children:[(0,u.jsxs)("legend",{children:["4. How will you most likely refer people to the High Vista Guild?",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsxs)("div",{className:"form-group col-md-12",children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("label",{className:"radio-inline",children:[(0,u.jsx)("input",{type:"checkbox",id:"whatsApp",name:"refer_friend",onChange:l,onBlur:r,value:"whatsApp"}),"WhatsApp"]})}),(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("label",{className:"radio-inline",children:[(0,u.jsx)("input",{type:"checkbox",id:"email",name:"refer_friend",onChange:l,onBlur:r,value:"email"}),"Email"]})}),(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("label",{className:"radio-inline",children:[(0,u.jsx)("input",{type:"checkbox",id:"word_of_mouth",name:"refer_friend",onChange:l,onBlur:r,value:"word_of_mouth"}),"Word of mouth"]})}),(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("label",{className:"radio-inline",children:[(0,u.jsx)("input",{type:"checkbox",id:"my_instagram_pages",name:"refer_friend",onChange:l,onBlur:r,value:"my_instagram_pages"}),"My Instagram pages"]})}),(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("label",{className:"radio-inline",children:[(0,u.jsx)("input",{type:"checkbox",id:"my_twitter_feed",name:"refer_friend",onChange:l,onBlur:r,value:"my_twitter_feed"}),"My Twitter feed"]})}),(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("label",{className:"radio-inline",children:[(0,u.jsx)("input",{type:"checkbox",id:"my_youtube_channel",name:"refer_friend",onChange:l,onBlur:r,value:"my_youtube_channel"}),"My Youtube channel"]})}),(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("label",{className:"radio-inline",children:[(0,u.jsx)("input",{type:"checkbox",id:"my_facebook_page",name:"refer_friend",onChange:l,onBlur:r,value:"my_facebook_page"}),"My Facebook page"]})}),(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("label",{className:"radio-inline",children:[(0,u.jsx)("input",{type:"checkbox",id:"other_option",name:"how_did_you_hear_about_us",onChange:C,onBlur:r,value:k,checked:N}),"Other"]})})]}),N&&(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsx)("textarea",{className:"form-control",name:"other_option_text",value:k,onChange:R,placeholder:"Please specify..."})})}),(0,u.jsx)("div",{className:"form-group col-md-6",children:s.refer_friend&&n.refer_friend?(0,u.jsx)("small",{className:"text-danger",children:n.refer_friend}):null})]})]})}),(0,u.jsx)("div",{className:"",children:(0,u.jsxs)("button",{type:"submit",className:"btn btn-primary btn-color bt-size mt-4 mb-4","data-id":t,children:["Become an ambassador",(0,u.jsx)("span",{className:"arrow-btn",children:(0,u.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})})}})})]})})]})})}),(0,u.jsx)(r.A,{})]})}}}]);
//# sourceMappingURL=2407.544000ec.chunk.js.map