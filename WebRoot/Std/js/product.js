var jqGridConf = {
    caption: "基金产品列表",
    colNames: ['大类策略', '二级细分策略', '三级细分策略', '基金产品名称', 'id', '基金产品代码', '基金公司id', '产品管理人', '基金经理id', '基金经理', '成立时间',
        // '规模',
        // '净值截止日期', '累计净值', '单位净值',
        '年化收益', '年化风险', '夏普比率', '最大回撤',
        // '信息比率', '特雷诺比率', '索提诺比率', '实现贝塔', 'M平方', 'Omega比率', '峰度', '偏度', '詹森比率', '评分',
        '状态'],
    colModel: [{
        name: 'largeClass',
        index: 'largeClass',
        width: 100,
        frozen: true
    }, {
        name: 'middleClass',
        index: 'middleClass',
        width: 100,
        frozen: true
    }, {
        name: 'littleClass',
        index: 'littleClass',
        width: 100,
        frozen: true
    }, {
        name: 'productName',
        index: 'productName',
        width: 150,
        frozen: true
    }, {
        name: 'id',
        index: 'id',
        hidden: true
    }, {
        name: 'productCode',
        index: 'productCode',
        width: 130,
        readonly: true
    }, {
        name: 'companyId',
        index: 'companyId',
        hidden: true,
        queryType: 'equal',
        edittype:'select2',
        selectDisplayFieldName: 'companyName'
    }, {
        name: 'companyName',
        index: 'companyName',
        width: 100,
        queryType: 'multi',
        editType: 'multi'
    }, {
        name: 'managementId',
        index: 'managementId',
        hidden: true,
        queryType: 'equal',
        edittype:'select2',
        selectDisplayFieldName: 'managementName'
    }, {
        name: 'managementName',
        index: 'managementName',
        width: 100,
        queryType: 'multi',
        editType: 'multi'
    }, {
        name: 'foundDate',
        index: 'foundDate',
        width: 90
        // }, {
        //     name: 'scale',
        //     index: 'scale',
        //     width: 100
        // }, {
        //     name: 'cutOffDate',
        //     index: 'cutOffDate',
        //     width: 100
        // }, {
        //     name: 'netValue',
        //     index: 'netValue',
        //     width: 100
        // }, {
        //     name: 'dwjz',
        //     index: 'dwjz',
        //     width: 100
    }, {
        name: 'annualIncome',
        index: 'annualIncome',
        width: 100,
        queryType: 'between',
        valueType: 'percent',
        formatter: function (cellvalue, options, rowObject) {
            return formatterPercent(cellvalue, 3);
        },
        unformat: function (cellvalue, options, rowObject) {
            return unformatPercent(cellvalue);
        }
    }, {
        name: 'annualRisk',
        index: 'annualRisk',
        width: 100,
        queryType: 'between',
        valueType: 'percent',
        formatter: function (cellvalue, options, rowObject) {
            return formatterPercent(cellvalue, 3);
        },
        unformat: function (cellvalue, options, rowObject) {
            return unformatPercent(cellvalue);
        }
    }, {
        name: 'sharpRatio',
        index: 'sharpRatio',
        queryType: 'between',
        width: 100
    }, {
        name: 'maxRetracement',
        index: 'maxRetracement',
        width: 100,
        queryType: 'between',
        valueType: 'percent',
        formatter: function (cellvalue, options, rowObject) {
            return formatterPercent(cellvalue, 3);
        },
        unformat: function (cellvalue, options, rowObject) {
            return unformatPercent(cellvalue);
        }
        // }, {
        //     name: 'informationRatio',
        //     index: 'informationRatio',
        //     width: 100
        // }, {
        //     name: 'treynorRatio',
        //     index: 'treynorRatio',
        //     width: 100
        // }, {
        //     name: 'sortinoRatio',
        //     index: 'sortinoRatio',
        //     width: 100
        // }, {
        //     name: 'implementBeta',
        //     index: 'implementBeta',
        //     width: 100
        // }, {
        //     name: 'mSquare',
        //     index: 'mSquare',
        //     width: 100
        // }, {
        //     name: 'omegaRatio',
        //     index: 'omegaRatio',
        //     width: 100
        // }, {
        //     name: 'kurtosis',
        //     index: 'kurtosis',
        //     width: 100
        // }, {
        //     name: 'skewness',
        //     index: 'skewness',
        //     width: 100
        // }, {
        //     name: 'jasenRatio',
        //     index: 'jasenRatio',
        //     width: 100
        // }, {
        //     name: 'score',
        //     index: 'score',
        //     width: 100
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
var actionname = "D01_03action";
jQuery(document).ready(function () {
    // $("#detailDlg").modal('hide');
    commonInit({
        detailDlgTitle: '基金产品',
        deleteType: 'byObject',
        readOnlyFields: ['productName', 'productCode'],
        idFieldName: 'productCode',
        checkExist: true,
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

    getManager_Sel();

    $("#query_companyId").on("change", function () {
        getManagersByCompanyId($(this).val(), 1)
    });
    $("#companyId").on("change", function () {
        getManagersByCompanyId($(this).val(), 2)
    });


    $("#foundDate").datepicker();

    $("#cutOffDate").datepicker();

});

function getManagersByCompanyId(companyId) {
    ajax({
        url: "D01_02action_getManagersByCompanyId",
        data: {
            reqJsonStr: JSON.stringify({
                companyId: companyId
            })
        },
        async: false,
        success: setManagersByCompanyId,
        error: setManagersByCompanyId
    });
}

function setManagersByCompanyId(item) {

    var sel1 = $("#query_managementId");
    var sel2 = $("#managementId");
    if (sel1.length > 0) {
        sel1.empty();
    }
    if (sel2.length > 0) {
        sel2.empty();
    }
    if (item.status == 1) {
        if (sel1.length > 0) {
            sel1.html("<option value=''>--全部基金经理--</option>");
        }
        if (sel2.length > 0) {
            sel2.html("<option value=''>--全部基金经理--</option>");
        }
        for (var i = 0; i < dzGlobal.managerArr.length; i++) {
            if (sel1.length > 0) {
                sel1.append("<option value='" + item.datas[i].id + "'>"
                    + item.datas[i].name + "</option");
            }
            if (sel2.length > 0) {
                sel2.append("<option value='" + item.datas[i].id + "'>"
                    + item.datas[i].name + "</option");
            }
        }
    } else {
        if (sel1.length > 0) {
            sel1.html("<option disabled='disabled'>--暂无基金经理--</option>");
        }
        if (sel2.length > 0) {
            sel2.html("<option disabled='disabled'>--暂无基金经理--</option>");
        }
    }
    if (sel1.length > 0) {
        sel1.select2();
    }
    if (sel2.length > 0) {
        sel2.select2();
    }
}

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

function getManager_Sel() {
    ajax({
        url: "D01_02action_getAllSOMManagers",
        data: {
            reqJsonStr: JSON.stringify({})
        },
        async: false,
        success: function (item) {
            if (item.datas != null) {
                dzGlobal.managerArr = item.datas;
            }
            setManager_Sel();
        },
        error: function (item) {
            if (item.datas != null) {
                dzGlobal.managerArr = item.datas;
            }
            setManager_Sel();
        }
    });
}

function setManager_Sel() {
    var sel1 = $("#query_managementId");
    var sel2 = $("#managementId");
    if (sel1.length > 0) {
        sel1.empty();
    }
    if (sel2.length > 0) {
        sel2.empty();
    }
    // alert(JSON.stringify(dzGlobal.compaynArr));
    if (dzGlobal.managerArr.length > 0) {
        if (sel1.length > 0) {
            sel1.html("<option value=''>--全部基金经理--</option>");
        }
        if (sel2.length > 0) {
            sel2.html("<option value=''>--全部基金经理--</option>");
        }
        for (var i = 0; i < dzGlobal.managerArr.length; i++) {
            if (sel1.length > 0) {
                sel1.append("<option value='" + dzGlobal.managerArr[i].value + "'>"
                    + dzGlobal.managerArr[i].name + "</option");
            }
            if (sel2.length > 0) {
                sel2.append("<option value='" + dzGlobal.managerArr[i].value + "'>"
                    + dzGlobal.managerArr[i].name + "</option");
            }
        }
    } else {
        if (sel1.length > 0) {
            sel1.html("<option disabled='disabled'>--暂无基金经理--</option>");
        }
        if (sel2.length > 0) {
            sel2.html("<option disabled='disabled'>--暂无基金经理--</option>");
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
//     var managementId = item["managementId"];
//     $("#managementId").val(managementId).select2();
// }