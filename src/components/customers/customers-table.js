import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EmailIcon from 'material-ui/svg-icons/Communication/email';

class CustomersTable extends Component {

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Website</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Contact</TableHeaderColumn>
            <TableHeaderColumn className="action-column"></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.props.customers.map(company =>
          <TableRow key={company.id}>
            <TableRowColumn>{company.company_name}</TableRowColumn>
            <TableRowColumn><a href={`${company.company_website}`}>{company.company_website}</a></TableRowColumn>
            <TableRowColumn>{company.contact_email}</TableRowColumn>
            <TableRowColumn>{company.contact_person}</TableRowColumn>
            <TableRowColumn className="action-column">
              <IconButton href={`/customers/${company.id}`}>
                <EditIcon />
              </IconButton>
              <IconButton>
                <EmailIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </TableRowColumn>
          </TableRow>
        )}
        </TableBody>
      </Table>
    );
  }
}

export default CustomersTable;
