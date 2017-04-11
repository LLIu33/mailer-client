import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'react-cookie';

import { fetchCustomers } from '../../actions/customers';
import CustomersTable from '../customers/customers-table';

class Dashboard extends Component {
  componentWillMount() {
    // Fetch inbox (conversations involving current user)
    this.props.fetchCustomers();
  }

  renderCustomerTable() {
    if (this.props.customers && this.props.customers.length > 0) {
      return (
        <CustomersTable customers={this.props.customers}></CustomersTable>
      );
    }
    return <div>You do not have any active customers.</div>;
  }

  render() {
    return (
      <div>
        { this.renderCustomerTable() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { customers: state.customer.customers };
}

export default connect(mapStateToProps, { fetchCustomers })(Dashboard);
