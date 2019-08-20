package cn.venice.gen.dzTask.service.impl;

import cn.venice.gen.constant.GenericConstant;
import cn.venice.gen.dzTask.model.*;
import cn.venice.gen.dzTask.service.DzTaskService;
import cn.venice.gen.dzTask.util.TaskUtil;
import cn.venice.gen.exception.UserInfoException;
import cn.venice.gen.service.UserInfoService;
import cn.venice.util.common.ConstantClass;
import cn.venice.util.manager.impl.GenericManagerImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("dzTaskService")
public class DzTaskServiceImpl extends GenericManagerImpl implements DzTaskService {

    @Resource(name = "userInfoService")
    private UserInfoService userInfoService;

    // ==========================================================
    // ========================= 任务管理 =========================
    // ==========================================================

    /**
     * 创建任务实例
     *
     * @param taskType
     * @param createUser
     * @return 创建成功时返回创建的任务对象，失败时返回null
     */
    @Override
    public DzTask createTaskInstance(String taskType, String createUser) {
        return this.createTaskInstance(taskType, "", createUser, "");
    }

    /**
     * 创建任务实例
     *
     * @param taskType
     * @param description
     * @param createUser
     * @param deptId
     * @return 创建成功时返回创建的任务对象，失败时返回null
     */
    @Override
    public DzTask createTaskInstance(String taskType, String description, String createUser, String deptId) {
        if (taskType == null || TaskUtil.getTaskByTypeName(taskType) == null) {
            return null;
        }
        DzTask task = new DzTask();
        task.setTaskType(taskType);
        task.setDescription(description == null ? "" : description);
        task.setCreateUser(createUser);
        task.setDeptId(deptId);
        task.setCreateTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
        // currentSate=0表示未开始
        task.setCurrentStage(0);
        task.setMaxStage(TaskUtil.getTaskByTypeName(taskType).getTaskStages().size());
        dao.saveOrUpdate(task);
        if (task.getTaskId() != null) {
            List<TaskStageModel> taskStageList = TaskUtil.getTaskByTypeName(taskType).getTaskStages();
            for (int i = 0; i < taskStageList.size(); i++) {
                TaskStageModel taskStageModel = taskStageList.get(i);
                DzTaskStage dzTaskStage = new DzTaskStage();
                // stage从1开始
                dzTaskStage.setStage(i + 1);
                dzTaskStage.setTaskId(task.getTaskId());
                dzTaskStage.setStageName(taskStageModel.getStageName());
                dzTaskStage.setStageDisplayName(taskStageModel.getStageDisplayName());
                if (taskStageModel.getFinishType() != null) {
                    dzTaskStage.setFinishType(taskStageModel.getFinishType());
                } else {
                    dzTaskStage.setFinishType("0");// 默认值
                }
                dao.saveOrUpdate(dzTaskStage);
            }
            return task;
        } else {
            return null;
        }
    }

    /**
     * 开始任务执行：创建任务时stage=0，实际的阶段从1开始
     *
     * @param taskId
     */
    @Override
    public int startTask(Integer taskId) {
        DzTask task = this.getTaskInfoByTaskId(taskId);
        if (task == null) {
            return GenericConstant.ERR_CODE_TASK_NOT_FOUND;
        }
        if (task.getCurrentStage() > 0) {
            return GenericConstant.ERR_CODE_TASK_HAS_STARTED;
        }
        try {
            String startTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
            task.setCurrentStage(1);
            DzTaskStage dzTaskStage = this.getTaskStageInfoByTaskIdStage(taskId, 1);
            dzTaskStage.setStartTime(startTime);
            if (dao.saveOrUpdate(task) == ConstantClass.DZSUCCESS && dao.saveOrUpdate(dzTaskStage) == ConstantClass.DZSUCCESS) {
                return ConstantClass.DZSUCCESS;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ConstantClass.DZFAILURE;
    }

    /**
     * 完成指定任务当前阶段
     *
     * @param taskId
     * @param userId
     * @return
     */
    @Override
    public int finishCurrentStage(Integer taskId, String userId) {
        if (taskId == null || userId == null || userId.equals("")) {
            return TaskUtil.PARAM_NULL;
        }
        DzTaskStage currentStageInfo = this.getCurrentStageInfo(taskId);
        int currentStage = getCurrentStageByTaskId(taskId);
        //dzTaskDao.finishStage(taskId, currentStage, new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()), currentStage + 1, userId);
        // 已完成用户列表中已经包含了userId
        if (currentStageInfo.getFinishedUsers() != null && currentStageInfo.getFinishedUsers().contains(userId)) {
            return TaskUtil.USER_HAS_FINISHED;
        }
        try {
            // 当前用户完成当前阶段
            // 添加当前userId的完成信息
            String finishedUsersStr = currentStageInfo.getFinishedUsers() == null ? "" : currentStageInfo.getFinishedUsers();
            finishedUsersStr += userId + ",";


            finishUserStage(currentStageInfo.getId(), userId, new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()), finishedUsersStr);
            currentStageInfo.setFinishedUsers(finishedUsersStr);
            // 判断当前阶段类型，为0，表示只有有一个用户完成即可下一阶段，为1，表示需要所有用户完成本阶段才可下一阶段
            if ("1".equals(currentStageInfo.getFinishType())) {
                // 如果所有用户都已完成，结束当前阶段
                String userListStr = currentStageInfo.getUserList();
                if (userListStr != null) {
                    String userList[] = userListStr.split(",");
                    if (userList != null && userList.length > 0) {
                        int i = 0;
                        for (; i < userList.length; i++) {
                            if (!currentStageInfo.getFinishedUsers().contains(userList[i])) {
                                break;
                            }
                        }
                        if (i >= userList.length) {
                            finishStage(taskId, currentStage, new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()), currentStage + 1);
                        }
                    }
                }
            } else {
                finishStage(taskId, currentStage, new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()), currentStage + 1);
            }
            return TaskUtil.SUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            return TaskUtil.FAILURE;
        }
    }

    @Transactional
    public void finishStage(Integer taskId, int currentStage, String endTime, int nextStage) {
        try {
            DzTaskStage dzTaskStage = getTaskStageInfoByTaskIdStage(taskId, currentStage);
            dzTaskStage.setEndTime(endTime);
            DzTaskStage next_dzTaskStage = getTaskStageInfoByTaskIdStage(taskId, nextStage);
            next_dzTaskStage.setStartTime(endTime);
            DzTask dzTask = getTaskInfoByTaskId(taskId);
            dzTask.setCurrentStage(nextStage);
            dao.saveOrUpdate(dzTaskStage);
            dao.saveOrUpdate(next_dzTaskStage);
            dao.saveOrUpdate(dzTask);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * 完成用户的指定阶段
     *
     * @param stageId
     * @param userId
     * @param endTime
     * @param finishedUsersStr
     */
    @Transactional
    public void finishUserStage(Integer stageId, String userId, String endTime, String finishedUsersStr) {
        try {
            DzTaskStage dzTaskStage = dao.findById(DzTaskStage.class, stageId);
            dzTaskStage.setFinishedUsers(finishedUsersStr);
            DzTaskStageUser dzTaskStageUser = new DzTaskStageUser();
            dzTaskStageUser.setStageId(stageId);
            dzTaskStageUser.setUserId(userId);
            dzTaskStageUser.setEndTime(endTime);
            dao.saveOrUpdate(dzTaskStage);
            dao.saveOrUpdate(dzTaskStageUser);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    /**
     * 完成指定任务当前阶段，并跳转到指定阶段
     *
     * @param taskId
     * @param stageName
     * @param userId
     */
    @Override
    public int goStageByStageName(Integer taskId, String stageName, String userId) {
        if (taskId == null || userId == null || userId == null || userId.isEmpty()) {
            return TaskUtil.PARAM_NULL;
        }
        DzTaskStage currentStageInfo = getCurrentStageInfo(taskId);
        int currentStage = getCurrentStageByTaskId(taskId);
        //dzTaskDao.finishStage(taskId, currentStage, new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()), currentStage + 1, userId);
        // 已完成用户列表中已经包含了userId
        if (currentStageInfo.getFinishedUsers() != null && currentStageInfo.getFinishedUsers().contains(userId)) {
            return TaskUtil.USER_HAS_FINISHED;
        }
        try {
            // 当前用户完成当前阶段
            // 添加当前userId的完成信息
            String finishedUsersStr = currentStageInfo.getFinishedUsers() == null ? "" : currentStageInfo.getFinishedUsers();
            finishedUsersStr += userId + ",";
            finishUserStage(currentStageInfo.getId(), userId, new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()), finishedUsersStr);

            String endTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
            DzTaskStage dzTaskStage = getTaskStageInfoByTaskIdStage(taskId, currentStage);
            dzTaskStage.setEndTime(endTime);
            dao.saveOrUpdate(dzTaskStage);

            List<DzTaskStage> tmp = dao.find("from DzTaskStage where taskId=? and stageName=?", taskId, stageName);
            if (tmp != null && !tmp.isEmpty()) {
                DzTaskStage nextStage = tmp.get(0);
                nextStage.setStartTime(endTime);
                nextStage.setFinishedUsers(null);
                dao.saveOrUpdate(nextStage);
                DzTask dzTask = getTaskInfoByTaskId(taskId);
                dzTask.setCurrentStage(nextStage.getStage());
                dao.saveOrUpdate(dzTask);
            }

            return TaskUtil.SUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            return TaskUtil.FAILURE;
        }
    }

    /**
     * 判断任务是否已经完成
     *
     * @param taskId
     * @return
     */
    @Override
    public boolean isFinished(Integer taskId) {
        DzTask dzTask = getTaskInfoByTaskId(taskId);
        if (dzTask != null) {
            return dzTask.getCurrentStage() >= dzTask.getMaxStage();
        }
        return false;
    }

    /**
     * 通过taskId取得任务信息
     *
     * @param taskId
     * @return 未找到时返回null
     */
    @Override
    public DzTask getTaskInfoByTaskId(Integer taskId) {
        return dao.findById(DzTask.class, taskId);
    }

    /**
     * 取得指定任务的当前阶段信息
     *
     * @param taskId
     * @return
     */
    @Override
    public DzTaskStage getCurrentStageInfo(Integer taskId) {
        DzVTaskCurr dzVTaskCurr = dao.findById(DzVTaskCurr.class, taskId);
        if (dzVTaskCurr != null) {
            DzTaskStage dzTaskStage = new DzTaskStage();
            dzTaskStage.setId(dzVTaskCurr.getStageId());
            dzTaskStage.setStartTime(dzVTaskCurr.getStartTime());
            dzTaskStage.setUserList(dzVTaskCurr.getUserList());
            dzTaskStage.setEndTime(dzVTaskCurr.getEndTime());
            dzTaskStage.setFinishedUsers(dzVTaskCurr.getFinishedUsers());
            dzTaskStage.setFinishType(dzVTaskCurr.getFinishType());
            dzTaskStage.setStage(dzVTaskCurr.getCurrentStage());
            dzTaskStage.setStageDisplayName(dzVTaskCurr.getStageDisplayName());
            dzTaskStage.setStageName(dzVTaskCurr.getStageName());
            dzTaskStage.setTaskId(dzVTaskCurr.getTaskId());
            return dzTaskStage;
        } else {
            return null;
        }
    }

    /**
     * 取得任务阶段信息
     *
     * @param taskId
     * @param stage
     * @return
     */
    @Override
    public DzTaskStage getTaskStageInfoByTaskIdStage(Integer taskId, int stage) {
        List<DzTaskStage> tmp = dao.find("from DzTaskStage where taskId=? and stage=?", taskId, stage);
        if (tmp != null && !tmp.isEmpty()) {
            return tmp.get(0);
        }
        return null;
    }

    /**
     * 取得任务当前阶段
     *
     * @param taskId
     * @return 未找到任务时返回-1
     */
    @Override
    public int getCurrentStageByTaskId(Integer taskId) {
        DzTask dzTask = dao.findById(DzTask.class, taskId);
        if (dzTask != null && dzTask.getCurrentStage() != null) {
            return dzTask.getCurrentStage();
        }
        return GenericConstant.ERR_CODE_TASK_NOT_FOUND;
    }

    /**
     * 取得当前任务阶段名称
     *
     * @param taskId
     * @return
     */
    @Override
    public String getCurrentStageNameByTaskId(Integer taskId) {
        DzVTaskCurr dzVTaskCurr = dao.findById(DzVTaskCurr.class, taskId);
        if (dzVTaskCurr != null && dzVTaskCurr.getStageDisplayName() != null) {
            return dzVTaskCurr.getStageDisplayName();
        }
        return null;
    }

    /**
     * 取得任务最大阶段数
     *
     * @param taskId
     * @return 未找到任务时返回-1
     */
    @Override
    public int getMaxStageByTaskId(Integer taskId) {
        DzTask dzTask = dao.findById(DzTask.class, taskId);
        if (dzTask != null && dzTask.getMaxStage() != null) {
            return dzTask.getMaxStage();
        }
        return GenericConstant.ERR_CODE_TASK_NOT_FOUND;
    }

    /**
     * 设置任务下一阶段的用户列表
     *
     * @param taskId
     * @param userList
     * @return
     */
    @Override
    public int setNextStageUserList(Integer taskId, String userList) {
        DzTask task = getTaskInfoByTaskId(taskId);
        if (task == null) {
            return GenericConstant.ERR_CODE_TASK_NOT_FOUND;
        }
        if (task.getCurrentStage() == task.getMaxStage()) {
            return GenericConstant.ERR_CODE_LAST_STAGE_FOUND;
        }
        try {
            return setStageUserList(taskId, task.getCurrentStage() + 1, userList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ConstantClass.DZFAILURE;
    }

    /**
     * 设置任务下一阶段的用户列表
     *
     * @param taskId
     * @param userList
     * @return
     */
    @Override
    public int setNextStageUserList(Integer taskId, List<String> userList) {
        if (userList == null) {
            return GenericConstant.ERR_CODE_NULL_POINT;
        }
        StringBuffer userListStr = new StringBuffer();
        for (int i = 0; i < userList.size(); i++) {
            userListStr.append(userList.get(i)).append(",");
        }
        return setNextStageUserList(taskId, userListStr.toString());
    }

    /**
     * 设置用户指定阶段的用户列表
     *
     * @param taskId
     * @param stage
     * @param userList
     * @return
     */
    @Override
    public int setStageUserList(Integer taskId, int stage, String userList) {
        Integer maxStage = getMaxStageByTaskId(taskId);
        if (maxStage < 0) {
            return maxStage;
        }
        if (stage <= maxStage) {
            try {
                DzTaskStage dzTaskStage = getTaskStageInfoByTaskIdStage(taskId, stage);
                if (dzTaskStage != null) {
                    dzTaskStage.setUserList(userList);
                    return dao.saveOrUpdate(dzTaskStage);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return ConstantClass.DZFAILURE;
        }
        return GenericConstant.ERR_CODE_STAGE_OUT_OF_BOUND;
    }

    /**
     * 设置用户指定阶段的用户列表
     *
     * @param taskId
     * @param stage
     * @param userList
     * @return
     */
    @Override
    public int setStageUserList(Integer taskId, int stage, List<String> userList) {
        if (userList == null) {
            return GenericConstant.ERR_CODE_NULL_POINT;
        }
        StringBuffer userListStr = new StringBuffer();
        for (int i = 0; i < userList.size(); i++) {
            userListStr.append(userList.get(i)).append(",");
        }
        return setStageUserList(taskId, stage, userListStr.toString());
    }

    //=============================================================================
    //================================== 任务处理 ===================================
    //=============================================================================


    //=============================================================================
    //================================== 变量处理 ===================================
    //=============================================================================

    /**
     * 设置变量
     *
     * @param dzTaskVariable
     */
    @Override
    public void setVariable(DzTaskVariable dzTaskVariable) {
        try {
            List<DzTaskVariable> tmp = dao.find("from DzTaskVariable where taskId=? and variableName=?", dzTaskVariable.getTaskId(), dzTaskVariable.getVariableName());
            if (tmp != null && !tmp.isEmpty()) {
                DzTaskVariable d = tmp.get(0);
                d.setVarValue(d.getVarValue());
                dao.saveOrUpdate(d);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    /**
     * 设置变量
     *
     * @param taskId
     * @param variables
     * @return
     */
    @Override
    public int setVariable(Integer taskId, Map<String, String> variables) {
        DzTask task = getTaskInfoByTaskId(taskId);
        if (task == null) {
            return GenericConstant.ERR_CODE_TASK_NOT_FOUND;
        }
        if (variables == null) {
            return GenericConstant.ERR_CODE_NULL_POINT;
        }
        for (Map.Entry<String, String> entry : variables.entrySet()) {
            DzTaskVariable dzTaskVariable = new DzTaskVariable();
            dzTaskVariable.setTaskId(taskId);
            dzTaskVariable.setVariableName(entry.getKey());
            dzTaskVariable.setVarValue(String.valueOf(entry.getValue()));
            setVariable(dzTaskVariable);
        }
        return ConstantClass.DZSUCCESS;
    }

    /**
     * 取得变量值
     *
     * @param taskId
     * @param variableName
     * @return
     */
    @Override
    public String getVariable(Integer taskId, String variableName) {
        try {
            List<DzTaskVariable> tmp = dao.find("from DzTaskVariable where taskId=? and variableName=?", taskId, variableName);
            if (tmp != null && !tmp.isEmpty()) {
                return tmp.get(0).getVarValue();
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return null;
    }

    /**
     * 取得任务的所有变量值
     *
     * @param taskId
     * @return
     */
    @Override
    public Map<String, Object> getVariables(Integer taskId) {
        List<DzTaskVariable> variableList = dao.find("from DzTaskVariable where taskId=?", taskId);
        if (variableList == null || variableList.isEmpty()) {
            return null;
        }
        Map<String, Object> variables = new HashMap<>();
        for (int i = 0; i < variableList.size(); i++) {
            DzTaskVariable dzTaskVariable = variableList.get(i);
            variables.put(dzTaskVariable.getVariableName(), dzTaskVariable.getVarValue());
        }
        return variables;
    }

    /**
     * 取得指定任务的当前阶段用户列表
     *
     * @param taskId
     * @return
     */

    public String getCurrentUserListByTaskId(Integer taskId) {
        return this.getCurrentStageInfo(taskId).getUserList();
    }

    /**
     * 取得用户待完成的任务列表
     *
     * @param accountId
     * @return
     */
    @Override
    public List<DzVTaskCurr> getTaskListByAccountId(String accountId) {
        accountId = (accountId == null ? "" : accountId);
        return dao.find("from DzVTaskCurr where userList like '%" + accountId + "%' and (finishedUsers is null or finishedUsers not like '%" + accountId + "%')");
    }

    /**
     * 获取任务各阶段完成状态
     *
     * @param taskId
     * @return
     */
    @Override
    public List<DzVTaskStageUser> getStageStatusByTaskId(String taskId) {
        List<DzVTaskStageUser> dzTaskStageUserList = dao.find("from DzVTaskStageUser where taskId=?",taskId);
        DzTaskStage currentStageInfo = getCurrentStageInfo(Integer.parseInt(taskId));
        if ("1".equals(currentStageInfo.getFinishType())) {
            String[] userArr = currentStageInfo.getUserList().split(",");
            if (currentStageInfo.getFinishedUsers() == null) {
                for (int i = 0; i < userArr.length; i++) {
                    DzVTaskStageUser dzTaskStageUser = new DzVTaskStageUser();
                    dzTaskStageUser.setStage(currentStageInfo.getStage());
                    try {
                        dzTaskStageUser.setUserName(userInfoService.getUserInfo().getUserName());
                    } catch (UserInfoException e) {
                        e.printStackTrace();
                    }
                    dzTaskStageUser.setEndTime("尚未完成");
                    dzTaskStageUserList.add(dzTaskStageUser);
                }
            } else {
                String[] finishedUserArr = currentStageInfo.getFinishedUsers().split(",");
                for (int i = 0; i < userArr.length; i++) {
                    int j = 0;
                    for (; j < finishedUserArr.length; j++) {
                        if (userArr[i].equals(finishedUserArr[j])) {
                            break;
                        }
                    }
                    if (j >= finishedUserArr.length) {
                        DzVTaskStageUser dzTaskStageUser = new DzVTaskStageUser();
                        dzTaskStageUser.setStage(currentStageInfo.getStage());
                        try {
                            dzTaskStageUser.setUserName(userInfoService.getUserInfo().getUserName());
                        } catch (UserInfoException e) {
                            e.printStackTrace();
                        }
                        dzTaskStageUser.setEndTime("尚未完成");
                        dzTaskStageUserList.add(dzTaskStageUser);
                    }
                }
            }
        }
        return dzTaskStageUserList;
    }

    /**
     * 取得指定任务类型的任务实例列表
     *
     * @param taskType
     * @return
     */
    @Override
    public List<DzTask> getAllInstanceByTaskType(String taskType) {
        return dao.find("from DzTask where taskType=?",taskType);
    }
}
