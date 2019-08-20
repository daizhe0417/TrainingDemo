/**
 * dzCompare 0.0.1
 * a compare plugin base on jQuery and bootstrap
 * @author : venice
 * @Date : 2019-03-08
 */
;(function ($, window, document, undefined) {
    "use strict";
    $.dzCompare = $.dzCompare || {};
    $.extend($.dzCompare, {
        // 构造方法
        init: function (settings) {
            var defaultSettings = {
                title: "对比",
                maxSize: 4,
                itemList: [],      // 已选中的行号，仅在允许多选时有效
                toCompare: function (itemList) {
                },
                addItem: function (item) {
                },
                removeItem: function (id) {
                },
                clearAllItems: function () {
                },
                getItemList: function () {
                },
                getMaxSize: function () {
                }
            };

            var me = $(this[0]);

            if (me == undefined || me[0] == undefined) {
                return false;
            }
            // console.log(JSON.stringify(me));
            var meId = me.attr("id");

            // 用传进来的参数覆盖默认，没传则保留
            me[0].dzCompareConf = $.extend({}, defaultSettings, settings || {});

            if (me[0].dzCompareConf.id == undefined || me[0].dzCompareConf.id == '') {
                me[0].dzCompareConf.id = meId;
            }

            // 设置效果
            // me.addClass("dataTables_wrapper form-inline dt-bootstrap");

            // 添加表格dom元素
            me.append('<div class="modal-dialog">\n' +
                '        <div class="modal-content">\n' +
                '            <div class="modal-header">\n' +
                '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '                    <span aria-hidden="true">×</span></button>\n' +
                '                <h4 id="compareTitle_' + meId + '" class="modal-title">' + me[0].dzCompareConf.title + '[' + me[0].dzCompareConf.itemList.length + '|' + me[0].dzCompareConf.maxSize + ']</h4>\n' +
                '            </div>\n' +
                '            <div class="modal-body">\n' +
                '                <table id="dzCompareTbl_' + meId + '" class="table table-bordered table-striped dataTable" style="table-layout: fixed;">\n' +
                '                </table>\n' +
                '            </div>\n' +
                '            <div class="modal-footer">\n' +
                '                <button type="button" id="toCompareBtn_' + meId + '" class="btn btn-primary pull-left"\n' +
                '                        data-dismiss="modal">开始对比\n' +
                '                </button>\n' +
                '                <button type="button" id="clearCompareBtn_' + meId + '" class="btn btn-success ">清空</button>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>');

            // ========= 初始化表格元素 =========
            var table = $("#dzCompareTbl_" + meId);
            var itemList = me[0].dzCompareConf.itemList;
            for (var i = 0; i < itemList.length && i < me[0].dzCompareConf.maxSize; i++) {
                if (itemList.id === undefined || itemList.text === undefined) {
                    continue;
                }
                table.append('<tr class="row" id="dzCompare_tr_' + itemList.id + '">\n' +
                    '              <td class="col-md-10 text-center">' + itemList.text + '</td>\n' +
                    '              <td class="col-md-2 text-center">\n' +
                    '                  <div id="removeCompareItem_' + itemList.id + '"><i class="fa fa-fw fa-close"></i></div>\n' +
                    '              </td>\n' +
                    '         </tr>');
            }

            // ========= 初始化事件 =========
            // 1、【开始对比】事件
            $("#toCompareBtn_" + meId).on("click", function () {
                me[0].dzCompareConf.toCompare.call(this, me[0].dzCompareConf.itemList);
            });

            // 2、【删除项目】事件
            $("div[id^='removeCompareItem_']").on("click", function () {
                var id = $(this).attr("id").split("_")[1];
                me.dzCompare("removeItem", id);
            });

            // 3、【清空列表】事件
            $("#clearCompareBtn_" + meId).on("click", function () {
                me.dzCompare("clearAllItems");
            });

            // 保存dom元素到表格参数
            $.extend(me[0].dzCompareConf, {
                id: meId,
                table: table
            });
        },
        // 添加元素
        addItem: function (item) {
            console.log("addItem:" + JSON.stringify(item));
            var me = $(this[0]);
            var conf = me[0].dzCompareConf;
            var itemList = conf.itemList;
            console.log("itemList.length = " + itemList.length + ",conf.maxSize = " + conf.maxSize);
            if (itemList.length === conf.maxSize) {
                return -1;// 已经达到比较对象个数上限
            }
            if (item.id === undefined || item.text === undefined) {
                return -2;// 添加对象格式不正确
            }
            for (var i = 0; i < itemList.length; i++) {
                if (itemList[i].id === item.id) {
                    return -3;// 对象已经存在
                }
            }
            // 添加元素
            conf.itemList.push(item);
            console.log("itemList:" + JSON.stringify(conf.itemList));
            conf.table.append('<tr class="row" id="dzCompare_tr_' + item.id + '">\n' +
                '              <td class="col-md-10 text-center">' + item.text + '</td>\n' +
                '              <td class="col-md-2 text-center">\n' +
                '                  <div id="removeCompareItem_' + item.id + '"><i class="fa fa-fw fa-close"></i></div>\n' +
                '              </td>\n' +
                '         </tr>');
            $("#compareTitle_" + conf.id).html(conf.title + '[' + conf.itemList.length + '|' + conf.maxSize + ']');
            // 绑定删除事件
            $("#removeCompareItem_" + item.id).on("click", function () {
                me.dzCompare("removeItem", item.id);
            });
            $("#"+conf.btnId).html("对比(" + conf.itemList.length + "|" + conf.maxSize + ")");
            return conf.itemList.length;
        },
        // 清除表格数据
        removeItem: function (id) {
            var me = $(this[0]);
            var conf = me[0].dzCompareConf;
            $("#dzCompare_tr_" + id).remove();
            for (var i = 0; i < conf.itemList.length; i++) {
                if (conf.itemList[i].id === id) {
                    conf.itemList.splice(i, 1);
                }
            }
            $("#compareTitle_" + conf.id).html(conf.title + '[' + conf.itemList.length + '|' + conf.maxSize + ']');
            $("#"+conf.btnId).html("对比(" + conf.itemList.length + "|" + conf.maxSize + ")");
        },
        clearAllItems: function () {
            var me = $(this[0]);
            var conf = me[0].dzCompareConf;
            conf.table.html('');
            conf.itemList = [];
            $("#compareTitle_" + conf.id).html(conf.title + '[' + conf.itemList.length + '|' + conf.maxSize + ']');
            $("#"+conf.btnId).html("对比(" + conf.itemList.length + "|" + conf.maxSize + ")");
        },
        getItemList: function () {
            var me = $(this[0]);
            var conf = me[0].dzCompareConf;
            return conf.itemList;
        },
        getMaxSize: function () {
            var me = $(this[0]);
            var conf = me[0].dzCompareConf;
            return conf.maxSize;
        }
    });
    $.fn.dzCompare = function (args) {
        if ($.dzCompare[args]) {
            return $.dzCompare[args].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof args === 'object' || !args) {
            return $.dzCompare.init.apply(this, arguments);
        } else {
            $.error('Method' + args + 'does not exist on dzCompare');
        }
    };
})(jQuery, window, document);
