var jqGrid_selRowId;
// var jqGridCommonConf = {
//     // styleUI: 'Bootstrap',
//     datatype: "local",
//     height: 498,
//     // width : '90%',
//     // autowidth: true,
//     // autoheight: true,
//     shrinkToFit: false,
//     // autoScroll : true,
//     multiselect: false,//复选框
//     rowNum: 100,
//     rowTotal: 200,
//     rowList: [20, 30, 50],
//     loadonce: true,
//     mtype: "GET",
//     rownumbers: true,
//     rownumWidth: 25,
//     gridview: true,
//     pager: '#jqGridPager',
//     viewrecords: true,
//     sortorder: "asc",
//     ondblClickRow: function (rowid, iRow, iCol, e) {
//         jqGrid_selRowId = rowid;
//         onModBtn();
//     },
//     sortable: false
// };

var dzGrdiCommonConf = {
    multiSelect: false,
    sel_rowsPerPage: false,
    onClickCell: function (rowId, iCol, cellContent, e) {
        console.log("page onClickCell" + rowId + "===" + iCol + "===" + cellContent);
    },
    onSelectRow: function (rowId, iCol, rowData, e) {
        console.log("page onSelectRow" + rowId + "===" + iCol + "===" + rowData);
    },
    onDblClickRow: function (rowId, iCol, rowData, e) {
        console.log("page onDblClickRow" + rowId + "===" + iCol + "===" + JSON.stringify(rowData));
        onModBtn();
    },
    onSelectAllRow: function (isSelect, e) {
        console.log("page onDblClickRow" + isSelect);
    },
    // allColSortable: true
    onSort: function (fieldName, order) {
        pagerReq.pageNum = 1;
        pagerReq.orderByStr = fieldName + " " + order;
        toQuery();
    },
    afterFillGrid: function (pagerModel) {
        // console.log("afterFillGrid:rowsPerPage = " + pagerModel.rowsPerPage);
        // console.log("afterFillGrid:height = " + (pagerModel.rowsPerPage * 34 + 100));
        $(document.body).height(pagerModel.rowsPerPage * 34 + 160);
        if(typeof parent.resizeTab==='function'){
            parent.resizeTab();
        }
    }
};

var ajaxTimeOut = 30000;

function selectDataFormatter(data, value) {
    for (var i = 0; i < data.length; i++) {
        if (value == data[i].value) {
            return data[i].name;
        }
    }
}

function selectDataUnFormatter(data, name) {
    for (var i = 0; i < data.length; i++) {
        if (name == data[i].name) {
            return data[i].value;
        }
    }
}

var dzGlobal = window.dzGlobal = window.dzGlobal || {};

// (function (global) {
//     var hello = 'abc';
//     global.hello = hello; // 将当前闭包内的某个变量绑定到全局环境
//     var selectedRowIdsMap = new Map();
//     var globalVar = {selectedRowIdsMap: selectedRowIdsMap};
//     global.globalVar = globalVar;
//
// })(window);