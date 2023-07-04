"use strict";(self.webpackChunknews=self.webpackChunknews||[]).push([[480],{7480:(e,r,t)=>{t.r(r),t.d(r,{default:()=>S});var n=t(5893),l=t(4742),a=t(3017),o=t(307),s=t(2305),i=t(7294),c=t(7536),u=t(5870),f=t(9924),d=t(6219),p=t(8415),m=t(6310),h=t(1850),x=m.Ry().shape({name:m.Z_().required("Введите имя"),email:m.Z_().email("Неверный формат почты").required("Введите почту"),phone:m.Z_().test("length","Неккоректный номер телефона",h.a$).required("Введите телефон")}),v=function(){return v=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},v.apply(this,arguments)};const g=function(){var e=(0,f.TL)(),r=(0,i.useState)(!1),t=r[0],l=r[1],a=(0,c.cI)({resolver:(0,s.X)(x)}),o=a.handleSubmit,m=a.control,h=a.reset,g=a.formState.errors;return(0,n.jsx)(d.Z,v({isLoading:t,submitTitle:"Отправить",onSubmit:o((function(r){return t=this,n=void 0,o=function(){return function(e,r){var t,n,l,a,o={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(i){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(t=1,n&&(l=2&s[0]?n.return:s[0]?n.throw||((l=n.return)&&l.call(n),0):n.next)&&!(l=l.call(n,s[1])).done)return l;switch(n=0,l&&(s=[2&s[0],l.value]),s[0]){case 0:case 1:l=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((l=(l=o.trys).length>0&&l[l.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!l||s[1]>l[0]&&s[1]<l[3])){o.label=s[1];break}if(6===s[0]&&o.label<l[1]){o.label=l[1],l=s;break}if(l&&o.label<l[2]){o.label=l[2],o.ops.push(s);break}l[2]&&o.ops.pop(),o.trys.pop();continue}s=r.call(e,o)}catch(e){s=[6,e],n=0}finally{t=l=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}(this,(function(t){switch(t.label){case 0:return console.log(r),l(!0),[4,e((0,u.yF)(r))];case 1:return t.sent(),l(!1),h(),[2]}}))},new((a=void 0)||(a=Promise))((function(e,r){function l(e){try{i(o.next(e))}catch(e){r(e)}}function s(e){try{i(o.throw(e))}catch(e){r(e)}}function i(r){var t;r.done?e(r.value):(t=r.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}i((o=o.apply(t,n||[])).next())}));var t,n,a,o})),formStyle:"w-full"},{children:(0,n.jsxs)("div",v({className:"flex flex-col gap-1 w-full"},{children:[(0,n.jsx)(c.Qr,{render:function(e){var r,t,l,a=e.field,o=a.value,s=a.onChange;return(0,n.jsx)(p.Z,{value:o,onChangeInput:s,errorMessage:(null!==(t=null===(r=g.name)||void 0===r?void 0:r.message)&&void 0!==t?t:"").toString(),isError:!!(null===(l=g.name)||void 0===l?void 0:l.message),label:"Ваше имя"})},name:"name",control:m,defaultValue:""}),(0,n.jsx)(c.Qr,{render:function(e){var r,t,l,a=e.field,o=a.value,s=a.onChange;return(0,n.jsx)(p.Z,{type:"email",value:o,onChangeInput:s,errorMessage:(null!==(t=null===(r=g.email)||void 0===r?void 0:r.message)&&void 0!==t?t:"").toString(),isError:!!(null===(l=g.email)||void 0===l?void 0:l.message),label:"Вааша почта"})},name:"email",control:m,defaultValue:""}),(0,n.jsx)(c.Qr,{render:function(e){var r,t,l,a=e.field,o=a.value,s=a.onChange;return(0,n.jsx)(p.Z,{mask:"+7 (999) 999-99-99",type:"tel",value:o,onChangeInput:s,errorMessage:(null!==(t=null===(r=g.phone)||void 0===r?void 0:r.message)&&void 0!==t?t:"").toString(),isError:!!(null===(l=g.phone)||void 0===l?void 0:l.message),label:"Ваш номер телефона"})},name:"phone",control:m,defaultValue:""})]}))}))};var b=t(9797),y=function(){return y=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},y.apply(this,arguments)};const j=function(){return(0,n.jsxs)(b.Z,y({title:"Контакты",name:"contacts"},{children:[(0,n.jsx)("p",y({className:"w-full text-center md:text-left md:w-1/2 md:max-w-[500px]"},{children:"Напишите нам или позвоните и мы свяжемся с вами в течении одного рабочего дня!"})),(0,n.jsxs)("div",y({className:"flex justify-between gap-20 flex-col md:flex-row"},{children:[(0,n.jsxs)("div",y({className:"flex flex-col gap-10 w-full md:w-1/2"},{children:[(0,n.jsx)("a",y({href:"tel:89999999999",className:"block text-xl md:text-3xl hover:text-primary hover:underline hover:underline-offset-8"},{children:"+7 999 999 99 99"})),(0,n.jsx)("a",y({href:"mailto:hello@mail.ru",className:"block text-xl md:text-3xl hover:text-primary hover:underline hover:underline-offset-8"},{children:"hello@mail.ru"}))]})),(0,n.jsx)(g,{})]}))]}))};var w=t(3738),O=[{src:"https://poisk-firm.ru/storage/employer/logo/50/6e/73/299d9296afd0d01a93c58fd1ec.png",name:"Цветной универмаг"},{src:"https://poisk-firm.ru/storage/employer/logo/50/6e/73/299d9296afd0d01a93c58fd1ec.png",name:"Цветной универмаг"},{src:"https://poisk-firm.ru/storage/employer/logo/50/6e/73/299d9296afd0d01a93c58fd1ec.png",name:"Цветной универмаг"},{src:"https://poisk-firm.ru/storage/employer/logo/50/6e/73/299d9296afd0d01a93c58fd1ec.png",name:"Цветной универмаг"},{src:"https://poisk-firm.ru/storage/employer/logo/50/6e/73/299d9296afd0d01a93c58fd1ec.png",name:"Цветной универмаг"}],N=function(){return N=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},N.apply(this,arguments)};const k=function(){var e=O.map((function(e,r){var t=e.src,l=e.name;return(0,n.jsx)("li",N({className:"w-[90px] h-[90px]"},{children:(0,n.jsx)(w.Z,{src:t,name:l})}),r)}));return(0,n.jsx)(b.Z,N({title:"Наши партнеры",name:"partners"},{children:(0,n.jsx)("ul",N({className:"flex justify-center gap-5"},{children:e}))}))},S=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{title:a.T[l.Z.about],description:"Ознакомьтесь с нашими партнерами и напишите нам"}),(0,n.jsx)(k,{}),(0,n.jsx)(j,{})]})}},6219:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(5893),l=t(7294),a=function(){return a=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},a.apply(this,arguments)};const o=(0,l.memo)((function(e){var r=e.children,t=e.isLoading,l=void 0!==t&&t,o=e.onSubmit,s=e.submitTitle,i=e.formStyle,c=void 0===i?"":i;return(0,n.jsxs)("form",a({noValidate:!0,className:"m-auto flex flex-col gap-5 max-w-[500px] ".concat(c),onSubmit:o},{children:[r,(0,n.jsxs)("button",a({disabled:l,className:"btn btn-primary"},{children:[l&&(0,n.jsx)("span",{className:"loading loading-spinner"}),s]}))]}))}))},8415:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(5893),l=t(7294),a=t(6627),o=t.n(a),s=function(){return s=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},s.apply(this,arguments)};const i=function(e){var r=e.type,t=void 0===r?"text":r,a=e.value,i=void 0===a?"":a,c=e.mask,u=e.onChangeInput,f=e.label,d=e.placeholder,p=void 0===d?"":d,m=e.isDisabled,h=void 0!==m&&m,x=e.isError,v=void 0!==x&&x,g=e.errorMessage,b=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(e,["type","value","mask","onChangeInput","label","placeholder","isDisabled","isError","errorMessage"]),y=(0,l.useState)(i),j=y[0],w=y[1],O="input input-bordered w-full ".concat(v?"input-error":"");function N(e){var r=e.target.value;u(r)}return(0,l.useEffect)((function(){w(i)}),[i]),(0,n.jsxs)("div",s({className:"form-control w-full"},{children:[(0,n.jsx)("label",s({className:"label"},{children:f&&(0,n.jsx)("span",s({className:"label-text"},{children:f}))})),c?(0,n.jsx)(o(),s({autoComplete:"off",mask:c,value:j,disabled:h,onChange:N,placeholder:p,className:O},b)):(0,n.jsx)("input",s({type:t,value:j,disabled:h,onChange:N,placeholder:p,className:O},b)),(0,n.jsx)("label",s({className:"label"},{children:v&&g&&(0,n.jsx)("span",s({className:"label-text-alt text-error"},{children:g}))}))]}))}},307:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(5893),l=function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},l.apply(this,arguments)};const a=function(e){var r=e.title,t=e.description;return(0,n.jsx)("section",l({className:"title flex justify-center items-center w-full"},{children:(0,n.jsxs)("div",l({className:"p-6 flex flex-col items-center gap-2 text-center w-full md:w-1/2 max-w-[600px] bg-gray-light rounded-3xl"},{children:[(0,n.jsx)("h1",l({className:"text-2xl md:text-4xl font-bold text-primary"},{children:r})),t&&(0,n.jsx)("p",{className:"text-sm md:text-lg",dangerouslySetInnerHTML:{__html:t}})]}))}))}},9797:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(5893),l=function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},l.apply(this,arguments)};const a=function(e){var r=e.title,t=e.name,a=e.children;return(0,n.jsxs)("section",l({className:"".concat(t," flex flex-col gap-7")},{children:[(0,n.jsx)("h2",l({className:"text-xl md:text-4xl font-bold"},{children:r})),a]}))}}}]);