package cn.funds.D01.model;

import java.io.Serializable;
import java.util.Objects;

public class TProductArg implements Serializable{
    private Long index;
    private Long productId;
    private Long benchmarkId;
    private String cutOffDate;
    private Double ljjz;
    private Double annualIncome;
    private Double sharpRatio;
    private Double maxRetracement;
    private Double informationRatio;
    private Double treynorRatio;
    private Double sortinoRatio;
    private Double implementBeta;
    private Double mSquare;
    private Double omegaRatio;
    private Double kurtosis;
    private Double skewness;
    private Double jasenRatio;
    private Double annualRisk;
    private Double yingkuiRatio;
    private Double maxRetracementPeriod;
    private Double dwjz;
    private Long score;

    private String sRiqi;
    private String eRiqi;

    public String getsRiqi() {
        return sRiqi;
    }

    public void setsRiqi(String sRiqi) {
        this.sRiqi = sRiqi;
    }

    public String geteRiqi() {
        return eRiqi;
    }

    public void seteRiqi(String eRiqi) {
        this.eRiqi = eRiqi;
    }

    public Long getIndex() {
        return index;
    }

    public void setIndex(Long index) {
        this.index = index;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getBenchmarkId() {
        return benchmarkId;
    }

    public void setBenchmarkId(Long benchmarkId) {
        this.benchmarkId = benchmarkId;
    }

    public String getCutOffDate() {
        return cutOffDate;
    }

    public void setCutOffDate(String cutOffDate) {
        this.cutOffDate = cutOffDate;
    }

    public Double getLjjz() {
        return ljjz;
    }

    public void setLjjz(Double ljjz) {
        this.ljjz = ljjz;
    }

    public Double getAnnualIncome() {
        return annualIncome;
    }

    public void setAnnualIncome(Double annualIncome) {
        this.annualIncome = annualIncome;
    }

    public Double getSharpRatio() {
        return sharpRatio;
    }

    public void setSharpRatio(Double sharpRatio) {
        this.sharpRatio = sharpRatio;
    }

    public Double getMaxRetracement() {
        return maxRetracement;
    }

    public void setMaxRetracement(Double maxRetracement) {
        this.maxRetracement = maxRetracement;
    }

    public Double getInformationRatio() {
        return informationRatio;
    }

    public void setInformationRatio(Double informationRatio) {
        this.informationRatio = informationRatio;
    }

    public Double getTreynorRatio() {
        return treynorRatio;
    }

    public void setTreynorRatio(Double treynorRatio) {
        this.treynorRatio = treynorRatio;
    }

    public Double getSortinoRatio() {
        return sortinoRatio;
    }

    public void setSortinoRatio(Double sortinoRatio) {
        this.sortinoRatio = sortinoRatio;
    }

    public Double getImplementBeta() {
        return implementBeta;
    }

    public void setImplementBeta(Double implementBeta) {
        this.implementBeta = implementBeta;
    }

    public Double getmSquare() {
        return mSquare;
    }

    public void setmSquare(Double mSquare) {
        this.mSquare = mSquare;
    }

    public Double getOmegaRatio() {
        return omegaRatio;
    }

    public void setOmegaRatio(Double omegaRatio) {
        this.omegaRatio = omegaRatio;
    }

    public Double getKurtosis() {
        return kurtosis;
    }

    public void setKurtosis(Double kurtosis) {
        this.kurtosis = kurtosis;
    }

    public Double getSkewness() {
        return skewness;
    }

    public void setSkewness(Double skewness) {
        this.skewness = skewness;
    }

    public Double getJasenRatio() {
        return jasenRatio;
    }

    public void setJasenRatio(Double jasenRatio) {
        this.jasenRatio = jasenRatio;
    }

    public Double getAnnualRisk() {
        return annualRisk;
    }

    public void setAnnualRisk(Double annualRisk) {
        this.annualRisk = annualRisk;
    }

    public Double getYingkuiRatio() {
        return yingkuiRatio;
    }

    public void setYingkuiRatio(Double yingkuiRatio) {
        this.yingkuiRatio = yingkuiRatio;
    }

    public Double getMaxRetracementPeriod() {
        return maxRetracementPeriod;
    }

    public void setMaxRetracementPeriod(Double maxRetracementPeriod) {
        this.maxRetracementPeriod = maxRetracementPeriod;
    }

    public Double getDwjz() {
        return dwjz;
    }

    public void setDwjz(Double dwjz) {
        this.dwjz = dwjz;
    }

    public Long getScore() {
        return score;
    }

    public void setScore(Long score) {
        this.score = score;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TProductArg that = (TProductArg) o;
        return Objects.equals(index, that.index) &&
                Objects.equals(productId, that.productId) &&
                Objects.equals(benchmarkId, that.benchmarkId) &&
                Objects.equals(cutOffDate, that.cutOffDate) &&
                Objects.equals(ljjz, that.ljjz) &&
                Objects.equals(annualIncome, that.annualIncome) &&
                Objects.equals(sharpRatio, that.sharpRatio) &&
                Objects.equals(maxRetracement, that.maxRetracement) &&
                Objects.equals(informationRatio, that.informationRatio) &&
                Objects.equals(treynorRatio, that.treynorRatio) &&
                Objects.equals(sortinoRatio, that.sortinoRatio) &&
                Objects.equals(implementBeta, that.implementBeta) &&
                Objects.equals(mSquare, that.mSquare) &&
                Objects.equals(omegaRatio, that.omegaRatio) &&
                Objects.equals(kurtosis, that.kurtosis) &&
                Objects.equals(skewness, that.skewness) &&
                Objects.equals(jasenRatio, that.jasenRatio) &&
                Objects.equals(annualRisk, that.annualRisk) &&
                Objects.equals(yingkuiRatio, that.yingkuiRatio) &&
                Objects.equals(maxRetracementPeriod, that.maxRetracementPeriod) &&
                Objects.equals(dwjz, that.dwjz) &&
                Objects.equals(score, that.score);
    }

    @Override
    public int hashCode() {

        return Objects.hash(index, productId, benchmarkId, cutOffDate, ljjz, annualIncome, sharpRatio, maxRetracement, informationRatio, treynorRatio, sortinoRatio, implementBeta, mSquare, omegaRatio, kurtosis, skewness, jasenRatio, annualRisk, yingkuiRatio, maxRetracementPeriod, dwjz, score);
    }
}
