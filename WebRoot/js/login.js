jQuery(document).ready(function () {
    // javascript:window.history.forward(1);
    clearErrMsg();
    jQuery("#login_submit").on("click", toSubmit);
    jQuery("#regist_submit").on("click", toRegist);
});

function clearErrMsg() {
    jQuery("#userno").parent().parent().removeClass("has-error");
    jQuery("#usernoErrMsg").html("&nbsp;")
    jQuery("#passwd").parent().parent().removeClass("has-error");
    jQuery("#passwdErrMsg").html("&nbsp;")
    jQuery("#loginErrMsg").parent().removeClass("has-error");
    jQuery("#loginErrMsg").html("&nbsp;");
}

function toSubmit() {
    if (validFields()) {
        var req = {
            userno: jQuery("#userno").val(),
            passwd: jQuery("#passwd").val()
        };
        var rm = {
            reqJsonStr: JSON.stringify(req)
        };

        $.ajax({
            url: "login!login.action?random=" + Math.random(),
            type: "POST",
            data: rm,
            timeout: 30000,
            dataType: "json",
            success: function (item) {
                var obj = jQuery.parseJSON(item);
                if (obj.status == 1) {
                    if (obj.datas[0].uType == '0') {
                        top.location = "index.jsp";
                    } else {
                        top.location = "product.jsp";
                    }
                } else if (obj.status == -1) {
                    setErrMsg(obj.msg);
                }
            },
            error: setErrMsg
        });
    }
    return false;
}

function keyLogin() {
    if (event.keyCode == 13) //回车键的键值为13
        toSubmit();
    return false;
}

function validFields() {
    clearErrMsg();

    if (jQuery("#userno").val() == undefined
        || jQuery("#userno").val() == "") {
        jQuery("#userno").parent().parent().addClass("has-error");
        jQuery("#usernoErrMsg").html("用户名不能为空！");
        return false;
    }
    if (jQuery("#passwd").val() == undefined
        || jQuery("#passwd").val() == "") {
        jQuery("#passwd").parent().parent().addClass("has-error");
        jQuery("#passwdErrMsg").html("密码不能为空！");
        return false;
    }
    return true;
}

function setErrMsg(item) {
    jQuery("#loginErrMsg").parent().addClass("has-error");
    jQuery("#loginErrMsg").html(item);
}

function toRegist() {
    top.location = "regist.jsp";
}