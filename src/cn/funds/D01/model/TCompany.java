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
    private String sccl;
    private Integer tyrs;
    private String kaiguan;

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

    public String getSccl() {
        return sccl;
    }

    public void setSccl(String sccl) {
        this.sccl = sccl;
    }

    public Integer getTyrs() {
        return tyrs;
    }

    public void setTyrs(Integer tyrs) {
        this.tyrs = tyrs;
    }

    public String getKaiguan() {
        return kaiguan;
    }

    public void setKaiguan(String kaiguan) {
        this.kaiguan = kaiguan;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TCompany tCompany = (TCompany) o;
        return Objects.equals(id, tCompany.id) &&
                Objects.equals(companyName, tCompany.companyName) &&
                Objects.equals(trace, tCompany.trace) &&
                Objects.equals(management, tCompany.management) &&
                Objects.equals(productCount, tCompany.productCount) &&
                Objects.equals(qualitativeScore, tCompany.qualitativeScore) &&
                Objects.equals(quantifyScore, tCompany.quantifyScore) &&
                Objects.equals(traceLink, tCompany.traceLink) &&
                Objects.equals(documentLink, tCompany.documentLink) &&
                Objects.equals(comment, tCompany.comment) &&
                Objects.equals(qualitativeLink, tCompany.qualitativeLink) &&
                Objects.equals(quantifyLink, tCompany.quantifyLink) &&
                Objects.equals(deltag, tCompany.deltag) &&
                Objects.equals(tjr, tCompany.tjr) &&
                Objects.equals(foundDate, tCompany.foundDate) &&
                Objects.equals(sccl, tCompany.sccl) &&
                Objects.equals(tyrs, tCompany.tyrs) &&
                Objects.equals(kaiguan, tCompany.kaiguan);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyName, trace, management, productCount, qualitativeScore, quantifyScore, traceLink, documentLink, comment, qualitativeLink, quantifyLink, deltag, tjr, foundDate, sccl, tyrs, kaiguan);
    }
}
