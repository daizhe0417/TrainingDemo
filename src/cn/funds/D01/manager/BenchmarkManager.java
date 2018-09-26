package cn.funds.D01.manager;

import cn.venice.util.manager.GenericManager;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.model.SelectOptionModel;

import java.io.File;
import java.util.List;

public interface BenchmarkManager extends GenericManager {

    /**
     * 取得SOM形式的【基准】列表
     *
     * @return
     */
    List<SelectOptionModel> getAllSOMBenchmarks();

    String importData(List<ColumnModel> fieldsList, File file);

    List getSOMBenchmarkByProductId(String largeClass);
}
