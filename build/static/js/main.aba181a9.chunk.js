(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{30:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var i,a,c,r,o,s,d,l,b,m,p,h,u,j,f,g,x,O,v,y,w,k,S,F,C,I,E,D,A,B,z,R,M,P,H,T,L,W,J,V,G,N,U,X,Y,_=t(0),q=t.n(_),K=t(16),Q=t.n(K),Z=(t(30),t(5)),$=t(2),nn=t(3),en={dark:!1,body:"#FFFFFF",text:"#0A0A0A",textHeaders:"#000000",nav:"#254826",headline:"#FFFFFF",subHeader:"#000000",aboutBackground:"#FFFFFF",projectsBackground:"#F2F2F2",website:"#254826",footer:"#254826",skills:"#F8F8F8",menu:"#9EBD9F",menuBackground:"#254826"},tn={dark:!0,body:"#1D1D1D",text:"#fff",textHeaders:"#00E0AA",nav:"#1D1D1D",headline:"#00E0AA",subHeader:"#00E0AA",aboutBackground:"#282828",projectsBackground:"#101010",website:"#616161",footer:"#1F1F1F",skills:"#1D1D1D",menu:"#00E0AA",menuBackground:"#282828"},an=Object($.b)(i||(i=Object(nn.a)(["\n* {\n  box-sizing: border-box;\n}\n\n\nhtml {\n  scroll-behavior: smooth;\n\n}\n  html, body {\n    margin: 0;\n    font-family: 'Righteous', cursive;\n    text-align: center;\n  }\n  body {\n    min-height: 100vh;\n    background-color: ",";\n    color: ",";\n  }\n  #root {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n\n\n"])),(function(n){return n.theme.body}),(function(n){return n.theme.text})),cn=t(25),rn=t(20),on=t.n(rn),sn=t(21),dn=t.n(sn),ln=$.c.div(a||(a=Object(nn.a)(["\nwidth: 100%;\nmax-width: ",";\nmargin: 0 auto;\npadding: 0 30px;\n"])),(function(n){return n.width||"1200px"})),bn="screen and (max-width: 960px)",mn="screen and (min-width: 600px)",pn="screen and (min-width: 960px)",hn="screen and (min-width: 1200px)",un=t.p+"static/media/menu.b05e2a4f.svg",jn=t(6),fn=t(22),gn=t(1),xn=$.c.div(c||(c=Object(nn.a)(["\nfont-size: 20px;\nmargin-left: 250px;\ncolor: ",";\ncursor: pointer;\n@media "," {\n    display: none;\n  }\n"])),(function(n){return n.theme.headline}),pn),On=$.c.div(r||(r=Object(nn.a)(["\nposition: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(214, 214, 214, 0.7);\n  z-index: 1000;\n  opacity: ",";\n  pointer-events: none;\n  transition: opacity 0.5s;\n\n  @media "," {\n    display: none;\n  }\n"])),(function(n){return n.menuOpen?1:0}),pn),vn=$.c.img(o||(o=Object(nn.a)(["\nwidth: 25px;\nbackground-color: ",";\n@media "," {\n    display: none;\n  }\n"])),(function(n){return n.theme.menu}),pn),yn=$.c.button(s||(s=Object(nn.a)(["\nmargin-top: 15px;\nheight: 40px;\nbackground-color: ",";\nborder-radius: 2px;\n    outline: 0 none;\n    border: 0 none;\n    display: flex;\n    align-items: center;\n    @media "," {\n    display: none;\n  }\n    \n"])),(function(n){return n.theme.menu}),pn),wn=$.c.a(d||(d=Object(nn.a)(["\n  margin: 5px;\n  font-size: 22px;\n  text-decoration: none;\n  color: white;\n  position: relative;\n  @media ",' {\n    margin: 0 25px 0;\n    \n    &::after {\n      position: absolute;\n      content: "";\n      width: 0%;\n      height: 4px;\n      background-color: whitesmoke;\n      left: 50%;\n      bottom: -10px;\n      transition: all 0.1s ease-in-out;\n    }\n    &:hover::after{\n      left: 0;\n      width: 100%;\n    }\n  }\n'])),pn),kn=$.c.div(l||(l=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\nflex-direction: row;\n\nborder-radius: 5px;\n\n\n@media "," {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 320px;\n  z-index: 1000;\n  padding: 30px 40px 80px 20px;\n  transition: transform .5s;\n  background-color: ",";\n  transform: ",";\n  flex-direction: column;\n}\n\n@media "," {}\n"])),bn,(function(n){return n.theme.menuBackground}),(function(n){return n.menuOpen?"translateX(0%)":"translateX(100%)"}),pn),Sn=Object($.c)(ln)(b||(b=Object(nn.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\n"]))),Fn=$.c.div(m||(m=Object(nn.a)(["\nbackground-color: ",";\ncolor: white;\nposition: fixed;\ntop: 0;\nright: 0;\nleft: 0;\ntransform: translate(0,0);\n/* \n@media "," {\n  position: static;\n} */\n"])),(function(n){return n.theme.nav}),pn),Cn=$.c.div(p||(p=Object(nn.a)(["\n \n"]))),In=$.c.div(h||(h=Object(nn.a)(["\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    padding: 10px 0 10px;\n    \n"]))),En=function(n){var e=n.children,t=Object(_.useState)(!1),i=Object(Z.a)(t,2),a=i[0],c=i[1],r=Object(_.useRef)(null);Object(_.useEffect)((function(){var n=function(n){r.current&&r.current.contains(n.target)||c(!1)};return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)}}),[]);var o=function(){c(!1)};return Object(gn.jsx)(Fn,{children:Object(gn.jsxs)(Sn,{children:[Object(gn.jsxs)(In,{children:[Object(gn.jsx)(Cn,{children:e}),Object(gn.jsx)(gn.Fragment,{children:"Dark-Mode"})]}),Object(gn.jsx)(yn,{onClick:function(){return c(!0)},children:Object(gn.jsx)(vn,{src:un,alt:"Menu"})}),Object(gn.jsx)(On,{menuOpen:a}),Object(gn.jsxs)(kn,{ref:r,menuOpen:a,children:[Object(gn.jsx)(xn,{children:Object(gn.jsx)("span",{onClick:function(){return c(!1)},children:Object(gn.jsx)(jn.a,{icon:fn.a})})}),Object(gn.jsx)(wn,{onClick:o,href:"#aboutme",children:"About"}),Object(gn.jsx)(wn,{onClick:o,href:"#skills",children:"Skills"}),Object(gn.jsx)(wn,{onClick:o,href:"#projects",children:"Projects"}),Object(gn.jsx)(wn,{onClick:o,href:"#contact",children:"Contact"})]})]})})},Dn=t.p+"static/media/iury-foreground.8075a5d3.png",An=t.p+"static/media/iury-background-2.6c1a2dfd.png",Bn=t.p+"static/media/getAWave.eaec60af.png",zn=t.p+"static/media/homemade.5c81f124.png",Rn=t.p+"static/media/Bon-Voyage.e7d07913.png",Mn=t.p+"static/media/Eve-light-theme.e307b410.png",Pn=t(23),Hn=t.n(Pn),Tn=(t(39),t.p+"static/media/javaScript.081325c6.svg"),Ln=t.p+"static/media/html-5.c1bb84e0.svg",Wn=t.p+"static/media/css3.3ec32022.svg",Jn=t.p+"static/media/react.a060cbe8.svg",Vn=t.p+"static/media/node-js.2879fa18.svg",Gn=t.p+"static/media/mongodb.3beac5ba.svg",Nn=t.p+"static/media/npm.8c0606a7.svg",Un=t.p+"static/media/python.026a6268.svg",Xn=t.p+"static/media/django.bd4cd03d.svg",Yn=t.p+"static/media/bootstrap.91aad92a.svg",_n=t.p+"static/media/figma.44ca2c32.svg",qn=t.p+"static/media/github.b2294bcc.svg",Kn=t.p+"static/media/sass.903cef0c.svg",Qn=t.p+"static/media/yarn.8d96d5f3.svg",Zn=[{type:"left",title:"Get'a Wave",description:"I had one week to build a grid-based game using JavaScript, HTML and CSS. My own version of frogger has three different characters, who must navigate the course using the keyboard arrow buttons while avoiding obstacles. The game increases in difficulty after each round.",imageSrc:Bn,url:"https://iuryliberato.github.io/project-1/",github:"https://github.com/iuryliberato/project-1",tags:["JavaScript","CSS","HTML5"]},{type:"right",title:"Bon Voyage",description:"I created an app using an existing  API for locations, and to build the front-end I used React and CSS. The website has 2 main pages, one where you can search and filter destinations, and the second which has more detail about the destination chosen.",imageSrc:Rn,url:"https://iury-api-project.netlify.app/",github:"https://github.com/iuryliberato/Place-App/blob/master/README.md",tags:[]},{type:"left",title:"Homemade Recipes",description:"I made a React App with a Node back-end that uses Express, MongoDB and  Mongoose. Users can create accounts, write recipes, leave reviews including a picture of the recipe they made. They can also search recipes and view user profiles.",imageSrc:zn,url:"",github:"",tags:[]},{type:"right",title:"EVE Events",description:"I made a React app with a Python and Django back-end, React, JavaScript, CSS with Styled-Components in the front-end. Users can register/login manually or register/login with google, switch themes between dark and light mode,  search and filter events, confirm attendance, and create their own events. In their own profile, they can see, edit and delete events that they have created, and also see events that they are attending to.",imageSrc:Mn,url:"",github:"",tags:[]}],$n=[{name:"HTML5",imageSrc:Ln},{name:"CSS3",imageSrc:Wn},{name:"JavaScript",imageSrc:Tn},{name:"React",imageSrc:Jn},{name:"NodeJs",imageSrc:Vn},{name:"MongoDB",imageSrc:Gn},{name:"NPM",imageSrc:Nn},{name:"Python",imageSrc:Un},{name:"Django",imageSrc:Xn},{name:"Bootstrap",imageSrc:Yn},{name:"Figma",imageSrc:_n},{name:"GitHub",imageSrc:qn},{name:"Sass",imageSrc:Kn},{name:"Yarn",imageSrc:Qn},{name:"Express",imageSrc:Vn},{name:"Mongoose",imageSrc:Gn},{name:"Styled Components",imageSrc:Wn}],ne=Object($.c)(ln)(u||(u=Object(nn.a)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\n"]))),ee=$.c.div(j||(j=Object(nn.a)(["\nmargin: 20px 17px;\n"]))),te=$.c.div(f||(f=Object(nn.a)([" \nbackground-color: ",";\npadding: 100px 0;\n\n"])),(function(n){return n.theme.skills})),ie=$.c.img(g||(g=Object(nn.a)([" \nmax-width: 48px;\n"]))),ae=$.c.div(x||(x=Object(nn.a)([" \n\n"]))),ce=$.c.div(O||(O=Object(nn.a)(["\nmargin-bottom: 50px;\ndisplay: flex;\nflex-direction: column;\n\n@media "," {\n  flex-direction: row;\n}\n@media "," {\nflex-direction: row;}\n\n@media "," {\nflex-direction: row;\n} \n"])),mn,pn,hn),re=$.c.div(v||(v=Object(nn.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"]))),oe=$.c.a(y||(y=Object(nn.a)(["\n  font: inherit;\n  color: inherit;\n  border-radius: 7px;\n  outline: 0 none;\n  border: 0 none;\n  font-weight: bold;\n  cursor: pointer;\n  flex: 1;\n  text-align: center;\n  text-decoration: none;\n  padding: 15px 0;\n  font-family: 'Roboto Condensed', sans-serif;\n  transition: transform 150ms;\n  &:hover{\n    transform: scale(1.10);\n  }\n"]))),se=Object($.c)(oe)(w||(w=Object(nn.a)(["\nbackground-color: #E2E2E2;\ncolor: black;\nmargin-top: 25px;\n@media "," {\n  margin: 10px 10px 0;\n}\n@media "," {\n  margin: 10px 10px 0;\n}\n@media "," {\n  margin: 10px 10px 0;\n  }\n"])),mn,pn,hn),de=Object($.c)(oe)(k||(k=Object(nn.a)(["\nbackground-color: ",";\ncolor: white;\nmargin-top: 10px;\n\n"])),(function(n){return n.theme.website})),le=$.c.div(S||(S=Object(nn.a)(["\nfont-size: 18px;\nfont-family: 'Roboto Condensed', sans-serif;\nflex: 1;\n"]))),be=$.c.div(F||(F=Object(nn.a)(["\nfont-size: 30px;\ndisplay: flex;\njustify-content: center;\nmargin: 30px;\nfont-family: 'Roboto Condensed', sans-serif;\nfont-weight: bold;\n"]))),me=$.c.div(C||(C=Object(nn.a)(["\nflex: 1;\n"]))),pe=$.c.img(I||(I=Object(nn.a)(["\nwidth: 100%;\n"]))),he=$.c.div(E||(E=Object(nn.a)(["\nbackground-color: ",";\npadding: 20px;\ndisplay: flex;\nborder-radius: 15px;\nmargin: 30px 0;\nflex-direction: column;\nz-index: 0;\n\n@media "," {\n  flex-direction: ",";\n}\n\n/* @media "," {\n  background:red;\n}\n\n@media "," {\n  background:yellow;\n} */\n"])),(function(n){return n.theme.aboutBackground}),pn,(function(n){return"left"===n.type?"row":"row-reverse"}),pn,hn),ue=$.c.div(D||(D=Object(nn.a)(["\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nalign-items: center;\nbackground-color: ",";\npadding: 100px 0;\n"])),(function(n){return n.theme.projectsBackground})),je=$.c.div(A||(A=Object(nn.a)(["\nfont-size: 20px;\nmargin: 10px 0;\nfont-family: 'Roboto Condensed', sans-serif;\n"]))),fe=$.c.div(B||(B=Object(nn.a)(["\nfont-size: 50px;\ncolor: ",";\nmargin: 0 0 20px;\ndisplay: flex;\njustify-content: center;\n"])),(function(n){return n.theme.subHeader})),ge=$.c.div(z||(z=Object(nn.a)(["\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nalign-items: center;\nbackground-color: ",";\npadding: 100px 0;\n"])),(function(n){return n.theme.aboutBackground})),xe=$.c.p(R||(R=Object(nn.a)(["\ncolor: white;\nfont-size: 20px;\nletter-spacing: 1px;\n"]))),Oe=$.c.div(M||(M=Object(nn.a)(["\ncolor: ",";\nfont-size: 45px;\n\n"])),(function(n){return n.theme.headline})),ve=$.c.img(P||(P=Object(nn.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nheight: 100%;\nwidth: 100%;\n"]))),ye=Object($.c)(ve)(H||(H=Object(nn.a)(["\n\n"]))),we=Object($.c)(ve)(T||(T=Object(nn.a)(["\ntransition: transform 0.1s;\n&:hover{\ntransform: scale(1.1) translateY(-8px);\n}\n"]))),ke=$.c.div(L||(L=Object(nn.a)(["\nwidth: 200px;\nheight: 200px;\noverflow: hidden;\nborder-radius: 100px;\nmargin: 0 20px 20px;\nposition: relative;\n"]))),Se=$.c.div(W||(W=Object(nn.a)(["\nbackground-color: ",";\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nalign-items: center;\nheight: calc(100vh - 80px - 30px);\n\n"])),(function(n){return n.theme.nav})),Fe=Object($.c)(ln)(J||(J=Object(nn.a)(["\n  display: flex;\njustify-content: center;\nflex-direction: column;\nalign-items: center;\n  "]))),Ce=function(){return Object(gn.jsxs)(gn.Fragment,{children:[Object(gn.jsx)(Se,{children:Object(gn.jsxs)(Fe,{width:"700px",children:[Object(gn.jsxs)(ke,{children:[Object(gn.jsx)(ye,{src:An,alt:"ProfilePhoto"}),Object(gn.jsx)(we,{src:Dn,alt:"ProfilePhoto"})]}),Object(gn.jsx)(Oe,{children:"Ola, I'm Iury,"}),Object(gn.jsx)(xe,{children:"a Brazilian Web Developer living and working in London. I'm currently looking for my first role after completing General Aseembly's Bootcamp."})]})}),Object(gn.jsx)(ge,{id:"aboutme",children:Object(gn.jsxs)(ln,{width:"700px",children:[Object(gn.jsx)(fe,{children:"About Me"}),Object(gn.jsx)(je,{children:"I\u2019m Iury, a Web Developer based in London. Having previously worked in the hospitality industry for seven years, where I learned to be a valuable team member and solve problems under pressure, I felt confident and ready for a career change."}),Object(gn.jsx)(je,{children:"After teaching myself some coding online, I created my own personal website which allowed me to discover my passion for Web Development. To prepare for my first job as a Web Developer, I joined an immersive software engineering bootcamp with General Assembly."}),Object(gn.jsx)(je,{children:"I found love in coding because it allows me to be creative, curious and constantly learning new skills. After 10 years without being in a class, learning how to code made me feel excited about how many things I\u2019m capable of achieving ."}),Object(gn.jsx)(je,{children:"I am now ready for my first role as a web developer in a company where I can share my creativity, lively personality and learn new skills in a job that pushes me to become a great developer"}),Object(gn.jsx)(je,{})]})}),Object(gn.jsxs)(te,{id:"skills",children:[Object(gn.jsx)(fe,{children:"Technologies and Skills"}),Object(gn.jsx)(ne,{width:"900px",children:$n.map((function(n,e){return Object(gn.jsxs)(ee,{children:[Object(gn.jsx)(ie,{src:n.imageSrc,alt:"HTML5"}),Object(gn.jsx)(ae,{children:n.name})]},e)}))})]}),Object(gn.jsxs)(ue,{id:"projects",children:[Object(gn.jsx)(fe,{children:"Projects"}),Object(gn.jsx)(ln,{children:Zn.map((function(n,e){return Object(gn.jsx)(Hn.a,{animateIn:"fadeInRight",animateOnce:!0,children:Object(gn.jsxs)(he,{type:n.type,children:[Object(gn.jsx)(me,{children:Object(gn.jsx)(pe,{src:n.imageSrc,alt:"ProfilePhoto"})}),Object(gn.jsxs)(re,{children:[Object(gn.jsx)(be,{children:n.title}),Object(gn.jsx)(le,{children:n.description}),Object(gn.jsxs)(ce,{children:[Object(gn.jsx)(se,{href:n.github,target:"_blank",children:"VIEW SOURCE CODE"}),Object(gn.jsx)(de,{href:n.url,target:"_blank",children:"VIEW WEBSITE"})]})]})]})},e)}))})]})]})},Ie=t(13),Ee=t(24),De=$.c.div(V||(V=Object(nn.a)(["\nfont-family: 'Roboto Condensed', sans-serif;\ndisplay: flex;\njustify-content: center;\n"]))),Ae=$.c.div(G||(G=Object(nn.a)(["\nfont-size: 30px;\ndisplay: flex;\njustify-content: center;\nmargin: 30px 20px 10px;\ncolor: ",";\n"])),(function(n){return n.theme.headline})),Be=$.c.a(N||(N=Object(nn.a)(["\nfont-size: 40px;\ncolor: white;\nmargin: 0 30px 20px;\ntransition: transform 150ms;\n        &:hover{\n        transform: scale(1.55);\n        }\n"]))),ze=$.c.div(U||(U=Object(nn.a)(["\nmargin: 20px;\ndisplay: flex;\njustify-content: center;\n"]))),Re=$.c.div(X||(X=Object(nn.a)(["\nfont-size: 17px;\npadding: 0 50px 30px;\nfont-family: 'Roboto Condensed', sans-serif;\nfont-weight: bold;\n"]))),Me=$.c.div(Y||(Y=Object(nn.a)(["\nbackground-color: ",";\ncolor: white;\nheight: 300px;\ndisplay: flex;\nflex-direction: column;\n"])),(function(n){return n.theme.footer})),Pe=function(){return Object(gn.jsxs)(Me,{id:"contact",children:[Object(gn.jsx)(Ae,{children:"Contact me"}),Object(gn.jsxs)(ze,{children:[Object(gn.jsx)(Be,{target:"blank",href:"mailto:iuryliberato@hotmail.com",children:Object(gn.jsx)(jn.a,{icon:Ee.a})}),Object(gn.jsx)(Be,{target:"blank",href:"https://www.linkedin.com/in/iury-liberato-475a46b1/",children:Object(gn.jsx)(jn.a,{icon:Ie.b})}),Object(gn.jsx)(Be,{target:"blank",href:"https://github.com/iuryliberato",children:Object(gn.jsx)(jn.a,{icon:Ie.a})})]}),Object(gn.jsx)(Re,{children:"I'm currently avaible to work, contact me for a chat!"}),Object(gn.jsx)(De,{children:" \xa9 Iury Liberato 2021"})]})};var He=function(){var n=on()("theme","dark"),e=Object(Z.a)(n,2),t=e[0],i=e[1];return Object(gn.jsxs)($.a,{theme:"light"===t?en:tn,children:[Object(gn.jsx)(an,{}),Object(gn.jsxs)(cn.a,{children:[Object(gn.jsx)(Ce,{}),Object(gn.jsx)(En,{children:Object(gn.jsx)(dn.a,{offColor:"#D3D3D3",onColor:"#00E0AA",activeBoxShadow:"0 3 2px 3px #FFFFFF",onChange:function(){i("light"===t?"dark":"light")},checked:"dark"===t})}),Object(gn.jsx)(Pe,{})]})]})},Te=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),c(n),r(n)}))};Q.a.render(Object(gn.jsx)(q.a.StrictMode,{children:Object(gn.jsx)(He,{})}),document.getElementById("root")),Te()}},[[40,1,2]]]);
//# sourceMappingURL=main.aba181a9.chunk.js.map