<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<link type="text/css" href="<%=request.getContextPath()%>/css/main.css"
	rel="stylesheet" />
<link href="jqueryui/css/sysline-defaults/jquery-ui.min.css"
	rel="stylesheet">
<script src="util/jquery/jquery-1.9.1.js"></script>
<script src="jqueryui/js/jquery-ui.min.js"></script>

</script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/common/ajax.js">
	
</script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/util/tree/menutree.js">
	
</script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/common/constantData.js">
	
</script>

<script type="text/javascript">
	jQuery(document).ready(function() {
		ajax({
			url : "D00_05action_getRightsBySession",
			success : function(item) {
				if (item.status == 1) {
					var o = {
						sourceFolder : "util/tree/",
						onClickFunction : "addTabs",
						target : "window.parent.frames[\"mainframe\"]",
						data : item.datas
					};
					jQuery("#tree").treemenu(o);
				}
			}
		});
		jQuery("#tabs").tabs();
	});
	$(function() {
		$("#tabs").tabs();
	});
</script>
</head>
<body style="background-color:#e2e7ed" onload="aaa">
	<!--  <div id="tabs">  -->

	<div
		style="width:100%;height:100%;cursor:pointer;background-color:#e2e7ed;">
		<table id="tree" class="tree">
		</table>
	</div>
	<!--  </div> -->
</body>
</html>
