<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
<head>
<%@include file="../common.jsp"%>
<script type='text/javascript' src='js/D0006.js'>
	
</script>
<script type='text/javascript'
	src='<%=request.getContextPath()%>/dwr/interface/d0101mgr.js'>
	
</script>
<script type='text/javascript'
	src='<%=request.getContextPath()%>/dwr/interface/D00_06action.js'>
	
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
								<td><input type="button" value="操作员名:" class="edit_title" />
								</td>
								<td><input id="query_czydm" type="input" size="11" /></td>
								<td><input type="button" value="真实姓名:" class="edit_title" />
								</td>
								<td><input id="query_czyname" type="input" size="11" /></td>
								<td><input type="button" value="   状态:" class="edit_title" />
								</td>
								<td><select id="query_status" style="width:105px"></select>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<div id="detailDlg">
					<form id="showForm" name="showForm" method="post" action="">
						<table class="detailTable" width="100%">
							<tr width="100%">
								<td width="100px">操作员名：</td>
								<td width="200px"><input id="czydm" name="czydm"
									style="width:125px;" type="text" size="20" required
									maxlength="4" minlength="4" /></td>
							</tr>
							<tr>
								<td>真实姓名：</td>
								<td><input id="czyname" name="czyname" type="text"
									style="width:125px;" size="20" required /></td>
							</tr>
							<tr>
								<td>终端：</td>
								<td><input type="text" id="zdmc" size="20"
									style="width:125px;" name="zdmc" size="10"> <input
										type="hidden" id="zddm" /></td>
							</tr>
							<tr>
								<td>状态：</td>
								<td><select id="status" name="status" class="yangshi1"
									style="width:127px; _width:198px;height:24px;" required>
								</select></td>
							</tr>
						</table>
					</form>
				</div>
			</td>
		</tr>
		<tr>
			<td><table id="jqGridList"></table>
				<div id="jqGridPager"></div></td>
		</tr>
	</table>
</body>
</html>
