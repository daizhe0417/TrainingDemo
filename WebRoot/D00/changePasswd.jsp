<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <%@include file="../common.jsp" %>
    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery("#detailDlg").dialog({
                autoOpen: true,
                width: 400,
                buttons: [{
                    text: "保存",
                    click: function () {
                        to_save();
                    }
                }]
            }).dialog("option", "position", {
                my: "center top",
                at: "center top",
                of: jQuery("body")
            });

            jQuery("#newpasswd2").change(function () {
                if (jQuery(this).val() != jQuery("#newpasswd").val()) {
                    alert("两次录入新密码不一致");
                    jQuery('#newpasswd2').focus();
                    return false;
                }
            });
        });
        function to_save() {
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
        }

        function toSaveCallBack(item) {
            if (item.status == '1') {
                alert('修改密码成功,请重新登录！');
                top.location.href = "/dxManager/";
            } else {
                alert('重置密码失败,' + item.msg);
            }
        }
    </script>
</head>

<body>
<table border="0" width="1000px">
    <tr width="100%">
        <td colspan="3" width="100%">
            <div id="detailDlg">
                <form id="showForm" name="showForm" method="post" action="">
                    <table class="detailTable" width="100%">
                        <tr align="center">
                            <td align="center" id="saveMsg"><font color="red"></font>
                            </td>
                        </tr>
                        <tr width="100%">
                            <td width="100px">原密码：</td>
                            <td width="130px" border-bottom="1px"><input id="passwd"
                                                                         name="passwd" type="password" size="20"
                                                                         required maxlength="6"
                                                                         minlength="6"/></td>
                        </tr>
                        <tr>
                            <td width="100px">新密码：</td>
                            <td width="130px"><input id="newpasswd" name="newpasswd"
                                                     required type="password" size="20" maxlength="6" minlength="6"/>
                            </td>
                        </tr>
                        <tr>
                            <td width="100px">确认新密码：</td>
                            <td width="160px"><input id="newpasswd2" name="newpasswd2"
                                                     type="password" size="20" required maxlength="6" minlength="6"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </td>
    </tr>
</table>
</body>
</html>
