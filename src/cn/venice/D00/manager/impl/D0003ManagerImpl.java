package cn.venice.D00.manager.impl;

/**
 * @用户管理模块
 */

import cn.venice.D00.manager.D0003Manager;
import cn.venice.D00.model.D0003;
import cn.venice.gen.constant.GenericConstant;
import cn.venice.gen.model.PasswdModel;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.md5.MD5Util;
import cn.venice.util.model.SelectOptionModel;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@Service("d0003mgr")
public class D0003ManagerImpl extends GenericManagerImpl implements
        D0003Manager {

    @Resource(name = "userInfoService")
    private UserInfoService userInfoService;

    /**
     * 得到所有的用户
     *
     * @param
     * @return List<D0003>
     */
    @Override
    public List<D0003> getAllSOMYhs() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(userNo,userName) from D0003 where deltag!='1'");
    }

    /**
     * 得到所有的用户信息
     *
     * @param
     * @return List<D0003>
     */
    @Override
    public List<D0003> getAllYhs() {
        return dao.find("from D0003 where deltag!='1'");
    }

    @Override
    public <T> int saveOrUpdate(T entity) {
        if (entity == null) {
            return ConstantClass.DZFAILURE;
        }

        try {
            D0003 d = (D0003) entity;

            // 新建用户
            if (d.getDeltag() == null || d.getDeltag().equals("")) {
                d.setDeltag("0");
                // 默认密码
                d.setPasswd(MD5Util.convertMD5(MD5Util
                        .string2MD5(GenericConstant.DEFAULT_PASSWD
                                + d.getUserNo())));
            } else {
                D0003 tmp = dao.findById(D0003.class, d.getUserNo());
                d.setDeltag(tmp.getDeltag());
                d.setPasswd(tmp.getPasswd());
            }
            // roleId=1,系统管理员;2,教师;3,学生
            if (d.getRoleId().equals(1)) {
                d.setUserType("1");
            } else {
                d.setUserType("2");
            }
            return dao.merge(d);
        } catch (Exception e) {
            e.printStackTrace();
            return ConstantClass.DZFAILURE;
        }
    }

    /**
     * 锁定用户
     *
     * @return
     */
    @Override
    public <T> int delete(T entity) {
        D0003 d = (D0003) entity;
        D0003 tmp = dao.findById(D0003.class, d.getUserNo());
        tmp.setDeltag("1");
        return dao.saveOrUpdate(tmp);
    }

    /**
     * 重置用户名userno的密码
     */
    @Override
    public int resetPasswd(String userno) {
        D0003 d = dao.findById(D0003.class, userno);
        d.setPasswd(MD5Util.convertMD5(MD5Util
                .string2MD5(GenericConstant.DEFAULT_PASSWD + d.getUserNo())));
        return dao.saveOrUpdate(d);
    }

    /**
     * 重置用户d的密码
     */
    @Override
    public int resetPasswd(D0003 d) {
        d.setPasswd(MD5Util.convertMD5(MD5Util
                .string2MD5(GenericConstant.DEFAULT_PASSWD + d.getUserNo())));
        return dao.saveOrUpdate(d);
    }

    /**
     * 修改密码
     */
    @Override
    public int passwdmodify(PasswdModel passwd, String userno) {
        String sql = "from D0003 where userNo='"
                + userno
                + "' and passwd='"
                + MD5Util.convertMD5(MD5Util.string2MD5(passwd.getPasswd()
                + userno)) + "'";
        List tmp = dao.find(sql);
        if (tmp != null && !tmp.isEmpty()) {
            D0003 d = (D0003) tmp.get(0);
            d.setPasswd(MD5Util.convertMD5(MD5Util.string2MD5(passwd
                    .getNewpasswd() + userno)));
            if (super.saveOrUpdate(d) == ConstantClass.DZSUCCESS) {
                return MODIFY_PASSWD_SUCCESS;
            } else {
                return MODIFY_PASSWD_FAILURE;
            }
        }
        return PASSWD_WRONG;
    }

    /**
     * 激活用户
     *
     * @return
     */
    @Override
    public int unLock(D0003 d) {
        D0003 tmp = dao.findById(D0003.class, d.getUserNo());
        tmp.setDeltag("0");
        return dao.saveOrUpdate(tmp);
    }


    @Override
    public List<SelectOptionModel> getSOMTeachers() {
        return dao
                .find("select new cn.venice.util.model.SelectOptionModel(userNo,userName) from D0003 where deltag='0' and roleId=2 order by userName");
    }

    @Override
    public List getStuByClassesId(Integer id) {
        return dao.find("from D0003 where bmId=? and deltag!='1' and roleId=3", id);
    }
}
