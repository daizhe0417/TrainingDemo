<%@ page language="java" import="cn.venice.gen.model.UserInfoModel,cn.venice.util.common.ConstantClass"
         pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>据兴科技</title>
    <link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
    <!-- iCheck -->
    <link rel="stylesheet" href="plugins/iCheck/flat/blue.css">
    <%@include file="commoncss.jsp" %>

</head>
<body class="hold-transition skin-blue-light layout-top-nav">
<div class="wrapper">

    <header class="main-header">
        <%@include file="nav.jsp" %>
    </header>


    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <div class="box">
            <div class="box-header with-border" id="dzToolBar">
                <div class="row col-sm-8" id="queryFieldContainer">
                    <div class="col-sm-4">
                        <select class="form-control input-sm select2 select2-hidden-accessible"
                                data-placeholder="选择基金公司"
                                style="width: 100%;" tabindex="-1" aria-hidden="true"
                                id="query_companyName">
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
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</div>
<!-- ./wrapper -->
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
                        <div class="form-group col-xs-8">
                            <label for="companyName">公司名称</label>
                            <select class="form-control input-sm select2 select2-hidden-accessible" multiple="multiple"
                                    data-placeholder="选择基金公司"
                                    style="width: 100%;" tabindex="-1" aria-hidden="true"
                                    id="companyName">
                            </select>
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="trace">状态</label>
                            <select id="trace" class="form-control input-sm">
                                <option value="0">跟踪</option>
                                <option value="1">尽调</option>
                                <option value="2">已投</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-6">
                            <label for="management">职业背景</label>
                            <input class="form-control" id="management">
                        </div>
                        <div class="form-group col-xs-6">
                            <label for="productCount">产品数量</label>
                            <input class="form-control" id="productCount">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-6">
                            <label for="qualitativeScore">定性得分</label>
                            <input class="form-control" id="qualitativeScore">
                            <div class="file-loading">
                                <input id="iptQualitativeLinkUploadFile" name="iptUploadFile[]" type="file">
                            </div>
                        </div>
                        <div class="form-group col-xs-6">
                            <label for="quantifyScore">定量得分</label>
                            <input class="form-control" id="quantifyScore">
                            <div class="file-loading">
                                <input id="iptQuantifyLinkUploadFile" name="iptUploadFile[]" type="file">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-6">
                            <label for="qualitativeScore">尽调报告</label>
                            <div class="file-loading">
                                <input id="iptTraceLinkUploadFile" name="iptUploadFile[]" type="file">
                            </div>
                        </div>
                        <div class="form-group col-xs-6">
                            <label for="quantifyScore">原始资料</label>
                            <div class="file-loading">
                                <input id="iptDocumentLinkUploadFile" name="iptUploadFile[]" type="file">
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
<%@include file="commonjs.jsp" %>
<%@include file="logout.jsp" %>
<script src="<%=request.getContextPath()%>/js/manager.js?random=<%=Math.random()%>"></script>
</body>
</html>

