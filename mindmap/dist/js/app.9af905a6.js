(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"26d9":function(t,e,n){"use strict";var a=n("53fd"),o=n.n(a);o.a},"53fd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("db4d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("PinBoard"),n("ToolBox")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"PinBoard",attrs:{id:"PinBoard"},on:{mousemove:t.moveCursor}},[t._l(t.LinkData,(function(e,a){return n("div",{key:a,staticClass:"lineDraw",style:t.lineStyle(a)})})),t._l(t.BoardData,(function(e,a){var o=this;return n("div",{key:a},[n("div",{class:["box",{dragged:t.dragged}],style:t.itemStyle(e),attrs:{tabindex:"0",id:a},on:{focus:function(n){return t.onSetItem(n,e)},focusout:function(e){t.setitem=null},keydown:t.KeyMove,mouseenter:function(n){return t.checkLink(n,e)},mouseleave:function(n){return t.clearLink(n,e)},click:function(n){return t.checkLink(n,e)},touchstart:function(n){return t.checkLink(n,e)}}},[n("div",{directives:[{name:"dragged",rawName:"v-dragged",value:t.onDragged,expression:"onDragged"}],staticClass:"handle",on:{mousedown:function(n){return t.onSetItem(n,e)},touchstart:function(n){return t.onSetItem(n,e)}}},[n("i",{staticClass:"material-icons"},[t._v("drag_indicator")])]),n("div",{staticClass:"linker",on:{mousedown:function(n){return t.onSetLinkStart(n,e)},touchstart:function(n){return t.onSetLinkStart(n,e)}}},[n("i",{staticClass:"material-icons"},[t._v("insert_link")])]),"note"===e.type?n("div",[n("textarea-autosize",{staticClass:"textarea",attrs:{placeholder:"Type something here...",change:t.updateItem(e),focus:function(){o.setitem=null}},model:{value:t.BoardData[e.uuid].content,callback:function(n){t.$set(t.BoardData[e.uuid],"content",n)},expression:"BoardData[item.uuid].content"}})],1):t._e(),"image"===e.type?n("div",[""!==e.content?n("img",{attrs:{src:e.content}}):t._e(),""===e.content?n("svg",{attrs:{version:"1.1",id:"preview-placeholder",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",viewBox:"0 0 30 30","enable-background":"new 0 0 30 30","xml:space":"preserve"}},[n("rect",{attrs:{fill:"#575655",width:"30",height:"30"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"9,19 12,16 13,17 16,14 21,19 "}}),n("circle",{attrs:{fill:"#FFFFFF",cx:"12",cy:"13",r:"1"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M7,9v12h16V9H7z M22,20H8V10h14V20z"}})]):t._e(),n("input",{staticClass:"ImageUpload",attrs:{type:"file",name:"ImageUpload"},on:{change:function(n){return t.GoImage(n,e)}}})]):t._e()])])})),n("div",{directives:[{name:"show",rawName:"v-show",value:t.linking,expression:"linking"}],attrs:{id:"coupontooltip"}},[n("i",{staticClass:"material-icons"},[t._v("timeline")])])],2)},s=[],l=(n("fb6a"),{computed:{BoardData:function(){return this.$store.state.BoardData},LinkData:function(){return this.$store.state.LinkData}},data:function(){return{dragged:!1,setitem:!1,setLinkStart:!1,linking:!1}},methods:{moveCursor:function(t){var e=document.getElementById("coupontooltip"),n=document.getElementById("PinBoard");e.style.left=t.pageX+n.scrollLeft+10+"px",e.style.top=t.pageY+n.scrollTop+10+"px"},lineStyle:function(t){var e={top:parseInt(this.BoardData[this.LinkData[t].start].top,10),left:parseInt(this.BoardData[this.LinkData[t].start].left,10),width:600,height:25},n={top:parseInt(this.BoardData[this.LinkData[t].end].top,10),left:parseInt(this.BoardData[this.LinkData[t].end].left,10),width:600,height:25},a=e.left+e.width/2,o=e.top+e.height/2,i=n.left+n.width/2,r=n.top+n.height/2,s=Math.sqrt((i-a)*(i-a)+(r-o)*(r-o)),l=(a+i)/2-s/2,c=(o+r)/2-1,u=Math.atan2(o-r,a-i)*(180/Math.PI),d={top:c+"px",left:l+"px",width:s+"px",transform:"rotate("+u+"deg)"};return d},GoImage:function(t,e){var n=new FileReader,a=/^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;n.onload=function(t){var n=new Image;n.onload=function(){var t=document.createElement("canvas"),a=t.getContext("2d"),o="300",i=n.height/(n.width/o);t.width=o,t.height=i,a.drawImage(n,0,0,n.width,n.height,0,0,t.width,t.height),e.content=t.toDataURL()},n.src=t.target.result};var o=t.srcElement;if(0!==o.files.length){var i=o.files[0];a.test(i.type)?(n.readAsDataURL(i),canvas=null):alert("Please select a valid image.")}},itemStyle:function(t){var e="left : "+t.left+";top : "+t.top+";";return e},onSetItem:function(t,e){t.preventDefault(),this.setitem=e},onSetLinkStart:function(t,e){this.setLinkStart||this.setLinkStart===e.uuid?(this.$store.commit("AddLink",{start:this.setLinkStart,end:e.uuid}),this.setLinkStart=null,this.linking=!1):(this.setLinkStart=e.uuid,this.linking=!0)},checkLink:function(t,e){t.srcElement.classList.remove("linkposs"),this.setLinkStart&&e.uuid!==this.setLinkStart&&document.getElementById(e.uuid).classList.add("linkposs")},clearLink:function(t,e){t.srcElement.classList.remove("linkposs")},updateItem:function(t){this.$store.commit("UpdateBoardItem",t)},KeyMove:function(t,e){if(this.setitem){var n=null,a=null;switch(t.code){case"ArrowRight":n=10;break;case"ArrowLeft":n=-10;break;case"ArrowDown":a=10;break;case"ArrowUp":a=-10;break;default:}if(n||a){var o=t.srcElement,i=+window.getComputedStyle(o)["left"].slice(0,-2)||0,r=+window.getComputedStyle(o)["top"].slice(0,-2)||0,s=i+n,l=r+a;s<0&&(s=0),l<0&&(l=0),o.style.left=s+"px",o.style.top=l+"px",this.setitem.left=s+"px",this.setitem.top=l+"px"}}},onDragged:function(t){var e=t.el,n=t.deltaX,a=t.deltaY,o=(t.offsetX,t.offsetY,t.clientX,t.clientY,t.first),i=t.last;if(o)this.dragged=!0;else{if(i)return this.dragged=!1,void this.updateItem(this.setitem);var r=+window.getComputedStyle(e.parentElement)["left"].slice(0,-2)||0,s=+window.getComputedStyle(e.parentElement)["top"].slice(0,-2)||0,l=r+n,c=s+a;l<0&&(l=0),c<0&&(c=0),e.parentElement.style.left=l+"px",e.parentElement.style.top=c+"px",this.setitem.left=l+"px",this.setitem.top=c+"px",e.parentElement.focus()}}}}),c=l,u=(n("72d9"),n("2877")),d=Object(u["a"])(c,r,s,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ToolBox"}},[n("div",{staticClass:"toolset"},[n("button",{staticClass:"tools",on:{click:t.AddBoardNote}},[n("i",{staticClass:"material-icons"},[t._v("subject")])]),n("button",{staticClass:"tools",on:{click:t.AddBoardImage}},[n("i",{staticClass:"material-icons"},[t._v("photo")])]),n("button",{staticClass:"tools",on:{click:t.GetScreenShot}},[n("i",{staticClass:"material-icons"},[t._v("camera")])]),n("button",{staticClass:"tools",on:{click:t.ZoomIn}},[n("i",{staticClass:"material-icons"},[t._v("zoom_in")])]),n("button",{staticClass:"tools",on:{click:t.ZoomOut}},[n("i",{staticClass:"material-icons"},[t._v("zoom_out")])]),n("button",{staticClass:"tools",on:{click:t.ClearAllData}},[n("i",{staticClass:"material-icons"},[t._v("delete_sweep")])])]),n("img",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"200px"},attrs:{src:t.output}})])},f=[],g=(n("96cf"),n("1da1")),h={data:function(){return{toggleMenu:!1,output:null,zoom:100}},methods:{ZoomIn:function(){this.zoom=this.zoom+10;var t=document.getElementById("PinBoard");t.setAttribute("style","zoom: "+this.zoom+"%")},ZoomOut:function(){if(10!==this.zoom){this.zoom=this.zoom-10;var t=document.getElementById("PinBoard");t.setAttribute("style","zoom: "+this.zoom+"%")}},AddBoardNote:function(){var t=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;this.$store.commit("AddBoardItem",{type:"note",content:"",left:t+50+"px",top:e+50+"px"})},AddBoardImage:function(){var t=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;this.$store.commit("AddBoardItem",{type:"image",content:"",left:t+50+"px",top:e+50+"px"})},ClearAllData:function(){this.$store.commit("ClearAllData")},GetScreenShot:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=document.getElementById("PinBoard"),n={type:"dataURL"},t.next=4,this.$html2canvas(e,n);case 4:this.output=t.sent;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},v=h,w=(n("26d9"),Object(u["a"])(v,p,f,!1,null,"39138126",null)),y=w.exports,x={name:"App",components:{PinBoard:m,ToolBox:y}},k=x,b=(n("034f"),Object(u["a"])(k,o,i,!1,null,null,null)),S=b.exports,B=n("2f62"),I=n("f029");a["a"].use(B["a"]);var L=new B["a"].Store({state:{BoardData:{},LinkData:{}},mutations:{AddBoardItem:function(t,e){var n=I["b"].v1();e.uuid=n,e.links=[];var o={};o[n]=e,a["a"].set(t.BoardData,n,e),localStorage.setItem("store",JSON.stringify(t))},AddLink:function(t,e){var n=I["b"].v1(),o={};o[n]=e,a["a"].set(t.LinkData,n,e),t.BoardData[e.start].links.push(n),t.BoardData[e.end].links.push(n),localStorage.setItem("store",JSON.stringify(t))},ClearAllData:function(t){t.BoardData={},t.LinkData={},localStorage.setItem("store",JSON.stringify(t))},UpdateBoardItem:function(t,e){t.BoardData[e.uuid]=e,localStorage.setItem("store",JSON.stringify(t))},initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))}},actions:{}}),D=n("0576"),C=n.n(D),_=n("3f9d"),O=n("63d6"),E=n.n(O);a["a"].use(E.a),a["a"].use(I["a"]),a["a"].use(C.a),a["a"].use(_["a"]),a["a"].config.productionTip=!1,new a["a"]({store:L,beforeCreate:function(){this.$store.commit("initialiseStore")},render:function(t){return t(S)}}).$mount("#app")},"72d9":function(t,e,n){"use strict";var a=n("e22a"),o=n.n(a);o.a},"85ec":function(t,e,n){},e22a:function(t,e,n){}});
//# sourceMappingURL=app.9af905a6.js.map