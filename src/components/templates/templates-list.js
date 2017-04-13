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
    this.props.fetchTemplates();
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
        {this.props.templates.map(template =>
          <TableRow key={template.id}>
            <TableRowColumn>{template.title}</TableRowColumn>
            <TableRowColumn>{template.subject}</TableRowColumn>
            <TableRowColumn className="action-column">
              <IconButton>
                <EditIcon />
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

function mapStateToProps(state) {
  return { templates: state.template.templates };
}

export default connect(mapStateToProps, { fetchTemplates })(TemplatesList);
// export default TemplatesList;
