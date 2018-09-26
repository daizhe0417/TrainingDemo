package cn.funds.D02.model;

public class LookBackModel {
    // 回撤参数
    private String productCodeStr;          // 产品代码列表，逗号分开
    private String weightStr;               // 产品权重列表，逗号分开
    private String lookBackRiqi_s;          // 回测起始日期
    private String lookBackRiqi_e;          // 回测截至日期
    private String yjjz;                    // 业绩基准id
    private String jzpl;                    // 净值频率（目前只有'1'表示周）

    // 返回数据
    private String annualIncome;            //年化总收益
    private String annualRisk;              //年化总风险
    private String annualActiveIncome;      //年化主动收益
    private String annualActiveRisk;        //年化主动风险
    private String implementAlpha;          //实现阿尔法
    private String implementBeta;           //实现贝塔
    private String informationRatio;        //信息比率
    private String sharpRatio;              //夏普比率
    private String treynorRatio;            //特雷诺比率

    private String maxRetracement;          //最大回撤
    private String annualizedVolatility;    //年化波动率

    public String getProductCodeStr() {
        return productCodeStr;
    }

    public void setProductCodeStr(String productCodeStr) {
        this.productCodeStr = productCodeStr;
    }

    public String getWeightStr() {
        return weightStr;
    }

    public void setWeightStr(String weightStr) {
        this.weightStr = weightStr;
    }

    public String getLookBackRiqi_s() {
        return lookBackRiqi_s;
    }

    public void setLookBackRiqi_s(String lookBackRiqi_s) {
        this.lookBackRiqi_s = lookBackRiqi_s;
    }

    public String getLookBackRiqi_e() {
        return lookBackRiqi_e;
    }

    public void setLookBackRiqi_e(String lookBackRiqi_e) {
        this.lookBackRiqi_e = lookBackRiqi_e;
    }

    public String getYjjz() {
        return yjjz;
    }

    public void setYjjz(String yjjz) {
        this.yjjz = yjjz;
    }

    public String getJzpl() {
        return jzpl;
    }

    public void setJzpl(String jzpl) {
        this.jzpl = jzpl;
    }

    public String getAnnualIncome() {
        return annualIncome;
    }

    public void setAnnualIncome(String annualIncome) {
        this.annualIncome = annualIncome;
    }

    public String getAnnualRisk() {
        return annualRisk;
    }

    public void setAnnualRisk(String annualRisk) {
        this.annualRisk = annualRisk;
    }

    public String getAnnualActiveIncome() {
        return annualActiveIncome;
    }

    public void setAnnualActiveIncome(String annualActiveIncome) {
        this.annualActiveIncome = annualActiveIncome;
    }

    public String getAnnualActiveRisk() {
        return annualActiveRisk;
    }

    public void setAnnualActiveRisk(String annualActiveRisk) {
        this.annualActiveRisk = annualActiveRisk;
    }

    public String getImplementAlpha() {
        return implementAlpha;
    }

    public void setImplementAlpha(String implementAlpha) {
        this.implementAlpha = implementAlpha;
    }

    public String getImplementBeta() {
        return implementBeta;
    }

    public void setImplementBeta(String implementBeta) {
        this.implementBeta = implementBeta;
    }

    public String getInformationRatio() {
        return informationRatio;
    }

    public void setInformationRatio(String informationRatio) {
        this.informationRatio = informationRatio;
    }

    public String getSharpRatio() {
        return sharpRatio;
    }

    public void setSharpRatio(String sharpRatio) {
        this.sharpRatio = sharpRatio;
    }

    public String getTreynorRatio() {
        return treynorRatio;
    }

    public void setTreynorRatio(String treynorRatio) {
        this.treynorRatio = treynorRatio;
    }

    public String getMaxRetracement() {
        return maxRetracement;
    }

    public void setMaxRetracement(String maxRetracement) {
        this.maxRetracement = maxRetracement;
    }

    public String getAnnualizedVolatility() {
        return annualizedVolatility;
    }

    public void setAnnualizedVolatility(String annualizedVolatility) {
        this.annualizedVolatility = annualizedVolatility;
    }
}
