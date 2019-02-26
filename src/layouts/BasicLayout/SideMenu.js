import React from 'react';
import {Icon, Menu, Layout} from "antd";
import {Logo} from '../../components';
import {withRouter} from 'react-router-dom';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

class SideMenu extends React.PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({collapsed});
  };

  handleClick = ({key}) => {
    this.props.history.push(`/${key}`);
  };

  render() {
    const {location} = this.props;
    const path = location.pathname.substr(1);
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Logo/>
        <Menu theme="dark"
              mode="inline"
              selectedKeys={[path]}
              onClick={this.handleClick}
        >
          <Menu.Item key="dashboard">
            <Icon type="pie-chart"/>
            <span>Dashboard</span>
          </Menu.Item>
          <SubMenu key="userOperation" title={<span><Icon type="user"/><span>用户运营</span></span>}>
            <Menu.Item key="users">用户列表</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideMenu);
