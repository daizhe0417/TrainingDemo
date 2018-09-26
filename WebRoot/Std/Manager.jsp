<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <%@include file="../commoncss.jsp" %>

</head>
<body>
<div class="box">
    <div class="box-header with-border" id="dzToolBar">
        <div class="row col-sm-8" id="queryFieldContainer">
            <div class="col-sm-4">
                <select class="form-control input-sm select2 select2-hidden-accessible"
                        data-placeholder="选择基金公司"
                        style="width: 100%;" tabindex="-1" aria-hidden="true"
                        id="query_companyId">
                </select>
            </div>
            <div class="col-sm-2">
                <input id="query_name" type="text" class=" form-control" placeholder="经理">
            </div>
            <%--<div class="row">--%>
                <%--<div class="col-sm-4">--%>
                    <%--<div class="input-group">--%>
                        <%--<input id="query_averageIncome_s" type="text" class=" form-control" placeholder="平均收益从">--%>
                        <%--<span class="input-group-addon ">至</span>--%>
                        <%--<input id="query_averageIncome_e" type="text" class=" form-control" placeholder="平均收益">--%>
                    <%--</div>--%>
                <%--</div>--%>
            <%--</div>--%>
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
                    <div class="row">
                        <div class="form-group col-xs-4">
                            <label for="name">姓名</label>
                            <input class="form-control" id="name" name="name">
                        </div>
                        <div class="form-group col-xs-8">
                            <label for="companyId">公司名称</label>
                            <select class="form-control input-sm select2 select2-hidden-accessible"
                                    data-placeholder="选择基金公司"
                                    style="width: 100%;" tabindex="-1" aria-hidden="true"
                                    id="companyId" name="companyId">
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-3">
                            <label for="sex">性别</label>
                            <input class="form-control" id="sex" name="sex">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="education">学历</label>
                            <input class="form-control" id="education" name="education">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="workDate">工作时间</label>
                            <input class="form-control" id="workDate" name="workDate">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="managementScale">职业背景</label>
                            <input class="form-control" id="managementScale" name="managementScale">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-3">
                            <label for="productCount">产品数量</label>
                            <input class="form-control" id="productCount" name="productCount">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="averageIncome">产品平均收益</label>
                            <input class="form-control" id="averageIncome" name="averageIncome">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="averageRetracement">产品平均回撤</label>
                            <input class="form-control" id="averageRetracement" name="averageRetracement">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="maxRetracement">历史最大回撤</label>
                            <input class="form-control" id="maxRetracement" name="maxRetracement">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-12">
                            <label for="iptresumeLinkUploadFile">简历链接</label>
                            <div class="file-loading">
                                <input id="iptresumeLinkUploadFile" name="iptUploadFile[]" type="file">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" id="detailDlgCloseBtn" class="btn btn-default pull-left"
                            data-dismiss="modal">关闭
                    </button>
                    <button type="button" id="detailDlgSaveBtn" class="btn btn-primary">保存</button>
                </div>
            </div>
        </div>
        <!-- /.modal-content -->
    </form>
    <!-- /.modal-dialog -->
</div>
<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/Std/js/manager.js?random=<%=Math.random()%>"></script>
</body>
</html>

