package cn.venice.D00.manager.impl;

/**
 * 角色管理模块
 */

import cn.venice.D00.manager.D0002Manager;
import cn.venice.D00.model.D0001;
import cn.venice.D00.model.D0002;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.model.SelectOptionModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("d0002mgr")
public class D0002ManagerImpl extends GenericManagerImpl implements
        D0002Manager {
    /**
     * 得到所有角色信息
     *
     * @return List<D0002>
     */
    @Override
    public List<D0002> getAllRoles() {
        return dao.find("from D0002");
    }

    /**
     * 得到所有角色,SOM形式
     *
     * @return List<D0002>
     */
    @Override
    public List<SelectOptionModel> getSOMRoles() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(roleId,roleName) from D0002 order by roleId");
    }

    /**
     * 删除方法，检查是否有属于该角色的用户
     */
    @Override
    public <T> int delete(T entity) {
        if (entity == null) {
            return ConstantClass.DZFAILURE;
        }
        D0002 d = (D0002) entity;
        D0002 dd = dao.findById(D0002.class, d.getRoleId());
        if (dd == null) {
            return ConstantClass.DZFAILURE;
        }
        List tmp = dao.find("from D0003 where roleId=?", d.getRoleId());
        if (tmp != null && !tmp.isEmpty()) {
            return ConstantClass.DZ_HAS_SUB_ITEM;
        }
        return dao.delete(dd);
    }

}
