<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	
	<script type="text/javascript" src='ueditor.config.js'></script>
	<script type="text/javascript" src='ueditor.all.js'></script>
  </head>
  
  <body>
    <div id="detailDlg" width="100%">
					<form id="showForm" name="showForm" method="post" action="">
						<table class="detailTable" width="100%">
							<tr>
								<td width="120px">content:</td>																					
								<td><textarea rows="50" cols="200" id="content1" name="content1" ></textarea></td>
								
								<script type="text/javascript">
									UE.getEditor("content1");
								</script>
											
							</tr>						
						</table>
					</form>
				</div> <br>
  </body>
</html>
