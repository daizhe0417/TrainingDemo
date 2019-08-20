var ajaxconf = {
	url: "",
	type: "POST",
	data: {},
	timeout: 30000,
	dataType: "json",
	success: function () {
	},
	error: function () {
	}
};

function ajax(settings) {
	jQuery.extend(ajaxconf, settings);
	var randId = Math.random();
	ajaxconf.url += "?random=" + randId;
	var loadingId = DzConfirm.loading().id;
	ajaxconf.success = function (item) {
		// console.log(JSON.stringify(item));
		if (item.status == 1) {
			settings.success(item);
		} else if (item.status == -1) {
			settings.error(item);
		}
		DzConfirm.close(loadingId);
	};
	ajaxconf.error = function (item) {
		// console.log(JSON.stringify(item));
		if (item.responseText.indexOf('尚未登录或登录超时,请先登陆系统') > 0) {
			DzConfirm.close(loadingId);
			DzConfirm.alert('尚未登录或登录超时,请重新登陆系统');
		}
		if (item.status == 1) {
			settings.success(item);
		} else if (item.status == -1) {
			settings.error(item);
		}
		DzConfirm.close(loadingId);
	};

	$.ajax(ajaxconf);
}
