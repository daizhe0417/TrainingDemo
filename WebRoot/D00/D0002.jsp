<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
<head>
<%@include file="../common.jsp"%>
<script type='text/javascript' src='js/D0002.js'>
	
</script>

</head>

<body>
	<div id="queryBar">
		<div id="queryBarHeader"></div>
		<div class="queryFieldsContainer">
			<table>
				<tr>
					<td><input type="button" value="角色代码:" class="edit_title" />
					</td>
					<td><input id="query_roleno" type="input" size="15" /></td>
					<td><input type="button" value="角色名称:" class="edit_title"
						title="jiaose" /></td>
					<td><input id="query_rolename" type="input" size="15" /></td>
				</tr>
			</table>
		</div>
	</div>
	<div id="detailDlg">
		<form id="showForm" name="showForm" method="post" action="">
			<table class="detailTable" width="100%">
				<tr width="100%">
					<td width="100px"><label>角色代码:</label></td>
					<td width="200px"><input id="roleno" name="roleno" type="text"
						size="20" required maxlength="4" number="true" /></td>
				</tr>
				<tr>
					<td>角色名称:</td>
					<td><input id="rolename" name="rolename" type="text" size="20"
						required /></td>
				</tr>
			</table>
		</form>
	</div>
	<div id="jqGridContainer">
		<table id="jqGridList"></table>
		<div id="jqGridPager"></div>
	</div>
</body>
</html>
