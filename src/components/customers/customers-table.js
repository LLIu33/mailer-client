import React, { Component } from 'react';
import { Link } from 'react-router';

class CustomersTable extends Component {

  render() {
    console.log(this.props);
    const componentStyle = {
      backgroundColor: this.props.color || '#5BC0DE',
      color: this.props.fontColor || '#FFF',
    };

    return (
      <div className="customers-table">
        <div className="col-md-4 col-sm-6 col-xs-12 float-shadow">
          <table className="company-table striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Website</th>
                <th>Email</th>
                <th>Contact</th>
                <th className="action-column"></th>
              </tr>
            </thead>
            <tbody>
            {this.props.customers.map(company =>
              <tr key={company.id}>
                <td>{company.company_name}</td>
                <td><a href={`company.company_website`}>{company.company_website}</a></td>
                <td>{company.contact_email}</td>
                <td>{company.contact_person}</td>
                <td class="action-column">
                  <button title="Edit">mode_edit</button>
                  <button title="Send Email">email</button>
                  <button title="Delete">delete</button>
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CustomersTable;
