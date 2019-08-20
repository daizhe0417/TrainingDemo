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

@Controller("registaction")
public class RegistAction extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "genericMgr")
    private GenericManager mgr;

    public String regist() {
        try {
            D0003 d = (D0003) this.fromJSON(reqJsonStr, D0003.class);

            List tmp = mgr.find(
                    "from V0003 where userNo=?",
                    d.getUserNo());
            if (tmp == null || tmp.isEmpty()) {
                d.setPasswd(MD5Util.convertMD5(MD5Util.string2MD5(d.getPasswd() + d.getUserNo())));
                d.setDeltag("2");   // 待审核
                d.setUserType("1");    // 前台用户
                if (mgr.save(d) == ConstantClass.DZSUCCESS) {
                    return this.returnJSONSUCCESS(d.getUserNo());
                }
                return this.returnJSONFAILURE("注册失败");
            } else {
                return this.returnJSONFAILURE("用户已存在");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return this.returnJSONFAILURE();
        }
    }

    public String findById() {
        D0003 d = (D0003) this.fromJSON(reqJsonStr, D0003.class);
        List tmp = mgr.find(
                "from V0003 where userNo=?",
                d.getUserNo());
        if (tmp == null || tmp.isEmpty()) {
            return this.returnJSONSUCCESS();
        } else {
            V0003 v = (V0003) tmp.get(0);
            if ("2".equals(v.getDeltag())) {
                return this.returnJSONFAILURE("用户已注册，等待审核中");
            } else {
                return this.returnJSONFAILURE("用户名已存在");
            }
        }
    }
}
