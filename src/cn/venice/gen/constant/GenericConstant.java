package cn.venice.gen.constant;

public interface GenericConstant {

    public static final String CACHE_ALL_DEPT_LIST = "cache_all_dept_list";

    public static final String LOGIN_FAILURE_MSG_NAME = "lfmn";

    public static final String LOGIN_PASSWD_WRONG = "错误的用户名密码组合！";

    public static final String LOGIN_ROLENO_WRONG = "用户身份权限不符！";

    public static final String LOGIN_FIELDS_EMPTY = "字段不能为空！";

    public static final String LOGIN_USER_DELETED = "该用户已删除！";

    public static final String LOGIN_NOT_BOUND = "该用户尚未绑定！";

    public static final String LOGIN_USER_NOT_FOUND = "用户名不存在！";

    /**
     * 用于保存上传文件的路径
     */
    public static final String DEFAULT_PATH_SEPARATOR = "/";// 默认系统文件路径分隔符，window系统返回"\"，unix系统返回"/"

    public static final String FILE_SEPARATOR = System
            .getProperty("file.separator");
    public static final String BASE_PATH = "upload";// 上传文件的根路径
    public static final String TEMP_PATH = "D:\\upload" + FILE_SEPARATOR
            + "temp";
    // 修理厂
    public static final String XLC_PATH = BASE_PATH + FILE_SEPARATOR + "xlc";
    // 广告
    public static final String ADVER_PATH = BASE_PATH + FILE_SEPARATOR
            + "adver";
    // 活动
    public static final String HUODONG_PATH = BASE_PATH + FILE_SEPARATOR
            + "huodong";
    // 用户头像图片
    public static final String USER_HEAD_PIC = BASE_PATH + FILE_SEPARATOR
            + "userheadpic";
    // 拖车服务商
    public static final String TUOCHE_PATH = BASE_PATH + FILE_SEPARATOR
            + "tuoche";
    /**
     * 用于select控件显示的分隔符
     */
    public static final String SEL_SEPARATOR = " | ";

    public static final String DEFAULT_PASSWD = "123456";

    public static final String DAILY_TRANS_LIST = "daily_trans_list";

    /**
     * 打印页面的数据对象名
     */

    public static final String KK_MSG = "kk_msg";
    // 非现金业务单打印数据对象名
    public static final String NON_CAP_TRANS_PRINT_MSG = "non_cap_trans_print_msg";


    /**
     * 达人、问题、资讯、活动等的收藏、点赞、已读、举报等操作的标识
     */
    public static final int OPER_SUCCESS = 0;
    public static final int OPER_EXIST_AND_UNDO = 1;
    public static final int OPER_FAILURE = -1;


}
