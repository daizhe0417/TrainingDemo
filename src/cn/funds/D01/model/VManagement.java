package cn.funds.D01.model;

import java.util.Objects;

public class VManagement {
    private Integer id;
    private String name;
    private Integer companyId;
    private String sex;
    private String education;
    private String workDate;
    private String managementScale;
    private Integer productCount;
    private Double averageIncome;
    private Double averageRetracement;
    private Double maxRetracement;
    private String resumeLink;
    private String comment;
    private String deltag;
    private String companyName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getWorkDate() {
        return workDate;
    }

    public void setWorkDate(String workDate) {
        this.workDate = workDate;
    }

    public String getManagementScale() {
        return managementScale;
    }

    public void setManagementScale(String managementScale) {
        this.managementScale = managementScale;
    }

    public Integer getProductCount() {
        return productCount;
    }

    public void setProductCount(Integer productCount) {
        this.productCount = productCount;
    }

    public Double getAverageIncome() {
        return averageIncome;
    }

    public void setAverageIncome(Double averageIncome) {
        this.averageIncome = averageIncome;
    }

    public Double getAverageRetracement() {
        return averageRetracement;
    }

    public void setAverageRetracement(Double averageRetracement) {
        this.averageRetracement = averageRetracement;
    }

    public Double getMaxRetracement() {
        return maxRetracement;
    }

    public void setMaxRetracement(Double maxRetracement) {
        this.maxRetracement = maxRetracement;
    }

    public String getResumeLink() {
        return resumeLink;
    }

    public void setResumeLink(String resumeLink) {
        this.resumeLink = resumeLink;
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

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VManagement that = (VManagement) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(companyId, that.companyId) &&
                Objects.equals(sex, that.sex) &&
                Objects.equals(education, that.education) &&
                Objects.equals(workDate, that.workDate) &&
                Objects.equals(managementScale, that.managementScale) &&
                Objects.equals(productCount, that.productCount) &&
                Objects.equals(averageIncome, that.averageIncome) &&
                Objects.equals(averageRetracement, that.averageRetracement) &&
                Objects.equals(maxRetracement, that.maxRetracement) &&
                Objects.equals(resumeLink, that.resumeLink) &&
                Objects.equals(comment, that.comment) &&
                Objects.equals(deltag, that.deltag) &&
                Objects.equals(companyName, that.companyName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, companyId, sex, education, workDate, managementScale, productCount, averageIncome, averageRetracement, maxRetracement, resumeLink, comment, deltag, companyName);
    }
}
