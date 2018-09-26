package cn.funds.D01.manager.impl;

import cn.funds.D01.manager.DingxingManager;
import cn.funds.D01.manager.TCompanyManager;
import cn.funds.D01.model.DingxingTable;
import cn.funds.D01.model.TCompany;
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
import java.util.List;


/**
 * 【定性分析表】
 */
@Transactional
@Service("DingxingMgr")
public class DingxingManagerImpl extends GenericManagerImpl implements
        DingxingManager {


    @Override
    public List<DingxingTable> getDingxinByCompanyId(Integer companyId) {
        return dao.find("from DingxingTable where companyId=?", companyId);
    }

    @Override
    public int saveOrUpdate(List<DingxingTable> list) {
        try {
            DingxingTable d = list.get(0);
            List tmp = dao.find("from DingxingTable where companyId=?", d.getCompanyId());
            if (tmp != null && !tmp.isEmpty()) {
                for (int i = 0; i < tmp.size(); i++) {
                    DingxingTable t = (DingxingTable) tmp.get(i);
                    dao.delete(t);
                }
            }
            int totalScore = 0;
            for (int i = 0; i < list.size(); i++) {
                DingxingTable t = list.get(i);
                if ("totalScore".equals(t.getItemName())) {
                    totalScore = t.getItemScore();
                }
                if (dao.saveOrUpdate(t) != ConstantClass.DZSUCCESS) {
                    return ConstantClass.DZFAILURE;
                }
            }
            TCompany company = dao.findById(TCompany.class, d.getCompanyId());
            if (company != null) {
                company.setQualitativeScore(Double.valueOf(totalScore));
                dao.saveOrUpdate(company);
            }
            return ConstantClass.DZSUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
    }
}
