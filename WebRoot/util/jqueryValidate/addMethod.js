jQuery.validator.addMethod("isPhone", function (value, element) {
    var length = value.length;
    var mobile = /^1[34578][0-9]{9}$/;
    var tel = /^d{3,4}-?d{7,9}$/;
    return this.optional(element) || (tel.test(value) || mobile.test(value));
}, "请正确填写您的联系电话");
jQuery.validator.addMethod("isAmount", function (value, element) {
    var length = value.length;
    var test = /^\d+(\.\d{2})?$/;
    return this.optional(element) || (test.test(value));
}, "请输入整数或两位小数");
jQuery.validator.addMethod("requireSelected", function (value, element) {
    // return this.optional(element) || value!="";
    return value != "";
}, "请选择一个选项");