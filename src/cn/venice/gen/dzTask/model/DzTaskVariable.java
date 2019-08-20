package cn.venice.gen.dzTask.model;

import java.util.Objects;

public class DzTaskVariable {
    private Integer id;
    private Integer taskId;
    private String variableName;
    private String varValue;

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

    public String getVariableName() {
        return variableName;
    }

    public void setVariableName(String variableName) {
        this.variableName = variableName;
    }

    public String getVarValue() {
        return varValue;
    }

    public void setVarValue(String varValue) {
        this.varValue = varValue;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DzTaskVariable that = (DzTaskVariable) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(taskId, that.taskId) &&
                Objects.equals(variableName, that.variableName) &&
                Objects.equals(varValue, that.varValue);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, taskId, variableName, varValue);
    }
}
