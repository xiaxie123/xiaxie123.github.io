(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5nFI":function(N,D,t){"use strict";var e=t("nKUr"),B=t("VTBJ"),$=t("aHsQ"),b=t("sGsY"),y=t("Ff2n"),h=t("q1tI"),c=t("ek7X"),U=t("0NbB"),d=function(s){var O=s.direction,v=O===void 0?"up":O;return Object(e.jsx)(e.Fragment,{children:v==="up"?Object(e.jsx)(c.a,{className:"up"}):Object(e.jsx)(U.a,{className:"down"})})},a=d,l=function(s){var O=s.title,v=O===void 0?"title":O,I=s.value,x=I===void 0?0:I,o=s.precision,W=o===void 0?0:o,_=s.percent,j=s.isNormal,T=j===void 0?!0:j,p=s.text,P=Object(y.a)(s,["title","value","precision","percent","isNormal","text"]),M=function(){return T?"#000":x>=0?"#389e0d":"#cf1322"},m=_>=0?"up":"down";return Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(b.a,Object(B.a)({title:v,value:x,precision:W,valueStyle:{color:M(),fontWeight:600},prefix:!T&&Number(x)>=0?"+":""},P)),p?Object(e.jsxs)("div",{children:[p," ",Object(e.jsx)(a,{direction:m}),Object(e.jsxs)("span",{className:m,children:[Math.abs(_),"%"]})]}):null]})},i=D.a=l},SEJG:function(N,D,t){"use strict";t.r(D);var e=t("nKUr"),B=t.n(e),$=t("g9YV"),b=t("wCAj"),y=t("IzEo"),h=t("bx4M"),c=t("14J3"),U=t("BMrR"),d=t("jCWc"),a=t("kPKH"),l=t("VTBJ"),i=t("KQm4"),u=t("q1tI"),s=t.n(u),O=t("tMyG"),v=t("hKUY"),I=t("7AqN"),x=t("9kvl"),o=t("c+yx"),W=t("wd/R"),_=t.n(W),j=t("06Lf"),T=function(){var P=Object(I.l)(),M=Object(x.e)(),m=P.code,f=P.user,g=P.manager,L=Object(x.h)(function(r){var n=r.userAccount[m];if(n){var C=r.subDetails[m]||{},Y=C.all,H=Y===void 0?[]:Y,F=n.account?n.account[f]:[],tt=n.exchangeDetails?n.exchangeDetails[f]:[];return{account:F,exchangeDetails:tt,all:H}}return{account:[],exchangeDetails:[]}}),R=L.account,A=R===void 0?[]:R,E=L.exchangeDetails,S=E===void 0?[]:E,V=L.all,J=V===void 0?[]:V;Object(u.useEffect)(function(){M({type:"userAccount/getAccountByUser",payload:{code:m,user:f,manager:g}}),M({type:"userAccount/getExchangeDetails",payload:{code:m,user:f,manager:g}})},[m,f,M,g]),Object(u.useEffect)(function(){M({type:"subDetails/getAll",payload:{code:m,manager:g}})},[m,M,g]);var K=A[A.length-1]||[],z=A.map(function(r){return{date:_()(r[0]*1e3).format("YYYY-MM-DD"),marketValue:r[7],incomeValue:r[9],key:r[0]}}),Q=Object(i.a)(S).map(function(r){return Object(l.a)(Object(l.a)({},r),{},{key:"".concat(r.datetime).concat(r.amount)})}),G=[{title:"\u65E5\u671F",dataIndex:"date",key:"date"},{title:"\u5E02\u503C",dataIndex:"marketValue",key:"marketValue",render:function(n){return Number.isNaN(Number(n))?"--":Object(o.c)(n,1).toLocaleString()}},{title:"\u6536\u76CA\u989D",dataIndex:"incomeValue",key:"incomeValue",render:function(n){return Object(e.jsx)("span",{className:Object(o.a)(n),children:Object(o.b)(Object(o.c)(n,2))})}}],Z=[{title:"\u65E5\u671F",dataIndex:"datetime",key:"datetime",render:function(n){return _()(n*1e3).format("YYYY-MM-DD")}},{title:"\u91D1\u989D",dataIndex:"value",key:"value",render:function(n,C){var Y=C.price,H=C.amount,F=Number(Y)*Number(H);return Object(e.jsx)("span",{className:Object(o.a)(F),children:Number.isNaN(Number(F))?"--":Object(o.b)(Object(o.c)(F,1))})}},{title:"\u51C0\u503C",dataIndex:"price",key:"price",render:function(n){return Object(e.jsx)("span",{children:Object(o.c)(n,4)})}},{title:"\u4EFD\u989D",dataIndex:"amount",key:"amount",render:function(n){var C=Number(n);return Object(e.jsx)("span",{className:Object(o.a)(C),children:Number.isNaN(Number(C))?"--":Object(o.b)(Object(o.c)(C,1))})}}],X=[{title:"\u6301\u4ED3\u5E02\u503C\uFF08USD\uFF09",value:K[7],precision:0},{title:"\u6301\u4ED3\u6536\u76CA\uFF08USD\uFF09",value:K[4]+K[10]||0,precision:1,isNormal:!1},{title:"\u6301\u4ED3\u6536\u76CA\u7387",value:K[8]*100||0,precision:2,isNormal:!1,suffix:"%"},{title:"\u6301\u4ED3\u4EFD\u989D",value:K[3],precision:0},{title:"\u6301\u4ED3\u6210\u672C(USD)",value:K[2],precision:4}],w=J.map(function(r){return{name:"\u4E1A\u7EE9\u8D70\u52BF",time:r[0]*1e3,value:r[2]*100}}),k={data:w,height:250,xField:"time",yField:"value",xAxis:{type:"time",tickCount:5,mask:`YY-MM-DD 
 HH:mm`},legend:{position:"top-right"},seriesField:"name",animation:!1,meta:{value:{formatter:function(n){return"".concat(Object(o.c)(n,2)," %")},nice:!0,min:void 0}}},q={data:A.map(function(r,n){return{time:A[n][0]*1e3,value:A[n][6],name:"\u7D2F\u8BA1\u76C8\u4E8F"}}),height:250,xField:"time",yField:"value",xAxis:{type:"time",tickCount:5,mask:`YY-MM-DD 
 HH:mm`},legend:{position:"top-right"},seriesField:"name",animation:!1,meta:{value:{formatter:function(n){return Object(o.c)(n,2)},nice:!0,min:void 0}}};return Object(e.jsx)(e.Fragment,{children:Object(e.jsxs)(O.a,{header:{title:"".concat(m," - ").concat(f),onBack:function(){return x.b.goBack()},breadcrumb:void 0},children:[Object(e.jsx)(U.a,{gutter:[16,16],children:Object(e.jsx)(a.a,{sm:24,children:Object(e.jsx)(v.a,{title:"".concat(m.toUpperCase()," \u7B56\u7565\u6301\u4ED3"),data:X})})}),Object(e.jsxs)(U.a,{gutter:[16,16],children:[Object(e.jsx)(a.a,{sm:12,children:Object(e.jsx)(h.a,{title:"\u7D2F\u8BA1\u76C8\u4E8F",children:Object(e.jsx)("div",{style:{height:"250px"},children:Object(e.jsx)(j.c,Object(l.a)({},q))})})}),Object(e.jsx)(a.a,{sm:12,children:Object(e.jsx)(h.a,{title:"\u4E1A\u7EE9\u8D70\u52BF",children:Object(e.jsx)("div",{style:{height:"250px"},children:Object(e.jsx)(j.c,Object(l.a)({},k))})})})]}),Object(e.jsxs)(U.a,{gutter:[16,16],children:[Object(e.jsx)(a.a,{sm:12,children:Object(e.jsx)(h.a,{title:"\u6536\u76CA\u660E\u7EC6",children:Object(e.jsx)(b.a,{columns:G,dataSource:z.reverse(),pagination:{simple:!0},size:"small"})})}),Object(e.jsx)(a.a,{sm:12,children:Object(e.jsx)(h.a,{title:"\u4EA4\u6613\u660E\u7EC6",children:Object(e.jsx)(b.a,{columns:Z,dataSource:Q.reverse(),pagination:{simple:!0},size:"small"})})})]})]})})};D.default=T},"c+yx":function(N,D,t){"use strict";t.d(D,"a",function(){return b}),t.d(D,"b",function(){return y}),t.d(D,"c",function(){return c});var e=t("KQm4"),B=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,$=function(a){return B.test(a)},b=function(a){return Number(a)>=0?"green":Number(a)<0?"red":"grey"},y=function(a){return Number(a)>=0?"+".concat(a):a},h=function(a,l){var i=a.toString(),u=i.indexOf(".");for(u<0&&(u=i.length,i+=".");i.length<=u+l;)i+="0";return i},c=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:8,i=Math.pow(10,l);if(Number(a)>0){var u=Math.floor(Number(a)*i)/i;return h(u,l)}var s=Math.ceil(Number(a)*i)/i;return h(s,l)};function U(){for(var d=arguments.length,a=new Array(d),l=0;l<d;l++)a[l]=arguments[l];var i=[].concat(a);function u(){for(var s=arguments.length,O=new Array(s),v=0;v<s;v++)O[v]=arguments[v];return i=[].concat(Object(e.a)(i),O),u}return u.toString=function(){return i.reduce(function(s,O){return Number(s)+Number(O)})},u}},hKUY:function(N,D,t){"use strict";var e=t("IzEo"),B=t("bx4M"),$=t("14J3"),b=t("BMrR"),y=t("jCWc"),h=t("kPKH"),c=t("nKUr"),U=t.n(c),d=t("VTBJ"),a=t("q1tI"),l=t.n(a),i=t("wd/R"),u=t.n(i),s=t("06Lf"),O=t("5nFI"),v=t("nMtQ"),I=t.n(v),x=function(_,j){switch(_){case"column":return Object(c.jsx)(s.b,Object(d.a)({},j));case"area":return Object(c.jsx)(s.a,Object(d.a)({},j));case"pie":return Object(c.jsx)(s.d,Object(d.a)({},j));default:return Object(c.jsx)(s.c,Object(d.a)({},j))}},o=function(_){var j=_.title,T=j===void 0?"":j,p=_.updateTime,P=_.data,M=P===void 0?[]:P,m=_.chartConfig,f=m===void 0?[]:m,g=_.chartType,L=g===void 0?[]:g,R=_.chartTitle,A=R===void 0?[]:R;return Object(c.jsxs)(B.a,{title:T?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{children:T}),p?Object(c.jsx)("span",{className:I.a.updateTime,children:u()(p).format("YYYY-MM-DD HH:mm:ss")}):null]}):null,children:[Object(c.jsx)(b.a,{style:{justifyContent:"space-between",margin:0},gutter:[16,16],children:M.map(function(E){return Object(c.jsx)(h.a,{sm:Math.floor(24/M.length),children:Object(c.jsx)(O.a,{title:E.title,value:E.value,text:E.text,percent:E.percent,precision:E.precision,isNormal:E.isNormal,suffix:E.suffix})},E.title)})}),Object(c.jsx)(b.a,{gutter:[16,16],children:f.length>0?f.map(function(E,S){return Object(c.jsxs)(h.a,{sm:24/f.length,children:[Object(c.jsx)("h3",{children:A[S]}),Object(c.jsx)("div",{style:{height:"250px"},children:x(L[S],E)})]},S)}):null})]})};D.a=o},nMtQ:function(N,D,t){N.exports={updateTime:"updateTime___3zyv9"}}}]);
