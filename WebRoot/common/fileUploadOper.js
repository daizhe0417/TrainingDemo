(function ($) {
    $.fn.dzFileUpload = function (settings) {

        var defaultSettings = {
            showPreview: false,
            // showUpload: false,
            showCaption: true,
            enctype: 'multipart/form-data',
            allowedFileExtensions: ["xls", "pdf", "doc", "xlsx", "docx"],
            language: 'zh',
            uploadExtraData: {},
            uploadUrl: actionname + "_uploadFile"
        };

        var me = $(this);

        // 用传进来的参数覆盖默认，没传则保留
        var conf = $.extend(defaultSettings, settings || {});

        if (conf.inputFiled != undefined && conf.inputFiled != '') {
            // console.log(conf.inputFiled);
            // console.log($("#" + conf.inputFiled).length);
            if ($("#" + conf.inputFiled).length <= 0) {
                // console.log(me.parent().attr("class"));
                me.parent().append('<input type="hidden" id="' + conf.inputFiled + '">');
            }
        }

        // conf.uploadExtraData.fileName=
        // console.log("=========");
        // console.log("fileName" + $("#" + conf.inputFiled).val());
        // console.log("fileName" + $("#" + conf.inputFiled).parent().attr("class"));
        // console.log("fileName" + $("#" + conf.inputFiled).parent().find(".file-caption-name").attr("class"));
        // console.log("fileName" + $("#" + conf.inputFiled).parent().find(".file-caption-name").attr("title"));

        me.fileinput(conf).on("fileuploaded", function (event, data, previewId, index) {    //一个文件上传成功
            console.log(data.response.datas[0]);
            if (data.response.status == 1) {
                if ($("#" + conf.inputFiled).length > 0) {
                    $("#" + conf.inputFiled).val(data.response.datas[0]);
                    $("#" + conf.inputFiled).trigger("change");
                }
                dzToast(data.response.datas[0].replace("\\", "\/"), 'success');
                afterUploadFile(data);
            } else {
                dzToast(data.response.datas[0], 'error');
            }
            $("#uploadModal").modal("hide");
            // toQuery();
        }).on("fileerror", function (event, data, msg) {
            dzToast("上传失败", 'error');
        });
    };
})($);

function afterUploadFile(data) {
}