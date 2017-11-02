package cn.venice.gen.upload;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import cn.venice.gen.constant.GenericConstant;

public class UploadGSPicServlet extends HttpServlet {

	private String tempPath = GenericConstant.TEMP_PATH;// 临时目录

	public UploadGSPicServlet() {
		super();
	}

	public void destroy() {
		super.destroy();
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setCharacterEncoding("GBK");
		request.setCharacterEncoding("GBK");
		DiskFileItemFactory fac = new DiskFileItemFactory();
		fac.setSizeThreshold(1024);
		fac.setRepository(new File(tempPath));
		ServletFileUpload upload = new ServletFileUpload(fac);
		upload.setFileSizeMax(1024 * 1024 * 5);
		try {
			List<FileItem> fileList = upload.parseRequest(request);
			Iterator<FileItem> iter = fileList.iterator();
			while (iter.hasNext()) {
				FileItem fileItem = (FileItem) iter.next();
				if (!fileItem.isFormField()) {
					String name = fileItem.getName();
					String fileSize = new Long(fileItem.getSize()).toString();
					if (name == null || name.equals("") || fileSize.equals("0"))
						continue;
					name = name.substring(name.lastIndexOf("\\") + 1);
					String basePath = request.getSession().getServletContext()
							.getRealPath("");
					String path = new File(basePath).getParent() + "\\"
							+ GenericConstant.XLC_PATH;
					if (!new File(path).exists()) {
						new File(path).mkdirs();
					}
					File saveFile = new File(new File(path), name);
					fileItem.write(saveFile);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServletException(e);
		}
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	public void init() throws ServletException {
		if (!new File(tempPath).exists()) {
			new File(tempPath).mkdirs();
		}
	}
}
