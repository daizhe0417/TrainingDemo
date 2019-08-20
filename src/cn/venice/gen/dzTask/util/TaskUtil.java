package cn.venice.gen.dzTask.util;

import cn.venice.gen.dzTask.model.TaskModel;
import cn.venice.gen.dzTask.model.TaskStageModel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by venice on 2017/6/25.
 */
public class TaskUtil {

    private static List<TaskModel> taskList = new ArrayList<>();

    public static String PUCHASE_TASK_TYPE_NAME = "ChefPurchaseOrder";
    public static String BILL_TASK_TYPE_NAME = "BillPublish";
    public static String NEW_RESOURCE_TASK_NAME="NewResource";
    public static String BULK_PURCHASE_TASK_NAME="BulkPurchase";
    public static String BULK_OUT_TASK_NAME="BulkOut";

    public static int SUCCESS = 1;
    public static int FAILURE = 0;
    public static int PARAM_NULL = -1;
    public static int NEED_OTHER_USER_FINISH = -2;
    public static int USER_HAS_FINISHED = -3;

    public static Map<Integer, String> msgMap = new HashMap<>();

    static {
        msgMap.put(SUCCESS, "处理成功");
        msgMap.put(FAILURE, "处理失败");
        msgMap.put(PARAM_NULL, "参数为空");
        msgMap.put(NEED_OTHER_USER_FINISH, "需要其他用户完成本阶段");
        msgMap.put(USER_HAS_FINISHED, "当前用户已完成该阶段");
    }


    public static TaskModel getTaskByTypeName(String typeName) {
        for (int i = 0; i < taskList.size(); i++) {
            TaskModel taskModel = taskList.get(i);
            if (taskModel.getTaskType().equals(typeName)) {
                return taskModel;
            }
        }
        return null;
    }

    public static List<String> getAllTaskTypes() {
        List taskTypes = new ArrayList();
        for (int i = 0; i < taskList.size(); i++) {
            TaskModel taskModel = taskList.get(i);
            taskTypes.add(taskModel.getTaskType());
        }
        return taskTypes;
    }

    public static List<TaskStageModel> getStagesByTaskType(String tasktype) {
        if (tasktype == null) {
            return null;
        }
        if (taskList == null) {
            return null;
        }
        for (int i = 0; i < taskList.size(); i++) {
            TaskModel taskModel = taskList.get(i);
            if (taskModel.getTaskType().equals(tasktype)) {
                return taskModel.getTaskStages();
            }
        }
        return null;
    }

    static {
        // 初始化采购申请流程
        TaskModel purchaseTask = new TaskModel();
        purchaseTask.setTaskType(TaskUtil.PUCHASE_TASK_TYPE_NAME);

        TaskStageModel stage0 = new TaskStageModel();

        stage0.setStageName("BuyerApproval");
        stage0.setStageDisplayName("采购员审批");
        purchaseTask.addStage(stage0);

        TaskStageModel stage1 = new TaskStageModel();
        stage1.setStageName("ModifyApply");
        stage1.setStageDisplayName("修改采购申请");
        purchaseTask.addStage(stage1);

        TaskStageModel stage2 = new TaskStageModel();
        stage2.setStageName("DetermingPrice");
        stage2.setStageDisplayName("采购员定价");
        purchaseTask.addStage(stage2);

        TaskStageModel stage3 = new TaskStageModel();
        stage3.setStageName("SupplyConfirm");
        stage3.setStageDisplayName("供应商确认");
        stage3.setFinishType("1");
        purchaseTask.addStage(stage3);

        TaskStageModel stage4 = new TaskStageModel();
        stage4.setStageName("KeeperWeighing");
        stage4.setStageDisplayName("库管称重");
        purchaseTask.addStage(stage4);

        TaskStageModel stage5 = new TaskStageModel();
        stage5.setStageName("ChefPurchaseOrder_chefApplyOut");
        stage5.setStageDisplayName("厨师长申请出库");
        purchaseTask.addStage(stage5);

        TaskStageModel stage6 = new TaskStageModel();
        stage6.setStageName("ChefPurchaseOrder_buyerApproveOutApply");
        stage6.setStageDisplayName("出库申请审核");
        purchaseTask.addStage(stage6);

        TaskStageModel stage7 = new TaskStageModel();
        stage7.setStageName("OrderReceiveConfirm");
        stage7.setStageDisplayName("厨师长收货");
        purchaseTask.addStage(stage7);

        TaskStageModel stage8 = new TaskStageModel();
        stage8.setStageName("End");
        stage8.setStageDisplayName("流程结束");
        purchaseTask.addStage(stage8);

        taskList.add(purchaseTask);

        // 初始化食谱发布流程
        TaskModel billTask = new TaskModel();
        billTask.setTaskType(TaskUtil.BILL_TASK_TYPE_NAME);

        TaskStageModel bill_stage0 = new TaskStageModel();
        bill_stage0.setStageName("ManagerApprovalBill");
        bill_stage0.setStageDisplayName("食谱审批");
        billTask.addStage(bill_stage0);

        TaskStageModel bill_stage1 = new TaskStageModel();
        bill_stage1.setStageName("ModifyBillApply");
        bill_stage1.setStageDisplayName("修改食谱");
        billTask.addStage(bill_stage1);

        TaskStageModel bill_stage2 = new TaskStageModel();
        bill_stage2.setStageName("End");
        bill_stage2.setStageDisplayName("流程结束");
        billTask.addStage(bill_stage2);

        taskList.add(billTask);

        // 初始化处理新原材料流程
        TaskModel newResTask = new TaskModel();
        newResTask.setTaskType(TaskUtil.NEW_RESOURCE_TASK_NAME);

        TaskStageModel newRes_stage0 = new TaskStageModel();
        newRes_stage0.setStageName("NewResourceConfirm");
        newRes_stage0.setStageDisplayName("新原材料确认");
        newResTask.addStage(newRes_stage0);

        TaskStageModel newRes_stage2 = new TaskStageModel();
        newRes_stage2.setStageName("End");
        newRes_stage2.setStageDisplayName("流程结束");
        newResTask.addStage(newRes_stage2);

        taskList.add(newResTask);

        // 初始化大宗采购申请流程
        TaskModel bulkPurchaseTask = new TaskModel();
        bulkPurchaseTask.setTaskType(TaskUtil.BULK_PURCHASE_TASK_NAME);

        TaskStageModel bulk_stage0 = new TaskStageModel();
        bulk_stage0.setStageName("BulkBuyerApproval");
        bulk_stage0.setStageDisplayName("大宗采购审批");
        bulkPurchaseTask.addStage(bulk_stage0);

        TaskStageModel bulk_stage1 = new TaskStageModel();
        bulk_stage1.setStageName("BulkModifyApply");
        bulk_stage1.setStageDisplayName("修改大宗采购申请");
        bulkPurchaseTask.addStage(bulk_stage1);

        TaskStageModel bulk_stage2 = new TaskStageModel();
        bulk_stage2.setStageName("BulkDetermingPrice");
        bulk_stage2.setStageDisplayName("大宗采购采购员定价");
        bulkPurchaseTask.addStage(bulk_stage2);

        TaskStageModel bulk_stage3 = new TaskStageModel();
        bulk_stage3.setStageName("BulkSupplyConfirm");
        bulk_stage3.setStageDisplayName("大宗采购供应商确认");
        bulk_stage3.setFinishType("1");
        bulkPurchaseTask.addStage(bulk_stage3);

        TaskStageModel bulk_stage4 = new TaskStageModel();
        bulk_stage4.setStageName("BulkKeeperWeighing");
        bulk_stage4.setStageDisplayName("大宗采购称重");
        bulkPurchaseTask.addStage(bulk_stage4);

        TaskStageModel bulk_stage5 = new TaskStageModel();
        bulk_stage5.setStageName("End");
        bulk_stage5.setStageDisplayName("流程结束");
        bulkPurchaseTask.addStage(bulk_stage5);

        taskList.add(bulkPurchaseTask);

        // 大宗材料出库流程
        TaskModel bulkOutTask = new TaskModel();
        bulkOutTask.setTaskType(TaskUtil.BULK_OUT_TASK_NAME);

        TaskStageModel bulkOut_stage0 = new TaskStageModel();
        bulkOut_stage0.setStageName("BulkBuyerApproveOutApply");
        bulkOut_stage0.setStageDisplayName("大宗出库申请审核");
        bulkOutTask.addStage(bulkOut_stage0);

        TaskStageModel bulkOut_stage1 = new TaskStageModel();
        bulkOut_stage1.setStageName("BulkModifyApplyOut");
        bulkOut_stage1.setStageDisplayName("修改大宗出库申请");
        bulkOutTask.addStage(bulkOut_stage1);

        TaskStageModel bulkOut_stage2 = new TaskStageModel();
        bulkOut_stage2.setStageName("BulkKeeperOutWeighing");
        bulkOut_stage2.setStageDisplayName("大宗出库称重");
        bulkOutTask.addStage(bulkOut_stage2);

        TaskStageModel bulkOut_stage3 = new TaskStageModel();
        bulkOut_stage3.setStageName("BulkReceiveConfirm");
        bulkOut_stage3.setStageDisplayName("大宗出库收货");
        bulkOutTask.addStage(bulkOut_stage3);

        TaskStageModel bulkOut_stage4 = new TaskStageModel();
        bulkOut_stage4.setStageName("End");
        bulkOut_stage4.setStageDisplayName("流程结束");
        bulkOutTask.addStage(bulkOut_stage4);

        taskList.add(bulkOutTask);
    }

}
