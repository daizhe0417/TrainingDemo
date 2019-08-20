package cn.venice.D00.web;

import cn.venice.D00.manager.D0002Manager;
import cn.venice.D00.model.D0002;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.web.GenericAction;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.List;

/**
 * 角色管理
 */
@Controller("D00_02action")
public class D0002Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "d0002mgr")
    private D0002Manager mgr;

    public String save() {
        try {
            D0002 d = (D0002) this.fromRequest(D0002.class);
            if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
                return this.returnJSONSUCCESS();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return this.returnJSONFAILURE();
        }
        return this.returnJSONFAILURE();
    }

    public String remove() {
        try {
            D0002 d = (D0002) this.fromRequest(D0002.class);
            int status = mgr.delete(d);
            if (status == ConstantClass.DZSUCCESS) {
                return this.returnJSONSUCCESS();
            } else if (status == ConstantClass.DZ_HAS_SUB_ITEM) {
                return this.returnJSONFAILURE("has_sub_item");
            } else {
                return this.returnJSONFAILURE();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from D0002");
    }

    /**
     * 得到所有角色,SOM形式
     *
     * @return List<D0002>
     */
    public String getSOMRoles() {
        return this.returnDatas(mgr.getSOMRoles());
    }

    @Override
    public String findById() {
        D0002 obj = (D0002) this.fromRequest(D0002.class);
        List tmp = mgr.find("from D0002 where rolename=?", obj.getRoleName());
        if (tmp != null && !tmp.isEmpty()) {
            return this.returnDatas(tmp.get(0));
        }
        return this.returnJSONFAILURE();
    }
}
