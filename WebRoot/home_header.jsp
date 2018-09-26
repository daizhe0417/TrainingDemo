<%@ page language="java" pageEncoding="UTF-8" %>
<!-- ******HEADER****** -->
<header id="header" class="header">
    <div class="container">
        <h1 class="logo">
            <a href="#"><img src="images/logo.png" alt="" style="width: 35px;height: 35px; margin-bottom: 3px;">
                <span class="text">据兴科技</span>
            </a>
        </h1><!--//logo-->
        <nav class="main-nav navbar-right" role="navigation">
            <div class="navbar-header">
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button><!--//nav-toggle-->
            </div><!--//navbar-header-->
            <div id="navbar-collapse" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active nav-item"><a href="home.jsp">首页</a></li>
                    <li class="nav-item"><a href="home_aboutUs.jsp">关于我们</a></li>
                    <%--<li class="nav-item"><a href="home_news.jsp">最新动态</a></li>--%>
                    <%--<li class="nav-item dropdown">--%>
                    <%--<a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">More <i class="fa fa-angle-down"></i></a>--%>
                    <%--<ul class="dropdown-menu">--%>
                    <%--<li><a href="#">About Us</a></li>--%>
                    <%--<li><a href="#">Customer Story Single</a></li>--%>
                    <%--<li><a href="#">Blog</a></li>--%>
                    <%--<li><a href="#">Blog Single</a></li>--%>
                    <%--<li><a href="#">Support Center</a></li>   --%>
                    <%--<li><a href="#">Career</a></li> --%>
                    <%--<li><a href="#">Job Single</a></li> --%>
                    <%--<li><a href="#">Contact</a></li>                    --%>
                    <%--</ul>                            --%>
                    <%--</li><!--//dropdown-->                         --%>
                    <li class="nav-item"><a href="#" class="login-trigger" data-toggle="modal"
                                            data-target="#login-modal">登录</a></li>
                    <li class="nav-item nav-item-cta last"><a class="btn-signup" href="regist.jsp">注册</a></li>
                </ul><!--//nav-->
            </div><!--//navabr-collapse-->
        </nav><!--//main-nav-->
    </div><!--//container-->
</header><!--//header-->


<!-- Login Modal -->
<div class="modal modal-auth modal-login" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 id="loginModalLabel" class="modal-title text-center">登录</h4>
            </div>
            <div class="modal-body">
                <div class="login-form-container">
                    <form class="login-form">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                <input id="userno" type="text" class="form-control" placeholder="用户名"/>
                            </div>
                            <span id="usernoErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                <input id="passwd" type="password" class="form-control" placeholder="密码"/>
                            </div>
                            <span id="passwdErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <div class="form-group">
                            <span id="loginErrMsg" class="help-block">&nbsp;</span>
                        </div>
                        <button type="button" id="login_submit" class="btn btn-cta btn-block btn-primary">登录</button>
                    </form>
                </div><!--//login-form-container-->

                <div class="option-container">
                    <div class="lead-text">还没有账号？</div>
                    <a class="signup-link btn btn-ghost-alt" href="regist.jsp">注册</a>
                </div><!--//option-container-->
            </div><!--//modal-body-->

        </div><!--//modal-content-->
    </div><!--//modal-dialog-->
</div><!--//modal-->