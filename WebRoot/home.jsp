<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<style type="text/css">
    #white-li a {
        color: rgba(255, 255, 255, 0.8)
    }

    #white-li a:hover {
        color: #656972;
    }
</style>
<html lang="en"> <!--<![endif]-->
<head>
    <title>据兴科技</title>
    <link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <%--<link rel="shortcut icon" href="favicon.ico">--%>
    <!---<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,300italic,400italic,500italic,700,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>--->
    <!-- Global CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- Plugins CSS -->
    <link rel="stylesheet" href="home_assets/plugins/font-awesome/css/font-awesome.css">
    <!---<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">--->
    <link rel="stylesheet" href="home_assets/plugins/flexslider/flexslider.css">

    <!-- Theme CSS -->
    <link id="theme-style" rel="stylesheet" href="home_assets/css/styles.css">

</head>

<body data-spy="scroll" data-target="#page-nav" onkeydown="keyLogin();">
<div class="adcenter">
    <script src="http://www.cssmoban.com/include/new/ggad2_728x90.js"></script>
</div>
<!-- ******HEADER****** -->
<%@include file="home_header.jsp" %>

<section class="promo-section section section-on-bg">
    <div class="hero-slider-wrapper">
        <div class="flexslider hero-slider">
            <ul class="slides">
                <li class="slide slide-1"></li>
                <li class="slide slide-2"></li>
                <li class="slide slide-3"></li>
            </ul>
        </div>
        <div class="hero-slider-mask"></div>
    </div><!--//hero-slider-wrapper-->
    <div class="container promo-content">
        <h2 class="headline">
            多功能
            &nbsp;
            全方位
            &nbsp;
            一站式
            &nbsp;
        </h2>
        <p class="tagline">
            专业评级
            &nbsp;
            高效配置
            &nbsp;
            智能风控
        </p>
        <div class="actions">
            <a class="btn btn-cta btn-primary scrollto" href="#overview-section" data-toggle="modal"
               data-target="#signup-modal">开始体验</a>
            <br class="visible-xs-block">
            <%--<a href="#" class="play-trigger" data-toggle="modal" data-target="#modal-video">--%>
            <%--<img class="play-icon" src="" alt="">注册</a>--%>
        </div>
    </div><!--//container-->
</section><!--//promo-section-->


<div id="white-li" class="page-nav-space-holder hidden-xs" style="background: rgba(53, 55, 60, 0.8);
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 100;
    min-height: 70px;
">
    <div id="page-nav-wrapper" class="page-nav-wrapper text-center" style="background: rgba(53, 55, 60, 0.8);">
        <div class="container">
            <ul id="page-nav" class="nav page-nav list-inline">
                <li><a class="scrollto" href="#overview-section">概览</a></li>
                <li><a class="scrollto" href="#features-section">数据模块</a></li>
                <li><a class="scrollto" href="#customers-section">评价评级</a></li>
                <li><a class="scrollto" href="#signup-section">组合配置</a></li>
                <li><a class="scrollto" href="#support-section">风险管理</a></li>
            </ul><!--//page-nav-->
        </div>
    </div><!--//page-nav-wrapper-->
</div><!--//page-nav-space-holder-->

<section id="overview-section" class="overview-section section" style="padding-top:90px;padding-bottom: 90px;">
    <h2 class="section-title">
        多功能
        &nbsp;
        全方位
        &nbsp;
        一站式
    </h2>
    <div class="row">
        <div class="row col-md-10 col-md-offset-1">
            <div class="col-sm-4">
                <img src="home_assets/images/overview/overview1.png" class="img-responsive center-block"
                     style="width: 150px;">
                <h4 class="text-center">专业评级</h4>
            </div>
            <div class="col-sm-4">
                <img src="home_assets/images/overview/overview2.png" class="img-responsive center-block"
                     style="width: 150px;">
                <h4 class="text-center">高效配置</h4>
            </div>
            <div class="col-sm-4">
                <img src="home_assets/images/overview/overview3.png" class="img-responsive center-block"
                     style="width: 150px;">
                <h4 class="text-center">智能风控</h4>
            </div>
        </div>
    </div>
</section><!--//overview-section-->
<section id="features-section" class="customers-section section">
    <div class="row">
        <div class="row col-md-8 col-md-offset-2">
            <table style="width: 100%">
                <tr>
                    <td class="col-sm-5" style="vertical-align: middle !important;text-align: center;">
                        <img src="home_assets/images/data.png" class="img-responsive center-block"
                             style="width: 300px;">
                    </td>
                    <td class="col-sm-6" style="vertical-align: middle !important;text-align: center;">
                        <h3 class="text-center">数据模块</h3>
                        <h4 class="text-center">提供全面完整、准确精细、持续更新的综合数据</h4>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</section><!--//features-section-->

<section id="customers-section" class="overview-section section" style="padding-bottom: 90px;">
    <div class="row">
        <div class="row col-md-8 col-md-offset-2">
            <table style="width: 100%">
                <tr>
                    <td class="col-sm-5" style="vertical-align: middle !important;text-align: center;">
                        <img src="home_assets/images/pingjia.png" class="img-responsive center-block"
                             style="width: 300px;">
                    </td>
                    <td class="col-sm-6" style="vertical-align: middle !important;text-align: center;">
                        <h3 class="text-center">评价评级</h3>
                        <h4 class="text-center">定性和定量相结合，提供客观、有效、易用的资产数据体系</h4>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</section><!--//customers-section-->

<section id="signup-section" class="customers-section section">
    <div class="row">
        <div class="row col-md-8 col-md-offset-2">
            <table style="width: 100%">
                <tr>
                    <td class="col-sm-5" style="vertical-align: middle !important;text-align: center;">
                        <img src="home_assets/images/combine.png" class="img-responsive center-block"
                             style="width: 300px;">
                    </td>
                    <td class="col-sm-6" style="vertical-align: middle !important;text-align: center;">
                        <h3 class="text-center">组合配置</h3>
                        <h4 class="text-center">量化配置模型，参数可调，一键回测，提供有效的组合配置服务</h4>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</section><!--//signup-section-->

<section id="support-section" class="support-section section text-center" style="padding-bottom: 90px;">
    <div class="row">
        <div class="row col-md-8 col-md-offset-2">
            <table style="width: 100%">
                <tr>
                    <td class="col-sm-5" style="vertical-align: middle !important;text-align: center;">
                        <img src="home_assets/images/risk.png" class="img-responsive center-block"
                             style="width: 300px;">
                    </td>
                    <td class="col-sm-6" style="vertical-align: middle !important;text-align: center;">
                        <h3 class="text-center">风险管理</h3>
                        <h4 class="text-center">标的资产实时跟踪，收益归因，压力测试，提供实时风险预警机制</h4>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</section><!--//support-section-->

<%--<section class="apps-section section text-center">--%>
<%--<h2 class="section-title">Download Our Apps</h2>--%>
<%--<div class="container">--%>
<%--<ul class="apps-list list-inline">--%>
<%--<li><a class="btn btn-download-app btn-apple-download" href="#"><i class="fa fa-apple" aria-hidden="true"></i> <span class="btn-text"><span class="intro-text">Download on the</span><span class="main-text">App Store</span></span></a></li>--%>
<%--<li><a class="btn btn-download-app btn-andriod-download" href="#"><i class="fa fa-android" aria-hidden="true"></i> <span class="btn-text"><span class="intro-text">Get it on</span><span class="main-text">Google Play</span></span></a></li>--%>
<%--<li><a class="btn btn-download-app btn-windows-download" href="#"><i class="fa fa-windows" aria-hidden="true"></i> <span class="btn-text"><span class="intro-text">Download from</span><span class="main-text">Windows Phone Store</span></span></a></li>--%>
<%--</ul><!--//apps-list-->--%>
<%--</div><!--//container-->--%>
<%--</section><!--//apps-section-->--%>

<!-- ******FOOTER****** -->
<footer class="footer">
    <div class="container">
        <%--<div class="row">--%>
        <%--<div class="footer-col col-xs-6 col-md-3">--%>
        <%--<div class="footer-col-inner">--%>
        <%--<h3 class="col-title">About</h3>--%>
        <%--<ul class="footer-menu list-unstyled">--%>
        <%--<li><a href="#">Company</a></li>--%>
        <%--<li><a href="#">Blog</a></li>--%>
        <%--<li><a href="#">Jobs</a> <label class="label label-new">We're hiring</label></li>--%>
        <%--<li><a href="#">Press</a></li>--%>
        <%--<li><a href="#">Contact</a></li>--%>
        <%--</ul>--%>
        <%--</div><!--//footer-col-inner-->--%>
        <%--</div><!--//footer-col-->--%>
        <%--<div class="footer-col col-xs-6 col-md-3">--%>
        <%--<div class="footer-col-inner">--%>
        <%--<h3 class="col-title">Product</h3>--%>
        <%--<ul class="footer-menu list-unstyled">--%>
        <%--<li><a href="#">Features</a></li>--%>
        <%--<li><a href="#">Tutorials</a></li>--%>
        <%--<li><a href="#">Support Center</a></li>--%>
        <%--<li><a href="#">Pricing</a></li>--%>
        <%--<li><a href="#">Customers</a></li>--%>
        <%--</ul>--%>
        <%--</div>--%>
        <%--</div><!--//footer-col-->--%>
        <%--<div class="footer-col col-xs-6 col-md-3">--%>
        <%--<div class="footer-col-inner">--%>
        <%--<h3 class="col-title">Useful Links</h3>--%>
        <%--<ul class="footer-menu list-unstyled">--%>
        <%--<li><a href="#">Sign up</a></li>--%>
        <%--<li><a href="#">Login</a></li>--%>
        <%--<li><a href="#">Become our partner</a></li>--%>
        <%--<li><a href="#">FAQs</a></li>--%>
        <%--</ul>--%>
        <%--</div>--%>
        <%--</div><!--//footer-col-->--%>
        <%--<div class="footer-col col-xs-6 col-md-3">--%>
        <%--<div class="footer-col-inner">--%>
        <%--<h3 class="col-title">Legal</h3>--%>
        <%--<ul class="footer-menu list-unstyled">--%>
        <%--<li><a href="#">Privacy</a></li>--%>
        <%--<li><a href="#">Terms of Services</a></li>--%>
        <%--<li><a href="#">Policies</a></li>--%>
        <%--</ul>--%>
        <%--</div>--%>
        <%--</div><!--//footer-col-->--%>
        <%--</div><!--//row-->--%>
        <%--<div class="divider"></div>--%>
        <div class="footer-bottom text-center">
            <%--<ul class="social-media list-inline">--%>
            <%--<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>--%>
            <%--<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>--%>
            <%--<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>--%>
            <%--<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>--%>
            <%--<li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>--%>
            <%----%>
            <%--</ul>--%>

            <small class="copyright">Copyright &copy; 2016.据兴科技 All rights reserved.</small>
        </div>
    </div><!--//container-->
</footer><!--//footer-->

<!-- Video Modal -->
<div class="modal modal-video" id="modal-video" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 id="videoModalLabel" class="modal-title sr-only">Video Tour</h4>
            </div>
            <div class="modal-body">
                <div class="video-container embed-responsive embed-responsive-16by9">
                    <iframe id="vimeo-video" src="" width="720" height="405" frameborder="0" webkitallowfullscreen
                            mozallowfullscreen allowfullscreen></iframe>
                </div><!--//video-container-->
            </div><!--//modal-body-->
        </div><!--//modal-content-->
    </div><!--//modal-dialog-->
</div><!--//modal-->


<!-- Signup Modal -->
<%--<div class="modal modal-auth modal-signup" id="signup-modal" tabindex="-1" role="dialog"--%>
<%--aria-labelledby="signupModalLabel" aria-hidden="true">--%>
<%--<div class="modal-dialog">--%>
<%--<div class="modal-content">--%>
<%--<div class="modal-header">--%>
<%--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>--%>
<%--<h4 id="signupModalLabel" class="modal-title text-center">注册新用户</h4>--%>
<%--</div>--%>
<%--<div class="modal-body">--%>
<%--<div class="login-form-container">--%>
<%--<form class="login-form" method="post">--%>
<%--<div class="row">--%>
<%--<div class="col-sm-6">--%>
<%--<div class="input-group">--%>
<%--<span class="input-group-addon"><i class="fa fa-fw fa-user"></i></span>--%>
<%--<input type="text" id="userno" class="form-control" placeholder="登录名">--%>
<%--</div>--%>
<%--<span id="usernoErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--<div class="col-sm-6">--%>
<%--<div class="input-group">--%>
<%--<span class="input-group-addon"><i class="fa fa-fw fa-user"></i></span>--%>
<%--<input type="text" id="username" class="form-control" placeholder="用户名">--%>
<%--</div>--%>
<%--<span id="usernameErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--</div>--%>
<%--<div class="row">--%>
<%--<div class="col-sm-6">--%>
<%--<div class="input-group">--%>
<%--<span class="input-group-addon"><i class="fa fa-fw fa-institution"></i></span>--%>
<%--<input type="text" id="company" class="form-control" placeholder="公司">--%>
<%--</div>--%>
<%--<span id="companyErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--<div class="col-sm-6">--%>
<%--<div class="input-group">--%>
<%--<span class="input-group-addon"><i class="fa fa-fw fa-briefcase"></i></span>--%>
<%--<input type="email" id="title" class="form-control" placeholder="职务">--%>
<%--</div>--%>
<%--<span id="titleErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--</div>--%>
<%--<div class="row">--%>
<%--<div class="col-sm-6">--%>
<%--<div class="input-group">--%>
<%--<span class="input-group-addon"><i class="fa fa-fw fa-mobile"></i></span>--%>
<%--<input type="text" maxlength="11" id="mobile" class="form-control" placeholder="电话">--%>
<%--</div>--%>
<%--<span id="mobileErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--<div class="col-sm-6">--%>
<%--<div class="input-group">--%>
<%--<span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>--%>
<%--<input type="email" id="email" class="form-control" placeholder="Email">--%>
<%--</div>--%>
<%--<span id="emailErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--</div>--%>
<%--<div class="row">--%>
<%--<div class="col-sm-6">--%>
<%--<div class="input-group">--%>
<%--<span class="input-group-addon"><i class="fa fa-fw fa-lock"></i></span>--%>
<%--<input type="password" id="passwd" class="form-control" placeholder="密码">--%>
<%--</div>--%>
<%--<span id="passwdErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--<div class="col-sm-6">--%>
<%--<div class="input-group">--%>
<%--<span class="input-group-addon"><i class="fa fa-fw fa-lock"></i></span>--%>
<%--<input type="password" id="passwd2" class="form-control" placeholder="确认密码">--%>
<%--</div>--%>
<%--<span id="passwd2ErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--</div>--%>
<%--<div>--%>
<%--</div>--%>
<%--<div>--%>
<%--<span id="registErrMsg" class="help-block">&nbsp;</span>--%>
<%--</div>--%>
<%--<button type="button" id="btnRegist" class="btn btn-block btn-primary btn-cta">注册</button>--%>

<%--</form>--%>
<%--</div><!--//login-form-container-->--%>
<%--<div class="option-container">--%>
<%--<div class="lead-text">已有账户？</div>--%>
<%--<a class="login-link btn btn-ghost-alt" id="login-link" href="#">登录</a>--%>
<%--</div><!--//option-container-->--%>
<%--</div><!--//modal-body-->--%>
<%--</div><!--//modal-content-->--%>
<%--</div><!--//modal-dialog-->--%>
<%--</div><!--//modal-->--%>

<!-- Reset Password Modal -->
<div class="modal modal-auth modal-resetpass" id="resetpass-modal" tabindex="-1" role="dialog"
     aria-labelledby="resetpassModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 id="resetpassModalLabel" class="modal-title text-center">Forgot your password?</h4>
            </div>
            <div class="modal-body">
                <div class="resetpass-form-container">
                    <p class="intro">We'll email you a link to a page where you can easily create a new password.</p>
                    <form class="resetpass-form">
                        <div class="form-group email">
                            <label class="sr-only" for="reg-email">Your Email</label>
                            <input id="reg-email" name="reg-email" type="email" class="form-control login-email"
                                   placeholder="Your Email">
                        </div><!--//form-group-->
                        <button type="submit" class="btn btn-block btn-secondary btn-cta">Reset Password</button>
                    </form>
                </div><!--//login-form-container-->
                <div class="option-container">
                    <div class="lead-text">I want to <a class="back-to-login-link" id="back-to-login-link" href="#">return
                        to login</a></div>
                </div><!--//option-container-->
            </div><!--//modal-body-->
        </div><!--//modal-content-->
    </div><!--//modal-dialog-->
</div><!--//modal-->

<%--<!-- *****CONFIGURE STYLE (REMOVE ON YOUR PRODUCTION SITE)****** -->  --%>
<%--<div id="config-panel" class="config-panel hidden-xs hidden-sm">--%>
<%--<div class="panel-inner">--%>
<%--<a id="config-trigger" class="config-trigger config-panel-hide" href="#"><i class="fa fa-cog"></i></a>--%>
<%--<h5 class="panel-title">Choose Colour</h5>--%>
<%--<ul id="color-options" class="list-unstyled list-inline">--%>
<%--<li class="theme-1 active"><a data-style="home_assets/css/styles.css" href="#"></a></li>--%>
<%--<li class="theme-2"><a data-style="home_assets/css/styles-2.css" href="#"></a></li>--%>
<%--<li class="theme-3"><a data-style="home_assets/css/styles-3.css" href="#"></a></li>--%>
<%--<li class="theme-4"><a data-style="home_assets/css/styles-4.css" href="#"></a></li>--%>
<%--<li class="theme-5"><a data-style="home_assets/css/styles-5.css" href="#"></a></li>--%>
<%--<li class="theme-6"><a data-style="home_assets/css/styles-6.css" href="#"></a></li>--%>
<%--</ul>--%>
<%--<a id="config-close" class="close" href="#"><i class="fa fa-times-circle"></i></a>--%>
<%--</div><!--//panel-inner-->--%>
<%--</div><!--//configure-panel-->--%>

<!-- Javascript -->
<script type="text/javascript" src="plugins/jQuery/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="home_assets/plugins/bootstrap-hover-dropdown.min.js"></script>
<script type="text/javascript" src="home_assets/plugins/back-to-top.js"></script>
<script type="text/javascript" src="home_assets/plugins/jquery-scrollTo/jquery.scrollTo.min.js"></script>
<script type="text/javascript" src="home_assets/plugins/flexslider/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="home_assets/js/main.js"></script>

<!--//Page Specific JS -->
<script type="text/javascript" src="home_assets/js/home.js"></script>

<!-- Vimeo video API
<script src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
<script type="text/javascript" src="home_assets/js/vimeo.js"></script>  -->

<!-- Style Switcher (REMOVE ON YOUR PRODUCTION SITE) -->
<script src="home_assets/js/demo/style-switcher.js"></script>

<script type="text/javascript" src="js/login.js"></script>
</body>
</html> 


