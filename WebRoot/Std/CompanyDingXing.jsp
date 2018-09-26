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
                <input id="query_companyName" type="text" class="form-control input-sm" placeholder="公司名称">
            </div>
            <div class="col-sm-2">
                <select id="query_trace" class="form-control input-sm">
                    <option value="">全部状态</option>
                    <option value="0">跟踪</option>
                    <option value="1">尽调</option>
                    <option value="2">已投</option>
                </select>
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
                    <div class="row">
                        <div class="form-group col-xs-8">
                            <label for="companyName">公司名称</label>
                            <input class="form-control" id="companyName" name="companyName">
                        </div>
                        <div class="form-group col-xs-4">
                            <label for="trace">状态</label>
                            <select id="trace" name="trace" class="form-control input-sm">
                                <option value="0">跟踪</option>
                                <option value="1">尽调</option>
                                <option value="2">已投</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-3">
                            <label for="foundDate">成立时间</label>
                            <input class="form-control" id="foundDate" name="foundDate">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="management">管理规模</label>
                            <input class="form-control" id="management" name="management">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="productCount">产品数量</label>
                            <input class="form-control" id="productCount" name="productCount">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="tjr">推荐人</label>
                            <input class="form-control" id="tjr" name="tjr">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-6">
                            <label for="qualitativeScore">定性得分</label>
                            <input class="form-control" id="qualitativeScore" name="qualitativeScore" readonly>
                            <button type="button" id="toDingXingbtn" class="btn btn-block btn-default">编辑定性评分表
                            </button>
                            <%--<input type="hidden" id="qualitativeLink">--%>
                            <%--<div class="file-loading">--%>
                            <%--<input id="iptQualitativeLinkUploadFile" name="iptUploadFile[]" type="file">--%>
                            <%--</div>--%>
                        </div>
                        <div class="form-group col-xs-6">
                            <label for="quantifyScore">定量得分</label>
                            <input class="form-control" id="quantifyScore" name="quantifyScore">
                            <%--<input type="hidden" id="quantifyLink">--%>
                            <div class="file-loading">
                                <input id="iptQuantifyLinkUploadFile" name="iptUploadFile[]" type="file">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-xs-6">
                            <label for="qualitativeScore">尽调报告</label>
                            <%--<input type="hidden" id="traceLink">--%>
                            <div class="file-loading">
                                <input id="iptTraceLinkUploadFile" name="iptUploadFile[]" type="file">
                            </div>
                        </div>
                        <div class="form-group col-xs-6">
                            <label for="quantifyScore">原始资料</label>
                            <%--<input type="hidden" id="documentLink">--%>
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

<div class="modal" id="dingxingDlg" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                <h4 class="modal-title">定性分析</h4>
            </div>
            <div class="modal-body" id="dingxingTableContent">
                <div class="box">
                    <div class="box-header with-border">
                        <h2 class="text-center">基金管理人定性分析综合调查表</h2>
                        <h4 class="text-center" id="dingxingCompanyName">公司名称</h4>
                        <input type="hidden" id="companyId">
                    </div>
                    <div class="box-body">
                        <table class="table table-bordered table-hover scrolltable"
                               style="display:block; max-height:600px;overflow-y: scroll;">
                            <%--<caption>公司名称</caption>--%>
                            <thead>
                            <tr class="bg-primary">
                                <td class="col-md-1"></td>
                                <td class="col-md-3">打分项目</td>
                                <td class="col-md-6">分值依据</td>
                                <td class="col-md-1">分值（总分40）</td>
                                <td class="col-md-1">得分</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="bg-gray">
                                <td class="col-md-1">一</td>
                                <td class="col-md-3">公司基本情况</td>
                                <td class="col-md-6"></td>
                                <td class="col-md-1">7分</td>
                                <td class="col-md-1"></td>
                            </tr>
                            <tr>
                                <td rowspan="4">1.1</td>
                                <td rowspan="4">成立时间</td>
                                <td>成立5年以上</td>
                                <td><input type="radio" value="3" name="radio11">&nbsp;&nbsp;&nbsp;3</td>
                                <td rowspan="4"><span id="score11"></span></td>
                            </tr>
                            <tr>
                                <td>3年-5年</td>
                                <td><input type="radio" value="2" name="radio11">&nbsp;&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td>2年-3年</td>
                                <td><input type="radio" value="1" name="radio11">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>2年以下</td>
                                <td><input type="radio" value="0" name="radio11">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="2">1.2</td>
                                <td rowspan="2">是否为基金业协会会员</td>
                                <td>是</td>
                                <td><input type="radio" value="1" name="radio12">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score12"></span></td>
                            </tr>
                            <tr>
                                <td>否</td>
                                <td><input type="radio" value="0" name="radio12">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="2">1.3</td>
                                <td rowspan="2">是否具备投顾资质</td>
                                <td>是</td>
                                <td><input type="radio" value="1" name="radio13">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score13"></span></td>
                            </tr>
                            <tr>
                                <td>否</td>
                                <td><input type="radio" value="0" name="radio13">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="5">1.4</td>
                                <td rowspan="5">社会信用纪录</td>
                                <td>提供外部单位（如银行、证券监管部门、中国期货业协会等）出具、公司认可的无不良信用记录证明，且经公司查询未发现不良信用记录</td>
                                <td><input type="radio" value="2" name="radio14">&nbsp;&nbsp;&nbsp;2</td>
                                <td rowspan="5"><span id="score14"></span></td>
                            </tr>
                            <tr>
                                <td>提供外部单位（如银行、证券监管部门等）出具信用记录证明，但经公司查询发现存在有个别瑕疵的信用记录</td>
                                <td><input type="radio" value="1" name="radio14">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>未提供任何信用记录，且无法查询到客户社会信用记录</td>
                                <td><input type="radio" value="0" name="radio14">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td>经公司查询发现存在较严重瑕疵的信用记录</td>
                                <td><input type="radio" value="-1" name="radio14">&nbsp;&nbsp;&nbsp;-1</td>
                            </tr>
                            <tr>
                                <td>经查询，存在重大不良信用记录</td>
                                <td><input type="radio" value="-2" name="radio14">&nbsp;&nbsp;&nbsp;-2</td>
                            </tr>

                            <tr class="bg-gray">
                                <td>二</td>
                                <td>公司管理情况</td>
                                <td></td>
                                <td>9分</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowspan="3">2.1</td>
                                <td rowspan="3">公司部门架构设置（包括具体负责人，部门人数，部门职责等）</td>
                                <td>公司架构清晰合理，符合公司发展情况</td>
                                <td><input type="radio" value="2" name="radio21">&nbsp;&nbsp;&nbsp;2</td>
                                <td rowspan="3"><span id="score21"></span></td>
                            </tr>
                            <tr>
                                <td>公司架构清晰，但部门设置不符合公司当前发展情况</td>
                                <td><input type="radio" value="1" name="radio21">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>公司架构不清晰，含部门职责有所交叉，职责不清晰</td>
                                <td><input type="radio" value="0" name="radio21">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="2">2.2</td>
                                <td rowspan="2">公司股权结构</td>
                                <td>公司核心管理人员及投研持有股权</td>
                                <td><input type="radio" value="1" name="radio22">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score22"></span></td>
                            </tr>
                            <tr>
                                <td>仅股东持有股份</td>
                                <td><input type="radio" value="0" name="radio22">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="2">2.3</td>
                                <td rowspan="2">对员工的薪酬及奖励机制</td>
                                <td>有明确的奖励机制，能做到对核心人员的利益绑定</td>
                                <td><input type="radio" value="1" name="radio23">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score23"></span></td>
                            </tr>
                            <tr>
                                <td>无明确的奖励机制</td>
                                <td><input type="radio" value="0" name="radio23">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="2">2.4</td>
                                <td rowspan="2">公司三年内员工管理层级投研人员离职情况（2）</td>
                                <td>无核心管理及投研人员离职</td>
                                <td><input type="radio" value="1" name="radio24">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score24"></span></td>
                            </tr>
                            <tr>
                                <td>有核心管理及投研人员离职</td>
                                <td><input type="radio" value="0" name="radio24">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="3">2.5</td>
                                <td rowspan="3">公司管理人员履历</td>
                                <td>公司核心管理人员具备相关职责的管理经验且平均年限超过5年</td>
                                <td><input type="radio" value="2" name="radio25">&nbsp;&nbsp;&nbsp;2</td>
                                <td rowspan="3"><span id="score25"></span></td>
                            </tr>
                            <tr>
                                <td>公司核心管理人员具备相关职责的管理经验且平均年限超过3年</td>
                                <td><input type="radio" value="1" name="radio25">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>公司核心管理人员具备相关职责的管理经验且平均年限低于3年</td>
                                <td><input type="radio" value="0" name="radio25">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="3">2.6</td>
                                <td rowspan="3">公司风控合规架构</td>
                                <td>有独立的风控及合规部门，且有专人负责相关合规及风控事项</td>
                                <td><input type="radio" value="2" name="radio26">&nbsp;&nbsp;&nbsp;2</td>
                                <td rowspan="3"><span id="score26"></span></td>
                            </tr>
                            <tr>
                                <td>有独立的风控及合规部门，但其负责人同时兼职其他职位</td>
                                <td><input type="radio" value="1" name="radio26">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>无独立的风控或合规部门</td>
                                <td><input type="radio" value="0" name="radio26">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr class="bg-gray">
                                <td>三</td>
                                <td>公司产品情况</td>
                                <td></td>
                                <td>7分</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowspan="5">3.1</td>
                                <td rowspan="5">公司目前管理产品总规模</td>
                                <td>总管理规模≥30亿</td>
                                <td><input type="radio" value="4" name="radio31">&nbsp;&nbsp;&nbsp;4</td>
                                <td rowspan="5"><span id="score31"></span></td>
                            </tr>
                            <tr>
                                <td>10亿≤总管理规模＜30亿</td>
                                <td><input type="radio" value="3" name="radio31">&nbsp;&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td>1亿≤总管理规模＜10亿</td>
                                <td><input type="radio" value="2" name="radio31">&nbsp;&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td>1000万≤总管理规模＜1亿</td>
                                <td><input type="radio" value="1" name="radio31">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>总管理规模＜1000万</td>
                                <td><input type="radio" value="0" name="radio31">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="4">3.2</td>
                                <td rowspan="4">公司产品资金来源</td>
                                <td>与银行、券商及第三方机构均有合作</td>
                                <td><input type="radio" value="3" name="radio32">&nbsp;&nbsp;&nbsp;3</td>
                                <td rowspan="4"><span id="score32"></span></td>
                            </tr>
                            <tr>
                                <td>与银行、券商、第三方机构中二者有合作</td>
                                <td><input type="radio" value="2" name="radio32">&nbsp;&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td>与银行、券商及第三方机构其一有合作</td>
                                <td><input type="radio" value="1" name="radio32">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr id="page_1">
                                <td>资金全部来源于个人客户</td>
                                <td><input type="radio" value="0" name="radio32">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr class="bg-gray">
                                <td>四</td>
                                <td>公司投研概况及投资理念</td>
                                <td></td>
                                <td>11分</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowspan="8">4.1</td>
                                <td rowspan="8">投资团队情况介绍</td>
                                <td>投资经理具备10年以上产品管理经验，且具备大资金（10亿以上，下同）管理经验</td>
                                <td><input type="radio" value="5" name="radio41">&nbsp;&nbsp;&nbsp;5</td>
                                <td rowspan="8"><span id="score41"></span></td>
                            </tr>
                            <tr>
                                <td>投资经理具备5年以上产品管理经验，且具备大资金管理经验</td>
                                <td><input type="radio" value="4" name="radio41">&nbsp;&nbsp;&nbsp;4</td>
                            </tr>
                            <tr>
                                <td>投资经理具备5年以上产品管理经验，但不具备大资金管理经验</td>
                                <td><input type="radio" value="3" name="radio41">&nbsp;&nbsp;&nbsp;3</td>
                            </tr>
                            <tr>
                                <td>投资经理具备3年以上产品管理经验，且具备大资金管理经验</td>
                                <td><input type="radio" value="2" name="radio41">&nbsp;&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td>投资经理具备3年以上产品管理经验，不具备大资金管理经验</td>
                                <td><input type="radio" value="1" name="radio41">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>投资经理具备2年以上产品管理经验，具备大资金管理经验</td>
                                <td><input type="radio" value="1" name="radio41">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>投资经理具备2年以上产品管理经验、不具备大资金管理经验</td>
                                <td><input type="radio" value="0" name="radio41">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td>投资经理产品管理经验两年以下</td>
                                <td><input type="radio" value="0" name="radio41">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="4">4.2</td>
                                <td rowspan="4">投研团队情况介绍</td>
                                <td>核心研究员平均具备5年以上相关行业研究经验</td>
                                <td><input type="radio" value="3" name="radio42">&nbsp;&nbsp;&nbsp;3</td>
                                <td rowspan="4"><span id="score42"></span></td>
                            </tr>
                            <tr>
                                <td>平均具备3年以上行业研究经验</td>
                                <td><input type="radio" value="2" name="radio42">&nbsp;&nbsp;&nbsp;2</td>
                            </tr>
                            <tr>
                                <td>核心研究员平均具备1年以上研究经验</td>
                                <td><input type="radio" value="1" name="radio42">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>研究员研究经验在一年以下</td>
                                <td><input type="radio" value="0" name="radio42">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="2">4.3</td>
                                <td rowspan="2">公司外部研究资源获取能力</td>
                                <td>具有投资标的研究资源或者策略储备</td>
                                <td><input type="radio" value="1" name="radio43">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score43"></span></td>
                            </tr>
                            <tr>
                                <td>无投资标的研究资源且无策略储备</td>
                                <td><input type="radio" value="0" name="radio43">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="3">4.4</td>
                                <td rowspan="3">公司投资理念及投资逻辑</td>
                                <td>公司具备清晰的投资理念及投资逻辑，对于不同宏观经济具备清晰的投资逻辑</td>
                                <td><input type="radio" value="1" name="radio44">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="3"><span id="score44"></span></td>
                            </tr>
                            <tr>
                                <td>公司不具备清晰的投资理念及投资逻辑，投资逻辑不清晰</td>
                                <td><input type="radio" value="0" name="radio44">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td>投资逻辑理念不吻合其操作情况</td>
                                <td><input type="radio" value="-1" name="radio44">&nbsp;&nbsp;&nbsp;-1</td>
                            </tr>
                            <tr>
                                <td rowspan="2">4.5</td>
                                <td rowspan="2">公司投资决策流程</td>
                                <td>公司具备清晰的决策投资流程，标的买入和卖出决策具有清晰依据</td>
                                <td><input type="radio" value="1" name="radio45">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score45"></span></td>
                            </tr>
                            <tr>
                                <td>公司投资决策流程模糊，票的买入和卖出无合理依据</td>
                                <td><input type="radio" value="0" name="radio45">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr class="bg-gray">
                                <td>五</td>
                                <td>公司交易情况</td>
                                <td></td>
                                <td>6分</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowspan="3">5.1</td>
                                <td rowspan="3">公司是否有独立的交易室</td>
                                <td>有独立的交易室，与外界隔离，严格分离投资、交易、风控</td>
                                <td><input type="radio" value="2" name="radio51">&nbsp;&nbsp;&nbsp;2</td>
                                <td rowspan="3"><span id="score51"></span></td>
                            </tr>
                            <tr>
                                <td>有独立的交易室，不与外界隔离，较好的分离投资、交易、风控</td>
                                <td><input type="radio" value="1" name="radio51">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>无独立交易室，未进行相关风险隔离</td>
                                <td><input type="radio" value="0" name="radio51">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="2">5.2</td>
                                <td rowspan="2">下单交易流程介绍</td>
                                <td>具备流畅的下单交易流程</td>
                                <td><input type="radio" value="1" name="radio52">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score52"></span></td>
                            </tr>
                            <tr>
                                <td>不具备流畅的下单交易流程</td>
                                <td><input type="radio" value="0" name="radio52">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="2">5.3</td>
                                <td rowspan="2">交易员、风控人员及基金经理之间的交流沟通路径</td>
                                <td>交易员、风控人员与基金经理之间具有流畅的沟通流程</td>
                                <td><input type="radio" value="1" name="radio53">&nbsp;&nbsp;&nbsp;1</td>
                                <td rowspan="2"><span id="score53"></span></td>
                            </tr>
                            <tr>
                                <td>交易员、风控人员与基金经理之间无流畅的沟通流程</td>
                                <td><input type="radio" value="0" name="radio53">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            <tr>
                                <td rowspan="3">5.4</td>
                                <td rowspan="3">交易员履历</td>
                                <td>从事交易员年限≥2年</td>
                                <td><input type="radio" value="2" name="radio54">&nbsp;&nbsp;&nbsp;2</td>
                                <td rowspan="3"><span id="score54"></span></td>
                            </tr>
                            <tr>
                                <td>1年≤从事交易员年限＜2年</td>
                                <td><input type="radio" value="1" name="radio54">&nbsp;&nbsp;&nbsp;1</td>
                            </tr>
                            <tr>
                                <td>从事交易员年限＜1年</td>
                                <td><input type="radio" value="0" name="radio54">&nbsp;&nbsp;&nbsp;0</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr class="bg-primary">
                                <td></td>
                                <td colspan="3">总得分</td>
                                <td><span id="totalScore"></span></td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" id="dingxingDlgCloseBtn" class="btn btn-default pull-left"
                        data-dismiss="modal">关闭
                </button>
                <button type="button" id="dingxingDlgExpBtn" class="btn btn-success">导出</button>
                <button type="button" id="dingxingDlgSaveBtn" class="btn btn-primary">保存</button>
            </div>
        </div>
    </div>
</div>
<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/plugins/html2canvas/html2canvas.min.js"></script>
<script src="<%=request.getContextPath()%>/plugins/jsPDF/jspdf.debug.js"></script>
<script src="<%=request.getContextPath()%>/Std/js/companyDingXing.js?random=<%=Math.random()%>"></script>
</body>
</html>

