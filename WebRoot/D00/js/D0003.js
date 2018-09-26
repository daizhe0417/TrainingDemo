var jqGridConf = {
    caption: "用户列表",
    colNames: ['用户类型', '登录名', '姓名', '工作单位', '职务', '联系电话', '邮箱', '名片', '状态'],
    colModel: [{
        name: 'uType',
        index: 'uType',
        width: 70,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue == '0') {
                return "后台";
            } else if (cellvalue == '1') {
                return "前台";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue == '后台') {
                return "0";
            } else if (cellvalue == '前台') {
                return "1";
            } else {
                return "";
            }
        }
    }, {
        name: 'userno',
        index: 'userno',
        width: 90,
        readonly: true
    }, {
        name: 'username',
        index: 'username',
        width: 100
    }, {
        name: 'company',
        index: 'company',
        width: 200
    }, {
        name: 'title',
        index: 'title',
        width: 90
    }, {
        name: 'mobile',
        index: 'mobile',
        width: 100
    }, {
        name: 'email',
        index: 'email',
        width: 200
    }, {
        name: 'businessCard',
        index: 'businessCard',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue != undefined && cellvalue != '') {
                return "<a href='../" + cellvalue.replace("\\","\/") + "' target='_blank'><i class='fa fa-fw fa-file-text-o'></i></a>";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue != "") {
                return $(cellvalue).attr("realpath");
            } else {
                return "";
            }
        }
    }, {
        name: 'deltag',
        index: 'deltag',
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
        readOnlyFields: ['userno'],
        idFieldName: 'userno',
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

    $("#iptBusinessCardUploadFile").dzFileUpload({
        uploadExtraData: {
            "fileType": "mp"
        },
        inputFiled: "businessCard",
        allowedFileExtensions: ["jpg", "jpeg","png"]
    });
});

function onLockBtn() {
    var row = jQuery("#jqGridList").jqGrid('getGridParam', 'selrow');
    if (row == null || row == 'undefined') {
        alert('请先选择要锁定的用户！');
        return false;
    }
    var warnMsg = "确认要锁定用户吗？";
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
        alert("操作成功！");
    } else {
        alert("操作失败！");
    }
    toQuery();
}

function onResetBtn() {
    var row = jQuery("#jqGridList").jqGrid('getGridParam', 'selrow');
    if (row == null || row == 'undefined') {
        alert('请先选择要重置密码的用户！');
        return false;
    }
    var rowDatas = jQuery("#jqGridList").jqGrid('getRowData', row);
    var warnMsg = "确认要重置用户[ " + rowDatas["username"] + " ]的密码吗？";
    if (confirm(warnMsg)) {
        ajax({
            url: "D00_03action_resetPasswd",
            data: {
                reqJsonStr: JSON.stringify({
                    userno: rowDatas["userno"]
                })
            },
            success: resetPasswdCallBack,
            error: resetPasswdCallBack
        });
    }
}

function resetPasswdCallBack(item) {
    if (item.status == '1') {
        alert('重置密码成功');
    } else {
        alert('重置密码失败');
    }
}

function onUnLockBtn() {
    var row = jQuery("#jqGridList").jqGrid('getGridParam', 'selrow');
    if (row == null || row == 'undefined') {
        alert('请先选择要激活的用户！');
        return false;
    }
    var warnMsg = "确认要激活吗？";
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
            url: actionname + "_unLock",
            data: rm,
            success: deleteCallBack,
            error: deleteCallBack
        });
    }

}