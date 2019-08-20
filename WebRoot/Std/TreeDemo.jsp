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
    <!-- /.box-header -->
    <div class="box-body">
        <div class="row">
            <div id="dzTreeContainer" class="col-xs-5" style="height: 550px;">
            </div>
            <div class="col-xs-5">
                <div class="box box-default">
                    <div class="box-header with-border">
                        <strong>部门详情</strong>
                        <button type="button" id="saveBtn" class="btn btn-sm btn-warning pull-right">保存部门详情
                        </button>
                    </div>
                    <form id="showForm" name="showForm" method="post" action="">
                        <input type="hidden" id="id">
                        <input type="hidden" id="parentId">
                        <input type="hidden" id="deltag">
                        <input type="hidden" id="seq">
                        <input type="hidden" id="bmdm">
                        <div class="box-body">
                            <div class="form-group">
                                <label for="bmmc">部门名称</label>
                                <input type="text" class="form-control" id="bmmc" name="bmmc">
                            </div>
                            <div class="form-group">
                                <label for="type">部门类型</label>
                                <input type="text" class="form-control" id="type" name="type">
                            </div>
                            <div class="form-group">
                                <label for="descrip">部门描述</label>
                                <input type="text" class="form-control" id="descrip" name="descrip">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- /.tab-pane -->
    </div>
    <!-- /.tab-content -->
</div>
<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/plugins/dzTree/js/dzTree.js?random=<%=Math.random()%>"></script>
<script src="<%=request.getContextPath()%>/Std/js/treeDemo.js?random=<%=Math.random()%>"></script>
</body>
</html>

