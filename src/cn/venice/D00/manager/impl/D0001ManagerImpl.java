package cn.venice.D00.manager.impl;

import cn.venice.D00.manager.D0001Manager;
import cn.venice.D00.model.D0001;
import cn.venice.D00.model.D0001Tmp;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excep.AuthFaildException;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.model.SelectOptionModel;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
        return dao.find("from D0001 where deltag!='1' and type='1' order by bmdm");
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

    @Override
    @Transactional
    public int saveAllNodes(List<D0001Tmp> list) {
        if (list == null || list.isEmpty()) {
            return ConstantClass.DZFAILURE;
        }
        try {
            Map<String, Integer> newNodeMap = new HashMap<>();
            List<D0001> savedList = new ArrayList<>();
            for (int i = 0; i < list.size(); i++) {
                D0001Tmp tmp = list.get(i);
                D0001 d = new D0001();
                if (tmp.getId().startsWith("tmp")) {
                    d.setBmmc(tmp.getBmmc());
                    d.setDescrip(tmp.getDescrip());
                    d.setDeltag("0");
                    d.setSeq(tmp.getSeq() == null ? 99 : tmp.getSeq());
                    if (tmp.getParentId().startsWith("tmp")) {
                        if (newNodeMap.get(tmp.getParentId()) != null) {
                            d.setParentId(newNodeMap.get(tmp.getParentId()));
                        } else {
                            continue;
                        }
                    } else {
                        d.setParentId(Integer.parseInt(tmp.getParentId()));
                    }
                    d.setType("1");// 部门的类型为1，班级的类型为2
                } else {
                    d.setId(Integer.parseInt(tmp.getId()));
                    d.setBmmc(tmp.getBmmc());
                    d.setDescrip(tmp.getDescrip());
                    d.setDeltag("0");
                    d.setSeq(tmp.getSeq() == null ? 99 : tmp.getSeq());
                    d.setParentId(Integer.parseInt(tmp.getParentId()));
                    d.setType("1");
                }
                this.saveOrUpdate(d);
                savedList.add(d);
                if (tmp.getId().startsWith("tmp")) {
                    newNodeMap.put(tmp.getId(), d.getId());

                }
            }
            for (int i = 0; i < savedList.size(); i++) {
                D0001 d = savedList.get(i);
                if (d.getParentId() == 0) {
                    d.setBmdm("0");
                } else {
                    String parentBmdm = "";
                    for (int j = 0; j < savedList.size(); j++) {
                        D0001 tmp = savedList.get(j);
                        if (tmp.getId().equals(d.getParentId())) {
                            parentBmdm = tmp.getBmdm();
                            break;
                        }
                    }
                    d.setBmdm(parentBmdm + "," + d.getId());
                }
                this.update(d);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
        return ConstantClass.DZSUCCESS;
    }

    @Override
    public List<SelectOptionModel> getAllSOMClasses() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(id,bmmc) from D0001 where deltag!='1' and type='2' order by bmdm");
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

    @Override
    public <T> int saveOrUpdate(T entity) {
        D0001 d = (D0001) entity;
        if (d.getDeltag() == null || d.getDeltag().equals("")) {
            d.setDeltag("0");
        }
        d.setType("1");// 所有通过D0001保存的都是"部门"，类型为1，班级通过D0021保存，类型是2
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
     * 删除方法，删除标记为1
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

    /**
     * 取得SOM形式的部门列表
     *
     * @return
     */
    @Override
    public List<SelectOptionModel> getAllSOMDepts() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(id,bmmc) from D0001 where deltag!='1' and type='1' order by bmdm");
    }

}
