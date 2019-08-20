package cn.venice.gen.dzTask.model;

import java.util.Objects;

public class DzVTaskCurr {
    private Integer taskId;
    private String taskType;
    private String createTime;
    private String description;
    private String createUser;
    private Integer currentStage;
    private String deptId;
    private Integer maxStage;
    private String startTime;
    private String endTime;
    private String userList;
    private String stageName;
    private String stageDisplayName;
    private String createUserName;
    private String finishedUsers;
    private String finishType;
    private Integer stageId;

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    public Integer getCurrentStage() {
        return currentStage;
    }

    public void setCurrentStage(Integer currentStage) {
        this.currentStage = currentStage;
    }

    public String getDeptId() {
        return deptId;
    }

    public void setDeptId(String deptId) {
        this.deptId = deptId;
    }

    public Integer getMaxStage() {
        return maxStage;
    }

    public void setMaxStage(Integer maxStage) {
        this.maxStage = maxStage;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getUserList() {
        return userList;
    }

    public void setUserList(String userList) {
        this.userList = userList;
    }

    public String getStageName() {
        return stageName;
    }

    public void setStageName(String stageName) {
        this.stageName = stageName;
    }

    public String getStageDisplayName() {
        return stageDisplayName;
    }

    public void setStageDisplayName(String stageDisplayName) {
        this.stageDisplayName = stageDisplayName;
    }

    public String getCreateUserName() {
        return createUserName;
    }

    public void setCreateUserName(String createUserName) {
        this.createUserName = createUserName;
    }

    public String getFinishedUsers() {
        return finishedUsers;
    }

    public void setFinishedUsers(String finishedUsers) {
        this.finishedUsers = finishedUsers;
    }

    public String getFinishType() {
        return finishType;
    }

    public void setFinishType(String finishType) {
        this.finishType = finishType;
    }

    public Integer getStageId() {
        return stageId;
    }

    public void setStageId(Integer stageId) {
        this.stageId = stageId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DzVTaskCurr that = (DzVTaskCurr) o;
        return Objects.equals(taskId, that.taskId) &&
                Objects.equals(taskType, that.taskType) &&
                Objects.equals(createTime, that.createTime) &&
                Objects.equals(description, that.description) &&
                Objects.equals(createUser, that.createUser) &&
                Objects.equals(currentStage, that.currentStage) &&
                Objects.equals(deptId, that.deptId) &&
                Objects.equals(maxStage, that.maxStage) &&
                Objects.equals(startTime, that.startTime) &&
                Objects.equals(endTime, that.endTime) &&
                Objects.equals(userList, that.userList) &&
                Objects.equals(stageName, that.stageName) &&
                Objects.equals(stageDisplayName, that.stageDisplayName) &&
                Objects.equals(createUserName, that.createUserName) &&
                Objects.equals(finishedUsers, that.finishedUsers) &&
                Objects.equals(finishType, that.finishType) &&
                Objects.equals(stageId, that.stageId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taskId, taskType, createTime, description, createUser, currentStage, deptId, maxStage, startTime, endTime, userList, stageName, stageDisplayName, createUserName, finishedUsers, finishType, stageId);
    }
}
