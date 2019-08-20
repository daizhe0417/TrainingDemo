<%@ page language="java" import="cn.venice.gen.model.UserInfoModel,cn.venice.util.common.ConstantClass"
         pageEncoding="UTF-8" %>
<script type="text/javascript">
    var userInfo = null;
    <%
        UserInfoModel userInfoModel = (UserInfoModel) session.getAttribute(ConstantClass.LOGIN_USER_SESSION_ID);
        if (userInfoModel != null) {
    %>
    userInfo = {};
    userInfo['userNo'] = '<%=userInfoModel.getUserNo()%>';
    userInfo['userName'] = '<%=userInfoModel.getUserName()%>';
    userInfo['roleId'] = '<%=userInfoModel.getRoleNo()%>';
    userInfo['roleName'] = '<%=userInfoModel.getRoleName()%>';
    userInfo['bmId'] = '<%=userInfoModel.getBmId()%>';
    userInfo['bmmc'] = '<%=userInfoModel.getBmmc()%>';
    userInfo['userTyp'] = '<%=userInfoModel.getUserType()%>';
    <%
        }
    %>
</script>