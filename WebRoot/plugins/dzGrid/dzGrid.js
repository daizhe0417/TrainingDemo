/**
 * dzGridTable 0.0.1
 * a data table plugin base on jQuery and bootstrap
 * @author : venice
 * @Date : 2018-10-15
 */
;(function ($, window, document, undefined) {
    "use strict";
    var clickTimeout = {
        _timeout: null,
        set: function (fn) {
            var that = this
            that.clear()
            that._timeout = setTimeout(fn, 300)
        },
        clear: function () {
            var that = this
            if (that._timeout) {
                clearTimeout(that._timeout)
            }
        }
    };
    $.dzGrid = $.dzGrid || {};
    $.extend($.dzGrid, {
        // 构造方法
        init: function (settings) {
            var defaultSettings = {
                title: "",
                tblHeight: 600,
                paginateNum: 9,             // 页标的默认长度（默认最多显示9页的页标）
                pagerModel: {               // 分页器
                    rowsPerPage: 20,        // 每页行数
                    currentPage: 0,         // 当前页号
                    maxPageCount: 0,        // 最大页数
                    maxRowCount: 0,         // 最大行数
                    firstRow: -1,           // 当前页的第一行号
                    maxRow: 0,              // 当前页的最后行号
                    status: "",             // 当前状态
                    datas: []               // 当前页的数据列表
                },
                sel_rowsPerPage: true,      // 是否显示每页行数的select对象
                columns: [],                // 表格各列的列表
                multiSelect: false,         // 是否允许多选
                currentSelectedRow: '',     // 当前选中行号
                allSelectedRowIds: [],      // 已选中的行号，仅在允许多选时有效
                allColSortable: false,      // 是否所有列可排序，为true时，各列的columns中不需要设置sortable为true了
                showGridTable: true,        // 是否显示数据表格，默认显示，也可以不显示，只是用来分页
                goPageFun: function (pageNum, rowsPerPage) {
                },
                onClickCell: function (rowId, iCol, cellContent, e) {
                },
                onSelectRow: function (rowId, iCol, rowData, e) {
                },
                onSelectAllRow: function (isSelect, e) {
                },
                onDblClickRow: function (rowId, iCol, rowDate, e) {
                },
                onSort: function (fieldName, order) {
                },
                afterFillGrid: function (pagerModel) {
                }
            };

            var me = $(this[0]);

            if (me == undefined || me[0] == undefined) {
                return false;
            }
            // console.log(JSON.stringify(me));
            var meId = me.attr("id");

            // 用传进来的参数覆盖默认，没传则保留
            me[0].dzGridConf = $.extend({}, defaultSettings, settings || {});

            // 验证参数有效性
            if (!me[0].dzGridConf.columns) {
                console.log("初始化表格：缺少columns:[]参数");
            }
            if (me[0].dzGridConf.columns.length <= 0) {
                console.log("初始化表格：columns:[]为空");
            }

            if (me[0].dzGridConf.id == undefined || me[0].dzGridConf.id == '') {
                me[0].dzGridConf.id = meId;
            }

            // 设置效果
            me.addClass("dataTables_wrapper form-inline dt-bootstrap");
            // me.css({"height":"600px","overflow":"auto"});
            // console.log("initTable");

            // me.append('<div class="row">\n' +
            //     '                <div class="col-sm-6">\n' +
            //     '                    <div class="dataTables_length">\n' +
            //     '                        <label>Show\n' +
            //     '                            <select id="' + meId + '_rowsPerPage" class="form-control input-sm">\n' +
            //     '                                <option value="10">10</option>\n' +
            //     '                                <option value="25">25</option>\n' +
            //     '                                <option value="50">50</option>\n' +
            //     '                                <option value="100">100</option>\n' +
            //     '                            </select>\n' +
            //     '                            entries\n' +
            //     '                        </label>\n' +
            //     '                    </div>\n' +
            //     '                </div>\n' +
            //     '                <div class="col-sm-6">\n' +
            //     '                    <div id="' + meId + '_filter" class="dataTables_filter">\n' +
            //     '                        <label>Search:\n' +
            //     '                            <input type="search" class="form-control input-sm" placeholder="">\n' +
            //     '                        </label>\n' +
            //     '                    </div>\n' +
            //     '                </div>\n' +
            //     '            </div>');

            // 设置显示表格数据的时候
            if (me[0].dzGridConf.showGridTable) {
                // 添加表格dom元素
                me.append('<div class="row">\n' +
                    '                <div class="col-sm-12" style="height:' + me[0].dzGridConf.tblHeight + 'px;overflow-x: auto;">\n' +
                    '                    <table id="' + meId + '_table" class="table table-bordered table-hover table-striped dataTable" style="table-layout: fixed;">' +
                    '                    </table>' +
                    '                </div>' +
                    '            </div>');
            }

            // ========= 初始化表格元素 =========
            var table = $("#" + meId + "_table");
            if (table.length > 0) {
                var columns = me[0].dzGridConf.columns;
                // 1、添加表头
                table.append('<thead><tr role="row"></tr></thead>');
                var thead_tr = table.find("thead tr");
                // 默认列宽为表格宽度/列数
                var defaultColWidth = me.width() / (columns.length + 1);
                // 填充序号列
                thead_tr.append('<th style="width:25px;padding-left: 4px;padding-right: 4px;">&nbsp;</th>');
                // 如果允许多选，增加cb列，表头显示全选cb
                if (me[0].dzGridConf.multiSelect) {
                    thead_tr.append('<th style="width: 25px;padding-left: 8px;padding-right: 4px;"><input type="checkbox" id="' + meId + '_cb_all" /></th>');
                }
                // 填充各列的表头
                for (var i = 0; i < columns.length; i++) {
                    // 隐藏的列不显示
                    if (columns[i].hidden) {
                        continue;
                    }
                    var sortStr = '';
                    if (me[0].dzGridConf.allColSortable || columns[i].sortable) {
                        sortStr = 'class="sorting sortable"';
                    }
                    thead_tr.append('<th id="' + meId + '_th_' + columns[i].fieldName + '" ' + sortStr + ' style="width:' +
                        (columns[i].width == undefined ? defaultColWidth : columns[i].width) +
                        'px;">' + columns[i].name + '</th>');
                }
                // 2、初始化数据行
                table.append('<tbody>\n' +
                    '           <tr role="row" class="odd" id="' + meId + '_noDataRow">\n' +
                    '               <td colspan="' + (columns.length + 1) + '" style="text-align: center">暂无数据</td>\n' +
                    '           </tr>\n' +
                    '           </tbody>');

            }
            // 3、页脚
            me.append('<div class="row">\n' +
                '                <div class="col-sm-3">\n' +
                '                    <div class="dataTables_length">\n' +
                '                        <label id="' + meId + '_pageInfo" style="margin-top: 3px;">当前 0 - 0 共 0 条</label>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                (me[0].dzGridConf.sel_rowsPerPage ?
                    ('                <div class="col-sm-2">\n' +
                        '                    <div class="dataTables_length">\n' +
                        '                        <label>每页\n' +
                        '                            <select id="' + meId + '_sel_rowsPerPage" class="form-control input-sm">\n' +
                        '                                <option value="10">10</option>\n' +
                        '                                <option value="25">25</option>\n' +
                        '                                <option value="50">50</option>\n' +
                        '                                <option value="100">100</option>\n' +
                        '                            </select>\n' +
                        '                            条\n' +
                        '                        </label>\n' +
                        '                    </div>\n' +
                        '                </div>\n') : '') +
                '                <div class="col-sm-7 pull-right">\n' +
                '                    <div class="dataTables_paginate paging_simple_numbers">\n' +
                '                        <ul class="pagination" id="' + meId + '_paginate">\n' +
                '                            <li class="paginate_button previous" id="' + meId + '_li_toFirstPage" >\n' +
                '                                <a href="#" id="' + meId + '_toFirstPage" aria-controls="example1" data-dt-idx="0" tabindex="0">\n' +
                '                                    &nbsp;<i class="fa fa-fw fa-fast-backward"></i>\n' +
                '                                </a>\n' +
                '                            </li>\n' +
                '                            <li class="paginate_button previous" id="' + meId + '_li_toPrePage" >\n' +
                '                                <a href="#" id="' + meId + '_toPrePage" aria-controls="example1" data-dt-idx="0" tabindex="0">\n' +
                '                                    &nbsp;<i class="fa fa-fw fa-backward"></i>\n' +
                '                                </a>\n' +
                '                            </li>\n' +
                '                            <li class="paginate_button active" id="' + meId + '_li_goPage" ><a href="#">0</a></li>\n' +
                '                            <li class="paginate_button previous" id="' + meId + '_li_toNextPage">\n' +
                '                                <a href="#" id="' + meId + '_toNextPage" aria-controls="example1" data-dt-idx="0" tabindex="0">\n' +
                '                                    &nbsp;<i class="fa fa-fw fa-forward"></i>\n' +
                '                                </a>\n' +
                '                            </li>\n' +
                '                            <li class="paginate_button previous" id="' + meId + '_li_toLastPage" >\n' +
                '                                <a href="#" id="' + meId + '_toLastPage" aria-controls="example1" data-dt-idx="0" tabindex="0">\n' +
                '                                    &nbsp;<i class="fa fa-fw fa-fast-forward"></i>\n' +
                '                                </a>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>');

            // ========= 初始化事件 =========
            // 1、全选cb的点击事件
            if (table.length > 0) {
                // 为全选checkbox元素绑定click事件:全部行相应修改是否添加warning，以及全部行的cb选中状态，最后，如果调用页面给出了onSelectAllRow方法，调用它
                $("#" + meId + "_cb_all").on("click", function (e) {
                    table.find("tbody tr").each(function () {
                        var idArr = $(this).attr("id").split("_");
                        var cbAll = $("#" + meId + "_cb_all");
                        console.log("cball" + cbAll.prop("checked") + idArr);
                        if (cbAll.prop("checked")) {
                            $("#" + meId + "_tr_" + idArr[2]).addClass("warning");
                            me[0].dzGridConf.allSelectedRowIds.push(idArr[2]);
                        } else {
                            $("#" + meId + "_tr_" + idArr[2]).removeClass("warning");
                            me[0].dzGridConf.allSelectedRowIds.splice(me[0].dzGridConf.allSelectedRowIds.indexOf(idArr[2]), 1);
                        }
                        $("#" + meId + "_cb_" + idArr[2]).prop("checked", cbAll.prop("checked"));
                    });
                    // $(this).prop("checked", !$(this).prop("checked"));
                    if (typeof me[0].dzGridConf.onSelectAllRow === 'function') {
                        me[0].dzGridConf.onSelectAllRow.call(this, $(this).prop("checked"), e);
                    }
                });
            }
            // 2、点击排序字段表头的响应事件
            // 设置显示表格数据的时候
            if (me[0].dzGridConf.showGridTable) {
                thead_tr.find(".sortable").on("click", function () {
                    var order = $(this).hasClass("sorting_asc");
                    if (order) {
                        $(this).removeClass("sorting_asc").addClass("sorting_desc");
                    } else {
                        $(this).removeClass("sorting_desc").removeClass("sorting").addClass("sorting_asc");
                    }
                    if (typeof me[0].dzGridConf.onSort === 'function') {
                        var fieldName = $(this).attr("id").split("_")[2];
                        me[0].dzGridConf.pagerModel.pa
                        me[0].dzGridConf.onSort.call(this, fieldName, order ? "desc" : "asc");
                    }
                });
            }
            // 3、选择每页行数的select的响应事件
            if (me[0].dzGridConf.sel_rowsPerPage) {
                $("#" + meId + "_sel_rowsPerPage").on("change", function () {
                    me[0].dzGridConf.pagerModel.rowsPerPage = $(this).val();
                    me.dzGrid("goPage", 1);
                });
            }

            // 保存dom元素到表格参数
            $.extend(me[0].dzGridConf, {
                container: me,
                table: table,                           // 表格
                pagerInfo: $("#" + meId + "_pageInfo"), // 分页信息
                paginate: $("#" + meId + "_paginate")   // 页码
            });
        },
        // 填充表格，参数为pagerModel，common.js中查询方法返回值
        fillGrid: function (pagerModel) {
            var me = $(this[0]);
            $.extend(true, me[0].dzGridConf.pagerModel, pagerModel || {});
            var conf = me[0].dzGridConf;
            var tbody = conf.table.find("tbody");

            // 清除全部数据
            tbody.html('');
            // console.log(JSON.stringify(conf.pagerModel));
            // 循环添加数据
            for (var i = 0; i < conf.pagerModel.datas.length; i++) {
                var rowData = conf.pagerModel.datas[i];
                // 要添加的行的html字符串
                // 第一列
                var str = '<td>' + (i + 1) + '</td>';
                if (conf.multiSelect) {
                    str += '<td style="width: 25px;"><input type="checkbox" id="' + conf.id + '_cb_' + i + '" /></td>';
                }
                // 其他列
                for (var j = 0; j < conf.columns.length; j++) {
                    if (conf.columns[j].hidden) {
                        continue;
                    }
                    var cell = (rowData[conf.columns[j].fieldName] && rowData[conf.columns[j].fieldName] != 'null') ? rowData[conf.columns[j].fieldName] : '';
                    if (typeof conf.columns[j].formatter === 'function') {
                        cell = conf.columns[j].formatter.call(this, rowData[conf.columns[j].fieldName], null, rowData);
                    }
                    str += '<td id="' + conf.id + '_td_' + i + '_' + j + '">' + cell + '</td>';
                }
                // console.log(i + "===" + str);
                // 添加dom元素
                if (i === 0) {
                    tbody.append('<tr id="' + conf.id + '_tr_' + i + '" role="row" class="odd">\n' +
                        str +
                        '                 </tr>');
                } else {
                    tbody.find("tr:eq(" + (i - 1) + ")").after('<tr id="' + conf.id + '_tr_' + i + '" role="row" class="' + (i % 2 == 0 ? 'odd' : 'even') + '">\n' +
                        str +
                        '                 </tr>');
                }
                // 如果允许多选，为相应行的cb绑定触发事件
                if (conf.multiSelect) {
                    $("#" + conf.id + "_cb_" + i).on("click", function (e) {
                        // 阻止事件冒泡，但不阻止默认动作，否则的话会继续触发父元素即td的click事件，但是在td的click事件中找不到this对象
                        e.stopPropagation();
                        var idArr = $(this).attr("id").split("_");
                        // console.log(conf.pagerModel.datas[idArr[2]]);
                        // 反选cb的状态，后面的onSelectRow事件中还要继续处理
                        $(this).prop("checked", !$(this).prop("checked"));
                        me.dzGrid("onSelectRow", idArr[2], 1, conf.pagerModel.datas[idArr[2]], e);
                    });
                }
            }

            // 触发afterFillGrid事件
            if (typeof conf.afterFillGrid === 'function') {
                conf.afterFillGrid.call(this, pagerModel);
            }
            // 设置分页
            me.dzGrid("setPager");
            me.dzGrid("bindOnClickCell");
            me.dzGrid("bindOnDblClick");
        },
        // 插入单行数据，取消？
        // TODO 事件响应没有加
        addRowData: function (rowId, rowData) {
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            var tbody = conf.table.find("tbody");
            var str = '';
            for (var i = 0; i < conf.columns.length; i++) {
                if (conf.columns[i].hidden) {
                    continue;
                }
                var cell = (rowData[conf.columns[i].fieldName] && rowData[conf.columns[i].fieldName] != 'null') ? rowData[conf.columns[i].fieldName] : '';
                if (typeof conf.columns[i].formatter === 'function') {
                    cell = conf.columns[i].formatter.call(this, rowData[conf.columns[i].fieldName], null, rowData);
                }
                str += '<td id="' + conf.id + '_td_' + i + '_' + j + '">' + cell + '</td>';
            }
            // 如果之前没有数据，删除显示"暂无数据"的行，然后直接插入行
            if (conf.pagerModel.datas.length == 0) {
                tbody.html('');
                tbody.append('<tr role="row" class="' + (rowId % 2 == 0 ? 'odd' : 'even') + '">\n' +
                    str +
                    '                 </tr>');
            } else {
                // 在第i行插入数据
                tbody.find("tr:eq(" + (rowId - 1) + ")").after('<tr role="row" class="' + (rowId % 2 == 0 ? 'odd' : 'even') + '">\n' +
                    str +
                    '                 </tr>');
            }
            // 保存数据到表格参数
            conf.pagerModel.datas.splice(rowId, 0, rowData);
        },
        // 清除表格数据
        clearGrid: function () {
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            var tbody = conf.table.find("tbody");
            tbody.html('<tr role="row" class="odd" id="' + conf.id + '_noDataRow">' +
                '           <td colspan="' + (conf.columns.length + 1) + '" style="text-align: center">暂无数据</td>' +
                '       </tr>');
            $.extend(conf.pagerModel, {
                rowsPerPage: 20,
                currentPage: 0,
                maxPageCount: 0,
                maxRowCount: 0,
                firstRow: -1,
                maxRow: 0,
                status: "",
                datas: []
            });
            me.dzGrid("setPager");
        },
        // 分页设置方法
        setPager: function (pagerModel) {
            var me = $(this[0]);
            $.extend(true, me[0].dzGridConf, pagerModel || {});
            var conf = me[0].dzGridConf;

            // ========= 分页信息 =========
            // 记录总数
            var total = conf.pagerModel.maxRowCount == undefined ? 0 : conf.pagerModel.maxRowCount;
            // console.log(total);
            conf.pagerInfo.html(
                '当前 '
                + (conf.pagerModel.firstRow == undefined ? 0
                : conf.pagerModel.firstRow + 1) + ' - '
                + (conf.pagerModel.maxRow == undefined ? 0 : conf.pagerModel.maxRow)
                + '  共 ' + total + ' 条');

            // ========= 页标 =========
            var paginate = conf.paginate;
            paginate.find("li[id^='" + conf.id + "_li_goPage']").remove();

            var nextLi = paginate.find("#" + conf.id + "_li_toNextPage");

            if (conf.pagerModel.maxPageCount <= conf.paginateNum) {
                for (var i = 1; i <= conf.pagerModel.maxPageCount; i++) {
                    nextLi.before('<li class="paginate_button' + (conf.pagerModel.currentPage == i ? ' active' : '') + '" id="' + conf.id + '_li_goPage_' + i + '"><a href="#" id="' + conf.id + '_goPage_' + i + '">' + i + '</a></li>');
                }
            } else {
                if (conf.pagerModel.currentPage <= conf.paginateNum) {
                    for (var i = 1; i <= conf.paginateNum; i++) {
                        nextLi.before('<li class="paginate_button' + (conf.pagerModel.currentPage == i ? ' active' : '') + '" id="' + conf.id + '_li_goPage_' + i + '"><a href="#" id="' + conf.id + '_goPage_' + i + '">' + i + '</a></li>');
                    }
                    nextLi.before('<li class="paginate_button" id="' + conf.id + '_li_goPage_goMoreNextPage"><a href="#">……</a></li>');
                } else {
                    nextLi.before('<li class="paginate_button" id="' + conf.id + '_li_goPage_goMorePrePage"><a href="#">……</a></li>');
                    console.log(conf.pagerModel.currentPage);
                    for (var i = conf.pagerModel.currentPage - 4; (i <= conf.pagerModel.currentPage + 4) && (i <= conf.pagerModel.maxPageCount); i++) {
                        console.log(i);
                        nextLi.before('<li class="paginate_button' + (conf.pagerModel.currentPage == i ? ' active' : '') + '" id="' + conf.id + '_li_goPage_' + i + '"><a href="#" id="' + conf.id + '_goPage_' + i + '">' + i + '</a></li>');
                    }
                    nextLi.before('<li class="paginate_button" id="' + conf.id + '_li_goPage_goMoreNextPage"><a href="#">……</a></li>');
                }
            }
            if ($("#" + conf.id + "_li_goPage_1").length > 0) {
                $("#" + conf.id + "_li_goPage_goMorePrePage").remove();
            }
            if ($("#" + conf.id + "_li_goPage_" + conf.pagerModel.maxPageCount + "").length > 0) {
                $("#" + conf.id + "_li_goPage_goMoreNextPage").remove();
            }

            // ========= 绑定页标事件 =========
            $("#" + conf.id + "_toFirstPage").unbind("click");
            $("#" + conf.id + "_toFirstPage").on("click", function () {
                me.dzGrid("goPage", 1);
            });
            $("#" + conf.id + "_toPrePage").unbind("click");
            $("#" + conf.id + "_toPrePage").on("click", function () {
                if ((conf.pagerModel.currentPage - 1) < 1) {
                    return false;
                }
                me.dzGrid("goPage", conf.pagerModel.currentPage - 1);
            });
            $("#" + conf.id + "_toNextPage").unbind("click");
            $("#" + conf.id + "_toNextPage").on("click", function () {
                if ((conf.pagerModel.currentPage + 1) > conf.pagerModel.maxPageCount) {
                    return false;
                }
                me.dzGrid("goPage", conf.pagerModel.currentPage + 1);
            });
            $("#" + conf.id + "_toLastPage").unbind("click");
            $("#" + conf.id + "_toLastPage").on("click", function () {
                console.log('_toLastPage');
                me.dzGrid("goPage", conf.pagerModel.maxPageCount);
            });
            paginate.find("a[id^='" + conf.id + "_goPage']").on("click", function () {
                var pageNum = $(this).attr("id").split("_goPage_")[1];
                me.dzGrid("goPage", pageNum);
            });
        },
        // 页面跳转方法
        goPage: function (pageNum, rowsPerPage) {
            console.log('goPage' + pageNum);
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            if (typeof conf.goPageFun === 'function') {
                if (!rowsPerPage) {
                    rowsPerPage = conf.pagerModel.rowsPerPage;
                }
                conf.goPageFun.call(this, pageNum, rowsPerPage);
            }
        },
        // 为每个td绑定点击事件
        // 对tbody中的每个td，首先解除td的触发事件，再重新绑定，当td发生click时，调用绑定的onClickCell方法（可配置），再触发插件自身的onSelectRow事件
        bindOnClickCell: function () {
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            var tbody = conf.table.find("tbody");
            tbody.find("td").each(function () {
                $(this).unbind("click");
                $(this).on("click", function (e) {
                    console.log("click" + $(this).attr("id"));
                    var thisObj = $(this);
                    clickTimeout.set(function () {
                        var id = thisObj.attr("id");
                        console.log(id);
                        if (id) {
                            var idArr = id.split("_");
                            // 触发点击cell事件
                            if (typeof conf.onClickCell === 'function') {
                                conf.onClickCell.call(thisObj, idArr[2], idArr[3], thisObj.html(), e);
                            }
                            console.log('this is click cell');
                            // 触发点击行事件
                            me.dzGrid("onSelectRow", idArr[2], idArr[3], conf.pagerModel.datas[idArr[2]], e);
                        } else {
                            e.stopPropagation();
                            return false;
                        }
                    });
                });
            });
        },
        // 事件：选中行。参数依次为行序号（0开始），列序号（0开始），行数据，事件对象
        // 根据本行的cb的选中状态，修改本行的class是否有warning，再将cb状态反选，同时修改allSelectedRowIds数组中的元素
        // 根据是否所有行全部选中，设置全选cb的状态
        // 如果调用页面给出了onSelectRow方法，调用它
        onSelectRow: function (rowId, iCol, rowData, e) {
            console.log("onSelectRow=====" + rowId);
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            var cb = $("#" + conf.id + "_cb_" + rowId);

            // 允许多选
            if (conf.multiSelect) {
                if (cb.prop("checked")) {
                    $("#" + conf.id + "_tr_" + rowId).removeClass("warning");
                    conf.allSelectedRowIds.splice(conf.allSelectedRowIds.indexOf(rowId), 1);
                } else {
                    $("#" + conf.id + "_tr_" + rowId).addClass("warning");
                    conf.allSelectedRowIds.push(rowId);
                }
                console.log(JSON.stringify(conf.allSelectedRowIds));
                cb.prop("checked", !cb.prop("checked"));
                if (conf.allSelectedRowIds.length == conf.pagerModel.rowsPerPage) {
                    $("#" + conf.id + "_cb_all").prop("checked", true);
                } else {
                    $("#" + conf.id + "_cb_all").prop("checked", false);
                }
                // 不允许多选
            } else {
                // 清除之前选中行的选中样式
                if (conf.currentSelectedRow != '') {
                    $("#" + conf.id + "_tr_" + conf.currentSelectedRow).removeClass("warning");
                }
                //    设置当前选中行的样式
                $("#" + conf.id + "_tr_" + rowId).addClass("warning");
                //    修改选中行号记录
                conf.currentSelectedRow = rowId;
            }
            if (typeof conf.onSelectRow === 'function') {
                conf.onSelectRow.call(this, rowId, iCol, rowData, e);
            }
        },
        // 为所有td绑定双击事件
        // 通过clickTimeout处理双击和单击事件冲突的问题
        // 如果调用页面给出了onDblClickRow方法，调用它
        bindOnDblClick: function () {
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            var tbody = conf.table.find("tbody");
            tbody.find("td").each(function () {
                $(this).unbind("dblclick");
                $(this).on("dblclick", function (e) {
                    clickTimeout.clear();
                    console.log('this is dblckick');
                    var id = $(this).attr("id");
                    if (id) {
                        var idArr = id.split("_");
                        console.log('dbclick');
                        conf.currentSelectedRow = idArr[2];
                        console.log("currentSelectedRow" + conf.currentSelectedRow);
                        if (typeof conf.onDblClickRow === 'function') {
                            conf.onDblClickRow.call(this, idArr[2], idArr[3], conf.pagerModel.datas[idArr[2]], e);
                        }
                    } else {
                        e.stopPropagation()
                        return false;
                    }
                })
            })
        },
        getAllSelectedRowIds: function () {
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            if (conf.multiSelect) {
                return conf.allSelectedRowIds;
            } else {
                return null;
            }
        },
        getCurrentSelectedRowId: function () {
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            return conf.currentSelectedRow;
        },
        getRowData: function (rowId) {
            if (rowId == undefined) {
                return null;
            }
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            return conf.pagerModel.datas[rowId];
        },
        getGridMinHeight: function () {
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            return conf.pagerModel.rowsPerPage * 34 + 100;
        },
        getAllData: function () {
            var me = $(this[0]);
            var conf = me[0].dzGridConf;
            return conf.pagerModel.datas;
        }
    });
    $.fn.dzGrid = function (args) {
        if ($.dzGrid[args]) {
            return $.dzGrid[args].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof args === 'object' || !args) {
            return $.dzGrid.init.apply(this, arguments);
        } else {
            $.error('Method' + args + 'does not exist on dzGrid');
        }
    };
})(jQuery, window, document);
