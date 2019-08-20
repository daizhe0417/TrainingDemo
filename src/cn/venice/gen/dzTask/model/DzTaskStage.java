package cn.venice.gen.dzTask.model;

import java.util.Objects;

public class DzTaskStage {
    private Integer id;
    private Integer taskId;
    private Integer stage;
    private String startTime;
    private String endTime;
    private String userList;
    private String finishedUsers;
    private String stageName;
    private String stageDisplayName;
    private String finishType;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public Integer getStage() {
        return stage;
    }

    public void setStage(Integer stage) {
        this.stage = stage;
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

    public String getFinishedUsers() {
        return finishedUsers;
    }

    public void setFinishedUsers(String finishedUsers) {
        this.finishedUsers = finishedUsers;
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

    public String getFinishType() {
        return finishType;
    }

    public void setFinishType(String finishType) {
        this.finishType = finishType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DzTaskStage that = (DzTaskStage) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(taskId, that.taskId) &&
                Objects.equals(stage, that.stage) &&
                Objects.equals(startTime, that.startTime) &&
                Objects.equals(endTime, that.endTime) &&
                Objects.equals(userList, that.userList) &&
                Objects.equals(finishedUsers, that.finishedUsers) &&
                Objects.equals(stageName, that.stageName) &&
                Objects.equals(stageDisplayName, that.stageDisplayName) &&
                Objects.equals(finishType, that.finishType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, taskId, stage, startTime, endTime, userList, finishedUsers, stageName, stageDisplayName, finishType);
    }
}
