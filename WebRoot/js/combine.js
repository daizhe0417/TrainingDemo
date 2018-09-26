var jqGridConf = {
    caption: "组合方案列表",
    colNames: ['id', '方案名称', '成立日期', '创建日期', '产品数量', '说明', '状态'],
    colModel: [{
        name: 'id',
        index: 'id',
        hidden: true
    }, {
        name: 'comName',
        index: 'comName',
        width: 350
    }, {
        name: 'clrq',
        index: 'clrq',
        width: 200
    }, {
        name: 'clrq',
        index: 'clrq',
        width: 200
    }, {
        name: 'cpsl',
        index: 'cpsl',
        width: 100
    }, {
        name: 'comment',
        index: 'comment',
        width: 500
    }, {
        name: 'deltag',
        index: 'deltag',
        hidden: true
    }]
};
var actionname = "D02_01action";
jQuery(document).ready(function () {
    // $("#detailDlg").modal('hide');
    commonInit({
        detailDlgTitle: '',
        deleteType: 'byObject',
        validateSetting: {
            rules: {
                productName: {
                    required: true
                }
            }
        },
        detailDlgWidth: 800,
        toolbar_btns: [{
            id: 'addBtn',
            value: '创建基金配置方案',
            active: true,
            url: 'NewCombine.jsp',
            target: 'redirect'
        }, {
            id: 'addBtn',
            value: '方案回溯',
            active: true,
            url: 'BackTrack.jsp',
            target: 'redirect'
        }, {
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
        }, {
            id: 'impBtn',
            value: '导入',
            active: true,
            bind: onImpBtn,
            remotMethod: 'import'
        }, {
            id: 'expBtn',
            value: '导出',
            active: true,
            bind: onExpBtn,
            remotMethod: 'export'
        }]
    });

});
