package cn.venice.gen.service;

import javax.servlet.http.HttpSession;

import cn.venice.gen.exception.UserInfoException;
import cn.venice.gen.model.UserInfoModel;
import cn.venice.util.excep.AuthFaildException;

public interface UserInfoService {

	public UserInfoModel getUserInfoBySession(HttpSession session);

	public String getUserBmdmBySession(HttpSession session);

	public String getRolenoBySession(HttpSession session);

	public String getAuthFilterStatement(HttpSession session)
			throws AuthFaildException;

	public UserInfoModel getUserInfo() throws UserInfoException;

}
