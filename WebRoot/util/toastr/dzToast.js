dzToast = function (msg, type) {
    console.log("dzToast"+msg+type);
    if ('undefined' == typeof toastr) {
        alert(msg);
    } else {
        eval('toastr.' + type + '("' + msg + '")');
    }
    clear_toastr(1600);
}

// 动态设置消息提示时间
function clear_toastr(time) {
    setTimeout(
        function () {
            // $("#dzToastModal").modal("hide");
            toastr.clear();
        }, time);
}