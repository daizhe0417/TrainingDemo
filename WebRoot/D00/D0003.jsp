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
				<input id="query_userno" type="text" class="form-control input-sm" placeholder="登录名">
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
		<div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
			<div id="jqGridContainer" class="row">
				<table id="jqGridList"></table>
				<div id="jqGridPager"></div>
			</div>
		</div>
		<!-- /.tab-pane -->
	</div>
	<!-- /.tab-content -->
</div>
<div class="modal" id="detailDlg" style="display: none;">
	<form id="showForm" name="showForm" method="post" action="">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">×</span></button>
					<h4 id="detailDlgTitleContainer" class="modal-title">Default Modal</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label for="userno">登录名</label>
						<input class="form-control" id="userno" name="userno">
					</div>
					<div class="form-group">
						<label for="username">用户名</label>
						<input class="form-control" id="username" name="username">
					</div>
					<div class="form-group">
						<label for="company">工作单位</label>
						<input class="form-control" id="company" name="company">
					</div>
					<div class="form-group">
						<label for="title">职务</label>
						<input class="form-control" id="title" name="title">
					</div>
					<div class="form-group">
						<label for="mobile">联系电话</label>
						<input class="form-control" id="mobile" name="mobile">
					</div>
					<div class="form-group">
						<label for="email">邮箱</label>
						<input class="form-control" id="email" name="email">
					</div>
					<div class="form-group">
						<label for="iptBusinessCardUploadFile">名片</label>
						<div class="file-loading">
							<input id="iptBusinessCardUploadFile" name="iptUploadFile[]" type="file">
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" id="detailDlgCloseBtn" class="btn btn-default pull-left" data-dismiss="modal">关闭</button>
					<button type="button" id="detailDlgSaveBtn" class="btn btn-primary">保存</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
	</form>
	<!-- /.modal-dialog -->
</div>
<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/D00/js/D0003.js?random=<%=Math.random()%>"></script>
</body>
</html>
