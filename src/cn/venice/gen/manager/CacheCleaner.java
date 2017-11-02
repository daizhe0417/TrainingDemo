package cn.venice.gen.manager;

public interface CacheCleaner {

	public void getBmdmListByRoleno_CacheEvict(String roleno);

	public void getSOMYgListByBmdm_CacheEvict(String bmdm);

	public void getSOMWxysByBmdm_CacheEvict(String bmdm);

}
