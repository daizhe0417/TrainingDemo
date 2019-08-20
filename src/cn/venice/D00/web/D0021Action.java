package cn.venice.D00.web;

import cn.venice.D00.manager.D0001Manager;
import cn.venice.D00.manager.D0021Manager;
import cn.venice.D00.model.D0001;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.web.GenericAction;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.List;

/**
 * 班级管理
 */
@Controller("D00_21action")
public class D0021Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "d0021mgr")
    private D0021Manager mgr;

    public String save() {
        try {
            D0001 d = (D0001) this.fromRequest(D0001.class);
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
            D0001 d = (D0001) this.fromRequest(D0001.class);
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
        return this.goPage("from D0001 where deltag!='1' and type='222'");
    }

    /**
     * 得到所有角色,SOM形式
     *
     * @return List<D0001>
     */
    public String getSOMClasses() {
        return this.returnDatas(mgr.getSOMClasses());
    }

    @Override
    public String findById() {
        D0001 obj = (D0001) this.fromRequest(D0001.class);
        List tmp = mgr.find("from D0001 where bmmc=? and type='2'", obj.getBmmc());
        if (tmp != null && !tmp.isEmpty()) {
            return this.returnDatas(tmp.get(0));
        }
        return this.returnJSONFAILURE();
    }
}
