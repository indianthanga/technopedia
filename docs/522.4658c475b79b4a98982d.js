(self.webpackChunktechnopedia=self.webpackChunktechnopedia||[]).push([[522],{2522:(n,t,e)=>{"use strict";e.r(t),e.d(t,{TechnopediaModule:()=>q});var o=e(1116),r=e(1522),l=e(8619),c=e(5843),i=e(3834);function a(n,t){1&n&&(l.TgZ(0,"ul",29),l.TgZ(1,"li"),l.TgZ(2,"a"),l.TgZ(3,"span",30),l._uU(4,"English"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(5,"li"),l.TgZ(6,"a"),l.TgZ(7,"span",30),l._uU(8,"Tamil"),l.qZA(),l.qZA(),l.qZA(),l.qZA())}const g=function(){return["/technopedia/profile"]};function s(n,t){1&n&&(l.TgZ(0,"ul",31),l.TgZ(1,"li",32),l.TgZ(2,"a"),l.TgZ(3,"span",30),l._uU(4,"Profile"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&n&&(l.xp6(1),l.Q6J("routerLink",l.DdM(1,g)))}function u(n,t){1&n&&(l.TgZ(0,"ul",29),l.TgZ(1,"li"),l.TgZ(2,"a"),l.TgZ(3,"span",30),l._uU(4,"English"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(5,"li"),l.TgZ(6,"a"),l.TgZ(7,"span",30),l._uU(8,"Tamil"),l.qZA(),l.qZA(),l.qZA(),l.qZA())}function d(n,t){if(1&n){const n=l.EpF();l.TgZ(0,"li",35),l.NdJ("click",function(){const t=l.CHM(n).$implicit;return l.oxw(2).changeColor(t.index)}),l.TgZ(1,"a"),l.TgZ(2,"span",30),l._uU(3),l.qZA(),l.qZA(),l.qZA()}if(2&n){const n=t.$implicit;l.Tol(n.value),l.xp6(3),l.Oqu(n.name)}}function p(n,t){if(1&n&&(l.TgZ(0,"ul",33),l.YNc(1,d,4,4,"li",34),l.qZA()),2&n){const n=l.oxw();l.xp6(1),l.Q6J("ngForOf",n.colorList)}}function h(n,t){1&n&&(l.TgZ(0,"ul",31),l.TgZ(1,"li",32),l.TgZ(2,"a"),l.TgZ(3,"span",30),l._uU(4,"Profile"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&n&&(l.xp6(1),l.Q6J("routerLink",l.DdM(1,g)))}const _=function(){return["/technopedia/home"]},C=function(){return["active"]},M=function(){return["active-text"]},m=function(){return["/technopedia/contents"]},f=function(){return["/technopedia/credits"]};let P=(()=>{class n{constructor(n,t){this.document=n,this.sharedService=t,this.title="Technopedia",this.languageDisplay=!1,this.authorDisplay=!1,this.colorDisplay=!1,this.menuDisplay=!1,this.fullScreen=!1,this.colorList=[],this.element="",this.colorList=c.j.colors,this.colorName=t.getColorName()}changeColor(n){this.sharedService.setColorIndex(n)}onDocumentClick(){this.authorDisplay=!1,this.languageDisplay=!1,this.colorDisplay=!1}ngOnInit(){this.element=this.document.documentElement}fullScreenToggle(){this.fullScreen=!this.fullScreen,this.fullScreen?this.openFullScreen():this.closeFullScreen()}openFullScreen(){this.element.requestFullscreen?this.element.requestFullscreen():this.element.mozRequestFullScreen?this.element.mozRequestFullScreen():this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen():this.element.msRequestFullscreen&&this.element.msRequestFullscreen()}closeFullScreen(){this.document.exitFullscreen?this.document.exitFullscreen():this.document.mozCancelFullScreen?this.document.mozCancelFullScreen():this.document.webkitExitFullscreen?this.document.webkitExitFullscreen():this.document.msExitFullscreen&&this.document.msExitFullscreen()}fullscreenmode(){this.fullScreen=!!(this.document.fullscreenElement||this.document.mozFullScreenElement||this.document.webkitFullscreenElement||this.document.msFullscreenElement)}}return n.\u0275fac=function(t){return new(t||n)(l.Y36(o.K0),l.Y36(i.F))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-header"]],hostBindings:function(n,t){1&n&&l.NdJ("click",function(n){return t.onDocumentClick(n)},!1,l.evT)("fullscreenchange",function(n){return t.fullscreenmode(n)},!1,l.evT)("webkitfullscreenchange",function(n){return t.fullscreenmode(n)},!1,l.evT)("mozfullscreenchange",function(n){return t.fullscreenmode(n)},!1,l.evT)("MSFullscreenChange",function(n){return t.fullscreenmode(n)},!1,l.evT)},decls:59,vars:29,consts:[[1,"navbar","navbar-expand-lg","navbar-custom","m-0","p-0","h-70px","border-bottom-1px-solid-light-grey"],[1,"container-fluid","h-100pt","p-0","border-bottom-1px-solid-light-grey"],["href","#",1,"navbar-brand","navbar-title","ps-3"],["src","assets/images/logo.png"],[1,"navbar-nav","ms-auto","small-screen","navbar-no-scroll"],[1,"nav-item",3,"click"],["languageDropDown",""],[1,"nav-link","ms-2","me-2"],[1,"fas","fa-language"],["class","language-dropdown",4,"ngIf"],[1,"nav-item"],[1,"fas","fa-expand"],[1,"nav-item","author",3,"click"],["authorDropDown",""],["src","assets/images/author.jpg"],["class","user-dropdown",4,"ngIf"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarScroll","aria-controls","navbarScroll","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"fas","fa-bars"],["id","navbarScroll",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","my-2","my-lg-0","navbar-collapsive"],[1,"nav-item",3,"routerLink","routerLinkActive"],[1,"nav-link","ms-2","me-3"],[1,"fas","fa-home","m-2",3,"routerLinkActive"],[1,"",3,"routerLinkActive"],[1,"fas","fa-atom","m-2",3,"routerLinkActive"],[1,"fas","fa-thumbs-up","m-2",3,"routerLinkActive"],[1,"navbar-nav","ms-auto","large-screen","navbar-no-scroll"],[1,"fas","fa-palette"],["class","color-dropdown",4,"ngIf"],[1,"language-dropdown"],[1,""],[1,"user-dropdown"],[3,"routerLink"],[1,"color-dropdown"],[3,"class","click",4,"ngFor","ngForOf"],[3,"click"]],template:function(n,t){1&n&&(l.TgZ(0,"nav",0),l.TgZ(1,"div",1),l.TgZ(2,"a",2),l.TgZ(3,"span"),l._uU(4,"Techn"),l.qZA(),l._UZ(5,"img",3),l.TgZ(6,"span"),l._uU(7,"pedia"),l.qZA(),l.qZA(),l.TgZ(8,"ul",4),l.TgZ(9,"li",5,6),l.NdJ("click",function(n){return t.languageDisplay=!t.languageDisplay,t.authorDisplay=!1,t.colorDisplay=!1,n.stopPropagation()}),l.TgZ(11,"a",7),l._UZ(12,"i",8),l.qZA(),l.YNc(13,a,9,0,"ul",9),l.qZA(),l.TgZ(14,"li",10),l.TgZ(15,"a",7),l._UZ(16,"i",11),l.qZA(),l.qZA(),l.TgZ(17,"li",12,13),l.NdJ("click",function(n){return t.authorDisplay=!t.authorDisplay,t.languageDisplay=!1,t.colorDisplay=!1,n.stopPropagation()}),l.TgZ(19,"a",7),l._UZ(20,"img",14),l.qZA(),l.YNc(21,s,5,2,"ul",15),l.qZA(),l.qZA(),l.TgZ(22,"button",16),l._UZ(23,"i",17),l.qZA(),l.TgZ(24,"div",18),l.TgZ(25,"ul",19),l.TgZ(26,"li",20),l.TgZ(27,"a",21),l._UZ(28,"i",22),l.TgZ(29,"span",23),l._uU(30,"Home"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(31,"li",20),l.TgZ(32,"a",21),l._UZ(33,"i",24),l.TgZ(34,"span",23),l._uU(35,"Contents"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(36,"li",20),l.TgZ(37,"a",21),l._UZ(38,"i",25),l.TgZ(39,"span",23),l._uU(40,"Credits"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(41,"ul",26),l.TgZ(42,"li",5,6),l.NdJ("click",function(n){return t.languageDisplay=!t.languageDisplay,t.authorDisplay=!1,t.colorDisplay=!1,n.stopPropagation()}),l.TgZ(44,"a",7),l._UZ(45,"i",8),l.qZA(),l.YNc(46,u,9,0,"ul",9),l.qZA(),l.TgZ(47,"li",5),l.NdJ("click",function(n){return t.colorDisplay=!t.colorDisplay,t.languageDisplay=!1,t.authorDisplay=!1,n.stopPropagation()}),l.TgZ(48,"a",7),l._UZ(49,"i",27),l.qZA(),l.YNc(50,p,2,1,"ul",28),l.qZA(),l.TgZ(51,"li",5),l.NdJ("click",function(){return t.fullScreenToggle()}),l.TgZ(52,"a",7),l._UZ(53,"i",11),l.qZA(),l.qZA(),l.TgZ(54,"li",12,13),l.NdJ("click",function(n){return t.authorDisplay=!t.authorDisplay,t.languageDisplay=!1,t.colorDisplay=!1,n.stopPropagation()}),l.TgZ(56,"a",7),l._UZ(57,"img",14),l.qZA(),l.YNc(58,h,5,2,"ul",15),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&n&&(l.xp6(13),l.Q6J("ngIf",t.languageDisplay),l.xp6(8),l.Q6J("ngIf",t.authorDisplay),l.xp6(5),l.Q6J("routerLink",l.DdM(17,_))("routerLinkActive",l.DdM(18,C)),l.xp6(2),l.Q6J("routerLinkActive",l.DdM(19,M)),l.xp6(1),l.Q6J("routerLinkActive",l.DdM(20,M)),l.xp6(2),l.Q6J("routerLink",l.DdM(21,m))("routerLinkActive",l.DdM(22,C)),l.xp6(2),l.Q6J("routerLinkActive",l.DdM(23,M)),l.xp6(1),l.Q6J("routerLinkActive",l.DdM(24,M)),l.xp6(2),l.Q6J("routerLink",l.DdM(25,f))("routerLinkActive",l.DdM(26,C)),l.xp6(2),l.Q6J("routerLinkActive",l.DdM(27,M)),l.xp6(1),l.Q6J("routerLinkActive",l.DdM(28,M)),l.xp6(7),l.Q6J("ngIf",t.languageDisplay),l.xp6(4),l.Q6J("ngIf",t.colorDisplay),l.xp6(8),l.Q6J("ngIf",t.authorDisplay))},directives:[o.O5,r.rH,r.Od,o.sg],styles:[".color-rebecca-blue[_ngcontent-%COMP%]{color:#639!important}.navbar[_ngcontent-%COMP%]{position:fixed;width:100%;z-index:11111!important;box-shadow:0 0 0 0 #0003,0 0 10px 0 #00000030}.navbar-collapsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:70px!important}.navbar-title[_ngcontent-%COMP%]{font-size:1.8rem;color:#333;font-weight:700;border-left:1px solid #ddd!important}.navbar-title[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{animation:icon-move 1s}.navbar-toggler[_ngcontent-%COMP%]{border:0;outline:0;box-shadow:none}.navbar-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#639}.navbar-no-scroll[_ngcontent-%COMP%]{flex-direction:row}.navbar-no-scroll[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#639}#navbarScroll[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navbar-no-scroll[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{line-height:55px;font-size:1.2rem}#navbarScroll[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .navbar-no-scroll[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;border-left:1px solid #ddd!important}.navbar-no-scroll[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#639}.navbar-no-scroll[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}#navbarScroll[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#639}#navbarScroll[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], #navbarScroll[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}#navbarScroll[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#639}#navbarScroll[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#639;font-weight:700}#navbarScroll[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{animation:icon-move 1s}.navbar-no-scroll[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:25px;border:2px solid #639}.navbar-no-scroll[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:2px solid #fff}.color-dropdown[_ngcontent-%COMP%], .language-dropdown[_ngcontent-%COMP%], .user-dropdown[_ngcontent-%COMP%]{list-style-type:none;padding:0;position:absolute;background-color:#fff;display:block;width:160px;top:72px;transform-origin:100% 0;opacity:1;transform:scaleX(1) scaleY(1);color:#639;z-index:111111}.language-dropdown[_ngcontent-%COMP%]{right:165px;z-index:10001}.user-dropdown[_ngcontent-%COMP%]{right:0;z-index:10001}.color-dropdown[_ngcontent-%COMP%]{right:112px;z-index:10001}.color-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .language-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:40px;border:1px solid #ddd;cursor:pointer}.color-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .language-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;line-height:40px!important;padding-left:10px;color:#639}.color-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff!important}.active[_ngcontent-%COMP%], .color-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .language-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#639}.active-text[_ngcontent-%COMP%]{color:#fff!important}.color-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .language-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.navbar-title[_ngcontent-%COMP%]{height:100%;line-height:55px}.navbar-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;margin-bottom:5px}#navbarScroll[_ngcontent-%COMP%]{z-index:10001}@media only screen and (max-width:600px){.large-screen[_ngcontent-%COMP%]{display:none}.small-screen[_ngcontent-%COMP%]{display:flex}.author[_ngcontent-%COMP%]{border-right:1px solid #ddd}#navbarScroll[_ngcontent-%COMP%]   .navbar-collapsive[_ngcontent-%COMP%]{height:auto!important;margin:0!important;background-color:#fff}#navbarScroll[_ngcontent-%COMP%]   .navbar-collapsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}}@media only screen and (min-width:600px){.large-screen[_ngcontent-%COMP%]{display:none}.small-screen[_ngcontent-%COMP%]{display:flex}.author[_ngcontent-%COMP%]{border-right:1px solid #ddd}#navbarScroll[_ngcontent-%COMP%]   .navbar-collapsive[_ngcontent-%COMP%]{height:auto!important;margin:0!important;background-color:#fff}}@media only screen and (min-width:768px){.large-screen[_ngcontent-%COMP%]{display:none}.small-screen[_ngcontent-%COMP%]{display:flex;height:69px}.author[_ngcontent-%COMP%]{border-right:1px solid #ddd}#navbarScroll[_ngcontent-%COMP%]   .navbar-collapsive[_ngcontent-%COMP%]{height:auto!important;margin:0!important;background-color:#fff}}@media only screen and (min-width:992px){.large-screen[_ngcontent-%COMP%]{display:flex;height:70px}.small-screen[_ngcontent-%COMP%]{display:none;height:69px}.author[_ngcontent-%COMP%]{border-right:0}#navbarScroll[_ngcontent-%COMP%]   .navbar-collapsive[_ngcontent-%COMP%]{height:70px!important;margin-left:auto!important;background-color:#fff}}@media only screen and (min-width:1200px){.large-screen[_ngcontent-%COMP%]{display:flex;height:70px}.small-screen[_ngcontent-%COMP%]{display:none}.author[_ngcontent-%COMP%]{border-right:0}#navbarScroll[_ngcontent-%COMP%]   .navbar-collapsive[_ngcontent-%COMP%]{height:70px!important;margin-left:auto!important;background-color:#fff}}"]}),n})();const O=function(){return["/technopedia/home"]},Z=function(){return["/technopedia/contents"]},v=function(){return["/technopedia/credits"]},b=function(){return["/technopedia/profile"]};let x=(()=>{class n{constructor(){this.year=0,this.year=(new Date).getFullYear()}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-footer"]],decls:28,vars:9,consts:[[1,"container-fluid","bg-color-theme","footer"],[1,"row","h-40px"],[1,"row"],[1,"col-12","col-xs-12","col-sm-12","col-md-4","col-lg-4"],[1,"col-12","col-xs-12","col-sm-12","col-md-4","col-lg-4","social-icons"],[1,"fab","fa-youtube","p-3"],[1,"fab","fa-facebook-f","p-3"],[1,"fab","fa-twitter","p-3"],[1,"fab","fa-instagram","p-3"],[1,"col-12","col-xs-12","col-sm-12","col-md-3","col-lg-3"],[1,"col-12","col-xs-12","col-sm-12","col-md-6","col-lg-6","menu"],[1,"p-3",3,"routerLink"],[1,"col-12","col-xs-12","col-sm-12","col-md-4","col-lg-4","copyright"],[1,"p-3"]],template:function(n,t){1&n&&(l.TgZ(0,"div",0),l._UZ(1,"div",1),l.TgZ(2,"div",2),l._UZ(3,"div",3),l.TgZ(4,"div",4),l._UZ(5,"i",5),l._UZ(6,"i",6),l._UZ(7,"i",7),l._UZ(8,"i",8),l.qZA(),l._UZ(9,"div",3),l.qZA(),l.TgZ(10,"div",2),l._UZ(11,"div",9),l.TgZ(12,"div",10),l.TgZ(13,"h5",11),l._uU(14,"Home"),l.qZA(),l.TgZ(15,"h5",11),l._uU(16,"Contents"),l.qZA(),l.TgZ(17,"h5",11),l._uU(18,"Credits"),l.qZA(),l.TgZ(19,"h5",11),l._uU(20,"Profile"),l.qZA(),l.qZA(),l._UZ(21,"div",9),l.qZA(),l.TgZ(22,"div",2),l._UZ(23,"div",3),l.TgZ(24,"div",12),l.TgZ(25,"h5",13),l._uU(26),l.qZA(),l.qZA(),l._UZ(27,"div",3),l.qZA(),l.qZA()),2&n&&(l.xp6(13),l.Q6J("routerLink",l.DdM(5,O)),l.xp6(2),l.Q6J("routerLink",l.DdM(6,Z)),l.xp6(2),l.Q6J("routerLink",l.DdM(7,v)),l.xp6(2),l.Q6J("routerLink",l.DdM(8,b)),l.xp6(7),l.hij("\xa9 ",t.year," Technopedia. All rights reserved."))},directives:[r.rH],styles:[".color-rebecca-blue[_ngcontent-%COMP%]{color:#639!important}.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2.5rem;cursor:pointer;color:#fff}.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{animation:icon-move 1s}.footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]{text-align:center}.footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:inline-block;color:#fff}.footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{display:inline;cursor:pointer;font-weight:700}.footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:hover{text-decoration:underline}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff;text-align:center}"]}),n})();const A=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-technopedia"]],decls:3,vars:0,template:function(n,t){1&n&&(l._UZ(0,"app-header"),l._UZ(1,"router-outlet"),l._UZ(2,"app-footer"))},directives:[P,r.lC,x],styles:[""]}),n})(),children:[{path:"home",loadChildren:()=>Promise.all([e.e(693),e.e(363)]).then(e.bind(e,3363)).then(n=>n.HomeModule)},{path:"contents",loadChildren:()=>Promise.all([e.e(693),e.e(634)]).then(e.bind(e,2634)).then(n=>n.ContentsModule)},{path:"contents/:topic",loadChildren:()=>Promise.all([e.e(693),e.e(634)]).then(e.bind(e,2634)).then(n=>n.ContentsModule)},{path:"contents/:topic/:year",loadChildren:()=>Promise.all([e.e(693),e.e(634)]).then(e.bind(e,2634)).then(n=>n.ContentsModule)},{path:"contents/:topic/:year/:month",loadChildren:()=>Promise.all([e.e(693),e.e(634)]).then(e.bind(e,2634)).then(n=>n.ContentsModule)},{path:"contents/:topic/:year/:month/:content",loadChildren:()=>Promise.all([e.e(693),e.e(634)]).then(e.bind(e,2634)).then(n=>n.ContentsModule)},{path:"credits",loadChildren:()=>e.e(171).then(e.bind(e,171)).then(n=>n.CreditsModule)},{path:"profile",loadChildren:()=>e.e(526).then(e.bind(e,526)).then(n=>n.ProfileModule)}]}];let T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[r.Bz.forChild(A)],r.Bz]}),n})(),q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[o.ez,T]]}),n})()}}]);