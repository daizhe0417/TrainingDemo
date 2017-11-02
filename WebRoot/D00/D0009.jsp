<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
<head>
<%@include file="../common.jsp"%>
<script type='text/javascript' src='js/D0009.js'>
	
</script>
<!-- 
<script type='text/javascript'
	src='<%=request.getContextPath()%>/dwr/interface/d0001mgr.js'>
	
</script>
 -->
<script type='text/javascript'
	src='<%=request.getContextPath()%>/dwr/interface/d0002mgr.js'>
	
</script>
<script type='text/javascript'
	src='<%=request.getContextPath()%>/dwr/interface/d0003mgr.js'>
	
</script>
<script type='text/javascript'
	src='<%=request.getContextPath()%>/dwr/interface/D00_03action.js'>
	
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
								<td><input type="button" value="登陆名:" class="edit_title" />
								</td>
								<td><input id="query_userno" type="input" size="11" /></td>
								<td><input type="button" value="真实姓名:" class="edit_title" />
								</td>
								<td><input id="query_username" type="input" size="11" /></td>
								<!-- 
								<td><input id="query_username" type="input" size="15" /></td>
								<td><input type="button" value="部门:" class="edit_title" />
								</td>
								<td><select id="query_bmdm" style="width:105px"></select></td>
								 -->
								<td><input type="button" value="联系电话:" class="edit_title" />
								</td>
								<td><input id="query_mobile" type="input" size="11" /></td>
								<td><input type="button" value="   E-Mail:"
									class="edit_title" /></td>
								<td><input id="query_email" type="input" size="15" /></td>
								<td><input type="button" value="所属公司:" class="edit_title" />
								</td>
								<td><input id="query_gsmc" type="input" size="11" /></td>
							</tr>
							<tr>
								<td><input type="button" value="   角色:" class="edit_title" />
								</td>
								<td><select id="query_roleno" style="width:105px"></select>
								</td>
								<td><input type="button" value="是否绑定:" class="edit_title" />
								</td>
								<td><select id="query_isBound" style="width:105px"></select>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<div id="detailDlg">
					<form id="showForm" name="showForm" method="post" action="">
						<table class="detailTable" width="100%">
							<tr width="100%">
								<td width="100px">登陆名：</td>
								<td width="200px"><input id="userno" name="userno"
									type="text" size="20" readOnly/></td>
							</tr>
							<tr>
								<td>真实姓名：</td>
								<td><input id="username" name="username" type="text"
									size="20" required readOnly/></td>
							</tr>
							<tr>
								<td>代理商客户</td>
								<td><input id="bmmc" name="bmmc" type="text" size="20" />
									<input id="bmdm" name="bmdm" type="hidden" /><input
									type="hidden" id="khid" required/></td>
							</tr>
							<tr>
								<td>角色：</td>
								<td><select id="roleno" name="roleno" class="yangshi1"
									style="width:159px; _width:178px;height:24px;" required>
								</select></td>
							</tr>
							<tr>
								<td>手机号：</td>
								<td><input id="mobile" name="mobile" type="input" size="20"
									required readOnly/></td>
							</tr>
							<tr>
								<td>E-Mail：</td>
								<td><input id="email" name="email" type="input" size="20"
									required readOnly/></td>
							</tr>
							<tr>
								<td>所属公司：</td>
								<td><input id="gsmc" name="gsmc" type="input" size="20"
									required readOnly/></td>
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
