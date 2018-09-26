package cn.funds.D01.manager;

import cn.funds.D01.model.TempResult;
import cn.venice.util.manager.GenericManager;
import cn.venice.util.model.ColumnModel;

import java.io.File;
import java.util.List;

public interface TProductManager extends GenericManager {

    String importData(List<ColumnModel> fieldsList, File file);

    Object getAllSOMProducts();

    TempResult getProductIndex(TempResult d);
}
