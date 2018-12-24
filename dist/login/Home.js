/**
 *  @name:      redcore-webUI
 *  @version:   1.0.0
 *  @author:    redcore
 *  @desc:      redcore 内核webUI 页面开发
 *  @license:   ISC
 *  @copyright: Copyright 2018 The Redcore (Beijing) Technology Co.,Ltd. All rights reserved.
 */
var HOMEPROXY=null,LOGIN=null,ACCOUNTINFO=null,APPGROUPLIST=null,deviceId="";function initHomeProxy(){(HOMEPROXY=new HomeProxy).init(),HOMEPROXY.getFirstLogin(),HOMEPROXY.getDeviceId(),HOMEPROXY.registNotification("GET_DEVICEID_NOTIFICATION",this,function(i){i&&(deviceId=i)}),HOMEPROXY.registNotification("GET_FIRST_LOGIN_NOTIFICATION",this,function(i){if(console.log("isFirstLogin: ",i),i){$("#content").empty(),$("#content").append('<div class="hello" id="hello" > <section class="section-swiper"> <div class="swiper-container swiper-container-banner"> <div class="swiper-wrapper"> <div id="swiper1" class="swiper-slide swiper-slide-1"> <div class="title-header"> <img src="./hello/img/logo.png" alt="" class="logo"> </div> <div class="title"> <h3> 为办公而生 </h3> <ul class="signin"> <li><a class="helloLoginBtn">登录</a></li> </ul> </div> <div class="page1-main-1"> <ul> <li><img src="./hello/img/swiper1/4.png"></li> <li><img src="./hello/img/swiper1/3.png"></li> <li><img src="./hello/img/swiper1/2.png"></li> <li><img src="./hello/img/swiper1/1.png"></li> <li><img src="./hello/img/swiper1/001.png"></li> </ul> </div> <div class="page1-main-2"> <img src="./hello/img/swiper1/19.png" alt=""> </div> <div class="light"> <img src="./hello/img/swiper1/888.png" alt=""> </div> <div  class="round"> <img class="page1_round" src="./hello/img/round.png" style="display: block;"> </div> <div class="global_scroll" style="opacity: 1;"> <img src="./hello/img/up.png"> </div> </div> <div id="swiper2" class="swiper-slide swiper-slide-2"> \x3c!--左侧注册框--\x3e <div class="register-logon"> <h3> 有身份的浏览器 </h3> <ul class="signin"> \x3c!--<li><a href="https://www.redcore.cn/signup/index.html" target= _blank>注册</a></li>--\x3e <li><a class="helloLoginBtn">登录</a></li> </ul> </div> \x3c!--右侧动画--\x3e <div class="page2"> <div class="page2-main-1"> <img class="page2-img-1" src="./hello/img/swiper2/1.png" style="display: block;"> <img class="page2-img-2" src="./hello/img/swiper2/2.png" style="display: block;"> <img class="page2-img-3" src="./hello/img/swiper2/3.png" style="display: block;"> <img class="page2-img-4" src="./hello/img/swiper2/4.png" style="display: block;"> <img class="page2-img-2 page2-img-2-positive" src="./hello/img/swiper2/2-2.png" style="display: block;"> <img class="page2-img-3 page2-img-3-positive" src="./hello/img/swiper2/3-3.png" style="display: block;"> <img class="page2-img-4 page2-img-4-positive" src="./hello/img/swiper2/4-4.png" style="display: block;"> </div> <div class="page2-main-2"> <img class="page2-bg" src="./hello/img/swiper2/5.png" style="display: block;"> </div> <div class="page2-main-3"> <img class="line-round" src="./hello/img/swiper2/6.png" style="display: block;"> </div> </div> <div class="global_scroll" style="opacity: 1;"> <img src="./hello/img/up-red.png"> </div> </div> <div id="swiper3" class="swiper-slide swiper-slide-3"> \x3c!--左侧注册框--\x3e <div class="register-logon"> <h3> 统一的办公入口 </h3> <ul class="signin"> <li><a class="helloLoginBtn">登录</a></li> </ul> </div> \x3c!--右侧动画--\x3e <div class="page3"> <div class="page3-main-1"> <img class="page3-main-img-1" src="./hello/img/swiper3/7.png" style="display: block;"> <div class="page3-img-pack"> <div class="page3-img-hover"> <img class="page3-img-1" src="./hello/img/swiper3/9.png" style="display: block;"> <img class="page3-img-2" src="./hello/img/swiper3/10.png" style="display: block;"> <img class="page3-img-3" src="./hello/img/swiper3/11.png" style="display: block;"> </div> <div class="page3-img-hover"> <img class="page3-img-4" src="./hello/img/swiper3/12.png" style="display: block;"> <img class="page3-img-5" src="./hello/img/swiper3/13.png" style="display: block;"> </div> </div> </div> <div class="page3-main-2"> <img class="page3-bg" src="./hello/img/swiper3/8.png" style="display: block;"> </div> <div class="page3-main-3"> <img class="line-round" src="./hello/img/round.png" style="display: block;"> </div> </div> <div class="global_scroll" style="opacity: 1;"> <img src="./hello/img/up.png"> </div> </div> <div id="swiper4" class="swiper-slide swiper-slide-4"> \x3c!--左侧注册框--\x3e <div class="register-logon"> <h3> 安全的办公平台 </h3> <ul class="signin"> <li><a class="helloLoginBtn">登录</a></li> </ul> </div> \x3c!--右侧动画--\x3e <div class="page4"> <div class="page4-main-1"> <img class="page4-img-1" src="./hello/img/swiper4/15.png" style="display: block;"> <img class="page4-img-2" src="./hello/img/swiper4/16.png" style="display: block;"> <img class="page4-img-3" src="./hello/img/swiper4/16.png" style="display: block;"> <img class="page4-img-4" src="./hello/img/swiper4/16.png" style="display: block;"> </div> <div class="page4-main-2"> <img class="page4-bg" src="./hello/img/swiper4/17.png" style="display: block;"> </div> <div class="page4-main-3"> <img class="line-round" src="./hello/img/swiper2/6.png" style="display: block;"> </div> </div> </div> </div> <div class="swiper-pagination"></div> </div> </section> </div>');new Swiper(".swiper-container-banner",{direction:"vertical",slidesPerView:1,spaceBetween:30,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0}});$(".helloLoginBtn").bind("click",function(){$("#content").empty(),HOMEPROXY.getLoggingStatus()})}else $("#content").empty(),HOMEPROXY.getLoggingStatus()}),HOMEPROXY.registNotification("LOGGING_STATUS_NOTIFICATION",this,function(i){console.log("login status: ",i),100==i.status?(HOMEPROXY.getAccountInfo(),HOMEPROXY.getAppGroupList(),console.log("login is success"),switchPage(!0)):i.status<0&&($("#login").length>0||(switchPage(!1),LOGIN=new Login,HOMEPROXY.getLastLoginInfo(),HOMEPROXY.getAutoLogin(),HOMEPROXY.getManagerAddress()),LOGIN&&LOGIN.removeLoading(),i.message?(console.log("status : "+i.message),LOGIN&&LOGIN.errorTip(i.message)):console.log("Not login"))}),HOMEPROXY.registNotification("GET_ACCOUNT_INFO_NOTIFICATION",this,function(i){console.log("updateCompanyInfoCache is done."),console.log("companyTitle:"+i.company.name),Header.generate({title:i.company.name,logo:"",id:i.company.id}),ACCOUNTINFO=i,APPGROUPLIST&&ACCOUNTINFO&&Tabs.generate(APPGROUPLIST,ACCOUNTINFO,{})}),HOMEPROXY.registNotification("GET_APP_GROUP_LIST_NOTIFICATION",this,function(i){(APPGROUPLIST=i)&&ACCOUNTINFO&&Tabs.generate(APPGROUPLIST,ACCOUNTINFO,{})}),HOMEPROXY.registNotification("GET_LAST_LOGIN_INFO_NOTIFICATION",this,function(i){console.log("LAST_LOGIN_INFO_FICATION is done."),console.log("LOGIN_INFO: "+i),LOGIN.setLoginInfo(i)}),HOMEPROXY.registNotification("GET_AUTO_LOGIN_NOTIFICATION",this,function(i){console.log("GET_AUTO_LOGIN_NOTIFICATION is done."),console.log("AUTO_LOGIN: "+i),LOGIN.setAutoLoginStatus(i)}),HOMEPROXY.registNotification("GET_MANAGER_ADDRESS_NOTIFICATION",this,function(i){console.log("GET_MANAGER_ADDRESS_NOTIFICATION is done."),console.log("MANAGER_ADDRESS: "+i)}),HOMEPROXY.registNotification("LOGOUTED_NOTIFICATION",this,function(){console.log("current user is logouted."),Tabs.destroy(),HOMEPROXY.getLoggingStatus()})}document.addEventListener("DOMContentLoaded",function(){initHomeProxy()});