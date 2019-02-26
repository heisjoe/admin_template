import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['auth', 'isLogin']),
});

class GuestRoute extends React.PureComponent {
  render() {
    const {component: Component, path, isLogin} = this.props;
    return <Route path={path} render={props =>
      isLogin ? (
        <Redirect to="/profile"/>
      ) : (
        <Component {...props} />
      )
    }/>
  }
}

export default withRouter(connect(mapStateToProps)(GuestRoute));