import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
// import { protectedTest } from '../../actions/auth';
import { fetchCompanies } from '../../../actions/companies';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    // this.props.protectedTest();
  }

  // <Link to="/dashboard/inbox">Inbox</Link>
  // <span> | </span>
  // <Link to="/profile/edit">Edit Profile</Link>
  // <span> | </span>
  // <Link to="/billing/settings">Billing</Link>

  render() {
    return (
      <div>
        <h1>Mailer-CRM</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps, { protectedTest })(Dashboard);
