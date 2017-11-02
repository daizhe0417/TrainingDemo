//===============================================================
//===============================================================
// author	: daizhe
// version	: 1.1
// date		: 2015-06-27
// 1、在conf参数中增加validateSetting选项，默认为{}，可以在调用时设置验证规则，就不用在各个input等元素中设置验证规则了（原来的方法仍然可以用）
// 2、在conf参数中增加detailDlgId选项，默认为detailDlg，所有对dialog的操作使用这个Id
// 3、在conf参数中增加queryBarOn选项，默认为true，在queryBarHeaderInit中使用这个参数判断是否需要设置查询栏
// 4、对话框设置函数detailDlgInit中，保存和取消的按钮对应的方法抽取为函数detailDlgSaveBtnAction和detailDlgCancelBtnAction，其中调用空的After方法，用户可覆盖该方法，增加一些自己的操作
// 5、commonInit方法中不再调用pagerInit方法，将这个方法放在jqGridInit方法的最后调用
// 6、pagerInit方法中增加判断jqGridPager是否存在的判断
// 7、修改logout方法中返回的href地址
// 8、filledInputByItem方法中，对于普通类型的字段，如果未找到对应的input元素，则在form中插入一个隐藏input
//===============================================================
// version	: 1.2
// date		: 2015-07-07
// filledInputByItem方法中，对于select因素，如果不能设置其值，则添加一个这个值的option，通过在jqGridConf的column中增加selectDisplayFieldName参数来指定这个option要显示的字段
//===============================================================
//===============================================================

// 分页状态类
var pagerModel = {
    currentPage: 0,
    maxPageCount: 0,
    maxRowCount: 0,
    rowsPerPage: 0,
    firstRow: 0,
    maxRow: 0,
    status: "",
    datas: null
};

// 分页请求参数
var pagerReq = {
    "pageNum": 1,
    "rowsPerPage": 20,
    "param": []
};

// 查询条件参数
var queryList = [];

// 验证器
var validator;
// 通用设置参数
var default_btns = [{
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
    id: 'expBtn',
    value: '导出',
    active: false,
    bind: onExpBtn,
    remotMethod: 'export'
}];
var formValidTag = true;
var jqGridConf = {};
var conf = {
    execQuery: true,
    queryInit: true,
    queryFieldContainer: "queryBar",
    defaultQueryStatement: [],

    formName: "showForm",

    detailDlgId: "detailDlg",
    detailDlgWidth: 350,
    detailDlgTitle: "",
    detailDlsAutoOpen: false,
    detailDlgModal: true,
    detailDlgPosition: {
        my: 'left top',
        at: 'left top',
        of: 'jqGridContainer'
    },
    detailDlgButtons: [{
        text: "保存",
        click: detailDlgSaveBtnAction
    }, {
        text: "取消",
        click: detailDlgCancelBtnAction
    }],

    queryBarOn: true,
    queryBarHeader_dept: {
        open: false,
        fieldName: 'bmdm',
        fieldDisplayName: '选择部门'
    },
    queryBarHeader_btns: default_btns,

    deleteType: 'ById',
    idFieldName: 'id',

    readOnlyFields: [],

    validateSetting: {},

    autoFilled: true,

    checkExist: false// 如果指定了idFieldName，且本参数为true时，当id字段change时，自动查找是否已有该记录，有则取出并填充字段，无则什么也不做
};

// 表单修改标记
var formHasChanged = false;

// 通用初始化方法
function commonInit(setting) {
    // 参数设置
    if (setting.queryBarHeader_btns != undefined) {
        for (var i = 0; i < setting.queryBarHeader_btns.length; i++) {
            for (var j = 0; j < conf.queryBarHeader_btns.length; j++) {
                if (setting.queryBarHeader_btns[i].id == conf.queryBarHeader_btns[j].id) {
                    jQuery.extend(conf.queryBarHeader_btns[j],
                        setting.queryBarHeader_btns[i]);
                    jQuery.extend(setting.queryBarHeader_btns[i],
                        conf.queryBarHeader_btns[j]);
                }
            }
        }
    }
    if (setting.detailDlgButtons != undefined) {
        for (var i = 0; i < setting.detailDlgButtons.length; i++) {
            for (var j = 0; j < conf.detailDlgButtons.length; j++) {
                if (setting.detailDlgButtons[i].id == conf.detailDlgButtons[j].id) {
                    jQuery.extend(conf.detailDlgButtons[j],
                        setting.detailDlgButtons[i]);
                    jQuery.extend(setting.detailDlgButtons[i],
                        conf.detailDlgButtons[j]);
                }
            }
        }
    }
    jQuery.extend(conf, setting);

    if (conf.autoFilled) {
        $(document.body).height(
            jQuery("#wz_main_right", window.parent.parent.document)
                .height() - 4);
        $(document.body)
            .width(
                jQuery("#wz_main_right", window.parent.parent.document)
                    .width() - 208);
    }

    // queryBarHeader设置
    queryBarHeaderInit();

    // jqGrid的默认设置
    jqGridInit();

    // 详细信息对话框的默认设置
    detailDlgInit();

    // validationInit();
    jQuery("#" + conf.formName).tooltip({
        show: false,
        hide: false
    });

    // var validateConf = {
    // ocusCleanup : true,
    // errorPlacement : function(error, element) {
    // }
    // };

    validator = jQuery("#" + conf.formName).validate(conf.validateSetting);

    // jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-CN']);

    // 初始化css效果
    cssInit();

    if (conf.queryInit) {
        queryInit();
    }

    // 查询所有记录
    if (conf.execQuery) {
        toQuery();
    }

    repeatedSubmitInit();

    if (conf.checkExist) {
        bindToCheckExist();
    }

}

// =========================================================================
// ================================= 初始化 ===================================
// =========================================================================

// =========================================================================
// queryBarHeader设置
function queryBarHeaderInit() {
    if (conf.queryBarOn) {
        var queryBarHeader = jQuery("#queryBarHeader");
        var initStr = '<table width="100%">' + '<tr width="100%">';
        // 部门选择器
        if (conf.queryBarHeader_dept.open) {
            initStr += '<td ><input type="button" value="'
                + conf.queryBarHeader_dept.fieldDisplayName
                + ':" class="edit_title" />' + '</td>' + '<td ><input id="'
                + conf.queryBarHeader_dept.fieldName
                + '" type="input" size="15" /></td>';
        }
        // 按钮
        var btnsStr = "";

        for (var i = 0; i < conf.queryBarHeader_btns.length; i++) {
            if (conf.queryBarHeader_btns[i].active) {
                btnsStr += '<input id="' + conf.queryBarHeader_btns[i].id
                    + '" type="button" value="'
                    + conf.queryBarHeader_btns[i].value
                    + '" class="edit_title" />';
            }
        }
        // 分别添加各按钮html
        // if (conf.queryBarHeader_btns.addBtn) {
        // btnsStr += '<input id="' + conf.addBtn.id + '" type="button" value="'
        // + conf.addBtn.value + '" class="edit_title" />';
        // }
        // if (conf.queryBarHeader_btns.modBtn) {
        // btnsStr += '<input id="' + conf.modBtn.id + '" type="button" value="'
        // + conf.modBtn.value + '" class="edit_title" />';
        // }
        // if (conf.queryBarHeader_btns.delBtn) {
        // btnsStr += '<input id="' + conf.delBtn.id + '" type="button" value="'
        // + conf.delBtn.value + '" class="edit_title" />';
        // }
        // if (conf.queryBarHeader_btns.cleBtn) {
        // btnsStr += '<input id="' + conf.cleBtn.id + '" type="button" value="'
        // + conf.cleBtn.value + '" class="edit_title" />';
        // }
        // if (conf.queryBarHeader_btns.expBtn) {
        // btnsStr += '<input id="' + conf.expBtn.id + '" type="button" value="'
        // + conf.expBtn.value + '" class="edit_title" />';
        // }

        // 至少有一个按钮
        if (btnsStr.length > 0) {
            initStr += '<td width="80%" align="right">'
                + '<div width="100%" align="right" style="display:inline">'
                + btnsStr + '</div></td>';
        }
        initStr += '</tr>' + '</table>';
        queryBarHeader.html(initStr);
        // 绑定按钮事件响应方法
        for (var i = 0; i < conf.queryBarHeader_btns.length; i++) {
            if (conf.queryBarHeader_btns[i].active) {
                jQuery("#" + conf.queryBarHeader_btns[i].id).on("click",
                    conf.queryBarHeader_btns[i].bind);
            }
        }
        // if (conf.queryBarHeader_btns.addBtn) {
        // jQuery("#" + conf.addBtn.id).on("click", conf.addBtn.bind);
        // }
        // if (conf.queryBarHeader_btns.modBtn) {
        // jQuery("#" + conf.modBtn.id).on("click", conf.modBtn.bind);
        // }
        // if (conf.queryBarHeader_btns.delBtn) {
        // jQuery("#" + conf.delBtn.id).on("click", conf.delBtn.bind);
        // }
        // if (conf.queryBarHeader_btns.cleBtn) {
        // jQuery("#" + conf.cleBtn.id).on("click", conf.cleBtn.bind);
        // }
        // if (conf.queryBarHeader_btns.expBtn) {
        // jQuery("#" + conf.expBtn.id).on("click", conf.expBtn.bind);
        // }
    }
}
// queryBarHeader设置
// =========================================================================

// =========================================================================
// jqGrid的默认设置
function jqGridInit() {
    if (jQuery("#jqGridList").length > 0 && jqGridConf != undefined) {
        // 定义一个jqGrid的通用配置方法，放在commInit里，需要自定义的在这里重载即可
        jQuery("#jqGridList").jqGrid(
            jQuery.extend(jqGridCommonConf, jqGridConf));

        jQuery("#jqGridList").jqGrid('navGrid', '#jqGridPager', {
            edit: false,
            add: false,
            del: false,
            search: false,
            refresh: false
        });
    }

    pagerInit();
}
// jqGrid的默认设置
// =========================================================================

// =========================================================================
// 详细信息对话框的默认设置
function detailDlgInit() {
    if (jQuery("#" + conf.detailDlgId).length > 0) {
        jQuery("#" + conf.detailDlgId).dialog({
            autoOpen: conf.detailDlsAutoOpen,
            title: conf.detailDlgTitle,
            width: conf.detailDlgWidth,
            modal: conf.detailDlgModal,
            buttons: conf.detailDlgButtons
        });

        var detailDlg = jQuery("#" + conf.detailDlgId);
        if (jQuery("#" + conf.detailDlgPosition.of).length > 0) {
            detailDlg.dialog("option", "position", {
                my: conf.detailDlgPosition.my,
                at: conf.detailDlgPosition.at,
                of: jQuery("#" + conf.detailDlgPosition.of)
            });
        }
    }
}

function detailDlgSaveBtnAction() {
    to_save("showForm");
    afterSaveDetailDlg();
}
function afterSaveDetailDlg() {

}
function detailDlgCancelBtnAction() {
    validator.resetForm();
    jQuery("#" + conf.detailDlgId).dialog("close");
    afterCancelDetailDlg();
}
function afterCancelDetailDlg() {

}
// 详细信息对话框的默认设置
// =========================================================================

// function validationInit() {
// 从demo抄来的
$.validator.setDefaults({
    submitHandler: function () {
        // modify by d62 140820
        // alert("submitted!");
    },
    showErrors: function (map, list) {
        // there's probably a way to simplify this
        var focussed = document.activeElement;
        if (focussed && $(focussed).is("input, textarea,select")) {
            $(this.currentForm).tooltip("close", {
                currentTarget: focussed
            }, true)
        }
        this.currentElements.removeAttr("title").removeClass(
            "ui-state-highlight");
        $.each(list, function (index, error) {
            $(error.element).attr("title", error.message).addClass(
                "ui-state-highlight");
        });
        if (focussed && $(focussed).is("input, textarea,select")) {
            $(this.currentForm).tooltip("open", {
                target: focussed,
                zIndex: 2000
            });
        }
    }
});
// }

// =========================================================================
// 按钮事件响应函数
function onAddBtn() {
    clearInput();
    var addDlg = jQuery("#" + conf.detailDlgId);
    setReadOnlyFiledsOnModify(false);
    addDlg.dialog("option", "title", "新增" + conf.detailDlgTitle).dialog("open");
    afterOnAddBtn();
}

function afterOnAddBtn() {
}

function onModBtn() {
    clearInput();
    if (filledInputBySelectedRow()) {
        setReadOnlyFiledsOnModify();
        var moDlg = jQuery("#" + conf.detailDlgId);
        moDlg.dialog("option", "title", "修改" + conf.detailDlgTitle).dialog(
            "open");
    }
    afterOnModBtn();
}

function afterOnModBtn() {
}

function onDelBtn() {
    to_delete();
}

function onCleBtn() {
    jQuery(":input[id^='query']").each(function () {
        jQuery(this).val("");
        if (jQuery(this).is("select")) {
            jQuery(this).combobox("destroy");
            jQuery(this).comboboxUtil();
        }
    })
    toQuery();
}
function onExpBtn() {

}
function setReadOnlyFiledsOnModify(type) {
    if (type == undefined || type == 'undefined') {
        type = true;
    }
    if (conf.readOnlyFields.length > 0) {
        for (var i = 0; i < conf.readOnlyFields.length; i++) {
            jQuery("#" + conf.readOnlyFields[i]).attr("readonly", type);
        }
    }
}

// =========================================================================
// ================================ 增删改查 ===================================
// =========================================================================
// ------------------------ crud -------------------------
// 添加
function to_add() {
    // DWRUtil.setValue(uploadFileElement,DWRUtil.getValue(uploadFileElement));

    // 获取表单数据
    var formMap = DWRUtil.getValues("showform");

    // 有上传文件时的处理
    if (uploadFileElement != null && uploadFileElement != '') {
        if (jQuery("#" + uploadFileElement).val() != null
            && jQuery("#" + uploadFileElement).val() != '') {
            var uploadFile = DWRUtil.getValue(uploadFileElement);
            var realFileNames = uploadFile.value.split("\\");
            var realfilename = realFileNames[realFileNames.length - 1];
            formMap["uploadfile"] = uploadFile;
            formMap["realfilename"] = realfilename;
        } else {
            if (confirm("没有添加上传文件，确认要保存吗？")) {
                eval(actionname + ".add(formMap,toQuery)");
            } else {
                return false;
            }
        }
    }

    // 提交
    eval(actionname + ".add(formMap,toQuery)");
}

function to_save(validationRules) {
    beforeToSave();
    if (!formValidTag) {
        alert("表单格式错误");
        return false;
    }
    var formMap;
    if (validator.form()) {
        if (!formHasChanged) {
            alert("未修改任何内容，无需保存！");
            return;
        }
        formHasChanged = false;

        formMap = getFormMap();

        var rm = {
            reqJsonStr: JSON.stringify(formMap)
        };

        ajax({
            url: actionname + "_save",
            data: rm,
            success: saveCallBack,
            error: saveCallBack
        });
    } else {
        alert("表单格式错误！");
    }
}
function saveCallBack(item) {
    if (item.status == 1) {
        alert("保存成功！");
        formHasChanged = false;
        jQuery("#" + conf.detailDlgId).dialog("close");
        afterSaveSuccess();
    } else {
        alert("保存失败！");
        formHasChanged = true;
    }
}
function beforeToSave() {
}
function afterSaveSuccess() {
    toQuery();
}

function to_export() {
    // alert('toexport');
    // jQuery("input[name^='fieldsList']").remove();
    jQuery("input[name='sqlStr']").remove();
    // for ( var i = 0; i < fields.length; i++) {
    // var v = fields[i].name == "" ? fields[i].value : fields[i].name;
    // jQuery("#showform").append(
    // "<input type='hidden' name='fieldsList[" + i
    // + "].value' value='" + v + "'>");
    // jQuery("#showform").append(
    // "<input type='hidden' name='fieldsList[" + i
    // + "].name' value='" + fields[i].displayname + "'>");
    // jQuery("#showform").append(
    // "<input type='hidden' name='fieldsList[" + i
    // + "].type' value='" + fields[i].type + "'>");
    // }

    var sql = getQuerySQL();
    // if (sql == '') {
    // var dwno = jQuery("#dwno").val();
    // var riqi = jQuery("#riqi").val();
    // if (dwno != undefined && dwno != '') {
    // sql += " and dwno='" + dwno + "'";
    // }
    // if (riqi != undefined && riqi != '') {
    // sql += " and riqi like'" + riqi.substring(1, 7) + "%'";
    // }
    // }
    jQuery("#showForm").append(
        '<input type="hidden" name="sqlStr" value="' + sql + '">');
    jQuery("#showForm").attr("action", actionname + "_export.action");
    jQuery("#showForm").attr("target", "blank");
    jQuery("#showForm").submit();
}

function to_delete(deleteType, warnMsg) {
    var row = jQuery("#jqGridList").jqGrid('getGridParam', 'selrow');
    if (row == null || row == 'undefined') {
        alert('请先选择要删除的记录！');
        return false;
    }
    if (warnMsg == undefined || warnMsg == null) {
        warnMsg = "确认要删除记录吗？";
    }
    if (confirm(warnMsg)) {
        var rowDatas = jQuery("#jqGridList").jqGrid('getRowData', row);
        if (conf.deleteType != 'ById') {
            var rm = {
                reqJsonStr: JSON.stringify(rowDatas)
            };
        } else {
            var id = rowDatas[conf.idFieldName];
            var rm = {
                reqJsonStr: '{"' + conf.idFieldName + '":"' + id + '"}'
            };
        }
        ajax({
            url: actionname + "_remove",
            data: rm,
            success: deleteCallBack,
            error: deleteCallBack
        });
    }
}

function deleteCallBack(item) {
    if (item.status == 1) {
        alert("删除成功！");
    } else {
        alert("删除失败！");
    }
    toQuery();
}

function commonAjaxCallBack(item) {
    if (item.status == 1) {
        alert("操作成功！");
    } else {
        alert("操作失败！");
    }
    toQuery();
}

// 清除查询添加
function to_queryAll() {
    for (var i = 0; i < fields.length; i++) {
        var name = fields[i].value;
        if (fields[i].type == 'text' || fields[i].type == 'textarea') {
            jQuery("#" + fields[i].value).val('');
        } else if (fields[i].type == 'select') {
            setSelectValue(document.getElementById(fields[i].value), '');
        } else if (fields[i].type == 'popup') {
            jQuery("#" + fields[i].name).val('');
            jQuery("#" + fields[i].value).val('');
        }
    }
    query('');
}
/*
 * 查询方法
 */
function toQuery() {
    to_query();
}
/*
 * 查询方法
 */
function to_query() {
    // var page = jQuery("#jqGridPager_center input[type='text']").val();
    var rowsPerPage = jQuery("#jqGridPager_center .ui-pg-selbox").val();
    if (rowsPerPage != undefined) {
        extendPagerReq({
            "rowsPerPage": rowsPerPage
        });
    }
    pagerReq.param = [];
    setQueryListToPagerReq(conf.defaultQueryStatement);
    setQueryListToPagerReq(getQueryList());
    setQueryListToPagerReq(queryList);
    var rm = {
        reqJsonStr: JSON.stringify(pagerReq)
    };
    ajax({
        url: actionname + "_query",
        data: rm,
        success: callback,
        error: callback
    });
}

/*
 * 构造查询条件列表
 */
function getQueryList() {
    var sql = "";
    var queryList = [];
    // if (queryList == undefined) {
    // queryList = [];
    // }
    // alert(JSON.stringify(queryList));
    if (conf.queryFieldContainer != '') {
        for (var i = 0; i < jqGridConf.colModel.length; i++) {
            var fieldName = jqGridConf.colModel[i].name;
            var fieldQueryType = jqGridConf.colModel[i].queryType;
            if (fieldQueryType && fieldQueryType == 'ignore') {
                continue;
            }
            if (fieldQueryType && fieldQueryType == 'between') {
                var sValue = jQuery("#query_" + fieldName + "_s").val();
                var eValue = jQuery("#query_" + fieldName + "_e").val();
                if (sValue != '' && eValue != '') {
                    queryList.push({
                        "fieldName": fieldName,
                        "oper": ">=",
                        "value": sValue
                    });
                    queryList.push({
                        "fieldName": fieldName,
                        "oper": "<=",
                        "value": eValue
                    });
                } else if (sValue != '' && eValue == '') {
                    queryList.push({
                        "fieldName": fieldName,
                        "oper": ">=",
                        "value": sValue
                    });
                } else if (sValue == '' && eValue != '') {
                    queryList.push({
                        "fieldName": fieldName,
                        "oper": "<=",
                        "value": eValue
                    });
                }
            } else {
                var fieldValue = jQuery("#query_" + fieldName).val();
                if (fieldValue && fieldValue != undefined) {
                    if (fieldQueryType && fieldQueryType == 'equal') {
                        queryList.push({
                            "fieldName": fieldName,
                            "oper": "=",
                            "value": fieldValue
                        });
                    } else if (fieldQueryType && fieldQueryType == 'contain') {
                        queryList.push({
                            "fieldName": fieldName,
                            "oper": "contain",
                            "value": fieldValue
                        });
                    } else {
                        queryList.push({
                            "fieldName": fieldName,
                            "oper": "like",
                            "value": fieldValue
                        });
                    }
                }
            }
        }
        // alert(sql);
    }
    return queryList;
}
// ------------------------ crud -------------------------

// ------------------------ callback -------------------------
// 列出所有记录
function callback(item) {
    // alert()
    // alert(JSON.stringify(item))
    // 清空
    jQuery("#jqGridList").jqGrid('clearGridData');
    // 没有记录时
    if (item == null || item.status == '-1' || item.datas == null
        || item.datas.length == 0) {
        setNoRecord();
        return;
    }

    // 有记录时
    setRecordFields(item);

    // // 对上传文件的处理
    // setFileUpload();

    // 设置页脚
    setPageFoot();

    // 特殊处理的预留函数
    aftercallback(item);

}

function setNoRecord() {
    // alert("暂无数据！");
    // jQuery("#jqGridList").jqGrid('clearGridData');

    // // 若没有记录，则可能是新建记录，这时若有setp，应设为0
    // if (jQuery("#step").length > 0) {
    // jQuery("#step").val(0);
    // }
    // // 显示暂无记录
    // jQuery("#databody").append("<tr></tr>");
    // var tr = jQuery("#databody").children("tr:last");
    // tr.append("<td colspan='30'><span class='STYLE2'>暂无记录</span></td>");

    // 清除隐藏的id字段
    // if (jQuery("#id").length > 0) {
    // jQuery("#id").val("");
    // }
}

function setRecordFields(item) {
    if (item.datas != undefined && item.datas != null) {
        // alert(JSON.stringify(item))
        pagerModel = item;
        // jQuery.extend(pagerModel, item);
        for (var i = 0; i < item.datas.length; i++) {
            // alert(i+item[i].deptId+item[i].deptName+item[i].parentDeptId+item[i].storeFlag+item[i].deptDesc+item[i].homeArea);
            jQuery("#jqGridList").jqGrid('addRowData', i + 1, item.datas[i]);
        }

        // jQuery("#jqGridList").trigger("reloadGrid");
        // } else {
        // for (var i = 0; i < item.length; i++) {
        // jQuery("#jqGridList").jqGrid('addRowData', i + 1, item[i]);
        // }
    }
}

function setFileUpload() {
    // 对上传文件的处理
    jQuery("#databody a").css("text-decoration", "underline");
    jQuery("#databody a").css("color", "blue");
    // jQuery("#databody a")
    // .click(
    // function(event) {
    // var filename = jQuery(this).attr("id");
    // if (jQuery("#downloadform").length > 0) {
    // jQuery("#downloadform").remove();
    // }
    // jQuery("#databody")
    // .append(
    // "<form id='downloadform' action='DownloadFileaction!download.action'
    // method='post'>"
    // + "<input type='hidden' name='filename' value='"
    // + filename + "'>" + "</form>");
    // jQuery("#downloadform").submit();
    // });
}

function aftercallback(item) {
}
function beforeEndSetEachTr() {
}
// ------------------------ callback -------------------------

// ------------------------ 文件上传下载 -------------------------
function fileUpLoad() {

}

function fileDownLoad(path, filename, realfilename) {
    // dwr.engine.setAsync(false);
    // FileOperator.downloadFile(path, filename, realfilename, function(data) {
    // dwr.engine.openInDownload(data);
    // });
    // dwr.engine.setAsync(true);
    if (jQuery("#downloadform").length > 0) {
        jQuery("#downloadform").remove();
    }
    jQuery("#databody")
        .append(
            "<form id='downloadform' action='DownloadFileaction!download.action' method='post' target='blank'></form>");
    jQuery("#downloadform").append(
        "<input type='hidden' name='path' value='" + path + "'>");
    jQuery("#downloadform").append(
        "<input type='hidden' name='filename' value='" + filename + "'>");
    jQuery("#downloadform").append(
        "<input type='hidden' name='realfilename' value='" + realfilename
        + "'>");
    jQuery("#downloadform").submit();
}
// ------------------------ 文件上传下载 -------------------------

// ------------------------ 分页 -------------------------
// 设置页脚
function setPageFoot() {
    setPagerOptions();
}
function setPagerOptions(pager) {
    // 数据初始化
    var total = pagerModel.maxRowCount == undefined ? 0
        : pagerModel.maxRowCount;// 记录总数
    jQuery("#jqGridPager_right").html(
        '<div class="ui-paging-info" style="text-align:right" dir="ltr">'
        + (pagerModel.firstRow == undefined ? 0
            : pagerModel.firstRow) + ' - '
        + (pagerModel.maxRow == undefined ? 0 : pagerModel.maxRow)
        + '　共' + total + ' 条</div>');
    jQuery("#sp_1_jqGridPager").html(
        pagerModel.maxPageCount == undefined ? 0 : pagerModel.maxPageCount);

    jQuery("#jqGridPager_center input[type='text']")
        .val(pagerModel.currentPage);

    clearPagerBtn();

    if (pagerModel.currentPage == undefined || pagerModel.currentPage == 1) {
        jQuery("#first_jqGridPager").addClass("ui-state-disabled");
        jQuery("#prev_jqGridPager").addClass("ui-state-disabled");

        jQuery("#next_jqGridPager").on("click", next);
        jQuery("#last_jqGridPager").on("click", last);
    } else if (pagerModel.currentPage == pagerModel.maxPageCount) {
        jQuery("#next_jqGridPager").addClass("ui-state-disabled");
        jQuery("#last_jqGridPager").addClass("ui-state-disabled");

        jQuery("#first_jqGridPager").on("click", first);
        jQuery("#prev_jqGridPager").on("click", prev);
    } else {
        jQuery("#first_jqGridPager").on("click", first);
        jQuery("#prev_jqGridPager").on("click", prev);
        jQuery("#next_jqGridPager").on("click", next);
        jQuery("#last_jqGridPager").on("click", last);
    }
}
function clearPagerBtn() {
    jQuery("#first_jqGridPager").removeClass("ui-state-disabled");
    jQuery("#prev_jqGridPager").removeClass("ui-state-disabled");
    jQuery("#next_jqGridPager").removeClass("ui-state-disabled");
    jQuery("#last_jqGridPager").removeClass("ui-state-disabled");

    jQuery("#first_jqGridPager").unbind("click");
    jQuery("#prev_jqGridPager").unbind("click");
    jQuery("#next_jqGridPager").unbind("click");
    jQuery("#last_jqGridPager").unbind("click");
}
function first() {
    var rowsPerPage = jQuery("#jqGridPager_center .ui-pg-selbox").val();
    pagerReq.pageNum = 1;
    to_query();
}
function last() {
    var rowsPerPage = jQuery("#jqGridPager_center .ui-pg-selbox").val();
    pagerReq.pageNum = pagerModel.maxPageCount;
    to_query();
}
function prev() {
    var rowsPerPage = jQuery("#jqGridPager_center .ui-pg-selbox").val();
    pagerReq.pageNum = pagerModel.currentPage - 1;
    to_query();
}
function next() {
    var rowsPerPage = jQuery("#jqGridPager_center .ui-pg-selbox").val();
    pagerReq.pageNum = pagerModel.currentPage + 1;
    to_query();
}
// ------------------------ 分页 -------------------------

// ------------------------ 公用方法 -------------------------
// 全选方法
function SelectAll(obj) {
    var cb = document.getElementsByName("cb");
    for (var i = 0; i < cb.length; i++) {
        cb[i].checked = obj.checked;
    }
}
// 设置select的值
function setSelectValue(obj, value) {
    for (var i = 0; i < obj.options.length; i++) {
        svalue = obj.options[i].value;
        if (value == svalue) {
            obj.selectedIndex = i;
            // break;
            return true;
        }
    }
    return false;
}
function dateFormat(value) {
    var date;
    if (value != null && value != undefined) {
        date == new Date(value);
    } else {
        date = new Date();
    }
    var month = "0" + date.getMonth();
    month = month.substring(month.length - 2, month.length);
    var day = "0" + date.getDate();
    day = day.substring(day.length - 2, day.length);
    var houres = "0" + date.getHours();
    houres = houres.substring(houres.length - 2, houres.length);
    var minute = "0" + date.getMinutes();
    minute = minute.substring(minute.length - 2, minute.length);
    var second = "0" + date.getSeconds();
    second = second.substring(second.length - 2, second.length);
    var str = date.getFullYear() + "-" + month + "-" + day + " " + houres + ":"
        + minute + ":" + second;
    return str;
}
// ------------------------ 公用方法 -------------------------

// ------------------------ 初始化 -------------------------
function pagerInit() {
    if (jQuery("#jqGridPager").length > 0) {

        // jQuery("#first_jqGridPager").unbind("click");
        // jQuery("#prev_jqGridPager").unbind("click");
        // jQuery("#next_jqGridPager").unbind("click");
        // jQuery("#last_jqGridPager").unbind("click");
        //
        // jQuery("#first_jqGridPager").on("click", first);
        // jQuery("#prev_jqGridPager").on("click", prev);
        // jQuery("#next_jqGridPager").on("click", next);
        // jQuery("#last_jqGridPager").on("click", last);

        jQuery("#jqGridPager_center input[type='text']").change(
            function () {
                to_query(jQuery(this).val(), jQuery(
                    "#jqGridPager_center .ui-pg-selbox").val(),
                    getQuerySQL(conf.queryFieldContainer));
            });
    }
    jQuery(".ui-pg-selbox").remove();
}

function cssInit() {

    jQuery("select").each(function () {
        jQuery(this).comboboxUtil();
    });

    jQuery("#queryBar").css("margin", "2px");
    jQuery("#queryBar").css("padding-right", "6px");
    jQuery("#jqGridContainer").css("margin", "2px");
    jQuery("#jqGridContainer").css("padding-right", "6px");

    // jQuery("select").selectmenu();
    // // jQuery("select").addClass( "overflow" );
    // jQuery("select").on("selectmenuchange", function(event, ui) {
    // jQuery(this).trigger("change");
    // });

    jQuery(".detailTable td:not(:has(:input))").css("text-align", "right");

    // jQuery("#queryBar").addClass("ui-tabs-nav");
    // jQuery("#queryBar").addClass("ui-helper-reset");
    // jQuery("#queryBar").addClass("ui-helper-clearfix");
    jQuery("#queryBar").addClass("ui-widget-header");
    // jQuery("#queryBar").addClass("ui-corner-all");

    jQuery(".queryFieldsContainer").addClass(" ui-widget-content ");

    jQuery(".edit_title").addClass("ui-state-default");
    jQuery(".edit_title").addClass("ui-corner-top");
    // jQuery(".edit_title").css("margin","2px 2px 2px 5px");
    // jQuery(".edit_title").css("padding","2px");
    jQuery(".edit_title")
        .css("font-family", "微软雅黑,​Verdana,​Arial,​sans-serif");
    // jQuery(".edit_title").addClass("ui-state-default");
    // jQuery(".edit_title").addClass("ui-corner-all");
    // jQuery(".edit_title").addClass("ui-button-text-only");
    // jQuery("#query_title").addClass("ui-tabs-nav");
    // jQuery("#queryBar").addClass("ui-tabs-nav");

    // // 自适应宽度，在css中已定义，使用jQuery必须放在file_upload之前
    // jQuery(".queryheader").find("input,select,textarea").css("width","100%");
    // jQuery(".queryheader").find("input,select,textarea").css("margin-left","1px");
    // jQuery(".queryheader").find("input,select,textarea").css("font-family","Verdana,
    // Geneva, sans-serif");
    // jQuery(".queryheader").find("input,select,textarea").css("text-align","center");

    // file_upload
    // if (uploadFileElement != null && uploadFileElement != '') {
    // jQuery("#file_div input").css("border", "1px solid blue");
    //
    // jQuery("#file_txt").css("margin", "1px");
    // jQuery("#file_txt").css("width", "100px");
    // jQuery("#file_txt").css("height", "24px");
    //
    // jQuery("#file_btn").css("margin", "1px");
    // jQuery("#file_btn").css("width", "30px");
    // jQuery("#file_btn").css("height", "24px");
    //
    // jQuery("#" + uploadFileElement).css("position", "absolute");
    // jQuery("#" + uploadFileElement).css("z-index", 12);
    // jQuery("#" + uploadFileElement).css("filter", "alpha(opacity:0)");
    // jQuery("#" + uploadFileElement).css("opacity", 0);
    // jQuery("#" + uploadFileElement).css("width", "130px");
    // jQuery("#" + uploadFileElement).css("height", "30px");
    // jQuery("#" + uploadFileElement).css("left",
    // jQuery("#file_txt").offset().left);
    // }
}
// ------------------------ 初始化 -------------------------

// -------------------------- 数据验证 ----------------------
function fieldValidate() {
    jQuery(":input").change(function () {
        jQuery(this).val(CtoH(jQuery(this).val()));
    })
}
// 全角转半角
function CtoH(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) == 12288) {
            result += String.fromCharCode(str.charCodeAt(i) - 12256);
            continue;
        }
        if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
            result += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else {
            result += String.fromCharCode(str.charCodeAt(i));
        }
    }
    return result;
}

function delNextElement(e) {
    if (e) {
        var next = e.nextSibling;
        var parent = e.parentNode;
        if (parent) {
            parent.removeChild(e);
        }
        delNextElement(next);
    }
}

function logout() {
    alert("用户登录超时，请重新登录");
    top.location.href = "/dxManager/login.jsp";
}

function parseEditOptionValue(item) {
    var str = '';
    if (item != 'undefined' && item != null) {
        for (var i = 0; i < item.length; i++) {
            if (i != item.length - 1) {
                str += item[i].value + ":" + item[i].name + ";";
            } else {
                str += item[i].value + ":" + item[i].name;
            }
        }
    }
    str += "";
    return str;
}

function getParameter(param) {
    var query = window.location.search;
    if (query = undefined || query == '') {
        return '';
    }
    if (param == undefined || param == null) {
        return query.substring(1, query.length);
    } else {
        var iLen = param.length;
        var iStart = query.indexOf(param);
        if (iStart == -1) {
            return "";
        }
        iStart += iLen + 1;
        var iEnd = query.indexOf("&", iStart);
        if (iEnd == -1) {
            // 返回所有
            return query.substring(iStart);
        }
        return query.substring(iStart, iEnd);
    }
}

// 根据queryBar中的内容创建查询条件，已测试对文本框和select有效
function queryInit() {
    jQuery("#queryBar :input").change(function () {
        toQuery();
    })
}

// 清空所有Input中的内容
function clearInput(settings) {
    var conf = {
        formName: "showForm",
        notClearFields: ""
    };
    jQuery.extend(conf, settings);
    var fields = conf.notClearFields.split(",");
    jQuery("#" + conf.formName + " :input").each(function () {
        var isClear = true;
        for (var i = 0; i < fields.length; i++) {
            if (jQuery(this).attr("id") === fields[i]) {
                isClear = false;
                break;
            }
        }
        if (isClear) {
            if (jQuery(this).is("input:radio")) {
            } else {
                jQuery(this).val("");
                if (jQuery(this).is("select")) {
                    jQuery(this).combobox("destroy");
                    jQuery(this).comboboxUtil();
                }
            }
        }
    });
}

// 根据jqGrid中选中的行，填充编辑对话框，已测试对文本框和select有效
function filledInputBySelectedRow(jqGridList) {
    if (jqGridList == undefined || jqGridList == null) {
        jqGridList = "jqGridList";
    }
    var row = jQuery("#" + jqGridList).jqGrid('getGridParam', 'selrow');
    if (row == null || row == 'undefined') {
        row = jqGrid_selRowId;
        if (row == undefined || row == null) {
            alert("请选择要编辑的记录！");
            return false;
        }
    }
    var rowDatas = jQuery("#jqGridList").jqGrid('getRowData', row);
    filledInputByItem(rowDatas);
    return true;
}

function filledInputByItem(item) {
    before_filledInput(item);
    if (item != null) {
        for (var i = 0; i < jqGridConf.colModel.length; i++) {
            if (jqGridConf.colModel[i].edittype == 'ignore') {
                continue;
            } else if (jqGridConf.colModel[i].edittype != undefined
                && jqGridConf.colModel[i].edittype == 'select') {
                eval(jqGridConf.colModel[i].cascadefun);
                var elem = jQuery("#" + jqGridConf.colModel[i].name);
                if (elem.length > 0) {
                    elem.combobox("destroy");
                    setSelectValue(document
                            .getElementById(jqGridConf.colModel[i].name),
                        item[jqGridConf.colModel[i].name]);
                    elem.comboboxUtil();
                    elem.refreshCascade();
                }
            } else if (jqGridConf.colModel[i].edittype != undefined
                && jqGridConf.colModel[i].edittype == 'check') {
                var elem = jQuery("#" + jqGridConf.colModel[i].name);
                item[jqGridConf.colModel[i].name] == '1' ? elem.prop("checked",
                        true) : elem.removeAttr("checked");
            } else {
                var elem = jQuery("#" + jqGridConf.colModel[i].name);
                if (elem.length > 0) {
                    if (elem.is("select")) {
                        elem.combobox("destroy");
                        if (!setSelectValue(document
                                    .getElementById(jqGridConf.colModel[i].name),
                                item[jqGridConf.colModel[i].name])) {
                            elem
                                .append("<option value='"
                                    + item[jqGridConf.colModel[i].name]
                                    + "'>"
                                    + item[jqGridConf.colModel[i].selectDisplayFieldName]
                                    + "</option>");
                            elem.val(item[jqGridConf.colModel[i].name]);
                        }
                        elem.comboboxUtil();
                    } else {
                        elem.popUpTree("setValue", jqGridConf.colModel, item);
                        elem.val(item[jqGridConf.colModel[i].name]);
                    }
                    elem.refreshCascade();
                } else {
                    var form = jQuery("#" + conf.formName);
                    form.append("<input type='hidden' id='"
                        + jqGridConf.colModel[i].name + "' value='"
                        + item[jqGridConf.colModel[i].name] + "'/>");
                }
            }
        }
    }
    after_filledInput(item);
}
function after_filledInput(item) {
}
function before_filledInput(item) {
}

function repeatedSubmitInit() {
    jQuery("#" + conf.formName + " :input").on("change", function () {
        formHasChanged = true;
    });
}

function loadingDlgInit(contianerName) {
    jQuery(document.body).append("<div id='loadingDiv'></div>");
    jQuery("#loadingDiv").dialog({
        autoOpen: false,
        width: 300,
        height: 60,
        model: true,
        resizable: false
    });
    jQuery('#loadingDiv').parent().find('.ui-dialog-titlebar-close').hide();
}

function loadingDlgOpen() {
    jQuery("#loadingDiv").dialog("option", "title", "正在加载......")
        .dialog("open");
}

function loadingDlgClose() {
    // alert('dd');
    if (jQuery("#loadingDiv").length > 0) {
        jQuery("#loadingDiv").dialog("close");
    }
}

function getFormMap() {
    var o = new Object();
    for (var i = 0; i < jqGridConf.colModel.length; i++) {
        if (jqGridConf.colModel[i].edittype == 'ignore' || jqGridConf.colModel[i].savetype == 'ignore') {
            continue;
        }
        var obj = jQuery("#" + jqGridConf.colModel[i].name);
        if (obj.length > 0) {
            var value = jQuery("#" + jqGridConf.colModel[i].name).val();
            if (jqGridConf.colModel[i].inputType == 'checkbox') {
                if (jQuery("#" + jqGridConf.colModel[i].name).is(":checked")) {
                    value = '1';
                } else {
                    value = '0';
                }

            }
            if (value == undefined || value == null || value == '') {
                if (jqGridConf.colModel[i].defaultValue != undefined) {
                    value = jqGridConf.colModel[i].defaultValue;
                    // alert(jqGridConf.colModel[i].name + ":" + value);
                }
            }
            eval("o." + jqGridConf.colModel[i].name + "='"
                + value + "'");
        }
    }
    return o;
}

function extendPagerReq(pagerReqSet) {
    jQuery.extend(pagerReq, pagerReqSet);
    if (pagerReqSet != undefined && pagerReqSet.param != undefined
        && pagerReqSet.param.length > 0) {
        for (var i = 0; i < pagerReqSet.param.length; i++) {
            pagerReq.param.push(pagerReqSet.param[i]);
        }
    }
}

function extendQueryList(queryListSet) {
    jQuery.extend(queryList, queryListSet);
    if (queryListSet != undefined && queryListSet.length > 0) {
        for (var i = 0; i < queryListSet.length; i++) {
            queryList.push(queryListSet[i]);
        }
    }
}

function setQueryListToPagerReq(queryListSet) {
    if (queryListSet != undefined && queryListSet.length > 0) {
        for (var i = 0; i < queryListSet.length; i++) {
            pagerReq.param.push(queryListSet[i]);
        }
    }
}

function bindToCheckExist() {
    jQuery("#" + conf.idFieldName).on('change', function () {
        ajax({
            url: actionname + "_findById",
            data: {
                reqJsonStr: '{"' + conf.idFieldName + '":"' + jQuery(this).val() + '"}'
            },
            success: function (item) {
                if (item.status == 1) {
                    alert('记录已存在');
                    filledInputByItem(item.datas[0]);
                    setReadOnlyFiledsOnModify();
                }
            },
            error: function (item) {
                //alert('查询记录失败！');
            }
        });
    });
}