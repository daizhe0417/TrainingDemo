var jqGridConf = {
    caption: "基金产品列表",
    colNames: ['大类策略', '二级细分策略', '三级细分策略', '基金产品名称', 'productNameA', 'id', '基金产品代码', '基金公司id', '产品管理人', '基金经理id', '基金经理', '成立时间',
        // '规模',
        // '净值截止日期', '累计净值', '单位净值',
        '年化收益', '年化风险', '夏普比率', '最大回撤',
        // '信息比率', '特雷诺比率', '索提诺比率', '实现贝塔', 'M平方', 'Omega比率', '峰度', '偏度', '詹森比率', '评分',
        '状态'],
    colModel: [{
        name: 'largeClass',
        index: 'largeClass',
        width: 80,
        frozen: true
    }, {
        name: 'middleClass',
        index: 'middleClass',
        width: 90,
        frozen: true
    }, {
        name: 'littleClass',
        index: 'littleClass',
        width: 90,
        frozen: true
    }, {
        name: 'productNameA',
        index: 'productNameA',
        width: 240,
        frozen: true,
        formatter: function (cellvalue, options, rowObject) {
            return "<a href='#' onclick='getDetail(\"" + options.rowId + "\")'>" + rowObject.productName + "</a>";
        }
    }, {
        name: 'productName',
        index: 'productName',
        hidden: true
    }, {
        name: 'id',
        index: 'id',
        hidden: true
    }, {
        name: 'productCode',
        index: 'productCode',
        width: 100
    }, {
        name: 'companyId',
        index: 'companyId',
        hidden: true,
        queryType: 'equal'
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
        queryType: 'equal'
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
        }
    }, {
        name: 'annualRisk',
        index: 'annualRisk',
        width: 100,
        queryType: 'between',
        valueType: 'percent',
        formatter: function (cellvalue, options, rowObject) {
            return formatterPercent(cellvalue, 3);
        }
    }, {
        name: 'sharpRatio',
        index: 'sharpRatio',
        queryType: 'between',
        width: 100
    }, {
        name: 'maxRetracement',
        index: 'maxRetracement',
        queryType: 'between',
        valueType: 'percent',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            return formatterPercent(cellvalue, 3);
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
            active: false,
            bind: onAddBtn,
            remotMethod: 'save'
        }, {
            id: 'modBtn',
            value: '修改',
            active: false,
            bind: onModBtn,
            remotMethod: 'save'
        }, {
            id: 'delBtn',
            value: '删除',
            active: false,
            bind: onDelBtn,
            remotMethod: 'save'
        }, {
            id: 'cleBtn',
            value: '清空',
            active: true,
            bind: onCleBtn
        }]
    });

    if (dzGlobal.companyArr == undefined || dzGlobal.companyArr.length == 0) {
        getCompany_Sel();
    } else {
        setCompany_Sel();
    }

});

function aftercallback() {
    console.log("aftercallback");
    $("#jqGridContainer a").css("text-decoration", "underline");
    $("#jqGridContainer a").css("color", "#3c8dbc");
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
    var sel1 = $("#query_companyName");
    if (sel1.length > 0) {
        sel1.empty();
    }
    // alert(JSON.stringify(dzGlobal.compaynArr));
    if (dzGlobal.compaynArr.length > 0) {
        if (sel1.length > 0) {
            sel1.html("<option value=''>--全部基金公司--</option>");
        }
        for (var i = 0; i < dzGlobal.compaynArr.length; i++) {
            if (sel1.length > 0) {
                sel1.append("<option value='" + dzGlobal.compaynArr[i].value + "'>"
                    + dzGlobal.compaynArr[i].name + "</option");
            }
        }
    } else {
        if (sel1.length > 0) {
            sel1.html("<option disabled='disabled'>--暂无基金公司--</option>");
        }
    }
    if (sel1.length > 0) {
        sel1.select2();
    }
}

function setBenchmark_Sel() {
    ajax({
        url: "D01_05action_getSOMBenchmarkByProductClass",
        data: {
            reqJsonStr: JSON.stringify({
                largeClass: $("#largeClass").val()
            })
        },
        async: false,
        success: setBenchmark_Sel_Callback,
        error: setBenchmark_Sel_Callback
    });
}

function setBenchmark_Sel_Callback(item) {
    var sel1 = $("#benchmarkId");
    if (item.datas != null) {
        if (sel1.length > 0) {
            sel1.empty();
            sel1.html("<option value=''>--选择基准--</option>");
        }
        var list = item.datas;
        for (var i = 0; i < list.length; i++) {
            if (sel1.length > 0) {
                if (list[i].name != "") {
                    sel1.append("<option value='" + list[i].value + "'>"
                        + list[i].name + "</option");
                }
            }
        }
    } else {
        if (sel1.length > 0) {
            sel1.html("<option disabled='disabled'>--暂无基准--</option>");
        }
    }
    if (sel1.length > 0) {
        sel1.select2();
    }
}

function getDetail(rowId) {
    var rowDatas = $("#jqGridList").jqGrid('getRowData', rowId);
    console.log(JSON.stringify(rowDatas));
    clearInput();
    filledInputByItem(rowDatas);
    stopSaveSubmit = false;
    $("#" + conf.detailDlgTitleContainer).html(conf.detailDlgTitle + "详情");
    $("#" + conf.detailDlgId).modal('show');
    $("#" + conf.formName + " input").prop("readonly", true);
    setBenchmark_Sel();
    $("#benchmarkId").on("change", function () {
        ajax({
            url: "D01_03action_getProductIndex",
            data: {
                reqJsonStr: JSON.stringify({
                    productId: $("#id").val(),
                    benchmarkId: $("#benchmarkId").val()
                })
            },
            async: false,
            success: getProductIndex_Callback,
            error: getProductIndex_Callback
        });
    });

    var rm = {
        reqJsonStr: JSON.stringify({
            arg1: $("#id").val()
        })
    };
    ajax({
        url: "D01_04action_chart",
        data: rm,
        success: chartCallback,
        error: chartCallback
    });
}

function getProductIndex_Callback(item) {
    console.log(JSON.stringify(item));
    if (item.status == '1') {
        var indexData = item.datas[0];
        $("#cutOffDate").val(indexData.cutOffDate);
        $("#netValue").val(dzFixed(indexData.netValue, 3));
        $("#dwjz").val(dzFixed(indexData.dwjz, 3));
        $("#annualIncome").val(dzFixed(indexData.annualIncome * 100, 3) + "%");
        $("#sharpRatio").val(dzFixed(indexData.sharpRatio, 3));
        $("#maxRetracement").val(dzFixed(indexData.maxRetracement * 100, 3) + "%");
        $("#informationRatio").val(dzFixed(indexData.informationRatio, 3));
        $("#treynorRatio").val(dzFixed(indexData.treynorRatio, 3));
        $("#sortinoRatio").val(dzFixed(indexData.sortinoRatio, 3));
        $("#implementBeta").val(dzFixed(indexData.implementBeta, 3));
        $("#mSquare").val(dzFixed(indexData.mSquare, 3));
        $("#omegaRatio").val(dzFixed(indexData.omegaRatio, 3));
        $("#kurtosis").val(dzFixed(indexData.kurtosis, 3));
        $("#skewness").val(dzFixed(indexData.skewness, 3));
        $("#jasenRatio").val(dzFixed(indexData.jasenRatio, 3));
        $("#score").val(indexData.score);
    } else {
        $("#cutOffDate").val("暂无指标信息");
        // dzToast("暂无指标信息", "warning");
    }
}

function chartCallback(item) {
    console.log(item);
    var eChart = echarts.init(document.getElementById('eChartContainer'));
    eChart.clear();
    if (item.status == '-1') {
        alert("未找到符合条件的数据");
        return false;
    }
    var echartModel = item.datas[0];
    var option = {
        title: {
            left: 'center',
            text: echartModel.title
        },
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        color: ['#428bca',
            '#ffb752',
            '#87b87f',
            '#61a0a8',
            '#d48265',
            '#91c7ae',
            '#749f83',
            '#ca8622',
            '#c23531',
            '#bda29a',
            '#6e7074',
            '#546570',
            '#c4ccd3'],
        legend: {
            top: 25,
            data: echartModel.legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {onZero: true},
            data: echartModel.xAxisDatas
        }],
        yAxis: [{
            // gridIndex: 1,
            name: '百分比(%)',
            type: 'value'
        }],
        series: echartModel.series
    };

    eChart.setOption(option);
}