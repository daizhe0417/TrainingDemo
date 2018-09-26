package cn.venice.gen.constant;

public interface GenericConstant {

    String CACHE_ALL_DEPT_LIST = "cache_all_dept_list";

    String LOGIN_FAILURE_MSG_NAME = "lfmn";

    String LOGIN_PASSWD_WRONG = "错误的用户名密码组合！";

    String LOGIN_ROLENO_WRONG = "用户身份权限不符！";

    String LOGIN_FIELDS_EMPTY = "字段不能为空！";

    String LOGIN_USER_DELETED = "该用户已删除！";

    String LOGIN_NOT_BOUND = "该用户尚未绑定！";

    String LOGIN_USER_NOT_FOUND = "用户名不存在！";

    /**
     * 用于保存上传文件的路径
     */
    //String FILE_SEPARATOR = System.getProperty("file.separator");

    //String BASE_PATH = ".." + FILE_SEPARATOR + "upload";// 上传文件的根路径
    String BASE_PATH = "upload";// 上传文件的根路径
    String GS_PIC = "gspic";
    // 公司-定性得分
    String GS_DXDF = "dxdf";
    // 公司-定量得分
    String GS_DLDF = "dldf";
    // 公司-尽调报告
    String GS_JDBG = "jdbg";
    // 公司-原始资料
    String GS_YSZL = "yszl";
    // 公司-默认路径
    String GS_DEFAULT = "gsdefault";
    // 经理-简历
    String JL_JL = "jl";
    // 经理-简历
    String JL_DEFAULT = "jldefault";
    // 用户名片
    String USER_MP = "mp";

    String UPLOAD_DEFAULT = "default";

    /**
     * 用于select控件显示的分隔符
     */
    String SEL_SEPARATOR = " | ";

    String DEFAULT_PASSWD = "123456";

    String DAILY_TRANS_LIST = "daily_trans_list";


}
