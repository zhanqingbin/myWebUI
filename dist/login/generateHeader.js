/**
 *  @name:      redcore-webUI
 *  @version:   1.0.0
 *  @author:    redcore
 *  @desc:      redcore 内核webUI 页面开发
 *  @license:   ISC
 *  @copyright: Copyright 2018 The Redcore (Beijing) Technology Co.,Ltd. All rights reserved.
 */
function generateHeader(e){var t={title:e.title||"",logo:e.logo||"./imgs/defaultLogo.png"};$("#title").text(t.title),$("#logo").attr("src",t.logo)}var Header={};window.Header=Header,Header.generate=generateHeader;