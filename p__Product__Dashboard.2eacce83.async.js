(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1DS8":function(J,N,e){J.exports={updateTime:"updateTime___2Fbuk"}},"5nFI":function(J,N,e){"use strict";var t=e("nKUr"),G=e("VTBJ"),R=e("aHsQ"),c=e("sGsY"),et=e("Ff2n"),I=e("q1tI"),at=e("ek7X"),h=e("0NbB"),B=function(j){var F=j.direction,M=F===void 0?"up":F;return Object(t.jsx)(t.Fragment,{children:M==="up"?Object(t.jsx)(at.a,{className:"up"}):Object(t.jsx)(h.a,{className:"down"})})},nt=B,x=function(j){var F=j.title,M=F===void 0?"title":F,z=j.value,U=z===void 0?0:z,w=j.precision,k=w===void 0?0:w,T=j.percent,Q=j.isNormal,y=Q===void 0?!0:Q,Y=j.text,q=Object(et.a)(j,["title","value","precision","percent","isNormal","text"]),C=function(){return y?"#000":U>=0?"#389e0d":"#cf1322"},_=T>=0?"up":"down";return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(c.a,Object(G.a)({title:M,value:U,precision:k,valueStyle:{color:C(),fontWeight:600},prefix:!y&&Number(U)>=0?"+":""},q)),Y?Object(t.jsxs)("div",{children:[Y," ",Object(t.jsx)(nt,{direction:_}),Object(t.jsxs)("span",{className:_,children:[Math.abs(T),"%"]})]}):null]})},W=N.a=x},PnC5:function(J,N,e){"use strict";e.r(N);var t=e("nKUr"),G=e("IzEo"),R=e("bx4M"),c=e("VTBJ"),et=e("14J3"),I=e("BMrR"),at=e("jCWc"),h=e("kPKH"),B=e("KQm4"),nt=e("Znn+"),x=e("ZTPi"),W=e("q1tI"),X=e("tMyG"),j=e("5nFI"),F=e("wd/R"),M=e.n(F),z=e("1DS8"),U=e.n(z),w=function(u){var n=u.title,o=n===void 0?"":n,l=u.updateTime,p=l===void 0?Date.now():l,v=u.statistic,g=u.annualReturn;return Object(t.jsx)(R.a,{title:Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{children:o}),Object(t.jsx)("span",{className:U.a.updateTime,children:M()(p).format("YYYY-MM-DD HH:mm:ss")})]}),children:Object(t.jsxs)(I.a,{children:[Object(t.jsx)(h.a,{sm:5,children:Object(t.jsx)(j.a,{title:"\u5386\u53F2\u5E74\u5316\u6536\u76CA\u7387",value:g*100,suffix:"%",isNormal:!1,precision:2})}),Object(t.jsx)(h.a,{sm:5,children:Object(t.jsx)(j.a,{title:"\u6210\u7ACB\u4EE5\u6765\u6536\u76CA\u7387",value:v.pnl_rate*100,suffix:"%",isNormal:!1,precision:2})}),Object(t.jsx)(h.a,{sm:5,children:Object(t.jsx)(j.a,{title:"\u6700\u65B0\u51C0\u503C",value:v.pps,suffix:"USD",precision:2})}),Object(t.jsx)(h.a,{sm:5,children:Object(t.jsx)(j.a,{title:"\u6628\u65E5\u6DA8\u8DCC",value:v.last_day_pnl_rate*100,suffix:"%",isNormal:!1,precision:2})}),Object(t.jsx)(h.a,{sm:4,children:Object(t.jsx)(j.a,{title:"\u4EF7\u503C\u672C\u4F4D",value:" ",suffix:"USD"})})]})})},k=w,T=e("06Lf"),Q=e("bP8k"),y=e("gFTJ"),Y=function(u){var n=u.metrics;return Object(t.jsxs)(y.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"},children:[Object(t.jsxs)(y.b.Item,{label:"\u65E5\u80DC\u7387",children:[n.strategy&&(n.strategy.daily_winning_ratio*100).toFixed(2)||"--"," %"]}),Object(t.jsxs)(y.b.Item,{label:"\u5E74\u5316\u6CE2\u52A8\u7387",children:[n.strategy&&(n.strategy.annual_volatility*100).toFixed(2)||"--"," %"]}),Object(t.jsx)(y.b.Item,{label:"Alpha",children:n.strategy&&n.strategy.alpha.toFixed(2)||"--"}),Object(t.jsx)(y.b.Item,{label:"Beta",children:n.strategy&&n.strategy.beta.toFixed(2)||"--"}),Object(t.jsx)(y.b.Item,{label:"\u590F\u666E\u6BD4\u7387",children:n.strategy&&n.strategy.sharpe_ratio.toFixed(2)||"--"}),Object(t.jsx)(y.b.Item,{label:"\u7D22\u63D0\u8BFA\u6BD4\u7387",children:n.strategy&&n.strategy.sortino_ratio.toFixed(2)||"--"}),Object(t.jsxs)(y.b.Item,{label:"\u6700\u5927\u56DE\u64A4\u7387",children:[n.strategy&&(n.strategy.max_drawdown*100).toFixed(2)||"--"," %"]})]})},q=Y,C=e("c+yx"),_=function(u){var n=u.statistic,o=function(p){return Object(C.d)(Object(C.e)(p*100||0,2))};return Object(t.jsxs)(y.b,{bordered:!0,column:1,size:"small",children:[Object(t.jsx)(y.b.Item,{label:"\u8FD11\u6708",children:Object(t.jsxs)("span",{className:Object(C.c)(n.last_1m_pnl_rate||0),children:[o(n.last_1m_pnl_rate)," %"]})}),Object(t.jsx)(y.b.Item,{label:"\u8FD13\u6708",children:Object(t.jsxs)("span",{className:Object(C.c)(n.last_3m_pnl_rate||0),children:[o(n.last_3m_pnl_rate)," %"]})}),Object(t.jsx)(y.b.Item,{label:"\u8FD16\u6708",children:Object(t.jsxs)("span",{className:Object(C.c)(n.last_6m_pnl_rate||0),children:[o(n.last_6m_pnl_rate)," %"]})}),Object(t.jsx)(y.b.Item,{label:"\u8FD11\u5E74",children:Object(t.jsxs)("span",{className:Object(C.c)(n.last_12m_pnl_rate||0),children:[o(n.last_12m_pnl_rate)," %"]})})]})},s=_,a=e("g9YV"),r=e("wCAj"),i=function(u){var n=u.data,o=[{title:"\u65E5\u671F",dataIndex:"date",key:"date"},{title:"\u51C0\u503C",dataIndex:"value",key:"value",render:function(v){return v}},{title:"\u65E5\u6DA8\u5E45",dataIndex:"incomeRate",key:"incomeRate",render:function(v){return Object(t.jsxs)("span",{className:Object(C.c)(v),children:[Object(C.d)(Object(C.e)(v,2)),"%"]})}}],l=function(v){if(v.length>0){var g=v.map(function(E){return{date:M()(E[0]*1e3).format(`YYYY-MM-DD 
 HH:mm:ss`),value:Object(C.e)(E[1],4),incomeRate:E[3]*100,key:E[0]}});return g}return[]};return Object(t.jsx)(r.a,{columns:o,dataSource:l(Object(B.a)(n).reverse()),pagination:{simple:!0}})},b=i,m=e("7AqN"),d=e("9kvl"),S=x.a.TabPane,P=function(){var u,n=Object(m.l)(),o=n.code,l=n.manager,p=Object(d.e)();Object(W.useEffect)(function(){p({type:"subDetails/getStatistic",payload:{code:o,manager:l}}),p({type:"subDetails/getMetrics",payload:{code:o,manager:l}}),p({type:"subDetails/getAll",payload:{code:o,manager:l}}),p({type:"price/getBtcPrice",payload:{code:o,manager:l}})},[p,o,l]);var v=Object(d.h)(function(D){var H=D.subDetails[o]||{},st=H.statistic,tt=st===void 0?{}:st,K=H.metrics,ct=K===void 0?{}:K,rt=H.all,lt=rt===void 0?[]:rt,it=D.price.btc;return{statistic:tt,metrics:ct,all:lt,btcPrice:it}}),g=v.statistic,E=v.metrics,$=v.all,f=v.btcPrice,V=$.map(function(D){return{name:"\u672C\u7B56\u7565",time:D[0]*1e3,value:D[2]*100}}),L=f.map(function(D){return{name:"\u57FA\u51C6",time:D[0]*1e3,value:(D[1]/f[0][1]-1)*100}}),Z={data:[].concat(Object(B.a)(V),Object(B.a)(L)),height:400,xField:"time",yField:"value",point:{size:3},xAxis:{type:"time",tickCount:5,mask:"YY-MM-DD"},legend:{position:"top-right"},seriesField:"name"};return Object(t.jsxs)(X.a,{children:[Object(t.jsx)(I.a,{gutter:[16,16],children:Object(t.jsx)(h.a,{span:24,children:Object(t.jsx)(k,{title:o,updateTime:(g==null?void 0:g.timestamp)*1e3,statistic:g,annualReturn:(E==null||(u=E.strategy)===null||u===void 0?void 0:u.annual_return)||0})})}),Object(t.jsxs)(I.a,{gutter:[16,16],children:[Object(t.jsx)(h.a,{sm:18,children:Object(t.jsx)(R.a,{title:"\u4E1A\u7EE9\u8D70\u52BF ",children:Object(t.jsx)(T.c,Object(c.a)({},Z))})}),Object(t.jsx)(h.a,{sm:6,children:Object(t.jsx)(R.a,{children:Object(t.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(){},children:[Object(t.jsx)(S,{tab:"\u7EDF\u8BA1\u6307\u6807",children:Object(t.jsx)(q,{metrics:E})},"1"),Object(t.jsx)(S,{tab:"\u5386\u53F2\u4E1A\u7EE9",children:Object(t.jsx)(s,{statistic:g})},"2"),Object(t.jsx)(S,{tab:"\u5386\u53F2\u51C0\u503C",children:Object(t.jsx)(b,{data:$})},"3")]})})})]})]})},A=N.default=P},bP8k:function(J,N,e){"use strict";var t=e("cIOH"),G=e.n(t),R=e("jhiw"),c=e.n(R)},gFTJ:function(J,N,e){"use strict";e.d(N,"a",function(){return T});var t=e("rePB"),G=e("ODXe"),R=e("U8pU"),c=e("q1tI"),et=e("TSYQ"),I=e.n(et),at=e("Zm9Q"),h=e("ACnJ"),B=e("uaoM"),nt=e("H84U"),x=e("wx14");function W(s){return s!=null}var X=function(a){var r=a.itemPrefixCls,i=a.component,b=a.span,m=a.className,d=a.style,S=a.labelStyle,P=a.contentStyle,A=a.bordered,O=a.label,u=a.content,n=a.colon,o=i;if(A){var l;return c.createElement(o,{className:I()((l={},Object(t.a)(l,"".concat(r,"-item-label"),W(O)),Object(t.a)(l,"".concat(r,"-item-content"),W(u)),l),m),style:d,colSpan:b},W(O)?O:u)}return c.createElement(o,{className:I()("".concat(r,"-item"),m),style:d,colSpan:b},c.createElement("div",{className:"".concat(r,"-item-container")},O&&c.createElement("span",{className:I()("".concat(r,"-item-label"),Object(t.a)({},"".concat(r,"-item-no-colon"),!n)),style:S},O),u&&c.createElement("span",{className:I()("".concat(r,"-item-content")),style:P},u)))},j=X;function F(s,a,r){var i=a.colon,b=a.prefixCls,m=a.bordered,d=r.component,S=r.type,P=r.showLabel,A=r.showContent,O=r.labelStyle,u=r.contentStyle;return s.map(function(n,o){var l=n.props,p=l.label,v=l.children,g=l.prefixCls,E=g===void 0?b:g,$=l.className,f=l.style,V=l.labelStyle,L=l.contentStyle,Z=l.span,D=Z===void 0?1:Z,H=n.key;return typeof d=="string"?c.createElement(j,{key:"".concat(S,"-").concat(H||o),className:$,style:f,labelStyle:Object(x.a)(Object(x.a)({},O),V),contentStyle:Object(x.a)(Object(x.a)({},u),L),span:D,colon:i,component:d,itemPrefixCls:E,bordered:m,label:P?p:null,content:A?v:null}):[c.createElement(j,{key:"label-".concat(H||o),className:$,style:Object(x.a)(Object(x.a)(Object(x.a)({},O),f),V),span:1,colon:i,component:d[0],itemPrefixCls:E,bordered:m,label:p}),c.createElement(j,{key:"content-".concat(H||o),className:$,style:Object(x.a)(Object(x.a)(Object(x.a)({},u),f),L),span:D*2-1,component:d[1],itemPrefixCls:E,bordered:m,content:v})]})}var M=function(a){var r=c.useContext(T),i=a.prefixCls,b=a.vertical,m=a.row,d=a.index,S=a.bordered;return b?c.createElement(c.Fragment,null,c.createElement("tr",{key:"label-".concat(d),className:"".concat(i,"-row")},F(m,a,Object(x.a)({component:"th",type:"label",showLabel:!0},r))),c.createElement("tr",{key:"content-".concat(d),className:"".concat(i,"-row")},F(m,a,Object(x.a)({component:"td",type:"content",showContent:!0},r)))):c.createElement("tr",{key:d,className:"".concat(i,"-row")},F(m,a,Object(x.a)({component:S?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},r)))},z=M,U=function(a){var r=a.children;return r},w=U,k=e("0n0R"),T=c.createContext({}),Q={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function y(s,a){if(typeof s=="number")return s;if(Object(R.a)(s)==="object")for(var r=0;r<h.b.length;r++){var i=h.b[r];if(a[i]&&s[i]!==void 0)return s[i]||Q[i]}return 3}function Y(s,a,r){var i=s;return(a===void 0||a>r)&&(i=Object(k.a)(s,{span:r}),Object(B.a)(a===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),i}function q(s,a){var r=Object(at.a)(s).filter(function(d){return d}),i=[],b=[],m=a;return r.forEach(function(d,S){var P,A=(P=d.props)===null||P===void 0?void 0:P.span,O=A||1;if(S===r.length-1){b.push(Y(d,A,m)),i.push(b);return}O<m?(m-=O,b.push(d)):(b.push(Y(d,O,m)),i.push(b),m=a,b=[])}),i}function C(s){var a,r=s.prefixCls,i=s.title,b=s.extra,m=s.column,d=m===void 0?Q:m,S=s.colon,P=S===void 0?!0:S,A=s.bordered,O=s.layout,u=s.children,n=s.className,o=s.style,l=s.size,p=s.labelStyle,v=s.contentStyle,g=c.useContext(nt.b),E=g.getPrefixCls,$=g.direction,f=E("descriptions",r),V=c.useState({}),L=Object(G.a)(V,2),Z=L[0],D=L[1],H=y(d,Z);c.useEffect(function(){var tt=h.a.subscribe(function(K){Object(R.a)(d)==="object"&&D(K)});return function(){h.a.unsubscribe(tt)}},[]);var st=q(u,H);return c.createElement(T.Provider,{value:{labelStyle:p,contentStyle:v}},c.createElement("div",{className:I()(f,(a={},Object(t.a)(a,"".concat(f,"-").concat(l),l&&l!=="default"),Object(t.a)(a,"".concat(f,"-bordered"),!!A),Object(t.a)(a,"".concat(f,"-rtl"),$==="rtl"),a),n),style:o},(i||b)&&c.createElement("div",{className:"".concat(f,"-header")},i&&c.createElement("div",{className:"".concat(f,"-title")},i),b&&c.createElement("div",{className:"".concat(f,"-extra")},b)),c.createElement("div",{className:"".concat(f,"-view")},c.createElement("table",null,c.createElement("tbody",null,st.map(function(tt,K){return c.createElement(z,{key:K,index:K,colon:P,prefixCls:f,vertical:O==="vertical",bordered:A,row:tt})}))))))}C.Item=w;var _=N.b=C},jhiw:function(J,N,e){}}]);
