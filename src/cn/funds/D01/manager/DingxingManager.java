package cn.funds.D01.manager;

import cn.funds.D01.model.DingxingTable;
import cn.venice.util.manager.GenericManager;

import java.util.List;

public interface DingxingManager extends GenericManager {

    List<DingxingTable> getDingxinByCompanyId(Integer id);

    int saveOrUpdate(List<DingxingTable> list);
}
