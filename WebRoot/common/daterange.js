(function ($) {
    $.fn.daterange = function (settings) {

        var dateRangeLocale = {
            "format": 'YYYY-MM-DD',
            "separator": " - ",
            "applyLabel": "确定",
            "cancelLabel": "取消",
            "fromLabel": "起始时间",
            "toLabel": "结束时间'",
            "customRangeLabel": "自定义",
            "weekLabel": "W",
            "daysOfWeek": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            "firstDay": 1
        };

        function dateRangeFun(start, end) {
            me.val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
        }

        var defaultSettings = {
            'locale': dateRangeLocale,
            //汉化按钮部分
            // ranges: {
            //     '今日': [moment(), moment()],
            //     '昨日': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            //     '最近7日': [moment().subtract(6, 'days'), moment()],
            //     '最近30日': [moment().subtract(29, 'days'), moment()],
            //     '本月': [moment().startOf('month'), moment().endOf('month')],
            //     '上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            // },
            // startDate: momentsnbe
        };

        var me = $(this);

        console.log(me);

        // 用传进来的参数覆盖默认，没传则保留
        var conf = $.extend(defaultSettings, settings || {});

        // me.val('');

        me.daterangepicker(conf, dateRangeFun)

    };
})($);