import{_ as p,j as r,k as _,o as s,c as o,b as e,l as h,m,u as f,p as v,e as w}from"./index-nlvLFLT7.js";const a=t=>(v("data-v-407ae3b4"),t=t(),w(),t),b={action:"#",id:"login",class:"form"},k=a(()=>e("div",{class:"form-header"},[e("h2",null,"Авторизоваться")],-1)),y={class:"form-body"},g=a(()=>e("div",{class:"form-row"},[e("label",{for:"userEmail"}),e("input",{type:"email",name:"userEmail",placeholder:"Email",id:"userEmail"})],-1)),x={class:"form-row"},V=a(()=>e("label",{for:"userPassword"},null,-1)),C=["type"],I={class:"form-check"},E={for:"check"},z={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",class:"bi bi-check-square",viewBox:"0 0 16 16"},B=a(()=>e("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z",fill:"#ff9500"},null,-1)),P={key:0,class:"checked",d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z",fill:"#ff9500"},L={class:"form-footer"},M=a(()=>e("button",{type:"submit",class:"btn-submit"},"отправить",-1)),N={__name:"LoginView",setup(t){const l=r("password"),d=_(),i=r(!1),n=()=>{l.value=l.value==="password"?"text":"password"};return(S,c)=>(s(),o("form",b,[k,e("div",y,[g,e("div",x,[V,e("input",{type:l.value,name:"userPassword",placeholder:"Password",id:"userPassword"},null,8,C),l.value==="password"?(s(),o("i",{key:0,class:"bi bi-eye-slash",onClick:n})):(s(),o("i",{key:1,class:"bi bi-eye",onClick:n}))]),e("div",I,[e("label",E,[(s(),o("svg",z,[B,i.value?(s(),o("path",P)):h("",!0)])),e("input",{type:"checkbox",name:"mem",id:"check",class:"check",onChange:c[0]||(c[0]=u=>i.value=!i.value)},null,32)])])]),e("div",L,[M,e("p",null,[m(" Нет аккаунта? "),e("span",{onClick:c[1]||(c[1]=u=>f(d).push("/register"))},"Зарегистрироваться")])])]))}},$=p(N,[["__scopeId","data-v-407ae3b4"]]);export{$ as default};
