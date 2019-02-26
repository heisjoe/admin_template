import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout/index';
import FullPageLayout from './layouts/FullPageLayout/index';
import Login from './pages/Login';
import {GuestRoute, PrivateRoute} from './components';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/404" component={FullPageLayout}/>
      <GuestRoute path="/login" component={Login}/>
      <PrivateRoute path="/" component={BasicLayout}/>
    </Switch>
  </BrowserRouter>
);

export default App;