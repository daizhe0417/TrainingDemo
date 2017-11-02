package cn.venice.D00.web;

import cn.venice.D00.manager.D0002Manager;
import cn.venice.D00.model.D0002;
import cn.venice.util.web.GenericAction;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

@Controller("D00_02action")
public class D0002Action extends GenericAction {
	private static final long serialVersionUID = 1L;
	@Resource(name = "d0002mgr")
	private D0002Manager mgr;

	/**
	 * 保存用户信息
	 * 
	 * @return
	 */
	public String save() {
		try {
			D0002 d = (D0002) this.fromRequest(D0002.class);
			if (mgr.saveOrUpdate(d)) {
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
			if (mgr.deleteById(D0002.class, d.getRoleno())) {
				return this.returnJSONSUCCESS();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.returnJSONFAILURE();
		}
		return this.returnJSONFAILURE();
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
		D0002 d = mgr.findById(D0002.class, obj.getRoleno());
		if (d != null) {
			return this.returnDatas(d);
		}
		return this.returnJSONFAILURE();
	}
}
