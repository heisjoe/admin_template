import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {PrivateRoute} from '../../components';
import Users from '../../pages/Users';
import Dashboard from '../../pages/Dashboard';
import Error404 from '../../pages/Error404';
import Profile from '../../pages/Profile';
import styles from './index.module.scss';

const PageMain = () => (
  <div className={styles.pageMain}>
    <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard}/>
      <PrivateRoute path="/users" component={Users}/>
      <PrivateRoute path="/profile" component={Profile}/>
      <Redirect from="/" exact to="/dashboard"/>
      <Route component={Error404}/>
    </Switch>
  </div>
);

export default PageMain;
