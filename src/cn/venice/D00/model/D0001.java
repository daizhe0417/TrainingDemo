package cn.venice.D00.model;

import java.util.Objects;

public class D0001 {
    private Integer id;
    private String bmmc;
    private String descrip;
    private String type;
    private String deltag;
    private Integer parentId;
    private Integer seq;
    private String bmdm;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Integer getSeq() {
        return seq;
    }

    public void setSeq(Integer seq) {
        this.seq = seq;
    }

    public String getBmdm() {
        return bmdm;
    }

    public void setBmdm(String bmdm) {
        this.bmdm = bmdm;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        D0001 d0001 = (D0001) o;
        return Objects.equals(id, d0001.id) &&
                Objects.equals(bmmc, d0001.bmmc) &&
                Objects.equals(descrip, d0001.descrip) &&
                Objects.equals(type, d0001.type) &&
                Objects.equals(deltag, d0001.deltag) &&
                Objects.equals(parentId, d0001.parentId) &&
                Objects.equals(seq, d0001.seq) &&
                Objects.equals(bmdm, d0001.bmdm);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, bmmc, descrip, type, deltag, parentId, seq, bmdm);
    }
}
