(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5nFI":function(J,g,t){"use strict";var f=t("nKUr"),W=t("VTBJ"),j=t("aHsQ"),c=t("sGsY"),H=t("Ff2n"),T=t("q1tI"),d=t("ek7X"),B=t("0NbB"),K=function(a){var O=a.direction,C=O===void 0?"up":O;return Object(f.jsx)(f.Fragment,{children:C==="up"?Object(f.jsx)(d.a,{className:"up"}):Object(f.jsx)(B.a,{className:"down"})})},z=K,u=function(a){var O=a.title,C=O===void 0?"title":O,R=a.value,A=R===void 0?0:R,Q=a.precision,k=Q===void 0?0:Q,E=a.percent,M=a.isNormal,X=M===void 0?!0:M,U=a.text,G=Object(H.a)(a,["title","value","precision","percent","isNormal","text"]),V=function(){return X?"#000":A>=0?"#389e0d":"#cf1322"},Z=E>=0?"up":"down";return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(c.a,Object(W.a)({title:C,value:A,precision:k,valueStyle:{color:V(),fontWeight:600},prefix:!X&&Number(A)>=0?"+":""},G)),U?Object(f.jsxs)("div",{children:[U," ",Object(f.jsx)(z,{direction:Z}),Object(f.jsxs)("span",{className:Z,children:[Math.abs(E),"%"]})]}):null]})},s=g.a=u},bP8k:function(J,g,t){"use strict";var f=t("cIOH"),W=t.n(f),j=t("jhiw"),c=t.n(j)},"c+yx":function(J,g,t){"use strict";t.d(g,"c",function(){return c}),t.d(g,"d",function(){return H}),t.d(g,"e",function(){return d}),t.d(g,"b",function(){return B}),t.d(g,"a",function(){return z});var f=t("KQm4"),W=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,j=function(s){return W.test(s)},c=function(s){return Number(s)>=0?"green":Number(s)<0?"red":"grey"},H=function(s){return Number(s)>=0?"+".concat(s):s},T=function(s,h){var a=s.toString(),O=a.indexOf(".");for(O<0&&(O=a.length,a+=".");a.length<=O+h;)a+="0";return a},d=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=Math.pow(10,h);if(Number(s)>0){var O=Math.floor(Number(s)*a)/a;return T(O,h)}var C=Math.ceil(Number(s)*a)/a;return T(C,h)},B=function(s,h){var a=Math.pow(10,h||8);return Math.floor(Number(s)*a)/a};function K(){for(var u=arguments.length,s=new Array(u),h=0;h<u;h++)s[h]=arguments[h];var a=[].concat(s);function O(){for(var C=arguments.length,R=new Array(C),A=0;A<C;A++)R[A]=arguments[A];return a=[].concat(Object(f.a)(a),R),O}return O.toString=function(){return a.reduce(function(C,R){return Number(C)+Number(R)})},O}var z=function(s){return s.map(function(h){return Number.isNaN(Number(h))?h:B(h,8)})}},gFTJ:function(J,g,t){"use strict";t.d(g,"a",function(){return E});var f=t("rePB"),W=t("ODXe"),j=t("U8pU"),c=t("q1tI"),H=t("TSYQ"),T=t.n(H),d=t("Zm9Q"),B=t("ACnJ"),K=t("uaoM"),z=t("H84U"),u=t("wx14");function s(n){return n!=null}var h=function(e){var r=e.itemPrefixCls,o=e.component,b=e.span,l=e.className,i=e.style,P=e.labelStyle,F=e.contentStyle,S=e.bordered,p=e.label,I=e.content,w=e.colon,$=o;if(S){var v;return c.createElement($,{className:T()((v={},Object(f.a)(v,"".concat(r,"-item-label"),s(p)),Object(f.a)(v,"".concat(r,"-item-content"),s(I)),v),l),style:i,colSpan:b},s(p)?p:I)}return c.createElement($,{className:T()("".concat(r,"-item"),l),style:i,colSpan:b},c.createElement("div",{className:"".concat(r,"-item-container")},p&&c.createElement("span",{className:T()("".concat(r,"-item-label"),Object(f.a)({},"".concat(r,"-item-no-colon"),!w)),style:P},p),I&&c.createElement("span",{className:T()("".concat(r,"-item-content")),style:F},I)))},a=h;function O(n,e,r){var o=e.colon,b=e.prefixCls,l=e.bordered,i=r.component,P=r.type,F=r.showLabel,S=r.showContent,p=r.labelStyle,I=r.contentStyle;return n.map(function(w,$){var v=w.props,et=v.label,nt=v.children,q=v.prefixCls,_=q===void 0?b:q,tt=v.className,D=v.style,at=v.labelStyle,m=v.contentStyle,x=v.span,L=x===void 0?1:x,N=w.key;return typeof i=="string"?c.createElement(a,{key:"".concat(P,"-").concat(N||$),className:tt,style:D,labelStyle:Object(u.a)(Object(u.a)({},p),at),contentStyle:Object(u.a)(Object(u.a)({},I),m),span:L,colon:o,component:i,itemPrefixCls:_,bordered:l,label:F?et:null,content:S?nt:null}):[c.createElement(a,{key:"label-".concat(N||$),className:tt,style:Object(u.a)(Object(u.a)(Object(u.a)({},p),D),at),span:1,colon:o,component:i[0],itemPrefixCls:_,bordered:l,label:et}),c.createElement(a,{key:"content-".concat(N||$),className:tt,style:Object(u.a)(Object(u.a)(Object(u.a)({},I),D),m),span:L*2-1,component:i[1],itemPrefixCls:_,bordered:l,content:nt})]})}var C=function(e){var r=c.useContext(E),o=e.prefixCls,b=e.vertical,l=e.row,i=e.index,P=e.bordered;return b?c.createElement(c.Fragment,null,c.createElement("tr",{key:"label-".concat(i),className:"".concat(o,"-row")},O(l,e,Object(u.a)({component:"th",type:"label",showLabel:!0},r))),c.createElement("tr",{key:"content-".concat(i),className:"".concat(o,"-row")},O(l,e,Object(u.a)({component:"td",type:"content",showContent:!0},r)))):c.createElement("tr",{key:i,className:"".concat(o,"-row")},O(l,e,Object(u.a)({component:P?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},r)))},R=C,A=function(e){var r=e.children;return r},Q=A,k=t("0n0R"),E=c.createContext({}),M={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function X(n,e){if(typeof n=="number")return n;if(Object(j.a)(n)==="object")for(var r=0;r<B.b.length;r++){var o=B.b[r];if(e[o]&&n[o]!==void 0)return n[o]||M[o]}return 3}function U(n,e,r){var o=n;return(e===void 0||e>r)&&(o=Object(k.a)(n,{span:r}),Object(K.a)(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}function G(n,e){var r=Object(d.a)(n).filter(function(i){return i}),o=[],b=[],l=e;return r.forEach(function(i,P){var F,S=(F=i.props)===null||F===void 0?void 0:F.span,p=S||1;if(P===r.length-1){b.push(U(i,S,l)),o.push(b);return}p<l?(l-=p,b.push(i)):(b.push(U(i,p,l)),o.push(b),l=e,b=[])}),o}function V(n){var e,r=n.prefixCls,o=n.title,b=n.extra,l=n.column,i=l===void 0?M:l,P=n.colon,F=P===void 0?!0:P,S=n.bordered,p=n.layout,I=n.children,w=n.className,$=n.style,v=n.size,et=n.labelStyle,nt=n.contentStyle,q=c.useContext(z.b),_=q.getPrefixCls,tt=q.direction,D=_("descriptions",r),at=c.useState({}),m=Object(W.a)(at,2),x=m[0],L=m[1],N=X(i,x);c.useEffect(function(){var y=B.a.subscribe(function(rt){Object(j.a)(i)==="object"&&L(rt)});return function(){B.a.unsubscribe(y)}},[]);var Y=G(I,N);return c.createElement(E.Provider,{value:{labelStyle:et,contentStyle:nt}},c.createElement("div",{className:T()(D,(e={},Object(f.a)(e,"".concat(D,"-").concat(v),v&&v!=="default"),Object(f.a)(e,"".concat(D,"-bordered"),!!S),Object(f.a)(e,"".concat(D,"-rtl"),tt==="rtl"),e),w),style:$},(o||b)&&c.createElement("div",{className:"".concat(D,"-header")},o&&c.createElement("div",{className:"".concat(D,"-title")},o),b&&c.createElement("div",{className:"".concat(D,"-extra")},b)),c.createElement("div",{className:"".concat(D,"-view")},c.createElement("table",null,c.createElement("tbody",null,Y.map(function(y,rt){return c.createElement(R,{key:rt,index:rt,colon:F,prefixCls:D,vertical:p==="vertical",bordered:S,row:y})}))))))}V.Item=Q;var Z=g.b=V},hKUY:function(J,g,t){"use strict";var f=t("IzEo"),W=t("bx4M"),j=t("14J3"),c=t("BMrR"),H=t("jCWc"),T=t("kPKH"),d=t("nKUr"),B=t.n(d),K=t("VTBJ"),z=t("q1tI"),u=t.n(z),s=t("wd/R"),h=t.n(s),a=t("06Lf"),O=t("5nFI"),C=t("nMtQ"),R=t.n(C),A=function(E,M){switch(E){case"column":return Object(d.jsx)(a.b,Object(K.a)({},M));case"area":return Object(d.jsx)(a.a,Object(K.a)({},M));case"pie":return Object(d.jsx)(a.d,Object(K.a)({},M));default:return Object(d.jsx)(a.c,Object(K.a)({},M))}},Q=function(E){var M=E.title,X=M===void 0?"":M,U=E.updateTime,G=E.data,V=G===void 0?[]:G,Z=E.chartConfig,n=Z===void 0?[]:Z,e=E.chartType,r=e===void 0?[]:e,o=E.chartTitle,b=o===void 0?[]:o;return Object(d.jsxs)(W.a,{title:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:X}),U?Object(d.jsx)("span",{className:R.a.updateTime,children:h()(U).format("YYYY-MM-DD HH:mm:ss")}):null]}),children:[Object(d.jsx)(c.a,{gutter:[16,16],children:V.map(function(l){return Object(d.jsx)(T.a,{sm:Math.floor(24/V.length),children:Object(d.jsx)(O.a,{title:l.title,value:l.value,text:l.text,percent:l.percent,precision:l.precision,isNormal:l.isNormal,suffix:l.suffix})},l.title)})}),Object(d.jsx)(c.a,{gutter:[16,16],children:n.map(function(l,i){return l&&l.data.length>0&&Object(d.jsxs)(T.a,{sm:24/n.length,children:[Object(d.jsx)("h3",{children:b[i]}),Object(d.jsx)("div",{style:{height:"250px"},children:A(r[i],l)})]},l.data.name)})})]})};g.a=Q},jhiw:function(J,g,t){},nMtQ:function(J,g,t){J.exports={updateTime:"updateTime___3zyv9"}},t9lk:function(J,g,t){"use strict";t.r(g);var f=t("14J3"),W=t("BMrR"),j=t("nKUr"),c=t("jCWc"),H=t("kPKH"),T=t("o0o1"),d=t.n(T),B=t("HaE+"),K=t("ODXe"),z=t("q1tI"),u=t("tMyG"),s=t("hKUY"),h=t("IzEo"),a=t("bx4M"),O=t("bP8k"),C=t("gFTJ"),R=t("cWXX"),A=t("/ezw"),Q=function(n){var e=n.data,r=n.isLoading;return Object(j.jsx)(a.a,{title:e.name,children:r?Object(j.jsx)(A.a,{active:!0}):Object(j.jsx)(C.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"},children:e.data.map(function(o){return Object(j.jsx)(C.b.Item,{label:o.key,children:o.value},o.key)})})})},k=Q,E=t("9kvl"),M=t("7AqN"),X=t("c4lB"),U=t("c+yx"),G=function(){var n=Object(E.e)(),e=Object(z.useState)([]),r=Object(K.a)(e,2),o=r[0],b=r[1],l=Object(M.l)(),i=l.code,P=l.manager;Object(z.useEffect)(function(){var m=function(){n({type:"monitor/getExchangeInfo",payload:{manager:P,code:i}})};n({type:"backTest/getBackTest",payload:{manager:P,code:i}}),m();var x=function(){var N=Object(B.a)(d.a.mark(function Y(){var y;return d.a.wrap(function(ct){for(;;)switch(ct.prev=ct.next){case 0:return ct.next=2,Object(X.b)({manager:P,code:i});case 2:y=ct.sent,b(y);case 4:case"end":return ct.stop()}},Y)}));return function(){return N.apply(this,arguments)}}();x();var L=setInterval(function(){m(),x()},1e4);return function(){clearInterval(L)}},[n,i,P]);var F=function(x,L){var N=x.map(function(Y){var y=Object(U.a)(L[Y].result||[]);return{name:Y,data:[{key:"\u5E94\u6709\u4ED3\u4F4D",value:""},{key:"\u603B\u4ED3\u4F4D",value:Number(y[9])},{key:"\u6700\u5927\u4ED3\u4F4D",value:"\u7A7A\uFF1A  \u591A\uFF1A"},{key:"\u7F8E\u5143\u4EF7\u503C",value:y[6]},{key:"\u5B9E\u9645\u6760\u6746",value:y[0]},{key:"\u94B1\u5305\u4F59\u989D(btc)",value:y[1]},{key:"\u94B1\u5305\u4F59\u989D(usd)",value:y[2]},{key:"\u8D26\u6237\u672A\u5B9E\u73B0\u76C8\u4E8F",value:y[3]},{key:"\u4FDD\u8BC1\u91D1\u4F59\u989D",value:y[4]},{key:"\u53EF\u7528\u4F59\u989D",value:y[5]},{key:"\u4EA4\u6613\u5BF9",value:y[7]},{key:"\u6760\u6746",value:y[8]},{key:"\u4ED3\u4F4D",value:y[9]},{key:"\u5408\u7EA6\u9762\u503C",value:y[10]},{key:"\u6301\u4ED3\u5747\u4EF7",value:y[11]},{key:"\u4ED3\u4F4D\u672A\u5B9E\u73B0\u76C8\u4E8F",value:y[12]}]}});return N},S=Object(E.h)(function(m){var x=m.monitor[i]||{},L=m.backTest[i]||[],N=Object.keys(x),Y=F(N,x);return{exchange:x,backTest:L,exchangeList:N,exchangeData:Y}}),p=S.exchange,I=S.backTest,w=S.exchangeList,$=S.exchangeData,v=I[I.length-1]||[],et=v[3]/v[2],nt=[{title:"\u8D44\u4EA7",value:w.reduce(function(m,x){var L=p[x].result;return m+Object(U.b)(L[6],8)},0)},{title:"\u4ED3\u4F4D",value:0},{title:"\u6760\u6746",value:0,precision:4}],q=[{title:"\u56DE\u6D4B\u6760\u6746",value:et,precision:4},{title:"\u56DE\u6D4B\u5E02\u503C",value:v[2]},{title:"\u56DE\u6D4B\u4ED3\u4F4D",value:v[3]}],_=I.map(function(m){return{name:"\u56DE\u6D4B\u4ED3\u4F4D",time:m[1]*1e3,value:m[3]}}),tt=o.map(function(m){return{name:"\u7F8E\u5143\u4EF7\u503C",time:m[0]*1e3,value:m[1]}}),D=function(x){return{data:x,height:300,xField:"time",yField:"value",xAxis:{type:"time",mask:`YY-MM-DD 
 HH:mm`},animation:!1,meta:{value:{formatter:function(N){return Object(U.b)(N,2)},nice:!0,min:void 0}},legend:{position:"top-right"},seriesField:"name"}},at=function(x){return x<4?24/x:6};return Object(j.jsxs)(u.a,{children:[Object(j.jsxs)(W.a,{gutter:[16,16],children:[Object(j.jsx)(H.a,{md:12,xs:24,children:Object(j.jsx)(s.a,{title:"\u5B9E\u76D8",updateTime:v[1]*1e3,data:nt,chartConfig:[D(tt)],chartType:["line","column"]})}),Object(j.jsx)(H.a,{md:12,xs:24,children:Object(j.jsx)(s.a,{title:"\u56DE\u6D4B",updateTime:v[1]*1e3,data:q,chartConfig:[D(_)],chartType:["column"]})})]}),Object(j.jsx)(W.a,{gutter:[16,16],children:$.map(function(m){return Object(j.jsx)(H.a,{md:at($.length),sm:12,xs:24,children:Object(j.jsx)(k,{data:m,isLoading:m.data.length===0})},m.name)})})]})},V=g.default=G}}]);
