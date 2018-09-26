package cn.funds.D01.manager;

import cn.venice.util.manager.GenericManager;
import cn.venice.util.model.ColumnModel;

import java.io.File;
import java.util.List;

public interface ProductNetManager extends GenericManager {

    String importData(List<ColumnModel> fieldsList, File file);
}
