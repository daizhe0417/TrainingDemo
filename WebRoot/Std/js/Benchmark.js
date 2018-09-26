var jqGridConf = {
    caption: "基准列表",
    colNames: ['基准代码', '基准名称', '类型', '状态'],
    colModel: [{
        name: 'id',
        index: 'id',
        hidden: true
    }, {
        name: 'benchmarkName',
        index: 'benchmarkName',
        width: 150
    }, {
        name: 'type',
        index: 'type',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue == '0') {
                return "股票";
            } else if (cellvalue == '1') {
                return "期货";
            } else if (cellvalue == '2') {
                return "债券";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue == '股票') {
                return "0";
            } else if (cellvalue == '期货') {
                return "1";
            } else if (cellvalue == '债券') {
                return "2";
            } else {
                return "";
            }
        }
    }, {
        name: 'deltag',
        index: 'deltag',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue == '0') {
                return "正常";
            } else if (cellvalue == '1') {
                return "已删除";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue == '正常') {
                return "0";
            } else if (cellvalue == '已删除') {
                return "1";
            } else {
                return "";
            }
        }
    }]
};

var actionname = "D01_05action";
jQuery(document).ready(function () {
    $("#dzDataTable").initTable(jqGridConf);
    commonInit({
        detailDlgTitle: '基准',
        deleteType: 'byObject',
        validateSetting: {
            rules: {
                name: {
                    required: true
                }
            }
        }
    });
});

