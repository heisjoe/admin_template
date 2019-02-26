import React from 'react';
import {Menu, Icon} from 'antd';
import {Flex} from '../../components';
import styles from './index.module.scss';
import {withRouter} from 'react-router-dom';
import {logoutRequest} from '../../reducer/auth/actions';
import {connect} from 'react-redux';

const SubMenu = Menu.SubMenu;
const PageHeader = ({history, logoutRequest}) => (
  <Flex justify="flex-end">
    <Menu theme="dark"
          mode="horizontal"
          className={styles.pageHeader}
          onClick={({key}) => {
            if (key === 'logout') {
              logoutRequest();
            } else {
              history.push(`/${key}`)
            }
          }}>
      {/*<Menu.Item key="31">nav 1</Menu.Item>*/}
      <SubMenu key="sub1" title={<span><Icon type="user"/><span>root@root.com</span></span>}>
        <Menu.Item key="profile">账户信息</Menu.Item>
        <Menu.Item key="logout">退出</Menu.Item>
      </SubMenu>
    </Menu>
  </Flex>
);

export default withRouter(connect(null, {logoutRequest})(PageHeader));
