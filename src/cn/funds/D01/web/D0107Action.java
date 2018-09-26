package cn.funds.D01.web;

import cn.funds.D01.manager.DingxingManager;
import cn.funds.D01.manager.TCompanyManager;
import cn.funds.D01.model.DingxingTable;
import cn.funds.D01.model.TCompany;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excel.ExcelOperator;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.model.QueryReqModel;
import cn.venice.util.web.GenericAction;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.struts2.dispatcher.multipart.MultiPartRequestWrapper;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * 【定性分析表】管理
 */
@Controller("D01_07action")
public class D0107Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "DingxingMgr")
    private DingxingManager mgr;

    public String save(){
        List<DingxingTable> list= (List<DingxingTable>) this.fromRequestToList(DingxingTable.class);
        if (mgr.saveOrUpdate(list) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String getDingxinByCompanyId() {
        DingxingTable d = (DingxingTable) this.fromRequest(DingxingTable.class);
        return this.returnDatas(mgr.getDingxinByCompanyId(d.getCompanyId()));
    }
}
