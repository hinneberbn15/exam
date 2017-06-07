import React, { Component } from 'react';

class ReturnHeader extends Component {
  render() {
      const ReturnHeaderStyle ={
          display: 'flex'
      }
    return (
        <div style={ReturnHeaderStyle}>
            <h1>Github viewer</h1>
            <button>Home</button>
        </div>
    );
  }
}

export default ReturnHeader;
