package cn.funds.D01.model;

import java.util.Objects;

public class BenchmarkValue {
    private Integer id;
    private Integer benchmarkId;
    private String riqi;
    private Double value;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBenchmarkId() {
        return benchmarkId;
    }

    public void setBenchmarkId(Integer benchmarkId) {
        this.benchmarkId = benchmarkId;
    }

    public String getRiqi() {
        return riqi;
    }

    public void setRiqi(String riqi) {
        this.riqi = riqi;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BenchmarkValue that = (BenchmarkValue) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(benchmarkId, that.benchmarkId) &&
                Objects.equals(riqi, that.riqi) &&
                Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, benchmarkId, riqi, value);
    }
}
