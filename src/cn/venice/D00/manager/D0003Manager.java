package cn.venice.D00.manager;

import cn.venice.D00.model.D0003;
import cn.venice.gen.model.PasswdModel;
import cn.venice.util.manager.GenericManager;

import java.util.List;

public interface D0003Manager extends GenericManager {

    public static final int MODIFY_PASSWD_SUCCESS = 1;
    public static final int MODIFY_PASSWD_FAILURE = 0;
    public static final int PASSWD_WRONG = -1;

    public List<D0003> getAllYhs();

    public List<D0003> getAllSOMYhs();

    public boolean resetPasswd(D0003 d);

    public boolean resetPasswd(String userno);

    public int passwdmodify(PasswdModel passwd, String userId);

    public boolean regist(D0003 d);


}
