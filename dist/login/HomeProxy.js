/**
 *  @name:      redcore-webUI
 *  @version:   1.0.0
 *  @author:    redcore
 *  @desc:      redcore 内核webUI 页面开发
 *  @license:   ISC
 *  @copyright: Copyright 2018 The Redcore (Beijing) Technology Co.,Ltd. All rights reserved.
 */
var HOMEBROWSER=null,HomeProxy=function(){};HomeProxy.prototype=function(){var t=null,n=null;function i(){this.handlers={}}i.prototype={constructor:i,registNotification:function(t,n,i){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push([n,i])},fireNotification:function(t){if(this.handlers[t.type]instanceof Array)for(var n=this.handlers[t.type],i=0;i<n.length;i++){var o=t.return,I=n[i][1];null!=o?setTimeout(function(){I(o)},0):setTimeout(function(){I()},0)}},removeNotification:function(t,n,i){if(this.handlers[t]instanceof Array)for(var o=this.handlers[t],I=0;I<o.length;I++)o[I][0]==n&&null!=i&&o[I][1]==i?o.splice(I,1):o[I][0]==n&&null==i&&o.splice(I,1)}};var o={getDeviveIdCallback:function(t){n.fireNotification({type:"GET_DEVICEID_NOTIFICATION",return:t})},getFirstLoginCallback:function(t){n.fireNotification({type:"GET_FIRST_LOGIN_NOTIFICATION",return:t})},getLoggingStatusCallback:function(i,o){t==i&&null==o||(t=i,n.fireNotification({type:"LOGGING_STATUS_NOTIFICATION",return:{status:i,message:o}}))},getAppGroupListCallback:function(t){n.fireNotification({type:"GET_APP_GROUP_LIST_NOTIFICATION",return:t})},getAccountInfoCallback:function(t){n.fireNotification({type:"GET_ACCOUNT_INFO_NOTIFICATION",return:t})},setAutoLoginCallback:function(){n.fireNotification({type:"SET_AUTO_LOGIN_NOTIFICATION"})},getAutoLoginCallback:function(t){n.fireNotification({type:"GET_AUTO_LOGIN_NOTIFICATION",return:t})},setManagerAddressCallback:function(t){n.fireNotification({type:"SET_MANAGER_ADDRESS_NOTIFICATION"})},getManagerAddressCallback:function(t){n.fireNotification({type:"GET_MANAGER_ADDRESS_NOTIFICATION",return:t})},getLastLoginInfoCallback:function(t){n.fireNotification({type:"GET_LAST_LOGIN_INFO_NOTIFICATION",return:t})},logOutCallback:function(){t=null,ACCOUNTINFO={},n.fireNotification({type:"LOGOUTED_NOTIFICATION"})}};return{init:function(){n=new i,(HOMEBROWSER=new HomeBrowser).init(o)},login:function(t,n,i){HOMEBROWSER.command("login",[t,n,i])},logout:function(){HOMEBROWSER.command("logout")},setAutoLogin:function(t){HOMEBROWSER.command("setParam",["autoLogin",t])},getAutoLogin:function(){HOMEBROWSER.command("getParam",["autoLogin"])},setManagerAddress:function(t){HOMEBROWSER.command("setParam",["managerAddress",t])},getManagerAddress:function(){HOMEBROWSER.command("getParam",["managerAddress"])},getDeviceId:function(){HOMEBROWSER.command("getParam",["deviceId"])},getFirstLogin:function(){HOMEBROWSER.command("getParam",["firstLogin"])},getLoggingStatus:function(){t=null,HOMEBROWSER.command("getParam",["loggingStatus"])},getLastLoginInfo:function(){HOMEBROWSER.command("getParam",["lastLoginInfo"])},getAppGroupList:function(){HOMEBROWSER.command("getParam",["appGroupList"])},getAccountInfo:function(){HOMEBROWSER.command("getParam",["accountInfo"])},setApplicationInfo:function(t,n){HOMEBROWSER.command("setParam",["setApplicationStatus",t,n])},registNotification:function(t,i,o){try{if("GET_DEVICEID_NOTIFICATION"!=t&&"GET_FIRST_LOGIN_NOTIFICATION"!=t&&"LOGGING_STATUS_NOTIFICATION"!=t&&"GET_ACCOUNT_INFO_NOTIFICATION"!=t&&"GET_APP_GROUP_LIST_NOTIFICATION"!=t&&"GET_AUTO_LOGIN_NOTIFICATION"!=t&&"SET_AUTO_LOGIN_NOTIFICATION"!=t&&"GET_MANAGER_ADDRESS_NOTIFICATION"!=t&&"SET_MANAGER_ADDRESS_NOTIFICATION"!=t&&"LOGOUTED_NOTIFICATION"!=t&&"GET_LAST_LOGIN_INFO_NOTIFICATION"!=t)throw t+" is not supported!";n.registNotification(t,i,o)}catch(t){alert(t)}},unregistNotification:function(t,i,o){try{if("GET_DEVICEID_NOTIFICATION"!=t&&"GET_FIRST_LOGIN_NOTIFICATION"!=t&&"LOGGING_STATUS_NOTIFICATION"!=t&&"GET_ACCOUNT_INFO_NOTIFICATION"!=t&&"GET_APP_GROUP_LIST_NOTIFICATION"!=t&&"GET_AUTO_LOGIN_NOTIFICATION"!=t&&"SET_AUTO_LOGIN_NOTIFICATION"!=t&&"GET_MANAGER_ADDRESS_NOTIFICATION"!=t&&"SET_MANAGER_ADDRESS_NOTIFICATION"!=t&&"LOGOUTED_NOTIFICATION"!=t&&"GET_LAST_LOGIN_INFO_NOTIFICATION"!=t)throw t+" is not supported!";n.removeNotification(t,i,o)}catch(t){alert(t)}}}}();