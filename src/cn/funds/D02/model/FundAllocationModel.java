package cn.funds.D02.model;

public class FundAllocationModel {
    private String productCodeStr;  // 产品代码列表，逗号分开
    private String modelType;       // 模型类型：1风险平价、2风险预算、3均值方差
    private String fxPeriod;        // 预计风险计算区间：11近半年、12近一年、13近三年、14近五年、15全部历史
    private String yhgz;            // 优化规则：21夏普率最大化、22信息比率最大化、23目标收益下风险最小化、24目标风险下收益最大化、25目标风险厌恶系数
    private String syPeriod;        // 预期收益率计算区间：31近半年、32近一年、33近三年、34近五年、35全部历史
    private String wfxll;           // 无风险利率
    private String yjjz1;           // 业绩基准
    private String mbsyxx;          // 预期目标收益下限
    private String mbfxsx;          // 预期目标风险上限
    private String mbfxywxs;        // 目标风险厌恶系数
    private String fxqzStr;         // 风险预算模型的边际风险列表，逗号分开


    public String getProductCodeStr() {
        return productCodeStr;
    }

    public void setProductCodeStr(String productCodeStr) {
        this.productCodeStr = productCodeStr;
    }

    public String getModelType() {
        return modelType;
    }

    public void setModelType(String modelType) {
        this.modelType = modelType;
    }

    public String getFxPeriod() {
        return fxPeriod;
    }

    public void setFxPeriod(String fxPeriod) {
        this.fxPeriod = fxPeriod;
    }

    public String getYhgz() {
        return yhgz;
    }

    public void setYhgz(String yhgz) {
        this.yhgz = yhgz;
    }

    public String getSyPeriod() {
        return syPeriod;
    }

    public void setSyPeriod(String syPeriod) {
        this.syPeriod = syPeriod;
    }

    public String getWfxll() {
        return wfxll;
    }

    public void setWfxll(String wfxll) {
        this.wfxll = wfxll;
    }

    public String getYjjz1() {
        return yjjz1;
    }

    public void setYjjz1(String yjjz1) {
        this.yjjz1 = yjjz1;
    }

    public String getMbsyxx() {
        return mbsyxx;
    }

    public void setMbsyxx(String mbsyxx) {
        this.mbsyxx = mbsyxx;
    }

    public String getMbfxsx() {
        return mbfxsx;
    }

    public void setMbfxsx(String mbfxsx) {
        this.mbfxsx = mbfxsx;
    }

    public String getMbfxywxs() {
        return mbfxywxs;
    }

    public void setMbfxywxs(String mbfxywxs) {
        this.mbfxywxs = mbfxywxs;
    }

    public String getFxqzStr() {
        return fxqzStr;
    }

    public void setFxqzStr(String fxqzStr) {
        this.fxqzStr = fxqzStr;
    }

    public String[] toStringArr() {
        String[] arr = new String[11];
        arr[0] = this.productCodeStr;
        arr[1] = this.modelType;
        arr[2] = this.fxPeriod;
        arr[3] = this.yhgz;
        arr[4] = this.syPeriod;
        arr[5] = this.wfxll;
        arr[6] = this.yjjz1;
        arr[7] = this.mbsyxx;
        arr[8] = this.mbfxsx;
        arr[9] = this.mbfxywxs;
        arr[10] = this.fxqzStr;
        return arr;
    }
}
