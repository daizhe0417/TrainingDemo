package cn.venice.D00.manager.impl;

import cn.venice.D00.manager.D0001Manager;
import cn.venice.D00.model.D0001;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excep.AuthFaildException;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.model.SelectOptionModel;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;


/**
 * 部门管理
 */
@Transactional
@Service("d0001mgr")
public class D0001ManagerImpl extends GenericManagerImpl implements
        D0001Manager {

    @Resource(name = "userInfoService")
    private UserInfoService userInfoService;

    /**
     * 从数据库中取得所有部门列表
     *
     * @return List<D0001>
     */
    @Override
    public List<D0001> getAllDepts() {
        return dao.find("from D0001 where deltag!='1' order by bmdm");
    }

    /**
     * 根据bmdm取得bmmc
     *
     * @param bmdm
     * @return
     */
    @Override
    public String getBmmcByBmdm(String bmdm) {
        List tmp = dao.find("from D0001 where bmdm=?", bmdm);
        if (tmp != null && !tmp.isEmpty()) {
            return ((D0001) tmp.get(0)).getBmmc();
        }
        return null;
    }

    /**
     * 根据身份权限取得部门列表
     *
     * @param session
     * @return
     */
    @Override
    public List<D0001> getDeptsByAuth(HttpSession session) {
        String authFilterStatement = "";
        try {
            authFilterStatement = userInfoService
                    .getAuthFilterStatement(session);
        } catch (AuthFaildException e) {
            e.printStackTrace();
            return null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return dao.find("from D0001 where deltag!='1' " + authFilterStatement
                + " order by bmdm");
    }

    /**
     * 从数据库中根据部门代码取得所有下级部门列表
     *
     * @param bmdm
     * @return List<D0001> 所有bmdm like 的，包括下级部门
     */
    @Override
    public List<D0001> findSubDeptsByBmdm(String bmdm) {
        try {
            return dao.find("from D0001 where bmdm like '" + bmdm
                    + "%' and deltag!='1' order by bmmc");
        } catch (RuntimeException e) {
            logger.error("find err:" + "findDeptsByBmdm : " + bmdm, e);
            throw e;
        }
    }

    /**
     * 保存方法，删除标记为0
     * <p>
     * 调用通用Manager的saveOrUpdate方法，根据bmdm判断，如果数据库中已有，则用其id执行update，没有则save
     */
    @Override
    public <T> int saveOrUpdate(T entity) {
        D0001 d = (D0001) entity;
        if (d.getDeltag() == null || d.getDeltag().equals("")) {
            d.setDeltag("0");
        }

        try {
            if (dao.saveOrUpdate(d)==ConstantClass.DZSUCCESS) {
                // 对于状态为撤销的授权点，将其所属的授权点和研究方向的状态也设为撤销
                if (d.getDeltag().equals("1")) {
                    dao.executeSQL("update D00_01 set deltag='1',cjrq=?,cxrq=? where bmdm like ?",
                            d.getCjrq(), d.getCxrq(), d.getBmdm() + "%");
                } else {
                    dao.executeSQL("update D00_01 set deltag='0',cjrq=?,cxrq=? where bmdm like ?",
                            d.getCjrq(), d.getCxrq(), d.getBmdm() + "%");
                }
            }
            return ConstantClass.DZSUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
    }

    /**
     * 删除方法，删除标记为1
     */
    @Override
    public <T> int delete(T entity) {
        if (entity == null) {
            return ConstantClass.DZFAILURE;
        }
        D0001 d = (D0001) entity;
        d.setDeltag("1");
        return dao.saveOrUpdate(d);
    }

    /**
     * 取得SOM形式的部门列表
     *
     * @return
     */
    @Override
    public List<SelectOptionModel> getAllSOMDepts() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(bmdm,bmmc) from D0001 where deltag!='1' order by bmdm");
    }

}
