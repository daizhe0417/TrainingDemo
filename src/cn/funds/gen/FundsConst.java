package cn.funds.gen;

public class FundsConst {
    public static String getBenchmarkType(String productClass) {
        String benchmarkType = "";
        switch (productClass) {
            case "股票策略":
            case "宏观策略":
            case "相对价值":
            case "复合策略":
            case "事件驱动":
            case "组合基金":
                benchmarkType = "0";
                break;
            case "管理期货":
                benchmarkType = "1";
                break;
            case "债券策略":
                benchmarkType = "2";
                break;
        }
        return benchmarkType;
    }
}
