dzToast = function (msg, type) {
    if ('undefined' == typeof toastr) {
        alert(msg);
    } else {
        eval('toastr.' + type + '("' + msg + '")');
    }
}
