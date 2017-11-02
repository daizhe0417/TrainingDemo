package cn.venice.D00.web;

import cn.venice.D00.manager.D0004Manager;
import cn.venice.D00.model.D0004;
import cn.venice.util.web.GenericAction;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

@Controller("D00_04action")
public class D0004Action extends GenericAction {
	private static final long serialVersionUID = 1L;
	@Resource(name = "d0004mgr")
	private D0004Manager mgr;

	public void save(D0004 d) {

		mgr.saveOrUpdate(d);
	}

	public void remove(D0004 d) {
		mgr.delete(mgr.findById(D0004.class, d.getMenuid()));
	}

	public void remove(String id) {
		mgr.delete(mgr.findById(D0004.class, id));
	}

	public String query() {
		return this.goPage("from D0005 where 0=0");
	}
	
	public String getAllMenus(){
		return this.returnDatas(mgr.getAllMenus());
	}
}
