(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5nFI":function(K,m,t){"use strict";var c=t("nKUr"),g=t("VTBJ"),L=t("aHsQ"),h=t("sGsY"),B=t("Ff2n"),P=t("q1tI"),r=t("ek7X"),I=t("0NbB"),b=function(e){var o=e.direction,d=o===void 0?"up":o;return Object(c.jsx)(c.Fragment,{children:d==="up"?Object(c.jsx)(r.a,{className:"up"}):Object(c.jsx)(I.a,{className:"down"})})},T=b,s=function(e){var o=e.title,d=o===void 0?"title":o,j=e.value,E=j===void 0?0:j,p=e.precision,W=p===void 0?0:p,u=e.percent,O=e.isNormal,f=O===void 0?!0:O,D=e.text,A=Object(B.a)(e,["title","value","precision","percent","isNormal","text"]),C=function(){return f?"#000":E>=0?"#389e0d":"#cf1322"},_=u>=0?"up":"down";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a,Object(g.a)({title:d,value:E,precision:W,valueStyle:{color:C(),fontWeight:600},prefix:!f&&Number(E)>=0?"+":""},A)),D?Object(c.jsxs)("div",{children:[D," ",Object(c.jsx)(T,{direction:_}),Object(c.jsxs)("span",{className:_,children:[Math.abs(u),"%"]})]}):null]})},n=m.a=s},"c+yx":function(K,m,t){"use strict";t.d(m,"b",function(){return h}),t.d(m,"c",function(){return B}),t.d(m,"d",function(){return r}),t.d(m,"a",function(){return I});var c=t("KQm4"),g=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,L=function(n){return g.test(n)},h=function(n){return Number(n)>=0?"green":Number(n)<0?"red":"grey"},B=function(n){return Number(n)>=0?"+".concat(n):n},P=function(n,i){var e=n.toString(),o=e.indexOf(".");for(o<0&&(o=e.length,e+=".");e.length<=o+i;)e+="0";return e},r=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=Math.pow(10,i);if(Number(n)>0){var o=Math.floor(Number(n)*e)/e;return P(o,i)}var d=Math.ceil(Number(n)*e)/e;return P(d,i)},I=function(n,i){var e=Math.pow(10,i||8);return Math.floor(Number(n)*e)/e};function b(){for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];var e=[].concat(n);function o(){for(var d=arguments.length,j=new Array(d),E=0;E<d;E++)j[E]=arguments[E];return e=[].concat(Object(c.a)(e),j),o}return o.toString=function(){return e.reduce(function(d,j){return Number(d)+Number(j)})},o}var T=function(n){return n.map(function(i){return Number.isNaN(Number(i))?i:I(i,8)})}},hKUY:function(K,m,t){"use strict";var c=t("IzEo"),g=t("bx4M"),L=t("14J3"),h=t("BMrR"),B=t("jCWc"),P=t("kPKH"),r=t("nKUr"),I=t.n(r),b=t("VTBJ"),T=t("q1tI"),s=t.n(T),n=t("wd/R"),i=t.n(n),e=t("06Lf"),o=t("5nFI"),d=t("nMtQ"),j=t.n(d),E=function(u,O){switch(u){case"column":return Object(r.jsx)(e.b,Object(b.a)({},O));case"area":return Object(r.jsx)(e.a,Object(b.a)({},O));case"pie":return Object(r.jsx)(e.d,Object(b.a)({},O));default:return Object(r.jsx)(e.c,Object(b.a)({},O))}},p=function(u){var O=u.title,f=O===void 0?"":O,D=u.updateTime,A=u.data,C=A===void 0?[]:A,_=u.chartConfig,x=_===void 0?[]:_,y=u.chartType,N=y===void 0?[]:y,R=u.chartTitle,z=R===void 0?[]:R;return Object(r.jsxs)(g.a,{title:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:f}),D?Object(r.jsx)("span",{className:j.a.updateTime,children:i()(D).format("YYYY-MM-DD HH:mm:ss")}):null]}),children:[Object(r.jsx)(h.a,{style:{justifyContent:"space-between"},gutter:[16,16],children:C.map(function(v){return Object(r.jsx)(P.a,{sm:Math.floor(24/C.length),children:Object(r.jsx)(o.a,{title:v.title,value:v.value,text:v.text,percent:v.percent,precision:v.precision,isNormal:v.isNormal,suffix:v.suffix})},v.title)})}),Object(r.jsx)(h.a,{gutter:[16,16],children:x.length>0?x.map(function(v,U){return Object(r.jsxs)(P.a,{sm:24/x.length,children:[Object(r.jsx)("h3",{children:z[U]}),Object(r.jsx)("div",{style:{height:"250px"},children:E(N[U],v)})]},U)}):null})]})};m.a=p},nMtQ:function(K,m,t){K.exports={updateTime:"updateTime___3zyv9"}},pRh7:function(K,m,t){"use strict";t.r(m);var c=t("IzEo"),g=t("bx4M"),L=t("g9YV"),h=t("wCAj"),B=t("14J3"),P=t("BMrR"),r=t("nKUr"),I=t.n(r),b=t("jCWc"),T=t("kPKH"),s=t("KQm4"),n=t("q1tI"),i=t.n(n),e=t("tMyG"),o=t("hKUY"),d=t("9kvl"),j=t("7AqN"),E=t("c+yx"),p=function(){var u=Object(d.e)(),O=Object(j.l)(),f=O.code,D=O.manager;Object(n.useEffect)(function(){u({type:"operation/getUserTable",payload:{code:f,manager:D}}),u({type:"operation/getUserUnrealizedDividend",payload:{code:f,manager:D}})},[u,f,D]);var A=Object(d.h)(function(l){var a=l.operation.userTable[f]||{},M=l.operation.userUnrealizedDividend[f]||{};return{userTable:a,userUnrealizedDividend:M}}),C=A.userTable,_=C===void 0?{}:C,x=A.userUnrealizedDividend,y=x===void 0?{}:x,N=Object.keys(y).reduce(function(l,a){var M=y[a].map(function(F){return{name:a,time:F[0]*1e3,value:F[1]}});return[].concat(Object(s.a)(l),Object(s.a)(M))},[]),R=Object.keys(_).map(function(l){return{type:l,value:Object(E.a)(_[l][0],2)}}),z={data:N,height:300,isStack:!0,xField:"time",yField:"value",seriesField:"name",xAxis:{type:"time",tickCount:5,mask:"YY-MM-DD"}},v=Object.keys(_).map(function(l){return{key:l,total:_[l][0],unrealizedPnl:_[l][1],unrealizedAllocation:_[l][2],real:_[l][3]}}),U=v.reduce(function(l,a){return{key:"all",total:l.total+a.total,unrealizedPnl:l.unrealizedPnl+a.unrealizedPnl,unrealizedAllocation:l.unrealizedAllocation+a.unrealizedAllocation,real:l.real+a.real}},{key:"all",total:0,unrealizedPnl:0,unrealizedAllocation:0,real:0}),S=[{title:"\u5F85\u5206\u914D\u5229\u6DA6",value:U.unrealizedAllocation}],$=[{title:"\u603B\u5E02\u503C",value:U.total}],Y=[{title:"\u7528\u6237",dataIndex:"key",render:function(a){return Object(r.jsx)("a",{href:"/#/".concat(D,"/").concat(f,"/account/").concat(a),children:a})}},{title:"\u603B\u5E02\u503C",dataIndex:"total",render:function(a){return a.toFixed(2)},sorter:function(a,M){return a.total-M.total}},{title:"\u672A\u5B9E\u73B0\u76C8\u4E8F",dataIndex:"unrealizedPnl",render:function(a){return a.toFixed(2)},sorter:function(a,M){return a.unrealizedPnl-M.unrealizedPnl}},{title:"\u672A\u5206\u914D\u6536\u76CA",dataIndex:"unrealizedAllocation",render:function(a){return a.toFixed(2)},sorter:function(a,M){return a.unrealizedAllocation-M.unrealizedAllocation}},{title:"\u5B9E\u9645\u5E02\u503C",dataIndex:"real",render:function(a){return a.toFixed(2)},sorter:function(a,M){return a.real-M.real}}],H={appendPadding:10,data:R,angleField:"value",colorField:"type",radius:.75,label:{type:"spider",labelHeight:28,content:`{name}
{percentage}`},interactions:[{type:"element-selected"},{type:"element-active"}]};return Object(r.jsxs)(e.a,{children:[Object(r.jsxs)(P.a,{gutter:[16,16],children:[Object(r.jsx)(T.a,{span:12,children:Object(r.jsx)(o.a,{title:"\u5E02\u503C\u5206\u5E03",updateTime:Date.now(),data:$,chartConfig:[H],chartType:["pie"]})}),Object(r.jsx)(T.a,{span:12,children:Object(r.jsx)(o.a,{title:"\u5229\u6DA6\u6982\u51B5",data:S,chartConfig:[z],chartType:["column"]})})]}),Object(r.jsx)(P.a,{gutter:[16,16],children:Object(r.jsx)(T.a,{xs:24,children:Object(r.jsx)(g.a,{title:"\u6536\u76CA\u660E\u7EC6",children:Object(r.jsx)(h.a,{columns:Y,dataSource:[].concat(Object(s.a)(v),[U]),pagination:!1})})})})]})};m.default=p}}]);
