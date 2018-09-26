package cn.funds.D01.model;

import java.util.Objects;

public class DingxingTable {
    private Integer id;
    private Integer companyId;
    private String itemName;
    private Integer itemScore;
    private String scoreName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Integer getItemScore() {
        return itemScore;
    }

    public void setItemScore(Integer itemScore) {
        this.itemScore = itemScore;
    }

    public String getScoreName() {
        return scoreName;
    }

    public void setScoreName(String scoreName) {
        this.scoreName = scoreName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DingxingTable that = (DingxingTable) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(companyId, that.companyId) &&
                Objects.equals(itemName, that.itemName) &&
                Objects.equals(itemScore, that.itemScore) &&
                Objects.equals(scoreName, that.scoreName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, companyId, itemName, itemScore, scoreName);
    }
}
