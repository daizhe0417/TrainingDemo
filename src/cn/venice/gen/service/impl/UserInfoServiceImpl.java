package cn.venice.gen.service.impl;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import cn.venice.gen.exception.UserInfoException;
import cn.venice.gen.model.UserInfoModel;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.cache.service.LntuCacheService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excep.AuthFaildException;

/**
 * 用于操作保存在session中的用户登录信息
 * 
 * @author daizhe
 * 
 */
@Service("userInfoService")
public class UserInfoServiceImpl implements UserInfoService {

	@Resource(name = "lntuCacheService")
	protected LntuCacheService lntuCacheService;

	// @Autowired
	// HttpServletRequest request; // 这里可以获取到request

	@Override
	public UserInfoModel getUserInfo() throws UserInfoException {
		try {
			HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
					.getRequestAttributes()).getRequest();
			HttpSession session = request.getSession();
			UserInfoModel info = this.getUserInfoBySession(session);
			if (info == null || info.getBmdm() == null
					|| info.getUserno() == null
					|| info.getUserno().equals("")) {
				throw new UserInfoException("info empty");
			}
			return info;
		} catch (Exception e) {
			e.printStackTrace();
			throw new UserInfoException("infoService exception"
					+ e.getMessage());
		}
	}

	/**
	 * 取得用户登录信息
	 * 
	 * @return
	 */
	@Override
	public UserInfoModel getUserInfoBySession(HttpSession session) {
		return (UserInfoModel) session
				.getAttribute(ConstantClass.LOGIN_USER_SESSION_ID);
	}

	/**
	 * 取得登陆用户的部门代码
	 * 
	 * @return
	 */
	@Override
	public String getUserBmdmBySession(HttpSession session) {
		UserInfoModel v = getUserInfoBySession(session);
		if (v != null) {
			return v.getBmdm();
		}
		return null;
	}

	/**
	 * 取得登陆用户的角色代码
	 * 
	 * @return
	 */
	@Override
	public String getRolenoBySession(HttpSession session) {
		UserInfoModel v = getUserInfoBySession(session);
		if (v != null) {
			return v.getRoleno();
		}
		return null;
	}

	/**
	 * 取得登陆用户的权限字符串
	 * 
	 * @return
	 */
	@Override
	public String getAuthFilterStatement(HttpSession session)
			throws AuthFaildException {
		UserInfoModel v = getUserInfoBySession(session);
		if (v == null) {
			throw new AuthFaildException("get user from session failed");
		}
		if (v.getUserno().equals("admin")) {
			return "";
		}
		if (v.getBmdm() == null || v.getBmdm().length() < 2) {
			throw new AuthFaildException("bmdm is null or less than 2 char");
		}
		String bmdm = v.getBmdm();

		String authStr = " and bmdm like '" + bmdm + "%'";

		return authStr;
	}
}
