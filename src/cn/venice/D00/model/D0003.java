package cn.venice.D00.model;

import java.util.Objects;

public class D0003 {
    private String userNo;
    private String userName;
    private String passwd;
    private Integer roleId;
    private Integer bmId;
    private String deltag;
    private String email;
    private String userType;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        D0003 d0003 = (D0003) o;
        return Objects.equals(userNo, d0003.userNo) &&
                Objects.equals(userName, d0003.userName) &&
                Objects.equals(passwd, d0003.passwd) &&
                Objects.equals(roleId, d0003.roleId) &&
                Objects.equals(bmId, d0003.bmId) &&
                Objects.equals(deltag, d0003.deltag) &&
                Objects.equals(email, d0003.email) &&
                Objects.equals(userType, d0003.userType);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userNo, userName, passwd, roleId, bmId, deltag, email, userType);
    }
}
