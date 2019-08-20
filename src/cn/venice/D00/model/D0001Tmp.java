package cn.venice.D00.model;

import java.util.Objects;

public class D0001Tmp {
    private String id;
    private String bmmc;
    private String descrip;
    private String type;
    private String deltag;
    private String parentId;
    private Integer seq;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBmmc() {
        return bmmc;
    }

    public void setBmmc(String bmmc) {
        this.bmmc = bmmc;
    }

    public String getDescrip() {
        return descrip;
    }

    public void setDescrip(String descrip) {
        this.descrip = descrip;
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

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public Integer getSeq() {
        return seq;
    }

    public void setSeq(Integer seq) {
        this.seq = seq;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        D0001Tmp d0001 = (D0001Tmp) o;
        return Objects.equals(id, d0001.id) &&
                Objects.equals(bmmc, d0001.bmmc) &&
                Objects.equals(descrip, d0001.descrip) &&
                Objects.equals(type, d0001.type) &&
                Objects.equals(deltag, d0001.deltag) &&
                Objects.equals(parentId, d0001.parentId) &&
                Objects.equals(seq, d0001.seq);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, bmmc, descrip, type, deltag, parentId, seq);
    }
}
