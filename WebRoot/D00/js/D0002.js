var dzGridConf = {
    columns : [ {
		name : '角色代码',
        fieldName : 'roleId',
		hidden : true
	}, {
		name : '角色名称',
        fieldName : 'roleName',
		width : 150,
		editable : true,
        editrules : {
            required : true
        }
	} ]
};

var actionname = "D00_02action";
jQuery(document).ready(function() {
	commonInit({
		detailDlgTitle : '角色',
		deleteType : 'byObject',
		checkExist: ['roleName']
	});
});
