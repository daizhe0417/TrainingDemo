package cn.funds.D02.model;

import java.util.Objects;

public class Combine {
    private Integer id;
    private String comName;
    private String clrq;
    private String cjrq;
    private String comment;
    private String deltag;
    private Integer cpsl;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getComName() {
        return comName;
    }

    public void setComName(String comName) {
        this.comName = comName;
    }

    public String getClrq() {
        return clrq;
    }

    public void setClrq(String clrq) {
        this.clrq = clrq;
    }

    public String getCjrq() {
        return cjrq;
    }

    public void setCjrq(String cjrq) {
        this.cjrq = cjrq;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getDeltag() {
        return deltag;
    }

    public void setDeltag(String deltag) {
        this.deltag = deltag;
    }

    public Integer getCpsl() {
        return cpsl;
    }

    public void setCpsl(Integer cpsl) {
        this.cpsl = cpsl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Combine combine = (Combine) o;
        return Objects.equals(id, combine.id) &&
                Objects.equals(comName, combine.comName) &&
                Objects.equals(clrq, combine.clrq) &&
                Objects.equals(cjrq, combine.cjrq) &&
                Objects.equals(comment, combine.comment) &&
                Objects.equals(deltag, combine.deltag) &&
                Objects.equals(cpsl, combine.cpsl);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, comName, clrq, cjrq, comment, deltag, cpsl);
    }
}
