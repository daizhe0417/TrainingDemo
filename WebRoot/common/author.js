/**
 * Created by venice on 2016/12/20.
 */
var authNum = 1;
var authorConf = {
    hasIsFirst: false,
    isReadOnly: false,
    authFieldName: ''
};
function authorInit(settings) {
    jQuery.extend(authorConf, settings || {});

    if (!authorConf.isReadOnly) {
        jQuery("#addAuthorBtn").button({
            icons: {
                primary: "ui-icon-plusthick"
            }
        });
        jQuery("#deleteAuthorBtn").button({
            icons: {
                primary: "ui-icon-minusthick"
            }
        });

        setYgnoAutoComplete("author_1");

        jQuery("#addAuthorBtn").on("click", function () {
            if (authNum >= 10) {
                alert('最多添加10个' + authorConf.authFieldName);
                return false;
            }
            addAuthorRow();
            return false;
        });

        jQuery("#deleteAuthorBtn").on("click", function () {
            if (authNum <= 1) {
                alert('至少保留一个' + authorConf.authFieldName);
                return false;
            }
            authNum--;
            jQuery("#authorContent tr:last").remove();
            formHasChanged = true;
            return false;
        });
    }
}

function addAuthorRow() {
    authNum++;
    if (authorConf.isReadOnly) {
        var isFirstStr = "<td style=\"width:80px;text-align: right\">第一" + authorConf.authFieldName + "：</td>"
            + "<td><input type='text' id=\"firstAuthor_" + authNum + "\" readonly/></td>";
        jQuery("#authorContent").append("<tr>"
            + "<td>" + authNum + ".</td>"
            + "<td style=\"width:80px;text-align: right\">" + authorConf.authFieldName + "：</td>"
            + "<td><input id=\"author_" + authNum + "\" size=\"20\" readonly/></td>"
            + (authorConf.hasIsFirst ? isFirstStr : "")
            + "</tr>");
    } else {
        var isFirstStr = "<td style=\"width:80px;text-align: right\">第一" + authorConf.authFieldName + "：</td>"
            + "<td><select id=\"firstAuthor_" + authNum + "\" style=\"width:105px\">"
            + "<option value=\"0\">否</option>"
            + "<option value=\"1\">是</option>"
            + "</select></td>";
        jQuery("#authorContent").append("<tr>"
            + "<td>" + authNum + ".</td>"
            + "<td style=\"width:80px;text-align: right\">" + authorConf.authFieldName + "：</td>"
            + "<td><input id=\"author_" + authNum + "\" size=\"20\"/></td>"
            + (authorConf.hasIsFirst ? isFirstStr : "")
            + "</tr>");

        if (authorConf.hasIsFirst) {
            jQuery("#firstAuthor_" + authNum).comboboxUtil();
        }
        setYgnoAutoComplete("author_" + authNum);
    }
    formHasChanged = true;
}

function beforeToSave() {
    var ygnos = new Array();
    var authorNames = new Array();
    var isFirsts = new Array();
    for (var i = 1; i <= authNum; i++) {
        var s = jQuery("#author_" + i).val();
        if (s != undefined && s != null && s != '') {
            var ss = s.split("  |  ");
            if (ss.length > 1) {
                ygnos.push(ss[0]);
                authorNames.push(ss[1]);
            } else {
                ygnos.push(' ');
                authorNames.push(s);
            }
        }
        if (authorConf.hasIsFirst) {
            isFirsts.push(jQuery("#firstAuthor_" + i).val());
        }
    }
    jQuery("#ygnos").val(ygnos.join(","));
    jQuery("#authorNames").val(authorNames.join(","));
    if (authorConf.hasIsFirst) {
        jQuery("#isFirsts").val(isFirsts.join(","));
    }
    // alert(jQuery("#ygnos").val());
    // alert(jQuery("#authorNames").val());
    // alert(jQuery("#isFirsts").val());
}

function after_filledInput(item) {
    clearAuthTable();
    var ygnos = item['ygnos'].split(",");
    var authorNames = item['authorNames'].split(",");
    var isFirsts;
    if (authorConf.hasIsFirst) {
        isFirsts = item['isFirsts'].split(",");
    }

    if (ygnos == undefined || ygnos.length == 0
        || authorNames == undefined || authorNames.length == 0) {
        return false;
    }
    if (authorConf.hasIsFirst) {
        if (isFirsts == undefined || isFirsts.length == 0) {
            return false;
        }
    }
    var authorStr = ygnos[0] != undefined && ygnos[0] != ''&& ygnos[0] != ' ' ? ygnos[0] + "  |  " + authorNames[0] : authorNames[0];
    jQuery("#author_1").val(authorStr);
    if (authorConf.hasIsFirst) {
        var elem = jQuery("#firstAuthor_1");
        if (elem.is("select")) {
            elem.combobox("destroy");
            setSelectValue(document
                .getElementById("firstAuthor_1"), isFirsts[0]);
            elem.comboboxUtil();
        } else {
            if (isFirsts[0] == 1) {
                elem.val('是');
            } else {
                elem.val('否');
            }
        }
    }
    if (authorNames.length > 1) {
        for (var i = 1; i < authorNames.length; i++) {
            addAuthorRow();
            var authorStr = ygnos[i] != ' ' ? ygnos[i] + "  |  " + authorNames[i] : authorNames[i];
            jQuery("#author_" + (i + 1)).val(authorStr);
            if (authorConf.hasIsFirst) {
                var elem = jQuery("#firstAuthor_" + (i + 1));
                if (elem.is("select")) {
                    elem.combobox("destroy");
                    setSelectValue(document
                        .getElementById("firstAuthor_" + (i + 1)), isFirsts[i]);
                    elem.comboboxUtil();
                } else {
                    if (isFirsts[i] == 1) {
                        elem.val('是');
                    } else {
                        elem.val('否');
                    }
                }
            }
        }
    }

    var elem = jQuery("#isPersonShowDisp");
    if (elem.length > 0) {
        elem.val(item['isPersonShow'] == 0 ? "否" : "是");
    }

    fillSelectDisp(item);
}

function afterOnAddBtn() {
    clearAuthTable();
}

function clearAuthTable() {
    authNum = 1;
    jQuery("#authorContent tr:not(:first)").remove();
}

function fillSelectDisp(item) {
}