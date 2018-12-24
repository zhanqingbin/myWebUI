/**
 *  @name:      redcore-webUI
 *  @version:   1.0.0
 *  @author:    redcore
 *  @desc:      redcore 内核webUI 页面开发
 *  @license:   ISC
 *  @copyright: Copyright 2018 The Redcore (Beijing) Technology Co.,Ltd. All rights reserved.
 */
class Rdc{static formateTime(t){if(!t)return"";let e=new Date(t);return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`}}