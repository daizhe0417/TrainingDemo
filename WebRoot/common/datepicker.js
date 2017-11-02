/*
 * 扩展的datepicker方法，模拟产生change事件
 * @author daizhe
 * @version 1.0
 * @date 2014-06-20
 */
(function(jQuery) {
	jQuery.fn.datepicker = function(settings) {
		var defaultSettings = {
			skin : 'ext'
		};

		var me = jQuery(this);

		// 用传进来的参数覆盖默认，没传则保留
		me[0].conf = jQuery.extend(defaultSettings, settings || {});

		// 使用WdatePicker控件
		me.on("click", function() {
			WdatePicker(me[0].conf);
		});

		// 用于模拟产生change事件，change等事件被WdatePicker控件屏蔽了
		// 用于交替blur事件的标志
		me[0].flag = true;
		// 绑定元素的blur事件，这个事件在弹出日期控件后会触发一次，这次触发不需要响应，所以用flag进行交替调用
		me.on("blur", function() {
			if (me[0].flag) {
				me[0].flag = false;
			} else {
				me[0].flag = true;
				// 与原值比较，若不同则触发change事件
				var value = jQuery(this).val();
				var oldValue = jQuery(this).data("oldValue");
				if (oldValue != undefined && oldValue == value) {
				} else {
					jQuery(this).data("oldValue", value);
					jQuery(this).trigger("change");
					me.trigger("change");
				}
			}
		});
	};
})(jQuery);