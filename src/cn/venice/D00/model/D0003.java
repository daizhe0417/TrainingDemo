package cn.venice.D00.model;

import java.util.Objects;

public class D0003 {
    private String userno;
    private String username;
    private String passwd;
    private String roleno;
    private String bmdm;
    private String deltag;
    private String company;
    private String mobile;
    private String email;
    private String title;
    private String businessCard;
    private String uType;

    public String getUserno() {
        return userno;
    }

    public void setUserno(String userno) {
        this.userno = userno;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public String getRoleno() {
        return roleno;
    }

    public void setRoleno(String roleno) {
        this.roleno = roleno;
    }

    public String getBmdm() {
        return bmdm;
    }

    public void setBmdm(String bmdm) {
        this.bmdm = bmdm;
    }

    public String getDeltag() {
        return deltag;
    }

    public void setDeltag(String deltag) {
        this.deltag = deltag;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBusinessCard() {
        return businessCard;
    }

    public void setBusinessCard(String businessCard) {
        this.businessCard = businessCard;
    }

    public String getuType() {
        return uType;
    }

    public void setuType(String uType) {
        this.uType = uType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        D0003 d0003 = (D0003) o;
        return Objects.equals(userno, d0003.userno) &&
                Objects.equals(username, d0003.username) &&
                Objects.equals(passwd, d0003.passwd) &&
                Objects.equals(roleno, d0003.roleno) &&
                Objects.equals(bmdm, d0003.bmdm) &&
                Objects.equals(deltag, d0003.deltag) &&
                Objects.equals(company, d0003.company) &&
                Objects.equals(mobile, d0003.mobile) &&
                Objects.equals(email, d0003.email) &&
                Objects.equals(title, d0003.title) &&
                Objects.equals(businessCard, d0003.businessCard) &&
                Objects.equals(uType, d0003.uType);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userno, username, passwd, roleno, bmdm, deltag, company, mobile, email, title, businessCard, uType);
    }
}
