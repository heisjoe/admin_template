import React from 'react';
import {Table} from 'antd';
import './index.scss';

const NormalTable = ({locale, ...rest}) => {
  return (
    <Table {...rest} size="small" rowKey="id"/>
  );
};

export default NormalTable;
