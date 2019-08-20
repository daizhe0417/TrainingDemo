<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
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

<section id="customers-section" class="customers-section section">
    <h2 class="section-title">最新动态</h2>
    <div class="container">
        <div class="stories-wrapper row">
            <div class="item item-1 col-xs-12 col-md-4">
                <div class="item-inner text-center">
                    <div class="item-mask"></div>
                    <div class="item-content">
                        <h3 class="content-title">Shipping product <br>at an amazing speed</h3>
                        <div class="content-desc">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula eget dolor
                                aenean massa. Cum sociis natoque penatibus.</p>
                        </div>
                        <a class="item-link" href="#"></a>
                    </div><!--//item-content-->
                </div><!--//item-inner-->
            </div><!--//item-->
            <div class="item item-2 col-xs-12 col-md-4">
                <div class="item-inner text-center">
                    <div class="item-mask"></div>
                    <div class="item-content">
                        <h3 class="content-title">Better collaboration <br>with remote teams</h3>
                        <div class="content-desc">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula eget dolor
                                aenean massa. Cum sociis natoque penatibus.</p>
                        </div>
                        <a class="item-link" href="#"></a>
                    </div><!--//item-content-->
                </div><!--//item-inner-->
            </div><!--//item-->
            <div class="item item-3 col-xs-12 col-md-4">
                <div class="item-inner text-center">
                    <div class="item-mask"></div>
                    <div class="item-content">
                        <h3 class="content-title">Put UX at the heart of <br>our SaaS business</h3>
                        <div class="content-desc">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula eget dolor
                                aenean massa. Cum sociis natoque penatibus.</p>
                        </div>
                        <a class="item-link" href="#"></a>
                    </div><!--//item-content-->
                </div><!--//item-inner-->
            </div><!--//item-->
        </div><!--//row-->
        <%--<div class="action-wrapper text-center">--%>
        <%--<a class="btn btn-secondary" href="#">全部动态</a>--%>
        <%--</div>--%>
    </div><!--//container-->
</section><!--//customers-section-->

<section class="features-section section">
    <div class="container">
        <div class="row">
            <article class="post">
                <div class="post-thumb">
                    <img class="img-responsive" src="home_assets/images/customers/customer-1.jpg" alt="">
                </div><!--//post-thumb-->
                <div class="content">
                    <h3 class="post-title"><a href="blog-single.html">Aenean erat lorem, molestie non ornare eu</a></h3>
                    <div class="meta">
                        <ul class="meta-list list-inline">
                            <li class="post-time post_date date updated">2018-07-01</li>
                            <li class="post-author"> 来自 <a href="#">管理员</a></li>
                        </ul><!--//meta-list-->
                    </div><!--meta-->
                    <div class="post-entry">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis mattis erat, dictum
                            facilisis magna posuere ac. Curabitur consectetur magna mauris, et aliquam lectus ornare
                            nec.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris
                            quis tellus magna.</p>
                        <a class="read-more" href="home_news_detail.jsp">详情 <i
                                class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </article><!--//post-->
        </div>
        <hr class="simple" color="#6f5499" />
        <div class="row">
            <article class="post">
                <div class="post-thumb">
                    <img class="img-responsive" src="assets/images/posts/post-2.jpg" alt="">
                </div><!--//post-thumb-->
                <div class="content">
                    <h3 class="post-title"><a href="blog-single.html">Maecenas porta vestibulum lorem vel
                        sollicitudin</a>
                    </h3>
                    <div class="meta">
                        <ul class="meta-list list-inline">
                            <li class="post-time post_date date updated">16th May, 2014</li>
                            <li class="post-author"> by <a href="#">Admin</a></li>
                            <li class="post-comments-link">
                                <a href="blog-single.html#comment-area"><i class="fa fa-comments"></i>3 Comments</a>
                            </li>
                        </ul><!--//meta-list-->
                    </div><!--meta-->
                    <div class="post-entry">
                        <p>Aenean interdum ligula sed sollicitudin scelerisque. Morbi sed purus erat. Quisque
                            adipiscing,
                            dolor vitae porttitor egestas, orci elit feugiat libero, id pellentesque libero nulla quis
                            tortor. Nulla sodales erat eu aliquam sollicitudin. Proin hendrerit porta lorem, ultricies
                            blandit tortor mollis ut. Suspendisse potenti.</p>
                        <a class="read-more" href="blog-single.html">Read more <i
                                class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </article><!--//post-->
        </div>
        <hr class="simple" color="#6f5499" />
        <div class="row">
            <article class="post">
                <div class="post-thumb">
                    <img class="img-responsive" src="home_assets/images/customers/customer-2.jpg" alt="">
                </div><!--//post-thumb-->
                <div class="content">
                    <h3 class="post-title"><a href="blog-single.html">Aenean erat lorem, molestie non ornare eu</a></h3>
                    <div class="meta">
                        <ul class="meta-list list-inline">
                            <li class="post-time post_date date updated">22th April, 2014</li>
                            <li class="post-author"> by <a href="#">Admin</a></li>
                            <li class="post-comments-link">
                                <a href="blog-single.html#comment-area"><i class="fa fa-comments"></i>2 Comments</a>
                            </li>
                        </ul><!--//meta-list-->
                    </div><!--meta-->
                    <div class="post-entry">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis mattis erat, dictum
                            facilisis magna posuere ac. Curabitur consectetur magna mauris, et aliquam lectus ornare
                            nec.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris
                            quis tellus magna.</p>
                        <a class="read-more" href="blog-single.html">Read more <i
                                class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </article><!--//post-->
        </div>
        <hr class="simple" color="#6f5499" />
        <div class="row">
            <article class="post">
                <div class="post-thumb">
                    <img class="img-responsive" src="assets/images/posts/post-4.jpg" alt="">
                </div><!--//post-thumb-->
                <div class="content">
                    <h3 class="post-title"><a href="blog-single.html">Pellentesque porta porttitor volutpat</a></h3>
                    <div class="meta">
                        <ul class="meta-list list-inline">
                            <li class="post-time post_date date updated">12th April, 2014</li>
                            <li class="post-author"> by <a href="#">Admin</a></li>
                            <li class="post-comments-link">
                                <a href="blog-single.html#comment-area"><i class="fa fa-comments"></i>4 Comments</a>
                            </li>
                        </ul><!--//meta-list-->
                    </div><!--meta-->
                    <div class="post-entry">
                        <p>Praesent congue eros at vestibulum luctus. Integer faucibus eros ac mauris aliquam vehicula.
                            Nulla vel purus quis libero viverra aliquet. Praesent consequat varius augue, et euismod
                            lorem
                            hendrerit ac. Duis eget lacus nisi. Sed sed erat velit.</p>
                        <a class="read-more" href="blog-single.html">Read more <i
                                class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </article><!--//post-->
        </div>
        <hr class="simple" color="#6f5499" />
        <div class="row">
            <article class="post">
                <div class="post-thumb">
                    <img class="img-responsive" src="assets/images/posts/post-5.jpg" alt="">
                </div><!--//post-thumb-->
                <div class="content">
                    <h3 class="post-title"><a href="blog-single.html">Aenean erat lorem, molestie non ornare eu</a></h3>
                    <div class="meta">
                        <ul class="meta-list list-inline">
                            <li class="post-time post_date date updated">3th April, 2014</li>
                            <li class="post-author"> by <a href="#">Admin</a></li>
                            <li class="post-comments-link">
                                <a href="blog-single.html#comment-area"><i class="fa fa-comments"></i>1 Comment</a>
                            </li>
                        </ul><!--//meta-list-->
                    </div><!--meta-->
                    <div class="post-entry">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis mattis erat, dictum
                            facilisis magna posuere ac. Curabitur consectetur magna mauris, et aliquam lectus ornare
                            nec.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris
                            quis tellus magna.</p>
                        <a class="read-more" href="blog-single.html">Read more <i
                                class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </article><!--//post-->
        </div>
        <hr class="simple" color="#6f5499" />
        <div class="row">
            <ul class="pagination">
                <li class="disabled"><a href="#">«</a></li>
                <li class="active"><a href="#">1<span class="sr-only">(current)</span></a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">»</a></li>
            </ul><!--//pagination-->
        </div>
    </div>
</section><!--//customers-section-->
<!-- ******FOOTER****** -->
<footer class="footer">
    <div class="container">
        <div class="footer-bottom text-center">
            <small class="copyright">Copyright &copy; 2016.据兴科技 All rights reserved.</a></small>
        </div>
    </div><!--//container-->
</footer><!--//footer-->


<!-- Javascript -->
<script type="text/javascript" src="util/jquery/jquery-2.2.3.min.js"></script>
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


