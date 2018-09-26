package cn.funds.D01.model;

import java.util.Objects;

public class Benchmark {
    private Integer id;
    private String benchmarkName;
    private String type;
    private String deltag;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getDeltag() {
        return deltag;
    }

    public void setDeltag(String deltag) {
        this.deltag = deltag;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Benchmark benchmark = (Benchmark) o;
        return Objects.equals(id, benchmark.id) &&
                Objects.equals(benchmarkName, benchmark.benchmarkName) &&
                Objects.equals(type, benchmark.type) &&
                Objects.equals(deltag, benchmark.deltag);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, benchmarkName, type, deltag);
    }
}
