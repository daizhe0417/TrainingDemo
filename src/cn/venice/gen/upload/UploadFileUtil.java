package cn.venice.gen.upload;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * @author daizhe
 * @date 创建时间：2016年5月14日 下午5:58:25
 * @version 1.0
 * @parameter
 * @since
 * @return
 */
public class UploadFileUtil {
	public static int uploadFile(String basePath, String type,
			String fileFileName, File file) {
		try {
			String path = new File(basePath).getParent() + "\\" + type;
			if (!new File(path).exists()) {
				new File(path).mkdirs();
			}
			FileInputStream fis = new FileInputStream(file);
			File fs = new File(path, fileFileName);
			FileOutputStream fos = new FileOutputStream(fs);
			int len = 0;
			byte[] buffer = new byte[1024];

			while ((len = fis.read(buffer)) != -1) {
				fos.write(buffer, 0, len);
			}
			fos.flush();
			fos.close();
			fis.close();

			return 1;

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return -1;
	}
}
