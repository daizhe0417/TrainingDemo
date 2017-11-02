var jqGridConf = {
	caption : "操作员列表",
	colNames : [ '操作员名', '真实姓名', '终端', '终端', '终端地点', 'passwd', '状态' ],
	colModel : [ {
		name : 'czydm',
		index : 'czydm',
		width : 90
	}, {
		name : 'czyname',
		index : 'czyname',
		width : 100
	}, {
		name : 'zddm',
		index : 'zddm',
		hidden : true
	}, {
		name : 'zdmc',
		index : 'zdmc',
		width : 100
	}, {
		name : 'zddd',
		index : 'zddd',
		width : 200
	}, {
		name : 'passwd',
		index : 'passwd',
		hidden : true
	}, {
		name : 'status',
		index : 'status',
		width : 90,
		formatter : function(cellvalue, options, rowObject) {
			if (cellvalue == '0') {
				return "正常";
			} else if (cellvalue == '1') {
				return "冻结";
			} else {
				return "";
			}
		},
		unformat : function(cellvalue, options, rowObject) {
			if (cellvalue == '正常') {
				return "0";
			} else if (cellvalue == '冻结') {
				return "1";
			} else {
				return "";
			}
		}
	} ]
};

var actionname = "D00_06action";
jQuery(document).ready(function() {
	commonInit({
		detailDlgTitle : '操作员',
		deleteType : 'byObject',
		queryBarHeader_btns : [ {
			id : 'addBtn',
			value : '新增',
			active : true,
			bind : onAddBtn,
			remotMethod : 'save'
		}, {
			id : 'modBtn',
			value : '修改',
			active : true,
			bind : onModBtn,
			remotMethod : 'save'
		}, {
			id : 'delBtn',
			value : '删除',
			active : true,
			bind : onDelBtn,
			remotMethod : 'save'
		}, {
			id : 'resetBtn',
			value : '重置密码',
			active : true,
			bind : onResetBtn
		}, {
			id : 'cleBtn',
			value : '清空',
			active : true,
			bind : onCleBtn
		}, {
			id : 'cleBtn',
			value : '清空',
			active : true,
			bind : onCleBtn
		} ],
		queryBarHeader_dept : {// 设置部门选择器
			open : true,// 显示部门选择器
			fieldName : 'query_zdmc',// 选择器对应的input名称，在绑定popupTree时需要这个id
			fieldDisplayName : '终端'// 选择器的名称，将在页面上input之前显示
		}
	});

	// ===================================================
	// 终端
	d0101mgr.getAllZds(function(item) {
		jQuery("#query_zdmc").popupTree({
			id : "query_zdmc_popup",
			dmFieldName : "query_zddm",
			displayFieldName : "query_zdmc",
			menuidFieldName : "zddm",
			textFieldName : "zdmc",
			type : "radioTree",// "multTree","popup"
			title : "选择终端",
			data : item
		});

		jQuery("#zdmc").popupTree({
			id : "zdmc_popup",
			idFieldName : "zddm",
			dmFieldName : 'zddm',
			displayFieldName : "zdmc",
			menuidFieldName : "zddm",
			textFieldName : "zdmc",
			urlFieldName : "zddd",
			type : "radioTree",// "multTree","popup"
			title : "选择终端",
			data : item
		});
	});
	// 终端
	// ===================================================
	
	var status_sel = jQuery("#query_status");
	status_sel.empty();
	status_sel.append("<option value=''>--所有状态--</option>");
	status_sel.append("<option value='0'>正常</option>");
	status_sel.append("<option value='1'>冻结</option>");
	
	status_sel = jQuery("#status");
	status_sel.empty();
	status_sel.append("<option value=''>--请选择状态--</option>");
	status_sel.append("<option value='0'>正常</option>");
	status_sel.append("<option value='1'>冻结</option>");

});
function onResetBtn() {
	var row = jQuery("#jqGridList").jqGrid('getGridParam', 'selrow');
	if (row == null || row == 'undefined') {
		alert('请先选择要重置密码的用户！');
		return false;
	}
	var rowDatas = jQuery("#jqGridList").jqGrid('getRowData', row);
	var warnMsg = "确认要重置用户[ " + rowDatas["username"] + " ]的密码吗？";
	if (confirm(warnMsg)) {
		var id = rowDatas["userno"];
		eval(actionname + ".resetPasswd(id,resetPasswdCallBack)");
	}
}

function resetPasswdCallBack(item) {
	if (item == null || item) {
		alert("重置密码成功！");
	} else {
		alert("重置密码失败！");
	}
}