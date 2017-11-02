package cn.venice.D00.manager;

import cn.venice.D00.model.D0002;
import cn.venice.util.manager.GenericManager;
import cn.venice.util.model.SelectOptionModel;

import java.util.List;

public interface D0002Manager extends GenericManager {

	List<D0002> getAllRoles();

	/**
	 * 得到所有角色,SOM形式
	 * 
	 * @return List<D0002>
	 */
	List<SelectOptionModel> getSOMRoles();

}
