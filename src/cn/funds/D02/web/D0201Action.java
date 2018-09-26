package cn.funds.D02.web;

import cn.funds.D01.manager.TCompanyManager;
import cn.funds.D01.model.TCompany;
import cn.funds.D01.model.VProduct;
import cn.funds.D01.model.VProductnet;
import cn.funds.D02.manager.CombineManager;
import cn.funds.D02.model.Combine;
import cn.funds.D02.model.FundAllocationModel;
import cn.funds.D02.model.LookBackModel;
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
import java.text.SimpleDateFormat;
import java.util.*;

@Controller("D02_01action")
public class D0201Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "CombineMgr")
    private CombineManager mgr;

    public String save() {
        Combine d = (Combine) this.fromRequest(Combine.class);
        if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String remove() {
        Combine d = (Combine) this.fromRequest(Combine.class);
        if (mgr.delete(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from Combine");
    }

    public String calcWeight() {
        FundAllocationModel d = (FundAllocationModel) this.fromRequest(FundAllocationModel.class);
        return this.returnDatas(mgr.calcWeight(d));
    }

    public String lookBack() {
        LookBackModel d = (LookBackModel) this.fromRequest(LookBackModel.class);
        String[] productCodeArr = d.getProductCodeStr().split(",");
        String[] weightArr = d.getWeightStr().split(",");

        // 返回收益参数
        d.setAnnualIncome("-40.01");
        d.setAnnualRisk("12");
        d.setAnnualActiveIncome("13");
        d.setAnnualActiveRisk("14");
        d.setImplementAlpha("34");
        d.setImplementBeta("22");
        d.setInformationRatio("44");
        d.setSharpRatio("55");
        d.setTreynorRatio("11.33");

        // 返回风险参数
        d.setMaxRetracement("20.88");
        d.setAnnualizedVolatility("18.59");

        // ==================== echart队列 ====================
        List<ECharsModel> eCharsModelList = new ArrayList<>();

        // 1、构造echart对象——收益走势
        ECharsModel sy_eCharsModel = new ECharsModel();
        //标题
        sy_eCharsModel.setTitle(d.getLookBackRiqi_s() + " 至 " + d.getLookBackRiqi_e() + "收益走势");

        // legend
        List<String> sy_legendList = new ArrayList<>();
        sy_legendList.add("目标方案");
        sy_legendList.add("业绩基准");
        sy_eCharsModel.setLegend(sy_legendList);

        // 横坐标列表
        List<String> sy_xAxisList = new ArrayList<>();

        List<SeriesModel> sy_seriesModels = new ArrayList<>();

        SeriesModel sy_targetPlanSeries = new SeriesModel();
        sy_targetPlanSeries.setName("目标方案");
        sy_targetPlanSeries.setType("line");
        List<String> sy_targetPlanDatas = new ArrayList<>();

        SeriesModel sy_benchmarkSeries = new SeriesModel();
        sy_benchmarkSeries.setName("业绩基准");
        sy_benchmarkSeries.setType("line");
        List<String> sy_benchmarkDatas = new ArrayList<>();

        List<VProductnet> list = mgr.find("from VProductnet where productCode=?", productCodeArr[0]);
        for (int i = 0; i < list.size(); i++) {
            VProductnet v = list.get(i);
            sy_xAxisList.add(v.getRiqi());
            sy_targetPlanDatas.add(String.valueOf(v.getUnitNet()));
            sy_benchmarkDatas.add(String.valueOf(v.getAccumulatedNet()));
        }
        sy_targetPlanSeries.setData(sy_targetPlanDatas);
        sy_benchmarkSeries.setData(sy_benchmarkDatas);

        sy_seriesModels.add(sy_targetPlanSeries);
        sy_seriesModels.add(sy_benchmarkSeries);

        sy_eCharsModel.setSeries(sy_seriesModels);

        sy_eCharsModel.setxAxisDatas(sy_xAxisList);

        eCharsModelList.add(sy_eCharsModel);

        // 2、构造echart对象——净值走势
        ECharsModel jz_eCharsModel = new ECharsModel();
        //标题
        jz_eCharsModel.setTitle(d.getLookBackRiqi_s() + " 至 " + d.getLookBackRiqi_e() + "收益走势");

        // legend
        List<String> jz_legendList = new ArrayList<>();
        jz_legendList.add("目标方案");
        jz_legendList.add("业绩基准");
        jz_eCharsModel.setLegend(jz_legendList);

        // 横坐标列表
        List<String> jz_xAxisList = new ArrayList<>();

        List<SeriesModel> jz_seriesModels = new ArrayList<>();

        SeriesModel jz_targetPlanSeries = new SeriesModel();
        jz_targetPlanSeries.setName("目标方案");
        jz_targetPlanSeries.setType("line");
        List<String> jz_targetPlanDatas = new ArrayList<>();

        SeriesModel jz_benchmarkSeries = new SeriesModel();
        jz_benchmarkSeries.setName("业绩基准");
        jz_benchmarkSeries.setType("line");
        List<String> jz_benchmarkDatas = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            VProductnet v = list.get(i);
            jz_xAxisList.add(v.getRiqi());
            jz_targetPlanDatas.add(String.valueOf(v.getUnitNet()));
            jz_benchmarkDatas.add(String.valueOf(v.getAccumulatedNet()));
        }
        jz_targetPlanSeries.setData(jz_targetPlanDatas);
        jz_benchmarkSeries.setData(jz_benchmarkDatas);

        jz_seriesModels.add(jz_targetPlanSeries);
        jz_seriesModels.add(jz_benchmarkSeries);

        jz_eCharsModel.setSeries(jz_seriesModels);

        jz_eCharsModel.setxAxisDatas(jz_xAxisList);

        eCharsModelList.add(jz_eCharsModel);

        // 3、构造echart对象——每日回撤
        ECharsModel hc_eCharsModel = new ECharsModel();
        //标题
        hc_eCharsModel.setTitle(d.getLookBackRiqi_s() + " 至 " + d.getLookBackRiqi_e() + "每日回撤");

        Map<String, Double> dataMap = new HashMap<>();
        // legend
        List<String> hc_legendList = new ArrayList<>();
        hc_legendList.add("目标方案");
        hc_legendList.add("最大回撤");
        hc_eCharsModel.setLegend(hc_legendList);

        // 横坐标列表
        List<String> hc_xAxisList = new ArrayList<>();

        List<SeriesModel> hc_seriesModels = new ArrayList<>();

        SeriesModel hc_targetPlanSeries = new SeriesModel();
        hc_targetPlanSeries.setName("目标方案");
        hc_targetPlanSeries.setType("line");
        List<String> hc_targetPlanDatas = new ArrayList<>();

        SeriesModel hc_benchmarkSeries = new SeriesModel();
        hc_benchmarkSeries.setName("最大回撤");
        hc_benchmarkSeries.setType("line");
        List<String> hc_benchmarkDatas = new ArrayList<>();

        double maxRetracement = 0.0;
        for (int i = 0; i < list.size(); i++) {
            VProductnet v = list.get(i);
            hc_xAxisList.add(v.getRiqi());
            hc_targetPlanDatas.add(String.valueOf(v.getUnitNet()));
            if (v.getUnitNet() > maxRetracement) {
                maxRetracement = v.getUnitNet();
            }
        }
        for (int i = 0; i < list.size(); i++) {
            hc_benchmarkDatas.add(String.valueOf(maxRetracement));
        }
        hc_targetPlanSeries.setData(hc_targetPlanDatas);
        hc_benchmarkSeries.setData(hc_benchmarkDatas);

        hc_seriesModels.add(hc_targetPlanSeries);
        hc_seriesModels.add(hc_benchmarkSeries);

        hc_eCharsModel.setSeries(hc_seriesModels);

        hc_eCharsModel.setxAxisDatas(hc_xAxisList);

        eCharsModelList.add(hc_eCharsModel);

        List<LookBackModel> argList = new ArrayList<>();
        argList.add(d);

        return this.returnJSONSUCCESS(argList, eCharsModelList);
    }

}
