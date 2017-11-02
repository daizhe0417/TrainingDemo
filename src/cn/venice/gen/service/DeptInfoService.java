package cn.venice.gen.service;


import cn.venice.D00.model.D0001;

import javax.servlet.http.HttpSession;
import java.util.List;

public interface DeptInfoService {

    /**
     * 取得level及其下级部门列表，可能在数据库中也可能在缓存中
     *
     * @param level
     * @return
     */
    public List<D0001> getAllDepts(Integer level);

    /**
     * 取得level及其下级部门列表，同时根据session中的身份进行过滤
     *
     * @param level
     * @param session
     * @return
     */
    public List<D0001> getAuthDeptsBySession(Integer level, HttpSession session);

}
