"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[950],{4955:(e,s,i)=>{i.d(s,{A:()=>a});i(2483);const a=i.p+"static/media/solar_arrow-up-broken-blu.b3d14a302db531904d4761c49c87092c.svg"},3110:(e,s,i)=>{i.d(s,{A:()=>t});i(2483);var a=i(6723);const t=e=>{let{isOpen:s,onClose:i,children:t}=e;return s?(0,a.jsx)("div",{onClick:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)("div",{style:{background:"white",height:150,width:240,margin:"auto",padding:"2%",border:"2px solid #000",borderRadius:"10px",boxShadow:"2px solid black"},children:t})}):null}},4950:(e,s,i)=>{i.r(s),i.d(s,{default:()=>g});var a=i(2483);i.p;const t=i.p+"static/media/about-3-5.8e92657aa0a533ad07aa8b5675284bd5.svg";var r=i(4019);i.p;var n=i(3806),o=(i(1499),i(508),i(1223));i(4955);i.p;var c=i(3936),l=i(3688),d=i(7757),m=i(3376),u=(i(3049),i(3140)),h=(i(9082),i(3110)),p=i(9918),b=i(1222),x=i(6723);const g=()=>{const[e,s]=(0,a.useState)([]);let[i,g]=(0,a.useState)(null),[j,v]=(0,a.useState)(null),[f,N]=(0,a.useState)(null);!function(e){const s=(0,a.useRef)(null);(0,a.useEffect)((()=>{s.current=e})),s.current}({course:f,setCourse:N});const[y,w]=(0,a.useState)(1),[_]=(0,a.useState)(10),[k,A]=(0,a.useState)(""),[C,S]=(0,a.useState)(0),[q,M]=(0,a.useState)(!1),H=(0,m.Zp)(),[L,V]=(JSON.parse(localStorage.getItem("userInfo")),(0,d.wA)(),(0,d.d4)((e=>e.cart)),(0,a.useState)(null));r.A,r.A;(0,a.useEffect)((()=>{z(),O()}),[f]),p.oR.configure();const E=e=>{H("/courses-details",{state:{title:e}})},G=[{id:1,title:"What does a Subscription cost?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:2,title:"What is included in your monthly Subscription?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:3,title:"Who can become a Subscriber?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:4,title:"Who can become an Ambassador?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:5,title:"How do I switch from being a Subscriber to becoming an Ambassador?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:6,title:"What does it cost to become an Ambassador?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:7,title:"Can I cancel my Subscription?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"}],B=e=>{V((s=>s===e?null:e))};const I=e=>{let s=document.createElement("div");return s.innerHTML=e,(e=s.textContent||s.innerText||"").length>10&&(e=e.slice(0,210)+"..."),e},W=e=>e.map(((e,s)=>(0,x.jsx)("div",{className:"course_item",children:(0,x.jsxs)("a",{href:"/",className:"course-grid",children:[(0,x.jsx)("figure",{className:"figure",children:(0,x.jsx)("img",{src:r.A,className:"figure-img img-fluid rounded",alt:e.fullname})}),(0,x.jsxs)("div",{className:"course-details",children:[(0,x.jsx)("h4",{children:e.fullname}),(0,x.jsx)("div",{className:"course_footer d-flex justify-content-between align-items-center",children:(0,x.jsx)("span",{className:"amb-btn mt-4",children:(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",children:["REGISTER NOW",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:o.A,alt:""})})]})})})]})]})},s))),z=()=>{try{b.A.get("https://skilltechsa.online/webservice/rest/server.php?wstoken=fe95c9babb55eccd43c80162403b1614&moodlewsrestformat=json&wsfunction=core_course_get_courses&options[ids][0]=4&options[ids][1]=8&options[ids][2]=9&options[ids][3]=16&options[ids][4]=19").then((e=>{if(200===e.status){g(e.data);let i=W(e.data);console.log("myApi=",i),s(i),S(e.data.length)}else g(null);console.log("response=",e.data)}))}catch(e){return!1}},O=()=>{try{b.A.get("https://skilltechsa.online/webservice/rest/server.php?wstoken=fe95c9babb55eccd43c80162403b1614&moodlewsrestformat=json&wsfunction=core_course_get_categories").then((e=>{200===e.status?v(e.data):v(null),console.log("response=",e.data)}))}catch(e){return!1}},P=y*_,R=P-_,T=(null===e||void 0===e||e.slice(R,P),"Our refer-a-friend program is a win-win scenario that offers numerous benefits to its participants, primarily serving as a legitimate means to earn passive income. Unlike pyramid schemes, which are illegal and unsustainable, a refer-a-friend program encourages individuals to invite others within their network to become subscribers. Participants can enjoy rewards and incentives for their referrals making it a reliable source of passive income while advocating for products or services they believe in. By referring those in your network to subscribe to our catalogue of digital learning you can earn 50% of the subscription fee for every referral every month for as long as they stay signed up. This can be done through the Ambassador programme. You need to be a Subscriber to qualify for our refer-a-friend program and become eligible to earn a passive income. Once subscribed, sign up as an Ambassador. For more information about our refer-a-friend programme go to \u201cBecome an Ambassador\u201d."),[F,J]=(0,a.useState)(!1),Y=T.slice(0,300),D=F?T:"".concat(Y,"...");return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.A,{}),(0,x.jsx)("section",{children:(0,x.jsx)("div",{className:"home-about",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-7",children:(0,x.jsxs)("div",{className:"home-about-content-wrapper",children:[(0,x.jsx)("div",{className:"content-heading",children:(0,x.jsxs)("h3",{className:"mb-3",children:[(0,x.jsx)("span",{className:"black",style:{color:"#000000"},children:"Earn a"})," ",(0,x.jsx)("br",{}),(0,x.jsx)("span",{className:"red",style:{color:"#EB5757"},children:"Passive Income"}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{className:"black",style:{color:"#000000"},children:"while You Learn"})]})}),(0,x.jsxs)("div",{className:"content-para",children:[(0,x.jsx)("p",{children:D}),(0,x.jsxs)("button",{onClick:()=>{J(!F)},type:"button",className:"btn btn-primary btn-color bt-size mb-4",children:[F?"View Less":"View More",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:o.A,alt:""})})]})]})]})}),(0,x.jsx)("div",{className:"col-md-5",children:(0,x.jsx)("div",{className:"home-about-img-wrapper",children:(0,x.jsx)("img",{className:"home-about-img2",src:t,alt:""})})})]})})})}),(0,x.jsxs)("section",{className:"courseCat-section bg-blue",children:[(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row home_course_container mt-0",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("div",{className:"catimg-wrapper",children:(0,x.jsx)("div",{className:"table-pie-image mt-2",children:(0,x.jsx)("img",{src:n.A,alt:""})})})}),(0,x.jsx)("div",{className:"col-md-6 ",children:(0,x.jsxs)("div",{className:"courseCat-content",children:[(0,x.jsxs)("div",{className:"table-heading",children:[(0,x.jsx)("h3",{children:"Become a High Vista Guild Subscriber"}),(0,x.jsx)("p",{className:"pb-2 content-para",children:"At the High Vista Guild, we believe in the power of lifelong learning. That\u2019s why we\u2019ve developed 10 unique online short courses, tailor-made with your interests in mind. Whether you're looking at starting your own business, unleashing the power of social media income, epic event planning or mastering the art of blogging, our courses have something for everyone."})]}),(0,x.jsx)("div",{className:"amb-btn mt-4",children:(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>E("The High Vista Course Package"),children:["Learn More",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})})]})}),(0,x.jsx)("div",{className:"vista_container",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row home_course_container ",children:[(0,x.jsx)("div",{className:"col-md-6 ",children:(0,x.jsxs)("div",{className:"courseCat-content",children:[(0,x.jsxs)("div",{className:"table-heading",children:[(0,x.jsx)("div",{className:"content-heading",children:(0,x.jsxs)("h3",{className:"mb-3",children:[(0,x.jsx)("span",{className:"black",style:{color:"#ffffff"},children:"More ways to"})," ",(0,x.jsx)("span",{className:"red",style:{color:"#EB5757"},children:"learn"}),(0,x.jsx)("br",{}),(0,x.jsx)("span",{className:"black",style:{color:"#ffffff"},children:"More ways to"})," ",(0,x.jsx)("span",{className:"red",style:{color:"#EB5757"},children:"earn"})]})}),(0,x.jsx)("h4",{className:"mt-4",style:{color:"#ffffff"},children:"Become a High Vista Guild Ambassador"}),(0,x.jsx)("p",{className:"pb-2 content-para",style:{color:"#ffffff"},children:"Join the High Vista Course Programme and seize the opportunity to become an Ambassador! As an Ambassador, you'll receive a referral fee for each person in your network \u2014 be it family, friends, colleagues, or acquaintances \u2014 who enrolls in the High Vista Guild course programme, and you'll continue to earn for as long as they remain active, paying subscribers. Don't miss out on this opportunity to both enhance your learning and earn rewards. Subscribe to the High Vista Course Programme today and unlock your pathway to becoming an Ambassador!"})]}),(0,x.jsx)("div",{className:"amb-btn mt-4",children:(0,x.jsxs)("button",{type:"button",className:"btn btn-white-color bt-size",onClick:()=>E("Become a High Vista Guild Ambassador"),children:["Learn More",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("div",{className:"catimg-wrapper",children:(0,x.jsx)("div",{className:"table-pie-image mt-2",children:(0,x.jsx)("img",{src:u,alt:""})})})})]})})}),(0,x.jsx)("div",{className:"container"}),(0,x.jsx)("div",{children:(0,x.jsx)(h.A,{isOpen:q,onClose:()=>{M(!1)},style:{position:"absolute",border:"2px solid #000",backgroundColor:"lightgray",boxShadow:"2px solid black",height:150,width:240,margin:"auto",padding:"2%",color:"white"},children:(0,x.jsx)(x.Fragment,{children:f&&f.map(((e,s)=>(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("div",{className:"catimg-wrapper",children:(0,x.jsx)("div",{className:"table-pie-image mt-2",children:(0,x.jsx)("img",{src:n.A,alt:""})})})}),(0,x.jsx)("div",{className:"col-md-6 ",children:(0,x.jsxs)("div",{className:"courseCat-content",children:[(0,x.jsxs)("div",{className:"table-heading",children:[(0,x.jsx)("h3",{children:e.fullname}),(0,x.jsx)("p",{className:"pb-2",children:I(e.summary)}),(0,x.jsxs)("p",{className:"priceperMonth",children:[(0,x.jsx)("span",{children:"R1500,00 /"})," per month"," "]})]}),(0,x.jsx)("div",{className:"amb-btn mt-4",children:(0,x.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:void e.id,children:["Learn More",(0,x.jsx)("span",{className:"arrow-btn",children:(0,x.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})})]})))})})})]}),(0,x.jsx)("section",{className:"hvg__section hvg__cta_section",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"call-to-action-wrapper text-center",children:[(0,x.jsx)("h3",{className:"mb-4",children:"FAQs"}),(0,x.jsx)("div",{className:"home__faqContainer",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("div",{className:"home__faq_innerContainer",children:G.slice(0,Math.ceil(G.length/2)).map((e=>(0,x.jsxs)("div",{className:"home__innerContainer",children:[(0,x.jsxs)("div",{className:"home__Container",onClick:()=>B(e.id),style:{cursor:"pointer"},children:[L===e.id?" - ":" + ",e.title]}),L===e.id&&(0,x.jsx)("p",{children:e.description})]},e.id)))})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("div",{className:"home__faq_innerContainer",children:G.slice(Math.ceil(G.length/2)).map((e=>(0,x.jsxs)("div",{className:"home__innerContainer",children:[(0,x.jsxs)("div",{className:"home__Container",onClick:()=>B(e.id),style:{cursor:"pointer"},children:[L===e.id?" - ":" + ",e.title]}),L===e.id&&(0,x.jsx)("p",{children:e.description})]},e.id)))})})]})})]})})})}),(0,x.jsx)(l.A,{})]})}},1499:(e,s,i)=>{e.exports=i.p+"static/media/Employability.47c210d2b941afa46686.png"},508:(e,s,i)=>{e.exports=i.p+"static/media/Process.e0d3fa12b6c7b73e7e4d.png"},3140:(e,s,i)=>{e.exports=i.p+"static/media/authentic-book-club-scene-3-min1.89dd1a7f116b37cc2a0c.jpg"},9082:(e,s,i)=>{e.exports=i.p+"static/media/woman-sitting-library-with-her-laptop-min1.d57f417f92e35f78e25a.jpg"}}]);
//# sourceMappingURL=950.c5522a98.chunk.js.map