"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[4020],{4020:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var r=s(2483),a=s(4690),l=s.n(a),n=(s(7757),s(3074),s(5699)),c=s(9918),i=s(4848),o=s(3191);const d=r.forwardRef((function(e,t){let{title:s,titleId:a,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}));var x=s(2659),h=s(2595),p=s(1222),u=s(6723);const m=e=>{let{title:t,setShowModal:s,agentId:a}=e;const[l,n]=(0,r.useState)(!1);(0,r.useEffect)((()=>{i()}),[]),console.log("AgentID=",a);const i=()=>{p.A.get("admin/get-agents-byid/".concat(a)).then((e=>{c.oR.dismiss(),e.data&&(console.log(e.data),e.data.status&&(n(e.data.data),console.log("Active agent Modal data:",e.data.data)))})).catch((e=>{c.oR.dismiss(),e.response&&c.oR.error("Error while getting data!",{position:"top-center",autoClose:3e3})}))};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,u.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-full",children:(0,u.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,u.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",children:[(0,u.jsx)("h3",{className:"text-3xl font-semibold",children:t}),(0,u.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>s(!1),children:(0,u.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,u.jsx)("div",{className:"relative p-6 flex-auto",children:(0,u.jsx)("div",{class:"relative overflow-x-auto",children:(0,u.jsxs)("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,u.jsx)("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Product name"}),(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Color"}),(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Category"}),(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Price"}),(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Price"}),(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Price"}),(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Price"}),(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Price"}),(0,u.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Price"})]})}),(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[(0,u.jsx)("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:'Apple MacBook Pro 17"'}),(0,u.jsx)("td",{class:"px-6 py-4",children:"Silver"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"Laptop"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"$2999"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"$2999"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"$2999"})]}),(0,u.jsxs)("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[(0,u.jsx)("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"Microsoft Surface Pro"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"White"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"Laptop PC"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"$1999"})]}),(0,u.jsxs)("tr",{class:"bg-white dark:bg-gray-800",children:[(0,u.jsx)("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"Magic Mouse 2"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"Black"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"Accessories"}),(0,u.jsx)("td",{class:"px-6 py-4",children:"$99"})]})]})]})})}),(0,u.jsx)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b",children:(0,u.jsx)("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>s(!1),children:"Close"})})]})})})})})},j=()=>{(0,r.useEffect)((()=>{b()}),[]);const[e,t]=(0,r.useState)(""),[s,a]=(0,r.useState)(""),[j,g]=(0,r.useState)(!1),b=()=>{p.A.get("admin/get-active-agents").then((e=>{c.oR.dismiss(),e.data&&(console.log(e.data),e.data.status&&(t(e.data.data),console.log(e.data.data)))})).catch((e=>{c.oR.dismiss(),e.response&&c.oR.error("Error while getting data!",{position:"top-center",autoClose:3e3})}))};return(0,u.jsxs)(u.Fragment,{children:[j&&s?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m,{title:"Agent Details",setShowModal:g,agentId:s})}):null,(0,u.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,u.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,u.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,u.jsx)(x.A,{}),(0,u.jsxs)(n.A,{title:"Active Agents",topMargin:"mt-2",TopSideButtons:"",children:[console.log("agentsActive=",e),(0,u.jsx)("div",{className:"overflow-x-auto w-full",children:(0,u.jsxs)("table",{className:"table w-full",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Name"}),(0,u.jsx)("th",{children:"Email Id"}),(0,u.jsx)("th",{children:"Id Number"}),(0,u.jsx)("th",{children:"Mobile Number"}),(0,u.jsx)("th",{children:"Status"}),(0,u.jsx)("th",{children:"Created At"}),(0,u.jsx)("th",{children:"Actions"})]})}),(0,u.jsx)("tbody",{children:e&&e.map&&e.map(((s,r)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:(0,u.jsx)("div",{className:"flex items-center space-x-3",children:(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"font-bold",children:[(0,u.jsx)("div",{className:"font-bold",children:s.firstname}),(0,u.jsx)("div",{className:"text-sm opacity-50",children:s.surname})]})})})}),(0,u.jsx)("td",{children:s.email}),(0,u.jsx)("td",{children:s.id_number}),(0,u.jsx)("td",{children:s.mobile_number}),(0,u.jsx)("td",{children:s.is_active}),(0,u.jsx)("td",{children:l()(s.createdAt).format("YYYY-MM-DD")}),(0,u.jsxs)("td",{children:[(0,u.jsx)("a",{href:"#",className:"inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700",onClick:()=>{return e=s.id,a(e),void g(!0);var e},children:"View"}),(0,u.jsx)("button",{className:"btn btn-square btn-ghost",onClick:()=>{return r=s.id,c.oR.dismiss(),void p.A.delete("admin/delete-agent/".concat(r)).then((s=>{if(s.data&&s.data.status){const s=e.filter((e=>e._id!=r));t(s),c.oR.dismiss(),c.oR.success("Agent delete successfull!",{position:"top-center",autoClose:3e3})}})).catch((e=>{c.oR.dismiss(),e.response&&c.oR.error("Error while delete agent!",{position:"top-center",autoClose:3e3})}));var r},children:(0,u.jsx)(d,{className:"w-5"})})]})]},r)))})]})})]})]}),(0,u.jsx)(i.A,{})]}),(0,u.jsx)(o.A,{}),(0,u.jsx)(h.A,{})]})}}}]);
//# sourceMappingURL=4020.2420b711.chunk.js.map