package cn.venice.gen.web;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import cn.venice.D00.manager.D0001Manager;
import cn.venice.util.web.GenericAction;

/**
 * @author daizhe
 * @date 创建时间：2016年3月12日 上午11:37:30
 * @version 1.0
 * @parameter
 * @since
 * @return
 */
@Controller("deptInfoAction")
public class DeptInfoAction extends GenericAction {

	private static final long serialVersionUID = -165234104283860904L;

	@Resource(name = "d0001mgr")
	private D0001Manager mgr;

	/**
	 * 根据身份权限取得部门列表
	 * 
	 * @return
	 */
	public String getDeptsByAuth() {
		List tmp = mgr.getDeptsByAuth(this.getSession());
		return this.returnDatas(tmp);
	}
}
