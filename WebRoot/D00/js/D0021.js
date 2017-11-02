var jqGridConf = {
	caption : "类型列表",
	colNames : [ '类型代码', '类型名称','状态' ],
	colModel : [ {
		name : 'lxdm',
		index : 'lxdm',
		width : 150
	}, {
		name : 'lxmc',
		index : 'lxmc',
		width : 150,
		editable : true
	}, {
		name : 'status',
		index : 'type',
		width : 80,
		formatter : function(cellvalue, options, rowObject) {
			if (cellvalue == '0') {
				return "正常";
			} else if (cellvalue == '1') {
				return "作废";
			} else {
				return "";
			}
		},
		unformat : function(cellvalue, options, rowObject) {
			if (cellvalue == '正常') {
				return "0";
			} else if (cellvalue == '作废') {
				return "1";
			} else {
				return "";
			}
		}
	} ]
};

var actionname = "D00_21action";
jQuery(document).ready(function() {
	commonInit({
		detailDlgTitle : '类型',
		deleteType : 'byObject'
	});
	
	var status_sel = jQuery("#query_status");
	status_sel.empty();
	status_sel.append("<option value=''>--所有状态--</option>");
	status_sel.append("<option value='0'>正常</option>");
	status_sel.append("<option value='1'>作废</option>");
	
	status_sel = jQuery("#status");
	status_sel.empty();
	status_sel.append("<option value=''>--请选择状态--</option>");
	status_sel.append("<option value='0'>正常</option>");
	status_sel.append("<option value='1'>作废</option>");
});
