import React, { Component } from 'react';
import AddForm from './AddForm';
import { toast } from 'react-toastify';

import { db } from '../../../../firebase';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (values) => {
    console.log('values are', values);
    db.addWeeklyReport(values).then((success) => {
      toast.success('Report added successfully');
      this.props.history.push('/dashboard');
    })
    .catch((error) => {
      console.log('error is', error);
      toast.error('Please check your input');
    })

  }

  render(){

    return(
      <div>
      <AddForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Add;
