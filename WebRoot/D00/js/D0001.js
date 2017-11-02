var jqGridConf = {
    caption: "部门列表",
    colNames: ['部门代码', '部门名称', '创立年份', '状态', '撤销年份'],
    colModel: [{
        name: 'bmdm',
        index: 'bmdm',
        width: 150
    }, {
        name: 'bmmc',
        index: 'bmmc',
        width: 150
    }, {
        name: 'cjrq',
        index: 'cjrq',
        width: 100
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
    }, {
        name: 'cxrq',
        index: 'cxrq',
        width: 100
    }]
};

var actionname = "D00_01action";
jQuery(document).ready(function () {
    commonInit({
        detailDlgTitle: '部门',
        deleteType: 'byObject',
        readOnlyFields: ['bmdm'],
        idFieldName: 'bmdm',
        checkExist: true
    });

    jQuery("#query_deltag").html("<option value=''>-- 请选择状态 --</option>")
        .append("<option value='0'>正常</option>")
        .append("<option value='1'>已撤销</option>");
    jQuery("#deltag").html("<option value=''>-- 请选择状态 --</option>")
        .append("<option value='0'>正常</option>")
        .append("<option value='1'>已撤销</option>");

    jQuery("#deltag").on("change", function () {
        if (jQuery(this).val() == 1) {
            jQuery("#cxrq").attr("disabled", false);
        } else {
            jQuery("#cxrq").attr("disabled", true);
        }
    });

    jQuery("#cjrq").datepicker({
        dateFmt: 'yyyy',
        inline: true
    });

    jQuery("#cxrq").datepicker({
        dateFmt: 'yyyy',
        inline: true
    });
});

function beforeToSave() {
    if (jQuery("#deltag").val() == 0) {
        if (jQuery("#ksrq").val() == '') {
            alert("状态为【正常】的部门【开始年份】必填");
            return false;
        }
    } else {
        if (jQuery("#cxrq").val() == '') {
            alert("状态为【撤销】的部门【撤销年份】必填");
            return false;
        }
    }
}

function after_filledInput(item) {
    if (item['deltag'] == 1) {
        jQuery("#cxrq").attr("disabled", false);
    } else {
        jQuery("#cxrq").attr("disabled", true);
    }
}
