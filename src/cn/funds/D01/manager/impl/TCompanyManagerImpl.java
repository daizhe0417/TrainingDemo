package cn.funds.D01.manager.impl;

import cn.funds.D01.manager.TCompanyManager;
import cn.funds.D01.model.TCompany;
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
import java.util.List;


/**
 * 公司管理
 */
@Transactional
@Service("TCompanymgr")
public class TCompanyManagerImpl extends GenericManagerImpl implements
        TCompanyManager {

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
            TCompany d = (TCompany) entity;
            //id=null表示新增
            if (d.getId() == null) {
                if (d.getDeltag() == null || d.getDeltag().equals("")) {
                    d.setDeltag("0");
                }
                if (dao.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
                    return ConstantClass.DZSUCCESS;
                }
            }
            TCompany tc = dao.findById(TCompany.class, d.getId());
            tc.setTrace(d.getTrace());
            tc.setComment(d.getComment());
            tc.setCompanyName(d.getCompanyName());
            tc.setFoundDate(d.getFoundDate());
            tc.setManagement(d.getManagement());
            tc.setProductCount(d.getProductCount());
            tc.setQualitativeScore(d.getQualitativeScore());
            tc.setQuantifyScore(d.getQuantifyScore());
            tc.setTjr(d.getTjr());
            tc.setKaiguan(d.getKaiguan());
            if (d.getDocumentLink() != null && !d.getDocumentLink().equals("")) {
                tc.setDocumentLink(d.getDocumentLink());
            }
            if (d.getTraceLink() != null && !d.getTraceLink().equals("")) {
                tc.setTraceLink(d.getTraceLink());
            }
            // 定性分析
            if (d.getQualitativeLink() != null && !d.getQualitativeLink().equals("")) {
                tc.setQualitativeLink(d.getQualitativeLink());
            }
            if (d.getQuantifyLink() != null && !d.getQuantifyLink().equals("")) {
                tc.setQuantifyLink(d.getQuantifyLink());
            }
            if (dao.saveOrUpdate(tc) == ConstantClass.DZSUCCESS) {
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
            TCompany d = (TCompany) entity;
            TCompany tc = dao.findById(TCompany.class, d.getId());
            tc.setDeltag("1");
            if (dao.saveOrUpdate(tc) == ConstantClass.DZSUCCESS) {
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
    public List<SelectOptionModel> getAllSOMCompanys() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(id,companyName) from TCompany where deltag!='1' order by companyName");
    }

    @Override
    public String importData(List<ColumnModel> fieldsList, File file) {
        String resultMsg = "导入成功";

        try {
            List<TCompany> dataList = ExcelOperator.readFromExcel(fieldsList, file, TCompany.class);
            if (dataList != null && !dataList.isEmpty()) {
                for (int i = 0; i < dataList.size(); i++) {
                    TCompany d = dataList.get(i);
                    if (d.getTrace().equals("跟踪")) {
                        d.setTrace("0");
                    } else if (d.getTrace().equals("尽调")) {
                        d.setTrace("1");
                    } else if (d.getTrace().equals("已投")) {
                        d.setTrace("2");
                    }
                    d.setId(null);
                    d.setDeltag("0");
                    this.saveOrUpdate(d);
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
    public String uploadFile(String id, String fileType, File file, String basePath, String suffix) {
        String path = GenericConstant.BASE_PATH + ConstantClass.FILE_SEPARATOR;
        switch (fileType) {
            case GenericConstant.GS_DXDF:
                path += GenericConstant.GS_DXDF;
                //d.setQualitativeLink(path + ConstantClass.FILE_SEPARATOR + fileName);
                break;
            case GenericConstant.GS_DLDF:
                path += GenericConstant.GS_DLDF;
                //d.setQuantifyLink(path + ConstantClass.FILE_SEPARATOR + fileName);
                break;
            case GenericConstant.GS_JDBG:
                path += GenericConstant.GS_JDBG;
                //d.setTraceLink(path + ConstantClass.FILE_SEPARATOR + fileName);
                break;
            case GenericConstant.GS_YSZL:
                path += GenericConstant.GS_YSZL;
                //d.setDocumentLink(path + ConstantClass.FILE_SEPARATOR + fileName);
                break;
            default:
                path += GenericConstant.GS_DEFAULT;
        }
        return super.uploadFile(id, fileType, file, basePath, path, suffix);
    }

}
