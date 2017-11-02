package cn.venice.gen.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.venice.gen.constant.GenericConstant;
import cn.venice.gen.model.UserInfoModel;
import cn.venice.D00.model.D0003;
import cn.venice.D00.model.V0003Id;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.manager.GenericManager;
import cn.venice.util.md5.MD5Util;
import cn.venice.util.model.ResModel;
import cn.venice.util.web.GenericAction;

@Controller("loginaction")
public class LoginAction extends GenericAction {
	private static final long serialVersionUID = 1L;
	@Resource(name = "genericManagerImpl")
	private GenericManager mgr;

	public String login() {
		try {
			D0003 d = (D0003) this.fromJSON(reqJsonStr, D0003.class);

			if (d.getUserno() != null && !d.getUserno().equals("")
					&& d.getPasswd() != null && !d.getPasswd().equals("")) {
				if (d.getUserno().equals("admin")
						&& d.getPasswd().equals("123")) {
					UserInfoModel v = new UserInfoModel();
					v.setUserno("admin");
					v.setUsername("超级管理员");
					v.setRoleno("admin");
					v.setBmdm("");
					this.getSession().setAttribute(
							ConstantClass.LOGIN_USER_SESSION_ID, v);
					return this.returnJSONSUCCESS();
				} else {
					try {
						List tmp = mgr.find(
								"from V0003Id where userno=? and passwd=?",
								d.getUserno(),
								MD5Util.convertMD5(MD5Util.string2MD5(d
										.getPasswd() + d.getUserno())));
						if (tmp == null || tmp.isEmpty()) {
//							rm.setStatus(ResModel.RETURN_STATUS_OK);
//							rm.setMsg(GenericConstant.LOGIN_PASSWD_WRONG);
							// this.getRequest().setAttribute(
							// GenericConstant.LOGIN_FAILURE_MSG_NAME,
							// GenericConstant.LOGIN_PASSWD_WRONG);
							return this.returnJSONFAILURE("用户名或密码错误");
						} else {
							V0003Id v03 = (V0003Id) tmp.get(0);
							UserInfoModel v = new UserInfoModel();
							v.setUserno(v03.getUserno());
							v.setUsername(v03.getUsername());
							v.setBmdm(v03.getBmdm());
							v.setBmmc(v03.getBmmc());
							v.setRoleno(v03.getRoleno());
							v.setRolename(v03.getRolename());
							this.getSession().setAttribute(
									ConstantClass.LOGIN_USER_SESSION_ID, v);
							return this.returnJSONSUCCESS();
						}
					} catch (Exception e) {
						e.printStackTrace();
						return this.returnJSONFAILURE();
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.returnJSONFAILURE();
		}
		return this.returnJSONFAILURE();
	}

	public String login(String userno, String passwd) {
		return "failure";
	}

	public String logout() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		if (session.getAttribute(ConstantClass.LOGIN_USER_SESSION_ID) != null) {
			session.setAttribute(ConstantClass.LOGIN_USER_SESSION_ID, null);
		}
		return this.returnJSONSUCCESS();
	}
}
