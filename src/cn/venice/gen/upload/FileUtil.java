package cn.venice.gen.upload;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import cn.venice.gen.constant.GenericConstant;
import cn.venice.util.common.ConstantClass;

/**
 * @author daizhe
 * @date 创建时间：2016年4月8日 上午8:44:10
 * @version 1.0
 * @parameter
 * @since
 * @return
 */
public class FileUtil {

	public static String reSaveImage(String srcFileName, String basePath,
			String type) {
		// if (type.equals("xlc")) {
		// type = GenericConstant.XLC_PATH;
		// }else if(type.equals("adver")){
		//
		// }
		String path = new File(basePath).getParent()
				+ ConstantClass.FILE_SEPARATOR + type;
		if (!new File(path).exists()) {
			new File(path).mkdirs();
		}
		int l = srcFileName.lastIndexOf("/");
		String fileName = srcFileName.substring(l + 1);
		File toFile = new File(path + ConstantClass.FILE_SEPARATOR + fileName);
		l = srcFileName.lastIndexOf("../");
		String uploadFileName = l >= 0 ? srcFileName.substring(l + 3)
				: srcFileName;
		File fromFile = new File(basePath + ConstantClass.FILE_SEPARATOR
				+ uploadFileName);
		fromFile.renameTo(toFile);
		return "/" + type + ConstantClass.FILE_SEPARATOR + fileName;
	}

	public static String saveFile(File file, String basePath, String fileName,
			String type) throws FileNotFoundException,IOException {
		String path = new File(basePath).getParent()
				+ ConstantClass.FILE_SEPARATOR + type;
		try {
			if (!new File(path).exists()) {
				new File(path).mkdirs();
			}
			InputStream is = new FileInputStream(file);
			File toFile = new File(path + ConstantClass.FILE_SEPARATOR
					+ fileName);
			OutputStream os = new FileOutputStream(toFile);
			byte[] buffer = new byte[1024];
			int length = 0;
			while ((length = is.read(buffer)) > 0) {
				os.write(buffer, 0, length);
			}
			is.close();
			os.close();
			return "/" + type + ConstantClass.FILE_SEPARATOR + fileName;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (IOException e) {
			e.printStackTrace();
			throw e;
		}
	}
}
