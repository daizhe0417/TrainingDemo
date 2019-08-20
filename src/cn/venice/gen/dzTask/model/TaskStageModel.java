package cn.venice.gen.dzTask.model;

import java.util.List;

/**
 * Created by venice on 2017/6/25.
 */
public class TaskStageModel {
    private String stageName;
    private String stageDisplayName;
    private List<String> userList;

    private String finishType;

    public String getFinishType() {
        return finishType;
    }

    public void setFinishType(String finishType) {
        this.finishType = finishType;
    }

    public String getStageDisplayName() {
        return stageDisplayName;
    }

    public void setStageDisplayName(String stageDisplayName) {
        this.stageDisplayName = stageDisplayName;
    }

    public String getStageName() {
        return stageName;
    }

    public void setStageName(String stageName) {
        this.stageName = stageName;
    }

    public List<String> getUserList() {
        return userList;
    }

    public void setUserList(List<String> userList) {
        this.userList = userList;
    }

}
