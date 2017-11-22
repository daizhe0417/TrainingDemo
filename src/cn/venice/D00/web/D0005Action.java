package cn.venice.D00.web;

import cn.venice.D00.manager.D0005Manager;
import cn.venice.D00.model.D0005;
import cn.venice.util.model.ReqModel;
import cn.venice.util.web.GenericAction;
import com.google.gson.reflect.TypeToken;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller("D00_05action")
public class D0005Action extends GenericAction {
	private static final long serialVersionUID = 1L;
	@Resource(name = "d0005mgr")
	private D0005Manager mgr;

	private String rolecb;
	private String treeCB;

	public String getRolecb() {
		return rolecb;
	}

	public void setRolecb(String rolecb) {
		this.rolecb = rolecb;
	}

	public String getTreeCB() {
		return treeCB;
	}

	public void setTreeCB(String treeCB) {
		this.treeCB = treeCB;
	}

	public String getRightsBySession() {
		//List tmp = mgr.getRightsBySession(this.getSession());
		return this.returnDatas(mgr.getRightsBySession(this.getSession()));

	}

	public String display() {
		// List rolelist = mgr.find("from D0002");
		// List menulist = mgr.find("from D0004");
		// HttpServletRequest request = ServletActionContext.getRequest();
		// request.setAttribute("D0005.role.list", rolelist);
		// request.setAttribute("D0005.menu.list", menulist);
		return "success";
	}

	public String save() {
		if (rolecb != null && rolecb.length() > 0) {
			String[] roleno = rolecb.split(",");
			D0005 d = null;
			for (int i = 0; i < roleno.length; i++) {
				// mgr.execute("delete D0005 where roleno='" + roleno[i] + "'");
				List tmp = mgr.find("from D0005 where roleno='" + roleno[i]
						+ "'");
				if (tmp != null && !tmp.isEmpty()) {
					for (int j = 0; j < tmp.size(); j++) {
						if (!mgr.delete(tmp.get(j))) {
							HttpServletRequest request = ServletActionContext
									.getRequest();
							request.setAttribute("D0005.save.failure", "true");
							return this.returnJSONFAILURE();
						}
					}
				}
				if (treeCB != null && treeCB.length() > 0) {
					String[] menuno = treeCB.split(",");
					d = new D0005();
					d.setRoleno(roleno[i].trim());
					for (int j = 0; j < menuno.length; j++) {
						d.setMenuid(menuno[j].trim());
						if (!mgr.save(d)) {
							HttpServletRequest request = ServletActionContext
									.getRequest();
							request.setAttribute("D0005.save.failure", "true");
							return this.returnJSONFAILURE();
						}
					}
				}
			}
		}
		HttpServletRequest request = ServletActionContext.getRequest();
		request.setAttribute("D0005.save.success", "true");
		return this.returnJSONSUCCESS();
	}

	/**
	 * 根据roleno取得其菜单列表
	 * 
	 * @return List<D0002>
	 */
	public String getMenuIdsByRoleno() {
		ReqModel<D0005> reqM = this
				.fromRequest(new TypeToken<ReqModel<D0005>>() {
				});
		return this.returnDatas(mgr.getMenuIdsByRoleno(reqM.getParam()
				.getRoleno()));
	}
}
