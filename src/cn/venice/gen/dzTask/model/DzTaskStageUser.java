package cn.venice.gen.dzTask.model;

import java.util.Objects;

public class DzTaskStageUser {
    private Integer id;
    private Integer stageId;
    private String userId;
    private String endTime;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DzTaskStageUser that = (DzTaskStageUser) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(stageId, that.stageId) &&
                Objects.equals(userId, that.userId) &&
                Objects.equals(endTime, that.endTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, stageId, userId, endTime);
    }
}
