(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5nFI":function(R,m,t){"use strict";var e=t("nKUr"),W=t("VTBJ"),Y=t("aHsQ"),D=t("sGsY"),L=t("Ff2n"),x=t("q1tI"),a=t("ek7X"),A=t("0NbB"),M=function(i){var u=i.direction,P=u===void 0?"up":u;return Object(e.jsx)(e.Fragment,{children:P==="up"?Object(e.jsx)(a.a,{className:"up"}):Object(e.jsx)(A.a,{className:"down"})})},h=M,I=function(i){var u=i.title,P=u===void 0?"title":u,T=i.value,O=T===void 0?0:T,c=i.precision,p=c===void 0?0:c,l=i.percent,o=i.isNormal,B=o===void 0?!0:o,E=i.text,j=Object(L.a)(i,["title","value","precision","percent","isNormal","text"]),_=function(){return B?"#000":O>=0?"#389e0d":"#cf1322"},d=l>=0?"up":"down";return Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(D.a,Object(W.a)({title:P,value:O,precision:p,valueStyle:{color:_(),fontWeight:600},prefix:!B&&Number(O)>=0?"+":""},j)),E?Object(e.jsxs)("div",{children:[E," ",Object(e.jsx)(h,{direction:d}),Object(e.jsxs)("span",{className:d,children:[Math.abs(l),"%"]})]}):null]})},U=m.a=I},coOD:function(R,m,t){"use strict";t.r(m);var e=t("nKUr"),W=t.n(e),Y=t("IzEo"),D=t("bx4M"),L=t("g9YV"),x=t("wCAj"),a=t("14J3"),A=t("BMrR"),M=t("jCWc"),h=t("kPKH"),I=t("VTBJ"),U=t("KQm4"),f=t("q1tI"),i=t.n(f),u=t("tMyG"),P=t("hKUY"),T=t("7AqN"),O=t("9kvl"),c=t("c+yx"),p=t("wd/R"),l=t.n(p),o=function(){var E=Object(T.l)(),j=Object(O.e)(),_=E.product,d=E.user,C=Object(O.h)(function(s){var r=s.userAccount.t1.account[d],v=s.userAccount.t1.exchangeDetails[d];return{account:r,exchangeDetails:v}}),K=C.account,b=K===void 0?[]:K,y=C.exchangeDetails,N=y===void 0?[]:y,n=b[b.length-1]||[],g=b.reduce(function(s,r){return[].concat(Object(U.a)(s),[{name:"\u7528\u6237\u672A\u5B9E\u73B0\u6536\u76CA",time:r[0]*1e3,value:r[4],key:r[0]},{name:"\u7B56\u7565\u5206\u6210\u6536\u76CA",time:r[0]*1e3,value:r[10],key:r[0]}])},[]),F={data:g,height:300,xField:"time",yField:"value",point:{size:3},xAxis:{type:"time",tickCount:5,mask:"YY-MM-DD"},legend:{position:"top-right"},seriesField:"name"},X={data:g,height:300,xField:"time",yField:"value",point:{size:3},xAxis:{type:"time",tickCount:5,mask:"YY-MM-DD"},legend:{position:"top-right"},seriesField:"name"},$=b.map(function(s){return{date:l()(s[0]*1e3).format("YYYY-MM-DD"),marketValue:s[7],incomeValue:s[9],key:s[0]}}),V=Object(U.a)(N).map(function(s){return Object(I.a)(Object(I.a)({},s),{},{key:s.datetime})}),H=[{title:"\u65E5\u671F",dataIndex:"date",key:"date"},{title:"\u5E02\u503C",dataIndex:"marketValue",key:"marketValue",render:function(r){return Number.isNaN(Number(r))?"--":Object(c.e)(r,1).toLocaleString()}},{title:"\u6536\u76CA\u989D",dataIndex:"incomeValue",key:"incomeValue",render:function(r){return Object(e.jsx)("span",{className:Object(c.c)(r),children:Object(c.d)(Object(c.e)(r,2))})}}],J=[{title:"\u65E5\u671F",dataIndex:"datetime",key:"datetime"},{title:"\u91D1\u989D",dataIndex:"value",key:"value",render:function(r,v){var Q=v.price,G=v.amount,S=Number(Q)*Number(G);return Object(e.jsx)("span",{className:Object(c.c)(S),children:Number.isNaN(Number(S))?"--":Object(c.d)(Object(c.e)(S,1))})}},{title:"\u51C0\u503C",dataIndex:"price",key:"price",render:function(r){return Object(e.jsx)("span",{children:Object(c.e)(r,4)})}},{title:"\u4EFD\u989D",dataIndex:"amount",key:"amount",render:function(r){var v=Number(r);return Object(e.jsx)("span",{className:Object(c.c)(v),children:Number.isNaN(Number(v))?"--":Object(c.d)(Object(c.e)(v,1))})}}];Object(f.useEffect)(function(){j({type:"userAccount/getAccountByUser",payload:{product:_,user:d}}),j({type:"userAccount/getExchangeDetails",payload:{product:_,user:d}})},[_,d,j]);var z=[{title:"\u6301\u4ED3\u5E02\u503C\uFF08USD\uFF09",value:n[7],precision:0},{title:"\u6301\u4ED3\u6536\u76CA\uFF08USD\uFF09",value:n[4]+n[10],precision:1,isNormal:!1},{title:"\u6301\u4ED3\u6536\u76CA\u7387",value:n[8]*100,precision:2,isNormal:!1,suffix:"%"},{title:"\u6301\u4ED3\u4EFD\u989D",value:n[3],precision:0},{title:"\u6301\u4ED3\u6210\u672C(USD)",value:n[2],precision:4}];return Object(e.jsx)(e.Fragment,{children:Object(e.jsxs)(u.a,{title:"".concat(d," - ").concat(_),children:[Object(e.jsx)(A.a,{gutter:[16,16],children:Object(e.jsx)(h.a,{sm:24,children:Object(e.jsx)(P.a,{title:"".concat(_.toUpperCase()," \u7B56\u7565\u6301\u4ED3"),data:z,chartConfig:[F],chartType:["area"],chartTitle:["\u4E1A\u7EE9\u8D70\u52BF"]})})}),Object(e.jsxs)(A.a,{gutter:[16,16],children:[Object(e.jsx)(h.a,{sm:12,children:Object(e.jsx)(D.a,{title:"\u6536\u76CA\u660E\u7EC6",children:Object(e.jsx)(x.a,{columns:H,dataSource:$.reverse()})})}),Object(e.jsx)(h.a,{sm:12,children:Object(e.jsx)(D.a,{title:"\u4EA4\u6613\u660E\u7EC6",children:Object(e.jsx)(x.a,{columns:J,dataSource:V.reverse()})})})]})]})})};m.default=o},hKUY:function(R,m,t){"use strict";var e=t("IzEo"),W=t("bx4M"),Y=t("14J3"),D=t("BMrR"),L=t("jCWc"),x=t("kPKH"),a=t("nKUr"),A=t.n(a),M=t("VTBJ"),h=t("q1tI"),I=t.n(h),U=t("wd/R"),f=t.n(U),i=t("06Lf"),u=t("5nFI"),P=t("nMtQ"),T=t.n(P),O=function(l,o){switch(l){case"column":return Object(a.jsx)(i.b,Object(M.a)({},o));case"area":return Object(a.jsx)(i.a,Object(M.a)({},o));case"pie":return Object(a.jsx)(i.d,Object(M.a)({},o));default:return Object(a.jsx)(i.c,Object(M.a)({},o))}},c=function(l){var o=l.title,B=o===void 0?"":o,E=l.updateTime,j=l.data,_=j===void 0?[]:j,d=l.chartConfig,C=d===void 0?[]:d,K=l.chartType,b=K===void 0?[]:K,y=l.chartTitle,N=y===void 0?[]:y;return Object(a.jsxs)(W.a,{title:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{children:B}),E?Object(a.jsx)("span",{className:T.a.updateTime,children:f()(E).format("YYYY-MM-DD HH:mm:ss")}):null]}),children:[Object(a.jsx)(D.a,{gutter:[16,16],children:_.map(function(n){return Object(a.jsx)(x.a,{sm:Math.floor(24/_.length),children:Object(a.jsx)(u.a,{title:n.title,value:n.value,text:n.text,percent:n.percent,precision:n.precision,isNormal:n.isNormal,suffix:n.suffix})},n.title)})}),Object(a.jsx)(D.a,{gutter:[16,16],children:C.map(function(n,g){return n&&n.data.length>0&&Object(a.jsxs)(x.a,{sm:24/C.length,children:[Object(a.jsx)("h3",{children:N[g]}),Object(a.jsx)("div",{style:{height:"250px"},children:O(b[g],n)})]},n.data.name)})})]})};m.a=c},nMtQ:function(R,m,t){R.exports={updateTime:"updateTime___3zyv9"}}}]);
