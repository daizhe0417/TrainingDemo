package cn.venice.gen.dzTask.service;

import cn.venice.gen.dzTask.model.*;

import java.util.List;
import java.util.Map;

/**
 * @author daizhe venice
 */
public interface DzTaskService {

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
    DzTask createTaskInstance(String taskType, String createUser);

    /**
     * 创建任务实例
     * @param taskType
     * @param description
     * @param createUser
     * @param deptId
     * @return 创建成功时返回创建的任务对象，失败时返回null
     */
    DzTask createTaskInstance(String taskType, String description, String createUser, String deptId);

    /**
     * 开始任务执行：创建任务时stage=0，实际的阶段从1开始
     *
     * @param taskId
     */
    int startTask(Integer taskId);

    /**
     * 完成指定任务当前阶段
     *
     * @param taskId
     * @param userId
     * @return
     */
    int finishCurrentStage(Integer taskId, String userId);

    /**
     * 完成指定任务当前阶段，并跳转到指定阶段
     *
     * @param taskId
     * @param stageName
     * @param userId
     */
    int goStageByStageName(Integer taskId, String stageName, String userId);

    /**
     * 判断任务是否已经完成
     *
     * @param taskId
     * @return
     */
    boolean isFinished(Integer taskId);

    /**
     * 通过taskId取得任务信息
     *
     * @param taskId
     * @return 未找到时返回null
     */
    DzTask getTaskInfoByTaskId(Integer taskId);

    DzTaskStage getCurrentStageInfo(Integer taskId);

    DzTaskStage getTaskStageInfoByTaskIdStage(Integer taskId, int stage);

    /**
     * 取得任务当前阶段
     *
     * @param taskId
     * @return 未找到任务时返回-1
     */
    int getCurrentStageByTaskId(Integer taskId);

    /**
     * 取得当前任务阶段名称
     *
     * @param taskId
     * @return
     */
    String getCurrentStageNameByTaskId(Integer taskId);

    /**
     * 取得任务最大阶段数
     *
     * @param taskId
     * @return 未找到任务时返回-1
     */
    int getMaxStageByTaskId(Integer taskId);

    /**
     * 设置任务下一阶段的用户列表
     *
     * @param taskId
     * @param userList
     * @return
     */
    int setNextStageUserList(Integer taskId, String userList);

    /**
     * 设置任务下一阶段的用户列表
     *
     * @param taskId
     * @param userList
     * @return
     */
    int setNextStageUserList(Integer taskId, List<String> userList);

    /**
     * 设置用户指定阶段的用户列表
     *
     * @param taskId
     * @param stage
     * @param userList
     * @return
     */
    int setStageUserList(Integer taskId, int stage, String userList);

    /**
     * 设置用户指定阶段的用户列表
     *
     * @param taskId
     * @param stage
     * @param userList
     * @return
     */
    int setStageUserList(Integer taskId, int stage, List<String> userList);



    /**
     * 设置变量
     *
     * @param dzTaskVariable
     */
    void setVariable(DzTaskVariable dzTaskVariable);

    /**
     * 设置变量
     *
     * @param taskId
     * @param variables
     * @return
     */
    int setVariable(Integer taskId, Map<String, String> variables);

    /**
     * 取得变量值
     *
     * @param taskId
     * @param variableName
     * @return
     */
    String getVariable(Integer taskId, String variableName);

    /**
     * 取得任务的所有变量值
     *
     * @param taskId
     * @return
     */
    Map<String, Object> getVariables(Integer taskId);

    /**
     * 取得指定任务的当前阶段用户列表
     *
     * @param taskId
     * @return
     */
    String getCurrentUserListByTaskId(Integer taskId);

    /**
     * 取得用户待完成的任务列表
     *
     * @param accountId
     * @return
     */
    List<DzVTaskCurr> getTaskListByAccountId(String accountId);

    /**
     * 获取任务各阶段完成状态
     *
     * @param taskId
     * @return
     */
    List<DzVTaskStageUser> getStageStatusByTaskId(String taskId);

    /**
     * 取得指定任务类型的任务实例列表
     * @param taskType
     * @return
     */
    List<DzTask> getAllInstanceByTaskType(String taskType);
}
