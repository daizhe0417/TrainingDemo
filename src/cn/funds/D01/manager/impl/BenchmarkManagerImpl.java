package cn.funds.D01.manager.impl;

import cn.funds.D01.manager.BenchmarkManager;
import cn.funds.D01.manager.TCompanyManager;
import cn.funds.D01.model.*;
import cn.funds.gen.FundsConst;
import cn.venice.gen.constant.GenericConstant;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excel.ExcelOperator;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.model.SelectOptionModel;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.io.File;
import java.util.HashMap;
import java.util.List;


/**
 * 【基准】管理
 */
@Transactional
@Service("BenchmarkMgr")
public class BenchmarkManagerImpl extends GenericManagerImpl implements
        BenchmarkManager {

    @Resource(name = "userInfoService")
    private UserInfoService userInfoService;

    /**
     * 保存方法
     * <p>
     * 调用通用Manager的saveOrUpdate方法，根据bmdm判断，如果数据库中已有，则用其id执行update，没有则save
     */
    @Override
    public <T> int saveOrUpdate(T entity) {
        try {
            BenchmarkValue d = (BenchmarkValue) entity;
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
            BenchmarkValue d = (BenchmarkValue) entity;
            return dao.deleteById(BenchmarkValue.class,d.getId());
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
    }


    /**
     * 取得SOM形式的【基准】列表
     *
     * @return
     */
    public List<SelectOptionModel> getAllSOMBenchmarks() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(id,benchmarkName) from Benchmark where deltag!='1' order by benchmarkName");
    }

    @Override
    public String importData(List<ColumnModel> fieldsList, File file) {
        String resultMsg = "导入成功";
        try {
            List<VBenchmark> dataList = ExcelOperator.readFromExcel(fieldsList, file, VBenchmark.class);
            if (dataList != null && !dataList.isEmpty()) {
                List<Benchmark> pTmp = this.find("from Benchmark");
                if (pTmp != null && !pTmp.isEmpty()) {
                    HashMap<String, Integer> productMap = new HashMap<>();
                    for (int i = 0; i < pTmp.size(); i++) {
                        Benchmark v = pTmp.get(i);
                        productMap.put(v.getBenchmarkName(), v.getId());
                    }
                    for (int i = 0; i < dataList.size(); i++) {
                        VBenchmark d = dataList.get(i);
                        Integer benchmarkId = productMap.get(d.getBenchmarkName());
                        if (benchmarkId == null) {
                            continue;
                        }
                        List<BenchmarkValue> tmp = this.find("from BenchmarkValue where benchmarkId=? and riqi=?", benchmarkId, d.getRiqi());
                        if (tmp != null && !tmp.isEmpty()) {
                            BenchmarkValue dTmp = tmp.get(0);
                            dTmp.setValue(d.getValue());
                            super.saveOrUpdate(dTmp);
                        } else {
                            BenchmarkValue dTmp = new BenchmarkValue();
                            dTmp.setId(null);
                            dTmp.setBenchmarkId(benchmarkId);
                            dTmp.setValue(d.getValue());
                            dTmp.setRiqi(d.getRiqi());
                            super.saveOrUpdate(dTmp);
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

    @Override
    public List getSOMBenchmarkByProductId(String largeClass) {
        return dao.find("select new cn.venice.util.model.SelectOptionModel(id,benchmarkName) from Benchmark where type=? and deltag!='1' order by benchmarkName", FundsConst.getBenchmarkType(largeClass));
    }

}
