import React, {Component} from 'react';
import RepoFilter from './RepoFilter';
import {string} from 'prop-types';

class RepoList extends Component {
    state {filterChoice: ''}
    handleFilterChoice = (event) => {
        this.setState({filterChoice: event.target.value})
    }

    render() {
        return (
            <div className="row">
                <h1>User's Name Repositories</h1>
                <p>Filter repos by primary language</p>
                <RepoFilter onClick={this.handleFilterChoice}/>
                <table className="table">
                    <thead>
                        <tr>
                            <th width="500">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a>nm-exam</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a>counter</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a>hello_dojo</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
RepoList.propTypes = {
    filterChoice: string.isRequired
}

export default RepoList