import React from 'react';
import {Icon} from "antd";
import Flex from "../Flex";

const EmptyContent = ({text = 'empty', icon = "inbox"}) => {
  return (
    <Flex align="center" direction="column" justify="center" style={{height: '100px'}}>
      <Icon type={icon} style={{fontSize: "24px", marginBottom: "10px"}}/>
      <div>{text}</div>
    </Flex>
  );
};

export default EmptyContent;
