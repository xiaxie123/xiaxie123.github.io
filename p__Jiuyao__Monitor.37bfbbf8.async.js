(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5nFI":function(H,C,t){"use strict";var O=t("nKUr"),B=t("VTBJ"),f=t("aHsQ"),r=t("sGsY"),G=t("Ff2n"),h=t("q1tI"),s=t("ek7X"),A=t("0NbB"),p=function(m){var M=m.direction,x=M===void 0?"up":M;return Object(O.jsx)(O.Fragment,{children:x==="up"?Object(O.jsx)(s.a,{className:"up"}):Object(O.jsx)(A.a,{className:"down"})})},J=p,_=function(m){var M=m.title,x=M===void 0?"title":M,z=m.value,N=z===void 0?0:z,Q=m.precision,V=Q===void 0?0:Q,y=m.percent,P=m.isNormal,$=P===void 0?!0:P,o=m.text,X=Object(G.a)(m,["title","value","precision","percent","isNormal","text"]),K=function(){return $?"#000":N>=0?"#389e0d":"#cf1322"},d=y>=0?"up":"down";return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(r.a,Object(B.a)({title:x,value:N,precision:V,valueStyle:{color:K(),fontWeight:600},prefix:!$&&Number(N)>=0?"+":""},X)),o?Object(O.jsxs)("div",{children:[o," ",Object(O.jsx)(J,{direction:d}),Object(O.jsxs)("span",{className:d,children:[Math.abs(y),"%"]})]}):null]})},Y=C.a=_},a5Aw:function(H,C,t){"use strict";t.r(C);var O=t("14J3"),B=t("BMrR"),f=t("nKUr"),r=t.n(f),G=t("jCWc"),h=t("kPKH"),s=t("o0o1"),A=t.n(s),p=t("HaE+"),J=t("ODXe"),_=t("q1tI"),Y=t.n(_),L=t("tMyG"),m=t("hKUY"),M=t("ioDu"),x=t("9kvl"),z=t("c4lB"),N=t("c+yx"),Q=function(){var y=Object(x.e)(),P=Object(_.useState)([]),$=Object(J.a)(P,2),o=$[0],X=$[1];Object(_.useEffect)(function(){var v=function(){y({type:"monitor/getInfo",payload:"jiuyaoInfo"})};y({type:"backTest/getBackTest",payload:"info_91"}),v();var i=setInterval(function(){v()},3e4),j=function(){var W=Object(p.a)(A.a.mark(function F(){var S;return A.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Object(z.a)();case 2:S=R.sent,X(S);case 4:case"end":return R.stop()}},F)}));return function(){return W.apply(this,arguments)}}();return j(),function(){clearInterval(i)}},[y]);var K=Object(x.h)(function(v){var i,j=(i=v.monitor)===null||i===void 0?void 0:i.jiuyaoInfo,W=j.jiuyao,F=W===void 0?[]:W,S=v.backTest.info_91;return{jiuyao:F,info:S}}),d=K.jiuyao,a=K.info,e=a[a.length-1]||[],n=e[3]/e[2],c=function(i){return n&&o.length>0&&o[o.length-1].length>0&&o[o.length-1][i]&&o[o.length-1][i].length>0?o[o.length-1][i][6]*n:"--"},E=function(i){return o.length>0&&o[o.length-1].length>0&&o[o.length-1][i]&&o[o.length-1][i].length>0?[o[o.length-1][i][13],o[o.length-1][i][14]]:["--","--"]},l=function(i){return i==="Jiuyao"&&d.length===0},u=[{title:"\u8D44\u4EA7",value:d[6],text:"\u65E5\u540C\u6BD4",percent:0},{title:"\u4ED3\u4F4D",value:d[9],text:"\u65E5\u540C\u6BD4",percent:0},{title:"\u6760\u6746",value:Number(d[9])/Number(d[6]),text:"\u65E5\u540C\u6BD4",percent:0,precision:4}],T=[{title:"\u56DE\u6D4B\u6760\u6746",value:n,text:"\u65E5\u540C\u6BD4",percent:0,precision:4},{title:"\u56DE\u6D4B\u5E02\u503C",value:e[2],text:"\u65E5\u540C\u6BD4",percent:0},{title:"\u56DE\u6D4B\u4ED3\u4F4D",value:e[3],text:"\u65E5\u540C\u6BD4",percent:0}],g=[{name:"Jiuyao",data:[{key:"\u5E94\u6709\u4ED3\u4F4D",value:Object(N.b)(c(1),8)},{key:"\u603B\u4ED3\u4F4D",value:d[9]},{key:"\u6700\u5927\u4ED3\u4F4D",value:"\u7A7A\uFF1A ".concat(E(1)[0]," \u591A\uFF1A").concat(E(1)[1])},{key:"\u7F8E\u5143\u4EF7\u503C",value:d[6]},{key:"\u5B9E\u9645\u6760\u6746",value:d[0]},{key:"\u94B1\u5305\u4F59\u989D(btc)",value:d[1]},{key:"\u94B1\u5305\u4F59\u989D(usd)",value:d[2]},{key:"\u8D26\u6237\u672A\u5B9E\u73B0\u76C8\u4E8F",value:d[3]},{key:"\u4FDD\u8BC1\u91D1\u4F59\u989D",value:d[4]},{key:"\u53EF\u7528\u4F59\u989D",value:d[5]},{key:"\u4EA4\u6613\u5BF9",value:d[7]},{key:"\u6760\u6746",value:d[8]},{key:"\u4ED3\u4F4D",value:d[9]},{key:"\u5408\u7EA6\u9762\u503C",value:d[10]},{key:"\u6301\u4ED3\u5747\u4EF7",value:d[11]},{key:"\u4ED3\u4F4D\u672A\u5B9E\u73B0\u76C8\u4E8F",value:d[12]}]}],U=a.map(function(v){return{name:"\u56DE\u6D4B\u4ED3\u4F4D",time:v[1]*1e3,value:v[3]}}),D=o.map(function(v){return{name:"\u7F8E\u5143\u4EF7\u503C",time:v[0][0],value:v[0][1]}}),I=function(i){return{data:i,height:300,xField:"time",yField:"value",xAxis:{type:"time",tickCount:5,mask:"YY-MM-DD"},meta:{value:{nice:!0}},legend:{position:"top-right"},seriesField:"name"}};return Object(f.jsxs)(L.a,{children:[Object(f.jsxs)(B.a,{gutter:[16,16],children:[Object(f.jsx)(h.a,{md:12,xs:24,children:Object(f.jsx)(m.a,{title:"\u5B9E\u76D8",updateTime:e[1]*1e3,data:u,chartConfig:[I(D)],chartType:["line"]})}),Object(f.jsx)(h.a,{md:12,xs:24,children:Object(f.jsx)(m.a,{title:"\u56DE\u6D4B",updateTime:e[1]*1e3,data:T,chartConfig:[I(U)],chartType:["column"]})})]}),Object(f.jsx)(B.a,{gutter:[16,16],children:g.map(function(v){return Object(f.jsx)(h.a,{sm:24/g.length,children:Object(f.jsx)(M.a,{data:v,isLoading:l(v.name)})},v.name)})})]})};C.default=Q},bP8k:function(H,C,t){"use strict";var O=t("cIOH"),B=t.n(O),f=t("jhiw"),r=t.n(f)},gFTJ:function(H,C,t){"use strict";t.d(C,"a",function(){return y});var O=t("rePB"),B=t("ODXe"),f=t("U8pU"),r=t("q1tI"),G=t("TSYQ"),h=t.n(G),s=t("Zm9Q"),A=t("ACnJ"),p=t("uaoM"),J=t("H84U"),_=t("wx14");function Y(a){return a!=null}var L=function(e){var n=e.itemPrefixCls,c=e.component,E=e.span,l=e.className,u=e.style,T=e.labelStyle,g=e.contentStyle,U=e.bordered,D=e.label,I=e.content,v=e.colon,i=c;if(U){var j;return r.createElement(i,{className:h()((j={},Object(O.a)(j,"".concat(n,"-item-label"),Y(D)),Object(O.a)(j,"".concat(n,"-item-content"),Y(I)),j),l),style:u,colSpan:E},Y(D)?D:I)}return r.createElement(i,{className:h()("".concat(n,"-item"),l),style:u,colSpan:E},r.createElement("div",{className:"".concat(n,"-item-container")},D&&r.createElement("span",{className:h()("".concat(n,"-item-label"),Object(O.a)({},"".concat(n,"-item-no-colon"),!v)),style:T},D),I&&r.createElement("span",{className:h()("".concat(n,"-item-content")),style:g},I)))},m=L;function M(a,e,n){var c=e.colon,E=e.prefixCls,l=e.bordered,u=n.component,T=n.type,g=n.showLabel,U=n.showContent,D=n.labelStyle,I=n.contentStyle;return a.map(function(v,i){var j=v.props,W=j.label,F=j.children,S=j.prefixCls,Z=S===void 0?E:S,R=j.className,b=j.style,q=j.labelStyle,w=j.contentStyle,tt=j.span,et=tt===void 0?1:tt,k=v.key;return typeof u=="string"?r.createElement(m,{key:"".concat(T,"-").concat(k||i),className:R,style:b,labelStyle:Object(_.a)(Object(_.a)({},D),q),contentStyle:Object(_.a)(Object(_.a)({},I),w),span:et,colon:c,component:u,itemPrefixCls:Z,bordered:l,label:g?W:null,content:U?F:null}):[r.createElement(m,{key:"label-".concat(k||i),className:R,style:Object(_.a)(Object(_.a)(Object(_.a)({},D),b),q),span:1,colon:c,component:u[0],itemPrefixCls:Z,bordered:l,label:W}),r.createElement(m,{key:"content-".concat(k||i),className:R,style:Object(_.a)(Object(_.a)(Object(_.a)({},I),b),w),span:et*2-1,component:u[1],itemPrefixCls:Z,bordered:l,content:F})]})}var x=function(e){var n=r.useContext(y),c=e.prefixCls,E=e.vertical,l=e.row,u=e.index,T=e.bordered;return E?r.createElement(r.Fragment,null,r.createElement("tr",{key:"label-".concat(u),className:"".concat(c,"-row")},M(l,e,Object(_.a)({component:"th",type:"label",showLabel:!0},n))),r.createElement("tr",{key:"content-".concat(u),className:"".concat(c,"-row")},M(l,e,Object(_.a)({component:"td",type:"content",showContent:!0},n)))):r.createElement("tr",{key:u,className:"".concat(c,"-row")},M(l,e,Object(_.a)({component:T?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},z=x,N=function(e){var n=e.children;return n},Q=N,V=t("0n0R"),y=r.createContext({}),P={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function $(a,e){if(typeof a=="number")return a;if(Object(f.a)(a)==="object")for(var n=0;n<A.b.length;n++){var c=A.b[n];if(e[c]&&a[c]!==void 0)return a[c]||P[c]}return 3}function o(a,e,n){var c=a;return(e===void 0||e>n)&&(c=Object(V.a)(a,{span:n}),Object(p.a)(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),c}function X(a,e){var n=Object(s.a)(a).filter(function(u){return u}),c=[],E=[],l=e;return n.forEach(function(u,T){var g,U=(g=u.props)===null||g===void 0?void 0:g.span,D=U||1;if(T===n.length-1){E.push(o(u,U,l)),c.push(E);return}D<l?(l-=D,E.push(u)):(E.push(o(u,D,l)),c.push(E),l=e,E=[])}),c}function K(a){var e,n=a.prefixCls,c=a.title,E=a.extra,l=a.column,u=l===void 0?P:l,T=a.colon,g=T===void 0?!0:T,U=a.bordered,D=a.layout,I=a.children,v=a.className,i=a.style,j=a.size,W=a.labelStyle,F=a.contentStyle,S=r.useContext(J.b),Z=S.getPrefixCls,R=S.direction,b=Z("descriptions",n),q=r.useState({}),w=Object(B.a)(q,2),tt=w[0],et=w[1],k=$(u,tt);r.useEffect(function(){var nt=A.a.subscribe(function(at){Object(f.a)(u)==="object"&&et(at)});return function(){A.a.unsubscribe(nt)}},[]);var rt=X(I,k);return r.createElement(y.Provider,{value:{labelStyle:W,contentStyle:F}},r.createElement("div",{className:h()(b,(e={},Object(O.a)(e,"".concat(b,"-").concat(j),j&&j!=="default"),Object(O.a)(e,"".concat(b,"-bordered"),!!U),Object(O.a)(e,"".concat(b,"-rtl"),R==="rtl"),e),v),style:i},(c||E)&&r.createElement("div",{className:"".concat(b,"-header")},c&&r.createElement("div",{className:"".concat(b,"-title")},c),E&&r.createElement("div",{className:"".concat(b,"-extra")},E)),r.createElement("div",{className:"".concat(b,"-view")},r.createElement("table",null,r.createElement("tbody",null,rt.map(function(nt,at){return r.createElement(z,{key:at,index:at,colon:g,prefixCls:b,vertical:D==="vertical",bordered:U,row:nt})}))))))}K.Item=Q;var d=C.b=K},hKUY:function(H,C,t){"use strict";var O=t("IzEo"),B=t("bx4M"),f=t("14J3"),r=t("BMrR"),G=t("jCWc"),h=t("kPKH"),s=t("nKUr"),A=t.n(s),p=t("VTBJ"),J=t("q1tI"),_=t.n(J),Y=t("wd/R"),L=t.n(Y),m=t("06Lf"),M=t("5nFI"),x=t("nMtQ"),z=t.n(x),N=function(y,P){switch(y){case"column":return Object(s.jsx)(m.b,Object(p.a)({},P));case"area":return Object(s.jsx)(m.a,Object(p.a)({},P));case"pie":return Object(s.jsx)(m.d,Object(p.a)({},P));default:return Object(s.jsx)(m.c,Object(p.a)({},P))}},Q=function(y){var P=y.title,$=P===void 0?"":P,o=y.updateTime,X=y.data,K=X===void 0?[]:X,d=y.chartConfig,a=d===void 0?[]:d,e=y.chartType,n=e===void 0?[]:e,c=y.chartTitle,E=c===void 0?[]:c;return Object(s.jsxs)(B.a,{title:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{children:$}),o?Object(s.jsx)("span",{className:z.a.updateTime,children:L()(o).format("YYYY-MM-DD HH:mm:ss")}):null]}),children:[Object(s.jsx)(r.a,{gutter:[16,16],children:K.map(function(l){return Object(s.jsx)(h.a,{sm:Math.floor(24/K.length),children:Object(s.jsx)(M.a,{title:l.title,value:l.value,text:l.text,percent:l.percent,precision:l.precision,isNormal:l.isNormal,suffix:l.suffix})},l.title)})}),Object(s.jsx)(r.a,{gutter:[16,16],children:a.map(function(l,u){return l&&l.data.length>0&&Object(s.jsxs)(h.a,{sm:24/a.length,children:[Object(s.jsx)("h3",{children:E[u]}),Object(s.jsx)("div",{style:{height:"250px"},children:N(n[u],l)})]},l.data.name)})})]})};C.a=Q},ioDu:function(H,C,t){"use strict";var O=t("IzEo"),B=t("bx4M"),f=t("bP8k"),r=t("gFTJ"),G=t("cWXX"),h=t("/ezw"),s=t("nKUr"),A=t.n(s),p=t("q1tI"),J=t.n(p),_=function(L){var m=L.data,M=L.isLoading;return Object(s.jsx)(B.a,{title:m.name,children:M?Object(s.jsx)(h.a,{active:!0}):Object(s.jsx)(r.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"},children:m.data.map(function(x){return Object(s.jsx)(r.b.Item,{label:x.key,children:x.value},x.key)})})})};C.a=_},jhiw:function(H,C,t){},nMtQ:function(H,C,t){H.exports={updateTime:"updateTime___3zyv9"}}}]);
