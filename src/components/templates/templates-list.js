import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../../actions/templates';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class TemplatesList extends Component {
  componentWillMount() {
    // Fetch inbox (conversations involving current user)
    // this.props.fetchTemplates();
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Subject</TableHeaderColumn>
            <TableHeaderColumn className="action-column"></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>

        </TableBody>
      </Table>
    );
  }
}
// function mapStateToProps(state) {
//   return { templates: state.tempalte.templates };
// }
//
// export default connect(mapStateToProps, { fetchTemplates })(TemplatesTable);
export TemplatesList;
