<%@ page language="java" pageEncoding="UTF-8" %>
<script type="text/javascript">
    $("#a_logout").on("click", function () {
        $.ajax({
            url: "login!logout.action?random=" + Math.random(),
            type: "POST",
            data: {},
            timeout: 30000,
            dataType: "json",
            success: function (item) {
//                    if (item.status == 1) {
//                        top.location = "login.jsp";
//                    } else if (item.status == 2) {
                window.history.forward(1);
                top.location = "login.jsp";
//                    }
            },
            error: function () {
                alert('ddd')
            }
        });
    });
</script>
