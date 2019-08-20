package cn.venice.D00.manager;

import cn.venice.D00.model.D0003;
import cn.venice.gen.model.PasswdModel;
import cn.venice.util.manager.GenericManager;
import cn.venice.util.model.ColumnModel;
import cn.venice.util.model.SelectOptionModel;

import java.io.File;
import java.util.List;

public interface D0003Manager extends GenericManager {

    int MODIFY_PASSWD_SUCCESS = 1;
    int MODIFY_PASSWD_FAILURE = 0;
    int PASSWD_WRONG = -1;

    List<D0003> getAllYhs();

    List<D0003> getAllSOMYhs();

    int resetPasswd(D0003 d);

    int resetPasswd(String userno);

    int passwdmodify(PasswdModel passwd, String userId);

    int unLock(D0003 d);

    List<SelectOptionModel> getSOMTeachers();

    List getStuByClassesId(Integer id);
}
