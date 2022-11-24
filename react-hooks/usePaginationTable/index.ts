import { useEffect, useRef, useState } from 'react';

/**
 *
 * @returns antd-table分页
 * 1.请求数据 返回表格数据 dataSource
 * 2.分页，重置
 *
 */
//定义分页数据
const defaultPagination = {
  current: 1, //当前页数
  pageSize: 10, //每页条数
  total: 0,
  showSizeChanger: true, //展示pageSize切换器
  showQuickJumper: true, //快速跳转某页
  showTotal: (total: number) => `共${total}条`,
};
interface PAGINATION {
  fetchData: (params: any) => Promise<any>;
  extraParams?: Record<string, any>; //默认的参数
  pagination?: any;
  rowKey?: string;
  rowSelection?: any;
}

const usePaginationTable = (props: PAGINATION) => {
  const {
    fetchData,
    extraParams,
    pagination,
    rowKey,
    rowSelection = null,
  } = props;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  //表格选中的id
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  //表格选中的数据
  const [selectedRow, setSelectedRow] = useState<Record<string,any>[]>([]);
  //搜索变化得参数
  const otherParams = useRef({});
  const paginationConfig = useRef({
    ...defaultPagination,
    ...pagination,
  });

  const getList = async () => {
    setLoading(true);
    try {
      const { current, pageSize } = paginationConfig.current;
      //参数
      const payload = {
        ...extraParams,
        page: current,
        pageSize,
        ...otherParams.current,
      };

      const result = await fetchData(payload);
      setList(result.data);
      paginationConfig.current.total = result.total;
    } finally {
      setLoading(false);
    }
  };

  //搜索条件
  const onSearch = (params: Record<string, any>) => {
    otherParams.current = params;
    // 重置到第一页
    paginationConfig.current.page = 1;
    paginationConfig.current.pageSize = defaultPagination.pageSize;
    getList();
  };

  //页码改变
  const onChange = (page: number, pageSize: string) => {
    paginationConfig.current.current = page;
    paginationConfig.current.pageSize = pageSize;
    getList();
  };

  //重置
  const reload = () => {
    paginationConfig.current.current = 1;
    paginationConfig.current.pageSize = defaultPagination.pageSize;
    otherParams.current = {};
    getList();
  };

  //选择功能
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSelect=(selectedRowKeys: React.Key[], selectedRows: Record<string,any>[])=>{
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRow(selectedRows)
  }

  //清除选中的
  const clearSelectRows=()=>{
    setSelectedRow([])
    setSelectedRowKeys([])
  }
  useEffect(() => {
    getList();
  }, []);

  return {
    onSearch,
    tableProps: {
      dataSource: list,
      loading,
      rowKey,
      pagination: {
        ...paginationConfig.current,
        onChange: onChange,
      },
      rowSelection: rowSelection
        ? {
            ...rowSelection,
            selectedRowKeys,
            onChange:onSelect
          }
        : null,
    },
    selectedRow,
    selectedRowKeys,
    clearSelectRows,
    reload,
  };
};
export default usePaginationTable;
