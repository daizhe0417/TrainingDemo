package cn.funds.D01.web;

import cn.funds.D01.manager.TProductManager;
import cn.funds.D01.manager.TProductManager;
import cn.funds.D01.model.TProduct;
import cn.funds.D01.model.TempResult;
import cn.funds.D01.model.VManagement;
import cn.funds.D01.model.VProduct;
import cn.venice.D00.model.D0001;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excel.ExcelOperator;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.model.QueryReqModel;
import cn.venice.util.web.GenericAction;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import net.sf.json.JSONObject;
import org.apache.struts2.dispatcher.multipart.MultiPartRequestWrapper;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller("D01_03action")
public class D0103Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "TProduct")
    private TProductManager mgr;

    public String save() {
        TProduct d = (TProduct) this.fromRequestToObject(TProduct.class);
        if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String remove() {
        TProduct d = (TProduct) this.fromRequestToObject(TProduct.class);
        if (mgr.delete(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from VProduct where deltag!='1'", VProduct.class);
    }

    public String getAllSOMProducts() {
        return this.returnDatas(mgr.getAllSOMProducts());
    }

    public String export() {
        QueryReqModel pm = (QueryReqModel) this.fromJSON(reqJsonStr,
                QueryReqModel.class);
        pm.setHql("from VProduct");
        pm.parseQuery();
        List<VProduct> dataList = mgr.find(pm.getHql(), pm.getParams());
        Gson gson = new Gson();
        List<ColumnModel> fieldsList = gson.fromJson(this.getColumns(), new TypeToken<List<ColumnModel>>() {
        }.getType());
        this.setDownloadFileName(new SimpleDateFormat("yyyyMMddhhmmss").format(new Date())
                + "VProductExport.xls");
        this.setExcelStream(ExcelOperator.getExportStream(fieldsList, dataList, "基金产品", VProduct.class));
        return "exportResult";
    }

    public String importData() {
        HttpServletRequest request = this.getRequest();
        MultiPartRequestWrapper multipartRequest = (MultiPartRequestWrapper) request;

        File[] files = multipartRequest.getFiles("iptUploadFile[]");

        Gson gson = new Gson();
        List<ColumnModel> fieldsList = gson.fromJson(this.getColumns(), new TypeToken<List<ColumnModel>>() {
        }.getType());

        return this.returnDatas(mgr.importData(fieldsList, files[0]));
    }

    @Override
    public String findById() {
        TProduct dd = (TProduct) this.fromRequestToObject(TProduct.class);
        List tmp = mgr.find("from TProduct where productCode=?", dd.getProductCode());
        if (tmp != null && !tmp.isEmpty()) {
            return this.returnDatas(tmp.get(0));
        }
        return this.returnJSONFAILURE();
    }

    public String getProductIndex() {
        TempResult d = (TempResult) this.fromRequestToObject(TempResult.class);
        return this.returnDatas(mgr.getProductIndex(d));
    }
}
