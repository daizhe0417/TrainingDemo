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
        <div class="row">
            <h2 class="text-center">选择创建方案类型</h2>
        </div>
        <div class="row">
            <div class="col-sm-3">
                &nbsp;
            </div>
            <div class="col-sm-3">
                <div class="box box-success">
                    <div class="box-header"><h4 class="text-center">基金配置</h4></div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="box box-danger col-sm-3">
                    <div class="box-header"><h4 class="text-center">方案回溯</h4></div>
                </div>
            </div>
            <div class="col-sm-3">
                &nbsp;
            </div>
        </div>
    </div>
</div>
<%@include file="commonjs.jsp" %>
<%@include file="logout.jsp" %>
<script src="<%=request.getContextPath()%>/js/newCombine.js?random=<%=Math.random()%>"></script>
</body>
</html>

