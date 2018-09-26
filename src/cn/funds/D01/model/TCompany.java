package cn.funds.D01.model;

import java.util.Objects;

public class TCompany {
    private Integer id;
    private String companyName;
    private String trace;
    private String management;
    private Integer productCount;
    private Double qualitativeScore;
    private Double quantifyScore;
    private String traceLink;
    private String documentLink;
    private String comment;
    private String qualitativeLink;
    private String quantifyLink;
    private String deltag;
    private String tjr;
    private String foundDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getTrace() {
        return trace;
    }

    public void setTrace(String trace) {
        this.trace = trace;
    }

    public String getManagement() {
        return management;
    }

    public void setManagement(String management) {
        this.management = management;
    }

    public Integer getProductCount() {
        return productCount;
    }

    public void setProductCount(Integer productCount) {
        this.productCount = productCount;
    }

    public Double getQualitativeScore() {
        return qualitativeScore;
    }

    public void setQualitativeScore(Double qualitativeScore) {
        this.qualitativeScore = qualitativeScore;
    }

    public Double getQuantifyScore() {
        return quantifyScore;
    }

    public void setQuantifyScore(Double quantifyScore) {
        this.quantifyScore = quantifyScore;
    }

    public String getTraceLink() {
        return traceLink;
    }

    public void setTraceLink(String traceLink) {
        this.traceLink = traceLink;
    }

    public String getDocumentLink() {
        return documentLink;
    }

    public void setDocumentLink(String documentLink) {
        this.documentLink = documentLink;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getQualitativeLink() {
        return qualitativeLink;
    }

    public void setQualitativeLink(String qualitativeLink) {
        this.qualitativeLink = qualitativeLink;
    }

    public String getQuantifyLink() {
        return quantifyLink;
    }

    public void setQuantifyLink(String quantifyLink) {
        this.quantifyLink = quantifyLink;
    }

    public String getDeltag() {
        return deltag;
    }

    public void setDeltag(String deltag) {
        this.deltag = deltag;
    }

    public String getTjr() {
        return tjr;
    }

    public void setTjr(String tjr) {
        this.tjr = tjr;
    }

    public String getFoundDate() {
        return foundDate;
    }

    public void setFoundDate(String foundDate) {
        this.foundDate = foundDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TCompany company = (TCompany) o;
        return Objects.equals(id, company.id) &&
                Objects.equals(companyName, company.companyName) &&
                Objects.equals(trace, company.trace) &&
                Objects.equals(management, company.management) &&
                Objects.equals(productCount, company.productCount) &&
                Objects.equals(qualitativeScore, company.qualitativeScore) &&
                Objects.equals(quantifyScore, company.quantifyScore) &&
                Objects.equals(traceLink, company.traceLink) &&
                Objects.equals(documentLink, company.documentLink) &&
                Objects.equals(comment, company.comment) &&
                Objects.equals(qualitativeLink, company.qualitativeLink) &&
                Objects.equals(quantifyLink, company.quantifyLink) &&
                Objects.equals(deltag, company.deltag) &&
                Objects.equals(tjr, company.tjr) &&
                Objects.equals(foundDate, company.foundDate);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, companyName, trace, management, productCount, qualitativeScore, quantifyScore, traceLink, documentLink, comment, qualitativeLink, quantifyLink, deltag, tjr, foundDate);
    }
}
