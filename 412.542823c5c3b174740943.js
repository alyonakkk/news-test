"use strict";(self.webpackChunknews=self.webpackChunknews||[]).push([[412],{3412:(e,n,r)=>{r.r(n),r.d(n,{default:()=>w});var t=r(5893),a=r(2305),l=r(7294),o=r(7536),s=r(5870),i=r(3048),u=r(9924),c=r(6219),d=r(8415),f=r(3146),p=r(6310),v=r(1850),m=p.Ry().shape({name:p.Z_().required("Введите имя"),surname:p.Z_().required("Введите фамилию"),age:p.Rx().required("Введите возраст").test("Digits only","Ваш возраст не может быть меньше 18 лет",(function(e){return(0,v.Hc)(null==e?void 0:e.toString())})).min(18,"Ваш возраст не может быть меньше 18 лет").max(100,"Ваш возраст не может быть больше 100 лет"),phone:p.Z_().test("length","Неккоректный номер телефона",v.a$).required("Введите телефон")}),h=function(){return h=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},h.apply(this,arguments)};const g=function(){var e=(0,u.TL)(),n=(0,u.CG)(s.tT),r=(0,u.CG)(s.ss),p=(0,l.useState)(!1),v=p[0],g=p[1],b=(0,o.cI)({resolver:(0,a.X)(m)}),x=b.handleSubmit,y=b.control,j=b.reset,w=b.formState.errors;return(0,l.useEffect)((function(){j(n)}),[n]),r===i.J.PENDING?(0,t.jsx)(f.a,{}):(0,t.jsx)(c.Z,h({onSubmit:x((function(n){return r=this,t=void 0,l=function(){return function(e,n){var r,t,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(s){return function(i){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,s[0]&&(o=0)),o;)try{if(r=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;switch(t=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,t=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=n.call(e,o)}catch(e){s=[6,e],t=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}(this,(function(r){switch(r.label){case 0:return g(!0),[4,e((0,s.A4)(n))];case 1:return r.sent(),g(!1),[2]}}))},new((a=void 0)||(a=Promise))((function(e,n){function o(e){try{i(l.next(e))}catch(e){n(e)}}function s(e){try{i(l.throw(e))}catch(e){n(e)}}function i(n){var r;n.done?e(n.value):(r=n.value,r instanceof a?r:new a((function(e){e(r)}))).then(o,s)}i((l=l.apply(r,t||[])).next())}));var r,t,a,l})),isLoading:v,submitTitle:"Сохранить"},{children:(0,t.jsxs)("div",h({className:"flex flex-col gap-1 w-full"},{children:[(0,t.jsx)(o.Qr,{render:function(e){var n,r,a,l=e.field,o=l.value,s=l.onChange;return(0,t.jsx)(d.Z,{value:o,onChangeInput:s,errorMessage:(null!==(r=null===(n=w.name)||void 0===n?void 0:n.message)&&void 0!==r?r:"").toString(),isError:!!(null===(a=w.name)||void 0===a?void 0:a.message),label:"Имя"})},name:"name",control:y,defaultValue:""}),(0,t.jsx)(o.Qr,{render:function(e){var n,r,a,l=e.field,o=l.value,s=l.onChange;return(0,t.jsx)(d.Z,{value:o,onChangeInput:s,errorMessage:(null!==(r=null===(n=w.surname)||void 0===n?void 0:n.message)&&void 0!==r?r:"").toString(),isError:!!(null===(a=w.surname)||void 0===a?void 0:a.message),label:"Фамилия"})},name:"surname",control:y,defaultValue:""}),(0,t.jsx)(o.Qr,{render:function(e){var n,r,a,l=e.field,o=l.value,s=l.onChange;return(0,t.jsx)(d.Z,{value:o,onChangeInput:s,errorMessage:(null!==(r=null===(n=w.patronymic)||void 0===n?void 0:n.message)&&void 0!==r?r:"").toString(),isError:!!(null===(a=w.patronymic)||void 0===a?void 0:a.message),label:"Отчество"})},name:"patronymic",control:y,defaultValue:""}),(0,t.jsx)(o.Qr,{render:function(e){var n,r,a,l=e.field,o=l.value,s=l.onChange;return(0,t.jsx)(d.Z,{type:"number",value:o.toString(),onChangeInput:function(e){return s(+e)},errorMessage:(null!==(r=null===(n=w.age)||void 0===n?void 0:n.message)&&void 0!==r?r:"").toString(),isError:!!(null===(a=w.age)||void 0===a?void 0:a.message),label:"Возраст"})},name:"age",control:y,defaultValue:0}),(0,t.jsx)(o.Qr,{render:function(e){var n,r,a,l=e.field,o=l.value,s=l.onChange;return(0,t.jsx)(d.Z,{mask:"+7 (999) 999-99-99",type:"tel",value:o,onChangeInput:s,errorMessage:(null!==(r=null===(n=w.phone)||void 0===n?void 0:n.message)&&void 0!==r?r:"").toString(),isError:!!(null===(a=w.phone)||void 0===a?void 0:a.message),label:"Телефон"})},name:"phone",control:y,defaultValue:""})]}))}))};var b=r(4742),x=r(3017),y=r(307),j=function(){return j=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},j.apply(this,arguments)};const w=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.Z,{title:x.T[b.Z.profile],description:"Настройки личного кабинета"}),(0,t.jsx)("div",j({className:"m-auto w-full md:w-1/2"},{children:(0,t.jsx)(g,{})}))]})}},6219:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(5893),a=r(7294),l=function(){return l=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},l.apply(this,arguments)};const o=(0,a.memo)((function(e){var n=e.children,r=e.isLoading,a=void 0!==r&&r,o=e.onSubmit,s=e.submitTitle,i=e.formStyle,u=void 0===i?"":i;return(0,t.jsxs)("form",l({noValidate:!0,className:"m-auto flex flex-col gap-5 max-w-[500px] ".concat(u),onSubmit:o},{children:[n,(0,t.jsxs)("button",l({disabled:a,className:"btn btn-primary"},{children:[a&&(0,t.jsx)("span",{className:"loading loading-spinner"}),s]}))]}))}))},8415:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(5893),a=r(7294),l=r(6627),o=r.n(l),s=function(){return s=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},s.apply(this,arguments)};const i=function(e){var n=e.type,r=void 0===n?"text":n,l=e.value,i=void 0===l?"":l,u=e.mask,c=e.onChangeInput,d=e.label,f=e.placeholder,p=void 0===f?"":f,v=e.isDisabled,m=void 0!==v&&v,h=e.isError,g=void 0!==h&&h,b=e.errorMessage,x=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r}(e,["type","value","mask","onChangeInput","label","placeholder","isDisabled","isError","errorMessage"]),y=(0,a.useState)(i),j=y[0],w=y[1],O="input input-bordered w-full ".concat(g?"input-error":"");function S(e){var n=e.target.value;c(n)}return(0,a.useEffect)((function(){w(i)}),[i]),(0,t.jsxs)("div",s({className:"form-control w-full"},{children:[(0,t.jsx)("label",s({className:"label"},{children:d&&(0,t.jsx)("span",s({className:"label-text"},{children:d}))})),u?(0,t.jsx)(o(),s({autoComplete:"off",mask:u,value:j,disabled:m,onChange:S,placeholder:p,className:O},x)):(0,t.jsx)("input",s({type:r,value:j,disabled:m,onChange:S,placeholder:p,className:O},x)),(0,t.jsx)("label",s({className:"label"},{children:g&&b&&(0,t.jsx)("span",s({className:"label-text-alt text-error"},{children:b}))}))]}))}},307:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(5893),a=function(){return a=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},a.apply(this,arguments)};const l=function(e){var n=e.title,r=e.description;return(0,t.jsx)("section",a({className:"title flex justify-center items-center w-full"},{children:(0,t.jsxs)("div",a({className:"p-6 flex flex-col items-center gap-2 text-center w-full md:w-1/2 max-w-[600px] bg-gray-light rounded-3xl"},{children:[(0,t.jsx)("h1",a({className:"text-2xl md:text-4xl font-bold text-primary"},{children:n})),r&&(0,t.jsx)("p",{className:"text-sm md:text-lg",dangerouslySetInnerHTML:{__html:r}})]}))}))}}}]);