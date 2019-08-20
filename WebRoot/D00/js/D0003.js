var dzGridConf = {
    columns: [{
        name: '用户类型',
        fieldName: 'uType',
        width: 70,
        hidden: true
    }, {
        name: '登录名',
        fieldName: 'userNo',
        width: 90,
        readonly: true
    }, {
        name: '姓名',
        fieldName: 'userName',
        width: 100
    }, {
        name: '身份类型',
        fieldName: 'roleName',
        width: 100
    }, {
        name: 'roleId',
        fieldName: 'roleId',
        hidden: true
    }, {
        name: '部门|班级',
        fieldName: 'bmmc',
        width: 90
    }, {
        name: 'bmId',
        fieldName: 'bmId',
        hidden: true
    }, {
        name: '状态',
        fieldName: 'deltag',
        width: 80,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue == '0') {
                return "正常";
            } else if (cellvalue == '1') {
                return "已锁定";
            } else if (cellvalue == '2') {
                return "待审核";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue == '正常') {
                return "0";
            } else if (cellvalue == '已锁定') {
                return "1";
            } else if (cellvalue == '待审核') {
                return "2";
            } else {
                return "";
            }
        }
    }]
};

var actionname = "D00_03action";
var bmList = [];
var bjList = [];
jQuery(document).ready(function () {
    commonInit({
        detailDlgTitle: '用户',
        deleteType: 'byObject',
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
            id: 'lockBtn',
            value: '锁定用户',
            active: true,
            bind: onLockBtn
        }, {
            id: 'cleBtn',
            value: '清空',
            active: true,
            bind: onCleBtn
        }, {
            id: 'resetBtn',
            value: '重置密码',
            active: true,
            bind: onResetBtn
        }, {
            id: 'unLockBtn',
            value: '激活用户',
            active: true,
            bind: onUnLockBtn
        }],
        readOnlyFields: ['userNo'],
        idFieldName: 'userNo',
        checkExist: true,
        validateSetting: {
            rules: {
                userno: {
                    required: true,
                    minlength: 4,
                    maxlength: 8,
                    number: true
                },
                username: {
                    required: true,
                    minlength: 2,
                    maxlength: 12
                },
                roleno: {
                    required: true
                },
                bmmc: {
                    required: true
                }
            }
        }
    });

    $("#roleId").on("change", function () {
        console.log('change' + JSON.stringify(bmList) + JSON.stringify(bjList));
        if ($(this).val() === "1") {
            $("#bm_lb").html("部门");
            var sel = $("#bmId");
            if (bmList.length > 0) {
                sel.html("<option value=''>--请选择部门--</option>");
                for (var i = 0; i < bmList.length; i++) {
                    sel.append('<option value="' + bmList[i].value + '">' + bmList[i].name + '</option>')
                }
            } else {
                sel.html("<option value=''>--暂无部门信息--</option>");
            }
        } else {
            $("#bm_lb").html("班级");
            var sel = $("#bmId");
            if (bjList.length > 0) {
                sel.html("<option value=''>--请选择班级--</option>");
                for (var i = 0; i < bjList.length; i++) {
                    sel.append('<option value="' + bjList[i].value + '">' + bjList[i].name + '</option>')
                }
            } else {
                sel.html("<option value=''>--暂无班级信息--</option>");
            }
        }
    });

    // $("#bmId").select2();

    ajax({
        url: "D00_01action_getAllSOMDepts",
        data: {
            reqJsonStr: JSON.stringify({})
        },
        success: getAllSOMDeptsCallback,
        error: getAllSOMDeptsCallback
    });

    ajax({
        url: "D00_21action_getSOMClasses",
        data: {
            reqJsonStr: JSON.stringify({})
        },
        success: getSOMClassesCallback,
        error: getSOMClassesCallback
    });

});

function after_filledInput(item) {
    if (item.roleId === "1") {
        $("#bm_lb").html("部门");
        var sel = $("#bmId");
        if (bmList.length > 0) {
            sel.html("<option value=''>--请选择部门--</option>");
            for (var i = 0; i < bmList.length; i++) {
                sel.append('<option value="' + bmList[i].value + '">' + bmList[i].name + '</option>')
            }
        } else {
            sel.html("<option value=''>--暂无部门信息--</option>");
        }
        setSelectValue(document
            .getElementById("bmId"), item.bmId);
    } else {
        $("#bm_lb").html("班级");
        var sel = $("#bmId");
        if (bjList.length > 0) {
            sel.html("<option value=''>--请选择班级--</option>");
            for (var i = 0; i < bjList.length; i++) {
                sel.append('<option value="' + bjList[i].value + '">' + bjList[i].name + '</option>')
            }
        } else {
            sel.html("<option value=''>--暂无班级信息--</option>");
        }
        setSelectValue(document
            .getElementById("bmId"), item.bmId);
    }
}

function onLockBtn() {
    var row = $("#" + conf.dzGridContainer).dzGrid("getCurrentSelectedRowId");
    console.log(JSON.stringify(row));
    if (row == null || row == 'undefined' || row == "") {
        DzConfirm.alert("请先选择要锁定的用户！");
        // alert('请先选择要锁定的用户！');
        return false;
    }
    var warnMsg = "确认要锁定用户吗？";
    DzConfirm.confirm(warnMsg).click(function (item) {
        if (item) {
            var rowDatas = $("#" + conf.dzGridContainer).dzGrid("getRowData", row);
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
    });
}

function deleteCallBack(item) {
    if (item.status == 1) {
        // alert("操作成功！");
        DzConfirm.alert("操作成功！");
        // return false;
    } else {
        // alert("操作失败！");
        DzConfirm.alert("操作失败！");
    }
    toQuery();
}

function onResetBtn() {
    var row = $("#" + conf.dzGridContainer).dzGrid("getCurrentSelectedRowId");
    if (row == null || row == 'undefined') {
        // alert('请先选择要重置密码的用户！');
        DzConfirm.alert("请先选择要重置密码的用户！");
        return false;
    }
    var rowDatas = $("#" + conf.dzGridContainer).dzGrid("getRowData", row);
    var warnMsg = "确认要重置用户[ " + rowDatas["userName"] + " ]的密码吗？";
    DzConfirm.confirm(warnMsg).click(function (item) {
        if (item) {
            ajax({
                url: "D00_03action_resetPasswd",
                data: {
                    reqJsonStr: JSON.stringify({
                        userNo: rowDatas["userNo"]
                    })
                },
                success: resetPasswdCallBack,
                error: resetPasswdCallBack
            });
        }
    });
}

function resetPasswdCallBack(item) {
    if (item.status == '1') {
        // alert('重置密码成功');
        DzConfirm.alert("重置密码成功！");
    } else {
        // alert('重置密码失败');
        DzConfirm.alert("重置密码失败！");
    }
}

function onUnLockBtn() {
    var row = $("#" + conf.dzGridContainer).dzGrid("getCurrentSelectedRowId");
    if (row == null || row == 'undefined') {
        // alert('请先选择要激活的用户！');
        DzConfirm.alert("请先选择要激活的用户！");
        return false;
    }
    var warnMsg = "确认要激活吗？";
    DzConfirm.confirm(warnMsg).click(function (item) {
        if (item) {
            var rowDatas = $("#" + conf.dzGridContainer).dzGrid("getRowData", row);
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
                url: actionname + "_unLock",
                data: rm,
                success: deleteCallBack,
                error: deleteCallBack
            });
        }
    });
}

function getAllSOMDeptsCallback(item) {
    console.log(JSON.stringify(item));
    if (item.datas != null) {
        bmList = item.datas;
    } else {
        bmList = [];
    }
}

function getSOMClassesCallback(item) {
    console.log(JSON.stringify(item));
    if (item.datas != null) {
        bjList = item.datas;
    } else {
        bjList = [];
    }
}