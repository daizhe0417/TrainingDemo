<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/plugins/select2/select2.min.css">
    <%@include file="../commoncss.jsp" %>
</head>
<body>
<div class="box">
    <div class="box-header with-border" id="dzToolBar">
        <div class="row col-sm-8" id="queryFieldContainer">
            <div class="col-sm-4">
                <select id="query_benchmarkId" type="text" class="form-control input-sm" placeholder="基准"></select>
            </div>
            <div class="col-sm-6">
                <div class="input-group">
                    <input id="query_riqi_s" type="text" class=" form-control" placeholder="日期">
                    <span class="input-group-addon ">至</span>
                    <input id="query_riqi_e" type="text" class=" form-control" placeholder="日期"></div>
            </div>
        </div>
        <div class="pull-right" id="toolBarBtnContainer">
        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
            <div class="row">
                <div class="col-sm-4">
                    <div id="jqGridContainer">
                        <table id="jqGridList"></table>
                        <div id="jqGridPager"></div>
                    </div>
                </div>
                <div id="eChartContainer" class="col-sm-8" style="height: 500px;">
                </div>
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
                        <label for="benchmarkId">基准基准</label>
                        <select class="form-control input-sm select2 select2-hidden-accessible"
                                data-placeholder="选择基准基准"
                                style="width: 100%;" tabindex="-1" aria-hidden="true"
                                id="benchmarkId" name="benchmarkId" required>
                        </select>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="riqi">日期</label>
                        <input type="text" class="form-control" id="riqi" value="riqi">
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="value">指数</label>
                        <input type="text" class="form-control" id="value" value="value">
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
<%--</div>--%>
<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/plugins/echarts/echarts-3.6.2.js"></script>
<script src="<%=request.getContextPath()%>/Std/js/BenchmarkValue.js?random=<%=Math.random()%>"></script>
</body>
</html>
