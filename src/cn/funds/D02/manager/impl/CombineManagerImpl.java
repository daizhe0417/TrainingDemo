package cn.funds.D02.manager.impl;

import cn.funds.D02.manager.CombineManager;
import cn.funds.D02.model.Combine;
import cn.funds.D02.model.FundAllocationModel;
import cn.funds.D02.model.LookBackModel;
import cn.venice.gen.python.PythonOperator;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.manager.impl.GenericManagerImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;


/**
 * [组合配置]管理
 */
@Transactional
@Service("CombineMgr")
public class CombineManagerImpl extends GenericManagerImpl implements
        CombineManager {

    @Resource(name = "userInfoService")
    private UserInfoService userInfoService;


    /**
     * 保存方法，删除标记为0
     */
    @Override
    public <T> int saveOrUpdate(T entity) {
        try {
            Combine d = (Combine) entity;
            if (d.getDeltag() == null || d.getDeltag().equals("")) {
                d.setDeltag("0");
            }
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
            Combine d = (Combine) entity;
            if (d.getDeltag() == null || d.getDeltag().equals("")) {
                d.setDeltag("1");
            }
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
    public List calcWeight(FundAllocationModel d) {
        if (d == null) {
            return null;
        }
        if (d.getProductCodeStr() != null && d.getProductCodeStr().length() > 0) {
            d.setProductCodeStr(d.getProductCodeStr().substring(0, d.getProductCodeStr().length() - 1));
        }
        List result = PythonOperator.callPythonScript("/Users/venice/Project/funds/src/pyFunds/CalcWeight.py", d.toStringArr());
        if (result != null && !result.isEmpty()) {
            for (int i = 0; i < result.size(); i++) {
                String resultStr = (String) result.get(i);
                if (resultStr.startsWith("resultWeight")) {
                    resultStr = resultStr.replace("resultWeight=", "").replace("[", "").replace("]", "");
                    String[] weightStrArr = resultStr.split(" ");
                    List<String> weightList = new ArrayList<>();
                    for (int j = 0; j < weightStrArr.length; j++) {
                        if (!weightStrArr[j].equals("")) {
                            String str = String.format("%.2f", Double.parseDouble(weightStrArr[j]) * 100);
                            weightList.add(str.replace("-", ""));
                        }
                    }
                    return weightList;
                }
            }
        }
        return null;
    }

    @Override
    public List lookBack(LookBackModel d) {
        List<LookBackModel> list = new ArrayList<>();

        return list;
    }
}
