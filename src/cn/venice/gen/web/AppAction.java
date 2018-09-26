package cn.venice.gen.web;

import cn.venice.D00.model.D0003;
import cn.venice.D00.model.V0003;
import cn.venice.gen.model.UserInfoModel;
import cn.venice.util.md5.MD5Util;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.venice.util.model.ReqModel;
import cn.venice.util.web.GenericAction;

import com.google.gson.reflect.TypeToken;

import javax.annotation.Resource;
import java.util.List;

@Controller("appaction")
public class AppAction extends GenericAction {
    private static final long serialVersionUID = 1L;


    public String execute() {
        ServletActionContext.getResponse().setCharacterEncoding("utf-8");
        ReqModel reqM = null;
        reqM = this.fromRequest(new TypeToken<ReqModel>() {
        });
//		this.getRequest().se("reqJsonStr", this.reqJsonStr);
        return reqM.getMethodName();
    }

    public String loginApp() {
        D0003 d = (D0003) this.fromJSON(reqJsonStr, D0003.class);
        try {
            List tmp = mgr.find(
                    "from V0003 where userno=? and passwd=?",
                    d.getUserno(),
                    MD5Util.convertMD5(MD5Util.string2MD5(d
                            .getPasswd() + d.getUserno())));
            if (tmp == null || tmp.isEmpty()) {
                return this.returnJSONFAILURE("用户名或密码错误");
            } else {
                V0003 v03 = (V0003) tmp.get(0);
                UserInfoModel v = new UserInfoModel();
                v.setUserno(v03.getUserno());
                v.setUsername(v03.getUsername());
                v.setBmdm(v03.getBmdm());
                v.setBmmc(v03.getBmmc());
                v.setRoleno(v03.getRoleno());
                v.setRolename(v03.getRolename());
                return this.returnDatas(v);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return this.returnJSONFAILURE("账号管理系统异常");
        }
    }

    public String getAccountList() {
        D0003 d = (D0003) this.fromJSON(reqJsonStr, D0003.class);
        try {
            List tmp = mgr.find(
                    "from V0003 where userno=? and passwd=?",
                    d.getUserno(),
                    MD5Util.convertMD5(MD5Util.string2MD5(d
                            .getPasswd() + d.getUserno())));
            if (tmp == null || tmp.isEmpty()) {
                return this.returnJSONFAILURE("用户名或密码错误");
            } else {
                V0003 v03 = (V0003) tmp.get(0);
                UserInfoModel v = new UserInfoModel();
                v.setUserno(v03.getUserno());
                v.setUsername(v03.getUsername());
                v.setBmdm(v03.getBmdm());
                v.setBmmc(v03.getBmmc());
                v.setRoleno(v03.getRoleno());
                v.setRolename(v03.getRolename());
                String authFilterStatement = " and bmdm like '" + v03.getBmdm() + "%'";
                return this.returnDatas(mgr.find("from VAccount where deltag!='1'" + authFilterStatement));
            }
        } catch (Exception e) {
            e.printStackTrace();
            return this.returnJSONFAILURE("账号管理系统异常");
        }
    }

    public String receiveHistoryOrderList() {
        return this.returnJSONSUCCESS();
    }

    public String receiveDailyOrderList() {
        return this.returnJSONSUCCESS();
    }
}
