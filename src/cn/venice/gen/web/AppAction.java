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
                    "from V0003 where userNo=? and passwd=?",
                    d.getUserNo(),
                    MD5Util.convertMD5(MD5Util.string2MD5(d
                            .getPasswd() + d.getUserNo())));
            if (tmp == null || tmp.isEmpty()) {
                return this.returnJSONFAILURE("用户名或密码错误");
            } else {
                V0003 v03 = (V0003) tmp.get(0);
                UserInfoModel v = new UserInfoModel();
                v.setUserNo(v03.getUserNo());
                v.setUserName(v03.getUserName());
                v.setBmId(v03.getBmId());
                v.setBmmc(v03.getBmmc());
                v.setRoleNo(String.valueOf(v03.getRoleId()));
                v.setRoleName(v03.getRoleName());
                v.setUserType(v03.getUserType());
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
                    "from V0003 where userNo=? and passwd=?",
                    d.getUserNo(),
                    MD5Util.convertMD5(MD5Util.string2MD5(d
                            .getPasswd() + d.getUserNo())));
            if (tmp == null || tmp.isEmpty()) {
                return this.returnJSONFAILURE("用户名或密码错误");
            } else {
                V0003 v03 = (V0003) tmp.get(0);
                UserInfoModel v = new UserInfoModel();
                v.setUserNo(v03.getUserNo());
                v.setUserName(v03.getUserName());
                v.setBmId(v03.getBmId());
                v.setBmmc(v03.getBmmc());
                v.setRoleNo(String.valueOf(v03.getRoleId()));
                v.setRoleName(v03.getRoleName());
                v.setUserType(v03.getUserType());
                String authFilterStatement = " and bmdm like '" + v03.getBmId() + "%'";
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
