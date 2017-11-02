var jqGridConf = {
    caption: "部门简介列表",
    colNames: ['部门代码', '部门名称', '简介'],
    colModel: [{
        name: 'bmdm',
        index: 'bmdm',
        width: 150
    }, {
        name: 'bmmc',
        index: 'bmmc',
        width: 150
    }, {
        name: 'content',
        index: 'content',
        width: 800
    }]
};

var actionname = "D00_11action";
jQuery(document).ready(function () {
    commonInit({
        detailDlgWidth: 700,
        detailDlgTitle: '部门',
        deleteType: 'byObject',
        readOnlyFields: ['bmdm', 'bmmc'],
        idFieldName: 'bmdm',
        queryBarHeader_btns: [{
            id: 'modBtn',
            value: '修改',
            active: true,
            bind: onModBtn,
            remotMethod: 'save'
        }, {
            id: 'delBtn',
            value: '删除',
            active: true,
            bind: onDelBtn,
            remotMethod: 'save'
        }, {
            id: 'cleBtn',
            value: '清空',
            active: true,
            bind: onCleBtn
        }]
    });

});
