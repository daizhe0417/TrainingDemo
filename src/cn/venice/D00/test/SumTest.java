package cn.venice.D00.test;

public class SumTest {
    public static int sum1(int n) {
        int r = 0;
        for (int i = 0; i <= n; i++) {
            r += i;
        }
        return r;
    }

    public static int sum2(int n) {
        int r = 0;
        r = n * (n + 1) / 2;
        return r;
    }

    public static void main(String args[]) {
        long start, end;
        start = System.currentTimeMillis();
        sum1(1000000);
        end = System.currentTimeMillis();
        System.out.println("方法一用时：" + (end - start) + "毫秒");

        start = System.currentTimeMillis();
        sum2(1000000);
        end = System.currentTimeMillis();
        System.out.println("方法二用时：" + (end - start) + "毫秒");
    }
}
