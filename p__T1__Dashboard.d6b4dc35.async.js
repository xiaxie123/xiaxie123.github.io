(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0ARu":function(g,v,t){"use strict";var e=t("nKUr"),P=t.n(e),u=t("bP8k"),a=t("gFTJ"),h=t("q1tI"),j=t.n(h),r=function(C){var i=C.metrics;return Object(e.jsxs)(a.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"},children:[Object(e.jsxs)(a.b.Item,{label:"\u65E5\u80DC\u7387",children:[i.strategy&&(i.strategy.daily_winning_ratio*100).toFixed(2)||"--"," %"]}),Object(e.jsxs)(a.b.Item,{label:"\u5E74\u5316\u6CE2\u52A8\u7387",children:[i.strategy&&(i.strategy.annual_volatility*100).toFixed(2)||"--"," %"]}),Object(e.jsx)(a.b.Item,{label:"Alpha",children:i.strategy&&i.strategy.alpha.toFixed(2)||"--"}),Object(e.jsx)(a.b.Item,{label:"Beta",children:i.strategy&&i.strategy.beta.toFixed(2)||"--"}),Object(e.jsx)(a.b.Item,{label:"\u590F\u666E\u6BD4\u7387",children:i.strategy&&i.strategy.sharpe_ratio.toFixed(2)||"--"}),Object(e.jsx)(a.b.Item,{label:"\u7D22\u63D0\u8BFA\u6BD4\u7387",children:i.strategy&&i.strategy.sortino_ratio.toFixed(2)||"--"}),Object(e.jsxs)(a.b.Item,{label:"\u6700\u5927\u56DE\u64A4\u7387",children:[i.strategy&&(i.strategy.max_drawdown*100).toFixed(2)||"--"," %"]})]})};v.a=r},"1DS8":function(g,v,t){g.exports={updateTime:"updateTime___2Fbuk"}},"5ILf":function(g,v,t){"use strict";var e=t("g9YV"),P=t("wCAj"),u=t("nKUr"),a=t.n(u),h=t("KQm4"),j=t("q1tI"),r=t.n(j),f=t("wd/R"),C=t.n(f),i=t("c+yx"),c=function(p){var m=p.data,x=[{title:"\u65E5\u671F",dataIndex:"date",key:"date"},{title:"\u51C0\u503C",dataIndex:"value",key:"value",render:function(O){return O}},{title:"\u65E5\u6DA8\u5E45",dataIndex:"incomeRate",key:"incomeRate",render:function(O){return Object(u.jsxs)("span",{className:Object(i.c)(O),children:[Object(i.d)(Object(i.e)(O,2)),"%"]})}}],T=function(O){if(O.length>0){var B=O.map(function(A){return{date:C()(A[0]*1e3).format(`YYYY-MM-DD 
 HH:mm:ss`),value:Object(i.e)(A[1],4),incomeRate:A[3]*100,key:A[0]}});return B}return[]};return Object(u.jsx)(P.a,{columns:x,dataSource:T(Object(h.a)(m).reverse()),pagination:{simple:!0}})};v.a=c},"5nFI":function(g,v,t){"use strict";var e=t("nKUr"),P=t("VTBJ"),u=t("aHsQ"),a=t("sGsY"),h=t("Ff2n"),j=t("q1tI"),r=t("ek7X"),f=t("0NbB"),C=function(m){var x=m.direction,T=x===void 0?"up":x;return Object(e.jsx)(e.Fragment,{children:T==="up"?Object(e.jsx)(r.a,{className:"up"}):Object(e.jsx)(f.a,{className:"down"})})},i=C,c=function(m){var x=m.title,T=x===void 0?"title":x,S=m.value,O=S===void 0?0:S,B=m.precision,A=B===void 0?0:B,R=m.percent,U=m.isNormal,F=U===void 0?!0:U,$=m.text,N=Object(h.a)(m,["title","value","precision","percent","isNormal","text"]),H=function(){return F?"#000":O>=0?"#389e0d":"#cf1322"},J=R>=0?"up":"down";return Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(a.a,Object(P.a)({title:T,value:O,precision:A,valueStyle:{color:H(),fontWeight:600},prefix:!F&&Number(O)>=0?"+":""},N)),$?Object(e.jsxs)("div",{children:[$," ",Object(e.jsx)(i,{direction:J}),Object(e.jsxs)("span",{className:J,children:[Math.abs(R),"%"]})]}):null]})},M=v.a=c},Wn5C:function(g,v,t){"use strict";t.r(v);var e=t("nKUr"),P=t.n(e),u=t("IzEo"),a=t("bx4M"),h=t("VTBJ"),j=t("14J3"),r=t("BMrR"),f=t("jCWc"),C=t("kPKH"),i=t("KQm4"),c=t("Znn+"),M=t("ZTPi"),p=t("q1tI"),m=t.n(p),x=t("tMyG"),T=t("c5MY"),S=t("06Lf"),O=t("0ARu"),B=t("pS5p"),A=t("5ILf"),R=t("9kvl"),U=M.a.TabPane,F=function(){var N=Object(R.e)();Object(p.useEffect)(function(){N({type:"subDetails/getStatistic",payload:"t1"}),N({type:"subDetails/getMetrics",payload:"t1"}),N({type:"subDetails/getAll",payload:"t1"}),N({type:"price/getBtcPrice",payload:"t1"})},[N]);var H=Object(R.h)(function(o){var y=o.subDetails.t1,K=y.statistic,L=y.metrics,b=y.all,W=o.price.btc;return{statistic:K,metrics:L,all:b,btcPrice:W}}),J=H.statistic,s=H.metrics,n=H.all,l=H.btcPrice,d=n.map(function(o){return{name:"\u672C\u7B56\u7565",time:o[0]*1e3,value:o[2]*100}}),E=l.map(function(o){return{name:"\u57FA\u51C6",time:o[0]*1e3,value:(o[1]/l[0][1]-1)*100}}),_={data:[].concat(Object(i.a)(d),Object(i.a)(E)),height:400,xField:"time",yField:"value",point:{size:3},xAxis:{type:"time",tickCount:5,mask:"YY-MM-DD"},legend:{position:"top-right"},seriesField:"name"};return Object(e.jsxs)(x.a,{children:[Object(e.jsx)(r.a,{gutter:[16,16],children:Object(e.jsx)(C.a,{span:24,children:Object(e.jsx)(T.a,{title:"BTC \u8D8B\u52BF\u4E00\u53F7",updateTime:J.timestamp*1e3,total:0,weekPercent:2,statistic:J,annualReturn:s.strategy.annual_return})})}),Object(e.jsxs)(r.a,{gutter:[16,16],children:[Object(e.jsx)(C.a,{sm:18,children:Object(e.jsx)(a.a,{title:"\u4E1A\u7EE9\u8D70\u52BF ",children:Object(e.jsx)(S.c,Object(h.a)({},_))})}),Object(e.jsx)(C.a,{sm:6,children:Object(e.jsx)(a.a,{children:Object(e.jsxs)(M.a,{defaultActiveKey:"1",onChange:function(){},children:[Object(e.jsx)(U,{tab:"\u7EDF\u8BA1\u6307\u6807",children:Object(e.jsx)(O.a,{metrics:s})},"1"),Object(e.jsx)(U,{tab:"\u5386\u53F2\u4E1A\u7EE9",children:Object(e.jsx)(B.a,{statistic:J})},"2"),Object(e.jsx)(U,{tab:"\u5386\u53F2\u51C0\u503C",children:Object(e.jsx)(A.a,{data:n})},"3")]})})})]})]})};v.default=F},bP8k:function(g,v,t){"use strict";var e=t("cIOH"),P=t.n(e),u=t("jhiw"),a=t.n(u)},c5MY:function(g,v,t){"use strict";var e=t("IzEo"),P=t("bx4M"),u=t("14J3"),a=t("BMrR"),h=t("jCWc"),j=t("kPKH"),r=t("nKUr"),f=t.n(r),C=t("q1tI"),i=t.n(C),c=t("5nFI"),M=t("wd/R"),p=t.n(M),m=t("1DS8"),x=t.n(m),T=function(O){var B=O.title,A=B===void 0?"":B,R=O.updateTime,U=R===void 0?Date.now():R,F=O.statistic,$=O.annualReturn;return Object(r.jsx)(P.a,{title:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:A}),Object(r.jsx)("span",{className:x.a.updateTime,children:p()(U).format("YYYY-MM-DD HH:mm:ss")})]}),children:Object(r.jsxs)(a.a,{children:[Object(r.jsx)(j.a,{sm:5,children:Object(r.jsx)(c.a,{title:"\u5386\u53F2\u5E74\u5316\u6536\u76CA\u7387",value:$*100,suffix:"%",isNormal:!1,precision:2})}),Object(r.jsx)(j.a,{sm:5,children:Object(r.jsx)(c.a,{title:"\u6210\u7ACB\u4EE5\u6765\u6536\u76CA\u7387",value:F.pnl_rate*100,suffix:"%",isNormal:!1,precision:2})}),Object(r.jsx)(j.a,{sm:5,children:Object(r.jsx)(c.a,{title:"\u6700\u65B0\u51C0\u503C",value:F.pps,suffix:"USD",precision:2})}),Object(r.jsx)(j.a,{sm:5,children:Object(r.jsx)(c.a,{title:"\u6628\u65E5\u6DA8\u8DCC",value:F.last_day_pnl_rate*100,suffix:"%",isNormal:!1,precision:2})}),Object(r.jsx)(j.a,{sm:4,children:Object(r.jsx)(c.a,{title:"\u4EF7\u503C\u672C\u4F4D",value:" ",suffix:"USD"})})]})})};v.a=T},gFTJ:function(g,v,t){"use strict";t.d(v,"a",function(){return R});var e=t("rePB"),P=t("ODXe"),u=t("U8pU"),a=t("q1tI"),h=t("TSYQ"),j=t.n(h),r=t("Zm9Q"),f=t("ACnJ"),C=t("uaoM"),i=t("H84U"),c=t("wx14");function M(s){return s!=null}var p=function(n){var l=n.itemPrefixCls,d=n.component,E=n.span,_=n.className,o=n.style,y=n.labelStyle,K=n.contentStyle,L=n.bordered,b=n.label,W=n.content,z=n.colon,Y=d;if(L){var D;return a.createElement(Y,{className:j()((D={},Object(e.a)(D,"".concat(l,"-item-label"),M(b)),Object(e.a)(D,"".concat(l,"-item-content"),M(W)),D),_),style:o,colSpan:E},M(b)?b:W)}return a.createElement(Y,{className:j()("".concat(l,"-item"),_),style:o,colSpan:E},a.createElement("div",{className:"".concat(l,"-item-container")},b&&a.createElement("span",{className:j()("".concat(l,"-item-label"),Object(e.a)({},"".concat(l,"-item-no-colon"),!z)),style:y},b),W&&a.createElement("span",{className:j()("".concat(l,"-item-content")),style:K},W)))},m=p;function x(s,n,l){var d=n.colon,E=n.prefixCls,_=n.bordered,o=l.component,y=l.type,K=l.showLabel,L=l.showContent,b=l.labelStyle,W=l.contentStyle;return s.map(function(z,Y){var D=z.props,w=D.label,k=D.children,Q=D.prefixCls,V=Q===void 0?E:Q,Z=D.className,I=D.style,q=D.labelStyle,G=D.contentStyle,tt=D.span,et=tt===void 0?1:tt,X=z.key;return typeof o=="string"?a.createElement(m,{key:"".concat(y,"-").concat(X||Y),className:Z,style:I,labelStyle:Object(c.a)(Object(c.a)({},b),q),contentStyle:Object(c.a)(Object(c.a)({},W),G),span:et,colon:d,component:o,itemPrefixCls:V,bordered:_,label:K?w:null,content:L?k:null}):[a.createElement(m,{key:"label-".concat(X||Y),className:Z,style:Object(c.a)(Object(c.a)(Object(c.a)({},b),I),q),span:1,colon:d,component:o[0],itemPrefixCls:V,bordered:_,label:w}),a.createElement(m,{key:"content-".concat(X||Y),className:Z,style:Object(c.a)(Object(c.a)(Object(c.a)({},W),I),G),span:et*2-1,component:o[1],itemPrefixCls:V,bordered:_,content:k})]})}var T=function(n){var l=a.useContext(R),d=n.prefixCls,E=n.vertical,_=n.row,o=n.index,y=n.bordered;return E?a.createElement(a.Fragment,null,a.createElement("tr",{key:"label-".concat(o),className:"".concat(d,"-row")},x(_,n,Object(c.a)({component:"th",type:"label",showLabel:!0},l))),a.createElement("tr",{key:"content-".concat(o),className:"".concat(d,"-row")},x(_,n,Object(c.a)({component:"td",type:"content",showContent:!0},l)))):a.createElement("tr",{key:o,className:"".concat(d,"-row")},x(_,n,Object(c.a)({component:y?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},l)))},S=T,O=function(n){var l=n.children;return l},B=O,A=t("0n0R"),R=a.createContext({}),U={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function F(s,n){if(typeof s=="number")return s;if(Object(u.a)(s)==="object")for(var l=0;l<f.b.length;l++){var d=f.b[l];if(n[d]&&s[d]!==void 0)return s[d]||U[d]}return 3}function $(s,n,l){var d=s;return(n===void 0||n>l)&&(d=Object(A.a)(s,{span:l}),Object(C.a)(n===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),d}function N(s,n){var l=Object(r.a)(s).filter(function(o){return o}),d=[],E=[],_=n;return l.forEach(function(o,y){var K,L=(K=o.props)===null||K===void 0?void 0:K.span,b=L||1;if(y===l.length-1){E.push($(o,L,_)),d.push(E);return}b<_?(_-=b,E.push(o)):(E.push($(o,b,_)),d.push(E),_=n,E=[])}),d}function H(s){var n,l=s.prefixCls,d=s.title,E=s.extra,_=s.column,o=_===void 0?U:_,y=s.colon,K=y===void 0?!0:y,L=s.bordered,b=s.layout,W=s.children,z=s.className,Y=s.style,D=s.size,w=s.labelStyle,k=s.contentStyle,Q=a.useContext(i.b),V=Q.getPrefixCls,Z=Q.direction,I=V("descriptions",l),q=a.useState({}),G=Object(P.a)(q,2),tt=G[0],et=G[1],X=F(o,tt);a.useEffect(function(){var nt=f.a.subscribe(function(at){Object(u.a)(o)==="object"&&et(at)});return function(){f.a.unsubscribe(nt)}},[]);var st=N(W,X);return a.createElement(R.Provider,{value:{labelStyle:w,contentStyle:k}},a.createElement("div",{className:j()(I,(n={},Object(e.a)(n,"".concat(I,"-").concat(D),D&&D!=="default"),Object(e.a)(n,"".concat(I,"-bordered"),!!L),Object(e.a)(n,"".concat(I,"-rtl"),Z==="rtl"),n),z),style:Y},(d||E)&&a.createElement("div",{className:"".concat(I,"-header")},d&&a.createElement("div",{className:"".concat(I,"-title")},d),E&&a.createElement("div",{className:"".concat(I,"-extra")},E)),a.createElement("div",{className:"".concat(I,"-view")},a.createElement("table",null,a.createElement("tbody",null,st.map(function(nt,at){return a.createElement(S,{key:at,index:at,colon:K,prefixCls:I,vertical:b==="vertical",bordered:L,row:nt})}))))))}H.Item=B;var J=v.b=H},jhiw:function(g,v,t){},pS5p:function(g,v,t){"use strict";var e=t("bP8k"),P=t("gFTJ"),u=t("nKUr"),a=t.n(u),h=t("q1tI"),j=t.n(h),r=t("c+yx"),f=function(i){var c=i.statistic,M=function(m){return Object(r.d)(Object(r.e)(m*100||0,2))};return Object(u.jsxs)(P.b,{bordered:!0,column:1,size:"small",children:[Object(u.jsx)(P.b.Item,{label:"\u8FD11\u6708",children:Object(u.jsxs)("span",{className:Object(r.c)(c.last_1m_pnl_rate||0),children:[M(c.last_1m_pnl_rate)," %"]})}),Object(u.jsx)(P.b.Item,{label:"\u8FD13\u6708",children:Object(u.jsxs)("span",{className:Object(r.c)(c.last_3m_pnl_rate||0),children:[M(c.last_3m_pnl_rate)," %"]})}),Object(u.jsx)(P.b.Item,{label:"\u8FD16\u6708",children:Object(u.jsxs)("span",{className:Object(r.c)(c.last_6m_pnl_rate||0),children:[M(c.last_6m_pnl_rate)," %"]})}),Object(u.jsx)(P.b.Item,{label:"\u8FD11\u5E74",children:Object(u.jsxs)("span",{className:Object(r.c)(c.last_12m_pnl_rate||0),children:[M(c.last_12m_pnl_rate)," %"]})})]})};v.a=f}}]);
