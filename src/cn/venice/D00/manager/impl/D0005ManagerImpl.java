package cn.venice.D00.manager.impl;

/**
 * 权限管理
 */

import cn.venice.D00.manager.D0004Manager;
import cn.venice.D00.manager.D0005Manager;
import cn.venice.D00.model.D0004;
import cn.venice.D00.model.D0005;
import cn.venice.gen.model.UserInfoModel;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.manager.impl.GenericManagerImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;

@Service("d0005mgr")
public class D0005ManagerImpl extends GenericManagerImpl implements
        D0005Manager {

    @Resource(name = "d0004mgr")
    private D0004Manager d0004mgr;

    /**
     * 通过角色编号得到菜单
     *
     * @param roleno
     * @return List<D0004>
     */
    public List<D0004> getMenusByRoleno(String roleno) {
        List<D0004> tmp = dao
                .find("select a from D0004 as a,D0005 as b where b.roleno='"
                        + roleno + "' and a.menuid=b.menuid order by b.menuid");
        return tmp;
    }

    public List<D0004> getRightsByRoleno(String roleno) {
        if (roleno.equals("admin")) {
            return d0004mgr.getAllMenus();
        } else {
            return this.getMenusByRoleno(roleno);
        }
    }

    @Override
    public List<D0004> getRightsBySession(HttpSession session) {
        if (session != null
                && session.getAttribute(ConstantClass.LOGIN_USER_SESSION_ID) != null) {
            UserInfoModel v = (UserInfoModel) session
                    .getAttribute(ConstantClass.LOGIN_USER_SESSION_ID);
            return this.getRightsByRoleno(v.getRoleno());
        } else {
            return null;
        }
    }

    /**
     * 通过角色编号得到菜单id
     *
     * @param roleno
     * @return List<String>
     */
    @Override
    public List<String> getMenuIdsByRoleno(String roleno) {
        return dao.find("select menuid from D0005 where roleno='" + roleno
                + "' order by menuid");
    }

    @Override
    public <T> int delete(T entity) {
        D0005 d = (D0005) entity;
        if (super.delete(d) == ConstantClass.DZSUCCESS) {
            this.clearBuffer(d.getRoleno());
            return ConstantClass.DZSUCCESS;
        }
        return ConstantClass.DZFAILURE;
    }

    @Override
    public <T> int saveOrUpdate(T entity) {
        D0005 d = (D0005) entity;
        if (super.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
            this.clearBuffer(d.getRoleno());
            return ConstantClass.DZSUCCESS;
        }
        return ConstantClass.DZFAILURE;
    }

    private void clearBuffer(String roleno) {

    }

}
