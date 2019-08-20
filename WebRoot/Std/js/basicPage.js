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
        name: '开关',
        fieldName: 'kaiguan',
        width: 80,
        edittype: 'dzSwitch',
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue == '0') {
                return "关闭";
            } else if (cellvalue == '1') {
                return "打开";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue == '关闭') {
                return "0";
            } else if (cellvalue == '打开') {
                return "1";
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
        validateSetting: {
            rules: {
                companyName: {
                    required: true
                },
                trace: {
                    required: true
                },
                management: {
                    required: true
                },
                productCount: {
                    required: true
                },
                // qualitativeScore: {
                //     required: true
                // },
                quantifyScore: {
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

    $("#kaiguan").dzSwitch({
        onBtnValue: '打开',
        offBtnValue: '关闭',
        onChange: function (value) {
            DzConfirm.alert(value);
        }
    });

    // $("#kaiguan").on("change", function () {
    //     DzConfirm.alert("onChange"+$(this).val());
    // });

    // // 定性得分
    // $("#iptQualitativeLinkUploadFile").dzFileUpload({
    //     uploadExtraData: {
    //         "fileType": "dxdf",
    //         "id": $("#id").val()
    //     },
    //     inputFiled: "qualitativeLink"
    // });

    // 定量得分
    $("#iptQuantifyLinkUploadFile").dzFileUpload({
        uploadExtraData: {
            "fileType": "dldf",
            "id": $("#id").val()
        },
        inputFiled: "quantifyLink"
    });

    // 尽调报告
    $("#iptTraceLinkUploadFile").dzFileUpload({
        uploadExtraData: {
            "fileType": "jdbg",
            "id": $("#id").val()
        },
        inputFiled: "traceLink"
    });

    //原始资料
    $("#iptDocumentLinkUploadFile").dzFileUpload({
        uploadExtraData: {
            "fileType": "yszl",
            "id": $("#id").val()
        },
        inputFiled: "documentLink"
    });

    $("#foundDate").datepicker();

    $("#dingxingDlg .modal-dialog").css("width", "830px");

    $("#toDingXingbtn").on("click", function () {
        openDingxingDlg();
    });

    $("#dingxingDlg :radio").on("change", function () {
        var itemNum = $(this).attr('name').replace("radio", "");
        $("#dingxingDlg #score" + itemNum).html($(this).val());

        var totalScore = 0;
        $("span[id^='score']").each(function () {
            totalScore += $(this).html() * 1;
        });
        $("#totalScore").html(totalScore);
    });

    $("#dingxingDlgSaveBtn").prop('disabled', true);

    $(":radio").prop("readonly", true);

    $("#dingxingDlgExpBtn").on("click", onDingxingDlgExpBtn);

});

function openDingxingDlg(id, name) {
    console.log(id + "===" + name);
    var companyId = id || $("#id").val();
    if (companyId == undefined || companyId == '') {
        alert("请先选择公司");
        return false;
    }

    $("#dingxingDlg").modal('show');
    // window.frames["dingxingFrame"].initForm();
    var companyName = name || $("#companyName").val();
    if (companyName != undefined) {
        $("#dingxingCompanyName").html(companyName);
    }


    ajax({
        url: "D01_07action_getDingxinByCompanyId",
        data: {
            reqJsonStr: JSON.stringify({
                companyId: companyId
            })
        },
        async: false,
        success: getDingxinByCompanyId_Callback,
        error: getDingxinByCompanyId_Callback
    });
}

function getDingxinByCompanyId_Callback(item) {
    console.log(JSON.stringify(item));
    $("#dingxingDlg :radio[value='0']").prop("checked", true);
    $("span[id^='score']").html("0");
    $("#totalScore").html("0");


    if (item.status == '1') {
        for (var i = 0; i < item.datas.length; i++) {
            var data = item.datas[i];
            if (data.itemName == 'totalScore') {
                $("#totalScore").html(data.itemScore);
            } else {
                $(":radio[name='" + data.itemName + "'][value='" + data.itemScore + "']").prop("checked", true);
                $("#" + data.scoreName).html(data.itemScore);
            }
        }
    }
}

function afterOnAddBtn() {
    $("#toDingXingbtn").html("添加公司并保存后，再维护定性分析表");
    $("#toDingXingbtn").prop("disabled", true);
}

function afterOnModBtn() {
    $("#toDingXingbtn").html("查看定性评分表");
    $("#toDingXingbtn").prop("disabled", false);
}

function onDingxingDlgExpBtn() {

    $("dingxingPdfContent").remove();

    setTimeout(function () {

        var targetDom = $("#dingxingTableContent");

        var copyDom = targetDom.clone();
        copyDom.find("#page_1")
            .after('</table>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<table class="table table-bordered table-hover scrolltable" ' +
                'style="display:block; max-height:600px;overflow-y: scroll;">' +
                '<tbody>');

        copyDom.attr("id", "dingxingPdfContent");
        copyDom.find(":radio").attr("name", "");
        copyDom.find("table").css("overflow-y", "visible");
        copyDom.height("3000px");

        copyDom.css("background", "#ffffff");

        $('body').append(copyDom);
        // html2canvas(document.getElementById("step3Content"), {
        html2canvas(copyDom, {
            // allowTaint: true,
            // height: 5000,
            scale: 4,
            allowTaint: true,
            taintTest: false,
            onrendered: function (canvas) {
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;

                // A4纸的长宽：592.28 * 841.89，减掉的是页边距
                var a4Height = 841.89 - 20;
                var a4Width = 592.28 - 40;


                //一页pdf显示html页面生成的canvas高度;
                var pageHeight = contentWidth / a4Width * a4Height;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var position = 0;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                var imgWidth = a4Width;
                var imgHeight = a4Width / contentWidth * contentHeight;

                var pageData = canvas.toDataURL('image/jpeg', 1.0);

                var pdf = new jsPDF('', 'pt', 'a4');

                //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                //当内容未超过pdf一页显示的范围，无需分页
                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight);
                } else {
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight;
                        position -= a4Height;
                        //避免添加空白页
                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }

                // //返回图片dataURL，参数：图片格式和清晰度(0-1)
                // var pageData = canvas.toDataURL('image/jpeg', 1.0);
                //
                // //方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
                // var pdf = new jsPDF('', 'pt', 'a4');
                //
                // //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
                // pdf.addImage(pageData, 'JPEG', 0, 0, 595.28, 592.28 / canvas.width * canvas.height);

                pdf.save('据兴科技.pdf');

            }
        });
    }, 1000);
}
