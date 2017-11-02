package cn.venice.D00.manager.impl;

/**
 * 菜单管理
 */

import cn.venice.D00.manager.D0004Manager;
import cn.venice.D00.model.D0004;
import cn.venice.util.manager.impl.GenericManagerImpl;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("d0004mgr")
public class D0004ManagerImpl extends GenericManagerImpl implements
		D0004Manager {

	@Override
	@Cacheable(value = "pmsafeCache", key = "'getAllMenus'")
	public List<D0004> getAllMenus() {
		return dao.find("from D0004 order by menuid");
	}

	@Override
	@CacheEvict(value = "pmsafeCache", key = "'getAllMenus'")
	public <T> boolean delete(T entity) {
		return super.delete(entity);
	}

	@Override
	@CacheEvict(value = "pmsafeCache", key = "'getAllMenus'")
	public <T> boolean saveOrUpdate(T entity) {
		return super.saveOrUpdate(entity);
	}
}
