(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var r,c=t(0),i=t(1),a=t.n(i),o=t(4),l=t.n(o),s=(t(10),t(11),t(2));!function(e){e[e.Cross=-1]="Cross",e[e.Void=0]="Void",e[e.Zero=1]="Zero"}(r||(r={}));var u,d=function(e){var n=e.row,t=e.col,i=e.onClick,a=e.value;return Object(c.jsx)("div",{className:"cell",onClick:function(){i(n,t)},children:Object(c.jsx)("span",{children:a==r.Void?"":a==r.Cross?"X":"0"})})};!function(e){e.Player1="X",e.Player2="0"}(u||(u={}));var j=function(){var e=Object(i.useState)(3),n=Object(s.a)(e,2),t=n[0],o=n[1],l=a.a.createRef(),j=Object(i.useState)(u.Player1),f=Object(s.a)(j,2),b=f[0],v=f[1],h=Object(i.useState)(new Array(3).fill(null).map((function(){return new Array(3).fill(r.Void)}))),O=Object(s.a)(h,2),y=O[0],p=O[1],m=function(e,n){if(y[e][n]===r.Void)return b===u.Player1?y[e][n]=r.Cross:y[e][n]=r.Zero,function(e,n){var c,i,a,o;c=i=a=o=0;for(var l=b===u.Player1?r.Cross:r.Zero,s=0;s<t;s++)y[e][s]==l&&c++,y[s][n]==l&&i++,y[s][s]==l&&a++,y[s][t-s-1]==l&&o++;return c===t||i===t||a===t||o===t}(e,n)?(alert("Winner is Player ".concat(b)),void x()):y.every((function(e){return e.every((function(e){return e!==r.Void}))}))?(alert("Game is Tied !!"),void x()):void(b===u.Player1?v(u.Player2):v(u.Player1))},x=function(){p(new Array(t).fill(null).map((function(){return new Array(t).fill(r.Void)}))),v(u.Player1)};return Object(i.useEffect)((function(){x()}),[t]),Object(c.jsxs)("div",{className:"Game",children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"90%"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{placeholder:"Board Dimension",ref:l,defaultValue:t,type:"number"}),Object(c.jsx)("button",{onClick:function(){var e,n=parseInt(null===(e=l.current)||void 0===e?void 0:e.value);!n||n<3?alert("Invalid Dimension !!. Please Enter Valid Dimension"):o(n)},children:"Change Dimension"})]}),Object(c.jsx)("button",{onClick:x,children:"Reset"})]}),Object(c.jsxs)("h3",{children:["Move Player: ",b]}),Object(c.jsx)("div",{className:"Board",children:y.map((function(e,n){return Object(c.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(c.jsx)(d,{row:n,col:t,value:e,onClick:m},t)}))},n)}))})]})};var f=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h2",{children:"Tic Tac Toe"})}),Object(c.jsx)(j,{})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.351a46d2.chunk.js.map