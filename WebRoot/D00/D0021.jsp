<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
<head>
<%@include file="../common.jsp"%>
<script type='text/javascript' src='js/D0021.js'>
	
</script>

<script type='text/javascript'
	src='<%=request.getContextPath()%>/dwr/interface/d0021mgr.js'>
	
</script>
<script type='text/javascript'
	src='<%=request.getContextPath()%>/dwr/interface/D00_21action.js'>
	
</script>

</head>

<body>
	<table border="0" width="1000px">
		<tr width="100%">
			<td colspan="3" width="100%">
				<div id="queryBar">
					<div id="queryBarHeader"></div>
					<div class="queryFieldsContainer">
						<table>
							<tr>
								<td><input type="button" value="类型代码:" class="edit_title" />
								</td>
								<td><input id="query_lxdm" type="input" size="15" /></td>
								<td><input type="button" value="类型名称:" class="edit_title"
									title="jiaose" /></td>
								<td><input id="query_lxmc" type="input" size="15" /></td>
							</tr>
						</table>
					</div>
				</div>
				<div id="detailDlg">
					<form id="showForm" name="showForm" method="post" action="">
						<table class="detailTable" width="100%">
							<tr width="100%">
								<td width="100px"><label>类型代码:</label></td>
								<td width="200px"><input id="lxdm" name="lxdm" type="text"
									size="20" required maxlength="4" number="true" /></td>
							</tr>
							<tr>
								<td>类型名称:</td>
								<td><input id="lxmc" name="lxmc" type="text" size="20"
									required /></td>
							</tr>
						</table>
					</form>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<table id="jqGridList"></table>
				<div id="jqGridPager"></div>
			</td>
		</tr>
	</table>
</body>
</html>
