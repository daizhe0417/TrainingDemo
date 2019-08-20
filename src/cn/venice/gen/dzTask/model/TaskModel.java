package cn.venice.gen.dzTask.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by venice on 2017/6/25.
 */
public class TaskModel {
    private String taskType;
    private List<TaskStageModel> taskStages = new ArrayList<>();

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public void addStage(TaskStageModel taskStageModel) {
        taskStages.add(taskStageModel);
    }

    public TaskStageModel getStageByName(String stageName) {
        for (int i = 0; i < taskStages.size(); i++) {
            TaskStageModel taskStageModel = taskStages.get(i);
            if (stageName.equals(taskStageModel.getStageName())) {
                return taskStageModel;
            }
        }
        return null;
    }

    public List<TaskStageModel> getTaskStages() {
        return taskStages;
    }
}
