package cn.funds.D01.model;

import java.util.Objects;

public class Productnet {
    private Integer id;
    private Integer productId;
    private String riqi;
    private Double unitNet;
    private Double accumulatedNet;
    private Double hs300;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Productnet that = (Productnet) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(productId, that.productId) &&
                Objects.equals(riqi, that.riqi) &&
                Objects.equals(unitNet, that.unitNet) &&
                Objects.equals(accumulatedNet, that.accumulatedNet) &&
                Objects.equals(hs300, that.hs300);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, productId, riqi, unitNet, accumulatedNet, hs300);
    }
}
