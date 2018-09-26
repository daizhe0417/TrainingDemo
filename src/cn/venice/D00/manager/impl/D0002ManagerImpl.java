package cn.venice.D00.manager.impl;

/**
 * 角色管理模块
 */

import cn.venice.D00.manager.D0002Manager;
import cn.venice.D00.model.D0002;
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
				.find("select new cn.venice.util.model.SelectOptionModel(roleno,rolename) from D0002 order by roleno");
	}

}
