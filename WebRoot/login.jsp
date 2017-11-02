<%@ page language="java" pageEncoding="UTF-8"
         import="cn.venice.gen.constant.GenericConstant" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/login/reset.css">
    <link rel="stylesheet" type="text/css" href="css/login/structure.css">
    <script src="util/jquery/jquery-1.9.1.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function () {
            clearErrMsg();
            jQuery("#login_submit").on("click", toSubmit);
        });

        function clearErrMsg() {
            jQuery("#errMsg").html("");
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
                            top.location = "index.jsp";
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
//                toSubmit();
            return false;
        }

        function validFields() {
            jQuery("#errMsg").html("");

            if (jQuery("#userno").val() == undefined
                    || jQuery("#userno").val() == "") {
                jQuery("#errMsg").html("登录名不能为空！");
                return false;
            }
            if (jQuery("#passwd").val() == undefined
                    || jQuery("#passwd").val() == "") {
                jQuery("#errMsg").html("密码不能为空！");
                return false;
            }
            return true;
        }

        function setErrMsg(item) {
            jQuery("#errMsg").html(item);
        }
    </script>
</HEAD>
<BODY onkeydown="keyLogin();">
<form class="box login">
    <fieldset class="boxBody">
        <label>用户名</label>
        <input id="userno" type="text" tabindex="1" placeholder="username" required>
        <label>
            <!--<a href="#" class="rLink" tabindex="5">Forget your password?</a>-->
            密码</label>
        <input id="passwd" type="password" tabindex="2" required>
    </fieldset>
    <footer>
        <!--<label><input type="checkbox" tabindex="3">Keep me logged in</label>-->
        <label id="errMsg"></label>
        <input id="login_submit" type="submit" class="btnLogin" value="Login" tabindex="4">
    </footer>
</form>
</BODY>
</HTML>
