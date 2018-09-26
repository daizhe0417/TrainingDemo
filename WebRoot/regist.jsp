<%@ page language="java" pageEncoding="UTF-8" %>
<html>
<head>
    <title>据兴科技</title>
    <link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
    <%@include file="commoncss.jsp" %>
</HEAD>
<body class="hold-transition skin-blue-light layout-top-nav">
<input type="hidden" id="status">
<div class="wrapper">
    <div class="content-wrapper">
        <div class="row" style="padding-top: 20px;padding-bottom: 10px;">
            <div id="fuelux-wizard" data-target="#step-container">
                <!-- #section:plugins/fuelux.wizard.steps -->
                <ul class="wizard-steps">
                    <li data-target="#step1" class="active" id="stage1">
                        <span class="step">1</span>
                        <span class="title">填写注册信息</span>
                    </li>
                    <li data-target="#step2" id="stage2">
                        <span class="step">2</span>
                        <span class="title">上传名片</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row step-Content col-md-6 col-md-offset-3" id="step1Content">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">注册新用户</h3>
                </div>
                <div class="box-body">
                    <form action="" method="post">
                        <div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-fw fa-user"></i></span>
                                <input type="text" id="userno" class="form-control" placeholder="登录名">
                            </div>
                            <span id="usernoErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-fw fa-user"></i></span>
                                <input type="text" id="username" class="form-control" placeholder="用户名">
                            </div>
                            <span id="usernameErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-fw fa-institution"></i></span>
                                <input type="text" id="company" class="form-control" placeholder="公司">
                            </div>
                            <span id="companyErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-fw fa-mobile"></i></span>
                                <input type="text" id="mobile" class="form-control" placeholder="电话" maxlength="11">
                            </div>
                            <span id="mobileErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>
                                <input type="email" id="email" class="form-control" placeholder="Email">
                            </div>
                            <span id="emailErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-fw fa-briefcase"></i></span>
                                <input type="email" id="title" class="form-control" placeholder="职务">
                            </div>
                            <span id="titleErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-fw fa-lock"></i></span>
                                <input type="password" id="passwd" class="form-control" placeholder="密码">
                            </div>
                            <span id="passwdErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-fw fa-lock"></i></span>
                                <input type="password" id="passwd2" class="form-control" placeholder="确认密码">
                            </div>
                        </div>
                        <div>
                            <span id="passwd2ErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div>
                            <span class="registErrMsg help-block">&nbsp;</span>
                        </div>
                    </form>
                </div>
                <div class="box-footer">
                    <div class="row col-md-12">
                        <div class="col-md-8">
                            <%--<div class="checkbox">--%>
                            <%--<label>--%>
                            <%--<input id="cbHasAgree" type="checkbox"> 我同意<a href="#">注册条款</a>--%>
                            <%--</label>--%>
                            <%--</div>--%>
                            我已经注册过，去<a href="login.jsp" class="text-center">登录</a>
                        </div>
                        <!-- /.col -->
                        <div class="col-md-4">
                            <button type="button" id="btnNextStep" class="btn btn-primary btn-block btn-flat">下一步
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                    <%--<div class="row col-md-12">--%>
                    <%--<a href="login.jsp" class="text-center">我已经注册过，去登录</a>--%>
                    <%--</div>--%>
                </div>
                <!-- /.box-body -->
            </div>
        </div>
        <div class="row step-Content  col-md-6 col-md-offset-3" id="step2Content">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">上传名片</h3>
                </div>
                <div class="box-body">
                    <div class="file-loading">
                        <input id="businessCardUploadFile" name="iptUploadFile[]" type="file">
                    </div>
                    <input id="businessCard" type="hidden">
                    <div>
                        <span class="registErrMsg help-block">&nbsp;</span>
                    </div>
                </div>
                <div class="box-footer">
                    <div class="col-md-4 col-md-offset-2">
                        <button type="submit" id="btnPreStep" class="btn btn-primary btn-block btn-flat">上一步</button>
                    </div>
                    <div class="col-md-4">
                        <button type="submit" id="btnRegist" class="btn btn-primary btn-block btn-flat">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<%--<script src="<%=request.getContextPath()%>/plugins/jQuery/jquery-2.2.3.min.js"></script>--%>
<%--<script src="<%=request.getContextPath()%>/bootstrap/js/bootstrap.min.js"></script>--%>
<%--<script src="<%=request.getContextPath()%>/util/bootstrap-fileinput/js/fileinput.min.js"></script>--%>
<%--<script src="<%=request.getContextPath()%>/util/bootstrap-fileinput/js/locales/zh.js"></script>--%>
<%--<script src="<%=request.getContextPath()%>/common/fileUploadOper.js"></script>--%>
<%@include file="commonjs.jsp" %>
<script type="text/javascript">
    var actionname = "D00_03action";
    jQuery(document).ready(function () {
        // if (status == 'toRegist') {
        setStep1();
        // } else if (status == 'waitingActive') {
        //     $("#fuelux-wizard").hide();
        //     $("#step1Content").hide();
        //     $("#step2Content").hide();
        //     alert("请等待后台管理员审核并激活账户");
        //     top.location = "home.jsp";
        //     return false;
        // } else {
        //     setStep2();
        // }
        clearErrMsg();
        // jQuery("#btnRegist").on("click", toRegist);
        $("#btnNextStep").on("click", setStep2);
        $("#btnPreStep").on("click", setStep1);
        $("#btnRegist").on("click", toRegist);

        $("#userno").on("change", findById);

        $("#businessCardUploadFile").dzFileUpload({
            uploadExtraData: {
                "fileType": "mp"
            },
            allowedFileExtensions: ["png", "jpg", "jpeg"],
            inputFiled: "businessCard"
        });
    });

    function setStep1() {
        $("#step1Content").show();
        $("#step2Content").hide();
        $("#stage1").addClass("active");
        $("#stage2").removeClass("active");
    }

    function setStep2() {
        $("#step1Content").hide();
        $("#step2Content").show();
        $("#stage1").removeClass("active");
        $("#stage2").addClass("active");
    }

    function findById() {
        var req = {
            userno: $("#userno").val()
        };
        var rm = {
            reqJsonStr: JSON.stringify(req)
        };

        $.ajax({
            url: "regist!findById.action?random=" + Math.random(),
            type: "POST",
            data: rm,
            timeout: 30000,
            dataType: "json",
            success: function (item) {
                console.log("success" + JSON.stringify(item));
                var obj = jQuery.parseJSON(item);
                if (obj.status == 1) {
                    $("#userno").parent().parent().removeClass("has-error");
                    $("#usernoErrMsg").html("&nbsp;");
                    $("#btnNextStep").prop("disabled", false);
                } else {
                    $("#userno").parent().parent().addClass("has-error");
                    $("#usernoErrMsg").html(obj.msg);
                    $("#btnNextStep").prop("disabled", true);
                }
            },
            error: function (item) {
                console.log("error" + JSON.stringify(item));
                var obj = jQuery.parseJSON(item);
                if (obj.status == 1) {
                    $("#userno").parent().parent().removeClass("has-error");
                    $("#usernoErrMsg").html("&nbsp;");
                    $("#btnNextStep").prop("disabled", false);
                } else {
                    $("#userno").parent().parent().addClass("has-error");
                    $("#usernoErrMsg").html(obj.msg);
                    $("#btnNextStep").prop("disabled", true);
                }
            }
        });
    }

    function clearErrMsg() {
        jQuery("#userno").parent().parent().removeClass("has-error");
        jQuery("#usernoErrMsg").html("&nbsp;");

        jQuery("#username").parent().parent().removeClass("has-error");
        jQuery("#usernameErrMsg").html("&nbsp;");

        jQuery("#company").parent().parent().removeClass("has-error");
        jQuery("#companyErrMsg").html("&nbsp;");

        jQuery("#mobile").parent().parent().removeClass("has-error");
        jQuery("#mobileErrMsg").html("&nbsp;");

        jQuery("#email").parent().parent().removeClass("has-error");
        jQuery("#emailErrMsg").html("&nbsp;");

        jQuery("#title").parent().parent().removeClass("has-error");
        jQuery("#titleErrMsg").html("&nbsp;");

        jQuery("#passwd").parent().parent().removeClass("has-error");
        jQuery("#passwdErrMsg").html("&nbsp;");

        jQuery("#passwd2").parent().parent().removeClass("has-error");
        jQuery("#passwd2ErrMsg").html("&nbsp;");

        jQuery(".registErrMsg").parent().removeClass("has-error");
        jQuery(".registErrMsg").html("&nbsp;");
    }

    function toRegist() {
        if (validFields()) {
            // if (!$("#cbHasAgree").prop("checked")) {
            //     alert("请先阅读注册条款并同意");
            //     return false;
            // }
            var req = {
                userno: jQuery("#userno").val(),
                username: jQuery("#username").val(),
                passwd: jQuery("#passwd").val(),
                company: jQuery("#company").val(),
                mobile: jQuery("#mobile").val(),
                email: jQuery("#email").val(),
                title: jQuery("#title").val(),
                businessCard: jQuery("#businessCard").val()
            };
            var rm = {
                reqJsonStr: JSON.stringify(req)
            };

            $.ajax({
                url: "regist!regist.action?random=" + Math.random(),
                type: "POST",
                data: rm,
                timeout: 30000,
                dataType: "json",
                success: function (item) {
                    console.log(JSON.stringify(item));
                    var obj = jQuery.parseJSON(item);
                    if (obj.status == 1) {
                        alert("注册成功，请等待管理员审核");
                        top.location = "home.jsp";
                        // setStep2();
                        // $("#businessCardUploadFile").dzFileUpload({
                        //     uploadExtraData: {
                        //         "fileType": "mp",
                        //         "id": obj.msg
                        //     },
                        //     allowedFileExtensions: ["png", "jpg", "jpeg"],
                        //     inputFiled: "traceLink"
                        // });
                        // alert("注册成功，前往登录");
                        // top.location = "login.jsp";
                    } else if (obj.status == -1) {
                        setErrMsg(obj.msg);
                    }
                },
                error: setErrMsg
            });
        }
        return false;
    }

    function validFields() {
        clearErrMsg();

        if ($("#businessCard").val() == undefined || $("#businessCard").val() == "") {
            alert("请先上传您的名片");
            return false;
        }

        if (jQuery("#userno").val() == undefined
            || jQuery("#userno").val() == "") {
            jQuery("#userno").parent().parent().addClass("has-error");
            jQuery("#usernoErrMsg").html("登录名不能为空！");
            return false;
        }
        if (jQuery("#username").val() == undefined
            || jQuery("#username").val() == "") {
            jQuery("#username").parent().parent().addClass("has-error");
            jQuery("#usernameErrMsg").html("用户名不能为空！");
            return false;
        }
        if (jQuery("#company").val() == undefined
            || jQuery("#company").val() == "") {
            jQuery("#company").parent().parent().addClass("has-error");
            jQuery("#companyErrMsg").html("公司不能为空！");
            return false;
        }
        if (jQuery("#mobile").val() == undefined
            || jQuery("#mobile").val() == "") {
            jQuery("#mobile").parent().parent().addClass("has-error");
            jQuery("#mobileErrMsg").html("电话不能为空！");
            return false;
        }
        if (jQuery("#email").val() == undefined
            || jQuery("#email").val() == "") {
            jQuery("#email").parent().parent().addClass("has-error");
            jQuery("#emailErrMsg").html("电子邮件不能为空！");
            return false;
        }
        if (jQuery("#title").val() == undefined
            || jQuery("#title").val() == "") {
            jQuery("#title").parent().parent().addClass("has-error");
            jQuery("#titleErrMsg").html("职务不能为空！");
            return false;
        }
        if (jQuery("#passwd").val() == undefined
            || jQuery("#passwd").val() == "") {
            jQuery("#passwd").parent().parent().addClass("has-error");
            jQuery("#passwdErrMsg").html("密码不能为空！");
            return false;
        }
        if (jQuery("#passwd2").val() == undefined
            || jQuery("#passwd2").val() == "") {
            jQuery("#passwd2").parent().parent().addClass("has-error");
            jQuery("#passwd2ErrMsg").html("确认密码不能为空！");
            return false;
        }
        if (jQuery("#passwd").val() != jQuery("#passwd2").val()) {
            jQuery("#passwd").parent().parent().addClass("has-error");
            jQuery("#passwd2").parent().parent().addClass("has-error");
            jQuery("#passwdErrMsg").html("两次输入密码不一致！");
            jQuery("#passwd2ErrMsg").html("两次输入密码不一致！");
            return false;
        }
        return true;
    }

    function setErrMsg(msg) {
        jQuery(".registErrMsg").parent().addClass("has-error");
        jQuery(".registErrMsg").html(msg);
    }

    function afterUploadFile(data) {
        // console.log('dddd' + JSON.stringify(data));
        // var status = data.response.datas[0];
        // if (status == "上传成功") {
        //     alert("请等待后台管理员审核并激活账户");
        //     top.location = "home.jsp";
        // }
    }
</script>
</BODY>
</HTML>
