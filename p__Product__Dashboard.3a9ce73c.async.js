(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5nFI":function(J,T,t){"use strict";var p=t("nKUr"),L=t("VTBJ"),Q=t("aHsQ"),l=t("sGsY"),Z=t("Ff2n"),R=t("q1tI"),b=t("ek7X"),e=t("0NbB"),W=function(n){var g=n.direction,I=g===void 0?"up":g;return Object(p.jsx)(p.Fragment,{children:I==="up"?Object(p.jsx)(b.a,{className:"up"}):Object(p.jsx)(e.a,{className:"down"})})},S=W,v=function(n){var g=n.title,I=g===void 0?"title":g,B=n.value,z=B===void 0?0:B,C=n.precision,et=C===void 0?0:C,F=n.percent,j=n.isNormal,V=j===void 0?!0:j,$=n.text,G=Object(Z.a)(n,["title","value","precision","percent","isNormal","text"]),H=function(){return V?"#000":z>=0?"#389e0d":"#cf1322"},X=F>=0?"up":"down";return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,Object(L.a)({title:I,value:z,precision:et,valueStyle:{color:H(),fontWeight:600},prefix:!V&&Number(z)>=0?"+":""},G)),$?Object(p.jsxs)("div",{children:[$," ",Object(p.jsx)(S,{direction:X}),Object(p.jsxs)("span",{className:X,children:[Math.abs(F),"%"]})]}):null]})},o=T.a=v},PnC5:function(J,T,t){"use strict";t.r(T);var p=t("g9YV"),L=t("wCAj"),Q=t("IzEo"),l=t("bx4M"),Z=t("VTBJ"),R=t("14J3"),b=t("BMrR"),e=t("nKUr"),W=t("jCWc"),S=t("kPKH"),v=t("rePB"),o=t("KQm4"),E=t("Znn+"),n=t("ZTPi"),g=t("q1tI"),I=t("tMyG"),B=t("06Lf"),z=t("bP8k"),C=t("gFTJ"),et=function(N){var r=N.metrics;return Object(e.jsxs)(C.b,{bordered:!0,column:1,size:"small",children:[Object(e.jsxs)(C.b.Item,{label:"\u65E5\u80DC\u7387",children:[r.strategy&&(r.strategy.daily_winning_ratio*100).toFixed(2)||"--"," %"]}),Object(e.jsxs)(C.b.Item,{label:"\u5E74\u5316\u6CE2\u52A8\u7387",children:[r.strategy&&(r.strategy.annual_volatility*100).toFixed(2)||"--"," %"]}),Object(e.jsx)(C.b.Item,{label:"Alpha",children:r.strategy&&r.strategy.alpha.toFixed(2)||"--"}),Object(e.jsx)(C.b.Item,{label:"Beta",children:r.strategy&&r.strategy.beta.toFixed(2)||"--"}),Object(e.jsx)(C.b.Item,{label:"\u590F\u666E\u6BD4\u7387",children:r.strategy&&r.strategy.sharpe_ratio.toFixed(2)||"--"}),Object(e.jsx)(C.b.Item,{label:"\u7D22\u63D0\u8BFA\u6BD4\u7387",children:r.strategy&&r.strategy.sortino_ratio.toFixed(2)||"--"}),Object(e.jsxs)(C.b.Item,{label:"\u6700\u5927\u56DE\u64A4\u7387",children:[r.strategy&&(r.strategy.max_drawdown*100).toFixed(2)||"--"," %"]})]})},F=et,j=t("c+yx"),V=function(N){var r=N.statistic,h=function(M){return Object(j.c)(Object(j.d)(M*100||0,2))};return Object(e.jsxs)(C.b,{bordered:!0,column:1,size:"small",children:[Object(e.jsx)(C.b.Item,{label:"\u8FD11\u6708",children:Object(e.jsxs)("span",{className:Object(j.b)(r.last_1m_pnl_rate||0),children:[h(r.last_1m_pnl_rate)," %"]})}),Object(e.jsx)(C.b.Item,{label:"\u8FD13\u6708",children:Object(e.jsxs)("span",{className:Object(j.b)(r.last_3m_pnl_rate||0),children:[h(r.last_3m_pnl_rate)," %"]})}),Object(e.jsx)(C.b.Item,{label:"\u8FD16\u6708",children:Object(e.jsxs)("span",{className:Object(j.b)(r.last_6m_pnl_rate||0),children:[h(r.last_6m_pnl_rate)," %"]})}),Object(e.jsx)(C.b.Item,{label:"\u8FD11\u5E74",children:Object(e.jsxs)("span",{className:Object(j.b)(r.last_12m_pnl_rate||0),children:[h(r.last_12m_pnl_rate)," %"]})})]})},$=V,G=t("wd/R"),H=t.n(G),X=function(N){var r=N.data,h=[{title:"\u65E5\u671F",dataIndex:"date",key:"date"},{title:"\u51C0\u503C",dataIndex:"value",key:"value",render:function(x){return x}},{title:"\u65E5\u6DA8\u5E45",dataIndex:"incomeRate",key:"incomeRate",render:function(x){return Object(e.jsxs)("span",{className:Object(j.b)(x),children:[Object(j.c)(Object(j.d)(x,2)),"%"]})}}],y=function(x){if(x.length>0){var f=x.map(function(A){return{date:H()(A[0]*1e3).format("YYYY-MM-DD HH:mm"),value:Object(j.d)(A[1],4),incomeRate:A[3]*100,key:A[0]}});return f}return[]};return Object(e.jsx)(L.a,{columns:h,dataSource:y(Object(o.a)(r).reverse()),pagination:{pageSize:8,simple:!0},size:"small"})},s=X,a=t("7AqN"),c=t("9kvl"),d=t("hKUY"),D=n.a.TabPane,u=function(){var N,r,h=Object(a.l)(),y=h.code,M=h.manager,x=Object(c.e)();Object(g.useEffect)(function(){x({type:"subDetails/getStatistic",payload:{code:y,manager:M}}),x({type:"subDetails/getMetrics",payload:{code:y,manager:M}}),x({type:"subDetails/getAll",payload:{code:y,manager:M}}),x({type:"price/getBtcPrice",payload:{code:y,manager:M}}),x({type:"operation/getUserTable",payload:{code:y,manager:M}}),x({type:"operation/getUserUnrealizedDividend",payload:{code:y,manager:M}})},[x,y,M]);var f=Object(c.h)(function(i){var m=i.subDetails[y]||{},K=m.statistic,it=K===void 0?{}:K,ut=m.metrics,ht=ut===void 0?{}:ut,mt=m.all,yt=mt===void 0?[]:mt,xt=i.price.btc,pt=i.operation.userTable[y]||{},Et=i.operation.userUnrealizedDividend[y]||{};return{statistic:it,metrics:ht,all:yt,btcPrice:xt,userTable:pt,userUnrealizedDividend:Et}}),A=f.statistic,Y=f.metrics,w=f.all,k=f.btcPrice,q=f.userTable,P=q===void 0?{}:q,at=f.userUnrealizedDividend,_=at===void 0?{}:at,nt=Object.keys(_).reduce(function(i,m){var K=_[m].map(function(it){return{name:m,time:it[0]*1e3,value:it[1]}});return[].concat(Object(o.a)(i),Object(o.a)(K))},[]),rt=Object.keys(P).map(function(i){return{type:i,value:Object(j.a)(P[i][0],2)}}),tt=Object.keys(P).map(function(i){return{key:i,total:P[i][0],unrealizedPnl:P[i][1],unrealizedAllocation:P[i][2],real:P[i][3]}}),st=tt.reduce(function(i,m){return{key:"all",total:i.total+m.total,unrealizedPnl:i.unrealizedPnl+m.unrealizedPnl,unrealizedAllocation:i.unrealizedAllocation+m.unrealizedAllocation,real:i.real+m.real}},{key:"all",total:0,unrealizedPnl:0,unrealizedAllocation:0,real:0}),ct=w.map(function(i){return{name:"\u672C\u7B56\u7565",time:i[0]*1e3,value:i[2]*100}}),lt=k.map(function(i){return{name:"\u57FA\u51C6",time:i[0]*1e3,value:(i[1]/k[0][1]-1)*100}}),vt={data:[].concat(Object(o.a)(ct),Object(o.a)(lt)),height:400,xField:"time",yField:"value",point:{size:3},animation:!1,meta:{value:{formatter:function(m){return Object(j.a)(m,2)},nice:!0,min:void 0}},xAxis:{type:"time",tickCount:5,mask:`YY-MM-DD 
 HH:mm`},legend:{position:"top-right"},seriesField:"name"},bt=[{title:"\u5386\u53F2\u5E74\u5316\u6536\u76CA\u7387",value:((Y==null||(N=Y.strategy)===null||N===void 0?void 0:N.annual_return)||0)*100,suffix:"%",isNormal:!1,precision:2},{title:"\u6210\u7ACB\u4EE5\u6765\u6536\u76CA\u7387",value:(A.pnl_rate||0)*100,suffix:"%",isNormal:!1,precision:2},{title:"\u6700\u65B0\u51C0\u503C",value:A.pps||0,precision:2,suffix:"USD"},{title:"\u6628\u65E5\u6DA8\u8DCC",value:(A.last_day_pnl_rate||0)*100,suffix:"%",isNormal:!1,precision:2},(r={title:"\u4EF7\u503C\u672C\u4F4D",value:(A.last_day_pnl_rate||0)*100},Object(v.a)(r,"value"," "),Object(v.a)(r,"suffix","USD"),r)],jt=[{title:"\u5F85\u5206\u914D\u5229\u6DA6",value:st.unrealizedAllocation}],ot=[{title:"\u603B\u5E02\u503C",value:st.total}],dt={appendPadding:10,data:rt,angleField:"value",colorField:"type",radius:.75,label:{type:"spider",labelHeight:28,content:`{name}
{percentage}`},interactions:[{type:"element-selected"},{type:"element-active"}]},Ot={data:nt,height:300,isStack:!0,xField:"time",yField:"value",seriesField:"name",xAxis:{type:"time",tickCount:5,mask:"YY-MM-DD"}},ft=[{title:"\u7528\u6237",dataIndex:"key",render:function(m){return Object(e.jsx)("a",{href:"/#/".concat(M,"/").concat(y,"/account/").concat(m),children:m})}},{title:"\u603B\u5E02\u503C",dataIndex:"total",render:function(m){return m.toFixed(2)},sorter:function(m,K){return m.total-K.total}},{title:"\u672A\u5B9E\u73B0\u76C8\u4E8F",dataIndex:"unrealizedPnl",render:function(m){return m.toFixed(2)},sorter:function(m,K){return m.unrealizedPnl-K.unrealizedPnl}},{title:"\u672A\u5206\u914D\u6536\u76CA",dataIndex:"unrealizedAllocation",render:function(m){return m.toFixed(2)},sorter:function(m,K){return m.unrealizedAllocation-K.unrealizedAllocation}},{title:"\u5B9E\u9645\u5E02\u503C",dataIndex:"real",render:function(m){return m.toFixed(2)},sorter:function(m,K){return m.real-K.real}}];return Object(e.jsxs)(I.a,{children:[Object(e.jsxs)(b.a,{gutter:[16,16],children:[Object(e.jsx)(S.a,{span:8,children:Object(e.jsx)(d.a,{title:"\u5E02\u503C\u5206\u5E03",updateTime:Date.now(),data:ot,chartConfig:[dt],chartType:["pie"]})}),Object(e.jsx)(S.a,{span:8,children:Object(e.jsx)(d.a,{title:"\u4EFD\u989D\u5206\u5E03",data:ot,chartConfig:[dt],chartType:["pie"]})}),Object(e.jsx)(S.a,{span:8,children:Object(e.jsx)(d.a,{title:"\u5229\u6DA6\u6982\u51B5",data:jt,chartConfig:[Ot],chartType:["column"]})})]}),Object(e.jsx)(b.a,{gutter:[16,16],children:Object(e.jsx)(S.a,{span:24,children:Object(e.jsx)(d.a,{title:"\u7EDF\u8BA1",updateTime:(A==null?void 0:A.timestamp)*1e3,data:bt})})}),Object(e.jsxs)(b.a,{gutter:[16,16],children:[Object(e.jsx)(S.a,{sm:18,children:Object(e.jsx)(l.a,{title:"\u4E1A\u7EE9\u8D70\u52BF ",children:Object(e.jsx)(B.c,Object(Z.a)({},vt))})}),Object(e.jsx)(S.a,{sm:6,children:Object(e.jsx)(l.a,{size:"small",children:Object(e.jsxs)(n.a,{defaultActiveKey:"1",children:[Object(e.jsx)(D,{tab:"\u7EDF\u8BA1\u6307\u6807",children:Object(e.jsx)(F,{metrics:Y})},"1"),Object(e.jsx)(D,{tab:"\u5386\u53F2\u4E1A\u7EE9",children:Object(e.jsx)($,{statistic:A})},"2"),Object(e.jsx)(D,{tab:"\u5386\u53F2\u51C0\u503C",children:Object(e.jsx)(s,{data:w})},"3")]})})})]}),Object(e.jsx)(b.a,{gutter:[16,16],children:Object(e.jsx)(S.a,{xs:24,children:Object(e.jsx)(l.a,{title:"\u7528\u6237\u6301\u4ED3",children:Object(e.jsx)(L.a,{columns:ft,dataSource:[].concat(Object(o.a)(tt),[st]),pagination:!1,size:"small"})})})})]})},O=T.default=u},bP8k:function(J,T,t){"use strict";var p=t("cIOH"),L=t.n(p),Q=t("jhiw"),l=t.n(Q)},"c+yx":function(J,T,t){"use strict";t.d(T,"b",function(){return l}),t.d(T,"c",function(){return Z}),t.d(T,"d",function(){return b}),t.d(T,"a",function(){return e});var p=t("KQm4"),L=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,Q=function(o){return L.test(o)},l=function(o){return Number(o)>=0?"green":Number(o)<0?"red":"grey"},Z=function(o){return Number(o)>=0?"+".concat(o):o},R=function(o,E){var n=o.toString(),g=n.indexOf(".");for(g<0&&(g=n.length,n+=".");n.length<=g+E;)n+="0";return n},b=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=Math.pow(10,E);if(Number(o)>0){var g=Math.floor(Number(o)*n)/n;return R(g,E)}var I=Math.ceil(Number(o)*n)/n;return R(I,E)},e=function(o,E){var n=Math.pow(10,E||8);return Math.floor(Number(o)*n)/n};function W(){for(var v=arguments.length,o=new Array(v),E=0;E<v;E++)o[E]=arguments[E];var n=[].concat(o);function g(){for(var I=arguments.length,B=new Array(I),z=0;z<I;z++)B[z]=arguments[z];return n=[].concat(Object(p.a)(n),B),g}return g.toString=function(){return n.reduce(function(I,B){return Number(I)+Number(B)})},g}var S=function(o){return o.map(function(E){return Number.isNaN(Number(E))?E:e(E,8)})}},gFTJ:function(J,T,t){"use strict";t.d(T,"a",function(){return F});var p=t("rePB"),L=t("ODXe"),Q=t("U8pU"),l=t("q1tI"),Z=t("TSYQ"),R=t.n(Z),b=t("Zm9Q"),e=t("ACnJ"),W=t("uaoM"),S=t("H84U"),v=t("wx14");function o(s){return s!=null}var E=function(a){var c=a.itemPrefixCls,d=a.component,D=a.span,u=a.className,O=a.style,U=a.labelStyle,N=a.contentStyle,r=a.bordered,h=a.label,y=a.content,M=a.colon,x=d;if(r){var f;return l.createElement(x,{className:R()((f={},Object(p.a)(f,"".concat(c,"-item-label"),o(h)),Object(p.a)(f,"".concat(c,"-item-content"),o(y)),f),u),style:O,colSpan:D},o(h)?h:y)}return l.createElement(x,{className:R()("".concat(c,"-item"),u),style:O,colSpan:D},l.createElement("div",{className:"".concat(c,"-item-container")},h&&l.createElement("span",{className:R()("".concat(c,"-item-label"),Object(p.a)({},"".concat(c,"-item-no-colon"),!M)),style:U},h),y&&l.createElement("span",{className:R()("".concat(c,"-item-content")),style:N},y)))},n=E;function g(s,a,c){var d=a.colon,D=a.prefixCls,u=a.bordered,O=c.component,U=c.type,N=c.showLabel,r=c.showContent,h=c.labelStyle,y=c.contentStyle;return s.map(function(M,x){var f=M.props,A=f.label,Y=f.children,w=f.prefixCls,k=w===void 0?D:w,q=f.className,P=f.style,at=f.labelStyle,_=f.contentStyle,nt=f.span,rt=nt===void 0?1:nt,tt=M.key;return typeof O=="string"?l.createElement(n,{key:"".concat(U,"-").concat(tt||x),className:q,style:P,labelStyle:Object(v.a)(Object(v.a)({},h),at),contentStyle:Object(v.a)(Object(v.a)({},y),_),span:rt,colon:d,component:O,itemPrefixCls:k,bordered:u,label:N?A:null,content:r?Y:null}):[l.createElement(n,{key:"label-".concat(tt||x),className:q,style:Object(v.a)(Object(v.a)(Object(v.a)({},h),P),at),span:1,colon:d,component:O[0],itemPrefixCls:k,bordered:u,label:A}),l.createElement(n,{key:"content-".concat(tt||x),className:q,style:Object(v.a)(Object(v.a)(Object(v.a)({},y),P),_),span:rt*2-1,component:O[1],itemPrefixCls:k,bordered:u,content:Y})]})}var I=function(a){var c=l.useContext(F),d=a.prefixCls,D=a.vertical,u=a.row,O=a.index,U=a.bordered;return D?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(O),className:"".concat(d,"-row")},g(u,a,Object(v.a)({component:"th",type:"label",showLabel:!0},c))),l.createElement("tr",{key:"content-".concat(O),className:"".concat(d,"-row")},g(u,a,Object(v.a)({component:"td",type:"content",showContent:!0},c)))):l.createElement("tr",{key:O,className:"".concat(d,"-row")},g(u,a,Object(v.a)({component:U?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},c)))},B=I,z=function(a){var c=a.children;return c},C=z,et=t("0n0R"),F=l.createContext({}),j={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function V(s,a){if(typeof s=="number")return s;if(Object(Q.a)(s)==="object")for(var c=0;c<e.b.length;c++){var d=e.b[c];if(a[d]&&s[d]!==void 0)return s[d]||j[d]}return 3}function $(s,a,c){var d=s;return(a===void 0||a>c)&&(d=Object(et.a)(s,{span:c}),Object(W.a)(a===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),d}function G(s,a){var c=Object(b.a)(s).filter(function(O){return O}),d=[],D=[],u=a;return c.forEach(function(O,U){var N,r=(N=O.props)===null||N===void 0?void 0:N.span,h=r||1;if(U===c.length-1){D.push($(O,r,u)),d.push(D);return}h<u?(u-=h,D.push(O)):(D.push($(O,h,u)),d.push(D),u=a,D=[])}),d}function H(s){var a,c=s.prefixCls,d=s.title,D=s.extra,u=s.column,O=u===void 0?j:u,U=s.colon,N=U===void 0?!0:U,r=s.bordered,h=s.layout,y=s.children,M=s.className,x=s.style,f=s.size,A=s.labelStyle,Y=s.contentStyle,w=l.useContext(S.b),k=w.getPrefixCls,q=w.direction,P=k("descriptions",c),at=l.useState({}),_=Object(L.a)(at,2),nt=_[0],rt=_[1],tt=V(O,nt);l.useEffect(function(){var ct=e.a.subscribe(function(lt){Object(Q.a)(O)==="object"&&rt(lt)});return function(){e.a.unsubscribe(ct)}},[]);var st=G(y,tt);return l.createElement(F.Provider,{value:{labelStyle:A,contentStyle:Y}},l.createElement("div",{className:R()(P,(a={},Object(p.a)(a,"".concat(P,"-").concat(f),f&&f!=="default"),Object(p.a)(a,"".concat(P,"-bordered"),!!r),Object(p.a)(a,"".concat(P,"-rtl"),q==="rtl"),a),M),style:x},(d||D)&&l.createElement("div",{className:"".concat(P,"-header")},d&&l.createElement("div",{className:"".concat(P,"-title")},d),D&&l.createElement("div",{className:"".concat(P,"-extra")},D)),l.createElement("div",{className:"".concat(P,"-view")},l.createElement("table",null,l.createElement("tbody",null,st.map(function(ct,lt){return l.createElement(B,{key:lt,index:lt,colon:N,prefixCls:P,vertical:h==="vertical",bordered:r,row:ct})}))))))}H.Item=C;var X=T.b=H},hKUY:function(J,T,t){"use strict";var p=t("IzEo"),L=t("bx4M"),Q=t("14J3"),l=t("BMrR"),Z=t("jCWc"),R=t("kPKH"),b=t("nKUr"),e=t.n(b),W=t("VTBJ"),S=t("q1tI"),v=t.n(S),o=t("wd/R"),E=t.n(o),n=t("06Lf"),g=t("5nFI"),I=t("nMtQ"),B=t.n(I),z=function(F,j){switch(F){case"column":return Object(b.jsx)(n.b,Object(W.a)({},j));case"area":return Object(b.jsx)(n.a,Object(W.a)({},j));case"pie":return Object(b.jsx)(n.d,Object(W.a)({},j));default:return Object(b.jsx)(n.c,Object(W.a)({},j))}},C=function(F){var j=F.title,V=j===void 0?"":j,$=F.updateTime,G=F.data,H=G===void 0?[]:G,X=F.chartConfig,s=X===void 0?[]:X,a=F.chartType,c=a===void 0?[]:a,d=F.chartTitle,D=d===void 0?[]:d;return Object(b.jsxs)(L.a,{title:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{children:V}),$?Object(b.jsx)("span",{className:B.a.updateTime,children:E()($).format("YYYY-MM-DD HH:mm:ss")}):null]}),children:[Object(b.jsx)(l.a,{style:{justifyContent:"space-between"},gutter:[16,16],children:H.map(function(u){return Object(b.jsx)(R.a,{sm:Math.floor(24/H.length),children:Object(b.jsx)(g.a,{title:u.title,value:u.value,text:u.text,percent:u.percent,precision:u.precision,isNormal:u.isNormal,suffix:u.suffix})},u.title)})}),Object(b.jsx)(l.a,{gutter:[16,16],children:s.length>0?s.map(function(u,O){return Object(b.jsxs)(R.a,{sm:24/s.length,children:[Object(b.jsx)("h3",{children:D[O]}),Object(b.jsx)("div",{style:{height:"250px"},children:z(c[O],u)})]},O)}):null})]})};T.a=C},jhiw:function(J,T,t){},nMtQ:function(J,T,t){J.exports={updateTime:"updateTime___3zyv9"}}}]);
