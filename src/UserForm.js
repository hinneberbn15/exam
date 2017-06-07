import React, { Component } from 'react';

class UserForm extends Component {
  render() {
    return (
      <div className="row">
                <div className="large-12 columns">
                    <label>Search repositories by username</label>
                    <input type='text' placeholder ='Github Username'/><br/>
                    <button>Search</button>
                </div>
            </div>
    );
  }
}

export default UserForm;
