package cn.venice.gen.dzTask.model;

import java.util.Objects;

public class DzVTaskStageUser {
    private Integer id;
    private Integer stageId;
    private String userId;
    private String endTime;
    private Integer taskId;
    private Integer stage;
    private String userName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStageId() {
        return stageId;
    }

    public void setStageId(Integer stageId) {
        this.stageId = stageId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DzVTaskStageUser that = (DzVTaskStageUser) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(stageId, that.stageId) &&
                Objects.equals(userId, that.userId) &&
                Objects.equals(endTime, that.endTime) &&
                Objects.equals(taskId, that.taskId) &&
                Objects.equals(stage, that.stage) &&
                Objects.equals(userName, that.userName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, stageId, userId, endTime, taskId, stage, userName);
    }
}
