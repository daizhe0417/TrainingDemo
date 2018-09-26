package cn.venice.D00.web;

import cn.venice.D00.manager.D0003Manager;
import cn.venice.D00.model.D0003;
import cn.venice.D00.model.V0003;
import cn.venice.gen.model.PasswdModel;
import cn.venice.gen.model.UserInfoModel;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.web.GenericAction;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.struts2.dispatcher.multipart.MultiPartRequestWrapper;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.List;

@Controller("D00_03action")
public class D0003Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "d0003mgr")
    private D0003Manager mgr;

    @Resource(name = "userInfoService")
    private UserInfoService userInfoService;

    /**
     * 保存用户信息
     *
     * @return
     */
    public String save() {
        try {
            D0003 d = (D0003) this.fromRequest(D0003.class);
            if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
                return this.returnJSONSUCCESS();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return this.returnJSONFAILURE();
        }
        return this.returnJSONFAILURE();
    }

    /**
     * 锁定用户
     * @return
     */
    public String remove() {
        try {
            D0003 d = (D0003) this.fromRequest(D0003.class);
            if (mgr.delete(d) == ConstantClass.DZSUCCESS) {
                return this.returnJSONSUCCESS();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return this.returnJSONFAILURE();
        }
        return this.returnJSONFAILURE();
    }

    /**
     * 激活用户
     * @return
     */
    public String unLock() {
        try {
            D0003 d = (D0003) this.fromRequest(D0003.class);
            if (mgr.unLock(d) == ConstantClass.DZSUCCESS) {
                return this.returnJSONSUCCESS();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return this.returnJSONFAILURE();
        }
        return this.returnJSONFAILURE();
    }

    public String query() {
        return this.goPage("from V0003");
    }

    /**
     * 修改密码
     *
     * @return
     */
    public String passwdmodify() {
        PasswdModel d = (PasswdModel) this.fromRequest(PasswdModel.class);
        UserInfoModel v;
        try {
            v = userInfoService.getUserInfo();
            int result = mgr.passwdmodify(d, v.getUserno());
            if (result == D0003Manager.MODIFY_PASSWD_SUCCESS) {
                return this.returnJSONSUCCESS();
            } else if (result == D0003Manager.MODIFY_PASSWD_FAILURE) {
                return this.returnJSONFAILURE();
            } else if (result == D0003Manager.PASSWD_WRONG) {
                return this.returnJSONFAILURE("原密码错误");
            } else {
                return this.returnJSONFAILURE();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "当前用户身份已过期";
        }
    }

    /**
     * 重置用户密码
     *
     * @return
     */
    public String resetPasswd() {
        D0003 d = (D0003) this.fromRequest(D0003.class);
        if (mgr.resetPasswd(d.getUserno()) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    @Override
    public String findById() {
        D0003 obj = (D0003) this.fromRequest(D0003.class);
        V0003 d = mgr.findById(V0003.class, obj.getUserno());
        if (d != null) {
            return this.returnDatas(d);
        }
        return this.returnJSONFAILURE();
    }

    public String uploadFile() {
        HttpServletRequest request = this.getRequest();
        MultiPartRequestWrapper multipartRequest = (MultiPartRequestWrapper) request;

        File[] files = multipartRequest.getFiles("iptUploadFile[]");

        String basePath = request.getSession().getServletContext()
                .getRealPath("");
        String[] fileNames = multipartRequest.getFileNames("iptUploadFile[]");
        String suffix = fileNames[0].substring(fileNames[0].lastIndexOf(".") + 1);
        return this.returnDatas(mgr.uploadFile(this.getId(), this.getFileType(), files[0], basePath, suffix));
    }
}
