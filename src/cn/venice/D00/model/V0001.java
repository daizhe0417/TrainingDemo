package cn.venice.D00.model;

import java.util.Objects;

public class V0001 {
    private Integer id;
    private String bmmc;
    private String type;
    private String deltag;
    private Integer parentId;
    private String descrip;
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

    public String getDescrip() {
        return descrip;
    }

    public void setDescrip(String descrip) {
        this.descrip = descrip;
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
        V0001 v0001 = (V0001) o;
        return Objects.equals(id, v0001.id) &&
                Objects.equals(bmmc, v0001.bmmc) &&
                Objects.equals(type, v0001.type) &&
                Objects.equals(deltag, v0001.deltag) &&
                Objects.equals(parentId, v0001.parentId) &&
                Objects.equals(descrip, v0001.descrip) &&
                Objects.equals(seq, v0001.seq) &&
                Objects.equals(bmdm, v0001.bmdm);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, bmmc, type, deltag, parentId, descrip, seq, bmdm);
    }
}
