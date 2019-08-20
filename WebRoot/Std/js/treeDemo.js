var actionname = "D00_01action";
jQuery(document).ready(function () {
    // query();
    $("#dzTreeContainer").dzTree({
        textFieldName: 'bmmc',
        showBtns: true,
        saveMethod: 'D00_01action_saveAllNodes',
        deleteMethod: 'D00_01action_remove',
        queryMethod: 'D00_01action_query',
        onClickNode: function (nodeId, nodeData) {
            console.log(JSON.stringify(nodeData));
            $("#id").val(nodeId);
            $("#bmmc").val(nodeData.bmmc);
            $("#parentId").val(nodeData.parentId);
            $("#type").val(nodeData.type ? nodeData.type : "");
            $("#descrip").val(nodeData.descrip ? nodeData.descrip : "");
            $("#seq").val(nodeData.seq);
            $("#deltag").val(nodeData.deltag);
            $("#bmdm").val(nodeData.bmdm);
        }
    });

    $("#saveBtn").on("click", function () {
        var data = {
            id: $("#id").val(),
            bmmc: $("#bmmc").val(),
            parentId: $("#parentId").val(),
            type: $("#type").val(),
            descrip: $("#descrip").val(),
            seq: $("#seq").val(),
            deltag: $("#deltag").val(),
            bmdm: $("#bmdm").val()
        };
        ajax({
            url: "D00_01action_save",
            data: {
                reqJsonStr: JSON.stringify(data)
            },
            success: function (item) {
                if (item.status == '1') {
                    dzToast('保存成功', 'success');
                    $("#dzTreeContainer").dzTree('setTreeNodeDatasById', data.id, data);
                } else {
                    dzToast('保存失败', 'error');
                }
            }
            ,
            error: function (item) {
                if (item.status == '1') {
                    dzToast('保存成功', 'success');
                } else {
                    dzToast('保存失败', 'error');
                }
            }
        })
        ;
    });
});