package cn.venice.gen.service.impl;


import cn.venice.D00.manager.D0001Manager;
import cn.venice.D00.model.D0001;
import cn.venice.gen.service.DeptInfoService;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.cache.service.LntuCacheService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;

@Service("deptInfoService")
public class DeptInfoServiceImpl implements DeptInfoService {

	@Resource(name = "lntuCacheService")
	protected LntuCacheService lntuCacheService;

	@Resource(name = "userInfoService")
	private UserInfoService userInfoService;

	@Resource(name = "d0001mgr")
	private D0001Manager d0001mgr;

	/**
	 * 取得所有部门列表：如果缓存中有就取缓存的，没有从数据库中取并存入缓存
	 * 
	 * @return List<D0001> 所有部门列表
	 */
	@Override
	public List<D0001> getAllDepts(Integer level) {
		List<D0001> deptsList = d0001mgr.getAllDepts();
		return trimZero(deptsList);
	}

	/**
	 * 通过session取得权限过滤的部门列表：如果配置了用户的部门权限，根据配置返回权限内部门列表，如果没有配置，
	 * 默认返回用户所在部门及其所有子部门的列表
	 * 
	 * @return List<D0001> 用户权限内的部门列表
	 */
	@Override
	public List<D0001> getAuthDeptsBySession(Integer level, HttpSession session) {
		return d0001mgr.getAllDepts();
	}

	/**
	 * 过滤部门列表中bmdm后部两位一组的00
	 * 
	 * @param List
	 *            <D0001> list
	 * @return List<D0001>去掉bmdm后00的部门列表
	 */
	private List<D0001> trimZero(List<D0001> list) {
		if (list != null && !list.isEmpty()) {
			for (int i = 0; i < list.size(); i++) {
				D0001 d = (D0001) list.get(i);
				String bmdm = d.getBmdm();
				while (bmdm.length() > 2 && !bmdm.equals("00")) {
					if (bmdm.substring(bmdm.length() - 2, bmdm.length())
							.equals("00")) {
						bmdm = bmdm.substring(0, bmdm.length() - 2);
					} else {
						break;
					}
				}
				d.setBmdm(bmdm);
			}
		}
		return list;
	}

}
