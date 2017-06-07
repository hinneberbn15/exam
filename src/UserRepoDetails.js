import React, { Component } from 'react';
import ReturnHeader from './ReturnHeader';

class UserRepoDetails extends Component {
  render() {
    return (
      <div>
        <ReturnHeader/>
        <hr/>
        <h1>Hello_dojo details</h1>
        <table className="table" >
                <thead>
                    <tr>
                        <th width="500">Stars</th>
                        <th width="500">Forks</th>
                        <th width="500">Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>32</td>
                        <td>6</td>
                        <td>JavaScript</td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
  }
}

export default UserRepoDetails;
