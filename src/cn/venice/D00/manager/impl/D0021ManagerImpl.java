package cn.venice.D00.manager.impl;

/**
 * 班级管理模块
 */

import cn.venice.D00.manager.D0021Manager;
import cn.venice.D00.model.D0001;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.model.SelectOptionModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("d0021mgr")
public class D0021ManagerImpl extends GenericManagerImpl implements
        D0021Manager {

    /**
     * 得到所有角色,SOM形式
     *
     * @return List<D0002>
     */
    @Override
    public List<SelectOptionModel> getSOMClasses() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(id,bmmc) from D0001 where deltag!='1' and type='2' order by bmmc");
    }

    @Override
    public <T> int saveOrUpdate(T entity) {
        D0001 d = (D0001) entity;
        if (d.getDeltag() == null || d.getDeltag().equals("")) {
            d.setDeltag("0");
        }
        d.setType("2");// 所有通过D0001保存的都是"部门"，类型为1，班级通过D0021保存，类型是2
        try {
            if (dao.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
                return ConstantClass.DZSUCCESS;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
        return ConstantClass.DZFAILURE;
    }

    /**
     * 删除方法，检查是否有属于该班级的用户
     */
    @Override
    public <T> int delete(T entity) {
        if (entity == null) {
            return ConstantClass.DZFAILURE;
        }
        D0001 d = (D0001) entity;
        D0001 dd = dao.findById(D0001.class, d.getId());
        if (dd == null) {
            return ConstantClass.DZFAILURE;
        }
        List tmp = dao.find("from D0003 where bmId=?", d.getId());
        if (tmp != null && !tmp.isEmpty()) {
            return ConstantClass.DZ_HAS_SUB_ITEM;
        }
        return dao.delete(dd);
    }

}
