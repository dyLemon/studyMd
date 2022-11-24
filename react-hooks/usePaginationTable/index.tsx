import { useState } from 'react';
import { useIntl } from 'umi';
import { Table, Space, Button, message } from 'antd';
import { tableColumns, searchFields } from './fields';
import usePaginationTable from '@/hooks/ceshi';
import { SearchForm } from '@hai/ui';
import { EnableSelect } from '@/components/Select';
import { assignList } from './service';
const CircleConfiguration = () => {
  const { tableProps, onSearch, reload, clearSelectRows } = usePaginationTable({
    fetchData: assignList,
    rowSelection: {
      type: 'checkbox',
    },
  });

  const searchFormProps = {
    fields: searchFields,
    onSearch: (value: Record<string, string>, type?: string) => {
      if (type === 'reset') {
        clearSelectRows();
      }
      onSearch(value);
    },
  };
  const columns = [...tableColumns];

  return (
    <div>
      <SearchForm {...searchFormProps} />

      <Table
        {...tableProps}
        size="small"
        style={{ marginTop: '20px' }}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default CircleConfiguration;
