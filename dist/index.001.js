/**
 *  @name:      redcore-webUI
 *  @version:   1.0.0
 *  @author:    redcore
 *  @desc:      redcore 内核webUI 页面开发
 *  @license:   ISC
 *  @copyright: Copyright 2018 The Redcore (Beijing) Technology Co.,Ltd. All rights reserved.
 */
var $=document.getElementById,getChildByClassName=function(e,t){t||(t=e,e=document.body);var r=new RegExp(t),s=e=>{let t=null;return[].forEach.call(e.children,function(e){if(r.test(e.getAttribute("class")))return t=e,!1;e.children.length>0&&s(e)}),t};return s(e)},addClass=(e,t)=>{if(!e||!t)throw new Error("param input error");var r=e.getAttribute("class");return new RegExp(`\b${t}\b`).test(r)||(r=r.replace(/\s+$/,"")+" "+t,e.setAttribute("class",r)),e},hasClass=(e,t)=>{if(!e||!t)throw new Error("param input error");var r=e.getAttribute("class");return new RegExp(`\\b${t}\\b`).test(r)},removeClass=(e,t)=>{if(!e||!t)throw new Error("param input error");var r=e.getAttribute("class"),s=new RegExp(`\\s*\\b${t}\\b`);return r=r.replace(s,""),e.setAttribute("class",r),e};document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("rdc-btn-icon");for(let t in e)e[t].onclick=function(e){let t=getChildByClassName(this,"rdc-shadow");hasClass(this,"on")?(removeClass(this,"on"),t&&(addClass(t,"act"),setTimeout(()=>{removeClass(t,"act")},200))):(t&&(addClass(t,"act"),setTimeout(()=>{removeClass(t,"act")},200)),addClass(this,"on"))}});