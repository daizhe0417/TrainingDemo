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
        <%--<div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">--%>
        <%--<div id="jqGridContainer" class="row">--%>
        <%--<table id="jqGridList"></table>--%>
        <%--<div id="jqGridPager"></div>--%>
        <%--</div>--%>
        <%--</div>--%>
        <div id="dzDataTable" class="dataTables_wrapper form-inline dt-bootstrap">
            <%--<div class="row">--%>
            <%--<div class="col-sm-6">--%>
            <%--<div class="dataTables_length">--%>
            <%--<label>Show--%>
            <%--<select id="example1_length" name="example1_length" class="form-control input-sm">--%>
            <%--<option value="10">10</option>--%>
            <%--<option value="25">25</option>--%>
            <%--<option value="50">50</option>--%>
            <%--<option value="100">100</option>--%>
            <%--</select>--%>
            <%--entries--%>
            <%--</label>--%>
            <%--</div>--%>
            <%--</div>--%>
            <%--<div class="col-sm-6">--%>
            <%--<div id="example1_filter" class="dataTables_filter">--%>
            <%--<label>Search:--%>
            <%--<input type="search" class="form-control input-sm" placeholder="">--%>
            <%--</label>--%>
            <%--</div>--%>
            <%--</div>--%>
            <%--</div>--%>
            <div class="row">
                <div class="col-sm-12">
                    <%--<table id="example1" class="table table-bordered table-striped dataTable">--%>
                        <%--<thead>--%>
                        <%--<tr role="row">--%>
                            <%--<th class="sorting_asc" style="width: 193px;">Rendering engine--%>
                            <%--</th>--%>
                            <%--<th class="sorting" style="width: 246px;">Browser--%>
                            <%--</th>--%>
                            <%--<th class="sorting" style="width: 229px;">--%>
                                <%--Platform(s)--%>
                            <%--</th>--%>
                            <%--<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1"--%>
                                <%--aria-label="Engine version: activate to sort column ascending" style="width: 165px;">--%>
                                <%--Engine version--%>
                            <%--</th>--%>
                            <%--<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1"--%>
                                <%--aria-label="CSS grade: activate to sort column ascending" style="width: 126px;">CSS--%>
                                <%--grade--%>
                            <%--</th>--%>
                        <%--</tr>--%>
                        <%--</thead>--%>
                        <%--<tbody>--%>
                        <%--<tr role="row" class="odd">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Firefox 1.0</td>--%>
                            <%--<td>Win 98+ / OSX.2+</td>--%>
                            <%--<td>1.7</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="even">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Firefox 1.5</td>--%>
                            <%--<td>Win 98+ / OSX.2+</td>--%>
                            <%--<td>1.8</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="odd">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Firefox 2.0</td>--%>
                            <%--<td>Win 98+ / OSX.2+</td>--%>
                            <%--<td>1.8</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="even">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Firefox 3.0</td>--%>
                            <%--<td>Win 2k+ / OSX.3+</td>--%>
                            <%--<td>1.9</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="odd">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Camino 1.0</td>--%>
                            <%--<td>OSX.2+</td>--%>
                            <%--<td>1.8</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="even">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Camino 1.5</td>--%>
                            <%--<td>OSX.3+</td>--%>
                            <%--<td>1.8</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="odd">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Netscape 7.2</td>--%>
                            <%--<td>Win 95+ / Mac OS 8.6-9.2</td>--%>
                            <%--<td>1.7</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="even">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Netscape Browser 8</td>--%>
                            <%--<td>Win 98SE+</td>--%>
                            <%--<td>1.7</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="odd">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Netscape Navigator 9</td>--%>
                            <%--<td>Win 98+ / OSX.2+</td>--%>
                            <%--<td>1.8</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--<tr role="row" class="even">--%>
                            <%--<td class="sorting_1">Gecko</td>--%>
                            <%--<td>Mozilla 1.0</td>--%>
                            <%--<td>Win 95+ / OSX.1+</td>--%>
                            <%--<td>1</td>--%>
                            <%--<td>A</td>--%>
                        <%--</tr>--%>
                        <%--</tbody>--%>
                        <%--<tfoot>--%>
                        <%--<tr>--%>
                            <%--<th rowspan="1" colspan="1">Rendering engine</th>--%>
                            <%--<th rowspan="1" colspan="1">Browser</th>--%>
                            <%--<th rowspan="1" colspan="1">Platform(s)</th>--%>
                            <%--<th rowspan="1" colspan="1">Engine version</th>--%>
                            <%--<th rowspan="1" colspan="1">CSS grade</th>--%>
                        <%--</tr>--%>
                        <%--</tfoot>--%>
                    <%--</table>--%>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">
                    <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of
                        57 entries
                    </div>
                </div>
                <div class="col-sm-7">
                    <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                        <ul class="pagination">
                            <li class="paginate_button previous disabled" id="example1_previous"><a href="#"
                                                                                                    aria-controls="example1"
                                                                                                    data-dt-idx="0"
                                                                                                    tabindex="0">Previous</a>
                            </li>
                            <li class="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx="1"
                                                                  tabindex="0">1</a></li>
                            <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="2"
                                                            tabindex="0">2</a></li>
                            <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="3"
                                                            tabindex="0">3</a></li>
                            <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="4"
                                                            tabindex="0">4</a></li>
                            <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="5"
                                                            tabindex="0">5</a></li>
                            <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="6"
                                                            tabindex="0">6</a></li>
                            <li class="paginate_button next" id="example1_next"><a href="#" aria-controls="example1"
                                                                                   data-dt-idx="7" tabindex="0">Next</a>
                            </li>
                        </ul>
                    </div>
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
                            <button type="button" id="toDingXingbtn" class="btn btn-block btn-default">查看定性评分表
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
                    <button type="button" id="detailDlgSaveBtn" class="btn btn-primary ">保存</button>
                </div>
            </div>
        </div>
        <!-- /.modal-content -->
    </form>
    <!-- /.modal-dialog -->
</div>

<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/common/dzTable/dzTable.js?random=<%=Math.random()%>"></script>
<script src="<%=request.getContextPath()%>/Std/js/basicPage.js?random=<%=Math.random()%>"></script>
</body>
</html>

