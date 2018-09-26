var jqGridConf = {
    caption: "公司列表",
    colNames: ['id', '基金公司名称', '状态', '成立时间', '管理规模', '产品数量', '定性得分', '定性得分链接'],
    colModel: [{
        name: 'id',
        index: 'id',
        hidden: true
    }, {
        name: 'companyName',
        index: 'companyName',
        width: 200
    }, {
        name: 'trace',
        index: 'trace',
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
        name: 'foundDate',
        index: 'foundDate',
        width: 100
    }, {
        name: 'management',
        index: 'management',
        width: 100
    }, {
        name: 'productCount',
        index: 'productCount',
        width: 70
    }, {
        name: 'qualitativeScore',
        index: 'qualitativeScore',
        width: 70
    }, {
        name: 'qualitativeLink',
        index: 'qualitativeLink',
        width: 180,
        formatter: function (cellvalue, options, rowObject) {
            // if (cellvalue != undefined && cellvalue != '') {
            return "<a href='#' onclick='openDingxingDlg(\"" + rowObject['id'] + "\",\"" + rowObject['companyName'] + "\")'><i class='fa fa-fw fa-file-text-o'></i></a>";
        }
    }],
    ondblClickRow: function (rowid, iRow, iCol, e) {
    }
};

var actionname = "D01_01action";
jQuery(document).ready(function () {
    commonInit({
        toolbar_btns: [{}, {
            id: 'cleBtn',
            value: '清空',
            active: true,
            bind: onCleBtn
        }]
    });


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

    $("#dingxingDlgSaveBtn").on("click", function () {
        var companyId = $("#companyId").val()
        if (companyId == undefined || companyId == '') {
            alert("请先选择公司");
            return false;
        }
        var rm = [];
        $("#dingxingDlg :radio").each(function () {
            if ($(this).prop('checked')) {
                var itemName = $(this).attr("name");
                var itemScore = $(this).val();
                var scoreName = itemName.replace("radio", "score");
                console.log(itemName);
                rm.push(
                    {
                        companyId: companyId,
                        itemName: itemName,
                        itemScore: itemScore,
                        scoreName: scoreName
                    }
                )
            }
        });
        var totalScore = $("#totalScore").html();
        rm.push({
            companyId: companyId,
            itemName: 'totalScore',
            itemScore: totalScore
        });
        console.log(JSON.stringify(rm));

        ajax({
            url: "D01_07action_save",
            data: {
                reqJsonStr: JSON.stringify(rm)
            },
            async: false,
            success: D01_07action_save_Callback,
            error: D01_07action_save_Callback
        });
    })

    $("#dingxingDlgExpBtn").on("click",onDingxingDlgExpBtn);

});

function openDingxingDlg(companyId, companyName) {

    $("#companyId").val(companyId);
    $("#dingxingCompanyName").html(companyName);

    $("#dingxingDlg").modal('show');

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

    $(":radio[value='0']").prop("checked", true);
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

function D01_07action_save_Callback(item) {
    if (item.status == '1') {
        dzToast('保存定性分析表成功', 'success');
        $("#dingxingDlg").modal('hide');
    } else {
        dzToast('保存定性分析表失败', 'error');
    }
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

        copyDom.attr("id","dingxingPdfContent");
        copyDom.find(":radio").attr("name","");
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