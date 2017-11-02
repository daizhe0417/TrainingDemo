<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
<head>
<%@include file="../common.jsp"%>
<script type='text/javascript' src='js/D0003.js'>
	
</script>
</head>

<body>
	<div id="queryBar">
		<div id="queryBarHeader"></div>
		<div class="queryFieldsContainer">
			<table>
				<tr>
					<td><input type="button" value="登陆名:" class="edit_title" /></td>
					<td><input id="query_userno" type="input" size="11" /></td>
					<td><input type="button" value="真实姓名:" class="edit_title" />
					</td>
					<td><input id="query_username" type="input" size="11" /></td>
					<td><input type="button" value="   角色:" class="edit_title" />
					</td>
					<td><select id="query_roleno" style="width:105px"></select></td>
				</tr>
			</table>
		</div>
	</div>
	<div id="detailDlg">
		<form id="showForm" name="showForm" method="post" action="">
			<table class="detailTable" width="100%">
				<td>部门</td>
				<td><input type="text" id="bmmc" size="20" name="bmmc"
					size="10"> <input type="hidden" id="bmdm" /></td>
				<tr width="100%">
					<td width="100px">登陆名：</td>
					<td width="200px"><input id="userno" name="userno" type="text"
						size="20" required maxlength="10" /></td>
				</tr>
				<tr>
					<td>真实姓名：</td>
					<td><input id="username" name="username" type="text" size="20"
						required /></td>
				</tr>
				<tr>
					<td>角色：</td>
					<td><select id="roleno" name="roleno" class="yangshi1"
						style="width:159px; _width:178px;height:24px;" required>
					</select></td>
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
