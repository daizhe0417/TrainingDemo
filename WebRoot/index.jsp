<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page
	import="cn.venice.gen.model.UserInfoModel,cn.venice.util.common.ConstantClass"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>高校综合业务系统</title>
<link type="text/css" href="<%=request.getContextPath()%>/css/main.css"
	rel="stylesheet" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<link rel="bookmark" href="favicon.ico" type="image/x-icon">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
body {
	background-color: #ffffff;
}
</style>

<style type="text/css" media=print>
.Noprint {
	display: none;
}
</style>
<script type="text/javascript" language="javascript">
	function iFrameHeight() {
		var ifm = document.getElementById("mainframe");
		var subWeb = document.frames ? document.frames["mainframe"].document
				: ifm.contentDocument;
		if (ifm != null && subWeb != null) {
			subWeb.body.scrollHeight = ifm.height;
			subWeb.body.scrollWidth = ifm.width;
		}
	}
</script>
</head>

<body>
	<div id="ww">
		<div id="zt">
			<div id="wz_top">
				<jsp:include page="sysbar.jsp" flush="true" />
			</div>
			<div id="wz_main">
				<div id="wz_main_con">
					<div id="wz_main_left">
						<div id="wz_main_left_nav">
							<div
								style="margin-top:9px;float:left; width:16px;margin-left:21px;_margin-left:10px">
								<img src="images/01.png" />
							</div>
							<%
								UserInfoModel user = (UserInfoModel) session
										.getAttribute(ConstantClass.LOGIN_USER_SESSION_ID);
								String username = user == null ? ""
										: user.getUsername() == null ? "" : user.getUsername();
							%>
							<div style="float:left;margin-left:6px">
								欢迎您，<%=username%>!
							</div>
						</div>
						<div id="wz_main_left_iframe">
							<iframe class="maindiv_left" src="treemenu.jsp" frameborder="0"
								scrolling="auto" height="690"></iframe>
						</div>
					</div>
					<div id="wz_main_right">
						<iframe class="maindiv_right" name="mainframe" id="mainframe"
							frameborder="0" scrolling="auto" src="main.jsp"></iframe>
					</div>
				</div>
			</div>
		</div>

	</div>
</body>
</html>
