package cn.venice.gen.python;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class PythonOperator {

    public static List<String> callPythonScript(String scriptName, String... args) {
        try {
            List<String> result = new ArrayList<>();
            String[] allArgs = new String[args.length + 2];
            allArgs[0] = "python";
            allArgs[1] = scriptName;
            for (int i = 0; i < args.length; i++) {
                allArgs[i + 2] = args[i];
            }
            Process pr = Runtime.getRuntime().exec(allArgs);
            BufferedReader in = new BufferedReader(new InputStreamReader(
                    pr.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result.add(line);
                System.out.println(line);
            }
            in.close();
            pr.waitFor();
            System.out.println("end");
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void main(String[] args) {
        callPythonScript("/Users/venice/python/src/PyDemo/JavaCallTest.py", "10");
    }
}
