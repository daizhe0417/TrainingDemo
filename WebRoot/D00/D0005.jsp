<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<link type="text/css" href="<%=request.getContextPath()%>/css/main.css"
	rel="stylesheet" />
<link type="text/css" href="<%=request.getContextPath()%>/css/page.css"
	rel="stylesheet" />
<style type="text/css">
.d0005div {
	overflow-y: auto;
	height: 400px;
}
</style>
<%@include file="../common.jsp"%>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/util/tree/menutree.js">
</script>
<script type='text/javascript' src='js/D0005.js'>
</script>
<script type="text/javascript">
<%
	if(request.getAttribute("D0005.save.failure")!=null&&((String)request.getAttribute("D0005.save.failure")).equals("true")){
		%>
		alert("保存失败！");
		<%
	}else if(request.getAttribute("D0005.save.success")!=null&&((String)request.getAttribute("D0005.save.success")).equals("true")){
		%>
		alert("保存成功！");
		<%
	}
%>
</script>
</head>

<body>
	<div style="margin-top:10px;margin-left:10px; width:1000px">  <!-- 固定页面位置2013-11-26 10:28 -->
		<table width="1000px" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="right">
					<div class="ui-tabs-nav ui-widget-header ui-corner-all">
						<input id="savBtn" type="button" value="保存"
							class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" style="margin:5px;"/>
					</div></td>
			</tr>
			<tr height="5px">
				<td></td>
			</tr>
			<tr>
				<td>
					<form action="D00_05action_save.action" method="post" id="showform"
						name="showform">
						<table width="100%" border="0" cellspacing="0" cellpadding="0"
							id="tablel">
							<tr>
								<td width="8"></td>
								<td width="40%">
									<table id="datelist" class="datelist" width="100%" border="0"
										cellpadding="0" cellspacing="1" bgcolor="eeeeee">
										<tr class="tr3">
											<td width="3%">
												<fieldset>
													<legend>
														<span class="STYLE1">选择角色：</span>
													</legend>
													<div class="d0005div">
														<table id="roles">
														</table>
													</div>
												</fieldset></td>
										</tr>
									</table></td>
								<td width="8"></td>
								<td width="40%">
									<table id="datelist" class="datelist" width="100%" border="0"
										cellpadding="0" cellspacing="1" bgcolor="eeeeee">
										<tr class="tr3">
											<td width="3%">
												<fieldset>
													<legend>
														<span class="STYLE1">选择菜单：</span>
													</legend>
													<div class="d0005div">
														<table id="tree"></table>
													</div>
												</fieldset></td>
										</tr>
									</table></td>
								<td width="8"></td>
							</tr>
						</table>
					</form></td>
			</tr>
		</table>
	</div>
</body>
</html>
