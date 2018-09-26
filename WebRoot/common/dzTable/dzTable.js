(function ($) {

    // 构造方法
    $.fn.initTable = function (settings) {
        var defaultSettings = {
            title: "",
            columns: []
        };

        var me = $(this);
        // console.log(JSON.stringify(me));
        var meId = me.attr("id");

        // 用传进来的参数覆盖默认，没传则保留
        me[0].dzDataTableConf = $.extend(defaultSettings, settings || {});
        if (me[0].dzDataTableConf.id == undefined || me[0].dzDataTableConf.id == '') {
            me[0].dzDataTableConf.id = meId;
        }

        me.addClass("dataTables_wrapper form-inline dt-bootstrap");
        console.log("initTable");

        me.append('<div class="row">\n' +
            '                <div class="col-sm-6">\n' +
            '                    <div class="dataTables_length">\n' +
            '                        <label>Show\n' +
            '                            <select id="' + meId + '_length" name="example1_length" class="form-control input-sm">\n' +
            '                                <option value="10">10</option>\n' +
            '                                <option value="25">25</option>\n' +
            '                                <option value="50">50</option>\n' +
            '                                <option value="100">100</option>\n' +
            '                            </select>\n' +
            '                            entries\n' +
            '                        </label>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="col-sm-6">\n' +
            '                    <div id="' + meId + '_filter" class="dataTables_filter">\n' +
            '                        <label>Search:\n' +
            '                            <input type="search" class="form-control input-sm" placeholder="">\n' +
            '                        </label>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>');

        me.append('<div class="row">\n' +
            '                <div class="col-sm-12">\n' +
            '                    <table id="' + meId + '_table" class="table table-bordered table-striped dataTable">' +
            '                    </table>' +
            '                </div>' +
            '            </div>');

        var table = $("#" + meId + "_table");
        if (me[0].dzDataTableConf.columns) {
            var columns = me[0].dzDataTableConf.colModel;
            table.append('<thead><tr role="row"></tr></thead>');
            var tr = table.find("thead tr");
            console.log(JSON.stringify(columns));
            for (var i = 0; i < columns.length; i++) {
                tr.append('<th class="sorting">' + columns[i].name + '</th>');
            }
        }

        table.append('<tbody>\n' +
            '                        <tr role="row" class="odd">\n' +
            '                            <td class="sorting_1">Gecko</td>\n' +
            '                            <td>Firefox 1.0</td>\n' +
            '                            <td>Win 98+ / OSX.2+</td>\n' +
            '                            <td>1.7</td>\n' +
            '                            <td>A</td>\n' +
            '                        </tr>');


        // var titleHtml = "";
        // var popupHtml = jQuery("<div id='" + me[0].popupTreeconf.id
        //     + "_div' class='modal'>" + titleHtml + "<div id='"
        //     + me[0].popupTreeconf.id + "_content'>加载中……</div></div>");
        //
        // // 添加popup
        // jQuery('body').append(popupHtml);

        $('body').append('<div class="modal" id="' + me[0].popupTreeconf.id + '_div" style="display: none;">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">×</span></button>' +
            '<h4 id="' + me[0].popupTreeconf.id + '_title' + '" class="modal-title">选择' + me[0].popupTreeconf.title + '</h4>' +
            '</div>' +
            '<div class="modal-body" id="' + me[0].popupTreeconf.id + '_content"></div>' +
            '<div class="modal-footer">' +
            '<button type="button" id="' + me[0].popupTreeconf.id + 'CloseBtn" class="btn btn-default pull-left" data-dismiss="modal">关闭</button>' +
            '<button type="button" id="' + me[0].popupTreeconf.id + 'ConfirmBtn" class="btn btn-primary">确定</button>' +
            '</div>' +
            '</div>' +
            '</div>');

        // 查询部门数据列表
        // 生成树形结构
        if (me[0].popupTreeconf.data != null) {
            var o = {
                sourceFolder: "../util/tree/",
                // checkBox : true,
                urlClosed: true,
                data: me[0].popupTreeconf.data,
                menuidFieldName: me[0].popupTreeconf.menuidFieldName,
                textFieldName: me[0].popupTreeconf.textFieldName,
                urlFieldName: me[0].popupTreeconf.urlFieldName,
                abbreOn: false
            };
            jQuery("#" + me[0].popupTreeconf.id + "_content").html("");
            jQuery("#" + me[0].popupTreeconf.id + "_content").treemenu(o);
        } else {
            jQuery("#" + me[0].popupTreeconf.id + "_content").html("");
            jQuery("#" + me[0].popupTreeconf.id + "_content").html(
                "暂无" + me[0].popupTreeconf.title + "数据......");
        }

        // 初始化Dialog
        // jQuery("#" + me[0].popupTreeconf.id + "_div").dialog({
        // 	autoOpen : false,
        // 	width : me[0].popupTreeconf.width,
        // 	height : me[0].popupTreeconf.height,
        // 	zIndex : 900,
        // 	position : {
        // 		my : "left top",
        // 		at : "left bottom",
        // 		of : me
        // 	},
        // 	title : "选择" + me[0].popupTreeconf.title,
        // 	resizable : false
        // });
        // $("#" + me[0].popupTreeconf.id + "_div").modal("show");

        // var dialog = jQuery("#" + me[0].popupTreeconf.id + "_div");

        // 点击绑定元素打开对话框，停止事件冒泡
        me.on("click", function (e) {
            // dialog.dialog("open");
            $("#" + me[0].popupTreeconf.id + "_div").modal("show");
            e.stopPropagation();
        });

        $("#" + me[0].popupTreeconf.id + "ConfirmBtn").on("click", function () {
            $("#" + me[0].popupTreeconf.id + "_div").modal("hide");
        })

        // 点击超链接时，将选中的数据显示到绑定元素上，添加隐藏的id输入域
        jQuery("#" + me[0].popupTreeconf.id + "_content").on(
            "click",
            "a",
            function () {
                // if (jQuery(this).parent().attr("class") ==
                // 'child') {
                // var id = jQuery(this).attr("id");
                var id = "";
                if (me[0].popupTreeconf.idFieldName
                    && me[0].popupTreeconf.idFieldName != "") {
                    id = jQuery(this).attr("id");
                    // var idObj = me.parent().find(
                    //     "#" + me[0].popupTreeconf.idFieldName);
                    var idObj = $("#" + me[0].popupTreeconf.idFieldName);
                    if (idObj.length > 0) {
                        idObj.val(id);
                        // 判断是否给了新值，是的话触发change事件，非页面上用户操作导致的input值修改默认不会触发change事件
                        var oldValue = idObj.data("value");
                        if (oldValue != undefined && oldValue == id) {
                        } else {
                            idObj.data("value", id);
                            idObj.trigger("change");
                        }
                    } else {
                        me.parent().append(
                            "<input type='hidden' id='"
                            + me[0].popupTreeconf.idFieldName
                            + "' name='"
                            + me[0].popupTreeconf.idFieldName
                            + "' value='" + id + "'/>");
                    }
                }
                if (me[0].popupTreeconf.dmFieldName
                    && me[0].popupTreeconf.dmFieldName != "") {
                    id = jQuery(this).parent().attr("id");
                    // var dmObj = me.parent().find(
                    //     "#" + me[0].popupTreeconf.dmFieldName);
                    var dmObj = $("#" + me[0].popupTreeconf.dmFieldName);
                    if (dmObj.length > 0) {
                        dmObj.val(id);
                        // 判断是否给了新值，是的话触发change事件，非页面上用户操作导致的input值修改默认不会触发change事件
                        var oldValue = dmObj.data("value");
                        if (oldValue != undefined && oldValue == id) {
                        } else {
                            dmObj.data("value", id);
                            dmObj.trigger("change");
                        }
                    } else {
                        me.parent().append(
                            "<input type='hidden' id='"
                            + me[0].popupTreeconf.dmFieldName
                            + "' name='"
                            + me[0].popupTreeconf.dmFieldName
                            + "' value='" + id + "'/>");
                    }
                }
                me.val(jQuery(this).html());
                var oldValue = me.data("value");
                if (oldValue != undefined && oldValue == id) {
                } else {
                    me.data("value", id);
                    me.trigger("change");
                }
                // dialog.dialog("close");
                // }
            });

        // 点击弹出层本身不关闭
        jQuery("#" + me[0].popupTreeconf.id + "_div").on("click", function (e) {
            e.stopPropagation();
        });

        // 点击页面其他部位关闭对话框
        jQuery(document).on("click", function (e) {
            $("#" + me[0].popupTreeconf.id + "_div").modal("hide");
            // if (dialog) {
            //     dialog.dialog("close");
            //     me.data("value", null);
            // }
        });

    };

})(jQuery);
