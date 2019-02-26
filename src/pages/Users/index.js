import React from 'react';
import Filters from './Filters';
import DataTable from './DataTable';
import {REDUX_KEY} from './reducer/index';
import {connect} from 'react-redux';
import {changeFilters, fetchRequest} from './reducer/actions';

const mapStateToProps = (state) => ({
  filters: state.getIn([REDUX_KEY, 'filters']),
  data: state.getIn([REDUX_KEY, 'data']),
});

class Users extends React.PureComponent {
  componentDidMount() {
    this.props.fetchRequest();
  }

  render() {
    const {filters, data, changeFilters} = this.props;
    return (
      <>
        <Filters filters={filters} changeFilters={changeFilters}/>
        <DataTable data={data}
                   pagination={{
                     current: filters.get('current'),
                     pageSize: filters.get('pageSize'),
                     total: data.get('total'),
                   }}
                   onChange={(pagination) => changeFilters(pagination)}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, {changeFilters, fetchRequest})(Users);
