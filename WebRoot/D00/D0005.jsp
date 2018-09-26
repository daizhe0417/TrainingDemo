<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <%@include file="../commoncss.jsp" %>
    <script type="text/javascript">
        <%
            if(request.getAttribute("D0005.save.failure")!=null&&((String)request.getAttribute("D0005.save.failure")).equals("true")){
                %>
        alert("保存失败！");
        <%
    }else if(request.getAttribute("D0005.save.success")!=null&&((String)request.getAttribute("D0005.save.success")).equals("true")){
        %>
        alert("保存成功！");
        <%
    }
%>
    </script>
</head>
<body>
<div class="box">
    <div class="box-header with-border" id="dzToolBar">
        <div class="row col-sm-8" id="queryFieldContainer">
        </div>
        <div class="pull-right" id="toolBarBtnContainer">
            <button type="button" id="savBtn" class="btn btn-sm btn-default btn-info" style="margin: 0px 2px;">保存</button>
        </div>
    </div>
    <div class="row">
        <form action="D00_05action_save.action" method="post" id="showform"
              name="showform">
            <div class="col-sm-1"></div>
            <div class="col-sm-4">
                <div class="box box-solid">
                    <div class="box-header with-border">
                        <h3 class="box-title">选择角色</h3>
                    </div>
                    <div class="box-body">
                        <div id="roles"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="box box-solid">
                    <div class="box-header with-border">
                        <h3 class="box-title">选择功能</h3>
                    </div>
                    <div class="box-body">
                        <table id="tree"></table>
                    </div>
                </div>
            </div>
            <div class="col-sm-1"></div>
        </form>
    </div>
</div>
<%@include file="../commonjs.jsp" %>
<script src="<%=request.getContextPath()%>/D00/js/D0005.js?random=<%=Math.random()%>"></script>
</body>
</html>