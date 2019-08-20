<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<%@include file="../commoncss.jsp" %>
</head>
<body>
<div class="box">
	<div class="box-header with-border" id="dzToolBar">
		<div class="row col-sm-8" id="queryFieldContainer">
			<div class="col-sm-3">
				<input id="query_userno" type="text" class="form-control " placeholder="登录名">
			</div>
			<div class="col-sm-3">
				<input id="query_username" type="text" class="form-control input-sm" placeholder="用户名称">
			</div>
		</div>
		<div class="pull-right" id="toolBarBtnContainer">
		</div>
	</div>
	<!-- /.box-header -->
	<div class="box-body">
		<div id="dzGridContainer" class="dataTables_wrapper form-inline dt-bootstrap">
		</div>
		<!-- /.tab-pane -->
	</div>
	<!-- /.tab-content -->
</div>
<div class="modal" id="detailDlg" style="display: none;">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span></button>
				<h4 id="detailDlgTitleContainer" class="modal-title">Default Modal</h4>
			</div>
			<form id="showForm" name="showForm" method="post" action="">
				<div class="modal-body">
					<div class="form-group">
						<label for="userNo">登录名</label>
						<input class="form-control" id="userNo" name="userNo" maxlength="20">
					</div>
					<div class="form-group">
						<label for="userName">用户名</label>
						<input class="form-control" id="userName" name="userName">
					</div>
					<div class="form-group">
						<label for="roleId">角色</label>
						<select id="roleId" class="form-control input-sm" required>
						</select>
					</div>
					<div class="form-group">
						<label for="bmId">部门</label>
						<select id="bmId" class="form-control input-sm">
						</select>
					</div>
				</div>
			</form>
			<div class="modal-footer">
				<button type="button" id="detailDlgCloseBtn" class="btn btn-default pull-left" data-dismiss="modal">关闭
				</button>
				<button type="button" id="detailDlgSaveBtn" class="btn btn-primary">保存</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal-dialog -->
</div>
<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/D00/js/D0003.js?random=<%=Math.random()%>"></script>
</body>
</html>
