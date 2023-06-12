"use strict";(self.webpackChunkmy_webpack_template=self.webpackChunkmy_webpack_template||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),c=t(645),a=t.n(c)()(o());a.push([e.id,"* {\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\ninput {\n  border: 0;\n  color: inherit;\n  background-color: inherit;\n}\n\n.padding-lef-righ-5 {\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.section-todolist {\n  border: 1px solid rgb(209, 209, 209);\n  margin: 5%;\n  color: rgb(75, 75, 75);\n}\n\n.section-todolist h1 {\n  border-bottom: gray;\n  border-bottom: 1px solid gray;\n  padding-bottom: 3%;\n}\n\n.section-todolist label {\n  display: flex;\n}\n\n.section-todolist label span {\n  padding-right: 5%;\n}\n\n.input-add-task {\n  background-color: inherit;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.input-add-task:focus {\n  outline: none;\n  border: 0;\n}\n\n.list-container {\n  padding-left: 0;\n  border-bottom: 1px solid gray;\n}\n\n.list-container li {\n  display: flex;\n  gap: 5%;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid gray;\n}\n\n.list-container li .current-task-input {\n  width: 80%;\n}\n\n.list-container li input:focus {\n  outline: none;\n  border: 0;\n}\n\n.list-container li .dots-menu {\n  padding: 0;\n  border: 0;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.list-container li .trash-icon img {\n  width: 18px;\n  height: 20px;\n}\n\n.square {\n  border: 2px solid gray;\n  height: 20px;\n  width: 20px;\n  color: rgba(0, 0, 0, 0);\n}\n\n.checked {\n  display: flex;\n  color: blue;\n  font-size: 150%;\n  align-items: center;\n}\n\n.checked-text {\n  text-decoration: line-through;\n}\n\n.clear {\n  display: flex;\n  justify-content: center;\n}\n\n.hide {\n  display: none;\n}\n",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=c[l]||0,u="".concat(l," ").concat(d);c[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var s=r(e,o),l=0;l<c.length;l++){var d=t(c[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},486:(e,n,t)=>{var r=t(379),o=t.n(r),c=t(795),a=t.n(c),i=t(569),s=t.n(i),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),h=t.n(f),m=t(426),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const y=t.p+"1352b3bfbc3f4ab2cf29.png",v=t.p+"d0277d5dd730e60d8f1d.png",b=document.querySelector("#list-container");function k(e){e.target.parentNode.parentNode.querySelector(".trash-icon").classList.toggle("hide")}const x=function(e){b.innerHTML="";let n=0;e.forEach((e=>{const t=document.createElement("li"),{description:r}=e;let o,c;e.completed?(o="square checked-text",c="current-task-input checked-text"):(o="square",c="current-task-input"),t.innerHTML=`\n        <input type="checkbox" class="${o}" value="${n}">\n        <input class="${c}" type='text' value="${r}" >\n        <button class="delete-button trash-icon hide"><img class="trash-icon" alt=""></button>\n        <button class="dots-menu-button dots-menu" ><img class="dots-menu" alt=""></button>`,t.querySelector(".dots-menu-button").querySelector("img").src=y,t.querySelector(".trash-icon").querySelector("img").src=v,t.querySelector(".dots-menu-button").addEventListener("click",k),t.querySelector(".delete-button").value=n,t.querySelector(".square").checked=e.completed,t.classList.add("padding-lef-righ-5"),b.appendChild(t),n+=1}))},E=function(e,n,t){this.description=e,this.completed=n,this.index=t},S=function(e){localStorage.setItem("toDoList",JSON.stringify(e))},q=JSON.parse(localStorage.getItem("toDoList"))||[],L=function(e){const n=e.target.parentNode.querySelector(".square").value,t=e.target.value;var r;"Enter"===e.key&&(r=t,q[n].description=r,S(q))},w={change(e){const n=e.target,t=e.target.parentNode.querySelector(".current-task-input"),r=e.target.value;n.checked?(q[r].completed=!0,n.classList.add("checked"),t.classList.add("checked-text")):(q[r].completed=!1,n.classList.remove("checked"),t.classList.remove("checked-text")),S(q)}},A=function e(n){const t=n.target.parentNode.value;q.splice(t,1);let r=1;q.forEach((e=>{e.index=r,r+=1})),x(q),S(q),function(){const n=document.querySelectorAll(".delete-button"),t=document.querySelectorAll(".current-task-input"),r=document.querySelectorAll(".square");n.forEach((n=>{n.addEventListener("click",e)})),t.forEach((e=>{e.addEventListener("keydown",L)})),r.forEach((e=>{e.addEventListener("change",w.change)}))}()},C=function e(){const n=q.filter((e=>!e.completed));q.length=0,q.push(...n),x(q),function(){const n=document.querySelectorAll(".delete-button"),t=document.querySelectorAll(".current-task-input"),r=document.querySelectorAll(".square"),o=document.querySelector(".clear");n.forEach((e=>{e.addEventListener("click",A)})),t.forEach((e=>{e.addEventListener("keydown",L)})),r.forEach((e=>{e.addEventListener("change",w.change)})),o.addEventListener("click",e)}(),S(q)},N=function(){const e=document.querySelectorAll(".delete-button"),n=document.querySelectorAll(".current-task-input"),t=document.querySelectorAll(".square"),r=document.querySelector(".clear");e.forEach((e=>{e.addEventListener("click",A)})),n.forEach((e=>{e.addEventListener("keydown",L)})),t.forEach((e=>{e.addEventListener("change",w.change)})),r.addEventListener("click",C)};x(q),N();const T=document.getElementById("add-task");T.addEventListener("keydown",(function(e){"Enter"===e.key&&(function(e){const n=document.getElementById("add-task").value;let t;t=e.length<1?1:e.length+1;const r=new E(n,!1,t);e.push(r)}(q),x(q),S(q),N(),T.value="")}))}},e=>{e(e.s=486)}]);