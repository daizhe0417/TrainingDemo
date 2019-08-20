package cn.venice.D00.web;

import cn.venice.D00.manager.D0001Manager;
import cn.venice.D00.model.D0001;
import cn.venice.D00.model.D0001Tmp;
import cn.venice.util.web.GenericAction;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.json.JSONArray;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

import cn.venice.util.common.ConstantClass;

import java.util.List;

@Controller("D00_01action")
public class D0001Action extends GenericAction {
    private static final long serialVersionUID = 1L;
    @Resource(name = "d0001mgr")
    private D0001Manager mgr;

    public String saveAllNodes() {
        List<D0001Tmp> list = (List<D0001Tmp>) this.fromRequestToList(D0001Tmp.class);
        if (mgr.saveAllNodes(list) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
    }

    public String save() {
        D0001 d = (D0001) this.fromRequest(D0001.class);
        if (mgr.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
            return this.returnJSONSUCCESS();
        } else {
            return this.returnJSONFAILURE();
        }
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
        return this.returnDatas(mgr.find("from V0001 where deltag !='1' and type='1'"));
    }

    public String getAllSOMDepts() {
        return this.returnDatas(mgr.getAllSOMDepts());
    }

    @Override
    public String findById() {
        D0001 obj = (D0001) this.fromRequest(D0001.class);
        D0001 d = mgr.findById(D0001.class, obj.getId());
        if (d != null) {
            return this.returnDatas(d);
        }
        return this.returnJSONFAILURE();
    }

    public String getAllSOMClasses() {
        return this.returnDatas(mgr.getAllSOMClasses());
    }
}
