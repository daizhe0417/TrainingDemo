<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <%@include file="../commoncss.jsp" %>
</head>
<body>
<div class="col-sm-4">
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 id="detailDlgTitleContainer" class="modal-title">修改密码</h4>
                </div>
                <div class="modal-body">
                    <form id="showForm" name="showForm" method="post" action="">
                        <div class="form-group">
                            <label for="passwd">原密码</label>
                            <input type="password" class="form-control" required maxlength="6" minlength="6" id="passwd"
                                   name="passwd">
                        </div>
                        <div class="form-group">
                            <label for="newpasswd">新密码</label>
                            <input type="password" class="form-control" required maxlength="6" minlength="6"
                                   id="newpasswd"
                                   name="newpasswd">
                        </div>
                        <div class="form-group">
                            <label for="newpasswd2">确认新密码</label>
                            <input type="password" class="form-control" required maxlength="6" minlength="6"
                                   id="newpasswd2"
                                   name="newpasswd2">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" id="SaveBtn" class="btn btn-primary">保存</button>
                </div>
            </div>
        </div>
    </div>
</div>
<%@include file="../commonjs.jsp" %>
<script type="text/javascript">
    jQuery(document).ready(function () {
        $(".modal").modal("show");

        jQuery("#newpasswd2").change(function () {
            if (jQuery(this).val() != jQuery("#newpasswd").val()) {
                alert("两次录入新密码不一致");
                jQuery('#newpasswd2').focus();
                return false;
            }
        });
    });
    $("#SaveBtn").on("click", function () {
        if (jQuery('#passwd').val() == '') {
            alert('原密码不能为空！');
            jQuery('#passwd').focus();
            return false;
        } else if (jQuery('#newpasswd').val() == '') {
            alert('新密码不能为空！');
            jQuery('#newpasswd').focus();
            return false;
        } else if (jQuery('#newpasswd2').val() != jQuery('#newpasswd').val()) {
            alert('确认密码不正确！');
            jQuery('#newpasswd2').focus();
            return false;
        }
        ajax({
            url: "D00_03action_passwdmodify",
            data: {
                reqJsonStr: JSON.stringify({
                    passwd: jQuery('#passwd').val(),
                    newpasswd: jQuery('#newpasswd').val()
                })
            },
            success: toSaveCallBack,
            error: toSaveCallBack
        });
//            var formMap = dwr.util.getValues(formName);
//            D00_03action.passwdmodify(formMap, function (item) {
//                if (item) {
//                    if (item == '修改密码成功！') {
//                        if (confirm(item + "  请重新登录！")) {
//                            top.location.href = "/dxManager/";
//                        }
//                    }
//                    jQuery("#saveMsg")
//                        .html('<font color="red">' + item + '</font>');
//                }
//            })
    });

    function toSaveCallBack(item) {
        if (item.status == '1') {
            alert('修改密码成功,请重新登录！');
            top.location = "/TrainingDemo/";
        } else {
            alert('重置密码失败,' + item.msg);
        }
    }
</script>
</body>
</html>
