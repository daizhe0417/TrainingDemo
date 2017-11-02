<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
<head>
    <%@include file="../common.jsp" %>
    <script type='text/javascript' src='js/D0001.js'>

    </script>
</head>

<body width="100%">
<div id="queryBar">
    <div id="queryBarHeader"></div>
    <div class="queryFieldsContainer">
        <table>
            <tr>
                <td><input type="button" value="部门代码:" class="edit_title"/>
                </td>
                <td><input id="query_bmdm" type="input" size="15"/></td>
                <td><input type="button" value="部门名称:" class="edit_title"/>
                </td>
                <td><input id="query_bmmc" type="input" size="15"/></td>
            </tr>
        </table>
    </div>
</div>
<div id="detailDlg">
    <form id="showForm" name="showForm" method="post" action="">
        <table class="detailTable" width="100%">
            <tr width="100%">
                <td width="100px">部门编号：</td>
                <td width="200px"><input id="bmdm" name="bmdm" type="text"
                                         size="20" required maxlength="10" minlength="2" number="true"/></td>
            </tr>
            <tr>
                <td>部门名称：</td>
                <td><input id="bmmc" name="bmmc" type="text" size="20"
                           required/></td>
            </tr>
            <tr>
                <td>成立年份：</td>
                <td><input id="cjrq" name="cjrq" type="text" size="20"
                           readonly/></td>
            </tr>
            <tr>
                <td>状态：</td>
                <td>
                    <select id="deltag" name="deltag" class="yangshi1"
                            style="width:159px; _width:178px;height:24px;" required></select>
                </td>
            </tr>
            <tr>
                <td>撤销年份：</td>
                <td><input id="cxrq" name="cxrq" type="text" size="20"
                           readonly/></td>
            </tr>
        </table>
    </form>
</div>
<div id="jqGridContainer">
    <table id="jqGridList"></table>
    <div id="jqGridPager"></div>
</div>
</body>
</html>
