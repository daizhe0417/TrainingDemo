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
            <div class="col-sm-4">
                <input id="query_name" type="text" class="form-control input-sm" placeholder="基准名称">
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
                        <label for="benchmarkName">基准名称</label>
                        <input type="text" class="form-control" id="benchmarkName" name="benchmarkName">
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="type">类型</label>
                        <select class="form-control" id="type" name="type">
                            <option value="0">股票</option>
                            <option value="1">期货</option>
                            <option value="2">债券</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="detailDlgCloseBtn" class="btn btn-default pull-left" data-dismiss="modal">
                        关闭
                    </button>
                    <button type="button" id="detailDlgSaveBtn" class="btn btn-primary">保存</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
    </form>
    <!-- /.modal-dialog -->
</div>
<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/common/dzTable/dzTable.js?random=<%=Math.random()%>"></script>
<script src="<%=request.getContextPath()%>/Std/js/Benchmark.js?random=<%=Math.random()%>"></script>
</body>
</html>

