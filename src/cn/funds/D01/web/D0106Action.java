package cn.funds.D01.web;

import cn.funds.D01.manager.BenchmarkManager;
import cn.funds.D01.manager.ProductNetManager;
import cn.funds.D01.model.*;
import cn.venice.gen.model.GenericModel;
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
 * 业绩基准净值
 */
@Controller("D01_06action")
public class D0106Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "BenchmarkMgr")
    private BenchmarkManager mgr;

    public String save() {
        BenchmarkValue d = (BenchmarkValue) this.fromRequestToObject(BenchmarkValue.class);
        if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String remove() {
        BenchmarkValue d = (BenchmarkValue) this.fromRequestToObject(BenchmarkValue.class);
        if (mgr.delete(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from VBenchmark", VBenchmark.class);
    }

    public String chart() {
        GenericModel m = (GenericModel) this.fromRequest(GenericModel.class);
        List<VBenchmark> list = null;
        if (m.getArg2() != null && !m.getArg2().equals("")) {
            if (m.getArg3() != null && !m.getArg3().equals("")) {
                list = mgr.find("from VBenchmark where benchmarkId=? and riqi>=? and riqi<=?", Integer.parseInt(m.getArg1()), m.getArg2(), m.getArg3());
            } else {
                list = mgr.find("from VBenchmark where benchmarkId=? and riqi>=?", Integer.parseInt(m.getArg1()), m.getArg2());
            }

        } else if (m.getArg3() != null && !m.getArg3().equals("")) {
            list = mgr.find("from VBenchmark where benchmarkId=? and riqi<=?", Integer.parseInt(m.getArg1()), m.getArg3());
        } else {
            list = mgr.find("from VBenchmark where benchmarkId=?", Integer.parseInt(m.getArg1()));
        }

        if (list == null || list.isEmpty()) {
            return returnJSONFAILURE();
        }

        // 构造echart对象
        ECharsModel eCharsModel = new ECharsModel();
        //标题
        eCharsModel.setTitle(m.getArg2() + " 至 " + m.getArg3() + "[" + list.get(0).getBenchmarkName() + "] 指数曲线");

        Map<String, Double> dataMap = new HashMap<>();
        // legend
        List<String> legendList = new ArrayList<>();
        legendList.add("指数");
        eCharsModel.setLegend(legendList);

        // 横坐标列表
        List<String> xAxisList = new ArrayList<>();

        List<SeriesModel> seriesModels = new ArrayList<>();
        SeriesModel unitNetSeries = new SeriesModel();
        unitNetSeries.setName("指数");
        unitNetSeries.setType("line");
        List<String> unitNetDatas = new ArrayList<>();


        for (int i = 0; i < list.size(); i++) {
            VBenchmark v = list.get(i);
            xAxisList.add(v.getRiqi());
            unitNetDatas.add(String.valueOf(v.getValue()));
        }
        unitNetSeries.setData(unitNetDatas);

        seriesModels.add(unitNetSeries);

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
        pm.setHql("from VBenchmark");
        pm.parseQuery();
        List<VProductnet> chtList = mgr.find(pm.getHql(), pm.getParams());
        Gson gson = new Gson();
        List<ColumnModel> fieldsList = gson.fromJson(this.columns, new TypeToken<List<ColumnModel>>() {
        }.getType());
        this.downloadFileName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date())
                + "BenchmarkValueExport.xls";
        this.excelStream = ExcelOperator.getExportStream(fieldsList, chtList, "基准指数曲线", VBenchmark.class);
        return "exportResult";
    }

}
