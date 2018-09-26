var ajaxconf = {
	url : "",
	type : "POST",
	data : {},
	timeout : 30000,
	dataType : "json",
	success : function() {
	},
	error : function() {
	}
};

function ajax(settings) {
	jQuery.extend(ajaxconf, settings);
	ajaxconf.url += "?random=" + Math.random();
	ajaxconf.success = function(item) {
		if (item.status == 1) {
			settings.success(item);
		} else if (item.status == -1) {
			settings.error(item);
		}
	};
	ajaxconf.error = function(item) {
		if (item.status == 1) {
			settings.success(item);
		} else if (item.status == -1) {
			settings.error(item);
		}
	};

	$.ajax(ajaxconf);
}
