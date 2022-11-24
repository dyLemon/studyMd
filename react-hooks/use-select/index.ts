import { useEffect, useRef, useState } from 'react';
import useDeepComparisonEffect from '../use-deep-compare-effect/use-deep-compare-effect';
import { cloneDeep, debounce } from 'lodash';
type useSelect = {
  getRequestList: (params: Record<string, unknown>) => Promise<any>;
  options: {
    isPaging?: boolean;
    extraParams?: Record<string, unknown>;
    mode?: 'multiple' | 'tags';
    showSearch?: boolean;
  };
};

const UseSelect = ({ getRequestList, options = {} }: useSelect) => {
  //配置对象
  const {
    isPaging = false, //分页，默认不分页
    extraParams = {}, //额外请求参数
    mode, //多选或标签
    showSearch, //单选是否可以输入，
  } = options;
  // 选项数据
  const [option, setOption] = useState([]);
  //选中的数据
  const [selectValue, setSelectValue] = useState<string | unknown>(null);
  const pagingParams = useRef<Record<'pageNo' | 'pageSize', number>>({
    pageNo: 1,
    pageSize: 10,
  });
  /**
   * 请求方法 分页不分页
   */
  const fetchList = async () => {
    if (isPaging) {
      fetchPageList(true);
    } else {
      //不分页
      fetchNoPageList();
    }
  };
  useDeepComparisonEffect(() => {
    fetchList();
  }, [extraParams]);

  /**
   *  分页请求
   *  refresh 是否刷新
   */
  const fetchPageList = async (refresh: boolean) => {
    pagingParams.current.pageNo = refresh ? 1 : pagingParams.current.pageNo + 1;

    const result = await getRequestList({
      ...pagingParams.current,
      ...extraParams,
    });
    // 深拷贝原来的数据
    const deepOptions = cloneDeep(option);
    //拼接数据
    const temp = deepOptions.concat(result.data.data);
    setOption(temp || []);
  };
  //不分页请求
  const fetchNoPageList = async () => {
    const result = await getRequestList({
      pageNo: 1,
      pageSize: 100,
      ...extraParams,
    });
    setOption(result.data.data || []);
  };

  //下拉选中
  const onChange = (value: string | unknown) => {
    setSelectValue(value);
  };
  /**
   * 搜索
   */
  const onSearch = (value) => {
    console.log(value);
  };
  /**
   *
   *  下拉滚动 ,当在当前数据后面再触发
   */
  const onPopupScroll = (e: any) => {
    if (!isPaging) return; //不分页不执行下面的
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;

    if (scrollHeight - 10 < clientHeight + scrollTop) {
      fetchPageList(false);
    }
  };

  return {
    value: selectValue,
    options: option,
    selectProps: {
      mode,
      onPopupScroll,
      showSearch,
      onChange,
      onSearch: debounce(onSearch, 200),
    },
  };
};

export default UseSelect;
