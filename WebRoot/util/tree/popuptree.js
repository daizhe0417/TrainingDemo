/* 树形弹出层，当备选数据项很多时代替select
 * author:daizhe
 * version: 1.0 
 * 数据默认来自deptInfoService
 * 自动生成树形菜单形式基于jQuery UI的弹出层
 * 选项数据绑定到dom对象
 * 点击其他位置将关闭弹出层
 * 
 * version:1.1
 * 2014-06-15
 * 当选中某个部门时，不但修改显示数据，添加隐藏字段，还要根据值是否改变判断是否触发绑定元素的change事件
 * 
 * version:1.2
 * 2015-02-09
 * 部门列表数据由外部提供，不再自行查找（因为某些页面既有查询又有修改时可能执行两次查询后台的方法）；
 * 增加设置menuidFieldName、textFieldName和urlFieldName的conf选项
 * 调用treemenu插件时，给出abbreOn : false(菜单项不进行缩写）
 */

/*
 * 调用方式说明：
 * 在要点击弹出对话框的元素上绑定popupTree方法
 * 页面中有多个popupTree时，需要为他们定义不同的id
 * idFielsName指用于判断、取值等情况的实际值，对于部门列表来说是id字段
 * displayFieldName值在页面上显示的值
 * title为弹出对话框的标题
 */

/*
 jQuery("#query_bmmc").popupTree({
 id : "query_popup",
 idFielsName : "query_bmid",
 displayFieldName : "query_bmmc",
 type : "radioTree",//"multTree","popup"
 title : "选择部门"
 });
 */

(function(jQuery) {

	// 构造方法
	jQuery.fn.popupTree = function(settings) {
		var defaultSettings = {
			id : "",
			title : "",
			content : "",
			width : 300,
			height : 400,
			closeText : '[×]',
			popupField : "",
			dataFields : null,
			data : null,
			idFieldName : "",
			displayFieldName : "",
			dmFieldName : "",
			type : null,
			menuidFieldName : "bmdm",
			textFieldName : "bmmc",
			urlFieldName : "type",
		};

		var me = jQuery(this);

		// 用传进来的参数覆盖默认，没传则保留
		me[0].popupTreeconf = jQuery.extend(defaultSettings, settings || {});
		if (me[0].popupTreeconf.id == undefined || me[0].popupTreeconf.id == '') {
			me[0].popupTreeconf.id = me.attr("id");
		}

		var titleHtml = "";
		var popupHtml = jQuery("<div id='" + me[0].popupTreeconf.id
				+ "_div' class='dzpopup'>" + titleHtml + "<div id='"
				+ me[0].popupTreeconf.id + "_content'>加载中……</div></div>");

		// 添加popup
		jQuery('body').append(popupHtml);

		// 查询部门数据列表
		// 生成树形结构
		if (me[0].popupTreeconf.data != null) {
			var o = {
				sourceFolder : "../util/tree/",
				// checkBox : true,
				urlClosed : true,
				data : me[0].popupTreeconf.data,
				menuidFieldName : me[0].popupTreeconf.menuidFieldName,
				textFieldName : me[0].popupTreeconf.textFieldName,
				urlFieldName : me[0].popupTreeconf.urlFieldName,
				abbreOn : false
			};
			jQuery("#" + me[0].popupTreeconf.id + "_content").html("");
			jQuery("#" + me[0].popupTreeconf.id + "_content").treemenu(o);
		} else {
			jQuery("#" + me[0].popupTreeconf.id + "_content").html("");
			jQuery("#" + me[0].popupTreeconf.id + "_content").html(
					"暂无" + me[0].popupTreeconf.title + "数据......");
		}

		// 初始化Dialog
		jQuery("#" + me[0].popupTreeconf.id + "_div").dialog({
			autoOpen : false,
			width : me[0].popupTreeconf.width,
			height : me[0].popupTreeconf.height,
			zIndex : 900,
			position : {
				my : "left top",
				at : "left bottom",
				of : me
			},
			title : "选择" + me[0].popupTreeconf.title,
			resizable : false
		});

		var dialog = jQuery("#" + me[0].popupTreeconf.id + "_div");

		// 点击绑定元素打开对话框，停止事件冒泡
		me.on("click", function(e) {
			dialog.dialog("open");
			e.stopPropagation();
		});

		// 点击超链接时，将选中的数据显示到绑定元素上，添加隐藏的id输入域
		jQuery("#" + me[0].popupTreeconf.id + "_content").on(
				"click",
				"a",
				function() {
					// if (jQuery(this).parent().attr("class") ==
					// 'child') {
					// var id = jQuery(this).attr("id");
					var id = "";
					if (me[0].popupTreeconf.idFieldName
							&& me[0].popupTreeconf.idFieldName != "") {
						id = jQuery(this).attr("id");
						var idObj = me.parent().find(
								"#" + me[0].popupTreeconf.idFieldName);
						if (idObj.length > 0) {
							idObj.val(id);
							// 判断是否给了新值，是的话触发change事件，非页面上用户操作导致的input值修改默认不会触发change事件
							var oldValue = idObj.data("value");
							if (oldValue != undefined && oldValue == id) {
							} else {
								idObj.data("value", id);
								idObj.trigger("change");
							}
						} else {
							me.parent().append(
									"<input type='hidden' id='"
											+ me[0].popupTreeconf.idFieldName
											+ "' name='"
											+ me[0].popupTreeconf.idFieldName
											+ "' value='" + id + "'/>");
						}
					}
					if (me[0].popupTreeconf.dmFieldName
							&& me[0].popupTreeconf.dmFieldName != "") {
						id = jQuery(this).parent().attr("id");
						var dmObj = me.parent().find(
								"#" + me[0].popupTreeconf.dmFieldName);
						if (dmObj.length > 0) {
							dmObj.val(id);
							// 判断是否给了新值，是的话触发change事件，非页面上用户操作导致的input值修改默认不会触发change事件
							var oldValue = dmObj.data("value");
							if (oldValue != undefined && oldValue == id) {
							} else {
								dmObj.data("value", id);
								dmObj.trigger("change");
							}
						} else {
							me.parent().append(
									"<input type='hidden' id='"
											+ me[0].popupTreeconf.dmFieldName
											+ "' name='"
											+ me[0].popupTreeconf.dmFieldName
											+ "' value='" + id + "'/>");
						}
					}
					me.val(jQuery(this).html());
					var oldValue = me.data("value");
					if (oldValue != undefined && oldValue == id) {
					} else {
						me.data("value", id);
						me.trigger("change");
					}
					// dialog.dialog("close");
					// }
				});

		// 点击弹出层本身不关闭
		jQuery("#" + me[0].popupTreeconf.id + "_div").on("click", function(e) {
			e.stopPropagation();
		});

		// 点击页面其他部位关闭对话框
		jQuery(document).on("click", function(e) {
			if (dialog) {
				dialog.dialog("close");
				me.data("value", null);
			}
		});

	};

	jQuery.fn.popUpTree = function(option, value1, value2) {
		if (option == 'setValue') {
			var me = jQuery(this);
			if (me[0].popupTreeconf == undefined
					|| me[0].popupTreeconf.id == undefined
					|| me[0].popupTreeconf.id == '') {
				return false;
			}
			var me_p = me.parent();
			for (var i = 0; i < value1.length; i++) {
				if (me[0].popupTreeconf.idFieldName
						&& me[0].popupTreeconf.idFieldName != "") {
					if (value1[i].name == me[0].popupTreeconf.idFieldName) {
						var id = value2[value1[i].name];
						// alert(value1[i].name + " "
						// + me[0].popupTreeconf.idFieldName + " " + id)
						if (me_p.find("#" + me[0].popupTreeconf.idFieldName).length > 0) {
							me_p.find("#" + me[0].popupTreeconf.idFieldName)
									.val(id);
						} else {
							me_p.append("<input type='hidden' id='"
									+ me[0].popupTreeconf.idFieldName
									+ "' name='"
									+ me[0].popupTreeconf.idFieldName
									+ "' value='" + id + "'/>");
						}
					}
				}
				if (me[0].popupTreeconf.dmFieldName
						&& me[0].popupTreeconf.dmFieldName != "") {
					if (value1[i].name == me[0].popupTreeconf.dmFieldName) {
						var dm = value2[value1[i].name];
						// alert(value1[i].name + " "
						// + me[0].popupTreeconf.dmFieldName + " " + dm)
						if (me_p.find("#" + me[0].popupTreeconf.dmFieldName).length > 0) {
							me_p.find("#" + me[0].popupTreeconf.dmFieldName)
									.val(dm);
						} else {
							me_p.append("<input type='hidden' id='"
									+ me[0].popupTreeconf.dmFieldName
									+ "' name='"
									+ me[0].popupTreeconf.dmFieldName
									+ "' value='" + dm + "'/>");
						}
					}
				}
			}

			// if (me[0].popupTreeconf.idFieldName
			// && me[0].popupTreeconf.idFieldName != "") {
			// var id = "";
			// jQuery("#" + me[0].popupTreeconf.id + "_content a").each(
			// function(i, o) {
			// if (jQuery(o).html() == me.val()) {
			// id = jQuery(o).attr("id");
			// }
			// });
			// var idField = jQuery("#" + me[0].popupTreeconf.idFieldName);
			// if (idField.length > 0) {
			// idField.val(id);
			// } else {
			// alert(me[0].popupTreeconf.idFieldName + " " + id);
			// me_p.append("<input type='hidden' id='"
			// + me[0].popupTreeconf.idFieldName + "' name='"
			// + me[0].popupTreeconf.idFieldName + "' value='"
			// + id + "'/>");
			// }
			// }
			// if (me[0].popupTreeconf.dmFieldName
			// && me[0].popupTreeconf.dmFieldName != "") {
			// var dm = "";
			// jQuery("#" + me[0].popupTreeconf.id + "_content a").each(
			// function(i, o) {
			// if (jQuery(o).html() == me.val()) {
			// dm = jQuery(o).parent().attr("id");
			// }
			// });
			// var dmField = jQuery("#" + me[0].popupTreeconf.dmFieldName);
			// if (dmField.length > 0) {
			// dmField.val(id);
			// } else {
			// alert(me[0].popupTreeconf.dmFieldName + " " + dm);
			// me_p.append("<input type='hidden' id='"
			// + me[0].popupTreeconf.dmFieldName + "' name='"
			// + me[0].popupTreeconf.dmFieldName + "' value='"
			// + dm + "'/>");
			// }
			// }
		}
	}

	jQuery.fn.isPopUpTree = function() {
		var me = jQuery(this);
		if (me[0].popupTreeconf != undefined && me[0].popupTreeconf.id != "") {
			return true;
		} else {
			return false;
		}
	}

	jQuery.fn.TriggerChangePopUpTree = function() {
		var me = jQuery(this);
		if (me[0].popupTreeconf == undefined
				|| me[0].popupTreeconf.id == undefined
				|| me[0].popupTreeconf.id == '') {
			return false;
		}
		me.popUpTree("setValue");
		// me.trigger("change");
	}

})(jQuery);
