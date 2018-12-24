/*本来打算自己写DOM api，时间的关系，先用jQuery*/
var $ = document.getElementById;
var getChildByClassName = function(el, clsName) {
	if(!clsName) {
		clsName = el;
		el = document.body;
	}
	var reg = new RegExp(clsName)
	var func = (cel) => {
		let ele = null;
		[].forEach.call(cel.children, function(item) {
			if (reg.test(item.getAttribute('class'))) {
				ele = item;
				return false;
			} else {
				if (item.children.length > 0) {
					func(item)
				}
			}
		})
		return ele;
	};
	var ele = func(el);
	return ele;
}
var addClass = (el, clsName) => {
	if (!el || !clsName) throw new Error('param input error')
	var strClsName = el.getAttribute('class');
	var reg = new RegExp(`\b${clsName}\b`);
	if (!reg.test(strClsName)) {
		strClsName = strClsName.replace(/\s+$/, '') + ' ' + clsName;
		el.setAttribute('class', strClsName)
	}
	return el;
}
var hasClass = (el, clsName) => {
	if (!el || !clsName) throw new Error('param input error')
	var strClsName = el.getAttribute('class');
	var reg = new RegExp(`\\b${clsName}\\b`);
	return reg.test(strClsName)
}
var removeClass = (el, clsName) => {
	if (!el || !clsName) throw new Error('param input error')
	var strClsName = el.getAttribute('class');
	var reg = new RegExp(`\\s*\\b${clsName}\\b`);
	strClsName = strClsName.replace(reg, '')
	el.setAttribute('class', strClsName)
	return el;
}
document.addEventListener('DOMContentLoaded', function() {
	let btnIcons = document.getElementsByClassName('rdc-btn-icon');
	for(let idx in btnIcons) {
		btnIcons[idx].onclick = function(e) {
			let ele = getChildByClassName(this, 'rdc-shadow');
			if(hasClass(this, 'on')){
				removeClass(this, 'on');
				if(ele){	
				    addClass(ele, 'act');
				    setTimeout(() => {
				    	removeClass(ele, 'act');
				    },200)
				}
			} else {
				if(ele){
				    addClass(ele, 'act');
				    setTimeout(() => {
				    	removeClass(ele, 'act');
				    },200)
				}
				addClass(this, 'on')
			}
		}
	}
})