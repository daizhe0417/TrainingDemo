/* 用于联动处理，当一个因素change时，触发某个后台调用，用结果（item）填充其他select因素
 * author:daizhe
 * version:1.0
 * version:1.1
 * 2015-06-27
 * 前4个参数改为option数组形式，可以支持一个元素有多个响应事件的情况
 */
(function(jQuery) {

	// 构造方法
	jQuery.fn.cascade = function(settings) {
		var defaultSettings = {
			option : [ {
				methodName : '',
				value : null,
				selectElementName : '',
				name : ''
			} ],
			selectElementValueFieldName : 'value',
			selectElementOptionFieldName : 'name'
		}
		var me = jQuery(this);

		// 用传进来的参数覆盖默认，没传则保留
		me[0].casconf = jQuery.extend(defaultSettings, settings || {});

		var str = new Array(me[0].casconf.option.length);
		for (var i = 0; i < me[0].casconf.option.length; i++) {
			var option = me[0].casconf.option[i];
			if (option.methodName == '') {
				return false;
			}
			if (option.value == null) {
				return false;
			}
			if (option.selectElementName == '') {
				return false;
			}
			if (option.name == '') {
				return false;
			}
			str[i] = option.methodName + '(' + option.value
					+ ',fillSelectElement_' + (i + 1) + 'CallBack)';
			eval('function fillSelectElement_' + (i + 1)
					+ 'CallBack(item){fillSelectElement_CallBack(item,' + i
					+ ');}' + '//@ sourceURL=fillSelectElement_' + (i + 1)
					+ 'CallBack');
		}

		me.on("change", function() {
			for (var i = 0; i < me[0].casconf.option.length; i++) {
				eval(str[i]);
			}
		});

		function fillSelectElement_CallBack(item, i) {
			// alert(item.length+" "+i);
			var sel = jQuery("#" + me[0].casconf.option[i].selectElementName);
			sel.combobox("destroy");
			if (item != null && item.length != 0) {
				var currentVal = sel.val();
				sel.empty();
				sel.html("<option value=''>--所有" + me[0].casconf.option[i].name
						+ "--</option>");
				for (var i = 0; i < item.length; i++) {
					sel
							.append("<option value='"
									+ eval("item[i]."
											+ me[0].casconf.selectElementValueFieldName)
									+ "'>"
									+ eval("item[i]."
											+ me[0].casconf.selectElementOptionFieldName)
									+ "</option");
				}
				if (currentVal != undefined && currentVal != '') {
					sel.val(currentVal);
				}
			} else {
				sel.html("<option value=''>--暂无" + me[0].casconf.option[i].name
						+ "--</option>");
			}
			sel.comboboxUtil();
		}
	}

	jQuery.fn.refreshCascade = function() {
		var me = jQuery(this);
		if (me[0].casconf != undefined) {
			me.trigger("change");
		} else {
			return false;
		}
	}
})(jQuery);
