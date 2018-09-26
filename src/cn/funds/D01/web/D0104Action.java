package cn.funds.D01.web;

import cn.funds.D01.manager.ProductNetManager;
import cn.funds.D01.manager.TProductManager;
import cn.funds.D01.model.*;
import cn.venice.gen.exception.UserInfoException;
import cn.venice.gen.model.GenericModel;
import cn.venice.gen.model.UserInfoModel;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excel.ExcelOperator;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.model.QueryReqModel;
import cn.venice.util.model.echart.ECharsModel;
import cn.venice.util.model.echart.SeriesModel;
import cn.venice.util.web.GenericAction;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.struts2.dispatcher.multipart.MultiPartRequestWrapper;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 基金净值
 */
@Controller("D01_04action")
public class D0104Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "ProductNetMgr")
    private ProductNetManager mgr;

    public String save() {
        Productnet d = (Productnet) this.fromRequestToObject(Productnet.class);
        if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String remove() {
        Productnet d = (Productnet) this.fromRequestToObject(Productnet.class);
        if (mgr.delete(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from VProductnet", VProductnet.class);
    }

    public String chart() {
        GenericModel m = (GenericModel) this.fromRequest(GenericModel.class);
        List<VProductnet> list = null;
        if (m.getArg2() != null && !m.getArg2().equals("")) {
            if (m.getArg3() != null && !m.getArg3().equals("")) {
                list = mgr.find("from VProductnet where productId=? and riqi>=? and riqi<=? order by riqi", Integer.parseInt(m.getArg1()), m.getArg2(), m.getArg3());
            } else {
                list = mgr.find("from VProductnet where productId=? and riqi>=? order by riqi", Integer.parseInt(m.getArg1()), m.getArg2());
            }

        } else if (m.getArg3() != null && !m.getArg3().equals("")) {
            list = mgr.find("from VProductnet where productId=? and riqi<=? order by riqi", Integer.parseInt(m.getArg1()), m.getArg3());
        } else {
            list = mgr.find("from VProductnet where productId=? order by riqi", Integer.parseInt(m.getArg1()));
        }

        if (list == null || list.isEmpty()) {
            return returnJSONFAILURE();
        }

        // 构造echart对象
        ECharsModel eCharsModel = new ECharsModel();
        //标题
        String titleStr = "";
        if (m.getArg2() != null && !"".equals(m.getArg2()) && m.getArg3() != null && !"".equals(m.getArg3())) {
            titleStr = m.getArg2() + " 至 " + m.getArg3();
        }
        eCharsModel.setTitle(titleStr + "[" + list.get(0).getProductName() + "] 净值曲线");

        Map<String, Double> dataMap = new HashMap<>();
        // legend
        List<String> legendList = new ArrayList<>();
        legendList.add("单位净值");
        legendList.add("累计净值");
        //legendList.add("沪深300");
        eCharsModel.setLegend(legendList);

        // 横坐标列表
        List<String> xAxisList = new ArrayList<>();

        List<SeriesModel> seriesModels = new ArrayList<>();
        SeriesModel unitNetSeries = new SeriesModel();
        unitNetSeries.setName("单位净值");
        unitNetSeries.setType("line");
        List<String> unitNetDatas = new ArrayList<>();

        SeriesModel accumulatedNetSeries = new SeriesModel();
        accumulatedNetSeries.setName("累计净值");
        accumulatedNetSeries.setType("line");
        List<String> accumulatedNetDatas = new ArrayList<>();

        //SeriesModel hs300Series = new SeriesModel();
        //hs300Series.setName("沪深300");
        //hs300Series.setType("line");
        //List<String> hs300Datas = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            VProductnet v = list.get(i);
            xAxisList.add(v.getRiqi());
            unitNetDatas.add(String.valueOf(v.getUnitNet()));
            accumulatedNetDatas.add(String.valueOf(v.getAccumulatedNet()));
            //hs300Datas.add(String.valueOf(v.getHs300()));
        }
        unitNetSeries.setData(unitNetDatas);
        accumulatedNetSeries.setData(accumulatedNetDatas);
        //hs300Series.setData(hs300Datas);

        seriesModels.add(unitNetSeries);
        seriesModels.add(accumulatedNetSeries);
        //seriesModels.add(hs300Series);

        eCharsModel.setSeries(seriesModels);

        eCharsModel.setxAxisDatas(xAxisList);


        return this.returnDatas(eCharsModel);
    }


    private String columns;

    public String getColumns() {
        return columns;
    }

    public void setColumns(String columns) {
        this.columns = columns;
    }

    public String importData() {

        HttpServletRequest request = this.getRequest();
        MultiPartRequestWrapper multipartRequest = (MultiPartRequestWrapper) request;

        File[] files = multipartRequest.getFiles("iptUploadFile[]");

        Gson gson = new Gson();
        List<ColumnModel> fieldsList = gson.fromJson(this.columns, new TypeToken<List<ColumnModel>>() {
        }.getType());

        return this.returnDatas(mgr.importData(fieldsList, files[0]));
    }

    InputStream excelStream;

    public InputStream getExcelStream() {
        return excelStream;
    }

    public void setExcelStream(InputStream excelStream) {
        this.excelStream = excelStream;
    }

    private String downloadFileName;

    public String getDownloadFileName() {
        return downloadFileName;
    }

    public void setDownloadFileName(String downloadFileName) {
        this.downloadFileName = downloadFileName;
    }

    public String export() {
        QueryReqModel pm = (QueryReqModel) this.fromJSON(reqJsonStr,
                QueryReqModel.class);
        pm.setHql("from VProductnet");
        pm.parseQuery();
        List<VProductnet> chtList = mgr.find(pm.getHql(), pm.getParams());
        Gson gson = new Gson();
        List<ColumnModel> fieldsList = gson.fromJson(this.columns, new TypeToken<List<ColumnModel>>() {
        }.getType());
        fieldsList.add(0, new ColumnModel("productCode", "基金代码"));
        this.downloadFileName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date())
                + "VProductnetExport.xls";
        this.excelStream = ExcelOperator.getExportStream(fieldsList, chtList, "基金净值曲线", VProductnet.class);
        return "exportResult";
    }

}
