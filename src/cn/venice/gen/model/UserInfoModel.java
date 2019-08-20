package cn.venice.gen.model;

import java.util.Objects;

/**
 * 用户身份信息实体
 */
public class UserInfoModel implements java.io.Serializable {

    private String userNo;
    private String userName;
    private String passwd;
    private String roleNo;
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

    public String getRoleNo() {
        return roleNo;
    }

    public void setRoleNo(String roleNo) {
        this.roleNo = roleNo;
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
        UserInfoModel u = (UserInfoModel) o;
        return Objects.equals(userNo, u.userNo) &&
                Objects.equals(userName, u.userName) &&
                Objects.equals(passwd, u.passwd) &&
                Objects.equals(roleNo, u.roleNo) &&
                Objects.equals(bmId, u.bmId) &&
                Objects.equals(deltag, u.deltag) &&
                Objects.equals(email, u.email) &&
                Objects.equals(userType, u.userType) &&
                Objects.equals(bmmc, u.bmmc) &&
                Objects.equals(roleName, u.roleName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userNo, userName, passwd, roleNo, bmId, deltag, email, userType, bmmc, roleName);
    }

}