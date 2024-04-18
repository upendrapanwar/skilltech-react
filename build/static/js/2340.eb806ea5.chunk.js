"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[2340],{2340:(e,a,r)=>{r.r(a),r.d(a,{default:()=>f});var s=r(2483),o=r(1223),i=r(3936),l=r(2003),n=r(1933),t=r(9918),c=r(947);const d=c.Ik().shape({firstname:c.Yj().matches(/^[A-Za-z ]*$/,"Please enter valid First name").required("First name is required").max(80,"First name is too long - should be 80 chars maximum."),surname:c.Yj().matches(/^[A-Za-z ]*$/,"Please enter valid Surname").required("Surname is required").max(80,"Surname is too long - should be 80 chars maximum."),id_number:c.ai().typeError("Please enter valid ID Number").required("ID Number is required"),email:c.Yj().email().required("Email is required"),mobile_number:c.ai().typeError("Please enter valid Mobile Number").required("Mobile Number is required"),street:c.Yj().required("House or Unit Number is required"),street_name:c.Yj().required("Street Number is required"),suburb_district:c.Yj().required("Suburb/District is required"),town_city:c.Yj().required("Town/City is required"),province:c.Yj().required("Province is required"),postal_code:c.ai().typeError("Please enter valid Postal Code").required("Postal Code is required").min(4,"Postal Code is too short").max(99999,"Postal Code is too long"),method_of_communication:c.YO().min(1,"Please choose atleast one.").of(c.Yj().required()),how_did_you_hear_about_us:c.YO().min(1,"Please choose atleast one.").of(c.Yj().required()),race:c.Yj().required("Race is required"),gender:c.Yj().required("Gender is required"),qualification:c.Yj().required("Qualification is required"),privacy:c.zM().oneOf([!0],"Failing to provide consent prevents The High Vista Guild from processing your subscription."),ecommercePolicy:c.zM().oneOf([!0],"Failing to provide consent prevents The High Vista Guild from processing your subscription."),userConsent:c.zM().oneOf([!0],"Failing to provide consent prevents The High Vista Guild from processing your subscription.")});var m=r(6906),u=r(6581),h=r(3117),_=r(1222),p=r(3376),x=r(3049),b=r(7757),j=r(4019),g=r(6723);const f=()=>{let e=JSON.parse(localStorage.getItem("authInfo"));console.log("typrof=",typeof e.id),"undefined"===typeof e.id&&(e=JSON.parse(localStorage.getItem("userInfo"))),console.log("kjk=",JSON.parse(localStorage.getItem("userInfo")));(0,p.zy)();console.log("userInfo=",e);const a=(0,p.zy)();let[r,c]=(0,s.useState)("false"),[f,v]=(0,s.useState)(!1),[y,N]=(0,s.useState)(null),[w,C]=(0,s.useState)(e.id),[S,k]=(0,s.useState)({}),[q,P]=(0,s.useState)(!1),[I,B]=(0,s.useState)(""),[F,A]=(0,s.useState)(null),O=a&&null!=a.state?a.state.title:"Subscription Package",H=j.A;const R=(0,p.Zp)(),M=(0,b.wA)();console.log("userid=",e.id),(0,s.useEffect)((()=>{console.log("isSubscriberRegister",e.isSubscriberRegister),T();let a={id:e.id,isSubscriberRegister:null};localStorage.setItem("authInfo",JSON.stringify(a))}),[]),t.oR.configure();const Y={textDecoration:"underline",width:"100%"};console.log(" profileData: ",S);const D=e=>{const{checked:a}=e.target;P(a)},G=e=>{const{value:a}=e.target;B(a),console.log("OtherOptionValue",I)},T=()=>{_.A.get("user/get-profile-details/"+w).then((e=>{t.oR.dismiss(),e.data&&e.data.status&&(k(e.data.data[0]),console.log("Response Data for email: ",e.data.data[0].email))})).catch((e=>{t.oR.dismiss(),e.response&&t.oR.error("Code is not available",{position:"top-center",autoClose:3e3})}))},V=e=>{const a=e.target.value;v("yes"===a)};return(0,g.jsxs)(g.Fragment,{children:[!0===r?(0,g.jsx)(n.A,{}):"",(0,g.jsx)(i.A,{}),(0,g.jsx)("div",{className:"hvg__main_container",children:(0,g.jsx)("section",{className:"regitration-section",children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("div",{className:"mt-4 text-center mb-4",children:(0,g.jsx)("div",{className:"ambeReg-heading",children:(0,g.jsx)("h1",{children:"Subscription Registration Form"})})}),(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("div",{className:"ambeReg-wrapper col-md-8 mx-auto",children:[(0,g.jsx)("div",{className:"text-left",children:(0,g.jsxs)("p",{children:['Required fields are marked with a "'," ",(0,g.jsx)("span",{style:{color:"red"},children:"*"}),' "']})}),(0,g.jsx)("div",{className:"form-wrapper mt-4 ",children:Object.keys(S).length>0&&(0,g.jsx)(h.l1,{initialValues:{uid:w,firstname:S.firstname||"",surname:S.surname||"",id_number:S.id_number||"",email:S.email||"",mobile_number:S.mobile_number||"",alternate_mobile_number:S.alternate_mobile_number||"",street:S.street||"",street_name:S.street_name||"",complex_n_unit:S.complex_n_unit||"",suburb_district:S.suburb_district||"",town_city:S.town_city||"",province:S.province||"",postal_code:S.postal_code||"",race:S.race||"",gender:S.gender||"",qualification:S.qualification||"",ecommercePolicy:S.policy_consent.ecommercePolicy||!1,privacy:S.policy_consent.privacy||!1,userConsent:S.policy_consent.userConsent||!1,method_of_communication:Array.isArray(S.method_of_communication)?S.method_of_communication:[],how_did_you_hear_about_us:Array.isArray(S.how_did_you_hear_about_us)?S.how_did_you_hear_about_us:[]},validateOnChange:!1,validateOnBlur:!0,onSubmit:(e,a)=>{let{setSubmitting:r}=a;console.log("Form values:",e),r(!0),((e,a)=>{let{setSubmitting:r}=a;e.how_did_you_hear_about_us=[...e.how_did_you_hear_about_us,I],console.log("values=",e),c(!0),_.A.post("common/subscription",e).then((e=>{if(t.oR.dismiss(),e.data.status){let a={id:e.data.data._id,isSubscriberRegister:"yes"};localStorage.setItem("authInfo",JSON.stringify(a)),t.oR.success(e.data.message,{position:"top-center",autoClose:3e3}),M((0,x.bE)({id:"9999",title:O,image:H,price:10,paymentType:"subscription"}));let r=JSON.parse(localStorage.getItem("userInfo"));r.role="subscriber",localStorage.setItem("userInfo",JSON.stringify(r)),R("/cart")}})).catch((e=>{t.oR.dismiss(),e.response&&t.oR.error(e.response.data.message,{position:"top-center",autoClose:3e3})})).finally((()=>{setTimeout((()=>{c(!1)}),300)}))})(e,r)},validationSchema:d,children:e=>{let{values:a,errors:r,touched:s,handleChange:i,handleBlur:l,handleSubmit:n,isValid:t,isSubmitting:c,dirty:d}=e;return(0,g.jsxs)("form",{onSubmit:n,children:[(0,g.jsxs)("div",{className:"avg__form_panel",children:[(0,g.jsxs)("p",{className:"mb-2",children:[" ",(0,g.jsx)("strong",{children:"1.Personal Information"})]}),(0,g.jsxs)("div",{className:"row form-row",children:[(0,g.jsx)("p",{children:"Please provide your full first names and surname exactly as reflected on your South African ID (or foreign national Identity Document, if applicable)."}),(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"first_name",children:["First Name(s)",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"firstname",id:"firstname",placeholder:"","aria-describedby":"firstnameHelp",onChange:i,onBlur:l,value:a.firstname}),s.firstname&&r.firstname?(0,g.jsx)("small",{className:"text-danger",children:r.firstname}):null]}),(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"surname",children:["Surname ",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"surname",id:"surname",placeholder:"","aria-describedby":"surnameHelp",onChange:i,onBlur:l,value:a.surname}),s.surname&&r.surname?(0,g.jsx)("small",{className:"text-danger",children:r.surname}):null]})]}),(0,g.jsx)("div",{className:"row  form-row",children:(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"id_number",children:["South African ID Number",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"id_number",id:"id_number",placeholder:"","aria-describedby":"idnumberHelp",onChange:i,onBlur:l,value:a.id_number}),s.id_number&&r.id_number?(0,g.jsx)("small",{className:"text-danger",children:r.id_number}):null]})})]}),(0,g.jsxs)("div",{className:"avg__form_panel",children:[(0,g.jsxs)("p",{className:"mb-2",children:[" ",(0,g.jsx)("strong",{children:"2. Contact Information"})]}),(0,g.jsxs)("div",{className:"row form-row",children:[(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"email",children:["Email Address",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"email",id:"email",placeholder:"","aria-describedby":"emailHelp",onChange:i,onBlur:l,value:a.email}),s.email&&r.email?(0,g.jsx)("small",{className:"text-danger",children:r.email}):null]}),(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"mobile_number",children:["Mobile Contact Number ",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"mobile_number",id:"mobile_number","aria-describedby":"mobilenumberHelp",placeholder:"",onChange:i,onBlur:l,value:a.mobile_number}),s.mobile_number&&r.mobile_number?(0,g.jsx)("small",{className:"text-danger",children:r.mobile_number}):null]})]}),(0,g.jsx)("div",{className:"row form-row",children:(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsx)("label",{htmlFor:"alternate_mobile_number",children:"Alternative Mobile Contact Number"}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"alternate_mobile_number",id:"alternate_mobile_number","aria-describedby":"alternateMobileNumberHelp",placeholder:"",onChange:i,onBlur:l,value:a.alternate_mobile_number})]})})]}),(0,g.jsxs)("div",{className:"avg__form_panel",children:[(0,g.jsx)("p",{style:Y,children:"Mailing Address"}),(0,g.jsxs)("div",{className:"row form-row",children:[(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"street",children:["House or Unit Number",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"street",id:"street","aria-describedby":"streetHelp",placeholder:"",onChange:i,onBlur:l,value:a.street}),s.street&&r.street?(0,g.jsx)("small",{className:"text-danger",children:r.street}):null]}),(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"street_name",children:["Street Name ",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"street_name",id:"street_name","aria-describedby":"streetNameHelp",placeholder:"",onChange:i,onBlur:l,value:a.street_name}),s.street_name&&r.street_name?(0,g.jsx)("small",{className:"text-danger",children:r.street_name}):null]})]}),(0,g.jsx)("div",{className:"row form-row",children:(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsx)("label",{htmlFor:"complex_n_unit",children:"Complex Name (if appl.)"}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"complex_n_unit",id:"complex_n_unit",placeholder:"",onChange:i,onBlur:l,value:a.complex_n_unit})]})})]}),(0,g.jsx)("div",{className:"avg__form_panel",children:(0,g.jsxs)("div",{className:"row form-row col-md-12 pl-0",children:[(0,g.jsxs)("div",{className:"form-group col-md-3",children:[(0,g.jsxs)("label",{htmlFor:"suburb_district",children:["Suburb/District ",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"suburb_district",id:"suburb_district",placeholder:"",onChange:i,onBlur:l,value:a.suburb_district}),s.suburb_district&&r.suburb_district?(0,g.jsx)("small",{className:"text-danger",children:r.suburb_district}):null]}),(0,g.jsxs)("div",{className:"form-group col-md-3",children:[(0,g.jsxs)("label",{htmlFor:"town_city",children:["Town/City ",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"town_city",id:"town_city",placeholder:"",onChange:i,onBlur:l,value:a.town_city}),s.town_city&&r.town_city?(0,g.jsx)("small",{className:"text-danger",children:r.town_city}):null]}),(0,g.jsxs)("div",{className:"form-group col-md-3",children:[(0,g.jsxs)("label",{htmlFor:"province",children:["Province",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsxs)("select",{className:"form-control",name:"province",id:"province",onChange:i,onBlur:l,value:a.province,children:[(0,g.jsx)("option",{value:"",children:"Select Province"}),(0,g.jsx)("option",{value:"eastern_cape",children:"Eastern Cape"}),(0,g.jsx)("option",{value:"free_state",children:"Free State"}),(0,g.jsx)("option",{value:"gauteng",children:"Gauteng"}),(0,g.jsx)("option",{value:"kwaZulu_natal",children:"KwaZulu-Natal"}),(0,g.jsx)("option",{value:"limpopo",children:"Limpopo"}),(0,g.jsx)("option",{value:"mpumalanga",children:"Mpumalanga"}),(0,g.jsx)("option",{value:"north_west",children:"North West"}),(0,g.jsx)("option",{value:"northern_cape",children:"Northern Cape"}),(0,g.jsx)("option",{value:"western_cape",children:"Western Cape"})]}),s.province&&r.province?(0,g.jsx)("small",{className:"text-danger",children:r.province}):null]}),(0,g.jsxs)("div",{className:"form-group col-md-3",children:[(0,g.jsxs)("label",{htmlFor:"postal_code",children:["Postal Code ",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"postal_code",id:"postal_code",placeholder:"",onChange:i,onBlur:l,value:a.postal_code}),s.postal_code&&r.postal_code?(0,g.jsx)("small",{className:"text-danger",children:r.postal_code}):null]})]})}),(0,g.jsxs)("div",{className:"avg__form_panel",children:[(0,g.jsxs)("p",{className:"mb-2",children:[" ",(0,g.jsx)("strong",{children:"3. Demographic Information"})]}),(0,g.jsxs)("div",{className:"row form-row",children:[(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"race",children:["Race",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsxs)("select",{className:"form-control",name:"race",id:"race",onChange:i,onBlur:l,value:a.race,children:[(0,g.jsx)("option",{value:"",children:"Select Race"}),(0,g.jsx)("option",{value:"african",children:"African"}),(0,g.jsx)("option",{value:"coloured",children:"Coloured"}),(0,g.jsx)("option",{value:"indian",children:"Indian"}),(0,g.jsx)("option",{value:"white",children:"White"})]}),s.race&&r.race?(0,g.jsx)("small",{className:"text-danger",children:r.race}):null]}),(0,g.jsxs)("div",{className:"form-group col-md-6",children:[(0,g.jsxs)("label",{htmlFor:"gender",children:["Gender",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsxs)("select",{className:"form-control",name:"gender",id:"gender",onChange:i,onBlur:l,value:a.gender,children:[(0,g.jsx)("option",{value:"",children:"Select Gender"}),(0,g.jsx)("option",{value:"male",children:"Male"}),(0,g.jsx)("option",{value:"female",children:"Female"}),(0,g.jsx)("option",{value:"prefer_not_to_say",children:"I'd prefer not to say"})]}),s.gender&&r.gender?(0,g.jsx)("small",{className:"text-danger",children:r.gender}):null]})]}),(0,g.jsx)("div",{className:"row form-row",children:(0,g.jsxs)("div",{className:"form-group ",children:[(0,g.jsxs)("label",{htmlFor:"qualification",children:["Highest Qualification Race",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsxs)("select",{className:"form-control",name:"qualification",id:"qualification",onChange:i,onBlur:l,value:a.qualification,children:[(0,g.jsx)("option",{value:"",children:"Select Qualification"}),(0,g.jsx)("option",{value:"senior_certitifate_grade12",children:"Senior Certitifate (Grade12)"}),(0,g.jsx)("option",{value:"higher_certificate",children:"Higher certificate"}),(0,g.jsx)("option",{value:"advanced_certificate",children:"Advanced certificate"}),(0,g.jsx)("option",{value:"diploma",children:"Diploma"}),(0,g.jsx)("option",{value:"postgraduate_certificate",children:"Postgraduate certificate"}),(0,g.jsx)("option",{value:"bachelor_degree_or_diploma",children:"Bachelor degree\xa0or Advanced diploma"}),(0,g.jsx)("option",{value:"post_graduate_degree_honours",children:"Post graduate degree (Honours)"}),(0,g.jsx)("option",{value:"post_graduate_degree_masters",children:"Post graduate degree (Masters)"}),(0,g.jsx)("option",{value:"post_graduate_degree_doctorate",children:"Post graduate degree (Doctorate)"})]}),s.qualification&&r.qualification?(0,g.jsx)("small",{className:"text-danger",children:r.qualification}):null]})})]}),(0,g.jsxs)("div",{className:"avg__form_panel",children:[(0,g.jsxs)("p",{className:"mb-2",children:[" ",(0,g.jsx)("strong",{children:"4. How can we contact you?"}),(0,g.jsx)("span",{children:"*"})]}),(0,g.jsxs)("div",{className:"row form-row",children:[(0,g.jsx)("div",{className:"form-group col-md-12",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-3",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"com_email",name:"method_of_communication",onChange:i,onBlur:l,value:"email",checked:a.method_of_communication.email||a.method_of_communication.includes("email")}),"Email"]})}),(0,g.jsx)("div",{className:"col-md-3",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"com_whatsapp",name:"method_of_communication",onChange:i,onBlur:l,value:"whatsapp",checked:a.method_of_communication.whatsapp||a.method_of_communication.includes("whatsapp")}),"WhatsApp"]})}),(0,g.jsx)("div",{className:"col-md-3",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"com_sms",name:"method_of_communication",onChange:i,onBlur:l,value:"sms",checked:a.method_of_communication.sms||a.method_of_communication.includes("sms")}),"SMS"]})}),(0,g.jsx)("div",{className:"col-md-3",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"com_phone",name:"method_of_communication",onChange:i,onBlur:l,value:"phone_call",checked:a.method_of_communication.phone_call||a.method_of_communication.includes("phone_call")}),"Telephone"]})})]})}),(0,g.jsx)("div",{className:"col-md-3",children:s.method_of_communication&&r.method_of_communication?(0,g.jsx)("small",{className:"text-danger",children:r.method_of_communication}):null})]})]}),(0,g.jsx)("br",{}),(0,g.jsx)("div",{className:"avg__form_panel",children:(0,g.jsx)("div",{className:"row form-row",children:(0,g.jsx)("div",{className:"form-group col-md-12",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("div",{className:"form-group col-md-12",children:[(0,g.jsxs)("p",{children:["We're serious about your privacy. Please read our Terms and Conditions before you continue.",(0,g.jsx)("br",{}),(0,g.jsxs)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:["View our e-commerce policy here",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("br",{}),(0,g.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"View our POPI website privacy policy here"}),".",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"form-group col-md-12",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"ecommercePolicy",name:"ecommercePolicy",onChange:i,onClick:V,onBlur:l,value:"true",checked:a.ecommercePolicy}),"I have read and accept the e-commerce policy.",(0,g.jsx)("span",{children:"*"})]})}),(0,g.jsx)("div",{className:"form-group col-md-12",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"privacy",name:"privacy",onChange:i,onClick:V,onBlur:l,value:"true",checked:a.privacy}),"I have read and accept the POPI website privacy policy",(0,g.jsx)("span",{children:"*"})]})}),(0,g.jsxs)("div",{className:"form-group col-md-12",children:[(0,g.jsxs)("label",{className:"radio-inline content-para",children:[(0,g.jsx)("input",{type:"checkbox",id:"userConsent",name:"userConsent",onChange:i,onClick:V,onBlur:l,value:"true",checked:a.userConsent}),"I hereby agree and authorise The High Vista Guild, and its affiliates, as well as any third-party processor or operator, to process my personal information for the purpose of enrolling me as a subscriber for online training and refer-a-friend programs, as well as to comply with any legal obligations. I am aware that I may withdraw my consent, by using the ",(0,g.jsx)("strong",{children:"Data Subject Consent Withdrawal Form"})," as provided for under Legal Information. The form must be emailed to popi@skilltechsa.co.za.",(0,g.jsx)("span",{children:"*"})]}),s.ecommercePolicy&&r.ecommercePolicy||s.privacy&&r.privacy||s.userConsent&&r.userConsent?(0,g.jsx)("small",{className:"text-danger",children:r.ecommercePolicy||r.privacy||r.userConsent}):null]})]})]})})})})}),(0,g.jsxs)("div",{className:"avg__form_panel",children:[(0,g.jsxs)("p",{className:"mb-2",children:[(0,g.jsx)("strong",{children:"5. How did you hear about High Vista Guild?"}),(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("div",{className:"row form-row",children:(0,g.jsxs)("div",{className:"form-group col-md-12",children:[(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-5",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"social_media_page",name:"how_did_you_hear_about_us",onChange:i,onBlur:l,value:"social_media_page",checked:"social_media_page"===a.how_did_you_hear_about_us||a.how_did_you_hear_about_us.includes("social_media_page")}),"Our social media pages"]})}),(0,g.jsx)("div",{className:"col-md-5",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"our_website",name:"how_did_you_hear_about_us",onChange:i,onBlur:l,value:"our_website",checked:"our_website"===a.how_did_you_hear_about_us||a.how_did_you_hear_about_us.includes("our_website")}),"Our website"]})}),(0,g.jsx)("div",{className:"col-md-5",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"referred_by_ambassador",name:"how_did_you_hear_about_us",onChange:i,onBlur:l,value:"referred_by_ambassador",checked:"referred_by_ambassador"===a.how_did_you_hear_about_us||a.how_did_you_hear_about_us.includes("referred_by_ambassador")}),"I was referred by an ambassador"]})}),(0,g.jsx)("div",{className:"col-md-5",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"referred_by_friend",name:"how_did_you_hear_about_us",onChange:i,onBlur:l,value:"referred_by_friend",checked:"referred_by_friend"===a.how_did_you_hear_about_us||a.how_did_you_hear_about_us.includes("referred_by_friend")}),"I was referred by a friend"]})}),(0,g.jsx)("div",{className:"col-md-5",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"stumbled_on_browsing",name:"how_did_you_hear_about_us",onChange:i,onBlur:l,value:"stumbled_on_browsing",checked:"stumbled_on_browsing"===a.how_did_you_hear_about_us||a.how_did_you_hear_about_us.includes("stumbled_on_browsing")}),"I stumbled on it while browsing"]})}),(0,g.jsx)("div",{className:"col-md-5",children:(0,g.jsxs)("label",{className:"radio-inline",children:[(0,g.jsx)("input",{type:"checkbox",id:"other_option",name:"how_did_you_hear_about_us",onChange:D,onBlur:l,value:I,checked:q}),"Other"]})})]}),q&&(0,g.jsx)("div",{className:"row",children:(0,g.jsx)("div",{className:"col-md-12",children:(0,g.jsx)("textarea",{className:"form-control",name:"other_option_text",value:I,onChange:G,placeholder:"Please specify..."})})}),s.how_did_you_hear_about_us&&r.how_did_you_hear_about_us?(0,g.jsx)("small",{className:"text-danger",children:r.how_did_you_hear_about_us}):null]})})]}),(0,g.jsx)("div",{className:"avg__form_panel",children:(0,g.jsxs)("button",{type:"submit",className:"btn btn-primary btn-color bt-size mt-4 mb-4","data-id":c,children:["Complete My Order and Pay!",(0,g.jsx)("span",{className:"arrow-btn",children:(0,g.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})}})})]})})]})})}),(0,g.jsx)(l.A,{})]})}}}]);
//# sourceMappingURL=2340.eb806ea5.chunk.js.map