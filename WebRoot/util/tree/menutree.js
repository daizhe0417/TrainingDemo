/* 简单的树形菜单，能展开收起,需要jQuery支持
 * author:daizhe
 * version:2.1
 * environ:firefox 3.6
 * 增加checkbox选项，子菜单的checkbox随动，选中checkbox时，子菜单自动全部展开
 * 增加urlClosed选项，可屏蔽超链接//没有超链接了
 * 增加可外部调用的expand方法
 * 面向jQuery UI的tab widget
 * 2013-10-08 修复一个bug，选择css、td、img、a等元素时应当用me.find而不是jQuery,这样可能把页面中的其他元素也选进来
 * 2013-10-08 针对jQuery1.9,checkbox的选中处理方法从attr("check",true)变为prop("check",true);判断是否选中的方法变为jQuery(this).is(":checked")
 * 2014-06-06 增加menuid、text和url三个字段的自定义字段名设置
 * 2014-06-13 对于默认情况隐藏非第一级节点的操作，修改了第一级节点的判断条件为：id的长度是否超过conf.data的0号元素的id的长度
 * 2014-06-15 当urlClosed为true时，a的id设置为url
 * 2014-08-09 连接文字超出长度的省略，通过title显示完整信息的提示，去掉原来所有超链接的titile为localhost的代码
 * 2015-01-31 增加abbreOn，是否缩略菜单名，默认true
 * 2015-06-27 urlFieldName参数支持列表方式，传递时用","分隔的字符串，程序自行分割
 * 
 * version:2.1
 * 2015-06-27
 * urlFieldName参数支持列表方式，用","分隔
 */
(function(jQuery) {
	// 构造方法
	jQuery.fn.treemenu = function(settings) {
		// 数据
		var conf = {
			sourceFolder : "",// 所在目录
			defaultTarget : "mainframe",// 默认target
			openedImage : "images/folder-open.png",// 打开菜单项图标
			closedImage : "images/folder.png",// 关闭菜单项图标
			leafImage : "images/leaf.png",// 叶子图标
			blankImage : "images/blank.png",// 空白占位图标
			checkBox : false,
			checkBoxValueFieldName : "menuid",
			urlClosed : false,
			data : null,
			tabsId : "tabs",
			onClickFunction : "addTabs",
			target : "window.parent.parent.frames[\"rightframe\"].frames[\"mainframe\"]",
			menuidFieldName : "menuid",
			textFieldName : "text",
			urlFieldName : "url",
			// 是否缩写菜单名
			abbreOn : true
		};
		// 用传进来的参数覆盖默认，没传则保留
		jQuery.extend(conf, settings);

		// 图标的目录
		conf.openedImage = conf.sourceFolder + conf.openedImage;
		conf.closedImage = conf.sourceFolder + conf.closedImage;
		conf.leafImage = conf.sourceFolder + conf.leafImage;
		conf.blankImage = conf.sourceFolder + conf.blankImage;

		var me = $(this);

		// 设置属性
		me.css("font-size", "14");
		me.css("font-family", "微软雅黑, Verdana, Geneva, sans-serif")
		// 表格属性
		me.css("cellspacing", "0");
		me.css("cellpadding", "0");
		me.css("border", "0");
		// 行间距
		me.css("border-collapse", "collapse");
		me.css("border-spacing", "0px");

		// 添加行
		for (var i = 0; i < conf.data.length; i++) {
			var menuid = eval("conf.data[i]." + conf.menuidFieldName);
			var text = eval("conf.data[i]." + conf.textFieldName);
			var url = "";
			var urlFieldNames = conf.urlFieldName.split(",");
			for (var l = 0; l < urlFieldNames.length; l++) {
				url += eval("conf.data[i]." + urlFieldNames[l]) + ",";
			}
			url = url.substring(0, url.length - 1);
			if (url == undefined || url == 'null' || url == ''||url=='undefined') {
				url = null;
			}
			var checkBoxValueFieldName = eval("conf.data[i]."
					+ conf.checkBoxValueFieldName);

			var nodeType = "closed";
			// 判断是否叶子节点
			// 最后一个节点一定是叶子节点，只有下一个节点id长于当前节点id时，当前节点才不是叶子
			if (i == conf.data.length - 1
					|| eval("conf.data[i + 1]." + conf.menuidFieldName).length <= menuid.length) {
				nodeType = "child";
			}

			// 添加行用的字符串
			var echo = "<tr><td id='" + menuid + "' class='" + nodeType + "'>";

			// 当前节点级别
			var len = menuid.length / 2;
			// 根据级别循环添加占位图标
			for (var j = 1; j < len; j++) {
				echo += "<img src='" + conf.blankImage + "'>";
			}

			if (conf.checkBox) {
				echo += "<input type='checkbox' id='treeCB" + menuid
						+ "' name='treeCB' value='" + checkBoxValueFieldName
						+ "' >";
			}

			// 菜单项
			// var textStr = !conf.urlClosed && url ? "<a href='"
			// + url + "' target='" + conf.defaultTarget
			// + "'>" + text + "</a>" : "<a >"
			// + text + "</a>";
			// 超出长度的省略，通过title显示完整信息的提示
			// 增加是否缩写的标志，默认“是”
			var shortText = text;
			if (conf.abbreOn) {
				if (shortText.length > 10 - len) {
					shortText = shortText.substring(0, 11 - len * 1.5) + "...";
				}
			}
			var textStr = !conf.urlClosed && url ? "<a id='" + menuid + ","
					+ text + "," + url + "' title='" + text + "'>" + shortText
					+ "</a>" : "<a id='" + url + "' title='" + text + "'>"
					+ shortText + "</a>";

			// 前缀图标
			echo += "<img id='img" + menuid + "closed' class='closed' src='"
					+ (nodeType == 'child' ? conf.leafImage : conf.closedImage)
					+ "'>" + "<img id='img" + menuid
					+ "open' class='open' src='"
					+ (nodeType == 'child' ? conf.leafImage : conf.openedImage)
					+ "'>" + "<span>&nbsp;</span>" + textStr;
			echo += "</td></tr>";
			// 添加元素
			me.append(echo);
		}

		me.find("tr").css("height", "23px");
		me.find("td").css("nowrap", "nowrap");

		// 图形垂直对齐方式
		me.find("img").css("vertical-align", "middle");
		// 图片的文字的垂直对齐方式
		me.find("img").css("align", "absmiddle");
		me.find("img").css("height", "20px");
		// 超链接文字不显示下划线
		me.find("a").css("text-decoration", "none");
		// 超链接文字颜色，点击前后的都有效
		me.find("a").css("color", "#000000");

		// 初始时不显示打开的图标
		me.find("img[class='open']").hide();
		// 初始时非1级节点都隐藏
		me.find("td").each(
				function() {
					if (jQuery(this).attr("id").length > (eval("conf.data[0]."
							+ conf.menuidFieldName)).length) {
						jQuery(this).parent().hide();
					}
				});

		// checkbox的选中事件:子菜单选中+当前菜单展开+父菜单也应选中
		if (conf.checkBox) {
			jQuery(":checkbox[id^='treeCB']").click(
					function() {
						// 子菜单选中
						jQuery(
								":checkbox[id^='" + jQuery(this).attr("id")
										+ "']").prop("checked",
								jQuery(this).is(":checked"));
						// 当前菜单展开
						var id = jQuery(this).parent().attr("id");
						var td = jQuery("td[id^='" + id + "']");
						for (var i = 0; i < td.length; i++) {
							expand(jQuery(td[i]));
						}

						// 父菜单也应选中
						id = jQuery(this).attr("id");
						id = id.substring(0, id.length - 2);
						while (id.length > 6) {
							if (jQuery(":checkbox[id!='" + id + "'][id^='" + id
									+ "']:checked").length > 0) {
								jQuery("#" + id).prop("checked", true);
							} else {
								jQuery("#" + id).removeAttr("checked");
							}
							id = id.substring(0, id.length - 2);
						}
					});
		}

		// 超链接地址隐藏，firefox中无效
		// me.find("a").attr("title", "localhost");// 有titile的<a>在鼠标悬停时会有提示信息
		me.find("a").mouseenter(function() {
			window.status = window.defautStatus; // firefox中的window.status默认不能修改
			return true;
		}).mouseleave(function() {
			window.status = window.defautStatus;
			return true;
		});

		// 展开收起方法
		me.find("img,a").click(function() {
			if (jQuery(this).parent().attr("class") == 'closed') {
				expand(jQuery(this).parent());
			} else if (jQuery(this).parent().attr("class") == 'open') {
				collapse(jQuery(this).parent());
			} else if (jQuery(this).parent().attr("class") == 'child') {
				// var menu = jQuery(this).attr("id").split(",");
				// eval(conf.target + "." + conf.onClickFunction + "('"
				// + menu[0] + "','" + menu[1] + "','" + menu[2]
				// + "')");
			}
		});

		me.find("a").click(
				function() {
					// 非叶子节点也可以点击链接打开页面
					// if (jQuery(this).parent().attr("class") == 'child') {
					if (jQuery(this).attr("id") != 'null') {
						var menu = jQuery(this).attr("id").split(",");
						eval(conf.target + "." + conf.onClickFunction + "('"
								+ menu[0] + "','" + menu[1] + "','" + menu[2]
								+ "')");
					}
				});

		// 展开节点方法
		function expand(node) {
			if (jQuery(node).attr("class") != 'open') {

				var menuid = jQuery(node).attr("id");
				// 只展开下一级子节点
				// 找出所有子节点
				jQuery("td[id^='" + menuid + "']").each(function() {
					// 子节点中的下一级节点
					if (jQuery(this).attr("id").length - menuid.length == 2) {
						// 展开
						jQuery(this).parent().slideDown(50, function() {
						});
					}
				});
				// 修改当前节点的状态及图标
				jQuery(node).attr("class", "open");
				jQuery(node).children("img[class='closed']").hide();
				jQuery(node).children("img[class='open']").show();
			}
		}
		;

		// 收起节点方法
		function collapse(node) {
			if (jQuery(node).attr("class") != 'closed') {
				var menuid = jQuery(node).attr("id");
				// 所有的节点都应收起，如果子节点已展开也应用递归调用将其收起
				// 找出所有子节点
				jQuery("td[id^='" + menuid + "']").each(function() {
					// 对下一级子节点做判断
					if (jQuery(this).attr("id").length - menuid.length == 2) {
						// 若下一级子节点是展开状态，递归调用收起节点方法
						if (jQuery(this).attr("class") == 'open') {
							collapse(jQuery(this));
						}
						// 收起
						jQuery(this).parent().slideUp(50, function() {
						});
					}
				});
				// 修改当前节点的状态及图标
				jQuery(node).attr("class", "closed");
				jQuery(node).children("img[class='open']").hide();
				jQuery(node).children("img[class='closed']").show();
			}
		}
		;

		// function addTabs(id, text, url) {
		// var tab =
		// jQuery(window.parent.parent.frames["rightframe"].frames["mainframe"].document).find("#"
		// + conf.tabsId);
		// if (tab == null || tab == 'undefined') {
		// return;
		// }
		// tab.children("ul").append(
		// "<li><a href='#tabs-" + id + "'>" + text + "</a></li>");
		// tab.append("<div id='tabs-" + id + "'><iframe src='" + url
		// + "'></iframe></div>");
		// window.parent.parent.frames["rightframe"].frames["mainframe"]
		// .addTabs(id, text, url);
		// }
		// ;
	};
	jQuery.fn.expand = function() {
		var node = jQuery(this);
		// if (jQuery(node).attr("class") != 'open') {
		var menuid = jQuery(node).attr("id");
		// 只展开下一级子节点
		// 找出所有子节点
		jQuery("td[id^='" + menuid + "']").each(function() {
			// 子节点中的下一级节点
			if (jQuery(this).attr("id").length - menuid.length == 2) {
				// 展开
				jQuery(this).parent().slideDown(50, function() {
				});
			}
		});
		// 修改当前节点的状态及图标
		jQuery(node).attr("class", "open");
		jQuery(node).children("img[class='closed']").hide();
		jQuery(node).children("img[class='open']").show();
		// }
	}
})(jQuery);
