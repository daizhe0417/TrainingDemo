package cn.venice.D00.model;

/**
 * Created by venice on 2017/1/5.
 */
public class V0001 {
    private String bmdm;
    private String bmmc;
    private String type;
    private String cjrq;
    private String deltag;
    private String cxrq;
    private String content;

    public String getBmdm() {
        return bmdm;
    }

    public void setBmdm(String bmdm) {
        this.bmdm = bmdm;
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

    public String getCjrq() {
        return cjrq;
    }

    public void setCjrq(String cjrq) {
        this.cjrq = cjrq;
    }

    public String getDeltag() {
        return deltag;
    }

    public void setDeltag(String deltag) {
        this.deltag = deltag;
    }

    public String getCxrq() {
        return cxrq;
    }

    public void setCxrq(String cxrq) {
        this.cxrq = cxrq;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        V0001 v0001 = (V0001) o;

        if (bmdm != null ? !bmdm.equals(v0001.bmdm) : v0001.bmdm != null) return false;
        if (bmmc != null ? !bmmc.equals(v0001.bmmc) : v0001.bmmc != null) return false;
        if (type != null ? !type.equals(v0001.type) : v0001.type != null) return false;
        if (cjrq != null ? !cjrq.equals(v0001.cjrq) : v0001.cjrq != null) return false;
        if (deltag != null ? !deltag.equals(v0001.deltag) : v0001.deltag != null) return false;
        if (cxrq != null ? !cxrq.equals(v0001.cxrq) : v0001.cxrq != null) return false;
        if (content != null ? !content.equals(v0001.content) : v0001.content != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = bmdm != null ? bmdm.hashCode() : 0;
        result = 31 * result + (bmmc != null ? bmmc.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (cjrq != null ? cjrq.hashCode() : 0);
        result = 31 * result + (deltag != null ? deltag.hashCode() : 0);
        result = 31 * result + (cxrq != null ? cxrq.hashCode() : 0);
        result = 31 * result + (content != null ? content.hashCode() : 0);
        return result;
    }
}
