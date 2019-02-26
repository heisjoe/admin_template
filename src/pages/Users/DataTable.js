import React from 'react';
import {NormalTable} from '../../components';
import {Card} from "antd";
import moment from 'moment';

const DataTable = ({data, onChange, pagination}) => {
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '注册时间',
      dataIndex: 'created_at',
      render(value) {
        return moment.unix(value).format("YYYY-MM-DD HH:mm:ss");
      }
    },
  ];
  const {loading, items} = data.toJS();
  return (
    <Card size="small" bordered={false}>
      <NormalTable
        size="small"
        loading={loading}
        dataSource={items}
        columns={columns}
        pagination={{...pagination, showSizeChanger: true, showQuickJumper: true}}
        onChange={onChange}
        rowKey="id"
      />
    </Card>
  );
};

export default DataTable;
