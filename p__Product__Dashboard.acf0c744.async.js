(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5nFI":function(J,C,t){"use strict";var e=t("nKUr"),H=t("VTBJ"),K=t("aHsQ"),l=t("sGsY"),k=t("Ff2n"),N=t("q1tI"),b=t("ek7X"),T=t("0NbB"),U=function(r){var h=r.direction,I=h===void 0?"up":h;return Object(e.jsx)(e.Fragment,{children:I==="up"?Object(e.jsx)(b.a,{className:"up"}):Object(e.jsx)(T.a,{className:"down"})})},L=U,u=function(r){var h=r.title,I=h===void 0?"title":h,v=r.value,R=v===void 0?0:v,Q=r.precision,D=Q===void 0?0:Q,P=r.percent,S=r.isNormal,q=S===void 0?!0:S,W=r.text,Z=Object(k.a)(r,["title","value","precision","percent","isNormal","text"]),Y=function(){return q?"#000":R>=0?"#389e0d":"#cf1322"},V=P>=0?"up":"down";return Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(l.a,Object(H.a)({title:I,value:R,precision:D,valueStyle:{color:Y(),fontWeight:600},prefix:!q&&Number(R)>=0?"+":""},Z)),W?Object(e.jsxs)("div",{children:[W," ",Object(e.jsx)(L,{direction:V}),Object(e.jsxs)("span",{className:V,children:[Math.abs(P),"%"]})]}):null]})},i=C.a=u},PnC5:function(J,C,t){"use strict";t.r(C);var e=t("nKUr"),H=t("IzEo"),K=t("bx4M"),l=t("VTBJ"),k=t("14J3"),N=t("BMrR"),b=t("jCWc"),T=t("kPKH"),U=t("rePB"),L=t("KQm4"),u=t("Znn+"),i=t("ZTPi"),j=t("q1tI"),r=t("tMyG"),h=t("06Lf"),I=t("bP8k"),v=t("gFTJ"),R=function(p){var n=p.metrics;return Object(e.jsxs)(v.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"},children:[Object(e.jsxs)(v.b.Item,{label:"\u65E5\u80DC\u7387",children:[n.strategy&&(n.strategy.daily_winning_ratio*100).toFixed(2)||"--"," %"]}),Object(e.jsxs)(v.b.Item,{label:"\u5E74\u5316\u6CE2\u52A8\u7387",children:[n.strategy&&(n.strategy.annual_volatility*100).toFixed(2)||"--"," %"]}),Object(e.jsx)(v.b.Item,{label:"Alpha",children:n.strategy&&n.strategy.alpha.toFixed(2)||"--"}),Object(e.jsx)(v.b.Item,{label:"Beta",children:n.strategy&&n.strategy.beta.toFixed(2)||"--"}),Object(e.jsx)(v.b.Item,{label:"\u590F\u666E\u6BD4\u7387",children:n.strategy&&n.strategy.sharpe_ratio.toFixed(2)||"--"}),Object(e.jsx)(v.b.Item,{label:"\u7D22\u63D0\u8BFA\u6BD4\u7387",children:n.strategy&&n.strategy.sortino_ratio.toFixed(2)||"--"}),Object(e.jsxs)(v.b.Item,{label:"\u6700\u5927\u56DE\u64A4\u7387",children:[n.strategy&&(n.strategy.max_drawdown*100).toFixed(2)||"--"," %"]})]})},Q=R,D=t("c+yx"),P=function(p){var n=p.statistic,O=function(M){return Object(D.c)(Object(D.d)(M*100||0,2))};return Object(e.jsxs)(v.b,{bordered:!0,column:1,size:"small",children:[Object(e.jsx)(v.b.Item,{label:"\u8FD11\u6708",children:Object(e.jsxs)("span",{className:Object(D.b)(n.last_1m_pnl_rate||0),children:[O(n.last_1m_pnl_rate)," %"]})}),Object(e.jsx)(v.b.Item,{label:"\u8FD13\u6708",children:Object(e.jsxs)("span",{className:Object(D.b)(n.last_3m_pnl_rate||0),children:[O(n.last_3m_pnl_rate)," %"]})}),Object(e.jsx)(v.b.Item,{label:"\u8FD16\u6708",children:Object(e.jsxs)("span",{className:Object(D.b)(n.last_6m_pnl_rate||0),children:[O(n.last_6m_pnl_rate)," %"]})}),Object(e.jsx)(v.b.Item,{label:"\u8FD11\u5E74",children:Object(e.jsxs)("span",{className:Object(D.b)(n.last_12m_pnl_rate||0),children:[O(n.last_12m_pnl_rate)," %"]})})]})},S=P,q=t("g9YV"),W=t("wCAj"),Z=t("wd/R"),Y=t.n(Z),V=function(p){var n=p.data,O=[{title:"\u65E5\u671F",dataIndex:"date",key:"date"},{title:"\u51C0\u503C",dataIndex:"value",key:"value",render:function(y){return y}},{title:"\u65E5\u6DA8\u5E45",dataIndex:"incomeRate",key:"incomeRate",render:function(y){return Object(e.jsxs)("span",{className:Object(D.b)(y),children:[Object(D.c)(Object(D.d)(y,2)),"%"]})}}],E=function(y){if(y.length>0){var f=y.map(function(g){return{date:Y()(g[0]*1e3).format(`YYYY-MM-DD 
 HH:mm:ss`),value:Object(D.d)(g[1],4),incomeRate:g[3]*100,key:g[0]}});return f}return[]};return Object(e.jsx)(W.a,{columns:O,dataSource:E(Object(L.a)(n).reverse()),pagination:{simple:!0}})},s=V,a=t("7AqN"),c=t("9kvl"),d=t("hKUY"),x=i.a.TabPane,o=function(){var p,n,O=Object(a.l)(),E=O.code,M=O.manager,y=Object(c.e)();Object(j.useEffect)(function(){y({type:"subDetails/getStatistic",payload:{code:E,manager:M}}),y({type:"subDetails/getMetrics",payload:{code:E,manager:M}}),y({type:"subDetails/getAll",payload:{code:E,manager:M}}),y({type:"price/getBtcPrice",payload:{code:E,manager:M}})},[y,E,M]);var f=Object(c.h)(function(F){var $=F.subDetails[E]||{},w=$.statistic,rt=w===void 0?{}:w,at=$.metrics,nt=at===void 0?{}:at,st=$.all,lt=st===void 0?[]:st,ct=F.price.btc;return{statistic:rt,metrics:nt,all:lt,btcPrice:ct}}),g=f.statistic,z=f.metrics,G=f.all,X=f.btcPrice,_=G.map(function(F){return{name:"\u672C\u7B56\u7565",time:F[0]*1e3,value:F[2]*100}}),A=X.map(function(F){return{name:"\u57FA\u51C6",time:F[0]*1e3,value:(F[1]/X[0][1]-1)*100}}),et={data:[].concat(Object(L.a)(_),Object(L.a)(A)),height:400,xField:"time",yField:"value",point:{size:3},animation:!1,meta:{value:{formatter:function($){return Object(D.a)($,2)},nice:!0,min:void 0}},xAxis:{type:"time",tickCount:5,mask:`YY-MM-DD 
 HH:mm`},legend:{position:"top-right"},seriesField:"name"},tt=[{title:"\u5386\u53F2\u5E74\u5316\u6536\u76CA\u7387",value:((z==null||(p=z.strategy)===null||p===void 0?void 0:p.annual_return)||0)*100,suffix:"%",isNormal:!1,precision:2},{title:"\u6210\u7ACB\u4EE5\u6765\u6536\u76CA\u7387",value:(g.pnl_rate||0)*100,suffix:"%",isNormal:!1,precision:2},{title:"\u6700\u65B0\u51C0\u503C",value:g.pps||0,precision:2,suffix:"USD"},{title:"\u6628\u65E5\u6DA8\u8DCC",value:(g.last_day_pnl_rate||0)*100,suffix:"%",isNormal:!1,precision:2},(n={title:"\u4EF7\u503C\u672C\u4F4D",value:(g.last_day_pnl_rate||0)*100},Object(U.a)(n,"value"," "),Object(U.a)(n,"suffix","USD"),n)];return Object(e.jsxs)(r.a,{children:[Object(e.jsx)(N.a,{gutter:[16,16],children:Object(e.jsx)(T.a,{span:24,children:Object(e.jsx)(d.a,{title:E,updateTime:(g==null?void 0:g.timestamp)*1e3,data:tt})})}),Object(e.jsxs)(N.a,{gutter:[16,16],children:[Object(e.jsx)(T.a,{sm:18,children:Object(e.jsx)(K.a,{title:"\u4E1A\u7EE9\u8D70\u52BF ",children:Object(e.jsx)(h.c,Object(l.a)({},et))})}),Object(e.jsx)(T.a,{sm:6,children:Object(e.jsx)(K.a,{children:Object(e.jsxs)(i.a,{defaultActiveKey:"1",onChange:function(){},children:[Object(e.jsx)(x,{tab:"\u7EDF\u8BA1\u6307\u6807",children:Object(e.jsx)(Q,{metrics:z})},"1"),Object(e.jsx)(x,{tab:"\u5386\u53F2\u4E1A\u7EE9",children:Object(e.jsx)(S,{statistic:g})},"2"),Object(e.jsx)(x,{tab:"\u5386\u53F2\u51C0\u503C",children:Object(e.jsx)(s,{data:G})},"3")]})})})]})]})},m=C.default=o},bP8k:function(J,C,t){"use strict";var e=t("cIOH"),H=t.n(e),K=t("jhiw"),l=t.n(K)},"c+yx":function(J,C,t){"use strict";t.d(C,"b",function(){return l}),t.d(C,"c",function(){return k}),t.d(C,"d",function(){return b}),t.d(C,"a",function(){return T});var e=t("KQm4"),H=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,K=function(i){return H.test(i)},l=function(i){return Number(i)>=0?"green":Number(i)<0?"red":"grey"},k=function(i){return Number(i)>=0?"+".concat(i):i},N=function(i,j){var r=i.toString(),h=r.indexOf(".");for(h<0&&(h=r.length,r+=".");r.length<=h+j;)r+="0";return r},b=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=Math.pow(10,j);if(Number(i)>0){var h=Math.floor(Number(i)*r)/r;return N(h,j)}var I=Math.ceil(Number(i)*r)/r;return N(I,j)},T=function(i,j){var r=Math.pow(10,j||8);return Math.floor(Number(i)*r)/r};function U(){for(var u=arguments.length,i=new Array(u),j=0;j<u;j++)i[j]=arguments[j];var r=[].concat(i);function h(){for(var I=arguments.length,v=new Array(I),R=0;R<I;R++)v[R]=arguments[R];return r=[].concat(Object(e.a)(r),v),h}return h.toString=function(){return r.reduce(function(I,v){return Number(I)+Number(v)})},h}var L=function(i){return i.map(function(j){return Number.isNaN(Number(j))?j:T(j,8)})}},gFTJ:function(J,C,t){"use strict";t.d(C,"a",function(){return P});var e=t("rePB"),H=t("ODXe"),K=t("U8pU"),l=t("q1tI"),k=t("TSYQ"),N=t.n(k),b=t("Zm9Q"),T=t("ACnJ"),U=t("uaoM"),L=t("H84U"),u=t("wx14");function i(s){return s!=null}var j=function(a){var c=a.itemPrefixCls,d=a.component,x=a.span,o=a.className,m=a.style,B=a.labelStyle,p=a.contentStyle,n=a.bordered,O=a.label,E=a.content,M=a.colon,y=d;if(n){var f;return l.createElement(y,{className:N()((f={},Object(e.a)(f,"".concat(c,"-item-label"),i(O)),Object(e.a)(f,"".concat(c,"-item-content"),i(E)),f),o),style:m,colSpan:x},i(O)?O:E)}return l.createElement(y,{className:N()("".concat(c,"-item"),o),style:m,colSpan:x},l.createElement("div",{className:"".concat(c,"-item-container")},O&&l.createElement("span",{className:N()("".concat(c,"-item-label"),Object(e.a)({},"".concat(c,"-item-no-colon"),!M)),style:B},O),E&&l.createElement("span",{className:N()("".concat(c,"-item-content")),style:p},E)))},r=j;function h(s,a,c){var d=a.colon,x=a.prefixCls,o=a.bordered,m=c.component,B=c.type,p=c.showLabel,n=c.showContent,O=c.labelStyle,E=c.contentStyle;return s.map(function(M,y){var f=M.props,g=f.label,z=f.children,G=f.prefixCls,X=G===void 0?x:G,_=f.className,A=f.style,et=f.labelStyle,tt=f.contentStyle,F=f.span,$=F===void 0?1:F,w=M.key;return typeof m=="string"?l.createElement(r,{key:"".concat(B,"-").concat(w||y),className:_,style:A,labelStyle:Object(u.a)(Object(u.a)({},O),et),contentStyle:Object(u.a)(Object(u.a)({},E),tt),span:$,colon:d,component:m,itemPrefixCls:X,bordered:o,label:p?g:null,content:n?z:null}):[l.createElement(r,{key:"label-".concat(w||y),className:_,style:Object(u.a)(Object(u.a)(Object(u.a)({},O),A),et),span:1,colon:d,component:m[0],itemPrefixCls:X,bordered:o,label:g}),l.createElement(r,{key:"content-".concat(w||y),className:_,style:Object(u.a)(Object(u.a)(Object(u.a)({},E),A),tt),span:$*2-1,component:m[1],itemPrefixCls:X,bordered:o,content:z})]})}var I=function(a){var c=l.useContext(P),d=a.prefixCls,x=a.vertical,o=a.row,m=a.index,B=a.bordered;return x?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(m),className:"".concat(d,"-row")},h(o,a,Object(u.a)({component:"th",type:"label",showLabel:!0},c))),l.createElement("tr",{key:"content-".concat(m),className:"".concat(d,"-row")},h(o,a,Object(u.a)({component:"td",type:"content",showContent:!0},c)))):l.createElement("tr",{key:m,className:"".concat(d,"-row")},h(o,a,Object(u.a)({component:B?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},c)))},v=I,R=function(a){var c=a.children;return c},Q=R,D=t("0n0R"),P=l.createContext({}),S={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function q(s,a){if(typeof s=="number")return s;if(Object(K.a)(s)==="object")for(var c=0;c<T.b.length;c++){var d=T.b[c];if(a[d]&&s[d]!==void 0)return s[d]||S[d]}return 3}function W(s,a,c){var d=s;return(a===void 0||a>c)&&(d=Object(D.a)(s,{span:c}),Object(U.a)(a===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),d}function Z(s,a){var c=Object(b.a)(s).filter(function(m){return m}),d=[],x=[],o=a;return c.forEach(function(m,B){var p,n=(p=m.props)===null||p===void 0?void 0:p.span,O=n||1;if(B===c.length-1){x.push(W(m,n,o)),d.push(x);return}O<o?(o-=O,x.push(m)):(x.push(W(m,O,o)),d.push(x),o=a,x=[])}),d}function Y(s){var a,c=s.prefixCls,d=s.title,x=s.extra,o=s.column,m=o===void 0?S:o,B=s.colon,p=B===void 0?!0:B,n=s.bordered,O=s.layout,E=s.children,M=s.className,y=s.style,f=s.size,g=s.labelStyle,z=s.contentStyle,G=l.useContext(L.b),X=G.getPrefixCls,_=G.direction,A=X("descriptions",c),et=l.useState({}),tt=Object(H.a)(et,2),F=tt[0],$=tt[1],w=q(m,F);l.useEffect(function(){var at=T.a.subscribe(function(nt){Object(K.a)(m)==="object"&&$(nt)});return function(){T.a.unsubscribe(at)}},[]);var rt=Z(E,w);return l.createElement(P.Provider,{value:{labelStyle:g,contentStyle:z}},l.createElement("div",{className:N()(A,(a={},Object(e.a)(a,"".concat(A,"-").concat(f),f&&f!=="default"),Object(e.a)(a,"".concat(A,"-bordered"),!!n),Object(e.a)(a,"".concat(A,"-rtl"),_==="rtl"),a),M),style:y},(d||x)&&l.createElement("div",{className:"".concat(A,"-header")},d&&l.createElement("div",{className:"".concat(A,"-title")},d),x&&l.createElement("div",{className:"".concat(A,"-extra")},x)),l.createElement("div",{className:"".concat(A,"-view")},l.createElement("table",null,l.createElement("tbody",null,rt.map(function(at,nt){return l.createElement(v,{key:nt,index:nt,colon:p,prefixCls:A,vertical:O==="vertical",bordered:n,row:at})}))))))}Y.Item=Q;var V=C.b=Y},hKUY:function(J,C,t){"use strict";var e=t("IzEo"),H=t("bx4M"),K=t("14J3"),l=t("BMrR"),k=t("jCWc"),N=t("kPKH"),b=t("nKUr"),T=t.n(b),U=t("VTBJ"),L=t("q1tI"),u=t.n(L),i=t("wd/R"),j=t.n(i),r=t("06Lf"),h=t("5nFI"),I=t("nMtQ"),v=t.n(I),R=function(P,S){switch(P){case"column":return Object(b.jsx)(r.b,Object(U.a)({},S));case"area":return Object(b.jsx)(r.a,Object(U.a)({},S));case"pie":return Object(b.jsx)(r.d,Object(U.a)({},S));default:return Object(b.jsx)(r.c,Object(U.a)({},S))}},Q=function(P){var S=P.title,q=S===void 0?"":S,W=P.updateTime,Z=P.data,Y=Z===void 0?[]:Z,V=P.chartConfig,s=V===void 0?[]:V,a=P.chartType,c=a===void 0?[]:a,d=P.chartTitle,x=d===void 0?[]:d;return Object(b.jsxs)(H.a,{title:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{children:q}),W?Object(b.jsx)("span",{className:v.a.updateTime,children:j()(W).format("YYYY-MM-DD HH:mm:ss")}):null]}),children:[Object(b.jsx)(l.a,{style:{justifyContent:"space-between"},gutter:[16,16],children:Y.map(function(o){return Object(b.jsx)(N.a,{sm:Math.floor(24/Y.length),children:Object(b.jsx)(h.a,{title:o.title,value:o.value,text:o.text,percent:o.percent,precision:o.precision,isNormal:o.isNormal,suffix:o.suffix})},o.title)})}),Object(b.jsx)(l.a,{gutter:[16,16],children:s.length>0?s.map(function(o,m){return Object(b.jsxs)(N.a,{sm:24/s.length,children:[Object(b.jsx)("h3",{children:x[m]}),Object(b.jsx)("div",{style:{height:"250px"},children:R(c[m],o)})]},m)}):null})]})};C.a=Q},jhiw:function(J,C,t){},nMtQ:function(J,C,t){J.exports={updateTime:"updateTime___3zyv9"}}}]);
