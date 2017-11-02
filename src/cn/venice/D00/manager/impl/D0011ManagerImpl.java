package cn.venice.D00.manager.impl;

import cn.venice.D00.manager.D0011Manager;
import cn.venice.util.manager.impl.GenericManagerImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 部门简介管理
 */
@Transactional
@Service("d0011mgr")
public class D0011ManagerImpl extends GenericManagerImpl implements
        D0011Manager {

}
