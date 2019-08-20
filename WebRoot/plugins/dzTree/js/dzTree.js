/**
 * dzTree 0.0.1
 * a tree plugin base on jQuery and bootstrap
 * @author : venice
 * @Date : 2018-11-20
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
    var rootNum = '0';
    $.dzTree = $.dzTree || {};
    $.extend($.dzTree, {
        // 构造方法
        init: function (settings) {
            var defaultSettings = {
                title: '',
                textFieldName: 'text',
                // dataType: 'recursion',
                dataType: 'line',
                datas: [],
                currentNodeId: rootNum,          // 当前选中的结点编号
                newNodeNum: 0,              // 新插入结点计数
                showBtns: false,
                queryMethod: '',
                saveMethod: '',
                deleteMethod: '',
                insertRootNodeBtnTxt: '插入根结点',
                insertNodeBtnTxt: '插入子结点',
                saveTreeBtnTxt: '保存修改',
                deleteNodeBtnTxt: '删除结点',
                onClickNode: function (nodeId, nodeData) {
                },
                onSpanChange: function (nodeId, nodeData, newValue) {
                    // },
                    // confirmRemoveNode: function (nodeId, nodeData) {
                    //     return confirm("确认要删除节点吗？");
                }
            };

            var me = $(this[0]);
            // console.log(JSON.stringify(me));
            var meId = me.attr("id");

            // 用传进来的参数覆盖默认，没传则保留
            me[0].dzTreeConf = $.extend(true, {}, defaultSettings, settings || {});

            if (me[0].dzTreeConf.id == undefined || me[0].dzTreeConf.id == '') {
                me[0].dzTreeConf.id = meId;
            }

            // 检查参数
            if (me[0].dzTreeConf.showBtns) {
                if (me[0].dzTreeConf.saveMethod == undefined || me[0].dzTreeConf.saveMethod == '' || me[0].dzTreeConf.deleteMethod == undefined || me[0].dzTreeConf.deleteMethod == '') {
                    dzToast('必须指定保存和删除的后台方法', 'error');
                    return false;
                }
            }

            // 清空dom元素
            me.html('');
            // 设置效果，这里又添加了一层div
            var btnStr = '';
            if (me[0].dzTreeConf.showBtns) {
                btnStr = '           <div class="box-header with-border">' +
                    '               <button type="button" id="' + meId + '_insertRootNodeBtn" class="btn btn-sm btn-success" style="margin: 0px 2px;">' + me[0].dzTreeConf.insertRootNodeBtnTxt + '</button>' +
                    '               <button type="button" id="' + meId + '_insertNodeBtn" class="btn btn-sm btn-info" style="margin: 0px 2px;">' + me[0].dzTreeConf.insertNodeBtnTxt + '</button>' +
                    '               <button type="button" id="' + meId + '_saveTreeBtn" class="btn btn-sm btn-warning" style="margin: 0px 2px;">' + me[0].dzTreeConf.saveTreeBtnTxt + '</button>' +
                    '               <button type="button" id="' + meId + '_deleteNodeBtn" class="btn btn-sm btn-danger" style="margin: 0px 2px;">' + me[0].dzTreeConf.deleteNodeBtnTxt + '</button>' +
                    '           </div>';
            }
            me.append('<div class="box box-default">' + btnStr +
                '           <div class="box-body">' +
                '               <div id="dzTree_' + (rootNum) + '" class="dzTree" style="overflow-y: auto;height: ' + (me.height() - 90) + '"></div>' +
                '           </div>' +
                '       </div>');

            me.dzTree('initTreeData');

            if (me[0].dzTreeConf.showBtns) {
                $("#" + meId + "_insertRootNodeBtn").on("click", function () {
                    me.dzTree("insertRootNode");
                });
                $("#" + meId + "_insertNodeBtn").on("click", function () {
                    var currentNodeId = me[0].dzTreeConf.currentNodeId;
                    if (currentNodeId == rootNum) {
                        dzToast('请先选择要插入的位置', 'error');
                        return false;
                    }
                    me.dzTree("insertChildNode");
                });
                $("#" + meId + "_saveTreeBtn").on("click", function () {
                    var datas = me[0].dzTreeConf.datas;
                    console.log(JSON.stringify(datas));
                    ajax({
                        url: me[0].dzTreeConf.saveMethod,
                        data: {
                            reqJsonStr: JSON.stringify(datas)
                        },
                        success: function (item) {
                            console.log(JSON.stringify(item));
                            if (item.status == '1') {
                                dzToast('保存成功', 'success');
                                me.dzTree('initTreeData');
                            } else {
                                dzToast('保存失败', 'error');
                            }
                        },
                        error: function (item) {
                            if (item.status == '1') {
                                dzToast('保存成功', 'success');
                                me.dzTree('initTreeData');
                            } else {
                                dzToast('保存失败', 'error');
                            }
                        }
                    });
                });
                $("#" + meId + "_deleteNodeBtn").on("click", function () {
                    var currentNodeId = me[0].dzTreeConf.currentNodeId;
                    if (currentNodeId == rootNum) {
                        dzToast('请选择要删除的结点', 'error');
                    } else {
                        var text = me.dzTree("getTreeNodeDatasById", currentNodeId)[me[0].dzTreeConf.textFieldName];
                        DzConfirm.confirm("确定要删除结点[" + text + "]吗？").click(function (item) {
                            if (item) {
                                if (currentNodeId.startWith('tmp')) {
                                    me.dzTree("removeCurrTmpNode");
                                } else if (me.dzTree("hasChildNode", currentNodeId)) {
                                    dzToast('请先删除子节点', 'warning');
                                } else {
                                    ajax({
                                        url: me[0].dzTreeConf.deleteMethod,
                                        data: {
                                            reqJsonStr: JSON.stringify({
                                                id: currentNodeId
                                            })
                                        },
                                        success: function (item) {
                                            console.log(JSON.stringify(item));
                                            if (item.status == '1') {
                                                dzToast('删除成功', 'success');
                                                me.dzTree('initTreeData');
                                            } else {
                                                dzToast('删除失败', 'error');
                                            }
                                        },
                                        error: function (item) {
                                            if (item.status == '1') {
                                                dzToast('删除成功', 'success');
                                                me.dzTree('initTreeData');
                                            } else {
                                                dzToast('删除失败', 'error');
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            }
        },
        initTreeData: function () {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            if (conf.queryMethod == '') {
                me.dzTree('createTree');
            } else {
                ajax({
                    url: conf.queryMethod,
                    data: {
                        reqJsonStr: JSON.stringify({})
                    },
                    success: function (item) {
                        console.log(JSON.stringify(item));
                        if (item.status == '1') {
                            console.log(JSON.stringify(item.datas));
                            conf.datas = item.datas;
                        } else {
                            conf.datas = [];
                        }
                        me.dzTree('createTree');
                    },
                    error: function (item) {
                        if (item.status == '1') {
                            conf.datas = item.datas;
                        } else {
                            conf.datas = [];
                        }
                        me.dzTree('createTree');
                    }
                });
            }
        },
        createTree: function () {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            $("#dzTree_" + rootNum).html('');
            // 数据的格式，包括递归recursion和线性line
            if (conf.dataType === 'recursion') {
                // 取得填充字符串
                var str = getTreeStr(conf.datas);
                // console.log(str);

                // 填充dom元素
                me.append(str);
            } else if (conf.dataType === 'line') {
                var datas = conf.datas;
                // 数据为空时，填充一个临时的元素
                if (datas.length <= 0) {
                    var data = {};
                    data['id'] = 'tmp0';
                    data[conf.textFieldName] = '暂无数据';
                    data['parentId'] = rootNum;
                    datas.push(data);
                    conf.newNodeNum = 1;
                }
                // 填充dom元素
                for (var i = 0; i < datas.length; i++) {
                    var ul = $("#dzTree_" + datas[i].parentId).children("ul");
                    if (ul.length > 0) {
                        ul.append('<li id="dzTree_' + datas[i].id + '"><span title="点击收起"><i class="fa fa-fw fa-minus-square" style="display: inline;"></i><div class="dzTreeText" contenteditable="true">' + datas[i][conf.textFieldName] + '</div></span></li>');
                    } else {
                        $("#dzTree_" + datas[i].parentId).append('<ul><li id="dzTree_' + datas[i].id + '"><span title="点击收起"><i class="fa fa-fw fa-minus-square" style="display: inline;"></i><div contenteditable="true" class="dzTreeText">' + datas[i][conf.textFieldName] + '</div></span></li></ul>');
                    }
                }
                // 处理css效果
                me.find('li:has(ul)').addClass('parent_li');
                me.find('li:not(:has(ul))').children("span").children("i").removeClass("fa-minus-square").addClass("fa-leaf");
            }
            // 树形结构的位置，整体右移
            me.find(" > ul").css("margin-left", "-20px");

            // 绑定点击事件
            me.dzTree('bindOnClick');

            // 绑定span的离开焦点事件
            me.dzTree('bindOnSpanBlur');
            me.dzTree('bindOnSpanKeyDown');

            // 过滤编辑结点时，粘贴内容中的样式，只保留其中的文字
            var x = document.getElementsByClassName("dzTreeText");
            var i;
            console.log(x.length);
            for (i = 0; i < x.length; i++) {
                x[i].addEventListener("paste", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(e);
                    var text = e.clipboardData.getData("text/plain");
                    console.log("text=" + text);
                    document.execCommand("insertHTML", false, text);
                });
            }
        },
        /**
         * 绑定【结点的点击】事件
         */
        bindOnClick: function () {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            me.find('li > span').each(function () {
                $(this).unbind("click");
            });
            me.find('li > span').on('click', function (e) {
                if ($(this).parent().hasClass("parent_li")) {
                    var children = $(this).parent('li.parent_li').find(' > ul > li');
                    if (children.is(":visible")) {
                        children.hide('fast');
                        $(this).attr('title', '点击展开').find(' > i').addClass('fa-plus-square').removeClass('fa-minus-square');
                    } else {
                        children.show('fast');
                        $(this).attr('title', '点击收起').find(' > i').addClass('fa-minus-square').removeClass('fa-plus-square');
                    }
                }

                // 清除之前选中结点的选中样式
                $("#dzTree_" + conf.currentNodeId).find(" > span").removeClass("bg-orange");
                // 设置当前选中结点的选中样式
                if (!$(this).hasClass("bg-orange")) {
                    $(this).addClass("bg-orange");
                }

                // 设置全选文字
                selectText($(this).find("div").get(0));

                // 调用点击事件的响应方法
                var id = $(this).parent().attr("id").replace("dzTree_", "");
                conf.currentNodeId = id;
                console.log("currentNodeId=" + conf.currentNodeId);
                if (typeof conf.onClickNode === 'function') {
                    conf.onClickNode.call(this, id, me.dzTree('getTreeNodeDatasById', id));
                }

                e.stopPropagation();
            });
        },

        /**
         * 绑定【修改span中的内容】事件
         */
        bindOnSpanBlur: function () {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            me.find('li > span > div').each(function () {
                $(this).unbind("blur");
            });
            me.find('li > span > div').on('blur', function (e) {
                // var obj = $(this).clone();
                // obj.find("i").remove();
                // var newValue = obj.html();
                var newValue = $(this).html();
                console.log(newValue);
                var oldValue = $(this).data("value");
                if (oldValue != undefined && oldValue == newValue) {
                } else {
                    $(this).data("value", newValue);
                    var id = $(this).parent().parent().attr("id").split("_")[1];
                    if (typeof conf.onSpanChange === 'function') {
                        conf.onSpanChange.call(this, id, me.dzTree('getTreeNodeDatasById', id), newValue);
                    }
                    // alert('结点已修改，是否要保存?' + newValue);
                    var newData = {};
                    newData[conf.textFieldName] = newValue;
                    me.dzTree('setTreeNodeDatasById', id, newData);
                    // console.log(JSON.stringify(conf.datas));
                }
            });
        },
        bindOnSpanKeyDown: function () {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            me.find('li > span > div').each(function () {
                $(this).unbind("keydown");
            });
            me.find('li > span > div').on('keydown', function (e) {
                if (e.keyCode == 9) {
                    e.preventDefault();
                    e.stopPropagation();
                    me.dzTree("insertChildNode");
                    return false;
                } else if (e.keyCode == 13) {
                    e.preventDefault();
                    e.stopPropagation();
                    me.dzTree('insertBrotherNode');
                    return false;
                }
            });
        },
        /**
         * 插入根结点,parentId=rootNum
         * @param data
         */
        insertRootNode: function (data) {
            var me = $(this[0]);
            me.dzTree('insertNode', data, rootNum);
        },
        /**
         * 插入兄弟结点
         * @param data
         */
        insertBrotherNode: function (data) {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            var parentId = me.dzTree('getParentNodeId', conf.currentNodeId);
            console.log("parentId=" + parentId);
            me.dzTree('insertNode', data, parentId);
        },
        /**
         * 插入子节点
         * @param data
         */
        insertChildNode: function (data) {
            var me = $(this[0]);
            me.dzTree('insertNode', data);
        },
        /**
         * 插入结点通用方法
         * @param data
         * @param parentId，默认值是conf.currentNodeId
         */
        insertNode: function (data, parentId) {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            console.log("currentNodeId=" + conf.currentNodeId);
            console.log("newNodeNum=" + conf.newNodeNum);
            // 插入结点数据
            var newNode = {};
            $.extend(newNode, data || {});
            newNode['id'] = 'tmp' + conf.newNodeNum;
            newNode[conf.textFieldName] = '新结点' + conf.newNodeNum;
            console.log('parentId=' + parentId);
            newNode['parentId'] = (parentId == undefined ? conf.currentNodeId : parentId);
            console.log('newNode[\'parentId\']=' + newNode['parentId']);
            // 添加插入结点数据
            conf.datas.push(newNode);
            // 添加dom元素
            var ul = $("#dzTree_" + newNode['parentId']).children("ul");
            if (ul.length > 0) {
                ul.append('<li id="dzTree_' + newNode['id'] + '"><span title="点击收起"><i class="fa fa-fw fa-leaf"style="display: inline;"></i><div contenteditable="true" class="dzTreeText">' + newNode[conf.textFieldName] + '</div></span></li>');
            } else {
                $("#dzTree_" + newNode['parentId']).append('<ul><li id="dzTree_' + newNode['id'] + '"><span title="点击收起"><i class="fa fa-fw fa-leaf" style="display: inline;"></i><div contenteditable="true" class="dzTreeText">' + newNode[conf.textFieldName] + '</div></span></li></ul>');
            }
            // 新插入结点计数
            conf.newNodeNum++;

            // 处理效果，图标等
            $("#dzTree_" + newNode['parentId']).find(" > ul > li").css("display", "list-item");
            me.find('li:has(ul)').addClass('parent_li');
            me.find('li:has(ul)').find(" > span > i").removeClass("fa-leaf").addClass("fa-minus-square");

            // 绑定点击事件
            me.dzTree('bindOnClick');

            // 绑定span的离开焦点事件
            me.dzTree('bindOnSpanBlur');
            me.dzTree('bindOnSpanKeyDown');

            // 过滤编辑结点时，粘贴内容中的样式，只保留其中的文字
            var x = document.getElementsByClassName("dzTreeText");
            var i;
            console.log(x.length);
            for (i = 0; i < x.length; i++) {
                x[i].addEventListener("paste", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(e);
                    var text = e.clipboardData.getData("text/plain");
                    console.log("text=" + text);
                    document.execCommand("insertHTML", false, text);
                });
            }

            // ===========选中新结点=========
            var newNodeObj = $("#dzTree_" + newNode['id']).find('span');
            if (newNodeObj.parent().hasClass("parent_li")) {
                var children = newNodeObj.parent('li.parent_li').find(' > ul > li');
                if (children.is(":visible")) {
                    children.hide('fast');
                    newNodeObj.attr('title', '点击展开').find(' > i').addClass('fa-plus-square').removeClass('fa-minus-square');
                } else {
                    children.show('fast');
                    newNodeObj.attr('title', '点击收起').find(' > i').addClass('fa-minus-square').removeClass('fa-plus-square');
                }
            }

            // 清除之前选中结点的选中样式
            $("#dzTree_" + conf.currentNodeId).find(" > span").removeClass("bg-orange");
            // 设置当前选中结点的选中样式
            if (!newNodeObj.hasClass("bg-orange")) {
                newNodeObj.addClass("bg-orange");
            }
            conf.currentNodeId = newNode['id'];

            // 设置全选文字
            selectText(newNodeObj.find("div").get(0));
            // ===========选中新结点=========
        },
        /**
         * 删除当前的临时结点，即刚刚添加还未保存到数据库的结点，已保存的结点通过后台方法删除
         */
        removeCurrTmpNode: function () {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            var currNodeId = conf.currentNodeId;
            // var confirm = conf.confirmRemoveNode.call(this, currNodeId, me.dzTree('getTreeNodeDatasById', currNodeId));
            // if (!confirm) {
            //     return;
            // }
            if (currNodeId.startWith('tmp')) {
                var node = $("#dzTree_" + currNodeId);
                // 有兄弟结点的删除自身，否则连父节点ul一起删除
                if (node.siblings().length > 0) {
                    node.remove();
                } else {
                    node.parent().remove();
                }
                // 删除数据
                for (var i = 0; i < conf.datas.length; i++) {
                    if (conf.datas[i].id == currNodeId) {
                        conf.datas.splice(i, 1);
                        break;
                    }
                }
            }
            // if (currNodeId.startWith('tmp')) {
            //     var node = $("#dzTree_" + currNodeId);
            //     // 有兄弟结点的删除自身，否则连父节点ul一起删除
            //     if (node.siblings().length > 0) {
            //         node.remove();
            //     } else {
            //         node.parent().remove();
            //     }
            //     // 删除数据
            //     for (var i = 0; i < conf.datas.length; i++) {
            //         if (conf.datas[i].id == currNodeId) {
            //             conf.datas.splice(i, 1);
            //             break;
            //         }
            //     }
            // }
            // console.log(JSON.stringify(conf.datas));
        },
        /**
         * 取得当前选中结点的Id
         * @returns {*|string}
         */
        getCurrentNodeId: function () {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            return conf.currentNodeId;
        },
        /**
         * 返回指定结点是否有子节点
         * @param nodeId
         * @returns {*|Boolean|boolean}
         */
        hasChildNode: function (nodeId) {
            return $("#dzTree_" + nodeId).hasClass('parent_li');
        },
        /**
         * 返回指定结点的父节点id
         * @param nodeId
         * @returns {string|null|{}}
         */
        getParentNodeId: function (nodeId) {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            if (conf.datas.length > 0) {
                for (var i = 0; i < conf.datas.length; i++) {
                    if (conf.datas[i].id == nodeId) {
                        return conf.datas[i].parentId;
                    }
                }
            }
            return {};
        },
        /**
         * 返回所有数据
         * @returns {Array|null|*|datas|{node, edge}}
         */
        getAllDatas: function () {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            return conf.datas;
        },
        /**
         * 通过ID取得结点数据
         * @param id
         * @returns {*}
         */
        getTreeNodeDatasById: function (id) {
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            if (conf.datas.length > 0) {
                for (var i = 0; i < conf.datas.length; i++) {
                    if (conf.datas[i].id == id) {
                        return conf.datas[i];
                    }
                }
            }
            return {};
        },
        /**
         * 设置结点数据
         * @param id
         * @param data
         */
        setTreeNodeDatasById: function (id, data) {
            console.log("id=" + id);
            console.log("data=" + JSON.stringify(data));
            var me = $(this[0]);
            var conf = me[0].dzTreeConf;
            if (conf.datas.length > 0) {
                for (var i = 0; i < conf.datas.length; i++) {
                    if (conf.datas[i].id == id) {
                        $.extend(conf.datas[i], data);
                    }
                }
                $("#dzTree_" + id).find(">span >div.dzTreeText").html(data[conf.textFieldName]);
            }
        }
    });

    /**
     * 递归调用，生成树形结构的dom字符串，针对数据是递归形式的情况
     * @param nodes
     * @returns {string}
     */
    var getTreeStr = function (nodes) {
        if (nodes.length > 0) {
            var str = '<ul>';
            for (var i = 0; i < nodes.length; i++) {
                str += '<li' + (nodes[i].nodes ? ' class="parent_li"' : '') + '><span title="点击收起"><i class="' + (nodes[i].nodes ? 'fa fa-fw fa-minus-square' : 'fa fa-fw fa-leaf') + '"></i>' + nodes[i][me[0].dzTreeConf.textFieldName] + '</span>' + (nodes[i].url ? '<a href="' + nodes[i].url + '">' + (nodes[i].urlText ? nodes[i].urlText : '') + '</a>' : '') + (nodes[i].nodes ? getTreeStr(nodes[i].nodes) : '') + '</li>';
            }
            str += "</ul>";
            return str;
        }
        return '';
    };

    /**
     * 全选文字
     * @param text 要选中文字的js对象，注意不是jQuery对象
     */
    var selectText = function (text) {
        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            alert("none");
        }
    }

    $.fn.dzTree = function (args) {
        if ($.dzTree[args]) {
            return $.dzTree[args].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof args === 'object' || !args) {
            return $.dzTree.init.apply(this, arguments);
        } else {
            $.error('Method' + args + 'does not exist on dzTree');
        }
    };
})(jQuery, window, document);
