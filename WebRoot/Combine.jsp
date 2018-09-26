<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>据兴科技</title>
    <link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
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
</div></div></div>
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
                            <label for="companyId">产品管理人</label>
                            <select class="form-control input-sm select2 select2-hidden-accessible"
                                    data-placeholder="选择基金公司"
                                    style="width: 100%;" tabindex="-1" aria-hidden="true"
                                    id="companyId">
                            </select>
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="managementId">基金经理</label>
                            <select class="form-control input-sm select2 select2-hidden-accessible"
                                    data-placeholder="选择基金经理"
                                    style="width: 100%;" tabindex="-1" aria-hidden="true"
                                    id="managementId">
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-6">
                            <label for="productName">基金产品名称</label>
                            <input class="form-control" id="productName">
                        </div>
                        <div class="form-group col-xs-6">
                            <label for="productCode">基金产品代码</label>
                            <input class="form-control" id="productCode">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-4">
                            <label for="largeClass">大类策略</label>
                            <input class="form-control" id="largeClass">
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="middleClass">二级细分策略</label>
                            <input class="form-control" id="middleClass">
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="littleClass">三级细分策略</label>
                            <input class="form-control" id="littleClass">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-4">
                            <label for="foundDate">成立时间</label>
                            <input class="form-control" id="foundDate">
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="scale">规模</label>
                            <input class="form-control" id="scale">
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="cutOffDate">净值截止日期</label>
                            <input class="form-control" id="cutOffDate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-4">
                            <label for="netValue">累计净值</label>
                            <input class="form-control" id="netValue">
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="dwjz">单位净值</label>
                            <input class="form-control" id="dwjz">
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="annualIncome">年化收益</label>
                            <input class="form-control" id="annualIncome">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-2">
                            <label for="sharpRatio">夏普比率</label>
                            <input class="form-control" id="sharpRatio">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="maxRetracement">最大回撤</label>
                            <input class="form-control" id="maxRetracement">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="informationRatio">信息比率</label>
                            <input class="form-control" id="informationRatio">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="treynorRatio">特雷诺比率</label>
                            <input class="form-control" id="treynorRatio">
                        </div>

                        <div class="form-group col-xs-2">
                            <label for="sortinoRatio">索提诺比率</label>
                            <input class="form-control" id="sortinoRatio">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="implementBeta">实现贝塔</label>
                            <input class="form-control" id="implementBeta">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-2">
                            <label for="mSquare">M平方</label>
                            <input class="form-control" id="mSquare">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="omegaRatio">Omega比率</label>
                            <input class="form-control" id="omegaRatio">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="kurtosis">峰度</label>
                            <input class="form-control" id="kurtosis">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="skewness">偏度</label>
                            <input class="form-control" id="skewness">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="jasenRatio">詹森比率</label>
                            <input class="form-control" id="jasenRatio">
                        </div>
                        <div class="form-group col-xs-2">
                            <label for="score">评分</label>
                            <input class="form-control" id="score">
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
<script src="<%=request.getContextPath()%>/js/combine.js?random=<%=Math.random()%>"></script>
</body>
</html>

