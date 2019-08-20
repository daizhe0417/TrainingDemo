var dzGridConf = {
    columns : [ {
		name : '班级代码',
        fieldName : 'id',
		hidden : true
	}, {
		name : '班级名称',
        fieldName : 'bmmc',
		width : 150,
		editable : true,
        editrules : {
            required : true
        }
	} ]
};

var actionname = "D00_21action";
jQuery(document).ready(function() {
	commonInit({
		detailDlgTitle : '班级',
		deleteType : 'byObject',
		checkExist: ['bmmc']
	});
});
