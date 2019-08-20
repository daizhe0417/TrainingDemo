var dzGridConf = {
    columns: [{
        name: 'id',
        fieldName: 'id',
        hidden: true
    }, {
        name: '基金公司名称',
        fieldName: 'companyName',
        width: 200
    }, {
        name: '状态',
        fieldName: 'trace',
        width: 80,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue == '0') {
                return "跟踪";
            } else if (cellvalue == '1') {
                return "尽调";
            } else if (cellvalue == '2') {
                return "已投";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue == '跟踪') {
                return "0";
            } else if (cellvalue == '尽调') {
                return "1";
            } else if (cellvalue == '已投') {
                return "2";
            } else {
                return "";
            }
        }
    }, {
        name: '成立时间',
        fieldName: 'foundDate',
        width: 100
    }, {
        name: '管理规模',
        fieldName: 'management',
        width: 100
    }, {
        name: '产品数量',
        fieldName: 'productCount',
        width: 70
    }, {
        name: '对比',
        fieldName: 'operator',
        width: 50,
        formatter: function (cellvalue, options, rowObject) {
            return "<a href='#' onclick='addToCompare(\"" + rowObject['id'] + "\",\"" + rowObject['companyName'] + "\")'>" +
                "<i class='fa fa-fw fa-plus'></i>" +
                "加入对比</a>";
        }
    }, {
        name: '定性得分',
        fieldName: 'qualitativeScore',
        width: 70
    }, {
        name: '定性得分表',
        fieldName: 'qualitativeLink',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            // if (cellvalue != undefined && cellvalue != '') {
            return "<a href='#' onclick='openDingxingDlg(\"" + rowObject['id'] + "\",\"" + rowObject['companyName'] + "\")'><i class='fa fa-fw fa-file-text-o'></i></a>";
            // } else {
            //     return "";
            // }
            // },
            // unformat: function (cellvalue, options, rowObject) {
            //     if (cellvalue != "") {
            //         return $(cellvalue).attr("href");
            //     } else {
            //         return "";
            //     }
        }
    }, {
        name: '定量得分',
        fieldName: 'quantifyScore',
        width: 70
    }, {
        name: '定量得分链接',
        fieldName: 'quantifyLink',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            // console.log("cellvalue="+cellvalue);
            if (cellvalue != undefined && cellvalue != '') {
                // return "<a href='../" + cellvalue + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
                return "<a href='../" + cellvalue.replace("\\", "\/") + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            // console.log("cellvalue="+cellvalue);
            if (cellvalue != "") {
                return $(cellvalue).attr("href");
            } else {
                return "";
            }
        }
    }, {
        name: '推荐人',
        fieldName: 'tjr',
        width: 80,
        sortable: true
    }, {
        name: '尽调报告',
        fieldName: 'traceLink',
        width: 150,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue != undefined && cellvalue != '') {
                // return "<a href='../" + cellvalue + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
                return "<a href='../" + cellvalue.replace("\\", "\/") + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
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
        name: '原始资料',
        fieldName: 'documentLink',
        width: 150,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue != undefined && cellvalue != '') {
                // return "<a href='../" + cellvalue + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
                return "<a href='../" + cellvalue.replace("\\", "\/") + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
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
        fieldName: 'deltag',
        hidden: true
    }]
};

var actionname = "D01_01action";
jQuery(document).ready(function () {
    // $("#dzDataTableContent").initTable(dzGridConf);
    // $("#dzGridContainer").dzGrid("initTable", dzGridConf);

    commonInit({
        detailDlgWidth: 750,
        detailDlgTitle: '公司',
        deleteType: 'byObject',
        toolbar_btns: [{
            id: 'compareBtn',
            value: '对比(0|6)',
            active: true,
            bind: onCompareBtn,
            remotMethod: 'compare'
        }, {
            id: 'cleBtn',
            value: '清空',
            active: true,
            bind: onCleBtn
        }]
    });

    $("#compareModal").dzCompare({
        title: '产品对比',
        maxSize: 6,
        btnId: 'compareBtn',
        toCompare: function (itemList) {
            alert("toCompare:" + JSON.stringify(itemList));
        }
    });

});

function addToCompare(id, text) {
    console.log("id=" + id + ",text=" + text);
    var status = $("#compareModal").dzCompare('addItem', {
        id: id,
        text: text
    });
    if (status === -1) {
        alert("已经达到对比个数上限");
    } else if (status === -2) {
        alert("添加对象格式不正确");
    } else if (status === -3) {
        alert("对象已经存在");
    } else {
        $("#compareBtn").html("对比(" + status + "|" + $("#compareModal").dzCompare("getMaxSize") + ")");
    }
}

function onCompareBtn() {
    $("#compareModal").modal("show");
}