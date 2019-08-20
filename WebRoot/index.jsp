<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ page
        import="cn.venice.gen.model.UserInfoModel,cn.venice.util.common.ConstantClass" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <title>教学项目</title>
    <link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="dist/css/skins/_all-skins.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="plugins/iCheck/flat/blue.css">
    <!-- Morris chart -->
    <link rel="stylesheet" href="plugins/morris/morris.css">
    <!-- jvectormap -->
    <link rel="stylesheet" href="plugins/jvectormap/jquery-jvectormap-1.2.2.css">
    <!-- Date Picker -->
    <%--<link rel="stylesheet" href="plugins/datepicker/datepicker3.css">--%>
    <!-- Daterange picker -->
    <%--<link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">--%>
    <!-- bootstrap wysihtml5 - text editor -->
    <%--<link rel="stylesheet" href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">--%>

    <%--dataTables--%>
    <link rel="stylesheet" href="plugins/datatables/dataTables.bootstrap.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <%--<script src="util/jquery/jquery-2.2.3.min.js"></script>--%>


</head>
<body class="hold-transition skin-blue-light sidebar-mini">
<div class="wrapper">

    <header class="main-header">
        <!-- Logo -->
        <a href="#" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>教学项目</b>实验室</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>教学项目</b>实验室</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">展开收起导航栏</span>
            </a>

            <%--待办消息--%>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <%--</li>--%>
                    <li>
                        <a id="a_logout" data-toggle="control-sidebar"><i class="fa fa-power-off"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p><%= ((UserInfoModel) session.getAttribute(ConstantClass.LOGIN_USER_SESSION_ID)).getUserName()%></p>
                    <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
                </div>
            </div>
            <!-- search form -->
            <%--<form action="#" method="get" class="sidebar-form">--%>
            <%--<div class="input-group">--%>
            <%--<input type="text" name="q" class="form-control" placeholder="Search...">--%>
            <%--<span class="input-group-btn">--%>
            <%--<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>--%>
            <%--</button>--%>
            <%--</span>--%>
            <%--</div>--%>
            <%--</form>--%>
            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" id="ul_treeMenu">
                <%--<li class="header">MAIN NAVIGATION</li>--%>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <%--<h1>--%>
            <%--Dashboard--%>
            <%--<small>Control panel</small>--%>
            <%--</h1>--%>
            <%--<ol class="breadcrumb">--%>
            <%--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>--%>
            <%--<li class="active">Dashboard</li>--%>
            <%--</ol>--%>
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li class="active" id="li_tab_homePage"><a id="a_homePage" data-toggle="tab"
                                                               aria-expanded="true">首页</a>
                    </li>
                    <li class="pull-right" id="li_tab_closeAllTab">
                        <a class="text-muted" id="a_closeAllTab"><i class="fa fa-times-circle"></i></a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab_homePage">
                        <div class="row">
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <div class="info-box">
                                    <span class="info-box-icon bg-aqua"><i class="ion ion-ios-gear-outline"></i></span>

                                    <div class="info-box-content">
                                        <span class="info-box-text">CPU Traffic</span>
                                        <span class="info-box-number">90<small>%</small></span>
                                    </div>
                                    <!-- /.info-box-content -->
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <!-- /.col -->
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <div class="info-box">
                                    <span class="info-box-icon bg-red"><i class="fa fa-google-plus"></i></span>

                                    <div class="info-box-content">
                                        <span class="info-box-text">Likes</span>
                                        <span class="info-box-number">41,410</span>
                                    </div>
                                    <!-- /.info-box-content -->
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <!-- /.col -->

                            <!-- fix for small devices only -->
                            <div class="clearfix visible-sm-block"></div>

                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <div class="info-box">
                                    <span class="info-box-icon bg-green"><i class="ion ion-ios-cart-outline"></i></span>

                                    <div class="info-box-content">
                                        <span class="info-box-text">Sales</span>
                                        <span class="info-box-number">760</span>
                                    </div>
                                    <!-- /.info-box-content -->
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <!-- /.col -->
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <div class="info-box">
                                    <span class="info-box-icon bg-yellow"><i
                                            class="ion ion-ios-people-outline"></i></span>

                                    <div class="info-box-content">
                                        <span class="info-box-text">New Members</span>
                                        <span class="info-box-number">2,000</span>
                                    </div>
                                    <!-- /.info-box-content -->
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <!-- /.col -->
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="box">
                                    <div class="box-header with-border">
                                        <h3 class="box-title">Monthly Recap Report</h3>

                                        <div class="box-tools pull-right">
                                            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i
                                                    class="fa fa-minus"></i>
                                            </button>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-box-tool dropdown-toggle"
                                                        data-toggle="dropdown">
                                                    <i class="fa fa-wrench"></i></button>
                                                <ul class="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                                                    class="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                    <!-- /.box-header -->
                                    <div class="box-body">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <p class="text-center">
                                                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                                                </p>

                                                <div class="chart">
                                                    <!-- Sales Chart Canvas -->
                                                    <canvas id="salesChart" style="height: 180px; width: 753px;"
                                                            height="360" width="1506"></canvas>
                                                </div>
                                                <!-- /.chart-responsive -->
                                            </div>
                                            <!-- /.col -->
                                            <div class="col-md-4">
                                                <p class="text-center">
                                                    <strong>Goal Completion</strong>
                                                </p>

                                                <div class="progress-group">
                                                    <span class="progress-text">Add Products to Cart</span>
                                                    <span class="progress-number"><b>160</b>/200</span>

                                                    <div class="progress sm">
                                                        <div class="progress-bar progress-bar-aqua"
                                                             style="width: 80%"></div>
                                                    </div>
                                                </div>
                                                <!-- /.progress-group -->
                                                <div class="progress-group">
                                                    <span class="progress-text">Complete Purchase</span>
                                                    <span class="progress-number"><b>310</b>/400</span>

                                                    <div class="progress sm">
                                                        <div class="progress-bar progress-bar-red"
                                                             style="width: 80%"></div>
                                                    </div>
                                                </div>
                                                <!-- /.progress-group -->
                                                <div class="progress-group">
                                                    <span class="progress-text">Visit Premium Page</span>
                                                    <span class="progress-number"><b>480</b>/800</span>

                                                    <div class="progress sm">
                                                        <div class="progress-bar progress-bar-green"
                                                             style="width: 80%"></div>
                                                    </div>
                                                </div>
                                                <!-- /.progress-group -->
                                                <div class="progress-group">
                                                    <span class="progress-text">Send Inquiries</span>
                                                    <span class="progress-number"><b>250</b>/500</span>

                                                    <div class="progress sm">
                                                        <div class="progress-bar progress-bar-yellow"
                                                             style="width: 80%"></div>
                                                    </div>
                                                </div>
                                                <!-- /.progress-group -->
                                            </div>
                                            <!-- /.col -->
                                        </div>
                                        <!-- /.row -->
                                    </div>
                                    <!-- ./box-body -->
                                    <div class="box-footer">
                                        <div class="row">
                                            <div class="col-sm-3 col-xs-6">
                                                <div class="description-block border-right">
                                                    <span class="description-percentage text-green"><i
                                                            class="fa fa-caret-up"></i> 17%</span>
                                                    <h5 class="description-header">$35,210.43</h5>
                                                    <span class="description-text">TOTAL REVENUE</span>
                                                </div>
                                                <!-- /.description-block -->
                                            </div>
                                            <!-- /.col -->
                                            <div class="col-sm-3 col-xs-6">
                                                <div class="description-block border-right">
                                                    <span class="description-percentage text-yellow"><i
                                                            class="fa fa-caret-left"></i> 0%</span>
                                                    <h5 class="description-header">$10,390.90</h5>
                                                    <span class="description-text">TOTAL COST</span>
                                                </div>
                                                <!-- /.description-block -->
                                            </div>
                                            <!-- /.col -->
                                            <div class="col-sm-3 col-xs-6">
                                                <div class="description-block border-right">
                                                    <span class="description-percentage text-green"><i
                                                            class="fa fa-caret-up"></i> 20%</span>
                                                    <h5 class="description-header">$24,813.53</h5>
                                                    <span class="description-text">TOTAL PROFIT</span>
                                                </div>
                                                <!-- /.description-block -->
                                            </div>
                                            <!-- /.col -->
                                            <div class="col-sm-3 col-xs-6">
                                                <div class="description-block">
                                                    <span class="description-percentage text-red"><i
                                                            class="fa fa-caret-down"></i> 18%</span>
                                                    <h5 class="description-header">1200</h5>
                                                    <span class="description-text">GOAL COMPLETIONS</span>
                                                </div>
                                                <!-- /.description-block -->
                                            </div>
                                        </div>
                                        <!-- /.row -->
                                    </div>
                                    <!-- /.box-footer -->
                                </div>
                                <!-- /.box -->
                            </div>
                            <!-- /.col -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <b>Version</b> 1.3.8
        </div>
        <strong>Copyright &copy; 2017-2018 <a href="#">网络攻防</a>.</strong> All rights
        reserved.
    </footer>

</div>
<!-- ./wrapper -->

<!-- jQuery 2.2.3 -->
<script src="util/jquery/jquery-2.2.3.min.js"></script>
<script src="plugins/dzConfirm/dzConfirm.js"></script>
<script src="common/ajax.js"></script>
<script type="text/javascript">
    var currentTab = "homePage";
    jQuery(document).ready(function () {
        ajax({
            url: "D00_05action_getRightsBySession",
            success: function (item) {
                if (item.status == 1) {
//                    alert(JSON.stringify(item));
                    var treeObj = $("#ul_treeMenu");
                    var menuList = item.datas;
                    for (var i = 0; i < menuList.length; i++) {
                        var id = menuList[i].menuid;
                        var text = menuList[i].text;
                        var url = menuList[i].url == undefined ? '' : menuList[i].url;
                        var targetStr = menuList[i].target ? ('target="' + menuList[i].target + '"') : '';
                        if (id.length == 2) {
                            treeObj.append('<li class="treeview closed" id="menu_' + id + '">' +
                                '<a url="' + url + '" id="' + id + '" text="' + text + '" ' + targetStr + '>' +
                                '<i class="fa fa-dashboard"></i>' +
                                '<span>' + text + '</span>' +
                                '<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>' +
                                '</a>' +
                                '</li>');
                        } else {
                            var parentMenu = $("#menu_" + id.substring(0, id.length - 2));
                            var ul = parentMenu.children("treeview-menu");
                            if (ul.length > 0) {
                                ul.append('<li id="menu_' + id + '" class="treeview"><a url="' + url + '" id="' + id + '" text="' + text + '"' + targetStr + '><i class="fa fa-circle-o"></i>' + text + '</a></li>');
                            } else {
                                parentMenu.children("a").append('<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>');
                                parentMenu.append('<ul class="treeview-menu">' +
                                    '<li id="menu_' + id + '" class="treeview"><a url="' + url + '" id="' + id + '" text="' + text + '"' + targetStr + '><i class="fa fa-circle-o"></i>' + text + '</a></li>' +
                                    '</ul>');
                            }
                        }
                    }
                    $(".treeview").on("click", function (e) {
                        var parent = $(this);
                        var status = $(this).hasClass("opened");
                        e.stopPropagation();
                        $(this).children(".treeview-menu").each(function () {
                            if (status) {
                                $(this).hide(500);
                                parent.removeClass("opened").addClass("closed");
                            } else {
                                $(this).show(500);
                                parent.removeClass("closed").addClass("opened");
                            }
                        });
                    });
                    // $.AdminLTE.tree('.sidebar');
                    treeObj.find('a').each(function () {
                        $(this).on("click", function () {
                            if ($(this).attr("target") == 'blank') {
                                window.open($(this).attr('url'));
                                return;
                            }
                            var url = $(this).attr('url');
                            if (url == '') {
                                return;
                            }
                            var id = $(this).attr("id");
//                            alert(id + "===" + url);
                            if ($("#li_tab_" + id).length > 0) {
                                activeTab(id);
                                return;
                            }
                            $("#li_tab_closeAllTab").before('<li id="li_tab_' + id + '">' +
                                '<a " id="a_' + id + '" data-toggle="tab" aria-expanded="false">'
                                + $(this).attr("text") + '<i class= "fa fa-times" id="i_' + id + '"> </i> </a></li>');

                            if ($("#tab_" + id).length > 0) {
                            } else {
                                $(".tab-content").append('<div class="tab-pane" id="tab_' + id + '">' +
                                    '</div>');
//                                $("#tab_" + id).load(url);
                                $("#tab_" + id).append('<iframe id="iframe_' + id + '" name="iframe_' + id + '" style="border:0px;width:100%;height:100%;"/>');
                                window.open(url, 'iframe_' + id);
                            }

                            activeTab(id);

                            $(".nav-tabs li a").on("click", function () {
                                activeTab($(this).attr("id").replace("a_", ""));
                            });

                            $("#i_" + id).on("click", {id: id}, function (e) {
                                $("#li_tab_" + e.data.id).remove();
                                $("#tab_" + e.data.id).remove();
                                var lastTab = $(".nav-tabs li:nth-last-child(2)");
                                var lastTabId = lastTab.attr("id");
                                activeTab(lastTabId.replace("li_tab_", ""));
                                return false;
                            })
                        });
                    });
                }
            },
            error:function (item) {
                DzConfirm.alert("暂无用户权限设置");
            }
        });
        $("#li_tab_closeAllTab").on("click", function () {
            $("li[id^='li_tab_'][id!='li_tab_homePage'][id!='li_tab_closeAllTab']").each(function () {
                $(this).remove();
            });
            activeTab("homePage");
        });
        $("#a_logout").on("click", function () {
            $.ajax({
                url: "login!logout.action?random=" + Math.random(),
                type: "POST",
                data: {},
                timeout: 30000,
                dataType: "json",
                success: function (item) {
//                    if (item.status == 1) {
//                        top.location = "login.jsp";
//                    } else if (item.status == 2) {
                    top.location = "login.jsp";
//                    }
                },
                error: function () {
                    alert("未能退出登录");
                }
            });
//            ajax({
//                url : "login!logout.action?random=" + Math.random(),
//                data : {},
//                success : function(item) {
//                    alert(JSON.stringify(item));
//                    if (item.status == 1) {
//                        top.location = "login.jsp";
//                    } else if (item.status == 2) {
//                        top.location = "login.jsp";
//                    }
//                },
//                error : function() {
//                    alert("ddd")
//                }
//            });
        });
    });

    function activeTab(id) {
//        alert(currentTab + "=||==" + id);
        if ($("#li_tab_" + currentTab).length > 0) {
            $("#li_tab_" + currentTab).removeClass("active");
        }
        if ($("#tab_" + currentTab).length > 0) {
            $("#tab_" + currentTab).removeClass("active");
        }
        $("#li_tab_" + id).addClass("active");

        $("#tab_" + id).addClass("active");
        currentTab = id;
    }

    function resizeTab() {
        console.log("resizeTab");
        // alert("resizeTab"+$(this).contents().find("body").height());
        $(".nav-tabs li").each(function () {
            if ($(this).hasClass("active")) {
                var id = $(this).attr("id").replace("li_tab_", "");
                console.log("id = " + id);
                console.log($("#iframe_" + id).contents().find("body").height());
                $("#iframe_" + id).height($("#iframe_" + id).contents().find("body").height() + 10);
                $("#tab_" + id).height($("#iframe_" + id).contents().find("body").height() + 10);
            }
        });
    }
</script>
<!-- Bootstrap 3.3.6 -->
<script src="bootstrap/js/bootstrap.min.js"></script>
<!-- Morris.js charts -->
<%--<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>--%>
<%--<script src="plugins/morris/morris.min.js"></script>--%>
<!-- Sparkline -->
<%--<script src="plugins/sparkline/jquery.sparkline.min.js"></script>--%>
<!-- jvectormap -->
<%--<script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>--%>
<%--<script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>--%>
<!-- jQuery Knob Chart -->
<%--<script src="plugins/knob/jquery.knob.js"></script>--%>
<!-- daterangepicker -->
<%--<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js"></script>--%>
<%--<script src="plugins/daterangepicker/daterangepicker.js"></script>--%>
<!-- datepicker -->
<%--<script src="plugins/datepicker/bootstrap-datepicker.js"></script>--%>
<!-- Bootstrap WYSIHTML5 -->
<script src="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
<!-- Slimscroll -->
<script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="plugins/fastclick/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/app.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<%--<script src="dist/js/pages/dashboard.js"></script>--%>
<!-- AdminLTE for demo purposes -->
<%--<script src="dist/js/demo.js"></script>--%>
</body>
</html>

