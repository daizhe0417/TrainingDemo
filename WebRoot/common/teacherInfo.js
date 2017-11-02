/**
 * Created by venice on 2016/12/18.
 */
var teacherInfoList;
function setYgnoSelectElem(id) {
    ajax({
        url: "D02_01action_getAllSOMTeachers",
        data: {
            reqJsonStr: {}
        },
        success: function (item) {
            if (item.status == '1') {
                var datas = item.datas;
                if (datas != null) {
                    teacherInfoList = datas;
                    var sel = jQuery("#" + id);
                    for (var i = 0; i < datas.length; i++) {
                        sel.append("<option value='" + datas[i].value + "'>" + datas[i].name + "</option>");
                    }
                }
            }
        },
        error: function (item) {
            alert('查询记录失败！');
        }
    });
}
function setYgnoAutoComplete(id) {
    if (teacherInfoList == undefined) {
        setYgnoAutoCompleteRemote(id);
    } else {
        setAutoComplete(id);
    }
    return false;
}

function setYgnoAutoCompleteRemote(id) {
    ajax({
        url: "D02_01action_getAllSOMTeachers",
        data: {
            reqJsonStr: {}
        },
        success: function (item) {
            if (item.status == '1') {
                var datas = item.datas;
                if (datas != null) {
                    teacherInfoList = datas;
                    setAutoComplete(id);
                }
            }
        },
        error: function (item) {
            alert('查询记录失败！');
        }
    });
}

function setAutoComplete(id) {
    var elem = jQuery("#" + id);
    var ygInfoList = new Array();
    for (var i = 0; i < teacherInfoList.length; i++) {
        ygInfoList.push(teacherInfoList[i].name);
    }
    elem.autocomplete({
        source: ygInfoList
    })
}
