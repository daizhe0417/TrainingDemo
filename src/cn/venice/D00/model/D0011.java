package cn.venice.D00.model;

/**
 * Created by venice on 2017/1/5.
 */
public class D0011 {
    private String bmdm;
    private String content;

    public String getBmdm() {
        return bmdm;
    }

    public void setBmdm(String bmdm) {
        this.bmdm = bmdm;
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

        D0011 d0011 = (D0011) o;

        if (bmdm != null ? !bmdm.equals(d0011.bmdm) : d0011.bmdm != null) return false;
        if (content != null ? !content.equals(d0011.content) : d0011.content != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = bmdm != null ? bmdm.hashCode() : 0;
        result = 31 * result + (content != null ? content.hashCode() : 0);
        return result;
    }
}
