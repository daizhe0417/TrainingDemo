package cn.venice.D00.web;

import cn.venice.D00.manager.D0011Manager;
import cn.venice.D00.model.D0011;
import cn.venice.util.web.GenericAction;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

@Controller("D00_11action")
public class D0011Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "d0011mgr")
    private D0011Manager mgr;

    public String save() {
        D0011 d = (D0011) this.fromRequest(D0011.class);
        if (mgr.saveOrUpdate(d)) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String remove() {
        D0011 d = (D0011) this.fromRequest(D0011.class);
        if (mgr.delete(d)) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String query() {
        return this.goPage("from V0001");
    }

}
