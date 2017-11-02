package cn.venice.D00.manager.impl;

/**
 * @用户管理模块
 */

import cn.venice.D00.manager.D0003Manager;
import cn.venice.D00.model.D0003;
import cn.venice.gen.constant.GenericConstant;
import cn.venice.gen.model.PasswdModel;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.manager.impl.GenericManagerImpl;
import cn.venice.util.md5.MD5Util;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
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
                .find("select new cn.venice.util.model.SelectOptionModel(userno,username) from D0003 where deltag!='1'");
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
    public <T> boolean saveOrUpdate(T entity) {
        if (entity == null) {
            return false;
        }

        try {
            D0003 d = (D0003) entity;

            // 新建用户
            if (d.getDeltag() == null || d.getDeltag().equals("")) {
                d.setDeltag("0");
                // 默认密码
                d.setPasswd(MD5Util.convertMD5(MD5Util
                        .string2MD5(GenericConstant.DEFAULT_PASSWD
                                + d.getUserno())));
            } else {
                D0003 tmp = dao.findById(D0003.class, d.getUserno());
                d.setDeltag(tmp.getDeltag());
                d.setPasswd(tmp.getPasswd());
            }
            return dao.merge(d);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public <T> boolean delete(T entity) {
        D0003 d = (D0003) entity;
        D0003 tmp = dao.findById(D0003.class, d.getUserno());
        tmp.setDeltag("1");
        return dao.saveOrUpdate(tmp);
    }

    /**
     * 重置用户名userno的密码
     */
    @Override
    public boolean resetPasswd(String userno) {
        D0003 d = dao.findById(D0003.class, userno);
        d.setPasswd(MD5Util.convertMD5(MD5Util
                .string2MD5(GenericConstant.DEFAULT_PASSWD + d.getUserno())));
        return super.saveOrUpdate(d);
    }

    /**
     * 重置用户d的密码
     */
    @Override
    public boolean resetPasswd(D0003 d) {
        d.setPasswd(MD5Util.convertMD5(MD5Util
                .string2MD5(GenericConstant.DEFAULT_PASSWD + d.getUserno())));
        return super.saveOrUpdate(d);
    }

    /**
     * 修改密码
     */
    @Override
    public int passwdmodify(PasswdModel passwd, String userno) {
        String sql = "from D0003 where userno='"
                + userno
                + "' and passwd='"
                + MD5Util.convertMD5(MD5Util.string2MD5(passwd.getPasswd()
                + userno)) + "'";
        List tmp = dao.find(sql);
        if (tmp != null && !tmp.isEmpty()) {
            D0003 d = (D0003) tmp.get(0);
            d.setPasswd(MD5Util.convertMD5(MD5Util.string2MD5(passwd
                    .getNewpasswd() + userno)));
            if (super.saveOrUpdate(d)) {
                return MODIFY_PASSWD_SUCCESS;
            } else {
                return MODIFY_PASSWD_FAILURE;
            }
        }
        return PASSWD_WRONG;
    }

    /**
     * 注册用户
     */
    @Override
    public boolean regist(D0003 d) {
        D0003 tmp = dao.findById(D0003.class, d.getUserno());
        d.setPasswd(tmp.getPasswd());
        d.setDeltag("0");
        return dao.saveOrUpdate(d);
    }
}
