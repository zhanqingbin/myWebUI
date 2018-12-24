/**
 *  @name:      redcore-webUI
 *  @version:   1.0.0
 *  @author:    redcore
 *  @desc:      redcore 内核webUI 页面开发
 *  @license:   ISC
 *  @copyright: Copyright 2018 The Redcore (Beijing) Technology Co.,Ltd. All rights reserved.
 */
const cfg={holder:"rdc_screen_set",pop_pin_error:'<div id="rdc_pop_modify_psw" class="rdc-masker-fix">\n\t\t<div class="rdc-masker-content rdc-pos-mm">\n\t\t\t<h5>修改锁屏密码</h5>\n\t\t\t<p>{error}</p>\n\t</div>',pop_pin_success:'<div id="rdc_pop_modify_psw" class="rdc-masker-fix">\n\t\t<div class="rdc-masker-content rdc-pos-mm">\n\t\t\t<h5>修改锁屏密码</h5>\n\t\t\t<p>锁屏密码修改成功，浏览器将自动退出，请重新登录。</p>\n\t\t</div>\n\t</div>',tmpl_pop:'<div id="rdc_pop_modify_pin" class="rdc-masker-fix">\n\t\t<div class="rdc-masker-content rdc-pos-mm">\n\t\t\t<h5>修改锁屏密码</h5>\n\t\t\t<div id="frm_rdc_modify_pin" class="rdc-content rdc-pop">\n\t\t\t\t<div class="rdc-form-row">\n\t\t\t\t\t<label>请输入原锁屏密码</label> <input id="txt_rdc_pin_origin" type="password" name="originalPIN">\n\t\t\t\t</div>\n\t\t\t\t<div class="rdc-form-row">\n\t\t\t\t\t<label>请输入新锁屏密码</label> <input id="txt_rdc_pin_new" type="password" name="newPIN">\n\t\t\t\t</div>\n\t\t\t\t<div class="rdc-form-row">\n\t\t\t\t\t<label>确认新锁屏密码</label> <input id="txt_rdc_pin_confirm" type="password" name="newPINConfirm">\n\t\t\t\t</div>\n\t\t\t\t<div class="rdc-form-valid">\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t<div class="rdc-ctl-br">\n\t\t\t\t\t<button id="btn_rdc_modify_pin_cancel" class="rdc-btn">取消</button>\n\t\t\t\t\t<button id="btn_rdc_modify_pin_ok" class="rdc-btn primary">确定</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'},screen_set=Symbol.for("screen_set_ins"),req_getLockTime=Symbol.for("LockTime");class ScreenSet{constructor(t){t&&Object.assign(cfg,t),this.holder=document.getElementById(cfg.holder),this[req_getLockTime](),this.initEvt()}static get ins(){return null!=this[screen_set]&&this[screen_set]||(this[screen_set]=new ScreenSet),this[screen_set]}[req_getLockTime](){chrome.send("getLockScreenTime")}setLockTime(t){$("#rdc_srceen_lock_time").html(`${t} 分钟`)}initEvt(){let t=this;$("#btn_rdc_showPop").click(function(){return $(document.body).append($(cfg.tmpl_pop)),$("#rdc_pop_modify_pin").show(),$("#btn_rdc_modify_pin_cancel").click(function(){return $("#rdc_pop_modify_pin").hide().remove(),!1}),$("#btn_rdc_modify_pin_ok").click(function(){let d=$("#txt_rdc_pin_origin").val(),n=$("#txt_rdc_pin_new").val(),i=$("#txt_rdc_pin_confirm").val();if(!d||!n||!i)return t.modifyPIN1(),!1;if(n!=i)return t.modifyPIN3(),!1;if(!/^\d{6}$/.test(n))return t.modifyPIN4(),!1;let r=$("#rdc_pop_modify_pin").find(".rdc-form-valid");return r.removeClass("error"),r.find("span").html(""),console.log(`param:${d},${n},${i}`),chrome.send("modifyPINCode",[d,n,i]),!1}),!1})}modifyPIN0(){$("#rdc_pop_modify_pin").remove()}modifyPIN1(){let t=$("#rdc_pop_modify_pin").find(".rdc-form-valid");t.addClass("error"),t.find("span").html("锁屏密码不能为空！")}modifyPIN2(){let t=$("#rdc_pop_modify_pin").find(".rdc-form-valid");t.addClass("error"),t.find("span").html("原始锁屏密码不正确")}modifyPIN3(){let t=$("#rdc_pop_modify_pin").find(".rdc-form-valid");t.addClass("error"),t.find("span").html("锁屏密码和确认锁屏密码不一致")}modifyPIN4(){let t=$("#rdc_pop_modify_pin").find(".rdc-form-valid");t.addClass("error"),t.find("span").html("锁屏密码不是6位数字")}modifyPIN5(){let t=$("#rdc_pop_modify_pin").find(".rdc-form-valid");t.addClass("error"),t.find("span").html("原始锁屏密码和新锁屏密码一致")}}