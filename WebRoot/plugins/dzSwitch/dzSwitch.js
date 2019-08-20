/**
 * dzSwitch 0.0.1
 * a switch plugin base on jQuery and bootstrap
 * @author : venice
 * @Date : 2019-04-29
 */
;(function ($, window, document, undefined) {
    "use strict";
    $.dzSwitch = $.dzSwitch || {};
    $.extend($.dzSwitch, {
        // 构造方法
        init: function (settings) {
            var defaultSettings = {
                onBtnValue: "开",
                offBtnValue: "关",
                value: 0,
                onChange: function (value) {
                },
                setVal: function (value) {
                }
            };

            var me = $(this[0]);

            if (me == undefined || me[0] == undefined) {
                return false;
            }
            // console.log(JSON.stringify(me));
            var meId = me.attr("id");

            // 用传进来的参数覆盖默认，没传则保留
            me[0].dzSwitchConf = $.extend({}, defaultSettings, settings || {});

            if (me[0].dzSwitchConf.id == undefined || me[0].dzSwitchConf.id == '') {
                me[0].dzSwitchConf.id = meId;
            }

            var conf = me[0].dzSwitchConf;

            me.hide().val(conf.value);

            me.addClass("dzSwitch");

            console.log(me.attr("id"));
            console.log(conf.value);

            me.after('<div id="dzSwitchContainer_' + meId + '" class="btn-group pull-right ' + (me.hasClass("form-control") ? 'form-control' : '') + '">' +
                '       <button type="button" id="onBtn_' + meId + '" class="btn ' + (conf.value ? 'btn-success' : 'btn-default') + '">' + (conf.value ? conf.onBtnValue : '&nbsp;') + '</button>' +
                '       <button type="button" id="offBtn_' + meId + '" class="btn ' + (conf.value ? 'btn-default' : 'btn-danger') + '">' + (conf.value ? '&nbsp;' : conf.offBtnValue) + '</button>' +
                '   </div>');
            var container = $("#dzSwitchContainer_" + meId);
            if (container.hasClass("form-control")) {
                container.css({"padding-top": "0px", "border-width": "0"});
            }

            $("#onBtn_" + meId).on("click", function () {
                console.log($("#" + meId).val());
                if ($(this).hasClass("btn-success")) {
                    $(this).removeClass("btn-success").addClass("btn-default").html('&nbsp;');
                    $('#offBtn_' + meId).removeClass("btn-default").addClass("btn-danger").html(conf.offBtnValue);
                    $("#" + meId).val(0);
                } else {
                    $(this).removeClass("btn-default").addClass("btn-success").html(conf.onBtnValue);
                    $('#offBtn_' + meId).removeClass("btn-danger").addClass("btn-default").html('&nbsp;');
                    $("#" + meId).val(1);
                }
                me.trigger('change');
                conf.onChange.call(this, $("#" + meId).val());
            });

            $("#offBtn_" + meId).on("click", function () {
                console.log($("#" + meId).val());
                if ($(this).hasClass("btn-danger")) {
                    $(this).removeClass("btn-danger").addClass("btn-default").html('&nbsp;');
                    $('#onBtn_' + meId).removeClass("btn-default").addClass("btn-success").html(conf.onBtnValue);
                    me.val(1);
                } else {
                    $(this).removeClass("btn-default").addClass("btn-danger").html(conf.offBtnValue);
                    $('#onBtn_' + meId).removeClass("btn-success").addClass("btn-default").html('&nbsp;');
                    me.val(0);
                }
                me.trigger('change');
                conf.onChange.call(this, me.val());
            });
        },
        setVal: function (value) {
            console.log('dzSwitch.setVal.value=' + value);
            var me = $(this[0]);
            var conf = me[0].dzSwitchConf;
            if (value == 1) {
                me.val(value);
                console.log('ddd222');
                $("#onBtn_" + conf.id).removeClass("btn-default").addClass("btn-success").html(conf.onBtnValue);
                $("#offBtn_" + conf.id).removeClass("btn-danger").addClass("btn-default").html('&nbsp;');
            } else if (value == 0) {
                me.val(value);
                $("#onBtn_" + conf.id).removeClass("btn-success").addClass("btn-default").html('&nbsp;');
                $("#offBtn_" + conf.id).removeClass("btn-default").addClass("btn-danger").html(conf.offBtnValue);
            } else {
                DzConfirm.alert("[" + conf.id + "]：只能接收0或1为其值");
                return false;
            }
        },
        setDefaultVal: function () {
            var me = $(this[0]);
            var conf = me[0].dzSwitchConf;
            me.dzSwitch("setVal", conf.value);
        }
    });
    $.fn.dzSwitch = function (args) {
        if ($.dzSwitch[args]) {
            return $.dzSwitch[args].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof args === 'object' || !args) {
            return $.dzSwitch.init.apply(this, arguments);
        } else {
            $.error('Method' + args + 'does not exist on dzSwitch');
        }
    };
})(jQuery, window, document);
