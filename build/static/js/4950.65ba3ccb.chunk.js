"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[4950],{4955:(e,s,i)=>{i.d(s,{A:()=>a});i(2483);const a=i.p+"static/media/solar_arrow-up-broken-blu.b3d14a302db531904d4761c49c87092c.svg"},3110:(e,s,i)=>{i.d(s,{A:()=>r});i(2483);var a=i(6723);const r=e=>{let{isOpen:s,onClose:i,children:r}=e;return s?(0,a.jsx)("div",{onClick:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)("div",{style:{background:"white",height:150,width:240,margin:"auto",padding:"2%",border:"2px solid #000",borderRadius:"10px",boxShadow:"2px solid black"},children:r})}):null}},4950:(e,s,i)=>{i.r(s),i.d(s,{default:()=>j});var a=i(2483);i.p;const r=i.p+"static/media/about-3-5.8e92657aa0a533ad07aa8b5675284bd5.svg";var t=i(4019);i.p;var n=i(3806),o=(i(1499),i(508),i(1223));i(4955);i.p;var c=i(3936),l=i(3688),d=i(7757),m=i(3376),u=(i(3049),i(3140)),h=i(9082),p=i(3110),b=i(9918),x=i(1222),g=i(6723);const j=()=>{const[e,s]=(0,a.useState)([]);let[i,j]=(0,a.useState)(null),[v,f]=(0,a.useState)(null),[N,y]=(0,a.useState)(null);!function(e){const s=(0,a.useRef)(null);(0,a.useEffect)((()=>{s.current=e})),s.current}({course:N,setCourse:y});const[w,k]=(0,a.useState)(1),[A]=(0,a.useState)(10),[_,C]=(0,a.useState)(""),[S,M]=(0,a.useState)(0),[q,H]=(0,a.useState)(!1),V=(0,m.Zp)(),[L,E]=(JSON.parse(localStorage.getItem("userInfo")),(0,d.wA)(),(0,d.d4)((e=>e.cart)),(0,a.useState)(null));t.A,t.A;(0,a.useEffect)((()=>{O(),T()}),[N]),b.oR.configure();const G=e=>{V("/courses-details",{state:{title:e}})},B=[{id:1,title:"What does a Subscription cost?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:2,title:"What is included in your monthly Subscription?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:3,title:"Who can become a Subscriber?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:4,title:"Who can become an Ambassador?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:5,title:"How do I switch from being a Subscriber to becoming an Ambassador?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:6,title:"What does it cost to become an Ambassador?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"},{id:7,title:"Can I cancel my Subscription?",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?"}],P=e=>{E((s=>s===e?null:e))};const I=e=>{let s=document.createElement("div");return s.innerHTML=e,(e=s.textContent||s.innerText||"").length>10&&(e=e.slice(0,210)+"..."),e},z=e=>e.map(((e,s)=>(0,g.jsx)("div",{className:"course_item",children:(0,g.jsxs)("a",{href:"/",className:"course-grid",children:[(0,g.jsx)("figure",{className:"figure",children:(0,g.jsx)("img",{src:t.A,className:"figure-img img-fluid rounded",alt:e.fullname})}),(0,g.jsxs)("div",{className:"course-details",children:[(0,g.jsx)("h4",{children:e.fullname}),(0,g.jsx)("div",{className:"course_footer d-flex justify-content-between align-items-center",children:(0,g.jsx)("span",{className:"amb-btn mt-4",children:(0,g.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",children:["REGISTER NOW",(0,g.jsx)("span",{className:"arrow-btn",children:(0,g.jsx)("img",{src:o.A,alt:""})})]})})})]})]})},s))),O=()=>{try{x.A.get("https://skilltechsa.online/webservice/rest/server.php?wstoken=fe95c9babb55eccd43c80162403b1614&moodlewsrestformat=json&wsfunction=core_course_get_courses&options[ids][0]=4&options[ids][1]=8&options[ids][2]=9&options[ids][3]=16&options[ids][4]=19").then((e=>{if(200===e.status){j(e.data);let i=z(e.data);console.log("myApi=",i),s(i),M(e.data.length)}else j(null);console.log("response=",e.data)}))}catch(e){return!1}},T=()=>{try{x.A.get("https://skilltechsa.online/webservice/rest/server.php?wstoken=fe95c9babb55eccd43c80162403b1614&moodlewsrestformat=json&wsfunction=core_course_get_categories").then((e=>{200===e.status?f(e.data):f(null),console.log("response=",e.data)}))}catch(e){return!1}},W=w*A,R=W-A,F=(null===e||void 0===e||e.slice(R,W),"Our refer-a-friend program is a win-win scenario that offers numerous benefits to its participants, primarily serving as a legitimate means to earn passive income. Unlike pyramid schemes, which are illegal and unsustainable, a refer-a-friend program encourages individuals to invite others within their network to become subscribers. Participants can enjoy rewards and incentives for their referrals making it a reliable source of passive income while advocating for products or services they believe in. By referring those in your network to subscribe to our catalogue of digital learning you can earn 50% of the subscription fee for every referral every month for as long as they stay signed up. This can be done through the Ambassador programme. You need to be a Subscriber to qualify for our refer-a-friend program and become eligible to earn a passive income. Once subscribed, sign up as an Ambassador. For more information about our refer-a-friend programme go to \u201cBecome an Ambassador\u201d."),[D,J]=(0,a.useState)(!1),Y=F.slice(0,300),Q=D?F:"".concat(Y,"...");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.A,{}),(0,g.jsx)("section",{children:(0,g.jsx)("div",{className:"home-about",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-7",children:(0,g.jsxs)("div",{className:"home-about-content-wrapper",children:[(0,g.jsx)("div",{className:"content-heading",children:(0,g.jsxs)("h3",{className:"mb-3",children:[(0,g.jsx)("span",{className:"black",style:{color:"#000000"},children:"Earn a"})," ",(0,g.jsx)("br",{}),(0,g.jsx)("span",{className:"red",style:{color:"#EB5757"},children:"Passive Income"}),(0,g.jsx)("br",{}),(0,g.jsx)("span",{className:"black",style:{color:"#000000"},children:"while You Learn"})]})}),(0,g.jsxs)("div",{className:"content-para",children:[(0,g.jsx)("p",{children:Q}),(0,g.jsxs)("button",{onClick:()=>{J(!D)},type:"button",className:"btn btn-primary btn-color bt-size mb-4",children:[D?"View Less":"View More",(0,g.jsx)("span",{className:"arrow-btn",children:(0,g.jsx)("img",{src:o.A,alt:""})})]})]})]})}),(0,g.jsx)("div",{className:"col-md-5",children:(0,g.jsx)("div",{className:"home-about-img-wrapper",children:(0,g.jsx)("img",{className:"home-about-img2",src:r,alt:""})})})]})})})}),(0,g.jsxs)("section",{className:"courseCat-section bg-blue",children:[(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"row home_course_container mt-0",children:[(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("div",{className:"catimg-wrapper",children:(0,g.jsx)("div",{className:"table-pie-image mt-2",children:(0,g.jsx)("img",{src:n.A,alt:""})})})}),(0,g.jsx)("div",{className:"col-md-6 ",children:(0,g.jsxs)("div",{className:"courseCat-content",children:[(0,g.jsxs)("div",{className:"table-heading",children:[(0,g.jsx)("h3",{children:"Become a High Vista Guild Subscriber"}),(0,g.jsx)("p",{className:"pb-2 content-para",children:"At the High Vista Guild, we believe in the power of lifelong learning. That\u2019s why we\u2019ve developed 10 unique online short courses, tailor-made with your interests in mind. Whether you're looking at starting your own business, unleashing the power of social media income, epic event planning or mastering the art of blogging, our courses have something for everyone."})]}),(0,g.jsx)("div",{className:"amb-btn mt-4",children:(0,g.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>G("The High Vista Course Package"),children:["Learn More",(0,g.jsx)("span",{className:"arrow-btn",children:(0,g.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})})]})}),(0,g.jsx)("div",{className:"vista_container",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"row home_course_container ",children:[(0,g.jsx)("div",{className:"col-md-6 ",children:(0,g.jsxs)("div",{className:"courseCat-content",children:[(0,g.jsxs)("div",{className:"table-heading",children:[(0,g.jsx)("div",{className:"content-heading",children:(0,g.jsxs)("h3",{className:"mb-3",children:[(0,g.jsx)("span",{className:"black",style:{color:"#ffffff"},children:"More ways to"})," ",(0,g.jsx)("span",{className:"red",style:{color:"#EB5757"},children:"learn"}),(0,g.jsx)("br",{}),(0,g.jsx)("span",{className:"black",style:{color:"#ffffff"},children:"More ways to"})," ",(0,g.jsx)("span",{className:"red",style:{color:"#EB5757"},children:"earn"})]})}),(0,g.jsx)("h4",{className:"mt-4",style:{color:"#ffffff"},children:"Become a High Vista Guild Ambassador"}),(0,g.jsx)("p",{className:"pb-2 content-para",style:{color:"#ffffff"},children:"Join the High Vista Course Programme and seize the opportunity to become an Ambassador! As an Ambassador, you'll receive a referral fee for each person in your network \u2014 be it family, friends, colleagues, or acquaintances \u2014 who enrolls in the High Vista Guild course programme, and you'll continue to earn for as long as they remain active, paying subscribers. Don't miss out on this opportunity to both enhance your learning and earn rewards. Subscribe to the High Vista Course Programme today and unlock your pathway to becoming an Ambassador!"})]}),(0,g.jsx)("div",{className:"amb-btn mt-4",children:(0,g.jsxs)("button",{type:"button",className:"btn btn-white-color bt-size",onClick:()=>G("Become a High Vista Guild Ambassador"),children:["Learn More",(0,g.jsx)("span",{className:"arrow-btn",children:(0,g.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})}),(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("div",{className:"catimg-wrapper",children:(0,g.jsx)("div",{className:"table-pie-image mt-2",children:(0,g.jsx)("img",{src:u,alt:""})})})})]})})}),(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"row home_course_container",children:[(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("div",{className:"catimg-wrapper",children:(0,g.jsx)("div",{className:"table-pie-image mt-2",children:(0,g.jsx)("img",{src:h,alt:""})})})}),(0,g.jsx)("div",{className:"col-md-6 ",children:(0,g.jsxs)("div",{className:"courseCat-content",children:[(0,g.jsxs)("div",{className:"table-heading",children:[(0,g.jsx)("h3",{children:"Our Premium Courses"}),(0,g.jsx)("p",{className:"pb-2 content-para",children:'Embark on a transformative journey with our high-impact premium courses, designed to equip you with the essential knowledge for a monumental leap forward in your career. Discover these exclusive offerings on our digital campus or delve deeper into their details below. Please note that these premium courses are exclusive and not covered under your monthly subscription. However, we offer an exciting opportunity through our High Vista Ambassador Program. As a High Vista Ambassador, you can unlock these premium courses at no extra cost by achieving specific referral milestones. The more successful referrals you contribute, the greater your access to our premium course selection without any additional charges. Interested in this rewarding journey? Go to "Become a High Vista Ambassador".'})]}),(0,g.jsx)("div",{className:"amb-btn mt-4",children:(0,g.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:()=>{V("/premium-courses")},children:["Learn More",(0,g.jsx)("span",{className:"arrow-btn",children:(0,g.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})})]})}),(0,g.jsx)("div",{children:(0,g.jsx)(p.A,{isOpen:q,onClose:()=>{H(!1)},style:{position:"absolute",border:"2px solid #000",backgroundColor:"lightgray",boxShadow:"2px solid black",height:150,width:240,margin:"auto",padding:"2%",color:"white"},children:(0,g.jsx)(g.Fragment,{children:N&&N.map(((e,s)=>(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("div",{className:"catimg-wrapper",children:(0,g.jsx)("div",{className:"table-pie-image mt-2",children:(0,g.jsx)("img",{src:n.A,alt:""})})})}),(0,g.jsx)("div",{className:"col-md-6 ",children:(0,g.jsxs)("div",{className:"courseCat-content",children:[(0,g.jsxs)("div",{className:"table-heading",children:[(0,g.jsx)("h3",{children:e.fullname}),(0,g.jsx)("p",{className:"pb-2",children:I(e.summary)}),(0,g.jsxs)("p",{className:"priceperMonth",children:[(0,g.jsx)("span",{children:"R1500,00 /"})," per month"," "]})]}),(0,g.jsx)("div",{className:"amb-btn mt-4",children:(0,g.jsxs)("button",{type:"button",className:"btn btn-primary btn-color bt-size",onClick:void e.id,children:["Learn More",(0,g.jsx)("span",{className:"arrow-btn",children:(0,g.jsx)("img",{src:o.A,alt:"My Happy SVG"})})]})})]})})]})))})})})]}),(0,g.jsx)("section",{className:"hvg__section hvg__cta_section",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("div",{className:"call-to-action-wrapper text-center",children:[(0,g.jsx)("h3",{className:"mb-4",children:"FAQs"}),(0,g.jsx)("div",{className:"home__faqContainer",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("div",{className:"home__faq_innerContainer",children:B.slice(0,Math.ceil(B.length/2)).map((e=>(0,g.jsxs)("div",{className:"home__innerContainer",children:[(0,g.jsxs)("div",{className:"home__Container",onClick:()=>P(e.id),style:{cursor:"pointer"},children:[L===e.id?" - ":" + ",e.title]}),L===e.id&&(0,g.jsx)("p",{children:e.description})]},e.id)))})}),(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("div",{className:"home__faq_innerContainer",children:B.slice(Math.ceil(B.length/2)).map((e=>(0,g.jsxs)("div",{className:"home__innerContainer",children:[(0,g.jsxs)("div",{className:"home__Container",onClick:()=>P(e.id),style:{cursor:"pointer"},children:[L===e.id?" - ":" + ",e.title]}),L===e.id&&(0,g.jsx)("p",{children:e.description})]},e.id)))})})]})})]})})})}),(0,g.jsx)(l.A,{})]})}},1499:(e,s,i)=>{e.exports=i.p+"static/media/Employability.47c210d2b941afa46686.png"},508:(e,s,i)=>{e.exports=i.p+"static/media/Process.e0d3fa12b6c7b73e7e4d.png"},3140:(e,s,i)=>{e.exports=i.p+"static/media/authentic-book-club-scene-3-min1.89dd1a7f116b37cc2a0c.jpg"},9082:(e,s,i)=>{e.exports=i.p+"static/media/woman-sitting-library-with-her-laptop-min1.d57f417f92e35f78e25a.jpg"}}]);
//# sourceMappingURL=4950.65ba3ccb.chunk.js.map