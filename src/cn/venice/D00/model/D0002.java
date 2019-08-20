package cn.venice.D00.model;

import java.util.Objects;

public class D0002 {
    private Integer roleId;
    private String roleName;

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
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
        D0002 d0002 = (D0002) o;
        return Objects.equals(roleId, d0002.roleId) &&
                Objects.equals(roleName, d0002.roleName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(roleId, roleName);
    }
}
