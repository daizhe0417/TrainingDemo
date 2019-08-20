<%@ page language="java" pageEncoding="UTF-8" %>
<html>
<head>
    <title>教学项目</title>
    <link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="<%=request.getContextPath()%>/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="<%=request.getContextPath()%>/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/css/AdminLTE.min.css">
    <style>
        /*web background*/
        .container {
            display: table;
            height: 100%;
        }

        .row {
            display: table-cell;
            vertical-align: middle;
        }

        /* centered columns styles */
        .row-centered {
            text-align: center;
        }

        .col-centered {
            display: inline-block;
            float: none;
            text-align: left;
            margin-right: -4px;
        }

        body {
            /*background: url("images/login.jpg") no-repeat -300px 0;*/
            background: url("images/welcome.jpg") no-repeat 0 0;
            /*background-size: contain;*/
            /*background-size: 100% 100%;*/
            background-size: cover;
            /*height: 400px;*/
        }

        .login-bar {
            height: 400px;
        }

        .logo {
            background: url("images/logo.png") no-repeat 0 0;
            background-size: contain;
            background-color: #000;
            height: 30px;
        }

        .box{
            opacity:0.9;
        }

        .container{
            margin-top: -60px;
        }
    </style>


</HEAD>
<BODY onkeydown="keyLogin();">
<img src="images/logo2.png" style="margin-left:40px;width: 300px;height: 95px; margin-top: 10px;">
<div class="container">
    <div class="row row-centered">
        <div class="col-md-12 col-centered">
            <div class="col-md-4 left-bar">
            </div>
            <div class="col-md-4">
                <div class="box box-info login-bar">
                    <div class="box-header with-border">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>欢迎登录</h3></div>
                            <%--<div class="col-md-6">--%>
                            <%--<img src="images/logo.png" style="width: 100%;height: 45px; margin-top: 10px;">--%>
                            <%--</div>--%>
                        </div>
                    </div>
                    <div class="box-body">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                <input id="userNo" type="text" class="form-control" placeholder="用户名"/>
                            </div>
                            <span id="userNoErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                <input id="passwd" type="password" class="form-control" placeholder="密码"/>
                            </div>
                            <span id="passwdErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div class="form-group">
                            <span id="loginErrMsg" class="help-block">&nbsp;</span>
                        </div>
                    </div>
                    <div class="box-footer">
                        <button id="login_submit" type="button" class="btn btn-block btn-success">登录</button>
                        <button id="regist_submit" type="button" class="btn btn-block btn-primary">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="<%=request.getContextPath()%>/util/jquery/jquery-2.2.3.min.js"></script>
<script src="<%=request.getContextPath()%>/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function () {
        // javascript:window.history.forward(1);
        clearErrMsg();
        jQuery("#login_submit").on("click", toSubmit);
        jQuery("#regist_submit").on("click", toRegist);
    });

    function clearErrMsg() {
        jQuery("#userNo").parent().parent().removeClass("has-error");
        jQuery("#userNoErrMsg").html("&nbsp;")
        jQuery("#passwd").parent().parent().removeClass("has-error");
        jQuery("#passwdErrMsg").html("&nbsp;")
        jQuery("#loginErrMsg").parent().removeClass("has-error");
        jQuery("#loginErrMsg").html("&nbsp;");
    }

    function toSubmit() {
        if (validFields()) {
            var req = {
                userNo: jQuery("#userNo").val(),
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
                        if (obj.datas[0].userType == '0') {
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

        if (jQuery("#userNo").val() == undefined
            || jQuery("#userNo").val() == "") {
            jQuery("#userNo").parent().parent().addClass("has-error");
            jQuery("#userNoErrMsg").html("用户名不能为空！");
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
</script>
</BODY>
</HTML>
