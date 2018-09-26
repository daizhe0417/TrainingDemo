package cn.venice.D00.model;

import java.util.Objects;

public class V0003 {
    private String userno;
    private String username;
    private String passwd;
    private String roleno;
    private String bmdm;
    private String deltag;
    private String bmmc;
    private String rolename;
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

    public String getBmmc() {
        return bmmc;
    }

    public void setBmmc(String bmmc) {
        this.bmmc = bmmc;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
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
        V0003 v0003 = (V0003) o;
        return Objects.equals(userno, v0003.userno) &&
                Objects.equals(username, v0003.username) &&
                Objects.equals(passwd, v0003.passwd) &&
                Objects.equals(roleno, v0003.roleno) &&
                Objects.equals(bmdm, v0003.bmdm) &&
                Objects.equals(deltag, v0003.deltag) &&
                Objects.equals(bmmc, v0003.bmmc) &&
                Objects.equals(rolename, v0003.rolename) &&
                Objects.equals(company, v0003.company) &&
                Objects.equals(mobile, v0003.mobile) &&
                Objects.equals(email, v0003.email) &&
                Objects.equals(title, v0003.title) &&
                Objects.equals(businessCard, v0003.businessCard) &&
                Objects.equals(uType, v0003.uType);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userno, username, passwd, roleno, bmdm, deltag, bmmc, rolename, company, mobile, email, title, businessCard, uType);
    }
}
