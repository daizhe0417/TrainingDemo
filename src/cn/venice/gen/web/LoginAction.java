package cn.venice.gen.web;

import cn.venice.D00.model.D0003;
import cn.venice.D00.model.V0003;
import cn.venice.gen.model.UserInfoModel;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.manager.GenericManager;
import cn.venice.util.md5.MD5Util;
import cn.venice.util.web.GenericAction;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller("loginaction")
public class LoginAction extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "genericMgr")
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
                    v.setuType("0");
                    this.getSession().setAttribute(
                            ConstantClass.LOGIN_USER_SESSION_ID, v);
                    return this.returnDatas(v);
                } else {
                    try {
                        List tmp = mgr.find(
                                "from V0003 where userno=? and passwd=?",
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
                            V0003 v03 = (V0003) tmp.get(0);
                            if ("2".equals(v03.getDeltag())) {
                                return this.returnJSONFAILURE("尚未审核通过，请等待");
                            }
                            UserInfoModel v = new UserInfoModel();
                            v.setUserno(v03.getUserno());
                            v.setUsername(v03.getUsername());
                            v.setBmdm(v03.getBmdm());
                            v.setBmmc(v03.getBmmc());
                            v.setRoleno(v03.getRoleno());
                            v.setRolename(v03.getRolename());
                            v.setuType(v03.getuType());
                            this.getSession().setAttribute(
                                    ConstantClass.LOGIN_USER_SESSION_ID, v);
                            return this.returnDatas(v03);
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
