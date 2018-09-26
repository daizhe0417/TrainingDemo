var jqGridConf = {
    caption: "部门列表",
    colNames: ['部门代码', '部门名称', '状态'],
    colModel: [{
        name: 'bmdm',
        index: 'bmdm',
        width: 150,
        readonly: true
    }, {
        name: 'bmmc',
        index: 'bmmc',
        width: 150
    }, {
        name: 'deltag',
        index: 'deltag',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue == '0') {
                return "正常";
            } else if (cellvalue == '1') {
                return "已撤销";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue == '正常') {
                return "0";
            } else if (cellvalue == '已撤销') {
                return "1";
            } else {
                return "";
            }
        }
    }]
};

var actionname = "D00_01action";
jQuery(document).ready(function () {
    // $("#detailDlg").modal('hide');
    commonInit({
        detailDlgTitle: '部门',
        deleteType: 'byObject',
        idFieldName: 'bmdm',
        checkExist: true,
        validateSetting: {
            rules: {
                bmdm: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    number: true
                },
                bmmc: {
                    required: true
                }
            }
        }
    });

    jQuery("#query_deltag").html("<option value=''>-- 请选择状态 --</option>")
        .append("<option value='0'>正常</option>")
        .append("<option value='1'>已撤销</option>");
    jQuery("#deltag").html("<option value=''>-- 请选择状态 --</option>")
        .append("<option value='0'>正常</option>")
        .append("<option value='1'>已撤销</option>");

});

