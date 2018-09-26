var jqGridConf = {
    caption: "基金经理列表",
    colNames: ['基金经理代码', '基金经理', '基金公司id', '基金公司', '性别', '学历', '工作时间', '职业背景', '产品数量', '产品平均收益', '产品平均回撤', '历史最大回撤', '简历链接', '状态'],
    colModel: [{
        name: 'id',
        index: 'id',
        hidden: true
    }, {
        name: 'name',
        index: 'name',
        width: 100
    }, {
        name: 'companyId',
        index: 'companyId',
        hidden: true,
        edittype:'select2',
        selectDisplayFieldName: 'companyName',
        queryType:'equal'
    }, {
        name: 'companyName',
        index: 'companyName',
        width: 100,
        queryType: 'multi',
        editType: 'multi'
    }, {
        name: 'sex',
        index: 'sex',
        width: 70
    }, {
        name: 'education',
        index: 'education',
        width: 100
    }, {
        name: 'workDate',
        index: 'workDate',
        width: 100
    }, {
        name: 'managementScale',
        index: 'managementScale',
        width: 100
    }, {
        name: 'productCount',
        index: 'productCount',
        width: 100
    }, {
        name: 'averageIncome',
        index: 'averageIncome',
        width: 100,
        queryType: 'between',
        formatter: function (cellvalue, options, rowObject) {
            return formatterPercent(cellvalue, 2);
        },
        unformat: function (cellvalue, options, rowObject) {
            return unformatPercent(cellvalue);
        }
    }, {
        name: 'averageRetracement',
        index: 'averageRetracement',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            return formatterPercent(cellvalue, 2);
        },
        unformat: function (cellvalue, options, rowObject) {
            return unformatPercent(cellvalue);
        }
    }, {
        name: 'maxRetracement',
        index: 'maxRetracement',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            return formatterPercent(cellvalue, 2);
        },
        unformat: function (cellvalue, options, rowObject) {
            return unformatPercent(cellvalue);
        }
    }, {
        name: 'resumeLink',
        index: 'resumeLink',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue != undefined) {
                // return "<a href='../" + cellvalue + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
                return "<a href='../" + cellvalue.replace("\\","\/") + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue != "") {
                return $(cellvalue).attr("href");
            } else {
                return "";
            }
        }
    }, {
        name: 'deltag',
        index: 'deltag',
        hidden: true,
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
var actionname = "D01_02action";
jQuery(document).ready(function () {
    // $("#detailDlg").modal('hide');
    commonInit({
        detailDlgTitle: '基金经理',
        deleteType: 'byObject',
        validateSetting: {
            rules: {
                name: {
                    required: true
                }
            }
        },
        toolbar_btns: [{
            id: 'addBtn',
            value: '新增',
            active: true,
            bind: onAddBtn,
            remotMethod: 'save'
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

    if (dzGlobal.companyArr == undefined || dzGlobal.companyArr.length == 0) {
        getCompany_Sel();
    } else {
        setCompany_Sel();
    }

    $("#iptresumeLinkUploadFile").dzFileUpload({
        uploadExtraData: {
            "fileType": "jl",
            "id": $("#id").val()
        },
        inputFiled: "resumeLink"
    });

});


function getCompany_Sel() {
    ajax({
        url: "D01_01action_getAllSOMCompanys",
        data: {
            reqJsonStr: JSON.stringify({})
        },
        async: false,
        success: function (item) {
            if (item.datas != null) {
                dzGlobal.compaynArr = item.datas;
            }
            setCompany_Sel();
        },
        error: function (item) {
            if (item.datas != null) {
                dzGlobal.compaynArr = item.datas;
            }
            setCompany_Sel();
        }
    });
}

function setCompany_Sel() {
    var sel1 = $("#query_companyId");
    var sel2 = $("#companyId");
    if (sel1.length > 0) {
        sel1.empty();
    }
    if (sel2.length > 0) {
        sel2.empty();
    }
    // alert(JSON.stringify(dzGlobal.compaynArr));
    if (dzGlobal.compaynArr.length > 0) {
        if (sel1.length > 0) {
            sel1.html("<option value=''>--全部基金公司--</option>");
        }
        if (sel2.length > 0) {
            sel2.html("<option value=''>--全部基金公司--</option>");
        }
        for (var i = 0; i < dzGlobal.compaynArr.length; i++) {
            if (sel1.length > 0) {
                sel1.append("<option value='" + dzGlobal.compaynArr[i].value + "'>"
                    + dzGlobal.compaynArr[i].name + "</option");
            }
            if (sel2.length > 0) {
                sel2.append("<option value='" + dzGlobal.compaynArr[i].value + "'>"
                    + dzGlobal.compaynArr[i].name + "</option");
            }
        }
    } else {
        if (sel1.length > 0) {
            sel1.html("<option disabled='disabled'>--暂无基金公司--</option>");
        }
        if (sel2.length > 0) {
            sel2.html("<option disabled='disabled'>--暂无基金公司--</option>");
        }
    }
    if (sel1.length > 0) {
        sel1.select2();
    }
    if (sel2.length > 0) {
        sel2.select2();
    }
}

// function after_filledInput(item) {
//     var companyId = item["companyId"];
//     $("#companyId").val(companyId).select2();
// }