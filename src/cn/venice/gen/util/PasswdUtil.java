package cn.venice.gen.util;

import cn.venice.gen.constant.GenericConstant;
import cn.venice.util.md5.MD5Util;

/**
 * @author daizhe
 * @date 创建时间：2016年5月3日 上午6:59:39
 * @version 1.0
 * @parameter
 * @since
 * @return
 */
public class PasswdUtil {
	public static String parsePasswd(String passwd) {
		return MD5Util.convertMD5(MD5Util
				.string2MD5(GenericConstant.DEFAULT_PASSWD + passwd));
	}
	
	public static void main(String args[]){
		System.out.println(PasswdUtil.parsePasswd("123456"));
	}
}
