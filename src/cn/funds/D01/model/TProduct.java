package cn.funds.D01.model;

import java.util.Objects;

public class TProduct {
    private Integer id;
    private String productName;
    private Integer managementId;
    private Integer companyId;
    private String largeClass;
    private String middleClass;
    private String littleClass;
    private String foundDate;
    private String scale;
    private String cutOffDate;
    private Double netValue;
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
    private Double score;
    private Double dwjz;
    private String deltag;
    private String productCode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getManagementId() {
        return managementId;
    }

    public void setManagementId(Integer managementId) {
        this.managementId = managementId;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getLargeClass() {
        return largeClass;
    }

    public void setLargeClass(String largeClass) {
        this.largeClass = largeClass;
    }

    public String getMiddleClass() {
        return middleClass;
    }

    public void setMiddleClass(String middleClass) {
        this.middleClass = middleClass;
    }

    public String getLittleClass() {
        return littleClass;
    }

    public void setLittleClass(String littleClass) {
        this.littleClass = littleClass;
    }

    public String getFoundDate() {
        return foundDate;
    }

    public void setFoundDate(String foundDate) {
        this.foundDate = foundDate;
    }

    public String getScale() {
        return scale;
    }

    public void setScale(String scale) {
        this.scale = scale;
    }

    public String getCutOffDate() {
        return cutOffDate;
    }

    public void setCutOffDate(String cutOffDate) {
        this.cutOffDate = cutOffDate;
    }

    public Double getNetValue() {
        return netValue;
    }

    public void setNetValue(Double netValue) {
        this.netValue = netValue;
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

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Double getDwjz() {
        return dwjz;
    }

    public void setDwjz(Double dwjz) {
        this.dwjz = dwjz;
    }

    public String getDeltag() {
        return deltag;
    }

    public void setDeltag(String deltag) {
        this.deltag = deltag;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TProduct tProduct = (TProduct) o;
        return id == tProduct.id &&
                managementId == tProduct.managementId &&
                companyId == tProduct.companyId &&
                Objects.equals(productName, tProduct.productName) &&
                Objects.equals(largeClass, tProduct.largeClass) &&
                Objects.equals(middleClass, tProduct.middleClass) &&
                Objects.equals(littleClass, tProduct.littleClass) &&
                Objects.equals(foundDate, tProduct.foundDate) &&
                Objects.equals(scale, tProduct.scale) &&
                Objects.equals(cutOffDate, tProduct.cutOffDate) &&
                Objects.equals(netValue, tProduct.netValue) &&
                Objects.equals(annualIncome, tProduct.annualIncome) &&
                Objects.equals(sharpRatio, tProduct.sharpRatio) &&
                Objects.equals(maxRetracement, tProduct.maxRetracement) &&
                Objects.equals(informationRatio, tProduct.informationRatio) &&
                Objects.equals(treynorRatio, tProduct.treynorRatio) &&
                Objects.equals(sortinoRatio, tProduct.sortinoRatio) &&
                Objects.equals(implementBeta, tProduct.implementBeta) &&
                Objects.equals(mSquare, tProduct.mSquare) &&
                Objects.equals(omegaRatio, tProduct.omegaRatio) &&
                Objects.equals(kurtosis, tProduct.kurtosis) &&
                Objects.equals(skewness, tProduct.skewness) &&
                Objects.equals(jasenRatio, tProduct.jasenRatio) &&
                Objects.equals(score, tProduct.score) &&
                Objects.equals(dwjz, tProduct.dwjz) &&
                Objects.equals(deltag, tProduct.deltag) &&
                Objects.equals(productCode, tProduct.productCode);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, productName, managementId, companyId, largeClass, middleClass, littleClass, foundDate, scale, cutOffDate, netValue, annualIncome, sharpRatio, maxRetracement, informationRatio, treynorRatio, sortinoRatio, implementBeta, mSquare, omegaRatio, kurtosis, skewness, jasenRatio, score, dwjz, deltag, productCode);
    }
}
