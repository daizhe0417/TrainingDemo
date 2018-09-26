package cn.funds.D01.web;

import cn.funds.D01.manager.BenchmarkManager;
import cn.funds.D01.model.Benchmark;
import cn.funds.D01.model.TCompany;
import cn.funds.D01.model.TProduct;
import cn.funds.D01.model.VProductnet;
import cn.venice.gen.model.GenericModel;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excel.ExcelOperator;
import cn.venice.util.manager.GenericManager;
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
 * 业绩基准
 */
@Controller("D01_05action")
public class D0105Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "BenchmarkMgr")
    private BenchmarkManager mgr;


    public String save() {
        Benchmark d = (Benchmark) this.fromRequest(Benchmark.class);
        if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String remove() {
        Benchmark d = (Benchmark) this.fromRequest(Benchmark.class);
        if (mgr.delete(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from Benchmark", VProductnet.class);
    }

    public String getAllSOMBenchmarks() {
        return this.returnDatas(mgr.getAllSOMBenchmarks());
    }

    public String getSOMBenchmarkByProductClass() {
        TProduct d = (TProduct) this.fromRequestToObject(TProduct.class);
        return this.returnDatas(mgr.getSOMBenchmarkByProductId(d.getLargeClass()));
    }

}
