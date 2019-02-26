import React from 'react';
import {withRouter} from 'react-router-dom';
import DocumentTitle from 'react-document-title';

class Error404 extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title="404">
        <div>123</div>
      </DocumentTitle>
    );
  }
}

export default withRouter(Error404);
