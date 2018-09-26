package cn.funds.D01.web;

import cn.funds.D01.manager.TCompanyManager;
import cn.funds.D01.model.TCompany;
import cn.funds.D01.model.VProductnet;
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
 * 【基金公司】管理
 */
@Controller("D01_01action")
public class D0101Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "TCompanymgr")
    private TCompanyManager mgr;

    public String save() {
        TCompany d = (TCompany) this.fromRequestToObject(TCompany.class);
        if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String remove() {
        TCompany d = (TCompany) this.fromRequestToObject(TCompany.class);
        if (mgr.delete(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from TCompany where deltag!='1'");
    }

    public String export() {
        QueryReqModel pm = (QueryReqModel) this.fromJSON(reqJsonStr,
                QueryReqModel.class);
        pm.setHql("from TCompany");
        pm.parseQuery();
        List<TCompany> dataList = mgr.find(pm.getHql(), pm.getParams());
        Gson gson = new Gson();
        List<ColumnModel> fieldsList = gson.fromJson(this.getColumns(), new TypeToken<List<ColumnModel>>() {
        }.getType());
        this.setDownloadFileName(new SimpleDateFormat("yyyyMMddhhmmss").format(new Date())
                + "TCompanyExport.xls");
        this.setExcelStream(ExcelOperator.getExportStream(fieldsList, dataList, "基金公司", TCompany.class));
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

    public String uploadFile() {
        HttpServletRequest request = this.getRequest();
        MultiPartRequestWrapper multipartRequest = (MultiPartRequestWrapper) request;

        File[] files = multipartRequest.getFiles("iptUploadFile[]");

        String basePath = request.getSession().getServletContext()
                .getRealPath("");
        String[] fileNames = multipartRequest.getFileNames("iptUploadFile[]");
        String suffix = fileNames[0].substring(fileNames[0].lastIndexOf(".") + 1);
        return this.returnDatas(mgr.uploadFile(this.getId(), this.getFileType(), files[0], basePath, suffix));
    }

    public String getAllSOMCompanys() {
        return this.returnDatas(mgr.getAllSOMCompanys());
    }

}
