package cn.funds.D01.model;

import java.util.Objects;

public class VProductnet {
    private Integer id;
    private Integer productId;
    private String riqi;
    private Double unitNet;
    private Double accumulatedNet;
    private Double hs300;
    private String productName;
    private Integer managementId;
    private Integer companyId;
    private String managementName;
    private String companyName;
    private String productCode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getRiqi() {
        return riqi;
    }

    public void setRiqi(String riqi) {
        this.riqi = riqi;
    }

    public Double getUnitNet() {
        return unitNet;
    }

    public void setUnitNet(Double unitNet) {
        this.unitNet = unitNet;
    }

    public Double getAccumulatedNet() {
        return accumulatedNet;
    }

    public void setAccumulatedNet(Double accumulatedNet) {
        this.accumulatedNet = accumulatedNet;
    }

    public Double getHs300() {
        return hs300;
    }

    public void setHs300(Double hs300) {
        this.hs300 = hs300;
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
        VProductnet that = (VProductnet) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(productId, that.productId) &&
                Objects.equals(riqi, that.riqi) &&
                Objects.equals(unitNet, that.unitNet) &&
                Objects.equals(accumulatedNet, that.accumulatedNet) &&
                Objects.equals(hs300, that.hs300) &&
                Objects.equals(productName, that.productName) &&
                Objects.equals(managementId, that.managementId) &&
                Objects.equals(companyId, that.companyId) &&
                Objects.equals(managementName, that.managementName) &&
                Objects.equals(companyName, that.companyName) &&
                Objects.equals(productCode, that.productCode);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, productId, riqi, unitNet, accumulatedNet, hs300, productName, managementId, companyId, managementName, companyName, productCode);
    }
}
