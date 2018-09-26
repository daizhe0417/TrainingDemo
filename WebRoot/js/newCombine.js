var selectedDatas = [];
var jqGridConf = {
    caption: "基金产品列表",
    colNames: ['大类策略', '二级细分策略', '三级细分策略', 'id', '基金产品名称', '基金产品代码', '基金公司id', '产品管理人', '基金经理id', '基金经理', '成立时间', '规模', '净值截止日期', '累计净值', '单位净值', '年化收益', '夏普比率', '最大回撤', '信息比率', '特雷诺比率', '索提诺比率', '实现贝塔', 'M平方', 'Omega比率', '峰度', '偏度', '詹森比率', '评分', '状态'],
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
        name: 'id',
        index: 'id',
        hidden: true
    }, {
        name: 'productName',
        index: 'productName',
        width: 150
    }, {
        name: 'productCode',
        index: 'productCode',
        width: 130
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
    }, {
        name: 'scale',
        index: 'scale',
        width: 100
    }, {
        name: 'cutOffDate',
        index: 'cutOffDate',
        width: 100
    }, {
        name: 'netValue',
        index: 'netValue',
        width: 100
    }, {
        name: 'dwjz',
        index: 'dwjz',
        width: 100
    }, {
        name: 'annualIncome',
        index: 'annualIncome',
        width: 100,
        queryType: 'between',
        formatter: function (cellvalue, options, rowObject) {
            return (cellvalue * 100).toFixed(3) + "%";
        },
        unformat: function (cellvalue, options, rowObject) {
            return cellvalue.replace("%", "") / 100;
        }
    }, {
        name: 'sharpRatio',
        index: 'sharpRatio',
        width: 100
    }, {
        name: 'maxRetracement',
        index: 'maxRetracement',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            return (cellvalue * 100).toFixed(3) + "%";
        },
        unformat: function (cellvalue, options, rowObject) {
            return cellvalue.replace("%", "") / 100;
        }
    }, {
        name: 'informationRatio',
        index: 'informationRatio',
        width: 100
    }, {
        name: 'treynorRatio',
        index: 'treynorRatio',
        width: 100
    }, {
        name: 'sortinoRatio',
        index: 'sortinoRatio',
        width: 100
    }, {
        name: 'implementBeta',
        index: 'implementBeta',
        width: 100
    }, {
        name: 'mSquare',
        index: 'mSquare',
        width: 100
    }, {
        name: 'omegaRatio',
        index: 'omegaRatio',
        width: 100
    }, {
        name: 'kurtosis',
        index: 'kurtosis',
        width: 100
    }, {
        name: 'skewness',
        index: 'skewness',
        width: 100
    }, {
        name: 'jasenRatio',
        index: 'jasenRatio',
        width: 100
    }, {
        name: 'score',
        index: 'score',
        width: 100
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
    }],
    ondblClickRow: function (rowid, iRow, iCol, e) {
    },
    multiselect: true,
    onSelectRow: function (rowid, iCol, cellcontent, e) {
        // console.log(rowid+"==="+iCol+"==="+cellcontent+"==="+e);
        var selrowids = jQuery(this).jqGrid('getGridParam', 'selarrrow');
        var i = 0;
        for (; i < selrowids.length; i++) {
            if (rowid == selrowids[i]) {
                break;
            }
        }
        var id = jQuery(this).jqGrid('getCell', rowid, 5);
        var rowDatas = jQuery("#jqGridList").jqGrid('getRowData', rowid);
        if (selrowids.length !== 0 && i < selrowids.length) {
            if (selectedRowIds.indexOf("," + id + ",") < 0) {
                // 选中
                selectedRowIds += id + ",";
                selectedDatas.push(rowDatas);
            }
        } else {
            selectedRowIds = selectedRowIds.replace(new RegExp("," + id + ",", 'g'), ",");
            for (var j = 0; j < selectedDatas.length; j++) {
                if (selectedDatas[j].id == id) {
                    selectedDatas.splice(j, 1);
                    break;
                }
            }
        }
        setSelectedProductTable();
    },
    onSelectAll: function (aRowids, status) {
        for (var i = 0; i < aRowids.length; i++) {
            var id = jQuery(this).jqGrid('getCell', aRowids[i], 5);
            var rowDatas = jQuery("#jqGridList").jqGrid('getRowData', aRowids[i]);
            if (status) {
                if (selectedRowIds.indexOf("," + id + ",") < 0) {
                    selectedRowIds += id + ",";
                    selectedDatas.push(rowDatas);
                }
            } else {
                selectedRowIds = selectedRowIds.replace(new RegExp("," + id + ",", 'g'), ",");
                for (var j = 0; j < selectedDatas.length; j++) {
                    if (selectedDatas[j].id == id) {
                        selectedDatas.splice(j, 1);
                        break;
                    }
                }
            }
        }
        setSelectedProductTable();
    },
};
var actionname = "D01_03action";
jQuery(document).ready(function () {

    commonInit({
        detailDlgTitle: '基金产品',
        deleteType: 'byObject',
        validateSetting: {
            rules: {
                productName: {
                    required: true
                }
            }
        }
    });


    $("#step1NextBtn").on("click", function () {
        if (selectedRowIds == ",") {
            alert("至少选择一种产品！");
            return false;
        }
        $("#stage2").addClass("active");
        $("#step1Content").hide();

        var table = $("#productTable");
        var fxqzTable = $("#fxqzTable");
        table.html('');
        fxqzTable.html('');
        table.append("<tr>" +
            "<th>序号</th>" +
            "<th>产品名称</th>" +
            "<th>产品代码</th>" +
            "<th>产品策略</th>" +
            "<th>净值起始日</th>" +
            "<th>最新净值日期</th>" +
            "<th>投资比例上限</th>" +
            "<th>投资比例下限</th>" +
            "</tr>");
        fxqzTable.append("<tr>" +
            "<th class='col-xs-1'>序号</th>" +
            "<th class='col-xs-5'>产品名称</th>" +
            "<th class='col-xs-3'>目标风险权重</th>" +
            "</tr>");
        for (var i = 0; i < selectedDatas.length; i++) {
            table.append("<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + selectedDatas[i].productName + "</td>" +
                "<td>" + selectedDatas[i].productCode + "</td>" +
                "<td>" + selectedDatas[i].littleClass + "</td>" +
                "<td>" + selectedDatas[i].cutOffDate + "</td>" +
                "<td>" + selectedDatas[i].cutOffDate + "</td>" +
                "<td>100</td>" +
                "<td>0</td>" +
                "</tr>");
            fxqzTable.append("<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + selectedDatas[i].productName + "</td>" +
                "<td><div class='input-group'>" +
                "<input type='number' class='form-control' name='fxqz' value='" + (100 / selectedDatas.length).toFixed(2) + "' max='100' min='0'>" +
                "<span class='input-group-addon'>%</span>" +
                "</div></td>" +
                "</tr>");
        }

        $("#step2Content").show();
    });

    $(":radio[name='modelOpt']").on('change', function () {
        var model = $(this).val();
        if (model == 1) {
            $("#model2Content").hide();
            $("#model3Content").hide();
        } else if (model == 2) {
            $("#model3Content").hide();
            $("#model2Content").show();
        } else if (model == 3) {
            $("#model2Content").hide();
            $("#model3Content").show();
        }
    });

    $(":radio[name='yhgzOpt']").on('change', function () {
        var model = $(this).val();
        if (model == 21) {
            $("#xpzdhContent").show();
            $("#xxblzdhContent").hide();
            $("#mbsyxfxContent").hide();
            $("#mbfxxsyContent").hide();
            $("#mbfxywxsContent").hide();
        } else if (model == 22) {
            $("#xpzdhContent").hide();
            $("#xxblzdhContent").show();
            $("#mbsyxfxContent").hide();
            $("#mbfxxsyContent").hide();
            $("#mbfxywxsContent").hide();
        } else if (model == 23) {
            $("#xpzdhContent").hide();
            $("#xxblzdhContent").hide();
            $("#mbsyxfxContent").show();
            $("#mbfxxsyContent").hide();
            $("#mbfxywxsContent").hide();
        } else if (model == 24) {
            $("#xpzdhContent").hide();
            $("#xxblzdhContent").hide();
            $("#mbsyxfxContent").hide();
            $("#mbfxxsyContent").show();
            $("#mbfxywxsContent").hide();
        } else if (model == 25) {
            $("#xpzdhContent").hide();
            $("#xxblzdhContent").hide();
            $("#mbsyxfxContent").hide();
            $("#mbfxxsyContent").hide();
            $("#mbfxywxsContent").show();
        }
    });


    $("#step2NextBtn").on("click", function () {
        var startMonth = $("#startMonth").val();
        // if(startMonth==''){
        //     alert("必须选择[初始配置月份]");
        //     return false;
        // }

        var productCodeStr = "";
        for (var i = 0; i < selectedDatas.length; i++) {
            productCodeStr += selectedDatas[i].productCode + ",";
        }

        var modelType = $(":radio[name='modelOpt']").val();

        var fxPeriod = $(":radio[name='fxPeriodOpt']").val();

        var yhgz = $(":radio[name='yhgzOpt']").val();

        var syPeriod = $(":radio[name='syPeriodOpt']").val();

        var wfxll = $("#wfxll").val();

        var yjjz1 = $("#yjjz1").val();

        var mbsyxx = $("#mbsyxx").val();

        var mbfxsx = $("#mbfxsx").val();

        var mbfxywxs = $("#mbfxywxs").val();

        var fxqzStr = "";
        $(":input[name='fxqz']").each(function () {
            fxqzStr += $(this).val() + ",";
        });

        console.log(productCodeStr + "===" + modelType + "===" + fxPeriod + "===" + yhgz + "===" + syPeriod + "===" + wfxll + "===" + yjjz1 + "===" + mbsyxx + "===" + mbfxsx + "===" + mbfxywxs + "===" + fxqzStr);

        ajax({
            url: "D02_01action_calcWeight",
            data: {
                reqJsonStr: JSON.stringify({
                    productCodeStr: productCodeStr,
                    modelType: modelType,
                    fxPeriod: fxPeriod,
                    yhgz: yhgz,
                    syPeriod: syPeriod,
                    wfxll: wfxll,
                    yjjz1: yjjz1,
                    mbsyxx: mbsyxx,
                    mbfxsx: mbfxsx,
                    mbfxywxs: mbfxywxs,
                    fxqzStr: fxqzStr
                })
            },
            async: false,
            success: step2Callback,
            error: step2Callback
        });
    });

    $("#step2PreBtn").on("click", function () {
        $("#step1Content").show();
        $("#step2Content").hide();
        $("#stage2").removeClass("active");
    });

    $("#step3PreBtn").on("click", function () {
        $("#step2Content").show();
        $("#step3Content").hide();
        $("#stage3").removeClass("active");
    });

    $("#lookBackBtn").on("click", function () {
        var lookBackRiqi_s = $("#lookBackRiqi_s").val();
        var lookBackRiqi_e = $("#lookBackRiqi_e").val();
        var yjjz2 = $("#yjjz2").val();
        var jzpl = '1';
        var productCodeStr = "";
        var weightStr = "";
        for (var i = 0; i < selectedDatas.length; i++) {
            productCodeStr += selectedDatas[i].productCode + ",";
            weightStr += $("#weight_" + i).val() + ",";
        }
        ajax({
            url: "D02_01action_lookBack",
            data: {
                reqJsonStr: JSON.stringify({
                    productCodeStr: productCodeStr,
                    weightStr: weightStr,
                    lookBackRiqi_s: lookBackRiqi_s,
                    lookBackRiqi_e: lookBackRiqi_e,
                    yjjz: yjjz2,
                    jzpl: jzpl
                })
            },
            async: false,
            success: lookBackCallback,
            error: lookBackCallback
        });
    });

    $("#pdfBtn").on("click", function () {
        setTimeout(function () {

            var targetDom = $("#step3Content");
            var copyDom = targetDom.clone();
            copyDom.width(targetDom.width() + "px");
            copyDom.height(targetDom.height() + "px");

            var sy_eChart = echarts.init(document.getElementById('incomeEChartContainer'));
            var sy_image = sy_eChart.getDataURL();

            var sy_chartimg = new Image();
            sy_chartimg.onload = function (ev) {
            };
            sy_chartimg.src = sy_image;
            sy_chartimg.width = 700;
            sy_chartimg.height = 500;
            copyDom.find("#incomeEChartContainer").empty().append(sy_chartimg);

            var hc_eChart = echarts.init(document.getElementById('riskEChartContainer'));
            var hc_image = hc_eChart.getDataURL();

            var hc_chartimg = new Image();
            hc_chartimg.onload = function (ev) {
            };
            hc_chartimg.src = hc_image;
            hc_chartimg.width = 700;
            hc_chartimg.height = 500;
            copyDom.find("#riskEChartContainer").empty().append(hc_chartimg);

            copyDom.css("background","#ffffff");

            $('body').append(copyDom);
            // html2canvas(document.getElementById("step3Content"), {
            html2canvas(copyDom, {
                // allowTaint: true,
                // height: 5000,
                allowTaint: true,
                taintTest: false,
                onrendered: function (canvas) {

                    //返回图片dataURL，参数：图片格式和清晰度(0-1)
                    var pageData = canvas.toDataURL('image/jpeg', 1.0);

                    //方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
                    var pdf = new jsPDF('', 'pt', 'a4');

                    //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
                    pdf.addImage(pageData, 'JPEG', 0, 0, 595.28, 592.28 / canvas.width * canvas.height);

                    pdf.save('据兴科技.pdf');

                }
            });
        }, 1000);
    });

    $("#startMonth").datepicker({
        startView: 3,
        minView: 'year',
        maxView: 'year',
        pickerPosition: "top-left",
        format: 'yyyy-mm'
    });

    $("#startMonth").on("change", function () {
        $("#lookBackRiqi_s").val($(this).val() + "-01");
    });

    $("#lookBackRiqi_s").datepicker();

    $("#lookBackRiqi_e").datepicker();

    setBenchmark_Sel();

});

function setSelectedProductTable() {
    var table = $("#selectedProductTable");
    table.html('');
    for (var i = 0; i < selectedDatas.length; i++) {
        table.append("<tr><td>" + (i + 1) + "</td><td>" + selectedDatas[i].productName + "</td></tr>");
    }
}

function setBenchmark_Sel() {
    ajax({
        url: "D01_05action_getAllSOMBenchmarks",
        data: {
            reqJsonStr: JSON.stringify({})
        },
        async: false,
        success: setBenchmark_Sel_Callback,
        error: setBenchmark_Sel_Callback
    });
}

function setBenchmark_Sel_Callback(item) {
    var sel1 = $("#yjjz1");
    var sel2 = $("#yjjz2");
    if (item.datas != null) {
        if (sel1.length > 0) {
            sel1.empty();
        }
        if (sel2.length > 0) {
            sel2.empty();
        }
        var list = item.datas;
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
            sel1.html("<option disabled='disabled'>--暂无基准--</option>");
        }
        if (sel2.length > 0) {
            sel2.html("<option disabled='disabled'>--暂无基准--</option>");
        }
    }
}

function step2Callback(item) {
    console.log('step2' + JSON.stringify(item));
    $("#step1Content").hide();
    $("#step2Content").hide();
    $("#stage3").addClass("active");

    var weightList = item.datas

    var table = $("#productConfTable");
    table.html('');
    table.append("<tr>" +
        "<th class='col-xs-1'>序号</th>" +
        "<th class='col-xs-2'>产品名称</th>" +
        "<th class='col-xs-2'>产品代码</th>" +
        "<th class='col-xs-1'>净值起始日</th>" +
        "<th class='col-xs-1'>净值频率</th>" +
        "<th class='col-xs-4'>配置权重(%)</th>" +
        "</tr>");
    var sykycw = 100;
    for (var i = 0; i < selectedDatas.length; i++) {
        table.append("<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + selectedDatas[i].productName + "</td>" +
            "<td>" + selectedDatas[i].productCode + "</td>" +
            "<td>" + selectedDatas[i].cutOffDate + "</td>" +
            "<td>周</td>" +
            "<td><div class='col-xs-6'><input id='slider_" + i + "' type='text'></div>" +
            "<div class='input-group col-xs-6'>" +
            "<input id='weight_" + i + "' type='text' class='form-control' value='" +
            ((weightList != undefined && weightList[i] != undefined && weightList != '') ?
                weightList[i] : (100 / selectedDatas.length).toFixed(2)) +
            "' max='100' min='0'>" +
            "<span class='input-group-addon'>%</span>" +
            "</div></td>" +
            "</tr>");
        sykycw -= ((weightList != undefined && weightList[i] != undefined && weightList != '') ?
            weightList[i] : (100 / selectedDatas.length));
    }
    // 剩余可用仓位
    $("#progressBarSykycw").css("width", (100 - sykycw).toFixed(2) + "%");
    $("#lbSykycw").html(Math.abs(sykycw.toFixed(2)) + "%");

    $("input[id^='slider']").each(function () {
        var id = $(this).attr("id").split("_")[1];
        $(this).ionRangeSlider({
            min: 0,
            max: 100,
            from: $("#weight_" + id).val(),
            step: 1,
            onChange: function (obj) {
                console.log(obj.from);
                $("#weight_" + id).val(obj.from);
            }
        });
    });
    $("input[id^='weight']").on("change", function () {
        var id = $(this).attr("id").split("_")[1];
        var slider = $("#slider_" + id).data("ionRangeSlider");
        // 使用`update`指令更新参数
        slider.update({
            from: $(this).val()
        });
        // 使用reset()重置
        slider.reset();
    });
    $("#step3Content").show();
}

function lookBackCallback(item) {
    console.log(item);
    if (item.status == '-1') {
        alert("未找到符合条件的数据");
        return false;
    }
    var d = item.datas[0];
    var eCharsModelList = item.eCharsModelList;
    var tbYejizonglan = $("#tbYejizonglan");
    tbYejizonglan.html('');
    tbYejizonglan.append("<tr>" +
        "<th class='col-xs-3'>评价标准</th>" +
        "<th class='col-xs-3'>最新值</th>" +
        "<th class='col-xs-3'>评价标准</th>" +
        "<th class='col-xs-3'>最新值</th>" +
        "</tr>");
    tbYejizonglan.append("<tr>" +
        "<td>年化总收益</td>" +
        "<td>" + d.annualIncome + "</td>" +
        "<td>年化总风险</td>" +
        "<td>" + d.annualRisk + "</td>" +
        "</tr>");
    tbYejizonglan.append("<tr>" +
        "<td>年化主动收益</td>" +
        "<td>" + d.annualActiveIncome + "</td>" +
        "<td>年化主动风险</td>" +
        "<td>" + d.annualActiveRisk + "</td>" +
        "</tr>");
    tbYejizonglan.append("<tr>" +
        "<td>实现阿尔法</td>" +
        "<td>" + d.implementAlpha + "</td>" +
        "<td>实现贝塔</td>" +
        "<td>" + d.implementBeta + "</td>" +
        "</tr>");
    tbYejizonglan.append("<tr>" +
        "<td>信息比率</td>" +
        "<td>" + d.informationRatio + "</td>" +
        "<td>夏普比率</td>" +
        "<td>" + d.sharpRatio + "</td>" +
        "</tr>");
    tbYejizonglan.append("<tr>" +
        "<td>特雷诺比率</td>" +
        "<td>" + d.treynorRatio + "</td>" +
        "<td></td>" +
        "<td></td>" +
        "</tr>");

    var tbFengxiangailan = $("#tbFengxiangailan");
    tbFengxiangailan.html('');
    tbFengxiangailan.append("<tr>" +
        "<th class='col-xs-3'>评价标准</th>" +
        "<th class='col-xs-3'>最新值</th>" +
        "<th class='col-xs-3'>评价标准</th>" +
        "<th class='col-xs-3'>最新值</th>" +
        "</tr>");
    tbFengxiangailan.append("<tr>" +
        "<td>最大回撤</td>" +
        "<td>" + d.maxRetracement + "</td>" +
        "<td>年化波动率</td>" +
        "<td>" + d.annualizedVolatility + "</td>" +
        "</tr>");

    var sy_eChart = echarts.init(document.getElementById('incomeEChartContainer'));
    sy_eChart.clear();

    var sy_echartModel = eCharsModelList[0];
    var sy_option = {
        title: {
            left: 'center',
            text: sy_echartModel.title
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
            data: sy_echartModel.legend
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
            data: sy_echartModel.xAxisDatas
        }],
        yAxis: [{
            // gridIndex: 1,
            name: '百分比(%)',
            type: 'value'
        }],
        series: sy_echartModel.series
    };

    sy_eChart.setOption(sy_option);

    var fx_eChart = echarts.init(document.getElementById('netvalueEChartContainer'));
    fx_eChart.clear();

    var fx_echartModel = eCharsModelList[1];
    var fx_option = {
        title: {
            left: 'center',
            text: fx_echartModel.title
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
            data: fx_echartModel.legend
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
            data: fx_echartModel.xAxisDatas
        }],
        yAxis: [{
            // gridIndex: 1,
            name: '百分比(%)',
            type: 'value'
        }],
        series: fx_echartModel.series
    };

    fx_eChart.setOption(fx_option);

    var hc_eChart = echarts.init(document.getElementById('riskEChartContainer'));
    hc_eChart.clear();

    var hc_echartModel = eCharsModelList[2];

    var hc_option = {
        title: {
            left: 'center',
            text: hc_echartModel.title
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
            data: hc_echartModel.legend
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
            data: hc_echartModel.xAxisDatas
        }],
        yAxis: [{
            // gridIndex: 1,
            name: '百分比(%)',
            type: 'value'
        }],
        series: [{
            name: hc_echartModel.series[0].name,
            data: hc_echartModel.series[0].data,
            type: hc_echartModel.series[0].type,
            areaStyle: {normal: {}}
        }, {
            name: hc_echartModel.series[1].name,
            data: hc_echartModel.series[1].data,
            type: hc_echartModel.series[1].type
        }]
    };

    console.log(JSON.stringify(hc_echartModel.series[0].name + "data:" + hc_echartModel.series[0].data + "type:" + hc_echartModel.series[0].type));

    hc_eChart.setOption(hc_option);

    $("#lookBackContent").show();
}