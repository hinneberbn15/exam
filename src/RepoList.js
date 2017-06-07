import React, {Component} from 'react';
import RepoFilter from './RepoFilter';

export default class RepoList extends Component {
    render() {
        return (
            <div className="row">
                <h1>Brandon's Repositories</h1>
                <p>Filter repos by primary language</p>
                <RepoFilter/>
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