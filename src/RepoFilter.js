import React, { Component } from 'react';


class RepoFilter extends Component {
  render() {
    let data = []
    return (
      <div>
      <input list = 'programLangList' placeholder='All'/>
      <datalist id='programLangList'>
        <option value = 'All'/>
        <option value ='HTML'/>
        <option value ='Ruby'/>
        <option value ='JavaScript'/>
      </datalist>
      </div>
    );
  }
}

export default RepoFilter;
