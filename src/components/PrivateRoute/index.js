import React from 'react';
import {Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['auth', 'isLogin']),
});

class PrivateRoute extends React.PureComponent {
  render() {
    const {component: Component, path, isLogin} = this.props;
    return <Route path={path} render={props => {
      if (isLogin) {
        return <Component {...props} />;
      }
      return <Redirect to="/login"/>;
    }}/>
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));