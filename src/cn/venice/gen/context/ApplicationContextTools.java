package cn.venice.gen.context;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * 获取spring的applicationContext，在配置文件中增加这个类的bean即可由spring自动注入applicationContext对象
 * 
 * @author daizhe
 * 
 */
public class ApplicationContextTools implements ApplicationContextAware {
	private static ApplicationContext applicationContext;

	@Override
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		ApplicationContextTools.applicationContext = applicationContext;
	}

	public static ApplicationContext getApplicationContext() {
		return applicationContext;
	}

	@SuppressWarnings("unchecked")
	public static <T> T getBean(String name) {
		checkApplictionContext();
		return (T) applicationContext.getBean(name);
	}

	@SuppressWarnings("unchecked")
	public static <T> T getBean(Class<T> clazz) {
		checkApplictionContext();
		return (T) applicationContext.getBeansOfType(clazz);
	}

	public static void cleanApplicationContext() {
		applicationContext = null;
	}

	private static void checkApplictionContext() {
		if (applicationContext == null) {
			throw new IllegalStateException("applictionContext err");
		}
	}

}
