;(function ($, window, document, undefined) {
    window.DzConfirm = function () {
        var init = function (options) {
            var defalutConf = {
                title: '操作提示',
                message: '提示内容',
                okBtn: '确定',
                cancelBtn: '取消',
                width: 200
            };
            if (typeof options === 'string') {
                options = {message: options};
            }
            var conf = $.extend({}, defalutConf, options || {});
            var id = 'dzconfirm' + new Date().valueOf();
            var loadingHtml='<div class="progress progress-striped active">' +
                '               <div class="progress-bar progress-bar-success" role="progressbar" style="width: 100%;"></div>' +
                '           </div>';
            var html = '<div class="modal fade" id="' + id + '" tabindex="-1" role="dialog" aria-hidden="true" data-keyboard=false>' +
                '           <div class="modal-dialog">' +
                '               <div class="modal-content">' +
                '                   <div class="modal-header">' +
                '                       <h4 class="modal-title" id="myModalLabel">' + conf.title + '</h4>' +
                '                   </div>' +
                '               <div class="modal-body">' + (conf.message ? conf.message : loadingHtml) + '</div>' +
                '               <div class="modal-footer">' +
                '                   <button type="button" id="cancelBtn_' + id + '" class="btn btn-default" data-dismiss="modal">' + conf.cancelBtn + '</button>' +
                '                   <button type="button" id="okBtn_' + id + '" class="btn btn-success" data-dismiss="modal">' + conf.okBtn + '</button>' +
                '               </div>' +
                '           </div>' +
                '       </div>' +
                '</div>';
            $("body").append(html);
            $("#" + id).modal({
                width: conf.width,
                backdrop: 'static'
            }).on('hide.bs.modal', function (e) {
                $('body').find('#' + id).remove();
            });
            return id;
        }
        return {
            alert: function (options) {
                var id = init(options);
                $("#cancelBtn_" + id).hide();
                return {
                    id: id,
                    click: function (callback) {
                        if (callback && callback instanceof Function) {
                            $("#okBtn_" + id).on("click", function () {
                                callback(true);
                            });
                        }
                    }
                }
            },
            confirm: function (options) {
                var id = init(options);
                return {
                    id: id,
                    click: function (callback) {
                        if (callback && callback instanceof Function) {
                            $("#cancelBtn_" + id).on("click", function () {
                                callback(false);
                            });
                            $("#okBtn_" + id).on("click", function () {
                                callback(true);
                            });
                        }
                    }
                }
            },
            loading: function (options) {
                var id = init({
                    title: "正在加载，请等待......",
                    message: null
                });
                $("#" + id).find(".modal-footer").hide();
                return {
                    id: id,
                    close: function () {
                        $('body').find('#' + id).remove();
                    }
                }
            }, close: function (id) {
                console.log("close=" + id);
                $("#" + id).modal("hide");
                $('body').find('#' + id).remove();
            }
        }
    }();
})(jQuery, window, document);