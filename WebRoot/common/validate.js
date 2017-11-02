var rules = {
	required : false,
	number : false,
	decimal : false,
	date : "yyyy-mm-dd",
	string : true,
	numberchar : true,
	zhCN:false,
	maxLength:1,
	minLength:1,
	decimalDigits:2
};
var msg={
	required : "不可为空",
	number : "只能为数字",
	decimal : "只能为小数",
	date : "日期格式为2011-01-01",
	string : "只能为字母",
	numberchar : "只能为字母或数字",
	zhCn:"只能为汉字",
	maxLength:"最大长度为",
	minLength:"最小长度为",
	decimalDigits:"小数位数为"
}
function initValid(vf) {
	if (vf == null) {
		return;
	}
	for ( var i = 0; i < vf.length; i++) {
		if (vf.rules != null && vf.rules.length > 0) {
			jQuery("#"+vf[i].value).bind("click",function valid(){
				
			});
			for(rule in vf.rules){
				var value=jQuery("#"+vf[i].value).val();
				if(vf[i].type=='textarea'){
					value=jQuery("#"+vf[i].value).text();
				}
				
			}
		}
	}
}
function validate(vf) {
	if (vf == null) {
		return;
	}
	for ( var i = 0; i < vf.length; i++) {
		if (vf.type != null && vf.type.length > 0) {
			if (!eval("valid_" + vf.type)) {
				alert(vf.fieldName + vf.msg);
			}
		}
	}
}
function valid_notNull() {

}

function valid(value,rule){
	
}