/*
 * 扩展的datepicker方法，模拟产生change事件
 * @author daizhe
 * @version 1.0
 * @date 2014-06-20
 */
(function ($) {
    $.fn.datepicker = function (settings) {
        var defaultSettings = {
            language: 'zh-CN',
            // weekStart: 1,
            // todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            format: 'yyyy-mm-dd'
        };

        var me = $(this);

        // 用传进来的参数覆盖默认，没传则保留
        var conf = $.extend(defaultSettings, settings || {});

        me.datetimepicker(conf);
    };
})($);
