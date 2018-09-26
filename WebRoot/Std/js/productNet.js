var jqGridConf = {
    caption: "【基金净值】",
    colNames: ['id', '基金', '基金代码', '基金名称', '日期', '单位净值', '累计净值',
        // '沪深300'
    ],
    colModel: [{
        name: 'id',
        index: 'id',
        hidden: true
    }, {
        name: 'productId',
        index: 'productId',
        hidden: true,
        selectDisplayFieldName: 'productName',
        edittype:'select2',
        queryType: 'equal'
    }, {
        name: 'productCode',
        index: 'productCode',
        hidden: true
    }, {
        name: 'productName',
        index: 'productName',
        width: 90
    }, {
        name: 'riqi',
        index: 'riqi',
        width: 89,
        queryType: 'between'
        // queryType: 'dateRange'
    }, {
        name: 'unitNet',
        index: 'unitNet',
        width: 77
    }, {
        name: 'accumulatedNet',
        index: 'accumulatedNet',
        width: 77
        // }, {
        //     name: 'hs300',
        //     index: 'hs300',
        //     width: 80
    }]
};

var actionname = "D01_04action";
jQuery(document).ready(function () {
    commonInit({
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
            id: 'chartBtn',
            value: '曲线',
            active: true,
            bind: onChartBtn,
            remotMethod: 'chart'
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
        // ,
        // execQueryOnLoad: false,
        // queryInit: false
    });

    setProduct_Sel();

    // $("#riqiContent .input-daterange").datepicker({
    //     keyboardNavigation: false,
    //     forceParse: false,
    //     autoclose: true
    // });

    // $("#query_riqi").daterange({});
    $("#query_riqi_s").datepicker({});
    $("#query_riqi_e").datepicker({});
    $("#riqi").datepicker({});

});

function setProduct_Sel() {
    ajax({
        url: "D01_03action_getAllSOMProducts",
        data: {
            reqJsonStr: JSON.stringify({})
        },
        async: false,
        success: setProduct_Sel_Callback,
        error: setProduct_Sel_Callback
    });
}

function setProduct_Sel_Callback(item) {
    var sel1 = $("#query_productId");
    var sel2 = $("#productId");
    if (item.datas != null) {
        if (sel1.length > 0) {
            sel1.empty();
            sel1.html("<option value=''>--选择基金产品--</option>");
        }
        if (sel2.length > 0) {
            sel2.empty();
            sel2.html("<option value=''>--选择基金产品--</option>");
        }
        var list = item.datas[0];
        for (var i = 0; i < list.length; i++) {
            if (sel1.length > 0) {
                if (list[i].name != "") {
                    sel1.append("<option value='" + list[i].value + "'>"
                        + list[i].name + "</option");
                }
            }
            if (sel2.length > 0) {
                if (list[i].name != "") {
                    sel2.append("<option value='" + list[i].value + "'>"
                        + list[i].name + "</option");
                }
            }
        }
    } else {
        if (sel1.length > 0) {
            sel1.html("<option disabled='disabled'>--暂无产品--</option>");
        }
        if (sel2.length > 0) {
            sel2.html("<option disabled='disabled'>--暂无产品--</option>");
        }
    }
    if (sel1.length > 0) {
        sel1.select2();
    }
    if (sel2.length > 0) {
        sel2.select2();
    }
}

function onChartBtn() {
    var productId = $("#query_productId").val();
    var riqi_s = $("#query_riqi_s").val();
    var riqi_e = $("#query_riqi_e").val();
    if (riqi_s == '') {
        alert("必须选择开始日期");
        return false;
    }
    if (riqi_e == '') {
        alert("必须选择结束日期");
        return false;
    }
    if (riqi_s >= riqi_e) {
        alert("结束日期必须大于开始日期");
        return false;
    }
    var rm = {
        reqJsonStr: JSON.stringify({
            arg1: productId,
            arg2: riqi_s,
            arg3: riqi_e
        })
    };
    ajax({
        url: actionname + "_chart",
        data: rm,
        success: chartCallback,
        error: chartCallback
    });
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