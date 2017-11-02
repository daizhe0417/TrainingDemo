<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.util.Calendar"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<link type="text/css" href="css/sysbar.css" rel="stylesheet" />
<script src="util/jquery/jquery-1.9.1.js"></script>
<script type="text/javascript">
	
<%Calendar currentCalendars = Calendar.getInstance();
			int years = currentCalendars.get(Calendar.YEAR);
			String year = String.valueOf(years);
			int months = currentCalendars.get(Calendar.MONTH) + 1;
			String month = String.valueOf(months);
			int days = currentCalendars.get(Calendar.DAY_OF_MONTH);
			String day1 = String.valueOf(days);
			int d = currentCalendars.get(Calendar.DAY_OF_WEEK);
			String ddd = "";
			if (d == 1)
				ddd = "日";
			if (d == 2)
				ddd = "一";
			if (d == 3)
				ddd = "二";
			if (d == 4)
				ddd = "三";
			if (d == 5)
				ddd = "四";
			if (d == 6)
				ddd = "五";
			if (d == 7)
				ddd = "六";%>
	jQuery(document).ready(function() {
		jQuery("#logout_btn").on("click", function() {
			$.ajax({
				url : "login!logout.action?random=" + Math.random(),
				type : "POST",
				data : {},
				timeout : 30000,
				dataType : "json",
				success : function(item) {
					if (item.status == 1) {
						top.location = "login.jsp";
					} else if (item.status == 2) {
						top.location = "login.jsp";
					}
				},
				error : function() {
				}
			});
		});
	});
</script>
</head>
<body>

	<table width="100%" height="100%" border="0" cellspacing="0">
		<tr style="height:66px">
			<td width="309px" height="66px"></td>
			<td width="12%" height="66px"></td>

			<td>
				<div style="margin-left:200px;width:200px;margin-top:25px"
					class="sysbar_bj4"></div>
				<div
					style="margin-left:90px;_margin-left:240px;width:160px;margin-top:25px;_margin-top:1px"
					class="sysbar_bj4"><%=year%>年<%=month%>月<%=days%>日&nbsp;&nbsp;星期<%=ddd%></div>
				<div
					style="margin-left:50px;_margin-left:50px;margin-top:25px;_margin-top:1px"
					class="sysbar_bj4">
					<div style="float:left; width:16px">
						<img src="images/02.png" />
					</div>
					<a href="" id="logout_btn"> 退出</a>
				</div>
			</td>
		</tr>
	</table>
</body>
</html>
