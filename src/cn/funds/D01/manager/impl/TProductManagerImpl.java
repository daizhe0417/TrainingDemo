package cn.funds.D01.manager.impl;

import cn.funds.D01.manager.TProductManager;
import cn.funds.D01.model.*;
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
 * [基金产品]管理
 */
@Transactional
@Service("TProduct")
public class TProductManagerImpl extends GenericManagerImpl implements
        TProductManager {

    @Resource(name = "userInfoService")
    private UserInfoService userInfoService;


    /**
     * 保存方法，删除标记为0
     * <p>
     * 调用通用Manager的saveOrUpdate方法，根据bmdm判断，如果数据库中已有，则用其id执行update，没有则save
     */
    @Override
    public <T> int saveOrUpdate(T entity) {
        try {
            TProduct d = (TProduct) entity;
            //if (d.getDeltag() == null || d.getDeltag().equals("")) {
            d.setDeltag("0");
            //}
            if (dao.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
                return ConstantClass.DZSUCCESS;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
        return ConstantClass.DZFAILURE;
    }

    /**
     * 删除方法，删除标记为1
     */
    @Override
    public <T> int delete(T entity) {
        try {
            TProduct d = (TProduct) entity;
            d.setDeltag("1");
            if (dao.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
                return ConstantClass.DZSUCCESS;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
        return ConstantClass.DZFAILURE;
    }

    @Override
    public List<SelectOptionModel> getAllSOMProducts() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(id,productName) from TProduct where deltag!='1' order by productName");
    }

    @Override
    public TempResult getProductIndex(TempResult d) {
        List tmp = dao.find("from TempResult where productId=? and benchmarkId=? order by CutOffDate desc", d.getProductId(), d.getBenchmarkId());
        if (tmp != null && !tmp.isEmpty()) {
            return (TempResult) tmp.get(0);
        }
        return null;
    }


    @Override
    public String importData(List<ColumnModel> fieldsList, File file) {
        String resultMsg = "导入成功";
        String companyNotExistStr = "";
        String managerNotExistStr = "";
        try {
            List<VProduct> dataList = ExcelOperator.readFromExcel(fieldsList, file, VProduct.class);
            if (dataList != null && !dataList.isEmpty()) {
                // 取得公司列表，用于名称和id的转换
                List<TCompany> companyList = this.find("from TCompany");
                HashMap<String, Integer> companyMap = new HashMap<>();
                if (companyList != null && !companyList.isEmpty()) {
                    for (int i = 0; i < companyList.size(); i++) {
                        TCompany company = companyList.get(i);
                        companyMap.put(company.getCompanyName(), company.getId());
                    }
                }
                // 取得经理列表，用于名称和id的转换
                List<TManagement> managementList = this.find("from TManagement");
                HashMap<String, Integer> managementMap = new HashMap<>();
                if (managementList != null && !managementList.isEmpty()) {
                    for (int i = 0; i < managementList.size(); i++) {
                        TManagement mamangment = managementList.get(i);
                        managementMap.put(mamangment.getName(), mamangment.getId());
                    }
                }
                // 取得产品列表，用于更新数据
                List<TProduct> productList = this.find("from TProduct");


                // 遍历数据，保存
                for (int i = 0; i < dataList.size(); i++) {
                    try {
                        VProduct v = dataList.get(i);
                        if (companyMap.get(v.getCompanyName()) == null) {
                            companyNotExistStr += "[" + (i + 1) + "][" + v.getProductName() + "][" + v.getCompanyName() + "],";
                            continue;
                        }
                        if (managementMap.get(v.getManagementName()) == null) {
                            managerNotExistStr += "[" + (i + 1) + "][" + v.getProductName() + "][" + v.getManagementName() + "],";
                            continue;
                        }
                        TProduct d = new TProduct();
                        if (productList != null && !productList.isEmpty()) {
                            for (int j = 0; j < productList.size(); j++) {
                                if (productList.get(j).getProductCode() != null && productList.get(j).getProductCode().equals(v.getProductCode())) {
                                    d = productList.get(j);
                                    break;
                                }
                            }
                        }
                        d.setDeltag("0");
                        d.setCompanyId(companyMap.get(v.getCompanyName()));
                        d.setFoundDate(v.getFoundDate());
                        d.setLargeClass(v.getLargeClass());
                        d.setLittleClass(v.getLittleClass());
                        d.setManagementId(managementMap.get(v.getManagementName()));
                        d.setMiddleClass(v.getMiddleClass());
                        d.setProductName(v.getProductName());
                        d.setProductCode(v.getProductCode());
                        d.setScale(v.getScale());
                        this.saveOrUpdate(d);
                    } catch (Exception e) {
                        e.printStackTrace();
                        continue;
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            resultMsg = "导入失败";
            return resultMsg;
        }
        if (!"".equals(companyNotExistStr)) {
            resultMsg += "<br/>以下基金公司不存在：" + companyNotExistStr.substring(0, companyNotExistStr.length() - 1);
        }
        if (!"".equals(managerNotExistStr)) {
            resultMsg += "<br/>以下基金经理不存在：" + managerNotExistStr.substring(0, managerNotExistStr.length() - 1);
        }
        return resultMsg;
    }

}
