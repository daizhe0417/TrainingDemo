<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="UTF-8" %>
<html>
<head>
    <link type="text/css" href="css/main.css" rel="stylesheet"/>
    <link href="jqueryui/css/sysline-defaults/jquery-ui.min.css"
          rel="stylesheet">
    <script src="util/jquery/jquery-1.9.1.js"></script>
    <script src="jqueryui/js/jquery-ui.min.js"></script>

    <style type="text/css">
        <!--
        .showWindow:hover {
            color: #FF0000
        }

        .win_bg {
            background: #CCC;
            opacity: 0.2;
            filter: alpha(opacity=20);
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 998;
        }

        .winTitle {
            background: #9DACBF;
            height: 20px;
            line-height: 20px
        }

        .winTitle .title_left {
            font-weight: bold;
            color: #FFF;
            padding-left: 5px;
            float: left
        }

        .winTitle .title_right {
            float: right
        }

        .winTitle .title_right a {
            color: #000;
            text-decoration: none
        }

        .winTitle .title_right a:hover {
            text-decoration: underline;
            color: #FF0000
        }

        .winContent {
            padding: 5px;
        }

        -->
    </style>
    <script>
        $(function () {

            $("#tabs").tabs({
                heightStyle: "auto"
            });
            //	var newHeight = document.body.scrollHeight + "px";
            //var newWeight = document.body.scrollWidth + "px";

            //	alert(jQuery("#wz_main_right",window.parent.document).attr("id"))

            //	alert(newWeight+"   "+window.parent.document.getElementById("mainframe").style.width)
            //alert(jQuery("#wz_main_right",window.parent.document).height())
            //alert($(document.body).height())

            $(document.body).height(
                jQuery("#wz_main_right", window.parent.document).height() - 4);
            $(document.body).width(
                jQuery("#wz_main_right", window.parent.document).width() - 208);

            //window.parent.document.getElementById("mainframe").style.height = newHeight;
            //以上firefox通过，但是ie6必须加上下面这句，不然iframe高度是改了，但是可见区域没有改
            //window.parent.document.getElementById("mainframe").style.height = newHeight;
        });

        var openedMenu = new Array();

        function addTabs(id, text, url, isRefresh) {
            var tab = jQuery("#tabs");
            for (var i = 0; i < openedMenu.length; i++) {
                if (id == openedMenu[i]) {
                    tab.tabs("option", "active", i + 1);
                    //if(isRefresh){
                    jQuery("#frame" + id).attr("src", url);
                    //}
                    return;
                }
            }
            tab.children("ul").append(
                "<li id='li-" + id + "'><a href='#tabs-" + id + "'>" + text
                + "</a><a class='ui-tabs-anchor' onclick='closeTab(\""
                + id + "\")'>×</a></li>");
            tab
                .append("<div id='tabs-"
                    + id
                    + "'  widht='100%'><iframe src='" + url
                    + "' name='frame" + id + "' id='frame" + id + "' class='griddiv'></iframe></div>");
            tab.tabs("refresh");
            //var active = tab.tabs("option", "active");
            tab.tabs("option", "active", openedMenu.length + 1);
            openedMenu.push(id);
        }
        function closeTab(id) {
            var tab = jQuery("#tabs");
            var i = 0;
            for (; i < openedMenu.length; i++) {
                if (id == openedMenu[i]) {
                    break;
                }
            }
            tab.tabs("option", "active", i + 2);
            jQuery("#tabs-" + id).remove();
            jQuery("#li-" + id).remove();
            tab.tabs("refresh");

            for (; i < openedMenu.length; i++) {
                openedMenu[i] = openedMenu[i + 1];
            }
            openedMenu.pop();
        }
        function closeAll() {
            var om = openedMenu.concat();
            for (var i = 0; i < om.length; i++) {
                closeTab(om[i]);
            }
        }
    </script>
</head>
<body style="width:100%;height:100%;margin-top:2px;margin-left:4px;">
<div id="tabs" style="widht:100%">
    <ul>
        <li><a href="#tabs-1">首页</a></li>
        <li><a class='ui-tabs-anchor' onclick="closeAll()" title="关闭所有">[关闭所有]</a></li>
    </ul>

    <div id="tabs-1">
        <div id="welcome" style="text-align: center">
            <img src="images/login.jpg" align="center" width="1000" height="550"
                 style="margin-top: 5px;text-align: center"/>
        </div>
    </div>
</div>
</body>

</html>