package cn.funds.D01.manager.impl;

import cn.funds.D01.manager.TManagerManager;
import cn.funds.D01.model.TCompany;
import cn.funds.D01.model.TManagement;
import cn.funds.D01.model.VManagement;
import cn.venice.gen.constant.GenericConstant;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.excel.ExcelOperator;
import cn.venice.util.fileoperate.FileOperator;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.model.SelectOptionModel;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;


/**
 * [基金经理]管理
 */
@Transactional
@Service("TManagerMgr")
public class TManagerManagerImpl extends GenericManagerImpl implements
        TManagerManager {

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
            TManagement d = (TManagement) entity;
            //id=null表示新增
            if (d.getId() == null) {
                if (d.getDeltag() == null || d.getDeltag().equals("")) {
                    d.setDeltag("0");
                }
                if (dao.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
                    return ConstantClass.DZSUCCESS;
                }
            }
            TManagement tm = dao.findById(TManagement.class, d.getId());
            tm.setWorkDate(d.getWorkDate());
            tm.setSex(d.getSex());
            tm.setProductCount(d.getProductCount());
            tm.setName(d.getName());
            tm.setMaxRetracement(d.getMaxRetracement());
            tm.setManagementScale(d.getManagementScale());
            tm.setEducation(d.getEducation());
            tm.setAverageRetracement(d.getAverageRetracement());
            tm.setAverageIncome(d.getAverageIncome());
            tm.setCompanyId(d.getCompanyId());
            tm.setComment(d.getComment());
            if (d.getResumeLink() != null && !d.getResumeLink().equals("")) {
                tm.setResumeLink(d.getResumeLink());
            }
            if (dao.saveOrUpdate(tm) == ConstantClass.DZSUCCESS) {
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
            TManagement d = (TManagement) entity;
            TManagement tm = dao.findById(TManagement.class, d.getId());
            tm.setDeltag("1");
            if (dao.saveOrUpdate(tm) == ConstantClass.DZSUCCESS) {
                return ConstantClass.DZSUCCESS;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
        return ConstantClass.DZFAILURE;
    }

    /**
     * 取得SOM形式的公司列表
     *
     * @return
     */
    @Override
    public List<SelectOptionModel> getAllSOMManagers() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(id,name) from TManagement where deltag!='1' order by name");
    }

    @Override
    public String importData(List<ColumnModel> fieldsList, File file) {
        String resultMsg = "导入成功";
        String companyNotExistStr = "";
        try {
            List<VManagement> dataList = ExcelOperator.readFromExcel(fieldsList, file, VManagement.class);
            if (dataList != null && !dataList.isEmpty()) {
                List<TCompany> companyList = this.find("from TCompany");
                HashMap<String, Integer> companyMap = new HashMap<>();
                if (companyList != null && !companyList.isEmpty()) {
                    for (int i = 0; i < companyList.size(); i++) {
                        TCompany company = companyList.get(i);
                        companyMap.put(company.getCompanyName(), company.getId());
                    }
                }
                for (int i = 0; i < dataList.size(); i++) {
                    VManagement v = dataList.get(i);
                    TManagement d = new TManagement();
                    d.setId(null);
                    d.setDeltag("0");
                    d.setResumeLink(v.getResumeLink());
                    d.setComment(v.getComment());
                    d.setAverageIncome(v.getAverageIncome());
                    d.setAverageRetracement(v.getAverageRetracement());
                    d.setEducation(v.getEducation());
                    d.setManagementScale(v.getManagementScale());
                    d.setMaxRetracement(v.getMaxRetracement());
                    d.setName(v.getName());
                    d.setProductCount(v.getProductCount());
                    d.setSex(v.getSex());
                    d.setWorkDate(v.getWorkDate());
                    d.setCompanyId(companyMap.get(v.getCompanyName()));
                    if (d.getCompanyId() == null) {
                        companyNotExistStr += "[" + (i + 1) + "][" + v.getName() + "][" + v.getCompanyName() + "],";
                        continue;
                    }
                    this.saveOrUpdate(d);
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
        return resultMsg;
    }

    @Override
    public String uploadFile(String id, String fileType, File file, String basePath, String suffix) {
        String path = GenericConstant.BASE_PATH + ConstantClass.FILE_SEPARATOR;
        switch (fileType) {
            case GenericConstant.JL_JL:
                path += GenericConstant.JL_JL;
                break;
            default:
                path += GenericConstant.JL_DEFAULT;
                break;
        }
        return super.uploadFile(id, fileType, file, basePath, path, suffix);
    }

}
