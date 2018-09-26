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
        <div class="row" style="padding-top: 20px;padding-bottom: 10px;">
            <div id="fuelux-wizard" data-target="#step-container">
                <!-- #section:plugins/fuelux.wizard.steps -->
                <ul class="wizard-steps">
                    <li data-target="#step1" class="active" id="stage1">
                        <span class="step">1</span>
                        <span class="title">选择产品</span>
                    </li>
                    <li data-target="#step2" id="stage2">
                        <span class="step">2</span>
                        <span class="title">设置参数</span>
                    </li>
                    <li data-target="#step3" id="stage3">
                        <span class="step">3</span>
                        <span class="title">方案回溯</span>
                    </li>
                    <li data-target="#step4" id="stage4">
                        <span class="step">4</span>
                        <span class="title">保存方案</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row step-Content" id="step1Content">
            <div class="col-xs-7">
                <div class="box">
                    <div class="box-body">
                        <div class="dataTables_wrapper form-inline dt-bootstrap">
                            <div id="jqGridContainer" class="row">
                                <table id="jqGridList"></table>
                                <div id="jqGridPager"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-4">
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">已选产品</h5>
                    </div>
                    <div class="box-body">
                        <table id="selectedProductTable" class="table">
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <button id="step1NextBtn" type="button" class="btn btn-success col-xs-offset-5 col-xs-2">下一步</button>
            </div>
        </div>
        <div class="row" id="step2Content" style="display: none">
            <div class="col-xs-10 col-xs-offset-1">
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">已选产品</h5>
                    </div>
                    <div class="box-body">
                        <table id="productTable" class="table">
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-xs-10 col-xs-offset-1">
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">选择配置模型</h5>
                    </div>
                    <div class="box-body">
                        <div class="btn-group col-xs-6 col-xs-offset-3" data-toggle="buttons">
                            <div class="col-xs-4">
                                <label class="btn btn-default btn-block active">
                                    <input type="radio" name="modelOpt" value="1" checked> 风险平价
                                </label>
                            </div>
                            <div class="col-xs-4">
                                <label class="btn btn-default btn-block">
                                    <input type="radio" name="modelOpt" value="2"> 风险预算
                                </label>
                            </div>
                            <div class="col-xs-4">
                                <label class="btn btn-default btn-block">
                                    <input type="radio" name="modelOpt" value="3"> 均值方差
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-10 col-xs-offset-1">
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">模型参数设置</h5>
                    </div>
                    <div class="box-body">
                        <div class="row">
                            <div class="btn-group col-xs-12" data-toggle="buttons">
                                <div class="col-xs-2">
                                    <label class="pull-right">预计风险计算区间</label>
                                </div>
                                <div class="col-xs-2">
                                    <label class="btn btn-default btn-block active">
                                        <input type="radio" name="fxPeriodOpt" value="11" checked> 近半年
                                    </label>
                                </div>
                                <div class="col-xs-2">
                                    <label class="btn btn-default btn-block">
                                        <input type="radio" name="fxPeriodOpt" value="12"> 近一年
                                    </label>
                                </div>
                                <div class="col-xs-2">
                                    <label class="btn btn-default btn-block">
                                        <input type="radio" name="fxPeriodOpt" value="13"> 近三年
                                    </label>
                                </div>
                                <div class="col-xs-2">
                                    <label class="btn btn-default btn-block">
                                        <input type="radio" name="fxPeriodOpt" value="14"> 近五年
                                    </label>
                                </div>
                                <div class="col-xs-2">
                                    <label class="btn btn-default btn-block">
                                        <input type="radio" name="fxPeriodOpt" value="15"> 全部历史
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="row" id="model2Content" style="display: none;">
                            <div class="btn-group col-xs-12" data-toggle="buttons">
                                <div class="col-xs-8">
                                    <h4>设置风险权重</h4>
                                    <label class="text-light-blue pull-right">*风险权重不能为0%且权重总和必须等于100.00%</label>
                                </div>
                                <div class="col-xs-8">
                                    <table id="fxqzTable" class="table">
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-xs-8">
                                    <label class="text-light-blue pull-right">剩余风险权重0%</label>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div id="model3Content" style="display: none;">
                            <div class="row">
                                <div class="btn-group col-xs-12" data-toggle="buttons">
                                    <div class="col-xs-2">
                                        <label class="pull-right">选择优化规则</label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block active">
                                            <input type="radio" name="yhgzOpt" value="21" checked> 夏普率最大化
                                        </label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block">
                                            <input type="radio" name="yhgzOpt" value="22"> 信息比率最大化
                                        </label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block">
                                            <input type="radio" name="yhgzOpt" value="23"> 目标收益下风险最小化
                                        </label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block">
                                            <input type="radio" name="yhgzOpt" value="24"> 目标风险下收益最大化
                                        </label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block">
                                            <input type="radio" name="yhgzOpt" value="25"> 目标风险厌恶系数
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="btn-group col-xs-12" data-toggle="buttons">
                                    <div class="col-xs-2">
                                        <label class="pull-right">预期收益率计算区间</label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block active">
                                            <input type="radio" name="syPeriodOpt" value="31" checked> 近半年
                                        </label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block">
                                            <input type="radio" name="syPeriodOpt" value="32"> 近一年
                                        </label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block">
                                            <input type="radio" name="syPeriodOpt" value="33"> 近三年
                                        </label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block">
                                            <input type="radio" name="syPeriodOpt" value="34"> 近五年
                                        </label>
                                    </div>
                                    <div class="col-xs-2">
                                        <label class="btn btn-default btn-block">
                                            <input type="radio" name="syPeriodOpt" value="35"> 全部历史
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <form class="form-horizontal">
                                <div class="form-group" id="xpzdhContent">
                                    <label for="wfxll" class="col-sm-2 control-label">无风险利率</label>
                                    <div class="col-sm-2">
                                        <div class='input-group'>
                                            <input type='text' id="wfxll" class='form-control' value='3' max='100'
                                                   min='0'>
                                            <span class='input-group-addon'>%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group" id="xxblzdhContent" style="display: none">
                                    <label for="wfxll" class="col-sm-2 control-label">业绩基准</label>
                                    <div class="col-sm-2">
                                        <select id="yjjz1" class="form-control input-sm">
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group" id="mbsyxfxContent" style="display: none">
                                    <label for="mbsyxx" class="col-sm-2 control-label">预期目标收益下限
                                    </label>
                                    <div class="col-sm-2">
                                        <div class='input-group'>
                                            <input type='text' id="mbsyxx" class='form-control' max='100'
                                                   min='0'>
                                            <span class='input-group-addon'>%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group" id="mbfxxsyContent" style="display: none">
                                    <label for="mbfxsx" class="col-sm-2 control-label">预期目标风险上限</label>
                                    <div class="col-sm-2">
                                        <div class='input-group'>
                                            <input type='text' id="mbfxsx" class='form-control' max='100'
                                                   min='0'>
                                            <span class='input-group-addon'>%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group" id="mbfxywxsContent" style="display: none">
                                    <label for="mbfxywxs" class="col-sm-2 control-label">目标风险厌恶系数</label>
                                    <div class="col-sm-2">
                                        <input type='text' id="mbfxywxs" class='form-control' max='10'
                                               min='0'>
                                    </div>
                                </div>
                                <!-- /.box-footer -->
                            </form>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div class="col-xs-10 col-xs-offset-1">
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">调仓参数设置</h5>
                    </div>
                    <form class="form-horizontal">
                        <div class="box-body">
                            <div class="form-group">
                                <label for="startMonth" class="col-sm-2 control-label">初始配置月份</label>
                                <div class="col-sm-2">
                                    <input id="startMonth" type="text" class="form-control input-sm" readonly>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-offset-4 col-xs-2">
                    <button id="step2PreBtn" type="button" class="btn btn-default col-xs-10">上一步</button>
                </div>
                <div class="col-xs-2">
                    <button id="step2NextBtn" type="button" class="btn btn-success col-xs-10">下一步</button>
                </div>
            </div>
        </div>
        <div class="row" id="step3Content" style="display: none">
            <div class="col-xs-10 col-xs-offset-1">
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">产品配置方案</h5>
                        <div class="pull-right">
                            <button type="button" id="pdfBtn" class="btn btn-default btn-sm checkbox-toggle"><i
                                    class="fa fa-print"></i>
                            </button>
                        </div>
                    </div>
                    <div class="box-body">
                        <table id="productConfTable" class="table">
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <div class="box-footer">
                        <div class="row">
                            <label class="col-xs-4 text-center">共4个产品</label>
                            <div class="col-xs-8 pull-right">
                                <label class="col-xs-4 text-center">剩余可用仓位</label>
                                <div class="progress progress-striped col-xs-7">
                                    <div id="progressBarSykycw" class="progress-bar progress-bar-success"
                                         role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         style="width: 90%;">
                                        <%--<span class="sr-only">90% 完成（成功）</span>--%>
                                    </div>
                                </div>
                                <label id="lbSykycw" class="col-xs-1"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">设置回测方案</h5>
                    </div>
                    <form class="form-horizontal">
                        <div class="box-body">
                            <div class="form-group col-xs-3">
                                <label for="lookBackRiqi_s" class="col-sm-5 control-label">回测起始日</label>
                                <div class="col-sm-7">
                                    <input id="lookBackRiqi_s" type="text" class="form-control input-sm" readonly>
                                </div>
                            </div>
                            <div class="form-group col-xs-3">
                                <label for="lookBackRiqi_e" class="col-sm-5 control-label">回测截至日</label>
                                <div class="col-sm-7">
                                    <input id="lookBackRiqi_e" type="text" class="form-control input-sm" readonly>
                                </div>
                            </div>
                            <div class="form-group col-xs-3">
                                <label for="yjjz2" class="col-sm-5 control-label">业绩基准</label>
                                <div class="col-sm-7">
                                    <select id="yjjz2" class="form-control input-sm">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-xs-3">
                                <label for="jzpl" class="col-sm-5 control-label">净值频率</label>
                                <div class="col-sm-7">
                                    <select id="jzpl" class="form-control input-sm">
                                        <option value="1">周</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="footer navbar-fixed-bottom  col-xs-12">
                <div class="box-body">
                    <div class="col-xs-offset-3 col-xs-2">
                        <button id="step3PreBtn" type="button" class="btn btn-default col-xs-10">上一步
                        </button>
                    </div>
                    <div class="col-xs-2">
                        <button id="lookBackBtn" type="button" class="btn btn-success col-xs-10">回测</button>
                    </div>
                    <div class="col-xs-2">
                        <button id="savePlanBtn" type="button" class="btn btn-success col-xs-10">保存</button>
                    </div>
                    <br>
                </div>
            </div>
            <div class="col-xs-10 col-xs-offset-1" id="lookBackContent" style="display: none">
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">业绩总览</h5>
                    </div>
                    <div class="box-body">
                        <div class="row">
                            <div class="col-xs-7">
                                <div class="nav-tabs-custom">
                                    <ul class="nav nav-tabs">
                                        <li class="active"><a href="#tab_income" data-toggle="tab">收益走势</a></li>
                                        <li><a href="#tab_netvalue" data-toggle="tab">净值走势</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tab_income">
                                            <div id="incomeEChartContainer" style="width:700px;height: 500px;">
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tab_netvalue">
                                            <div id="netvalueEChartContainer" style="width:700px;height: 500px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-5">
                                <table id="tbYejizonglan" class="table"></table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="box-header">
                        <h5 class="box-title">风险概览</h5>
                    </div>
                    <div class="box-body">
                        <div class="row">
                            <div class="col-xs-7">
                                <div id="riskEChartContainer" style="width:700px;height: 500px;">
                                </div>
                            </div>
                            <div class="col-xs-5">
                                <table id="tbFengxiangailan" class="table"></table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <br>
</div>
<%@include file="commonjs.jsp" %>
<%@include file="logout.jsp" %>
<script src="<%=request.getContextPath()%>/plugins/html2canvas/html2canvas.min.js"></script>
<script src="<%=request.getContextPath()%>/plugins/jsPDF/jspdf.debug.js"></script>
<script src="<%=request.getContextPath()%>/plugins/echarts/echarts-3.6.2.js"></script>
<script src="<%=request.getContextPath()%>/js/newCombine.js?random=<%=Math.random()%>"></script>
</body>
</html>

