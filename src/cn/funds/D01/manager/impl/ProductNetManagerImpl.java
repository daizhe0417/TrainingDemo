package cn.funds.D01.manager.impl;

import cn.funds.D01.manager.ProductNetManager;
import cn.funds.D01.model.BenchmarkValue;
import cn.funds.D01.model.Productnet;
import cn.funds.D01.model.VProduct;
import cn.funds.D01.model.VProductnet;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excel.ExcelOperator;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.model.ColumnModel;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.HashMap;
import java.util.List;

@Service("ProductNetMgr")
public class ProductNetManagerImpl extends GenericManagerImpl implements
        ProductNetManager {

    /**
     * 保存方法
     * <p>
     * 调用通用Manager的saveOrUpdate方法，根据bmdm判断，如果数据库中已有，则用其id执行update，没有则save
     */
    @Override
    public <T> int saveOrUpdate(T entity) {
        try {
            Productnet d = (Productnet) entity;
            return dao.saveOrUpdate(d);
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
    }

    /**
     * 删除方法，根据主键删除
     */
    @Override
    public <T> int delete(T entity) {
        try {
            Productnet d = (Productnet) entity;
            return dao.deleteById(Productnet.class, d.getId());
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
    }

    @Override
    public String importData(List<ColumnModel> fieldsList, File file) {
        String resultMsg = "导入成功";
        try {
            List<VProductnet> dataList = ExcelOperator.readFromExcel(fieldsList, file, VProductnet.class);
            if (dataList != null && !dataList.isEmpty()) {
                List<VProduct> pTmp = this.find("from VProduct");
                if (pTmp != null && !pTmp.isEmpty()) {
                    HashMap<String, Integer> productMap = new HashMap<>();
                    for (int i = 0; i < pTmp.size(); i++) {
                        VProduct v = pTmp.get(i);
                        productMap.put(v.getProductCode(), v.getId());
                    }
                    for (int i = 0; i < dataList.size(); i++) {
                        VProductnet d = dataList.get(i);
                        Integer productId = productMap.get(d.getProductCode());
                        if (productId == null) {
                            continue;
                        }
                        List<Productnet> tmp = this.find("from Productnet where productId=? and riqi=?", productId, d.getRiqi());
                        if (tmp != null && !tmp.isEmpty()) {
                            Productnet dTmp = tmp.get(0);
                            dTmp.setAccumulatedNet(d.getAccumulatedNet());
                            //dTmp.setHs300(d.getHs300());
                            dTmp.setUnitNet(d.getUnitNet());
                            this.saveOrUpdate(dTmp);
                        } else {
                            Productnet dTmp = new Productnet();
                            dTmp.setId(null);
                            dTmp.setProductId(productId);
                            dTmp.setAccumulatedNet(d.getAccumulatedNet());
                            //dTmp.setHs300(d.getHs300());
                            dTmp.setUnitNet(d.getUnitNet());
                            dTmp.setRiqi(d.getRiqi());
                            this.saveOrUpdate(dTmp);
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            resultMsg = "导入失败";
            return resultMsg;
        }
        return resultMsg;
    }
}
