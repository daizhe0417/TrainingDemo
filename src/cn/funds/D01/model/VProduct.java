package cn.funds.D01.model;

import java.util.Objects;

public class VProduct {
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
    private Double annualIncome;
    private Double annualRisk;
    private Double sharpRatio;
    private Double maxRetracement;
    private String deltag;
    private String productCode;
    private String managementName;
    private String companyName;

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

    public Double getAnnualIncome() {
        return annualIncome;
    }

    public void setAnnualIncome(Double annualIncome) {
        this.annualIncome = annualIncome;
    }

    public Double getAnnualRisk() {
        return annualRisk;
    }

    public void setAnnualRisk(Double annualRisk) {
        this.annualRisk = annualRisk;
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

    public String getManagementName() {
        return managementName;
    }

    public void setManagementName(String managementName) {
        this.managementName = managementName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VProduct vProduct = (VProduct) o;
        return Objects.equals(id, vProduct.id) &&
                Objects.equals(productName, vProduct.productName) &&
                Objects.equals(managementId, vProduct.managementId) &&
                Objects.equals(companyId, vProduct.companyId) &&
                Objects.equals(largeClass, vProduct.largeClass) &&
                Objects.equals(middleClass, vProduct.middleClass) &&
                Objects.equals(littleClass, vProduct.littleClass) &&
                Objects.equals(foundDate, vProduct.foundDate) &&
                Objects.equals(scale, vProduct.scale) &&
                Objects.equals(cutOffDate, vProduct.cutOffDate) &&
                Objects.equals(annualIncome, vProduct.annualIncome) &&
                Objects.equals(annualRisk, vProduct.annualRisk) &&
                Objects.equals(sharpRatio, vProduct.sharpRatio) &&
                Objects.equals(maxRetracement, vProduct.maxRetracement) &&
                Objects.equals(deltag, vProduct.deltag) &&
                Objects.equals(productCode, vProduct.productCode) &&
                Objects.equals(managementName, vProduct.managementName) &&
                Objects.equals(companyName, vProduct.companyName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, productName, managementId, companyId, largeClass, middleClass, littleClass, foundDate, scale, cutOffDate, annualIncome, annualRisk, sharpRatio, maxRetracement, deltag, productCode, managementName, companyName);
    }
}
