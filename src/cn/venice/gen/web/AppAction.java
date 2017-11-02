package cn.venice.gen.web;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import cn.venice.util.model.ReqModel;
import cn.venice.util.web.GenericAction;

import com.google.gson.reflect.TypeToken;

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
}
