package cn.venice.gen.dzTask.model;

import java.util.Objects;

public class DzTask {
    private Integer taskId;
    private String taskType;
    private String createTime;
    private String description;
    private String createUser;
    private Integer currentStage;
    private String deptId;
    private Integer maxStage;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DzTask dzTask = (DzTask) o;
        return Objects.equals(taskId, dzTask.taskId) &&
                Objects.equals(taskType, dzTask.taskType) &&
                Objects.equals(createTime, dzTask.createTime) &&
                Objects.equals(description, dzTask.description) &&
                Objects.equals(createUser, dzTask.createUser) &&
                Objects.equals(currentStage, dzTask.currentStage) &&
                Objects.equals(deptId, dzTask.deptId) &&
                Objects.equals(maxStage, dzTask.maxStage);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taskId, taskType, createTime, description, createUser, currentStage, deptId, maxStage);
    }
}
