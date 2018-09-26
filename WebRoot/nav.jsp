<%@ page language="java" import="cn.venice.gen.model.UserInfoModel,cn.venice.util.common.ConstantClass"
         pageEncoding="UTF-8" %>
<nav class="navbar navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            <a href="#" class="navbar-brand"><b>天津</b>据兴科技</a>
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <i class="fa fa-bars"></i>
            </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">投顾筛选 <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="product.jsp">基金产品</a></li>
                        <li class="divider"></li>
                        <li><a href="company.jsp">基金公司</a></li>
                        <li class="divider"></li>
                        <li><a href="manager.jsp">基金经理</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">资产配置 <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="Combine.jsp">基金配置</a></li>
                        <li class="divider"></li>
                        <li><a href="#">模拟组合</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">投后管理 <span class="caret"></span></a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">基金交易 <span class="caret"></span></a>
                </li>
            </ul>
            <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" id="navbar-search-input" placeholder="Search">
                </div>
            </form>
        </div>
        <!-- /.navbar-collapse -->
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <!-- User Account Menu -->
                <li class="dropdown user user-menu">
                    <!-- Menu Toggle Button -->
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <!-- The user image in the navbar-->
                        <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                        <!-- hidden-xs hides the username on small devices so only the image appears. -->
                        <span class="hidden-xs"><%= ((UserInfoModel) session.getAttribute(ConstantClass.LOGIN_USER_SESSION_ID)).getUsername()%></span>
                    </a>
                    <ul class="dropdown-menu">
                        <!-- The user image in the menu -->
                        <li class="user-header">
                            <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                            <p>
                                <%= ((UserInfoModel) session.getAttribute(ConstantClass.LOGIN_USER_SESSION_ID)).getUsername()%>
                            </p>
                        </li>
                        <!-- Menu Body -->
                        <%--<li class="user-body">--%>
                            <%--<div class="row">--%>
                                <%--<div class="col-xs-4 text-center">--%>
                                    <%--<a href="#">Followers</a>--%>
                                <%--</div>--%>
                                <%--<div class="col-xs-4 text-center">--%>
                                    <%--<a href="#">Sales</a>--%>
                                <%--</div>--%>
                                <%--<div class="col-xs-4 text-center">--%>
                                    <%--<a href="#">Friends</a>--%>
                                <%--</div>--%>
                            <%--</div>--%>
                            <%--<!-- /.row -->--%>
                        <%--</li>--%>
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <%--<div class="pull-left">--%>
                                <%--<a href="#" class="btn btn-default btn-flat">个人主页</a>--%>
                            <%--</div>--%>
                            <div class="pull-right">
                                <a id="a_logout" class="btn btn-default btn-flat">退出</a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- /.navbar-custom-menu -->
    </div>
    <!-- /.container-fluid -->
</nav>
