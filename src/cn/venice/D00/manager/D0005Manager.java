package cn.venice.D00.manager;

import cn.venice.D00.model.D0004;
import cn.venice.util.manager.GenericManager;

import javax.servlet.http.HttpSession;
import java.util.List;

public interface D0005Manager extends GenericManager {

	public List<D0004> getRightsBySession(HttpSession session);

	public List<String> getMenuIdsByRoleno(String roleno);

}