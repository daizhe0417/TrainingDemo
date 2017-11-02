jQuery(document).ready(function() {
	ajax({
		url : "D00_02action_getSOMRoles",
		data : {
			reqJsonStr : JSON.stringify({})
		},
		success : getAllRolesCallBack,
		error : getAllRolesCallBack
	});

	ajax({
		url : "D00_04action_getAllMenus",
		data : {
			reqJsonStr : JSON.stringify({})
		},
		success : getAllMenusCallBack,
		error : getAllMenusCallBack
	});

	jQuery("#savBtn").click(function() {
		var rolecb_array = new Array();
		$('input[name="rolecb"]:checked').each(function() {
			rolecb_array.push($(this).val());// 向数组中添加元素
		});
		var rolecbs = rolecb_array.join(',');

		var treeCB_array = new Array();
		$('input[name="treeCB"]:checked').each(function() {
			treeCB_array.push($(this).val());// 向数组中添加元素
		});
		var treeCBs = treeCB_array.join(',');
		ajax({
			url : "D00_05action_save",
			data : {
				rolecb : rolecbs,
				treeCB : treeCBs
			},
			success : saveCallBack,
			error : saveCallBack
		});
		// jQuery("#showform").submit();
	})

});
function getAllRolesCallBack(item) {
	if (item.status == 1) {
		if (item.datas != null && item.datas.length > 0) {
			var roleObj = jQuery("#roles");
			for (var i = 0; i < item.datas.length; i++) {
				if (i % 4 == 0) {
					jQuery(roleObj).append("<tr></tr>");
				}
				jQuery(roleObj).find("tr:last").append(
						"<td><input type='radio' id='rolecb' name='rolecb' value='"
								+ item.datas[i].value
								+ "'><span class='STYLE1'>"
								+ item.datas[i].name + "</span></td>");
			}
			jQuery("input[name='rolecb']").change(function() {
				var req = {
					"param" : {
						"roleno" : jQuery(this).val()
					}
				};
				ajax({
					url : "D00_05action_getMenuIdsByRoleno",
					data : {
						reqJsonStr : JSON.stringify(req)
					},
					success : getMenuIdsByRolenoCallBack,
					error : getMenuIdsByRolenoCallBack
				});
			});
		}
	}
}

function getMenuIdsByRolenoCallBack(item) {
	jQuery(":checkbox[id^='treeCB']").removeAttr("checked");
	if (item.status == 1) {
		if (item.datas != null && item.datas.length > 0) {
			for (var i = 0; i < item.datas.length; i++) {
				jQuery("#treeCB" + item.datas[i]).prop("checked", true);
				jQuery(":checkbox[id^='treeCB" + item.datas[i] + "']").parent()
						.expand();
			}
		}
	}
}

function getAllMenusCallBack(item) {
	if (item.status == 1) {
		var o = {
			sourceFolder : "../util/tree/",
			checkBox : true,
			urlClosed : true,
			data : item.datas
		}
		jQuery("#tree").treemenu(o);
	}
}

function saveCallBack(item){
	if(item.status==1){
		alert('保存成功！');
	}else{
		alert('保存失败！');
	}
}