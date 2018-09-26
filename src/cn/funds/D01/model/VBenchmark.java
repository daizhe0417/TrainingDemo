package cn.funds.D01.model;

import java.util.Objects;

public class VBenchmark {
    private Integer id;
    private Integer benchmarkId;
    private String riqi;
    private Double value;
    private String benchmarkName;
    private String type;

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

    public String getBenchmarkName() {
        return benchmarkName;
    }

    public void setBenchmarkName(String benchmarkName) {
        this.benchmarkName = benchmarkName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VBenchmark that = (VBenchmark) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(benchmarkId, that.benchmarkId) &&
                Objects.equals(riqi, that.riqi) &&
                Objects.equals(value, that.value) &&
                Objects.equals(benchmarkName, that.benchmarkName) &&
                Objects.equals(type, that.type);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, benchmarkId, riqi, value, benchmarkName, type);
    }
}
