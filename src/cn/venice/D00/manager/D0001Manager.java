package cn.venice.D00.manager;

import cn.venice.D00.model.D0001;
import cn.venice.util.manager.GenericManager;
import cn.venice.util.model.SelectOptionModel;

import javax.servlet.http.HttpSession;
import java.util.List;

public interface D0001Manager extends GenericManager {

    /**
     * 从数据库中取得所有部门列表
     *
     * @return List<D0001>
     */
    List<D0001> getAllDepts();

    /**
     * 取得SOM形式的部门列表
     *
     * @return
     */
    List<SelectOptionModel> getAllSOMDepts();

    /**
     * 从数据库中根据部门代码取得所有下级部门列表
     *
     * @param String bmdm
     * @return List<D0001> 所有bmdm like 的，包括下级部门
     */
    List<D0001> findSubDeptsByBmdm(String bmdm);

    /**
     * 根据身份权限取得部门列表
     *
     * @param session
     * @return
     */
    List<D0001> getDeptsByAuth(HttpSession session);

    /**
     * 根据bmdm取得bmmc
     *
     * @param bmdm
     * @return
     */
    String getBmmcByBmdm(String bmdm);

}
