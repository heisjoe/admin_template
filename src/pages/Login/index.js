import React from 'react';
import styles from './index.module.scss';
import {Flex} from '../../components';
import {Form, Input, Button} from 'antd';
import {loginRequest, emailCheckRequest} from '../../reducer/auth/actions';
import {connect} from 'react-redux';

const FormItem = Form.Item;

const mapStateToProps = (state) => ({
  loading: state.getIn(['auth', 'loading']),
});

class Login extends React.PureComponent {

  handleSubmit = (e) => {
    e.preventDefault();
    const {form, loginRequest, history} = this.props;
    const onSuccess = () => history.push('/dashboard');
    form.validateFields((err, values) => {
      if (!err) {
        loginRequest({data: values, onSuccess});
      }
    });
  };

  emailCheck = (rule, value, callback) => {
    const {emailCheckRequest} = this.props;
    const onSuccess = (exists) => {
      if (exists) {
        callback();
      } else {
        callback('该账户不存在');
      }
    };
    emailCheckRequest({data: value, onSuccess});
  };

  render() {
    const {form, loading} = this.props;
    const {getFieldDecorator} = form;
    return (
      <Flex align="center"
            justify="center"
            className={styles.container}>
        <Form onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark className={styles.wrap}>
          <FormItem style={{fontSize: "32px"}}>登录</FormItem>
          <FormItem label="账号">
            {getFieldDecorator('email', {
              validateTrigger: "onBlur",
              validateFirst: true,
              rules: [
                {required: true, message: '请输入账号'},
                {type: 'email', message: '账号不正确'},
                {validator: this.emailCheck}
              ],
            })(<Input placeholder="请输入账号"/>)}
          </FormItem>
          <FormItem label="登录密码">
            {getFieldDecorator('password', {
              validateTrigger: "onBlur",
              validateFirst: true,
              rules: [
                {required: true, message: '请输入登录密码'}
              ],
            })(<Input type="password" placeholder="请输入登录密码"/>)}
          </FormItem>
          <Button type="primary" loading={loading} block htmlType="submit">立即登录</Button>
        </Form>
      </Flex>
    );
  }
}

export default connect(mapStateToProps, {loginRequest, emailCheckRequest})(Form.create()(Login));
