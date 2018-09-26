package cn.funds.D01.manager;

import cn.venice.util.manager.GenericManager;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.model.SelectOptionModel;

import java.io.File;
import java.util.List;

public interface TCompanyManager extends GenericManager {

    /**
     * 取得SOM形式的公司列表
     *
     * @return
     */
    List<SelectOptionModel> getAllSOMCompanys();

    String importData(List<ColumnModel> fieldsList, File file);

    String uploadFile(String id, String fileType, File file, String basePath, String suffix);
}
