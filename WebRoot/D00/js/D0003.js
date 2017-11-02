var jqGridConf = {
    caption: "用户列表",
    colNames: ['登录名', '真实姓名', '部门', '部门', '角色 ', '角色 ', '状态'],
    colModel: [{
        name: 'userno',
        index: 'userno',
        width: 90
    }, {
        name: 'username',
        index: 'username',
        width: 100
    }, {
        name: 'bmdm',
        index: 'bmdm',
        hidden: true
    }, {
        name: 'bmmc',
        index: 'bmmc',
        width: 200
    }, {
        name: 'roleno',
        index: 'roleno',
        hidden: true
    }, {
        name: 'rolename',
        index: 'rolename',
        width: 90
    }, {
        name: 'deltag',
        index: 'deltag',
        width: 100,
        formatter: function (cellvalue, options, rowObject) {
            if (cellvalue == '0') {
                return "正常";
            } else if (cellvalue == '1') {
                return "已锁定";
            } else {
                return "";
            }
        },
        unformat: function (cellvalue, options, rowObject) {
            if (cellvalue == '正常') {
                return "0";
            } else if (cellvalue == '已锁定') {
                return "1";
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
        queryBarHeader_btns: [{
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
            id: 'resetBtn',
            value: '重置密码',
            active: true,
            bind: onResetBtn
        }, {
            id: 'cleBtn',
            value: '清空',
            active: true,
            bind: onCleBtn
        }],
        queryBarHeader_dept: {// 设置部门选择器
            open: true,// 显示部门选择器
            fieldName: 'query_bmmc',// 选择器对应的input名称，在绑定popupTree时需要这个id
            fieldDisplayName: '部门'// 选择器的名称，将在页面上input之前显示
        },
        readOnlyFields: ['userno'],
        idFieldName: 'userno',
        checkExist: true
    });

    // ===================================================
    // 部门

    ajax({
        url: "deptInfoAction!getDeptsByAuth.action",
        success: function (item) {
            jQuery("#query_bmmc").popupTree({
                id: "query_bmmc_popup",
                dmFieldName: "query_bmdm",
                displayFieldName: "query_bmmc",
                type: "radioTree",// "multTree","popup"
                title: "选择部门",
                data: item.datas
            });

            jQuery("#bmmc").popupTree({
                id: "bmmc_popup",
                idFieldName: "bmdm",
                dmFieldName: 'bmdm',
                displayFieldName: "bmmc",
                type: "radioTree",// "multTree","popup"
                title: "选择部门",
                data: item.datas
            })
        }
    });

    // 部门
    // ===================================================

    setRole_Sel();

    // d0002mgr.getSOMRoles(function(item) {
    // var sel1 = jQuery("#query_roleno");
    // var sel2 = jQuery("#roleno");
    // if (item != null) {
    // sel1.empty();
    // sel2.empty();
    // sel1.html("<option value=''>--所有角色--</option>");
    // sel2.html("<option value=''>--所有角色--</option>");
    // for (var i = 0; i < item.length; i++) {
    // sel1.append("<option value='" + item[i].value + "'>"
    // + item[i].name + "</option");
    // sel2.append("<option value='" + item[i].value + "'>"
    // + item[i].name + "</option");
    // }
    // } else {
    // sel1.html("<option value=''>--暂无角色--</option>");
    // sel2.html("<option value=''>--暂无角色--</option>");
    // }
    // });

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

function setRole_Sel() {
    ajax({
        url: "D00_02action_getSOMRoles",
        data: {
            reqJsonStr: JSON.stringify({})
        },
        async: false,
        success: function (item) {
            var sel1 = jQuery("#query_roleno");
            var sel2 = jQuery("#roleno");
            if (item.datas != null) {
                sel1.empty();
                sel2.empty();
                sel1.html("<option value=''>--所有角色--</option>");
                sel2.html("<option value=''>--所有角色--</option>");
                for (var i = 0; i < item.datas.length; i++) {
                    sel1.append("<option value='" + item.datas[i].value + "'>"
                        + item.datas[i].name + "</option");
                    sel2.append("<option value='" + item.datas[i].value + "'>"
                        + item.datas[i].name + "</option");
                }
            }
        },
        error: function (item) {
            var sel1 = jQuery("#query_roleno");
            var sel2 = jQuery("#roleno");
            sel1.html("<option value=''>--暂无角色--</option>");
            sel2.html("<option value=''>--暂无角色--</option>");
        }
    });
}