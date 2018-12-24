/**
 *  @name:      redcore-webUI
 *  @version:   1.0.0
 *  @author:    redcore
 *  @desc:      redcore 内核webUI 页面开发
 *  @license:   ISC
 *  @copyright: Copyright 2018 The Redcore (Beijing) Technology Co.,Ltd. All rights reserved.
 */
function search(){$searchBox=$("#search-box"),$searchBtn=$("#search-btn"),$search=$("#search-input");var c=function(c){window.open("https://www.baidu.com/s?wd="+c,"_self")};$searchBtn.on("click",function(){$search.val()&&c($search.val())}),$search.on("keydown",function(a){var n=$search.val();13==a.which&&n&&c(n)})}