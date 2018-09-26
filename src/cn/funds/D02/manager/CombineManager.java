package cn.funds.D02.manager;

import cn.funds.D02.model.FundAllocationModel;
import cn.funds.D02.model.LookBackModel;
import cn.venice.util.manager.GenericManager;

import java.util.List;

public interface CombineManager extends GenericManager {

    List calcWeight(FundAllocationModel d);

    List lookBack(LookBackModel d);
}
