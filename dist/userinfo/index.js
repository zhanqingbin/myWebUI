/**
 *  @name:      redcore-webUI
 *  @version:   1.0.0
 *  @author:    redcore
 *  @desc:      redcore 内核webUI 页面开发
 *  @license:   ISC
 *  @copyright: Copyright 2018 The Redcore (Beijing) Technology Co.,Ltd. All rights reserved.
 */
$(function(){User.ins;$(".rdc-container-user").delegate(".rdc-btn-icon","click",function(){var s=$(this);s.hasClass("on")?s.removeClass("on"):s.addClass("on"),s.find(".rdc-shadow").addClass("act"),setTimeout(function(){s.find(".rdc-shadow").removeClass("act")},300);let n=$(this);n.hasClass("on")?n.parents(".rdc-head").siblings(".rdc-content").slideDown():n.parents(".rdc-head").siblings(".rdc-content").slideUp()})});