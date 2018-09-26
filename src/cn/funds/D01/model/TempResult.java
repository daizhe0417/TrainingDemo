package cn.funds.D01.model;

import java.util.Objects;

public class TempResult implements java.io.Serializable {
    private Integer index;
    private Integer productId;
    private Integer benchmarkId;
    private String cutOffDate;
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
    private Double dwjz;
    private Integer score;

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getBenchmarkId() {
        return benchmarkId;
    }

    public void setBenchmarkId(Integer benchmarkId) {
        this.benchmarkId = benchmarkId;
    }

    public String getCutOffDate() {
        return cutOffDate;
    }

    public void setCutOffDate(String cutOffDate) {
        this.cutOffDate = cutOffDate;
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

    public Double getDwjz() {
        return dwjz;
    }

    public void setDwjz(Double dwjz) {
        this.dwjz = dwjz;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TempResult that = (TempResult) o;
        return Objects.equals(index, that.index) &&
                Objects.equals(productId, that.productId) &&
                Objects.equals(benchmarkId, that.benchmarkId) &&
                Objects.equals(cutOffDate, that.cutOffDate) &&
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
                Objects.equals(dwjz, that.dwjz) &&
                Objects.equals(score, that.score);
    }

    @Override
    public int hashCode() {

        return Objects.hash(index, productId, benchmarkId, cutOffDate, annualIncome, sharpRatio, maxRetracement, informationRatio, treynorRatio, sortinoRatio, implementBeta, mSquare, omegaRatio, kurtosis, skewness, jasenRatio, dwjz, score);
    }
}
