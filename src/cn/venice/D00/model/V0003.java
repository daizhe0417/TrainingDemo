package cn.venice.D00.model;

import java.util.Objects;

public class V0003 {
    private String userNo;
    private String userName;
    private String passwd;
    private Integer roleId;
    private Integer bmId;
    private String deltag;
    private String email;
    private String userType;
    private String bmmc;
    private String roleName;

    public String getUserNo() {
        return userNo;
    }

    public void setUserNo(String userNo) {
        this.userNo = userNo;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public Integer getBmId() {
        return bmId;
    }

    public void setBmId(Integer bmId) {
        this.bmId = bmId;
    }

    public String getDeltag() {
        return deltag;
    }

    public void setDeltag(String deltag) {
        this.deltag = deltag;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getBmmc() {
        return bmmc;
    }

    public void setBmmc(String bmmc) {
        this.bmmc = bmmc;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        V0003 v0003 = (V0003) o;
        return Objects.equals(userNo, v0003.userNo) &&
                Objects.equals(userName, v0003.userName) &&
                Objects.equals(passwd, v0003.passwd) &&
                Objects.equals(roleId, v0003.roleId) &&
                Objects.equals(bmId, v0003.bmId) &&
                Objects.equals(deltag, v0003.deltag) &&
                Objects.equals(email, v0003.email) &&
                Objects.equals(userType, v0003.userType) &&
                Objects.equals(bmmc, v0003.bmmc) &&
                Objects.equals(roleName, v0003.roleName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userNo, userName, passwd, roleId, bmId, deltag, email, userType, bmmc, roleName);
    }
}
