package cn.venice.D00.test;

import cn.venice.D00.manager.D0001Manager;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class D0001ManagerTest extends AbstractJUnit4SpringContextTests {
	@Resource(name = "d0001mgr")
	protected D0001Manager mgr;

}
