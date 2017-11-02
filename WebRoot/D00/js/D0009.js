var jqGridConf = {
	caption : "用户列表",
	colNames : [ '登录名', '真实姓名', '部门', '绑定单位', 'khid', '单位类型', '角色 ', '角色 ',
			'passwd', '联系电话', 'E-Mail', '所属公司', 'type', '是否绑定', 'deltag' ],
	colModel : [ {
		name : 'userno',
		index : 'userno',
		width : 90
	}, {
		name : 'username',
		index : 'username',
		width : 100
	}, {
		name : 'bmdm',
		index : 'bmdm',
		hidden : true
	}, {
		name : 'bmmc',
		index : 'bmmc',
		width : 170
	}, {
		name : 'khid',
		index : 'khid',
		hidden : true
	}, {
		name : 'khtype',
		index : 'khtype',
		width : 90,
		formatter : function(cellvalue, options, rowObject) {
			if (cellvalue == '0') {
				return "九如公司";
			} else if (cellvalue == '1') {
				return "一级代理商";
			} else if (cellvalue == '2') {
				return "二级代理商";
			} else if (cellvalue == '3') {
				return "客户";
			} else {
				return "";
			}
		},
		unformat : function(cellvalue, options, rowObject) {
			if (cellvalue == '九如公司') {
				return "0";
			} else if (cellvalue == '一级代理商') {
				return "1";
			} else if (cellvalue == '二级代理商') {
				return "2";
			} else if (cellvalue == '客户') {
				return "3";
			} else {
				return "";
			}
		}
	}, {
		name : 'roleno',
		index : 'roleno',
		hidden : true
	}, {
		name : 'rolename',
		index : 'rolename',
		width : 90
	}, {
		name : 'passwd',
		index : 'passwd',
		hidden : true
	}, {
		name : 'mobile',
		index : 'mobile',
		width : 90
	}, {
		name : 'email',
		index : 'email',
		width : 130
	}, {
		name : 'gsmc',
		index : 'gsmc',
		width : 100
	}, {
		name : 'type',
		index : 'type',
		hidden : true
	}, {
		name : 'isBound',
		index : 'isBound',
		width : 70,
		formatter : function(cellvalue, options, rowObject) {
			if (cellvalue == '0') {
				return "否";
			} else if (cellvalue == '1') {
				return "是";
			} else {
				return "";
			}
		},
		unformat : function(cellvalue, options, rowObject) {
			if (cellvalue == '否') {
				return "0";
			} else if (cellvalue == '是') {
				return "1";
			} else {
				return "";
			}
		}
	}, {
		name : 'deltag',
		index : 'deltag',
		hidden : true

	} ]
};

var actionname = "D00_03action";
jQuery(document).ready(
		function() {
			commonInit({
				detailDlgTitle : '用户',
				deleteType : 'byObject',
				queryStr : " and type='1'",
				queryBarHeader_btns : [ {
					id : 'boundBtn',
					value : '绑定',
					active : true,
					bind : onBoundBtn
				}, {
					id : 'unboundBtn',
					value : '解除绑定',
					active : true,
					bind : onUnboundBtn
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
				} ],
				queryBarHeader_dept : {// 设置部门选择器
					open : true,// 显示部门选择器
					fieldName : 'query_bmmc',// 选择器对应的input名称，在绑定popupTree时需要这个id
					fieldDisplayName : '工程'// 选择器的名称，将在页面上input之前显示
				}
			});

			// ===================================================
			// 代理商
			deptInfoService.getAuthDeptsBySession(4, function(item) {
				jQuery("#query_bmmc").popupTree({
					id : "query_bmmc_popup",
					dmFieldName : "query_bmdm",
					displayFieldName : "query_bmmc",
					urlFieldName : "id,type",
					type : "radioTree",// "multTree","popup"
					title : "选择代理商客户",
					data : item
				});

				jQuery("#bmmc").popupTree({
					id : "bmmc_popup",
					idFieldName : "khtype",
					dmFieldName : 'bmdm',
					displayFieldName : "bmmc",
					urlFieldName : "id,type",
					type : "radioTree",// "multTree","popup"
					title : "选择代理商客户",
					data : item
				});
			});
			// 代理商
			// ===================================================

			d0002mgr.getSOMRoles(function(item) {
				var sel1 = jQuery("#query_roleno");
				var sel2 = jQuery("#roleno");
				if (item != null) {
					sel1.empty();
					sel2.empty();
					sel1.html("<option value=''>--所有角色--</option>");
					sel2.html("<option value=''>--所有角色--</option>");
					for (var i = 0; i < item.length; i++) {
						sel1.append("<option value='" + item[i].value + "'>"
								+ item[i].name + "</option");
						sel2.append("<option value='" + item[i].value + "'>"
								+ item[i].name + "</option");
					}
				} else {
					sel1.html("<option value=''>--暂无角色--</option>");
					sel2.html("<option value=''>--暂无角色--</option>");
				}
			});

			// ======= 是否绑定=======
			var sel_isBound = jQuery("#query_isBound");
			sel_isBound.html("<option value=''>--所有--</option>");
			sel_isBound.append("<option value='0'>否</option");
			sel_isBound.append("<option value='1'>是</option");

			sel_isBound = jQuery("#isBound");
			sel_isBound.append("<option value='0'>否</option");
			sel_isBound.append("<option value='1'>是</option");

		});
function onBoundBtn() {
	clearInput();
	if (filledInputBySelectedRow()) {
		var moDlg = jQuery("#detailDlg");
		moDlg.dialog("option", "title", "绑定" + conf.detailDlgTitle).dialog(
				"open");
	}
}

function detailDlgSaveBtnAction() {
	var formMap;
	var formName = "showForm";
	if (validator.form()) {
		if (!formHasChanged) {
			alert("未修改任何内容，无需保存！");
			return;
		}
		// if (jQuery("#" + formName).validate(validateConf).form()) {
		formHasChanged = false;
		formMap = DWRUtil.getValues(formName);
		eval(actionname + ".bound(formMap,boundCallBack)");
	} else {
		alert("表单格式错误！");
	}
}

function boundCallBack(item) {
	if (item == null || item) {
		formHasChanged = false;
		jQuery("#" + conf.detailDlgId).dialog("close");
		alert("已成功绑定用户！");
	} else {
		alert("未能绑定用户！");
		formHasChanged = true;
	}
	toQuery();
}

function onUnboundBtn() {
	var row = jQuery("#jqGridList").jqGrid('getGridParam', 'selrow');
	if (row == null || row == 'undefined') {
		alert("请选择要解除绑定的注册用户！");
		return false;
	}

	if (confirm("确认要解除绑定吗？")) {
		var rowDatas = jQuery("#jqGridList").jqGrid('getRowData', row);
		var id = rowDatas["userno"];
		eval(actionname + ".unBound(id,unBoundCallBack)");
	}
}
function unBoundCallBack(item) {
	if (item == null || item) {
		alert("成功解除绑定用户！");
	} else {
		alert("未能解除绑定用户！");
	}
	toQuery();
}
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