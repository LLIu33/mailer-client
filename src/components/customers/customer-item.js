import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class CustomerItem extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <form>
        <TextField
          hintText="Company title"
          errorText="This field is required"
        /><br />
        <TextField
          hintText="Company Website"
          errorText="This field is required"
        /><br />
        <TextField
          hintText="Contact Email"
          errorText="This field is required"
        /><br />
        <TextField
          hintText="Contact Person"
          errorText="This field is required"
        /><br />
      </form>
    );
  }
}

export default CustomerItem;
