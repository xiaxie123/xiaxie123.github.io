(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5nFI":function(B,_,t){"use strict";var a=t("nKUr"),N=t("VTBJ"),S=t("aHsQ"),f=t("sGsY"),K=t("Ff2n"),h=t("q1tI"),c=t("ek7X"),x=t("0NbB"),A=function(e){var i=e.direction,m=i===void 0?"up":i;return Object(a.jsx)(a.Fragment,{children:m==="up"?Object(a.jsx)(c.a,{className:"up"}):Object(a.jsx)(x.a,{className:"down"})})},P=A,u=function(e){var i=e.title,m=i===void 0?"title":i,D=e.value,v=D===void 0?0:D,l=e.precision,W=l===void 0?0:l,O=e.percent,E=e.isNormal,L=E===void 0?!0:E,b=e.text,C=Object(K.a)(e,["title","value","precision","percent","isNormal","text"]),M=function(){return L?"#000":v>=0?"#389e0d":"#cf1322"},j=O>=0?"up":"down";return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.a,Object(N.a)({title:m,value:v,precision:W,valueStyle:{color:M(),fontWeight:600},prefix:!L&&Number(v)>=0?"+":""},C)),b?Object(a.jsxs)("div",{children:[b," ",Object(a.jsx)(P,{direction:j}),Object(a.jsxs)("span",{className:j,children:[Math.abs(O),"%"]})]}):null]})},r=_.a=u},"c+yx":function(B,_,t){"use strict";t.d(_,"c",function(){return f}),t.d(_,"d",function(){return K}),t.d(_,"e",function(){return c}),t.d(_,"b",function(){return x}),t.d(_,"a",function(){return P});var a=t("KQm4"),N=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,S=function(r){return N.test(r)},f=function(r){return Number(r)>=0?"green":Number(r)<0?"red":"grey"},K=function(r){return Number(r)>=0?"+".concat(r):r},h=function(r,s){var e=r.toString(),i=e.indexOf(".");for(i<0&&(i=e.length,e+=".");e.length<=i+s;)e+="0";return e},c=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=Math.pow(10,s);if(Number(r)>0){var i=Math.floor(Number(r)*e)/e;return h(i,s)}var m=Math.ceil(Number(r)*e)/e;return h(m,s)},x=function(r,s){var e=Math.pow(10,s||8);return Math.floor(Number(r)*e)/e};function A(){for(var u=arguments.length,r=new Array(u),s=0;s<u;s++)r[s]=arguments[s];var e=[].concat(r);function i(){for(var m=arguments.length,D=new Array(m),v=0;v<m;v++)D[v]=arguments[v];return e=[].concat(Object(a.a)(e),D),i}return i.toString=function(){return e.reduce(function(m,D){return Number(m)+Number(D)})},i}var P=function(r){return r.map(function(s){return Number.isNaN(Number(s))?s:x(s,8)})}},coOD:function(B,_,t){"use strict";t.r(_);var a=t("nKUr"),N=t.n(a),S=t("IzEo"),f=t("bx4M"),K=t("g9YV"),h=t("wCAj"),c=t("14J3"),x=t("BMrR"),A=t("jCWc"),P=t("kPKH"),u=t("VTBJ"),r=t("KQm4"),s=t("q1tI"),e=t.n(s),i=t("tMyG"),m=t("hKUY"),D=t("7AqN"),v=t("9kvl"),l=t("c+yx"),W=t("wd/R"),O=t.n(W),E=function(){var b=Object(D.l)(),C=Object(v.e)(),M=b.code,j=b.user,I=b.manager,R=Object(v.h)(function(o){var n=o.userAccount[M];if(n){var T=n.account?n.account[j]:[],Y=n.exchangeDetails?n.exchangeDetails[j]:[];return{account:T,exchangeDetails:Y}}return{account:[],exchangeDetails:[]}}),y=R.account,U=y===void 0?[]:y,p=R.exchangeDetails,d=p===void 0?[]:p,g=U[U.length-1]||[],V=U.reduce(function(o,n){return[].concat(Object(r.a)(o),[{name:"\u7528\u6237\u672A\u5B9E\u73B0\u6536\u76CA",time:n[0]*1e3,value:n[4],key:n[0]},{name:"\u7B56\u7565\u5206\u6210\u6536\u76CA",time:n[0]*1e3,value:n[10],key:n[0]}])},[]),H={data:V,height:300,xField:"time",yField:"value",point:{size:3},xAxis:{type:"time",tickCount:5,mask:"YY-MM-DD"},legend:{position:"top-right"},seriesField:"name"},J=U.map(function(o){return{date:O()(o[0]*1e3).format("YYYY-MM-DD"),marketValue:o[7],incomeValue:o[9],key:o[0]}}),F=Object(r.a)(d).map(function(o){return Object(u.a)(Object(u.a)({},o),{},{key:o.datetime})});console.log(F);var z=[{title:"\u65E5\u671F",dataIndex:"date",key:"date"},{title:"\u5E02\u503C",dataIndex:"marketValue",key:"marketValue",render:function(n){return Number.isNaN(Number(n))?"--":Object(l.e)(n,1).toLocaleString()}},{title:"\u6536\u76CA\u989D",dataIndex:"incomeValue",key:"incomeValue",render:function(n){return Object(a.jsx)("span",{className:Object(l.c)(n),children:Object(l.d)(Object(l.e)(n,2))})}}],Q=[{title:"\u65E5\u671F",dataIndex:"datetime",key:"datetime",render:function(n){return O()(n*1e3).format("YYYY-MM-DD")}},{title:"\u91D1\u989D",dataIndex:"value",key:"value",render:function(n,T){var Y=T.price,Z=T.amount,$=Number(Y)*Number(Z);return Object(a.jsx)("span",{className:Object(l.c)($),children:Number.isNaN(Number($))?"--":Object(l.d)(Object(l.e)($,1))})}},{title:"\u51C0\u503C",dataIndex:"price",key:"price",render:function(n){return Object(a.jsx)("span",{children:Object(l.e)(n,4)})}},{title:"\u4EFD\u989D",dataIndex:"amount",key:"amount",render:function(n){var T=Number(n);return Object(a.jsx)("span",{className:Object(l.c)(T),children:Number.isNaN(Number(T))?"--":Object(l.d)(Object(l.e)(T,1))})}}];Object(s.useEffect)(function(){C({type:"userAccount/getAccountByUser",payload:{code:M,user:j,manager:I}}),C({type:"userAccount/getExchangeDetails",payload:{code:M,user:j,manager:I}})},[M,j,C]);var G=[{title:"\u6301\u4ED3\u5E02\u503C\uFF08USD\uFF09",value:g[7],precision:0},{title:"\u6301\u4ED3\u6536\u76CA\uFF08USD\uFF09",value:g[4]+g[10],precision:1,isNormal:!1},{title:"\u6301\u4ED3\u6536\u76CA\u7387",value:g[8]*100,precision:2,isNormal:!1,suffix:"%"},{title:"\u6301\u4ED3\u4EFD\u989D",value:g[3],precision:0},{title:"\u6301\u4ED3\u6210\u672C(USD)",value:g[2],precision:4}];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(i.a,{title:"".concat(j," - ").concat(M),children:[Object(a.jsx)(x.a,{gutter:[16,16],children:Object(a.jsx)(P.a,{sm:24,children:Object(a.jsx)(m.a,{title:"".concat(M.toUpperCase()," \u7B56\u7565\u6301\u4ED3"),data:G,chartConfig:[H],chartType:["area"],chartTitle:["\u6301\u4ED3\u6536\u76CA"]})})}),Object(a.jsxs)(x.a,{gutter:[16,16],children:[Object(a.jsx)(P.a,{sm:12,children:Object(a.jsx)(f.a,{title:"\u6536\u76CA\u660E\u7EC6",children:Object(a.jsx)(h.a,{columns:z,dataSource:J.reverse()})})}),Object(a.jsx)(P.a,{sm:12,children:Object(a.jsx)(f.a,{title:"\u4EA4\u6613\u660E\u7EC6",children:Object(a.jsx)(h.a,{columns:Q,dataSource:F.reverse()})})})]})]})})};_.default=E},hKUY:function(B,_,t){"use strict";var a=t("IzEo"),N=t("bx4M"),S=t("14J3"),f=t("BMrR"),K=t("jCWc"),h=t("kPKH"),c=t("nKUr"),x=t.n(c),A=t("VTBJ"),P=t("q1tI"),u=t.n(P),r=t("wd/R"),s=t.n(r),e=t("06Lf"),i=t("5nFI"),m=t("nMtQ"),D=t.n(m),v=function(O,E){switch(O){case"column":return Object(c.jsx)(e.b,Object(A.a)({},E));case"area":return Object(c.jsx)(e.a,Object(A.a)({},E));case"pie":return Object(c.jsx)(e.d,Object(A.a)({},E));default:return Object(c.jsx)(e.c,Object(A.a)({},E))}},l=function(O){var E=O.title,L=E===void 0?"":E,b=O.updateTime,C=O.data,M=C===void 0?[]:C,j=O.chartConfig,I=j===void 0?[]:j,R=O.chartType,y=R===void 0?[]:R,U=O.chartTitle,p=U===void 0?[]:U;return Object(c.jsxs)(N.a,{title:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{children:L}),b?Object(c.jsx)("span",{className:D.a.updateTime,children:s()(b).format("YYYY-MM-DD HH:mm:ss")}):null]}),children:[Object(c.jsx)(f.a,{gutter:[16,16],children:M.map(function(d){return Object(c.jsx)(h.a,{sm:Math.floor(24/M.length),children:Object(c.jsx)(i.a,{title:d.title,value:d.value,text:d.text,percent:d.percent,precision:d.precision,isNormal:d.isNormal,suffix:d.suffix})},d.title)})}),Object(c.jsx)(f.a,{gutter:[16,16],children:I.map(function(d,g){return d&&d.data.length>0&&Object(c.jsxs)(h.a,{sm:24/I.length,children:[Object(c.jsx)("h3",{children:p[g]}),Object(c.jsx)("div",{style:{height:"250px"},children:v(y[g],d)})]},d.data.name)})})]})};_.a=l},nMtQ:function(B,_,t){B.exports={updateTime:"updateTime___3zyv9"}}}]);
