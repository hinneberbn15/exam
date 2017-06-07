import React, { Component } from 'react';
import UserForm from './UserForm';
import HeaderDefault from './HeaderDefault';
import RepoList from './RepoList';
import UserRepoDetails from './UserRepoDetails';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <HeaderDefault />
        <hr />
        <UserForm />
        <hr />
        <RepoList/>
        <UserRepoDetails/>
      </div>
    );
  }
}

export default App;
