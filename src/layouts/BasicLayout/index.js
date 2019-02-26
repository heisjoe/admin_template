import React from 'react';
import {Layout} from 'antd';
import SideMenu from './SideMenu';
import PageHeader from './PageHeader';
import PageMain from './PageMain';
import styles from './index.module.scss';

const {Header, Content} = Layout;

const BasicLayout = () => (
  <Layout className={styles.container}>
    <SideMenu/>
    <Layout>
      <Header>
        <PageHeader/>
      </Header>
      <Content>
        <PageMain/>
      </Content>
    </Layout>
  </Layout>
);

export default BasicLayout;
