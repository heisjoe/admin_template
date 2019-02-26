import React from 'react';
import {Col, Form, Input, Row, DatePicker, Card} from 'antd';

const FormItem = Form.Item;

const Filters = ({form: {getFieldDecorator}, filters}) => {
  const {id} = filters.toObject();
  return (
    <Card style={{marginBottom: "10px"}} size="small" bordered={false}>
      <Form>
        <Row gutter={{md: 8, lg: 24, xl: 48}}>
          <Col lg={6} md={8} sm={24}>
            <FormItem label="用户ID">
              {getFieldDecorator('id', {
                initialValue: id,
              })(<Input placeholder="请输入用户ID"/>)}
            </FormItem>
          </Col>
          <Col lg={6} md={8} sm={24}>
            <FormItem label="注册时间" style={{width: "100%"}}>
              {getFieldDecorator('time')(
                <DatePicker.RangePicker format="YYYY-MM-DD" placeholder={['起始时间', '结束时间']}/>
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
  )
};

export default Form.create({
  onValuesChange(props, changedValues, allValues) {
    props.changeFilters(allValues);
  }
})(Filters);
