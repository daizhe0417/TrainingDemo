var jqGridConf = {
	caption : "角色列表",
	colNames : [ '角色代码', '角色名称' ],
	colModel : [ {
		name : 'roleno',
		index : 'roleno',
		width : 150,
		editable : true,
		editrules : {
			required : true
		}
	}, {
		name : 'rolename',
		index : 'rolename',
		width : 150,
		editable : true
	} ]
};

var actionname = "D00_02action";
jQuery(document).ready(function() {
	commonInit({
		detailDlgTitle : '角色',
		deleteType : 'byObject',
		readOnlyFields: ['roleno'],
		idFieldName: 'roleno',
		checkExist: true
	});
});
