package cn.venice.D00.web;

import cn.venice.D00.manager.D0001Manager;
import cn.venice.D00.model.D0001;
import cn.venice.util.web.GenericAction;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

import cn.venice.util.common.ConstantClass;

@Controller("D00_01action")
public class D0001Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "d0001mgr")
    private D0001Manager mgr;

    public String save() {
        D0001 d = (D0001) this.fromRequest(D0001.class);
        if (mgr.saveOrUpdate(d)==ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String remove() {
        D0001 d = (D0001) this.fromRequest(D0001.class);
        if (mgr.delete(d)==ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from V0001");
    }

    public String getAllSOMDepts() {
        return this.returnDatas(mgr.getAllSOMDepts());
    }

    @Override
    public String findById() {
        D0001 obj = (D0001) this.fromRequest(D0001.class);
        D0001 d = mgr.findById(D0001.class, obj.getBmdm());
        if (d != null) {
            return this.returnDatas(d);
        }
        return this.returnJSONFAILURE();
    }
}
