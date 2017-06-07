import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import repos from './repoData.json'

ReactDOM.render(<App  repos ={repos}/>, document.getElementById('root'));
