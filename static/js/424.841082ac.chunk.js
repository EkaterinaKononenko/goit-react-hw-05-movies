"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[424],{747:function(e,n,t){t.d(n,{Z:function(){return Z}});var r,o,i,c,a,u=t(7689),s=t(168),l=t(1087),h=t(6444),f=h.ZP.li(r||(r=(0,s.Z)(["\n  width: 250px;\n  heigth: 450px;\n  margin: 10px;\n  position: relative;\n  list-style: none;\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n    box-shadow: ",";\n    border: ",";\n  }\n"])),(function(e){return e.theme.shadows.boxShadow}),(function(e){return e.theme.borders.light})),p=h.ZP.h1(o||(o=(0,s.Z)(["\n  font-family: 'Montserrat', sans-serif;\n  font-size: ","px;\n  color: ",";\n  margin: 0 auto;\n  height: 70px;\n \n"])),(function(e){return e.theme.fontSizes[2]}),(function(e){return e.theme.colors.primary})),d=h.ZP.p(i||(i=(0,s.Z)(["\nposition: absolute;\nbottom: 5px;\nmargin: 0 auto;\n"]))),m=(0,h.ZP)(l.OL)(c||(c=(0,s.Z)(["\n  text-decoration: none;\n"]))),x=t(184),g=function(e){var n=e.id,t=e.src,r=e.title,o=e.vote,i=(0,u.TH)();return(0,x.jsxs)(f,{title:r,children:[(0,x.jsxs)(m,{to:"/movies/".concat(n),state:{from:i},children:[(0,x.jsx)("img",{src:t,alt:r,width:"250",height:"350"}),(0,x.jsx)(p,{children:r})]}),(0,x.jsxs)(d,{children:["User score: \u2b50 ",Math.round(o)]})]},n)},v=t(7830),b=h.ZP.ul(a||(a=(0,s.Z)(["\ndisplay: flex;\nflex-wrap: wrap;"]))),Z=function(e){var n=e.movies;return(0,x.jsx)(b,{children:n.map((function(e){var n=e.id,t=e.poster_path,r=e.title,o=e.vote_average,i=t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):v;return(0,x.jsx)(g,{id:n,src:i,title:r,vote:o,children:r},n)}))})}},3424:function(e,n,t){t.r(n),t.d(n,{Movies:function(){return S},default:function(){return _}});var r,o,i,c=t(9439),a=t(2791),u=t(1087),s=t(5861),l=t(7757),h=t.n(l),f=t(2388),p=function(){var e=(0,s.Z)(h().mark((function e(n){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.get("".concat("https://api.themoviedb.org/","3/search/movie?api_key=").concat("d912e4e6ac5ac1e34c6318ab6e2c9716","&query=").concat(n,"&language=").concat("en-US","&page=").concat(1,"&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),d=p,m=t(7596),x=t(747),g=(t(5462),t(5705)),v=t(168),b=t(6444),Z=(0,b.ZP)(g.l0)(r||(r=(0,v.Z)(["\npadding-top: 90px;\nalign-item: center;\njustify-content: center;\nflex-wrap: nowrap;\n"]))),w=(0,b.ZP)(g.gN)(o||(o=(0,v.Z)(["\n  width: 500px;\n  padding: ","px;\n  margin-left: ","px;\n  font-size: ","px;\n  color: ",";\n  background-color: ",";\n  border: ",";\n  font-family: 'Rubik Bubbles', cursive;\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[8]}),(function(e){return e.theme.fontSizes[4]}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.colorBtnHover}),(function(e){return e.theme.borders.heading})),j=b.ZP.button(i||(i=(0,v.Z)(["\n  width: ","px;\n  padding: ","px;\n  margin: ","px;\n  font-size: ","px;\n  color: ",";\n  background-color: ",";\n  border: ",";\n  font-family: 'Rubik Bubbles', cursive;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),(function(e){return e.theme.space[8]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.fontSizes[4]}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.colorBtnHover}),(function(e){return e.theme.borders.heading}),(function(e){return e.theme.colors.colorBtnHover}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.shadows.boxShadow})),y=t(4328),k=t(184),S=function(){var e=(0,a.useState)([]),n=(0,c.Z)(e,2),t=n[0],r=n[1],o=(0,a.useState)(""),i=(0,c.Z)(o,2),s=i[0],l=i[1],h=(0,u.lr)([]),f=(0,c.Z)(h,2),p=f[0],v=f[1];console.log(t),(0,a.useEffect)((function(){if(null!==p.get("searchMovie")){var e=p.get("searchMovie");d(e).then((function(e){if(0===e.results.length)return m.Am.warn("We couldn't find result on your request.",{position:"top-right",autoClose:3e3,theme:"colored"});r(e.results)})).catch((function(e){console.log(e)}))}}),[s,p]);return(0,k.jsxs)("div",{children:[(0,k.jsx)(y.Z,{}),(0,k.jsx)(m.Ix,{}),(0,k.jsx)(g.J9,{children:(0,k.jsxs)(Z,{onSubmit:function(e){if(e.preventDefault(),""===s.trim())return m.Am.error("Field for searching is empty. Add information for request.",{position:"top-right",autoClose:3e3,theme:"colored"});v({searchMovie:s}),l("")},children:[(0,k.jsx)("label",{children:(0,k.jsx)(w,{type:"text",placeholder:"Search your favorite movie",name:"searchMovie",value:s,onChange:function(e){l(e.currentTarget.value.toLowerCase())}})}),(0,k.jsx)(j,{type:"submit",children:"Search"})]})}),(0,k.jsx)(x.Z,{movies:t})]})},_=S},7830:function(e,n,t){e.exports=t.p+"static/media/default_picture.1be6988bda85073dc6a2.jpg"}}]);
//# sourceMappingURL=424.841082ac.chunk.js.map