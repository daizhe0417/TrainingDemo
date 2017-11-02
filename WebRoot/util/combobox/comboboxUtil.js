(function(jQuery) {
	// 构造方法
	jQuery.fn.comboboxUtil = function() {
		var me = jQuery(this);
		me.hide();
		var me_id = me.attr("id");
		me.combobox({
			select : function(event, ui) {
				jQuery("#" + me_id).trigger("change")
			}
		});
		me.css({
			"max-height" : "100px",
			"overflow-y" : "auto",
			"overflow-x" : "hidden"
		})
	}
})(jQuery);
